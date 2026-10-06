---
title: "`browsingContext.userPromptClosed` event"
short-title: userPromptClosed
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/userPromptClosed
page-type: webdriver-event
browser-compat: webdriver.bidi.browsingContext.userPromptClosed_event
sidebar: webdriver
---

The `browsingContext.userPromptClosed` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`browsingContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) module fires when a user prompt closes in the browser.

## Event data

The `params` field in the event notification is an object with the following fields:

- `accepted`
  - : A boolean that indicates whether the user prompt was accepted.
    - `true`: The prompt was accepted, for example, by clicking "OK" or by a [`browsingContext.handleUserPrompt`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt) command with `accept` set to `true`.
    - `false`: The prompt was dismissed, for example, by clicking "Cancel" or by a [`browsingContext.handleUserPrompt`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt) command with `accept` set to `false`.

    The browser can also close the prompt on its own, without an explicit `handleUserPrompt` command, based on the [`unhandledPromptBehavior`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new#unhandledpromptbehavior) capability defined for the session, or overridden per user context with [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext).
- `context`
  - : A string that contains the ID of the [context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) that had the user prompt.
- `type`
  - : A string that indicates the kind of user prompt that closed.
    It has one of the following values:
    - `"alert"`: An {{domxref("Window.alert", "alert()")}} dialog.
    - `"beforeunload"`: A dialog shown by the {{domxref("Window.beforeunload_event", "beforeunload")}} event.
    - `"confirm"`: A {{domxref("Window.confirm", "confirm()")}} dialog.
    - `"prompt"`: A {{domxref("Window.prompt", "prompt()")}} dialog.
- `userText` {{optional_inline}}
  - : A string that contains the text that was in the prompt dialog before it was closed.
    This field is included only when the [`type`](#type) field value is `"prompt"` and the [`accepted`](#accepted) field value is `true`.

## Examples

### Receiving an event when an alert is accepted

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), suppose a session is created via [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) with the `default` field of the `unhandledPromptBehavior` capability set to `"ignore"` so that the browser leaves dialogs open for the client to handle. Also assume that a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `browsingContext.userPromptClosed` is active.

Suppose an `alert()` dialog is accepted.
The browser sends the following notification:

```json
{
  "type": "event",
  "method": "browsingContext.userPromptClosed",
  "params": {
    "accepted": true,
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "type": "alert"
  }
}
```

### Receiving an event when a prompt is closed with entered text

Using the same connection, session, and subscription as in the first example, suppose a `prompt()` dialog is accepted after text is typed into it.
The browser sends the following notification:

```json
{
  "type": "event",
  "method": "browsingContext.userPromptClosed",
  "params": {
    "accepted": true,
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "type": "prompt",
    "userText": "Jane Doe"
  }
}
```

### Receiving an event when a beforeunload dialog is accepted

Using the same connection, session, and subscription as in the first example, suppose the client uses the [`browsingContext.handleUserPrompt`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt) command with `accept` set to `true` to close a `beforeunload` dialog.

When the dialog closes, the browser sends the following notification:

```json
{
  "type": "event",
  "method": "browsingContext.userPromptClosed",
  "params": {
    "accepted": true,
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "type": "beforeunload"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`browsingContext.userPromptOpened`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/userPromptOpened) event
- [`browsingContext.handleUserPrompt`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt) command
- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
