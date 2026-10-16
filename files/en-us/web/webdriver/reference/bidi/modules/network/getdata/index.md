---
title: "`network.getData` command"
short-title: getData
slug: Web/WebDriver/Reference/BiDi/Modules/network/getData
page-type: webdriver-command
browser-compat: webdriver.bidi.network.getData
sidebar: webdriver
---

The `network.getData` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module retrieves the body of a request or response that a [data collector](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#data_collectors) has collected.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "network.getData",
  "params": {
    "dataType": "response",
    "request": "b9e201af-6475-4bea-a174-51a8290f8087"
  }
}

/* With required and optional parameters */
{
  "method": "network.getData",
  "params": {
    "collector": "a3f1662f-de73-4424-a0be-03a22bd22243",
    "dataType": "response",
    "disown": true,
    "request": "b9e201af-6475-4bea-a174-51a8290f8087"
  }
}
```

### Parameters

The `params` field contains:

- `collector` {{optional_inline}}
  - : A string that contains the ID of a collector that keeps the data.
    If specified, the browser returns the data only if this collector keeps it.
    Collector IDs are returned by the [`network.addDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addDataCollector) command.
- `dataType`
  - : A string that specifies which body to retrieve.
    It can take one of the following values:
    - `request`: The body of the request.
    - `response`: The body of the response.
- `disown` {{optional_inline}}
  - : A boolean that indicates whether the collector releases the data after returning it.
    - `false`: The collector keeps the data. This is the default.
    - `true`: The collector specified in `collector` releases the data, as with [`network.disownData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/disownData).
      If no other collector keeps the data, the browser deletes it.
      This value requires `collector`.
- `request`
  - : A string that contains the ID of the request.
    Request IDs are in the `request.request` field of `network` events, such as [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted).

### Return value

The `result` object in the response contains the following field:

- `bytes`
  - : An object that contains the body. It contains the following fields:
    - `type`
      - : A string that specifies how the `value` field of this object is encoded.
        It can take one of the following values:
        - `base64`: The body isn't valid [UTF-8](/en-US/docs/Glossary/UTF-8) text (a PNG image, for example), and the value is its [Base64](/en-US/docs/Glossary/Base64)-encoded bytes.
        - `string`: The body is valid UTF-8 text, and the value is that text.
    - `value`
      - : A string that contains the body, encoded as specified by `type`.
        For a response, this is the body as the page receives it, after the browser decodes it.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - `dataType` or `request` is missing, or a parameter has an invalid type or value, such as a `dataType` that is not `request` or `response`.
    - `disown` is `true`, but `collector` is not specified.
- `no such network collector`
  - : The session has no collector with the specified `collector` ID.
- `no such network data`
  - : Thrown in any of the following cases:
    - The browser keeps no data of the specified `dataType` for the request, for example because no collector collected it, or because every collector that collected it has released it.
    - `collector` is specified, and that collector doesn't keep the data.
- `unavailable network data`
  - : The browser doesn't have the body, although it started to collect it: for example, it discarded the body to stay within its limit for all the data it collects, or the request failed before the whole body arrived.

## Description

A collector keeps a response body only once the browser has received all of it.
If you send `network.getData` while a response body is still arriving, for example after the [`network.responseStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseStarted) event and before [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted), the browser responds once the whole body has arrived or the request has failed.

After a redirect, the request keeps its request ID, and the browser keeps only the body of the final response.

The data stays available until every collector that collected it releases it, or until the browser discards it to stay within its limit for all the data it collects, as described in [Data collectors](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#data_collectors).
Once no collector keeps a body, the browser deletes it, so releasing the bodies that you no longer need from every collector that keeps them, with `disown` or with [`network.disownData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/disownData), leaves more room within that limit.

## Examples

### Retrieving a response body

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `network.responseCompleted`.
Suppose you loaded `https://example.com/` in the tab with the context ID `93ee5bd6-d256-4608-a002-9a8995cc0e5f`, then added a collector for request and response bodies with [`network.addDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/addDataCollector), which returned the collector ID `a3f1662f-de73-4424-a0be-03a22bd22243`.
Then the page's script fetched a list of items from `https://example.com/api/items`.

The browser sent a `network.responseCompleted` event for the list (only some of the fields are shown):

```json
{
  "type": "event",
  "method": "network.responseCompleted",
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
    "response": {
      "bodySize": 28,
      "mimeType": "application/json",
      "status": 200,
      "url": "https://example.com/api/items"
    },
    "timestamp": 1792169341366
  }
}
```

Send the following message to retrieve the body of the response:

```json
{
  "id": 1,
  "method": "network.getData",
  "params": {
    "dataType": "response",
    "request": "b9e201af-6475-4bea-a174-51a8290f8087"
  }
}
```

The browser responds with the JSON that the page received, as text:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "bytes": {
      "type": "string",
      "value": "[{\"id\":1,\"name\":\"Notebook\"}]"
    }
  }
}
```

### Retrieving a binary response body

Using the same connection, session, and collector, suppose the page also loaded the image `https://example.com/logo.png`, and its `network.responseCompleted` event had the request ID `37cf22b4-f399-4450-828d-d54fce56004e`.
Send the following message to retrieve the image:

```json
{
  "id": 2,
  "method": "network.getData",
  "params": {
    "dataType": "response",
    "request": "37cf22b4-f399-4450-828d-d54fce56004e"
  }
}
```

The image isn't valid UTF-8 text, so the browser responds with its bytes Base64-encoded:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "bytes": {
      "type": "base64",
      "value": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
    }
  }
}
```

### Retrieving a request body

Using the same connection, session, and collector, suppose the page's script added an item by sending a `POST` request with a JSON body to `https://example.com/api/items`, and its `network.responseCompleted` event had the request ID `ef49027d-aa97-44e4-bbe6-6ff8dbaa0c97`.
The collector collects request bodies too, so send the following message to retrieve the body that the page sent:

```json
{
  "id": 3,
  "method": "network.getData",
  "params": {
    "dataType": "request",
    "request": "ef49027d-aa97-44e4-bbe6-6ff8dbaa0c97"
  }
}
```

The browser responds with the body of the request:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "bytes": {
      "type": "string",
      "value": "{\"name\":\"Pen\"}"
    }
  }
}
```

### Retrieving data and releasing it

Using the same connection, session, and collector, if you no longer need the body of the response to the first request once you have it, send the following message to retrieve it and release it from the collector:

```json
{
  "id": 4,
  "method": "network.getData",
  "params": {
    "collector": "a3f1662f-de73-4424-a0be-03a22bd22243",
    "dataType": "response",
    "disown": true,
    "request": "b9e201af-6475-4bea-a174-51a8290f8087"
  }
}
```

The browser responds with the body, as in the first example:

```json
{
  "id": 4,
  "type": "success",
  "result": {
    "bytes": {
      "type": "string",
      "value": "[{\"id\":1,\"name\":\"Notebook\"}]"
    }
  }
}
```

No other collector keeps the body, so the browser deletes it.
If you send `network.getData` for it again, the browser responds with an error:

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
- [`network.disownData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/disownData) command
- [`network.removeDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/removeDataCollector) command
- [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted) event
