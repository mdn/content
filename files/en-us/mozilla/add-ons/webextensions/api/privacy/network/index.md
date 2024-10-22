---
title: privacy.network
slug: Mozilla/Add-ons/WebExtensions/API/privacy/network
page-type: webextension-api-property
browser-compat: webextensions.api.privacy.network
---

{{AddonSidebar}}

The `privacy.network` property contains privacy-related network settings. Each property is a {{WebExtAPIRef("types.BrowserSetting")}} object.

Default values for these properties tend to vary across browsers.

## Properties

- `networkPredictionEnabled`
  - : A {{WebExtAPIRef("types.BrowserSetting")}} object whose underlying value is a boolean. If `true`, the browser attempts to speed up web browsing by pre-resolving DNS entries, prerendering sites (using, for example, `<link rel='prefetch' …>`), and preemptively opening TCP and TLS connections to servers.
- `peerConnectionEnabled`
  - : A {{WebExtAPIRef("types.BrowserSetting")}} object whose underlying value is a boolean. If `false`, the [`RTCPeerConnection`](/en-US/docs/Web/API/RTCPeerConnection) interface is disabled. Note that [`getUserMedia()`](/en-US/docs/Web/API/MediaDevices/getUserMedia) is _not_ affected by this setting.
- `webRTCIPHandlingPolicy`

  - : A {{WebExtAPIRef("types.BrowserSetting")}} object whose underlying value is a string. This setting allows users to specify the media performance/privacy tradeoffs which affect how WebRTC traffic will be routed and how much local address information is exposed. It may take any one of the following values, from least private to most private:

    - `default`
    - `default_public_and_private_interfaces`
    - `default_public_interface_only`
    - `disable_non_proxied_udp`
    - `proxy_only` (only connections using TURN on a TCP connection through a proxy are allowed)

- `httpsOnlyMode`

  - : This setting allows your extension to determine if a user has enabled
    [HTTPS-Only mode](https://support.mozilla.org/en-US/kb/https-only-prefs). This property is read-only on all platforms. Its underlying value is a string that may take one of three values:

    - `"always"`: HTTPS-Only mode is on.
    - `"never"`: HTTPS-Only mode is off.
    - `"private_browsing"`: HTTPS-Only mode is on in private browsing windows only.

- `globalPrivacyControl`

  - : this setting allows your extension to determine if a user has enabled
    [Global Privacy Control](/en-US/docs/Web/API/Navigator/globalPrivacyControl). This property is read-only on all platforms. Its underlying value is a boolean where `true` indicates that the browser sends Global Privacy Control signals and `false` indicates the browser does not send the signals.

## Browser compatibility

{{Compat}}

## Examples

Set the `webRTCIPHandlingPolicy` property:

```js
function onSet(result) {
  if (result) {
    console.log("success");
  } else {
    console.log("failure");
  }
}

browser.browserAction.onClicked.addListener(() => {
  let getting = browser.privacy.network.webRTCIPHandlingPolicy.get({});
  getting.then((got) => {
    console.log(got.value);
    if (
      got.levelOfControl === "controlled_by_this_extension" ||
      got.levelOfControl === "controllable_by_this_extension"
    ) {
      let setting = browser.privacy.network.webRTCIPHandlingPolicy.set({
        value: "default_public_interface_only",
      });
      setting.then(onSet);
    } else {
      console.log("Not able to set webRTCIPHandlingPolicy");
    }
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/api/privacy) API. This documentation is derived from [`privacy.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/privacy.json) in the Chromium code.

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
