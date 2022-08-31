---
title: devtools.panels.ExtensionSidebarPane.setObject()
slug: >-
  Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/setObject
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - devtools.panels
  - setObject
browser-compat: webextensions.api.devtools.panels.ExtensionSidebarPane.setObject
---
{{AddonSidebar()}}

Displays a JSON object in the extension's sidebar pane.

The object is displayed as an expandable tree, as in the [JSON viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) in Firefox. You can optionally specify a `rootTitle` string: this will be displayed as the title of the tree's root.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let setting = browser.devtools.panels.setObject(
  jsonObject,       // string, array, or JSON object
  rootTitle         // string
)
```

### Parameters

- `jsonObject`
  - : `String` or `Array` or `Object`. The object to display. If this is an object it is JSON-serialized, so properties like functions will be omitted.
- `rootTitle` {{optional_inline}}
  - : `String`. The title of the root of the tree in which the object is displayed.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments, once the object has been set.

## Browser compatibility

{{Compat}}

## Examples

Create a new pane, and populate it with a JSON object. You could run this code in a script loaded by your extension's [devtools page](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page).

```js
function onCreated(sidebarPane) {
  sidebarPane.setObject({
    someBool: true,
    someString: "hello there",
    someObject: {
      someNumber: 42,
      someOtherString: "this is my pane's content"
    }
  });
}

browser.devtools.panels.elements.createSidebarPane("My pane").then(onCreated);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/devtools_panels/) API.

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
