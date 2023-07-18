---
title: i18n.getMessage()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getMessage
page-type: webextension-api-function
browser-compat: webextensions.api.i18n.getMessage
---

{{AddonSidebar()}}

Gets the localized string for the specified message.

See the [Internationalization](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization) page for a guide on using this function.

## Syntax

```js-nolint
browser.i18n.getMessage(
  messageName,  // string
  substitutions // optional any
)
```

### Parameters

- `messageName`

  - : `string`. The name of the message, as specified in the messages.json file. If the message can't be found in messages.json:

    - Firefox returns "" and logs an error.
    - Chrome returns "" and does not log an error.

- `substitutions` {{optional_inline}}

  - : `string` or `array` of `string`. A single substitution string, or an array of substitution strings.

    In Chrome, if you supply more than 9 substitution strings, `getMessage()` will return `undefined`.

### Return value

`string`. Message localized for current locale.

## Browser compatibility

{{Compat}}

## Examples

Get the localized string for `"messageContent"`, with `target.url` substituted:

```js
let message = browser.i18n.getMessage("messageContent", target.url);
console.log(message);
```

This would work with a \_locales/en/messages.json file containing:

```json
{
  "messageContent": {
    "message": "You clicked $URL$.",
    "description": "Tells the user which link they clicked.",
    "placeholders": {
      "url": {
        "content": "$1",
        "example": "https://developer.mozilla.org"
      }
    }
  }
}
```

If `target.url` is "https\://developer.mozilla.org", then the value of message, in the "en" locale, would be:

```
"You clicked https://developer.mozilla.org."
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/i18n/#method-getMessage) API. This documentation is derived from [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) in the Chromium code.

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
