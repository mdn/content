---
title: windows.create()
slug: Mozilla/Add-ons/WebExtensions/API/windows/create
page-type: webextension-api-function
browser-compat: webextensions.api.windows.create
---

{{AddonSidebar()}}

Creates a new window.

When you create the window, you can:

- Load one or more new tabs into the window.
- Move a tab from an existing window into the new window.
- Set the size and position of the window.
- Create a "panel" style window, which in this context means a window without any of the normal browser UI (address bar, toolbar, etc.).
- Set various properties of the window, such as whether it is focused or private.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let creating = browser.windows.create(
  createData            // optional object
)
```

### Parameters

- `createData` {{optional_inline}}

  - : `object`.

    - `allowScriptsToClose` {{optional_inline}}

      - : `boolean`. When the window is opened, it will contain a single tab, or more than one tab if `url` is given and includes an array containing more than one URL. By default scripts running in these pages are not allowed to close their tab using [`window.close()`](/en-US/docs/Web/API/Window/close). If you include `allowScriptsToClose` and set it to `true`, then this default behavior is changed, so scripts can close their tabs. Note that:

        - this only applies to the tabs that were opened when the window was created. If the user opens more tabs in this window, then scripts will not be able to close those new tabs.
        - if the URL(s) given in `url` point to [extension pages](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) (that is, they are pages included with this extension and loaded with the "moz-extension:" protocol) then scripts _are_ by default allowed to close those tabs.

    - `cookieStoreId` {{optional_inline}}
      - : `integer`. If present, specifies the `CookieStoreId` for all tabs that will be created when the window is opened.
    - `focused` {{optional_inline}}
      - : `boolean`. If `true`, the new window will be focused. If `false`, the new window will be opened in the background and the currently focused window will stay focused. Defaults to `true`.
    - `height` {{optional_inline}}
      - : `integer`. The height in pixels of the new window, including the frame. If not specified defaults to a natural height.
    - `incognito` {{optional_inline}}
      - : `boolean`. Whether the new window should be an incognito (private) window. Note that if you specify `incognito` and `tabId`, the ID must refer to a private tab — that is, you can't move a non-private tab to a private window.
    - `left` {{optional_inline}}
      - : `integer`. The number of pixels to position the new window from the left edge of the screen. If not specified, the new window is offset naturally from the last focused window. This value is ignored for panels. (In Firefox, this value currently is ignored for popups (bug 1271047) but can be set using browser.windows.update().)
    - `state` {{optional_inline}}
      - : A {{WebExtAPIRef('windows.WindowState')}} value. The initial state of the window. The `minimized`, `maximized` and, `fullscreen` states cannot be combined with `left`, `top`, `width`, or `height`.
    - `tabId` {{optional_inline}}
      - : `integer`. If included, moves a tab of the specified ID from an existing window into the new window.
    - `titlePreface` {{optional_inline}}
      - : `string`. Use this to add a string to the beginning of the browser window's title. Depending on the underlying operating system, this might not work on browser windows that don't have a title (such as about:blank in Firefox).
    - `top` {{optional_inline}}
      - : `integer`. The number of pixels to position the new window from the top edge of the screen. If not specified, the new window is offset naturally from the last focused window. This value is ignored for panels. (In Firefox, this value currently is ignored for popups (bug 1271047) but can be set using browser.windows.update().)
    - `type` {{optional_inline}}
      - : A {{WebExtAPIRef('windows.CreateType')}} value. Specifies what type of browser window to create. Specify `panel` or `popup` here to open a window without any of the normal browser UI (address bar, toolbar, etc.).
    - `url` {{optional_inline}}
      - : `string` or `array` of `string`s. A URL or array of URLs to open as tabs in the window. Fully-qualified URLs must include a scheme (i.e. `http://www.google.com`, not `www.google.com`). Relative URLs will be relative to the current page within the extension. Defaults to the New Tab Page.
    - `width` {{optional_inline}}
      - : `integer`. The width in pixels of the new window, including the frame. If not specified defaults to a natural width.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a {{WebExtAPIRef('windows.Window')}} object containing the details of the new window. This `Window` object will always have its `tabs` property set, unlike the `Window` objects returned from {{WebExtAPIRef("windows.get()")}} and similar APIs, which only contain `tabs` if the `populate` option is passed. If any error occurs, the promise will be rejected with an error message.

## Examples

Open a window containing two tabs:

```js
function onCreated(windowInfo) {
  console.log(`Created window: ${windowInfo.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  let creating = browser.windows.create({
    url: ["https://developer.mozilla.org", "https://addons.mozilla.org"],
  });
  creating.then(onCreated, onError);
});
```

Open a window when the user clicks a browser action, and move the currently active tab into it:

```js
function onCreated(windowInfo) {
  console.log(`Created window: ${windowInfo.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  let creating = browser.windows.create({
    tabId: tab.id,
  });
  creating.then(onCreated, onError);
});
```

Open a small panel-style window, and load a locally-packaged file into it:

```js
function onCreated(windowInfo) {
  console.log(`Created window: ${windowInfo.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  let popupURL = browser.extension.getURL("popup/popup.html");

  let creating = browser.windows.create({
    url: popupURL,
    type: "popup",
    height: 200,
    width: 200,
  });
  creating.then(onCreated, onError);
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/windows/#method-create) API. This documentation is derived from [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) in the Chromium code.

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

## See also

- {{domxref("Window.open()","window.open")}}
