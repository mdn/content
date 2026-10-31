---
title: "`network.removeDataCollector` command"
short-title: removeDataCollector
slug: Web/WebDriver/Reference/BiDi/Modules/network/removeDataCollector
page-type: webdriver-command
browser-compat: webdriver.bidi.network.removeDataCollector
sidebar: webdriver
---

The `network.removeDataCollector` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module removes a [data collector](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#data_collectors) that was added with [`network.addDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addDataCollector).
The collector stops collecting data and releases the data that it has collected.

## Syntax

```json-nolint
{
  "method": "network.removeDataCollector",
  "params": {
    "collector": "a3f1662f-de73-4424-a0be-03a22bd22243"
  }
}
```

### Parameters

The `params` field contains:

- `collector`
  - : A string that contains the ID of the collector to remove.
    Collector IDs are returned by the [`network.addDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addDataCollector) command.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : A required parameter is missing or has an invalid type.
- `no such network collector`
  - : No collector with the given `collector` ID is found in the session, for example because it was already removed or another session added it.

## Description

Once the collector is removed, it doesn't collect the bodies of new requests and releases every body that it has collected.
A body that no other collector keeps is deleted, so [`network.getData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/getData) returns a `no such network data` error for it.
A body that another collector also keeps stays available.

After the removal, `network.getData` and [`network.disownData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/disownData) return a `no such network collector` error if you specify the collector's ID in `collector`.

Collectors belong to the session that adds them, so only that session can remove them.
When the session ends, its collectors release their data in the same way.

## Examples

### Removing a collector

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted).

Assume also that you added a collector for response bodies using [`network.addDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addDataCollector), which returned its ID.
The page in a tab then fetched `https://example.com/api/items`, and the collector collected the body of the response.
You received the request ID in the `network.responseCompleted` event for that request.

Send the following message to remove the collector when you no longer need the collected bodies:

```json
{
  "id": 1,
  "method": "network.removeDataCollector",
  "params": {
    "collector": "a3f1662f-de73-4424-a0be-03a22bd22243"
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

No other collector kept the response body, so the browser deleted it.
If you then send [`network.getData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/getData) for the request, the browser responds with an error:

```json
{
  "type": "error",
  "id": 2,
  "error": "no such network data",
  "message": "Network data for request id b9e201af-6475-4bea-a174-51a8290f8087 and DataType response not found",
  "stacktrace": ""
}
```

### Removing one of two collectors

Using the same connection, session, and subscription as in the first example, suppose you added two collectors for response bodies using `network.addDataCollector`, which returned their IDs.
The first collector is for the tab, and the second one is for all contexts.
Both collected the body of the response to another request for `https://example.com/api/items` in the tab.
You received the request ID in the `network.responseCompleted` event for that request.
You then removed the collector for the tab using `network.removeDataCollector`.

Send the following message to retrieve the body:

```json
{
  "id": 6,
  "method": "network.getData",
  "params": {
    "dataType": "response",
    "request": "37cf22b4-f399-4450-828d-d54fce56004e"
  }
}
```

The second collector still keeps the body, so the browser responds with it:

```json
{
  "id": 6,
  "type": "success",
  "result": {
    "bytes": {
      "type": "string",
      "value": "[{\"id\":1,\"name\":\"Notebook\"}]"
    }
  }
}
```

### Removing a collector that doesn't exist

Using the same connection and session as in the first example, suppose you send `network.removeDataCollector` again with the ID of the collector for the tab from the second example, which you've already removed.
The browser responds with an error:

```json
{
  "type": "error",
  "id": 7,
  "error": "no such network collector",
  "message": "Network data collector with id 3b0a4aff-5b99-46e7-ba56-32fc3f380481 not found",
  "stacktrace": ""
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`network.addDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addDataCollector) command
- [`network.disownData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/disownData) command
- [`network.getData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/getData) command
- [`session.end`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/end) command
