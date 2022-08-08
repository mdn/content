---
title: FinalizationRegistry
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry
tags:
  - Class
  - FinalizationRegistry
  - JavaScript
  - Reference
browser-compat: javascript.builtins.FinalizationRegistry
---
{{JSRef}}

A **`FinalizationRegistry`** object lets you request a callback when an object is garbage-collected.

## Description

`FinalizationRegistry` provides a way to request that a _cleanup callback_ get called at some point when an object registered with the registry has been _reclaimed_ (garbage-collected). (Cleanup callbacks are sometimes called _finalizers_.)

> **Note:** Cleanup callbacks should not be used for essential program logic. See [Notes on cleanup callbacks](#notes_on_cleanup_callbacks) for details.

You create the registry passing in the callback:

```js
const registry = new FinalizationRegistry((heldValue) => {
  // …
});
```

Then you register any objects you want a cleanup callback for by calling the `register` method, passing in the object and a _held value_ for it:

```js
registry.register(theObject, "some value");
```

The registry does not keep a strong reference to the object, as that would defeat the purpose (if the registry held it strongly, the object would never be reclaimed).

If `theObject` is reclaimed, your cleanup callback may be called at some point with the _held value_ you provided for it (`"some value"` in the above). The held value can be any value you like: a primitive or an object, even `undefined`. If the held value is an object, the registry keeps a _strong_ reference to it (so it can pass it to your cleanup callback later).

If you might want to unregister an object later, you pass a third value, which is the _unregistration token_ you'll use later when calling the registry's `unregister` function to unregister the object. The registry only keeps a weak reference to the unregister token.

It's common to use the object itself as the unregister token, which is just fine:

```js
registry.register(theObject, "some value", theObject);
// …

// some time later, if you don't care about `theObject` anymore unregister it
registry.unregister(theObject);
```

It doesn't have to be the same object, though; it can be a different one:

```js
registry.register(theObject, "some value", tokenObject);
// …

// some time later
registry.unregister(tokenObject);
```

## Constructor

- {{jsxref("FinalizationRegistry/FinalizationRegistry", "FinalizationRegistry()")}}
  - : Creates a new `FinalizationRegistry` object.

## Instance methods

- {{jsxref("FinalizationRegistry.register", "FinalizationRegistry.prototype.register()")}}
  - : Registers an object with the registry in order to get a cleanup callback when/if the object is garbage-collected.
- {{jsxref("FinalizationRegistry.unregister", "FinalizationRegistry.prototype.unregister()")}}
  - : Unregisters an object from the registry.

## Avoid where possible

Correct use of `FinalizationRegistry` takes careful thought, and it's best avoided if possible. It's also important to avoid relying on any specific behaviors not guaranteed by the specification. When, how, and whether garbage collection occurs is down to the implementation of any given JavaScript engine. Any behavior you observe in one engine may be different in another engine, in another version of the same engine, or even in a slightly different situation with the same version of the same engine. Garbage collection is a hard problem that JavaScript engine implementers are constantly refining and improving their solutions to.

Here are some specific points that the authors of the WeakRef proposal that FinalizationRegistry is part of included in its [explainer document](https://github.com/tc39/proposal-weakrefs/blob/master/reference.md):

> [Garbage collectors](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) are complicated. If an application or library depends on GC cleaning up a FinalizationRegistry or calling a finalizer \[cleanup callback] in a timely, predictable manner, it's likely to be disappointed: the cleanup may happen much later than expected, or not at all. Sources of variability include:
>
> - One object might be garbage-collected much sooner than another object, even if they become unreachable at the same time, e.g., due to generational collection.
> - Garbage collection work can be split up over time using incremental and concurrent techniques.
> - Various runtime heuristics can be used to balance memory usage, responsiveness.
> - The JavaScript engine may hold references to things which look like they are unreachable (e.g., in closures, or inline caches).
> - Different JavaScript engines may do these things differently, or the same engine may change its algorithms across versions.
> - Complex factors may lead to objects being held alive for unexpected amounts of time, such as use with certain APIs.

## Notes on cleanup callbacks

Some notes on cleanup callbacks:

- Developers shouldn't rely on cleanup callbacks for essential program logic. Cleanup callbacks may be useful for reducing memory usage across the course of a program, but are unlikely to be useful otherwise.
- A conforming JavaScript implementation, even one that does garbage collection, is not required to call cleanup callbacks. When and whether it does so is entirely down to the implementation of the JavaScript engine. When a registered object is reclaimed, any cleanup callbacks for it may be called then, or some time later, or not at all.
- It's likely that major implementations will call cleanup callbacks at some point during execution, but those calls may be substantially after the related object was reclaimed.
- There are also situations where even implementations that normally call cleanup callbacks are unlikely to call them:

  - When the JavaScript program shuts down entirely (for instance, closing a tab in a browser).
  - When the `FinalizationRegistry` instance itself is no longer reachable by JavaScript code.

## Examples

### Creating a new registry

You create the registry passing in the callback:

```js
const registry = new FinalizationRegistry((heldValue) => {
  // …
});
```

### Registering objects for cleanup

Then you register any objects you want a cleanup callback for by calling the \`register\` method, passing in the object and a \*held value\* for it:

```js
registry.register(theObject, "some value");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakRef")}}
- {{jsxref("WeakSet")}}
- {{jsxref("WeakMap")}}
