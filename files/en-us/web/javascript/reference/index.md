---
title: JavaScript reference
slug: Web/JavaScript/Reference
tags:
  - Code
  - ECMAScript
  - ECMAScript6
  - ES6
  - JS
  - JavaScript
  - Landing page
  - Reference
  - es
  - l10n:priority
  - programming
---
{{JsSidebar}}

This part of the JavaScript section on MDN serves as a repository of facts about
the JavaScript language. Read more
[about this reference](/en-US/docs/Web/JavaScript/Reference/About).

## Built-ins

[JavaScript standard built-in objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects),
along with their methods and properties.

### Value properties

- {{JSxRef("Infinity")}}
- {{JSxRef("NaN")}}
- {{JSxRef("undefined")}}
- {{JSxRef("globalThis")}}

### Function properties

- {{JSxRef("Global_Objects/eval", "eval()")}}
- {{JSxRef("Global_Objects/isFinite", "isFinite()")}}
- {{JSxRef("Global_Objects/isNaN", "isNaN()")}}
- {{JSxRef("Global_Objects/parseFloat", "parseFloat()")}}
- {{JSxRef("Global_Objects/parseInt", "parseInt()")}}
- {{JSxRef("Global_Objects/decodeURI", "decodeURI()")}}
- {{JSxRef("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{JSxRef("Global_Objects/encodeURI", "encodeURI()")}}
- {{JSxRef("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}

### Fundamental objects

- {{JSxRef("Object")}}
- {{JSxRef("Function")}}
- {{JSxRef("Boolean")}}
- {{JSxRef("Symbol")}}

### Error objects

- {{JSxRef("Error")}}
- {{JSxRef("AggregateError")}}
- {{JSxRef("EvalError")}}
- {{JSxRef("InternalError")}}
- {{JSxRef("RangeError")}}
- {{JSxRef("ReferenceError")}}
- {{JSxRef("SyntaxError")}}
- {{JSxRef("TypeError")}}
- {{JSxRef("URIError")}}

### Numbers & dates

- {{JSxRef("Number")}}
- {{JSxRef("BigInt")}}
- {{JSxRef("Math")}}
- {{JSxRef("Date")}}

### Text processing

- {{JSxRef("String")}}
- {{JSxRef("RegExp")}}

### Indexed Collections

- {{JSxRef("Array")}}
- {{JSxRef("Int8Array")}}
- {{JSxRef("Uint8Array")}}
- {{JSxRef("Uint8ClampedArray")}}
- {{JSxRef("Int16Array")}}
- {{JSxRef("Uint16Array")}}
- {{JSxRef("Int32Array")}}
- {{JSxRef("Uint32Array")}}
- {{JSxRef("Float32Array")}}
- {{JSxRef("Float64Array")}}
- {{JSxRef("BigInt64Array")}}
- {{JSxRef("BigUint64Array")}}

### Keyed collections

- {{JSxRef("Map")}}
- {{JSxRef("Set")}}
- {{JSxRef("WeakMap")}}
- {{JSxRef("WeakSet")}}

### Structured data

- {{JSxRef("ArrayBuffer")}}
- {{JSxRef("SharedArrayBuffer")}}
- {{JSxRef("Atomics")}}
- {{JSxRef("DataView")}}
- {{JSxRef("JSON")}}

### Control abstraction

- {{JSxRef("GeneratorFunction")}}
- {{JSxRef("AsyncGeneratorFunction")}}
- {{JSxRef("Generator")}}
- {{JSxRef("AsyncGenerator")}}
- {{JSxRef("AsyncFunction")}}
- {{JSxRef("Promise")}}

### Reflection

- {{JSxRef("Reflect")}}
- {{JSxRef("Proxy")}}

### Internationalization

- {{JSxRef("Intl")}}
- {{JSxRef("Global_Objects/Intl/Collator", "Intl.Collator")}}
- {{JSxRef("Global_Objects/Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{JSxRef("Global_Objects/Intl/DisplayNames", "Intl.DisplayNames")}}
- {{JSxRef("Global_Objects/Intl/ListFormat", "Intl.ListFormat")}}
- {{JSxRef("Global_Objects/Intl/Locale", "Intl.Locale")}}
- {{JSxRef("Global_Objects/Intl/NumberFormat", "Intl.NumberFormat")}}
- {{JSxRef("Global_Objects/Intl/PluralRules", "Intl.PluralRules")}}
- {{JSxRef("Global_Objects/Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}

### WebAssembly

- {{JSxRef("WebAssembly")}}
- {{JSxRef("WebAssembly.Module")}}
- {{JSxRef("WebAssembly.Instance")}}
- {{JSxRef("WebAssembly.Memory")}}
- {{JSxRef("WebAssembly.Table")}}
- {{JSxRef("WebAssembly.CompileError")}}
- {{JSxRef("WebAssembly.LinkError")}}
- {{JSxRef("WebAssembly.RuntimeError")}}

## Statements

[JavaScript statements and declarations](/en-US/docs/Web/JavaScript/Reference/Statements)

### Control flow

- {{jsxref("Statements/block", "Block")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/Empty", "Empty")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}

### Declarations

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}

### Functions and classes

- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/return", "return")}}
- {{jsxref("Statements/class", "class")}}

### Iterations

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/for_each...in", "for each...in")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
- {{jsxref("Statements/while", "while")}}

### Other

- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/export", "export")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Statements/label", "label")}}
- {{jsxref("Statements/with", "with")}}

## Expressions and operators

[JavaScript expressions and operators](/en-US/docs/Web/JavaScript/Reference/Operators).

### Primary expressions

- {{JSxRef("Operators/this", "this")}}
- {{JSxRef("Operators/function", "function")}}
- {{JSxRef("Operators/class", "class")}}
- {{JSxRef("Operators/function*", "function*")}}
- {{JSxRef("Operators/yield", "yield")}}
- {{JSxRef("Operators/yield*", "yield*")}}
- {{JSxRef("Operators/async_function", "async function")}}
- {{JSxRef("Operators/await", "await")}}
- {{JSxRef("Global_Objects/Array", "[]")}}
- {{JSxRef("Operators/Object_initializer", "{}")}}
- {{JSxRef("Global_Objects/RegExp", "/ab+c/i")}}
- {{JSxRef("Operators/Grouping", "( )")}}
- {{JSxRef("null")}}

### Left-hand-side expressions

- {{JSxRef("Operators/Property_accessors", "Property accessors", "", 1)}}
- {{JSxRef("Operators/Optional_chaining", "Optional chaining", "", 1)}}
- {{JSxRef("Operators/new", "new")}}
- {{JSxRef("Operators/new%2Etarget", "new.target")}}
- {{JSxRef("Statements/import%2Emeta", "import.meta")}}
- {{JSxRef("Operators/super", "super")}}
- {{JSxRef("Operators/Spread_syntax", "...obj")}}

### Increment & decrement

- {{JSxRef("Operators", "A++", "#Increment")}}
- {{JSxRef("Operators", "A--", "#Decrement")}}
- {{JSxRef("Operators", "++A", "#Increment")}}
- {{JSxRef("Operators", "--A", "#Decrement")}}

### Unary operators

- {{JSxRef("Operators/delete", "delete")}}
- {{JSxRef("Operators/void", "void")}}
- {{JSxRef("Operators/typeof", "typeof")}}
- {{JSxRef("Operators", "+", "#Unary_plus")}}
- {{JSxRef("Operators", "-", "#Unary_negation")}}
- {{JSxRef("Operators", "~", "#Bitwise_NOT")}}
- {{JSxRef("Operators", "!", "#Logical_NOT")}}

### Arithmetic operators

- {{JSxRef("Operators", "+", "#Addition")}}
- {{JSxRef("Operators", "-", "#Subtraction")}}
- {{JSxRef("Operators", "/", "#Division")}}
- {{JSxRef("Operators", "*", "#Multiplication")}}
- {{JSxRef("Operators", "%", "#Remainder")}}
- {{JSxRef("Operators", "**", "#Exponentiation")}}

### Relational operators

- {{JSxRef("Operators/in", "in")}}
- {{JSxRef("Operators/instanceof", "instanceof")}}
- {{JSxRef("Operators", "&lt;", "#Less_than_operator")}}
- {{JSxRef("Operators", "&gt;", "#Greater_than_operator")}}
- {{JSxRef("Operators", "&lt;=", "#Less_than_or_equal_operator")}}
- {{JSxRef("Operators", "&gt;=", "#Greater_than_or_equal_operator")}}

### Equality operators

- {{JSxRef("Operators", "==", "#Equality")}}
- {{JSxRef("Operators", "!=", "#Inequality")}}
- {{JSxRef("Operators", "===", "#Identity")}}
- {{JSxRef("Operators", "!==", "#Nonidentity")}}

### Bitwise shift operators

- {{JSxRef("Operators", "&lt;&lt;", "#Left_shift")}}
- {{JSxRef("Operators", "&gt;&gt;", "#Right_shift")}}
- {{JSxRef("Operators", "&gt;&gt;&gt;", "#Unsigned_right_shift")}}

### Binary bitwise operators

- {{JSxRef("Operators", "&amp;", "#Bitwise_AND")}}
- {{JSxRef("Operators", "|", "#Bitwise_OR")}}
- {{JSxRef("Operators", "^", "#Bitwise_XOR")}}

### Binary logical operators

- {{JSxRef("Operators", "&amp;&amp;", "#Logical_AND")}}
- {{JSxRef("Operators", "||", "#Logical_OR")}}

### Conditional (ternary) operator

- {{JSxRef("Operators/Conditional_Operator", "(condition ? ifTrue : ifFalse)")}}

### Assignment operators

- {{JSxRef("Operators#assignment_operators", "=", "#Assignment")}}
- {{JSxRef("Operators#assignment_operators", "*=", "#Multiplication_assignment")}}
- {{JSxRef("Operators#assignment_operators", "/=", "#Division_assignment")}}
- {{JSxRef("Operators#assignment_operators", "%=", "#Remainder_assignment")}}
- {{JSxRef("Operators#assignment_operators", "+=", "#Addition_assignment")}}
- {{JSxRef("Operators#assignment_operators", "-=", "#Subtraction_assignment")}}
- {{JSxRef("Operators#assignment_operators", "&lt;&lt;=", "#Left_shift_assignment")}}
- {{JSxRef("Operators#assignment_operators", "&gt;&gt;=", "#Right_shift_assignment")}}
- {{JSxRef("Operators#assignment_operators", "&gt;&gt;&gt;=", "#Unsigned_right_shift_assignment")}}
- {{JSxRef("Operators#assignment_operators", "&amp;=", "#Bitwise_AND_assignment")}}
- {{JSxRef("Operators#assignment_operators", "^=", "#Bitwise_XOR_assignment")}}
- {{JSxRef("Operators#assignment_operators", "|=", "#Bitwise_OR_assignment")}}
- {{JSxRef("Operators/Destructuring_assignment", "[a, b] = [1, 2]")}}
- {{JSxRef("Operators/Destructuring_assignment", "{a, b} = {a:1, b:2}")}}

## Functions

This chapter documents how to work with
[JavaScript functions](/en-US/docs/Web/JavaScript/Reference/Functions) to
develop your applications.

- [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
- [Arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

## Additional reference pages

- [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Data types and data structures](/en-US/docs/Web/JavaScript/Data_structures)
- [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [Deprecated features](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
