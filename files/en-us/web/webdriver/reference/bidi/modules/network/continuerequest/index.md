---
title: "`network.continueRequest` command"
short-title: continueRequest
slug: Web/WebDriver/Reference/BiDi/Modules/network/continueRequest
page-type: webdriver-command
browser-compat: webdriver.bidi.network.continueRequest
sidebar: webdriver
---

The `network.continueRequest` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module lets a request that an [intercept](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#intercepts) blocked before it was sent continue, optionally changing its URL, method, headers, cookies, or body first.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "network.continueRequest",
  "params": {
    "request": "b9e201af-6475-4bea-a174-51a8290f8087"
  }
}

/* With required and optional parameters */
{
  "method": "network.continueRequest",
  "params": {
    "body": {
      "type": "string",
      "value": "{\"name\":\"Mug\"}"
    },
    "cookies": [
      {
        "name": "theme",
        "value": {
          "type": "string",
          "value": "light"
        }
      }
    ],
    "headers": [
      {
        "name": "Content-Type",
        "value": {
          "type": "string",
          "value": "application/json"
        }
      }
    ],
    "method": "POST",
    "request": "b9e201af-6475-4bea-a174-51a8290f8087",
    "url": "https://example.com/api/v2/items"
  }
}
```

### Parameters

The `params` field contains:

- `body` {{optional_inline}}
  - : An object that specifies the body to send instead of the request's body.
    It contains the following fields:
    - `type`
      - : A string that specifies how the body is encoded.
        It can take one of the following values:
        - `base64`: The value is [Base64](/en-US/docs/Glossary/Base64)-encoded bytes.
        - `string`: The value is text, which the browser sends encoded as [UTF-8](/en-US/docs/Glossary/UTF-8) bytes.
    - `value`
      - : A string that contains the body in the encoding specified by the [`type`](#type) field.
- `cookies` {{optional_inline}}
  - : An array of objects, each specifying a cookie to send with the request.
    The cookies replace the value of the request's {{HTTPHeader("Cookie")}} header, or are sent in a new `Cookie` header if the request has none.
    They don't change the cookies that the browser stores.

    Each object contains the following fields:
    - `name`
      - : A string that contains the name of the cookie.
    - `value`
      - : An object that specifies the value of the cookie.
        It contains the following fields:
        - `type`
          - : A string that specifies how the cookie value is encoded.
            It can take one of the following values:
            - `base64`: The value is [Base64](/en-US/docs/Glossary/Base64)-encoded bytes.
            - `string`: The value is text, which the browser sends encoded as [UTF-8](/en-US/docs/Glossary/UTF-8) bytes.
        - `value`
          - : A string that contains the cookie value in the encoding specified by the [`type`](#type_2) field.
- `headers` {{optional_inline}}
  - : An array of objects, each specifying a header to send with the request.
    The array replaces the request's headers.
    A header left out of it might not be sent.
    To add or change a header, send the headers from the `headers` array in the `request` object of the [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) event, with your changes.

    Each object contains the following fields:
    - `name`
      - : A string that contains the header name, such as `X-Test-Run`.
        It must be a valid [HTTP header](/en-US/docs/Web/HTTP/Reference/Headers) name.
    - `value`
      - : An object that specifies the header value.
        It contains the following fields:
        - `type`
          - : A string that specifies how the header value is encoded.
            It can take one of the following values:
            - `base64`: The value is [Base64](/en-US/docs/Glossary/Base64)-encoded bytes.
            - `string`: The value is text, which the browser sends encoded as [UTF-8](/en-US/docs/Glossary/UTF-8) bytes.
        - `value`
          - : A string that contains the header value in the encoding specified by the [`type`](#type_3) field.
            The decoded header value cannot contain line breaks or null characters, or start or end with a space or tab.
- `method` {{optional_inline}}
  - : A string that contains the [HTTP request method](/en-US/docs/Web/HTTP/Reference/Methods) to use instead of the request's method, such as `POST`.
    It must be a valid HTTP method name.
- `request`
  - : A string that contains the ID of the blocked request.
    Request IDs are in the `request` field of the `request` object in `network` events, such as `network.beforeRequestSent`.
- `url` {{optional_inline}}
  - : A string that contains the absolute URL to request instead of the request's URL.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - A required parameter is missing, or a parameter has an invalid type.
    - The `type` field in the `body` object, or in a cookie's or header's `value` object, is not `base64` or `string`.
    - The request is blocked in a phase other than `beforeRequestSent`.
    - `url` is not a valid absolute URL.
    - `method` is invalid.
    - A header name in `headers` is invalid.
    - A header value in `headers` is invalid.
- `no such request`
  - : The session has no blocked request with the specified `request` ID, for example because the request was already resumed.

## Description

### Which requests can continue

Use `network.continueRequest` for a request blocked in the `beforeRequestSent` phase, which is when its `network.beforeRequestSent` event has `isBlocked` set to `true`.
For a request blocked after the response started or when the server asks for authentication, use the other commands listed in [Intercepts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#intercepts).

If the command returns an error other than `no such request`, the request stays blocked.
The parameters processed before the error might already have changed it.
Send `network.continueRequest` again, or end the request with [`network.failRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/failRequest) or [`network.provideResponse`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/provideResponse).

