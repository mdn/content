---
title: webRequest.onBeforeRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
page-type: webextension-api-event
browser-compat: webextensions.api.webRequest.onBeforeRequest
---

{{AddonSidebar()}}

This event is triggered when a request is about to be made, and before headers are available. This is a good place to listen if you want to cancel or redirect the request.

To cancel or redirect the request, first include `"blocking"` in the `extraInfoSpec` array argument to `addListener()`. Then, in the listener function, return a {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}} object, setting the appropriate property:

- to cancel the request, include a property `cancel` with the value `true`.
- to redirect the request, include a property `redirectUrl` with the value set to the URL to which you want to redirect.

If an extension wants to redirect a public (e.g. HTTPS) URL to an [extension page](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages), the extension's manifest.json file must contain a [web_accessible_resources](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) key that lists the URL for the extension page.

When multiple blocking handlers modify a request, only one set of modifications take effect. Redirects and cancellations have the same precedence. So if you canceled a request, you might see another request with the same `requestId` again if another blocking handler redirected the request.

From Firefox 52 onwards, instead of returning `BlockingResponse`, the listener can return a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which is resolved with a `BlockingResponse`. This enables the listener to process the request asynchronously.

If you use `"blocking"`, you must have the ["webRequestBlocking" API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in your manifest.json.

## Syntax

```js-nolint
browser.webRequest.onBeforeRequest.addListener(
  listener,             // function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onBeforeRequest.removeListener(listener)
browser.webRequest.onBeforeRequest.hasListener(listener)
```

Events have three functions:

- `addListener(listener, filter, extraInfoSpec)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`

  - : The function called when this event occurs. The function is passed this argument:

    - `details`
      - : `object`. Details about the request. See the [details](#details_2) section for more information.

    Returns: {{WebExtAPIRef('webRequest.BlockingResponse')}}. If `"blocking"` is specified in the `extraInfoSpec` parameter, the event listener should return a `BlockingResponse` object, and can set either its `cancel` or its `redirectUrl` properties. From Firefox 52 onwards, instead of returning `BlockingResponse`, the listener can return a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which is resolved with a `BlockingResponse`. This enables the listener to process the request asynchronously.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. A filter that restricts the events that is sent to this listener.
- `extraInfoSpec` {{optional_inline}}

  - : `array` of `string`. Extra options for the event. You can pass any of the following values:

    - `"blocking"`: make the request synchronous, so you can cancel or redirect the request
    - `"requestBody"`: include `requestBody` in the `details` object passed to the listener

## Additional objects

### details

- `cookieStoreId`
  - : `string`. If the request is from a tab open in a contextual identity, the cookie store ID of the contextual identity.
- `documentUrl`
  - : `string`. URL of the document in which the resource will be loaded. For example, if the web page at "https\://example.com" contains an image or an iframe, then the `documentUrl` for the image or iframe will be "https\://example.com". For a top-level document, `documentUrl` is undefined.
- `frameAncestors`

  - : `array`. Contains information for each document in the frame hierarchy up to the top-level document. The first element in the array contains information about the immediate parent of the document being requested, and the last element contains information about the top-level document. If the load is actually for the top-level document, then this array is empty.

    - `url`
      - : `string`. The URL that the document was loaded from.
    - `frameId`
      - : `integer`. The `frameId` of the document. `details.frameAncestors[0].frameId` is the same as `details.parentFrameId`.

- `frameId`
  - : `integer`. Zero if the request happens in the main frame; a positive value is the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab.
- `incognito`
  - : `boolean`. Whether the request is from a private browsing window.
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

- `requestBody` {{optional_inline}}

  - : `object`. Contains the HTTP request body data. Only provided if `extraInfoSpec` contains `"requestBody"`.

    - `error` {{optional_inline}}
      - : `string`. This is set if any errors were encountered when obtaining request body data.
    - `formData` {{optional_inline}}

      - : `object`. This object is present if the request method is POST and the body is a sequence of key-value pairs encoded in UTF-8 as either "multipart/form-data" or "application/x-www-form-urlencoded".

        It is a dictionary in which each key contains the list of all values for that key. For example: `{'key': ['value1', 'value2']}`. If the data is of another media type, or if it is malformed, the object is not present.

    - `raw` {{optional_inline}}
      - : `array` of `{{WebExtAPIRef('webRequest.UploadData')}}`. If the request method is PUT or POST, and the body is not already parsed in `formData`, then this array contains the unparsed request body elements.

- `requestId`
  - : `string`. The ID of the request. Request IDs are unique within a browser session, so you can use them to relate different events associated with the same request.
- `tabId`
  - : `integer`. ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab.
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
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social`, and `tracking_content`: indicates the request is involved in tracking. `tracking` is any generic tracking request, the `ad`, `analytics`, `social`, and `content` suffixes identify the type of tracker.
    - `any_basic_tracking`: a meta flag that combines any tracking and fingerprinting flags, excluding `tracking_content` and `fingerprinting_content`.
    - `any_strict_tracking`: a meta flag that combines any tracking and fingerprinting flags, including `tracking_content` and `fingerprinting_content`.
    - `any_social_tracking`: a meta flag that combines any social tracking flags.

## Browser compatibility

{{Compat}}

### DNS resolution ordering when BlockingResponse is used

Regarding DNS resolution when BlockingResponse is used with OnBeforeRequest: In HTTP Channel, onBeforeRequest with blocking response does happen prior to DNS resolution and also prior to speculative connect. For other channels, speculative connect may cause DNS requests to happen before onBeforeRequest. This ordering is not something an extension developer ought to rely on as it may vary across browsers, and from one browser version to another, let alone one request channel to another. Refer [BugZilla issue clarification provided by Mozilla developers on DNS resolution ordering](https://bugzil.la/1466099)

## Examples

This code logs the URL for every resource requested which matches the [\<all_urls>](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#all_urls) pattern:

```js
function logURL(requestDetails) {
  console.log(`Loading: ${requestDetails.url}`);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});
```

This code cancels requests for images that are made to URLs under "https\://developer.mozilla.org/" (to see the effect, visit any page on MDN that contains images, such as [webRequest](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)):

```js
// match pattern for the URLs to redirect
let pattern = "https://developer.mozilla.org/*";

// cancel function returns an object
// which contains a property `cancel` set to `true`
function cancel(requestDetails) {
  console.log(`Canceling: ${requestDetails.url}`);
  return { cancel: true };
}

// add the listener,
// passing the filter argument and "blocking"
browser.webRequest.onBeforeRequest.addListener(
  cancel,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

This code replaces, by redirection, all network requests for images that are made to URLs under "https\://developer.mozilla.org/" (to see the effect, visit any page on MDN that contains images, such as [webRequest](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)):

```js
// match pattern for the URLs to redirect
let pattern = "https://developer.mozilla.org/*";

// redirect function
// returns an object with a property `redirectURL`
// set to the new URL
function redirect(requestDetails) {
  console.log(`Redirecting: ${requestDetails.url}`);
  return {
    redirectUrl:
      "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif",
  };
}

// add the listener,
// passing the filter argument and "blocking"
browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

This code is exactly like the previous example, except that the listener handles the request asynchronously. It returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that sets a timer, and resolves with the redirect URL when the timer expires:

```js
// match pattern for the URLs to redirect
let pattern = "https://developer.mozilla.org/*";

// URL we will redirect to
let redirectUrl =
  "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif";

// redirect function returns a Promise
// which is resolved with the redirect URL when a timer expires
function redirectAsync(requestDetails) {
  console.log(`Redirecting async: ${requestDetails.url}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ redirectUrl });
    }, 2000);
  });
}

// add the listener,
// passing the filter argument and "blocking"
browser.webRequest.onBeforeRequest.addListener(
  redirectAsync,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

Another example, that redirects all images to a data URL:

```js
let pattern = "https://developer.mozilla.org/*";

let image = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect style="stroke-width: 10; stroke: #666;" width="100%" height="100%" fill="#d4d0c8" />
    <text transform="translate(0, 9)" x="50%" y="50%" width="100%" fill="#666" height="100%" style="text-anchor: middle; font: bold 10pt 'Segoe UI', Arial, Helvetica, Sans-serif;">Blocked</text>
  </svg>
`;

function listener(details) {
  const redirectUrl = `data:image/svg+xml,${encodeURIComponent(image)}`;
  return { redirectUrl };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

Here's another version:

```js
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const pattern = "https://developer.mozilla.org/*";

let image = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect width="100%" height="100%" fill="${randomColor()}"/>
  </svg>
`;

function listener(details) {
  const redirectUrl = `data:image/svg+xml,${encodeURIComponent(image)}`;
  return { redirectUrl };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/webRequest/#event-onBeforeRequest) API. This documentation is derived from [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) in the Chromium code.

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
