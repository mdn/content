---
title: import.meta
slug: Web/JavaScript/Reference/Operators/import.meta
tags:
  - JavaScript
  - Language feature
  - Modules
  - Reference
  - Operator
  - import
  - import.meta
browser-compat: javascript.operators.import_meta
---
{{JSSidebar("Operators")}}

The **`import.meta`** object exposes context-specific metadata
to a JavaScript module. It contains information about the module, like the module's URL.

## Syntax

```js
import.meta
```

## Description

The syntax consists of the keyword {{JSxRef("Statements/import","import")}}, a dot, and
the identifier `meta`. Normally the left-hand side of the dot is the object
on which property access is performed, but here `import` is not really an
object.

The `import.meta` object is created by the ECMAScript implementation, with a
[`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) prototype. The object is extensible, and its properties are writable,
configurable, and enumerable.

## Examples

### Using import.meta

Given a module `my-module.js`

```html
<script type="module" src="my-module.js"></script>
```

you can access meta information about the module using the `import.meta`
object.

```js
console.log(import.meta); // { url: "file:///home/user/my-module.js" }
```

It returns an object with a `url` property indicating the base URL of the
module. This will either be the URL from which the script was obtained, for external
scripts, or the document base URL of the containing document, for inline scripts.

Note that this will include query parameters and/or hash (i.e., following the
`?` or `#`).

For example, with the following HTML:

```html
<script type="module">
import './index.mjs?someURLInfo=5';
</script>
```

..the following JavaScript file will log the `someURLInfo` parameter:

```js
// index.mjs
new URL(import.meta.url).searchParams.get('someURLInfo'); // 5
```

The same applies when a file imports another:

```js
// index.mjs
import './index2.mjs?someURLInfo=5';

// index2.mjs
new URL(import.meta.url).searchParams.get('someURLInfo'); // 5
```

Note that while Node.js will pass on query parameters (or the hash) as in the latter
example, as of Node 14.1.0, a URL with query parameters will err when loading in the
form `node --experimental-modules index.mjs?someURLInfo=5` (it is treated as
a file rather than a URL in this context).

Such file-specific argument passing may be complementary to that used in the
application-wide `location.href` (with query strings or hash added after the
HTML file path) (or on Node.js, through `process.argv`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{JSxRef("Statements/import", "import")}}
- {{JSxRef("Statements/export", "export")}}
