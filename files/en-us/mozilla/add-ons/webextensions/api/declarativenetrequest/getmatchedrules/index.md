---
title: declarativeNetRequest.getMatchedRules
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/getMatchedRules
page-type: webextension-api-function
browser-compat: webextensions.api.declarativeNetRequest.getMatchedRules
---

{{AddonSidebar()}}

Returns all the rules matched for the extension. Callers can filter the list of matched rules by specifying a `filter`. This method is only available to extensions with the `"declarativeNetRequestFeedback"` permission or that have the `"activeTab"` permission granted for the `tabId` specified in `filter`. Rules not associated with an active document that were matched more than five minutes ago are not returned.

## Syntax

```js-nolint
let gettingMatchedRules = browser.declarativeNetRequest.getMatchedRules(
    filter                // object
);
```

### Parameters

- `filter` {{optional_inline}}

  - : An object to filter the list of matched rules.
    - `minTimeStamp` {{optional_inline}}
      - : A `number`. If specified, only matches rules after the specified timestamp.
    - `tabId` {{optional_inline}}
      - : A `number`. If specified, only matches rules for the specified tab. Matches rules not associated with any active tab if set to `-1`.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that fulfills with an object with these properties:

- `rule`
  - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}. Details of a matched rule.
- `tabId`
  - : `number` The `tabId` of the tab the request originated from if the tab is still active. Otherwise, `-1`.
- `timeStamp`
  - : `number` The time the rule was matched. Timestamps correspond to the Javascript convention for times, i.e. the number of milliseconds since the epoch.

If no rules are matched, the object is empty. If the request fail, the promise is rejected with an error message

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
