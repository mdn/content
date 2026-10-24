---
title: "`network.fetchError` event"
short-title: fetchError
slug: Web/WebDriver/Reference/BiDi/Modules/network/fetchError
page-type: webdriver-event
browser-compat: webdriver.bidi.network.fetchError_event
sidebar: webdriver
---

The `network.fetchError` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module fires when a request ends in an error, for example because the host can't be reached or the request is aborted.

## Event data

The `params` field in the event notification is an object with the following fields:

- `context`
  - : A string that contains the ID of the [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) in which the request was made, or `null` if the request wasn't made by a document in a context, for example a request made by a worker.
- `errorText`
  - : A string that describes the error.
    The text is browser-specific, such as `NS_ERROR_UNKNOWN_HOST` or `net::ERR_NAME_NOT_RESOLVED` for a host name that can't be resolved, so don't rely on this value for assertions in tests.
- `intercepts` {{optional_inline}}
  - : Never included, because `isBlocked` is always `false`.
- `isBlocked`
  - : A boolean that indicates whether the request is blocked by an intercept.
    It is always `false` for this event, because no intercept phase applies to it.
- `navigation`
  - : A string that contains the [UUID](/en-US/docs/Glossary/UUID) that uniquely identifies the navigation that the request is part of, or `null` if the request isn't a navigation request.
    Requests for a document's subresources, such as stylesheets and scripts, and requests made with `fetch()` have `null`.
    When a navigation fails, the [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) command returns an error instead of a navigation ID, but the [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) event for the navigation has the same ID.
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
            - `default`: The cookie has no `SameSite` attribute, so the browser's default behavior applies.
            - `lax`: The cookie has `SameSite=Lax`.
            - `none`: The cookie has `SameSite=None`.
            - `strict`: The cookie has `SameSite=Strict`.
        - `secure`
          - : A boolean that indicates whether the cookie has the [`Secure`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) attribute.
        - `size`
          - : A non-negative integer that contains the size of the cookie in bytes.
        - `value`
          - : An object that contains the value of the cookie. It contains the following fields:
            - `type`
              - : A string that indicates how the `value` field of this object is encoded.
                It has one of the following values:
                - `base64`: The value is [Base64](/en-US/docs/Glossary/Base64)-encoded bytes, because the bytes are not valid [UTF-8](/en-US/docs/Glossary/UTF-8).
                - `string`: The value is text.
            - `value`
              - : A string that contains the cookie value, encoded as specified by `type`.

        Browsers can also include their own, browser-specific fields in these objects.
    - `destination`
      - : A string that contains the [destination](/en-US/docs/Web/API/Request/destination) of the request, such as `document`, `script`, or `style`.
        It is an empty string for a request made with `fetch()` or `XMLHttpRequest`.
    - `headers`
      - : An array of objects, each representing a header of the request, including headers added with the `network.setExtraHeaders` command.
        Each object contains the following fields:
        - `name`
          - : A string that contains the header name, such as `Accept`.
        - `value`
          - : An object that contains the header value. It contains the following fields:
            - `type`
              - : A string that indicates how the `value` field of this object is encoded.
                It has one of the following values:
                - `base64`: The value is [Base64](/en-US/docs/Glossary/Base64)-encoded bytes, because the bytes are not valid [UTF-8](/en-US/docs/Glossary/UTF-8).
                - `string`: The value is text.
            - `value`
              - : A string that contains the header value, encoded as specified by `type`.
    - `headersSize`
      - : A non-negative integer that contains the size of the request headers in bytes.
        For protocols that compress headers, such as HTTP/2, it is the compressed size.
    - `initiatorType`
      - : A string that indicates what started the request, such as `fetch`, `link`, or `script`, or `null` for a request with no initiator type, such as the request for a page loaded into a tab.
        The values match those of {{domxref("PerformanceResourceTiming.initiatorType")}}.
    - `method`
      - : A string that contains the [HTTP request method](/en-US/docs/Web/HTTP/Reference/Methods), such as `GET` or `POST`.
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
- `timestamp`
  - : A non-negative integer that represents the time when the event was fired, as milliseconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `userContext` {{optional_inline}}
  - : A string that contains the ID of the [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) of the context in which the request was made, or `null` if the request wasn't made by a document in a context.

## Description

In the [lifecycle of a request](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#requests), this event ends a request that fails.
It can fire at any point after [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent), for example:

- Before a response arrives, when the host name can't be resolved or the server refuses the connection
- After [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted), when the page aborts the request while the body is arriving, for example with an {{domxref("AbortSignal")}}

If you're also subscribed to `network.beforeRequestSent`, you always receive it for the request first, even when the request fails before it is sent.
This event has no `response` field, even if `network.responseStarted` fired for the request.

When a navigation fails, this event has the navigation's `navigation` ID, so you can match it with the [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) event.

## Examples

### Receiving an event when a host can't be reached

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `network.fetchError`.

Suppose a tab has loaded `https://example.com/`, and the page calls `fetch("https://unknown.invalid/items")`.
The `.invalid` domain never resolves, so the request fails.
The browser sends the following event (the `headers` array is shortened, and some of the `request` fields are left out):

```json
{
  "type": "event",
  "method": "network.fetchError",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "errorText": "NS_ERROR_UNKNOWN_HOST",
    "isBlocked": false,
    "navigation": null,
    "redirectCount": 0,
    "request": {
      "cookies": [],
      "destination": "",
      "headers": [
        {
          "name": "Host",
          "value": {
            "type": "string",
            "value": "unknown.invalid"
          }
        },
        {
          "name": "Accept",
          "value": {
            "type": "string",
            "value": "*/*"
          }
        },
        {
          "name": "Origin",
          "value": {
            "type": "string",
            "value": "https://example.com"
          }
        }
      ],
      "headersSize": 326,
      "initiatorType": "fetch",
      "method": "GET",
      "request": "b9e201af-6475-4bea-a174-51a8290f8087",
      "url": "https://unknown.invalid/items"
    },
    "timestamp": 1791903586722,
    "userContext": "default"
  }
}
```

The `errorText` describes the failed domain name lookup, and in the page, the `fetch()` call rejects with a {{jsxref("TypeError")}}.

### Receiving an event when a navigation fails

Using the same connection and session, with a subscription to `browsingContext.navigationStarted` as well as `network.fetchError`, suppose you use [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) to load `https://example.com:59999/`, a port where no server is listening.

The browser sends a `browsingContext.navigationStarted` event with the navigation ID:

```json
{
  "type": "event",
  "method": "browsingContext.navigationStarted",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "timestamp": 1791903594250,
    "url": "https://example.com:59999/",
    "userContext": "default"
  }
}
```

When the server refuses the connection, the browser sends the following `network.fetchError` event, with the same `navigation` ID (only some of the fields are shown):

```json
{
  "type": "event",
  "method": "network.fetchError",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "errorText": "NS_ERROR_CONNECTION_REFUSED",
    "isBlocked": false,
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "redirectCount": 0,
    "request": {
      "destination": "document",
      "method": "GET",
      "request": "37cf22b4-f399-4450-828d-d54fce56004e",
      "url": "https://example.com:59999/"
    },
    "timestamp": 1791903594254
  }
}
```

The `browsingContext.navigate` command returns an `unknown error` with no navigation ID, so use the `navigation` ID from the `browsingContext.navigationStarted` event to match this event to the navigation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) event
- [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted) event
- [`browsingContext.navigationFailed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed) event
- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
