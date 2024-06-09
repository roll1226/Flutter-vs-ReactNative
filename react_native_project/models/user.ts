export class User {
  id: string;
  profileImageUrl: string;

  constructor(id: string, profileImageUrl: string) {
    this.id = id;
    this.profileImageUrl = profileImageUrl;
  }
}
