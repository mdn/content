---
title: "`network.disownData` command"
short-title: disownData
slug: Web/WebDriver/Reference/BiDi/Modules/network/disownData
page-type: webdriver-command
browser-compat: webdriver.bidi.network.disownData
sidebar: webdriver
---

The `network.disownData` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module releases the body of a request or response from a [data collector](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#data_collectors) so that the collector no longer keeps it.

## Syntax

```json-nolint
{
  "method": "network.disownData",
  "params": {
    "collector": "a3f1662f-de73-4424-a0be-03a22bd22243",
    "dataType": "response",
    "request": "b9e201af-6475-4bea-a174-51a8290f8087"
  }
}
```

### Parameters

The `params` field contains:

- `collector`
  - : A string that contains the ID of the collector that releases the data.
    Collector IDs are returned by the [`network.addDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addDataCollector) command.
- `dataType`
  - : A string that specifies which body to release.
    It can take one of the following values:
    - `request`: The body of the request.
    - `response`: The body of the response.
- `request`
  - : A string that contains the ID of the request.
    Request IDs are in the `request` field of the `request` object in `network` events, such as [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted).

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - A required parameter is missing or has an invalid type.
    - `dataType` is not `request` or `response`.
- `no such network collector`
  - : No collector with the given `collector` ID is found in the session.
- `no such network data`
  - : The browser has no data of the specified `dataType` for the request, for example because no collector collected it, or because every collector that collected it has released it.

## Description

The browser keeps a body until every collector that collected it releases it, or until it discards the body to stay within its limit for all the data it collects, as described in [Data collectors](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#data_collectors).
Once no collector keeps a body, the browser deletes it, and both [`network.getData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/getData) and `network.disownData` return a `no such network data` error for it.

A deleted body no longer counts toward the browser's limit.
Releasing the bodies that you no longer need leaves room for new ones.
To retrieve a body and release it in one command, use `network.getData` with `collector` and with `disown` set to `true`.
To release every body that a collector keeps, remove the collector with [`network.removeDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/removeDataCollector).

## Examples

### Releasing data that another collector also keeps

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted).

Assume also that you added two collectors using [`network.addDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addDataCollector), which returned their IDs.
The first collector collects request and response bodies, and the second one collects response bodies.
Both collected the body of the response to a request for `https://example.com/api/items`.
You received the request ID in the `network.responseCompleted` event for that request.

Send the following message to release the body from the first collector:

```json
{
  "id": 1,
  "method": "network.disownData",
  "params": {
    "collector": "a3f1662f-de73-4424-a0be-03a22bd22243",
    "dataType": "response",
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

The first collector no longer keeps the body, so if you send [`network.getData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/getData) with that collector, the browser responds with an error:

```json
{
  "type": "error",
  "id": 2,
  "error": "no such network data",
  "message": "Network data for request id b9e201af-6475-4bea-a174-51a8290f8087 and DataType response does not match collector a3f1662f-de73-4424-a0be-03a22bd22243",
  "stacktrace": ""
}
```

The second collector still keeps it, so if you send `network.getData` with the second collector, the browser responds with the body:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "bytes": {
      "type": "string",
      "value": "[{\"id\":1,\"name\":\"Notebook\"}]"
    }
  }
}
```

### Releasing data that no other collector keeps

Using the same connection, session, and collectors as in the first example, send the following message to release the body from the second collector too:

```json
{
  "id": 4,
  "method": "network.disownData",
  "params": {
    "collector": "3b0a4aff-5b99-46e7-ba56-32fc3f380481",
    "dataType": "response",
    "request": "b9e201af-6475-4bea-a174-51a8290f8087"
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

No collector keeps the body now, so the browser deletes it.
If you send [`network.getData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/getData) for the request, the browser responds with an error:

```json
{
  "type": "error",
  "id": 5,
  "error": "no such network data",
  "message": "Network data for request id b9e201af-6475-4bea-a174-51a8290f8087 and DataType response not found",
  "stacktrace": ""
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`network.addDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addDataCollector) command
- [`network.getData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/getData) command
- [`network.removeDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/removeDataCollector) command
