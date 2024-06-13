import "package:flutter/material.dart";
import "package:flutter_project/models/article.dart";
import "package:flutter_project/screens/article_screen.dart";
import "package:intl/intl.dart";

class ArticleContainer extends StatelessWidget {
  const ArticleContainer({super.key, required this.article});

  final Article article;

  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 16),
        child: GestureDetector(
          onTap: () {
            Navigator.of(context).push(MaterialPageRoute(
                builder: ((context) => ArticleScreen(article: article))));
          },
          child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
              decoration: BoxDecoration(
                  border: Border.all(color: Colors.black),
                  borderRadius: const BorderRadius.all(Radius.circular(12))),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    DateFormat('yyyy/MM/dd').format(article.createdAt),
                    style: const TextStyle(
                      color: Colors.black,
                      fontSize: 12,
                    ),
                  ),
                  Text(
                    article.title,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: Colors.black),
                  ),
                  Text('#${article.tags.join(' #')}',
                      style: const TextStyle(
                          fontSize: 12,
                          color: Colors.black,
                          fontStyle: FontStyle.italic)),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Column(
                        children: [
                          const Icon(Icons.favorite, color: Colors.black),
                          Text(article.likesCount.toString(),
                              style: const TextStyle(
                                  fontSize: 12, color: Colors.black))
                        ],
                      ),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: [
                          CircleAvatar(
                            radius: 26,
                            backgroundImage:
                                NetworkImage(article.user.profileImageUrl),
                          ),
                          const SizedBox(
                            height: 4,
                          ),
                          Text(
                            article.user.id,
                            style: const TextStyle(
                                fontSize: 12, color: Colors.black),
                          )
                        ],
                      )
                    ],
                  )
                ],
              )),
        ));
  }
}
