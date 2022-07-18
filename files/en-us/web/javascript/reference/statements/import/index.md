---
title: import
slug: Web/JavaScript/Reference/Statements/import
tags:
  - ECMAScript 2015
  - JavaScript
  - Language feature
  - Modules
  - Reference
  - Statement
  - dynamic import
  - import
browser-compat: javascript.statements.import
---
{{jsSidebar("Statements")}}

The static **`import`** declaration is used to import read-only live bindings which are [exported](/en-US/docs/Web/JavaScript/Reference/Statements/export) by another module.

Imported modules are in {{JSxRef("Strict_mode","strict mode")}}
whether you declare them as such or not. The `import` statement cannot be
used in embedded scripts unless such script has a `type="module"`. Bindings
imported are called live bindings because they are updated by the module that exported
the binding.

There is also a function-like dynamic [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import), which does not require scripts of `type="module"`.

Backward compatibility can be ensured using attribute `nomodule` on the
{{HTMLElement("script")}} tag.

## Syntax

```js
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { default as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { export1 , export2 as alias2 , [...] } from "module-name";
import { "string name" as alias } from "module-name";
import defaultExport, { export1 [ , [...] ] } from "module-name";
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

The `name` parameter is the name of the "module object" which will be used
as a kind of namespace to refer to the exports. The `export` parameters
specify individual named exports, while the `import * as name` syntax imports
all of them. Below are examples to clarify the syntax.

`import` declarations are only permitted at the top-level of modules, and can only be present in module files. If an `import` declaration is encountered in non-module contexts (for example, script files, `eval`, `new Function`, which all have "script" or "function" as parsing goals), a `SyntaxError` is thrown. To load modules in non-module contexts, use the [dynamic import](/en-US/docs/Web/JavaScript/Reference/Operators/import) syntax instead.

`import` declarations are designed to be syntactically rigid (for example, only string literal specifiers, only permitted at the top-level, as all bindings must be identifiers), which allows modules to be statically analyzed and synchronously linked before getting evaluated. This is the key to making modules asynchronous by nature, powering features like [top-level await](/en-US/docs/Web/JavaScript/Guide/Modules#top_level_await).

### Import an entire module's contents

This inserts `myModule` into the current scope, containing all the exports
from the module in the file located in `/modules/my-module.js`.

```js
import * as myModule from '/modules/my-module.js';
```

Here, accessing the exports means using the module name ("myModule" in this case) as a
namespace. For example, if the module imported above includes an export
`doAllTheAmazingThings()`, you would call it like this:

```js
myModule.doAllTheAmazingThings();
```

`myModule` is an object with `null` prototype, and the default export will be available as a key called `default`.

### Import a single export from a module

Given an object or value named `myExport` which has been exported from the
module `my-module` either implicitly (because the entire module is exported,
for example using `export * from 'another.js'`) or explicitly (using the
{{JSxRef("Statements/export", "export")}} statement), this inserts `myExport`
into the current scope.

```js
import {myExport} from '/modules/my-module.js';
```

### Import multiple exports from module

This inserts both `foo` and `bar` into the current scope.

```js
import {foo, bar} from '/modules/my-module.js';
```

### Import an export with a more convenient alias

You can rename an export when importing it. For example, this inserts
`shortName` into the current scope.

```js
import {reallyReallyLongModuleExportName as shortName}
  from '/modules/my-module.js';
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

### Rename multiple exports during import

Import multiple exports from a module with convenient aliases.

```js
import {
  reallyReallyLongModuleExportName as shortName,
  anotherLongModuleName as short
} from '/modules/my-module.js';
```

### Import a module for its side effects only

Import an entire module for side effects only, without importing anything. This runs
the module's global code, but doesn't actually import any values.

```js
import '/modules/my-module.js';
```

If your project uses packages that export ESM, you can also import them for side
effects only. This will run the code in the package entry point file (and any files it
imports) only.

### Importing defaults

It is possible to have a default {{JSxRef("Statements/export", "export")}} (whether it
is an object, a function, a class, etc.). The `import` statement may then be
used to import such defaults.

The simplest version directly imports the default:

```js
import myDefault from '/modules/my-module.js';
```

It is also possible to use the default syntax with the ones seen above (namespace
imports or named imports). In such cases, the default import will have to be declared
first. For instance:

```js
import myDefault, * as myModule from '/modules/my-module.js';
// myModule used as a namespace
```

or

```js
import myDefault, {foo, bar} from '/modules/my-module.js';
// specific, named imports
```

Importing a name called `default` has the same effect as a default import. It is necessary to alias the name because `default` is a reserved word.

```js
import { default as myDefault } from '/modules/my-module.js';
```

## Examples

### Standard Import

The code below shows how to import from a secondary module to assist in processing an
AJAX JSON request.

#### The module: file.js

```js
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open('GET', url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, data => callback(JSON.parse(data)));
}
```

#### The main program: main.js

```js
import { getUsefulContents } from '/modules/file.js';

getUsefulContents('http://www.example.com',
    data => { doSomethingUseful(data); });
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
