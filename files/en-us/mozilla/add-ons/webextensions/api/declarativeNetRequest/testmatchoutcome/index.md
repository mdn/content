---
title: declarativeNetRequest.testMatchOutcome
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/testMatchOutcome
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - WebExtensions
  - Method
  - declarativeNetRequest
  - testMatchOutcome
browser-compat: webextensions.api.declarativeNetRequest.testMatchOutcome
---

{{AddonSidebar()}}

Checks if any of the extension's `declarativeNetRequest` rules would match a hypothetical request. Only available for [temporarily loaded extensions](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), as this is intended to be used during extension development.

> **Note:** This API is available in Manifest V3 or higher.

## Syntax

```js-nolint
let count = browser.declarativeNetRequest.testMatchOutcome(
    rules                // array
);
```

### Parameters

- `testMatchRequestDetails`

  - : An object containing the match rules to test.
    - `initiator` {{optional_inline}}
      - : A `string`. The initiator URL (if any) for the hypothetical request.
    - `method` {{optional_inline}}
      - : {{WebExtAPIRef("declarativeNetRequest.RequestMethod")}}. Standard HTTP method of the hypothetical request. Defaults to `"get"` for HTTP requests and is ignored for non-HTTP requests.
    - `tabId` {{optional_inline}}
      - : A `number`. The ID of the tab the hypothetical request takes place in. Does not need to correspond to a real tab ID. Default is `-1`, meaning that the request isn't related to a tab.
    - `type`
      - : {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. The resource type of the hypothetical request.
    - `url`
      - : A `string`. The URL of the hypothetical request.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that fulfills with an object with these properties:

- `matchedRules`
  - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}. Details of the rules (if any) that match the hypothetical request.

If no rules match, the object is empty. If the request fails, the promise is rejected with an error message.

## Examples

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.declarativeNetRequest`](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#event-onRuleMatchedDebug) API.
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
