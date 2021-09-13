---
title: StorageEstimate.quota
slug: Web/API/StorageEstimate/quota
tags:
  - API
  - Property
  - Quota
  - Quotas
  - Reference
  - Secure context
  - StorageEstimate
browser-compat: api.StorageEstimate.quota
---
{{securecontext_header}}{{APIRef("Storage")}}

The {{domxref("StorageEstimate")}} dictionary's **`quota`**
property is a conservative approximation of how much storage is allotted to the origin
or Web app that called {{domxref("StorageManager.estimate()")}}; there may be more space
available, but there will not be less. This value is an estimate to help prevent its use
for fingerprinting—that is, identifying a device using an amalgamation of the values of
seemingly innocuous properties.

## Syntax

```js
quota = StorageEstimate.quota;
```

### Value

A numeric value specifying an approximation of the total amount of storage space available for use by the application.

> **Note:** User agents might not report the actual storage space for privacy reasons. Chrome, for instance, always reports 60% of the actual disk size.

## Example

See [`StorageManager.estimate`](/en-US/docs/Web/API/StorageManager/estimate#example) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Storage API](/en-US/docs/Web/API/Storage_API)
- {{domxref("Navigator")}}
- {{domxref("StorageManager")}}
- {{domxref("StorageEstimate")}}
- {{domxref("StorageEstimate.usage")}}
