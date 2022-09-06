---
title: tabs.removeCSS()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - removeCSS
  - tabs
browser-compat: webextensions.api.tabs.removeCSS
---
{{AddonSidebar()}}

Removes from a page CSS which was previously injected by a call to {{WebExtAPIRef("tabs.insertCSS()")}}.

> **Note:** When using Manifest V3 or higher, use {{WebExtAPIRef("scripting.insertCSS()")}} and {{WebExtAPIRef("scripting.removeCSS()")}} to insert and remove CSS.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let removing = browser.tabs.removeCSS(
  tabId,           // optional integer
  details          // object
)
```

### Parameters

- `tabId` {{optional_inline}}
  - : `integer`. The ID of the tab from which to remove the CSS. Defaults to the active tab of the current window.
- `details`

  - : An object describing the CSS to remove from the page. It contains the following properties:

    - `allFrames` {{optional_inline}}
      - : `boolean`. If `true`, the code will be removed from all frames of the current page. If it is `false`, code is only removed from the top frame. Defaults to `false`.
    - `code` {{optional_inline}}
      - : `string`. CSS to remove, as a text string. This must exactly match a CSS string previously inserted into the page using {{WebExtAPIRef("tabs.insertCSS()")}}.
    - `cssOrigin` {{optional_inline}}
      - : `string`. This can take one of two values: "user", for CSS added as a user stylesheet, or "author" for CSS added as an author stylesheet. If this option was set previously by {{WebExtAPIRef("tabs.insertCSS()")}}, then it must exactly match.
    - `file` {{optional_inline}}
      - : `string`. Path to a file containing the CSS to remove. This must exactly match a CSS file previously inserted into the page using {{WebExtAPIRef("tabs.insertCSS()")}}.
    - `frameId` {{optional_inline}}
      - : `integer`. The frame from which to remove the CSS. Defaults to `0` (the top-level frame).
    - `matchAboutBlank` {{optional_inline}}
      - : `boolean`. If `true`, the CSS will be removed from embedded "about:blank" and "about:srcdoc" frames if your extension has access to their parent document. Defaults to `false`.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments when all the CSS has been removed. If any error occurs, the promise will be rejected with an error message.

## Examples

This example adds some CSS using {{WebExtAPIRef("tabs.insertCSS")}}, then removes it again when the user clicks a browser action:

```js
let css = "body { border: 20px dotted pink; }";

function onError(error) {
  console.log(`Error: ${error}`);
}

let insertingCSS = browser.tabs.insertCSS(2, {code: css});
insertingCSS.then(null, onError);

browser.browserAction.onClicked.addListener(() => {
  let removing = browser.tabs.removeCSS(2, {code: css});
  removing.then(null, onError);
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/tabs/#method-insertCSS) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.
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
