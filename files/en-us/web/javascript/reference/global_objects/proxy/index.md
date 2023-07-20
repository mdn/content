---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
page-type: javascript-class
browser-compat: javascript.builtins.Proxy
---

{{JSRef}}

The **`Proxy`** object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

## Description

The `Proxy` object allows you to create an object that can be used in place of the original object, but which may redefine fundamental `Object` operations like getting, setting, and defining properties. Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs, and so on.

You create a `Proxy` with two parameters:

- `target`: the original object which you want to proxy
- `handler`: an object that defines which operations will be intercepted and how to redefine intercepted operations.

For example, this code creates a proxy for the `target` object.

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);
```

Because the handler is empty, this proxy behaves just like the original target:

```js
console.log(proxy1.message1); // hello
console.log(proxy1.message2); // everyone
```

To customize the proxy, we define functions on the handler object:

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler2 = {
  get(target, prop, receiver) {
    return "world";
  },
};

const proxy2 = new Proxy(target, handler2);
```

Here we've provided an implementation of the {{jsxref("Global_Objects/Proxy/Proxy/get", "get()")}} handler, which intercepts attempts to access properties in the target.

Handler functions are sometimes called _traps_, presumably because they trap calls to the target object. The very simple trap in `handler2` above redefines all property accessors:

```js
console.log(proxy2.message1); // world
console.log(proxy2.message2); // world
```

Proxies are often used with the {{jsxref("Reflect")}} object, which provides some methods with the same names as the `Proxy` traps. The `Reflect` methods provide the reflective semantics for invoking the corresponding [object internal methods](#object_internal_methods). For example, we can call `Reflect.get` if we don't wish to redefine the object's behavior:

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler3 = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    return Reflect.get(...arguments);
  },
};

const proxy3 = new Proxy(target, handler3);

console.log(proxy3.message1); // hello
console.log(proxy3.message2); // world
```

The `Reflect` method still interacts with the object through object internal methods — it doesn't "de-proxify" the proxy if it's invoked on a proxy. If you use `Reflect` methods within a proxy trap, and the `Reflect` method call gets intercepted by the trap again, there may be infinite recursion.

### Terminology

The following terms are used when talking about the functionality of proxies.

- [handler](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy#handler_functions)
  - : The object passed as the second argument to the `Proxy` constructor. It contains the traps which define the behavior of the proxy.
- trap
  - : The function that define the behavior for the corresponding [object internal method](#object_internal_methods). (This is analogous to the concept of _traps_ in operating systems.)
- target
  - : Object which the proxy virtualizes. It is often used as storage backend for the proxy. Invariants (semantics that remain unchanged) regarding object non-extensibility or non-configurable properties are verified against the target.
- invariants
  - : Semantics that remain unchanged when implementing custom operations. If your trap implementation violates the invariants of a handler, a {{jsxref("TypeError")}} will be thrown.

### Object internal methods

[Objects](/en-US/docs/Web/JavaScript/Data_structures#objects) are collections of properties. However, the language doesn't provide any machinery to _directly_ manipulate data stored in the object — rather, the object defines some internal methods specifying how it can be interacted with. For example, when you read `obj.x`, you may expect the following to happen:

- The `x` property is searched up the [prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) until it is found.
- If `x` is a data property, the property descriptor's `value` attribute is returned.
- If `x` is an accessor property, the getter is invoked, and the return value of the getter is returned.

There isn't anything special about this process in the language — it's just because ordinary objects, by default, have a `[[Get]]` internal method that is defined with this behavior. The `obj.x` property access syntax simply invokes the `[[Get]]` method on the object, and the object uses its own internal method implementation to determine what to return.

As another example, [arrays](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) differ from normal objects, because they have a magic [`length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) property that, when modified, automatically allocates empty slots or removes elements from the array. Similarly, adding array elements automatically changes the `length` property. This is because arrays have a `[[DefineOwnProperty]]` internal method that knows to update `length` when an integer index is written to, or update the array contents when `length` is written to. Such objects whose internal methods have different implementations from ordinary objects are called _exotic objects_. `Proxy` enable developers to define their own exotic objects with full capacity.

