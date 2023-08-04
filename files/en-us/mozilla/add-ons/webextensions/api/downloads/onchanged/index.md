---
title: downloads.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/downloads/onChanged
page-type: webextension-api-event
browser-compat: webextensions.api.downloads.onChanged
---

{{AddonSidebar()}}

The **`onChanged()`** event of the {{WebExtAPIRef("downloads")}} API is fired when any of a {{WebExtAPIRef('downloads.DownloadItem')}}'s properties changes (except for `bytesReceived`).

The listener is passed a `downloadDelta` as a parameter — an object containing the `downloadId` of the {{WebExtAPIRef('downloads.DownloadItem')}} object in question, plus the status of all the properties that changed.

## Syntax

```js-nolint
browser.downloads.onChanged.addListener(listener)
browser.downloads.onChanged.removeListener(listener)
browser.downloads.onChanged.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether a given `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`

  - : The function called when this event occurs. This function will be passed this argument:

    - `downloadDelta`
      - : An `object` representing the {{WebExtAPIRef('downloads.DownloadItem')}} object that changed, and the status of all the properties that changed in it. See the [downloadDelta](#downloaddelta_2) section for more details.

## Additional objects

### downloadDelta

The `downloadDelta` object has the following properties available:

- `id`
  - : An `integer` representing the `id` of the {{WebExtAPIRef('downloads.DownloadItem')}} that changed.
- `url` {{optional_inline}}
  - : A {{WebExtAPIRef('downloads.StringDelta')}} object describing a change in a {{WebExtAPIRef('downloads.DownloadItem')}}'s `url`.
- `filename` {{optional_inline}}
  - : A {{WebExtAPIRef('downloads.StringDelta')}} object describing a change in a {{WebExtAPIRef('downloads.DownloadItem')}}'s `filename`.
- `danger` {{optional_inline}}
  - : A {{WebExtAPIRef('downloads.StringDelta')}} object describing a change in a {{WebExtAPIRef('downloads.DownloadItem')}}'s `danger`.
- `mime` {{optional_inline}}
  - : A {{WebExtAPIRef('downloads.StringDelta')}} object describing a change in a {{WebExtAPIRef('downloads.DownloadItem')}}'s `mime`.
- `startTime` {{optional_inline}}
  - : A {{WebExtAPIRef('downloads.StringDelta')}} object describing a change in a {{WebExtAPIRef('downloads.DownloadItem')}}'s `startTime`.
- `endTime` {{optional_inline}}
  - : A {{WebExtAPIRef('downloads.StringDelta')}} object describing a change in a {{WebExtAPIRef('downloads.DownloadItem')}}'s `endTime`.
- `state` {{optional_inline}}
  - : A {{WebExtAPIRef('downloads.StringDelta')}} object describing a change in a {{WebExtAPIRef('downloads.DownloadItem')}}'s `state`.
- `canResume` {{optional_inline}}
  - : A {{WebExtAPIRef('downloads.BooleanDelta')}} object describing a change in a {{WebExtAPIRef('downloads.DownloadItem')}}'s `canResume` status.
- `paused` {{optional_inline}}
  - : A {{WebExtAPIRef('downloads.BooleanDelta')}} object describing a change in a {{WebExtAPIRef('downloads.DownloadItem')}}'s `paused` status.
- `error` {{optional_inline}}
  - : A {{WebExtAPIRef('downloads.StringDelta')}} object describing a change in a {{WebExtAPIRef('downloads.DownloadItem')}}'s `error` status.
- `totalBytes` {{optional_inline}}
  - : A {{WebExtAPIRef('downloads.DoubleDelta')}} object describing a change in a {{WebExtAPIRef('downloads.DownloadItem')}}'s `totalBytes`.
- `fileSize` {{optional_inline}}
  - : A {{WebExtAPIRef('downloads.DoubleDelta')}} object describing a change in a {{WebExtAPIRef('downloads.DownloadItem')}}'s `fileSize`.
- `exists` {{optional_inline}}
  - : A {{WebExtAPIRef('downloads.BooleanDelta')}} object describing a change in a {{WebExtAPIRef('downloads.DownloadItem')}}'s `exists` status.

## Browser compatibility

{{Compat}}

## Examples

Log a message when downloads complete:

```js
function handleChanged(delta) {
  if (delta.state && delta.state.current === "complete") {
    console.log(`Download ${delta.id} has completed.`);
  }
}

browser.downloads.onChanged.addListener(handleChanged);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/downloads/#event-onChanged) API.

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
