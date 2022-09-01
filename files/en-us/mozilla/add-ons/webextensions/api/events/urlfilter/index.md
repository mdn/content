---
title: events.UrlFilter
slug: Mozilla/Add-ons/WebExtensions/API/events/UrlFilter
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Reference
  - Type
  - UrlFilter
  - WebExtensions
  - events
browser-compat: webextensions.api.events.UrlFilter
---
{{AddonSidebar()}}

Describes various criteria for filtering URLs. If all of the criteria specified in the filter's properties match the URL, then the filter matches. Filters are often provided to API methods in an [Array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of UrlFilters. For example, [webNavigation](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation) listeners can be added with a filter which is an object with a single `url` property that is an [Array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of UrlFilters, e.g. `{url:[UrlFilter, UrlFilter, …]}`. If any filter within the Array of UrlFilters matches, then it is considered a match for the Array. Effectively, the criteria specified within a single filter are AND'ed together, while all of the individual filters within an Array are OR'ed.

All criteria are case sensitive.

## Type

Values of this type are objects. They contain the following properties:

However, note that these last two patterns will not match the last component of the hostname, because no implicit dot is added at the end of the hostname. So for example, `"org."` will match `https://borg.com` but not `https://example.org`. To match these patterns, use `hostSuffix`.

- `hostContains` {{optional_inline}}

  - : `string`. Matches if the [hostname](/en-US/docs/Web/API/HTMLAnchorElement/hostname) of the URL (without protocol or port – see `schemes` and `ports`) contains the given string.

    - To test whether a hostname component starts with "foo", use `".foo"`. This matches `www.foobar.com` and `foo.com`, because an implicit dot is added at the beginning of the hostname.
    - To test whether a hostname component ends with "foo", use `"foo."`.
    - To test whether a hostname component exactly matches "foo", use `".foo."`.

- `hostEquals` {{optional_inline}}

  - : `string`. Matches if the hostname of the URL is equal to a specified string.

    - Example: `"www.example.com"` matches `http://www.example.com` and `https://www.example.com/`, but not `http://example.com/`.

- `hostPrefix` {{optional_inline}}
  - : `string`. Matches if the hostname of the URL starts with a specified string.
- `hostSuffix` {{optional_inline}}

  - : `string`. Matches if the hostname of the URL ends with a specified string.

    - Example: `".example.com"` matches `http://www.example.com/`, but not `http://example.com/`.
    - Example: `"example.com"` matches `http://www.example.com/`, and `http://fakeexample.com/`.

- `pathContains` {{optional_inline}}
  - : `string`. Matches if the path segment of the URL contains a specified string.
- `pathEquals` {{optional_inline}}
  - : `string`. Matches if the path segment of the URL is equal to a specified string.
- `pathPrefix` {{optional_inline}}
  - : `string`. Matches if the path segment of the URL starts with a specified string.
- `pathSuffix` {{optional_inline}}
  - : `string`. Matches if the path segment of the URL ends with a specified string.
- `queryContains` {{optional_inline}}
  - : `string`. Matches if the query segment of the URL contains a specified string.
- `queryEquals` {{optional_inline}}
  - : `string`. Matches if the query segment of the URL is equal to a specified string.
- `queryPrefix` {{optional_inline}}
  - : `string`. Matches if the query segment of the URL starts with a specified string.
- `querySuffix` {{optional_inline}}
  - : `string`. Matches if the query segment of the URL ends with a specified string.
- `urlContains` {{optional_inline}}
  - : `string`. Matches if the URL (without fragment identifier) contains a specified string. Port numbers are stripped from the URL if they match the default port number.
- `urlEquals` {{optional_inline}}
  - : `string`. Matches if the URL (without fragment identifier) is equal to a specified string. Port numbers are stripped from the URL if they match the default port number.
- `urlMatches` {{optional_inline}}

  - : `string`. Matches if the URL (without fragment identifier) matches a specified [regular expression](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions). Port numbers are stripped from the URL if they match the default port number.

    - For example: `urlMatches: "^[^:]*:(?://)?(?:[^/]*\\.)?mozilla\\.org/.*$"` matches `https://mozilla.org/`, `https://developer.mozilla.org/`, but not `https://developer.fakemozilla.org/`.

- `originAndPathMatches` {{optional_inline}}
  - : `string`. Matches if the URL without query segment and fragment identifier matches a specified [regular expression](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions). Port numbers are stripped from the URL if they match the default port number.
- `urlPrefix` {{optional_inline}}

  - : `string`. Matches if the URL (without fragment identifier) starts with a specified string. Port numbers are stripped from the URL if they match the default port number.

    - Example: `"https://developer"` matches `https://developer.mozilla.org/` and `https://developers.facebook.com/`.

- `urlSuffix` {{optional_inline}}
  - : `string`. Matches if the URL (without fragment identifier) ends with a specified string. Port numbers are stripped from the URL if they match the default port number. Note that an implicit forward slash "/" is added after the host, so `"com/"` matches `https://example.com`, but `"com"` does not.
- `schemes` {{optional_inline}}

  - : `array` of `string`. Matches if the scheme of the URL is equal to any of the schemes specified in the array. Because schemes are always converted to lowercase, this should always be given in lowercase or it will never match.

    - Example: `["https"]` will match only HTTPS URLs.

- `ports` {{optional_inline}}

  - : `array` of (`integer` or (`array` of `integer`)). An array which may contain integers and arrays of integers. Integers are interpreted as port numbers, while arrays of integers are interpreted as port ranges. Matches if the port of the URL matches any port number or is contained in any ranges.

    - For example: `[80, 443, [1000, 1200]]` matches all requests on ports 80, 443, and in the range 1000-1200.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/events/#type-UrlFilter) API. This documentation is derived from [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
