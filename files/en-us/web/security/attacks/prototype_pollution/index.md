---
title: JavaScript prototype pollution
slug: Web/Security/Attacks/Prototype_pollution
page-type: guide
sidebar: security
---

**Prototype pollution** is a vulnerability where an attacker can add or modify properties on an object's prototype. This means malicious values can unexpectedly appear on objects in your application, often leading to logic errors or additional attacks like [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS).

## Prototypes in JavaScript

JavaScript implements {{glossary("inheritance")}} using _prototypes_. Each object has a reference to a prototype, which is itself an object, and which itself has a prototype, and so on, until we get to the fundamental prototype, which is called `Object.prototype`, whose own prototype is `null`.

If you try to access a property or call a method on an object, and that property or method isn't defined on the object, then the JavaScript runtime looks in the object's prototype for the property or method, and then in the object's prototype's prototype, and so on, until it finds the method or property, or reaches an object whose prototype is `null`.

That's why you can do this:

```js
const mySet = new Set([1, 2, 3]);
// prototype chain:
// mySet -> Set.prototype -> Object.prototype -> null

mySet.size;
// 3
// size is defined on the prototype of `mySet`, which is `Set.prototype`

mySet.propertyIsEnumerable("size");
// false
// propertyIsEnumerable() is defined on the prototype
// of `Set.prototype`, which is `Object.prototype`
```

Unlike many other languages, JavaScript allows you to add inherited properties and methods at runtime by modifying an object's prototypes:

```js example-bad
const mySet = new Set([1, 2, 3]);

// modify the Object prototype at runtime
Object.prototype.extra = "new property from the Object prototype!";

// modify the Set prototype at runtime
Set.prototype.other = "new property from the Set prototype!";

mySet.extra;
// "new property from the Object prototype!"

mySet.other;
// "new property from the Set prototype!"
```

In a prototype pollution attack, the attacker is able to change the object's prototype to make the object behave in unexpected or dangerous ways.

