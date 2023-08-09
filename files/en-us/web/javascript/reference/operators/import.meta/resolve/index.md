---
title: import.meta.resolve()
slug: Web/JavaScript/Reference/Operators/import.meta/resolve
page-type: javascript-language-feature
browser-compat: javascript.operators.import_meta.resolve
---

{{JSSidebar("Operators")}}

**`import.meta.resolve()`** is a built-in function defined on the [`import.meta`](/en-US/docs/Web/JavaScript/Reference/Operators/import.meta) object of a JavaScript module that resolves a module specifier to a URL using the current module's URL as base.

## Syntax

```js-nolint
import.meta.resolve(moduleName)
```

### Parameters

- `moduleName`
  - : A string that specifies a potentially importable module. This may be a relative path (such as `"./lib/helper.js"`), a bare name (such as `"my-module"`), or an absolute URL (such as `"https://example.com/lib/helper.js"`).

### Return value

Returns a string corresponding to the path that would be imported if the argument were passed to [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import).

## Description

`import.meta.resolve()` allows a script to access the _module specifier resolution_ algorithm for a name, like this:

```js
// Script at https://example.com/main.js

const helperPath = import.meta.resolve("./lib/helper.js");
console.log(helperPath); // "https://example.com/lib/helper.js"
```

Note that `import.meta.resolve()` only performs resolution and does not attempt to load or import the resulting path. (The [explainer for the specification](https://gist.github.com/domenic/f2a0a9cb62d499bcc4d12aebd1c255ab#sync-vs-async) describes the reasoning for this behavior.) Therefore, its return value is the same _regardless of whether the returned path corresponds to a file that exists, and regardless of whether that file contains valid code for a module_.

It is different from [dynamic import](/en-US/docs/Web/JavaScript/Reference/Operators/import), because although both accept a module specifier as the first argument, `import.meta.resolve()` returns the path that _would be imported_ without making any attempt to access that path. Therefore, the following two are effectively the same code:

```js
// Approach 1
console.log(await import("./lib/helper.js"));

// Approach 2
const helperPath = import.meta.resolve("./lib/helper.js");
console.log(await import(helperPath));
```

However, even if `"./lib/helper.js"` cannot be successfully imported, the second snippet will not encounter an error until it attempts to perform the import on line 2.

### Bare module names

You can pass a bare module name (also known as a bare module specifier) to `import.meta.resolve()`, as long as module resolution is defined for the name. For example, you can define this using an [import map](/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) inside a browser:

```html
<!-- index.html -->
<script type="importmap">
  {
    "imports": {
      "my-module": "./modules/my-module/index.js"
    }
  }
</script>

<script type="module">
  const moduleEntryPath = import.meta.resolve("my-module");
  console.log(moduleEntryPath);
</script>
```

Again, since this snippet does not try to import `moduleEntryPath` — neither does the import map — it prints the resolved URL regardless of whether `./modules/my-module/index.js` actually exists.

### Comparison with new URL()

The [`URL()`](/en-US/docs/Web/API/URL/URL) constructor accepts a second _base URL_ argument. When the first argument is a relative path and the base URL is [`import.meta.url`](/en-US/docs/Web/JavaScript/Reference/Operators/import.meta#value), the effect is similar to `import.meta.resolve()`.

```js
const helperPath = new URL("./lib/helper.js", import.meta.url).href;
console.log(helperPath);
```

This is also a useful replacement syntax when targeting older browsers. However, there are some differences:

- `import.meta.resolve()` returns a string, while `new URL()` returns a `URL` object. It is possible to use [`href`](/en-US/docs/Web/API/URL/href) or [`toString()`](/en-US/docs/Web/API/URL/toString) on the constructed `URL`, but this may still not produce the exact same result in some JavaScript environments or when using tools like bundlers to statically analyze the code.
- `import.meta.resolve()` is aware of additional resolution configurations, such as resolving bare module names using import maps, as described above. `new URL()` is not aware of import maps and treats bare module names as relative paths (i.e. `new URL("my-module", import.meta.url)` means `new URL("./my-module", import.meta.url)`).

Some tools recognize `new URL("./lib/helper.js", import.meta.url).href` as a dependency on `"./lib/helper.js"` (similar to an import), and take this into account for features like bundling, rewriting imports for moved files, "go to source" functionality, etc. However, since `import.meta.resolve()` is less ambiguous and specifically designed to indicate a module path resolution dependency, you should use `import.meta.resolve(moduleName)` instead of `new URL(moduleName, import.meta.url)` for these use cases wherever possible.

### Not an ECMAScript feature

`import.meta.resolve()` is not specified or documented as part of the [ECMAScript specification](/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) for JavaScript modules. Instead, the specification defines [the `import.meta` object](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-ImportMeta) but [leaves all its properties as "host-defined"](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-hostgetimportmetaproperties). The WHATWG HTML standard picks up where the ECMAScript standard leaves off, and [defines `import.meta.resolve`](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetimportmetaproperties) using its [module specifier resolution](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier).

This means that `import.meta.resolve()` is not required to be implemented by all conformant JavaScript implementations. However, `import.meta.resolve()` may also be available in non-browser environments:

- Deno implements [compatibility with browser behavior](https://deno.land/manual/runtime/import_meta_api).
- Node.js has an implementation that is available using the `--experimental-import-meta-resolve` and currently returns a `Promise` instead of a string, although this may change to match browsers.

## Examples

### Resolve a path for the Worker() constructor

`import.meta.resolve()` is particularly valuable for APIs that take a path to a script file as an argument, such as the [`Worker()`](/en-US/docs/Web/API/Worker/Worker) constructor:

```js
// main.js
const workerPath = import.meta.resolve("./worker.js");
const worker = new Worker(workerPath, { type: "module" });
worker.addEventListener("message", console.log);
```

```js
// worker.js
self.postMessage("hello!");
```

This is also useful to calculate paths for other workers, such as [service workers](/en-US/docs/Web/API/ServiceWorker) and [shared workers](/en-US/docs/Web/API/SharedWorker). However, if you are using a relative path to calculate the URL of a service worker, keep in mind that the directory of the resolved path determines its [registration scope](/en-US/docs/Web/API/ServiceWorkerRegistration/scope) by default (although a different scope can be specified [during registration](/en-US/docs/Web/API/ServiceWorkerContainer/register)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`import` statement](/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [Dynamic `import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/en-US/docs/Web/JavaScript/Reference/Operators/import.meta)
