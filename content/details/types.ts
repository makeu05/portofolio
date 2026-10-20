export type StatusState = "tested" | "exists" | "building" | "planned";

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; label: string; code: string }
  | { type: "dl"; rows: { term: string; text: string }[] }
  | { type: "note"; text: string }
  | { type: "link"; label: string; href: string }
  | {
      type: "status";
      groups: { state: StatusState; title: string; items: string[] }[];
    };

export type DetailSection = {
  id: string;
  heading: string;
  blocks: Block[];
};

export type ProjectDetail = {
  kicker: string;
  title: string;
  lead: string;
  metaDescription: string;
  facts: { term: string; value: string }[];
  sections: DetailSection[];
};
