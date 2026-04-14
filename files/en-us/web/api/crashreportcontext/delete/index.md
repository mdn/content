---
title: "CrashReportContext: delete() method"
short-title: delete()
slug: Web/API/CrashReportContext/delete
page-type: web-api-instance-method
browser-compat: api.CrashReportContext.delete
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The **`delete()`** method of the {{domxref("CrashReportContext")}} interface deletes a previously-stored key-value pair.

## Syntax

```js-nolint
delete(key)
```

### Parameters

- `key`
  - : A string representing the key of the key-value pair to be deleted.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if:
    - The calling document is not fully active.
    - The crash report key-value store is not yet initialized via an {{domxref("CrashReportContext.initialize", "initialize()")}} call.

## Examples

### Basic usage

```js
window.crashReport.set(1024).then(() => {
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
