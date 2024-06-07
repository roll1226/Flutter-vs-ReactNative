export class User {
  private id: string;
  private profileImageUrl: string;

  constructor(id: string, profileImageUrl: string) {
    this.id = id;
    this.profileImageUrl = profileImageUrl;
  }
}
