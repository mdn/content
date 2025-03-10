---
title: StorageArea.getBytesInUse()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getBytesInUse
page-type: webextension-api-function
browser-compat: webextensions.api.storage.StorageArea.getBytesInUse
---

{{AddonSidebar}}

Gets the amount of storage space, in bytes, used by one or more items stored in the storage area.

> [!NOTE]
> In Firefox this method:
>
> - is supported in {{WebExtAPIRef("storage.sync")}}.
> - is supported in {{WebExtAPIRef("storage.session")}} from Firefox 131.
> - isn't supported in {{WebExtAPIRef("storage.local")}}, see [Firefox bug 1385832](https://bugzil.la/1385832).
> - isn't provided in {{WebExtAPIRef("storage.managed")}}.

This is an asynchronous method that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let gettingSpace = browser.storage.<storageType>.getBytesInUse(
  keys                      // null, string, or array of strings
)
```

Where `<storageType>` is one of the storage types — {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, or {{WebExtAPIRef("storage.managed", "managed")}}.

In Firefox, `<storageType>` can't be {{WebExtAPIRef("storage.local")}}, because of [bug 1385832](https://bugzil.la/1385832).

### Parameters

- `keys`
  - : A key (string) or keys (an array of strings) to identify the items whose storage space you want to retrieve. If an empty array is passed in, 0 is returned. If you pass `null` or `undefined`, the function returns the space used by the entire storage area.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled with an integer, `bytesUsed`, representing the storage space used by the objects specified in `keys`. If the operation fails, the promise is rejected with an error message.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.
