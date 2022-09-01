---
title: tabs.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onUpdated
  - tabs
browser-compat: webextensions.api.tabs.onUpdated
---
Fired when a tab is updated.

When the user navigates to a new URL in a tab, this will typically generate several  `onUpdated` events as various properties of the {{WebExtAPIRef("tabs.Tab")}} object are updated. This includes the `url`, but also potentially the `title` and `favIconUrl` properties. The `status` property will cycle through `"loading"` and `"complete"`.

This event will also be fired for changes to a tab's properties that don't involve navigation, like pinning and unpinning (which updates the `pinned` property) and muting or unmuting (which updates the `audible` and `mutedInfo` properties).

You can filter this event, making it only fire for tabs whose URLs match specific [patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), or for changes to specific properties, or for changes to a specific tab or window, or any combinations of these restrictions.

## Syntax

```js
browser.tabs.onUpdated.addListener(listener[, extraParameters])
browser.tabs.onUpdated.removeListener(listener)
browser.tabs.onUpdated.hasListener(listener)
```

Events have three functions:

- `addListener(callback[, extraParameters])`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `callback`

  - : Function that will be called when this event occurs. The function will be passed the following arguments:

    - `tabId`
      - : `integer`. ID of the tab that was updated.
    - `changeInfo`
      - : [`object`](#changeinfo). Contains properties for the tab properties that have changed. See [`changeInfo`](#changeinfo_2) below.
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. The new state of the tab.

- `extraParameters` {{optional_inline}}

  - : `object`. A set of filters that restricts the events that will be sent to this listener. This is an object which may have one or more of the following properties. Events will only be sent if they satisfy all the filters given.

    - `urls`
      - : `Array`. An array of [match patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Fire the event only for tabs whose current `url` property matches any one of the patterns.
    - `properties`

      - : `Array`. An array of strings, which are the names of properties of the {{WebExtAPIRef("tabs.Tab")}} object. Fire this event only for changes to one of the properties named in this array. The following properties may be listed here:

        - "attention"
        - "audible"
        - "discarded"
        - "favIconUrl"
        - "hidden"
        - "isArticle"
        - "mutedInfo"
        - "pinned"
        - "sharingState"
        - "status"
        - "title"
        - "url"

        > **Note:** The "url" value is supported since Firefox 88. In Firefox 87 and earlier, "url" changes can be observed by filtering by "status".

    - `tabId`
      - : `Integer`. Fire this event only for the tab identified by this ID.
    - `windowId`
      - : `Integer`. Fire this event only for tabs which are currently in the window identified by this ID.

## Additional objects

### changeInfo

Lists the changes to the state of the tab that was updated. To learn more about these properties, see the {{WebExtAPIRef("tabs.Tab")}} documentation.

- `attention` {{optional_inline}}
  - : `boolean`. Indicates whether the tab is drawing attention. For example, when the tab displays a modal dialog, `attention` will be `true`.
- `audible` {{optional_inline}}
  - : `boolean`. The tab's new audible state.
- `discarded` {{optional_inline}}
  - : `boolean`. Whether the tab is discarded. A discarded tab is one whose content has been unloaded from memory, but is still visible in the tab strip. Its content gets reloaded the next time it's activated.
- `favIconUrl` {{optional_inline}}
  - : `string`. The tab's new favicon URL. Not included when a tab loses its favicon (navigating from a page with a favicon to a page that without one), please check `favIconUrl` in [tab](#tab) instead.
- `hidden` {{optional_inline}}
  - : `boolean`. True if the tab is {{WebExtAPIRef("tabs.hide()", "hidden")}}.
- `isArticle` {{optional_inline}}
  - : `boolean`. True if the tab is an article and is therefore eligible for display in {{WebExtAPIRef("tabs.toggleReaderMode()", "Reader Mode")}}.
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. The tab's new muted state and the reason for the change.
- `pinned` {{optional_inline}}
  - : `boolean`. The tab's new pinned state.
- `status` {{optional_inline}}
  - : `string`. The status of the tab. Can be either _loading_ or _complete_.
- `title` {{optional_inline}}
  - : `string`. The tab's new title.
- `url` {{optional_inline}}
  - : `string`. The tab's URL if it has changed.

## Examples

Listen for and log all the change info and new state:

```js
function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated);
```

Log changes to URLs:

```js
function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.url) {
    console.log(`Tab: ${tabId} URL changed to ${changeInfo.url}`);
  }
}

browser.tabs.onUpdated.addListener(handleUpdated);
```

### Filtering examples

Log changes only to tabs whose `url` property is [matched](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) by `https://developer.mozilla.org/*` or `https://twitter.com/mozdevnet`:

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://twitter.com/mozdevnet";

const filter = {
  urls: [pattern1, pattern2]
}

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

Log changes only to the `pinned` property of tabs (i.e. pin and unpin actions):

```js
const filter = {
  properties: ["pinned"]
}

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

Combine both the previous filters: log changes only:

- to the `pinned` property of tabs
- whose `url` property is [matched](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) by `https://developer.mozilla.org/*` or `https://twitter.com/mozdevnet`:

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://twitter.com/mozdevnet";

const filter = {
  urls: [pattern1, pattern2],
  properties: ["pinned"]
}

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(
  handleUpdated,
  filter);
```

Log changes only:

- to the `pinned` property of tabs
- whose `url` property is [matched](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) by `https://developer.mozilla.org/*` or `https://twitter.com/mozdevnet`
- and which are part of the current browser window at the time the update event is fired:

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://twitter.com/mozdevnet";

const filter = {
  urls: [pattern1, pattern2],
  properties: ["pinned"],
  windowId: browser.windows.WINDOW_ID_CURRENT
}

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(
  handleUpdated,
  filter);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/tabs/#event-onUpdated) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.

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

{{AddonSidebar}}
