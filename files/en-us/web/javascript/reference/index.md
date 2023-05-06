---
title: JavaScript reference
slug: Web/JavaScript/Reference
page-type: landing-page
---

{{JsSidebar}}

The JavaScript reference serves as a repository of facts about the JavaScript language. The entire language is described here in detail. As you write JavaScript code, you'll refer to these pages often (thus the title "JavaScript reference").

The JavaScript language is intended to be used within some larger environment, be it a browser, server-side scripts, or similar. For the most part, this reference attempts to be environment-agnostic and does not target a web browser environment.

If you are new to JavaScript, start with the [guide](/en-US/docs/Web/JavaScript/Guide). Once you have a firm grasp of the fundamentals, you can use the reference to get more details on individual objects and language constructs.

## Built-ins

[JavaScript standard built-in objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects), along with their methods and properties.

### Value properties

- {{JSxRef("globalThis")}}
- {{JSxRef("Infinity")}}
- {{JSxRef("NaN")}}
- {{JSxRef("undefined")}}

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
- {{JSxRef("Global_Objects/escape", "escape()")}} {{Deprecated_Inline}}
- {{JSxRef("Global_Objects/unescape", "unescape()")}} {{Deprecated_Inline}}

### Fundamental objects

- {{JSxRef("Object")}}
- {{JSxRef("Function")}}
- {{JSxRef("Boolean")}}
- {{JSxRef("Symbol")}}

### Error objects

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

- {{JSxRef("Number")}}
- {{JSxRef("BigInt")}}
- {{JSxRef("Math")}}
- {{JSxRef("Date")}}

### Text processing

- {{JSxRef("String")}}
- {{JSxRef("RegExp")}}

### Indexed collections

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

- {{JSxRef("Map")}}
- {{JSxRef("Set")}}
- {{JSxRef("WeakMap")}}
- {{JSxRef("WeakSet")}}

### Structured data

- {{JSxRef("ArrayBuffer")}}
- {{JSxRef("SharedArrayBuffer")}}
- {{JSxRef("DataView")}}
- {{JSxRef("Atomics")}}
- {{JSxRef("JSON")}}

### Managing memory

- {{JSxRef("WeakRef")}}
- {{JSxRef("FinalizationRegistry")}}

### Control abstraction objects

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

## Statements

[JavaScript statements and declarations](/en-US/docs/Web/JavaScript/Reference/Statements)

### Control flow

- {{jsxref("Statements/return", "return")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Statements/try...catch", "try...catch")}}

### Declaring variables

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}

### Functions and classes

- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Statements/class", "class")}}

### Iterations

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
- {{jsxref("Statements/while", "while")}}

### Others

- {{jsxref("Statements/Empty", "Empty", "", 1)}}
- {{jsxref("Statements/block", "Block", "", 1)}}
- {{jsxref("Statements/Expression_statement", "Expression statement", "", 1)}}
- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/export", "export")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Statements/label", "label", "", 1)}}
- {{jsxref("Statements/with", "with")}} {{Deprecated_Inline}}

## Expressions and operators

[JavaScript expressions and operators](/en-US/docs/Web/JavaScript/Reference/Operators).

### Primary expressions

