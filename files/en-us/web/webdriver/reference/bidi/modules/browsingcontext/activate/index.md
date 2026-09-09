---
title: "`browsingContext.activate` command"
short-title: activate
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate
page-type: webdriver-command
browser-compat: webdriver.bidi.browsingContext.activate
sidebar: webdriver
---

The `browsingContext.activate` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module brings a [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) to the foreground and gives it focus.

## Syntax

```json-nolint
{
  "method": "browsingContext.activate",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}
```

### Parameters

The `params` field contains:

- `context`
  - : A string that contains the ID of the [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) to bring to the foreground and give focus.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : A required parameter is missing or has an invalid type.
    This error is also returned when the context specified by `context` is not a top-level context.
- `no such frame`
  - : No context with the given context ID is found.
- `unsupported operation`
  - : The browser cannot bring the context to the foreground.

## Examples

### Activating a background tab

The following example shows how to activate a background tab.

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), suppose you create a tab in the background using [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) with `background: true`, which returns the context ID of the tab. Send the following message to activate it:

```json
{
  "id": 1,
  "method": "browsingContext.activate",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"
  }
}
```

The browser brings the tab to the foreground and responds as follows:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.close`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close) command
- [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
