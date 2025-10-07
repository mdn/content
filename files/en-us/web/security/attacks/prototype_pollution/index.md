---
title: JavaScript prototype pollution
slug: Web/Security/Attacks/Prototype_pollution
page-type: guide
sidebar: security
---

**Prototype pollution** is a vulnerability where an attacker can add or modify properties on an object's prototype. This means malicious values can unexpectedly appear on objects in your application, often leading to logic errors or additional attacks like [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS).

To understand how JavaScript prototypes work, read the following MDN articles:

- [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Working with objects](/en-US/docs/Web/JavaScript/Guide/Working_with_objects)

In a nutshell, every object in JavaScript has a `prototype` property which is an object itself and that prototype has its own prototype, too. This is called the JavaScript prototype chain. The chain ends when we reach an object that has `null` for its own prototype. The power of the prototype chain is that it allows an object to inherit properties and methods from its parent. However, a bad practice that JavaScript allows, is that the prototypes of objects can be changed during runtime which makes it possible to install properties at unintended places with malicious values. This even includes the built-in default objects, like the {{jsxref("Object")}} object, which is likely in the prototype chain of the majority of objects in your codebase and therefore makes this attack especially dangerous.

A key attack vector is the special [`Object.prototype.__proto__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) property, and how adding a property to `Object.prototype` will make that property accessible on ("polluted to") every object in your application. The `__proto__` property is often used, but you can also reach `Object.prototype` via `yourObject.constructor.prototype`.

Not all prototype pollution involves adding properties to `Object.prototype`, though. Other prototypes can also be polluted, like overriding {{jsxref("Promise.prototype.then")}}, which would be called for every `await` operation, and more.

## Example scenarios

To see the effect of prototype pollution, we can look at the how the following {{domxref("fetch()")}} call can be changed completely. By default, it is a {{HTTPMethod("GET")}} request, but because we polluted the `Object` object's prototype with two new default properties, the `fetch()` call is now transformed into a {{HTTPMethod("POST")}} request, which could lead to unintended side-affects on the server-side.

```js
Object.prototype.body = "a=1";
Object.prototype.method = "POST";

fetch("https://example.com", {
  mode: "cors",
});
// Promise {status: "pending", body: "a=1", method: "POST"}

// Any new object initialization is now modified to contain additional default properties
console.log({}.method); // "POST"
```

Another dangerous pollution attack target is the {{domxref("HTMLIframeElement.srcdoc")}} property which specifies the content of an {{HTMLElement("iframe")}} element. By overriding its value, it could potentially be possible to execute arbitrary code.

```js
Object.prototype.srcdoc = ["<script>alert(1)<\/script>"];
```

Any configuration objects, like `fetch()`'s {{domxref("RequestInit")}} object in the code example above, or the instantiation of `<iframes>`, or configuration of sanitizers ({{domxref("SanitizerConfig")}} objects) are some of the most sensitive objects and are often targets of prototype pollution attacks.

### Vulnerable sources

In order to pollute objects, the attacker needs a way to add arbitrary properties to prototype objects. This may happen as a consequence of [XSS](/en-US/docs/Web/Security/Attacks/XSS), in which the attacker gains direct access to the page's JavaScript execution environment. However, this can also happen without code injection, such as by constructing a payload that contains the `__proto__` property key will later get merged into another object via [spreading](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`for...in` loops](/en-US/docs/Web/JavaScript/Reference/Statements/for...in), etc., turning it into an assignment operation and therefore triggering the setter.

In a [very common prototype pollution vulnerability](https://github.com/BlackFan/client-side-prototype-pollution), the attacker pollutes query strings in the URL, or alternatively pollution could happen via JSON input, because {{jsxref("JSON.parse()")}} also includes strings like `__proto__`.

## Defenses against prototype pollution

There are a few options to mitigating prototype pollution vulnerabilities. This section presents them.

### Create JavaScript objects without a prototype

The {{jsxref("Object.create()", "Object.create(null)")}} function allows you to create a new empty object without a prototype. For your most sensitive objects, you could prevent prototype pollution attacks this way. However, note that creating objects without a prototype is not the default, so whenever instantiating an object, you need to remember to use {{jsxref("Object.create()", "Object.create(null)")}}.

```js
let obj = Object.create(null);
obj.__proto__; // undefined
obj.constructor; // undefined
obj["__proto__"]["a"] = 1; // TypeError: Cannot set properties of undefined
```

### Freezing the prototype

The static method {{jsxref("Object.freeze()")}} prevents extensions and makes existing properties non-writable and non-configurable. Freezing an object is the highest integrity level that JavaScript provides. Alternatively, {{jsxref("Object.seal()")}} is available, which allows existing properties changed, as long as they are writable, or {{jsxref("Object.preventExtensions()")}} which prevents new properties from being added to an object.

You can also freeze the prototype of the built-in base {{jsxref("Object")}}. However, note that in your code or in the code of your dependencies you may want to add to the built-in {{jsxref("Object")}} prototype or other built-in objects (for example, to provide a {{glossary("Polyfill")}} implementation). Given assignment on frozen objects fails silently, it may be difficult to debug.

```js
Object.freeze(Object.prototype);
let obj = {};
obj["__proto__"]["a"] = 1; // fails silently in non-strict mode
obj.a; // undefined
```

You can enable JavaScript's [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) to see errors when trying to define properties on objects that are not extensible.

Another caveat to note with {{jsxref("Object.freeze()")}} is that it doesn't provide a deep freeze by default. If you want true immutability, you need to recursively freeze every property ([example](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#deep_freezing)).

```js
const config = deepFreeze({
  url: "https://api.example.org",
  headers: {
    Authorization: "some_token",
  },
});

config.headers.Authorization = "hacked_token"; // fails thanks to deepFreeze
```

The `deepFreeze` approach is not handling circular references by default, so to create true immutable objects, you may want to look into using a library like [Immer](https://immerjs.github.io/immer/). You could also consider the [SES](https://github.com/endojs/endo/tree/master/packages/ses#ses) shim for [Hardened JavaScript](https://hardenedjs.org) to freeze every built-in object.

### Use `Map` and `Set` instead

Instead of using JavaScript objects, use {{jsxref("Map")}} or {{jsxref("Set")}} objects. These are more modern data structures not vulnerable to prototype pollution issues. See the `Map` documentation for a [comparison between Maps and Objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps). The {{jsxref("Map.prototype.get()")}} method will always only return the property that have been set directly on the `Map`.

```js
// Assume Object got polluted somehow
Object.prototype.admin = true;

let config = new Map();
config.set("admin", false);

config.admin; // true
config.get("admin"); // false
```

### JSON schema validation

JSON schema validators, such as [ajv](https://ajv.js.org), ensure that the JSON data structure contains the appropriate properties with the appropriate types. To mitigate the prototype pollution attack, reject unneeded properties by setting `additionalProperties` to `false` in the schema.

### Node.js flag `--disable-proto`

If you are in a Node.js environment, you can disable `Object.prototype.__proto__` with the `--disable-proto=MODE` option where `MODE` is either `delete` (the property is removed entirely), or `throw` (accesses to the property throws an exception with the code `ERR_PROTO_ACCESS`).

## Defense summary checklist

- Create your own objects with `Object.create(null)`.
- Consider freezing your own objects, for example with a library like [Immer](https://immerjs.github.io/immer/).
- Consider freezing built-in objects, for example by using the [SES](https://github.com/endojs/endo/tree/master/packages/ses#ses) shim.
- Use `Map` and `Set` objects instead.
- Validate your object structure with a schema.
- Use `--disable-proto` in Node.js to disable `Object.prototype.__proto__`.

## See also

- [OWASP: Prototype pollution prevention cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Prototype_Pollution_Prevention_Cheat_Sheet.html#other-resources)
