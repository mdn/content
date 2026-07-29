---
title: StorageArea.setAccessLevel()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/setAccessLevel
page-type: webextension-api-function
browser-compat: webextensions.api.storage.StorageArea.setAccessLevel
sidebar: addonsidebar
---

Sets the access level for the storage area.

Use this method to:

- Expose the `session` storage area to content scripts. Unlike other storage areas, by default, `storage.session` is only available to privileged (trusted) extension contexts by default.
- Restrict content scripts' access to `local`, `managed`, and `sync` storage areas. By default, these storage areas are exposed to all extension contexts, including content scripts.

## Syntax

```js-nolint
await browser.storage.<storageType>.setAccessLevel(
  accessLevel             // string
)
```

Where `<storageType>` is any of the storage types: {{WebExtAPIRef("storage.local")}}, {{WebExtAPIRef("storage.managed")}}, {{WebExtAPIRef("storage.session")}}, or {{WebExtAPIRef("storage.sync")}}.

### Parameters

- `accessLevel`
  - : `String`. The access level of the storage area. Possible values are `TRUSTED_CONTEXTS` or `TRUSTED_AND_UNTRUSTED_CONTEXTS`.

### Return value

A {{jsxref("Promise")}} that is fulfilled with no arguments if the operation succeeded. If the operation failed, the promise is rejected with an error message.

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.
