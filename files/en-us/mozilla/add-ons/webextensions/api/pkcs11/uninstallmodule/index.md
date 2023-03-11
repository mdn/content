---
title: pkcs11.uninstallModule()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/uninstallModule
page-type: webextension-api-function
browser-compat: webextensions.api.pkcs11.uninstallModule
---

{{AddonSidebar()}}

Uninstalls the named PKCS #11 module from Firefox.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let uninstalling = browser.pkcs11.uninstallModule(
  name              // string
)
```

### Parameters

- `name`
  - : `string`. Name of the module to uninstall. This must match the `name` property in the [PKCS #11 manifest](/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#pkcs_11_manifests) for the module.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments once the module is uninstalled.

If the module could not be found or some other error occurs, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

Uninstalls the module named "pkcs11_module":

```js
browser.pkcs11.uninstallModule("pkcs11_module");
```

{{WebExtExamples}}
