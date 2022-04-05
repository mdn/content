---
title: scripting.removeCSS()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/removeCSS
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
browser-compat: webextensions.api.scripting.removeCSS
---
{{AddonSidebar()}}

Removes a CSS stylesheet injected by a call to {{WebExtAPIRef("scripting.insertCSS()")}}.

> **Note:** This method is available in Manifest V3 or higher.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let removing = browser.scripting.removeCSS(
  injection,       // object
  callback         // function
)
```

### Parameters

- `injection`
  - : An object describing the CSS styles to remove. The `css`, `files`, and `origin` properties must match the stylesheet inserted through {{WebExtAPIRef("scripting.insertCSS()")}}. Attempts to remove non-existent stylesheets are ignored. This object contains these properties:
    - `css`{{optional_inline}} 
      - : `string`. A string containing the CSS to remove. Either `css` or `files` must be specified. 
    - `file`{{optional_inline}}
      - : `string`. The path of a CSS files to remove, relative to the extension's root directory. Either <code>files</code> or <code>css</code> must be specified. 
    - `origin`{{optional_inline}} 
      - : `string`. The style origin of the injection, either `USER` or `AUTHOR`. Defaults to `AUTHOR`. 
    - `target` 
      - : `object`. Details specifying the target into which the CSS was injected. 
- `callback`{{optional_inline}} 
  - : `function`. Invoked upon completion of the removal.

### Additional objects

### target 
- `allFrames`
  - : `boolean`. Whether the CSS is removed from all frames within the tab. Defaults to `false`. This must not be `true` if `frameIds` is specified.
- `frameIds`
  - : `string`. Array of the IDs of the frames to remove the CSS from. 
- `tabId`
  - : `number`. The ID of the tab from which to remove the CSS. 

### Return value

Returns a Promise when the callback parameter is not specified. The [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled with no arguments when all the CSS is removed. If any error occurs, the promise is rejected with an error message.

## Examples

This example adds some CSS using {{WebExtAPIRef("scripting.insertCSS")}}, then removes it again when the user clicks a browser action:

```js
function onError(error) {
  console.log(`Error: ${error}`);
}

let insertingCSS = browser.scripting.insertCSS({
        target: { tabId: tabs[0].id },
        css: `* { background: ${cssColor} !important }`,
      });
insertingCSS.then(null, onError);

browser.browserAction.onClicked.addListener(() => {
  let removing = browser.scripting.removeCSS({
        target: { tabId: tabs[0].id },
        css: `* { background: ${cssColor} !important }`,
      });
  removing.then(null, onError);
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/scripting/#method-removeCSS) API. This documentation is derived from [`scripting.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/scripting.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

<div class="hidden"><pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre></div>
