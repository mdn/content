---
title: QuotaExceededError
slug: Web/API/QuotaExceededError
page-type: web-api-interface
browser-compat: api.QuotaExceededError
---

The **`QuotaExceededError`** interface represents an error when a requested operation would exceed a system-imposed storage quota.

It is a subclass of {{domxref("DOMException")}} and contains additional properties such as `quota` and `requestedValue`.

## Properties

- {{domxref("QuotaExceededError.quota")}} {{ReadOnlyInline}} {{ExperimentalInline}}
  - : Returns the system-defined storage limit.
- {{domxref("QuotaExceededError.requestedValue")}} {{ReadOnlyInline}} {{ExperimentalInline}}
  - : Returns the amount of storage that was requested, which exceeded the available quota.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMException")}}
- {{domxref("navigator.storage.estimate()")}}
