---
title: runtime.onInstalled
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled
page-type: webextension-api-event
browser-compat: webextensions.api.runtime.onInstalled
---

{{AddonSidebar()}}

Fired when the extension is first installed, when the extension is updated to a new version, and when the browser is updated to a new version.

Note that `runtime.onInstalled` is not the same as {{WebExtAPIRef("management.onInstalled")}}. The `runtime.onInstalled` event is fired only for your extension. The `browser.management.onInstalled` event is fired for any extensions.

## Syntax

```js-nolint
browser.runtime.onInstalled.addListener(listener)
browser.runtime.onInstalled.removeListener(listener)
browser.runtime.onInstalled.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Checks whether a `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `function`

  - : The function called when this event occurs. The function is passed these arguments:

    - `details`

      - : An object with the following properties:

        - `id` {{optional_inline}}
          - : `string`. The ID of the imported shared module extension that updated. This is present only if the `reason` value is `shared_module_update`.
        - `previousVersion` {{optional_inline}}
          - : `string`. The previous version of the extension just updated. This is only present if the `reason` value is `update`.
        - `reason`
          - : An {{WebExtAPIRef('runtime.OnInstalledReason')}} value, stating the reason that this event is being dispatched.
        - `temporary`
          - : `boolean`. True if the add-on was installed temporarily. For example, using the "about:debugging" page in Firefox or using [web-ext run](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/). False otherwise.

## Browser compatibility

{{Compat}}

## Examples

When the extension is installed, log the install reason and open <https://example.com>:

```js
function handleInstalled(details) {
  console.log(details.reason);
  browser.tabs.create({
    url: "https://example.com",
  });
}

browser.runtime.onInstalled.addListener(handleInstalled);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/runtime/#event-onInstalled) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.

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
