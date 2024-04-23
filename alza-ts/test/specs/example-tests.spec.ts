import LoginScreen from "../screen-objects/login.screen.android.js";

describe("Example tests", function () {
  beforeEach(async function () {
    await LoginScreen.clearApp();
    await LoginScreen.activateApp();
  });

  afterEach(async function () {
    await LoginScreen.terminateApp();
  });

  it("login screen is visible", async function () {
    await expect(await LoginScreen.scrollView).toBeDisplayed();
  });

  it("login button is visible", async function () {
    await expect(await LoginScreen.LoginButton).toBeDisplayed();
  });

  it("signup button is visible", async function () {
    await expect(await LoginScreen.SignupButton).toBeDisplayed();
  });

  it("skip login button is visible", async function () {
    await expect(await LoginScreen.SkipLoginButton).toBeDisplayed();
  });
});
