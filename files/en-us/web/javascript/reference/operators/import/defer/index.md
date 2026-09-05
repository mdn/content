---
title: import.defer()
slug: Web/JavaScript/Reference/Operators/import/defer
page-type: javascript-language-feature
browser-compat: javascript.operators.import.defer
sidebar: jssidebar
---

The **`import.defer()`** syntax behaves like regular [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import) syntax, but only obtains a [deferred module namespace object](/en-US/docs/Web/JavaScript/Reference/Statements/import/defer#deferred_module_namespace_object). The module and its dependencies are fetched and linked up front, but their synchronous evaluation is deferred until the namespace's properties are accessed.

For more information about deferred evaluation, including its interaction with top-level `await`, see the [`import defer`](/en-US/docs/Web/JavaScript/Reference/Statements/import/defer) declaration form.

## Syntax

```js-nolint
import.defer(moduleName)
import.defer(moduleName, options)
```

`import.defer()` is special syntax (a "meta property"), not a method on an `import` object.

### Parameters

See [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import#parameters).

### Return value

Returns a promise that fulfills with a [deferred module namespace object](/en-US/docs/Web/JavaScript/Reference/Statements/import/defer#deferred_module_namespace_object) after the module graph is loaded and linked, and any eagerly evaluated [top-level `await` dependencies](/en-US/docs/Web/JavaScript/Reference/Statements/import/defer#top-level_await) have finished evaluating.

Like regular [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import#return_value), the promise rejects if the module or its dependencies cannot be loaded, parsed, or linked. It also rejects if an eagerly evaluated module throws. Errors from evaluation that remains deferred are instead thrown synchronously by the namespace operation that triggers evaluation.

## Examples

### Using import.defer()

> [!NOTE]
> It's guaranteed that `await`ing the resulting promise never accidentally calls an exported `then` method—a gotcha associated with the [regular module namespace object](/en-US/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object)—because the deferred module namespace object never exposes a property called `then`.

```js
const ts = await import.defer("typescript");

function compilePath(path) {
  // Evaluation of the typescript module subgraph starts here
  const program = ts.createProgram([path], {});
}
```

Never immediately destructure the returned namespace, because it triggers evaluation:

```js example-bad
const { createProgram } = await import.defer("typescript");
// The typescript module has now been evaluated.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules) guide
- {{jsxref("Operators/import", "import()")}}
- {{jsxref("Statements/import/defer", "import defer")}}
