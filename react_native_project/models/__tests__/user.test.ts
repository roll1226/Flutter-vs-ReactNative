import { UserResponse } from "@/utils/QiitaUtil";
import { User } from "../user";

const mockUserResponse: UserResponse = {
  id: "testUser",
  profile_image_url: "https://example.com",
  description: "",
  facebook_id: "",
  followees_count: 0,
  followers_count: 0,
  github_login_name: "",
  items_count: 0,
  linkedin_id: "",
  location: "",
  name: "",
  organization: "",
  permanent_id: 0,
  team_only: false,
  twitter_screen_name: "",
  website_url: "",
};

describe("User", () => {
  it("should create an User object from UserResponse", () => {
    const expectedId = mockUserResponse.id;
    const expectedProfileImageUrl = mockUserResponse.profile_image_url;

    const user = new User(mockUserResponse);

    expect(user.id).toBe(expectedId);
    expect(user.profileImageUrl).toBe(expectedProfileImageUrl);
  });
});
