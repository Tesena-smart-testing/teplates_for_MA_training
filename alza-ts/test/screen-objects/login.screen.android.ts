import { $ } from "@wdio/globals";
import AppAndroid from "../lib/android/app.android.js";

class LoginScreen extends AppAndroid {
  get scrollView() {
    return $('android=new UiSelector().className("android.widget.ScrollView")');
  }

  get LoginButton() {
    return $('android=new UiSelector().resourceId("IntroLoginSignInButton")');
  }

  get SignupButton() {
    return $('android=new UiSelector().resourceId("IntroLoginSignUpButton")');
  }

  get SkipLoginButton() {
    return $('android=new UiSelector().resourceId("IntroLoginSkipButton")');
  }
}

export default new LoginScreen();
