---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Proxy
browser-compat: javascript.builtins.Proxy
---
{{JSRef}}

The `Proxy` object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

## Description

The `Proxy` object allows you to create an object that can be used in place of the original object, but which may redefine fundamental `Object` operations like getting, setting, and defining properties. Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs, and so on.

You create a `Proxy` with two parameters:

- `target`: the original object which you want to proxy
- `handler`: an object that defines which operations will be intercepted and how to redefine intercepted operations.

For example, this code defines a simple target with just two properties, and an even simpler handler with no properties:

```js
const target = {
  message1: "hello",
  message2: "everyone"
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
  message2: "everyone"
};

const handler2 = {
  get(target, prop, receiver) {
    return "world";
  }
};

const proxy2 = new Proxy(target, handler2);
```

Here we've provided an implementation of the {{jsxref("Global_Objects/Proxy/Proxy/get", "get()")}} handler, which intercepts attempts to access properties in the target.

Handler functions are sometimes called _traps_, presumably because they trap calls to the target object. The very simple trap in `handler2` above redefines all property accessors:

```js
console.log(proxy2.message1); // world
console.log(proxy2.message2); // world
```

With the help of the {{jsxref("Reflect")}} class we can give some accessors the original behavior and redefine others:

```js
const target = {
  message1: "hello",
  message2: "everyone"
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

## Constructor

- {{jsxref("Global_Objects/Proxy/Proxy", "Proxy()")}}
  - : Creates a new `Proxy` object.

## Static methods

- {{jsxref("Proxy.revocable()")}}
  - : Creates a revocable `Proxy` object.

## Examples

### Basic example

In this simple example, the number `37` gets returned as the default value when the property name is not in the object. It is using the {{jsxref("Global_Objects/Proxy/Proxy/get", "get()")}} handler.

```js
const handler = {
  get(obj, prop) {
    return prop in obj ?
      obj[prop] :
      37;
  }
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);
//  1, undefined

console.log('c' in p, p.c);
//  false, 37
```

### No-op forwarding proxy

In this example, we are using a native JavaScript object to which our proxy will forward all operations that are applied to it.

```js
const target = {};
const p = new Proxy(target, {});

p.a = 37;
//  operation forwarded to the target

console.log(target.a);
//  37
//  (The operation has been properly forwarded!)
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
  x() { return this.#x; }
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

Some native JavaScript objects have properties called _[internal slots](https://tc39.es/ecma262/#sec-object-internal-methods-and-internal-slots)_, which are not accessible from JavaScript code. For example, [`Map`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) objects have an internal slot called `[[MapData]]`, which stores the key-value pairs of the map. As such, you cannot trivially create a forwarding proxy for a map:

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
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // The default behavior to store the value
    obj[prop] = value;

    // Indicate success
    return true;
  }
};

