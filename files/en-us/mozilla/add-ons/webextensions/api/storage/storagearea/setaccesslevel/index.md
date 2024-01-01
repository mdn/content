---
title: StorageArea.setAccessLevel()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/setAccessLevel
page-type: webextension-api-function
browser-compat: webextensions.api.storage.StorageArea.setAccessLevel
---

{{AddonSidebar()}}

Sets the access level for the storage area.

This method is only supported for the `storage.session` StorageArea.

Unlike other storage areas, `storage.session` is only available to privileged (trusted) extension contexts. This `setAccessLevel` method is used to expose the session storage area to content scripts too. By default, all other storage areas are exposed to all extension contexts, including content scripts.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
await browser.storage.<storageType>.setAccessLevel(
  accessLevel             // string
)
```

`<storageType>` can be the {{WebExtAPIRef("storage.session")}} storage type.

### Parameters

- `accessLevel`

  - : `String`. The access level of the storage area. Possible values are `TRUSTED_CONTEXTS` or `TRUSTED_AND_UNTRUSTED_CONTEXTS`.

### Return value

A {{jsxref("Promise")}} that is fulfilled with no arguments if the operation succeeded. If the operation failed, the promise is rejected with an error message.

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/storage/) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.
