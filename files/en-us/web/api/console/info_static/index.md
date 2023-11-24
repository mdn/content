---
title: "console: info() static method"
short-title: info()
slug: Web/API/console/info_static
page-type: web-api-instance-method
browser-compat: api.console.info_static
---

{{APIRef("Console API")}}

The **`console.info()`** method outputs an informational message to the console. In Firefox, a small "i" icon is displayed next to these items in the console's log.

{{AvailableInWorkers}}

## Syntax

```js-nolint
info(obj1)
info(obj1, /* …, */ objN)
info(msg)
info(msg, subst1, /* …, */ substN)
```

### Parameters

- `obj1` … `objN`
  - : A list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.
- `msg`
  - : A JavaScript string containing zero or more substitution strings.
- `subst1` … `substN`
  - : JavaScript objects with which to replace substitution strings within `msg`. This gives you additional control over the format of the output.

See [Outputting text to the console](/en-US/docs/Web/API/console#outputting_text_to_the_console) in the documentation of {{domxref("console")}} for details.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Microsoft Edge's documentation for `console.info()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#info)
- [Node.JS documentation for `console.info()`](https://nodejs.org/docs/latest/api/console.html#consoleinfodata-args)
- [Google Chrome's documentation for `console.info()`](https://developer.chrome.com/docs/devtools/console/api/#info)
