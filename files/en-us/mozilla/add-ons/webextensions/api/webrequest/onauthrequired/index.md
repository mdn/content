---
title: webRequest.onAuthRequired
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onAuthRequired
  - webRequest
browser-compat: webextensions.api.webRequest.onAuthRequired
---
{{AddonSidebar()}}

Fired when the server sends a `401` or `407` status code (that is, when the server is asking the client to provide authentication credentials, such as a username and password).

The listener can respond in one of four different ways:

- Take no action
  - : The listener can do nothing, just observing the request. If this happens, it will have no effect on the handling of the request, and the browser will probably just ask the user to log in.
- Cancel the request

  - : The listener can cancel the request. If they do this, then authentication will fail, and the user will not be asked to log in. Extensions can cancel requests as follows:

    - in addListener, pass `"blocking"` in the `extraInfoSpec` parameter
    - in the listener itself, return an object with a `cancel` property set to `true`

- Provide credentials synchronously

  - : If credentials are available synchronously, the extension can supply them synchronously. If the extension does this, then the browser will attempt to log in with the given credentials. The listener can provide credentials synchronously as follows:

    - in addListener, pass `"blocking"` in the `extraInfoSpec` parameter
    - in the listener, return an object with an `authCredentials` property set to the credentials to supply

- Provide credentials asynchronously

  - : The extension might need to fetch credentials asynchronously. For example, the extension might need to fetch credentials from storage, or ask the user. In this case, the listener can supply credentials asynchronously as follows:

    - in addListener, pass `"blocking"` in the `extraInfoSpec` parameter
    - in the listener, return a `Promise` that is resolved with an object containing an `authCredentials` property, set to the credentials to supply

