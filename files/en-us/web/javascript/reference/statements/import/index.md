---
title: import
slug: Web/JavaScript/Reference/Statements/import
page-type: javascript-statement
browser-compat: javascript.statements.import
---

{{jsSidebar("Statements")}}

The static **`import`** declaration is used to import read-only live {{Glossary("binding", "bindings")}} which are [exported](/en-US/docs/Web/JavaScript/Reference/Statements/export) by another module. The imported bindings are called _live bindings_ because they are updated by the module that exported the binding, but cannot be re-assigned by the importing module.

In order to use the `import` declaration in a source file, the file must be interpreted by the runtime as a [module](/en-US/docs/Web/JavaScript/Guide/Modules). In HTML, this is done by adding `type="module"` to the {{HTMLElement("script")}} tag. Modules are automatically interpreted in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode).

There is also a function-like dynamic [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import), which does not require scripts of `type="module"`.

## Syntax

```js-nolint
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { default as alias } from "module-name";
import { export1, export2 } from "module-name";
import { export1, export2 as alias2, /* … */ } from "module-name";
import { "string name" as alias } from "module-name";
import defaultExport, { export1, /* … */ } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

- `defaultExport`
  - : Name that will refer to the default export from the module. Must be a valid JavaScript identifier.
- `module-name`
  - : The module to import from. Only single quoted and double quoted string literals are allowed. The evaluation of the specifier is host-specified. Most hosts align with browsers and resolve the specifiers as URLs relative to the current module URL (see [`import.meta.url`](/en-US/docs/Web/JavaScript/Reference/Operators/import.meta)). Node, bundlers, and other non-browser environments often define their own features on top of this, so you should find documentation for them to understand the exact rules. The [module specifier resolution](#module_specifier_resolution) section also has more information.
- `name`
  - : Name of the module object that will be used as a kind of namespace when referring to the imports. Must be a valid JavaScript identifier.
- `exportN`
  - : Name of the exports to be imported. The name can be either an identifier or a string literal, depending on what `module-name` declares to export. If it is a string literal, it must be aliased to a valid identifier.
- `aliasN`
  - : Names that will refer to the named imports. Must be a valid JavaScript identifier.

The `"module-name"` may be followed by a set of [import attributes](/en-US/docs/Web/JavaScript/Reference/Statements/import/with), starting with the `with` keyword.

## Description

`import` declarations can only be present in modules, and only at the top-level (i.e. not inside blocks, functions, etc.). If an `import` declaration is encountered in non-module contexts (for example, `<script>` tags without `type="module"`, `eval`, `new Function`, which all have "script" or "function body" as parsing goals), a `SyntaxError` is thrown. To load modules in non-module contexts, use the [dynamic import](/en-US/docs/Web/JavaScript/Reference/Operators/import) syntax instead.

All imported bindings cannot be in the same scope as any other declaration, including {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}}, and `import` declaration.

`import` declarations are designed to be syntactically rigid (for example, only string literal specifiers, only permitted at the top-level, all bindings must be identifiers), which allows modules to be statically analyzed and linked before getting evaluated. This is the key to making modules asynchronous by nature, powering features like [top-level await](/en-US/docs/Web/JavaScript/Guide/Modules#top_level_await).

### Forms of import declarations

There are four forms of `import` declarations:

- [Named import](#named_import): `import { export1, export2 } from "module-name";`
- [Default import](#default_import): `import defaultExport from "module-name";`
- [Namespace import](#namespace_import): `import * as name from "module-name";`
- [Side effect import](#import_a_module_for_its_side_effects_only): `import "module-name";`

Below are examples to clarify the syntax.

#### Named import

Given a value named `myExport` which has been exported from the module `my-module` either implicitly as `export * from "another.js"` or explicitly using the {{jsxref("Statements/export", "export")}} statement, this inserts `myExport` into the current scope.

```js
import { myExport } from "/modules/my-module.js";
```

You can import multiple names from the same module.

```js
import { foo, bar } from "/modules/my-module.js";
```

You can rename an export when importing it. For example, this inserts `shortName` into the current scope.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

A module may also export a member as a string literal which is not a valid identifier, in which case you must alias it in order to use it in the current module.

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> **Note:** `import { x, y } from "mod"` is not equivalent to `import defaultExport from "mod"` and then destructuring `x` and `y` from `defaultExport`. Named and default imports are distinct syntaxes in JavaScript modules.

#### Default import

Default exports need to be imported with the corresponding default import syntax. This version directly imports the default:

```js
import myDefault from "/modules/my-module.js";
```

Since the default export doesn't explicitly specify a name, you can give the identifier any name you like.

It is also possible to specify a default import with namespace imports or named imports. In such cases, the default import will have to be declared first. For instance:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding
```

