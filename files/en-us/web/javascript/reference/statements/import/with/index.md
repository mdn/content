---
title: Import attributes
slug: Web/JavaScript/Reference/Statements/import/with
page-type: javascript-language-feature
browser-compat: javascript.statements.import.import_attributes
---

{{jsSidebar("Statements")}}

> [!NOTE]
> A previous version of this proposal used the `assert` keyword instead of `with`. The assertion feature is now non-standard. Check the [browser compatibility table](#browser_compatibility) for details.

The **import attributes** feature instructs the runtime about how a module should be loaded, including the behavior of module resolution, fetching, parsing, and evaluation. It's supported in [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) declarations, [`export...from`](/en-US/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating) declarations, and dynamic [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import).

## Syntax

Attributes can be attached to any kind of `import`/`export from` statement, including default import, namespace import, etc. They follow the module specifier string and are prefixed by the `with` keyword.

```js-nolint
import { names } from "module-name" with {};
import { names } from "module-name" with { key: "data" };
import { names } from "module-name" with { key: "data", key2: "data2" };
import { names } from "module-name" with { key: "data", key2: "data2", /* …, */ keyN: "dataN" };

export { names } from "module-name" with {};
export { names } from "module-name" with { key: "data" };
export { names } from "module-name" with { key: "data", key2: "data2" };
export { names } from "module-name" with { key: "data", key2: "data2", /* …, */ keyN: "dataN" };
```

### Parameters

- `keyN`
  - : An attribute key. Can be an identifier or a string literal. All keys must be unique and must be known to the runtime.
- `"dataN"`
  - : An attribute value. Must be a string literal.

## Description

Import attributes tell the runtime how a particular module should be loaded.

The primary use case is to load non-JS modules, such as JSON modules and CSS modules. Consider the following statement:

```js
import data from "https://example.com/data.json";
```

On the web, each import statement results in a HTTP request. The response is then prepared into a JavaScript value and made available to the program by the runtime. For example, the response may look like this:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"John"}
```

Modules are identified and parsed only according to their served [MIME type](/en-US/docs/Web/HTTP/MIME_types) — the file extension in the URL cannot be used to identify a file's type. In this case, the MIME type is `application/json`, which tells the browser that the file is JSON and must be parsed as JSON. If, for some reason (e.g. the server is hijacked or bogus), the MIME type in the server response is set to `text/javascript` (for JavaScript source), then the file would be parsed and executed as code. If the "JSON" file actually contains malicious code, the `import` declaration would unintentionally execute external code, posing a serious security threat.

Import attributes fix this problem by allowing the author to explicitly specify how a module should be validated. For example, the import statement above, which lacks an attribute, would actually fail:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

Instead, you must provide an attribute to tell the runtime that this file must contain JSON. To validate the module's type (via MIME type), you use the attribute key called `type`. To validate that the module is a JSON module, the value is `"json"`.

> [!NOTE]
> The actual `type` attribute value does not correspond directly to the MIME type. It's separately specified by the [HTML specification](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed).

Therefore, the code above should be re-written as:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

The `type` attribute changes how the module is fetched (the browser sends the request with `{{HTTPHeader("Accept")}}: application/json` header), but does _not_ change how the module is parsed or evaluated. The runtime already knows to parse the module as JSON given the response MIME type. It only uses the attribute to do _after-the-fact_ checking that the `data.json` module is, in fact, a JSON module. For example, if the response header changes to `Content-Type: text/javascript` instead, the program will fail with a similar error as above.

The specification explicitly calls out `type: "json"` to be supported — if a module is asserted to be `type: "json"` and the runtime does not fail this import, then it must be parsed as JSON. However, there's no behavior requirement otherwise: for imports without a `type: "json"` attribute, the runtime may still parse it as JSON if security is not an issue in this environment. Browsers, on the other hand, implicitly assume that the module is JavaScript, and fail if the module is not JavaScript (for example, JSON). This ensures that module types are always strictly validated and prevents any security risks. In reality, non-browser runtimes such as Node and Deno align with browser semantics and enforce `type` for JSON modules.

The `type` attribute also supports other module types. For example, the HTML spec also defines the `css` type, which imports a {{domxref("CSSStyleSheet")}} object:

```js
import styles from "https://example.com/styles.css" with { type: "css" };
```

The attributes syntax is designed to be extensible — although only `type` is specified by the language, the runtime can read and process other attributes. An attribute can change the runtime's behavior at every stage of the module loading process:

- Resolution: the attribute is part of the module specifier (the string in the `from` clause). Therefore, given the same string path, different attributes may lead to entirely different modules being loaded. For example, [TypeScript supports the `resolution-mode` attribute](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with { "resolution-mode": "require" };
  ```

- Fetching: for example, CSS modules are fetched with the [`destination`](/en-US/docs/Web/API/Request/destination) set to `"style"`, and JSON modules are fetched with `destination: "json"`. This means given the same destination URL, the server may still return different content.
- Parsing and evaluation: the runtime may use the attribute to determine how to parse and evaluate the module.

However, you cannot use unknown attributes — the runtime throws an error if it encounters an unknown attribute.

## Examples

### Importing JSON modules with the type attribute

In `data.json`:

```json
{
  "name": "John"
}
```

In `index.html`:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <script type="module">
      import data from "./data.json" with { type: "json" };
      const p = document.createElement("p");
      p.textContent = `name: ${data.name}`;
      document.body.appendChild(p);
    </script>
  </head>
  <body></body>
</html>
```

Start a local HTTP server (see [troubleshooting](/en-US/docs/Web/JavaScript/Guide/Modules#troubleshooting)) and go to the `index.html` page. You should see `John` on the page.

> [!NOTE]
> JSON modules only have one default export. You cannot do named imports from them (like `import { name } from "data.json"`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [`export`](/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import)
- [Import attributes proposal](https://github.com/tc39/proposal-import-attributes)
- [JSON modules proposal](https://github.com/tc39/proposal-json-modules)
