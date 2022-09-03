---
title: privacy.websites
slug: Mozilla/Add-ons/WebExtensions/API/privacy/websites
tags:
  - API
  - Add-ons
  - Extensions
  - Privacy
  - Property
  - Reference
  - WebExtensions
  - websites
browser-compat: webextensions.api.privacy.websites
---
{{AddonSidebar}}

The {{WebExtAPIRef("privacy.websites")}} property contains privacy-related settings controlling the way to browser interacts with websites. Each property is a {{WebExtAPIRef("types.BrowserSetting")}} object.

Default values for these properties tend to vary across browsers.

## Properties

- `cookieConfig`

  - : A {{WebExtAPIRef("types.BrowserSetting")}} object whose underlying value is an object.

    The object has two properties:

    - `behavior`: a string which may take any of the following values:

      - "allow_all": accept all cookies
      - "reject_all": reject all cookies
      - "reject_third_party": reject all third-party cookies
      - "allow_visited": accept a third-party cookie only if the cookie's top-level domain already has at least one cookie.
      - "reject_trackers": reject tracking cookies
      - "reject_trackers_and_partition_foreign": reject trackers and partition third-party cookies.

    - `nonPersistentCookies` {{deprecated_inline}}: a boolean. If true, all cookies will be treated as session cookies.

- `firstPartyIsolate`

  - : A {{WebExtAPIRef("types.BrowserSetting")}} object whose underlying value is a boolean.

    If `true`, the `firstPartyIsolate` preference makes the browser associate all data (including cookies, HSTS data, cached images, and more) for any third party domains with the domain in the address bar. This prevents third party trackers from using directly stored information to identify the user across different websites, but may break websites where the user logs in with a third party account (such as a Facebook or Google account).

    Defaults to `false`.

- `hyperlinkAuditingEnabled`
  - : A {{WebExtAPIRef("types.BrowserSetting")}} object whose underlying value is a boolean. If `true`, the browser sends auditing pings when a website uses the `ping` attribute to request them.
- `protectedContentEnabled`
  - : A {{WebExtAPIRef("types.BrowserSetting")}} object whose underlying value is a boolean. Available on Windows only. If `true`, the browser provides a unique ID to plugins in order to run protected content.
- `referrersEnabled`
  - : A {{WebExtAPIRef("types.BrowserSetting")}} object whose underlying value is a boolean. If enabled, the browser sends [referer](/en-US/docs/Web/HTTP/Headers/Referer) headers with your requests.
- `resistFingerprinting`

  - : A {{WebExtAPIRef("types.BrowserSetting")}} object whose underlying value is a boolean.

    Browser fingerprinting is the practice by which websites use Web APIs to collect status or configuration data associated with the browser or the device it's running on. By doing this, they can build up a digital fingerprint that they can use to identify and track a particular user.

    If `true`, the `resistFingerprinting` preference makes the browser report generic spoofed information for data that's commonly used for fingerprinting. Such data includes the number of CPU cores, precision of JavaScript timers, and the local timezone. It will also disable features that are used in fingerprinting, such as GamePad support, and the WebSpeech and Navigator APIs.

    Defaults to `false`.

- `thirdPartyCookiesAllowed`
  - : A {{WebExtAPIRef("types.BrowserSetting")}} object whose underlying value is a boolean. If `false`, the browser blocks [third-party cookies](/en-US/docs/Web/HTTP/Cookies#third-party_cookies).
- `trackingProtectionMode`

  - : "Tracking protection" is a browser feature that blocks requests made to domains that are known to engage in cross-site tracking of users. Sites that track users are most commonly third-party advertising and analytics sites. This setting is a {{WebExtAPIRef("types.BrowserSetting")}} object that determines whether the browser should enable tracking protection. Its underlying value is a string that may take one of three values:

    - `"always"`: tracking protection is on.
    - `"never"`: tracking protection is off.
    - `"private_browsing"`: tracking protection is on in private browsing windows only.

## Browser compatibility

{{Compat}}

## Examples

Set the `hyperlinkAuditingEnabled` property.

```js
function onSet(result) {
  if (result) {
    console.log("success");
  } else {
    console.log("failure");
  }
}

browser.browserAction.onClicked.addListener(() => {

  let getting = browser.privacy.websites.hyperlinkAuditingEnabled.get({});
  getting.then((got) => {
    console.log(got.value);
    if ((got.levelOfControl === "controlled_by_this_extension") ||
        (got.levelOfControl === "controllable_by_this_extension")) {
      let setting = browser.privacy.websites.hyperlinkAuditingEnabled.set({
        value: true
      });
      setting.then(onSet);
    } else {
      console.log("Not able to set hyperlinkAuditingEnabled");
    }
  });

});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/privacy/) API. This documentation is derived from [`privacy.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/privacy.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
