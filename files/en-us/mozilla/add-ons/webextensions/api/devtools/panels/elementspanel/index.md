---
title: devtools.panels.ElementsPanel
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel
page-type: webextension-api-type
browser-compat: webextensions.api.devtools.panels.ElementsPanel
---

{{AddonSidebar()}}

An `ElementsPanel` represents the HTML/CSS inspector in the browser's devtools. This is called the Page Inspector in Firefox and the Elements panel in Chrome.

## Functions

- [`devtools.panels.ElementsPanel.createSidebarPane()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/createSidebarPane)
  - : Creates a pane in the inspector's sidebar.

## Events

- [`devtools.panels.ElementsPanel.onSelectionChanged`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/onSelectionChanged)
  - : Fired when the user selects a different element in the page, for example using the "Inspect element" context menu item.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.devtools`](https://developer.chrome.com/docs/extensions/mv3/devtools/) API.

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
