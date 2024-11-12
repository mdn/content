---
title: webRequest.onAuthRequired
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired
page-type: webextension-api-event
browser-compat: webextensions.api.webRequest.onAuthRequired
---

{{AddonSidebar}}

Fired when the server sends a `401` or `407` status code and a `WWW-Authenticate` header using the `Basic` scheme (that is, when the server asks the client to provide authentication credentials, such as a username and password).

The listener can respond in one of four ways:

- Take no action
  - : The listener can do nothing, just observing the request. If this happens, it does not affect the handling of the request, and the browser asks the user to log in, if appropriate.
- Cancel the request

  - : The listener can cancel the request. If it does this, authentication fails, and the user is not asked to log in. Extensions can cancel requests as follows:

    - in addListener, pass `"blocking"` in the `extraInfoSpec` parameter
    - in the listener, return an object with a `cancel` property set to `true`

- Provide credentials synchronously

  - : If credentials are available synchronously, the extension can supply them synchronously. If the extension does this, the browser attempts to log in with the credentials. The listener can provide credentials synchronously as follows:

    - in addListener, pass `"blocking"` in the `extraInfoSpec` parameter
    - in the listener, return an object with an `authCredentials` property set to the credentials to supply

- Provide credentials asynchronously

  - : The extension might need to fetch credentials asynchronously. For example, the extension might need to fetch credentials from storage or ask the user. In this case, the listener can supply credentials asynchronously as follows:

    - in addListener, pass `"asyncBlocking"` in Chrome and Firefox or `"blocking"` in Firefox in the `extraInfoSpec` parameter
    - If `"blocking"` is provided, the extension can return a `webRequest.BlockingResponse` object or a Promise that resolves to a `webRequest.BlockingResponse` object
    - If `"asyncBlocking"` is provided, the event listener function receives a `asyncCallback` function as its second parameter. `asyncCallback`can be called asynchronously and takes a`webRequest.BlockingResponse` object as its only parameter

      > [!NOTE]
      > Chrome does not support a Promise as a return value ([Chromium issue 1510405](https://crbug.com/1510405)). For alternatives, see [the return value of the `listener`](#listener).

See [Examples](#examples).

If your extension provides bad credentials, then the listener is called again. For this reason, take care to avoid entering an infinite loop by repeatedly providing bad credentials.

## Permissions

In Firefox and Chrome Manifest V2 extensions, you must add the [`"webRequest"` and `"webRequestBlocking"` API permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) to your `manifest.json`.

For Manifest V3 extensions, Chrome no longer supports the `"webRequestBlocking"` permission (except for policy-installed extensions). Instead, the `"webRequest"` and `"webRequestAuthProvider"` permissions enable you to supply credentials asynchronously. Firefox continues to support `"webRequestBlocking"` in Manifest V3 and provides `"webRequestAuthProvider"` to offer cross-browser compatibility.

## Proxy authorization

Firefox does not generally fire `webRequest` events for system requests, such as browser or extension upgrades or search engine queries. To enable proxy authorization to work smoothly for system requests, from version 57, Firefox supports an exception to this.

If an extension has the `"webRequest"`, `"webRequestBlocking"`, `"proxy"`, and `"<all_urls>"` permissions, then it can use `onAuthRequired` to supply credentials for proxy authorization (but not for normal web authorization). The listener cannot cancel system requests or make any other modifications to any system requests.

## Syntax

```js-nolint
browser.webRequest.onAuthRequired.addListener(
  listener,                    // function
  filter,                      //  object
  extraInfoSpec                //  optional array of strings
)
browser.webRequest.onAuthRequired.removeListener(listener)
browser.webRequest.onAuthRequired.hasListener(listener)
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

  - : The function called when this event occurs. The function is passed these arguments:

    - `details`
      - : `object`. Details about the request. See the [details](#details_2) section for more information.
    - `asyncCallback` {{optional_inline}}

      - : A function to call, at most once, to asynchronously modify the request object.
        This parameter is only present if the event listener is registered with `"asyncBlocking"` in the `extraInfoSpec` array. `asyncCallback` is undefined if `extraInfoSpec` is not provided or contains `"blocking"`.

    Returns: {{WebExtAPIRef('webRequest.BlockingResponse')}} or a {{jsxref("Promise")}} depending on the settings in `extraInfoSpec`.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. A filter that restricts the events sent to this listener.
- `extraInfoSpec` {{optional_inline}}

  - : `array` of `string`. Extra options for the event. You can pass any of these values:

    - `"blocking"`: make the request block so you can cancel the request or supply authentication credentials. Return a `BlockingResponse` object with its `cancel` or `authCredentials` properties set.

      - In Chrome, the event listener must respond synchronously.
      - In Firefox, the event listener can respond synchronously or return a promise that resolves to a `BlockingResponse` object to respond asynchronously.

    - `"asyncBlocking"`: handle the request asynchronously. The return value of the event listener is ignored. To resolve the event, pass the `asyncCallback` parameter a `BlockingResponse` object.

      - Supported from Chrome 120 and Firefox 128.
      - Not supported in Safari.

## Additional objects

### details

- `challenger`

  - : `object`. The server requesting authentication. This is an object with the following properties:

    - `host`
      - : `string`. The server's [hostname](https://en.wikipedia.org/wiki/Hostname#Internet_hostnames).
    - `port`
      - : `integer`. The server's port number.

- `cookieStoreId`
  - : `string`. If the request is from a tab open in a contextual identity, the cookie store ID of the contextual identity. See [Work with contextual identities](/en-US/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) for more information.
- `frameId`
  - : `integer`. This is `0` if the request occurs in the main frame; a positive value is the ID of a subframe where the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or `sub_frame`), `frameId` indicates this frame's ID, not the outer frame's ID. Frame IDs are unique within a tab.
- `incognito`
  - : `boolean`. Whether the request is from a private browsing window.
- `isProxy`
  - : `boolean`. `true` for `Proxy-Authenticate`, `false` for `WWW-Authenticate`.
    > **Note:** `webRequest.onAuthRequired` is only called for HTTP and HTTPS/TLS proxy servers requiring authentication, not for SOCKS proxy servers requiring authentication.
- `method`
  - : `string`. Standard HTTP method (For example, `"GET"` or `"POST"`).
- `parentFrameId`
  - : `integer`. ID of the frame that contains the frame that sent the request. Set to `-1` if no parent frame exists.
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
      - : `boolean`. True if the proxy performs domain name resolution based on the hostname supplied, meaning that the client should not do its own DNS lookup.
    - `failoverTimeout`
      - : `integer`. Failover timeout in seconds. If the connection fails to connect the proxy server after this number of seconds, the next proxy server in the array returned from [FindProxyForURL()](</en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy#findproxyforurl()_return_value>) is used.

- `realm` {{optional_inline}}
  - : `string`. The authentication [realm](https://datatracker.ietf.org/doc/html/rfc1945#section-11) provided by the server, if there is one.
- `requestId`
  - : `string`. The ID of the request. Request IDs are unique within a browser session, so you can relate different events associated with the same request.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. The HTTP response headers received with this response.
- `scheme`
  - : `string`. The authentication scheme: `"basic"` or `"digest`".
- `statusCode`
  - : `integer`. Standard HTTP status code returned by the server.
- `statusLine`
  - : `string`. HTTP status line of the response, the `'HTTP/0.9 200 OK'` string for HTTP/0.9 responses (i.e., responses that lack a status line), or an empty string if there are no headers.
- `tabId`
  - : `integer`. ID of the tab where the request takes place. Set to `-1` if the request isn't related to a tab.
- `thirdParty`
  - : `boolean`. Indicates whether the request and its content window hierarchy are third-party.
- `timeStamp`
  - : `number`. The time when this event fired, in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. The type of resource being requested: for example, `"image"`, `"script"`, or `"stylesheet"`.
- `url`
  - : `string`. Target of the request.
- `urlClassification`

  - : `object`. The type of tracking associated with the request, if the request is classified by [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop). This is an object with these properties:

    - `firstParty`
      - : `array` of `strings`. Classification flags for the request's first party.
    - `thirdParty`
      - : `array` of `strings`. Classification flags for the request or its window hierarchy's third parties.

    The classification flags include:

    - `fingerprinting` and `fingerprinting_content`: indicates the request is involved in fingerprinting ("an origin found to fingerprint").
      - `fingerprinting` indicates the domain is in the fingerprinting and tracking category. Examples of this type of domain include advertisers who want to associate a profile with the visiting user.
      - `fingerprinting_content` indicates the domain is in the fingerprinting category but not the tracking category. Examples of this type of domain include payment providers who use fingerprinting techniques to identify the visiting user for anti-fraud purposes.
    - `cryptomining` and `cryptomining_content`: similar to the fingerprinting category but for cryptomining resources.
    - `tracking`, `tracking_ad`, `tracking_analytics`, `tracking_social`, and `tracking_content`: indicates the request is involved in tracking. `tracking` is any generic tracking request. The `ad`, `analytics`, `social`, and `content` suffixes identify the type of tracker.
    - `emailtracking` and `emailtracking_content`: indicates the request is involved in tracking emails.
    - `any_basic_tracking`: a meta flag that combines tracking and fingerprinting flags, excluding `tracking_content` and `fingerprinting_content`.
    - `any_strict_tracking`: a meta flag that combines all tracking and fingerprinting flags.
    - `any_social_tracking`: a meta flag that combines all social tracking flags.

    You can find more information on tracker types on the [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) website. The `content` suffix indicates trackers that track and serve content. Blocking them protects users but can lead to sites breaking or elements not being displayed.

## Examples

This code observes authentication requests for the target URL:

```js
const target = "https://intranet.company.com/";

function observe(requestDetails) {
  console.log(`observing: ${requestDetails.requestId}`);
}

browser.webRequest.onAuthRequired.addListener(observe, { urls: [target] });
```

This code cancels authentication requests for the target URL:

```js
const target = "https://intranet.company.com/";

function cancel(requestDetails) {
  console.log(`canceling: ${requestDetails.requestId}`);
  return { cancel: true };
}

browser.webRequest.onAuthRequired.addListener(cancel, { urls: [target] }, [
  "blocking",
]);
```

This code supplies credentials synchronously. It keeps track of outstanding requests to ensure that it doesn't repeatedly try to submit bad credentials:

```js
const target = "https://intranet.company.com/";

const myCredentials = {
  username: "me@company.com",
  password: "zDR$ERHGDFy",
};

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
    return { cancel: true };
  }
  pendingRequests.push(requestDetails.requestId);
  console.log(`providing credentials for: ${requestDetails.requestId}`);
  return { authCredentials: myCredentials };
}

browser.webRequest.onAuthRequired.addListener(
  provideCredentialsSync,
  { urls: [target] },
  ["blocking"],
);

browser.webRequest.onCompleted.addListener(completed, { urls: [target] });

browser.webRequest.onErrorOccurred.addListener(completed, { urls: [target] });
```

This code supplies credentials asynchronously, fetching them from storage. It also keeps track of outstanding requests to ensure that it doesn't repeatedly try to submit bad credentials:

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
    return { cancel: true };
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
  { urls: [target] },
  ["blocking"],
);

browser.webRequest.onCompleted.addListener(completed, { urls: [target] });

browser.webRequest.onErrorOccurred.addListener(completed, { urls: [target] });
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#event-onAuthRequired) API. This documentation is derived from [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) in the Chromium code.

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
