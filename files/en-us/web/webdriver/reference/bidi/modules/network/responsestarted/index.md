---
title: "`network.responseStarted` event"
short-title: responseStarted
slug: Web/WebDriver/Reference/BiDi/Modules/network/responseStarted
page-type: webdriver-event
browser-compat: webdriver.bidi.network.responseStarted_event
sidebar: webdriver
---

The `network.responseStarted` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module fires when the browser has received the headers of a response, before it has received the whole response body.

## Event data

The `params` field in the event notification is an object with the following fields:

- `context`
  - : A string that contains the ID of the [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) in which the request was made, or `null` if the request wasn't made by a document in a context, for example a request made by a worker.
- `intercepts` {{optional_inline}}
  - : An array of one or more strings, each containing the ID of an intercept that blocks the response.
    This field is included only when `isBlocked` is `true`.
    Intercept IDs are returned by the `network.addIntercept` command.
- `isBlocked`
  - : A boolean that indicates whether the response is blocked by an intercept.
    - `true`: The response matches one or more intercepts listed in the `intercepts` field.
      The browser doesn't process the response further until the client resumes it, for example with the `network.continueResponse` command.
    - `false`: The response doesn't match any of the session's intercepts.
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
          - : A string that contains the authentication scheme, such as `Basic`.
    - `bodySize`
      - : A non-negative integer that contains the size of the response body in bytes as received, before the browser decodes it (for example, before decompression), or `null` if the browser doesn't report it.
        The body might not have arrived yet when this event fires, so the final size is in the [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted) event.
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
          - : A string that contains the header name, such as `Content-Type`.
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
      - : A non-negative integer that contains the size of the response headers in bytes as received, or `null` if the browser doesn't report it.
    - `mimeType`
      - : A string that contains the [MIME type](/en-US/docs/Glossary/MIME_type) that the browser uses for the response, without parameters, such as `text/html` or `application/json`.
        It can differ from the {{HTTPHeader("Content-Type")}} header, for example when the browser determines the type from the content, and it can be an empty string, for example for a redirect response.
    - `protocol`
      - : A string that contains the protocol of the response, such as `http/1.1` or `h2`.
        For a response that wasn't received over HTTP, it is the scheme of the response URL, such as `data`.
    - `status`
      - : A non-negative integer that contains the [HTTP status code](/en-US/docs/Web/HTTP/Reference/Status) of the response, such as `200`.
    - `statusText`
      - : A string that contains the status message of the response, such as `OK`.
    - `url`
      - : A string that contains the URL of the response.
- `timestamp`
  - : A non-negative integer that represents the time when the event was fired, as milliseconds elapsed since the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `userContext` {{optional_inline}}
  - : A string that contains the ID of the [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) of the context in which the request was made, or `null` if the request wasn't made by a document in a context.

## Description

In the [lifecycle of a request](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#requests), this event fires after [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) and before [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted), which fires when the browser has received the whole response body.

It also fires for redirect responses and for responses served from the browser's cache.
If the request fails after this event, for example because the page aborts it, [`network.fetchError`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError) fires.
For a response that asks for authentication, the `network.authRequired` event can follow.

At this point, the `response` object contains the status and the headers, but the fields that describe the body, such as `bodySize`, `bytesReceived`, and `content`, might not have their final values yet.
The browser can also wait until it has received some or all of the body before sending this event, for example while it determines the MIME type of the response.

When `isBlocked` is `true`, the response waits until the client resumes it with the `network.continueResponse`, `network.failRequest`, or `network.provideResponse` command.
A response can be blocked here even if its request wasn't blocked in the `network.beforeRequestSent` event, and the other way round, depending on the phases of each intercept.

## Examples

### Receiving an event when response headers arrive

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `network.responseStarted`.

Suppose a tab has loaded `https://example.com/`, the browser has a `theme=dark` cookie for the site, and the page calls `fetch("/api/items")` to load a list of items as JSON.
When the response headers arrive, the browser sends the following event (the request's `headers` array is shortened, and some of the `request` fields are left out):

```json
{
  "type": "event",
  "method": "network.responseStarted",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "isBlocked": false,
    "navigation": null,
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
      "destination": "",
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
            "value": "*/*"
          }
        }
      ],
      "headersSize": 401,
      "initiatorType": "fetch",
      "method": "GET",
      "request": "b9e201af-6475-4bea-a174-51a8290f8087",
      "url": "https://example.com/api/items"
    },
    "response": {
      "bodySize": 0,
      "bytesReceived": 188,
      "content": {
        "size": 0
      },
      "fromCache": false,
      "headers": [
        {
          "name": "Cache-Control",
          "value": {
            "type": "string",
            "value": "no-store"
          }
        },
        {
          "name": "Content-Type",
          "value": {
            "type": "string",
            "value": "application/json"
          }
        },
        {
          "name": "Date",
          "value": {
            "type": "string",
            "value": "Tue, 13 Oct 2026 14:58:02 GMT"
          }
        },
        {
          "name": "Connection",
          "value": {
            "type": "string",
            "value": "keep-alive"
          }
        },
        {
          "name": "Keep-Alive",
          "value": {
            "type": "string",
            "value": "timeout=5"
          }
        },
        {
          "name": "Transfer-Encoding",
          "value": {
            "type": "string",
            "value": "chunked"
          }
        }
      ],
      "headersSize": 188,
      "mimeType": "application/json",
      "protocol": "http/1.1",
      "status": 200,
      "statusText": "OK",
      "url": "https://example.com/api/items"
    },
    "timestamp": 1791903482441,
    "userContext": "default"
  }
}
```

At this point, the browser has received the response headers, but not necessarily the body.
The final `bytesReceived` and body sizes are in the [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted) event with the same `request` ID.

### Receiving an event for a response from the cache

Using the same connection, session, and subscription, suppose the page fetches the same URL twice, and the server allows the browser to cache the response for an hour (`Cache-Control: max-age=3600`).
For the second request, the browser serves the response from its cache and sends the following event (only some of the fields are shown):

```json
{
  "type": "event",
  "method": "network.responseStarted",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "isBlocked": false,
    "navigation": null,
    "redirectCount": 0,
    "request": {
      "request": "37cf22b4-f399-4450-828d-d54fce56004e",
      "url": "https://example.com/api/categories"
    },
    "response": {
      "bytesReceived": 0,
      "fromCache": true,
      "status": 200,
      "url": "https://example.com/api/categories"
    },
    "timestamp": 1791903483454
  }
}
```

The `fromCache` field is `true`, and `bytesReceived` is `0` because nothing was received from the server.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) event
- [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted) event
- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
- [HTTP response status codes](/en-US/docs/Web/HTTP/Reference/Status) reference
