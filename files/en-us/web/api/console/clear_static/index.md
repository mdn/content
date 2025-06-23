---
title: "console: clear() static method"
short-title: clear()
slug: Web/API/console/clear_static
page-type: web-api-static-method
browser-compat: api.console.clear_static
---

{{APIRef("Console API")}}

The **`console.clear()`** static method clears the console if possible.

A graphical console, like those in web browsers, will remove all previous messages; a console displaying on a terminal, like the one in Node.js, will attempt to clear it using an escape code or system API; otherwise the method will have no effect (and no error).

## Syntax

```js-nolint
console.clear()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Microsoft Edge's documentation for `console.clear()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#clear)
- [Node.js documentation for `console.clear()`](https://nodejs.org/docs/latest/api/console.html#consoleclear)
- [Google Chrome's documentation for `console.clear()`](https://developer.chrome.com/docs/devtools/console/api/#clear)
