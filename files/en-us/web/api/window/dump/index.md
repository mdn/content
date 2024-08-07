---
title: "Window: dump() method"
short-title: dump()
slug: Web/API/Window/dump
page-type: web-api-instance-method
status:
  - non-standard
browser-compat: api.Window.dump
---

{{APIRef}} {{Non-standard_header}}

The **`Window.dump()`** method logs messages to the browser's standard output (`stdout`). If the browser was started from a terminal, output sent to `dump()` will appear in the terminal.

Output from `dump()` is _not_ sent to the browser's developer tools console. To log to the developer tools console, use [`console.log()`](/en-US/docs/Web/API/console/log_static).

## Syntax

```js-nolint
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