or

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

Importing a name called `default` has the same effect as a default import. It is necessary to alias the name because `default` is a reserved word.

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### Namespace import

The following code inserts `myModule` into the current scope, containing all the exports from the module located at `/modules/my-module.js`.

```js
import * as myModule from "/modules/my-module.js";
```

Here, `myModule` represents a _namespace_ object which contains all exports as properties. For example, if the module imported above includes an export `doAllTheAmazingThings()`, you would call it like this:

```js
myModule.doAllTheAmazingThings();
```

`myModule` is a [sealed](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) object with [`null` prototype](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). The default export available as a key called `default`. For more information, see [module namespace object](/en-US/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object).

> [!NOTE]
> JavaScript does not have wildcard imports like `import * from "module-name"`, because of the high possibility of name conflicts.

#### Import a module for its side effects only

Import an entire module for side effects only, without importing anything. This runs
the module's global code, but doesn't actually import any values.

```js
import "/modules/my-module.js";
```

This is often used for [polyfills](/en-US/docs/Glossary/Polyfill), which mutate the global variables.

### Hoisting

Import declarations are [hoisted](/en-US/docs/Glossary/Hoisting). In this case, that means that the identifiers the imports introduce are available in the entire module scope, and their side effects are produced before the rest of the module's code runs.

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings is imported by the next line

