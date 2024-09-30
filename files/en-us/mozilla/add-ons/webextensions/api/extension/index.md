---
title: extension
slug: Mozilla/Add-ons/WebExtensions/API/extension
page-type: webextension-api
browser-compat: webextensions.api.extension
---

{{AddonSidebar}}

Utilities related to your extension. Get URLs to resources packages with your extension. Get the [`Window`](/en-US/docs/Web/API/Window) object for your extension's pages. Get the values for various settings.

> **Note:** **The messaging APIs in this module are deprecated** in favor of the equivalent APIs in the [`runtime`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime) module.

## Types

- {{WebExtAPIRef("extension.ViewType")}}
  - : The type of extension view.

## Properties

- {{WebExtAPIRef("extension.lastError")}} {{deprecated_inline}}
  - : Set for the lifetime of a callback if an asynchronous extension API has resulted in an error. If no error has occurred, `lastError` will be {{jsxref("undefined")}}.
- {{WebExtAPIRef("extension.inIncognitoContext")}}
  - : `True` for content scripts running inside incognito tabs, and for extension pages running inside an incognito process. (The latter only applies to extensions with '`split`' `incognito_behavior`.)

## Functions

- {{WebExtAPIRef("extension.getBackgroundPage()")}}
  - : Returns the [`Window`](/en-US/docs/Web/API/Window) object for the background page running inside the current extension. Returns [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) if the extension has no background page.
- {{WebExtAPIRef("extension.getExtensionTabs()")}} {{deprecated_inline}}
  - : Returns an array of the JavaScript [Window](/en-US/docs/Web/API/Window) objects for each of the tabs running inside the current extension.
- {{WebExtAPIRef("extension.getURL()")}} {{deprecated_inline}}
  - : Converts a relative path within an extension install directory to a fully-qualified URL.
- {{WebExtAPIRef("extension.getViews()")}}
  - : Returns an array of the [`Window`](/en-US/docs/Web/API/Window) objects for each of the pages running inside the current extension.
- {{WebExtAPIRef("extension.isAllowedIncognitoAccess()")}}
  - : Retrieves the state of the extension's access to Incognito-mode (as determined by the user-controlled '_Allowed in Incognito_' checkbox).
- {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}}
  - : Retrieves the state of the extension's access to the `file://` scheme (as determined by the user-controlled '_Allow access to File URLs_' checkbox).
- {{WebExtAPIRef("extension.sendRequest()")}} {{deprecated_inline}}
  - : Sends a single request to other listeners within the extension.
- {{WebExtAPIRef("extension.setUpdateUrlData()")}}
  - : Sets the value of the ap CGI parameter used in the extension's update URL. This value is ignored for extensions that are hosted in the browser vendor's store.

## Events

- {{WebExtAPIRef("extension.onRequest")}} {{deprecated_inline}}
  - : Fired when a request is sent from either an extension process or a content script.
- {{WebExtAPIRef("extension.onRequestExternal")}} {{deprecated_inline}}
  - : Fired when a request is sent from another extension.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension) API. This documentation is derived from [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) in the Chromium code.

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
