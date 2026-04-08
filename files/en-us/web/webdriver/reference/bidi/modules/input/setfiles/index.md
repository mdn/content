---
title: "`input.setFiles` command"
short-title: setFiles
slug: Web/WebDriver/Reference/BiDi/Modules/input/setFiles
page-type: webdriver-command
browser-compat: webdriver.bidi.input.setFiles
sidebar: webdriver
---

The `input.setFiles` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`input`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input) module simulates a file picker dialog by setting the file selection of an [`<input type="file">`](/en-US/docs/Web/HTML/Reference/Elements/input/file) element in a given context to the specified file paths.

## Syntax

```json-nolint
{
  "method": "input.setFiles",
  "params": {
    "context": "<contextId>",
    "element": "<elementId>",
    "files": ["<filePath>", ...]
  }
}
```

### Parameters

The `params` field contains:

- `context`
  - : A string that contains the ID ([UUID](/en-US/docs/Glossary/UUID)) of the context with the target [`<input type="file">`](/en-US/docs/Web/HTML/Reference/Elements/input/file) element.
    Context IDs are returned by commands such as [`browsingContext.getTree`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree).
- `element`
  - : An object containing the ID that uniquely identifies the `<input type="file">` DOM element to use for file selection.
    The ID is returned by the browser when you locate the element using [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) or [`script.callFunction`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction).
- `files`
  - : An array of strings, where each string is the absolute file path of a file to select.
    This command overrides any previously selected files. You can pass an empty array to clear the selection.
    If the array contains more than one file path, ensure that the `<input type="file">` element has the [`multiple`](/en-US/docs/Web/HTML/Reference/Elements/input/file#multiple) attribute.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- `no such element`
  - : The element reference cannot be resolved to a valid DOM element in the given context.
- `unable to set file input`
  - : The element is not an `<input>` element with `type="file"`, the element is disabled, or more than one file path is provided without the `multiple` attribute.
- `unsupported operation`
  - : The browser is unable to set the selected files to the provided paths; for example, if any of the specified files do not exist on the filesystem.

## Examples

### Setting a file on a file input

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an active session, first obtain a shared reference to a `<input type="file">` element, then send the following message to set its selected file:

```json
{
  "id": 1,
  "method": "input.setFiles",
  "params": {
    "context": "5f07e3ca-ecac-465e-b9ef-49000c196ecf",
    "element": {
      "sharedId": "3be28343-afd3-4dea-a2b6-a863fbbb80e1"
    },
    "files": ["/home/user/documents/test-upload.txt"]
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

### Clearing the file selection

To clear all previously selected files, pass an empty array:

```json
{
  "id": 2,
  "method": "input.setFiles",
  "params": {
    "context": "5f07e3ca-ecac-465e-b9ef-49000c196ecf",
    "element": {
      "sharedId": "3be28343-afd3-4dea-a2b6-a863fbbb80e1"
    },
    "files": []
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

- [`input.performActions`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input/performActions) command
- [`input.releaseActions`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input/releaseActions) command
- [`input.fileDialogOpened`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/input/fileDialogOpened) event
- [`script.evaluate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) command
