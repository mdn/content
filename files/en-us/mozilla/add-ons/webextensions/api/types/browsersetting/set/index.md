---
title: set()
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set
tags:
  - API
  - Add-ons
  - BrowserSetting
  - Extensions
  - Privacy
  - Reference
  - WebExtensions
  - set
---
{{AddonSidebar()}}

Use `BrowserSetting.set()` to change the browser setting to a new value.

There are some rules that can restrict when extensions are able to change settings:

- some settings are locked, so they can't be changed by extensions at all
- if multiple extensions try to modify the same setting, then extensions are given a precedence ordering based on when they were installed. More-recently installed extensions have precedence over less-recently installed extension.

This means that if extension X tries to change a setting:

1. If the setting is locked, then the setting is not changed. However, X's change is remembered, and it is stored in a queue, ordered by X's precedence relative to any other extensions that tried to change the setting. If the setting becomes unlocked later on, the first extension in the queue gets to change the setting.
2. Otherwise, if no other extension has already changed the setting, then X succeeds in changing the setting, and is then said to "control" the setting.
3. Otherwise, if a lower-precedence extension Y has already changed the setting, then X succeeds in changing the setting, and now controls the setting. However, Y's change is remembered, and is stored in a queue in precedence order. If X subsequently clears its value, or if X is disabled or uninstalled, the first extension in the queue gets to make its change to the setting.
4. Otherwise, if a higher-precedence extension Z has already changed the setting, then X does not succeed in changing the setting, but its change is queued. If Z subsequently clears its value, or if Z is disabled or uninstalled, the first extension in the queue gets to make its change to the setting.

An extension can find out which of these scenarios applies by examining the "`levelOfControl`" property returned from a call to [`BrowserSetting.get()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/get).

The [`BrowserSetting.set()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set) method returns a Promise that resolves to a boolean: if an attempt to change a setting actually results in the setting being changed (scenarios 2 and 3 above) the boolean is `true`: otherwise it is `false`.

## Syntax

```js
let setting = setting.set(
  details     // object
)
```

### Parameters

- `details`

  - : An object that must contain the following property:

    - `value`
      - : `any`. The value you want to change the setting to. Its type depends on the particular setting.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a `boolean`: `true` if the setting was modified, `false` otherwise (for example, because the extension did not control the setting).

## Browser compatibility

See {{WebExtAPIRef("types.BrowserSetting")}}.

## Example

Modify the `hyperlinkAuditingEnabled` setting (this requires the "privacy" permission):

```js
function onSet(result) {
  if (result) {
    console.log("Value was updated");
  } else {
    console.log("Value was not updated");
  }
}

browser.browserAction.onClicked.addListener(() => {

    let setting = browser.privacy.websites.hyperlinkAuditingEnabled.set({
      value: false
    });
    setting.then(onSet);

});
```

{{WebExtExamples}}

> **Note:**
>
> This API is based on Chromium's [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/types/) API.
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
