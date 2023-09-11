---
title: "Window: setImmediate() method"
short-title: setImmediate()
slug: Web/API/Window/setImmediate
page-type: web-api-instance-method
browser-compat: api.Window.setImmediate
---

{{APIRef("HTML DOM")}}

This method is used to break up long running operations and run a callback function
immediately after the browser has completed other operations such as events and display
updates.

> **Note:** This method is not expected to become standard, and is nowadays only implemented
> by Node.js 0.10+. It meets resistance both from [Gecko](https://bugzil.la/686201) (Firefox) and [Chromium/WebKit](https://crbug.com/146172) (Chrome/Safari).

## Syntax

```js-nolint
setImmediate(func)
setImmediate(func, param1)
setImmediate(func, param1, param2)
setImmediate(func, param1, param2, /* …, */ paramN)
```

### Parameters

- `func`

  - : The function you wish to call.

- `param1`, …, `paramN`
  - : All parameters will be passed directly to your function.

### Return value

The ID of the immediate which can be used later with {{DOMxRef("window.clearImmediate")}}.

## Notes

The {{DOMxRef("Window.clearImmediate", "clearImmediate")}} method can be used to clear
the immediate actions, just like {{DOMxRef("clearTimeout")}} for
{{DOMxRef("setTimeout()")}}.

This method can be used instead of the `setTimeout(fn, 0)` method to execute
[heavy operations](https://humanwhocodes.com/blog/2009/08/11/timed-array-processing-in-javascript/).

The feature can be emulated in a few different ways:

- {{DOMxRef("Window.postMessage", "postMessage")}} can be used to trigger an immediate but yielding callback.
- {{DOMxRef("MessageChannel")}} can be used reliably inside of Web Workers whereas the
  semantics of postMessage mean it cannot be used there.
- `setTimeout(fn, 0)` _can_ potentially be used, however as it is
  clamped to 4ms for timers nested more than 5 levels deep [per the HTML spec](https://html.spec.whatwg.org/multipage/webappapis.html#timers), it does not make for a suitable polyfill for the natural immediacy of
  `setImmediate`.

All of these techniques are incorporated into a [robust setImmediate polyfill](https://github.com/YuzuJS/setImmediate).

## Specifications

Not part of any current specifications. The
[Efficient Script Yielding](https://w3c.github.io/setImmediate/#si-setImmediate)
specification is no longer being worked on.

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `setImmediate` in `core-js`](https://github.com/zloirock/core-js#setimmediate)
- [Microsoft `setImmediate` API Demo](https://jphpsf.github.io/setImmediate-shim-demo/)
- {{DOMxRef("Window.clearImmediate()")}}
- {{DOMxRef("Window.requestIdleCallback()")}}
