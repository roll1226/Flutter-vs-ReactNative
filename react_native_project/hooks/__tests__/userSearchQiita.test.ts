import { useSearchQiita } from "@/hooks/useSearchQiita";
import { Article } from "@/models/article";
import { act, renderHook, waitFor } from "@testing-library/react-native";

describe("useSearchQiita", () => {
  it("should update articles when searchQiitaHandler is called", async () => {
    // Arrange
    const mockArticles: Article[] = [
      {
        title: "React NativeでMetroのキャッシュをクリアする方法",
        user: { id: "user1", profileImageUrl: "https://example.com" },
        likesCount: 5,
        tags: ["technology"],
        created_at: new Date(),
        url: "https://example.com/mock-article-1",
      },
      {
        title: "React NativeでHealthKitとHealth Connectと連携する",
        user: { id: "user2", profileImageUrl: "https://example.com" },
        likesCount: 10,
        tags: ["technology"],
        created_at: new Date(),
        url: "https://example.com/mock-article-2",
      },
      {
        title: "Mock Article 2",
        user: { id: "user2", profileImageUrl: "https://example.com" },
        likesCount: 10,
        tags: ["technology"],
        created_at: new Date(),
        url: "https://example.com/mock-article-2",
      },
      {
        title: "Mock Article 2",
        user: { id: "user2", profileImageUrl: "https://example.com" },
        likesCount: 10,
        tags: ["technology"],
        created_at: new Date(),
        url: "https://example.com/mock-article-2",
      },
      {
        title: "Mock Article 2",
        user: { id: "user2", profileImageUrl: "https://example.com" },
        likesCount: 10,
        tags: ["technology"],
        created_at: new Date(),
        url: "https://example.com/mock-article-2",
      },
      {
        title: "Mock Article 2",
        user: { id: "user2", profileImageUrl: "https://example.com" },
        likesCount: 10,
        tags: ["technology"],
        created_at: new Date(),
        url: "https://example.com/mock-article-2",
      },
      {
        title: "Mock Article 2",
        user: { id: "user2", profileImageUrl: "https://example.com" },
        likesCount: 10,
        tags: ["technology"],
        created_at: new Date(),
        url: "https://example.com/mock-article-2",
      },
      {
        title: "Mock Article 2",
        user: { id: "user2", profileImageUrl: "https://example.com" },
        likesCount: 10,
        tags: ["technology"],
        created_at: new Date(),
        url: "https://example.com/mock-article-2",
      },
      {
        title: "Mock Article 2",
        user: { id: "user2", profileImageUrl: "https://example.com" },
        likesCount: 10,
        tags: ["technology"],
        created_at: new Date(),
        url: "https://example.com/mock-article-2",
      },
      {
        title: "Mock Article 2",
        user: { id: "user2", profileImageUrl: "https://example.com" },
        likesCount: 10,
        tags: ["technology"],
        created_at: new Date(),
        url: "https://example.com/mock-article-2",
      },
    ];

    const mockTitle = "react native";

    jest.mock("@/utils/QiitaUtil", () => ({
      QiitaUtil: jest.fn().mockImplementation(() => ({
        searchQiita: jest.fn().mockResolvedValue(mockArticles),
      })),
    }));

    // Act
    const { result } = renderHook(() => useSearchQiita());

    act(() => {
      result.current.setTitle(mockTitle);
    });

    await act(async () => {
      await result.current.searchQiitaHandler(mockTitle);
    });

    // Assert
    await waitFor(() => {
      expect(result.current.articles).toHaveLength(mockArticles.length);
      expect(result.current.articles[0].title).toBe(mockArticles[0].title);
      expect(result.current.articles[1].title).toBe(mockArticles[1].title);
    });
  });
});
