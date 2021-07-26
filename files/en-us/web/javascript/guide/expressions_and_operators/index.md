---
title: Expressions and operators
slug: Web/JavaScript/Guide/Expressions_and_Operators
tags:
  - Beginner
  - Expressions
  - Guide
  - JavaScript
  - Operators
  - l10n:priority
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions",
  "Web/JavaScript/Guide/Numbers_and_dates")}}

This chapter describes JavaScript's expressions and operators,
including assignment, comparison, arithmetic, bitwise, logical, string, ternary and
more.

A complete and detailed list of operators and expressions is also available in the [reference](/en-US/docs/Web/JavaScript/Reference/Operators).

## Operators

JavaScript has the following types of operators. This section describes the operators
and contains information about operator precedence.

- [Assignment operators](#assignment_operators)
- [Comparison operators](#comparison_operators)
- [Arithmetic operators](#arithmetic_operators)
- [Bitwise operators](#bitwise_operators)
- [Logical operators](#logical_operators)
- [String operators](#string_operators)
- [Conditional (ternary) operator](#conditional_ternary_operator)
- [Comma operator](#comma_operator)
- [Unary operators](#unary_operators)
- [Relational operators](#relational_operators)

JavaScript has both _binary_ and _unary_ operators, and one special
ternary operator, the conditional operator. A binary operator requires two operands, one
before the operator and one after the operator:

```js
operand1 operator operand2
```

For example, `3+4` or `x*y`.

A unary operator requires a single operand, either before or after the operator:

```js
operator operand
```

or

```js
operand operator
```

For example, `x++` or `++x`.

### Assignment operators

An assignment operator assigns a value to its left operand based on the value of its
right operand. The simple assignment operator is equal (`=`), which assigns
the value of its right operand to its left operand. That is, `x = y` assigns
the value of `y` to `x`.

There are also compound assignment operators that are shorthand for the operations
listed in the following table:

| Name                                                                                                              | Shorthand operator | Meaning          |
| ----------------------------------------------------------------------------------------------------------------- | ------------------ | ---------------- |
| [Assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)                                           | `x = y`            | `x = y`          |
| [Addition assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                         | `x += y`           | `x = x + y`      |
| [Subtraction assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)                   | `x -= y`           | `x = x - y`      |
| [Multiplication assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)             | `x *= y`           | `x = x * y`      |
| [Division assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment)                         | `x /= y`           | `x = x / y`      |
| [Remainder assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                       | `x %= y`           | `x = x % y`      |
| [Exponentiation assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)             | `x **= y`          | `x = x ** y`     |
| [Left shift assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)                     | `x <<= y`          | `x = x << y`     |
| [Right shift assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)                   | `x >>= y`          | `x = x >> y`     |
| [Unsigned right shift assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= y`         | `x = x >>> y`    |
| [Bitwise AND assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                   | `x &= y`           | `x = x & y`      |
| [Bitwise XOR assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                   | `x ^= y`           | `x = x ^ y`      |
| [Bitwise OR assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                     | `x \|= y`          | `x = x \| y`     |
| [Logical AND assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                   | `x &&= y`          | `x && (x = y)`   |
| [Logical OR assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                     | `x \|\|= y`        | `x \|\| (x = y)` |
| [Logical nullish assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment)           | `x ??= y`          | `x ?? (x = y)`   |

#### Return value and chaining

Like most expressions, assignments like `x = y` have a return value. It can
be retrieved by e.g. assigning the expression or logging it:

    const z = (x = y); // Or equivalently: const z = x = y;

    console.log(z); // Log the return value of the assignment x = y.
    console.log(x = y); // Or log the return value directly.

The return value matches the expression to the right of the `=` sign in the
“Meaning” column of the table above. That means that `(x = y)` returns
`y`, `(x += y)` returns the resulting sum `x + y`,
`(x **= y)` returns the resulting power `x ** y`, and so on.

In the case of logical assignments, `(x &&= y)`,
`(x ||= y)`, and `(x ??= y)`, the return value is that of the
logical operation without the assignment, so `x && y`,
`x || y`, and `x ?? y`, respectively.

Note that the return values are always based on the operands’ values _before_
the operation.

When chaining these expressions, each assignment is evaluated
**right-to-left**. Consider these examples:

- `w = z = x = y` is equivalent to `w = (z = (x = y))` or
  `x = y; z = y; w = y`
- `z += x *= y` is equivalent to `z += (x *= y)` or
  `tmp = x * y; x *= y; z += tmp` (except without the `tmp`).

#### Destructuring

For more complex assignments, the [destructuring
assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax is a JavaScript expression that makes it possible to extract
data from arrays or objects using a syntax that mirrors the construction of array and
object literals.

```js
var foo = ['one', 'two', 'three'];

// without destructuring
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// with destructuring
var [one, two, three] = foo;
```

### Comparison operators

A comparison operator compares its operands and returns a logical value based on
whether the comparison is true. The operands can be numerical, string, logical, or
object values. Strings are compared based on standard lexicographical ordering, using
Unicode values. In most cases, if the two operands are not of the same type, JavaScript
attempts to convert them to an appropriate type for the comparison. This behavior
generally results in comparing the operands numerically. The sole exceptions to type
conversion within comparisons involve the `===` and `!==`
operators, which perform strict equality and inequality comparisons. These operators do
not attempt to convert the operands to compatible types before checking equality. The
following table describes the comparison operators in terms of this sample code:

```js
var var1 = 3;
var var2 = 4;
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
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators#equality"
          >Equal</a
        >
        (<code>==</code>)
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
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators#inequality"
          >Not equal</a
        >
        (<code>!=</code>)
      </td>
      <td>Returns <code>true</code> if the operands are not equal.</td>
      <td>
        <code>var1 != 4<br />var2 != "3"</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators#identity"
          >Strict equal</a
        >
        (<code>===</code>)
      </td>
      <td>
        Returns <code>true</code> if the operands are equal and of the same
        type. See also {{jsxref("Object.is")}} and
        <a href="/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness"
          >sameness in JS</a
        >.
      </td>
      <td><code>3 === var1</code></td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators#nonidentity"
          >Strict not equal</a
        >
        (<code>!==</code>)
      </td>
      <td>
        Returns <code>true</code> if the operands are of the same type but not
        equal, or are of different type.
      </td>
      <td>
        <code>var1 !== "3"<br />3 !== '3'</code>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/en-US/docs/Web/JavaScript/Reference/Operators#greater_than_operator"
          >Greater than</a
        >
        (<code>></code>)
      </td>
      <td>
        Returns <code>true</code> if the left operand is greater than the right
        operand.
      </td>
      <td>
        <code>var2 > var1<br />"12" > 2</code>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/en-US/docs/Web/JavaScript/Reference/Operators#greater_than_or_equal_operator"
          >Greater than or equal</a
        >
        (<code>>=</code>)
      </td>
      <td>
        Returns <code>true</code> if the left operand is greater than or equal
        to the right operand.
      </td>
      <td>
        <code>var2 >= var1<br />var1 >= 3</code>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/en-US/docs/Web/JavaScript/Reference/Operators#less_than_operator"
          >Less than</a
        >
        (<code>&#x3C;</code>)
      </td>
      <td>
        Returns <code>true</code> if the left operand is less than the right
        operand.
      </td>
      <td>
        <code>var1 &#x3C; var2<br />"2" &#x3C; 12</code>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/en-US/docs/Web/JavaScript/Reference/Operators#less_than_or_equal_operator"
          >Less than or equal</a
        >
        (<code>&#x3C;=</code>)
      </td>
      <td>
        Returns <code>true</code> if the left operand is less than or equal to
        the right operand.
      </td>
      <td>
        <code>var1 &#x3C;= var2<br />var2 &#x3C;= 5</code>
      </td>
    </tr>
  </tbody>
</table>

> **Note:** `=>` is not an operator, but the notation
> for [Arrow
> functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Arithmetic operators

An arithmetic operator takes numerical values (either literals or variables) as their
operands and returns a single numerical value. The standard arithmetic operators are
addition (`+`), subtraction (`-`), multiplication
(`*`), and division (`/`). These operators work as they do in most
other programming languages when used with floating point numbers (in particular, note
that division by zero produces {{jsxref("Infinity")}}). For example:

```js
1 / 2; // 0.5
1 / 2 == 1.0 / 2.0; // this is true
```

In addition to the standard arithmetic operations (`+`, `-`,
`*`, `/`), JavaScript provides the arithmetic operators listed in
the following table:

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
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Remainder"
          >Remainder</a
        >
        (<code>%</code>)
      </td>
      <td>
        Binary operator. Returns the integer remainder of dividing the two
        operands.
      </td>
      <td>12 % 5 returns 2.</td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Increment"
          >Increment</a
        >
        (<code>++</code>)
      </td>
      <td>
        Unary operator. Adds one to its operand. If used as a prefix operator
        (<code>++x</code>), returns the value of its operand after adding one;
        if used as a postfix operator (<code>x++</code>), returns the value of
        its operand before adding one.
      </td>
      <td>
        If <code>x</code> is 3, then <code>++x</code> sets <code>x</code> to 4
        and returns 4, whereas <code>x++</code> returns 3 and, only then, sets
        <code>x</code> to 4.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Decrement"
          >Decrement</a
        >
        (<code>--</code>)
      </td>
      <td>
        Unary operator. Subtracts one from its operand. The return value is
        analogous to that for the increment operator.
      </td>
      <td>
        If <code>x</code> is 3, then <code>--x</code> sets <code>x</code> to 2
        and returns 2, whereas <code>x--</code> returns 3 and, only then, sets
        <code>x</code> to 2.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation"
          >Unary negation</a
        >
        (<code>-</code>)
      </td>
      <td>Unary operator. Returns the negation of its operand.</td>
      <td>If <code>x</code> is 3, then <code>-x</code> returns -3.</td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus"
          >Unary plus</a
        >
        (<code>+</code>)
      </td>
      <td>
        Unary operator. Attempts to convert the operand to a number, if it is
        not already.
      </td>
      <td>
        <p><code>+"3"</code> returns <code>3</code>.</p>
        <p><code>+true</code> returns <code>1</code>.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation"
          >Exponentiation operator</a
        >
        (<code>**</code>)
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

### Bitwise operators

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

#### Bitwise logical operators

Conceptually, the bitwise logical operators work as follows:

- The operands are converted to thirty-two-bit integers and expressed by a series of
  bits (zeros and ones). Numbers with more than 32 bits get their most significant bits
  discarded. For example, the following integer with more than 32 bits will be converted
  to a 32 bit integer:

      Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
      After:               1010 0000 0000 0000 0110 0000 0000 0001

- Each bit in the first operand is paired with the corresponding bit in the second
  operand: first bit to first bit, second bit to second bit, and so on.
- The operator is applied to each pair of bits, and the result is constructed bitwise.

For example, the binary representation of nine is 1001, and the binary representation
of fifteen is 1111. So, when the bitwise operators are applied to these values, the
results are as follows:

| Expression | Result | Binary Description                                    |
| ---------- | ------ | ----------------------------------------------------- |
| `15 & 9`   | `9`    | `1111 & 1001 = 1001`                                  |
| `15 \| 9`  | `15`   | `1111 \| 1001 = 1111`                                 |
| `15 ^ 9`   | `6`    | `1111 ^ 1001 = 0110`                                  |
| `~15`      | `-16`  | `~ 0000 0000 ... 0000 1111 = 1111 1111 ... 1111 0000` |
| `~9`       | `-10`  | `~ 0000 0000 ... 0000 1001 = 1111 1111 ... 1111 0110` |

Note that all 32 bits are inverted using the Bitwise NOT operator, and that values with
the most significant (left-most) bit set to 1 represent negative numbers
(two's-complement representation). `~x` evaluates to the same value that
`-x - 1` evaluates to.

#### Bitwise shift operators

The bitwise shift operators take two operands: the first is a quantity to be shifted,
and the second specifies the number of bit positions by which the first operand is to be
shifted. The direction of the shift operation is controlled by the operator used.

Shift operators convert their operands to thirty-two-bit integers and return a result
of either type {{jsxref("Number")}} or {{jsxref("BigInt")}}: specifically, if the type
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
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift"
          >Left shift</a
        ><br />(<code>&#x3C;&#x3C;</code>)
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
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift"
          >Sign-propagating right shift</a
        >
        (<code>>></code>)
      </td>
      <td>
        This operator shifts the first operand the specified number of bits to
        the right. Excess bits shifted off to the right are discarded. Copies of
        the leftmost bit are shifted in from the left.
      </td>
      <td>
        <code>9>>2</code> yields 2, because 1001 shifted 2 bits to the right
        becomes 10, which is 2. Likewise, <code>-9>>2</code> yields -3, because
        the sign is preserved.
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift"
          >Zero-fill right shift</a
        >
        (<code>>>></code>)
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

### Logical operators

Logical operators are typically used with Boolean (logical) values; when they are, they
return a Boolean value. However, the `&&` and `||`
operators actually return the value of one of the specified operands, so if these
operators are used with non-Boolean values, they may return a non-Boolean value. The
logical operators are described in the following table.

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
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND"
          >Logical AND</a
        >
        (<code>&#x26;&#x26;</code>)
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
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR"
          >Logical OR </a
        >(<code>||</code>)
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
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT"
          >Logical NOT </a
        >(<code>!</code>)
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
var a1 =  true && true;     // t && t returns true
var a2 =  true && false;    // t && f returns false
var a3 = false && true;     // f && t returns false
var a4 = false && (3 == 4); // f && f returns false
var a5 = 'Cat' && 'Dog';    // t && t returns Dog
var a6 = false && 'Cat';    // f && t returns false
var a7 = 'Cat' && false;    // t && f returns false
```

The following code shows examples of the || (logical OR) operator.

```js
var o1 =  true || true;     // t || t returns true
var o2 = false || true;     // f || t returns true
var o3 =  true || false;    // t || f returns true
var o4 = false || (3 == 4); // f || f returns false
var o5 = 'Cat' || 'Dog';    // t || t returns Cat
var o6 = false || 'Cat';    // f || t returns Cat
var o7 = 'Cat' || false;    // t || f returns Cat
```

The following code shows examples of the ! (logical NOT) operator.

```js
var n1 = !true;  // !t returns false
var n2 = !false; // !f returns true
var n3 = !'Cat'; // !t returns false
```

#### Short-circuit evaluation

As logical expressions are evaluated left to right, they are tested for possible
"short-circuit" evaluation using the following rules:

- `false && anything` is short-circuit evaluated to false.
- `true || anything` is short-circuit evaluated to true.

The rules of logic guarantee that these evaluations are always correct. Note that the
_anything_ part of the above expressions is not evaluated, so any side effects of
doing so do not take effect.

Note that for the second case, in modern code you can use the new [Nullish
coalescing operator](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) (`??`) that works like `||`, but it only
returns the second expression, when the first one is "[nullish](/en-US/docs/Glossary/Nullish)", i.e. [`null`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.")
or [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.").
It is thus the better alternative to provide defaults, when values like `''`
or `0` are valid values for the first expression, too.

### String operators

In addition to the comparison operators, which can be used on string values, the
concatenation operator (+) concatenates two string values together, returning another
string that is the union of the two operand strings.

For example,

```js
console.log('my ' + 'string'); // console logs the string "my string".
```

The shorthand assignment operator += can also be used to concatenate strings.

For example,

```js
var mystring = 'alpha';
mystring += 'bet'; // evaluates to "alphabet" and assigns this value to mystring.
```

### Conditional (ternary) operator

The [conditional
operator](/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) is the only JavaScript operator that takes three operands. The operator
can have one of two values based on a condition. The syntax is:

```js
condition ? val1 : val2
```

If `condition` is true, the operator has the value of `val1`.
Otherwise it has the value of `val2`. You can use the conditional operator
anywhere you would use a standard operator.

For example,

```js
var status = (age >= 18) ? 'adult' : 'minor';
```

This statement assigns the value "adult" to the variable `status` if
`age` is eighteen or more. Otherwise, it assigns the value "minor" to
`status`.

### Comma operator

The [comma
operator](/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator) (`,`) evaluates both of its operands and returns the value of
the last operand. This operator is primarily used inside a `for` loop, to
allow multiple variables to be updated each time through the loop. It is regarded bad
style to use it elsewhere, when it is not necessary. Often two separate statements can
and should be used instead.

For example, if `a` is a 2-dimensional array with 10 elements on a side, the
following code uses the comma operator to update two variables at once. The code prints
the values of the diagonal elements in the array:

```js
var x = [0,1,2,3,4,5,6,7,8,9]
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--)
//                                ^
  console.log('a[' + i + '][' + j + ']= ' + a[i][j]);
```

### Unary operators

A unary operation is an operation with only one operand.

#### `delete`

The
[`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete)
operator deletes an object's property. The syntax is:

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
```

where `object` is the name of an object, `property` is an
existing property, and `propertyKey` is a string or symbol referring to an
existing property.

If the `delete` operator succeeds, it removes the property from the object.
Trying to access it afterwards will yield `undefined`. The
`delete` operator returns `true` if the operation is possible; it
returns `false` if the operation is not possible.

```js
delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = {h: 4};
delete myobj.h; // returns true (can delete user-defined properties)
```

##### Deleting array elements

Since arrays are just objects, it's technically possible to `delete`
elements from them. This is however regarded as a bad practice, try to avoid it. When
you delete an array property, the array length is not affected and other elements are
not re-indexed. To achieve that behavior, it is much better to just overwrite the
element with the value `undefined`. To actually manipulate the array, use the
various array methods such as
[`splice`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

#### `typeof`

The [`typeof`
operator](/en-US/docs/Web/JavaScript/Reference/Operators/typeof) is used in either of the following ways:

```js
typeof operand
typeof (operand)
```

The `typeof` operator returns a string indicating the type of the
unevaluated operand. `operand` is the string, variable, keyword, or object
for which the type is to be returned. The parentheses are optional.

Suppose you define the following variables:

```js
var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();
```

The `typeof` operator returns the following results for these variables:

```js
typeof myFun;       // returns "function"
typeof shape;       // returns "string"
typeof size;        // returns "number"
typeof foo;         // returns "object"
typeof today;       // returns "object"
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
typeof 62;            // returns "number"
typeof 'Hello world'; // returns "string"
```

For property values, the `typeof` operator returns the type of value the
property contains:

```js
typeof document.lastModified; // returns "string"
typeof window.length;         // returns "number"
typeof Math.LN2;              // returns "number"
```

For methods and functions, the `typeof` operator returns results as follows:

```js
typeof blur;        // returns "function"
typeof eval;        // returns "function"
typeof parseInt;    // returns "function"
typeof shape.split; // returns "function"
```

For predefined objects, the `typeof` operator returns results as follows:

```js
typeof Date;     // returns "function"
typeof Function; // returns "function"
typeof Math;     // returns "object"
typeof Option;   // returns "function"
typeof String;   // returns "function"
```

#### `void`

The [`void`
operator](/en-US/docs/Web/JavaScript/Reference/Operators/void) is used in either of the following ways:

```js
void (expression)
void expression
```

The `void` operator specifies an expression to be evaluated without
returning a value. `expression` is a JavaScript expression to evaluate. The
parentheses surrounding the expression are optional, but it is good style to use them.

### Relational operators

A relational operator compares its operands and returns a Boolean value
based on whether the comparison is true.

#### `in`

The [`in`
operator](/en-US/docs/Web/JavaScript/Reference/Operators/in) returns `true` if the specified property is in the specified
object. The syntax is:

```js
propNameOrNumber in objectName
```

where `propNameOrNumber` is a string, numeric, or symbol expression
representing a property name or array index, and `objectName` is the name of
an object.

The following examples show some uses of the `in` operator.

```js
// Arrays
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
'bay' in trees;    // returns false (you must specify the index number,
                   // not the value at that index)
'length' in trees; // returns true (length is an Array property)

// built-in objects
'PI' in Math;          // returns true
var myString = new String('coral');
'length' in myString;  // returns true

// Custom objects
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // returns true
'model' in mycar; // returns true
```

#### `instanceof`

The [`instanceof`
operator](/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) returns `true` if the specified object is of the specified
object type. The syntax is:

```js
objectName instanceof objectType
```

where `objectName` is the name of the object to compare to
`objectType`, and `objectType` is an object type, such as
{{jsxref("Date")}} or {{jsxref("Array")}}.

Use `instanceof` when you need to confirm the type of an object at runtime.
For example, when catching exceptions, you can branch to different exception-handling
code depending on the type of exception thrown.

For example, the following code uses `instanceof` to determine whether
`theDay` is a `Date` object. Because `theDay` is a
`Date` object, the statements in the `if` statement execute.

```js
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
```

### Operator precedence

The _precedence_ of operators determines the order they are applied when
evaluating an expression. You can override operator precedence by using parentheses.

The following table describes the precedence of operators, from highest to lowest.

| Operator type          | Individual operators                                    |
| ---------------------- | ------------------------------------------------------- |
| member                 | `. []`                                                  |
| call / create instance | `() new`                                                |
| negation/increment     | `! ~ - + ++ -- typeof void delete`                      |
| multiply/divide        | `* / %`                                                 |
| addition/subtraction   | `+ -`                                                   |
| bitwise shift          | `<< >> >>>`                                             |
| relational             | `< <= > >= in instanceof`                               |
| equality               | `== != === !==`                                         |
| bitwise-and            | `&`                                                     |
| bitwise-xor            | `^`                                                     |
| bitwise-or             | `\|`                                                    |
| logical-and            | `&&`                                                    |
| logical-or             | `\|\|`                                                  |
| conditional            | `?:`                                                    |
| assignment             | `= += -= *= /= %= <<= >>= >>>= &= ^= \|= &&= \|\|= ??=` |
| comma                  | `,`                                                     |

A more detailed version of this table, complete with links to additional details about
each operator, may be found in [JavaScript
Reference](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table).

## Expressions

An _expression_ is any valid unit of code that resolves to a value.

Every syntactically valid expression resolves to some value but conceptually, there are
two types of expressions: with side effects (for example: those that assign value to a
variable) and those that in some sense evaluate and therefore resolve to a value.

The expression `x = 7` is an example of the first type. This expression uses
the = _operator_ to assign the value seven to the variable `x`. The
expression itself evaluates to seven.

The code `3 + 4` is an example of the second expression type. This
expression uses the + operator to add three and four together without assigning the
result, seven, to a variable.

JavaScript has the following expression categories:

- Arithmetic: evaluates to a number, for example 3.14159. (Generally uses [arithmetic operators](#arithmetic_operators).)
- String: evaluates to a character string, for example, "Fred" or "234". (Generally
  uses [string operators](#string_operators).)
- Logical: evaluates to true or false. (Often involves [logical
  operators](#logical_operators).)
- Primary expressions: Basic keywords and general expressions in JavaScript.
- Left-hand-side expressions: Left values are the destination of an assignment.

### Primary expressions

Basic keywords and general expressions in JavaScript.

#### `this`

Use the [`this`
keyword](/en-US/docs/Web/JavaScript/Reference/Operators/this) to refer to the current object. In general, `this` refers to
the calling object in a method. Use `this` either with the dot or the bracket
notation:

```js
this['propertyName']
this.propertyName
```

Suppose a function called `validate` validates an object's
`value` property, given the object and the high and low values:

```js
function validate(obj, lowval, hival) {
  if ((obj.value < lowval) || (obj.value > hival))
    console.log('Invalid Value!');
}
```

You could call `validate` in each form element's `onChange` event
handler, using `this` to pass it to the form element, as in the following
example:

```html
<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size=3 onChange="validate(this, 18, 99);">
```

#### Grouping operator

The grouping operator `( )` controls the precedence of evaluation in
expressions. For example, you can override multiplication and division first, then
addition and subtraction to evaluate addition first.

```js
var a = 1;
var b = 2;
var c = 3;

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

### Left-hand-side expressions

Left values are the destination of an assignment.

#### `new`

You can use the [`new`
operator](/en-US/docs/Web/JavaScript/Reference/Operators/new) to create an instance of a user-defined object type or of one of the
built-in object types. Use `new` as follows:

```js
var objectName = new objectType([param1, param2, ..., paramN]);
```

#### super

The [super keyword](/en-US/docs/Web/JavaScript/Reference/Operators/super) is
used to call functions on an object's parent. It is useful with [classes](/en-US/docs/Web/JavaScript/Reference/Classes) to call the parent
constructor, for example.

```js
super([arguments]); // calls the parent constructor.
super.functionOnParent([arguments]);
```

{{PreviousNext("Web/JavaScript/Guide/Functions",
  "Web/JavaScript/Guide/Numbers_and_dates")}}
