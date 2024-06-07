export class QiitaUtil {
  private apiUrl: string;
  private token: string;
  private prePage: number = 10;

  constructor() {
    this.apiUrl = "https://qiita.com/api/v2/items";
    this.token = "";
  }
}
