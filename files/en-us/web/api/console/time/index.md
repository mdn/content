---
title: console.time()
slug: Web/API/console/time
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Web Development
  - web console
browser-compat: api.console.time
---
{{APIRef("Console API")}}

The **`console.time()`** method starts a timer you can use to track
how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers
running on a given page. When you call {{domxref("console.timeEnd()")}} with the same name, the
browser will output the time, in milliseconds, that elapsed since the timer was started.

See [Timers](/en-US/docs/Web/API/console#timers) in the
{{domxref("console")}} documentation for details and examples.

{{AvailableInWorkers}}

## Syntax

```js
console.time(label);
```

## Parameters

- `label`
  - : The name to give the new timer. This will identify the timer; use the same name when
    calling {{domxref("console.timeEnd()")}} to stop the timer and get the time output to
    the console.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("console.timeEnd()")}}
- {{domxref("console.timeLog()")}}
