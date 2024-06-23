import 'package:flutter/material.dart';
import 'package:flutter_project/models/article.dart';
import 'package:webview_flutter/webview_flutter.dart';

class ArticleScreen extends StatefulWidget {
  const ArticleScreen({super.key, required this.article, this.controller});

  final Article article;
  final WebViewController? controller;

  @override
  State<ArticleScreen> createState() => _ArticleScreenState();
}

class _ArticleScreenState extends State<ArticleScreen> {
  late WebViewController controller;

  @override
  void initState() {
    super.initState();
    controller = widget.controller ?? WebViewController();
    controller.loadRequest(Uri.parse(widget.article.url));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.article.title),
      ),
      body: WebViewWidget(controller: controller),
    );
  }
}
