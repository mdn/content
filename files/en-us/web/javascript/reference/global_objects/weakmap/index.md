---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
page-type: javascript-class
browser-compat: javascript.builtins.WeakMap
---

{{JSRef}}

A **`WeakMap`** is a collection of key/value pairs whose keys must be objects or [non-registered symbols](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry), with values of any arbitrary [JavaScript type](/en-US/docs/Web/JavaScript/Data_structures), and which does not create strong references to its keys. That is, an object's presence as a key in a `WeakMap` does not prevent the object from being garbage collected. Once an object used as a key has been collected, its corresponding values in any `WeakMap` become candidates for garbage collection as well — as long as they aren't strongly referred to elsewhere. The only primitive type that can be used as a `WeakMap` key is symbol — more specifically, [non-registered symbols](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) — because non-registered symbols are guaranteed to be unique and cannot be re-created.

`WeakMap` allows associating data to objects in a way that doesn't prevent the key objects from being collected, even if the values reference the keys. However, a `WeakMap` doesn't allow observing the liveness of its keys, which is why it doesn't allow enumeration; if a `WeakMap` exposed any method to obtain a list of its keys, the list would depend on the state of garbage collection, introducing non-determinism. If you want to have a list of keys, you should use a {{jsxref("Map")}} rather than a `WeakMap`.

You can learn more about `WeakMap` in the [WeakMap object](/en-US/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) section of the [Keyed collections](/en-US/docs/Web/JavaScript/Guide/Keyed_collections) guide.

## Description

Keys of WeakMaps must be garbage-collectable. Most {{Glossary("Primitive", "primitive data types")}} can be arbitrarily created and don't have a lifetime, so they cannot be used as keys. Objects and [non-registered symbols](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) can be used as keys because they are garbage-collectable.

### Why WeakMap?

A map API _could_ be implemented in JavaScript with two arrays (one for keys, one for values) shared by the four API methods. Setting elements on this map would involve pushing a key and value onto the end of each of those arrays simultaneously. As a result, the indices of the key and value would correspond to both arrays. Getting values from the map would involve iterating through all keys to find a match, then using the index of this match to retrieve the corresponding value from the array of values.

Such an implementation would have two main inconveniences:

1. The first one is an `O(n)` set and search (_n_ being the number of keys in the map) since both operations must iterate through the list of keys to find a matching value.
2. The second inconvenience is a memory leak because the arrays ensure that references to each key and each value are maintained indefinitely. These references prevent the keys from being garbage collected, even if there are no other references to the object. This would also prevent the corresponding values from being garbage collected.

By contrast, in a `WeakMap`, a key object refers strongly to its contents as long as the key is not garbage collected, but weakly from then on. As such, a `WeakMap`:

- does not prevent garbage collection, which eventually removes references to the key object
- allows garbage collection of any values if their key objects are not referenced from somewhere other than a `WeakMap`

A `WeakMap` can be a particularly useful construct when mapping keys to information about the key that is valuable _only if_ the key has not been garbage collected.

But because a `WeakMap` doesn't allow observing the liveness of its keys, its keys are not enumerable. There is no method to obtain a list of the keys. If there were, the list would depend on the state of garbage collection, introducing non-determinism. If you want to have a list of keys, you should use a {{jsxref("Map")}}.

## Constructor

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Creates a new `WeakMap` object.

## Instance properties

These properties are defined on `WeakMap.prototype` and shared by all `WeakMap` instances.

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : The constructor function that created the instance object. For `WeakMap` instances, the initial value is the {{jsxref("WeakMap/WeakMap", "WeakMap")}} constructor.
- `WeakMap.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"WeakMap"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("WeakMap.prototype.delete()")}}
  - : Removes any value associated to the `key`. `WeakMap.prototype.has(key)` will return `false` afterwards.
- {{jsxref("WeakMap.prototype.get()")}}
  - : Returns the value associated to the `key`, or `undefined` if there is none.
- {{jsxref("WeakMap.prototype.has()")}}
  - : Returns a Boolean asserting whether a value has been associated to the `key` in the `WeakMap` object or not.
- {{jsxref("WeakMap.prototype.set()")}}
  - : Sets the `value` for the `key` in the `WeakMap` object. Returns the `WeakMap` object.

## Examples

### Using WeakMap

```js
const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = function () {};
const o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // a value can be anything, including an object or a function
wm2.set(o2, undefined);
wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, because that is the set value
wm2.get(o3); // undefined, because there is no key for o3 on wm2

wm1.has(o2); // true
wm2.has(o2); // true (even if the value itself is 'undefined')
wm2.has(o3); // false

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

### Implementing a WeakMap-like class with a .clear() method

