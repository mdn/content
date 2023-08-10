---
title: import
slug: Web/JavaScript/Reference/Statements/import
page-type: javascript-statement
browser-compat: javascript.statements.import
---

{{jsSidebar("Statements")}}

The static **`import`** declaration is used to import read-only live {{glossary("binding", "bindings")}} which are [exported](/en-US/docs/Web/JavaScript/Reference/Statements/export) by another module. The imported bindings are called _live bindings_ because they are updated by the module that exported the binding, but cannot be re-assigned by the importing module.

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
  - : The module to import from. The evaluation of the specifier is host-specified. This is often a relative or absolute URL to the `.js` file containing the module. In Node, extension-less imports often refer to packages in `node_modules`. Certain bundlers may permit importing files without extensions; check your environment. Only single quoted and double quoted Strings are allowed.
- `name`
  - : Name of the module object that will be used as a kind of namespace when referring to the imports. Must be a valid JavaScript identifier.
- `exportN`
  - : Name of the exports to be imported. The name can be either an identifier or a string literal, depending on what `module-name` declares to export. If it is a string literal, it must be aliased to a valid identifier.
- `aliasN`
  - : Names that will refer to the named imports. Must be a valid JavaScript identifier.

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

Default exports need to be imported with the corresponding default import syntax. The simplest version directly imports the default:

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

> **Note:** JavaScript does not have wildcard imports like `import * from "module-name"`, because of the high possibility of name conflicts.

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

- {{JSxRef("Statements/export", "export")}}
- [Dynamic imports](/en-US/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/en-US/docs/Web/JavaScript/Reference/Operators/import.meta)
- Limin Zhu, Brian Terlson and Microsoft Edge Team:
  [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/)
- Hacks blog post by Jason Orendorff: [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)
- Hacks blog post by Lin Clark: [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
- Axel Rauschmayer's book: ["Exploring JS: Modules"](https://exploringjs.com/es6/ch_modules.html)
- The Modern JavaScript Tutorial(javascript.info): [Export and Import](https://javascript.info/import-export)