### Changing the request

The browser applies the changes before it sends the request, so the server receives the changed request.

A changed `url` isn't a redirect: the browser sends no new `network.beforeRequestSent` event, the `redirectCount` field of the request's later events doesn't change, and a document loaded this way keeps the original URL as its location.
The `url` field in the `request` object of the later events, such as [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted), contains the new URL.

## Examples

### Adding a header to a request

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent).

Assume also that you added an intercept for the `beforeRequestSent` phase using [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept).
The intercept matches requests for `https://example.com/echo` and `https://example.com/api/items`.

Suppose the browser has a `theme=dark` cookie for the site, and the page calls `fetch("/echo", { headers: { "X-Debug": "1" } })`.
The browser blocks the request and sends a `network.beforeRequestSent` event.
The event's `request` object contains the request ID and, in its `headers` array, the request's headers.
Send the following message to continue the request with those headers and an `X-Test-Run` header added at the end:

```json
{
  "id": 1,
  "method": "network.continueRequest",
  "params": {
    "headers": [
      { "name": "Host", "value": { "type": "string", "value": "example.com" } },
      {
        "name": "User-Agent",
        "value": {
          "type": "string",
          "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:159.0) Gecko/20100101 Firefox/159.0"
        }
      },
      { "name": "Accept", "value": { "type": "string", "value": "*/*" } },
      {
        "name": "Accept-Language",
        "value": { "type": "string", "value": "en-US,en;q=0.9" }
      },
      {
        "name": "Accept-Encoding",
        "value": { "type": "string", "value": "gzip, deflate, br, zstd" }
      },
      {
        "name": "Referer",
        "value": { "type": "string", "value": "https://example.com/" }
      },
      { "name": "X-Debug", "value": { "type": "string", "value": "1" } },
      {
        "name": "Connection",
        "value": { "type": "string", "value": "keep-alive" }
      },
      {
        "name": "Cookie",
        "value": { "type": "string", "value": "theme=dark" }
      },
      {
        "name": "Sec-Fetch-Dest",
        "value": { "type": "string", "value": "empty" }
      },
      {
        "name": "Sec-Fetch-Mode",
        "value": { "type": "string", "value": "cors" }
      },
      {
        "name": "Sec-Fetch-Site",
        "value": { "type": "string", "value": "same-origin" }
      },
      {
        "name": "X-Test-Run",
        "value": { "type": "string", "value": "checkout-flow" }
      }
    ],
    "request": "b9e201af-6475-4bea-a174-51a8290f8087"
  }
}
```

The browser responds with an empty `result` object:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

The server receives the request with all the original headers and `X-Test-Run: checkout-flow`.
If `headers` had contained only the `X-Test-Run` header, the request would have been sent without the page's `X-Debug` header and without other headers from the list, such as `Accept`.

