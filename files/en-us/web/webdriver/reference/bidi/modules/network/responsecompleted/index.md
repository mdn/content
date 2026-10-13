---
title: "`network.responseCompleted` event"
short-title: responseCompleted
slug: Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted
page-type: webdriver-event
browser-compat: webdriver.bidi.network.responseCompleted_event
sidebar: webdriver
---

The `network.responseCompleted` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module fires when the browser has received the whole body of a response.

## Event data

The `params` field in the event notification is an object with the following fields:

- `context`
  - : A string that contains the ID of the [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) in which the request was made, or `null` if the request wasn't made by a document in a context, for example a request made by a worker.
- `intercepts` {{optional_inline}}
  - : Never included, because `isBlocked` is always `false`.
- `isBlocked`
  - : A boolean that indicates whether the request is blocked by an intercept.
    It is always `false` for this event, because intercepts can't block a request once its response is complete.
- `navigation`
  - : A string that contains the [UUID](/en-US/docs/Glossary/UUID) that uniquely identifies the navigation that the request is part of, or `null` if the request isn't a navigation request.
    Requests for a document's subresources, such as stylesheets and scripts, and requests made with `fetch()` have `null`.
    If the navigation was started using the [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) or [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) command, this ID matches the `navigation` value in the command's response.
    The same ID is shared by all events related to this navigation, including navigation events in the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#events) module and other events in the `network` module.
- `redirectCount`
  - : A non-negative integer that contains the number of redirects the browser has followed for this request.
    It is `0` for the original request and increases by one with each redirect.
