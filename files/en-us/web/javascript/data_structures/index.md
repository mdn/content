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

JavaScript is a *loosely typed* and *dynamic* language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

```js
let foo = 42;    // foo is now a number
foo     = 'bar'; // foo is now a string
foo     = true;  // foo is now a boolean
```

## Data and Structure types

The latest ECMAScript standard defines nine types:

- Six **Data Types** that are [primitives](/en-US/docs/Glossary/Primitive), checked by [`typeof`](/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator:

  - [`undefined`](/en-US/docs/Glossary/undefined) : `typeof instance === "undefined"`
  - [Boolean](/en-US/docs/Glossary/Boolean) : `typeof instance === "boolean"`
  - [Number](/en-US/docs/Glossary/Number) : `typeof instance === "number"`
  - [String](/en-US/docs/Glossary/String) : `typeof instance === "string"`
  - [BigInt](/en-US/docs/Glossary/BigInt) : `typeof instance === "bigint"`
  - [Symbol](/en-US/docs/Glossary/Symbol) : `typeof instance === "symbol"`

- **Structural Types**:

  - [Object](/en-US/docs/Glossary/Object) : `typeof instance === "object"`. Special non-data but **Structural type** for any [constructed](/en-US/docs/Learn/JavaScript/Objects#the_constructor) object instance also used as data structures: `new {{jsxref("Object")}}`, `new {{jsxref("Array")}}`, `new {{jsxref("Map")}}`, `new {{jsxref("Set")}}`, `new {{jsxref("WeakMap")}}`, `new {{jsxref("WeakSet")}}`, `new {{jsxref("Date")}}` and almost everything made with [`new` keyword](/en-US/docs/Web/JavaScript/Reference/Operators/new);
  - [Function](/en-US/docs/Glossary/Function) : a non-data structure, though it also answers for `typeof` operator: `typeof instance === "function"`. This is merely a special shorthand for Functions, though every Function constructor is derived from `Object` constructor.

- **Structural Root** Primitive:

  - [`null`](/en-US/docs/Glossary/Null) : `typeof instance === "object"`. Special [primitive](/en-US/docs/Glossary/Primitive) type having additional usage for its value: if object is not inherited, then `null` is shown;

Keep in mind the only valuable purpose of `typeof` operator usage is checking the Data Type. If we wish to check any Structural Type derived from `Object` it is pointless to use `typeof` for that, as we will always receive `"object"`. The proper way to check what sort of Object we are using is the {{jsxref("Operators/instanceof", "instanceof")}} keyword. But even in that case there might be misconceptions.

As we can see the meaning of every primitive type is obvious except of `undefined` and `null` which are almost the same. This happens as the concept of Time is strictly connected with the purpose of algorithms. We can purport something that does not yet exist or does not exist anymore: **`undefined`**. But when we wish to be able to represent something that exists being empty, we have to invent another keyword. And that is what **`null`** stands for: the beginning of structural meaning.

## Primitive values

All types except objects define immutable values (that is, values which can't be changed). For example (and unlike in C), Strings are immutable. We refer to values of these types as "_primitive values_".

### Boolean type

Boolean represents a logical entity and can have two values: `true` and `false`. See [Boolean](/en-US/docs/Glossary/Boolean) and {{jsxref("Boolean")}} for more details.

### Null type

The Null type has exactly one value: `null`. See {{jsxref("null")}} and [Null](/en-US/docs/Glossary/Null) for more details.

### Undefined type

A variable that has not been assigned a value has the value `undefined`. See {{jsxref("undefined")}} and [Undefined](/en-US/docs/Glossary/undefined) for more details.

### Number type

ECMAScript has two built-in numeric types: **Number** and **BigInt** (see below).

The Number type is a [double-precision 64-bit binary format IEEE 754 value](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) (numbers between -(2^53 − 1) and 2^53 − 1). In addition to representing floating-point numbers, the number type has three symbolic values: `+Infinity`, `-Infinity`, and {{jsxref("NaN")}} ("**N**ot a **N**umber").

To check for the largest available value or smallest available value within {{jsxref("Infinity", "±Infinity")}}, you can use the constants {{jsxref("Number.MAX_VALUE")}} or {{jsxref("Number.MIN_VALUE")}}.

> **Note:** Starting with ECMAScript 2015, you are also able to check if a number is in the double-precision floating-point number range using {{jsxref("Number.isSafeInteger()")}} as well as {{jsxref("Number.MAX_SAFE_INTEGER")}} and {{jsxref("Number.MIN_SAFE_INTEGER")}}.
>
> Beyond this range, integers in JavaScript are not safe anymore and will be a double-precision floating point approximation of the value.

The number type has only one integer with two representations: `0` is represented as both `-0` and `+0`. (`0` is an alias for `+0`.)

In the praxis, this has almost no impact. For example, `+0 === -0` is `true`. However, you are able to notice this when you divide by zero:

```js
> 42 / +0
Infinity
> 42 / -0
-Infinity
```

Although a number often represents only its value, JavaScript provides {{jsxref("Operators", "binary (bitwise) operators")}}.

> **Note:** Although bitwise operators _can_ be used to represent several Boolean values within a single number using [bit masking](https://en.wikipedia.org/wiki/Mask_%28computing%29), this is usually considered a bad practice. JavaScript offers other means to represent a set of Booleans (like an array of Booleans, or an object with Boolean values assigned to named properties). Bit masking also tends to make the code more difficult to read, understand, and maintain.

It may be necessary to use such techniques in very constrained environments, like when trying to cope with the limitations of local storage, or in extreme cases (such as when each bit over the network counts). This technique should only be considered when it is the last measure that can be taken to optimize size.

### BigInt type

The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.

A BigInt is created by appending `n` to the end of an integer or by calling the constructor.

You can obtain the largest safe value that can be incremented with Numbers by using the constant {{jsxref("Number.MAX_SAFE_INTEGER")}}. With the introduction of BigInts, you can operate with numbers beyond the {{jsxref("Number.MAX_SAFE_INTEGER")}}.

This example demonstrates, where incrementing the {{jsxref("Number.MAX_SAFE_INTEGER")}} returns the expected result:

```js
> const x = 2n ** 53n;
9007199254740992n
> const y = x + 1n;
9007199254740993n
```

You can use the operators `+`, `*`, `-`, `**`, and `%` with BigInts—just like with Numbers. A BigInt is not strictly equal to a Number, but it is loosely so.

A BigInt behaves like a Number in cases where it is converted to boolean: `if`, `||`, `&&`, `Boolean`, `!`.

`BigInt`s cannot be operated on interchangeably with Numbers. Instead a {{jsxref("TypeError")}} will be thrown.

### String type

JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index `0`, the next at index `1`, and so on. The length of a String is the number of elements in it.

Unlike some programming languages (such as C), JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it.

However, it is still possible to create another string based on an operation on the original string. For example:

- A substring of the original by picking individual letters or using {{jsxref("String.substr()")}}.
- A concatenation of two strings using the concatenation operator (`+`) or {{jsxref("String.concat()")}}.

#### Beware of "stringly-typing" your code!

It can be tempting to use strings to represent complex data. Doing this comes with short-term benefits:

- It is easy to build complex strings with concatenation.
- Strings are easy to debug (what you see printed is always what is in the string).
- Strings are the common denominator of a lot of APIs ([input fields](/en-US/docs/Web/API/HTMLInputElement), [local storage](/en-US/docs/Web/API/Web_Storage_API) values, [`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest "Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.") responses when using `responseText`, etc.) and it can be tempting to only work with strings.

With conventions, it is possible to represent any data structure in a string. This does not make it a good idea. For instance, with a separator, one could emulate a list (while a JavaScript array would be more suitable). Unfortunately, when the separator is used in one of the "list" elements, then, the list is broken. An escape character can be chosen, etc. All of this requires conventions and creates an unnecessary maintenance burden.

Use strings for textual data. When representing complex data, _parse_ strings, and use the appropriate abstraction.

### Symbol type

A Symbol is a **unique** and **immutable** primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called "atoms".

For more details see [Symbol](/en-US/docs/Glossary/Symbol) and the {{jsxref("Symbol")}} object wrapper in JavaScript.

## Objects

In computer science, an object is a value in memory which is possibly referenced by an [identifier](/en-US/docs/Glossary/Identifier).

### Properties

In JavaScript, objects can be seen as a collection of properties. With the [object literal syntax](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals), a limited set of properties are initialized; then properties can be added and removed. Property values can be values of any type, including other objects, which enables building complex data structures. Properties are identified using _key_ values. A _key_ value is either a {{Glossary("String", "String value")}} or a {{Glossary("Symbol", "Symbol value")}}.

There are two types of object properties: The [_data_ property](#data_property) and the [_accessor_ property](#accessor_property).

> **Note:** Each property has corresponding *attributes.* Attributes are used internally by the JavaScript engine, so you cannot directly access them. That's why attributes are listed in double square brackets, rather than single.
>
> See {{jsxref("Object.defineProperty()")}} to learn more.

#### Data property

Associates a key with a value, and has the following attributes:

<table class="standard-table">
  <caption>
    Attributes of a data property
  </caption>
  <thead>
    <tr>
      <th scope="col">Attribute</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
      <th scope="col">Default value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[[Value]]</td>
      <td>Any JavaScript type</td>
      <td>The value retrieved by a get access of the property.</td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td>[[Writable]]</td>
      <td>Boolean</td>
      <td>
        If <code>false</code>, the property's [[Value]] cannot be changed.
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>[[Enumerable]]</td>
      <td>Boolean</td>
      <td>
        <p>
          If <code>true</code>, the property will be enumerated in
          <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in"
            >for...in</a
          >
          loops.<br />See also
          <a
            href="/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties"
            >Enumerability and ownership of properties</a
          >.
        </p>
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>[[Configurable]]</td>
      <td>Boolean</td>
      <td>
        If <code>false</code>, the property cannot be deleted, cannot be changed
        to an accessor property, and attributes other than [[Value]] and
        [[Writable]] cannot be changed.
      </td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

| Attribute  | Type    | Description                                           |
| ---------- | ------- | ----------------------------------------------------- |
| Read-only  | Boolean | Reversed state of the ES5 [[Writable]] attribute.     |
| DontEnum   | Boolean | Reversed state of the ES5 [[Enumerable]] attribute.   |
| DontDelete | Boolean | Reversed state of the ES5 [[Configurable]] attribute. |

#### Accessor property

Associates a key with one of two accessor functions (`get` and `set`) to retrieve or store a value.

> **Note:** It’s important to recognize it’s accessor _property_ — not accessor _method_. We can give a JavaScipt object class-like accessors by using a function as a value — but that doesn't make the object a class.

An accessor property has the following attributes:

| Attribute        | Type                           | Description                                                                                                                                                                                                              | Default value |
| ---------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| [[Get]]          | Function object or `undefined` | The function is called with an empty argument list and retrieves the property value whenever a get access to the value is performed. See also [`get`](/en-US/docs/Web/JavaScript/Reference/Functions/get).               | `undefined`   |
| [[Set]]          | Function object or `undefined` | The function is called with an argument that contains the assigned value and is executed whenever a specified property is attempted to be changed. See also [`set`](/en-US/docs/Web/JavaScript/Reference/Functions/set). | `undefined`   |
| [[Enumerable]]   | Boolean                        | If `true`, the property will be enumerated in [for...in](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loops.                                                                                                | `false`       |
| [[Configurable]] | Boolean                        | If `false`, the property can't be deleted and can't be changed to a data property.                                                                                                                                       | `false`       |

### "Normal" objects, and functions

A JavaScript object is a mapping between _keys_ and _values_. Keys are strings (or Symbols), and _values_ can be anything. This makes objects a natural fit for [hashmaps](https://en.wikipedia.org/wiki/Hash_table).

Functions are regular objects with the additional capability of being _callable_.

### Dates

When representing dates, the best choice is to use the built-in [`Date` utility](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) in JavaScript.

### Indexed collections: Arrays and typed Arrays

[Arrays](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are regular objects for which there is a particular relationship between integer-keyed properties and the `length` property.

Additionally, arrays inherit from `Array.prototype`, which provides to them a handful of convenient methods to manipulate arrays. For example, [`indexOf`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) (searching a value in the array) or [`push`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) (adding an element to the array), and so on. This makes Arrays a perfect candidate to represent lists or sets.

[Typed Arrays](/en-US/docs/Web/JavaScript/Typed_arrays) are new to JavaScript with ECMAScript 2015, and present an array-like view of an underlying binary data buffer. The following table helps determine the equivalent C data types:

| Type                                     | Value Range                   | Size in bytes | Description                                                                  | Web IDL type          | Equivalent C type               |
| ---------------------------------------- | ----------------------------- | ------------- | ---------------------------------------------------------------------------- | --------------------- | ------------------------------- |
| {{jsxref("Int8Array")}}         | `-128` to `127`               | 1             | 8-bit two's complement signed integer                                        | `byte`                | `int8_t`                        |
| {{jsxref("Uint8Array")}}         | `0` to `255`                  | 1             | 8-bit unsigned integer                                                       | `octet`               | `uint8_t`                       |
| {{jsxref("Uint8ClampedArray")}} | `0` to `255`                  | 1             | 8-bit unsigned integer (clamped)                                             | `octet`               | `uint8_t`                       |
| {{jsxref("Int16Array")}}         | `-32768` to `32767`           | 2             | 16-bit two's complement signed integer                                       | `short`               | `int16_t`                       |
| {{jsxref("Uint16Array")}}         | `0` to `65535`                | 2             | 16-bit unsigned integer                                                      | `unsigned short`      | `uint16_t`                      |
| {{jsxref("Int32Array")}}         | `-2147483648` to `2147483647` | 4             | 32-bit two's complement signed integer                                       | `long`                | `int32_t`                       |
| {{jsxref("Uint32Array")}}         | `0` to `4294967295`           | 4             | 32-bit unsigned integer                                                      | `unsigned long`       | `uint32_t`                      |
| {{jsxref("Float32Array")}}     | `1.2E-38` to `3.4E38`         | 4             | 32-bit IEEE floating point number (7 significant digits e.g., `1.1234567`)   | `unrestricted float`  | `float`                         |
| {{jsxref("Float64Array")}}     | `5E-324` to `1.8E308`         | 8             | 64-bit IEEE floating point number (16 significant digits e.g., `1.123...15`) | `unrestricted double` | `double`                        |
| {{jsxref("BigInt64Array")}}     | `-2^63` to `2^63 - 1`         | 8             | 64-bit two's complement signed integer                                       | `bigint`              | `int64_t (signed long long)`    |
| {{jsxref("BigUint64Array")}}     | `0` to `2^64 - 1`             | 8             | 64-bit unsigned integer                                                      | `bigint`              | `uint64_t (unsigned long long)` |

### Keyed collections: Maps, Sets, WeakMaps, WeakSets

These data structures, introduced in ECMAScript Edition 6, take object references as keys. {{jsxref("Set")}} and {{jsxref("WeakSet")}} represent a set of objects, while {{jsxref("Map")}} and {{jsxref("WeakMap")}} associate a value to an object.

The difference between `Map`s and `WeakMap`s is that in the former, object keys can be enumerated over. This allows garbage collection optimizations in the latter case.

One could implement `Map`s and `Set`s in pure ECMAScript 5. However, since objects cannot be compared (in the sense of `<` "less than", for instance), look-up performance would necessarily be linear. Native implementations of them (including `WeakMap`s) can have look-up performance that is approximately logarithmic to constant time.

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

- [Nicholas Zakas collection of common data structure and common algorithms in JavaScript.](https://github.com/nzakas/computer-science-in-javascript/)
- [Search Tre(i)es implemented in JavaScript](https://github.com/monmohan/DataStructures_In_Javascript)
- [Data Types and Values in the ECMAScript specification](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)
