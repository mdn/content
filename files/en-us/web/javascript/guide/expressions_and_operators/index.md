---
title: Expressions and operators
slug: Web/JavaScript/Guide/Expressions_and_operators
page-type: guide
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}

This chapter describes JavaScript's expressions and operators, including assignment, comparison, arithmetic, bitwise, logical, string, ternary and more.

At a high level, an _expression_ is a valid unit of code that resolves to a value. There are two types of expressions: those that have side effects (such as assigning values) and those that purely _evaluate_.

The expression `x = 7` is an example of the first type. This expression uses the `=` _operator_ to assign the value seven to the variable `x`. The expression itself evaluates to `7`.

The expression `3 + 4` is an example of the second type. This expression uses the `+` operator to add `3` and `4` together and produces a value, `7`. However, if it's not eventually part of a bigger construct (for example, a [variable declaration](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) like `const z = 3 + 4`), its result will be immediately discarded — this is usually a programmer mistake because the evaluation doesn't produce any effects.

As the examples above also illustrate, all complex expressions are joined by _operators_, such as `=` and `+`. In this section, we will introduce the following operators:

- [Assignment operators](#assignment_operators)
- [Comparison operators](#comparison_operators)
- [Arithmetic operators](#arithmetic_operators)
- [Bitwise operators](#bitwise_operators)
- [Logical operators](#logical_operators)
- [BigInt operators](#bigint_operators)
- [String operators](#string_operators)
- [Conditional (ternary) operator](#conditional_ternary_operator)
- [Comma operator](#comma_operator)
- [Unary operators](#unary_operators)
- [Relational operators](#relational_operators)

These operators join operands either formed by higher-precedence operators or one of the [basic expressions](#basic_expressions). A complete and detailed list of operators and expressions is also available in the [reference](/en-US/docs/Web/JavaScript/Reference/Operators).

The _precedence_ of operators determines the order they are applied when evaluating an expression. For example:

```js
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
```

Despite `*` and `+` coming in different orders, both expressions would result in `7` because `*` has precedence over `+`, so the `*`-joined expression will always be evaluated first. You can override operator precedence by using parentheses (which creates a [grouped expression](#grouping_operator) — the basic expression). To see a complete table of operator precedence as well as various caveats, see the [Operator Precedence Reference](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) page.

JavaScript has both _binary_ and _unary_ operators, and one special ternary operator, the conditional operator.
A binary operator requires two operands, one before the operator and one after the operator:

```plain
operand1 operator operand2
```

For example, `3 + 4` or `x * y`. This form is called an _infix_ binary operator, because the operator is placed between two operands. All binary operators in JavaScript are infix.

A unary operator requires a single operand, either before or after the operator:

```plain
operator operand
operand operator
```

For example, `x++` or `++x`. The `operator operand` form is called a _prefix_ unary operator, and the `operand operator` form is called a _postfix_ unary operator. `++` and `--` are the only postfix operators in JavaScript — all other operators, like `!`, `typeof`, etc. are prefix.

## Assignment operators

An assignment operator assigns a value to its left operand based on the value of its right operand.
The simple assignment operator is equal (`=`), which assigns the value of its right operand to its left operand.
That is, `x = f()` is an assignment expression that assigns the value of `f()` to `x`.

There are also compound assignment operators that are shorthand for the operations listed in the following table:

| Name                                                                                                              | Shorthand operator | Meaning            |
| ----------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------ |
| [Assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)                                           | `x = f()`          | `x = f()`          |
| [Addition assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                         | `x += f()`         | `x = x + f()`      |
| [Subtraction assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)                   | `x -= f()`         | `x = x - f()`      |
| [Multiplication assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)             | `x *= f()`         | `x = x * f()`      |
| [Division assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment)                         | `x /= f()`         | `x = x / f()`      |
| [Remainder assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                       | `x %= f()`         | `x = x % f()`      |
| [Exponentiation assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)             | `x **= f()`        | `x = x ** f()`     |
| [Left shift assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)                     | `x <<= f()`        | `x = x << f()`     |
| [Right shift assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)                   | `x >>= f()`        | `x = x >> f()`     |
| [Unsigned right shift assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= f()`       | `x = x >>> f()`    |
| [Bitwise AND assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                   | `x &= f()`         | `x = x & f()`      |
| [Bitwise XOR assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                   | `x ^= f()`         | `x = x ^ f()`      |
| [Bitwise OR assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                     | `x \|= f()`        | `x = x \| f()`     |
| [Logical AND assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                   | `x &&= f()`        | `x && (x = f())`   |
| [Logical OR assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                     | `x \|\|= f()`      | `x \|\| (x = f())` |
| [Nullish coalescing assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)     | `x ??= f()`        | `x ?? (x = f())`   |

### Assigning to properties

If an expression evaluates to an [object](/en-US/docs/Web/JavaScript/Guide/Working_with_objects), then the left-hand side of an assignment expression may make assignments to properties of that expression.
For example:

```js
const obj = {};

obj.x = 3;
console.log(obj.x); // Prints 3.
console.log(obj); // Prints { x: 3 }.

const key = "y";
obj[key] = 5;
console.log(obj[key]); // Prints 5.
console.log(obj); // Prints { x: 3, y: 5 }.
```

For more information about objects, read [Working with Objects](/en-US/docs/Web/JavaScript/Guide/Working_with_objects).

If an expression does not evaluate to an object, then assignments to properties of that expression do not assign:

```js
const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.
```

In [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode#converting_mistakes_into_errors), the code above throws, because one cannot assign properties to primitives.

It is an error to assign values to unmodifiable properties or to properties of an expression without properties (`null` or `undefined`).

### Destructuring

For more complex assignments, the [destructuring assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax is a JavaScript expression that makes it possible to extract data from arrays or objects using a syntax that mirrors the construction of array and
object literals.

```js
const foo = ["one", "two", "three"];

// without destructuring
const one = foo[0];
const two = foo[1];
const three = foo[2];

// with destructuring
const [one, two, three] = foo;
```

### Evaluation and nesting

In general, assignments are used within a variable declaration (i.e., with [`const`][], [`let`][], or [`var`][]) or as standalone statements).

```js
// Declares a variable x and initializes it to the result of f().
// The result of the x = f() assignment expression is discarded.
let x = f();

x = g(); // Reassigns the variable x to the result of g().
```

[`const`]: /en-US/docs/Web/JavaScript/Reference/Statements/const
[`let`]: /en-US/docs/Web/JavaScript/Reference/Statements/let
[`var`]: /en-US/docs/Web/JavaScript/Reference/Statements/var

However, like other expressions, assignment expressions like `x = f()` evaluate into a result value.
Although this result value is usually not used, it can then be used by another expression.

Chaining assignments or nesting assignments in other expressions can result in surprising behavior.
For this reason, some JavaScript style guides [discourage chaining or nesting assignments][discourage assign chain]).
Nevertheless, assignment chaining and nesting may occur sometimes, so it is important to be able to understand how they work.

[discourage assign chain]: https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment

By chaining or nesting an assignment expression, its result can itself be assigned to another variable.
It can be logged, it can be put inside an array literal or function call, and so on.

```js-nolint
let x;
const y = (x = f()); // Or equivalently: const y = x = f();
console.log(y); // Logs the return value of the assignment x = f().

console.log(x = f()); // Logs the return value directly.

// An assignment expression can be nested in any place
// where expressions are generally allowed,
// such as array literals' elements or as function calls' arguments.
console.log([0, x = f(), 0]);
console.log(f(0, x = f(), 0));
```

The evaluation result matches the expression to the right of the `=` sign in the
"Meaning" column of the table above. That means that `x = f()` evaluates into
whatever `f()`'s result is, `x += f()` evaluates into the resulting sum `x + f()`,
`x **= f()` evaluates into the resulting power `x ** y`, and so on.

In the case of logical assignments, `x &&= f()`,
`x ||= f()`, and `x ??= f()`, the return value is that of the
logical operation without the assignment, so `x && f()`,
`x || f()`, and `x ?? f()`, respectively.

When chaining these expressions without parentheses or other grouping operators
like array literals, the assignment expressions are **grouped right to left**
(they are [right-associative][]), but they are **evaluated left to right**.

[right-associative]: https://en.wikipedia.org/wiki/Operator_associativity

Note that, for all assignment operators other than `=` itself,
the resulting values are always based on the operands' values _before_
the operation.

For example, assume that the following functions `f` and `g`
and the variables `x` and `y` have been declared:

```js
function f() {
  console.log("F!");
  return 2;
}
function g() {
  console.log("G!");
  return 3;
}
let x, y;
```

Consider these three examples:

```js-nolint
y = x = f();
y = [f(), x = g()];
x[f()] = g();
```

#### Evaluation example 1

`y = x = f()` is equivalent to `y = (x = f())`,
because the assignment operator `=` is [right-associative][].
However, it evaluates from left to right:

1. The assignment expression `y = x = f()` starts to evaluate.
   1. The `y` on this assignment's left-hand side evaluates
      into a reference to the variable named `y`.
   2. The assignment expression `x = f()` starts to evaluate.
      1. The `x` on this assignment's left-hand side evaluates
         into a reference to the variable named `x`.
      2. The function call `f()` prints "F!" to the console and
         then evaluates to the number `2`.
      3. That `2` result from `f()` is assigned to `x`.
   3. The assignment expression `x = f()` has now finished evaluating;
      its result is the new value of `x`, which is `2`.
   4. That `2` result in turn is also assigned to `y`.
2. The assignment expression `y = x = f()` has now finished evaluating;
   its result is the new value of `y` – which happens to be `2`.
   `x` and `y` are assigned to `2`,
   and the console has printed "F!".

#### Evaluation example 2

`y = [ f(), x = g() ]` also evaluates from left to right:

1. The assignment expression `y = [ f(), x = g() ]` starts to evaluate.
   1. The `y` on this assignment's left-hand evaluates
      into a reference to the variable named `y`.
   2. The inner array literal `[ f(), x = g() ]` starts to evaluate.
      1. The function call `f()` prints "F!" to the console and
         then evaluates to the number `2`.
      2. The assignment expression `x = g()` starts to evaluate.
         1. The `x` on this assignment's left-hand side evaluates
            into a reference to the variable named `x`.
         2. The function call `g()` prints "G!" to the console and
            then evaluates to the number `3`.
         3. That `3` result from `g()` is assigned to `x`.
      3. The assignment expression `x = g()` has now finished evaluating;
         its result is the new value of `x`, which is `3`.
         That `3` result becomes the next element
         in the inner array literal (after the `2` from the `f()`).
   3. The inner array literal `[ f(), x = g() ]`
      has now finished evaluating;
      its result is an array with two values: `[ 2, 3 ]`.
   4. That `[ 2, 3 ]` array is now assigned to `y`.
2. The assignment expression `y = [ f(), x = g() ]` has
   now finished evaluating;
   its result is the new value of `y` – which happens to be `[ 2, 3 ]`.
   `x` is now assigned to `3`,
   `y` is now assigned to `[ 2, 3 ]`,
   and the console has printed "F!" then "G!".

#### Evaluation example 3

`x[f()] = g()` also evaluates from left to right.
(This example assumes that `x` is already assigned to some object.
For more information about objects, read [Working with Objects](/en-US/docs/Web/JavaScript/Guide/Working_with_objects).)

1. The assignment expression `x[f()] = g()` starts to evaluate.
   1. The `x[f()]` property access on this assignment's left-hand
      starts to evaluate.
      1. The `x` in this property access evaluates
         into a reference to the variable named `x`.
      2. Then the function call `f()` prints "F!" to the console and
         then evaluates to the number `2`.
   2. The `x[f()]` property access on this assignment
      has now finished evaluating;
      its result is a variable property reference: `x[2]`.
   3. Then the function call `g()` prints "G!" to the console and
      then evaluates to the number `3`.
   4. That `3` is now assigned to `x[2]`.
      (This step will succeed only if `x` is assigned to an [object](/en-US/docs/Web/JavaScript/Guide/Working_with_objects).)
2. The assignment expression `x[f()] = g()` has now finished evaluating;
   its result is the new value of `x[2]` – which happens to be `3`.
   `x[2]` is now assigned to `3`,
   and the console has printed "F!" then "G!".

### Avoid assignment chains

Chaining assignments or nesting assignments in other expressions can
result in surprising behavior. For this reason,
[chaining assignments in the same statement is discouraged][discourage assign chain]).

In particular, putting a variable chain in a [`const`][], [`let`][], or [`var`][] statement often does _not_ work. Only the outermost/leftmost variable would get declared; other variables within the assignment chain are _not_ declared by the `const`/`let`/`var` statement.
For example:

```js-nolint
const z = y = x = f();
```

This statement seemingly declares the variables `x`, `y`, and `z`.
However, it only actually declares the variable `z`.
`y` and `x` are either invalid references to nonexistent variables (in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)) or, worse, would implicitly create [global variables](/en-US/docs/Glossary/Global_variable) for `x` and `y` in [sloppy mode](/en-US/docs/Glossary/Sloppy_mode).

## Comparison operators

A comparison operator compares its operands and returns a logical value based on whether the comparison is true.
The operands can be numerical, string, logical, or [object](/en-US/docs/Web/JavaScript/Guide/Working_with_objects) values.
Strings are compared based on standard lexicographical ordering, using Unicode values.
In most cases, if the two operands are not of the same type, JavaScript attempts to convert them to an appropriate type for the comparison.
This behavior generally results in comparing the operands numerically.
The sole exceptions to type conversion within comparisons involve the `===` and `!==` operators, which perform strict equality and inequality comparisons.
These operators do not attempt to convert the operands to compatible types before checking equality.
The following table describes the comparison operators in terms of this sample code:

```js
const var1 = 3;
const var2 = 4;
```

<table class="standard-table">
  <caption>
    Comparison operators
  </caption>
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Description</th>
      <th scope="col">Examples returning true</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Equality">Equal</a> (<code>==</code>)
      </td>
      <td>Returns <code>true</code> if the operands are equal.</td>
      <td>
        <code>3 == var1</code>
        <p><code>"3" == var1</code></p>
        <code>3 == '3'</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Inequality">Not equal</a> (<code>!=</code>)
      </td>
      <td>Returns <code>true</code> if the operands are not equal.</td>
      <td>
        <code>var1 != 4<br />var2 != "3"</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality">Strict equal</a> (<code>===</code>)
      </td>
      <td>
        Returns <code>true</code> if the operands are equal and of the same
        type. See also {{jsxref("Object.is")}} and
        <a href="/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness">sameness in JS</a>.
      </td>
      <td><code>3 === var1</code></td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality">Strict not equal</a> (<code>!==</code>)
      </td>
      <td>
        Returns <code>true</code> if the operands are of the same type but not equal, or are of different type.
      </td>
      <td>
        <code>var1 !== "3"<br />3 !== '3'</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than">Greater than</a> (<code>></code>)
      </td>
      <td>
        Returns <code>true</code> if the left operand is greater than the right operand.
      </td>
      <td>
        <code>var2 > var1<br />"12" > 2</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal">Greater than or equal</a>
        (<code>>=</code>)
      </td>
      <td>
        Returns <code>true</code> if the left operand is greater than or equal to the right operand.
      </td>
      <td>
        <code>var2 >= var1<br />var1 >= 3</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Less_than">Less than</a>
        (<code>&#x3C;</code>)
      </td>
      <td>
        Returns <code>true</code> if the left operand is less than the right operand.
      </td>
      <td>
        <code>var1 &#x3C; var2<br />"2" &#x3C; 12</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal">Less than or equal</a>
        (<code>&#x3C;=</code>)
      </td>
      <td>
        Returns <code>true</code> if the left operand is less than or equal to the right operand.
      </td>
      <td>
        <code>var1 &#x3C;= var2<br />var2 &#x3C;= 5</code>
      </td>
    </tr>
  </tbody>
</table>

> **Note:** `=>` is not a comparison operator but rather is the notation
> for [Arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

## Arithmetic operators

An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value.
The standard arithmetic operators are addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
These operators work as they do in most other programming languages when used with floating point numbers (in particular, note that division by zero produces {{jsxref("Infinity")}}). For example:

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // this is true
```

In addition to the standard arithmetic operations (`+`, `-`, `*`, `/`), JavaScript provides the arithmetic operators listed in the following table:

<table class="fullwidth-table">
  <caption>
    Arithmetic operators
  </caption>
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Description</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Remainder">Remainder</a> (<code>%</code>)
      </td>
      <td>
        Binary operator. Returns the integer remainder of dividing the two operands.
      </td>
      <td>12 % 5 returns 2.</td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Increment">Increment</a> (<code>++</code>)
      </td>
      <td>
        Unary operator. Adds one to its operand. If used as a prefix operator
        (<code>++x</code>), returns the value of its operand after adding one;
        if used as a postfix operator (<code>x++</code>), returns the value of
        its operand before adding one.
      </td>
      <td>
        If <code>x</code> is 3, then <code>++x</code> sets <code>x</code> to 4
        and returns 4, whereas <code>x++</code> returns 3 and, only then, sets <code>x</code> to 4.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Decrement">Decrement</a> (<code>--</code>)
      </td>
      <td>
        Unary operator. Subtracts one from its operand.
        The return value is analogous to that for the increment operator.
      </td>
      <td>
        If <code>x</code> is 3, then <code>--x</code> sets <code>x</code> to 2
        and returns 2, whereas <code>x--</code> returns 3 and, only then, sets <code>x</code> to 2.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation">Unary negation</a> (<code>-</code>)
      </td>
      <td>Unary operator. Returns the negation of its operand.</td>
      <td>If <code>x</code> is 3, then <code>-x</code> returns -3.</td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unary plus</a> (<code>+</code>)
      </td>
      <td>
        Unary operator. Attempts to <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion">convert the operand to a number</a>, if it is not already.
      </td>
      <td>
        <p><code>+"3"</code> returns <code>3</code>.</p>
        <p><code>+true</code> returns <code>1</code>.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation">Exponentiation operator</a> (<code>**</code>)
      </td>
      <td>
        Calculates the <code>base</code> to the <code>exponent</code> power,
        that is, <code>base^exponent</code>
      </td>
      <td>
        <code>2 ** 3</code> returns <code>8</code>.<br /><code>10 ** -1</code>
        returns <code>0.1</code>.
      </td>
    </tr>
  </tbody>
</table>

## Bitwise operators

A bitwise operator treats their operands as a set of 32 bits (zeros and ones), rather
than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has
a binary representation of 1001. Bitwise operators perform their operations on such
binary representations, but they return standard JavaScript numerical values.

The following table summarizes JavaScript's bitwise operators.

| Operator                                                                                     | Usage     | Description                                                                                                                                                             |
| -------------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bitwise AND](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                    | `a & b`   | Returns a one in each bit position for which the corresponding bits of both operands are ones.                                                                          |
| [Bitwise OR](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                      | `a \| b`  | Returns a zero in each bit position for which the corresponding bits of both operands are zeros.                                                                        |
| [Bitwise XOR](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                    | `a ^ b`   | Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.] |
| [Bitwise NOT](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                    | `~ a`     | Inverts the bits of its operand.                                                                                                                                        |
| [Left shift](/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift)                      | `a << b`  | Shifts `a` in binary representation `b` bits to the left, shifting in zeros from the right.                                                                             |
| [Sign-propagating right shift](/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift)   | `a >> b`  | Shifts `a` in binary representation `b` bits to the right, discarding bits shifted off.                                                                                 |
| [Zero-fill right shift](/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) | `a >>> b` | Shifts `a` in binary representation `b` bits to the right, discarding bits shifted off, and shifting in zeros from the left.                                            |

### Bitwise logical operators

Conceptually, the bitwise logical operators work as follows:

- The operands are converted to thirty-two-bit integers and expressed by a series of bits (zeros and ones).
  Numbers with more than 32 bits get their most significant bits discarded.
  For example, the following integer with more than 32 bits will be converted to a 32-bit integer:

  ```plain
  Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  After:                 1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Each bit in the first operand is paired with the corresponding bit in the second operand: first bit to first bit, second bit to second bit, and so on.
- The operator is applied to each pair of bits, and the result is constructed bitwise.

For example, the binary representation of nine is 1001, and the binary representation of fifteen is 1111.
So, when the bitwise operators are applied to these values, the results are as follows:

| Expression | Result | Binary Description                                |
| ---------- | ------ | ------------------------------------------------- |
| `15 & 9`   | `9`    | `1111 & 1001 = 1001`                              |
| `15 \| 9`  | `15`   | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`   | `6`    | `1111 ^ 1001 = 0110`                              |
| `~15`      | `-16`  | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`       | `-10`  | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

Note that all 32 bits are inverted using the Bitwise NOT operator, and that values with
the most significant (left-most) bit set to 1 represent negative numbers
(two's-complement representation). `~x` evaluates to the same value that
`-x - 1` evaluates to.

### Bitwise shift operators

The bitwise shift operators take two operands: the first is a quantity to be shifted, and the second specifies the number of bit positions by which the first operand is to be
shifted.
The direction of the shift operation is controlled by the operator used.

Shift operators convert their operands to thirty-two-bit integers and return a result of either type {{jsxref("Number")}} or {{jsxref("BigInt")}}: specifically, if the type
of the left operand is {{jsxref("BigInt")}}, they return {{jsxref("BigInt")}};
otherwise, they return {{jsxref("Number")}}.

The shift operators are listed in the following table.

<table class="fullwidth-table">
  <caption>
    Bitwise shift operators
  </caption>
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Description</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift">Left shift</a><br />(<code>&#x3C;&#x3C;</code>)
      </td>
      <td>
        This operator shifts the first operand the specified number of bits to
        the left. Excess bits shifted off to the left are discarded. Zero bits
        are shifted in from the right.
      </td>
      <td>
        <code>9&#x3C;&#x3C;2</code> yields 36, because 1001 shifted 2 bits to
        the left becomes 100100, which is 36.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift">Sign-propagating right shift</a> (<code>>></code>)
      </td>
      <td>
        This operator shifts the first operand the specified number of bits to
        the right. Excess bits shifted off to the right are discarded. Copies of
        the leftmost bit are shifted in from the left.
      </td>
      <td>
        <code>9>>2</code> yields 2, because 1001 shifted 2 bits to the right
        becomes 10, which is 2. Likewise, <code>-9>>2</code> yields -3, because the sign is preserved.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Zero-fill right shift</a> (<code>>>></code>)
      </td>
      <td>
        This operator shifts the first operand the specified number of bits to
        the right. Excess bits shifted off to the right are discarded. Zero bits
        are shifted in from the left.
      </td>
      <td>
        <code>19>>>2</code> yields 4, because 10011 shifted 2 bits to the right
        becomes 100, which is 4. For non-negative numbers, zero-fill right shift
        and sign-propagating right shift yield the same result.
      </td>
    </tr>
  </tbody>
</table>

## Logical operators

Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value.
However, the `&&` and `||` operators actually return the value of one of the specified operands, so if these
operators are used with non-Boolean values, they may return a non-Boolean value.
The logical operators are described in the following table.

<table class="fullwidth-table">
  <caption>
    Logical operators
  </caption>
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Usage</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Logical AND</a> (<code>&#x26;&#x26;</code>)
      </td>
      <td><code>expr1 &#x26;&#x26; expr2</code></td>
      <td>
        Returns <code>expr1</code> if it can be converted to <code>false</code>;
        otherwise, returns <code>expr2</code>. Thus, when used with Boolean
        values, <code>&#x26;&#x26;</code> returns <code>true</code> if both
        operands are true; otherwise, returns <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logical OR </a>(<code>||</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        Returns <code>expr1</code> if it can be converted to <code>true</code>;
        otherwise, returns <code>expr2</code>. Thus, when used with Boolean
        values, <code>||</code> returns <code>true</code> if either operand is
        true; if both are false, returns <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT">Logical NOT</a> (<code>!</code>)
      </td>
      <td><code>!expr</code></td>
      <td>
        Returns <code>false</code> if its single operand that can be converted
        to <code>true</code>; otherwise, returns <code>true</code>.
      </td>
    </tr>
  </tbody>
</table>

Examples of expressions that can be converted to `false` are those that
evaluate to null, 0, NaN, the empty string (""), or undefined.

The following code shows examples of the `&&` (logical AND)
operator.

```js
const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 === 4; // f && f returns false
const a5 = "Cat" && "Dog"; // t && t returns Dog
const a6 = false && "Cat"; // f && t returns false
const a7 = "Cat" && false; // t && f returns false
```

The following code shows examples of the || (logical OR) operator.

```js
const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true || false; // t || f returns true
const o4 = false || 3 === 4; // f || f returns false
const o5 = "Cat" || "Dog"; // t || t returns Cat
const o6 = false || "Cat"; // f || t returns Cat
const o7 = "Cat" || false; // t || f returns Cat
```

The following code shows examples of the ! (logical NOT) operator.

```js
const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false
```

### Short-circuit evaluation

As logical expressions are evaluated left to right, they are tested for possible
"short-circuit" evaluation using the following rules:

- `false && anything` is short-circuit evaluated to false.
- `true || anything` is short-circuit evaluated to true.

The rules of logic guarantee that these evaluations are always correct. Note that the
_anything_ part of the above expressions is not evaluated, so any side effects of
doing so do not take effect.

Note that for the second case, in modern code you can use the [Nullish coalescing operator](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) (`??`) that works like `||`, but it only returns the second expression, when the first one is "[nullish](/en-US/docs/Glossary/Nullish)", i.e. [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null)
or [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined).
It is thus the better alternative to provide defaults, when values like `''` or `0` are valid values for the first expression, too.

## BigInt operators

Most operators that can be used between numbers can be used between [`BigInt`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) values as well.

```js
// BigInt addition
const a = 1n + 2n; // 3n
// Division with BigInts round towards zero
const b = 1n / 2n; // 0n
// Bitwise operations with BigInts do not truncate either side
const c = 40000000000000000n >> 2n; // 10000000000000000n
```

One exception is [unsigned right shift (`>>>`)](/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift), which is not defined for BigInt values. This is because a BigInt does not have a fixed width, so technically it does not have a "highest bit".

```js
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

BigInts and numbers are not mutually replaceable — you cannot mix them in calculations.

```js example-bad
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
```

This is because BigInt is neither a subset nor a superset of numbers. BigInts have higher precision than numbers when representing large integers, but cannot represent decimals, so implicit conversion on either side might lose precision. Use explicit conversion to signal whether you wish the operation to be a number operation or a BigInt one.

```js example-good
const a = Number(1n) + 2; // 3
const b = 1n + BigInt(2); // 3n
```

You can compare BigInts with numbers.

```js
const a = 1n > 2; // false
const b = 3 > 2n; // true
```

## String operators

In addition to the comparison operators, which can be used on string values, the concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings.

For example,

```js
console.log("my " + "string"); // console logs the string "my string".
```

The shorthand assignment operator `+=` can also be used to concatenate strings.

For example,

```js
let mystring = "alpha";
mystring += "bet"; // evaluates to "alphabet" and assigns this value to mystring.
```

## Conditional (ternary) operator

The [conditional operator](/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
is the only JavaScript operator that takes three operands.
The operator can have one of two values based on a condition.
The syntax is:

```js-nolint
condition ? val1 : val2
```

If `condition` is true, the operator has the value of `val1`.
Otherwise it has the value of `val2`. You can use the conditional operator anywhere you would use a standard operator.

For example,

```js
const status = age >= 18 ? "adult" : "minor";
```

This statement assigns the value "adult" to the variable `status` if
`age` is eighteen or more. Otherwise, it assigns the value "minor" to
`status`.

## Comma operator

The [comma operator](/en-US/docs/Web/JavaScript/Reference/Operators/Comma_operator) (`,`)
evaluates both of its operands and returns the value of the last operand.
This operator is primarily used inside a `for` loop, to allow multiple variables to be updated each time through the loop.
It is regarded bad style to use it elsewhere, when it is not necessary.
Often two separate statements can and should be used instead.

For example, if `a` is a 2-dimensional array with 10 elements on a side, the following code uses the comma operator to update two variables at once.
The code prints the values of the diagonal elements in the array:

```js
const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
  //                              ^
  console.log(`a[${i}][${j}]= ${a[i][j]}`);
}
```

## Unary operators

A unary operation is an operation with only one operand.

### delete

The [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator deletes an object's property.
The syntax is:

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

where `object` is the name of an object, `property` is an existing property, and `propertyKey` is a string or symbol referring to an existing property.

If the `delete` operator succeeds, it removes the property from the object.
Trying to access it afterwards will yield `undefined`.
The `delete` operator returns `true` if the operation is possible; it returns `false` if the operation is not possible.

```js
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = { h: 4 };
delete myObj.h; // returns true (can delete user-defined properties)
```

#### Deleting array elements

Since arrays are just objects, it's technically possible to `delete` elements from them.
This is, however, regarded as a bad practice — try to avoid it.
When you delete an array property, the array length is not affected and other elements are not re-indexed.
To achieve that behavior, it is much better to just overwrite the element with the value `undefined`.
To actually manipulate the array, use the various array methods such as [`splice`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

### typeof

The [`typeof` operator](/en-US/docs/Web/JavaScript/Reference/Operators/typeof) returns a string indicating the type of the unevaluated operand.
`operand` is the string, variable, keyword, or object for which the type is to be returned.
The parentheses are optional.

Suppose you define the following variables:

```js
const myFun = new Function("5 + 2");
const shape = "round";
const size = 1;
const foo = ["Apple", "Mango", "Orange"];
const today = new Date();
```

The `typeof` operator returns the following results for these variables:

```js
typeof myFun; // returns "function"
typeof shape; // returns "string"
typeof size; // returns "number"
typeof foo; // returns "object"
typeof today; // returns "object"
typeof doesntExist; // returns "undefined"
```

For the keywords `true` and `null`, the `typeof`
operator returns the following results:

```js
typeof true; // returns "boolean"
typeof null; // returns "object"
```

For a number or string, the `typeof` operator returns the following results:

```js
typeof 62; // returns "number"
typeof "Hello world"; // returns "string"
```

For property values, the `typeof` operator returns the type of value the
property contains:

```js
typeof document.lastModified; // returns "string"
typeof window.length; // returns "number"
typeof Math.LN2; // returns "number"
```

For methods and functions, the `typeof` operator returns results as follows:

```js
typeof blur; // returns "function"
typeof eval; // returns "function"
typeof parseInt; // returns "function"
typeof shape.split; // returns "function"
```

For predefined objects, the `typeof` operator returns results as follows:

```js
typeof Date; // returns "function"
typeof Function; // returns "function"
typeof Math; // returns "object"
typeof Option; // returns "function"
typeof String; // returns "function"
```

### void

The [`void` operator](/en-US/docs/Web/JavaScript/Reference/Operators/void) specifies an expression to be evaluated without returning a value. `expression` is a JavaScript expression to evaluate.
The parentheses surrounding the expression are optional, but it is good style to use them to avoid precedence issues.

## Relational operators

A relational operator compares its operands and returns a Boolean value based on whether the comparison is true.

### in

The [`in` operator](/en-US/docs/Web/JavaScript/Reference/Operators/in) returns `true` if the specified property is in the specified object.
The syntax is:

```js-nolint
propNameOrNumber in objectName
```

where `propNameOrNumber` is a string, numeric, or symbol expression representing a property name or array index, and `objectName` is the name of an object.

The following examples show some uses of the `in` operator.

```js
// Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
"bay" in trees; // returns false
// (you must specify the index number, not the value at that index)
"length" in trees; // returns true (length is an Array property)

// built-in objects
"PI" in Math; // returns true
const myString = new String("coral");
"length" in myString; // returns true

// Custom objects
const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // returns true
"model" in mycar; // returns true
```

### instanceof

The [`instanceof` operator](/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) returns `true`
if the specified object is of the specified object type. The syntax is:

```js-nolint
objectName instanceof objectType
```

where `objectName` is the name of the object to compare to `objectType`, and `objectType` is an object type, such as {{jsxref("Date")}} or {{jsxref("Array")}}.

Use `instanceof` when you need to confirm the type of an object at runtime.
For example, when catching exceptions, you can branch to different exception-handling code depending on the type of exception thrown.

For example, the following code uses `instanceof` to determine whether `theDay` is a `Date` object. Because `theDay` is a `Date` object, the statements in the `if` statement execute.

```js
const theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
```

## Basic expressions

All operators eventually operate on one or more basic expressions. These basic expressions include [identifiers](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) and [literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#literals), but there are a few other kinds as well. They are briefly introduced below, and their semantics are described in detail in their respective reference sections.

### this

Use the [`this` keyword](/en-US/docs/Web/JavaScript/Reference/Operators/this) to refer to the current object.
In general, `this` refers to the calling object in a method.
Use `this` either with the dot or the bracket notation:

```js
this["propertyName"];
this.propertyName;
```

Suppose a function called `validate` validates an object's `value` property, given the object and the high and low values:

```js
function validate(obj, lowval, hival) {
  if (obj.value < lowval || obj.value > hival) {
    console.log("Invalid Value!");
  }
}
```

You could call `validate` in each form element's `onChange` event handler, using `this` to pass it to the form element, as in the following example:

```html
<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size="3" onChange="validate(this, 18, 99);" />
```

### Grouping operator

The grouping operator `( )` controls the precedence of evaluation in
expressions. For example, you can override multiplication and division first, then
addition and subtraction to evaluate addition first.

```js-nolint
const a = 1;
const b = 2;
const c = 3;

// default precedence
a + b * c     // 7
// evaluated by default like this
a + (b * c)   // 7

// now overriding precedence
// addition before multiplication
(a + b) * c   // 9

// which is equivalent to
a * c + b * c // 9
```

### new

You can use the [`new` operator](/en-US/docs/Web/JavaScript/Reference/Operators/new) to create an instance of a user-defined object type or of one of the built-in object types. Use `new` as follows:

```js
const objectName = new objectType(param1, param2, /* …, */ paramN);
```

### super

The [`super` keyword](/en-US/docs/Web/JavaScript/Reference/Operators/super) is used to call functions on an object's parent.
It is useful with [classes](/en-US/docs/Web/JavaScript/Reference/Classes) to call the parent constructor, for example.

```js
super(args); // calls the parent constructor.
super.functionOnParent(args);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}