- `request`
  - : An object that describes the request.
    It contains the following fields:
    - `bodySize`
      - : A non-negative integer that contains the size of the request body in bytes, or `null` if the request has no body.
    - `cookies`
      - : An array of objects, each representing a cookie sent with the request.
        The array is empty if the request has no {{HTTPHeader("Cookie")}} header.

        Each object contains the following fields:
        - `domain`
          - : A string that contains the domain of the cookie.
        - `expiry` {{optional_inline}}
          - : A non-negative integer that contains the expiry time of the cookie, as seconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
            This field is omitted for a cookie that has no expiry time, such as a session cookie.
        - `httpOnly`
          - : A boolean that indicates whether the cookie has the [`HttpOnly`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly) attribute.
        - `name`
          - : A string that contains the name of the cookie.
        - `path`
          - : A string that contains the path of the cookie.
        - `sameSite`
          - : A string that indicates the cookie's [`SameSite`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) setting.
            It has one of the following values:
            - `"default"`: The cookie has no `SameSite` attribute, so the browser's default behavior applies.
            - `"lax"`: The cookie has `SameSite=Lax`.
            - `"none"`: The cookie has `SameSite=None`.
            - `"strict"`: The cookie has `SameSite=Strict`.
        - `secure`
          - : A boolean that indicates whether the cookie has the [`Secure`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) attribute.
        - `size`
          - : A non-negative integer that contains the size of the cookie in bytes.
        - `value`
          - : An object that contains the value of the cookie. It contains the following fields:
            - `type`
              - : A string that indicates how the `value` field of this object is encoded.
                It has one of the following values:
                - `"base64"`: The value is [Base64](/en-US/docs/Glossary/Base64)-encoded bytes, because the bytes are not valid [UTF-8](/en-US/docs/Glossary/UTF-8).
                - `"string"`: The value is text.
            - `value`
              - : A string that contains the cookie value, encoded as specified by `type`.

        Browsers can also include their own, browser-specific fields in these objects.
    - `destination`
      - : A string that contains the [destination](/en-US/docs/Web/API/Request/destination) of the request, such as `"document"`, `"script"`, or `"style"`.
        It is an empty string for a request made with `fetch()` or `XMLHttpRequest`.
    - `headers`
      - : An array of objects, each representing a header of the request, including headers added with the `network.setExtraHeaders` command.
        Each object contains the following fields:
        - `name`
          - : A string that contains the header name, such as `"Accept"`.
        - `value`
          - : An object that contains the header value. It contains the following fields:
            - `type`
              - : A string that indicates how the `value` field of this object is encoded.
                It has one of the following values:
                - `"base64"`: The value is [Base64](/en-US/docs/Glossary/Base64)-encoded bytes, because the bytes are not valid [UTF-8](/en-US/docs/Glossary/UTF-8).
                - `"string"`: The value is text.
            - `value`
              - : A string that contains the header value, encoded as specified by `type`.
    - `headersSize`
      - : A non-negative integer that contains the size of the request headers in bytes.
        For protocols that compress headers, such as HTTP/2, it is the compressed size.
    - `initiatorType`
      - : A string that indicates what started the request, such as `"fetch"`, `"link"`, or `"script"`, or `null` for a request with no initiator type, such as the request for a page loaded into a tab.
        The values match those of {{domxref("PerformanceResourceTiming.initiatorType")}}.
    - `method`
      - : A string that contains the [HTTP request method](/en-US/docs/Web/HTTP/Reference/Methods), such as `"GET"` or `"POST"`.
    - `request`
      - : A string that contains the ID of the request.
        The ID stays the same when the request is redirected.
    - `timings`
      - : An object that contains the times at which the stages of the request happened.
        `timeOrigin` is a time in milliseconds since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date), and the other fields are times in milliseconds relative to `timeOrigin`.
        A field is `0` if its stage hasn't happened, for example the redirect fields for a request that wasn't redirected.
        All the fields are `0` if the request wasn't made by a document or a worker.
        It contains the following fields:
        - `connectEnd`
          - : A number that represents the time when the browser finished establishing the connection to the server, like {{domxref("PerformanceResourceTiming.connectEnd")}}.
        - `connectStart`
          - : A number that represents the time when the browser started establishing the connection to the server, like {{domxref("PerformanceResourceTiming.connectStart")}}.
        - `dnsEnd`
          - : A number that represents the time when the browser finished the domain name lookup, like {{domxref("PerformanceResourceTiming.domainLookupEnd")}}.
        - `dnsStart`
          - : A number that represents the time when the browser started the domain name lookup, like {{domxref("PerformanceResourceTiming.domainLookupStart")}}.
        - `fetchStart`
          - : A number that represents the time when the browser started fetching the resource, after any redirects, like {{domxref("PerformanceResourceTiming.fetchStart")}}.
        - `redirectEnd`
          - : A number that represents the time when the browser received the last byte of the response to the last redirect, like {{domxref("PerformanceResourceTiming.redirectEnd")}}.
        - `redirectStart`
          - : A number that represents the time when the request that was redirected first started, like {{domxref("PerformanceResourceTiming.redirectStart")}}.
        - `requestStart`
          - : A number that represents the time when the browser started sending the request, like {{domxref("PerformanceResourceTiming.requestStart")}}.
        - `requestTime`
          - : A number that represents the time when the request started, like {{domxref("PerformanceEntry.startTime")}}.
        - `responseEnd`
          - : A number that represents the time when the browser received the last byte of the response, like {{domxref("PerformanceResourceTiming.responseEnd")}}.
        - `responseStart`
          - : A number that represents the time when the browser received the first byte of the response, like {{domxref("PerformanceResourceTiming.responseStart")}}.
        - `timeOrigin`
          - : A number that represents the [time origin](/en-US/docs/Web/API/Performance/timeOrigin) of the document or worker that made the request.
        - `tlsStart`
          - : A number that represents the time when the browser started the TLS handshake to secure the connection, like {{domxref("PerformanceResourceTiming.secureConnectionStart")}}.
    - `url`
      - : A string that contains the URL of the request.
