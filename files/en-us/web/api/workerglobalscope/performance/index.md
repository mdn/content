---
title: WorkerGlobalScope.performance
slug: Web/API/WorkerGlobalScope/performance
tags:
  - API
  - CheckExample
  - Performance
  - Property
  - Read-only
  - Reference
  - WorkerGlobalScope
browser-compat: api.WorkerGlobalScope.performance
---
{{APIRef("Web Workers API")}}

The  **`performance`** read-only property of the
{{domxref("WorkerGlobalScope")}} interface returns a {{domxref("Performance")}} object
to be used on the worker.

> **Note:** Not all {{domxref("Performance")}} properties and methods are available to Web
> workers.

This property is {{readonlyInline}}.

## Syntax

```js
var perfObj = self.performance;
```

### Return Value

A {{domxref("Performance")}} object.

## Example

If you called

```js
console.log(performance);
```

inside a worker (which would basically be the equivalent of
`self.console.log(self.performance);`, as these are being called on the
worker scope, which can be referenced with {{domxref("WorkerGlobalScope.self")}}), you
will get a {{domxref("WorkerPerformance")}} object written to the console — something
like the following:

```js
WorkerPerformance {now: function}
  __proto__: WorkerPerformance
    constructor: function WorkerPerformance() { [native code] }
    now: function now() { [native code] }
    __proto__: Object
```

You could use this performance object to return performance data, as you might do with
a normal {{domxref("Performance")}} object.

> **Note:** Firefox has a bug with using `console.log` inside
> shared/service workers (see {{Bug("1058644")}}), which may return strange results, but
> this should be fixed soon.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Performance")}}
