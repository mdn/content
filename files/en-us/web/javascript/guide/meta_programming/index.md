---
title: Meta programming
slug: Web/JavaScript/Guide/Meta_programming
page-type: guide
---

{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Modules")}}

The {{jsxref("Proxy")}} and {{jsxref("Reflect")}} objects allow you to intercept and define custom behavior for fundamental language operations (e.g. property lookup, assignment, enumeration, function invocation, etc.). With the help of these two objects you are able to program at the meta level of JavaScript.

## Proxies

{{jsxref("Proxy")}} objects allow you to intercept certain operations and to implement custom behaviors.

For example, getting a property on an object:

```js
const handler = {
  get(target, name) {
    return name in target ? target[name] : 42;
  },
};

const p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42
```

The `Proxy` object defines a `target` (an empty object here) and a `handler` object, in which a `get` _trap_ is implemented. Here, an object that is proxied will not return `undefined` when getting undefined properties, but will instead return the number `42`.

Additional examples are available on the {{jsxref("Proxy")}} reference page.

### Terminology

The following terms are used when talking about the functionality of proxies.

- {{jsxref("Proxy/Proxy", "handler", "", 1)}}
  - : Placeholder object which contains traps.
- traps
  - : The methods that provide property access. (This is analogous to the concept of _traps_ in operating systems.)
- target
  - : Object which the proxy virtualizes. It is often used as storage backend for the proxy. Invariants (semantics that remain unchanged) regarding object non-extensibility or non-configurable properties are verified against the target.
- invariants
  - : Semantics that remain unchanged when implementing custom operations are called _invariants_. If you violate the invariants of a handler, a {{jsxref("TypeError")}} will be thrown.

## Handlers and traps

The following table summarizes the available traps available to `Proxy` objects. See the [reference pages](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) for detailed explanations and examples.

<table class="standard-table">
  <thead>
    <tr>
      <th>Handler / trap</th>
      <th>Interceptions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.getPrototypeOf()")}}<br />{{jsxref("Reflect.getPrototypeOf()")}}<br />{{jsxref("Object/proto", "__proto__")}}<br />{{jsxref("Object.prototype.isPrototypeOf()")}}<br />{{jsxref("Operators/instanceof", "instanceof")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.setPrototypeOf()")}}<br />{{jsxref("Reflect.setPrototypeOf()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/isExtensible", "handler.isExtensible()")}}
      </td>
      <td>
        {{jsxref("Object.isExtensible()")}}<br />{{jsxref("Reflect.isExtensible()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/preventExtensions", "handler.preventExtensions()")}}
      </td>
      <td>
        {{jsxref("Object.preventExtensions()")}}<br />{{jsxref("Reflect.preventExtensions()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyDescriptor()")}}<br />{{jsxref("Reflect.getOwnPropertyDescriptor()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
      </td>
      <td>
        {{jsxref("Object.defineProperty()")}}<br />{{jsxref("Reflect.defineProperty()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/has", "handler.has()")}}
      </td>
      <td>
        <dl>
          <dt>Property query</dt>
          <dd><code>foo in proxy</code></dd>
          <dt>Inherited property query</dt>
          <dd>
            <code>foo in Object.create(<var>proxy</var>)</code
            ><br />{{jsxref("Reflect.has()")}}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/get", "handler.get()")}}
      </td>
      <td>
        <dl>
          <dt>Property access</dt>
          <dd>
            <code><var>proxy</var>[foo]</code><br /><code
              ><var>proxy</var>.bar</code
            >
          </dd>
          <dt>Inherited property access</dt>
          <dd>
            <!-- markdownlint-disable MD011 -->
            <code>Object.create(<var>proxy</var>)[foo]</code
            ><br />{{jsxref("Reflect.get()")}}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/set", "handler.set()")}}
      </td>
      <td>
        <dl>
          <dt>Property assignment</dt>
          <dd>
            <code><var>proxy</var>[foo] = bar</code><br /><code
              ><var>proxy</var>.foo = bar</code
            >
          </dd>
          <dt>Inherited property assignment</dt>
          <dd>
            <code>Object.create(<var>proxy</var>)[foo] = bar</code
            ><br />{{jsxref("Reflect.set()")}}
          </dd>
            <!-- markdownlint-enable MD011 -->
        </dl>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
      </td>
      <td>
        <dl>
          <dt>Property deletion</dt>
          <dd>
            <code>delete <var>proxy</var>[foo]</code><br /><code
              >delete <var>proxy</var>.foo</code
            ><br />{{jsxref("Reflect.deleteProperty()")}}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/ownKeys", "handler.ownKeys()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyNames()")}}<br />{{jsxref("Object.getOwnPropertySymbols()")}}<br />{{jsxref("Object.keys()")}}<br />{{jsxref("Reflect.ownKeys()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/apply", "handler.apply()")}}
      </td>
      <td>
        <code>proxy(..args)</code
        ><br />{{jsxref("Function.prototype.apply()")}} and
        {{jsxref("Function.prototype.call()")}}<br />{{jsxref("Reflect.apply()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/construct", "handler.construct()")}}
      </td>
      <td>
        <code>new proxy(...args)</code
        ><br />{{jsxref("Reflect.construct()")}}
      </td>
    </tr>
  </tbody>
</table>

## Revocable `Proxy`

The {{jsxref("Proxy.revocable()")}} method is used to create a revocable `Proxy` object. This means that the proxy can be revoked via the function `revoke` and switches the proxy off.

Afterwards, any operation on the proxy leads to a {{jsxref("TypeError")}}.

```js
const revocable = Proxy.revocable(
  {},
  {
    get(target, name) {
      return `[[${name}]]`;
    },
  },
);
const proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // TypeError: Cannot perform 'get' on a proxy that has been revoked
proxy.foo = 1; // TypeError: Cannot perform 'set' on a proxy that has been revoked
delete proxy.foo; // TypeError: Cannot perform 'deleteProperty' on a proxy that has been revoked
console.log(typeof proxy); // "object", typeof doesn't trigger any trap
```

## Reflection

{{jsxref("Reflect")}} is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of the [proxy handler's](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy).

`Reflect` is not a function object.

`Reflect` helps with forwarding default operations from the handler to the `target`.

With {{jsxref("Reflect.has()")}} for example, you get the [`in` operator](/en-US/docs/Web/JavaScript/Reference/Operators/in) as a function:

```js
Reflect.has(Object, "assign"); // true
```

### A better apply() function

Before `Reflect`, you typically use the {{jsxref("Function.prototype.apply()")}} method to call a function with a given `this` value and `arguments` provided as an array (or an [array-like object](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)).

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

With {{jsxref("Reflect.apply")}} this becomes less verbose and easier to understand:

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"
```

### Checking if property definition has been successful

With {{jsxref("Object.defineProperty")}}, which returns an object if successful, or throws a {{jsxref("TypeError")}} otherwise, you would use a {{jsxref("Statements/try...catch", "try...catch")}} block to catch any error that occurred while defining a property. Because {{jsxref("Reflect.defineProperty()")}} returns a Boolean success status, you can just use an {{jsxref("Statements/if...else", "if...else")}} block here:

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Modules")}}
