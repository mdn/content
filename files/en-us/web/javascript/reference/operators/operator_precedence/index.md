---
title: Operator precedence
slug: Web/JavaScript/Reference/Operators/Operator_Precedence
tags:
  - Guide
  - JavaScript
  - precedence
---
{{jsSidebar("Operators")}}

**Operator precedence** determines how operators are parsed concerning
each other. Operators with higher precedence become the operands of operators with
lower precedence.

{{EmbedInteractiveExample("pages/js/expressions-operatorprecedence.html")}}

## Precedence And Associativity

Consider an expression describable by the representation below. Note that both
OP<sub>1</sub> and OP<sub>2</sub> are fill-in-the-blanks for OPerators.

```js
a OP1 b OP2 c
```

If `OP1` and `OP2` have different
precedence levels (see the table below), the operator with the highest precedence goes
first and associativity does not matter. Observe how multiplication has higher
precedence than addition and executed first, even though addition is written first in
the code.

```js
console.log(3 + 10 * 2);   // logs 23
console.log(3 + (10 * 2)); // logs 23 because parentheses here are superfluous
console.log((3 + 10) * 2); // logs 26 because the parentheses change the order
```

Left-associativity (left-to-right) means that it is processed as
`(a OP1 b) OP2 c`, while right-associativity
(right-to-left) means it is interpreted as
`a OP1 (b OP2 c)`. Assignment operators are
right-associative, so you can write:

```js
a = b = 5; // same as writing a = (b = 5);
```

with the expected result that `a` and `b` get the value 5. This
is because the assignment operator returns the value that is assigned. First,
`b` is set to 5. Then the `a` is also set to 5, the return value
of `b = 5`, aka right operand of the assignment.

As another example, the unique exponentiation operator has right-associativity, whereas
other arithmetic operators have left-associativity. It is interesting to note that,
the order of evaluation is always left-to-right regardless of associativity and
precedence.

<table class="standard-table">
  <tbody>
    <tr>
      <td>Code</td>
      <td>Output</td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// Notice the division operator (/)
console.log(echo("left", 6) / echo("right", 2));
</pre
        >
      </td>
      <td>
        <pre class="brush: plain">
Evaluating the left side
Evaluating the right side
3
</pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// Notice the exponentiation operator (**)
console.log(echo("left", 2) ** echo("right", 3));</pre
        >
      </td>
      <td>
        <pre class="brush: plain">
Evaluating the left side
Evaluating the right side
8</pre
        >
      </td>
    </tr>
  </tbody>
</table>

The difference in associativity comes into play when there are multiple operators of
the same precedence. With only one operator or operators of different precedences,
associativity doesn't affect the output, as seen in the example above. In the example
below, observe how associativity affects the output when multiple of the same operator
are used.

<table class="standard-table">
  <tbody>
    <tr>
      <td>Code</td>
      <td>Output</td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// Notice the division operator (/)
console.log(echo("left", 6) / echo("middle", 2) / echo("right", 3));
</pre
        >
      </td>
      <td>
        <pre class="brush: plain">
Evaluating the left side
Evaluating the middle side
Evaluating the right side
1
</pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// Notice the exponentiation operator (**)
console.log(echo("left", 2) ** echo("middle", 3) ** echo("right", 2));
</pre
        >
      </td>
      <td>
        <pre class="brush: plain">
Evaluating the left side
Evaluating the middle side
Evaluating the right side
512
</pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// Notice the parentheses around the left and middle exponentiation
console.log((echo("left", 2) ** echo("middle", 3)) ** echo("right", 2));</pre
        >
      </td>
      <td>
        <pre class="brush: plain">
Evaluating the left side
Evaluating the middle side
Evaluating the right side
64</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Looking at the code snippets above, `6 / 3 / 2` is the same as
`(6 / 3) / 2` because division is left-associative. Exponentiation, on the
other hand, is right-associative, so `2 ** 3 ** 2` is the same as
`2 ** (3 ** 2)`. Thus, doing `(2 ** 3) ** 2` changes the order
and results in the 64 seen in the table above.

Remember that precedence comes before associativity. So, mixing division and
exponentiation, the exponentiation comes before the division. For example,
`2 ** 3 / 3 ** 2` results in 0.8888888888888888 because it is the same as
`(2 ** 3) / (3 ** 2)`.

### Note on grouping and short-circuiting

In the table below, **Grouping** is listed as having the highest
precedence. However, that does not always mean the expression within the grouping
symbols `( … )` is evaluated first, especially when it comes to
short-circuiting.

