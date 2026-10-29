---
title: "`network.beforeRequestSent` event"
short-title: beforeRequestSent
slug: Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent
page-type: webdriver-event
browser-compat: webdriver.bidi.network.beforeRequestSent_event
sidebar: webdriver
---

The `network.beforeRequestSent` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module fires before the browser sends a request, whether over the network or to its cache or a service worker.

## Event data

The `params` field in the event notification is an object with the following fields:

- `context`
  - : A string that contains the ID of the [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) in which the request was made, or `null` if the request wasn't made by a document in a context, for example a request made by a worker.
- `initiator` {{optional_inline}}
  - : An object that describes the JavaScript code that made the request.
    The browser includes it for a request made with {{domxref("Window/fetch", "fetch()")}} or {{domxref("XMLHttpRequest")}}.
    It can contain the following fields:
    - `columnNumber` {{optional_inline}}
      - : A non-negative integer that contains the zero-based column number of the code that made the request, or `0` if the stack trace is empty.
    - `lineNumber` {{optional_inline}}
      - : A non-negative integer that contains the zero-based line number of the code that made the request, or `0` if the stack trace is empty.
    - `stackTrace` {{optional_inline}}
      - : An object that represents the JavaScript stack at the point where the request was made.
        It contains the following field:
        - `callFrames`
          - : An array of zero or more stack-frame objects, ordered from the most recent call.
            Each object contains the following fields:
            - `columnNumber`
              - : A non-negative integer that contains the zero-based column number of the executed code.
            - `functionName`
              - : A string that contains the name of the executing function.
            - `lineNumber`
              - : A non-negative integer that contains the zero-based line number of the executed code.
            - `url`
              - : A string that contains the URL of the script.
- `intercepts` {{optional_inline}}
  - : An array of one or more strings, each containing the ID of an intercept that blocks the request.
    This field is included only when `isBlocked` is `true`.
    Intercept IDs are returned by the `network.addIntercept` command.
- `isBlocked`
  - : A boolean that indicates whether the request is blocked by an intercept.
    - `true`: The request matches one or more intercepts listed in the `intercepts` field.
      The browser doesn't send the request until the client resumes it, for example with the `network.continueRequest` command.
    - `false`: The request doesn't match any of the session's intercepts.
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
      - : A string that indicates what started the request, such as `fetch`, `link`, or `script`.
        For a request with no initiator type, such as the request for a page loaded into a tab, the value is `null` instead of a string.
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

In the [lifecycle of a request](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#requests), this is the first event.
When the browser has received the response headers, [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted) fires, and when it has received the whole response, [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted) fires.
If the request fails at any point, [`network.fetchError`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError) fires, and it is the last event for the request.
If you're subscribed to this event, you always receive it before any other event for the same request, even when the request fails before it is sent.

The event fires again for each redirect, with the same request ID and a `redirectCount` that is one higher.

When `isBlocked` is `true`, the request waits until the client resumes it with the `network.continueRequest`, `network.failRequest`, or `network.provideResponse` command.

## Examples

### Matching requests to a navigation

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `network.beforeRequestSent`.

Suppose you use [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) to load `https://example.com/` in a tab with the context ID `93ee5bd6-d256-4608-a002-9a8995cc0e5f`.
The page loads a stylesheet and a script, and the browser already has a `theme=dark` cookie for the site from an earlier visit.
The command, sent with `wait` set to `complete`, returns the navigation ID `a1b2c3d4-5678-90ab-cdef-1234567890ab`, but its response arrives after the event for the page request.

Before requesting the page, the browser sends the following event, with the same `navigation` ID (the `headers` array is shortened, and some of the `request` fields are left out):

```json
{
  "type": "event",
  "method": "network.beforeRequestSent",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "isBlocked": false,
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "redirectCount": 0,
    "request": {
      "cookies": [
        {
          "domain": "example.com",
          "httpOnly": false,
          "name": "theme",
          "path": "/",
          "sameSite": "lax",
          "secure": false,
          "size": 9,
          "value": {
            "type": "string",
            "value": "dark"
          }
        }
      ],
      "destination": "document",
      "headers": [
        {
          "name": "Host",
          "value": {
            "type": "string",
            "value": "example.com"
          }
        },
        {
          "name": "Accept",
          "value": {
            "type": "string",
            "value": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
          }
        },
        {
          "name": "Cookie",
          "value": {
            "type": "string",
            "value": "theme=dark"
          }
        },
        {
          "name": "Sec-Fetch-Dest",
          "value": {
            "type": "string",
            "value": "document"
          }
        }
      ],
      "initiatorType": null,
      "method": "GET",
      "request": "b9e201af-6475-4bea-a174-51a8290f8087",
      "url": "https://example.com/"
    },
    "timestamp": 1791903609108,
    "userContext": "default"
  }
}
```

It then sends an event for each subresource the page loads, such as its stylesheet.
These requests have no `navigation` ID (only some of the fields are shown):

```json
{
  "type": "event",
  "method": "network.beforeRequestSent",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "isBlocked": false,
    "navigation": null,
    "redirectCount": 0,
    "request": {
      "destination": "style",
      "initiatorType": "link",
      "method": "GET",
      "request": "37cf22b4-f399-4450-828d-d54fce56004e",
      "url": "https://example.com/style.css"
    },
    "timestamp": 1791903609130
  }
}
```

To match the events to the navigation, keep them until the command's response arrives, then compare their `navigation` field with the ID in the response.
Only the page request has that ID: the requests for its subresources have `null`.

### Receiving an event for a request made by a script

Using the same connection, session, and subscription, suppose the page's script, `/app.js`, has a function that adds an item to a list with `fetch()`:

```js
function addItem(name) {
  return fetch("/api/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  }).then((response) => response.json());
}
```

When the page calls `addItem("Pen")`, the browser sends the following event before sending the request (only some of the fields are shown):

```json
{
  "type": "event",
  "method": "network.beforeRequestSent",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "initiator": {
      "stackTrace": {
        "callFrames": [
          {
            "columnNumber": 9,
            "functionName": "addItem",
            "lineNumber": 1,
            "url": "https://example.com/app.js"
          }
        ]
      }
    },
    "isBlocked": false,
    "navigation": null,
    "redirectCount": 0,
    "request": {
      "bodySize": 14,
      "destination": "",
      "initiatorType": "fetch",
      "method": "POST",
      "request": "ef49027d-aa97-44e4-bbe6-6ff8dbaa0c97",
      "url": "https://example.com/api/items"
    },
    "timestamp": 1791903609159
  }
}
```

The `initiator` points to the `fetch()` call in `addItem()`, on line 1 and column 9 of `/app.js`, counting from zero.
The `initiatorType` of `fetch` and the empty `destination` show that a script made the request, and `bodySize` is the length of the JSON body, `{"name":"Pen"}`.
Keep the `request` ID to match this request with the events that follow, such as [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted) event
- [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted) event
- [`network.fetchError`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError) event
- [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) event
- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
