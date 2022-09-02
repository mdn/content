---
title: browsingData.settings()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/settings
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - Settings
  - WebExtensions
  - browsingData
browser-compat: webextensions.api.browsingData.settings
---
{{AddonSidebar()}}

Browsers have a built-in "Clear History" feature, which enables the user to clear various types of browsing data. This has a UI that enables the user to select what type of data to remove (e.g. history, downloads, …) and how far back in time to remove data.

This function returns the current value of these settings.

Note that not all data types will always be removable through the UI, and some UI options may map to more than one data type.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let getSettings = browser.browsingData.settings()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an object containing the settings information. This object has three properties:

- `options`
  - : `{{WebExtAPIRef("browsingData.RemovalOptions")}}`. A `RemovalOptions` object describing the removal options currently selected.
- `dataToRemove`
  - : `{{WebExtAPIRef("browsingData.DataTypeSet")}}`. This will contain a property for every data type that can be toggled in the browser's UI. Each property will have a value of `true` if that type is selected for removal and `false` otherwise.
- `dataRemovalPermitted`
  - : `{{WebExtAPIRef("browsingData.DataTypeSet")}}`. This will contain a property for every data type that can be toggled in the browser's UI. Each will have a value of `true` if the administrator of the device has allowed the user to remove that type, and `false` otherwise.

If any error occurs, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

Log current settings:

```js
function onGotSettings(settings) {
  console.log(settings.options);
  console.log(settings.dataToRemove);
  console.log(settings.dataRemovalPermitted);
}

function onError(error) {
  console.error(error);
}

browser.browsingData.settings().then(onGotSettings, onError);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/browsingData/) API.
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
