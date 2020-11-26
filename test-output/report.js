$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Background_Image_Validation.feature");
formatter.feature({
  "line": 1,
  "name": "Background Image displayed in website feature",
  "description": "",
  "id": "background-image-displayed-in-website-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify that when user opens JP Morgan website background image is displayed",
  "description": "",
  "id": "background-image-displayed-in-website-feature;verify-that-when-user-opens-jp-morgan-website-background-image-is-displayed",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigates to Google Home page \"\u003cwebpage\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User search for \"\u003csearch\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User clicks on JP Moran website link",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "JP Morgan website is opened",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Background Image is displayed to User",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "background-image-displayed-in-website-feature;verify-that-when-user-opens-jp-morgan-website-background-image-is-displayed;",
  "rows": [
    {
      "cells": [
        "webpage",
        "search"
      ],
      "line": 11,
      "id": "background-image-displayed-in-website-feature;verify-that-when-user-opens-jp-morgan-website-background-image-is-displayed;;1"
    },
    {
      "cells": [
        "google",
        "JP Morgan"
      ],
      "line": 12,
      "id": "background-image-displayed-in-website-feature;verify-that-when-user-opens-jp-morgan-website-background-image-is-displayed;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Verify that when user opens JP Morgan website background image is displayed",
  "description": "",
  "id": "background-image-displayed-in-website-feature;verify-that-when-user-opens-jp-morgan-website-background-image-is-displayed;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigates to Google Home page \"google\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User search for \"JP Morgan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User clicks on JP Moran website link",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "JP Morgan website is opened",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Background Image is displayed to User",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "google",
      "offset": 36
    }
  ],
  "location": "GoogleSearchStepDefinition.user_navigates_to_Google_Home_page(String)"
});
formatter.result({
  "duration": 8868104600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JP Morgan",
      "offset": 17
    }
  ],
  "location": "GoogleSearchStepDefinition.user_search_for(String)"
});
formatter.result({
  "duration": 3070208800,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.user_clicks_on_JP_Moran_website_link()"
});
formatter.result({
  "duration": 2999924600,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.jp_Morgan_website_is_opened()"
});
formatter.result({
  "duration": 2000211000,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchStepDefinition.background_Image_is_displayed_to_User()"
});
formatter.result({
  "duration": 10053579400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//d[@class\u003d \u0027banner-image width-wide \u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-VCAUP5H\u0027, ip: \u0027192.168.225.199\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\t633193\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:57515}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7c30dca41c8e3b19499909be3f0bb1bb\n*** Element info: {Using\u003dxpath, value\u003d//d[@class\u003d \u0027banner-image width-wide \u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat test_Scripts.GoogleSearchStepDefinition.background_Image_is_displayed_to_User(GoogleSearchStepDefinition.java:40)\r\n\tat ✽.Then Background Image is displayed to User(Background_Image_Validation.feature:8)\r\n",
  "status": "failed"
});
});