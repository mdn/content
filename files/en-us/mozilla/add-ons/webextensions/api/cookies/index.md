---
title: cookies
slug: Mozilla/Add-ons/WebExtensions/API/cookies
tags:
  - API
  - Add-ons
  - Cookies
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - WebExtensions
browser-compat: webextensions.api.cookies
---
{{AddonSidebar}}

Enables extensions to get and set cookies, and be notified when they change.

## Permissions

To use this API, an add-on must specify the "cookies" [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in its [manifest.json](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file, along with [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for any sites for which it wishes to access cookies. The add-on may read or write any cookies which could be read or written by a URL matching the host permissions. For example:

- `http://*.example.com/`

  - : An add-on with this host permission may:

    - Read a non-secure cookie for `www.example.com`, with any path.
    - Write a secure or non-secure cookie for `www.example.com`, with any path.

    It may _not_:

    - Read a secure cookie for `www.example.com`.

- `http://www.example.com/`

  - : An add-on with this host permission may:

    - Read a non-secure cookie for `www.example.com`, with any path.
    - Read a non-secure cookie for `.example.com`, with any path.
    - Write a secure or non-secure cookie for `www.example.com` with any path.
    - Write a secure or non-secure cookie for `.example.com` with any path.

    It may _not_:

    - Read or write a cookie for `foo.example.com`.
    - Read or write a cookie for `foo.www.example.com`.

- `*://*.example.com/`

  - : An add-on with this host permission may:

    - Read or write a secure or non-secure cookie for `www.example.com` with any path.

## Tracking protection

Trackers use third-party cookies, that is, cookies set by a website other than the one you are on, to identify the websites you visit. For example:

1. You visit `a-shopping-site.com`, which uses `ad-tracker.com` to deliver its adverts on the web. `ad-tracker.com` sets a cookie associated with the `ad-tracker.com` domain. While you are on `a-shopping-site.com`, `ad-tracker.com` receives information about the products you browse.
2. You now visit `a-news-site.com` that uses `ad-tracker.com` to deliver adverts. `ad-tracker.com` read its cookie and use the information collected from `a-shopping-site.com` to decide which adverts to display to you.

Firefox includes features to prevent tracking. These features separate cookies so that trackers cannot make an association between websites visited. So, in the preceding example, `ad-tracker.com` cannot see the cookie created on `a-news-site.com` when visiting `a-shopping-site.com`. The first iteration of this protection was first-party isolation which is now being superseded by [dynamic partitioning](/en-US/docs/Web/Privacy/State_Partitioning#dynamic_partitioning).

> **Note:** First-party isolation and dynamic partitioning will not be active at the same time. If the user or an extension turns on first-party isolation, it takes precedence over dynamic partitioning. However, when private browsing uses dynamic partitioning, normal browsing may not be partitioning cookies. See [Status of partitioning in Firefox](/en-US/docs/Web/Privacy/State_Partitioning#status_of_partitioning_in_firefox), for details.

### Storage partitioning

When using [dynamic partitioning](/en-US/docs/Web/Privacy/State_Partitioning#dynamic_partitioning), Firefox partitions the storage accessible to JavaScript APIs by top-level site while providing appropriate access to unpartitioned storage to enable common use cases. This feature is being rolled out progressively. See [Status of partitioning in Firefox](/en-US/docs/Web/Privacy/State_Partitioning#status_of_partitioning_in_firefox), for implementation details.

Storage partitions are keyed by the schemeful URL of the top-level {{glossary("Site","website")}} and, when dynamic partitioning is active, the key value is available through the `partitionKey.topLevelSite` property in the cookies API, for example, `partitionKey: {topLevelSite: "http://site"}`.

Generally, top-level documents are in unpartitioned storage, while third-party iframes are in partitioned storage. If a partition key cannot be determined, the default (unpartitioned storage) is used. For example, while all HTTP(S) sites can be used as a partition key, `moz-extension:-` URLs cannot. Therefore, iframes in Firefox's extension documents do not use partitioned storage.

By default, {{WebExtAPIRef("cookies.get()")}}, {{WebExtAPIRef("cookies.getAll()")}}, {{WebExtAPIRef("cookies.set()")}}, and {{WebExtAPIRef("cookies.remove()")}} work with cookies in unpartitioned storage. To work with cookies in partitioned storage in these APIs, `topLevelSite` in `partitionKey` must be set. The exception is `getAll` where setting `partitionKey` without `topLevelSite` returns cookies in partitioned and unpartitioned storage. {{WebExtAPIRef("cookies.onChanged")}} fires for any cookie that the extension can access, including cookies in partitioned storage. To ensure that the correct cookie is modified, extensions should read the `cookie.partitionKey` property from the event and pass its value to {{WebExtAPIRef("cookies.set()")}} and {{WebExtAPIRef("cookies.remove()")}}.

### First-party isolation

When first-party isolation is on, cookies are qualified by the domain of the original page the user visited (essentially, the domain shown to the user in the URL bar, also known as the "first party domain").

First-party isolation can be enabled by the user by adjusting the browser's configuration and set by extensions using the {{WebExtAPIRef("privacy.websites","firstPartyIsolate")}} setting in the {{WebExtAPIRef("privacy")}} API. Note that first-party isolation is enabled by default in [Tor Browser](https://www.torproject.org/).

In the `cookies` API, the first party domain is represented using the `firstPartyDomain` attribute. All cookies set while first-party isolation is on have this attribute set to the domain of the original page. In the preceding example, this is `a-shopping-site.com` for one cookie and `a-news-site.com` for the other. When first-party isolation is off, all cookies set by websites have this property set to an empty string.

The {{WebExtAPIRef("cookies.get()")}}, {{WebExtAPIRef("cookies.getAll()")}}, {{WebExtAPIRef("cookies.set()")}} and {{WebExtAPIRef("cookies.remove()")}} APIs all accept a `firstPartyDomain` option.

When first-party isolation is on, you must provide this option or the API call will fail and return a rejected promise. For `get()`, `set()`, and `remove()` you must pass a string value. For `getAll()`, you may also pass `null` here, and this will get all cookies, whether or not they have a non-empty value for `firstPartyDomain`.

When first-party isolation is off, the `firstPartyDomain` parameter is optional and defaults to an empty string. A non-empty string can be used to retrieve or modify first-party isolation cookies. Likewise, passing `null` as `firstPartyDomain` to `getAll()` will return all cookies.

## Types

- {{WebExtAPIRef("cookies.Cookie")}}
  - : Represents information about an HTTP cookie.
- {{WebExtAPIRef("cookies.CookieStore")}}
  - : Represents a cookie store in the browser.
- {{WebExtAPIRef("cookies.OnChangedCause")}}
  - : Represents the reason a cookie changed.
- {{WebExtAPIRef("cookies.SameSiteStatus")}}
  - : Represents the same-site status of the cookie.

## Methods

- {{WebExtAPIRef("cookies.get()")}}
  - : Retrieves information about a single cookie.
- {{WebExtAPIRef("cookies.getAll()")}}
  - : Retrieves all cookies that match a given set of filters.
- {{WebExtAPIRef("cookies.set()")}}
  - : Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.
- {{WebExtAPIRef("cookies.remove()")}}
  - : Deletes a cookie by name.
- {{WebExtAPIRef("cookies.getAllCookieStores()")}}
  - : Lists all existing cookie stores.

## Event handlers

- {{WebExtAPIRef("cookies.onChanged")}}
  - : Fired when a cookie is set or removed.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> **Note:** This API is based on Chromium's [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/cookies/) API. This documentation is derived from [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) in the Chromium code.

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
