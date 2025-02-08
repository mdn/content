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
  - : Initial value of the variable. It can be any legal expression but its value must be either `null`, `undefined`, or an object with an `[Symbol.dispose]()` method.

## Description

This declaration can be used:

- Inside a [block](/en-US/docs/Web/JavaScript/Reference/Statements/block)
- Inside any [function body](/en-US/docs/Web/JavaScript/Reference/Statements/function) or [class static initialization block](/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- At the top level of a [module](/en-US/docs/Web/JavaScript/Guide/Modules)
- In the initializer of a [`for`](/en-US/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of), or [`for await...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) loop

Most notably, it cannot be used:

- At the top level of a script, because script scopes are persistent.
- In the initializer of a [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop. Because the loop variable can only be a string or symbol, this doesn't make sense.

A `using` declares a disposable resource that's tied to the lifetime of the variable's scope (block, function, module, etc.). When the scope exits, the resource is disposed of synchronously. The variable is allowed to have value `null` or `undefined`, so the resource can be optionally present.

When the variable is first declared, a _disposer_ is retrieved from the object. If the `[Symbol.dispose]` property doesn't contain a function, a `TypeError` is thrown. This disposer is saved to the scope.

When the variable goes out of scope, the disposer is called. If the scope contains multiple `using` or `await using` declarations, all disposers are run in the reverse order of declaration, regardless of the type of declaration. All disposers are guaranteed to run (much like the `finally` block in `try...catch...finally`). All errors thrown during disposal, including the initial error that caused the scope exit (if applicable), are all aggregated inside one {{jsxref("SuppressedError")}}, with each earlier exception as the `suppressed` property and the later exception as the `error` property. This `SuppressedError` is thrown after disposal is complete.

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

You can use `using` at the top level of a [`switch`](/en-US/docs/Web/JavaScript/Reference/Statements/switch) statement:

```js
switch (Math.random() > 0.5) {
  case true:
    using resource = new Resource();
    console.log(resource.getValue());
    // resource disposed here because of break
    break;
  case false:
    console.log("No resource");
    // no resource to dispose because the using declaration was not executed
    break;
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

The resource may outlive the declaration, in case it's captured by a [closure](/en-US/docs/Web/JavaScript/Closures):

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

Here, we _alias_ a `const`-declared resource to a `using`-declared resource, so that the resource is only disposed when the callback is called once. You can also do the following, but it may be more error-prone in a more complex situation, combined with error handling:

```js
function example() {
  const resource = new Resource();
  return () => {
    const value = resource.getValue();
    resource[Symbol.dispose]();
    return value;
  };
}
```

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

### Initialization and temporal dead zones

### Error handling

### Implicit work on scope exit

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
