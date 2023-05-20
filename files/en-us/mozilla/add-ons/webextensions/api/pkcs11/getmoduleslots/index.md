---
title: pkcs11.getModuleSlots()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/getModuleSlots
page-type: webextension-api-function
browser-compat: webextensions.api.pkcs11.getModuleSlots
---

{{AddonSidebar()}}

Enumerate a module's slots. This function returns an array containing one entry for each slot. Each entry contains the slot's name and, if the slot contains a token, information about the token.

You can only call this for a module that is installed in Firefox.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let getting = browser.pkcs11.getModuleSlots(
  name              // string
)
```

### Parameters

- `name`
  - : `string`. Name of the module. This must match the `name` property in the [PKCS #11 manifest](/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#pkcs_11_manifests) for the module.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an array of objects, one for each slot that the module provides access to. Each object has two properties:

- `name`: the name of the slot
- `token`: if a token is present in this slot, a `Token` object. If no token is present in the slot, this property is `null`.

`Token` objects have the following properties:

- `name`
  - : `string`. Name of the token.
- `manufacturer`
  - : `string`. Name of the token's manufacturer.
- `HWVersion`
  - : `string`. Hardware version, as a PKCS #11 version number (two 32-bit integers separated with a dot, like "1.0".
- `FWVersion`
  - : `string`. Firmware version, as a PKCS #11 version number (two 32-bit integers separated with a dot, like "1.0".
- `serial`
  - : `string`. Serial number, whose format is defined by the token specification.
- `isLoggedIn`
  - : `boolean`: `true` if the token is logged on already, `false` otherwise.

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
