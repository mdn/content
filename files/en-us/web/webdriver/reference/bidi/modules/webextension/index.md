---
title: "`webExtension` module"
short-title: webExtension
slug: Web/WebDriver/Reference/BiDi/Modules/webExtension
page-type: listing-page
browser-compat: webdriver.bidi.webExtension
sidebar: webdriver
---

The **`webExtension`** module contains commands for managing [browser extensions](/en-US/docs/Mozilla/Add-ons/WebExtensions).

## Extension IDs

Each installed extension has a unique string identifier (extension ID).
[`webExtension.install`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/webExtension/install) returns the ID of the extension it installs, and you specify that ID in [`webExtension.uninstall`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/webExtension/uninstall) to remove the extension.
The ID's format differs between browsers, so treat it as an opaque string.

## Extension data

The `type` field in the `extensionData` parameter of `webExtension.install` specifies the form of the extension, which is one of the following:

- `archivePath`
  - : A zip archive of the extension's files, at an absolute path on the computer that runs the browser.
- `base64`
  - : A zip archive of the extension's files, encoded as [base64](/en-US/docs/Glossary/Base64).
    The client sends the data in the command, so the browser doesn't need access to a file.
- `path`
  - : A directory that contains the extension's unpacked files, at an absolute path on the computer that runs the browser.

A browser might not support all three forms.

## Extension lifetime

An extension is installed in the browser, not in the session that installed it, so it stays installed after the session ends, and another session can uninstall it.

The browser might install an extension only temporarily by default, so that it's uninstalled when the browser next shuts down.

## Commands

- [`webExtension.install`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/webExtension/install)
- [`webExtension.uninstall`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/webExtension/uninstall)

## Events

The `webExtension` module has no associated events.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
