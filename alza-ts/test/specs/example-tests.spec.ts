import StartLogin from "../screen-objects/start.login.android.js";

describe("example tests of Alza app on Android 13 - Pixel 6", function () {
  it("start app", async function () {
    await StartLogin.activateApp();
    await StartLogin.wait({ timeout: 5000 });
    await StartLogin.terminateApp();
    await StartLogin.clearApp();
  });
});
