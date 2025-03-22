---
title: history
slug: Mozilla/Add-ons/WebExtensions/API/history
page-type: webextension-api
browser-compat: webextensions.api.history
---

{{AddonSidebar}}

Use the `history` API to interact with the browser history.

If you are looking for information about the browser session history, see the [History interface](/en-US/docs/Web/API/History).

> [!NOTE]
> Downloads are treated as [`HistoryItem`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/history/HistoryItem) objects. Therefore, events such as [`history.onVisited`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/history/onVisited) fire for downloads.

Browser history is a chronological record of pages the user has visited. The history API enables you to:

- [search for pages that appear in the browser history](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/history/search)
- [remove individual pages from the browser history](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/history/deleteUrl)
- [add pages to the browser history](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/history/addUrl)
- [remove all pages from the browser history](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/history/deleteAll).

However, the user may have visited a single page multiple times, so the API also has the concept of "visits". So you can also use this API to:

- [retrieve the complete set of visits the user made to a particular page](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/history/getVisits)
- [remove visits to any pages made during a given time period](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/history/deleteRange).

To use this API, an extension must request the "history" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in its [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file.

## Types

- {{WebExtAPIRef("history.TransitionType")}}
  - : Describes how the browser navigated to a particular page.
- {{WebExtAPIRef("history.HistoryItem")}}
  - : Provides information about a particular page in the browser history.
- {{WebExtAPIRef("history.VisitItem")}}
  - : Describes a single visit to a page.

## Functions

- {{WebExtAPIRef("history.search()")}}
  - : Searches the browser history for [`history.HistoryItem`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/history/HistoryItem) objects matching the given criteria.
- {{WebExtAPIRef("history.getVisits()")}}
  - : Retrieves information about visits to a given page.
- {{WebExtAPIRef("history.addUrl()")}}
  - : Adds a record to the browser history of a visit to the given page.
- {{WebExtAPIRef("history.deleteUrl()")}}
  - : Removes all visits to the given URL from the browser history.
- {{WebExtAPIRef("history.deleteRange()")}}
  - : Removes all visits to pages that the user made during the given time range.
- {{WebExtAPIRef("history.deleteAll()")}}
  - : Removes all visits from the browser history.

## Events

- {{WebExtAPIRef("history.onTitleChanged")}}
  - : Fired when the title of a page visited by the user is recorded.
- {{WebExtAPIRef("history.onVisited")}}
  - : Fired each time the user visits a page, providing the {{WebExtAPIRef("history.HistoryItem")}} data for that page.
- {{WebExtAPIRef("history.onVisitRemoved")}}
  - : Fired when a URL is removed completely from the browser history.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history) API. This documentation is derived from [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) in the Chromium code.

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
