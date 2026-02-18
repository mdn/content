---
title: runtime.getVersion()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getVersion
page-type: webextension-api-function
browser-compat: webextensions.api.runtime.getVersion
sidebar: addonsidebar
---

Returns the extension's version from the [`version`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) [manifest](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) key.

## Syntax

```js-nolint
let extensionVersion = await browser.runtime.getVersion()
```

### Parameters

None.

### Return value

A `string` containing the extension's version as declared in the manifest.

> [!NOTE]
> The returned version may differ from the string in the file because the browser can parse and serialize it.

## Examples

Get the extension version string:

```js
const version = browser.runtime.getVersion();
console.log(version);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

## See also

- The {{WebExtAPIRef("runtime.getManifest()")}} method, which returns the entire manifest as an object.
- Manifest [`version`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) key
