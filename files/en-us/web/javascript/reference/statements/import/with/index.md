---
title: Import attributes
slug: Web/JavaScript/Reference/Statements/import/with
page-type: javascript-language-feature
browser-compat: javascript.statements.import.import_attributes
sidebar: jssidebar
---

> [!NOTE]
> A previous version of this proposal used the `assert` keyword instead of `with`. The assertion feature is now non-standard. Check the [browser compatibility table](#browser_compatibility) for details.

The **import attributes** feature instructs the runtime about how a module should be loaded, including the behavior of module resolution, fetching, parsing, and evaluation. It's supported in [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) declarations, [`export...from`](/en-US/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating) declarations, and dynamic [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import).

Attributes can be attached to any kind of `import`/`export from` statement, including default import, namespace import, etc. They follow the module specifier string and start with the `with` keyword. When used with `import()`, the attributes are specified in the `options` parameter as the `with` property.

## Syntax

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

### Exceptions

- {{jsxref("SyntaxError")}}
  - : An unsupported `key` was specified in a _static import_.

- {{jsxref("TypeError")}}
  - : An unsupported `key` was specified in a _dynamic import_.
Note that the behaviour for unsupported keys is undefined, but might result in an exception on some browsers.

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
{"name":"Maria"}
```

Modules are identified and parsed only according to their served [media type (MIME type)](/en-US/docs/Web/HTTP/Guides/MIME_types) — the file extension in the URL cannot be used to identify a file's type. In this case, the MIME type is `application/json`, which tells the browser that the file is JSON and must be parsed as JSON. If, for some reason (e.g., the server is hijacked or bogus), the media type in the server response is set to `text/javascript` (for JavaScript source), then the file would be parsed and executed as code. If the "JSON" file actually contains malicious code, the `import` declaration would unintentionally execute external code, posing a serious security threat.

Import attributes fix this problem by allowing the author to explicitly specify how a module should be validated.
In particular, the `type` attribute allows you to validate that the file is served with a particular media type, and fails the import if a different media type is used.

For example, the code above can be written to specify that the expected type is `"json"` and the import would fail if it was served with the `text/javascript` (or any media type other than `application/json`):

```js
import data from "https://example.com/data.json" with { type: "json" };
```

The `type` attribute allows you to specify that modules are served as JSON or CSS (and implicitly as JavaScript).

Other attributes may also be supported, and [can affect the behaviour of different parts of the loading process](#intended_semantics_for_import_attributes).
A syntax error is thrown if an unknown attribute is used.

### Standard attributes

The available attributes depend on the language and runtime environment.
The ECMAScript standard [defines the `type` attribute with the value of `"json"`](https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-HostLoadImportedModule).

The HTML specification also [defines the `type` attribute with values `"json"` and `"css"`](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) — these are the attributes that are supported in browser environments.

#### JSON Modules (`{ type: "json" }`)

The `json` type indicates that the imported file must contain JSON.
You can load JSON from a file into the `data` object using the following code:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

If the file is served with any other media type than `"application/json"`, the import will fail.

The `type` attribute changes how the module is fetched (the browser sends the request with `{{HTTPHeader("Accept")}}: application/json` header), but does _not_ change how the module is parsed or evaluated. The runtime already knows to parse the module as JSON given the response MIME type. It only uses the attribute to do _after-the-fact_ checking that the `data.json` module is, in fact, a JSON module. For example, if the response header changes to `Content-Type: text/javascript` instead, the program will fail with a similar error as above.

The specification explicitly calls out `type: "json"` to be supported — if a module is asserted to be `type: "json"` and the runtime does not fail this import, then it must be parsed as JSON.

However, there's no behavior requirement otherwise: for imports without a `type: "json"` attribute, the runtime may still parse it as JSON if security is not an issue in this environment.

Browsers, on the other hand, implicitly assume that the module is JavaScript if the `type` is not specified, and fail if the module is not JavaScript (for example, JSON). This ensures that module types are always strictly validated and prevents any security risks.
Non-browser runtimes such as Node and Deno align with browser semantics and enforce `type` for JSON modules.

In other words, if you omit the `type` and attempt to import a file as `"application/json"` you will usually get an error like the following:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

#### CSS Modules (`{ type: "css" }`)

The HTML spec defines the `css` type, which imports a stylesheet into a script as an {{domxref("CSSStyleSheet")}} object.

The code below shows how you might import a style and add it to your document.
The import will throw an exception if `example_styles.css` is served with any media type other than `"text/css"`.

```js
import exampleStyles from "https://example.com/example_styles.css" with { type: "css" };

document.adoptedStyleSheets.push(exampleStyles);
```

Note that importing CSS modules into workers is usually not supported, because the CSSOM specification only exposes `CSSStyleSheet` in the window context.

### Intended semantics for import attributes

An attribute can change the runtime's behavior at every stage of the module loading process:

- Resolution: the attribute is part of the module specifier (the string in the `from` clause). Therefore, given the same string path, different attributes may lead to entirely different modules being loaded. For example, [TypeScript supports the `resolution-mode` attribute](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with {
    "resolution-mode": "require",
  };
  ```

- Fetching: for example, CSS modules are fetched with the [`destination`](/en-US/docs/Web/API/Request/destination) set to `"style"`, and JSON modules are fetched with `destination: "json"`. This means given the same destination URL, the server may still return different content.
- Parsing and evaluation: the runtime may use the attribute to determine how to parse and evaluate the module.

## Examples

### Importing JSON modules with the type attribute

In `data.json`:

```json
{
  "name": "Shilpa"
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

Start a local HTTP server (see [troubleshooting](/en-US/docs/Web/JavaScript/Guide/Modules#troubleshooting)) and go to the `index.html` page. You should see `Shilpa` on the page.

> [!NOTE]
> JSON modules only have one default export. You cannot do named imports from them (like `import { name } from "data.json"`).

### Using import attributes with dynamic import

Import attributes are also accepted as the second parameter of the `import()` syntax.

```js
const data = await import("./data.json", {
  with: { type: "json" },
});
```

Note that, like static imports, dynamic imports are cached for the lifetime of the environment (e.g., a page or worker). If you expect this data to change (such as the latest news or a user's credits), use the [Fetch API](/en-US/docs/Web/API/Fetch_API) instead.

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
