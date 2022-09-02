---
title: storage
slug: Mozilla/Add-ons/WebExtensions/API/storage
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - Storage
  - WebExtensions
browser-compat: webextensions.api.storage
---
{{AddonSidebar}}

Enables extensions to store and retrieve data, and listen for changes to stored items.

The storage system is based on the [Web Storage API](/en-US/docs/Web/API/Web_Storage_API), with a few differences. Among other differences, these include:

- It's asynchronous.
- Values are scoped to the extension, not to a specific domain (i.e. the same set of key/value pairs are available to all scripts in the background context and content scripts).
- The values stored can be any JSON-ifiable value, not just [`String`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). Among other things, this includes: [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and [`Object`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), but only when their contents can be represented as JSON, which does not include DOM nodes. You don't need to convert your values to JSON `Strings` prior to storing them, but they are represented as JSON internally, thus the requirement that they be JSON-ifiable.
- Multiple key/value pairs can be set or retrieved in the same API call.

To use this API you need to include the `"storage"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in your [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file.

Each extension has its own storage area, which can be split into different types of storage.

Although this API is similar to {{domxref("Window.localStorage")}} it is recommended that you don't use `Window.localStorage` in the extension code to store extension-related data. Firefox will clear data stored by extensions using the localStorage API in various scenarios where users clear their browsing history and data for privacy reasons, while data saved using the [`storage.local`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) API will be correctly persisted in these scenarios.

You can examine the stored data under the Extension Storage item in the [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) tab of the [developer toolbox](https://extensionworkshop.com/documentation/develop/debugging/), accessible from `about:debugging`.

> **Note:** The storage area is not encrypted and shouldn't be used for storing confidential user information.

## Types

- {{WebExtAPIRef("storage.StorageArea")}}
  - : An object representing a storage area.
- {{WebExtAPIRef("storage.StorageChange")}}
  - : An object representing a change to a storage area.

## Properties

`storage` has four properties, which represent the different types of available storage area.

- {{WebExtAPIRef("storage.local")}}
  - : Represents the `local` storage area. Items in `local` storage are local to the machine the extension was installed on.
- {{WebExtAPIRef("storage.managed")}}
  - : Represents the `managed` storage area. Items in `managed` storage are set by the domain administrator and are read-only for the extension. Trying to modify this namespace results in an error.
- {{WebExtAPIRef("storage.session")}}
  - : Represents the `session` storage area. Items in `session` storage are stored in memory and are not persisted to disk.
- {{WebExtAPIRef("storage.sync")}}
  - : Represents the `sync` storage area. Items in `sync` storage are synced by the browser, and are available across all instances of that browser that the user is logged into, across different devices.

## Events

- {{WebExtAPIRef("storage.onChanged")}}
  - : Fired when one or more items change in any of the storage areas.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> **Note:** This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/storage/) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
