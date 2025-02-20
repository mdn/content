---
title: await using
slug: Web/JavaScript/Reference/Statements/await_using
page-type: javascript-statement
browser-compat: javascript.statements.await_using
sidebar: jssidebar
---

The **`await using`** declaration declares block-scoped local variables that are _asynchronously disposed_. Like {{jsxref("Statements/const", "const")}}, variables declared with `await using` must be initialized and cannot be reassigned. The variable's value must be either `null`, `undefined`, or an object with an [`[Symbol.asyncDispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) or [`[Symbol.dispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) method. When the variable goes out of scope, the `[Symbol.asyncDispose]()` or `[Symbol.dispose]()` method of the object is called and awaited, to ensure that resources are freed.

## Syntax

```js-nolint
await using name1 = value1;
await using name1 = value1, name2 = value2;
await using name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : The name of the variable to declare. Each must be a legal JavaScript [identifier](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) and _not_ a [destructuring binding pattern](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring).
- `valueN`
  - : Initial value of the variable. It can be any legal expression but its value must be either `null`, `undefined`, or an object with an [`[Symbol.asyncDispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) or [`[Symbol.dispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) method.

## Description

This declaration can only be used in places where both {{jsxref("Operators/await", "await")}} and {{jsxref("Statements/using", "using")}} can be used, which include:

- Inside a [block](/en-US/docs/Web/JavaScript/Reference/Statements/block) (if the block is also in an async context)
- Inside an [async function](/en-US/docs/Web/JavaScript/Reference/Statements/async_function) or async generator function body
- At the top level of a [module](/en-US/docs/Web/JavaScript/Guide/Modules)
- In the initializer of a [`for`](/en-US/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) (if the `for` loop is also in an async context), or [`for await...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) loop

An `await using` declares an async disposable resource that's tied to the lifetime of the variable's scope (block, function, module, etc.). When the scope exits, the resource is disposed of asynchronously. Its syntax may be somewhat confusing, because the `await` does not have an awaiting effect when the variable is first declared, but only when the variable goes out of scope.

When the variable is first declared, a _disposer_ is retrieved from the object. The `[Symbol.asyncDispose]` property is tried first, and falls back to `[Symbol.dispose]` if `[Symbol.asyncDispose]` is `undefined`. If neither property contains a function, a `TypeError` is thrown. Notably, the `[Symbol.dispose]()` method is wrapped into a function that looks like `async () => { object[Symbol.dispose](); }`, which means if it returns a promise, that promise is _not_ awaited. This disposer is saved to the scope.

When the variable goes out of scope, the disposer is called and awaited. If the scope contains multiple `using` or `await using` declarations, all disposers are run in sequence in the reverse order of declaration, regardless of the type of declaration. All disposers are guaranteed to run (much like the `finally` block in `try...catch...finally`). All errors thrown during disposal, including the initial error that caused the scope exit (if applicable), are all aggregated inside one {{jsxref("SuppressedError")}}, with each earlier exception as the `suppressed` property and the later exception as the `error` property. This `SuppressedError` is thrown after disposal is complete.

