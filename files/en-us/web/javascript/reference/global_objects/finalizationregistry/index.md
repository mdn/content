---
title: FinalizationRegistry
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry
page-type: javascript-class
browser-compat: javascript.builtins.FinalizationRegistry
---

{{JSRef}}

A **`FinalizationRegistry`** object lets you request a callback when a value is garbage-collected.

## Description

`FinalizationRegistry` provides a way to request that a _cleanup callback_ get called at some point when a value registered with the registry has been _reclaimed_ (garbage-collected). (Cleanup callbacks are sometimes called _finalizers_.)

> [!NOTE]
> Cleanup callbacks should not be used for essential program logic. See [Notes on cleanup callbacks](#notes_on_cleanup_callbacks) for details.

You create the registry passing in the callback:

```js
const registry = new FinalizationRegistry((heldValue) => {
  // …
});
```

Then you register any value you want a cleanup callback for by calling the `register` method, passing in the value and a _held value_ for it:

```js
registry.register(target, "some value");
```

The registry does not keep a strong reference to the value, as that would defeat the purpose (if the registry held it strongly, the value would never be reclaimed). In JavaScript, objects and [non-registered symbols](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) are garbage collectable, so they can be registered in a `FinalizationRegistry` object as the target or the token.

If `target` is reclaimed, your cleanup callback may be called at some point with the _held value_ you provided for it (`"some value"` in the above). The held value can be any value you like: a primitive or an object, even `undefined`. If the held value is an object, the registry keeps a _strong_ reference to it (so it can pass it to your cleanup callback later).

If you might want to unregister a registered target value later, you pass a third value, which is the _unregistration token_ you'll use later when calling the registry's `unregister` function to unregister the value. The registry only keeps a weak reference to the unregister token.

It's common to use the target value itself as the unregister token, which is just fine:

```js
registry.register(target, "some value", target);
// …

// some time later, if you don't care about `target` anymore, unregister it
registry.unregister(target);
```

It doesn't have to be the same value, though; it can be a different one:

```js
registry.register(target, "some value", token);
// …

// some time later
registry.unregister(token);
```

### Avoid where possible

Correct use of `FinalizationRegistry` takes careful thought, and it's best avoided if possible. It's also important to avoid relying on any specific behaviors not guaranteed by the specification. When, how, and whether garbage collection occurs is down to the implementation of any given JavaScript engine. Any behavior you observe in one engine may be different in another engine, in another version of the same engine, or even in a slightly different situation with the same version of the same engine. Garbage collection is a hard problem that JavaScript engine implementers are constantly refining and improving their solutions to.

Here are some specific points included by the authors in the [proposal](https://github.com/tc39/proposal-weakrefs) that introduced `FinalizationRegistry`:

> [Garbage collectors](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) are complicated. If an application or library depends on GC cleaning up a WeakRef or calling a finalizer \[cleanup callback] in a timely, predictable manner, it's likely to be disappointed: the cleanup may happen much later than expected, or not at all. Sources of variability include:
>
> - One object might be garbage-collected much sooner than another object, even if they become unreachable at the same time, e.g., due to generational collection.
> - Garbage collection work can be split up over time using incremental and concurrent techniques.
> - Various runtime heuristics can be used to balance memory usage, responsiveness.
> - The JavaScript engine may hold references to things which look like they are unreachable (e.g., in closures, or inline caches).
> - Different JavaScript engines may do these things differently, or the same engine may change its algorithms across versions.
> - Complex factors may lead to objects being held alive for unexpected amounts of time, such as use with certain APIs.

### Notes on cleanup callbacks

- Developers shouldn't rely on cleanup callbacks for essential program logic. Cleanup callbacks may be useful for reducing memory usage across the course of a program, but are unlikely to be useful otherwise.
- If your code has just registered a value to the registry, that target will not be reclaimed until the end of the current JavaScript [job](https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#job). See [notes on WeakRefs](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#notes_on_weakrefs) for details.
- A conforming JavaScript implementation, even one that does garbage collection, is not required to call cleanup callbacks. When and whether it does so is entirely down to the implementation of the JavaScript engine. When a registered object is reclaimed, any cleanup callbacks for it may be called then, or some time later, or not at all.
- It's likely that major implementations will call cleanup callbacks at some point during execution, but those calls may be substantially after the related object was reclaimed. Furthermore, if there is an object registered in two registries, there is no guarantee that the two callbacks are called next to each other — one may be called and the other never called, or the other may be called much later.
- There are also situations where even implementations that normally call cleanup callbacks are unlikely to call them:
  - When the JavaScript program shuts down entirely (for instance, closing a tab in a browser).
  - When the `FinalizationRegistry` instance itself is no longer reachable by JavaScript code.
- If the target of a `WeakRef` is also in a `FinalizationRegistry`, the `WeakRef`'s target is cleared at the same time or before any cleanup callback associated with the registry is called; if your cleanup callback calls `deref` on a `WeakRef` for the object, it will receive `undefined`.

## Constructor

- {{jsxref("FinalizationRegistry/FinalizationRegistry", "FinalizationRegistry()")}}
  - : Creates a new `FinalizationRegistry` object.

## Instance properties

These properties are defined on `FinalizationRegistry.prototype` and shared by all `FinalizationRegistry` instances.

- {{jsxref("Object/constructor", "FinalizationRegistry.prototype.constructor")}}
  - : The constructor function that created the instance object. For `FinalizationRegistry` instances, the initial value is the {{jsxref("FinalizationRegistry/FinalizationRegistry", "FinalizationRegistry")}} constructor.
- `FinalizationRegistry.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"FinalizationRegistry"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("FinalizationRegistry.prototype.register()")}}
  - : Registers an object with the registry in order to get a cleanup callback when/if the object is garbage-collected.
- {{jsxref("FinalizationRegistry.prototype.unregister()")}}
  - : Unregisters an object from the registry.

## Examples

### Creating a new registry

You create the registry passing in the callback:

```js
const registry = new FinalizationRegistry((heldValue) => {
  // …
});
```

### Registering objects for cleanup

Then you register any objects you want a cleanup callback for by calling the `register` method, passing in the object and a _held value_ for it:

```js
registry.register(theObject, "some value");
```

### Callbacks never called synchronously

No matter how much pressure you put on the garbage collector, the cleanup callback will never be called synchronously. The object may be reclaimed synchronously, but the callback will always be called sometime after the current job finishes:

```js
let counter = 0;
const registry = new FinalizationRegistry(() => {
  console.log(`Array gets garbage collected at ${counter}`);
});

registry.register(["foo"]);

(function allocateMemory() {
  // Allocate 50000 functions — a lot of memory!
  Array.from({ length: 50000 }, () => () => {});
  if (counter > 5000) return;
  counter++;
  allocateMemory();
})();

console.log("Main job ends");
// Logs:
// Main job ends
// Array gets garbage collected at 5001
```

However, if you allow a little break between each allocation, the callback may be called sooner:

```js
let arrayCollected = false;
let counter = 0;
const registry = new FinalizationRegistry(() => {
  console.log(`Array gets garbage collected at ${counter}`);
  arrayCollected = true;
});

registry.register(["foo"]);

(function allocateMemory() {
  // Allocate 50000 functions — a lot of memory!
  Array.from({ length: 50000 }, () => () => {});
  if (counter > 5000 || arrayCollected) return;
  counter++;
  // Use setTimeout to make each allocateMemory a different job
  setTimeout(allocateMemory);
})();

console.log("Main job ends");
```

There's no guarantee that the callback will be called sooner or if it will be called at all, but there's a possibility that the logged message has a counter value smaller than 5000.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakRef")}}
- {{jsxref("WeakSet")}}
- {{jsxref("WeakMap")}}
