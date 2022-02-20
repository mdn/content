---
title: WeakRef
slug: Web/JavaScript/Reference/Global_Objects/WeakRef
tags:
  - Class
  - JavaScript
  - Reference
  - WeakRef
browser-compat: javascript.builtins.WeakRef
---
{{JSRef}}

A **`WeakRef`** object lets you hold a weak reference to another object, without preventing that object from getting garbage-collected.

## Description

A `WeakRef` object contains a weak reference to an object, which is called its _target_ or _referent_. A _weak reference_ to an object is a reference that does not prevent the object from being reclaimed by the garbage collector. In contrast, a normal (or _strong_) reference keeps an object in memory. When an object no longer has any strong references to it, the JavaScript engine's garbage collector may destroy the object and reclaim its memory. If that happens, you can't get the object from a weak reference anymore.

> **Note:** Please see the [Avoid where possible](#avoid_where_possible) section below. Correct use of `WeakRef` takes careful thought, and it's best avoided if possible.

## Constructor

- {{jsxref("WeakRef/WeakRef", "WeakRef()")}}
  - : Creates a new `WeakRef` object.

## Instance methods

- {{jsxref("WeakRef.deref", "WeakRef.prototype.deref()")}}
  - : Returns the `WeakRef` object's target object, or `undefined` if the target object has been reclaimed.

## Avoid where possible

Correct use of `WeakRef` takes careful thought, and it's best avoided if possible. It's also important to avoid relying on any specific behaviors not guaranteed by the specification. When, how, and whether garbage collection occurs is down to the implementation of any given JavaScript engine. Any behavior you observe in one engine may be different in another engine, in another version of the same engine, or even in a slightly different situation with the same version of the same engine. Garbage collection is a hard problem that JavaScript engine implementers are constantly refining and improving their solutions to.

Here are some specific points that the authors of the WeakRef proposal included in its [explainer document](https://github.com/tc39/proposal-weakrefs/blob/master/README.md):

> [Garbage collectors](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) are complicated. If an application or library depends on GC cleaning up a WeakRef or calling a finalizer \[cleanup callback] in a timely, predictable manner, it's likely to be disappointed: the cleanup may happen much later than expected, or not at all. Sources of variability include:
>
> - One object might be garbage-collected much sooner than another object, even if they become unreachable at the same time, e.g., due to generational collection.
> - Garbage collection work can be split up over time using incremental and concurrent techniques.
> - Various runtime heuristics can be used to balance memory usage, responsiveness.
> - The JavaScript engine may hold references to things which look like they are unreachable (e.g., in closures, or inline caches).
> - Different JavaScript engines may do these things differently, or the same engine may change its algorithms across versions.
> - Complex factors may lead to objects being held alive for unexpected amounts of time, such as use with certain APIs.

## Notes on WeakRefs

Some notes on `WeakRef`s:

- If your code has just created a `WeakRef` for a target object, or has gotten a target object from a `WeakRef`'s `deref` method, that target object will not be reclaimed until the end of the current JavaScript [job](https://tc39.es/ecma262/#job) (including any promise reaction jobs that run at the end of a script job). That is, you can only "see" an object get reclaimed between turns of the event loop. This is primarily to avoid making the behavior of any given JavaScript engine's garbage collector apparent in code — because if it were, people would write code relying on that behavior, which would break when the garbage collector's behavior changed. (Garbage collection is a hard problem; JavaScript engine implementers are constantly refining and improving how it works.)
- If multiple `WeakRef`s have the same target, they're consistent with one another. The result of calling `deref` on one of them will match the result of calling `deref` on another of them (in the same job), you won't get the target object from one of them but `undefined` from another.
- If the target of a `WeakRef` is also in a {{jsxref("FinalizationRegistry")}}, the `WeakRef`'s target is cleared at the same time or before any cleanup callback associated with the registry is called; if your cleanup callback calls `deref` on a `WeakRef` for the object, it will receive `undefined`.
- You cannot change the target of a `WeakRef`, it will always only ever be the original target object or `undefined` when that target has been reclaimed.
- A `WeakRef` might never return `undefined` from `deref`, even if nothing strongly holds the target, because the garbage collector may never decide to reclaim the object.

## Examples

### Using a WeakRef object

This example starts a counter shown in a DOM element, stopping when the element doesn't exist anymore:

```js
class Counter {
  constructor(element) {
    // Remember a weak reference to the DOM element
    this.ref = new WeakRef(element);
    this.start();
  }

  start() {
    if (this.timer) {
      return;
    }

    this.count = 0;

    const tick = () => {
      // Get the element from the weak reference, if it still exists
      const element = this.ref.deref();
      if (element) {
        element.textContent = ++this.count;
      } else {
        // The element doesn't exist anymore
        console.log("The element is gone.");
        this.stop();
        this.ref = null;
      }
    };

    tick();
    this.timer = setInterval(tick, 1000);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  }
}

const counter = new Counter(document.getElementById("counter"));
setTimeout(() => {
  document.getElementById("counter").remove();
}, 5000);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("FinalizationRegistry")}}
- {{jsxref("WeakSet")}}
- {{jsxref("WeakMap")}}
