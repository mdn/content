---
title: "`browsingContext.close` command"
short-title: close
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/close
page-type: webdriver-command
browser-compat: webdriver.bidi.browsingContext.close
sidebar: webdriver
---

The `browsingContext.close` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module closes the specified [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context).

## Syntax

```json-nolint
/* Without optional parameters */
{
  "method": "browsingContext.close",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}

/* With optional parameters */
{
  "method": "browsingContext.close",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "promptUnload": true
  }
}
```

### Parameters

The `params` field contains:

- `context`
  - : A string that contains the ID of the [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) to close.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
- `promptUnload` {{optional_inline}}
  - : A boolean that indicates whether the browser runs [`beforeunload`](/en-US/docs/Web/API/Window/beforeunload_event) event handlers before closing the context.
    The default value is `false`.
    - `false`: The specified context closes immediately without running `beforeunload` event handlers.
    - `true`: The browser runs `beforeunload` event handlers before closing the specified context.
      Any resulting prompt is handled as defined by the `unhandledPromptBehavior` capability specified via the [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new#unhandledpromptbehavior) command.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : A required parameter is missing or has an invalid type.
    This error is also returned when the context specified by `context` is not a top-level context.
- `no such frame`
  - : No context with the given context ID is found.

## Examples

### Closing a tab with a page unload prompt

The following example shows how to close a tab and allow its [`beforeunload`](/en-US/docs/Web/API/Window/beforeunload_event) event handlers to run before closing.

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), suppose a session is created via [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) with `unhandledPromptBehavior` set to `"accept"`.
First get the context ID using [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree), then send the following message:

```json
{
  "id": 1,
  "method": "browsingContext.close",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "promptUnload": true
  }
}
```

The browser closes the context and responds as follows:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

Since `promptUnload` is `true`, the browser runs any `beforeunload` handlers on the page before closing.
The confirmation prompt, if shown, is automatically accepted based on the `unhandledPromptBehavior` setting defined in `session.new`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.activate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate) command
- [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
- [`browsingContext.contextDestroyed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed) event
