flutter.doctor:
	cd flutter_project && flutter doctor -v
flutter.emulator:
	cd flutter_project && flutter emulators
flutter.devices:
	cd flutter_project && flutter devices
flutter.ios-%:
	cd flutter_project && flutter run -d ${@:flutter.ios-%=%}
flutter.android-%:
	cd flutter_project && flutter run -d ${@:flutter.android-%=%}
expo.start:
	cd react_native_project && npm run start
expo.ios:
	cd react_native_project && npm run ios
expo.android:
	cd react_native_project && npm run android
