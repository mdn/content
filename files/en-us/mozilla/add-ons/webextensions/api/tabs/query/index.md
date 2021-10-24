---
title: tabs.query()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/query
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - query
  - tabs
browser-compat: webextensions.api.tabs.query
---
{{AddonSidebar()}}

Gets all tabs that have the specified properties, or all tabs if no properties are specified.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let querying = browser.tabs.query(queryObj)
```

### Parameters

- `queryObj`

  - : `object`. The `query()` function will only get tabs whose properties match the properties included here.

    See the {{WebExtAPIRef("tabs.Tab")}} documentation to learn more about these properties.

    - `active`{{optional_inline}}
      - : `boolean`. Whether the tabs are active in their windows.
    - `audible`{{optional_inline}}
      - : `boolean`. Whether the tabs are audible.
    - `autoDiscardable`{{optional_inline}}
      - : `boolean`. Whether the tabs can be discarded automatically by the browser when resources are low.
    - `cookieStoreId` {{optional_inline}}
      - : `string`. Use this to return only tabs whose cookie store ID is `cookieStoreId`. This option is only available if the add-on has the `"cookies"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).
    - `currentWindow`{{optional_inline}}
      - : `boolean`. Whether the tabs are in the current window.
    - `discarded`{{optional_inline}}
      - : `boolean`. Whether the tabs are discarded. A discarded tab is one whose content has been unloaded from memory, but is still visible in the tab strip. Its content gets reloaded the next time it's activated.
    - `hidden`{{optional_inline}}
      - : `boolean`. Whether the tabs are hidden.
    - `highlighted`{{optional_inline}}
      - : `boolean`. Whether the tabs are highlighted.
    - `index`{{optional_inline}}
      - : `integer`. The position of the tabs within their windows.
    - `muted`{{optional_inline}}
      - : `boolean`. Whether the tabs are muted.
    - `lastFocusedWindow`{{optional_inline}}
      - : `boolean`. Whether the tabs are in the last focused window.
    - `pinned`{{optional_inline}}
      - : `boolean`. Whether the tabs are pinned.
    - `status`{{optional_inline}}
      - : {{WebExtAPIRef('tabs.TabStatus')}}. Whether the tabs have completed loading.
    - `title`{{optional_inline}}
      - : `string`. Match page titles against a pattern. Requires the "tabs" permission or [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the tab to match.
    - `url`{{optional_inline}}
      - : `string` or `array` of `string`. Match tabs against one or more [match patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Note that fragment identifiers are not matched. Requires the "tabs" permission or [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the tab to match.
    - `windowId`{{optional_inline}}
      - : `integer`. The `id` of the parent window, or {{WebExtAPIRef('windows.WINDOW_ID_CURRENT')}} for the current window.
    - `windowType`{{optional_inline}}
      - : {{WebExtAPIRef('tabs.WindowType')}}. The type of window the tabs are in.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an `array` of `{{WebExtAPIRef('tabs.Tab')}}` objects, containing information about each matching tab.

If any error occurs, the promise will be rejected with an error message.

## Examples

Get all tabs:

```js
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission or a matching host permission.
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let querying = browser.tabs.query({});
querying.then(logTabs, onError);
```

Get all tabs in the current window:

```js
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission or a matching host permission.
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let querying = browser.tabs.query({currentWindow: true});
querying.then(logTabs, onError);
```

Get the active tab in the current window:

```js
function logTabs(tabs) {
  // tabs[0].url requires the `tabs` permission or a matching host permission.
  console.log(tabs[0].url);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let querying = browser.tabs.query({currentWindow: true, active: true});
querying.then(logTabs, onError);
```

Get tabs for all HTTP and HTTPS URLs under `"mozilla.org"` or any of its subdomains:

```js
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission or a matching host permission.
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let querying = browser.tabs.query({url: "*://*.mozilla.org/*"});
querying.then(logTabs, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-query) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

<div class="hidden"><pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre></div>
