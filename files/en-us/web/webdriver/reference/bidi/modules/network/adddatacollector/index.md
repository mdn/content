---
title: "`network.addDataCollector` command"
short-title: addDataCollector
slug: Web/WebDriver/Reference/BiDi/Modules/network/addDataCollector
page-type: webdriver-command
browser-compat: webdriver.bidi.network.addDataCollector
sidebar: webdriver
---

The `network.addDataCollector` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`network`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network) module adds a [data collector](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#data_collectors), which makes the browser keep the bodies of requests or responses, so that the client can retrieve them with [`network.getData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/getData).

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "network.addDataCollector",
  "params": {
    "dataTypes": ["response"],
    "maxEncodedDataSize": 10000
  }
}

/* With the optional `contexts` parameter */
{
  "method": "network.addDataCollector",
  "params": {
    "contexts": ["93ee5bd6-d256-4608-a002-9a8995cc0e5f"],
    "dataTypes": ["request", "response"],
    "maxEncodedDataSize": 10000
  }
}

/* With the optional `userContexts` parameter */
{
  "method": "network.addDataCollector",
  "params": {
    "dataTypes": ["response"],
    "maxEncodedDataSize": 10000,
    "userContexts": ["4e4b1f6d-3f1a-4b2e-9f8c-1a2b3c4d5e6f"]
  }
}
```

### Parameters

The `params` field contains:

- `collectorType` {{optional_inline}}
  - : A string that specifies the type of the collector.
    The only value is `blob`, which is the default.
- `contexts` {{optional_inline}}
  - : An array of one or more context ID strings, each identifying a [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) whose requests the collector collects data for.
    Data from the child contexts of each top-level context, such as iframes, is collected too.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

    This field cannot be used if `userContexts` is also specified.

- `dataTypes`
  - : An array of one or more strings, each specifying a type of data to collect.
    Each value can be one of the following:
    - `request`: The body of a request, such as the data that a {{domxref("Window/fetch", "fetch()")}} call sends.
    - `response`: The body of a response.
- `maxEncodedDataSize`
  - : A positive integer that specifies the maximum size of each body to collect, in bytes.
    The collector doesn't collect a body that is larger.
    For a response, this is the size of the body as it was sent over the network, before the browser decompresses it.
    Browsers can support different encodings, so a body can fit the limit in one browser and not in another.

    It must not be greater than the browser's limit for all the data it collects, which depends on the browser.

- `userContexts` {{optional_inline}}
  - : An array of one or more [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) ID strings, each identifying a user context whose requests the collector collects data for.
    User context IDs are returned by commands such as [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) or [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts).

    This field cannot be used if `contexts` is also specified.

If neither `contexts` nor `userContexts` is specified, the collector doesn't filter requests by context.

### Return value

The `result` object in the response contains the following field:

- `collector`
  - : A string that contains the ID of the collector.
    [`network.getData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/getData) and [`network.disownData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/disownData) take it to specify the collector, and [`network.removeDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/removeDataCollector) takes it to remove the collector.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - `dataTypes` or `maxEncodedDataSize` is missing, or a parameter has an invalid type, such as a `dataTypes` value that is not `request` or `response`, or a `collectorType` that is not `blob`.
    - `dataTypes` is empty.
    - Both `contexts` and `userContexts` are specified.
    - `contexts` or `userContexts` is specified but empty.
    - `maxEncodedDataSize` is not a positive integer, or is greater than the browser's limit for all the data it collects.
    - A context specified in `contexts` is not a top-level context.
- `no such frame`
  - : No context is found for an ID specified in `contexts`.
- `no such user context`
  - : No user context is found for an ID specified in `userContexts`.

## Description

A collector collects the body of a request or response only when all of the following are true:

- The body's type, `request` or `response`, is one of the collector's `dataTypes`.
- The request comes from one of the collector's `contexts` or one of their child contexts, or from a context in one of its `userContexts`. A collector with neither matches requests from any context.
- The body is no larger than `maxEncodedDataSize`.

A collector keeps a response body only once the browser has received all of it.
For a redirect, it keeps only the body of the final response.
It doesn't collect the bodies of requests that completed before the collector was added, and might not collect those of requests already in progress, so add it before the requests start.

