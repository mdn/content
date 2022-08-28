---
title: typeof
slug: Web/JavaScript/Reference/Operators/typeof
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
  - Unary
browser-compat: javascript.operators.typeof
---
{{JSSidebar("Operators")}}

The **`typeof`** operator returns a string indicating the type
of the unevaluated operand.

{{EmbedInteractiveExample("pages/js/expressions-typeof.html")}}

## Syntax

```js
typeof operand
```

### Parameters

- `operand`
  - : An expression representing the object or [primitive](/en-US/docs/Glossary/Primitive) whose type is to be returned.

## Description

The following table summarizes the possible return values of `typeof`. For
more information about types and primitives, see also the [JavaScript data structure](/en-US/docs/Web/JavaScript/Data_structures) page.

| Type                                                                                     | Result                                 |
| ---------------------------------------------------------------------------------------- | -------------------------------------- |
| [Undefined](/en-US/docs/Glossary/undefined)                                              | `"undefined"`                          |
| [Null](/en-US/docs/Glossary/Null)                                                        | `"object"` (see [below](#typeof_null)) |
| [Boolean](/en-US/docs/Glossary/Boolean)                                                  | `"boolean"`                            |
| [Number](/en-US/docs/Glossary/Number)                                                    | `"number"`                             |
| [BigInt](/en-US/docs/Glossary/BigInt)                                                    | `"bigint"`                             |
| [String](/en-US/docs/Glossary/String)                                                    | `"string"`                             |
| [Symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)                     | `"symbol"`                             |
| [Function](/en-US/docs/Glossary/Function) (implements [[Call]] in ECMA-262 terms; [classes](/en-US/docs/Web/JavaScript/Reference/Statements/class) are functions as well) | `"function"`                           |
| Any other object                                                                         | `"object"`                             |

> **Note:** ECMAScript 2019 and older permitted implementations to have
> `typeof` return any implementation-defined string value for non-callable
> non-standard exotic objects.
>
> The only known browser to have actually taken advantage of this is old Internet
> Explorer (see [below](#ie-specific_notes)).

## Examples

### Basic usage

```js
// Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof 42 === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // Despite being "Not-A-Number"
typeof Number('1') === 'number';      // Number tries to parse things into numbers
typeof Number('shoe') === 'number';   // including values that cannot be type coerced to a number

typeof 42n === 'bigint';

// Strings
typeof '' === 'string';
typeof 'bla' === 'string';
typeof `template literal` === 'string';
typeof '1' === 'string'; // note that a number within a string is still typeof string
typeof (typeof 1) === 'string'; // typeof always returns a string
typeof String(1) === 'string'; // String converts anything into a string, safer than toString

// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // Boolean() will convert values based on if they're truthy or falsy
typeof !!(1) === 'boolean'; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// Symbols
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'

// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';

// Objects
typeof { a: 1 } === 'object';

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';
typeof /regex/ === 'object'; // See Regular expressions section for historical results

// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';

// Functions
typeof function () {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';
```

### typeof null

```js
// This stands since the beginning of JavaScript
typeof null === 'object';
```

In the first implementation of JavaScript, JavaScript values were represented as a type
tag and a value. The type tag for objects was `0`. `null` was
represented as the NULL pointer (`0x00` in most platforms). Consequently,
`null` had `0` as type tag, hence the `typeof` return
value `"object"`. ([reference](https://2ality.com/2013/10/typeof-null.html))

A fix was proposed for ECMAScript (via an opt-in), but
[was rejected](https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null).
It would have resulted in `typeof null === 'null'`.

### Using new operator

```js
// All constructor functions, with the exception of the Function constructor, will always be typeof 'object'
const str = new String('String');
const num = new Number(100);

typeof str; // It will return 'object'
typeof num; // It will return 'object'

const func = new Function();

typeof func; // It will return 'function'
```

### Need for parentheses in Syntax

The `typeof` operator has higher [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) than binary operators like addition (`+`). Therefore, parentheses are needed to evaluate the type of an addition result.

```js
// Parentheses can be used for determining the data type of expressions.
const someData = 99;

typeof someData + ' Wisen'; // 'number Wisen'
typeof (someData + ' Wisen'); // 'string'
```

### Regular expressions

Callable regular expressions were a non-standard addition in some browsers.

```js
typeof /s/ === 'function'; // Chrome 1-12 Non-conform to ECMAScript 5.1
typeof /s/ === 'object';   // Firefox 5+  Conform to ECMAScript 5.1
```

### Errors

`typeof` is generally always guaranteed to return a string
for any operand it is supplied with. Even with undeclared identifiers, `typeof` will return `'undefined'` instead of throwing an error.

However, using `typeof` on lexical declarations ({{JSxRef("Statements/let", "let")}} {{JSxRef("Statements/const", "const")}}, and [`class`](/en-US/docs/Web/JavaScript/Reference/Statements/class)) in the same block before the line of declaration will throw a {{JSxRef("ReferenceError")}}. Block scoped variables are in a _[temporal dead zone](/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)_ from the start of the block until the initialization is processed, during which it will throw an error if accessed.

```js
typeof undeclaredVariable === 'undefined';

typeof newLetVariable; // ReferenceError
typeof newConstVariable; // ReferenceError
typeof newClass; // ReferenceError

let newLetVariable;
const newConstVariable = 'hello';
class newClass{}
```

### Exceptions

All current browsers expose a non-standard host object [`document.all`](/en-US/docs/Web/API/Document/all)
with type `undefined`.

```js
typeof document.all === 'undefined';
```

Although the specification allows custom type tags for non-standard exotic objects, it
requires those type tags to be different from the predefined ones. The case of
`document.all` having type `'undefined'` is classified in the web
standards as a "willful violation" of the original ECMA JavaScript standard.

### Custom method that gets a more specific type

`typeof` is very useful, but it's not as versatile as might be required. For
example, `typeof []` , is `'object'`, as well as
`typeof new Date()`, `typeof /abc/`, etc.

For greater specificity in checking types, here we present a custom `type(value)` function, which mostly mimics the behavior of `typeof`, but for non-primitives (i.e. objects and functions), it returns a more granular type name where possible.

```js
function type(value) {
  if (value === null) {
    return "null";
  }
  const baseType = typeof value;
  // Primitive types
  if (!["object", "function"].includes(baseType)) {
    return baseType;
  }

  // Symbol.toStringTag often specifies the "display name" of the
  // object's class. It's used in Object.prototype.toString().
  const tag = value[Symbol.toStringTag];
  if (typeof tag === "string") {
    return tag;
  }

  // If it's a function whose source code starts with the "class" keyword
  if (
    baseType === "function" &&
    Function.prototype.toString.call(value).startsWith("class")
  ) {
    return "class";
  }

  // The name of the constructor; for example `Array`, `GeneratorFunction`,
  // `Number`, `String`, `Boolean` or `MyCustomClass`
  const className = value.constructor.name;
  if (typeof className === "string" && className !== "") {
    return className;
  }

  // At this point there's no robust way to get the type of value,
  // so we use the base implementation.
  return baseType;
}
```

For checking non-existent variables that would otherwise throw
a {{JSxRef("ReferenceError")}}, use `typeof nonExistentVar === 'undefined'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### IE-specific notes

On IE 6, 7, and 8 a lot of host objects are objects and not functions. For example:

```js
typeof alert === 'object'
```

Some non-standard IE properties return other values
([tc39/ecma262#1440 (comment)](https://github.com/tc39/ecma262/issues/1440#issuecomment-461963872)):

```js
typeof window.external.AddSearchProvider === "unknown";
typeof window.external.IsSearchProviderInstalled === "unknown";
```

## See also

- {{JSxRef("Operators/instanceof", "instanceof")}}
- [`document.all` willful violation of the standard](https://github.com/tc39/ecma262/issues/668)
