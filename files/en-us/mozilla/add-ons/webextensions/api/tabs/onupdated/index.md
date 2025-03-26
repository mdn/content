---
title: tabs.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated
page-type: webextension-api-event
browser-compat: webextensions.api.tabs.onUpdated
---

Fired when a tab is updated.

When the user navigates to a new URL in a tab, this typically generates several `onUpdated` events as various properties of the {{WebExtAPIRef("tabs.Tab")}} object are updated. This includes the `url`, but also potentially the `title` and `favIconUrl` properties. The `status` property will cycle through `"loading"` and `"complete"`.

This event also fires for changes to a tab's properties that don't involve navigation, such as pinning and unpinning (which updates the `pinned` property) and muting or unmuting (which updates the `audible` and `mutedInfo` properties).

You can filter this event, making it only fire for tabs whose URLs match specific [patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), changes to particular properties, changes to a tab or window, or any combinations of these restrictions.

## Syntax

```js-nolint
browser.tabs.onUpdated.addListener(
  listener, // function
  filter     // optional object
)
browser.tabs.onUpdated.removeListener(listener)
browser.tabs.onUpdated.hasListener(listener)
```

Events have three functions:

- `addListener(callback, filter)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`

  - : The function called when this event occurs. The function is passed these arguments:

    - `tabId`
      - : `integer`. The ID of the updated tab.
    - `changeInfo`
      - : `object`. Properties of the tab that changed. See the [changeInfo](#changeinfo_2) section for more details.
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. The new state of the tab.

- `filter` {{optional_inline}}

  - : `object`. A set of filters that restrict the events sent to this listener. This object can have one or more of these properties. Events are only sent if they satisfy all the filters provided.

    - `urls`
      - : `Array`. An array of [match patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Fires the event only for tabs whose current `url` property matches any one of the patterns.
    - `properties`

      - : `Array`. An array of strings consisting of supported {{WebExtAPIRef("tabs.Tab")}} object property names. Fires the event only for changes to one of the properties named in the array. These properties can be used:

        - "attention"
        - "autoDiscardable"
        - "audible"
        - "discarded"
        - "favIconUrl"
        - "hidden"
        - "isArticle"
        - "mutedInfo"
        - "openerTabId"
        - "pinned"
        - "status"
        - "title"
        - "url"

        > [!NOTE]
        > The "url" value has been supported since Firefox 88. In Firefox 87 and earlier, "url" changes can be observed by filtering by "status".

    - `tabId`
      - : `Integer`. Fires this event only for the tab identified by this ID.
    - `windowId`
      - : `Integer`. Fires this event only for tabs in the window identified by this ID.

## Additional objects

### changeInfo

Lists the changes to the state of the tab that is updated. To learn more about these properties, see the {{WebExtAPIRef("tabs.Tab")}} documentation. Note that not all {{WebExtAPIRef("tabs.Tab")}} properties are supported.

- `attention` {{optional_inline}}
  - : `boolean`. Indicates whether the tab is drawing attention. For example, `attention` is `true` when the tab displays a modal dialog.
- `audible` {{optional_inline}}
  - : `boolean`. The tab's new audible state.
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Whether the tab can be discarded by the browser. The default value is `true`. When set to `false`, the browser cannot automatically discard the tab. However, the tab can be discarded by {{WebExtAPIRef("tabs.discard")}}.
- `discarded` {{optional_inline}}
  - : `boolean`. Whether the tab is discarded. A discarded tab is one whose content has been unloaded from memory but is visible in the tab strip. Its content gets reloaded the next time it's activated.
- `favIconUrl` {{optional_inline}}
  - : `string`. The tab's new favicon URL. Not included when a tab loses its favicon (navigating from a page with a favicon to a page without one). Check `favIconUrl` in [tab](#tab) instead.
- `hidden` {{optional_inline}}
  - : `boolean`. True if the tab is {{WebExtAPIRef("tabs.hide()", "hidden")}}.
- `isArticle` {{optional_inline}}
  - : `boolean`. True if the tab is an article and is therefore eligible for display in [Reader Mode](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode).
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. The tab's new muted state and the reason for the change.
- `openerTabId` {{optional_inline}}
  - : `integer`. The ID of the tab that opened this tab, if any. This property is only present if the opener tab exists and is in the same window.
- `pinned` {{optional_inline}}
  - : `boolean`. The tab's new pinned state.
- `status` {{optional_inline}}
  - : `string`. The status of the tab. Can be either _loading_ or _complete_.
- `title` {{optional_inline}}
  - : `string`. The tab's new title.
- `url` {{optional_inline}}
  - : `string`. The tab's URL, if it has changed.

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

Log changes only to tabs whose `url` property is [matched](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) by `https://developer.mozilla.org/*` or `https://mastodon.social/@mdn`:

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://mastodon.social/@mdn";

const filter = {
  urls: [pattern1, pattern2],
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

Log changes only to the `pinned` property of tabs (that is, pin and unpin actions):

```js
const filter = {
  properties: ["pinned"],
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

Combine both the previous filters, log only when the `pinned` property of tabs changes for tabs whose `url` property is [matched](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) by `https://developer.mozilla.org/*` or `https://mastodon.social/@mdn`:

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://mastodon.social/@mdn";

const filter = {
  urls: [pattern1, pattern2],
  properties: ["pinned"],
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

Log changes only when the `pinned` property of tabs changes for tabs whose `url` property is [matched](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) by `https://developer.mozilla.org/*` or `https://mastodon.social/@mdn` where the tab was part of the current browser window when the update event fired:

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://mastodon.social/@mdn";

const filter = {
  urls: [pattern1, pattern2],
  properties: ["pinned"],
  windowId: browser.windows.WINDOW_ID_CURRENT,
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onUpdated) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.

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
