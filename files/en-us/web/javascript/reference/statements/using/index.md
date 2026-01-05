---
title: using
slug: Web/JavaScript/Reference/Statements/using
page-type: javascript-statement
browser-compat: javascript.statements.using
sidebar: jssidebar
---

The **`using`** declaration declares block-scoped local variables that are _synchronously disposed_. Like {{jsxref("Statements/const", "const")}}, variables declared with `using` must be initialized and cannot be reassigned. The variable's value must be either `null`, `undefined`, or an object with a [`[Symbol.dispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) method. When the variable goes out of scope, the `[Symbol.dispose]()` method of the object is called, to ensure that resources are freed.

## Syntax

```js-nolint
using name1 = value1;
using name1 = value1, name2 = value2;
using name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : The name of the variable to declare. Each must be a legal JavaScript [identifier](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) and _not_ a [destructuring binding pattern](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring).
- `valueN`
  - : Initial value of the variable. It can be any legal expression but its value must be either `null`, `undefined`, or an object with a `[Symbol.dispose]()` method.

## Description

This declaration can be used:

- Inside a [block](/en-US/docs/Web/JavaScript/Reference/Statements/block)
- Inside any [function body](/en-US/docs/Web/JavaScript/Reference/Statements/function) or [class static initialization block](/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- At the top level of a [module](/en-US/docs/Web/JavaScript/Guide/Modules)
- In the initializer of a [`for`](/en-US/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of), or [`for await...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) loop

Most notably, it cannot be used:

