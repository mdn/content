---
title: runtime.getBackgroundPage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getBackgroundPage
page-type: webextension-api-function
browser-compat: webextensions.api.runtime.getBackgroundPage
---

{{AddonSidebar()}}

Retrieves the {{DOMxRef("Window")}} object for the background page running inside the current extension. If the background page is non-persistent (an event page) and it is not running, the background page is started.

This provides a convenient way for other privileged extension scripts to get direct access to the background script's scope. This enables them to access variables or call functions defined in that scope. "Privileged script" here includes scripts running in [options pages](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#options_pages), or scripts running in [browser action](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#browser_actions_2) or [page action](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#page_actions) popups, but does _not_ include [content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts).

Note that variables that were declared using [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) or [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) do not appear in the `Window` object returned by this function.

**Also note that this method cannot be used in a private window in Firefox**—it always returns `null`. For more info see [related bug at bugzilla](https://bugzil.la/1329304).

If the background page is an event page, the system will ensure it is loaded before resolving the promise.

This is an asynchronous function that returns a {{JSxRef("Promise")}}.

> **Note:** In Firefox, this method cannot be used in Private Browsing mode — it always returns `null`. For more info see [Firefox bug 1329304](https://bugzil.la/1329304).
>
> In Chrome, this method is available only with persistent background pages, which are not available in Manifest V3, so consider using Manifest V2. See the [this](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/) for details.
>
> Consider using {{WebExtAPIRef("runtime.sendMessage","runtime.sendMessage()")}} or {{WebExtAPIRef("runtime.connect","runtime.connect()")}}, which work correctly in both scenarios above.

## Syntax

```js-nolint
let gettingPage = browser.runtime.getBackgroundPage()
```

### Parameters

None.

### Return value

A {{JSxRef("Promise")}} that will be fulfilled with the {{DOMxRef("Window")}} object for the background page, if there is one. If the extension does not include a background page, the promise is rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

Suppose a [background script](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) defines a function `foo()`:

```js
// background.js

function foo() {
  console.log("I'm defined in background.js");
}
```

A script running in a [popup](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#browser_actions_2) can call this function directly like this:

```js
// popup.js

function onGot(page) {
  page.foo();
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let getting = browser.runtime.getBackgroundPage();
getting.then(onGot, onError);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/runtime/#method-getBackgroundPage) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.

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
