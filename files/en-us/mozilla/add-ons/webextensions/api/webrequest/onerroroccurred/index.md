---
title: webRequest.onErrorOccurred
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onErrorOccurred
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onErrorOccurred
  - webRequest
browser-compat: webextensions.api.webRequest.onErrorOccurred
---
{{AddonSidebar()}}

Fired when a request could not be processed due to an error: for example, a lack of Internet connectivity.

The error is passed to the listener as the `error` property of the [`details`](#details) object.

Note that this event is not fired for HTTP errors (4XX or 5XX responses): these will go through the normal stages of a request, calling any event listeners, and setting `details.statusCode` to report the error.

This event is informational only.

## Syntax

```js
browser.webRequest.onErrorOccurred.addListener(
  listener,             // function
  filter                //  object
)
browser.webRequest.onErrorOccurred.removeListener(listener)
browser.webRequest.onErrorOccurred.hasListener(listener)
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

- `callback`

  - : A function that will be called when this event occurs. The function will be passed the following arguments:

    - `details`
      - : [`object`](#details). Details about the request. See [`details`](#details) below.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. A filter that restricts the events that will be sent to this listener.

## Additional objects

### details

- `cookieStoreId`
  - : `string`. If the request is from a tab open in a contextual identity, the cookie store ID of the contextual identity.
- `documentUrl`
  - : `string`. URL of the document in which the resource will be loaded. For example, if the web page at "https\://example.com" contains an image or an iframe, then the `documentUrl` for the image or iframe will be "https\://example.com". For a top-level document, `documentUrl` is undefined.
- `error`
  - : `string`. The error description. This string is an internal error string, may vary from one browser to another, and is not guaranteed to stay the same between releases.
- `frameId`
  - : `integer`. Zero if the request happens in the main frame; a positive value is the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab.
- `fromCache`
  - : `boolean`. Indicates if this response was fetched from disk cache.
- `incognito`
  - : `boolean`. Whether the request is from a private browsing window.
- `ip`
  - : `string`. The IP address of the server the request was sent to. It may be a literal IPv6 address.
- `method`
  - : `string`. Standard HTTP method: for example, "GET" or "POST".
- `originUrl`

  - : `string`. URL of the resource which triggered the request. For example, if "https\://example.com" contains a link, and the user clicks the link, then the `originUrl` for the resulting request is "https\://example.com".

    The `originUrl` is often but not always the same as the `documentUrl`. For example, if a page contains an iframe, and the iframe contains a link that loads a new document into the iframe, then the `documentUrl` for the resulting request will be the iframe's parent document, but the `originUrl` will be the URL of the document in the iframe that contained the link.

- `parentFrameId`
  - : `integer`. ID of the frame that contains the frame which sent the request. Set to -1 if no parent frame exists.
- `proxyInfo`

  - : `object`. This property is present only if the request is being proxied. It contains the following properties:

    - `host`
      - : `string`. The hostname of the proxy server.
    - `port`
      - : `integer`. The port number of the proxy server.
    - `type`

      - : `string`. The type of proxy server. One of:

        - "http": HTTP proxy (or SSL CONNECT for HTTPS)
        - "https": HTTP proxying over TLS connection to proxy
        - "socks": SOCKS v5 proxy
        - "socks4": SOCKS v4 proxy
        - "direct": no proxy
        - "unknown": unknown proxy

    - `username`
      - : `string`. Username for the proxy service.
    - `proxyDNS`
      - : `boolean`. True if the proxy will perform domain name resolution based on the hostname supplied, meaning that the client should not do its own DNS lookup.
    - `failoverTimeout`
      - : `integer`. Failover timeout in seconds. If the proxy connection fails, the proxy will not be used again for this period.

- `requestId`
  - : `string`. The ID of the request. Request IDs are unique within a browser session, so you can use them to relate different events associated with the same request.
- `tabId`
  - : `integer`. The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab.
- `thirdParty`
  - : `boolean`. Indicates whether the request and its content window hierarchy are third party.
- `timeStamp`
  - : `number`. The time when this event fired, in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. The type of resource being requested: for example, "image", "script", "stylesheet".
- `url`
  - : `string`. Target of the request.
- `urlClassification`

  - : `object`. The type of tracking associated with the request, if with the request has been classified by [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop). This is an object with the following properties:

    - `firstParty`
      - : `array` of `strings`. Classification flags for the request's first party.
    - `thirdParty`
      - : `array` of `strings`. Classification flags for the request or its window hierarchy's third parties.

    The classification flags include:

    - `fingerprinting` and `fingerprinting_content`: indicates the request is involved in fingerprinting. `fingerprinting_content` indicates the request is loaded from an origin that has been found to fingerprint but is not considered to participate in tracking, such as a payment provider.
    - `cryptomining` and `cryptomining_content`: similar to the fingerprinting category but for cryptomining resources.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social`,  and `tracking_content`: indicates the request is involved in tracking. `tracking` is any generic tracking request, the `ad`, `analytics`, `social`, and `content` suffixes identify the type of tracker.
    - `any_basic_tracking`: a meta flag that combines any tracking and fingerprinting flags, excluding `tracking_content` and `fingerprinting_content`.
    - `any_strict_tracking`: a meta flag that combines any tracking and fingerprinting flags, including `tracking_content` and `fingerprinting_content`.
    - `any_social_tracking`: a meta flag that combines any social tracking flags.

## Browser compatibility

{{Compat}}

## Examples

```js
var target = "<all_urls>";

/*
e.g., with no network:
"https://developer.mozilla.org/en-US/"
NS_ERROR_NET_ON_RESOLVED in Firefox
net::ERR_INTERNET_DISCONNECTED in Chrome
*/
function logError(responseDetails) {
  console.log(responseDetails.url);
  console.log(responseDetails.error);
}

browser.webRequest.onErrorOccurred.addListener(
  logError,
  {urls: [target]}
);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.webRequest`](https://developer.chrome.com/extensions/webRequest#event-onErrorOccurred) API. This documentation is derived from [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) in the Chromium code.
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