const person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = 'young';    // Throws an exception
person.age = 300;        // Throws an exception
```

### Extending constructor

A function proxy could easily extend a constructor with a new constructor. This example uses the {{jsxref("Global_Objects/Proxy/Proxy/construct", "construct()")}} and {{jsxref("Global_Objects/Proxy/Proxy/apply", "apply()")}} handlers.

```js
function extend(sup, base) {
  base.prototype = Object.create(sup.prototype);
  base.prototype.constructor = new Proxy(base, {
    construct(target, args) {
      const obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply(target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    }
  });
  return base.prototype.constructor;
}

const Person = function (name) {
  this.name = name;
};

const Boy = extend(Person, function (name, age) {
  this.age = age;
});

Boy.prototype.gender = 'M';

const Peter = new Boy('Peter', 13);

console.log(Peter.gender);  // "M"
console.log(Peter.name);    // "Peter"
console.log(Peter.age);     // 13
```

### Manipulating DOM nodes

In this example we use `Proxy` to toggle an attribute of two different elements: so when we set the attribute on one element, the attribute is unset on the other one.

We create a `view` object which is a proxy for an object with a `selected` property. The proxy handler defines the {{jsxref("Proxy/Proxy/set", "set()")}} handler.

When we assign an HTML element to `view.selected`, the element's `'aria-selected'` attribute is set to `true`. If we then assign a different element to `view.selected`, this element's `'aria-selected'` attribute is set to `true` and the previous element's `'aria-selected'` attribute is automatically set to `false`.

```js
const view = new Proxy({
  selected: null,
},
{
  set(obj, prop, newval) {
    const oldval = obj[prop];

    if (prop === 'selected') {
      if (oldval) {
        oldval.setAttribute('aria-selected', 'false');
      }
      if (newval) {
        newval.setAttribute('aria-selected', 'true');
      }
    }

    // The default behavior to store the value
    obj[prop] = newval;

    // Indicate success
    return true;
  }
});

const item1 = document.getElementById('item-1');
const item2 = document.getElementById('item-2');

// select item1:
view.selected = item1;

console.log(`item1: ${item1.getAttribute('aria-selected')}`);
// item1: true

// selecting item2 de-selects item1:
view.selected = item2;

console.log(`item1: ${item1.getAttribute('aria-selected')}`);
// item1: false

console.log(`item2: ${item2.getAttribute('aria-selected')}`);
// item2: true
```

### Value correction and an extra property

The `products` proxy object evaluates the passed value and converts it to an array if needed. The object also supports an extra property called `latestBrowser` both as a getter and a setter.

```js
const products = new Proxy({
  browsers: ['Internet Explorer', 'Netscape']
},
{
  get(obj, prop) {
    // An extra property
    if (prop === 'latestBrowser') {
      return obj.browsers[obj.browsers.length - 1];
    }

    // The default behavior to return the value
    return obj[prop];
  },
  set(obj, prop, value) {
    // An extra property
    if (prop === 'latestBrowser') {
      obj.browsers.push(value);
      return true;
    }

    // Convert the value if it is not an array
    if (typeof value === 'string') {
      value = [value];
    }

    // The default behavior to store the value
    obj[prop] = value;

    // Indicate success
    return true;
  }
});

console.log(products.browsers);
//  ['Internet Explorer', 'Netscape']

products.browsers = 'Firefox';
//  pass a string (by mistake)

console.log(products.browsers);
//  ['Firefox'] <- no problem, the value is an array

products.latestBrowser = 'Chrome';

console.log(products.browsers);
//  ['Firefox', 'Chrome']

console.log(products.latestBrowser);
//  'Chrome'
```

### Finding an array item object by its property

This proxy extends an array with some utility features. As you see, you can flexibly "define" properties without using {{jsxref("Object.defineProperties", "Object.defineProperties()")}}. This example can be adapted to find a table row by its cell. In that case, the target will be {{domxref("HTMLTableElement.rows", "table.rows")}}.

```js
const products = new Proxy([
  { name: 'Firefox', type: 'browser' },
  { name: 'SeaMonkey', type: 'browser' },
  { name: 'Thunderbird', type: 'mailer' }
],
{
  get(obj, prop) {
    // The default behavior to return the value; prop is usually an integer
    if (prop in obj) {
      return obj[prop];
    }

    // Get the number of products; an alias of products.length
    if (prop === 'number') {
      return obj.length;
    }

    let result;
    const types = {};

    for (const product of obj) {
      if (product.name === prop) {
        result = product;
      }
      if (types[product.type]) {
        types[product.type].push(product);
      } else {
        types[product.type] = [product];
      }
    }

    // Get a product by name
    if (result) {
      return result;
    }

    // Get products by type
    if (prop in types) {
      return types[prop];
    }

    // Get product types
    if (prop === 'types') {
      return Object.keys(types);
    }

    return undefined;
  }
});

console.log(products[0]);          // { name: 'Firefox', type: 'browser' }
console.log(products['Firefox']);  // { name: 'Firefox', type: 'browser' }
console.log(products['Chrome']);   // undefined
console.log(products.browser);     // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
console.log(products.types);       // ['browser', 'mailer']
console.log(products.number);      // 3
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
    return target[key] || target.getItem(key) || undefined;
  },
  set(target, key, value) {
    if (key in target) { return false; }
    return target.setItem(key, value);
  },
  deleteProperty(target, key) {
    if (!(key in target)) { return false; }
    return target.removeItem(key);
  },
  ownKeys(target) {
    return target.keys();
  },
  has(target, key) {
    return key in target || target.hasItem(key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor && 'value' in descriptor) {
      target.setItem(key, descriptor.value);
    }
    return target;
  },
  getOwnPropertyDescriptor(target, key) {
    const value = target.getItem(key);
    return value ? {
      value,
      writable: true,
      enumerable: true,
      configurable: false,
    } : undefined;
  },
});

/* Cookies test */

console.log(docCookies.myCookie1 = 'First value');
console.log(docCookies.getItem('myCookie1'));

docCookies.setItem('myCookie1', 'Changed value');
console.log(docCookies.myCookie1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- ["Proxies are awesome" Brendan Eich presentation at JSConf](https://www.youtube.com/watch?v=sClk6aB_CPk) ([slides](https://www.slideshare.net/BrendanEich/metaprog-5303821))
- [Tutorial on proxies](https://web.archive.org/web/20171007221059/https://soft.vub.ac.be/~tvcutsem/proxies/)