Short-circuiting is jargon for conditional evaluation. For example, in the expression
`a && (b + c)`, if `a` is {{Glossary("falsy")}}, then
the sub-expression `(b + c)` will not even get evaluated, even if it is in
parentheses. We could say that the logical disjunction operator ("OR") is
"short-circuited". Along with logical disjunction, other short-circuited operators
include logical conjunction ("AND"), nullish-coalescing, optional chaining, and the
conditional operator. Some more examples follow.

```js
a || (b * c);  // evaluate `a` first, then produce `a` if `a` is "truthy"
a && (b < c);  // evaluate `a` first, then produce `a` if `a` is "falsy"
a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
a?.b.c;        // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`
```

## Examples

```js
3 > 2 && 2 > 1
// returns true

3 > 2 > 1
// Returns false because 3 > 2 is true, then true is converted to 1
// in inequality operators, therefore true > 1 becomes 1 > 1, which
//  is false. Adding parentheses makes things clear: (3 > 2) > 1.
```

## Table

The following table lists operators in order from highest precedence (21) to lowest precedence (1).

Note that [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) is intentionally not included in the table — because, to quote an [an answer at Stack Overflow](https://stackoverflow.com/a/48656377), “[Spread syntax is not an operator](https://stackoverflow.com/q/44934828/1048572) and therefore does not have a precedence. It is part of the array literal and function call (and object literal) syntax.”

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Precedence</th>
      <th>Operator type</th>
      <th>Associativity</th>
      <th>Individual operators</th>
    </tr>
    <tr>
      <td>19</td>
      <td>
        {{jsxref("Operators/Grouping", "Grouping", "", 1)}}
      </td>
      <td>n/a</td>
      <td><code>( … )</code></td>
    </tr>
    <tr>
      <td rowspan="5">18</td>
      <td>
        {{jsxref("Operators/Property_Accessors", "Member Access", "#Dot_notation",
                1)}}
      </td>
      <td>left-to-right</td>
      <td><code>… . …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Property_Accessors", "Computed Member
                Access","#Bracket_notation", 1)}}
      </td>
      <td>left-to-right</td>
      <td><code>… [ … ]</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/new","new")}} (with argument list)</td>
      <td>n/a</td>
      <td><code>new … ( … )</code></td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Guide/Functions">Function Call</a>
      </td>
      <td>left-to-right</td>
      <td>
        <code>… ( <var>… </var>)</code>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
          >Optional chaining</a
        >
      </td>
      <td>left-to-right</td>
      <td><code>?.</code></td>
    </tr>
    <tr>
      <td>17</td>
      <td>
        {{jsxref("Operators/new","new")}} (without argument list)
      </td>
      <td>right-to-left</td>
      <td><code>new …</code></td>
    </tr>
    <tr>
      <td rowspan="2">16</td>
      <td>
        {{jsxref("Operators","Postfix
                Increment","#increment_and_decrement", 1)}}
      </td>
      <td rowspan="2">n/a</td>
      <td><code>… ++</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators","Postfix
                Decrement","#increment_and_decrement", 1)}}
      </td>
      <td><code>… --</code></td>
    </tr>
    <tr>
      <td rowspan="10">15</td>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT"
          >Logical NOT (!)</a
        >
      </td>
      <td rowspan="10">right-to-left</td>
      <td><code>! …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT"
          >Bitwise NOT (~)</a
        >
      </td>
      <td><code>~ …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus"
          >Unary plus (+)</a
        >
      </td>
      <td><code>+ …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation"
          >Unary negation (-)</a
        >
      </td>
      <td><code>- …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators","Prefix
                Increment","#increment_and_decrement", 1)}}
      </td>
      <td><code>++ …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators","Prefix
                Decrement","#increment_and_decrement", 1)}}
      </td>
      <td><code>-- …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/typeof", "typeof")}}</td>
      <td><code>typeof …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/void", "void")}}</td>
      <td><code>void …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/delete", "delete")}}</td>
      <td><code>delete …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/await", "await")}}</td>
      <td><code>await …</code></td>
    </tr>
    <tr>
      <td>14</td>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation"
          >Exponentiation (**)</a
        >
      </td>
      <td>right-to-left</td>
      <td><code>… ** …</code></td>
    </tr>
    <tr>
      <td rowspan="3">13</td>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication"
          >Multiplication (*)</a
        >
      </td>
      <td rowspan="3">left-to-right</td>
      <td><code>… * …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Division"
          >Division (/)</a
        >
      </td>
      <td><code>… / …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Remainder"
          >Remainder (%)</a
        >
      </td>
      <td><code>… % …</code></td>
    </tr>
    <tr>
      <td rowspan="2">12</td>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Addition"
          >Addition (+)</a
        >
      </td>
      <td rowspan="2">left-to-right</td>
      <td><code>… + …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction"
          >Subtraction (-)</a
        >
      </td>
      <td><code>… - …</code></td>
    </tr>
    <tr>
      <td rowspan="3">11</td>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift"
          >Bitwise Left Shift (&#x3C;&#x3C;)</a
        >
      </td>
      <td rowspan="3">left-to-right</td>
      <td><code>… &#x3C;&#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift"
          >Bitwise Right Shift (>>)</a
        >
      </td>
      <td><code>… >> …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift"
          >Bitwise Unsigned Right Shift (>>>)</a
        >
      </td>
      <td><code>… >>> …</code></td>
    </tr>
    <tr>
      <td rowspan="6">10</td>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Less_than"
          >Less Than (&#x3C;)</a
        >
      </td>
      <td rowspan="6">left-to-right</td>
      <td><code>… &#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal"
          >Less Than Or Equal (&#x3C;=)</a
        >
      </td>
      <td><code>… &#x3C;= …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than"
          >Greater Than (>)</a
        >
      </td>
      <td><code>… > …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal"
          >Greater Than Or Equal (>=)</a
        >
      </td>
      <td><code>… >= …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/in", "in")}}</td>
      <td><code>… in …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/instanceof", "instanceof")}}</td>
      <td><code>… instanceof …</code></td>
    </tr>
    <tr>
      <td rowspan="4">9</td>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Equality"
          >Equality (==)</a
        >
      </td>
      <td rowspan="4">left-to-right</td>
      <td><code>… == …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Inequality"
          >Inequality (!=)</a
        >
      </td>
      <td><code>… != …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality"
          >Strict Equality (===)</a
        >
      </td>
      <td><code>… === …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality"
          >Strict Inequality (!==)</a
        >
      </td>
      <td><code>… !== …</code></td>
    </tr>
    <tr>
      <td>8</td>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND"
          >Bitwise AND (&#x26;)</a
        >
      </td>
      <td>left-to-right</td>
      <td><code>… &#x26; …</code></td>
    </tr>
    <tr>
      <td>7</td>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR"
          >Bitwise XOR (^)</a
        >
      </td>
      <td>left-to-right</td>
      <td><code>… ^ …</code></td>
    </tr>
    <tr>
      <td>6</td>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR"
          >Bitwise OR (|)</a
        >
      </td>
      <td>left-to-right</td>
      <td><code>… | …</code></td>
    </tr>
    <tr>
      <td>5</td>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND"
          >Logical AND (&#x26;&#x26;)</a
        >
      </td>
      <td>left-to-right</td>
      <td><code>… &#x26;&#x26; …</code></td>
    </tr>
    <tr>
      <td rowspan="2">4</td>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR"
          >Logical OR (||)</a
        >
      </td>
      <td>left-to-right</td>
      <td><code>… || …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator"
          >Nullish coalescing operator (??)</a
        >
      </td>
      <td>left-to-right</td>
      <td><code>… ?? …</code></td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        <a
          href="/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"
          >Conditional (ternary) operator</a
        >
      </td>
      <td>right-to-left</td>
      <td><code>… ? … : …</code></td>
    </tr>
    <tr>
      <td rowspan="18">2</td>
      <td rowspan="16">
        <a
          href="/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators"
          >Assignment</a
        >
      </td>
      <td rowspan="16">right-to-left</td>
      <td><code>… = …</code></td>
    </tr>
    <tr>
      <td><code>… += …</code></td>
    </tr>
    <tr>
      <td><code>… -= …</code></td>
    </tr>
    <tr>
      <td><code>… **= …</code></td>
    </tr>
    <tr>
      <td><code>… *= …</code></td>
    </tr>
    <tr>
      <td><code>… /= …</code></td>
    </tr>
    <tr>
      <td><code>… %= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x3C;&#x3C;= …</code></td>
    </tr>
    <tr>
      <td><code>… >>= …</code></td>
    </tr>
    <tr>
      <td><code>… >>>= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x26;= …</code></td>
    </tr>
    <tr>
      <td><code>… ^= …</code></td>
    </tr>
    <tr>
      <td><code>… |= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x26;&#x26;= …</code></td>
    </tr>
    <tr>
      <td><code>… ||= …</code></td>
    </tr>
    <tr>
      <td><code>… ??= …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/yield", "yield")}}</td>
      <td rowspan="2">right-to-left</td>
      <td><code>yield …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/yield*", "yield*")}}</td>
      <td><code>yield* …</code></td>
    </tr>
    <tr>
      <td>1</td>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator"
          >Comma / Sequence</a
        >
      </td>
      <td>left-to-right</td>
      <td><code>… , …</code></td>
    </tr>
  </tbody>
</table>