All objects have the following internal methods:

| Internal method         | Corresponding trap                                                               |
| ----------------------- | -------------------------------------------------------------------------------- |
| `[[GetPrototypeOf]]`    | {{jsxref("Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}}                     |
| `[[SetPrototypeOf]]`    | {{jsxref("Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}}                     |
| `[[IsExtensible]]`      | {{jsxref("Proxy/Proxy/isExtensible", "isExtensible()")}}                         |
| `[[PreventExtensions]]` | {{jsxref("Proxy/Proxy/preventExtensions", "preventExtensions()")}}               |
| `[[GetOwnProperty]]`    | {{jsxref("Proxy/Proxy/getOwnPropertyDescriptor", "getOwnPropertyDescriptor()")}} |
| `[[DefineOwnProperty]]` | {{jsxref("Proxy/Proxy/defineProperty", "defineProperty()")}}                     |
| `[[HasProperty]]`       | {{jsxref("Proxy/Proxy/has", "has()")}}                                           |
| `[[Get]]`               | {{jsxref("Proxy/Proxy/get", "get()")}}                                           |
| `[[Set]]`               | {{jsxref("Proxy/Proxy/set", "set()")}}                                           |
| `[[Delete]]`            | {{jsxref("Proxy/Proxy/deleteProperty", "deleteProperty()")}}                     |
| `[[OwnPropertyKeys]]`   | {{jsxref("Proxy/Proxy/ownKeys", "ownKeys()")}}                                   |

Function objects also have the following internal methods:

| Internal method | Corresponding trap                                 |
| --------------- | -------------------------------------------------- |
| `[[Call]]`      | {{jsxref("Proxy/Proxy/apply", "apply()")}}         |
| `[[Construct]]` | {{jsxref("Proxy/Proxy/construct", "construct()")}} |

It's important to realize that all interactions with an object eventually boils down to the invocation of one of these internal methods, and that they are all customizable through proxies. This means almost no behavior (except certain critical invariants) is guaranteed in the language — everything is defined by the object itself. When you run [`delete obj.x`](/en-US/docs/Web/JavaScript/Reference/Operators/delete), there's no guarantee that [`"x" in obj`](/en-US/docs/Web/JavaScript/Reference/Operators/in) returns `false` afterwards — it depends on the object's implementations of `[[Delete]]` and `[[HasProperty]]`. A `delete obj.x` may log things to the console, modify some global state, or even define a new property instead of deleting the existing one, although these semantics should be avoided in your own code.

All internal methods are called by the language itself, and are not directly accessible in JavaScript code. The {{jsxref("Reflect")}} namespace offers methods that do little more than call the internal methods, besides some input normalization/validation. In each trap's page, we list several typical situations when the trap is invoked, but these internal methods are called in _a lot_ of places. For example, array methods read and write to array through these internal methods, so methods like [`push()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) would also invoke `get()` and `set()` traps.

Most of the internal methods are straightforward in what they do. The only two that may be confusable are `[[Set]]` and `[[DefineOwnProperty]]`. For normal objects, the former invokes setters; the latter doesn't. (And `[[Set]]` calls `[[DefineOwnProperty]]` internally if there's no existing property or the property is a data property.) While you may know that the `obj.x = 1` syntax uses `[[Set]]`, and {{jsxref("Object.defineProperty()")}} uses `[[DefineOwnProperty]]`, it's not immediately apparent what semantics other built-in methods and syntaxes use. For example, [class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields) use the `[[DefineOwnProperty]]` semantic, which is why setters defined in the superclass are not invoked when a field is declared on the derived class.

## Constructor

- {{jsxref("Proxy/Proxy", "Proxy()")}}
  - : Creates a new `Proxy` object.

> **Note:** There's no `Proxy.prototype` property, so `Proxy` instances do not have any special properties or methods.

## Static methods

- {{jsxref("Proxy.revocable()")}}
  - : Creates a revocable `Proxy` object.

## Examples

### Basic example

In this simple example, the number `37` gets returned as the default value when the property name is not in the object. It is using the {{jsxref("Global_Objects/Proxy/Proxy/get", "get()")}} handler.

```js
const handler = {
  get(obj, prop) {
    return prop in obj ? obj[prop] : 37;
  },
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined

console.log("c" in p, p.c); // false, 37
```

### No-op forwarding proxy

In this example, we are using a native JavaScript object to which our proxy will forward all operations that are applied to it.

```js
const target = {};
const p = new Proxy(target, {});

p.a = 37; // Operation forwarded to the target

console.log(target.a); // 37 (The operation has been properly forwarded!)
```

Note that while this "no-op" works for plain JavaScript objects, it does not work for native objects, such as DOM elements, [`Map`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) objects, or anything that has internal slots. See [no private property forwarding](#no_private_property_forwarding) for more information.

### No private property forwarding

A proxy is still another object with a different identity — it's a _proxy_ that operates between the wrapped object and the outside. As such, the proxy does not have direct access to the original object's [private properties](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields).

```js
class Secret {
  #secret;
  constructor(secret) {
    this.#secret = secret;
  }
  get secret() {
    return this.#secret.replace(/\d+/, "[REDACTED]");
  }
}

const aSecret = new Secret("123456");
console.log(aSecret.secret); // [REDACTED]
// Looks like a no-op forwarding...
const proxy = new Proxy(aSecret, {});
console.log(proxy.secret); // TypeError: Cannot read private member #secret from an object whose class did not declare it
```

This is because when the proxy's `get` trap is invoked, the `this` value is the `proxy` instead of the original `secret`, so `#secret` is not accessible. To fix this, use the original `secret` as `this`:

```js
const proxy = new Proxy(aSecret, {
  get(target, prop, receiver) {
    // By default, it looks like Reflect.get(target, prop, receiver)
    // which has a different value of `this`
    return target[prop];
  },
});
console.log(proxy.secret);
```

For methods, this means you have to redirect the method's `this` value to the original object as well:

```js
class Secret {
  #x = 1;
  x() {
    return this.#x;
  }
}

const aSecret = new Secret();
const proxy = new Proxy(aSecret, {
  get(target, prop, receiver) {
    const value = target[prop];
    if (value instanceof Function) {
      return function (...args) {
        return value.apply(this === receiver ? target : this, args);
      };
    }
    return value;
  },
});
console.log(proxy.x());
```

Some native JavaScript objects have properties called _[internal slots](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-object-internal-methods-and-internal-slots)_, which are not accessible from JavaScript code. For example, [`Map`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) objects have an internal slot called `[[MapData]]`, which stores the key-value pairs of the map. As such, you cannot trivially create a forwarding proxy for a map:

```js
const proxy = new Proxy(new Map(), {});
console.log(proxy.size); // TypeError: get size method called on incompatible Proxy
```

You have to use the "`this`-recovering" proxy illustrated above to work around this.

### Validation

With a `Proxy`, you can easily validate the passed value for an object. This example uses the {{jsxref("Global_Objects/Proxy/Proxy/set", "set()")}} handler.

```js
const validator = {
  set(obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("The age is not an integer");
      }
      if (value > 200) {
        throw new RangeError("The age seems invalid");
      }
    }

    // The default behavior to store the value
    obj[prop] = value;

    // Indicate success
    return true;
  },
};

const person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = "young"; // Throws an exception
person.age = 300; // Throws an exception
```

### Manipulating DOM nodes

In this example we use `Proxy` to toggle an attribute of two different elements: so when we set the attribute on one element, the attribute is unset on the other one.

We create a `view` object which is a proxy for an object with a `selected` property. The proxy handler defines the {{jsxref("Proxy/Proxy/set", "set()")}} handler.

When we assign an HTML element to `view.selected`, the element's `'aria-selected'` attribute is set to `true`. If we then assign a different element to `view.selected`, this element's `'aria-selected'` attribute is set to `true` and the previous element's `'aria-selected'` attribute is automatically set to `false`.

```js
const view = new Proxy(
  {
    selected: null,
  },
  {
    set(obj, prop, newval) {
      const oldval = obj[prop];

      if (prop === "selected") {
        if (oldval) {
          oldval.setAttribute("aria-selected", "false");
        }
        if (newval) {
          newval.setAttribute("aria-selected", "true");
        }
      }

      // The default behavior to store the value
      obj[prop] = newval;

      // Indicate success
      return true;
    },
  },
);

const item1 = document.getElementById("item-1");
const item2 = document.getElementById("item-2");

// select item1:
view.selected = item1;

console.log(`item1: ${item1.getAttribute("aria-selected")}`);
// item1: true

// selecting item2 de-selects item1:
view.selected = item2;

console.log(`item1: ${item1.getAttribute("aria-selected")}`);
// item1: false

console.log(`item2: ${item2.getAttribute("aria-selected")}`);
// item2: true
```

### Value correction and an extra property

The `products` proxy object evaluates the passed value and converts it to an array if needed. The object also supports an extra property called `latestBrowser` both as a getter and a setter.

```js
const products = new Proxy(
  {
    browsers: ["Firefox", "Chrome"],
  },
  {
    get(obj, prop) {
      // An extra property
      if (prop === "latestBrowser") {
        return obj.browsers[obj.browsers.length - 1];
      }

      // The default behavior to return the value
      return obj[prop];
    },
    set(obj, prop, value) {
      // An extra property
      if (prop === "latestBrowser") {
        obj.browsers.push(value);
        return true;
      }

      // Convert the value if it is not an array
      if (typeof value === "string") {
        value = [value];
      }

      // The default behavior to store the value
      obj[prop] = value;

      // Indicate success
      return true;
    },
  },
);

console.log(products.browsers);
//  ['Firefox', 'Chrome']

products.browsers = "Safari";
//  pass a string (by mistake)

console.log(products.browsers);
//  ['Safari'] <- no problem, the value is an array

products.latestBrowser = "Edge";

console.log(products.browsers);
//  ['Safari', 'Edge']

console.log(products.latestBrowser);
//  'Edge'
```

### A complete traps list example

Now in order to create a complete sample `traps` list, for didactic purposes, we will try to proxify a _non-native_ object that is particularly suited to this type of operation: the `docCookies` global object created by [a simple cookie framework](https://reference.codeproject.com/dom/document/cookie/simple_document.cookie_framework).

```js
/*
  const docCookies = ... get the "docCookies" object here:
  https://reference.codeproject.com/dom/document/cookie/simple_document.cookie_framework
*/

const docCookies = new Proxy(docCookies, {
  get(target, key) {
    return target[key] ?? target.getItem(key) ?? undefined;
  },
  set(target, key, value) {
    if (key in target) {
      return false;
    }
    return target.setItem(key, value);
  },
  deleteProperty(target, key) {
    if (!(key in target)) {
      return false;
    }
    return target.removeItem(key);
  },
  ownKeys(target) {
    return target.keys();
  },
  has(target, key) {
    return key in target || target.hasItem(key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor && "value" in descriptor) {
      target.setItem(key, descriptor.value);
    }
    return target;
  },
  getOwnPropertyDescriptor(target, key) {
    const value = target.getItem(key);
    return value
      ? {
          value,
          writable: true,
          enumerable: true,
          configurable: false,
        }
      : undefined;
  },
});

/* Cookies test */

console.log((docCookies.myCookie1 = "First value"));
console.log(docCookies.getItem("myCookie1"));

docCookies.setItem("myCookie1", "Changed value");
console.log(docCookies.myCookie1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- ["Proxies are awesome" Brendan Eich presentation at JSConf](https://www.youtube.com/watch?v=sClk6aB_CPk) ([slides](https://www.slideshare.net/BrendanEich/metaprog-5303821))
- [Tutorial on proxies](https://web.archive.org/web/20171007221059/https://soft.vub.ac.be/~tvcutsem/proxies/)
