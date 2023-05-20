---
title: Standard built-in objects
slug: Web/JavaScript/Reference/Global_Objects
page-type: landing-page
---

{{JSSidebar("Objects")}}

This chapter documents all of JavaScript's standard, built-in objects, including their methods and properties.

The term "global objects" (or standard built-in objects) here is not to be confused with **the global object**. Here, "global objects" refer to **objects in the global scope**.

The **global object** itself can be accessed using the {{JSxRef("Operators/this", "this")}} operator in the global scope. In fact, the global scope **consists of** the properties of the global object, including inherited properties, if any.

Other objects in the global scope are either [created by the user script](/en-US/docs/Web/JavaScript/Guide/Working_with_objects#creating_new_objects) or provided by the host application. The host objects available in browser contexts are documented in the [API reference](/en-US/docs/Web/API).

For more information about the distinction between the [DOM](/en-US/docs/Web/API/Document_Object_Model) and core [JavaScript](/en-US/docs/Web/JavaScript), see [JavaScript technologies overview](/en-US/docs/Web/JavaScript/JavaScript_technologies_overview).

## Standard objects by category

### Value properties

These global properties return a simple value. They have no properties or methods.

- {{JSxRef("globalThis")}}
- {{JSxRef("Infinity")}}
- {{JSxRef("NaN")}}
- {{JSxRef("undefined")}}

### Function properties

These global functions—functions which are called globally, rather than on an object—directly return their results to the caller.

- {{JSxRef("Global_Objects/eval", "eval()")}}
- {{JSxRef("Global_Objects/isFinite", "isFinite()")}}
- {{JSxRef("Global_Objects/isNaN", "isNaN()")}}
- {{JSxRef("Global_Objects/parseFloat", "parseFloat()")}}
- {{JSxRef("Global_Objects/parseInt", "parseInt()")}}
- {{JSxRef("Global_Objects/decodeURI", "decodeURI()")}}
- {{JSxRef("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{JSxRef("Global_Objects/encodeURI", "encodeURI()")}}
- {{JSxRef("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
- {{JSxRef("Global_Objects/escape", "escape()")}} {{Deprecated_Inline}}
- {{JSxRef("Global_Objects/unescape", "unescape()")}} {{Deprecated_Inline}}

### Fundamental objects

These objects represent fundamental language constructs.

- {{JSxRef("Object")}}
- {{JSxRef("Function")}}
- {{JSxRef("Boolean")}}
- {{JSxRef("Symbol")}}

### Error objects

Error objects are a special type of fundamental object. They include the basic {{JSxRef("Error")}} type, as well as several specialized error types.

- {{JSxRef("Error")}}
- {{JSxRef("AggregateError")}}
- {{JSxRef("EvalError")}}
- {{JSxRef("RangeError")}}
- {{JSxRef("ReferenceError")}}
- {{JSxRef("SyntaxError")}}
- {{JSxRef("TypeError")}}
- {{JSxRef("URIError")}}
- {{JSxRef("InternalError")}} {{Non-Standard_Inline}}

### Numbers and dates

These are the base objects representing numbers, dates, and mathematical calculations.

- {{JSxRef("Number")}}
- {{JSxRef("BigInt")}}
- {{JSxRef("Math")}}
- {{JSxRef("Date")}}

### Text processing

These objects represent strings and support manipulating them.

- {{JSxRef("String")}}
- {{JSxRef("RegExp")}}

### Indexed collections

These objects represent collections of data which are ordered by an index value. This includes (typed) arrays and array-like constructs.

- {{JSxRef("Array")}}
- {{JSxRef("Int8Array")}}
- {{JSxRef("Uint8Array")}}
- {{JSxRef("Uint8ClampedArray")}}
- {{JSxRef("Int16Array")}}
- {{JSxRef("Uint16Array")}}
- {{JSxRef("Int32Array")}}
- {{JSxRef("Uint32Array")}}
- {{JSxRef("BigInt64Array")}}
- {{JSxRef("BigUint64Array")}}
- {{JSxRef("Float32Array")}}
- {{JSxRef("Float64Array")}}

### Keyed collections

These objects represent collections which use keys. The iterable collections ({{JSxRef("Map")}} and {{JSxRef("Set")}}) contain elements which are easily iterated in the order of insertion.

- {{JSxRef("Map")}}
- {{JSxRef("Set")}}
- {{JSxRef("WeakMap")}}
- {{JSxRef("WeakSet")}}

### Structured data

These objects represent and interact with structured data buffers and data coded using JavaScript Object Notation (JSON).

- {{JSxRef("ArrayBuffer")}}
- {{JSxRef("SharedArrayBuffer")}}
- {{JSxRef("DataView")}}
- {{JSxRef("Atomics")}}
- {{JSxRef("JSON")}}

### Managing memory

These objects interact with the garbage collection mechanism.

- {{JSxRef("WeakRef")}}
- {{JSxRef("FinalizationRegistry")}}

### Control abstraction objects

Control abstractions can help to structure code, especially async code (without using deeply nested callbacks, for example).

- {{JSxRef("Iterator")}}
- {{JSxRef("AsyncIterator")}}
- {{JSxRef("Promise")}}
- {{JSxRef("GeneratorFunction")}}
- {{JSxRef("AsyncGeneratorFunction")}}
- {{JSxRef("Generator")}}
- {{JSxRef("AsyncGenerator")}}
- {{JSxRef("AsyncFunction")}}

### Reflection

- {{JSxRef("Reflect")}}
- {{JSxRef("Proxy")}}

### Internationalization

Additions to the ECMAScript core for language-sensitive functionalities.

- {{JSxRef("Intl")}}
- {{JSxRef("Intl.Collator")}}
- {{JSxRef("Intl.DateTimeFormat")}}
- {{JSxRef("Intl.DisplayNames")}}
- {{JSxRef("Intl.DurationFormat")}}
- {{JSxRef("Intl.ListFormat")}}
- {{JSxRef("Intl.Locale")}}
- {{JSxRef("Intl.NumberFormat")}}
- {{JSxRef("Intl.PluralRules")}}
- {{JSxRef("Intl.RelativeTimeFormat")}}
- {{JSxRef("Intl.Segmenter")}}
