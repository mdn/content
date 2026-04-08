---
title: "`input.releaseActions` command"
short-title: releaseActions
slug: Web/WebDriver/Reference/BiDi/Modules/input/releaseActions
page-type: webdriver-command
browser-compat: webdriver.bidi.input.releaseActions
sidebar: webdriver
---

The `input.releaseActions` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`input`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input) module releases any held keys or pressed pointer buttons for a given context and resets the session's input state. Call it after [`input.performActions`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input/performActions) to clean up any inputs left in an intermediate state.

## Syntax

```json-nolint
{
  "method": "input.releaseActions",
  "params": {
    "context": "<contextId>"
  }
}
```

### Parameters

The `params` field contains:

- `context`
  - : A string that contains the ID of the context for which to release inputs.

### Return value

The `result` field in the response is an empty object (`{}`).

## Examples

### Releasing all active inputs

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an active session, send the following message after [`input.performActions`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input/performActions) to release all held keys and pointer buttons and reset the input state:

```json
{
  "id": 1,
  "method": "input.releaseActions",
  "params": {
    "context": "6B3D5B3A-6571-432B-8E96-E53B5C2ECBB5"
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`input.performActions`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input/performActions) command
- [`input.setFiles`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input/setFiles) command
- [`input.fileDialogOpened`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input/fileDialogOpened) event
