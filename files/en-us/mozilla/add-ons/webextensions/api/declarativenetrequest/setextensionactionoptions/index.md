---
title: declarativeNetRequest.setExtensionActionOptions
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/setExtensionActionOptions
page-type: webextension-api-function
browser-compat: webextensions.api.declarativeNetRequest.setExtensionActionOptions
---

{{AddonSidebar}}

Configures whether the action count for tabs is displayed as the extension action's badge text and provides a way for the action count to be incremented.

## Syntax

```js-nolint
let count = browser.declarativeNetRequest.setExtensionActionOptions(
    extensionActionOptions, // object
);
```

### Parameters

- `extensionActionOptions`

  - : An object containing the configuration details for the action count for tabs.
    - `displayActionCountAsBadgeText` {{optional_inline}}
      - : `boolean` Whether to automatically display the action count for a page as the extension's badge text. This preference persists across sessions.
    - `tabUpdate` {{optional_inline}}
      - : `object`. Details of how the tab's action count should be adjusted. See the [tabUpdate](#tabupdate_2) section for more details.

## Additional objects

### tabUpdate

- `increment`
  - : `number` The amount to increment the tab's action count by. Negative values decrement the count.
- `tabId`
  - : `number` The tab to update the action count for.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that fulfills with no arguments. If the request fails, the promise is rejected with an error message.

## Examples

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

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
