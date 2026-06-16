---
title: "`browsingContext.traverseHistory` command"
short-title: traverseHistory
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/traverseHistory
page-type: webdriver-command
browser-compat: webdriver.bidi.browsingContext.traverseHistory
sidebar: webdriver
---

The `browsingContext.traverseHistory` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module navigates back or forward in the session history of the specified [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context), similar to a user clicking the browser's back and forward buttons.

## Syntax

```json-nolint
{
  "method": "browsingContext.traverseHistory",
  "params": {
    "context": "<contextId>",
    "delta": <integer>
  }
}
```

### Parameters

The `params` field contains:

- `context`
  - : A string that contains the ID of the [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) whose session history is to be navigated.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
- `delta`
  - : An integer that specifies the number of history entries to move in the session history.
    A positive value moves the context forward in history; a negative value moves it backward.

### Return value

The `result` field in the response is an empty object (`{}`).
The command returns once the traversal has been queued, before the resulting navigation is complete.
The [`browsingContext.historyUpdated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/historyUpdated) event fires when the traversal is complete.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : A required parameter is missing or has an invalid type.
    This error is also returned when the specified `context` is not a [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context).
- `no such frame`
  - : No context with the given context ID is found.
- `no such history entry`
  - : The position in the session history specified by `delta` does not exist.

## Examples

### Navigating back in history

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Suppose you created a tab using [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) and navigated it through several pages using [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate): from `https://example.com/page1.html` to `https://example.com/page2.html`, and then to `https://example.com/page3.html`. To navigate two history entries back, that is, to skip `https://example.com/page2.html` and land at `https://example.com/page1.html`, send the following message:

```json
{
  "id": 1,
  "method": "browsingContext.traverseHistory",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "delta": -2
  }
}
```

The browser queues the history traversal and responds as follows:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

### Navigating forward in history

Continuing from the previous example, to navigate one history entry forward, landing at `https://example.com/page2.html`, send the following message:

```json
{
  "id": 2,
  "method": "browsingContext.traverseHistory",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "delta": 1
  }
}
```

The browser queues the history traversal and responds as follows:

```json
{
  "id": 2,
  "type": "success",
  "result": {}
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) command
- [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) command
- [`browsingContext.create`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
- [`browsingContext.navigationAborted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationAborted) event
- [`browsingContext.navigationCommitted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted) event
- [`browsingContext.navigationFailed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed) event
- [`browsingContext.navigationStarted`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) event
