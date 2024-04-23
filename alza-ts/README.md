# Webdriver.io testing of Android native mobile apps

## Preconditions

- [Node.js](https://nodejs.org) LTS
- [Appium Doctor](https://www.npmjs.com/package/appium-doctor)
- [Android Studio](https://developer.android.com/studio)

## Install

- go to the folder `alza-ts` and run `npm i`

## How to create a Webdriver.io project using Typescript and Appium from scratch

Open you command line and create folder of your project.

Switch into the folder and run `npm ini wdio@latest`

Follow the CLI wizard with following options:

```bash
===============================
🤖 WDIO Configuration Wizard 🧙
===============================

? A project named "alza-ts" was detected at "/home/radek/projects/tesena/templates_for_MA_training/alza-ts", correct? Yes
? What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
? Where is your automation backend located? On my local machine
? Which environment you would like to automate? Mobile - native, hybrid and mobile web apps, on Android or iOS
? Which mobile environment you'ld like to automate? Android - native, hybrid and mobile web apps, tested on emulators and real devices
    > using UiAutomator2 (https://www.npmjs.com/package/appium-uiautomator2-driver)
? Which framework do you want to use? Mocha (https://mochajs.org/)
? Do you want to use a compiler? TypeScript (https://www.typescriptlang.org/)
? Do you want WebdriverIO to autogenerate some test files? No
? Which reporter do you want to use? spec
? Do you want to add a plugin to your test setup? wait-for: utilities that provide functionalities to wait for certain conditions till a defined task is complete.
   > https://www.npmjs.com/package/wdio-wait-for
? Would you like to include Visual Testing to your setup? For more information see https://webdriver.io/docs/visual-testing! No
? Do you want to add a service to your test setup? appium
? Do you want me to run `npm install` Yes
```

Next, select `Yes` to install run Appium installer

```bash
? Continue with Appium setup using appium-installer (https://github.com/AppiumTestDistribution/appium-installer)? Yes
Need to install the following packages:
appium-installer@3.0.0
Ok to proceed? (y) y
```

Once finished, select `Exit` option.


