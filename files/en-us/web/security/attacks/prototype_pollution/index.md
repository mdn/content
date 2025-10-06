---
title: JavaScript prototype pollution
slug: Web/Security/Attacks/Prototype_pollution
page-type: guide
sidebar: security
---

**Prototype pollution** is a vulnerability where an attacker can add or modify properties on an object's prototype. This means malicious values can unexpectedly appear on every object in your application, often leading to logic errors or additional attacks like [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS).

To understand how JavaScript prototypes work, read the following MDN articles:

- [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Working with objects](/en-US/docs/Web/JavaScript/Guide/Working_with_objects)

A key attack vector is the special [`Object.prototype.__proto__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) property, and how adding a property to `Object.prototype` will make that property accessible on ("polluted to") every object in your application.

Not all prototype pollution involves adding properties to `Object.prototype`, though. Other prototypes can also be polluted, like overriding {{jsxref("Promise.prototype.then")}}, which would be called for every `await` operation, and more.

To see the effect of prototype pollution, we can look at the how the following {{domxref("fetch()")}} call can be changed completely. By default, it is a {{HTTPMethod("GET")}} request, but because we polluted the `Object` object's prototype with two new default properties, the `fetch()` call is now transformed into a {{HTTPMethod("POST")}} request.

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

## Example scenarios

In order to pollute objects, the attacker needs a way to add arbitrary properties to prototype objects. This may happen as a consequence of [XSS](/en-US/docs/Web/Security/Attacks/XSS), in which the attacker gains direct access to the page's JavaScript execution environment. However, this can also happen without code injection, such as by constructing a payload that contains the `__proto__` property key will later get merged into another object via [spreading](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`for...in` loops](/en-US/docs/Web/JavaScript/Reference/Statements/for...in), etc., turning it into an assignment operation and therefore triggering the setter.

### Pollution via URL query strings

In a very common prototype pollution vulnerability, the attacker pollutes query strings in the URL:

```http
https://example.org/?__proto__={"test":"polluted"}
```

See also [Client-Side Prototype Pollution](https://github.com/BlackFan/client-side-prototype-pollution) for libraries vulnerable due to {{domxref("document.location")}} parsing and the various URL payloads used.

If you parse the query strings into key-value pairs and treat `__proto__` like an arbitrary string, you risk that `__proto__` will later be merged into a target object like this:

```js
const result = { ...defaultValues, ...query };
```

which you may expect to result in the following object structure for `result`:

```js
{
  existingProperty: "hello",
  __proto__: {
      test: "polluted"
  }
}
```

However, this is not what is happening! Instead, this adds `test` to the object's prototype, which is {{jsxref("Object.prototype")}}. Now all objects in the JavaScript runtime will inherit the `test` property and we have successfully polluted the prototype. The `test` property is likely not meaningful in this case, but other property names might become a problem for your code or for any code in your imported libraries as it could override existing properties or functions.

```js
result.test; // "polluted"
{}.test; // "polluted"
"".test; // "polluted"
[].test; // "polluted"
// ...
```

## Defenses against prototype pollution

There are a few options to mitigating prototype pollution vulnerabilities. This section presents them.

### Create a JavaScript object without a prototype

The {{jsxref("Object.create()", "Object.create(null)")}} function allows you to create a new empty object without a prototype. Because of this, there won't be any prototype pollution issues:

```js
let obj = Object.create(null);
obj.__proto__; // undefined
obj.constructor; // undefined
obj["__proto__"]["a"] = 1; // TypeError: Cannot set properties of undefined
```

### Use `Map` and `Set` instead

Instead of using JavaScript objects, use {{jsxref("Map")}} or {{jsxref("Set")}} objects. These are more modern data structures not vulnerable to prototype pollution issues.

### Freezing the prototype

The static method {{jsxref("Object.freeze()")}} prevents extensions and makes existing properties non-writable and non-configurable. Freezing an object is the highest integrity level that JavaScript provides. Alternatively, {{jsxref("Object.seal()")}} is available, which allows existing properties changed, as long as they are writable.

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

The `deepFreeze` approach is not handling circular references by default, so to create true immutable objects, you may want to look into using a library like [Immer](https://immerjs.github.io/immer/). You could also consider the [SES](https://github.com/endojs/endo/tree/master/packages/ses#ses) shim for [Hardened JavaScript](https://hardenedjs.org) which is a [draft proposal for ECMAScript](https://github.com/tc39/proposal-ses) to freeze every built-in object.

### JSON schema validation

JSON schema validators, such as [ajv](https://ajv.js.org), ensure that the JSON data structure contains the appropriate properties with the appropriate types. To mitigate the prototype pollution attack, reject unneeded properties by setting `additionalProperties` to `false` in the schema.

### Node.js flag `--disable-proto`

If you are in a Node.js environment, you can disable `Object.prototype.__proto__` with the `--disable-proto=MODE` option where `MODE` is either `delete` (the property is removed entirely), or `throw` (accesses to the property throws an exception with the code `ERR_PROTO_ACCESS`).

## Defense summary checklist

- Create empty objects with `Object.create(null)`.
- Use `Map` and `Set` objects instead.
- Consider freezing your own objects, for example with a library like [Immer](https://immerjs.github.io/immer/).
- Consider freezing built-in objects, for example by using the [SES](https://github.com/endojs/endo/tree/master/packages/ses#ses) shim.
- Validate your object structure with a schema.
- Use `--disable-proto` in Node.js.

## See also

- [OWASP: Prototype pollution prevention cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Prototype_Pollution_Prevention_Cheat_Sheet.html#other-resources)
