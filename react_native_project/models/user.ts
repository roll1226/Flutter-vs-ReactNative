export class User {
  id: string;
  profile_image_url: string;

  constructor(id: string, profile_image_url: string) {
    this.id = id;
    this.profile_image_url = profile_image_url;
  }
}
