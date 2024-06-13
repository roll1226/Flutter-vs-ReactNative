import { UserResponse } from "@/utils/QiitaUtil";

export class User {
  id: string;
  profileImageUrl: string;

  constructor(user: UserResponse) {
    this.id = user.id;
    this.profileImageUrl = user.profile_image_url;
  }
}