- {{JSxRef("Operators/this", "this")}}
- [Literals](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
- {{JSxRef("Global_Objects/Array", "[]")}}
- {{JSxRef("Operators/Object_initializer", "{}")}}
- {{JSxRef("Operators/function", "function")}}
- {{JSxRef("Operators/class", "class")}}
- {{JSxRef("Operators/function*", "function*")}}
- {{JSxRef("Operators/async_function", "async function")}}
- {{JSxRef("Operators/async_function*", "async function*")}}
- {{JSxRef("Global_Objects/RegExp", "/ab+c/i")}}
- {{JSxRef("Template_literals", "`string`")}}
- {{JSxRef("Operators/Grouping", "( )")}}

### Left-hand-side expressions

- {{JSxRef("Operators/Property_accessors", "Property accessors", "", 1)}}
- {{JSxRef("Operators/Optional_chaining", "?.")}}
- {{JSxRef("Operators/new", "new")}}
- {{JSxRef("Operators/new%2Etarget", "new.target")}}
- {{JSxRef("Operators/import%2Emeta", "import.meta")}}
- {{JSxRef("Operators/super", "super")}}
- {{JSxRef("Operators/import", "import()")}}

### Increment and decrement

- {{JSxRef("Operators/Increment", "A++")}}
- {{JSxRef("Operators/Decrement", "A--")}}
- {{JSxRef("Operators/Increment", "++A")}}
- {{JSxRef("Operators/Decrement", "--A")}}

### Unary operators

- {{JSxRef("Operators/delete", "delete")}}
- {{JSxRef("Operators/void", "void")}}
- {{JSxRef("Operators/typeof", "typeof")}}
- {{JSxRef("Operators/Unary_plus", "+")}}
- {{JSxRef("Operators/Unary_negation", "-")}}
- {{JSxRef("Operators/Bitwise_NOT", "~")}}
- {{JSxRef("Operators/Logical_NOT", "!")}}
- {{JSxRef("Operators/await", "await")}}

### Arithmetic operators

- {{JSxRef("Operators/Exponentiation", "**")}}
- {{JSxRef("Operators/Multiplication", "*")}}
- {{JSxRef("Operators/Division", "/")}}
- {{JSxRef("Operators/Remainder", "%")}}
- {{JSxRef("Operators/Addition", "+")}} (Plus)
- {{JSxRef("Operators/Subtraction", "-")}}

### Relational operators

- {{JSxRef("Operators/Less_than", "&lt;")}} (Less than)
- {{JSxRef("Operators/Greater_than", "&gt;")}} (Greater than)
- {{JSxRef("Operators/Less_than_or_equal", "&lt;=")}}
- {{JSxRef("Operators/Greater_than_or_equal", "&gt;=")}}
- {{JSxRef("Operators/instanceof", "instanceof")}}
- {{JSxRef("Operators/in", "in")}}

### Equality operators

- {{JSxRef("Operators/Equality", "==")}}
- {{JSxRef("Operators/Inequality", "!=")}}
- {{JSxRef("Operators/Strict_equality", "===")}}
- {{JSxRef("Operators/Strict_inequality", "!==")}}

### Bitwise shift operators

- {{JSxRef("Operators/Left_shift", "&lt;&lt;")}}
- {{JSxRef("Operators/Right_shift", "&gt;&gt;")}}
- {{JSxRef("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}

### Binary bitwise operators

- {{JSxRef("Operators/Bitwise_AND", "&amp;")}}
- {{JSxRef("Operators/Bitwise_OR", "|")}}
- {{JSxRef("Operators/Bitwise_XOR", "^")}}

### Binary logical operators

- {{JSxRef("Operators/Logical_AND", "&amp;&amp;")}}
- {{JSxRef("Operators/Logical_OR", "||")}}
- {{JSxRef("Operators/Nullish_coalescing", "??")}}

### Conditional (ternary) operator

- {{JSxRef("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}

### Assignment operators

- {{JSxRef("Operators/Assignment", "=")}}
- {{JSxRef("Operators/Multiplication_assignment", "*=")}}
- {{JSxRef("Operators/Division_assignment", "/=")}}
- {{JSxRef("Operators/Remainder_assignment", "%=")}}
- {{JSxRef("Operators/Addition_assignment", "+=")}}
- {{JSxRef("Operators/Subtraction_assignment", "-=")}}
- {{JSxRef("Operators/Left_shift_assignment", "&lt;&lt;=")}}
- {{JSxRef("Operators/Right_shift_assignment", "&gt;&gt;=")}}
- {{JSxRef("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
- {{JSxRef("Operators/Bitwise_AND_assignment", "&amp;=")}}
- {{JSxRef("Operators/Bitwise_XOR_assignment", "^=")}}
- {{JSxRef("Operators/Bitwise_OR_assignment", "|=")}}
- {{JSxRef("Operators/Exponentiation_assignment", "**=")}}
- {{JSxRef("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
- {{JSxRef("Operators/Logical_OR_assignment", "||=")}}
- {{JSxRef("Operators/Nullish_coalescing_assignment", "??=")}}
- [`[a, b] = arr`, `{ a, b } = obj`](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### Yield operators

- {{JSxRef("Operators/yield", "yield")}}
- {{JSxRef("Operators/yield*", "yield*")}}

### Spread syntax

- {{JSxRef("Operators/Spread_syntax", "...obj")}}

### Comma operator

- {{JSxRef("Operators/Comma_operator", ",")}}

## Functions

[JavaScript functions.](/en-US/docs/Web/JavaScript/Reference/Functions)

- {{JSXRef("Functions/Arrow_functions", "Arrow Functions", "", 1)}}
- {{JSxRef("Functions/Default_parameters", "Default parameters", "", 1)}}
- {{JSxRef("Functions/rest_parameters", "Rest parameters", "", 1)}}
- {{JSxRef("Functions/arguments", "arguments")}}
- {{JSxRef("Functions/Method_definitions", "Method definitions", "", 1)}}
- {{JSxRef("Functions/get", "getter", "", 1)}}
- {{JSxRef("Functions/set", "setter", "", 1)}}

## Classes

[JavaScript classes.](/en-US/docs/Web/JavaScript/Reference/Classes)

- {{JSxRef("Classes/Constructor", "constructor")}}
- {{JSxRef("Classes/extends", "extends")}}
- [Private class features](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [Public class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- {{JSxRef("Classes/static", "static")}}
- [Static initialization blocks](/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

## Additional reference pages

- {{JSxRef("Lexical_grammar", "Lexical grammar", "", 1)}}
- [Data types and data structures](/en-US/docs/Web/JavaScript/Data_structures)
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [Trailing commas](/en-US/docs/Web/JavaScript/Reference/Trailing_commas)
- [Errors](/en-US/docs/Web/JavaScript/Reference/Errors)
- {{JSxRef("Strict_mode", "Strict mode", "", 1)}}
- {{JSxRef("Deprecated_and_obsolete_features", "Deprecated features", "", 1)}}
