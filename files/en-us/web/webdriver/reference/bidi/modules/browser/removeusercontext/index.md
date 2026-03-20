---
title: browser.removeUserContext command
short-title: browser.removeUserContext
slug: Web/WebDriver/Reference/BiDi/Modules/browser/removeUserContext
page-type: webdriver-command
browser-compat: webdriver.bidi.browser.removeUserContext
sidebar: webdriver
---

The `browser.removeUserContext` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browser`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser) module removes the specified [user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) and all its tabs across all windows. Tabs are closed without running [`beforeunload`](/en-US/docs/Web/API/Window/beforeunload_event) event handler functions.

> [!WARNING]
> This command is irreversible, and all storage associated with the user context is permanently deleted.

## Syntax

```json-nolint
{
  "method": "browser.removeUserContext",
  "params": {
    "userContext": "<userContextId>"
  }
}
```

### Parameters

The `params` field contains:

- `userContext`
  - : A string that specifies the ID of the user context to remove.
    The default user context (`"default"`) cannot be removed.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : The `userContext` field is `"default"`. The default user context cannot be removed.
- `no such user context`
  - : No user context with the given user context ID is found.

## Examples

### Removing a user context

Consider a scenario where you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new). After [creating a user context](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) with `browser.createUserContext`, send the following message if you want to remove it:

```json
{
  "id": 1,
  "method": "browser.removeUserContext",
  "params": {
    "userContext": "4e4b1f6d-3f1a-4b2e-9f8c-1a2b3c4d5e6f"
  }
}
```

The browser responds with a successful removal as follows:

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

- [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) command
- [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) command
- [`browser.getUserContexts`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) command
- [`browser.close`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/close) command
- [`session.end`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/end) command
