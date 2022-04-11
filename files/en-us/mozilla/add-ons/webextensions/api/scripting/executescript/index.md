---
title: scripting.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/executeScript
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - executeScript
  - scripting
browser-compat: webextensions.api.scripting.executeScript
---
{{AddonSidebar()}}

Injects a script into a target context. The script is run at `document_idle`.

> **Note:** This method is available in Manifest V3 or higher.

The scripts you inject are called [content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts).

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let executing = browser.scripting.executeScript(
  injection,             // object
  callback               // function
)
```

### Parameters

- `injection`
  - : {{WebExtAPIRef("scripting.ScriptInjection")}}. Details of a script to inject.
- `callback`{{optional_inline}} 
  - : `function`. Invoked upon completion of the request.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled with {{WebExtAPIRef("scripting.InjectionResult")}}. The array's values represent the result of the script in every injected frame.

The result of the script is the last evaluated statement, which is similar the results that would be seen if you executed the script in the [Web Console](/en-US/docs/Tools/Web_Console) (not any `console.log()` output). For example, consider a script like this:

```js
let foo='my result'; foo;
```

Here the results array contains the string "`my result`" as an element.

The result values must be [structured clonable](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) (see [Data cloning algorithm](/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).

If any error occurs, the promise is rejected with an error message.

## Examples

This example executes a one-line code snippet in the active tab:

```js
function onExecuted(result) {
  console.log(`We made it green`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const makeItGreen = 'document.body.style.border = "5px solid green"';

const executing = browser.tabs.executeScript({
  code: makeItGreen
});
executing.then(onExecuted, onError);
```

This example executes a script from a file (packaged with the extension) called `"content-script.js"`. The script is executed in the active tab. The script is executed in subframes and the main document:

```js
function onExecuted(result) {
  console.log(`We executed in all subframes`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const executing = browser.tabs.executeScript({
  file: "/content-script.js",
  allFrames: true
});
executing.then(onExecuted, onError);
```

This example executes a script from a file (packaged with the extension) called `"content-script.js"`. The script is executed in the tab with the ID of `2`:

```js
function onExecuted(result) {
  console.log(`We executed in tab 2`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const executing = browser.tabs.executeScript(
  2, {
    file: "/content-script.js"
});
executing.then(onExecuted, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/extensions/scripting#method-executeScript) API. This documentation is derived from [`scripting.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/scripting.json) in the Chromium code.

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
