import 'package:flutter_project/models/user.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('User', () {
    test('Userインスタンスの作成', () {
      // ユーザーのサンプルデータ
      const id = '123';
      const profileImageUrl = 'http://example.com/image.jpg';

      // Userインスタンスの作成
      final user = User(id: id, profileImageUrl: profileImageUrl);

      // 各プロパティが正しく設定されていることを確認
      expect(user.id, id);
      expect(user.profileImageUrl, profileImageUrl);
    });

    test('User.fromJsonメソッド', () {
      // JSONのサンプルデータ
      final json = {
        'id': '123',
        'profile_image_url': 'http://example.com/image.jpg',
      };

      // fromJsonを使用してUserインスタンスを作成
      final user = User.fromJson(json);

      // 各プロパティが正しく設定されていることを確認
      expect(user.id, json['id']);
      expect(user.profileImageUrl, json['profile_image_url']);
    });

    test('User.fromJsonメソッド - 不正なJSON', () {
      // 不完全なJSONデータ
      final json = {
        'id': '123',
        // 'profile_image_url'が欠落
      };

      // fromJsonを使用してUserインスタンスを作成
      expect(
        () => User.fromJson(json),
        throwsA(isA<TypeError>()),
      );
    });
  });
}
