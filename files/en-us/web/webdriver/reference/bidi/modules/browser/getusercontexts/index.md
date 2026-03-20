---
title: browser.getUserContexts command
short-title: browser.getUserContexts
slug: Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts
page-type: webdriver-command
browser-compat: webdriver.bidi.browser.getUserContexts
sidebar: webdriver
---

The `browser.getUserContexts` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`browser`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser) module returns a list of all current [user contexts](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) in the browser.

## Syntax

```json-nolint
{
  "method": "browser.getUserContexts",
  "params": {}
}
```

### Parameters

None. However, you must include the `params` field and set it to an empty object (`{}`).

### Return value

The `result` object in the response with the following fields:

- `userContexts`
  - : An array of one or more objects, each representing a user context.
    Each object has the following field:
    - `userContext`
      - : A string that uniquely identifies the user context.
        The default user context has the value `"default"`; it always exists and cannot be removed, so the array is never empty.

## Examples

### Getting a list of user contexts

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), send the following message to get a list of all user contexts:

```json
{
  "id": 1,
  "method": "browser.getUserContexts",
  "params": {}
}
```

When only the default user context exists, the browser responds as follows:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "userContexts": [
      {
        "userContext": "default"
      }
    ]
  }
}
```

### Getting a list of user contexts after creating additional ones

After creating a few user contexts with [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext), send the following message to list all of them:

```json
{
  "id": 2,
  "method": "browser.getUserContexts",
  "params": {}
}
```

The browser responds with all user contexts, including the `default` one, as follows:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "userContexts": [
      {
        "userContext": "default"
      },
      {
        "userContext": "4e4b1f6d-3f1a-4b2e-9f8c-1a2b3c4d5e6f"
      },
      {
        "userContext": "7d9e2a1b-5c3f-4e6d-8a7b-2c1d0e9f8a7b"
      }
    ]
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) command
- [`browser.createUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) command
- [`browser.removeUserContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser/removeUserContext) command
