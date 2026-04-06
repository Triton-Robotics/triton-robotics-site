import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

import { authOptions } from "@/app/lib/auth";
import {
  getNotionConfig,
  getNotionPagePreview,
  type NotionPreviewBlock,
  searchNotionEntries,
} from "@/app/lib/notion";
import { MemberPortalShell } from "../MemberPortalShell";

function NotionPreview({
  blocks,
}: {
  blocks: NotionPreviewBlock[];
}) {
  if (blocks.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/15 bg-[#234468]/50 px-6 py-10 text-center text-[#c7d8e8]">
        No preview content is available for this page yet.
      </div>
    );
  }

  const renderBlock = (block: NotionPreviewBlock) => {
    switch (block.type) {
      case "heading_1":
        return <h1 className="text-3xl font-semibold text-[#17324c]">{block.text}</h1>;
      case "heading_2":
        return <h2 className="text-2xl font-semibold text-[#17324c]">{block.text}</h2>;
      case "heading_3":
        return <h3 className="text-xl font-semibold text-[#17324c]">{block.text}</h3>;
      case "paragraph":
        return <p className="whitespace-pre-wrap text-[15px] leading-7 text-[#27415a]">{block.text}</p>;
      case "bulleted_list_item":
        return (
          <div className="flex items-start gap-3 text-[15px] leading-7 text-[#27415a]">
            <span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[#2b5278]" />
            <p className="whitespace-pre-wrap">{block.text}</p>
          </div>
        );
      case "numbered_list_item":
        return (
          <div className="flex items-start gap-3 text-[15px] leading-7 text-[#27415a]">
            <span className="min-w-[1.5rem] font-semibold text-[#2b5278]">#</span>
            <p className="whitespace-pre-wrap">{block.text}</p>
          </div>
        );
      case "to_do":
        return (
          <div className="flex items-start gap-3 text-[15px] leading-7 text-[#27415a]">
            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#88a3be] bg-[#f4f8fb] text-xs text-[#2b5278]">
              {block.checked ? "x" : ""}
            </span>
            <p className={`whitespace-pre-wrap ${block.checked ? "text-[#6c8297] line-through" : ""}`}>
              {block.text}
            </p>
          </div>
        );
      case "quote":
        return (
          <blockquote className="border-l-4 border-[#f3c35a] pl-4 text-[15px] italic leading-7 text-[#35526e]">
            {block.text}
          </blockquote>
        );
      case "callout":
        return (
          <div className="flex items-start gap-3 rounded-2xl border border-[#d6e4f1] bg-[#f7fafc] px-4 py-4">
            <span className="text-lg">{block.icon ?? "N"}</span>
            <p className="whitespace-pre-wrap text-[15px] leading-7 text-[#27415a]">{block.text}</p>
          </div>
        );
      case "toggle":
        return (
          <details className="rounded-2xl border border-[#d6e4f1] bg-[#f7fafc] px-4 py-3 text-[#27415a]">
            <summary className="cursor-pointer text-sm font-semibold text-[#17324c]">{block.text || "Toggle"}</summary>
          </details>
        );
      case "child_page":
      case "child_database":
        return (
          <div className="rounded-2xl border border-[#d6e4f1] bg-[#f7fafc] px-4 py-4">
            <p className="text-xs uppercase tracking-[0.16em] text-[#70879f]">
              {block.type === "child_page" ? "Child page" : "Database"}
            </p>
            <p className="mt-1 text-base font-semibold text-[#17324c]">{block.text}</p>
          </div>
        );
      case "database_row":
        return (
          <div className="rounded-2xl border border-[#d6e4f1] bg-[#fdfefe] px-4 py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-base font-semibold text-[#17324c]">{block.text}</p>
                {block.metadata && block.metadata.length > 0 ? (
                  <p className="mt-2 text-sm leading-6 text-[#5b738b]">{block.metadata.join(" · ")}</p>
                ) : null}
              </div>
              {block.url ? (
                <Link
                  href={block.url}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 rounded-lg border border-[#c9d8e6] px-3 py-2 text-sm font-semibold text-[#2b5278] transition hover:bg-[#eef4f8]"
                >
                  Open
                </Link>
              ) : null}
            </div>
          </div>
        );
      case "divider":
        return <hr className="border-[#d6e4f1]" />;
      default:
        return (
          <div className="rounded-2xl border border-dashed border-[#d6e4f1] bg-[#f7fafc] px-4 py-4 text-sm text-[#5b738b]">
            Unsupported block: {block.text || block.type}
          </div>
        );
    }
  };

  return <div className="space-y-4">{blocks.map((block) => <div key={block.id}>{renderBlock(block)}</div>)}</div>;
}

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams?: { pageId?: string; q?: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/member-login");
  }

  const notionConfigured = getNotionConfig().isConfigured;
  const query = searchParams?.q?.trim() ?? "";
  const { entries, invalidToken } = notionConfigured
    ? await searchNotionEntries(query)
    : { entries: [], invalidToken: false };

  const selectedEntry =
    entries.find((entry) => entry.id === searchParams?.pageId) ?? entries[0];
  const selectedPreview =
    notionConfigured && selectedEntry?.object === "page"
      ? await getNotionPagePreview(selectedEntry.id)
      : { preview: { blocks: [] }, invalidToken: false };
  const showInvalidToken = invalidToken || selectedPreview.invalidToken;

  return (
    <MemberPortalShell>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2b5278] text-[#f3c35a]">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
            <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5H11l2 2h3.5A2.5 2.5 0 0 1 19 9.5v7A2.5 2.5 0 0 1 16.5 19h-9A2.5 2.5 0 0 1 5 16.5v-9Z" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-white">Notion Browser</h2>
      </div>

      <div className="mb-6 rounded-2xl border border-white/10 bg-[#284d72]/70 p-5">
        <p className="text-base font-semibold text-white">Team resources through the site</p>
        <p className="mt-1 text-sm text-[#9eb4ca]">
          Browse pages and databases shared with the Triton Robotics internal integration.
        </p>
      </div>

      {showInvalidToken && (
        <div className="mb-6 rounded-2xl border border-amber-400/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
          The Notion token is invalid or no longer has access. Update `NOTION_TOKEN` and re-share the relevant pages with the integration.
        </div>
      )}

      {!notionConfigured ? (
        <div className="rounded-2xl border border-dashed border-white/15 bg-[#284d72]/60 px-6 py-10 text-center text-[#c7d8e8]">
          Add `NOTION_TOKEN` to `.env.local` to enable the Notion browser.
        </div>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[340px_minmax(0,1fr)]">
          <aside className="rounded-2xl border border-white/10 bg-[#284d72]/80 p-4">
            <form className="mb-4 flex gap-2" action="/member-home/resources">
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Search shared Notion..."
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#234468] px-3 py-2 text-sm text-white placeholder:text-[#86a0ba] outline-none"
              />
              <button
                type="submit"
                className="rounded-xl bg-[#f3c35a] px-4 py-2 text-sm font-semibold text-[#1f3651]"
              >
                Search
              </button>
            </form>

            <div className="max-h-[900px] space-y-2 overflow-y-auto pr-1">
              {entries.length === 0 ? (
                <div className="rounded-xl border border-dashed border-white/10 px-4 py-5 text-sm text-[#9eb4ca]">
                  No shared Notion pages or databases were found.
                </div>
              ) : (
                entries.map((entry) => {
                  const href = query
                    ? `/member-home/resources?pageId=${encodeURIComponent(entry.id)}&q=${encodeURIComponent(query)}`
                    : `/member-home/resources?pageId=${encodeURIComponent(entry.id)}`;

                  const active = selectedEntry?.id === entry.id;

                  return (
                    <Link
                      key={entry.id}
                      href={href}
                      className={`block rounded-xl border px-3 py-3 transition ${
                        active
                          ? "border-[#f3c35a]/40 bg-[#315377] shadow-[0_0_0_1px_rgba(243,195,90,0.18)]"
                          : "border-transparent bg-[#234468]/70 hover:border-white/10 hover:bg-[#2a5077]"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1f3f61] text-lg text-[#f3c35a]">
                          {entry.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-white">{entry.title}</p>
                          <div className="mt-1 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.14em] text-[#8fa8c1]">
                            <span>{entry.object}</span>
                            <span>{entry.parentLabel}</span>
                          </div>
                          <p className="mt-2 text-xs text-[#9eb4ca]">Updated {entry.updated}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </aside>

          <section className="min-w-0 rounded-2xl border border-white/10 bg-[#284d72]/85 p-6">
            {!selectedEntry ? (
              <div className="rounded-2xl border border-dashed border-white/15 bg-[#234468]/50 px-6 py-10 text-center text-[#c7d8e8]">
                Choose a Notion page or database from the sidebar.
              </div>
            ) : (
              <>
                <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#234468] text-xl text-[#f3c35a]">
                        {selectedEntry.icon}
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#8fa8c1]">
                          {selectedEntry.object} · {selectedEntry.parentLabel}
                        </p>
                        <h3 className="truncate text-2xl font-semibold text-white">{selectedEntry.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-[#9eb4ca]">Last edited {selectedEntry.updated}</p>
                  </div>

                  <Link
                    href={selectedEntry.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center rounded-xl bg-[#f3c35a] px-4 py-3 text-sm font-semibold text-[#1f3651] transition hover:bg-[#f6cf77]"
                  >
                    Open In Notion
                  </Link>
                </div>

                {selectedEntry.object === "database" ? (
                  <div className="rounded-2xl border border-dashed border-white/15 bg-[#234468]/50 px-6 py-10 text-center text-[#c7d8e8]">
                    Database preview is available when the database appears as content inside a page. Open it in Notion for the full table, board, or gallery view.
                  </div>
                ) : (
                  <div className="rounded-2xl border border-white/10 bg-white p-6 md:p-8">
                    <NotionPreview blocks={selectedPreview.preview.blocks} />
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      )}
    </MemberPortalShell>
  );
}