```js
class ClearableWeakMap {
  #wm;
  constructor(init) {
    this.#wm = new WeakMap(init);
  }
  clear() {
    this.#wm = new WeakMap();
  }
  delete(k) {
    return this.#wm.delete(k);
  }
  get(k) {
    return this.#wm.get(k);
  }
  has(k) {
    return this.#wm.has(k);
  }
  set(k, v) {
    this.#wm.set(k, v);
    return this;
  }
}
```

### Emulating private members

Developers can use a `WeakMap` to associate private data to an object, with the following benefits:

- Compared to a {{jsxref("Map")}}, a WeakMap does not hold strong references to the object used as the key, so the metadata shares the same lifetime as the object itself, avoiding memory leaks.
- Compared to using non-enumerable and/or {{jsxref("Symbol")}} properties, a WeakMap is external to the object and there is no way for user code to retrieve the metadata through reflective methods like {{jsxref("Object.getOwnPropertySymbols")}}.
- Compared to a [closure](/en-US/docs/Web/JavaScript/Closures), the same WeakMap can be reused for all instances created from a constructor, making it more memory-efficient, and allows different instances of the same class to read the private members of each other.

```js
let Thing;

{
  const privateScope = new WeakMap();
  let counter = 0;

  Thing = function () {
    this.someProperty = "foo";

    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function () {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function () {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);
// "undefined"

const thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

This is roughly equivalent to the following, using [private fields](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties):

```js
class Thing {
  static #counter = 0;
  #hidden;
  constructor() {
    this.someProperty = "foo";
    this.#hidden = ++Thing.#counter;
  }
  showPublic() {
    return this.someProperty;
  }
  showPrivate() {
    return this.#hidden;
  }
}

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

### Associating metadata

A `WeakMap` can be used to associate metadata with an object, without affecting the lifetime of the object itself. This is very similar to the private members example, since private members are also modelled as external metadata that doesn't participate in [prototypical inheritance](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

This use case can be extended to already-created objects. For example, on the web, we may want to associate extra data with a DOM element, which the DOM element may access later. A common approach is to attach the data as a property:

```js
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.clicked = false;
  button.addEventListener("click", () => {
    button.clicked = true;
    const currentButtons = [...document.querySelectorAll(".button")];
    if (currentButtons.every((button) => button.clicked)) {
      console.log("All buttons have been clicked!");
    }
  });
});
```

This approach works, but it has a few pitfalls:

- The `clicked` property is enumerable, so it will show up in [`Object.keys(button)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loops, etc. This can be mitigated by using {{jsxref("Object.defineProperty()")}}, but that makes the code more verbose.
- The `clicked` property is a normal string property, so it can be accessed and overwritten by other code. This can be mitigated by using a {{jsxref("Symbol")}} key, but the key would still be accessible via {{jsxref("Object.getOwnPropertySymbols()")}}.

Using a `WeakMap` fixes these:

```js
const buttons = document.querySelectorAll(".button");
const clicked = new WeakMap();
buttons.forEach((button) => {
  clicked.set(button, false);
  button.addEventListener("click", () => {
    clicked.set(button, true);
    const currentButtons = [...document.querySelectorAll(".button")];
    if (currentButtons.every((button) => clicked.get(button))) {
      console.log("All buttons have been clicked!");
    }
  });
});
```

Here, only code that has access to `clicked` knows the clicked state of each button, and external code can't modify the states. In addition, if any of the buttons gets removed from the DOM, the associated metadata will automatically get garbage-collected.

### Caching

You can associate objects passed to a function with the result of the function, so that if the same object is passed again, the cached result can be returned without re-executing the function. This is useful if the function is pure (i.e. it doesn't mutate any outside objects or cause other observable side effects).

```js
const cache = new WeakMap();
function handleObjectValues(obj) {
  if (cache.has(obj)) {
    return cache.get(obj);
  }
  const result = Object.values(obj).map(heavyComputation);
  cache.set(obj, result);
  return result;
}
```

This only works if your function's input is an object. Moreover, even if the input is never passed in again, the result still remains forever in the cache as long as the key (input) is alive. A more effective way is to use a {{jsxref("Map")}} paired with {{jsxref("WeakRef")}} objects, which allows you to associate any type of input value with its respective (potentially large) computation result. See the [WeakRefs and FinalizationRegistry](/en-US/docs/Web/JavaScript/Memory_management#weakrefs_and_finalizationregistry) example for more details.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `WeakMap` in `core-js`](https://github.com/zloirock/core-js#weakmap)
- [Keyed collections](/en-US/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
- [Hiding Implementation Details with ECMAScript 6 WeakMaps](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html) by Nick Fitzgerald (2014)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