> [!NOTE]
> To learn much more about prototypes, see:
>
> - [Object prototypes](/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
> - [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
> - [Working with objects](/en-US/docs/Web/JavaScript/Guide/Working_with_objects)

## Anatomy of prototype pollution

Prototype pollution involves two phases:

1. **Pollution**: The attacker is able to add or modify properties on an object's prototype.
2. **Exploitation**: Original application code accesses the polluted properties, leading to unexpected behavior.

### Exploitation targets

To see the effect of prototype pollution, we can look at the how the following {{domxref("fetch()")}} call can be changed completely. By default, it is a {{HTTPMethod("GET")}} request, but because we polluted the `Object` object's prototype with two new default properties, the `fetch()` call is now transformed into a {{HTTPMethod("POST")}} request, which could lead to unintended side-affects on the server-side.

```js
// Attacker indirectly causes the following pollution
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
Object.prototype.srcdoc = "<script>alert(1)<\/script>";
```

Configuration objects, like `fetch()`'s {{domxref("RequestInit")}} object in the code example above, or the instantiation of `<iframes>`, or configuration of sanitizers ({{domxref("SanitizerConfig")}} objects), are some of the most sensitive objects and are often targets of prototype pollution attacks. Data objects can also be polluted:

```js
function accessDashboard(user) {
  if (!user.isAdmin) {
    return new Response("Access denied", { status: 403 });
  }
  // show admin page
}
```

If `Object.prototype.isAdmin` is set to `true`, then all users will be treated as admins, leading to a complete bypass of the access control.

### Pollution sources

In order to pollute objects, the attacker needs a way to add arbitrary properties to prototype objects. This may happen as a consequence of [XSS](/en-US/docs/Web/Security/Attacks/XSS), in which the attacker gains direct access to the page's JavaScript execution environment. However, attackers with this level of access can do damage much more directly, so prototype pollution is usually discussed as a _data-only_ attack, where the attacker constructs a payload that is processed by the application code, leading to pollution.

A key attack vector is [`Object.prototype.__proto__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) property, which allows accessing the prototype object of an arbitrary object. You can also reach the prototype via `yourObject.constructor.prototype`. The key code pattern that is a pollution source is dynamic property modification of the following kind:

```js
obj[key1][key2] = value;
```

In this case, if `obj` is an ordinary object, `key1` is `"__proto__"`, and `key2` is some property name such as `"test"`, then the code adds a property called `test` to `Object.prototype`, which is the prototype of all ordinary objects. Even if the [`"__proto__"` setter is disabled](#node.js_flag_--disable-proto), the `constructor.prototype` access pattern can still be used to reach the prototype, which is also `Object.prototype` for ordinary objects:

```js
obj[key1][key2][key3] = value;
```

...where `key1` is `"constructor"`, `key2` is `"prototype"`, and `key3` is some property name such as `"test"`.

To put this line into more context, `key1`, `key2`, and `key3` may be attacker-controlled values. For example, imagine an API endpoint that takes a list of student names, and a list of fields to query for each student, and returns an object mapping each student name to their fields:

```js
function getGrades(request) {
  const grades = {};
  const studentNames = new URL(request.url).searchParams.getAll("students");
  const fields = new URL(request.url).searchParams.getAll("fields");
  for (const name of studentNames) {
    const student = database.lookup(name);
    for (const field of fields) {
      grades[name][field] = student[field];
    }
  }
  return grades;
}
```

Now, if the attacker calls this API with the URL `https://example.com/api?students=__proto__&fields=age`, the code will add a property called `age` to `Object.prototype`, with the value being whatever the `age` property of the `__proto__` student is. It may be `undefined`, but if the attacker can add a student called `__proto__` to the database (e.g., via a separate API call), they can control the value of the `age` property.

Many libraries that do [custom parsing of the URL query strings](https://github.com/BlackFan/client-side-prototype-pollution) are particularly vulnerable, because they allow specifying deep object structures via the query string, and then use dynamic property modification to build the object, such as `?__proto__[test]=test` or `?__proto__.test=test`. Libraries in general are more vulnerable than application code, because they cannot allowlist valid keys, and they often need to use dynamic property modification to be generic.

Note that in [JSON](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON), the `__proto__` property is just a normal property name, so parsing JSON payloads like `{"__proto__": {"test": "value"}}` just creates an object with a property called `__proto__`, and is not immediately problematic. However, if later in the code, the object is merged into another object via [spreading](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`for...in` loops](/en-US/docs/Web/JavaScript/Reference/Statements/for...in), etc., then the implicit property assignment operation will triggering the setter. Usually, this does not actually modify `Object.prototype` because there's only one level of spreading, but it does change the prototype of the target object.

```js
// Just an object with a property called `__proto__`
const options = JSON.parse('{"__proto__": {"test": "value"}}');
const optionsDefaults = { mode: "cors" };
const merged = { ...optionsDefaults, ...options };
// In the process of spreading `options`, we indirectly executed
// merged.__proto__ = { test: "value" }, causing `merged` to have
// a different prototype
console.log(merged.test); // "value"
```

## Defenses against prototype pollution

Defenses against prototype pollution go along two lines: avoiding prototype modifications, and avoiding accessing potentially polluted properties. Generally, the more you can avoid prototype modifications and the more you can lock the object's prototypes, the better your protection against prototype pollution will be. This following section presents some strategies which you can use depending on your situation.

### Create JavaScript objects without a prototype

If you need to pass an object as options (for example, because an API like `fetch()` requires you to use an object), consider creating an [object without a prototype](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), which avoids reading potentially polluted properties. The {{jsxref("Object.create()", "Object.create(null)")}} function let's you do this, as well as the `{ __proto__: null }` syntax. Note that creating objects without a prototype is not the default, so whenever instantiating an object, you need to remember to explicitly create a null-prototype object instead of the regular object initializer (`const myObj = { }`).

```js
Object.prototype.method = "POST";

// Still sends a GET request, because the object has no prototype
fetch("https://example.com", {
  __proto__: null,
  mode: "cors",
});
```

> [!NOTE]
> The `{ __proto__: null }` [prototype setter](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) syntax in object initializers is fully secure, unlike the `obj.__proto__` accessor property.

This approach also avoids pollution because the `__proto__` and `constructor` properties are not present on the object, so dynamic property modification cannot reach the prototype.

### Avoid lookups on the prototype

In code where you access the object's properties, make sure you know that the property exists on the object itself. You can make use of the {{jsxref("Object.hasOwn()")}} check when you are accessing or traversing keys on objects.

Instead of:

```js example-bad
if (!user.isAdmin) {
  return new Response("Access denied", { status: 403 });
}
```

Consider:

```js
if (!Object.hasOwn(user, "isAdmin") || !user.isAdmin) {
  return new Response("Access denied", { status: 403 });
}
```

When iterating, the [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop traverses the prototype. If possible, replace such loops with [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) and {{jsxref("Object.keys()")}} to only visit own keys.

```js
// Looks up the prototype
for (const key in payload) {
  doSomething(payload[key]);
}

// Only visits own keys
for (const key of Object.keys(payload)) {
  doSomething(payload[key]);
}
```

In functions, explicitly set default parameters instead of leaving them undefined. This way, the default parameter values can be used instead of a potential lookup on the prototype chain. Instead of this:

```js example-bad
function doDangerousAction(options = {}) {
  if (!options.enableDangerousAction) {
    return;
  }
}
```

Consider this:

```js
function doDangerousAction(options = { enableDangerousAction: false }) {
  if (!options.enableDangerousAction) {
    return;
  }
}
```

### Lock down built-in objects

High-sensitivity environments may implement a defense known as _realm lockdown_ which prevents any modifications to built-in objects. One example is the [SES](https://github.com/endojs/endo/tree/master/packages/ses#ses) shim for [Hardened JavaScript](https://hardenedjs.org). This is implemented based on the {{jsxref("Object.freeze()")}} function, which prevents extensions and makes existing properties non-writable and non-configurable. Freezing an object is the highest integrity level that JavaScript provides. Alternatively, {{jsxref("Object.seal()")}} allows existing properties changed, as long as they are writable, while {{jsxref("Object.preventExtensions()")}} prevents new properties from being added to an object.

```js
Object.freeze(Object.prototype);
const obj = {};
const key1 = "__proto__";
const key2 = "a";
obj[key1][key2] = 1; // fails silently in non-strict mode
obj.a; // undefined
```

However, note that legitimate prototype modifications may happen, usually to provide a {{glossary("Polyfill")}} implementation. In [non-strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), attempts to modify a frozen object fail silently, while in strict mode, they throw a `TypeError`. To allow polyfills, the polyfill code needs to run before the freeze.

Another caveat with {{jsxref("Object.freeze()")}} is that it doesn't provide a deep freeze by default. If you want true immutability, you need to recursively freeze every property ([example](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#deep_freezing)). Use a library like SES so you don't miss any built-in objects.

### Use `Map` and `Set` instead

When JavaScript objects are used as ad-hoc key-value pairs, consider using a {{jsxref("Map")}} or {{jsxref("Set")}} object instead. These are more modern data structures that are not vulnerable to prototype pollution issues. See the `Map` documentation for a [comparison between Maps and Objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps). The {{jsxref("Map.prototype.get()")}} method will always only return entries within the `Map`.

```js
// Assume Object got polluted somehow
Object.prototype.admin = true;

const config = new Map();
config.set("admin", false);

config.admin; // true
config.get("admin"); // false
```

### Validate user input

Always validate user input with validators, such as [ajv](https://ajv.js.org) and [Zod](https://zod.dev/), to ensure that the input data structure contains the appropriate properties with the appropriate types. To mitigate the prototype pollution attack, reject unneeded properties by setting `additionalProperties` to `false` in the schema. Using a schema also allows setting default values for missing properties, which avoids prototype lookups.

You should avoid dynamic property modification (of the form `obj[key] = value`) unless you are able to validate the `key` values. If you are in this situation, you could rule out `__proto__`, `constructor`, `prototype` as keys in your validation.

### Node.js flag `--disable-proto`

If you are in a Node.js environment, you can disable `Object.prototype.__proto__` with the `--disable-proto=MODE` option where `MODE` is either `delete` (the property is removed entirely), or `throw` (accesses to the property throws an exception with the code `ERR_PROTO_ACCESS`). Use `delete Object.prototype.__proto__` in non-Node environments for the same effect.

This doesn't protect you from prototype pollution generally (because `constructor.prototype` is still available), but it does remove one entry point to it.

## Defense summary checklist

When creating objects:

- Evaluate if an object is needed or if a {{jsxref("Map")}} or {{jsxref("Set")}} would be the better choice.
- When passing objects to other functions, such as `FetchInit` or `SanitizerConfig`, either ensure that all keys are defined or use [null-prototype objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects).
- When creating objects that will be dynamically modified later (e.g., via `obj[key] = value`), also create them as null-prototype objects.

When accepting user input, either via URL query strings, JSON payloads, or function parameters:

- Always validate user input with a schema validator. Reject unrecognized properties and set default values for missing properties.
- Function that receive objects as parameters should either make sure all expected keys are defined on the object itself, or first check if the key exists on the object itself (e.g., via {{jsxref("Object.hasOwn()")}}) before accessing it.
- Prefer [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) and {{jsxref("Object.keys()")}} over [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loops.

For built-in and third party objects:

- Consider freezing built-in and third party objects, for example by using the [SES](https://github.com/endojs/endo/tree/master/packages/ses#ses) shim.

Runtime defenses:

- Use `--disable-proto` in Node.js to disable `Object.prototype.__proto__`.
- Use `delete Object.prototype.__proto__` in non-Node environments.

## See also

- [OWASP: Prototype pollution prevention cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Prototype_Pollution_Prevention_Cheat_Sheet.html#other-resources)
