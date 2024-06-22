import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_project/models/article.dart';
import 'package:flutter_project/models/user.dart';
import 'package:flutter_project/widgets/article_container.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';

import 'article_container_test.mocks.dart';

@GenerateMocks([User, Article])
void main() {
  setUp(() {
    HttpOverrides.global = null;
  });

  testWidgets('displays article information correctly',
      (WidgetTester tester) async {
    final mockUser = MockUser();
    when(mockUser.id).thenReturn('user1');
    when(mockUser.profileImageUrl)
        .thenReturn('https://example.com/profile.jpg');

    final mockArticle = MockArticle();
    when(mockArticle.title).thenReturn('Sample Article');
    when(mockArticle.user).thenReturn(mockUser);
    when(mockArticle.likesCount).thenReturn(42);
    when(mockArticle.tags).thenReturn(['flutter', 'dart']);
    when(mockArticle.createdAt)
        .thenReturn(DateTime.parse('2024-06-22T00:00:00.000Z'));
    when(mockArticle.url).thenReturn('https://example.com/sample-article');

    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: ArticleContainer(article: mockArticle),
        ),
      ),
    );

    await tester.pumpAndSettle();

    expect(find.text('2024/06/22'), findsOneWidget);
    expect(find.text('Sample Article'), findsOneWidget);
    expect(find.text('#flutter #dart'), findsOneWidget);
    expect(find.text('42'), findsOneWidget);
    expect(find.byType(CircleAvatar), findsOneWidget);
    expect(find.text('user1'), findsOneWidget);
  });
}
