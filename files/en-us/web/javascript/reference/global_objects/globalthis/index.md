---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
tags:
  - JavaScript
  - Property
  - Reference
  - global
  - globalThis
  - this
  - Polyfill
browser-compat: javascript.builtins.globalThis
---
{{jsSidebar("Objects")}}

The global **`globalThis`** property contains the global `this` value, which is akin to the [global object](/en-US/docs/Glossary/Global_object).

{{EmbedInteractiveExample("pages/js/globalprops-globalthis.html","shorter")}}

{{JS_Property_Attributes(1, 0, 1)}}

## Description

Historically, accessing the global object has required different syntax in different JavaScript environments. On the web you can use {{domxref("Window.window", "window")}}, {{domxref("Window.self", "self")}}, or {{domxref("Window.frames", "frames")}} - but in [Web Workers](/en-US/docs/Web/API/Worker) only `self` will work. In Node.js none of these work, and you must instead use `global`.
The `this` keyword could be used inside functions running in non–strict mode, but `this` will be `undefined` in Modules and inside functions running in strict mode. You can also use `Function('return this')()`, but environments that disable {{jsxref("Global_Objects/eval", "eval()")}}, like {{Glossary("CSP")}} in browsers, prevent use of {{jsxref("Function")}} in this way.

The `globalThis` property provides a standard way of accessing the global `this` value (and hence the global object itself) across environments. Unlike similar properties such as `window` and `self`, it's guaranteed to work in window and non-window contexts. In this way, you can access the global object in a consistent manner without having to know which environment the code is being run in. To help you remember the name, just remember that in global scope the `this` value is `globalThis`.

### HTML and the WindowProxy

In many engines `globalThis` will be a reference to the actual global object, but in web browsers, due to iframe and cross-window security considerations, it references a {{jsxref("Proxy")}} around the actual global object (which you can't directly access). This distinction is rarely relevant in common usage, but important to be aware of.

### Naming

Several other popular name choices such as `self` and `global` were removed from consideration because of their potential to break compatibility with existing code. See the [language proposal's "naming" document](https://github.com/tc39/proposal-global/blob/master/NAMING.md) for more details.

## Examples

### Search for the global across environments

Usually, the global object does not need to be explicitly specified — its properties are automatically accessible as global variables.

```js
console.log(window.NaN === NaN); // true
```

However, one case where one needs to explicitly access the global object is when _writing_ to it, usually for the purpose of [polyfills](/en-US/docs/Glossary/Polyfill).

Prior to `globalThis`, the only reliable cross-platform way to get the global object for an environment was `Function('return this')()`. However, this causes [CSP](/en-US/docs/Web/HTTP/CSP) violations in some settings, so authors would use a piecewise definition like this (slightly adapted from the [original core-js source](https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/global.js)):

```js
function check(it) {
  // Math is known to exist as a global in every environment.
  return it && it.Math === Math && it;
}

const globalObject =
  check(typeof window === 'object' && window) ||
  check(typeof self === 'object' && self) ||
  check(typeof global === 'object' && global) ||
  // This returns undefined when running in strict mode
  (function () { return this; })() ||
  Function('return this')();
```

After obtaining the global object, we can define new globals on it. For example, adding an implementation for [`Intl`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl):

```js
if (typeof globalObject.Intl === 'undefined') {
  // No Intl in this environment; define our own on the global scope
  Object.defineProperty(globalObject, 'Intl', {
    value: {
      // Our Intl implementation
    },
    enumerable: false,
    configurable: true,
    writable: true,
  });
}
```

With `globalThis` available, the additional search for the global across environments is not necessary anymore:

```js
if (typeof globalThis.Intl === 'undefined') {
  Object.defineProperty(globalThis, 'Intl', {
    value: {
      // Our Intl implementation
    },
    enumerable: false,
    configurable: true,
    writable: true,
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `globalThis` in `core-js`](https://github.com/zloirock/core-js#ecmascript-globalthis)
- {{jsxref("Operators/this", "this")}}
