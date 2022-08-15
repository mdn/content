---
title: import assertions
slug: Web/JavaScript/Reference/Statements/import/assert
tags:
  - JavaScript
  - Modules
  - Reference
  - Statement
  - import
browser-compat: javascript.statements.import.import_assertions
---

{{jsSidebar("Statements")}}

The **import assertion** feature of [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) statements and [`export...from`](/en-US/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating) statements tell the host to do after-the-fact checks about a module's metadata, making the host optionally throw if the assertion fails.

## Syntax

```js
import { exports } from "module-name";
import { exports } from "module-name" assert { key: "data" };
import { exports } from "module-name" assert { key: "data", key2: "data2" };
import { exports } from "module-name" assert { key: "data", key2: "data2", /* …, */ keyN: "dataN" };

export { exports } from "module-name";
export { exports } from "module-name" assert { key: "data" };
export { exports } from "module-name" assert { key: "data", key2: "data2" };
export { exports } from "module-name" assert { key: "data", key2: "data2", /* …, */ keyN: "dataN" };
```

> **Note:** Assertions can be attached to any kind of `import`/`export from` statement, including default import, namespace import, etc.

- `keyN`
  - : One assertion key. Can be an identifier or a string literal — similar to what you can use in an [object literal](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer), except number literals and computed properties.
- `"dataN"`
  - : One assertion value. Must be a string literal.

## Description

Import assertions allow hosts to do addition checks about the module that has just been loaded. The primary motivation was JSON modules. Consider the following statement:

```js
import data from "https://exmaple.com/data.json";
```

On the web, each import statement would result in a HTTP request. The response is then prepared into a JavaScript value and made available to the program by the host (i.e. the browser). For example, the response may look like this:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"John"}
```

JSON modules are identified by the `application/json` [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types). When the host sees this MIME type instead of `text/javascript` (for JavaScript source), it would parse the result as JSON instead of executing it as code — and the former is generally a safer thing to do. However, there's no in-code metadata that signals the author's intent that a particular module should always be interpreted as JSON. Very importantly, the extension (the last part of the URL) cannot be used to identify a file's type — only the MIME type can. If the `https://exmaple.com/data.json` URL actually returns a JS file with `text/javascript` MIME, the `import` would unintentionally execute external code, causing a security threat.

Import assertions fix this problem by allowing the author to explicitly specify how a module should be validated. For example, the import statement above would actually fail in a browser:

```
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

Instead, you must provide an assertion. To validate the module's type (via MIME type), you use the assertion key called `type`. To validate that the module is a JSON module, the value is `"json"`.

> **Note:** The actual assertion value does not correspond to the MIME type. It's separately specified by the WHATWG specification.

Therefore, the code above should be re-written as:

```js
import data from "https://exmaple.com/data.json" assert { type: "json" };
```

This does NOT change how the module is interpreted. The host already knows to parse the module as JSON given the MIME type. It only uses the assertion to do _after-the-fact_ checking that the `data.json` module is, in fact, a JSON module. For example, if the response header changes to `Content-Type: text/javascript` instead, the program will fail:

```
Failed to load module script: Expected a JSON module script but the server responded with a MIME type of "text/javascript". Strict MIME type checking is enforced for module scripts per HTML spec.
```

The assertion syntax is designed to be extensible — although only `type` is known to be supported, you can put arbitrary keys in the assertion bag.

```js
// Likely does nothing...
import data from "https://exmaple.com/module.js" assert { this: "looks good" };
```

This likely does nothing unless your host reads that key. The assertion:

- Does not affect the module's behavior. What the importer has asserted about the module is not available to the module being imported. (For example, it's not part of [`import.meta`](/en-US/docs/Web/JavaScript/Reference/Operators/import.meta).) Only the host can read and validate the assertion.
- Does not affect how the host interprets the module. For example, the host will not decide to parse a module as JSON if it has already decided that the module contains JavaScript — via MIME type in browsers or extensions in Node.js — even when there's a `type: "json"` assertion. It would simply fail the import.
- Is not used by the host to cache the module. If a module with the same specifier is imported twice twice, once with the assertion and once without, and neither import fails, then they would result in the exact same module without re-executing it.

The specification explicitly calls out `type: "json"` to be supported. If a module is asserted to be `type: "json"` and the host does not fail this import, then it must be parsed as JSON. However, there's no behavior requirement otherwise: for imports without `type: "json"` assertions, the host may still parse it as JSON if security is not an issue in this environment.

## Examples

### Importing JSON modules with an assertion

In `data.json`:

```json
{
  "name": "John"
}
```

In `index.html`:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <script type="module">
      import data from "./data.json" assert { type: "json" };

      const p = document.createElement("p");
      p.textContent = `name: ${data.name}`;
      document.body.appendChild(p);
    </script>
  </head>
  <body></body>
</html>
```

Start a local HTTP server (see [troubleshooting](/en-US/docs/Web/JavaScript/Guide/Modules#troubleshooting)) and go to the `index.html` page. You should see `John` on the page.

> **Note:** JSON modules only have one default export. You cannot do named imports from them (e.g. `import { name } from "data.json"`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [`export`](/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [Dynamic imports](/en-US/docs/Web/JavaScript/Reference/Operators/import)
- [Import assertions proposal](https://github.com/tc39/proposal-import-assertions)
- [JSON modules proposal](https://github.com/tc39/proposal-json-modules)
