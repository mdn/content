---
title: "CrashReportContext: initialize() method"
short-title: initialize()
slug: Web/API/CrashReportContext/initialize
page-type: web-api-instance-method
browser-compat: api.CrashReportContext.initialize
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The **`initialize()`** method of the {{domxref("CrashReportContext")}} interface initializes a portion of memory to be used for storing crash report data specified by {{domxref("CrashReportContext.set", "set()")}}. This must be called before any other method is invoked on the object.

## Syntax

```js-nolint
initialize(length)
```

### Parameters

- `length`
  - : A number indicating the maximum number of bytes that can be stored in the key-value store by each individual `set()` call. The maximum allowable value is `65536` (64KB), which is also the maximum amount of crash report memory allowed for one origin.

### Return value

A {{jsxref("Promise")}} that fulfills with {{jsxref("undefined")}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if:
    - The calling document is not fully active.
    - A crash report key-value store was already initialized by a previous `initialize()` call.
- `NotAllowedError` {{domxref("DOMException")}}
  - : `length` is more than `65536`.

## Examples

### Basic usage

```js
window.crashReport.initialize(1024).then(() => {
  // Do stuff with crash reporting API
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
