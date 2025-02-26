---
title: JavaScript reference
slug: Web/JavaScript/Reference
page-type: landing-page
---

{{jsSidebar}}

The JavaScript reference serves as a repository of facts about the JavaScript language. The entire language is described here in detail. As you write JavaScript code, you'll refer to these pages often (thus the title "JavaScript reference").

The JavaScript language is intended to be used within some larger environment, be it a browser, server-side scripts, or similar. For the most part, this reference attempts to be environment-agnostic and does not target a web browser environment.

If you are new to JavaScript, start with the [guide](/en-US/docs/Web/JavaScript/Guide). Once you have a firm grasp of the fundamentals, you can use the reference to get more details on individual objects and language constructs.

## Built-ins

[JavaScript standard built-in objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects), along with their methods and properties.

### Value properties

- {{jsxref("globalThis")}}
- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}

### Function properties

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

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}}

### Error objects

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

- {{jsxref("Number")}}
- {{jsxref("BigInt")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}
- {{jsxref("Temporal")}}

### Text processing

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### Indexed collections

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

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### Structured data

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("Atomics")}}
- {{jsxref("JSON")}}

### Managing memory

- {{jsxref("WeakRef")}}
- {{jsxref("FinalizationRegistry")}}

### Control abstraction objects

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
- {{jsxref("Statements/with", "with")}} {{deprecated_inline}}

## Expressions and operators

[JavaScript expressions and operators](/en-US/docs/Web/JavaScript/Reference/Operators).

### Primary expressions

- {{jsxref("Operators/this", "this")}}
- [Literals](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
- {{jsxref("Array", "[]")}}
- {{jsxref("Operators/Object_initializer", "{}")}}
- {{jsxref("Operators/function", "function")}}
- {{jsxref("Operators/class", "class")}}
- {{jsxref("Operators/function*", "function*")}}
- {{jsxref("Operators/async_function", "async function")}}
- {{jsxref("Operators/async_function*", "async function*")}}
- {{jsxref("RegExp", "/ab+c/i")}}
- {{jsxref("Template_literals", "`string`")}}
- {{jsxref("Operators/Grouping", "( )")}}

### Left-hand-side expressions

- {{jsxref("Operators/Property_accessors", "Property accessors", "", 1)}}
- {{jsxref("Operators/Optional_chaining", "?.")}}
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Operators/new.target", "new.target")}}
- {{jsxref("Operators/import.meta", "import.meta")}}
- {{jsxref("Operators/super", "super")}}
- {{jsxref("Operators/import", "import()")}}

### Increment and decrement

- {{jsxref("Operators/Increment", "A++")}}
- {{jsxref("Operators/Decrement", "A--")}}
- {{jsxref("Operators/Increment", "++A")}}
- {{jsxref("Operators/Decrement", "--A")}}

### Unary operators

- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Operators/Unary_plus", "+")}}
- {{jsxref("Operators/Unary_negation", "-")}}
- {{jsxref("Operators/Bitwise_NOT", "~")}}
- {{jsxref("Operators/Logical_NOT", "!")}}
- {{jsxref("Operators/await", "await")}}

### Arithmetic operators

- {{jsxref("Operators/Exponentiation", "**")}}
- {{jsxref("Operators/Multiplication", "*")}}
- {{jsxref("Operators/Division", "/")}}
- {{jsxref("Operators/Remainder", "%")}}
- {{jsxref("Operators/Addition", "+")}} (Plus)
- {{jsxref("Operators/Subtraction", "-")}}

### Relational operators

- {{jsxref("Operators/Less_than", "&lt;")}} (Less than)
- {{jsxref("Operators/Greater_than", "&gt;")}} (Greater than)
- {{jsxref("Operators/Less_than_or_equal", "&lt;=")}}
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Operators/in", "in")}}

### Equality operators

- {{jsxref("Operators/Equality", "==")}}
- {{jsxref("Operators/Inequality", "!=")}}
- {{jsxref("Operators/Strict_equality", "===")}}
- {{jsxref("Operators/Strict_inequality", "!==")}}

### Bitwise shift operators

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}