import * as myModule from "/modules/my-module.js";
```

### Module specifier resolution

The ECMAScript specification does not define how module specifiers are resolved and leaves it to the host environment (e.g. browsers, Node.js, Deno). Browser behavior is specified by [the HTML spec](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier), and this has become the _de facto_ baseline for all environments.

There are three types of specifiers widely recognized, as implemented by the HTML spec, Node, and many others:

- _Relative specifiers_ that start with `/`, `./`, or `../`, which are resolved relative to the current module URL.
- _Absolute specifiers_ that are parsable URLs, which are resolved as-is.
- _Bare specifiers_ that are not one of the above.

The most notable caveat for relative specifiers, especially for people familiar with the [CommonJS](https://wiki.commonjs.org/wiki/CommonJS) conventions, is that browsers forbid one specifier to implicitly resolve to many potential candidates. In CommonJS, if you have `main.js` and `utils/index.js`, then all of the following will import the "default export" from `utils/index.js`:

```js
// main.js
const utils = require("./utils"); // Omit the "index.js" file name
const utils = require("./utils/index"); // Omit only the ".js" extension
const utils = require("./utils/index.js"); // The most explicit form
```

On the web, this is costly because if you write `import x from "./utils"`, the browser needs to send requests to `utils`, `utils/index.js`, `utils.js`, and potentially many other URLs until it finds an importable module. Therefore, in the HTML spec, the specifier by default can only be a URL resolved relative to the current module URL. You cannot omit the file extension or the `index.js` file name. This behavior has been inherited by Node's ESM implementation, but it is not a part of the ECMAScript specification.

Note that this does not mean that `import x from "./utils"` never works on the web. The browser still sends a request to that URL, and if the server can respond with the correct content, the import will succeed. This requires the server to implement some custom resolution logic, because usually extension-less requests are understood as requests for HTML files.

Absolute specifiers can be any kind of [URL](/en-US/docs/Web/URI) that resolve to importable source code. Most notably:

- [HTTP URLs](/en-US/docs/Web/HTTP) are always supported on the web since most scripts already have HTTP URLs. It's supported natively by Deno (which initially predicated its entire module system on HTTP URLs), but it only has experimental support in Node via [custom HTTPS loaders](https://nodejs.org/api/module.html#import-from-https).
- `file:` URLs are supported by many non-browser runtimes such as Node, since scripts there already have `file:` URLs, but they are not supported by browsers due to security reasons.
- [Data URLs](/en-US/docs/Web/URI/Reference/Schemes/data) are supported by many runtimes including browsers, Node, Deno, etc. They are useful for embedding small modules directly into the source code. Supported [MIME types](/en-US/docs/Web/HTTP/MIME_types) are those that designate importable source code, such as `text/javascript` for JavaScript, `application/json` for JSON modules, `application/wasm` for WebAssembly modules, etc. (They may still require [import attributes](/en-US/docs/Web/JavaScript/Reference/Statements/import/with).)

  ```js
  // HTTP URLs
  import x from "https://example.com/x.js";
  // Data URLs
  import x from "data:text/javascript,export default 42;";
  // Data URLs for JSON modules
  import x from 'data:application/json,{"foo":42}' with { type: "json" };
  ```

  `text/javascript` data URLs are still interpreted as modules, but they cannot use relative imports — because the `data:` URL scheme is not hierarchical. That is, `import x from "data:text/javascript,import y from './y.js';"` will throw an error because the relative specifier `'./y.js'` cannot be resolved.

- [`node:` URLs](https://nodejs.org/api/esm.html#node-imports) resolve to built-in Node.js modules. They are supported by Node and other runtimes that claim compatibility with Node, such as Bun.

Bare specifiers, popularized by CommonJS, are resolved within the `node_modules` directory. For example, if you have `import x from "foo"`, then the runtime will look for the `foo` package within any `node_modules` directory in the parent directories of the current module. This behavior can be reproduced in browsers using [import maps](/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps), which also enable you to customize resolution in other ways.

The module resolution algorithm can also be executed programmatically using the [`import.meta.resolve`](/en-US/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) function defined by the HTML spec.

## Examples

### Standard Import

In this example, we create a re-usable module that exports a function to get all primes within a given range.

```js
// getPrimes.js
/**
 * Returns a list of prime numbers that are smaller than `max`.
 */
export function getPrimes(max) {
  const isPrime = Array.from({ length: max }, () => true);
  isPrime[0] = isPrime[1] = false;
  isPrime[2] = true;
  for (let i = 2; i * i < max; i++) {
    if (isPrime[i]) {
      for (let j = i ** 2; j < max; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return [...isPrime.entries()]
    .filter(([, isPrime]) => isPrime)
    .map(([number]) => number);
}
```

```js
import { getPrimes } from "/modules/getPrimes.js";

console.log(getPrimes(10)); // [2, 3, 5, 7]
```

### Imported values can only be modified by the exporter

The identifier being imported is a _live binding_, because the module exporting it may re-assign it and the imported value would change. However, the module importing it cannot re-assign it. Still, any module holding an exported object can mutate the object, and the mutated value can be observed by all other modules importing the same value.

You can also observe the new value through the [module namespace object](/en-US/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object).

```js
// my-module.js
export let myValue = 1;
setTimeout(() => {
  myValue = 2;
}, 500);
```

```js
// main.js
import { myValue } from "/modules/my-module.js";
import * as myModule from "/modules/my-module.js";

console.log(myValue); // 1
console.log(myModule.myValue); // 1
setTimeout(() => {
  console.log(myValue); // 2; my-module has updated its value
  console.log(myModule.myValue); // 2
  myValue = 3; // TypeError: Assignment to constant variable.
  // The importing module can only read the value but can't re-assign it.
}, 1000);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/export", "export")}}
- [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/en-US/docs/Web/JavaScript/Reference/Operators/import.meta)
- [Import attributes](/en-US/docs/Web/JavaScript/Reference/Statements/import/with)
- [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/) on blogs.windows.com (2016)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) on hacks.mozilla.org (2015)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) on hacks.mozilla.org (2018)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) by Dr. Axel Rauschmayer
- [Export and Import](https://javascript.info/import-export) on javascript.info
