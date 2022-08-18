---
title: WorkerGlobalScope.dump()
slug: Web/API/WorkerGlobalScope/dump
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Web Workers
  - WorkerGlobalScope
  - dump
  - Deprecated
  - Non-standard
browser-compat: api.WorkerGlobalScope.dump
---
{{APIRef("Web Workers API")}}{{Non-standard_Header}}{{Deprecated_Header}}

The **`WorkerGlobalScope.dump()`** method logs messages to the browser's standard output (`stdout`). If the browser was started from a terminal, output sent to `dump()` will appear in the terminal. This is the same as {{domxref("Window.dump()")}}, but for workers.

Output from `dump()` is _not_ sent to the browser's developer tools console. To log to the developer tools console, use [`console.log()`](/en-US/docs/Web/API/console/log).

## Syntax

```js
dump(message)
```

### Parameters

- `message`
  - : A string containing the message to log.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

This feature is not part of any specification.

## Browser compatibility

{{Compat}}
