---
title: runtime.getVersion()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getVersion
page-type: webextension-api-function
browser-compat: webextensions.api.runtime.getVersion
sidebar: addonsidebar
---

Returns the extension's version as declared by developer in the [`version`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) [manifest](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) key.

## Syntax

```js-nolint
browser.runtime.getVersion()
```

### Parameters

None.

### Return value

A `string` containing the extension's version as declared in the manifest.

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

- {{WebExtAPIRef("runtime.getManifest()")}} method which returns representation of the entire manifest
- Manifest [`version`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) key
