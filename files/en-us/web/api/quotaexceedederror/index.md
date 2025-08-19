---
title: QuotaExceededError
slug: Web/API/QuotaExceededError
page-type: web-api-interface
browser-compat: api.QuotaExceededError
---

{{APIRef("DOM")}}

The **`QuotaExceededError`** interface represents an error when a requested operation would exceed a system-imposed storage quota.

> [!NOTE]
> In browser versions before this interface was implemented, it was a regular `DOMException`. The subclassing allows for extra information like `quota` and `requested` to be included.

{{InheritanceDiagram}}

## Constructor

- {{domxref("QuotaExceededError/QuotaExceededError", "QuotaExceededError()")}}
  - : Creates a `QuotaExceededError` object.

## Instance properties

_Also inherits properties from its ancestor {{domxref("DOMException")}}._

- {{domxref("QuotaExceededError.quota")}} {{ReadOnlyInline}}
  - : Returns the system-defined storage limit (in bytes) that was exceeded.
- {{domxref("QuotaExceededError.requested", "requested")}} {{ReadOnlyInline}}
  - : Returns the amount of storage (in bytes) that was requested during the operation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMException")}}
- {{domxref("navigator.storage.estimate()")}}
- [Storage quotas and eviction criteria](/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