### Binary bitwise operators

- {{jsxref("Operators/Bitwise_AND", "&amp;")}}
- {{jsxref("Operators/Bitwise_OR", "|")}}
- {{jsxref("Operators/Bitwise_XOR", "^")}}

### Binary logical operators

- {{jsxref("Operators/Logical_AND", "&amp;&amp;")}}
- {{jsxref("Operators/Logical_OR", "||")}}
- {{jsxref("Operators/Nullish_coalescing", "??")}}

### Conditional (ternary) operator

- {{jsxref("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}

### Assignment operators

- {{jsxref("Operators/Assignment", "=")}}
- {{jsxref("Operators/Multiplication_assignment", "*=")}}
- {{jsxref("Operators/Division_assignment", "/=")}}
- {{jsxref("Operators/Remainder_assignment", "%=")}}
- {{jsxref("Operators/Addition_assignment", "+=")}}
- {{jsxref("Operators/Subtraction_assignment", "-=")}}
- {{jsxref("Operators/Left_shift_assignment", "&lt;&lt;=")}}
- {{jsxref("Operators/Right_shift_assignment", "&gt;&gt;=")}}
- {{jsxref("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
- {{jsxref("Operators/Bitwise_AND_assignment", "&amp;=")}}
- {{jsxref("Operators/Bitwise_XOR_assignment", "^=")}}
- {{jsxref("Operators/Bitwise_OR_assignment", "|=")}}
- {{jsxref("Operators/Exponentiation_assignment", "**=")}}
- {{jsxref("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
- {{jsxref("Operators/Logical_OR_assignment", "||=")}}
- {{jsxref("Operators/Nullish_coalescing_assignment", "??=")}}
- [`[a, b] = arr`, `{ a, b } = obj`](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### Yield operators

- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}

### Spread syntax

- {{jsxref("Operators/Spread_syntax", "...obj")}}

### Comma operator

- {{jsxref("Operators/Comma_operator", ",")}}

## Functions

[JavaScript functions.](/en-US/docs/Web/JavaScript/Reference/Functions)

- {{jsxref("Functions/Arrow_functions", "Arrow Functions", "", 1)}}
- {{jsxref("Functions/Default_parameters", "Default parameters", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Rest parameters", "", 1)}}
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Functions/Method_definitions", "Method definitions", "", 1)}}
- {{jsxref("Functions/get", "getter", "", 1)}}
- {{jsxref("Functions/set", "setter", "", 1)}}

## Classes

[JavaScript classes.](/en-US/docs/Web/JavaScript/Reference/Classes)

- {{jsxref("Classes/Constructor", "constructor")}}
- {{jsxref("Classes/extends", "extends")}}
- [Private properties](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties)
- [Public class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- {{jsxref("Classes/static", "static")}}
- [Static initialization blocks](/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

## Regular expressions

[JavaScript regular expressions.](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)

- [Backreference: `\1`, `\2`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Capturing group: `(...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Character class escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Character escape: `\n`, `\u{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunction: `|`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Input boundary assertion: `^`, `$`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Literal character: `a`, `b`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Lookahead assertion: `(?=...)`, `(?!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind assertion: `(?<=...)`, `(?<!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Modifier: `(?ims-ims:...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
- [Named backreference: `\k<name>`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Named capturing group: `(?<name>...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Non-capturing group: `(?:...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Quantifier: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [Unicode character class escape: `\p{...}`, `\P{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Wildcard: `.`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
- [Word boundary assertion: `\b`, `\B`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)

## Additional reference pages

- {{jsxref("Lexical_grammar", "Lexical grammar", "", 1)}}
- [Data types and data structures](/en-US/docs/Web/JavaScript/Data_structures)
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [Trailing commas](/en-US/docs/Web/JavaScript/Reference/Trailing_commas)
- [Errors](/en-US/docs/Web/JavaScript/Reference/Errors)
- {{jsxref("Strict_mode", "Strict mode", "", 1)}}
- {{jsxref("Deprecated_and_obsolete_features", "Deprecated features", "", 1)}}
