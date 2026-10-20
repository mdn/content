---
title: "`network.provideResponse` command"
short-title: provideResponse
slug: Web/WebDriver/Reference/BiDi/Modules/network/provideResponse
page-type: webdriver-command
browser-compat: webdriver.bidi.network.provideResponse
sidebar: webdriver
---

The `network.provideResponse` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module completes a request that an [intercept](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#intercepts) blocked with a response that the client provides, including its status, headers, cookies, and body.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "network.provideResponse",
  "params": {
    "request": "b9e201af-6475-4bea-a174-51a8290f8087"
  }
}

/* With required and optional parameters */
{
  "method": "network.provideResponse",
  "params": {
    "body": {
      "type": "string",
      "value": "[{\"id\":1,\"name\":\"Notebook\"}]"
    },
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
    "headers": [
      {
        "name": "Content-Type",
        "value": {
          "type": "string",
          "value": "application/json"
        }
      }
    ],
    "reasonPhrase": "OK",
    "request": "b9e201af-6475-4bea-a174-51a8290f8087",
    "statusCode": 200
  }
}
```

### Parameters

The `params` field contains:

- `body` {{optional_inline}}
  - : An object that specifies the body of the response.
    It contains the following fields:
    - `type`
      - : A string that specifies how the `value` field of this object is encoded.
        It can take one of the following values:
        - `base64`: The value is [Base64](/en-US/docs/Glossary/Base64)-encoded bytes.
        - `string`: The value is text, which the browser encodes as [UTF-8](/en-US/docs/Glossary/UTF-8).
    - `value`
      - : A string that contains the body, encoded as specified by `type`.
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
- `headers` {{optional_inline}}
  - : An array of objects, each specifying a header of the response.
    If the server has already sent a response, the array replaces its headers.

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
  - : A string that contains the status message of the response, such as `OK`.
- `request`
  - : A string that contains the ID of the blocked request.
    Request IDs are in the `request.request` field of `network` events, such as `network.beforeRequestSent`.
- `statusCode` {{optional_inline}}
  - : A non-negative integer that contains the [HTTP status code](/en-US/docs/Web/HTTP/Reference/Status) of the response, such as `200`.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - `request` is missing or is not a string, another parameter has an invalid type, such as a negative `statusCode`, a `type` field in `body`, `cookies`, or `headers` is not `base64` or `string`, or a `sameSite` field in `cookies` is not `default`, `lax`, `none`, or `strict`.
    - A header name in `headers` is not a valid header name.
    - A header value in `headers` is not a valid header value.
- `no such request`
  - : The session has no blocked request with the specified `request` ID, for example because the request was already resumed.

## Description

### Which requests can be completed

Use `network.provideResponse` for a request blocked in any phase: `beforeRequestSent`, `responseStarted`, or `authRequired`.
If the command returns an error other than `no such request`, the request stays blocked, but the parameters processed before the error might already have changed the response.

### Providing the response

For a request blocked in the `beforeRequestSent` phase, the browser doesn't send the request: the page receives the response that you provide.
In the other phases, the status, headers, cookies, and body that you specify replace those of the response that the server sent.
For how this compares with `network.continueResponse`, see [Changing responses](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#changing_responses).

The request goes on through its lifecycle, so you still receive the later events that you're subscribed to for it, with the status and headers that you provided: [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted), and [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted) if the request was blocked before the response started.

## Examples

### Mocking an API response

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `network.beforeRequestSent`.
Assume also that you've added an intercept for the `beforeRequestSent` phase that matches requests for `https://example.com/api/items`, with [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept).

Suppose you want to test how a page shows a list of three items, without changing the data on the server.
The page calls `fetch("/api/items")`, and the browser blocks the request and sends a `network.beforeRequestSent` event with the request ID `b9e201af-6475-4bea-a174-51a8290f8087`.
Send the following message to answer the request with a list of items:

```json
{
  "id": 1,
  "method": "network.provideResponse",
  "params": {
    "body": {
      "type": "string",
      "value": "[{\"id\":1,\"name\":\"Notebook\"},{\"id\":2,\"name\":\"Pen\"},{\"id\":3,\"name\":\"Mug\"}]"
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
    "reasonPhrase": "OK",
    "request": "b9e201af-6475-4bea-a174-51a8290f8087",
    "statusCode": 200
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

The page's `fetch()` call receives a response with the `200` status and the three items, and the server never receives the request.

### Replacing a script

Using the same connection and session, and a subscription to [`log.entryAdded`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/log/entryAdded) as well, suppose you want to try a changed version of the page's script, `https://example.com/app.js`, without deploying it.
You add an intercept for the script's URL in the `beforeRequestSent` phase with `network.addIntercept`, which returns the intercept ID `ecc57375-44cc-46f8-abfd-f3f1c5489f71`, and then load `https://example.com/` in the tab with [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate), whose response arrives only after the request for the script continues.
When the browser blocks the request for the script, with the ID `37cf22b4-f399-4450-828d-d54fce56004e`, send the following message to provide your version:

```json
{
  "id": 4,
  "method": "network.provideResponse",
  "params": {
    "body": {
      "type": "string",
      "value": "console.log(\"Mocked app.js\");\n"
    },
    "headers": [
      {
        "name": "Content-Type",
        "value": {
          "type": "string",
          "value": "text/javascript"
        }
      }
    ],
    "request": "37cf22b4-f399-4450-828d-d54fce56004e",
    "statusCode": 200
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

The server never receives a request for the script.
The page runs the script that you provided, and the browser sends the following event for its message, with `app.js` in the stack trace:

```json
{
  "type": "event",
  "method": "log.entryAdded",
  "params": {
    "args": [
      {
        "type": "string",
        "value": "Mocked app.js"
      }
    ],
    "level": "info",
    "method": "log",
    "source": {
      "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
      "realm": "7c37f4c0-abcd-1234-ef56-789012345678",
      "userContext": "default"
    },
    "stackTrace": {
      "callFrames": [
        {
          "columnNumber": 8,
          "functionName": "",
          "lineNumber": 0,
          "url": "https://example.com/app.js"
        }
      ]
    },
    "text": "Mocked app.js",
    "timestamp": 1792074018778,
    "type": "console"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept) command
- [`network.continueResponse`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueResponse) command
- [`network.continueRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueRequest) command
- [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) event