- At the top level of a script, because script scopes are persistent.
- At the top level of a [`switch`](/en-US/docs/Web/JavaScript/Reference/Statements/switch) statement.
- In the initializer of a [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop. Because the loop variable can only be a string or symbol, this doesn't make sense.

A `using` declares a disposable resource that's tied to the lifetime of the variable's scope (block, function, module, etc.). When the scope exits, the resource is disposed of synchronously. The variable is allowed to have value `null` or `undefined`, so the resource can be optionally present.

When the variable is first declared and its value is non-nullish, a _disposer_ is retrieved from the object. If the `[Symbol.dispose]` property doesn't contain a function, a `TypeError` is thrown. This disposer is saved to the scope.

When the variable goes out of scope, the disposer is called. If the scope contains multiple `using` or {{jsxref("Statements/await_using", "await using")}} declarations, all disposers are run in the reverse order of declaration, regardless of the type of declaration. All disposers are guaranteed to run (much like the `finally` block in {{jsxref("Statements/try...catch", "try...catch...finally")}}). All errors thrown during disposal, including the initial error that caused the scope exit (if applicable), are all aggregated inside one {{jsxref("SuppressedError")}}, with each earlier exception as the `suppressed` property and the later exception as the `error` property. This `SuppressedError` is thrown after disposal is complete.

`using` ties resource management to lexical scopes, which is both convenient and sometimes confusing. There are many ways to preserve the variable's value when the variable itself is out of scope, so you may hold a reference to an already-disposed resource. See below for some examples where it may not behave how you expect. If you want to hand-manage resource disposal, while maintaining the same error handling guarantees, you can use {{jsxref("DisposableStack")}} instead.

## Examples

In the following examples, we assume a simple `Resource` class that has a `getValue` method and a `[Symbol.dispose]()` method:

```js
class Resource {
  value = Math.random();
  #isDisposed = false;

  getValue() {
    if (this.#isDisposed) {
      throw new Error("Resource is disposed");
    }
    return this.value;
  }

  [Symbol.dispose]() {
    this.#isDisposed = true;
    console.log("Resource disposed");
  }
}
```

### `using` in a block

The resource declared with `using` is disposed when exiting the block.

```js
{
  using resource = new Resource();
  console.log(resource.getValue());
  // resource disposed here
}
```

### `using` in a function

You can use `using` in a function body. In this case, the resource is disposed when the function finishes executing, immediately before the function returns.

```js
function example() {
  using resource = new Resource();
  return resource.getValue();
}
```

Here, `resource[Symbol.dispose]()` will be called after `getValue()`, before the `return` statement executes.

The resource may outlive the declaration, in case it's captured by a [closure](/en-US/docs/Web/JavaScript/Guide/Closures):

```js
function example() {
  using resource = new Resource();
  return () => resource.getValue();
}
```

In this case, if you call `example()()`, you will always execute `getValue` on a resource that's already disposed, because the resource was disposed when `example` returns. In case you want to dispose the resource immediately after the callback has been called once, consider this pattern:

```js
function example() {
  const resource = new Resource();
  return () => {
    using resource2 = resource;
    return resource2.getValue();
  };
}
```

Here, we _alias_ a `const`-declared resource to a `using`-declared resource, so that the resource is only disposed after the callback is called; note that if it is never called then the resource will never be cleaned up.

### `using` in a module

You can use `using` at the top level of a module. In this case, the resource is disposed when the module finishes executing.

```js
using resource = new Resource();
export const value = resource.getValue();
// resource disposed here
```

`export using` is invalid syntax, but you can `export` a variable declared elsewhere using `using`:

```js
using resource = new Resource();
export { resource };
```

This is still discouraged, because the importer will always receive a disposed resource. Similar to the closure problem, this causes the value of resource to live longer than the variable.

### `using` with `for...of`

You can use `using` in the initializer of a `for...of` loop. In this case, the resource is disposed on every loop iteration.

```js
const resources = [new Resource(), new Resource(), new Resource()];
for (using resource of resources) {
  console.log(resource.getValue());
  // resource disposed here
}
```

### Multiple `using`

The following are two equivalent ways to declare multiple disposable resources:

```js
using resource1 = new Resource(),
  resource2 = new Resource();

// OR

using resource1 = new Resource();
using resource2 = new Resource();
```

In both cases, when the scope exits, `resource2` is disposed before `resource1`. This is because `resource2` may have a dependency on `resource1`, so it's disposed first to ensure that `resource1` is still available when `resource2` is disposed.

### Optional `using`

`using` allows the variable to have value `null` or `undefined`, so the resource can be optionally present. This means you don't have to do this:

```js
function acquireResource() {
  // Imagine some real-world relevant condition here,
  // such as whether there's space to allocate for this resource
  if (Math.random() < 0.5) {
    return null;
  }
  return new Resource();
}

const maybeResource = acquireResource();

if (maybeResource) {
  using resource = maybeResource;
  console.log(resource.getValue());
} else {
  console.log(undefined);
}
```

But can do this:

```js
using resource = acquireResource();
console.log(resource?.getValue());
```

### `using` declaration without using the variable

You can achieve automatic resource disposing using `using`, without even using the variable. This is very useful for setting up a context within a block, such as creating a lock:

```js
{
  using _ = new Lock();
  // Perform concurrent operations here
  // Lock disposed (released) here
}
```

Note that `_` is a normal identifier, but it's a convention to use it as a "throwaway" variable. To create multiple unused variables, you need to use distinct names, for example by using a variable name prefixed with `_`.

### Initialization and temporal dead zones

`using` variables are subject to the same [temporal dead zone](/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) restriction as `let` and `const` variables. This means that you can't access the variable before the initialization—the valid lifetime of the resource is strictly from its initialization to the end of its scope. This is enables [RAII](https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization)-style resource management.

```js
let useResource;
{
  useResource = () => resource.getValue();
  useResource(); // Error: Cannot access 'resource' before initialization
  using resource = new Resource();
  useResource(); // Valid
}
useResource(); // Error: Resource is disposed
```

### Error handling

The `using` declaration is the most useful for managing resource disposal in the presence of errors. If you are not careful, some resources may leak because the error prevents code afterwards from executing.

```js
function handleResource(resource) {
  if (resource.getValue() > 0.5) {
    throw new Error("Resource value too high");
  }
}

try {
  using resource = new Resource();
  handleResource(resource);
} catch (e) {
  console.error(e);
}
```

This will successfully catch the error thrown by `handleResource` and log it, and no matter if `handleResource` throws an error or not, the resource is disposed before exiting the `try` block.

Here, if you don't use `using`, you may do something like:

```js example-bad
try {
  const resource = new Resource();
  handleResource(resource);
  resource[Symbol.dispose]();
} catch (e) {
  console.error(e);
}
```

But, if `handleResource()` throws an error, then control never reaches `resource[Symbol.dispose]()`, and the resource is leaked. Furthermore, if you have two resources, then errors thrown in earlier disposals may prevent later disposals from running, leading to more leaks.

Consider a more complicated case where the disposer itself throws an error:

```js
class CantDisposeMe {
  #name;
  constructor(name) {
    this.#name = name;
  }
  [Symbol.dispose]() {
    throw new Error(`Can't dispose ${this.#name}`);
  }
}

let error;

try {
  using resource1 = new CantDisposeMe("resource1");
  using resource2 = new CantDisposeMe("resource2");
  throw new Error("Error in main block");
} catch (e) {
  error = e;
}
```

You can inspect the error thrown in your browser's console. It has the following structure:

```plain
SuppressedError: An error was suppressed during disposal
  suppressed: SuppressedError: An error was suppressed during disposal
    suppressed: Error: Can't dispose resource1
    error: Error: Error in main block
  error: Error: Can't dispose resource2
```

As you can see, `error` contains all the errors that were thrown during disposal, as a {{jsxref("SuppressedError")}}. Each additional error is added as the `error` property, and the original error is added as the `suppressed` property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/await_using", "await using")}}
- {{jsxref("Symbol.dispose")}}
- {{jsxref("DisposableStack")}}
