---
title: await using
slug: Web/JavaScript/Reference/Statements/await-using
page-type: javascript-statement
browser-compat: javascript.statements.using
---

{{jsSidebar("Statements")}}

The **`await using`** declaration declares block-scoped local variables that implement explicit resource management. The semantics are similar to {{jsxref("Statements/using", "using")}}, but the cleanup code is called asynchronously. The cleanup code to be run is that defined in the [well-known](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.asyncDispose` method, if available, or in the well-known `Symbol.dispose` method otherwise.

Along with its synchronous cousin `using`, this is useful for managing resources that need to be released when they are no longer needed, such as file handles, network connections, or database connections.

{{InteractiveExample("JavaScript Demo: await using declaration")}}

```js interactive-example
(async () => {
  await using resource = {
    async [Symbol.asyncDispose]() {
      console.log("dispose");
    },
  };

  console.log("end of scope");
})();

// 1. logs "end of scope"
// 2. logs "dispose"
```

## Syntax

```js-nolint
await using name1 = value1;
await using name1 = value1, name2 = value2;
await using name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : The name of the variable to declare. Each must be a legal JavaScript [identifier](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers).
- `valueN`
  - : Initial value of the variable. It must have a `Symbol.dispose` method, which will be called when the variable goes out of scope.

## Description

The `await using` declaration is similar to {{jsxref("Statements/const", "const")}}:

- `await using` declarations are scoped to blocks as well as functions.
- `await using` declarations can only be accessed after the place of declaration is reached (see [temporal dead zone](/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). For this reason, `const` declarations are commonly regarded as [non-hoisted](/en-US/docs/Glossary/Hoisting).
- `await using` declarations do not create properties on {{jsxref("globalThis")}} when declared at the top level of a script.
- `await using` declarations cannot be [redeclared](/en-US/docs/Web/JavaScript/Reference/Statements/let#redeclarations) by any other declaration in the same scope.
- `await using` begins [_declarations_, not _statements_](/en-US/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). That means you cannot use a lone `const` declaration as the body of a block (which makes sense, since there's no way to access the variable).

  ```js-nolint example-bad
  if (true) await using a = 1; // SyntaxError: Unexpected identifier 'a'
  ```

An initializer is required. You must specify its value in the same declaration. (This makes sense, given that it can't be changed later.)

```js-nolint example-bad
await using FOO; // SyntaxError: Missing initializer in using declaration
```

Unlike `const`, `await using` declarations cannot be [destructured](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring) within the declaration itself:

```js-nolint example-bad
await using { prop } = { /* ... */ }; // SyntaxError: Unexpected token '{'
```

If destructuring is needed, it must be done separately:

```js
await using resource = {
  /* ... */
};
const { prop } = resource;
```

## Examples

### Reading a file with automatic cleanup

This simplified example simply logs file operations to the console. In a real-world scenario, you would use this pattern to manage file handles or other resources that need to be cleaned up after use.

```js
class FileHandle {
  constructor(name) {
    this.name = name;
    console.log(`Opening file ${name}`);
  }

  async read() {
    console.log(`File ${this.name} read successfully!`);
  }

  async [Symbol.asyncDispose]() {
    console.log(`Closing file ${this.name}`);
  }
}

{
  await using file = new FileHandle("example.txt");
  await file.read();
}
// Opening file example.txt
// File example.txt read successfully!
// Closing file example.txt
```

### Error during file reading

In this case, an error is thrown, but the cleanup code in the `Symbol.dispose` method is still executed.

```js
class FileHandle {
  constructor(name) {
    this.name = name;
    console.log(`Opening file ${name}`);
  }

  async read() {
    throw new Error("There was an error reading the file!");
  }

  async [Symbol.asyncDispose]() {
    console.log(`Closing file ${this.name}`);
  }
}

{
  await using file = new FileHandle("example.txt");
  await file.read();
}
// Opening file example.txt
// Closing file example.txt
// Uncaught Error: There was an error reading the file!
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/using", "using")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/let", "let")}}