- `response`
  - : An object that describes the response.
    It contains the following fields:
    - `authChallenges` {{optional_inline}}
      - : An array of objects, each representing an [authentication](/en-US/docs/Web/HTTP/Guides/Authentication) challenge from the server.
        This field is included only when the response status is `401`, with challenges from the {{HTTPHeader("WWW-Authenticate")}} header, or `407`, with challenges from the {{HTTPHeader("Proxy-Authenticate")}} header.
        The array is empty if the response doesn't have that header.
        Each object contains the following fields:
        - `realm`
          - : A string that contains the realm of the challenge, or an empty string if the challenge has no realm.
        - `scheme`
          - : A string that contains the authentication scheme, such as `"Basic"`.
    - `bodySize`
      - : A non-negative integer that contains the size of the response body in bytes as received, before the browser decodes it (for example, before decompression), or `null` if the browser doesn't report it.
    - `bytesReceived`
      - : A non-negative integer that contains the total number of bytes received for the response, including its headers.
        It is `0` for a response served from the browser's cache.
    - `content`
      - : An object that describes the decoded response body.
        It contains the following field:
        - `size`
          - : A non-negative integer that contains the size of the response body in bytes after the browser decodes it (for example, after decompression).
    - `fromCache`
      - : A boolean that indicates whether the browser served the response from its cache.
        - `true`: The browser served the response from its cache, without contacting the server.
        - `false`: The browser didn't serve the response from its cache, including when it checked with the server that a cached response is still valid.
    - `headers`
      - : An array of objects, each representing a header of the response.
        Each object contains the following fields:
        - `name`
          - : A string that contains the header name, such as `"Content-Type"`.
        - `value`
          - : An object that contains the header value. It contains the following fields:
            - `type`
              - : A string that indicates how the `value` field of this object is encoded.
                It has one of the following values:
                - `"base64"`: The value is [Base64](/en-US/docs/Glossary/Base64)-encoded bytes, because the bytes are not valid [UTF-8](/en-US/docs/Glossary/UTF-8).
                - `"string"`: The value is text.
            - `value`
              - : A string that contains the header value, encoded as specified by `type`.
    - `headersSize`
      - : A non-negative integer that contains the size of the response headers in bytes as received, or `null` if the browser doesn't report it.
    - `mimeType`
      - : A string that contains the [MIME type](/en-US/docs/Glossary/MIME_type) that the browser uses for the response, without parameters, such as `"text/html"` or `"application/json"`.
        It can differ from the {{HTTPHeader("Content-Type")}} header, for example when the browser determines the type from the content, and it can be an empty string, for example for a redirect response.
    - `protocol`
      - : A string that contains the protocol of the response, such as `"http/1.1"` or `"h2"`.
        For a response that wasn't received over HTTP, it is the scheme of the response URL, such as `"data"`.
    - `status`
      - : A non-negative integer that contains the [HTTP status code](/en-US/docs/Web/HTTP/Reference/Status) of the response, such as `200`.
    - `statusText`
      - : A string that contains the status message of the response, such as `"OK"`.
    - `url`
      - : A string that contains the URL of the response.
- `timestamp`
  - : A non-negative integer that represents the time when the event was fired, as milliseconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `userContext` {{optional_inline}}
  - : A string that contains the ID of the [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) of the context in which the request was made, or `null` if the request wasn't made by a document in a context.

## Description

In the [lifecycle of a request](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#requests), this is the last event for a response that the browser received successfully.
It fires after [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) and [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted) for the same request.
If the request fails, [`network.fetchError`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError) fires.
Browsers don't always agree on which of the two events to send, for example for a request that the page aborts while the body is arriving or for a cross-origin request that CORS blocks, so don't rely on receiving only one of them.

When the server responds with a redirect, this event fires for the redirect response too.
The browser then sends `network.beforeRequestSent` for the new URL, with the same request ID and a `redirectCount` that is one higher, and the events for the new URL follow.

The browser doesn't wait for the client after sending this event: a response can't be blocked at this point.

## Examples

### Following a request through a redirect

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to the `network.beforeRequestSent`, `network.responseStarted`, and `network.responseCompleted` events.

Suppose a tab has loaded `https://example.com/`, and the page calls `fetch("/old-items")`.
The server responds with a `302` redirect to `/api/items`.

The browser sends `network.beforeRequestSent` and `network.responseStarted` for `/old-items`, and then the following `network.responseCompleted` event for the redirect response (only some of the fields are shown):

```json
{
  "type": "event",
  "method": "network.responseCompleted",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "isBlocked": false,
    "navigation": null,
    "redirectCount": 0,
    "request": {
      "method": "GET",
      "request": "b9e201af-6475-4bea-a174-51a8290f8087",
      "url": "https://example.com/old-items"
    },
    "response": {
      "headers": [
        {
          "name": "Location",
          "value": {
            "type": "string",
            "value": "/api/items"
          }
        }
      ],
      "status": 302,
      "statusText": "Found",
      "url": "https://example.com/old-items"
    },
    "timestamp": 1791903501504
  }
}
```

It then sends `network.beforeRequestSent` and `network.responseStarted` for `/api/items`, and finally the following `network.responseCompleted` event (only some of the fields are shown):

```json
{
  "type": "event",
  "method": "network.responseCompleted",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "isBlocked": false,
    "navigation": null,
    "redirectCount": 1,
    "request": {
      "method": "GET",
      "request": "b9e201af-6475-4bea-a174-51a8290f8087",
      "url": "https://example.com/api/items"
    },
    "response": {
      "mimeType": "application/json",
      "status": 200,
      "statusText": "OK",
      "url": "https://example.com/api/items"
    },
    "timestamp": 1791903501505
  }
}
```

Both `network.responseCompleted` events have the same `request` ID, so you can tell that they belong to the same request.
The `redirectCount` of `1` shows that the second response is the result of one redirect.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted) event
- [`network.fetchError`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError) event
- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
- [Redirections in HTTP](/en-US/docs/Web/HTTP/Guides/Redirections) guide