See [Examples](#examples).

If you use `"blocking"` you must have the ["webRequestBlocking" API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in your `manifest.json`.

If your extension provides bad credentials, then the listener will be called again. For this reason, take care not to enter an infinite loop by repeatedly providing bad credentials.

## Proxy authorization

In general, Firefox does not fire `webRequest` events for system requests, such as browser or extension upgrades, or search engine queries. To enable proxy authorization to work smoothly for system requests, from version 57 Firefox implements an exception to this.

If an extension has the `"webRequest"`, `"webRequestBlocking"`, `"proxy"`, and `"<all_urls>"` permissions, then it will be able to use `onAuthRequired` to supply credentials for proxy authorization (but not for normal web authorization). The listener will not be able to cancel system requests or make any other modifications to any system requests.

## Syntax

```js
browser.webRequest.onAuthRequired.addListener(
  listener,                    // function
  filter,                      //  object
  extraInfoSpec                //  optional array of strings
)
browser.webRequest.onAuthRequired.removeListener(listener)
browser.webRequest.onAuthRequired.hasListener(listener)
```

Events have three functions:

- `addListener(callback, filter, extraInfoSpec)`
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
      - : [`object`](#details). Details about the request. See [`details`](#details_2) below.

    Returns: {{WebExtAPIRef('webRequest.BlockingResponse')}} or a {{jsxref("Promise")}}.

    - To handle the request synchronously, include `"blocking"` in the `extraInfoSpec` parameter and return a `BlockingResponse` object, with its `cancel` or its `authCredentials` properties set.
    - To handle the request asynchronously, include `"blocking"` in the `extraInfoSpec` parameter and return a `Promise` that is resolved with a  `BlockingResponse` object, with its `cancel` or its `authCredentials` properties set.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. A filter that restricts the events that will be sent to this listener.
- `extraInfoSpec` {{optional_inline}}

  - : `array` of `string`. Extra options for the event. You can pass any of the following values:

    - `"blocking"`: make the request block, so you can cancel the request or supply authentication credentials
    - `"responseHeaders"`: include `responseHeaders` in the `details` object passed to the listener

## Additional objects

### details

- `challenger`

  - : `object`. The server requesting authentication. This is an object with the following properties:

    - `host`
      - : `string`. The server's [hostname](https://en.wikipedia.org/wiki/Hostname#Internet_hostnames).
        > **Warning:** Unlike Chrome, Firefox will return the requested host instead of the proxy requesting the authentication, even if `isProxy` is `true`.
    - `port`
      - : `integer`. The server's port number.

- `cookieStoreId`
  - : `string`. If the request is from a tab open in a contextual identity, the cookie store ID of the contextual identity.
- `frameId`
  - : `integer`. This is `0` if the request happens in the main frame; a positive value is the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab.
- `incognito`
  - : `boolean`. Whether the request is from a private browsing window.
- `isProxy`
  - : `boolean`. `true` for `Proxy-Authenticate`, `false` for `WWW-Authenticate`.
    > **Note:** `webRequest.onAuthRequired` is only called for HTTP and HTTPS/SSL proxy servers requiring authentication, and not for SOCKS proxy servers requiring authentication.
- `method`
  - : `string`. Standard HTTP method (For example, `"GET"` or `"POST"`).
- `parentFrameId`
  - : `integer`. ID of the frame that contains the frame which sent the request. Set to `-1` if no parent frame exists.
- `proxyInfo`

  - : `object`. This property is present only if the request is being proxied. It contains the following properties:

    - `host`
      - : `string`. The hostname of the proxy server.
    - `port`
      - : `integer`. The port number of the proxy server.
    - `type`

      - : `string`. The type of proxy server. One of:

        - `"http"`: HTTP proxy (or SSL CONNECT for HTTPS)
        - `"https"`: HTTP proxying over TLS connection to proxy
        - `"socks"`: SOCKS v5 proxy
        - `"socks4"`: SOCKS v4 proxy
        - `"direct"`: no proxy
        - `"unknown"`: unknown proxy

    - `username`
      - : `string`. Username for the proxy service.
    - `proxyDNS`
      - : `boolean`. True if the proxy will perform domain name resolution based on the hostname supplied, meaning that the client should not do its own DNS lookup.
    - `failoverTimeout`
      - : `integer`. Failover timeout in seconds. If the connection fails to connect the proxy server after this number of seconds, the next proxy server in the array returned from [FindProxyForURL()](</en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy#findproxyforurl()_return_value>) will be used.

- `realm` {{optional_inline}}
  - : `string`. The authentication [realm](https://datatracker.ietf.org/doc/html/rfc1945#section-11) provided by the server, if there is one.
- `requestId`
  - : `string`. The ID of the request. Request IDs are unique within a browser session, so you can use them to relate different events associated with the same request.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. The HTTP response headers that were received along with this response.
- `scheme`
  - : `string`. The authentication scheme: `"basic"` or `"digest`".
- `statusCode`
  - : `integer`. Standard HTTP status code returned by the server.
- `statusLine`
  - : `string`. HTTP status line of the response or the `'HTTP/0.9 200 OK'` string for HTTP/0.9 responses (i.e., responses that lack a status line) or an empty string if there are no headers.
- `tabId`
  - : `integer`. ID of the tab in which the request takes place. Set to `-1` if the request isn't related to a tab.
- `thirdParty`
  - : `boolean`. Indicates whether the request and its content window hierarchy are third party.
- `timeStamp`
  - : `number`. The time when this event fired, in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. The type of resource being requested: for example, `"image"`, `"script"`, `"stylesheet"`.
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
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social`,  and `tracking_content`: indicates the request is involved in tracking. `tracking` is any generic tracking request, the `ad`, `analytics`, `social`, and `content` suffixes identify the type of tracker.
    - `any_basic_tracking`: a meta flag that combines any tracking and fingerprinting flags, excluding `tracking_content` and `fingerprinting_content`.
    - `any_strict_tracking`: a meta flag that combines any tracking and fingerprinting flags, including `tracking_content` and `fingerprinting_content`.
    - `any_social_tracking`: a meta flag that combines any social tracking flags.

## Browser compatibility

{{Compat}}

## Examples

This code just observes authentication requests for the target URL:

```js
const target = "https://intranet.company.com/";

function observe(requestDetails) {
  console.log(`observing: ${requestDetails.requestId}`);
}

browser.webRequest.onAuthRequired.addListener(
  observe,
  {urls: [target]}
);
```

This code cancels authentication requests for the target URL:

```js
const target = "https://intranet.company.com/";

function cancel(requestDetails) {
  console.log(`canceling: ${requestDetails.requestId}`);
  return {cancel: true};
}

browser.webRequest.onAuthRequired.addListener(
  cancel,
  {urls: [target]},
  ["blocking"]
);
```

This code supplies credentials synchronously. It has to keep track of outstanding requests, to ensure that it doesn't repeatedly try to submit bad credentials:

```js
const target = "https://intranet.company.com/";

const myCredentials = {
  username: "me@company.com",
  password: "zDR$ERHGDFy"
}

const pendingRequests = [];

// A request has completed.
// We can stop worrying about it.
function completed(requestDetails) {
  console.log(`completed: ${requestDetails.requestId}`);
  let index = pendingRequests.indexOf(requestDetails.requestId);
  if (index > -1) {
    pendingRequests.splice(index, 1);
  }
}

function provideCredentialsSync(requestDetails) {
  // If we have seen this request before, then
  // assume our credentials were bad, and give up.
  if (pendingRequests.includes(requestDetails.requestId)) {
    console.log(`bad credentials for: ${requestDetails.requestId}`);
    return {cancel:true};
  }
  pendingRequests.push(requestDetails.requestId);
  console.log(`providing credentials for: ${requestDetails.requestId}`);
  return {authCredentials: myCredentials};
}

browser.webRequest.onAuthRequired.addListener(
    provideCredentialsSync,
    {urls: [target]},
    ["blocking"]
  );

browser.webRequest.onCompleted.addListener(
  completed,
  {urls: [target]}
);

browser.webRequest.onErrorOccurred.addListener(
  completed,
  {urls: [target]}
);
```

This code supplies credentials asynchronously, fetching them from storage. It also has to keep track of outstanding requests, to ensure that it doesn't repeatedly try to submit bad credentials:

```js
const target = "https://httpbin.org/basic-auth/*";

const pendingRequests = [];

/*
* A request has completed. We can stop worrying about it.
*/
function completed(requestDetails) {
  console.log(`completed: ${requestDetails.requestId}`);
  let index = pendingRequests.indexOf(requestDetails.requestId);
  if (index > -1) {
    pendingRequests.splice(index, 1);
  }
}

function provideCredentialsAsync(requestDetails) {
  // If we have seen this request before,
  // then assume our credentials were bad,
  // and give up.
  if (pendingRequests.includes(requestDetails.requestId)) {
    console.log(`bad credentials for: ${requestDetails.requestId}`);
    return {cancel: true};

  } else {
    pendingRequests.push(requestDetails.requestId);
    console.log(`providing credentials for: ${requestDetails.requestId}`);
    // we can return a promise that will be resolved
    // with the stored credentials
    return browser.storage.local.get(null);
  }
}

browser.webRequest.onAuthRequired.addListener(
    provideCredentialsAsync,
    {urls: [target]},
    ["blocking"]
  );

browser.webRequest.onCompleted.addListener(
  completed,
  {urls: [target]}
);

browser.webRequest.onErrorOccurred.addListener(
  completed,
  {urls: [target]}
);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/webRequest/#event-onAuthRequired) API. This documentation is derived from [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) in the Chromium code.
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
