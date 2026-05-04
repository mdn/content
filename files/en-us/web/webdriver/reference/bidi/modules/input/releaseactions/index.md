---
title: "`input.releaseActions` command"
short-title: releaseActions
slug: Web/WebDriver/Reference/BiDi/Modules/input/releaseActions
page-type: webdriver-command
browser-compat: webdriver.bidi.input.releaseActions
sidebar: webdriver
---

The `input.releaseActions` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`input`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input) module releases any held keys or pressed pointer buttons for a given context and resets the input state for that context. Call it after [`input.performActions`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input/performActions) to clean up any inputs left in an intermediate state.

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
  - : A string that contains the ID ([UUID](/en-US/docs/Glossary/UUID)) of the context for which to release inputs. Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : A required parameter is missing or has an invalid type.
- `no such frame`
  - : No context with the given context ID is found.

## Examples

### Releasing all active inputs

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), send the following message after [`input.performActions`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input/performActions) to release all held keys and pointer buttons and reset the input state:

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
