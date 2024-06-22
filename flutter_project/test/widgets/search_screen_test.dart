import 'dart:convert';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:flutter_project/screens/search_screen.dart';
import 'package:flutter_project/widgets/article_container.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart' as http;
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';

// モックファイルをインポート
import 'search_screen_test.mocks.dart';

// モッククラスを生成
@GenerateMocks([http.Client])
void main() {
  setUpAll(() async {
    HttpOverrides.global = null;
    await dotenv.load();
  });

  group('SearchScreen', () {
    late MockClient mockClient;

    setUp(() {
      mockClient = MockClient();
    });

    testWidgets('検索が成功したときに記事が表示される', (WidgetTester tester) async {
      // サンプルのJSONレスポンス
      final List<Map<String, dynamic>> mockResponse = [
        {
          "title": 'Sample Article 1',
          "user": {
            "id": 'user1',
            "profile_image_url": 'https://example.com/user1.jpg',
          },
          "likes_count": 10,
          "tags": [
            {"name": 'flutter'},
            {"name": 'dart'}
          ],
          "created_at": '2024-06-22T00:00:00.000Z',
          "url": 'https://example.com/sample-article1',
        },
        {
          "title": 'Sample Article 2',
          "user": {
            "id": 'user2',
            "profile_image_url": 'https://example.com/user2.jpg',
          },
          "likes_count": 20,
          "tags": [
            {"name": 'flutter'},
            {"name": 'dart'}
          ],
          "created_at": '2024-06-22T00:00:00.000Z',
          "url": 'https://example.com/sample-article2',
        }
      ];

      // モックHTTPクライアントの設定
      when(mockClient.get(
        any,
        headers: anyNamed('headers'),
      )).thenAnswer((_) async => http.Response(jsonEncode(mockResponse), 200));

      // テストウィジェットを構築
      await tester
          .pumpWidget(MaterialApp(home: SearchScreen(client: mockClient)));

      // TextFieldにテキストを入力し、送信
      await tester.enterText(find.byType(TextField), 'Test');
      await tester.testTextInput.receiveAction(TextInputAction.done);
      await tester.pumpAndSettle();

      // ArticleContainerウィジェットが表示されていることを確認
      expect(find.byType(ArticleContainer), findsNWidgets(mockResponse.length));
      for (final article in mockResponse) {
        expect(find.text(article['title']), findsOneWidget);
      }
    });

    testWidgets('検索が失敗したときに記事が表示されない', (WidgetTester tester) async {
      // エラーレスポンスを返すようにモックHTTPクライアントを設定
      when(mockClient.get(
        any,
        headers: anyNamed('headers'),
      )).thenAnswer((_) async => http.Response('Not Found', 404));

      // テストウィジェットを構築
      await tester
          .pumpWidget(MaterialApp(home: SearchScreen(client: mockClient)));

      // TextFieldにテキストを入力し、送信
      await tester.enterText(find.byType(TextField), 'Test');
      await tester.testTextInput.receiveAction(TextInputAction.done);
      await tester.pumpAndSettle();

      // ArticleContainerウィジェットが表示されていないことを確認
      expect(find.byType(ArticleContainer), findsNothing);
    });
  });
}
