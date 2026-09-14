---
title: Using modules on the web
slug: Web/JavaScript/Guide/Modules/Modules_on_the_web
page-type: guide
sidebar: jssidebar
---

This page discusses how JavaScript modules are integrated with the web platform. Features discussed here are defined in the HTML spec and other web specifications, instead of by the core language, and they are generally only relevant to webpages. If you are writing modules for other environments, you may want to read the [Using modules](/en-US/docs/Web/JavaScript/Guide/Modules) and [Authoring cross-platform modules](/en-US/docs/Web/JavaScript/Guide/Modules/Cross-platform_modules) guides instead.

## Server configuration

The first difference you will encounter when migrating web pages to modules is that you can no longer view your HTML using the `file://` protocol. Serve the directory containing your HTML and modules through a [local HTTP server](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server), then open the page using the server's URL, such as `http://localhost:8000/`.

The server must send JavaScript modules with a JavaScript [MIME type](/en-US/docs/Web/HTTP/Guides/MIME_types), such as `Content-Type: text/javascript`. Check this for both `.js` and `.mjs` files. If an import fails with a MIME type error, inspect the response in your browser's network tools: a missing file or an HTML fallback page may have been returned instead of the module.

Module requests use [CORS](/en-US/docs/Web/HTTP/Guides/CORS). When importing from another origin, that server must allow your page's origin through its CORS response headers, such as {{HTTPHeader("Access-Control-Allow-Origin")}}.

## Applying modules to your HTML

First of all, you need to include `type="module"` in the [`<script>`](/en-US/docs/Web/HTML/Reference/Elements/script) element, to declare this script as a module. To import the `main.js` script, we use this:

```html
<script type="module" src="main.js"></script>
```

You can also embed the module's script directly into the HTML file by placing the JavaScript code within the body of the `<script>` element:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

You can only use `import` and `export` statements inside modules, not regular scripts. An error will be thrown if your `<script>` element doesn't have the `type="module"` attribute and attempts to import other modules. For example:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // ...
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

