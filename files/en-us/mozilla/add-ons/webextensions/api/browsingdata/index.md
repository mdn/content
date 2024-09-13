---
title: browsingData
slug: Mozilla/Add-ons/WebExtensions/API/browsingData
page-type: webextension-api
browser-compat: webextensions.api.browsingData
---

{{AddonSidebar}}

Enables extensions to clear the data that is accumulated while the user is browsing.

In the `browsingData` API, browsing data is divided into types:

- browser cache
- cookies
- downloads
- history
- local storage
- plugin data
- saved form data
- saved passwords

You can use the {{WebExtAPIRef("browsingData.remove()")}} function to remove any combination of these types. There are also dedicated functions to remove each particular type of data, such as {{WebExtAPIRef("browsingData.removePasswords()", "removePasswords()")}}, {{WebExtAPIRef("browsingData.removeHistory()", "removeHistory()")}} and so on.

All the `browsingData.remove[X]()` functions take a {{WebExtAPIRef("browsingData.RemovalOptions")}} object, which you can use to control two further aspects of data removal:

- how far back in time to remove data
- whether to remove data only from normal web pages, or also from hosted web apps and add-ons. Note that this option is not yet supported in Firefox.

Finally, this API gives you a {{WebExtAPIRef("browsingData.settings()")}} function that gives you the current value of the settings for the browser's built-in "Clear History" feature.

To use this API you must have the "browsingData" [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions).

## Types

- {{WebExtAPIRef("browsingData.DataTypeSet")}}
  - : Object used to specify the type of data to remove: for example, history, downloads, passwords, and so on.
- {{WebExtAPIRef("browsingData.RemovalOptions")}}
  - : Object used to specify how far back in time to remove data, and whether to remove data added through normal web browsing, by hosted apps, or by add-ons.

## Methods

- {{WebExtAPIRef("browsingData.remove()")}}
  - : Removes browsing data for the data types specified.
- {{WebExtAPIRef("browsingData.removeCache()")}}
  - : Clears the browser's cache.
- {{WebExtAPIRef("browsingData.removeCookies()")}}
  - : Removes cookies.
- {{WebExtAPIRef("browsingData.removeDownloads()")}}
  - : Removes the list of downloaded files.
- {{WebExtAPIRef("browsingData.removeFormData()")}}
  - : Clears saved form data.
- {{WebExtAPIRef("browsingData.removeHistory()")}}
  - : Clears the browser's history.
- {{WebExtAPIRef("browsingData.removeLocalStorage()")}}
  - : Clears any [local storage](/en-US/docs/Web/API/Window/localStorage) created by websites.
- {{WebExtAPIRef("browsingData.removePasswords()")}}
  - : Clears saved passwords.
- {{WebExtAPIRef("browsingData.removePluginData()")}}
  - : Clears data associated with plugins.
- {{WebExtAPIRef("browsingData.settings()")}}
  - : Gets the current value of settings in the browser's "Clear History" feature.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API.

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
