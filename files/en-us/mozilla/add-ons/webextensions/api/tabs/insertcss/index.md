---
title: tabs.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.insertCSS
---

{{AddonSidebar()}}

Injects CSS into a page.

> **Note:** When using Manifest V3 or higher, use {{WebExtAPIRef("scripting.insertCSS()")}} and {{WebExtAPIRef("scripting.removeCSS()")}} to insert and remove CSS.

To use this API you must have the permission for the page's URL, either explicitly as a [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), or using the [activeTab permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

You can only inject CSS into pages whose URL can be expressed using a [match pattern](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns): meaning, its scheme must be one of "http", "https", or "file". This means that you can't inject CSS into any of the browser's built-in pages, such as about:debugging, about:addons, or the page that opens when you open a new empty tab.

> **Note:** Firefox resolves URLs in injected CSS files relative to the CSS file itself, rather than to the page it's injected into.

The inserted CSS may be removed again by calling {{WebExtAPIRef("tabs.removeCSS()")}}.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) (on Firefox only).

## Syntax

```js-nolint
let inserting = browser.tabs.insertCSS(
  tabId,           // optional integer
  details          // object
)
```

### Parameters

- `tabId` {{optional_inline}}
  - : `integer`. The ID of the tab in which to insert the CSS. Defaults to the active tab of the current window.
- `details`

  - : An object describing the CSS to insert. It contains the following properties:

    - `allFrames` {{optional_inline}}
      - : `boolean`. If `true`, the CSS will be injected into all frames of the current page. If it is `false`, CSS is only injected into the top frame. Defaults to `false`.
    - `code` {{optional_inline}}
      - : `string`. Code to inject, as a text string.
    - `cssOrigin` {{optional_inline}}

      - : `string`. This can take one of two values: "user", to add the CSS as a user stylesheet or "author" to add it as an author stylesheet. If this option is omitted, the CSS is added as an author stylesheet.

        - "user" enables you to prevent websites from overriding the CSS you insert: see [Cascading order](/en-US/docs/Web/CSS/Cascade#cascading_order).
        - "author" stylesheets behave as if they appear after all author rules specified by the web page. This behavior includes any author stylesheets added dynamically by the page's scripts, even if that addition happens after the `insertCSS` call completes.

    - `file` {{optional_inline}}
      - : `string`. Path to a file containing the code to inject. In Firefox, relative URLs are resolved relative to the current page URL. In Chrome, these URLs are resolved relative to the extension's base URL. To work cross-browser, you can specify the path as an absolute URL, starting at the extension's root, like this: `"/path/to/stylesheet.css"`.
    - `frameId` {{optional_inline}}
      - : `integer`. The frame where the CSS should be injected. Defaults to `0` (the top-level frame).
    - `matchAboutBlank` {{optional_inline}}
      - : `boolean`. If `true`, the code will be injected into embedded "about:blank" and "about:srcdoc" frames if your extension has access to their parent document. The code cannot be inserted in top-level about: frames. Defaults to `false`.
    - `runAt` {{optional_inline}}
      - : {{WebExtAPIRef('extensionTypes.RunAt')}}. The soonest that the code will be injected into the tab. Defaults to "document_idle".

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments when all the CSS has been inserted. If any error occurs, the promise will be rejected with an error message.

## Examples

This example inserts into the currently active tab CSS which is taken from a string.

```js
let css = "body { border: 20px dotted pink; }";

browser.browserAction.onClicked.addListener(() => {
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let insertingCSS = browser.tabs.insertCSS({ code: css });
  insertingCSS.then(null, onError);
});
```

This example inserts CSS which is loaded from a file packaged with the extension. The CSS is inserted into the tab whose ID is 2:

```js
browser.browserAction.onClicked.addListener(() => {
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let insertingCSS = browser.tabs.insertCSS(2, { file: "content-style.css" });
  insertingCSS.then(null, onError);
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/tabs/#method-insertCSS) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.

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
