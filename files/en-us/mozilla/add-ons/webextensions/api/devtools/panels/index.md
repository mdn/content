---
title: devtools.panels
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels
page-type: webextension-api-property
browser-compat: webextensions.api.devtools.panels
---

{{AddonSidebar}}

The `devtools.panels` API lets a devtools extension define its user interface inside the devtools window.

The devtools window hosts a number of separate tools - the JavaScript Debugger, Network Monitor, and so on. A row of tabs across the top lets the user switch between the different tools. The window hosting each tool's user interface is called a "panel".

With the `devtools.panels` API you can create new panels in the devtools window.

Like all the `devtools` APIs, this API is only available to code running in the document defined in the [devtools_page](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) manifest.json key, or in other devtools documents created by the extension (such as the panel's own document). See [Extending the developer tools](/en-US/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools) for more.

## Types

- [`devtools.panels.Button`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/Button)
  - : A button created by the extension.
- [`devtools.panels.ElementsPanel`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel)
  - : Represents the HTML/CSS inspector in the browser's devtools.
- [`devtools.panels.ExtensionPanel`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel)
  - : Represents a devtools panel created by the extension.
- [`devtools.panels.ExtensionSidebarPane`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane)
  - : Represents a pane that an extension has added to the HTML/CSS inspector in the browser's devtools.
- [`devtools.panels.SourcesPanel`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/SourcesPanel)
  - : Represents the sources panel.

## Properties

- [`devtools.panels.elements`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements)
  - : A reference to an [`ElementsPanel`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel) object.
- [`devtools.panels.sources`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/sources)
  - : A reference to an [`SourcesPanel`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/SourcesPanel) object.
- [`devtools.panels.themeName`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/themeName)
  - : The name of the active devtools theme.

## Functions

- [`devtools.panels.create()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/create)
  - : Creates a devtools panel.
- [`devtools.panels.openResource()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/openResource)
  - : Opens a URL in a devtools panel.
- [`devtools.panels.setOpenResourceHandler()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/setOpenResourceHandler)
  - : Specifies the function to call when the user clicks a resource link in the devtools window.

## Events

- [`devtools.panels.onThemeChanged`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/onThemeChanged)
  - : Fires when the devtools theme changes.

## Example extensions

- [devtools-panels](https://github.com/mdn/webextensions-examples/tree/master/devtools-panels)

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

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
