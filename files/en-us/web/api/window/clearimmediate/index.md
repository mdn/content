---
title: "Window: clearImmediate() method"
short-title: clearImmediate()
slug: Web/API/Window/clearImmediate
page-type: web-api-instance-method
browser-compat: api.Window.clearImmediate
---

{{APIRef("HTML DOM")}}

This method clears the action specified by {{DOMxRef("window.setImmediate")}}.

> **Note:** This method is not expected to become standard, and is nowadays only implemented
> by Node.js 0.10+. It meets resistance both from [Gecko](https://bugzil.la/686201) (Firefox) and [Chromium/WebKit](https://crbug.com/146172) (Chrome/Safari).

## Syntax

```js-nolint
clearImmediate(immediateID)
```

### Parameters

- `immediateID`

  - : The ID returned by {{DOMxRef("window.setImmediate")}}.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
let immediateID = setImmediate(() => {
  // Run some code
});

document.getElementById("button").addEventListener(() => {
  clearImmediate(immediateID);
});
```

## Specifications

Not part of any current specifications. The
[Efficient Script Yielding](https://w3c.github.io/setImmediate/#si-setImmediate)
specification is no longer being worked on.

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `clearImmediate` in `core-js`](https://github.com/zloirock/core-js#setimmediate)
- {{DOMxRef("Window.setImmediate()")}}
