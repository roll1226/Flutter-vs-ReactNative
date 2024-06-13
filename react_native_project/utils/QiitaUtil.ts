import { ENV } from "@/ENV";

export type UserResponse = {
  description: string;
  facebook_id: string;
  followees_count: number;
  followers_count: number;
  github_login_name: string;
  id: string;
  items_count: number;
  linkedin_id: string;
  location: string;
  name: string;
  organization: string;
  permanent_id: number;
  profile_image_url: string;
  team_only: boolean;
  twitter_screen_name: string;
  website_url: string;
};

export type ArticleResponse = {
  rendered_body: string;
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: {
    created_at: string;
    description: string;
    name: string;
    private: boolean;
    updated_at: string;
    url_name: string;
  };
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  tags: [
    {
      name: string;
      versions: string[];
    }
  ];
  title: string;
  updated_at: string;
  url: string;
  user: UserResponse;
  page_views_count: number;
  team_membership: {
    name: string;
  };
};

export class QiitaUtil {
  private apiUrl: string;
  private token: string;
  private perPage: number = 10;

  constructor() {
    this.apiUrl = "https://qiita.com/api/v2/items";
    this.token = ENV.QIITA_ACCESS_TOKEN;
  }

  searchQiita = async (title: string): Promise<ArticleResponse[]> => {
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
      console.log(data);

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
