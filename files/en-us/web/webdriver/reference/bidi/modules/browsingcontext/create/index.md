---
title: "`browsingContext.create` command"
short-title: create
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/create
page-type: webdriver-command
browser-compat: webdriver.bidi.browsingContext.create
sidebar: webdriver
---

The `browsingContext.create` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module creates a [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) as a new tab or a new window and returns its context ID.

## Syntax

```json-nolint
{
  "method": "browsingContext.create",
  "params": {
    "type": "tab" / "window"
  }
}
```

### Parameters

The `params` field contains:

- `background` {{optional_inline}}
  - : A boolean that indicates whether the context is created in the background or the foreground.
    The default value is `false`.
    - `false`: The context is brought to the foreground and receives focus after it is created.
    - `true`: The context is created in the background. See [`browsingContext.activate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate) to bring it to the foreground and give it focus.
- `referenceContext` {{optional_inline}}
  - : A string that contains the ID of an existing [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) that is used to position the new context.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

    When `type` is `"tab"`, the new context opens in the same window as the context specified by `referenceContext`.
    If `type` is `"window"` or `referenceContext` is omitted, the browser determines where the new context appears.

    The new context inherits the [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) of the specified reference context, unless `userContext` is explicitly specified.

- `type`
  - : A string that specifies the type of the context that is created.
    It accepts one of the following values:
    - `"tab"`: Creates the context as a tab in an existing window.
      If `referenceContext` is provided, the new tab opens next to it.
    - `"window"`: Creates the context in a new browser window.
- `userContext` {{optional_inline}}
  - : A string that contains the ID of the [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) in which the context is created.
    User context IDs are returned by [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) or [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext).

    If not specified, the new context uses the `"default"` user context or inherits the user context of `referenceContext` if provided.

### Return value

The `result` object in the response contains the following fields:

- `context`
  - : A string that contains the ID of the newly created context.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : A required parameter is missing or has an invalid type.
    This error is also returned when the context specified by `referenceContext` is not a top-level context.
- [`no such frame`](/en-US/docs/Web/WebDriver/Reference/Errors/NoSuchFrame)
  - : No context with the given `referenceContext` ID is found.
- [`no such user context`](/en-US/docs/Web/WebDriver/Reference/Errors/NoSuchUserContext)
  - : No user context with the given `userContext` ID is found.
- [`unsupported operation`](/en-US/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)
  - : The browser is unable to create a new [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context).

## Description

The `browsingContext.create` command always creates a [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context).
The `type` parameter determines how the new context appears in the browser: `"window"` creates a new [client window](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows), while `"tab"` opens it as a tab inside an existing client window.

By default, the new context receives focus immediately.
To turn off this behavior, set `background` to `true`.
You can later bring a background context to the foreground using [`browsingContext.activate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate).

If you want the new tab to open next to a specific existing tab, pass that tab's context ID as `referenceContext`. Without it, the browser places the new tab wherever it decides.

By default, the new context is added to the `"default"` [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) and shares storage with other tabs in that context. To isolate it, that is, give it separate cookies and session data, specify a different user context using `userContext`.

## Examples

### Creating a tab

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), send the following message to create a new tab:

```json
{
  "id": 1,
  "method": "browsingContext.create",
  "params": {
    "type": "tab"
  }
}
```

On successful creation, the browser responds with the context ID of the new tab:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"
  }
}
```

Since `background` is not specified, the tab opens in the foreground by default.

### Creating a tab next to an existing context

The following example shows how to create a tab in the background next to an existing tab within the specified user context.

First, get the context ID of the reference tab using [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) and the user context ID using [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) or [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext). Then send the following message:

```json
{
  "id": 2,
  "method": "browsingContext.create",
  "params": {
    "type": "tab",
    "referenceContext": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "background": true,
    "userContext": "3a8e2d1f-4b5c-6d7e-8f9a-0b1c2d3e4f5a"
  }
}
```

The browser opens the new tab in the same window as the reference context and responds as follows:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "context": "b2e3f461-8a5c-4d12-9b87-c3d4e5f6a7b8"
  }
}
```

### Creating a window in the background

Send the following message to create a new window without activating it:

```json
{
  "id": 3,
  "method": "browsingContext.create",
  "params": {
    "type": "window",
    "background": true
  }
}
```

The browser responds with the context ID of the new window as follows:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "context": "d87a0c61-7b0e-4e8b-b4f0-0a7d5af2e0c3"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.activate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate) command
- [`browsingContext.close`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
- [`browsingContext.contextCreated`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated) event
- [`browsingContext.contextDestroyed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed) event
