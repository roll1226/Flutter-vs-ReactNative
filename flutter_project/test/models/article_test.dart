import 'package:flutter_project/models/article.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('Article', () {
    test('fromJson creates an Article from a JSON map', () {
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

    test('fromJson handles missing optional fields', () {
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

      expect(article.title, 'Sample Article');
      expect(article.user.id, 'testUser');
      expect(article.user.profileImageUrl,
          'https://webnexty.com/wp-content/uploads/2015/03/ffffff.png');
      expect(article.likesCount, 0); // default value
      expect(article.tags, []); // default value
      expect(article.createdAt, DateTime.parse('2024-06-22T00:00:00.000Z'));
      expect(article.url, 'https://example.com/sample-article');
    });
  });
}