You should generally define all your modules in separate files. Modules declared inline in HTML can only import other modules, but anything they export will not be accessible by other modules (because they don't have a URL).

> [!NOTE]
> Modules and their dependencies can be preloaded by specifying them in [`<link>`](/en-US/docs/Web/HTML/Reference/Elements/link) elements with [`rel="modulepreload"`](/en-US/docs/Web/HTML/Reference/Attributes/rel/modulepreload).
> This can significantly reduce load time when the modules are used.

Some other differences with traditional `<script>` elements:

- Within the same environment, a module is only executed once, even if it has been imported multiple times or referenced in multiple `<script>` tags.
- There is no need to use the `defer` attribute (see [`<script>` attributes](/en-US/docs/Web/HTML/Reference/Elements/script#attributes)) when loading a module script; module scripts declared in the document without `async` are deferred automatically.

> [!NOTE]
> In some module systems, you can use a module specifier like `modules/square` that isn't a relative or absolute path, and that doesn't have a file extension.
> This kind of specifier can be used in a browser environment if you first define an [import map](/en-US/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#importing_modules_using_import_maps).

## Module specifiers on the web

Module specifiers are the strings coming after the `from` keyword:

```js
import { name } from "./module.js";
```

In the [Modules](/en-US/docs/Web/JavaScript/Guide/Modules#named_imports) guide we already said that the module specifier format is runtime-dependent. Let's look at how they work in browsers.

First of all, everything on the web is URL-based. Each module has its URL, so you can import a module by its absolute URL directly:

```js
import { name } from "https://example.com/js/modules/module.js";
```

The browser sends an HTTP request to that given URL, and if the server returns a successful response with `Content-Type: text/javascript`, then the module loading process continues.

> [!NOTE]
> There's a popular belief that "ESM requires file extensions in module specifiers". This is true and false. The JavaScript runtime does not _add_ an extension for you. If you write `import { name } from "https://example.com/modules/module";`, the browser still sends a request to the URL, without the `.js` extension. If that request succeeds with JavaScript content, the module is still loaded as usual. The only problem is that servers usually interpret extension-less requests to be requests for HTML files.

Other URL schemes that you can use as resource locations are supported too, such as [`data:`](/en-US/docs/Web/URI/Reference/Schemes/data). Read the [`import` reference](/en-US/docs/Web/JavaScript/Reference/Statements/import#module_specifier_resolution) for more information.

Always importing from absolute URLs has similar problems as using absolute URLs for link targets: they are long, they don't work if you move your site to another domain, and they don't work if you move your entire JavaScript asset path. The module specifier can also be a relative URL, similar to the [`href`](/en-US/docs/Web/HTML/Reference/Elements/a#href) attribute of {{HTMLElement("a")}} elements. The only difference is that all relative URLs must start with one of `/`, `./`, or `../`—i.e., you cannot use "bare" relative URLs like `modules/module.js`, but must write `./modules/module.js`. This is because "bare" URLs have special meanings in Node.js (they are resolved using the `node_modules` directory). To resolve bare URLs on the web, use [import maps](#importing_modules_using_import_maps).

This URL is resolved relative to the URL of the current module, not the URL of the HTML document. For example, within a module at `https://example.com/js/main.js`, to import `https://example.com/js/modules/module.js`, write:

```js
import { name } from "./modules/module.js";
```

## Importing modules using import maps

A browser can import a module using a module specifier that is either an absolute URL, or a relative URL that is resolved using the importing module's base URL. For an inline module, this is the document's base URL:

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

[Import maps](/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap) allow developers to instead specify almost any text they want in the module specifier when importing a module; the map provides a corresponding value that will replace the text when the module URL is resolved.

For example, the `imports` key in the import map below defines a "module specifier map" JSON object where the property names can be used as module specifiers, and the corresponding values will be substituted when the browser resolves the module URL.
The values must be absolute or relative URLs.
Relative URLs are resolved to absolute URL addresses using the [base URL](/en-US/docs/Web/HTML/Reference/Elements/base) of the document containing the import map.

```html
<script type="importmap">
  {
    "imports": {
      "shapes": "./shapes/square.js",
      "shapes/square": "./modules/shapes/square.js",
      "https://example.com/shapes/square.js": "./shapes/square.js",
      "https://example.com/shapes/": "/shapes/square/",
      "../shapes/square": "./shapes/square.js"
    }
  }
</script>
```

The import map is defined using a [JSON object](/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap#import_map_json_representation) inside a `<script>` element with the `type` attribute set to [`importmap`](/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap).
Note that an import map only applies to the document — the specification does not cover how to apply an import map in a worker or worklet context. <!-- https://github.com/WICG/import-maps/issues/2 -->

With this map you can now use the property names above as module specifiers.
If there is no trailing forward slash on the module specifier key then the whole module specifier key is matched and substituted.
For example, below we match bare module names, and remap a URL to another path.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

If the module specifier has a trailing forward slash then the value must have one as well, and the key is matched as a "path prefix".
This allows remapping of whole classes of URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

It is possible for multiple keys in an import map to be valid matches for a module specifier.
For example, a module specifier of `shapes/circle/` could match the module specifier keys `shapes/` and `shapes/circle/`.
In this case the browser will select the most specific (longest) matching module specifier key.

Import maps allow modules to be imported using bare module names (as in Node.js), and can also simulate importing modules from packages, both with and without file extensions.
While not shown above, they also allow particular versions of a library to be imported, based on the path of the script that is importing the module.
Generally they let developers write more ergonomic import code, and make it easier to manage the different versions and dependencies of modules used by a site.
This can reduce the effort required to use the same JavaScript libraries in both browser and server.

The following sections expand on the various features outlined above.

### Feature detection

You can check support for import maps using the [`HTMLScriptElement.supports()`](/en-US/docs/Web/API/HTMLScriptElement/supports_static) static method (which is itself broadly supported):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Importing modules as bare names

In some JavaScript environments, such as Node.js, you can use bare names for the module specifier.
This works because the environment can resolve module names to a standard location in the file system.
For example, you might use the following syntax to import the "square" module.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

To use bare names on a browser you need an import map, which provides the information needed by the browser to resolve module specifiers to URLs (JavaScript will throw a `TypeError` if it attempts to import a module specifier that can't be resolved to a module location).

Below you can see a map that defines a `square` module specifier key, which in this case maps to a relative address value.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

With this map we can now use a bare name when we import the module:

```js
import { name as squareName, draw } from "square";
```

### Remapping module paths

Module specifier map entries, where both the specifier key and its associated value have a trailing forward slash (`/`), can be used as a path-prefix.
This allows the remapping of a whole set of import URLs from one location to another.
It can also be used to emulate working with "packages and modules", such as you might see in the Node ecosystem.

> [!NOTE]
> The trailing `/` indicates that the module specifier key can be substituted as _part_ of a module specifier.
> If this is not present, the browser will only match (and substitute) the whole module specifier key.

#### Packages of modules

The following JSON import map definition maps `lodash` as a bare name, and the module specifier prefix `lodash/` to the path `/node_modules/lodash-es/` (resolved to the document base URL):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

With this mapping you can import both the whole "package", using the bare name, and modules within it (using the path mapping):

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

It is possible to import `fp` above without the `.js` file extension, but you would need to create a bare module specifier key for that file, such as `lodash/fp`, rather than using the path.
This may be reasonable for just one module, but scales poorly if you wish to import many modules.

#### General URL remapping

A module specifier key doesn't have to be a path — it can also be an absolute URL (or a URL-like relative path like `./`, `../`, `/`).
This may be useful if you want to remap a module that has absolute paths to a resource with your own local resources.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Scoped modules for version management

Ecosystems like Node use package managers such as npm to manage modules and their dependencies.
The package manager ensures that each module is separated from other modules and their dependencies.
As a result, while a complex application might include the same module multiple times with several different versions in different parts of the module graph, users do not need to think about this complexity.

> [!NOTE]
> You can also achieve version management using relative paths, but this is subpar because, among other things, this forces a particular structure on your project, and prevents you from using bare module names.

Import maps similarly allow you to have multiple versions of dependencies in your application and refer to them using the same module specifier.
You implement this with the `scopes` key, which allows you to provide module specifier maps that will be used depending on the path of the script performing the import.
The example below demonstrates this.

```json
{
  "imports": {
    "cool-module": "/node_modules/cool-module/index.js"
  },
  "scopes": {
    "/node_modules/dependency/": {
      "cool-module": "/node_modules/some/other/location/cool-module/index.js"
    }
  }
}
```

With this mapping, if a script with a URL that contains `/node_modules/dependency/` imports `cool-module`, the version in `/node_modules/some/other/location/cool-module/index.js` will be used.
The map in `imports` is used as a fallback if there is no matching scope in the scoped map, or the matching scopes don't contain a matching specifier. For example, if `cool-module` is imported from a script with a non-matching scope path, then the module specifier map in `imports` will be used instead, mapping to the version in `/node_modules/cool-module/index.js`.

Note that the path used to select a scope does not affect how the address is resolved.
The value in the mapped path does not have to match the scopes path, and relative paths are still resolved to the base URL of the script that contains the import map.

Just as for module specifier maps, you can have many scope keys, and these may contain overlapping paths.
If multiple scopes match the referrer URL, then the most specific scope path is checked first (the longest scope key) for a matching specifier.
The browsers will fall back to the next most specific matching scoped path if there is no matching specifier, and so on.
If there is no matching specifier in any of the matching scopes, the browser checks for a match in the module specifier map in the `imports` key.

### Improve caching by mapping away hashed filenames

Script files used by websites often have hashed filenames to simplify caching.
The downside of this approach is that if a module changes, any modules that import it using its hashed filename will also need to be updated/regenerated.
This potentially results in a cascade of updates, which is wasteful of network resources.

Import maps provide a convenient solution to this problem.
Rather than depending on specific hashed filenames, applications and scripts instead depend on an un-hashed version of the module name (address).
An import map like the one below then provides a mapping to the actual script file.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

If `dependency_script` changes, then its hash contained in the file name changes as well. In this case, we only need to update the import map to reflect the changed name of the module.
We don't have to update the source of any JavaScript code that depends on it, because the specifier in the import statement does not change.

## Loading non-JavaScript resources

The [Modules](/en-US/docs/Web/JavaScript/Guide/Modules#importing_json_modules) guide already introduces the [import attributes](/en-US/docs/Web/JavaScript/Reference/Statements/import/with) syntax, which allows you to import non-JavaScript resources, but the only resource type specified by the core language is `type: "json"`.

```js
import colors from "./colors.json" with { type: "json" };
```

On the web, there are additionally `type: "css"` and `type: "text"`, which imports CSS and text files as {{domxref("CSSStyleSheet")}} objects or strings.

```js
import styles from "./styles.css" with { type: "css" };
import text from "./text.txt" with { type: "text" };

document.adoptedStyleSheets = [styles];
document.body.textContent = text;
```

While the core language spec does not say much about the `type` attribute in general (other than how `type: "json"` must result in a JSON module), the HTML spec requires browsers to implement strict module type checking for security reasons. If you specify `type: "json"` or `type: "css"`, the result must be served with the corresponding `Content-Type` (such as `application/json` or `text/css`). If you don't specify any type, the result also must be served as JavaScript or WebAssembly (`text/javascript` or `application/wasm`).

In the example above with `type: "css"`, if this file turns out to be JavaScript (it is served with a `Content-Type` of `text/javascript`), the import will fail. This makes sure that you don't accidentally execute code where you don't intend to. Read the [import attribute](/en-US/docs/Web/JavaScript/Reference/Statements/import/with) reference for more information.

Other environments, including Node.js and Deno, often mimic web semantics, so they also require strict type matching.

On the web, the `type` attribute also changes the request's [destination](/en-US/docs/Web/HTTP/Reference/Headers/Sec-Fetch-Dest), so even with the same string specifier, you may end up with different module content.

```js
import code from "./module";
// This sends a request with Sec-Fetch-Dest: script
// The server may respond with JavaScript: `export default 1;`

import data from "./module" with { type: "json" };
// This sends a request with Sec-Fetch-Dest: json
// The server may respond with JSON: `{ "value": 1 }`

import styles from "./module" with { type: "css" };
// This sends a request with Sec-Fetch-Dest: style
// The server may respond with CSS: `.value { color: green; }`

import text from "./module" with { type: "text" };
// This sends a request with Sec-Fetch-Dest: text
// The server may respond with text: `Hello world!`
```

## The import.meta object

The [Modules](/en-US/docs/Web/JavaScript/Guide/Modules#module_metadata) guide also introduced the [`import.meta`](/en-US/docs/Web/JavaScript/Reference/Operators/import.meta) object and mentioned that _all_ of its properties are host-defined.

Use [`import.meta.url`](/en-US/docs/Web/JavaScript/Reference/Operators/import.meta) with the {{domxref("URL/URL", "URL()")}} constructor when a resource is located relative to your module:

```js
// modules/set-user.js
const apiURL = new URL("../api/set-user", import.meta.url);

export async function setUser(name) {
  const response = await fetch(apiURL, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  if (!response.ok) {
    throw new Error(`Unable to set user: ${response.status}`);
  }
}
```

In a window, a relative URL passed directly to `fetch()`, such as `fetch("../api/set-user")`, is resolved against the document's base URL. It is not resolved relative to the JavaScript module containing the call. Constructing the URL explicitly makes the resource location independent of the page that imports the module.

To resolve a module specifier using the host's module resolution rules, use [`import.meta.resolve()`](/en-US/docs/Web/JavaScript/Reference/Operators/import.meta/resolve). For example, in a browser with an import map that defines `"shapes"`, `import.meta.resolve("shapes")` returns its resolved URL. Unlike `import()`, this resolves the specifier without loading or evaluating the module.

## See also

- [HTML `<script>` element](/en-US/docs/Web/HTML/Reference/Elements/script)
- [`<script type="importmap">`](/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap)
- [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules)
