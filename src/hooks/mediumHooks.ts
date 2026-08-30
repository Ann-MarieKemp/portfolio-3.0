export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
}

const MEDIUM_FEED_URL = "https://medium.com/feed/@amkemp";
const MAX_ARTICLES = 5;

export const getMediumArticles = async (): Promise<MediumArticle[]> => {
  try {
    const res = await fetch(MEDIUM_FEED_URL);
    if (!res.ok) return [];

    const xml = await res.text();
    const items = xml.split("<item>").slice(1);

    return items
      .map((item) => ({
        title: item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ?? "",
        link: item.match(/<link>(.*?)<\/link>/)?.[1] ?? "",
        pubDate: item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? "",
      }))
      .filter((article) => article.title && article.link)
      .slice(0, MAX_ARTICLES);
  } catch {
    return [];
  }
};