The variable is allowed to have value `null` or `undefined`, so the resource can be optionally present. As long as one `await using` variable is declared in this scope, at least one `await` is guaranteed to happen on scope exit, even if the variable actually has value `null` or `undefined`. This prevents the disposal to end synchronously, causing timing issues (see [control flow effects of `await`](/en-US/docs/Web/JavaScript/Reference/Operators/await#control_flow_effects_of_await)).

`await using` ties resource management to lexical scopes, which is both convenient and sometimes confusing. See below for some examples where it may not behave how you expect. If you want to hand-manage resource disposal, while maintaining the same error handling guarantees, you can use {{jsxref("AsyncDisposableStack")}} instead.

## Examples

You should also check {{jsxref("Statements/using", "using")}} for more examples, especially some general caveats with respect to scope-based resource management.

### Basic usage

Usually, you use `await using` on some library-provided resource that already implements the async disposable protocol. For example, the Node.js [`FileHandle`](https://nodejs.org/api/fs.html#filehandlesymbolasyncdispose) is async disposable:

```js
import fs from "node:fs/promises";

async function example() {
  await using file = await fs.open("example.txt", "r");
  console.log(await file.read());
  // Before `file` goes out of scope, it is disposed by calling `file[Symbol.asyncDispose]()` and awaited.
}
```

Note that there are two `await` operations in the declaration for `file`, which do different things and are both necessary. `await fs.open()` causes an await during _acquisition_: it waits for the file to be opened and unwraps the returned promise into a `FileHandle` object. `await using file` causes an await during _disposal_: it makes `file` disposed asynchronously when the variable goes out of scope.

### `await using` with `for await...of`

It's very easy to confuse the following three syntaxes:

- `for await (using x of y) { ... }`
- `for (await using x of y) { ... }`
- `for (using x of await y) { ... }`

It may be even more confusing to know that they can be used together.

```js
for await (await using x of await y) {
  // ...
}
```

First, `await y` does what you expect: we {{jsxref("Operators/await", "await")}} the promise `y`, which is expected to resolve to an object we iterate over. Let us set this variant aside.

The {{jsxref("Statements/for-await...of", "for await...of")}} loop requires the `y` object to be an _async iterable_. This means that the object must have a `[Symbol.asyncIterator]` method that returns an _async iterator_, whose `next()` method returns a promise representing the result. This is for when the iterable doesn't know what the next value is, or even if it's done yet, until some async operation is complete.

On the other hand, the `await using x` syntax requires the `x` object, as yielded from the iterable, to be an _async disposable_. This means that the object must have a `[Symbol.asyncDispose]` method that returns a promise representing the disposal operation. This is a separate concern from the iteration itself, and is only called when the variable `x` goes out of scope.

In other words, all of the following four combinations are valid and do different things:

- `for (using x of y)`: `y` is synchronously iterated, yielding one result at a time, which can be disposed synchronously.
- `for await (using x of y)`: `y` is asynchronously iterated, yielding one result at a time after awaiting, but the result value can be disposed synchronously.
- `for (await using x of y)`: `y` is synchronously iterated, yielding one result at a time, but the result value can only be disposed asynchronously.
- `for await (await using x of y)`: `y` is asynchronously iterated, yielding one result at a time after awaiting, and the result value can only be disposed asynchronously.

Below, we create some fictitious values of `y` to demonstrate their use cases. For asynchronous APIs, we base our code on the Node.js [`fs/promises`](https://nodejs.org/api/fs.html#promises-api) module.

```js
const syncIterableOfSyncDisposables = [
  stream1.getReader(),
  stream2.getReader(),
];
for (using reader of syncIterableOfSyncDisposables) {
  console.log(reader.read());
}
```

```js
async function* requestMany(urls) {
  for (const url of urls) {
    const res = await fetch(url);
    yield res.body.getReader();
  }
}
const asyncIterableOfSyncDisposables = requestMany([
  "https://example.com",
  "https://example.org",
]);
for await (using reader of asyncIterableOfSyncDisposables) {
  console.log(reader.read());
}
```

```js
const syncIterableOfAsyncDisposables = fs
  .globSync("*.txt")
  .map((path) => fs.open(path, "r"));
for (await using file of syncIterableOfAsyncDisposables) {
  console.log(await file.read());
}
```

```js
async function* globHandles(pattern) {
  for await (const path of fs.glob(pattern)) {
    yield await fs.open(path, "r");
  }
}
const asyncIterableOfAsyncDisposables = globHandles("*.txt");
for await (await using file of asyncIterableOfAsyncDisposables) {
  console.log(await file.read());
}
```

### Implicit await on scope exit

As soon as one `await using` is declared in a scope, the scope will always have an `await` on exit, even if the variable is `null` or `undefined`. This ensures stable execution order and error handling. The [Control flow effects of await](/en-US/docs/Web/JavaScript/Reference/Operators/await#control_flow_effects_of_await) examples have more details on this.

```js
async function example() {
  await using nothing = null;
  console.log("Example call");
}

example().then(() => console.log("Example done"));
Promise.resolve().then(() => console.log("Microtask done"));
// Output:
// Example call
// Microtask done
// Example done
```

Consider the same code but with a synchronous {{jsxref("Statements/using", "using")}} instead:

```js
async function example() {
  using nothing = null;
  console.log("Example call");
}

example().then(() => console.log("Example done"));
Promise.resolve().then(() => console.log("Microtask done"));
// Output:
// Example call
// Example done
// Microtask done
```

For a more realistic example, consider two calls to a function in parallel:

```js
class Resource {
  #name;
  constructor(name) {
    this.#name = name;
  }
  async [Symbol.asyncDispose]() {
    console.log(`Disposing resource ${this.#name}`);
  }
}

async function example(id, createOptionalResource) {
  await using required = new Resource(`required ${id}`);
  await using optional = createOptionalResource
    ? new Resource("optional")
    : null;
  await using another = new Resource(`another ${id}`);
}

example(1, true);
example(2, false);
// Output:
// Disposing resource another 1
// Disposing resource another 2
// Disposing resource optional
// Disposing resource required 1
// Disposing resource required 2
```

As you can see, the `required 2` resource is disposed in the same tick as `required 1`. If the `optional` resource did not cause a redundant `await`, then `required 2` would have been disposed earlier, which would be simultaneous with `optional`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/using", "using")}}
- {{jsxref("Symbol.asyncDispose")}}
- {{jsxref("AsyncDisposableStack")}}
