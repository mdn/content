---
title: JavaScript data types and data structures
slug: Web/JavaScript/Data_structures
tags:
  - Beginner
  - Guide
  - JavaScript
  - Types
---
{{jsSidebar("More")}}

Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

## Dynamic typing

JavaScript is a *loosely typed* and *dynamic* language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

```js
let foo = 42;    // foo is now a number
foo     = 'bar'; // foo is now a string
foo     = true;  // foo is now a boolean
```

## JavaScript types

The set of types in the JavaScript language consists of [_primitive values_](#primitive_values) and [_objects_](#objects).

- [Primitive values](#primitive_values) (immutable datum represented directly at the lowest level of the language)
  - [Boolean type](#boolean_type)
  - [Null type](#null_type)
  - [Undefined type](#undefined_type)
  - [Number type](#number_type)
  - [BigInt type](#bigint_type)
  - [String type](#string_type)
  - [Symbol type](#symbol_type)

- [Objects](#objects) (collections of properties)

## Primitive values

All types except objects define immutable values (that is, values which can't be changed). For example, Strings are immutable. We refer to values of these types as "_primitive values_".

### Boolean type

Boolean represents a logical entity and can have two values: `true` and `false`. See [Boolean](/en-US/docs/Glossary/Boolean) and {{jsxref("Boolean")}} for more details.

### Null type

The Null type has exactly one value: `null`. See [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) and [Null](/en-US/docs/Glossary/Null) for more details.

### Undefined type

A variable that has not been assigned a value has the value `undefined`. See {{jsxref("undefined")}} and [Undefined](/en-US/docs/Glossary/undefined) for more details.

### Numeric types

ECMAScript has two built-in numeric types: [Number](#number-type) and [BigInt](#bigint-type) — along with the related value [NaN](#nan).

#### Number type

The Number type is a [double-precision 64-bit binary format IEEE 754 value](https://en.wikipedia.org/wiki/Double_precision_floating-point_format). It is capable of storing positive floating-point numbers between 2^-1074 ({{jsxref("Number.MIN_VALUE")}}) and 2^1024 ({{jsxref("Number.MAX_VALUE")}}) as well as negative floating-point numbers between -(2^-1074) and -(2^1024), but it can only safely store integers in the range -(2^53 − 1) ({{jsxref("Number.MIN_SAFE_INTEGER")}}) to 2^53 − 1 ({{jsxref("Number.MAX_SAFE_INTEGER")}}).

> **Note:** You can check if a number is within the range of safe integers using {{jsxref("Number.isSafeInteger()")}}. Outside the range from {{jsxref("Number.MIN_SAFE_INTEGER")}} to {{jsxref("Number.MAX_SAFE_INTEGER")}}, JavaScript can no longer safely represent integers; they will instead be represented by a double-precision floating point approximation.

Values outside the range ±(2^-1074 to 2^1024) are automatically converted:

- Positive values greater than {{jsxref("Number.MAX_VALUE")}} are converted to `+Infinity`.
- Positive values smaller than {{jsxref("Number.MIN_VALUE")}} are converted to `+0`.
- Negative values smaller than -{{jsxref("Number.MAX_VALUE")}} are converted to `-Infinity`.
- Negative values greater than -{{jsxref("Number.MIN_VALUE")}} are converted to `-0`.

`+Infinity` and `-Infinity` behave similarly to mathematical infinity, but with some slight differences; see {{jsxref("Number.POSITIVE_INFINITY")}} and {{jsxref("Number.NEGATIVE_INFINITY")}} for details.

The Number type has only one integer with multiple representations: `0` is represented as both `-0` and `+0` (where `0` is an alias for `+0`). In practice, there is almost no difference between the different representations; for example, `+0 === -0` is `true`. However, you are able to notice this when you divide by zero:

```js
console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
```

Although a number often represents only its value, JavaScript provides {{jsxref("Operators", "binary (bitwise) operators")}}.

> **Note:** Although bitwise operators _can_ be used to represent several Boolean values within a single number using [bit masking](https://en.wikipedia.org/wiki/Mask_%28computing%29), this is usually considered a bad practice. JavaScript offers other means to represent a set of Booleans (like an array of Booleans, or an object with Boolean values assigned to named properties). Bit masking also tends to make the code more difficult to read, understand, and maintain.

It may be necessary to use such techniques in very constrained environments, like when trying to cope with the limitations of local storage, or in extreme cases (such as when each bit over the network counts). This technique should only be considered when it is the last measure that can be taken to optimize size.

#### BigInt type

The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.

A BigInt is created by appending `n` to the end of an integer or by calling the constructor.

You can obtain the largest safe value that can be incremented with Numbers by using the constant {{jsxref("Number.MAX_SAFE_INTEGER")}}. With the introduction of BigInts, you can operate with numbers beyond the {{jsxref("Number.MAX_SAFE_INTEGER")}}.

This example demonstrates, where incrementing the {{jsxref("Number.MAX_SAFE_INTEGER")}} returns the expected result:

```js
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992
```

You can use the operators `+`, `*`, `-`, `**`, and `%` with BigInts—just like with Numbers. A BigInt is not strictly equal to a Number, but it is loosely so.

A BigInt behaves like a Number in cases where it is converted to boolean: `if`, `||`, `&&`, `Boolean`, `!`.

`BigInt`s cannot be operated on interchangeably with Numbers. Instead a {{jsxref("TypeError")}} will be thrown.

#### NaN

{{jsxref("NaN")}} ("**N**ot a **N**umber") is typically encountered when the result of an arithmetic operation cannot be expressed as a number. It is also the only value in JavaScript that is not equal to itself.

### String type

JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index `0`, the next at index `1`, and so on. The length of a String is the number of elements in it.

JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it.

However, it is still possible to create another string based on an operation on the original string. For example:

- A substring of the original by picking individual letters or using {{jsxref("String.substr()")}}.
- A concatenation of two strings using the concatenation operator (`+`) or {{jsxref("String.concat()")}}.

#### Beware of "stringly-typing" your code!

It can be tempting to use strings to represent complex data. Doing this comes with short-term benefits:

- It is easy to build complex strings with concatenation.
- Strings are easy to debug (what you see printed is always what is in the string).
- Strings are the common denominator of a lot of APIs ([input fields](/en-US/docs/Web/API/HTMLInputElement), [local storage](/en-US/docs/Web/API/Web_Storage_API) values, [`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest) responses when using `responseText`, etc.) and it can be tempting to only work with strings.

With conventions, it is possible to represent any data structure in a string. This does not make it a good idea. For instance, with a separator, one could emulate a list (while a JavaScript array would be more suitable). Unfortunately, when the separator is used in one of the "list" elements, then, the list is broken. An escape character can be chosen, etc. All of this requires conventions and creates an unnecessary maintenance burden.

Use strings for textual data. When representing complex data, _parse_ strings, and use the appropriate abstraction.

### Symbol type

A Symbol is a **unique** and **immutable** primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called "atoms".

For more details see the {{jsxref("Symbol")}} reference page.

## Objects

In computer science, an object is a value in memory which is possibly referenced by an [identifier](/en-US/docs/Glossary/Identifier).

### Properties

In JavaScript, objects can be seen as a collection of properties. With the [object literal syntax](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals), a limited set of properties are initialized; then properties can be added and removed. Property values can be values of any type, including other objects, which enables building complex data structures. Properties are identified using _key_ values. A _key_ value is either a {{Glossary("String", "String value")}} or a [Symbol value](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol).

There are two types of object properties: The [_data_ property](#data_property) and the [_accessor_ property](#accessor_property). Each property has corresponding _attributes_. Each attribute is accessed internally by the JavaScript engine, but you can set them through {{jsxref("Object.defineProperty()")}}, or read them through {{jsxref("Object.getOwnPropertyDescriptor()")}}. You can read more about the various nuances on the {{jsxref("Object.defineProperty()")}} page.

#### Data property

Data properties associate a key with a value. It can be described by the following attributes:

- `value`
  - : The value retrieved by a get access of the property. Can be any JavaScript value.
- `writable`
  - : A boolean value indicating if the property can be changed with an assignment.
- `enumerable`
  - : A boolean value indicating if the property can be enumerated by a [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop. See also [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) for how enumerability interacts with other functions and syntaxes.
- `configurable`
  - : A boolean value indicating if the property can be deleted, can be changed to an accessor property, and can have its attributes changed.

#### Accessor property

Associates a key with one of two accessor functions (`get` and `set`) to retrieve or store a value.

> **Note:** It's important to recognize it's accessor _property_ — not accessor _method_. We can give a JavaScript object class-like accessors by using a function as a value — but that doesn't make the object a class.

An accessor property has the following attributes:

- `get`
  - : A function called with an empty argument list to retrieve the property value whenever a get access to the value is performed. See also [getters](/en-US/docs/Web/JavaScript/Reference/Functions/get). May be `undefined`.
- `set`
  - : A function called with an argument that contains the assigned value. Executed whenever a specified property is attempted to be changed. See also [setters](/en-US/docs/Web/JavaScript/Reference/Functions/set). May be `undefined`.
- `enumerable`
  - : A boolean value indicating if the property can be enumerated by a [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop. See also [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) for how enumerability interacts with other functions and syntaxes.
- `configurable`
  - : A boolean value indicating if the property can be deleted, can be changed to a data property, and can have its attributes changed.

### "Normal" objects, and functions

A JavaScript object is a mapping between _keys_ and _values_. Keys are strings (or Symbols), and _values_ can be anything. This makes objects a natural fit for [hashmaps](https://en.wikipedia.org/wiki/Hash_table).

Functions are regular objects with the additional capability of being _callable_.

### Dates

When representing dates, the best choice is to use the built-in [`Date` utility](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) in JavaScript.

### Indexed collections: Arrays and typed Arrays

[Arrays](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are regular objects for which there is a particular relationship between integer-keyed properties and the `length` property.

Additionally, arrays inherit from `Array.prototype`, which provides to them a handful of convenient methods to manipulate arrays. For example, [`indexOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) (searching a value in the array) or [`push()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) (adding an element to the array), and so on. This makes Arrays a perfect candidate to represent lists or sets.

[Typed Arrays](/en-US/docs/Web/JavaScript/Typed_arrays) present an array-like view of an underlying binary data buffer, and offer many methods that have similar semantics to the array counterparts. "Typed array" is an umbrella term for a range of data structures, including `Int8Array`, `Float32Array`, etc. Check the [typed array](/en-US/docs/Web/JavaScript/Typed_arrays) page for more information.

### Keyed collections: Maps, Sets, WeakMaps, WeakSets

These data structures take object references as keys. {{jsxref("Set")}} and {{jsxref("WeakSet")}} represent a set of objects, while {{jsxref("Map")}} and {{jsxref("WeakMap")}} associate a value to an object.

The difference between `Map`s and `WeakMap`s is that in the former, object keys can be enumerated over. This allows garbage collection optimizations in the latter case.

You could implement `Map`s and `Set`s yourself. However, since objects cannot be compared (in the sense of `<` "less than", for instance), neither does the engine expose its hash function for objects, look-up performance would necessarily be linear. Native implementations of them (including `WeakMap`s) can have look-up performance that is approximately logarithmic to constant time.

Usually, to bind data to a DOM node, one could set properties directly on the object, or use `data-*` attributes. This has the downside that the data is available to any script running in the same context. `Map`s and `WeakMap`s make it easy to _privately_ bind data to an object.

### Structured data: JSON

JSON (**J**ava**S**cript **O**bject **N**otation) is a lightweight data-interchange format, derived from JavaScript, but used by many programming languages. JSON builds universal data structures.

See [JSON](/en-US/docs/Glossary/JSON) and {{jsxref("JSON")}} for more details.

### More objects in the standard library

JavaScript has a standard library of built-in objects.

Please have a look at the [reference](/en-US/docs/Web/JavaScript/Reference/Global_Objects) to find out about more objects.

## Determining types using the `typeof` operator

The `typeof` operator can help you to find the type of your variable.

Please read the [reference page](/en-US/docs/Web/JavaScript/Reference/Operators/typeof) for more details and edge cases.

## See also

- [JavaScript Data Structures and Algorithms by Oleksii Trekhleb](https://github.com/trekhleb/javascript-algorithms)
- [Nicholas Zakas collection of common data structure and common algorithms in JavaScript.](https://github.com/humanwhocodes/computer-science-in-javascript)
- [Search Tre(i)es implemented in JavaScript](https://github.com/monmohan/dsjslib)
- [Data Types and Values in the ECMAScript specification](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)
