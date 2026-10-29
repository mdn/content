---
title: "`network.failRequest` command"
short-title: failRequest
slug: Web/WebDriver/Reference/BiDi/Modules/network/failRequest
page-type: webdriver-command
browser-compat: webdriver.bidi.network.failRequest
sidebar: webdriver
---

The `network.failRequest` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module makes a request that an [intercept](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#intercepts) blocked fail with a network error.

## Syntax

```json-nolint
{
  "method": "network.failRequest",
  "params": {
    "request": "b9e201af-6475-4bea-a174-51a8290f8087"
  }
}
```

### Parameters

The `params` field contains:

- `request`
  - : A string that contains the ID of the blocked request.
    Request IDs are in the `request.request` field of `network` events, such as [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent).

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - `request` is missing or is not a string.
    - The request is blocked in the `authRequired` phase.
- `no such request`
  - : The session has no blocked request with the specified `request` ID, for example because the request was already resumed.

## Description

`network.failRequest` ends a request blocked in the `beforeRequestSent` or `responseStarted` phase.
A request blocked in the `authRequired` phase can't be failed: the command returns an `invalid argument` error, and the request stays blocked.
To go on without providing credentials, use [`network.continueWithAuth`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueWithAuth) with the `cancel` action, which gives the page the server's response, such as a `401` status.

The browser treats the request as failed with a network error: whatever made the request gets a network error, for example, a {{domxref("Window/fetch", "fetch()")}} call rejects with a {{jsxref("TypeError")}}.
If you're subscribed to [`network.fetchError`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError), you also receive the event for the request.
A request failed in the `beforeRequestSent` phase never reaches the server.
In the `responseStarted` phase, the server has already responded, and the browser discards the response.

## Examples

### Failing a request before it's sent

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `network.beforeRequestSent`, `network.fetchError`, and [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted).
Assume also that you've added an intercept for `https://example.com/api/items` in the `beforeRequestSent` phase with [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept), which returned the intercept ID `7a721ad7-7a58-4b0c-b4c0-d7d80051cd25`.

Suppose you want to check how the page handles a list of items that fails to load.
When the page requests the list with `fetch()`, the browser blocks the request and sends the following event (only some of the fields are shown):

```json
{
  "type": "event",
  "method": "network.beforeRequestSent",
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
    "timestamp": 1792058890156
  }
}
```

Send the following message to fail the request:

```json
{
  "id": 1,
  "method": "network.failRequest",
  "params": {
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

The browser doesn't send the request.
It sends a `network.fetchError` event for it, which can arrive before or after the response to the `network.failRequest` command (only some of the fields are shown):

```json
{
  "type": "event",
  "method": "network.fetchError",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "errorText": "NS_ERROR_ABORT",
    "isBlocked": false,
    "navigation": null,
    "redirectCount": 0,
    "request": {
      "method": "GET",
      "request": "b9e201af-6475-4bea-a174-51a8290f8087",
      "url": "https://example.com/api/items"
    },
    "timestamp": 1792058890157
  }
}
```

In the page, the `fetch()` call rejects with a `TypeError`.

### Failing a request after the response started

Using the same connection and session, suppose another intercept, with the ID `ecc57375-44cc-46f8-abfd-f3f1c5489f71`, blocks requests for `https://example.com/api/cart` in the `responseStarted` phase.
When the page requests the cart with `fetch()`, the server responds, and when the response headers arrive, the browser blocks the request and sends the following event (only some of the fields are shown):

```json
{
  "type": "event",
  "method": "network.responseStarted",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "intercepts": ["ecc57375-44cc-46f8-abfd-f3f1c5489f71"],
    "isBlocked": true,
    "navigation": null,
    "redirectCount": 0,
    "request": {
      "method": "GET",
      "request": "37cf22b4-f399-4450-828d-d54fce56004e",
      "url": "https://example.com/api/cart"
    },
    "response": {
      "status": 200,
      "statusText": "OK",
      "url": "https://example.com/api/cart"
    },
    "timestamp": 1792058890161
  }
}
```

Send the following message to fail the request, even though the server has responded:

```json
{
  "id": 2,
  "method": "network.failRequest",
  "params": {
    "request": "37cf22b4-f399-4450-828d-d54fce56004e"
  }
}
```

The browser responds with an empty `result` object, discards the response, and sends a `network.fetchError` event for the request.
The page's `fetch()` call rejects with a `TypeError`, as in the first example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept) command
- [`network.continueRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueRequest) command
- [`network.fetchError`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/fetchError) event
