---
title: "`script.removePreloadScript` command"
short-title: removePreloadScript
slug: Web/WebDriver/Reference/BiDi/Modules/script/removePreloadScript
page-type: webdriver-command
browser-compat: webdriver.bidi.script.removePreloadScript
sidebar: webdriver
---

The `script.removePreloadScript` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`script`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script) module removes the specified preload script.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "script.removePreloadScript",
  "params": {
    "script": "d4b1a0f6-2a3c-4f7d-9e21-5c6b7a8d9e0f"
  }
}
```

### Parameters

The `params` field contains:

- `script`
  - : A string that contains the [UUID](/en-US/docs/Glossary/UUID) of the preload script to remove.
    Preload script IDs are returned by the [`script.addPreloadScript`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript) command.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown if a required parameter is missing or has an invalid type.
- `no such script`
  - : Thrown if no preload script with the specified script ID is found.

## Description

After a [preload script](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script#preload_scripts) is removed, the browser no longer runs it in new documents.
Removing a preload script does not undo changes it has already made.

When a session ends, the browser automatically removes all preload scripts registered in that session.

## Examples

### Removing a preload script

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Suppose you registered a preload script that logs each new document's URL by using [`script.addPreloadScript`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript).
The browser returns the preload script's ID in the `script` field.

To stop logging URLs for new documents, send the following message to remove the preload script:

```json
{
  "id": 3,
  "method": "script.removePreloadScript",
  "params": {
    "script": "d4b1a0f6-2a3c-4f7d-9e21-5c6b7a8d9e0f"
  }
}
```

The browser responds with an empty `result` object:

```json
{
  "id": 3,
  "type": "success",
  "result": {}
}
```

When you subsequently navigate a context to a new document, the removed preload script no longer logs the document's URL.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`script.addPreloadScript`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript) command
- [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) command
- [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) command
