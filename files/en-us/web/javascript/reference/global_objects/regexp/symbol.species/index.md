---
title: RegExp[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species
page-type: javascript-static-accessor-property
browser-compat: javascript.builtins.RegExp.@@species
---

{{JSRef}}

The **`RegExp[Symbol.species]`** static accessor property returns the constructor used to construct copied regular expressions in certain `RegExp` methods.

> **Warning:** The existence of `[Symbol.species]` allows execution of arbitrary code and may create security vulnerabilities. It also makes certain optimizations much harder. Engine implementers are [investigating whether to remove this feature](https://github.com/tc39/proposal-rm-builtin-subclassing). Avoid relying on it if possible.

{{EmbedInteractiveExample("pages/js/regexp-getregexp-@@species.html")}}

## Syntax

```js-nolint
RegExp[Symbol.species]
```

### Return value

The value of the constructor (`this`) on which `get [Symbol.species]` was called. The return value is used to construct copied `RegExp` instances.

## Description

The `[Symbol.species]` accessor property returns the default constructor for `RegExp` objects. Subclass constructors may override it to change the constructor assignment. The default implementation is basically:

```js
// Hypothetical underlying implementation for illustration
class RegExp {
  static get [Symbol.species]() {
    return this;
  }
}
```

Because of this polymorphic implementation, `[Symbol.species]` of derived subclasses would also return the constructor itself by default.

```js
class SubRegExp extends SubRegExp {}
SubRegExp[Symbol.species] === SubRegExp; // true
```

Some `RegExp` methods create a copy of the current regex instance before running {{jsxref("RegExp/exec", "exec()")}}, so that side effects such as changes to {{jsxref("RegExp/lastIndex", "lastIndex")}} are not retained. The `[Symbol.species]` property is used to determine the constructor of the new instance. The methods that copy the current regex instance are:

- [`[Symbol.matchAll]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`[Symbol.split]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)

## Examples

### Species in ordinary objects

The `[Symbol.species]` property returns the default constructor function, which is the `RegExp` constructor for `RegExp` objects:

```js
RegExp[Symbol.species]; // function RegExp()
```

### Species in derived objects

In an instance of a custom `RegExp` subclass, such as `MyRegExp`, the `MyRegExp` species is the `MyRegExp` constructor. However, you might want to overwrite this, in order to return parent `RegExp` objects in your derived class methods:

```js
class MyRegExp extends RegExp {
  // Overwrite MyRegExp species to the parent RegExp constructor
  static get [Symbol.species]() {
    return RegExp;
  }
}
```

Or you can use this to observe the copying process:

```js
class MyRegExp extends RegExp {
  constructor(...args) {
    console.log("Creating a new MyRegExp instance with args:", args);
    super(...args);
  }
  static get [Symbol.species]() {
    console.log("Copying MyRegExp");
    return this;
  }
  exec(value) {
    console.log("Executing with lastIndex:", this.lastIndex);
    return super.exec(value);
  }
}

Array.from("aabbccdd".matchAll(new MyRegExp("[ac]", "g")));
// Creating a new MyRegExp instance with args: [ '[ac]', 'g' ]
// Copying MyRegExp
// Creating a new MyRegExp instance with args: [ MyRegExp /[ac]/g, 'g' ]
// Executing with lastIndex: 0
// Executing with lastIndex: 1
// Executing with lastIndex: 2
// Executing with lastIndex: 5
// Executing with lastIndex: 6
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("RegExp")}}
- {{jsxref("Symbol.species")}}
