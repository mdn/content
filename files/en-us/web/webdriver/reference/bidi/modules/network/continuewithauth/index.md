---
title: "`network.continueWithAuth` command"
short-title: continueWithAuth
slug: Web/WebDriver/Reference/BiDi/Modules/network/continueWithAuth
page-type: webdriver-command
browser-compat: webdriver.bidi.network.continueWithAuth
sidebar: webdriver
---

The `network.continueWithAuth` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module lets a request that an [intercept](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#intercepts) blocked when the server asked for authentication continue, with credentials, without them, or with the browser's own handling.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "network.continueWithAuth",
  "params": {
    "action": "cancel",
    "request": "b9e201af-6475-4bea-a174-51a8290f8087"
  }
}

/* With required and optional parameters */
{
  "method": "network.continueWithAuth",
  "params": {
    "action": "provideCredentials",
    "credentials": {
      "password": "secret",
      "type": "password",
      "username": "admin"
    },
    "request": "b9e201af-6475-4bea-a174-51a8290f8087"
  }
}
```

### Parameters

The `params` field contains:

- `action`
  - : A string that specifies how the browser answers the authentication challenge.
    It can take one of the following values:
    - `cancel`: The browser doesn't send credentials, and the request goes on with the server's response, such as a response with the `401` status.
    - `default`: The browser doesn't use credentials from the client and handles the challenge itself, for example by asking the person using the browser for credentials.
    - `provideCredentials`: The browser sends the request again with the credentials specified in `credentials`.
- `credentials` {{optional_inline}}
  - : An object that specifies the credentials to send.
    It is required when `action` is `provideCredentials`.
    It contains the following fields:
    - `password`
      - : A string that contains the password.
    - `type`
      - : A string that specifies the type of credentials. It must be `password`.
    - `username`
      - : A string that contains the username.
- `request`
  - : A string that contains the ID of the blocked request.
    Request IDs are in the `request.request` field of `network` events, such as [`network.authRequired`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/authRequired).

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - `request` or `action` is missing or is not a string.
    - `action` is not `cancel`, `default`, or `provideCredentials`.
    - `action` is `provideCredentials`, and `credentials` is missing or invalid, for example because its `type` is not `password`, or `username` or `password` is missing or is not a string.
    - The request is blocked in a phase other than `authRequired`.
- `no such request`
  - : The session has no blocked request with the specified `request` ID, for example because the request was already resumed.

## Description

### Which requests can continue

Use `network.continueWithAuth` for a request blocked in the `authRequired` phase, which is when its `network.authRequired` event has `isBlocked` set to `true`.
For a request blocked in another phase, the command returns an `invalid argument` error.
If the command returns an `invalid argument` error, the request stays blocked and unchanged.

In the `authRequired` phase, you can also provide credentials with [`network.continueResponse`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueResponse).
For the other commands that resume a request in this phase, see [Authentication](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#authentication).

### What happens after each action

With `provideCredentials`, the browser sends the request again with the credentials.
If the server rejects them and asks again, you receive another `network.authRequired` event with the same request ID, and the request is blocked again until you answer it.

With `cancel`, the request completes with the server's response, so the page receives the response that asked for authentication, such as a `401` status and its body.

## Examples

### Providing credentials

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `network.authRequired`.
Assume also that you've added an intercept for the `authRequired` phase that matches requests for `https://example.com/admin/` and `https://example.com/api/admin/stats`, with [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept).

Suppose you navigate a tab to `https://example.com/admin/` with [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate), and the server asks for a username and password for the realm `Shop admin`.
The browser blocks the request and sends a `network.authRequired` event with the request ID `b9e201af-6475-4bea-a174-51a8290f8087`.
Send the following message to sign in:

```json
{
  "id": 2,
  "method": "network.continueWithAuth",
  "params": {
    "action": "provideCredentials",
    "credentials": {
      "password": "secret",
      "type": "password",
      "username": "admin"
    },
    "request": "b9e201af-6475-4bea-a174-51a8290f8087"
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

The browser sends the request again with the credentials, and the tab loads the admin page.
The response to `browsingContext.navigate` arrives once the request continues.

### Going on without credentials

Using the same connection, session, and intercept, suppose the page calls `fetch("/api/admin/stats")`, and the server asks for credentials for another realm, `Shop API`.
You want to check how the page handles a request that isn't authorized.
When the browser blocks the request with the ID `37cf22b4-f399-4450-828d-d54fce56004e`, send the following message:

```json
{
  "id": 3,
  "method": "network.continueWithAuth",
  "params": {
    "action": "cancel",
    "request": "37cf22b4-f399-4450-828d-d54fce56004e"
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

The page's `fetch()` call receives the server's response, with the `401` status and the body `Unauthorized`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`network.authRequired`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/authRequired) event
- [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept) command
- [`network.continueResponse`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueResponse) command
- [HTTP authentication](/en-US/docs/Web/HTTP/Guides/Authentication) guide
