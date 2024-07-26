---
title: pkcs11.isModuleInstalled()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/isModuleInstalled
page-type: webextension-api-function
browser-compat: webextensions.api.pkcs11.isModuleInstalled
---

{{AddonSidebar}}

Checks whether the named PKCS #11 module is currently installed in Firefox.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let checking = browser.pkcs11.isModuleInstalled(
  name              // string
)
```

### Parameters

- `name`
  - : `string`. Name of the module to check.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with `true` if the module is installed, `false` otherwise.

If the module an error occurs, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

Checks whether the module named "pkcs11_module" is installed:

```js
function logIsInstalled(isInstalled) {
  console.log(`Module is installed: ${isInstalled}`);
}

browser.pkcs11.isModuleInstalled("pkcs11_module").then(logIsInstalled);
```

{{WebExtExamples}}
