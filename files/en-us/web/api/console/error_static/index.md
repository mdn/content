---
title: "console: error() static method"
short-title: error()
slug: Web/API/console/error_static
page-type: web-api-instance-method
browser-compat: api.console.error_static
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

The **`console.error()`** static method outputs an error message to the console.

## Syntax

```js-nolint
error(obj1)
error(obj1, /* …, */ objN)
error(msg)
error(msg, subst1, /* …, */ substN)
```

### Parameters

- `obj1` … `objN`
  - : A list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output to the console.
- `msg`
  - : A JavaScript string containing zero or more substitution strings, which are replaced with `subst1` through `substN` in consecutive order.
- `subst1` … `substN`
  - : JavaScript objects with which to replace substitution strings within `msg`. This gives you additional control over the format of the output. See [Using string substitutions](/en-US/docs/Web/API/console#using_string_substitutions) for a description of how substitutions work.

See [Outputting text to the console](/en-US/docs/Web/API/console#outputting_text_to_the_console) in the documentation of the {{domxref("console")}} object for details.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Microsoft Edge's documentation for `console.error()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#error)
- [Node.JS documentation for `console.error()`](https://nodejs.org/docs/latest/api/console.html#consoleerrordata-args)
- [Google Chrome's documentation for `console.error()`](https://developer.chrome.com/docs/devtools/console/api/#error)