A response body is kept as the page receives it, after the browser decompresses it, though `maxEncodedDataSize` applies to its compressed size: a gzip-compressed JSON response of 2,110 bytes that decompresses to 14,057 bytes is collected with a `maxEncodedDataSize` of `10000`, and [`network.getData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/getData) returns the decompressed JSON.

Collectors belong to the session that adds them.
A collected body stays available until every collector that collected it releases it, or until the browser discards it to make room for newer bodies, as described in [Data collectors](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network#data_collectors).

## Examples

### Collecting response bodies in all contexts

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `network.responseCompleted`.
The tab with the context ID `93ee5bd6-d256-4608-a002-9a8995cc0e5f` shows `https://example.com/`, whose script loads a list of items from `https://example.com/api/items` when a visitor asks for it.

To keep the bodies of the responses that the browser receives, send the following message:

```json
{
  "id": 1,
  "method": "network.addDataCollector",
  "params": {
    "dataTypes": ["response"],
    "maxEncodedDataSize": 10000
  }
}
```

The browser responds with the ID of the collector:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "collector": "a3f1662f-de73-4424-a0be-03a22bd22243"
  }
}
```

When the page then loads the list, after the collector was added, the browser sends a [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted) event with the request ID (only some of the fields are shown):

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
      "mimeType": "application/json",
      "status": 200,
      "url": "https://example.com/api/items"
    },
    "timestamp": 1792169279321
  }
}
```

Send the following message to retrieve the response body:

```json
{
  "id": 2,
  "method": "network.getData",
  "params": {
    "dataType": "response",
    "request": "b9e201af-6475-4bea-a174-51a8290f8087"
  }
}
```

The browser responds with the JSON that the page received:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "bytes": {
      "type": "string",
      "value": "[{\"id\":1,\"name\":\"Notebook\"}]"
    }
  }
}
```

### Collecting response bodies in one tab

Using the same connection, session, and tab, suppose you removed the first collector with [`network.removeDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/removeDataCollector), created a second tab with [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create), which returned the context ID `5e5e96e8-5247-4f22-9b35-a4a2d841cbaa`, and navigated it to `https://example.com/` with [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate).

Send the following message to collect only the response bodies of the first tab:

```json
{
  "id": 6,
  "method": "network.addDataCollector",
  "params": {
    "contexts": ["93ee5bd6-d256-4608-a002-9a8995cc0e5f"],
    "dataTypes": ["response"],
    "maxEncodedDataSize": 10000
  }
}
```

The browser responds with the ID of the new collector:

```json
{
  "id": 6,
  "type": "success",
  "result": {
    "collector": "3b0a4aff-5b99-46e7-ba56-32fc3f380481"
  }
}
```

When the page in the second tab then loads the list of items, after the collector was added, the `network.responseCompleted` event has the request ID `37cf22b4-f399-4450-828d-d54fce56004e`.
The collector didn't collect the response, so if you ask for it with `network.getData`, the browser responds with an error:

```json
{
  "type": "error",
  "id": 7,
  "error": "no such network data",
  "message": "Network data for request id 37cf22b4-f399-4450-828d-d54fce56004e and DataType response not found",
  "stacktrace": ""
}
```

### Specifying both `contexts` and `userContexts`

Using the same connection and session, suppose you send `network.addDataCollector` with both `contexts` and `userContexts`:

```json
{
  "id": 8,
  "method": "network.addDataCollector",
  "params": {
    "contexts": ["93ee5bd6-d256-4608-a002-9a8995cc0e5f"],
    "dataTypes": ["response"],
    "maxEncodedDataSize": 10000,
    "userContexts": ["default"]
  }
}
```

The browser responds with an error:

```json
{
  "type": "error",
  "id": 8,
  "error": "invalid argument",
  "message": "Providing both \"contexts\" and \"userContexts\" arguments is not supported",
  "stacktrace": ""
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`network.getData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/getData) command
- [`network.disownData`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/disownData) command
- [`network.removeDataCollector`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/removeDataCollector) command
- [`network.responseCompleted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/network/responseCompleted) event
