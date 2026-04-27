---
title: "CrashReportContext: set() method"
short-title: set()
slug: Web/API/CrashReportContext/set
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.CrashReportContext.set
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`set()`** method of the {{domxref("CrashReportContext")}} interface stores a key-value pair in the memory initialized by {{domxref("CrashReportContext.initialize", "initialize()")}}.

## Syntax

```js-nolint
set(key, value)
```

### Parameters

- `key`
  - : A string representing the key of the key-value pair to be stored.
- `value`
  - : A string representing the value of the key-value pair to be stored.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if:
    - The calling document is not fully active.
    - The crash report key-value store is not yet initialized via an {{domxref("CrashReportContext.initialize", "initialize()")}} call.
- `NotAllowedError` {{domxref("DOMException")}}
  - : The size of the serialized key-value pair is greater than the [`length`](/en-US/docs/Web/API/CrashReportContext/initialize#length) value set when the store was first initialized.

## Examples

### Basic usage

```js
window.crashReport.initialize(1024).then(() => {
  // Set a possible crash-causing value, and try
  // running an operation that may cause a crash
  window.crashReport.set("crash-arg", "00031");
  operationThatMightCrash(00031);
  // Delete the key-value pair if it doesn't cause a crash
  window.crashReport.delete("crash-arg");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
