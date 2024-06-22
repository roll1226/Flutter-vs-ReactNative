import 'package:flutter_project/models/article.dart';
import 'package:flutter_project/models/user.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('Article', () {
    test('Articleインスタンスの作成', () {
      const title = 'Sample Article';
      final user = User(
          id: 'testUser', profileImageUrl: 'https://example.com/profile.jpg');
      const likesCount = 20;
      const tags = [
        "flutter",
        "dart",
      ];
      final createdAt = DateTime.now();
      const url = "https://example.com/sample-article";
      final article = Article(
          title: title,
          tags: tags,
          likesCount: likesCount,
          user: user,
          createdAt: createdAt,
          url: url);

      expect(article.title, title);
      expect(article.user, user);
      expect(article.likesCount, likesCount);
      expect(article.tags, tags);
      expect(article.createdAt, createdAt);
      expect(article.url, url);
    });

    test('Article.fromJsonメソッド', () {
      final json = {
        'title': 'Sample Article',
        'user': {
          'id': 'testUser',
          'profile_image_url': 'https://example.com/profile.jpg',
        },
        'likes_count': 42,
        'tags': [
          {'name': 'flutter'},
          {'name': 'dart'}
        ],
        'created_at': '2024-06-22T00:00:00.000Z',
        'url': 'https://example.com/sample-article'
      };

      final article = Article.fromJson(json);

      expect(article.title, 'Sample Article');
      expect(article.user.id, 'testUser');
      expect(article.user.profileImageUrl, 'https://example.com/profile.jpg');
      expect(article.likesCount, 42);
      expect(article.tags, ['flutter', 'dart']);
      expect(article.createdAt, DateTime.parse('2024-06-22T00:00:00.000Z'));
      expect(article.url, 'https://example.com/sample-article');
    });

    test('Article.formデフォルト値', () {
      final json = {
        'title': 'Sample Article',
        'user': {
          'id': 'testUser',
          'profile_image_url':
              'https://webnexty.com/wp-content/uploads/2015/03/ffffff.png',
        },
        'created_at': '2024-06-22T00:00:00.000Z',
        'url': 'https://example.com/sample-article'
      };

      final article = Article.fromJson(json);

      expect(article.likesCount, 0);
      expect(article.tags, []);
    });

    test('Article.fromJsonメソッド - 不正なJSON', () {
      // 不完全なJSONデータ
      final json = {
        'title': 'Sample Article',
        'user': {
          'id': 'testUser',
          'profile_image_url':
              'https://webnexty.com/wp-content/uploads/2015/03/ffffff.png',
        },
        'created_at': '2024-06-22T00:00:00.000Z',
        // 'url'が欠落
      };

      // fromJsonを使用してUserインスタンスを作成
      expect(
        () => Article.fromJson(json),
        throwsA(isA<TypeError>()),
      );
    });
  });
}
