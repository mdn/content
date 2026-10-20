---
title: "`network.continueResponse` command"
short-title: continueResponse
slug: Web/WebDriver/Reference/BiDi/Modules/network/continueResponse
page-type: webdriver-command
browser-compat: webdriver.bidi.network.continueResponse
sidebar: webdriver
---

The `network.continueResponse` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module lets a response that an [intercept](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#intercepts) blocked continue, optionally changing its status, headers, or cookies first, or providing credentials when the server asks for authentication.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "network.continueResponse",
  "params": {
    "request": "b9e201af-6475-4bea-a174-51a8290f8087"
  }
}

/* With required and optional parameters */
{
  "method": "network.continueResponse",
  "params": {
    "cookies": [
      {
        "name": "currency",
        "path": "/",
        "value": {
          "type": "string",
          "value": "EUR"
        }
      }
    ],
    "credentials": {
      "password": "secret",
      "type": "password",
      "username": "admin"
    },
    "headers": [
      {
        "name": "Content-Type",
        "value": {
          "type": "string",
          "value": "application/json"
        }
      }
    ],
    "reasonPhrase": "Service Unavailable",
    "request": "b9e201af-6475-4bea-a174-51a8290f8087",
    "statusCode": 503
  }
}
```

### Parameters

The `params` field contains:

- `cookies` {{optional_inline}}
  - : An array of objects, each specifying a cookie that the response sets, in a {{HTTPHeader("Set-Cookie")}} header.
    If `headers` isn't specified, the browser first removes the response's `Set-Cookie` headers.
    It then adds one `Set-Cookie` header for each cookie, after any headers specified in `headers`.

    Each object contains the following fields:
    - `domain` {{optional_inline}}
      - : A string that contains the value of the cookie's [`Domain`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#domaindomain-value) attribute.
    - `expiry` {{optional_inline}}
      - : A string that contains the value of the cookie's [`Expires`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#expiresdate) attribute, such as `Wed, 21 Oct 2026 07:28:00 GMT`.
    - `httpOnly` {{optional_inline}}
      - : A boolean that indicates whether the cookie has the [`HttpOnly`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly) attribute.
    - `maxAge` {{optional_inline}}
      - : An integer that contains the value of the cookie's [`Max-Age`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#max-agenumber) attribute, in seconds.
    - `name`
      - : A string that contains the name of the cookie.
    - `path` {{optional_inline}}
      - : A string that contains the value of the cookie's [`Path`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#pathpath-value) attribute.
    - `sameSite` {{optional_inline}}
      - : A string that contains the value of the cookie's [`SameSite`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) attribute: `default`, `lax`, `none`, or `strict`.
    - `secure` {{optional_inline}}
      - : A boolean that indicates whether the cookie has the [`Secure`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) attribute.
    - `value`
      - : An object that specifies the value of the cookie. It contains the following fields:
        - `type`
          - : A string that specifies how the `value` field of this object is encoded.
            It can take one of the following values:
            - `base64`: The value is [Base64](/en-US/docs/Glossary/Base64)-encoded bytes.
            - `string`: The value is text, which the browser encodes as [UTF-8](/en-US/docs/Glossary/UTF-8).
        - `value`
          - : A string that contains the cookie value, encoded as specified by `type`.
- `credentials` {{optional_inline}}
  - : An object that specifies the credentials with which the browser answers the server's authentication challenge, for a request blocked in the `authRequired` phase.
    It contains the following fields:
    - `password`
      - : A string that contains the password.
    - `type`
      - : A string that specifies the type of credentials. It must be `password`.
    - `username`
      - : A string that contains the username.
- `headers` {{optional_inline}}
  - : An array of objects, each specifying a header of the response.
    The array replaces the response's headers, so to add or change a header, send the headers from the `response.headers` field of the [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted) or `network.authRequired` event with your changes.

    Each object contains the following fields:
    - `name`
      - : A string that contains the header name, such as `Content-Type`.
        It must be a valid [HTTP header](/en-US/docs/Web/HTTP/Reference/Headers) name.
    - `value`
      - : An object that specifies the header value. It contains the following fields:
        - `type`
          - : A string that specifies how the `value` field of this object is encoded.
            It can take one of the following values:
            - `base64`: The value is [Base64](/en-US/docs/Glossary/Base64)-encoded bytes.
            - `string`: The value is text, which the browser encodes as [UTF-8](/en-US/docs/Glossary/UTF-8).
        - `value`
          - : A string that contains the header value, encoded as specified by `type`.
            The decoded header value cannot contain line breaks or null characters, or start or end with a space or tab.
- `reasonPhrase` {{optional_inline}}
  - : A string that contains the status message to use instead of the response's, such as `Service Unavailable`.
- `request`
  - : A string that contains the ID of the blocked request.
    Request IDs are in the `request.request` field of `network` events, such as `network.responseStarted`.
- `statusCode` {{optional_inline}}
  - : A non-negative integer that contains the [HTTP status code](/en-US/docs/Web/HTTP/Reference/Status) to use instead of the response's, such as `503`.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - `request` is missing or is not a string, another parameter has an invalid type, such as a negative `statusCode`, a `type` field in `cookies` or `headers` is not `base64` or `string`, a `sameSite` field in `cookies` is not `default`, `lax`, `none`, or `strict`, or the `type` field in `credentials` is not `password`.
    - The request is blocked in the `beforeRequestSent` phase.
    - A header name in `headers` is not a valid header name.
    - A header value in `headers` is not a valid header value.
- `no such request`
  - : The session has no blocked request with the specified `request` ID, for example because the request was already resumed.

## Description

### Which responses can continue

Use `network.continueResponse` for a request blocked in the `responseStarted` phase, which is when its `network.responseStarted` event has `isBlocked` set to `true`, or in the `authRequired` phase, which is when its [`network.authRequired`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/authRequired) event has `isBlocked` set to `true`.
For a request blocked in the `beforeRequestSent` phase, there is no response to continue yet: the command returns an `invalid argument` error, and the request stays blocked.

If the command returns an error other than `no such request`, the request stays blocked, but the parameters processed before the error might already have changed the response.
Send the command again with valid parameters, or resume the request another way, such as with [`network.failRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/failRequest): see [Intercepts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#intercepts).

### Changing the response

The browser applies the changes before the page receives the response, and keeps the response body that the server sends.
To replace the body as well, use [`network.provideResponse`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/provideResponse) instead (see [Changing responses](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#changing_responses)).
The `response` field of the request's later events, such as [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted), has the new status and headers.

In the `authRequired` phase, `credentials` answers the server's authentication challenge: the browser sends the request again with the credentials, as with the `provideCredentials` action of [`network.continueWithAuth`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueWithAuth).

## Examples

### Changing the status of a response

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `network.responseStarted`.
Assume also an intercept for the `responseStarted` phase that matches requests for `https://example.com/api/items`, with the intercept ID `7a721ad7-7a58-4b0c-b4c0-d7d80051cd25`, added with [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept).

Suppose you want to check how a page handles a server that is temporarily unavailable, without changing the server.
The page calls `fetch("/api/items")`, the server responds with a `200` status, and the browser blocks the response and sends the following event (only some of the fields are shown):

```json
{
  "type": "event",
  "method": "network.responseStarted",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "intercepts": ["7a721ad7-7a58-4b0c-b4c0-d7d80051cd25"],
    "isBlocked": true,
    "navigation": null,
    "redirectCount": 0,
    "request": {
      "method": "GET",
      "request": "b9e201af-6475-4bea-a174-51a8290f8087",
      "url": "https://example.com/api/items"
    },
    "response": {
      "status": 200,
      "statusText": "OK",
      "url": "https://example.com/api/items"
    },
    "timestamp": 1792073979784
  }
}
```

Send the following message to let the response continue with the `503` status instead:

```json
{
  "id": 1,
  "method": "network.continueResponse",
  "params": {
    "reasonPhrase": "Service Unavailable",
    "request": "b9e201af-6475-4bea-a174-51a8290f8087",
    "statusCode": 503
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

The page's `fetch()` call receives a response with the `503` status and the `Service Unavailable` status text, and with the body that the server sent, `[{"id":1,"name":"Notebook"}]`.

### Providing credentials

Using the same connection and session, and a subscription to `network.authRequired` as well, suppose the site's admin page at `https://example.com/admin/` needs a username and password.
You add an intercept for that URL in the `authRequired` phase with `network.addIntercept`, which returns the intercept ID `ecc57375-44cc-46f8-abfd-f3f1c5489f71`, and then navigate the tab to the admin page with [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate), whose response arrives once the request continues.
The browser blocks the request and sends a `network.authRequired` event with the request ID `37cf22b4-f399-4450-828d-d54fce56004e`.

Send the following message to sign in:

```json
{
  "id": 4,
  "method": "network.continueResponse",
  "params": {
    "credentials": {
      "password": "secret",
      "type": "password",
      "username": "admin"
    },
    "request": "37cf22b4-f399-4450-828d-d54fce56004e"
  }
}
```

The browser responds with an empty `result` object:

```json
{
  "id": 4,
  "type": "success",
  "result": {}
}
```

The browser sends the request again with the credentials, and the tab loads the admin page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept) command
- [`network.provideResponse`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/provideResponse) command
- [`network.continueWithAuth`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueWithAuth) command
- [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted) event
