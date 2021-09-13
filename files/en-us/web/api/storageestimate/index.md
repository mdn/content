---
title: StorageEstimate
slug: Web/API/StorageEstimate
tags:
  - API
  - Dictionary
  - Interface
  - Quotas
  - Reference
  - Secure context
  - Storage
  - Storage API
  - StorageEstimate
  - Usage
browser-compat: api.StorageEstimate
---
{{securecontext_header}}{{APIRef("Storage")}}

The **`StorageEstimate`** dictionary is used by the {{domxref("StorageManager")}} to provide estimates of the size of a site's or application's data store and how much of it is in use. The {{domxref("StorageManager.estimate", "estimate()")}} method returns an object that conforms to this dictionary when its {{jsxref("Promise")}} resolves.

These values are only estimates for several reasons, including both performance and preventing storage capacity data from being used for fingerprinting purposes. See the individual property pages for details.

## Properties

- {{domxref("StorageEstimate.quota", "quota")}} {{securecontext_inline}}
  - : A numeric value in bytes which provides a conservative approximation of the total storage the user's device or computer has available for the site origin or Web app. It's possible that there's more than this amount of space available though you can't rely on that being the case.
- {{domxref("StorageEstimate.usage", "usage")}} {{securecontext_inline}}
  - : A numeric value in bytes approximating the amount of storage space currently being used by the site or Web app, out of the available space as indicated by `quota`. Unit is byte.
- {{domxref("StorageEstimate.usageDetails", "usageDetails")}} {{securecontext_inline}}
  - : A dictionary containing a breakdown of `usage` by storage system. All included members will have a `usage` greater than 0 and any storage system with 0 `usage` will be excluded from the dictionary.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Storage API](/en-US/docs/Web/API/Storage_API)
- {{domxref("StorageManager")}}
- {{domxref("StorageManager.estimate()")}}
- {{domxref("navigator.storage")}}