### Changing the cookies sent with a request

Using the same connection, session, and intercept as in the first example, suppose the page has a `theme=dark` cookie, and you want to check how the server responds to a request with other cookies, without changing the cookies the browser stores.
When the browser blocks the page's next request and sends a [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) event with its request ID, send the following message to replace the request's cookies:

```json
{
  "id": 2,
  "method": "network.continueRequest",
  "params": {
    "cookies": [
      {
        "name": "theme",
        "value": {
          "type": "string",
          "value": "light"
        }
      },
      {
        "name": "currency",
        "value": {
          "type": "string",
          "value": "EUR"
        }
      }
    ],
    "request": "37cf22b4-f399-4450-828d-d54fce56004e"
  }
}
```

The browser responds with an empty `result` object:

```json
{
  "id": 2,
  "type": "success",
  "result": {}
}
```

The request is sent with the header `Cookie: theme=light;currency=EUR`.
The page's {{domxref("Document.cookie", "document.cookie")}} is still `theme=dark`.

### Changing the body of a request

Using the same connection, session, and intercept as in the first example, suppose the page adds an item to a list by sending `{"name":"Pen"}` in a `POST` request to `https://example.com/api/items`, and you want to test the server with another item name.
When the browser blocks the request and sends a [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) event with its request ID, send the following message to replace its body:

```json
{
  "id": 3,
  "method": "network.continueRequest",
  "params": {
    "body": {
      "type": "string",
      "value": "{\"name\":\"Mug\"}"
    },
    "request": "ef49027d-aa97-44e4-bbe6-6ff8dbaa0c97"
  }
}
```

The browser responds with an empty `result` object:

```json
{
  "id": 3,
  "type": "success",
  "result": {}
}
```

The server receives `{"name":"Mug"}`, and the page's `fetch()` call receives the server's response for that item.

### Loading a different URL for a navigation

Using the same connection, session, and subscription as in the first example, assume you also have a subscription to [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted).

Suppose you want to try a new version of a checkout page, served from `https://example.com/new-checkout`, without changing the links that point to `https://example.com/checkout`.
You add an intercept for `https://example.com/checkout` in the `beforeRequestSent` phase using [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept), which returns its intercept ID.
You then navigate the tab to that URL using [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate).

The browser blocks the request and sends the following event (only some of the fields are shown):

```json
{
  "type": "event",
  "method": "network.beforeRequestSent",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "intercepts": ["ecc57375-44cc-46f8-abfd-f3f1c5489f71"],
    "isBlocked": true,
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "redirectCount": 0,
    "request": {
      "method": "GET",
      "request": "9d004add-4652-4dd9-9fe7-362dbd1c39ac",
      "url": "https://example.com/checkout"
    },
    "timestamp": 1792059259636
  }
}
```

Send the following message to load the new page instead:

```json
{
  "id": 6,
  "method": "network.continueRequest",
  "params": {
    "request": "9d004add-4652-4dd9-9fe7-362dbd1c39ac",
    "url": "https://example.com/new-checkout"
  }
}
```

The browser responds with an empty `result` object:

```json
{
  "id": 6,
  "type": "success",
  "result": {}
}
```

The browser requests `https://example.com/new-checkout` and sends the following event, with the new URL and the same `redirectCount` (only some of the fields are shown):

```json
{
  "type": "event",
  "method": "network.responseStarted",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "isBlocked": false,
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "redirectCount": 0,
    "request": {
      "method": "GET",
      "request": "9d004add-4652-4dd9-9fe7-362dbd1c39ac",
      "url": "https://example.com/new-checkout"
    },
    "response": {
      "status": 200,
      "statusText": "OK",
      "url": "https://example.com/new-checkout"
    },
    "timestamp": 1792059259639
  }
}
```

The tab shows the new page, but its location stays `https://example.com/checkout`, and so does the `url` in the response to `browsingContext.navigate`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept) command
- [`network.failRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/failRequest) command
- [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) event
- [`network.setExtraHeaders`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/setExtraHeaders) command
