---
title: devtools.inspectedWindow.reload()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/reload
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - Method
  - WebExtensions
  - devtools.inspectedWindow
  - reload
browser-compat: webextensions.api.devtools.inspectedWindow.reload
---
{{AddonSidebar()}}

Reloads the window that the devtools are attached to.

## Syntax

```js
browser.devtools.inspectedWindow.reload(
  reloadOptions       // object
)
```

### Parameters

- `reloadOptions` {{optional_inline}}

  - : `object`. Options for the function, as follows:

    - `ignoreCache` {{optional_inline}}
      - : `boolean`. If true, this makes the reload ignore the browser cache (as if the user had pressed Shift+Ctrl+R).
    - `userAgent` {{optional_inline}}
      - : `string`. Set a custom user agent for the page. The string supplied here will be sent in the browser's [User-Agent](/en-US/docs/Web/HTTP/Headers/User-Agent) header, and will be returned by calls to [`navigator.userAgent`](/en-US/docs/Web/API/Navigator/userAgent) made by scripts running in the page.
    - `injectedScript` {{optional_inline}}
      - : `string`. Inject the given JavaScript expression into all frames in the page, before any other scripts.

## Browser compatibility

{{Compat}}

## Examples

Reload the inspected window, setting the user agent and injecting a script:

```js
const reloadButton = document.querySelector("#reload-button");

reloadButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.reload({
    injectedScript:"alert(navigator.userAgent);",
    userAgent: "Not a real UA"
  });
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.devtools`](https://developer.chrome.com/docs/extensions/mv3/devtools/) API.
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
