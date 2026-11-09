---
title: "`browsingContext.handleUserPrompt` command"
short-title: handleUserPrompt
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt
page-type: webdriver-command
browser-compat: webdriver.bidi.browsingContext.handleUserPrompt
sidebar: webdriver
---

The `browsingContext.handleUserPrompt` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module closes an open user prompt: an {{domxref("Window.alert", "alert()")}}, {{domxref("Window.confirm", "confirm()")}}, {{domxref("Window.prompt", "prompt()")}}, or {{domxref("Window.beforeunload_event", "beforeunload")}} prompt.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "browsingContext.handleUserPrompt",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}

/* With required and optional parameters */
{
  "method": "browsingContext.handleUserPrompt",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "accept": true,
    "userText": "some input text"
  }
}
```

### Parameters

The `params` field contains:

- `accept` {{optional_inline}}
  - : A boolean that indicates whether to accept or dismiss the prompt; its effect depends on the prompt type.

    For an {{domxref("Window.alert", "alert()")}}, this value has no effect and the prompt is always acknowledged. For the other prompt types:

    - `true`: This is the default.

      For a {{domxref("Window.confirm", "confirm()")}}, the action is confirmed.
      For a {{domxref("Window.prompt", "prompt()")}}, the prompt is submitted with the value of `userText`.
      For a {{domxref("Window.beforeunload_event", "beforeunload")}} prompt, the navigation is confirmed.

    - `false`:

      For a `confirm()`, the action is declined.
      For a `prompt()`, the prompt is canceled.
      For a `beforeunload` prompt, the navigation is refused.
- `context`
  - : A string that contains the ID of the context that has the user prompt to close.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
- `userText` {{optional_inline}}
  - : A string that specifies the value to submit for a `prompt()`. This field is ignored for prompt types other than `prompt()`.
    If not specified, it defaults to an empty string.

### Return value

The `result` field in the response is an empty object (`{}`).
The [`browsingContext.userPromptClosed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/userPromptClosed) event fires when the prompt is closed.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : A required parameter is missing or has an invalid type.

- `no such frame`
  - : No context with the given context ID is found.

- `no such alert`
  - : The context specified by `context` does not have a user prompt.

## Examples

### Accepting a `confirm()` prompt

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), suppose a page calls `confirm()`, opening a prompt that blocks the page.

Listen for the [`browsingContext.userPromptOpened`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/userPromptOpened) event to detect the prompt, then send the following message to accept it:

```json
{
  "id": 1,
  "method": "browsingContext.handleUserPrompt",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "accept": true
  }
}
```

The browser closes the prompt and responds as follows:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

### Accepting a `prompt()` with text

Using the same connection and session, suppose a page calls `prompt()` and shows the resulting text input dialog.
Send the following message to submit a value:

```json
{
  "id": 2,
  "method": "browsingContext.handleUserPrompt",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "accept": true,
    "userText": "example input"
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) command
- [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) command
- [`browsingContext.reload`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) command
- [`browsingContext.userPromptOpened`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/userPromptOpened) event
- [`browsingContext.userPromptClosed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/userPromptClosed) event
