---
title: Window.clearImmediate()
slug: Web/API/Window/clearImmediate
tags:
  - API
  - HTML DOM
  - Method
  - Window
  - Polyfill
browser-compat: api.Window.clearImmediate
---
{{APIRef("HTML DOM")}}{{Non-standard_header}}

This method clears the action specified by {{DOMxRef("window.setImmediate")}}.

> **Note:** This method is not expected to become standard, and is only implemented by recent
> builds of Internet Explorer and Node.js 0.10+. It meets resistance both from [Gecko](https://bugzilla.mozilla.org/show_bug.cgi?id=686201) (Firefox) and
> [Webkit](http://code.google.com/p/chromium/issues/detail?id=146172)
> (Google/Apple).

## Syntax

```js
window.clearImmediate( immediateID )
```

where immediateID is a ID returned by {{DOMxRef("window.setImmediate")}}.

## Examples

```js
let immediateID = setImmediate(() => {
  // Run some code
}

document.getElementById("button")
  .addEventListener(() => {
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

- A polyfill of `clearImmediate` is available in [`core-js`](https://github.com/zloirock/core-js#setimmediate)
- {{DOMxRef("Window.setImmediate()")}}
