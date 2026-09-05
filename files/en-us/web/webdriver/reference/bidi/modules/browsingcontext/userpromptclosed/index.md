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
  - : A string that contains the text entered by the user before the prompt was closed.
    This field is included only when the `type` field value is `"prompt"`.

## Examples

### Receiving an event when an alert is accepted

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection), an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `browsingContext.userPromptClosed` active.

Suppose an `alert()` dialog is accepted.
The browser sends the following notification:

```json
{
  "type": "event",
  "method": "browsingContext.userPromptClosed",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "accepted": true,
    "type": "alert"
  }
}
```

### Receiving an event when a prompt is closed with entered text

Using the same connection and session, suppose a `prompt()` dialog is accepted after text is typed into it.
The browser sends the following notification:

```json
{
  "type": "event",
  "method": "browsingContext.userPromptClosed",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "accepted": true,
    "type": "prompt",
    "userText": "Jane Doe"
  }
}
```

### Receiving an event when a beforeunload dialog is accepted

Using the same connection and session, suppose the client uses the [`browsingContext.handleUserPrompt`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt) command with `accept` set to `true` to close a `beforeunload` dialog.

When the dialog closes, the browser sends the following notification:

```json
{
  "type": "event",
  "method": "browsingContext.userPromptClosed",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "accepted": true,
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
