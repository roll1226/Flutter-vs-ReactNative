import 'package:flutter_project/models/user.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('fromJson creates an User form a JSON map', () {
    final json = {
      'id': 'testUser',
      'profile_image_url':
          'https://webnexty.com/wp-content/uploads/2015/03/ffffff.png',
    };
    final user = User.fromJson(json);

    expect(user.id, 'testUser');
    expect(user.profileImageUrl,
        'https://webnexty.com/wp-content/uploads/2015/03/ffffff.png');
  });
}
