---
title: StorageEstimate.usage
slug: Web/API/StorageEstimate/usage
tags:
  - API
  - Reference
  - Secure context
  - Storage
  - Storage API
  - StorageEstimate
  - Usage
browser-compat: api.StorageEstimate.usage
---
{{securecontext_header}}{{APIRef("Storage")}}

The {{domxref("StorageEstimate")}} dictionary's **`usage`**
property is a conservative approximation of how much storage is allotted to the origin
or Web app that called {{domxref("StorageManager.estimate()")}}; there may be more space
available, but there will not be less. The value is an estimate because the
{{Glossary("user agent")}} may use compression, duplication prevention techniques, and
other methods to improve storage efficiency.

## Syntax

```js
usage = StorageEstimate.usage;
```

### Value

A numeric value specifying an approximation of the total amount of storage space available for use by the application.

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
- {{domxref("StorageEstimate.quota")}}
