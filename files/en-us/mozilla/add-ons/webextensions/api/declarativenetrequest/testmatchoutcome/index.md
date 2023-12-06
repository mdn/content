---
title: declarativeNetRequest.testMatchOutcome
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/testMatchOutcome
page-type: webextension-api-function
browser-compat: webextensions.api.declarativeNetRequest.testMatchOutcome
---

{{AddonSidebar()}}

Checks if any of the extension's `declarativeNetRequest` rules would match a hypothetical request. Only available while testing, as this is intended to be used during extension development. See [Testing](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#testing) for details on how testing is enabled in each browser.

## Syntax

```js-nolint
let result = await browser.declarativeNetRequest.testMatchOutcome(
    request,                // object
    options                 // optional object
);
```

### Parameters

- `request`

  - : The details of the request to test.
    - `initiator` {{optional_inline}}
      - : A `string`. The initiator URL (if any) for the hypothetical request.
    - `method` {{optional_inline}}
      - : A `string`. The standard (lower case) HTTP method of the hypothetical request. Defaults to `"get"` for HTTP requests and is ignored for non-HTTP requests.
    - `tabId` {{optional_inline}}
      - : A `number`. The ID of the tab the hypothetical request takes place in. Does not need to correspond to a real tab ID. Default is `-1`, meaning that the request isn't related to a tab.
    - `type`
      - : {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. The resource type of the hypothetical request.
    - `url`
      - : A `string`. The URL of the hypothetical request.

- `options` {{optional_inline}}

  - : Details of options for the request.
    - `includeOtherExtensions` {{optional_inline}}
      - : A `boolean`. Whether matching rules from other extensions are included in `matchedRules`. When rules from other extensions match, the resulting `matchedRule` has an `extensionId` property. Defaults to `false`.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that fulfills with an object with these properties:

- `matchedRules`
  - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}. Details of the rules (if any) that match the hypothetical request.

If no rules match, the `matchedRules` array is empty. If the request fails, the promise is rejected with an error message.

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
