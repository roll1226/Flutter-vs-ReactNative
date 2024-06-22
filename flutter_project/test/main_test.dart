import 'package:flutter/material.dart';
import 'package:flutter_project/main.dart';
import 'package:flutter_project/screens/search_screen.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart' as http;
import 'package:mockito/mockito.dart';

// Mockクライアントを作成するためにMockitoパッケージを使用します。
// これは、フェイクのHTTPクライアントを作成するために使用します。
class MockClient extends Mock implements http.Client {}

void main() {
  group('MyApp', () {
    testWidgets('SearchScreenがレンダリングされることを確認する', (WidgetTester tester) async {
      // アプリを構築してフレームをトリガーします。
      await tester.pumpWidget(const MyApp());

      // SearchScreenが表示されていることを確認します
      expect(find.byType(SearchScreen), findsOneWidget);
    });
  });

  group('SearchScreen', () {
    testWidgets('正しいUI要素が表示されていることを確認する', (WidgetTester tester) async {
      final client = MockClient();

      await tester.pumpWidget(MaterialApp(home: SearchScreen(client: client)));

      expect(find.byType(AppBar), findsOneWidget);
      expect(find.byType(TextField), findsOneWidget);
    });
  });
}
