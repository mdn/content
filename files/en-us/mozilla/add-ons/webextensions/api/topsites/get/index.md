---
title: topSites.get()
slug: Mozilla/Add-ons/WebExtensions/API/topSites/get
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - get
  - topSites
browser-compat: webextensions.api.topSites.get
---
{{AddonSidebar()}}

Gets an array containing information about pages that the user has visited often and recently.

Browsers keep a list of pages that the user visits often and recently. They use this list to help the user get back to these places easily. For example, Firefox by default provides a list of the most-visited pages in the "New Tab" page.

To determine which pages appear in the list, and the order in which they appear, the browser combines "frequency" - how often the user has visited the page - and "recency" - how recently the user visited the page.

The browser may then apply further filtering to this list before presenting it to the user. For example, in Firefox the "New Tab" page only lists one page per domain, and the user is able to block pages from appearing in the list.

The `topSites.get()` API enables an extension to get access to this list. Called without any options, it will provide the filtered list of pages - that is, the one that appears in the "New Tab" page. However, by providing various options it's possible for an extension to get the unfiltered list of pages.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

To use the topSites API you must have the "topSites" [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions).

## Syntax

```js
let gettingTopSites = browser.topSites.get(
    options  // object
)
```

### Parameters

- `options`

  - : `object`. Options to modify the list of pages returned. This may include any of the following properties:

    - `includeBlocked` {{optional_inline}}
      - : `Boolean`. Include pages that the user has removed from the "New Tab" page. Defaults to `false`.
    - `includeFavicon` {{optional_inline}}
      - : `Boolean`. Include favicons in the results, for pages where they are available. Defaults to `false`.
    - `includePinned` {{optional_inline}}
      - : `Boolean`. Includes sites that the user has pinned to the Firefox new tab.
        Defaults to `false`.
    - `includeSearchShortcuts` {{optional_inline}}
      - : `Boolean`. Includes search shortcuts that appear on the Firefox new tab.
        Defaults to `false`.
    - `limit` {{optional_inline}}
      - : `Integer`. The number of pages to return. This must be a number between 1 and 100, inclusive. Defaults to 12.
    - `newtab` {{optional_inline}}
      - : `Boolean`. If included, the method returns the list of pages returned when the user opens a new tab. If included, and set to `true`, the method ignores all other parameters except `limit` and `includeFavicon`. Defaults to `false`.
    - `onePerDomain` {{optional_inline}}
      - : `Boolean`. Only include one page per domain. Defaults to `true`.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). This will be fulfilled with an array of {{WebExtAPIRef("topSites.MostVisitedURL", "MostVisitedURL")}} objects, one for each page listed in the browser's "New Tab" page. If an error occurs, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

This code logs the title and URL for all pages in the "New Tab" page:

```js
function logTopSites(topSitesArray) {
  for (const topSite of topSitesArray) {
    console.log(`Title: ${topSite.title}, URL: ${topSite.url}`);
  }
}

function onError(error) {
  console.error(error);
}

browser.topSites.get().then(logTopSites, onError);
```

This code logs the title and URL for all top pages, including ones the user has blocked, and potentially including multiple pages in the same domain:

```js
function logTopSites(topSitesArray) {
  for (const topSite of topSitesArray) {
    console.log(`Title: ${topSite.title}, URL: ${topSite.url}`);
  }
}

function onError(error) {
  console.error(error);
}

browser.topSites
  .get({
    includeBlocked: true,
    onePerDomain: false,
  })
  .then(logTopSites, onError);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.topSites`](https://developer.chrome.com/docs/extensions/reference/topSites/) API.

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
