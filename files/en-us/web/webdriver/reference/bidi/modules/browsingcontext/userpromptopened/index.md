---
title: "`browsingContext.userPromptOpened` event"
short-title: userPromptOpened
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/userPromptOpened
page-type: webdriver-event
browser-compat: webdriver.bidi.browsingContext.userPromptOpened_event
sidebar: webdriver
---

The `browsingContext.userPromptOpened` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module fires when a user prompt opens in the browser.

## Event data

The `params` field in the event notification is an object with the following fields:

- `context`
  - : A string that contains the ID of the [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) that has the user prompt.
- `defaultValue` {{optional_inline}}
  - : A string that contains the default value of the {{domxref("Window.prompt", "prompt()")}} dialog.
    This field is included only when the [`type`](#type) field value is `"prompt"` and the default value is not `null`.
- `handler`
  - : A string that indicates how the prompt will be handled.
    The behavior is set by the [`unhandledPromptBehavior`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new#unhandledpromptbehavior) capability for the session, or overridden per user context with [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext).
    It has one of the following values:
    - `"accept"`: The browser will accept the prompt.
    - `"dismiss"`: The browser will dismiss the prompt.
    - `"ignore"`: The browser will leave the prompt open for the client to close using [`browsingContext.handleUserPrompt`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt).
- `message`
  - : A string that contains the message displayed in the prompt.
- `type`
  - : A string that indicates the kind of user prompt that opened.
    It has one of the following values:
    - `"alert"`: An {{domxref("Window.alert", "alert()")}} dialog.
    - `"beforeunload"`: A dialog shown by the {{domxref("Window.beforeunload_event", "beforeunload")}} event.
    - `"confirm"`: A {{domxref("Window.confirm", "confirm()")}} dialog.
    - `"prompt"`: A {{domxref("Window.prompt", "prompt()")}} dialog.

## Examples

### Receiving an event when an alert opens

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), suppose a session is created via [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) with the `default` field of the [`unhandledPromptBehavior`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new#unhandledpromptbehavior) capability set to `"ignore"` so that the browser leaves dialogs open for the client to handle. Also assume that a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `browsingContext.userPromptOpened` is active.

Suppose a page calls `alert("Are you sure?")`.
The browser sends the following notification:

```json
{
  "type": "event",
  "method": "browsingContext.userPromptOpened",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "handler": "ignore",
    "message": "Are you sure?",
    "type": "alert"
  }
}
```

### Receiving an event when a prompt with a default value opens

Using the same connection, session, and subscription as in the first example, suppose a page calls `prompt("Enter your name:", "Jane Doe")`.

The browser sends the following notification:

```json
{
  "type": "event",
  "method": "browsingContext.userPromptOpened",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "handler": "ignore",
    "message": "Enter your name:",
    "type": "prompt",
    "defaultValue": "Jane Doe"
  }
}
```

### Receiving an event when a beforeunload dialog opens

Using the same connection, session, and subscription as in the first example, suppose the client uses the [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) command to navigate away from a page that listens for the `beforeunload` event.

When the dialog opens, before the navigation completes, the browser sends the following notification:

```json
{
  "type": "event",
  "method": "browsingContext.userPromptOpened",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "handler": "ignore",
    "message": "This page is asking you to confirm that you want to leave — information you've entered may not be saved.",
    "type": "beforeunload"
  }
}
```

The session's `unhandledPromptBehavior` capability setting also applies to the handling of the `beforeunload` dialogs, so the notification in this example reports a `handler` value of `"ignore"`.
The dialog stays open until the client closes it with the [`browsingContext.handleUserPrompt`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt) command.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.userPromptClosed`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/userPromptClosed) event
- [`browsingContext.handleUserPrompt`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt) command
- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
