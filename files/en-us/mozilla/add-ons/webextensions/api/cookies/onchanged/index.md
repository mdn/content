---
title: cookies.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/cookies/onChanged
tags:
  - API
  - Add-ons
  - Cookies
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onChanged
browser-compat: webextensions.api.cookies.onChanged
---
{{AddonSidebar()}}

The `onChanged` event of the {{WebExtAPIRef("cookies")}} API fires when a cookie that the extension can access is set or removed.

> **Note:** When [storage partitioning](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) is active, `cookies.Cookie.partitionKey` contains the description of the cookie's storage partition. When modifying cookies, it's important to pass this value to {{WebExtAPIRef("cookies.set()")}} or {{WebExtAPIRef("cookies.remove()")}} to ensure the extension works with the correct cookie.

Note that updating a cookie's properties is implemented as a two step process:

1. First, the cookie to be updated is first removed entirely, generating a notification with a {{WebExtAPIRef("cookies.OnChangedCause")}} of `overwrite`.
2. Next, a new cookie is written with the updated values, generating a second notification with a {{WebExtAPIRef("cookies.OnChangedCause")}} of `explicit`.

## Syntax

```js
browser.cookies.onChanged.addListener(listener)
browser.cookies.onChanged.removeListener(listener)
browser.cookies.onChanged.hasListener(listener)
```

This API is also available as `browser.cookies.onChanged.*`.

Events have three functions:

- `addListener(callback)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `callback`

  - : A callback function that will be called when this event occurs. The function will be passed the following arguments:

    - `changeInfo`

      - : An `object` containing details of the change that occurred. Its properties are as follows:

        - `removed`
          - : A `boolean` that is set to `true` if a cookie was removed, and false if not.
        - `cookie`
          - : A {{WebExtAPIRef('cookies.Cookie')}} object containing information about the cookie that was set or removed.
        - `cause`
          - : A {{WebExtAPIRef('cookies.OnChangedCause')}} value representing the underlying reason behind the cookie's change.

## Browser compatibility

{{Compat}}

## Examples

This example listens for `onChanged` events and logs details from the `changeInfo` argument:

```js
browser.cookies.onChanged.addListener((changeInfo) => {
  console.log(`Cookie changed: \n`
    + ` * Cookie: ${JSON.stringify(changeInfo.cookie)}\n`
    + ` * Cause: ${changeInfo.cause}\n`
    + ` * Removed: ${changeInfo.removed}`);
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/cookies/#event-onChanged) API. This documentation is derived from [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) in the Chromium code.
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
