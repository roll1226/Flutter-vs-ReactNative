import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:flutter_project/screens/search_screen.dart';

Future<void> main() async {
  await dotenv.load(fileName: '.env');
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Qiita検索アプリ',
        theme: ThemeData(
          primaryColor: Colors.green,
          appBarTheme: const AppBarTheme(backgroundColor: Color(0xFF55C500)),
          textTheme: Theme.of(context).textTheme.apply(bodyColor: Colors.white),
          fontFamily: 'Hiragino Sans',
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.lightGreen),
          useMaterial3: true,
        ),
        home: const SearchScreen());
  }
}
