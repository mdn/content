---
title: browserAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setIcon
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - browserAction
  - setIcon
browser-compat: webextensions.api.browserAction.setIcon
---
{{AddonSidebar()}}

Sets the icon for the browser action.

You can specify a single icon as either the path to an image file or a {{WebExtAPIRef('browserAction.ImageDataType')}} object.

You can specify multiple icons in different sizes by supplying a dictionary containing multiple paths or `ImageData` objects. This means the icon doesn't have to be scaled for a device with a different pixel density.

Tabs without a specific icon will inherit the global icon, which defaults to the [`default_icon`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) specified in the manifest.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let settingIcon = browser.browserAction.setIcon(
  details         // object
)
```

### Parameters

- `details`

  - : `object`. An object containing either `imageData` or `path` properties, and optionally a `tabId` property.

    - `imageData` {{optional_inline}}

      - : `{{WebExtAPIRef('browserAction.ImageDataType')}}` or `object`. This is either a single `ImageData` object or a dictionary object.

        Use a dictionary object to specify multiple `ImageData` objects in different sizes, so the icon does not have to be scaled for a device with a different pixel density. If `imageData` is a dictionary, the value of each property is an `ImageData` object, and its name is its size, like this:

        ```json
        {
          16: image16,
          32: image32
        }
        ```

        The browser will choose the image to use depending on the screen's pixel density. See [Choosing icon sizes](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) for more information on this.

    - `path` {{optional_inline}}

      - : `string` or `object`. This is either a relative path to an icon file or it is a dictionary object.

        Use a dictionary object to specify multiple icon files in different sizes, so the icon does not have to be scaled for a device with a different pixel density. If `path` is a dictionary, the value of each property is a relative path, and its name is its size, like this:

        ```json
        {
          16: "path/to/image16.jpg",
          32: "path/to/image32.jpg"
        }
        ```

        The browser will choose the image to use depending on the screen's pixel density. See [Choosing icon sizes](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) for more information on this.

    - `tabId` {{optional_inline}}
      - : `integer`. Sets the icon only for the given tab. The icon is reset when the user navigates this tab to a new page.
    - `windowId` {{optional_inline}}
      - : `integer`. Sets the icon for the given window.

<!---->

- If `windowId` and `tabId` are both supplied, the function fails and the icon is not set.
- If `windowId` and `tabId` are both omitted, the global icon is set.

If each one of `imageData` and `path` is one of `undefined`, `null` or empty object:

- If `tabId` is specified, and the tab has a tab-specific icon set, then the tab will inherit the icon from the window to which it belongs.
- If `windowId` is specified, and the window has a window-specific icon set, then the window will inherit the global icon.
- Otherwise, the global icon will be reset to the manifest icon.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments once the icon has been set.

## Browser compatibility

{{Compat}}

## Examples

The code below uses a browser action to toggle a listener for {{WebExtAPIRef("webRequest.onHeadersReceived")}}, and uses `setIcon()` to indicate whether listening is on or off:

```js
function logResponseHeaders(requestDetails) {
  console.log(requestDetails);
}

function startListening() {
  browser.webRequest.onHeadersReceived.addListener(
    logResponseHeaders,
    {urls: ["<all_urls>"]},
    ["responseHeaders"]
  );
  browser.browserAction.setIcon({path: "icons/listening-on.svg"});
}

function stopListening() {
  browser.webRequest.onHeadersReceived.removeListener(logResponseHeaders);
  browser.browserAction.setIcon({path: "icons/listening-off.svg"});
}

function toggleListener() {
  if (browser.webRequest.onHeadersReceived.hasListener(logResponseHeaders)) {
    stopListening();
  } else {
    startListening();
  }
}

browser.browserAction.onClicked.addListener(toggleListener);
```

The code below sets the icon using an [`ImageData`](/en-US/docs/Web/API/ImageData) object:

```js
function getImageData() {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 100, 100);

  return ctx.getImageData(50, 50, 100, 100);
}

browser.browserAction.onClicked.addListener(() => {
  browser.browserAction.setIcon({imageData: getImageData()});
});
```

The following snippet updates the icon when the user clicks it, but only for the active tab:

```js
browser.browserAction.onClicked.addListener((tab) => {
  browser.browserAction.setIcon({
    tabId: tab.id, path: "icons/updated-48.png"
  });
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/reference/browserAction/#method-setIcon) API. This documentation is derived from [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) in the Chromium code.
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
