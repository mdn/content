---
title: Expressions and operators
slug: Web/JavaScript/Reference/Operators
page-type: landing-page
browser-compat: javascript.operators
sidebar: jssidebar
---

This chapter documents all the JavaScript language operators, expressions and keywords.

## Expressions and operators by category

For an alphabetical listing see the sidebar on the left.

### Primary expressions

Basic keywords and general expressions in JavaScript. These expressions have the highest precedence (higher than [operators](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

- {{jsxref("this")}}
  - : The `this` keyword refers to a special property of an execution context.
- [Literals](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
  - : Basic `null`, boolean, number, and string literals.
- {{jsxref("Array", "[]")}}
  - : Array initializer/literal syntax.
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : Object initializer/literal syntax.
- {{jsxref("Operators/function", "function")}}
  - : The `function` keyword defines a function expression.
- {{jsxref("Operators/class", "class")}}
  - : The `class` keyword defines a class expression.
- {{jsxref("Operators/function*", "function*")}}
  - : The `function*` keyword defines a generator function expression.
- {{jsxref("Operators/async_function", "async function")}}
  - : The `async function` defines an async function expression.
- {{jsxref("Operators/async_function*", "async function*")}}
  - : The `async function*` keywords define an async generator function expression.
- {{jsxref("RegExp", "/ab+c/i")}}
  - : Regular expression literal syntax.
- {{jsxref("Template_literals", "`string`")}}
  - : Template literal syntax.
- {{jsxref("Operators/Grouping", "( )")}}
  - : Grouping operator.

### Left-hand-side expressions

Left values are the destination of an assignment.

- {{jsxref("Operators/Property_accessors", "Property accessors", "", 1)}}
  - : Member operators provide access to a property or method of an object (`object.property` and `object["property"]`).
- {{jsxref("Operators/Optional_chaining", "?.")}}
  - : The optional chaining operator returns `undefined` instead of causing an error if a reference is [nullish](/en-US/docs/Glossary/Nullish) ([`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) or [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)).
- {{jsxref("new")}}
  - : The `new` operator creates an instance of a constructor.
- {{jsxref("Operators/new.target", "new.target")}}
  - : In constructors, `new.target` refers to the constructor that was invoked by {{jsxref("new")}}.
- {{jsxref("Operators/import.meta", "import.meta")}}
  - : An object exposing context-specific metadata to a JavaScript module.
- {{jsxref("Operators/super", "super")}}
  - : The `super` keyword calls the parent constructor or allows accessing properties of the parent object.
- {{jsxref("Operators/import", "import()")}}
  - : The `import()` syntax allows loading a module asynchronously and dynamically into a potentially non-module environment.

### Increment and decrement

Postfix/prefix increment and postfix/prefix decrement operators.

- {{jsxref("Operators/Increment", "A++")}}
  - : Postfix increment operator.
- {{jsxref("Operators/Decrement", "A--")}}
  - : Postfix decrement operator.
- {{jsxref("Operators/Increment", "++A")}}
  - : Prefix increment operator.
- {{jsxref("Operators/Decrement", "--A")}}
  - : Prefix decrement operator.

### Unary operators

A unary operation is an operation with only one operand.

- {{jsxref("delete")}}
  - : The `delete` operator deletes a property from an object.
- {{jsxref("Operators/void", "void")}}
  - : The `void` operator evaluates an expression and discards its return value.
- {{jsxref("Operators/typeof", "typeof")}}
  - : The `typeof` operator determines the type of a given object.
- {{jsxref("Operators/Unary_plus", "+")}}
  - : The unary plus operator converts its operand to Number type.
- {{jsxref("Operators/Unary_negation", "-")}}
  - : The unary negation operator converts its operand to Number type and then negates it.
- {{jsxref("Operators/Bitwise_NOT", "~")}}
  - : Bitwise NOT operator.
- {{jsxref("Operators/Logical_NOT", "!")}}
  - : Logical NOT operator.
- {{jsxref("Operators/await", "await")}}
  - : Pause and resume an async function and wait for the promise's fulfillment/rejection.

### Arithmetic operators

Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value.

- {{jsxref("Operators/Exponentiation", "**")}}
  - : Exponentiation operator.
- {{jsxref("Operators/Multiplication", "*")}}
  - : Multiplication operator.
- {{jsxref("Operators/Division", "/")}}
  - : Division operator.
- {{jsxref("Operators/Remainder", "%")}}
  - : Remainder operator.
- {{jsxref("Operators/Addition", "+")}} (Plus)
  - : Addition operator.
- {{jsxref("Operators/Subtraction", "-")}}
  - : Subtraction operator.

### Relational operators

A comparison operator compares its operands and returns a boolean value based on whether the comparison is true.

- {{jsxref("Operators/Less_than", "&lt;")}} (Less than)
  - : Less than operator.
- {{jsxref("Operators/Greater_than", "&gt;")}} (Greater than)
  - : Greater than operator.
- {{jsxref("Operators/Less_than_or_equal", "&lt;=")}}
  - : Less than or equal operator.
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
  - : Greater than or equal operator.
- {{jsxref("instanceof")}}
  - : The `instanceof` operator determines whether an object is an instance of another object.
- {{jsxref("Operators/in", "in")}}
  - : The `in` operator determines whether an object has a given property.

> [!NOTE]
> `=>` is [not an operator](#expressions_and_operators), but the notation for [Arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Equality operators

The result of evaluating an equality operator is always of type boolean based on whether the comparison is true.

- {{jsxref("Operators/Equality", "==")}}
  - : Equality operator.
- {{jsxref("Operators/Inequality", "!=")}}
  - : Inequality operator.
- {{jsxref("Operators/Strict_equality", "===")}}
  - : Strict equality operator.
- {{jsxref("Operators/Strict_inequality", "!==")}}
  - : Strict inequality operator.

### Bitwise shift operators

Operations to shift all bits of the operand.

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
  - : Bitwise left shift operator.
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
  - : Bitwise right shift operator.
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : Bitwise unsigned right shift operator.

### Binary bitwise operators

Bitwise operators treat their operands as a set of 32 bits (zeros and ones) and return standard JavaScript numerical values.

- {{jsxref("Operators/Bitwise_AND", "&amp;")}}
  - : Bitwise AND.
- {{jsxref("Operators/Bitwise_OR", "|")}}
  - : Bitwise OR.
- {{jsxref("Operators/Bitwise_XOR", "^")}}
  - : Bitwise XOR.

### Binary logical operators

Logical operators implement boolean (logical) values and have [short-circuiting](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting) behavior.

- {{jsxref("Operators/Logical_AND", "&amp;&amp;")}}
  - : Logical AND.
- {{jsxref("Operators/Logical_OR", "||")}}
  - : Logical OR.
- {{jsxref("Operators/Nullish_coalescing", "??")}}
  - : Nullish Coalescing Operator.

### Conditional (ternary) operator

- {{jsxref("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}
  - : The conditional operator returns one of two values based on the logical value of the condition.

### Assignment operators

An assignment operator assigns a value to its left operand based on the value of its right operand.

- {{jsxref("Operators/Assignment", "=")}}
  - : Assignment operator.
- {{jsxref("Operators/Multiplication_assignment", "*=")}}
  - : Multiplication assignment.
- {{jsxref("Operators/Division_assignment", "/=")}}
  - : Division assignment.
- {{jsxref("Operators/Remainder_assignment", "%=")}}
  - : Remainder assignment.
- {{jsxref("Operators/Addition_assignment", "+=")}}
  - : Addition assignment.
- {{jsxref("Operators/Subtraction_assignment", "-=")}}
  - : Subtraction assignment
- {{jsxref("Operators/Left_shift_assignment", "&lt;&lt;=")}}
  - : Left shift assignment.
- {{jsxref("Operators/Right_shift_assignment", "&gt;&gt;=")}}
  - : Right shift assignment.
- {{jsxref("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
  - : Unsigned right shift assignment.
- {{jsxref("Operators/Bitwise_AND_assignment", "&amp;=")}}
  - : Bitwise AND assignment.
- {{jsxref("Operators/Bitwise_XOR_assignment", "^=")}}
  - : Bitwise XOR assignment.
- {{jsxref("Operators/Bitwise_OR_assignment", "|=")}}
  - : Bitwise OR assignment.
- {{jsxref("Operators/Exponentiation_assignment", "**=")}}
  - : Exponentiation assignment.
- {{jsxref("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : Logical AND assignment.
- {{jsxref("Operators/Logical_OR_assignment", "||=")}}
  - : Logical OR assignment.
- {{jsxref("Operators/Nullish_coalescing_assignment", "??=")}}
  - : Nullish coalescing assignment.
- [`[a, b] = arr`, `{ a, b } = obj`](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
  - : Destructuring allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals.

### Yield operators

- {{jsxref("Operators/yield", "yield")}}
  - : Pause and resume a generator function.
- {{jsxref("Operators/yield*", "yield*")}}
  - : Delegate to another generator function or iterable object.

### Spread syntax

- {{jsxref("Operators/Spread_syntax", "...obj")}}
  - : Spread syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

### Comma operator

- {{jsxref("Operators/Comma_operator", ",")}}
  - : The comma operator allows multiple expressions to be evaluated in a single statement and returns the result of the last expression.

## Expressions and operators

As the [Statements, declarations, and expressions](/en-US/docs/Web/JavaScript/Reference/Statements#statements_declarations_and_expressions) section explains, an expression is a building block used to evaluate to a value, and statements, declarations, and expressions define specific slots where expressions are accepted. When an expression contains slots for further nested expressions, the part(s) that's not a slot is known as an operator.

For example, the syntax for [addition](/en-US/docs/Web/JavaScript/Reference/Operators/Addition) is `expression + expression` (if you read the spec, the operands are called _AdditiveExpression_ and _MultiplicativeExpression_, which are both subsets of _Expression_, but that's the spec's mechanism for defining [precedence and associativity](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence) and is irrelevant for our purposes). Apart from the two expression slots, the actual code entity it introduces is just `+`, which is the _addition operator_. Similarly, the syntax for [yield](/en-US/docs/Web/JavaScript/Reference/Operators/yield) is `yield expression`, so `yield` is known as the operator. In other words, each operator corresponds to an expression.

MDN also regards expressions without slots such as [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) as operators per the definition above, although we nearly always just refer to them as "syntax" or "expression".

An expression does not need to take a fixed number of slots. For example, the array literal syntax, `[expression, expression, expression]`, can take an arbitrary number of expression slots. The `[,,]` part might be called an "operator". MDN avoids this usage, but you may see it in functional programming languages like [Haskell](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html).

The line gets fuzzier with certain other code entities: what if an expression has a slot that's not an expression, or a code entity combined with an expression does not make an expression? Do we still refer to that code entity as an operator?

- In the [optional chaining](/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) expression `foo?.bar`, `foo` is an expression, but `bar` must be an identifier and is not evaluated to a value. Do we still regard `?.` as an operator?
- In the [arrow function](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) expression `arg => body`, `body` might be an expression (although it can also be a block body), and `arg` is just an argument list. Do we still regard `=>` as an operator?
- In the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) `...foo`, `foo` is an expression, but the whole thing is not an expression because it does not evaluate to a value—it only makes sense in certain other expressions like function calls, array literals, and object literals. Do we still regard `...` as an operator?

The term "operator" is not precisely defined in JavaScript, so MDN does not give a definitive answer. Our approach is to put all these constructs under "Operators", but avoiding formally referring to them as operators. Many useful concepts about operators, such as [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence), still apply to them.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Operator precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
