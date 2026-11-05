---
title: "`webExtension.install` command"
short-title: install
slug: Web/WebDriver/Reference/BiDi/Modules/webExtension/install
page-type: webdriver-command
browser-compat: webdriver.bidi.webExtension.install
sidebar: webdriver
---

The `webExtension.install` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`webExtension`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/webExtension) module installs a [browser extension](/en-US/docs/Mozilla/Add-ons/WebExtensions) and returns its [ID](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/webExtension#extension_ids).

## Syntax

```json-nolint
/* With an unpacked extension */
{
  "method": "webExtension.install",
  "params": {
    "extensionData": {
      "path": "/home/user/extensions/my-extension",
      "type": "path"
    }
  }
}

/* With a zip archive */
{
  "method": "webExtension.install",
  "params": {
    "extensionData": {
      "path": "/home/user/extensions/my-extension.zip",
      "type": "archivePath"
    }
  }
}

/* With base64-encoded zip data */
{
  "method": "webExtension.install",
  "params": {
    "extensionData": {
      "type": "base64",
      "value": "UEsDBBQAAAAIAK6wZV3iaWoIzAAAAEMBAAANAAAAbWFuaWZlc3QuanNvbl..."
    }
  }
}
```

### Parameters

The `params` field contains:

- `extensionData`
  - : An object that specifies the [extension data](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/webExtension#extension_data) to install.
    It contains the following fields:
    - `path`
      - : A string that contains the absolute path of the extension's directory or zip archive on the computer that runs the browser.
        Specify this when the [`type`](#type) field is `archivePath` or `path`.
    - `type`
      - : A string that specifies the form of the extension data.
        It can take one of the following values:
        - `archivePath`: The extension is a zip archive at the path specified by [`path`](#path).
        - `base64`: The extension is a zip archive encoded as base64, specified by [`value`](#value).
        - `path`: The extension is a directory of unpacked files at the path specified by [`path`](#path).
    - `value`
      - : A string that contains the extension's zip archive, encoded as [base64](/en-US/docs/Glossary/Base64).
        Specify this when the [`type`](#type) field is `base64`.

### Return value

The `result` object in the response contains the following field:

- `extension`
  - : A string that contains the ID of the installed extension.
    Specify it in [`webExtension.uninstall`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/webExtension/uninstall) to remove the extension.

### Errors

- [`invalid argument`](/en-US/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Thrown in any of the following cases:
    - A required parameter is missing or has an invalid type.
    - The `type` field in `extensionData` is not `archivePath`, `base64`, or `path`.
- `invalid web extension`
  - : Thrown in any of the following cases:
    - No directory is found at `path` for the `path` type.
    - No file is found at `path` for the `archivePath` type.
    - The `value` field in `extensionData` is not valid base64.
    - The file at `path` or the decoded `value` is not a valid zip archive.
    - The browser fails to install the extension, for example because the files are not a valid extension.
- `unsupported operation`
  - : Thrown in any of the following cases:
    - The browser doesn't support installing extensions.
    - The browser doesn't support the form specified by the `type` field in `extensionData`.

## Description

The extension is installed in the browser, not in the session, so it stays installed after the session ends, and another session can uninstall it.
The browser might install the extension only temporarily by default, so that it's removed when the browser next shuts down.
See [Extension lifetime](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/webExtension#extension_lifetime) for details.

## Examples

### Installing an unpacked extension

Assume you have a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and an [active session](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Assume also that the directory `/home/user/extensions/my-extension` on the computer that runs the browser contains an extension's files, including its [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json).
The extension has a [content script](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) that runs in pages from `https://example.com`.

Send the following message to install the extension from the directory:

```json
{
  "id": 1,
  "method": "webExtension.install",
  "params": {
    "extensionData": {
      "path": "/home/user/extensions/my-extension",
      "type": "path"
    }
  }
}
```

The browser responds with the extension's ID as follows:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "extension": "59ef3ef4-43df-47b5-b7ab-1fa9a3b259f9"
  }
}
```

The extension is now installed.
If you then load `https://example.com/` in a tab using [`browsingContext.navigate`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate), the extension's content script runs in the page.

### Installing an extension from base64-encoded data

Using the same connection and session as in the first example, assume you uninstalled the extension using [`webExtension.uninstall`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/webExtension/uninstall).
The same extension's files are also packaged in a zip archive on the computer that runs your client.
You encoded the archive as base64.

Send the following message to install the extension from the encoded data:

```json
{
  "id": 3,
  "method": "webExtension.install",
  "params": {
    "extensionData": {
      "type": "base64",
      "value": "UEsDBBQAAAAIAK6wZV3iaWoIzAAAAEMBAAANAAAAbWFuaWZlc3QuanNvbl..."
    }
  }
}
```

The browser responds with the extension's ID as follows:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "extension": "7993e6c7-bc19-437a-99d0-406caa747dcc"
  }
}
```

The extension is installed again.
If you then load `https://example.com/` in a tab using `browsingContext.navigate`, the extension's content script runs in the page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`webExtension.uninstall`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/webExtension/uninstall) command
- [`session.end`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/end) command
- [Browser extensions](/en-US/docs/Mozilla/Add-ons/WebExtensions)
