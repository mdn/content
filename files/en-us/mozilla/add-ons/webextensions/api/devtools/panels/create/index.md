---
title: devtools.panels.create()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/create
page-type: webextension-api-function
browser-compat: webextensions.api.devtools.panels.create
---

{{AddonSidebar()}}

Adds a new panel to the devtools.

This function takes: a title, a URL to an icon file, and a URL to an HTML file. It creates a new panel in the devtools, whose content is specified by the HTML file. It returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to an [`ExtensionPanel`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel) object representing the new panel.

## Syntax

```js-nolint
let creating = browser.devtools.panels.create(
  title,       // string
  iconPath,    // string
  pagePath     // string
)
```

### Parameters

- `title`
  - : `string`. The panel's title. This will appear in the row of tabs along the top of the devtools window, and is the main way the user will be able to identify your panel.
- `iconPath`
  - : `string`. Specifies an icon which will be shown next to the title. It's provided as a URL to an image file that's been bundled with your extension. The URL is resolved as relative to the current extension page (unless expressed as an absolute URL, e.g. "/icons/panel.png").
- `pagePath`
  - : string. Specifies an HTML file that defines the actual content of the panel. It's provided as a URL to an HTML file that's been bundled with your extension. The URL is resolved as relative to the current extension page (unless expressed as an absolute URL, e.g. "/devtools/panel.html"). The HTML file may include CSS and JavaScript files, just like a normal web page. The JavaScript running in the panel will be able to use the devtools APIs. See [Extending the developer tools](/en-US/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools).

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an [`ExtensionPanel`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel) object representing the new panel.

## Browser compatibility

{{Compat}}

## Examples

Create a new panel, and add listeners to its onShown and onHidden events:

```js
function handleShown() {
  console.log("panel is being shown");
}

function handleHidden() {
  console.log("panel is being hidden");
}

browser.devtools.panels
  .create(
    "My Panel", // title
    "/icons/star.png", // icon
    "/devtools/panel/panel.html", // content
  )
  .then((newPanel) => {
    newPanel.onShown.addListener(handleShown);
    newPanel.onHidden.addListener(handleHidden);
  });
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
