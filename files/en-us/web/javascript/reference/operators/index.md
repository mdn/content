---
title: Expressions and operators
slug: Web/JavaScript/Reference/Operators
tags:
  - JavaScript
  - Landing page
  - Operators
  - Overview
  - Reference
browser-compat: javascript.operators
---
{{JSSidebar("Operators")}}

This chapter documents all the JavaScript language operators, expressions and keywords.

## Expressions and operators by category

For an alphabetical listing see the sidebar on the left.

### Primary expressions

Basic keywords and general expressions in JavaScript.

- {{JSxRef("Operators/this", "this")}}
  - : The `this` keyword refers to a special property of an execution context.
- {{JSxRef("Operators/function", "function")}}
  - : The `function` keyword defines a function expression.
- {{JSxRef("Operators/class", "class")}}
  - : The `class` keyword defines a class expression.
- {{JSxRef("Operators/function*", "function*")}}
  - : The `function*` keyword defines a generator function expression.
- {{JSxRef("Operators/yield", "yield")}}
  - : Pause and resume a generator function.
- {{JSxRef("Operators/yield*", "yield*")}}
  - : Delegate to another generator function or iterable object.
- {{JSxRef("Operators/async_function", "async function")}}
  - : The `async function` defines an async function expression.
- {{JSxRef("Operators/await", "await")}}
  - : Pause and resume an async function and wait for the promise's resolution/rejection.
- {{JSxRef("Operators/async_function*", "async function*")}}
  - : The `async function*` keywords define an async generator function expression.
- {{JSxRef("Global_Objects/Array", "[]")}}
  - : Array initializer/literal syntax.
- {{JSxRef("Operators/Object_initializer", "{}")}}
  - : Object initializer/literal syntax.
- {{JSxRef("Global_Objects/RegExp", "/ab+c/i")}}
  - : Regular expression literal syntax.
- {{JSxRef("Operators/Grouping", "( )")}}
  - : Grouping operator.

### Left-hand-side expressions

Left values are the destination of an assignment.

- {{JSxRef("Operators/Property_accessors", "Property accessors", "", 1)}}
  - : Member operators provide access to a property or method of an object
    (`object.property` and `object["property"]`).
- {{JSxRef("Operators/new", "new")}}
  - : The `new` operator creates an instance of a constructor.
- {{JSxRef("Operators/new%2Etarget", "new.target")}}
  - : In constructors, `new.target` refers to the constructor that was invoked by {{JSxRef("Operators/new", "new")}}.
- {{JSxRef("Operators/import%2Emeta", "import.meta")}}
  - : An object exposing context-specific metadata to a JavaScript module.
- {{JSxRef("Operators/super", "super")}}
  - : The `super` keyword calls the parent constructor.
- {{JSxRef("Operators/Spread_syntax", "...obj")}}
  - : Spread syntax allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.

### Increment and decrement

Postfix/prefix increment and postfix/prefix decrement operators.

- {{JSxRef("Operators/Increment", "A++")}}
  - : Postfix increment operator.
- {{JSxRef("Operators/Decrement", "A--")}}
  - : Postfix decrement operator.
- {{JSxRef("Operators/Increment", "++A")}}
  - : Prefix increment operator.
- {{JSxRef("Operators/Decrement", "--A")}}
  - : Prefix decrement operator.

### Unary operators

A unary operation is an operation with only one operand.

- {{JSxRef("Operators/delete", "delete")}}
  - : The `delete` operator deletes a property from an object.
- {{JSxRef("Operators/void", "void")}}
  - : The `void` operator discards an expression's return value.
- {{JSxRef("Operators/typeof", "typeof")}}
  - : The `typeof` operator determines the type of a given object.
- {{JSxRef("Operators/Unary_plus", "+")}}
  - : The unary plus operator converts its operand to Number type.
- {{JSxRef("Operators/Unary_negation", "-")}}
  - : The unary negation operator converts its operand to Number type and then negates it.
- {{JSxRef("Operators/Bitwise_NOT", "~")}}
  - : Bitwise NOT operator.
- {{JSxRef("Operators/Logical_NOT", "!")}}
  - : Logical NOT operator.

### Arithmetic operators

Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value.

- {{JSxRef("Operators/Addition", "+")}} (Plus)
  - : Addition operator.
- {{JSxRef("Operators/Subtraction", "-")}}
  - : Subtraction operator.
- {{JSxRef("Operators/Division", "/")}}
  - : Division operator.
- {{JSxRef("Operators/Multiplication", "*")}}
  - : Multiplication operator.
- {{JSxRef("Operators/Remainder", "%")}}
  - : Remainder operator.
- {{JSxRef("Operators/Exponentiation", "**")}}
  - : Exponentiation operator.

### Relational operators

A comparison operator compares its operands and returns a boolean value based on whether the comparison is true.

- {{JSxRef("Operators/in", "in")}}
  - : The `in` operator determines whether an object has a given property.
