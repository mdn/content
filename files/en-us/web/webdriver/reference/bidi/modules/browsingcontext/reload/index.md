---
title: "`browsingContext.reload` command"
short-title: reload
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload
page-type: webdriver-command
browser-compat: webdriver.bidi.browsingContext.reload
sidebar: webdriver
---

The `browsingContext.reload` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module reloads the specified [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts).

## Syntax

```json-nolint
{
  "method": "browsingContext.reload",
  "params": {
    "context": "<contextId>"
  }
}
```

### Parameters

The `params` field contains:

- `context`
  - : A string that contains the ID of the context to reload.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
- `ignoreCache` {{optional_inline}}
  - : A boolean that indicates whether the browser bypasses the HTTP cache when reloading.
    - `false`: The browser may use cached resources when reloading. This is the default.
    - `true`: The browser reloads the page without using cached resources, fetching all content from the network.
- `wait` {{optional_inline}}
  - : A keyword that specifies the stage of document loading at which the command returns (the stages correspond to those of the [`document.readyState`](/en-US/docs/Web/API/Document/readyState) property).
    It can take one of the following values:
    - `"complete"`
      - : The command returns when the document and all its subresources have finished loading.
        Use this value when your automation needs to interact with page content — for example, to click a button or read text — before sending further commands.
    - `"interactive"`
      - : The command returns when the document has been parsed and is ready for interaction.
        Use this value when you need the DOM to be available but don't need images or other subresources to finish loading.
    - `"none"`
      - : The command returns once the navigation has committed, that is, the browser has begun reloading the page, but page content is not yet available.
        This is also the default behavior when `wait` is omitted.
        Use this value when you only need to initiate the reload and track its progress through navigation events.

### Return value

The `result` object in the response contains the following fields:

- `navigation`
  - : A string that contains the ID ([UUID](/en-US/docs/Glossary/UUID)) that uniquely identifies this navigation. A new UUID is generated for each `browsingContext.reload` command.
    If you are subscribed to navigation events such as [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted), the event includes this same UUID, letting you match the event back to this specific reload call.
- `url`
  - : A string that contains the URL of the reloaded document, including the fragment.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : A required parameter is missing or has an invalid type.
- `no such frame`
  - : No context with the given context ID is found.
- `unknown error`
  - : A navigation failure occurred, such as a network error or an aborted reload.

## Examples

### Reloading a page

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Suppose a tab has `https://example.com/` loaded. Using the context ID of that tab, send the following message to reload it:

```json
{
  "id": 1,
  "method": "browsingContext.reload",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"
  }
}
```

The browser responds as follows with the navigation ID and the URL of the reloaded document:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "navigation": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "url": "https://example.com/"
  }
}
```

### Bypassing the cache while reloading a page

Suppose a tab has `https://example.com/` loaded and you want to force the browser to fetch all resources from the network, bypassing the cache. Using the context ID of that tab, send the following message:

```json
{
  "id": 2,
  "method": "browsingContext.reload",
  "params": {
    "context": "d84e9b52-c4a1-4f88-b537-613c8a5b9e2d",
    "ignoreCache": true
  }
}
```

The browser reloads the page and responds once the navigation has committed:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "navigation": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    "url": "https://example.com/"
  }
}
```

### Waiting for a page to finish loading while reloading it

Suppose a tab has `https://example.com/` loaded and you want to reload it, but not continue until the page has fully loaded. Using the context ID of that tab, send the following message:

```json
{
  "id": 3,
  "method": "browsingContext.reload",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "wait": "complete"
  }
}
```

The browser responds as follows, once the document and all its subresources have finished loading:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "navigation": "c3d4e5f6-a7b8-9012-cdef-123456789012",
    "url": "https://example.com/"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) command
- [`browsingContext.traverseHistory`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/traverseHistory) command
- [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
- [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) event
- [`browsingContext.navigationCommitted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted) event
- [`browsingContext.navigationFailed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed) event
