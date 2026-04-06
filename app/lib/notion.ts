const NOTION_API_VERSION = "2022-06-28";

type RichText = {
  plain_text?: string;
};

type Icon =
  | {
      type: "emoji";
      emoji?: string;
    }
  | {
      type: "external";
      external?: {
        url?: string;
      };
    }
  | {
      type: "file";
      file?: {
        url?: string;
      };
    };

type ParentRef = {
  type?: string;
};

type PageProperty = {
  type: string;
  title?: RichText[];
  rich_text?: RichText[];
};

type SearchPageResult = {
  object: "page";
  id: string;
  url: string;
  last_edited_time?: string;
  icon?: Icon;
  parent?: ParentRef;
  properties?: Record<string, PageProperty>;
};

type SearchDatabaseResult = {
  object: "database";
  id: string;
  url: string;
  last_edited_time?: string;
  icon?: Icon;
  parent?: ParentRef;
  title?: RichText[];
  description?: RichText[];
};

type SearchResult = SearchPageResult | SearchDatabaseResult;

type SearchResponse = {
  results?: SearchResult[];
};

type BlockResult = {
  id: string;
  type: string;
  has_children?: boolean;
  paragraph?: { rich_text?: RichText[] };
  heading_1?: { rich_text?: RichText[] };
  heading_2?: { rich_text?: RichText[] };
  heading_3?: { rich_text?: RichText[] };
  bulleted_list_item?: { rich_text?: RichText[] };
  numbered_list_item?: { rich_text?: RichText[] };
  to_do?: { rich_text?: RichText[]; checked?: boolean };
  quote?: { rich_text?: RichText[] };
  callout?: { rich_text?: RichText[]; icon?: Icon };
  toggle?: { rich_text?: RichText[] };
  child_page?: { title?: string };
  child_database?: { title?: string };
  divider?: Record<string, never>;
};

type BlockChildrenResponse = {
  results?: BlockResult[];
};

type DatabaseProperty = {
  type: string;
  title?: RichText[];
  rich_text?: RichText[];
  select?: { name?: string };
  status?: { name?: string };
  multi_select?: Array<{ name?: string }>;
  people?: Array<{ name?: string }>;
  date?: { start?: string };
};

type DatabaseQueryPage = {
  id: string;
  url?: string;
  properties?: Record<string, DatabaseProperty>;
};

type DatabaseQueryResponse = {
  results?: DatabaseQueryPage[];
};

type DatabaseRetrieveResponse = {
  id: string;
  title?: RichText[];
};

export type NotionEntry = {
  id: string;
  object: "page" | "database";
  title: string;
  url: string;
  updated: string;
  icon: string;
  parentLabel: string;
};

export type NotionPreviewBlock = {
  id: string;
  type:
    | "heading_1"
    | "heading_2"
    | "heading_3"
    | "paragraph"
    | "bulleted_list_item"
    | "numbered_list_item"
    | "to_do"
    | "quote"
    | "callout"
    | "toggle"
    | "child_page"
    | "child_database"
    | "database_row"
    | "divider"
    | "unsupported";
  text: string;
  checked?: boolean;
  icon?: string;
  metadata?: string[];
  url?: string;
};

export type NotionPagePreview = {
  blocks: NotionPreviewBlock[];
};

function getNotionEnv() {
  const token = process.env.NOTION_TOKEN?.trim();

  return {
    token,
    isConfigured: Boolean(token),
  };
}

export function getNotionConfig() {
  return getNotionEnv();
}

function getText(items?: RichText[]) {
  return (items ?? []).map((item) => item.plain_text ?? "").join("").trim();
}

function summarizeDatabaseProperty(property: DatabaseProperty) {
  switch (property.type) {
    case "title":
      return getText(property.title);
    case "rich_text":
      return getText(property.rich_text);
    case "select":
      return property.select?.name?.trim() ?? "";
    case "status":
      return property.status?.name?.trim() ?? "";
    case "multi_select":
      return (property.multi_select ?? [])
        .map((item: { name?: string }) => item.name?.trim() ?? "")
        .filter(Boolean)
        .join(", ");
    case "people":
      return (property.people ?? [])
        .map((person: { name?: string }) => person.name?.trim() ?? "")
        .filter(Boolean)
        .join(", ");
    case "date":
      return property.date?.start?.trim() ?? "";
    default:
      return "";
  }
}

function getDatabaseRowTitle(properties?: Record<string, DatabaseProperty>) {
  for (const property of Object.values(properties ?? {})) {
    if (property.type === "title") {
      const title = summarizeDatabaseProperty(property);
      if (title) {
        return title;
      }
    }
  }

  return "Untitled row";
}

function getDatabaseRowMetadata(properties?: Record<string, DatabaseProperty>) {
  return Object.entries(properties ?? {})
    .map(([name, property]) => {
      const value = summarizeDatabaseProperty(property);
      if (!value || property.type === "title") {
        return "";
      }

      return `${name}: ${value}`;
    })
    .filter(Boolean)
    .slice(0, 5);
}

