---
title: tabs.move()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/move
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.move
---

{{AddonSidebar}}

Moves one or more tabs to a new position in the same window or to a different window.

You can only move tabs to and from windows whose {{WebExtAPIRef('windows.WindowType', 'WindowType')}} is `"normal"`.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let moving = browser.tabs.move(
  tabIds,              // integer or integer array
  moveProperties       // object
)
```

### Parameters

- `tabIds`
  - : `integer` or `array` of `integer`. ID of the {{WebExtAPIRef('tabs.Tab', 'tab')}} to move, or an array of tab IDs.
- `moveProperties`

  - : `object`. An object that specifies where to move the tab(s).

    - `windowId` {{optional_inline}}
      - : `integer`. The ID of the window to which you want to move the tab(s). If you omit this, then each tab in `tabIds` will be moved to `index` in its current window. If you include this, and `tabIds` contains more than one tab, then the first tab in `tabIds` will be moved to `index`, and the other tabs will follow it in the order given in `tabIds`.
    - `index`

      - : `integer`. The index position to move the tab to, starting at 0. A value of -1 will place the tab at the end of the window.

        If you pass a value less than -1, the function will throw an error.

        Note that you can't move pinned tabs to a position after any unpinned tabs in a window, or move any unpinned tabs to a position before any pinned tabs. For example, if you have one or more pinned tabs in the target window and `tabIds` refers to an unpinned tab, then you can't pass 0 here. If you try to do this, the function will silently fail (it will not throw an error).

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a `{{WebExtAPIRef('tabs.Tab')}}` object or an `array` of `{{WebExtAPIRef('tabs.Tab')}}` objects, containing details about the moved tabs. If no tabs were moved (for example, because you tried to move an unpinned tab before a pinned tab) this will be an empty array. If any error occurs, the promise will be rejected with an error message.

## Examples

Move the first tab in the current window to the last position in the current window:

```js
function onMoved(tab) {
  console.log(`Moved: ${tab}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function firstToLast(windowInfo) {
  if (windowInfo.tabs.length === 0) {
    return;
  }
  let moving = browser.tabs.move(windowInfo.tabs[0].id, { index: -1 });
  moving.then(onMoved, onError);
}

browser.browserAction.onClicked.addListener(() => {
  let gettingCurrent = browser.windows.getCurrent({ populate: true });
  gettingCurrent.then(firstToLast, onError);
});
```

Move all tabs served over HTTP or HTTPS from \*.mozilla.org to the end of their window:

```js
function onMoved(tab) {
  console.log(`Moved: ${tab}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function moveMoz(tabs) {
  let mozTabIds = tabs.map((tabInfo) => tabInfo.id);
  let moving = browser.tabs.move(mozTabIds, { index: -1 });
  moving.then(onMoved, onError);
}

browser.browserAction.onClicked.addListener(() => {
  let gettingMozTabs = browser.tabs.query({ url: "*://*.mozilla.org/*" });
  gettingMozTabs.then(moveMoz, onError);
});
```

Move all tabs served over HTTP or HTTPS from \*.mozilla.org to the window that hosts the first such tab, starting at position 0:

```js
function onMoved(tab) {
  console.log(`Moved: ${tab}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function moveMoz(tabs) {
  let mozTabIds = tabs.map((tabInfo) => tabInfo.id);
  let targetWindow = tabs[0].windowId;
  let moving = browser.tabs.move(mozTabIds, {
    windowId: targetWindow,
    index: 0,
  });
  moving.then(onMoved, onError);
}

browser.browserAction.onClicked.addListener(() => {
  let gettingMozTabs = browser.tabs.query({ url: "*://*.mozilla.org/*" });
  gettingMozTabs.then(moveMoz, onError);
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-move) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.

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
