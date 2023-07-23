---
title: "WorkletSharedStorage: context property"
short-title: context
slug: Web/API/WorkletSharedStorage/context
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.WorkletSharedStorage.context
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`context`** read-only property of the
{{domxref("WorkletSharedStorage")}} interface contains contextual data passed into the shared storage worklet from the associated browsing context via the {{domxref("FencedFrameConfig.setSharedStorageContext()")}} method.

## Value

`context` can contain any value type (string, number, array, object). The value will match the value passed into the {{domxref("FencedFrameConfig.setSharedStorageContext()")}} method.

## Examples

See the main {{domxref("WorkletSharedStorage")}} page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_storage_API)