function formatUpdatedDate(value?: string) {
  if (!value) {
    return "Unknown update";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Unknown update";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function getIconLabel(icon?: Icon) {
  if (icon?.type === "emoji" && icon.emoji) {
    return icon.emoji;
  }

  return "N";
}

function getPageTitle(page: SearchPageResult) {
  const properties = page.properties ?? {};

  for (const property of Object.values(properties)) {
    if (property.type === "title" && property.title?.length) {
      const title = getText(property.title);
      if (title) {
        return title;
      }
    }
  }

  return "Untitled page";
}

function getDatabaseTitle(database: SearchDatabaseResult) {
  const title = getText(database.title);
  return title || "Untitled database";
}

function parentLabel(parent?: ParentRef) {
  switch (parent?.type) {
    case "workspace":
      return "workspace";
    case "page_id":
      return "child page";
    case "database_id":
      return "database";
    case "block_id":
      return "block";
    default:
      return "notion";
  }
}

function mapSearchResult(result: SearchResult): NotionEntry {
  return {
    id: result.id,
    object: result.object,
    title: result.object === "page" ? getPageTitle(result) : getDatabaseTitle(result),
    url: result.url,
    updated: formatUpdatedDate(result.last_edited_time),
    icon: getIconLabel(result.icon),
    parentLabel: parentLabel(result.parent),
  };
}

async function notionFetch(path: string, init?: RequestInit) {
  const { token } = getNotionEnv();

  if (!token) {
    return null;
  }

  return fetch(`https://api.notion.com/v1${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Notion-Version": NOTION_API_VERSION,
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });
}

export async function searchNotionEntries(query?: string) {
  const response = await notionFetch("/search", {
    method: "POST",
    body: JSON.stringify({
      query: query?.trim() || undefined,
      page_size: 50,
      sort: {
        direction: "descending",
        timestamp: "last_edited_time",
      },
    }),
  });

  if (!response) {
    return { entries: [] as NotionEntry[], invalidToken: false };
  }

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      return { entries: [] as NotionEntry[], invalidToken: true };
    }

    return { entries: [] as NotionEntry[], invalidToken: false };
  }

  const data = (await response.json()) as SearchResponse;
  const entries = (data.results ?? [])
    .filter((result) => result.object === "page" || result.object === "database")
    .map(mapSearchResult)
    .sort((a, b) => a.title.localeCompare(b.title));

  return { entries, invalidToken: false };
}

async function getDatabasePreviewBlocks(databaseId: string) {
  const [databaseResponse, queryResponse] = await Promise.all([
    notionFetch(`/databases/${databaseId}`, { method: "GET" }),
    notionFetch(`/databases/${databaseId}/query`, {
      method: "POST",
      body: JSON.stringify({
        page_size: 12,
      }),
    }),
  ]);

  if (!databaseResponse || !queryResponse) {
    return [
      {
        id: `${databaseId}-error`,
        type: "unsupported" as const,
        text: "Database preview could not be loaded.",
      },
    ];
  }

  if (!databaseResponse.ok || !queryResponse.ok) {
    return [
      {
        id: `${databaseId}-error`,
        type: "unsupported" as const,
        text: `Database preview unavailable (${databaseResponse.status}/${queryResponse.status}). Open in Notion for the full table.`,
      },
    ];
  }

  const database = (await databaseResponse.json()) as DatabaseRetrieveResponse;
  const query = (await queryResponse.json()) as DatabaseQueryResponse;
  const title = getText(database.title) || "Untitled";

  const rows: NotionPreviewBlock[] = (query.results ?? []).map((row) => ({
    id: row.id,
    type: "database_row",
    text: getDatabaseRowTitle(row.properties),
    metadata: getDatabaseRowMetadata(row.properties),
    url: row.url || `https://www.notion.so/${row.id.replaceAll("-", "")}`,
  }));

  return [
    {
      id: `${databaseId}-title`,
      type: "child_database" as const,
      text: title,
    },
    ...rows,
  ];
}

function mapBlock(result: BlockResult): NotionPreviewBlock {
  switch (result.type) {
    case "heading_1":
    case "heading_2":
    case "heading_3":
    case "paragraph":
    case "bulleted_list_item":
    case "numbered_list_item":
    case "quote":
    case "toggle":
      return {
        id: result.id,
        type: result.type,
        text: getText(result[result.type]?.rich_text),
      };
    case "to_do":
      return {
        id: result.id,
        type: "to_do",
        text: getText(result.to_do?.rich_text),
        checked: result.to_do?.checked,
      };
    case "callout":
      return {
        id: result.id,
        type: "callout",
        text: getText(result.callout?.rich_text),
        icon: getIconLabel(result.callout?.icon),
      };
    case "child_page":
      return {
        id: result.id,
        type: "child_page",
        text: result.child_page?.title?.trim() || "Untitled child page",
      };
    case "child_database":
      return {
        id: result.id,
        type: "child_database",
        text: result.child_database?.title?.trim() || "Untitled child database",
      };
    case "divider":
      return {
        id: result.id,
        type: "divider",
        text: "",
      };
    default:
      return {
        id: result.id,
        type: "unsupported",
        text: result.type.replaceAll("_", " "),
      };
  }
}

export async function getNotionPagePreview(pageId: string) {
  const response = await notionFetch(`/blocks/${pageId}/children?page_size=100`, {
    method: "GET",
  });

  if (!response) {
    return { preview: { blocks: [] as NotionPreviewBlock[] }, invalidToken: false };
  }

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      return {
        preview: { blocks: [] as NotionPreviewBlock[] },
        invalidToken: true,
      };
    }

    return {
      preview: { blocks: [] as NotionPreviewBlock[] },
      invalidToken: false,
    };
  }

  const data = (await response.json()) as BlockChildrenResponse;
  const blocks = await Promise.all(
    (data.results ?? []).map(async (result) => {
      if (result.type !== "child_database") {
        return [mapBlock(result)];
      }

      const databaseBlocks = await getDatabasePreviewBlocks(result.id);
      return databaseBlocks;
    })
  );

  return {
    preview: {
      blocks: blocks.flat(),
    },
    invalidToken: false,
  };
}
