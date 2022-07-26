---
title: Statements and declarations
slug: Web/JavaScript/Reference/Statements
tags:
  - JavaScript
  - Landing page
  - Reference
  - statements
browser-compat: javascript.statements
---
{{jsSidebar("Statements")}}

JavaScript applications consist of statements with an appropriate syntax. A single statement may span multiple lines. Multiple statements may occur on a single line if each statement is separated by a semicolon. This isn't a keyword, but a group of keywords.

## Statements and declarations by category

For an alphabetical listing see the sidebar on the left.

### Control flow

- {{jsxref("Statements/return", "return")}}
  - : Specifies the value to be returned by a function.
- {{jsxref("Statements/break", "break")}}
  - : Terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.
- {{jsxref("Statements/continue", "continue")}}
  - : Terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
- {{jsxref("Statements/throw", "throw")}}
  - : Throws a user-defined exception.
- {{jsxref("Statements/if...else", "if...else")}}
  - : Executes a statement if a specified condition is true. If the condition is false, another statement can be executed.
- {{jsxref("Statements/switch", "switch")}}
  - : Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : Marks a block of statements to try, and specifies a response, should an exception be thrown.

### Declaring variables

- {{jsxref("Statements/var", "var")}}
  - : Declares a variable, optionally initializing it to a value.
- {{jsxref("Statements/let", "let")}}
  - : Declares a block scope local variable, optionally initializing it to a value.
- {{jsxref("Statements/const", "const")}}
  - : Declares a read-only named constant.

### Functions and classes

- {{jsxref("Statements/function", "function")}}
  - : Declares a function with the specified parameters.
- {{jsxref("Statements/function*", "function*")}}
  - : Generator Functions enable writing [iterators](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) more easily.
- {{jsxref("Statements/async_function", "async function")}}
  - : Declares an async function with the specified parameters.
- {{jsxref("Statements/async_function*", "async function*")}}
  - : Asynchronous Generator Functions enable writing async [iterators](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) more easily.
- {{jsxref("Statements/class", "class")}}
  - : Declares a class.

### Iterations

- {{jsxref("Statements/do...while", "do...while")}}
  - : Creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
- {{jsxref("Statements/for", "for")}}
  - : Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop.
- {{jsxref("Statements/for...in", "for...in")}}
  - : Iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.
- {{jsxref("Statements/for...of", "for...of")}}
  - : Iterates over iterable objects (including {{jsxref("Global_Objects/Array","arrays","","true")}}, array-like objects, [iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
- {{jsxref("Statements/for-await...of", "for await...of")}}
  - : Iterates over async iterable objects, array-like objects, [iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
- {{jsxref("Statements/while", "while")}}
  - : Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

### Others

- {{jsxref("Statements/Empty", "Empty","",1)}}
  - : An empty statement is used to provide no statement, although the JavaScript syntax would expect one.
- {{jsxref("Statements/block", "Block","",1)}}
  - : A block statement is used to group zero or more statements. The block is delimited by a pair of curly brackets.
- {{jsxref("Statements/debugger", "debugger")}}
  - : Invokes any available debugging functionality. If no debugging functionality is available, this statement has no effect.
- {{jsxref("Statements/export", "export")}}
  - : Used to export functions to make them available for imports in external modules, and other scripts.
- {{jsxref("Statements/import", "import")}}
  - : Used to import functions exported from an external module, another script.
- {{jsxref("Statements/label", "label", "", 1)}}
  - : Provides a statement with an identifier that you can refer to using a `break` or `continue` statement.
- {{jsxref("Statements/with", "with")}}
  - : Extends the scope chain for a statement.

## Difference between statements and declarations

In this section, we will be mixing two kinds of constructs: [_statements_](https://tc39.es/ecma262/#prod-Statement) and [_declarations_](https://tc39.es/ecma262/#prod-Declaration). They are two disjoint sets of grammars. The following are declarations:

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/export", "export")}} (Note: it can only appear at the top-level of a [module](/en-US/docs/Web/JavaScript/Guide/Modules))
- {{jsxref("Statements/import", "import")}} (Note: it can only appear at the top-level of a [module](/en-US/docs/Web/JavaScript/Guide/Modules))

Everything else in the [list above](#statements_and_declarations_by_category) is a statement.

The terms "statement" and "declaration" have a precise meaning in the formal syntax of JavaScript that affects where they may be placed in code. For example, in most control-flow structures, the body only accepts statements — such as the two arms of an [`if...else`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else):

```js
if (condition)
  statement1;
else
  statement2;
```

If you use a declaration instead of a statement, it would be a {{jsxref("SyntaxError")}}. For example, a [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) declaration is not a statement, so you can't use it in its bare form as the body of an `if` statement.

```js example-bad
if (condition)
  let i = 0; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

On the other hand, [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var) is a statement, so you can use it on its own as the `if` body.

```js example-good
if (condition)
  var i = 0;
```

You can see declarations as "binding identifiers to values", and statements as "carrying out actions". The fact that `var` is a statement instead of a declaration is a special case, because it doesn't follow normal lexical scoping rules and may create side effects — in the form of creating global variables, mutating existing `var`-defined variables, and defining variables that are visible outside of its block (because `var`-defined variables aren't block-scoped).

As another example, [labels](/en-US/docs/Web/JavaScript/Reference/Statements/label) can only be attached to statements.

```js example-bad
label: const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

> **Note:** there's a legacy grammar that allows [function declarations to have labels](/en-US/docs/Web/JavaScript/Reference/Statements/label#labeled_function_declarations), but it's only standardized for compatibility with web reality.

To get around this, you can wrap the declaration in braces — this makes it part of a [block statement](/en-US/docs/Web/JavaScript/Reference/Statements/block).

```js example-good
label: {
  const a = 1;
}

if (condition) {
  let i = 0;
}
```

## Browser compatibility

{{Compat}}

## See also

- [Operators](/en-US/docs/Web/JavaScript/Reference/Operators)
