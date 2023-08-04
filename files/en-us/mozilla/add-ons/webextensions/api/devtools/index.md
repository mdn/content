---
title: devtools
slug: Mozilla/Add-ons/WebExtensions/API/devtools
page-type: webextension-api
browser-compat: webextensions.api.devtools
---

{{AddonSidebar}}

Enables extensions to interact with the browser's {{Glossary("Developer Tools")}}. You can use this API to create Developer Tools pages, interact with the window that is being inspected, inspect the page network usage.

To use this API you need to have the `"devtools"` [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) specified in your [manifest.json](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file. This permission can not be optional.

## Properties

- {{WebExtAPIRef("devtools.inspectedWindow")}}
  - : Interact with the window that Developer tools are attached to (inspected window). This includes obtaining the tab ID for the inspected page, evaluate the code in the context of the inspected window, reload the page, or obtain the list of resources within the page.
- {{WebExtAPIRef("devtools.network")}}
  - : Obtain information about network requests associated with the window that the Developer Tools are attached to (the inspected window).
- {{WebExtAPIRef("devtools.panels")}}
  - : Create User Interface panels that will be displayed inside User Agent Developer Tools.

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.devtools`](https://developer.chrome.com/docs/extensions/mv2/devtools/) API.

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
