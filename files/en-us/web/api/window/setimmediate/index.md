---
title: Window.setImmediate()
slug: Web/API/Window/setImmediate
tags:
  - API
  - HTML DOM
  - Method
  - Non-standard
  - Reference
  - Window
  - setImmediate
  - Polyfill
browser-compat: api.Window.setImmediate
---
{{APIRef("HTML DOM")}}{{Non-standard_header}}

This method is used to break up long running operations and run a callback function
immediately after the browser has completed other operations such as events and display
updates.

> **Note:** This method is not expected to become standard, and is only implemented
> by recent builds of Internet Explorer and Node.js 0.10+. It meets resistance both from
> [Gecko](https://bugzilla.mozilla.org/show_bug.cgi?id=686201) (Firefox) and [Webkit](https://code.google.com/p/chromium/issues/detail?id=146172)
> (Google/Apple).

## Syntax

```js
var immediateID = setImmediate(func, [param1, param2, ...]);
var immediateID = setImmediate(func);
```

- where `immediateID` is the ID of the immediate which can be used later
  with {{DOMxRef("window.clearImmediate")}}.
- `func` is the function you wish to call.

All parameters will be passed directly to your function.

## Notes

The {{DOMxRef("Window.clearImmediate", "clearImmediate")}} method can be used to clear
the immediate actions, just like {{DOMxRef("clearTimeout")}} for
{{DOMxRef("setTimeout()")}}.

This method can be used instead of the `setTimeout(fn, 0)` method to execute
[heavy
operations](https://www.nczonline.net/blog/2009/08/11/timed-array-processing-in-javascript/).

The feature can be emulated in a few different ways:

- {{DOMxRef("Window.postMessage", "postMessage")}} can be used to trigger an immediate but yielding callback.
  Do note that Internet Explorer 8 includes a synchronous version of
  `postMessage`, which means it cannot be used as a fallback.
- {{DOMxRef("MessageChannel")}} can be used reliably inside of Web Workers whereas the
  semantics of postMessage mean it cannot be used there.
- `setTimeout(fn, 0)` _can_ potentially be used, however as it is
  clamped to 4ms for timers nested more than 5 levels deep [per the HTML
  spec](https://html.spec.whatwg.org/multipage/webappapis.html#timers), it does not make for a suitable polyfill for the natural immediacy of
  `setImmediate`.

All of these techniques are incorporated into a [robust setImmediate polyfill](https://github.com/NobleJS/setImmediate).

## Specifications

Not part of any current specifications. The
[Efficient Script Yielding](https://w3c.github.io/setImmediate/#si-setImmediate)
specification is no longer being worked on.

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `setImmediate` in `core-js`](https://github.com/zloirock/core-js#setimmediate)
- {{DOMxRef("Window.clearImmediate()")}}
- [Microsoft
  `setImmediate` API Demo](http://ie.microsoft.com/testdrive/Performance/setImmediateSorting/Default.html)
