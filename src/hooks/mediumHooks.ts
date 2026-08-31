export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
}

const MEDIUM_FEED_URL = "https://medium.com/feed/@amkemp";

export const getMediumArticles = async (limit?: number): Promise<MediumArticle[]> => {
  try {
    const res = await fetch(MEDIUM_FEED_URL);
    if (!res.ok) return [];

    const xml = await res.text();
    const items = xml.split("<item>").slice(1);

    const articles = items
      .map((item) => ({
        title: item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ?? "",
        link: item.match(/<link>(.*?)<\/link>/)?.[1] ?? "",
        pubDate: item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? "",
      }))
      .filter((article) => article.title && article.link);

    return limit ? articles.slice(0, limit) : articles;
  } catch {
    return [];
  }
};
