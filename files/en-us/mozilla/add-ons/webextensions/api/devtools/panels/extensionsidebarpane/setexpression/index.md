---
title: devtools.panels.ElementsPanel.setExpression()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/setExpression
page-type: webextension-api-function
browser-compat: webextensions.api.devtools.panels.ExtensionSidebarPane.setExpression
---

{{AddonSidebar}}

Evaluates an expression in the context of the inspected page, and displays the result in the extension sidebar pane.

The expression's execution context is the same as that for [`inspectedWindow.eval()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval).

JSON objects and DOM nodes are displayed as an expandable tree, as in the [JSON viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) in Firefox. You can optionally specify a `rootTitle` string: this will be displayed as the title of the tree's root.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let evaluating = browser.devtools.panels.setExpression(
  expression,       // string
  rootTitle         // string
)
```

### Parameters

- `expression`
  - : `string`. The expression to evaluate.
- `rootTitle` {{optional_inline}}
  - : string. The title of the root of the tree in which results are displayed.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments, once the expression has been evaluated.

## Browser compatibility

{{Compat}}

## Examples

This code creates a sidebar pane that displays the [`tagName`](/en-US/docs/Web/API/Element/tagName) of the currently selected element:

```js
function onCreated(sidebarPane) {
  browser.devtools.panels.elements.onSelectionChanged.addListener(() => {
    const exp = "$0 && $0.tagName";
    const title = "Selected Element tagName";
    sidebarPane.setExpression(exp, title);
  });
}

browser.devtools.panels.elements.createSidebarPane("My pane").then(onCreated);
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API.

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
