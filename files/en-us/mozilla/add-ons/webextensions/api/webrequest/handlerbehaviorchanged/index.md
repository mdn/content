---
title: webRequest.handlerBehaviorChanged()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/handlerBehaviorChanged
page-type: webextension-api-function
browser-compat: webextensions.api.webRequest.handlerBehaviorChanged
---

{{AddonSidebar}}

This function can be used to ensure that event listeners are applied correctly when pages are in the browser's in-memory cache. If the browser has loaded a page, and the page is reloaded, the browser may reload the page from its in-memory cache, and in this case, events will not be triggered for the request.

Suppose an extension's job is to block web requests against a pattern, and the following scenario happens:

- The user loads a page that includes a particular request, and the pattern permits the request.
- The resource is loaded and cached in memory.
- The extension's patterns are updated, in such a way that the resource would no longer be permitted.
- The user reloads the page.

Because the page will be reloaded from the memory cache, the listener may not be called again, and the request will be loaded despite the extension's new policy.

The `handlerBehaviorChanged()` function is designed to address this problem. It flushes the in-memory cache, so that page reloads will trigger event listeners.

Because `handlerBehaviorChanged()` flushes the cache, it can be expensive and bad for performance. The webRequest module defines a read-only property {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", "MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}: making more calls than this number in 10 minutes will have no effect.

The implementation of caching, hence the need for this function, varies from one browser to another, so in some browsers this function does nothing.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let flushingCache = browser.webRequest.handlerBehaviorChanged()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments, when the operation has completed.

## Browser compatibility

{{Compat}}

## Examples

In the following snippet, we flush the in-memory cache via a call to `handlerBehaviorChanged()`, and report this action by logging an appropriate message to the console.

```js
function onFlushed() {
  console.log(`In-memory cache flushed`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let flushingCache = browser.webRequest.handlerBehaviorChanged();
flushingCache.then(onFlushed, onError);
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#method-handlerBehaviorChanged) API. This documentation is derived from [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) in the Chromium code.

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
