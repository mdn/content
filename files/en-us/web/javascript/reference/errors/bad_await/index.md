---
title: "SyntaxError: await is only valid in async functions, async generators and modules"
slug: Web/JavaScript/Reference/Errors/Bad_await
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "await is only valid in async functions, async generators and modules" occurs when an {{jsxref("Operators/await", "await")}} expression is used outside of [async functions](/en-US/docs/Web/JavaScript/Reference/Statements/async_function) or [modules](/en-US/docs/Web/JavaScript/Guide/Modules) or other async contexts.

## Message

```plain
SyntaxError: await is only valid in async functions and the top level bodies of modules (V8-based)
SyntaxError: await is only valid in async functions, async generators and modules (Firefox)
SyntaxError: Unexpected identifier (Safari)
```

## Error type

{{jsxref("SyntaxError")}}.

## What went wrong?

JavaScript execution is never blocking: an `await` can never block the execution of the program. Instead, it pauses the execution of the surrounding async task, while allowing other tasks to continue running. Therefore, `await` cannot be used in sync tasks, such as functions, generator functions, or top level of scripts. It is not always apparent whether the current file is a script or a module — see the [Modules guide](/en-US/docs/Web/JavaScript/Guide/Modules#top_level_await) for more information.

## Examples

### Top-level await

You cannot use `await` at the top level of a script:

```html example-bad
<script>
  await fetch("https://example.com");
  // SyntaxError: await is only valid in async functions, async generators and modules
</script>
```

Instead, make the script a module:

```html example-good
<script type="module">
  await fetch("https://example.com");
</script>
```

### Async callbacks

You cannot use `await` in a sync callback:

```js-nolint example-bad
urls.forEach((url) => {
  await fetch(url);
  // SyntaxError: await is only valid in async functions, async generators and modules
});
```

Instead, make the callback async. See more explanation in the [Using promises guide](/en-US/docs/Web/JavaScript/Guide/Using_promises#composition).

```js example-good
Promise.all(
  urls.map(async (url) => {
    await fetch(url);
  }),
);
```

## See also

- {{jsxref("Operators/await", "await")}}
