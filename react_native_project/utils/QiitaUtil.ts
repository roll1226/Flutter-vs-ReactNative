import { ENV } from "@/ENV";
import { Article } from "@/entities/article";

export class QiitaUtil {
  private apiUrl: string;
  private token: string;
  private perPage: number = 10;

  constructor() {
    this.apiUrl = "https://qiita.com/api/v2/items";
    this.token = ENV.QIITA_ACCESS_TOKEN;
  }

  searchQiita = async (title: string): Promise<Article[]> => {
    const query = `?per_page=${this.perPage}&query=title:${title}`;
    const url = `${this.apiUrl}${query}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };
}
