---
title: tabs.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/executeScript
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.executeScript
sidebar: addonsidebar
---

Injects JavaScript code into a page.

> [!NOTE]
> When using Manifest V3 or higher, use {{WebExtAPIRef("scripting.executeScript()")}} to execute scripts.

You can inject code into pages whose URL you can express using a [match pattern](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). To do so, its scheme must be one of: `http`, `https`, or `file`.

You must have the permission for the page's URL either explicitly, as a [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), or using the [activeTab permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Note that some special pages do not allow this permission, including reader view, view-source, PDF viewer, and other built-in browser UI pages.

Extensions cannot run content scripts in [extension pages](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages). If an extension wants to run code in an extension page dynamically, it can include a script in the document. This script contains the code to run and registers a {{WebExtAPIRef("runtime.onMessage")}} listener that implements a way to execute the code. The extension can then send a message to the listener to trigger the code's execution.

> [!NOTE]
> The ability to inject code into pages packaged with your extension was deprecated in Firefox 149 and removed in Firefox 152.

The scripts you inject are called [content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts).

## Syntax

```js-nolint
let executing = browser.tabs.executeScript(
  tabId,                 // optional integer
  details                // object
)
```

### Parameters

- `tabId` {{optional_inline}}
  - : `integer`. The ID of the tab in which to run the script.

    Defaults to the active tab of the current window.

- `details`
  - : An object describing the script to run.

    It contains the following properties:
    - `allFrames` {{optional_inline}}
      - : `boolean`. If `true`, the code is injected into all frames of the current page.

        If set to `true` and `frameId` is set, it raises an error. (`frameId` and `allFrames` are mutually exclusive.)

        If it is `false`, the code is injected only into the top frame.

        Defaults to `false`.

    - `code` {{optional_inline}}
      - : `string`. Code to inject, as a text string.

        > [!WARNING]
        > Don't use this property to interpolate untrusted data into JavaScript, as this could lead to a security issue.

    - `file` {{optional_inline}}
      - : `string`. Path to a file containing the code to inject.
        - In Firefox, relative URLs not starting at the extension root are resolved relative to the current page URL.
        - In Chrome, these URLs are resolved relative to the extension's base URL.

        To work cross-browser, you can specify the path as a relative URL, starting at the extension's root, like this: `"/path/to/script.js"`.

    - `frameId` {{optional_inline}}
      - : `integer`. The frame where the code should be injected.

        Defaults to `0` (the top-level frame).

    - `matchAboutBlank` {{optional_inline}}
      - : `boolean`. If `true`, the code is injected into embedded `about:blank` and `about:srcdoc` frames if your extension has access to their parent document. The code cannot be inserted in top-level `about:` frames.

        Defaults to `false`.

    - `runAt` {{optional_inline}}
      - : {{WebExtAPIRef('extensionTypes.RunAt')}}. The earliest that the code is injected into the tab.

        Defaults to `"document_idle"`.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to an array of objects. The array's values represent the script's result in each injected frame.

The result of the script is the last evaluated statement, which is similar to the output (the results, not any `console.log()` output) if you executed the script in the [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html). For example, consider a script like this:

```js
let foo = "my result";
foo;
```

Here, the results array contains the string `"my result"` as an element.

The result values must be [structured cloneable](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) (see [Data cloning algorithm](/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).

> [!NOTE]
> The last statement can also a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), but this feature is unsupported by [webextension-polyfill](https://github.com/mozilla/webextension-polyfill#tabsexecutescript) library.

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
  code: makeItGreen,
});
executing.then(onExecuted, onError);
```

This example executes a script from a file (packaged with the extension) called `"content-script.js"`. The script is executed in the active tab. The script is executed in subframes as well as the main document:

```js
function onExecuted(result) {
  console.log(`We executed in all subframes`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const executing = browser.tabs.executeScript({
  file: "/content-script.js",
  allFrames: true,
});
executing.then(onExecuted, onError);
```

This example executes a script from a file (packaged with the extension) called `"content-script.js"`. The script is executed in the tab with an ID of `2`:

```js
function onExecuted(result) {
  console.log(`We executed in tab 2`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const executing = browser.tabs.executeScript(2, {
  file: "/content-script.js",
});
executing.then(onExecuted, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-executeScript) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.

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
