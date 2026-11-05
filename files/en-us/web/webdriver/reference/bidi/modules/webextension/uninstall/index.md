---
title: "`webExtension.uninstall` command"
short-title: uninstall
slug: Web/WebDriver/Reference/BiDi/Modules/webExtension/uninstall
page-type: webdriver-command
browser-compat: webdriver.bidi.webExtension.uninstall
sidebar: webdriver
---

The `webExtension.uninstall` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`webExtension`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/webExtension) module uninstalls the [browser extension](/en-US/docs/Mozilla/Add-ons/WebExtensions) with the specified [ID](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/webExtension#extension_ids).

## Syntax

```json-nolint
{
  "method": "webExtension.uninstall",
  "params": {
    "extension": "59ef3ef4-43df-47b5-b7ab-1fa9a3b259f9"
  }
}
```

### Parameters

The `params` field contains:

- `extension`
  - : A string that contains the ID of the extension to uninstall.
    Extension IDs are returned by the [`webExtension.install`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/webExtension/install) command.

### Return value

The `result` field in the response is an empty object (`{}`).

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : A required parameter is missing or has an invalid type.
- `no such web extension`
  - : No extension with the specified `extension` ID is found, for example because it was already uninstalled.
- [`unknown error`](/en-US/docs/Web/WebDriver/Reference/Errors/UnknownError)
  - : The browser fails to uninstall the extension.

## Examples

### Uninstalling an extension

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Assume also that you installed an extension using [`webExtension.install`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/webExtension/install), which returned its ID.
The extension has a [content script](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) that runs in pages from `https://example.com`.

Send the following message to uninstall the extension:

```json
{
  "id": 1,
  "method": "webExtension.uninstall",
  "params": {
    "extension": "59ef3ef4-43df-47b5-b7ab-1fa9a3b259f9"
  }
}
```

The browser responds with an empty `result` object:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

The extension is no longer installed.
If you then load `https://example.com/` in a tab using [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate), the extension's content script doesn't run in the page.

### Uninstalling an extension that was already uninstalled

Using the same connection and session as in the first example, suppose you send `webExtension.uninstall` again with the ID of the extension that you've already uninstalled.
The browser responds with an error:

```json
{
  "type": "error",
  "id": 2,
  "error": "no such web extension",
  "message": "Add-on with ID \"59ef3ef4-43df-47b5-b7ab-1fa9a3b259f9\" is not installed.",
  "stacktrace": ""
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`webExtension.install`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/webExtension/install) command
- [`session.end`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/end) command
- [Browser extensions](/en-US/docs/Mozilla/Add-ons/WebExtensions)
