---
title: "`network.removeIntercept` command"
short-title: removeIntercept
slug: Web/WebDriver/Reference/BiDi/Modules/network/removeIntercept
page-type: webdriver-command
browser-compat: webdriver.bidi.network.removeIntercept
sidebar: webdriver
---

The `network.removeIntercept` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module removes an [intercept](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#intercepts) that was added with [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept), so that it no longer blocks the requests that match it.

## Syntax

```json-nolint
{
  "method": "network.removeIntercept",
  "params": {
    "intercept": "7a721ad7-7a58-4b0c-b4c0-d7d80051cd25"
  }
}
```

### Parameters

The `params` field contains:

- `intercept`
  - : A string that contains the ID of the intercept to remove.
    Intercept IDs are returned by the [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept) command.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : A required parameter is missing or has an invalid type.
- `no such intercept`
  - : The session has no intercept with the specified `intercept` ID, for example because it was already removed.

## Description

Removing an intercept doesn't affect requests that it has already blocked.
They stay blocked until the client resumes or ends them with one of the commands for their phase, such as [`network.continueRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueRequest) or [`network.failRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/failRequest), or until the session ends.
The removed intercept doesn't block new requests, or the later phases of requests that are already in progress.

Intercepts belong to the session that adds them, so only that session can remove them.
When the session ends, the browser removes its intercepts and resumes every request that's still blocked in the session.

## Examples

### Removing an intercept

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) and [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted).

Suppose you added an intercept for `https://example.com/api/items` using [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept), which returned its intercept ID.
You no longer need to block those requests.
Send the following message to remove the intercept:

```json
{
  "id": 1,
  "method": "network.removeIntercept",
  "params": {
    "intercept": "7a721ad7-7a58-4b0c-b4c0-d7d80051cd25"
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

From then on, requests for `https://example.com/api/items` aren't blocked, and their `network.beforeRequestSent` events have `isBlocked` set to `false` (only some of the fields are shown):

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
      "method": "GET",
      "request": "b9e201af-6475-4bea-a174-51a8290f8087",
      "url": "https://example.com/api/items"
    },
    "timestamp": 1792058630153
  }
}
```

### Removing an intercept while a request is blocked

Using the same connection, session, and subscriptions as in the first example, suppose you added another intercept using [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept), which returned its intercept ID.
The intercept covers both the `beforeRequestSent` and `responseStarted` phases.
It has blocked a request, and the [`network.beforeRequestSent`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/beforeRequestSent) event for that request contains its request ID.

After you remove the intercept with `network.removeIntercept`, the request is still blocked, and the page is still waiting for the response.
Send the following message to let the request continue:

```json
{
  "id": 3,
  "method": "network.continueRequest",
  "params": {
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

The browser then sends the request.
When the response headers arrive, the [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted) event has `isBlocked` set to `false`, because the removed intercept no longer blocks the request in that phase (only some of the fields are shown):

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
      "method": "GET",
      "request": "37cf22b4-f399-4450-828d-d54fce56004e",
      "url": "https://example.com/api/items"
    },
    "response": {
      "status": 200,
      "statusText": "OK",
      "url": "https://example.com/api/items"
    },
    "timestamp": 1792058631163
  }
}
```

### Removing an intercept that doesn't exist

Using the same connection and session as in the first example, suppose you send `network.removeIntercept` again with the ID of the intercept that you removed in the second example.
The browser responds with an error:

```json
{
  "type": "error",
  "id": 4,
  "error": "no such intercept",
  "message": "Network intercept with id ecc57375-44cc-46f8-abfd-f3f1c5489f71 not found",
  "stacktrace": ""
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`network.addIntercept`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addIntercept) command
- [`network.continueRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/continueRequest) command
- [`network.failRequest`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/failRequest) command
- [`session.end`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/end) command
