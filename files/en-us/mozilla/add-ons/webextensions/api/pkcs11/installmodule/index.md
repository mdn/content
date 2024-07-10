---
title: pkcs11.installModule()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/installModule
page-type: webextension-api-function
browser-compat: webextensions.api.pkcs11.installModule
---

{{AddonSidebar}}

Installs the named PKCS #11 module, making it available to Firefox.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let installing = browser.pkcs11.installModule(
  name,              // string
  flags              // integer
)
```

### Parameters

- `name`
  - : `string`. Name of the module to install. This must match the `name` property in the [PKCS #11 manifest](/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#pkcs_11_manifests) for the module.
- `flags` {{optional_inline}}
  - : `integer`. Flags to pass to the module.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments once the module is installed.

If the module could not be found or some other error occurs, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

Installs a module, then lists its slots and list the tokens they contain:

```js
function onInstalled() {
  return browser.pkcs11.getModuleSlots("my_module");
}

function onGotSlots(slots) {
  for (const slot of slots) {
    console.log(`Slot: ${slot.name}`);
    if (slot.token) {
      console.log(`Contains token: ${slot.token.name}`);
    } else {
      console.log("Is empty");
    }
  }
}

browser.pkcs11.installModule("my_module").then(onInstalled).then(onGotSlots);
```

{{WebExtExamples}}
