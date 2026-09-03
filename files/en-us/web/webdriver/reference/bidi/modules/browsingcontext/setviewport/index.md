---
title: "`browsingContext.setViewport` command"
short-title: setViewport
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/setViewport
page-type: webdriver-command
browser-compat: webdriver.bidi.browsingContext.setViewport
sidebar: webdriver
---

The `browsingContext.setViewport` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module changes viewport characteristics, such as the viewport size and the device pixel ratio, for one or more [top-level contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context).

## Syntax

```json-nolint
/* With the required `context` parameter */
{
  "method": "browsingContext.setViewport",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}

/* With the required `userContexts` parameter */
{
  "method": "browsingContext.setViewport",
  "params": {
    "userContexts": ["a812d4d0-8c8f-4c78-9de1-3e5c5b3b3c3c"]
  }
}

/* With required and optional parameters */
{
  "method": "browsingContext.setViewport",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "viewport": {
      "width": 1280,
      "height": 720
    },
    "devicePixelRatio": 3.0
  }
}
```

### Parameters

The `params` field contains:

- `context`
  - : A string that contains the ID of the [top-level context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) in which to apply the viewport settings.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

    This field cannot be used if `userContexts` is also specified.
- `userContexts`
  - : An array of one or more [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) ID strings, each identifying a user context in which to apply the viewport settings.
    User context IDs are returned by commands such as [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) or [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts).

    This field cannot be used if `context` is also specified.

For both `context` and `userContexts`, the `params` field can also contain:

- `devicePixelRatio` {{optional_inline}}
  - : A number greater than `0.0` that overrides the {{domxref("Window.devicePixelRatio")}}, or `null` to remove the override and restore the actual device pixel ratio.
    If not specified, the device pixel ratio is left unchanged.
- `viewport` {{optional_inline}}
  - : An object that specifies the new viewport size using the following fields, or `null` to reset to the browser's default viewport size:
    - `height`
      - : A non-negative integer that specifies the viewport height in CSS pixels.
    - `width`
      - : A non-negative integer that specifies the viewport width in CSS pixels.

    If not specified, the viewport size is left unchanged.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - A required parameter is missing or has an invalid type.
    - Both `context` and `userContexts` are provided in the same request.
    - Neither `context` nor `userContexts` is provided.
    - The context specified by `context` is not a top-level context.
- `no such frame`
  - : No context with the given `context` ID is found.
- `no such user context`
  - : No user context with the given user context ID is found.
- `unsupported operation`
  - : The browser cannot adjust the viewport with the given parameters.

## Description

This command allows you to change the characteristics of the viewport of a specific context, which can be useful to emulate narrow viewports or test responsive design.
Specify `context` to apply the viewport settings to a single top-level context or `userContexts` to apply them to every top-level context in one or more [user contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts).

When `userContexts` is specified, the `viewport` size and `devicePixelRatio` you provide apply to every top-level context currently in each given user context.
They also apply to every top-level context created later in that user context until you change or clear them with another `setViewport` command.

## Examples

### Resizing a single tab's viewport

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), send the following message to resize a tab's viewport to 480x640 CSS pixels:

```json
{
  "id": 1,
  "method": "browsingContext.setViewport",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "viewport": {
      "width": 480,
      "height": 640
    }
  }
}
```

The browser responds as follows:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

### Overriding the device pixel ratio

Using the same connection and session as in the first example, send the following message to simulate a high-density display without changing the viewport size:

```json
{
  "id": 2,
  "method": "browsingContext.setViewport",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "devicePixelRatio": 3.0
  }
}
```

The browser responds as follows:

```json
{
  "id": 2,
  "type": "success",
  "result": {}
}
```

### Applying a viewport override to a user context

Using the same connection and session as in the first example, send the following message to apply the viewport settings to every top-level context in the specified user context:

```json
{
  "id": 3,
  "method": "browsingContext.setViewport",
  "params": {
    "userContexts": ["a812d4d0-8c8f-4c78-9de1-3e5c5b3b3c3c"],
    "viewport": {
      "width": 375,
      "height": 667
    }
  }
}
```

The browser responds as follows:

```json
{
  "id": 3,
  "type": "success",
  "result": {}
}
```

### Removing a viewport override

Using the same connection and session as in the first example, send the following message to restore the default viewport size on a context by setting `viewport` to `null`:

```json
{
  "id": 4,
  "method": "browsingContext.setViewport",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "viewport": null
  }
}
```

The browser responds as follows:

```json
{
  "id": 4,
  "type": "success",
  "result": {}
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.captureScreenshot`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/captureScreenshot) command
- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
