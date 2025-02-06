---
title: Standard built-in objects
slug: Web/JavaScript/Reference/Global_Objects
page-type: landing-page
---

{{jsSidebar("Objects")}}

This chapter documents all of JavaScript's standard, built-in objects, including their methods and properties.

The term "global objects" (or standard built-in objects) here is not to be confused with **the global object**. Here, "global objects" refer to **objects in the global scope**.

The **global object** itself can be accessed using the {{jsxref("Operators/this", "this")}} operator in the global scope. In fact, the global scope **consists of** the properties of the global object, including inherited properties, if any.

Other objects in the global scope are either [created by the user script](/en-US/docs/Web/JavaScript/Guide/Working_with_objects#creating_new_objects) or provided by the host application. The host objects available in browser contexts are documented in the [API reference](/en-US/docs/Web/API).

For more information about the distinction between the [DOM](/en-US/docs/Web/API/Document_Object_Model) and core [JavaScript](/en-US/docs/Web/JavaScript), see [JavaScript technologies overview](/en-US/docs/Web/JavaScript/JavaScript_technologies_overview).

## Standard objects by category

### Value properties

These global properties return a simple value. They have no properties or methods.

- {{jsxref("globalThis")}}
- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}

### Function properties

These global functions—functions which are called globally, rather than on an object—directly return their results to the caller.

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("isFinite()")}}
- {{jsxref("isNaN()")}}
- {{jsxref("parseFloat()")}}
- {{jsxref("parseInt()")}}
- {{jsxref("decodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
- {{jsxref("escape()")}} {{deprecated_inline}}
- {{jsxref("unescape()")}} {{deprecated_inline}}

### Fundamental objects

These objects represent fundamental language constructs.

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}}

### Error objects

Error objects are a special type of fundamental object. They include the basic {{jsxref("Error")}} type, as well as several specialized error types.

- {{jsxref("Error")}}
- {{jsxref("AggregateError")}}
- {{jsxref("EvalError")}}
- {{jsxref("RangeError")}}
- {{jsxref("ReferenceError")}}
- {{jsxref("SyntaxError")}}
- {{jsxref("TypeError")}}
- {{jsxref("URIError")}}
- {{jsxref("InternalError")}} {{non-standard_inline}}

### Numbers and dates

These are the base objects representing numbers, dates, and mathematical calculations.

- {{jsxref("Number")}}
- {{jsxref("BigInt")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}
- {{jsxref("Temporal")}}

### Text processing

These objects represent strings and support manipulating them.

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### Indexed collections

These objects represent collections of data which are ordered by an index value. This includes (typed) arrays and array-like constructs.

- {{jsxref("Array")}}
- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}
- {{jsxref("Float16Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}

### Keyed collections

These objects represent collections which use keys. The iterable collections ({{jsxref("Map")}} and {{jsxref("Set")}}) contain elements which are easily iterated in the order of insertion.

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### Structured data

These objects represent and interact with structured data buffers and data coded using JavaScript Object Notation (JSON).

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("Atomics")}}
- {{jsxref("JSON")}}

### Managing memory

These objects interact with the garbage collection mechanism.

- {{jsxref("WeakRef")}}
- {{jsxref("FinalizationRegistry")}}

### Control abstraction objects

Control abstractions can help to structure code, especially async code (without using deeply nested callbacks, for example).

- {{jsxref("Iterator")}}
- {{jsxref("AsyncIterator")}}
- {{jsxref("Promise")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("Generator")}}
- {{jsxref("AsyncGenerator")}}
- {{jsxref("AsyncFunction")}}

### Reflection

- {{jsxref("Reflect")}}
- {{jsxref("Proxy")}}

### Internationalization

Additions to the ECMAScript core for language-sensitive functionalities.

- {{jsxref("Intl")}}
- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.DisplayNames")}}
- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.PluralRules")}}
- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl.Segmenter")}}
