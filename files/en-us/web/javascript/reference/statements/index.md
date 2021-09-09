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

- {{jsxref("Statements/block", "Block","",1)}}
  - : A block statement is used to group zero or more statements. The block is delimited by a pair of curly brackets.
- {{jsxref("Statements/break", "break")}}
  - : Terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.
- {{jsxref("Statements/continue", "continue")}}
  - : Terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
- {{jsxref("Statements/Empty", "Empty","",1)}}
  - : An empty statement is used to provide no statement, although the JavaScript syntax would expect one.
- {{jsxref("Statements/if...else", "if...else")}}
  - : Executes a statement if a specified condition is true. If the condition is false, another statement can be executed.
- {{jsxref("Statements/switch", "switch")}}
  - : Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
- {{jsxref("Statements/throw", "throw")}}
  - : Throws a user-defined exception.
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : Marks a block of statements to try, and specifies a response, should an exception be thrown.

### Declarations

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
- {{jsxref("Statements/return", "return")}}
  - : Specifies the value to be returned by a function.
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

- {{jsxref("Statements/debugger", "debugger")}}
  - : Invokes any available debugging functionality. If no debugging functionality is available, this statement has no effect.
- {{jsxref("Statements/export", "export")}}
  - : Used to export functions to make them available for imports in external modules, and other scripts.
- {{jsxref("Statements/import", "import")}}
  - : Used to import functions exported from an external module, another script.
- [`import.meta`](/en-US/docs/Web/JavaScript/Reference/Statements/import.meta)
  - : Exposes context-specific metadata to a JavaScript module.
- {{jsxref("Statements/label", "label", "", 1)}}
  - : Provides a statement with an identifier that you can refer to using a `break` or `continue` statement.
- {{jsxref("Statements/with", "with")}}
  - : Extends the scope chain for a statement.

## Browser compatibility

{{Compat}}

## See also

- [Operators](/en-US/docs/Web/JavaScript/Reference/Operators)
