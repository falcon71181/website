export type Repo = {
  name: string,
  repository: string,
  summary: string,
}

export const repos: Repo[] = [
  {
    name: "Anime-API",
    repository: "falcon71181/Anime-API",
    summary: "Unoffical API of pirated anime streaming websites.",
  },
  {
    name: "LiveXpanse",
    repository: "falcon71181/LiveXpanse",
    summary: "Live streaming platform along with community forum.",
  },
  {
    name: "Post-It",
    repository: "falcon71181/Post-It",
    summary: "Interactive online platform that facilitates engaging discussions and community interaction.",
  },
  {
    name: "rust-paper",
    repository: "falcon71181/rust-paper",
    summary: "Wallpaper manager made using RUST ( https://wallhaven.cc/ ) for Linux only.",
  },
  {
    name: "hianime-data-fetcher",
    repository: "falcon71181/hianime-data-fetcher",
    summary: "fetch all data from ( https://hianime.to ) using web scraping and store in postgreSQL.",
  },
  {
    name: "ToDo-Rust",
    repository: "falcon71181/ToDo-rust",
    summary: "A Blazingly fast CLI program to manage todo list.",
  },
]