- {{JSxRef("Operators/instanceof", "instanceof")}}
  - : The `instanceof` operator determines whether an object is an instance of another object.
- {{JSxRef("Operators/Less_than", "&lt;")}} (Less than)
  - : Less than operator.
- {{JSxRef("Operators/Greater_than", "&gt;")}} (Greater than)
  - : Greater than operator.
- {{JSxRef("Operators/Less_than_or_equal", "&lt;=")}}
  - : Less than or equal operator.
- {{JSxRef("Operators/Greater_than_or_equal", "&gt;=")}}
  - : Greater than or equal operator.

> **Note:** `=>` is not an operator, but the notation for [Arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Equality operators

The result of evaluating an equality operator is always of type boolean based on whether the comparison is true.

- {{JSxRef("Operators/Equality", "==")}}
  - : Equality operator.
- {{JSxRef("Operators/Inequality", "!=")}}
  - : Inequality operator.
- {{JSxRef("Operators/Strict_equality", "===")}}
  - : Strict equality operator.
- {{JSxRef("Operators/Strict_inequality", "!==")}}
  - : Strict inequality operator.

### Bitwise shift operators

Operations to shift all bits of the operand.

- {{JSxRef("Operators/Left_shift", "&lt;&lt;")}}
  - : Bitwise left shift operator.
- {{JSxRef("Operators/Right_shift", "&gt;&gt;")}}
  - : Bitwise right shift operator.
- {{JSxRef("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : Bitwise unsigned right shift operator.

### Binary bitwise operators

Bitwise operators treat their operands as a set of 32 bits (zeros and ones) and return standard JavaScript numerical values.

- {{JSxRef("Operators/Bitwise_AND", "&amp;")}}
  - : Bitwise AND.
- {{JSxRef("Operators/Bitwise_OR", "|")}}
  - : Bitwise OR.
- {{JSxRef("Operators/Bitwise_XOR", "^")}}
  - : Bitwise XOR.

### Binary logical operators

Logical operators are typically used with boolean (logical) values, and when they are, they return a boolean value.

- {{JSxRef("Operators/Logical_AND", "&amp;&amp;")}}
  - : Logical AND.
- {{JSxRef("Operators/Logical_OR", "||")}}
  - : Logical OR.
- {{JSxRef("Operators/Nullish_coalescing_operator", "??")}}
  - : Nullish Coalescing Operator.

### Conditional (ternary) operator

- {{JSxRef("Operators/Conditional_Operator", "(condition ? ifTrue : ifFalse)")}}
  - : The conditional operator returns one of two values based on the logical value of the condition.

### Optional Chaining operator

- {{JSxRef("Operators/Optional_chaining", "?.")}}
  - : The optional chaining operator returns `undefined` instead of causing an error if a reference is [nullish](/en-US/docs/Glossary/Nullish) ([`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) or [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

### Assignment operators

An assignment operator assigns a value to its left operand based on the value of its right operand.

- {{JSxRef("Operators/Assignment", "=")}}
  - : Assignment operator.
- {{JSxRef("Operators/Multiplication_assignment", "*=")}}
  - : Multiplication assignment.
- {{JSxRef("Operators/Exponentiation_assignment", "**=")}}
  - : Exponentiation assignment.
- {{JSxRef("Operators/Division_assignment", "/=")}}
  - : Division assignment.
- {{JSxRef("Operators/Remainder_assignment", "%=")}}
  - : Remainder assignment.
- {{JSxRef("Operators/Addition_assignment", "+=")}}
  - : Addition assignment.
- {{JSxRef("Operators/Subtraction_assignment", "-=")}}
  - : Subtraction assignment
- {{JSxRef("Operators/Left_shift_assignment", "&lt;&lt;=")}}
  - : Left shift assignment.
- {{JSxRef("Operators/Right_shift_assignment", "&gt;&gt;=")}}
  - : Right shift assignment.
- {{JSxRef("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
  - : Unsigned right shift assignment.
- {{JSxRef("Operators/Bitwise_AND_assignment", "&amp;=")}}
  - : Bitwise AND assignment.
- {{JSxRef("Operators/Bitwise_XOR_assignment", "^=")}}
  - : Bitwise XOR assignment.
- {{JSxRef("Operators/Bitwise_OR_assignment", "|=")}}
  - : Bitwise OR assignment.
- {{JSxRef("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : Logical AND assignment.
- {{JSxRef("Operators/Logical_OR_assignment", "||=")}}
  - : Logical OR assignment.
- {{JSxRef("Operators/Logical_nullish_assignment", "??=")}}
  - : Logical nullish assignment.
- {{JSxRef("Operators/Destructuring_assignment", "[a, b] = [1, 2]")}}
  {{JSxRef("Operators/Destructuring_assignment", "{a, b} = {a:1, b:2}")}}
  - : Destructuring assignment allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals.

### Comma operator

- {{JSxRef("Operators/Comma_Operator", ",")}}
  - : The comma operator allows multiple expressions to be evaluated in a single statement and returns the result of the last expression.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Operator precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
