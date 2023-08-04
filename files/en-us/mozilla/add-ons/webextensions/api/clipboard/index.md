---
title: clipboard
slug: Mozilla/Add-ons/WebExtensions/API/clipboard
page-type: webextension-api
browser-compat: webextensions.api.clipboard
---

{{AddonSidebar}}

The WebExtension `clipboard` API (which is different from the [standard Clipboard API](/en-US/docs/Web/API/Clipboard_API)) enables an extension to copy items to the system clipboard. Currently the WebExtension `clipboard` API only supports copying images, but it's intended to support copying text and HTML in the future.

The WebExtension `clipboard` API exists primarily because the standard Clipboard API [doesn't support writing images to the clipboard](https://w3c.github.io/clipboard-apis/#writing-to-clipboard). The WebExtension `clipboard` API may be deprecated once the standard Clipboard API's support for non-text clipboard contents has entered general use.

Reading from the clipboard is not supported by this API, because the clipboard can already be read using the standard web platform APIs. See [Interacting with the clipboard](/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard#reading_from_the_clipboard).

This API is based on Chrome's [`clipboard`](https://developer.chrome.com/docs/extensions/reference/clipboard/) API, but that API is only available for Chrome apps, not extensions.

To use this API you need the `"clipboardWrite"` extension [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Functions

- {{WebExtAPIRef("clipboard.setImageData()")}}
  - : Copy an image to the clipboard.

## Browser compatibility

{{WebExtExamples("h2")}}

{{Compat}}

> **Note:**
>
> This API is based on Chromium's [`chrome.clipboard`](https://developer.chrome.com/docs/extensions/reference/clipboard/) API.
