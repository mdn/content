---
title: block
slug: Web/JavaScript/Reference/Statements/block
tags:
  - JavaScript
  - Language feature
  - Reference
  - Statement
browser-compat: javascript.statements.block
---
{{jsSidebar("Statements")}}

A **block statement** (or **compound statement** in other
languages) is used to group zero or more statements. The block is delimited by a pair of
braces ("curly brackets") and may optionally be {{jsxref("Statements/label", "labelled",
  "", 1)}}:

{{EmbedInteractiveExample("pages/js/statement-block.html", "taller")}}

## Syntax

### Block Statement

```js
{
  StatementList
}
```

### Labelled Block Statement

```js
LabelIdentifier: {
  StatementList
}
```

- `StatementList`
  - : Statements grouped within the block statement.
- `LabelIdentifier`
  - : An optional {{jsxref("Statements/label", "label", "", 1)}} for visual identification
    or as a target for {{jsxref("Statements/break", "break")}}.

## Description

The block statement is often called **compound statement** in other
languages. It allows you to use multiple statements where JavaScript expects only one
statement. Combining statements into blocks is a common practice in JavaScript. The
opposite behavior is possible using an [empty statement](/en-US/docs/Web/JavaScript/Reference/Statements/Empty),
where you provide no statement, although one is required.

Blocks are commonly used in association with {{jsxref("Statements/if...else",
  "if...else")}} and {{jsxref("Statements/for", "for")}} statements.

## Examples

### Block scoping rules with var or function declaration in non-strict mode

Variables declared with `var` or created by [function
declarations](/en-US/docs/Web/JavaScript/Reference/Statements/function) in non-strict mode **do not** have block scope.
Variables introduced within a block are scoped to the containing function or script, and
the effects of setting them persist beyond the block itself. In other words, block
statements do not introduce a scope. For example:

```js example-bad
var x = 1;
{
  var x = 2;
}
console.log(x); // logs 2
```

This logs 2 because the `var x` statement within the block is in the same
scope as the `var x` statement before the block.

In non-strict code, function declarations inside blocks behave strangely. Do not use
them.

### Block scoping rules with let, const or function declaration in strict mode

By contrast, identifiers declared with {{jsxref("Statements/let", "let")}} and
{{jsxref("Statements/const", "const")}} **do have** block scope:

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // logs 1
```

The `x = 2` is limited in scope to the block in which it was defined.

The same is true of `const`:

```js
const c = 1;
{
  const c = 2;
}
console.log(c); // logs 1 and does not throw SyntaxError...
```

Note that the block-scoped `const c = 2` _does not_ throw a
`SyntaxError: Identifier 'c' has already been declared` because it can be
declared uniquely within the block.

In [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), starting
with ES2015, functions inside blocks are scoped to that block. Prior to ES2015,
block-level functions were forbidden in strict mode.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/let", "let")}}
