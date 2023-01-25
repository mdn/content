---
title: import.meta
slug: Web/JavaScript/Reference/Operators/import.meta
page-type: javascript-language-feature
tags:
  - JavaScript
  - Language feature
  - Modules
  - Reference
  - Operator
  - import
  - import.meta
  - import.meta.resolve
browser-compat: javascript.operators.import_meta_resolve
---

{{JSSidebar("Operators")}}

**`import.meta.resolve`** is a built-in function defined on the [`import.meta`](/en-US/docs/Web/JavaScript/Reference/Operators/import.meta) object of a JavaScript module.

## Syntax

```js
import.meta.resolve(moduleName)
```

### Value

### Parameters

- `moduleName`
  - : A string that specifies a potentially importable module. This may be relative path (such as `"./lib/helper.js"`) or bare name (such as `"my-module"`).

### Return value

Returns a string corresponding to the path that would be imported if the argument were passed to the dynamic import syntax.

## Description

`import.meta.resolve(…)` allows a script to access the _module specifier resolution_ algorithm for a name, like this:

```js
// Script at https://example.com/main.js

const helperPath = import.meta.resolve("./lib/helper.js");
console.log(helperPath); // Prints: https://example.com/lib/helper.js
```

Note that `import.meta.resolve(…)` only performs resolution, and does not attempt to load or import the resulting path. Therefore, its return value is the same _regardless of whether the returned path corresponds to a file that exists, and regardless of whether that file contains valid code for a module_.

In comparison to a [dynamic import](/en-US/docs/Web/JavaScript/Reference/Operators/import):

- it is **similar** because it accepts the same argument, but
- it is **different** because returns the path that _would be imported_ without making any attempt to access that path.

Therefore, the following snippets are effectively the same code:

```js
// main-1.js
console.log(await import("./lib/helper.js"));
```

```js
// main-2.js
const helperPath = import.meta.resolve("./lib/helper.js");
console.log(await import(helperPath));
```

However, even if `"./lib/helper.js"` cannot be successfully imported, the second snippet will not encounter an error until it attempts to perform the import on line 2.

### Bare module names

You can pass a bare module name (also known as a bare module specifier) to `import.meta.resolve(…)`. For example, the following works in a browser:

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

Reminder: since this snippet does not try to import `moduleEntryPath` (and neither does the import map), it will only print the resolved URL and act the same regardless of whether `./modules/my-module/index.js` actually exists!

### Comparison with `new URL(…, import.meta.url)`

The [`URL` constructor](/en-US/docs/Web/API/URL/URL) accepts a second _base URL_ argument. When the first argument is a relative path and the base URL is [`import.meta.url`](/en-US/docs/Web/JavaScript/Reference/Operators/import.meta#value), the resulting URL is calculated similar to `import.meta.resolve(…)`:

```js
const helperPath = new URL("./lib/helper.js", import.meta.url).href;
console.log(helperPath);
```

This is also a useful replacement syntax when targeting older browsers released from 2018 to 2022. However, there are some differences:

- `import.meta.resolve(…)` returns a string, while `new URL(…)` returns a `URL` object. It is possible to call [`.href`](/en-US/docs/Web/API/URL/href) or [`.toString()`](/en-US/docs/Web/API/URL/toString) on the constructed `URL`, but this may still not produce the exact same result in some JavaScript environments or when using certain bundlers or other tool that handle JavaScript.
- `import.meta.resolve(…)` can accept bare module names, as described above. `new URL(…)` treats bare module names as relative paths (i.e. `new URL("my-module", import.meta.url)` means `new URL("./my-module", import.meta.url)`).

As of January 2023, some tools recognize `new URL("./lib/helper.js", import.meta.url).href` as a dependency on `"./lib/helper.js"` (similar to an import), and take this into account for features like:

- Bundling
- Rewriting imports for moved files
- "Go to source"

However, since `import.meta.resolve(…)` is less ambiguous and specifically designed to indicate a module path resolution dependency, it is likely that this will become a preferred replacement for `new URL(..., import.meta.url)` for these use cases over time.

## Examples

### Resolve a path for the `Worker` constructor

`import.meta.resolve(…)` is particularly valuable for APIs that take a path to a script file as an argument, such as the [`Worker` constructor](/en-US/docs/Web/API/Worker):

```js
// main.js
const workerPath = import.meta.resolve("./worker.js");
const worker = new Worker(workerPath, {type: "module"})
worker.addEventListener("message", console.log)
```

```js
// worker.js
self.postMessage("hello!")
```

This is also useful to calculate paths for other workers, such as [service workers](/en-US/docs/Web/API/SharedWorker) and [shared workers](/en-US/docs/Web/API/SharedWorker). However, if you are using a relative path to calculate the URL of a service worker, keep in mind that the directory of the resolved path determines its [registration scope](/en-US/docs/Web/API/ServiceWorkerRegistration/scope) by default (although a different scope can be specified [during registration](/en-US/docs/Web/API/ServiceWorkerContainer/register)).

### Not an ESM feature

`import.meta.resolve(…)` is not specified or documented as part of the [ECMAScript specification](https://tc39.es/ecma262/) for JavaScript modules. This is different from [import statements](/en-US/docs/Web/JavaScript/Reference/Statements/import) (["import declarations"](https://tc39.es/ecma262/#sec-imports)) and [dynamic imports](/en-US/docs/Web/JavaScript/Reference/Operators/import) (["import calls"](https://tc39.es/ecma262/#sec-import-calls)), which are part of the specification.

Instead, the specification defines [the `import.meta` object](https://tc39.es/ecma262/#prod-ImportMeta) but [leaves all its properties as "host-defined"](https://tc39.es/ecma262/#sec-hostgetimportmetaproperties). The WHATWG HTML standard picks up where the ECMAScript standard leaves off, and [defines `import.meta.resolve`](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetimportmetaproperties) using its [module specifier resolution](https://html.spec.whatwg.org/#resolve-a-module-specifier).

This means that `import.meta.resolve(…)` is not technically part of ES2022, ES2023, or any specific version of JavaScript. However, `import.meta.resolve(…)` may also be available in non-browser environments:

- Deno implements [compatibility with browser behaviour](https://deno.land/manual@v1.28.3/runtime/import_meta_api).
- Node.js has an implementation that is available using the `--experimental-import-meta-resolve` and currently returns a `Promise` instead of a string, although this may change to match browsers.

## Specifications

<!-- TODO: https://github.com/mdn/browser-compat-data/blob/main/javascript/operators/import_meta_resolve.json -->
{{Specifications}}

## Browser compatibility

<!-- TODO: https://github.com/mdn/browser-compat-data/blob/main/javascript/operators/import_meta_resolve.json -->
{{Compat}}

## See also

- {{JSxRef("Statements/import", "import statement")}}
- {{JSxRef("Operators/import", "Dynamic import()")}}
- {{JSxRef("Operators/import.meta", "import.meta")}}
