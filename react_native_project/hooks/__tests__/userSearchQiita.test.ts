import { useSearchQiita } from "@/hooks/useSearchQiita";
import { Article } from "@/models/article";
import { QiitaUtil } from "@/utils/QiitaUtil";
import { act, renderHook, waitFor } from "@testing-library/react-native";

jest.mock("@/utils/QiitaUtil");

describe("useSearchQiita", () => {
  it("should update articles when searchQiitaHandler is called", async () => {
    // Arrange
    const mockArticles: Article[] = [
      {
        title: "Sample Article 1",
        user: { id: "user1", profileImageUrl: "https://example.com" },
        likesCount: 5,
        tags: ["technology"],
        created_at: new Date(),
        url: "https://example.com/mock-article-1",
      },
      {
        title: "Sample Article 2",
        user: { id: "user2", profileImageUrl: "https://example.com" },
        likesCount: 10,
        tags: ["technology"],
        created_at: new Date(),
        url: "https://example.com/mock-article-2",
      },
    ];

    const mockTitle = "Sample Article 1";

    const mockSearchQiita = jest.fn().mockResolvedValue(mockArticles);
    (QiitaUtil as jest.Mock).mockImplementation(() => ({
      searchQiita: mockSearchQiita,
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
      expect(mockSearchQiita).toHaveBeenCalledWith(mockTitle);
      expect(result.current.articles).toHaveLength(mockArticles.length);
      expect(result.current.articles[0].title).toBe(mockArticles[0].title);
      expect(result.current.articles[1].title).toBe(mockArticles[1].title);
    });
  });
});
