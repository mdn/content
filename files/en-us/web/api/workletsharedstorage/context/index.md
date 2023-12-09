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

A string representing the data. The value will match the latest value that was passed into the {{domxref("FencedFrameConfig.setSharedStorageContext()")}} method prior to navigation to the {{domxref("FencedFrameConfig")}}. If no value was set by `setSharedStorageContext()` prior to navigation, then `context` will return `undefined`.

## Examples

See the main {{domxref("WorkletSharedStorage")}} page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
