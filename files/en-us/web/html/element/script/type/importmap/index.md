---
title: <script type="importmap">
slug: Web/HTML/Element/script/type/importmap
page-type: html-attribute-value
browser-compat: html.elements.script.type.importmap
---

{{HTMLSidebar}}

The **`importmap`** value of the [`type`](/en-US/docs/Web/HTML/Element/script/type) attribute of the [`<script>` element](/en-US/docs/Web/HTML/Element/script) indicates that the body of the element contains an import map.

An import map is a JSON object that allows developers to control how the browser resolves module specifiers when importing [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules).
It provides a mapping between the text used as the module specifier in an [`import` statement](/en-US/docs/Web/JavaScript/Reference/Statements/import) or [`import()` operator](/en-US/docs/Web/JavaScript/Reference/Operators/import), and the corresponding value that will replace the text when resolving the specifier.
The JSON object must conform to the [Import map JSON representation format](#import_map_json_representation).

An import map is used to resolve module specifiers in static and dynamic imports, and therefore must be declared and processed before any `<script>` elements that import modules using specifiers declared in the map.
Note that the import map applies only to module specifiers in the [`import` statement](/en-US/docs/Web/JavaScript/Reference/Statements/import) or [`import()` operator](/en-US/docs/Web/JavaScript/Reference/Operators/import) for modules loaded into documents; it does not apply to the path specified in the `src` attribute of a `<script>` element or to modules loaded into workers or worklets.

For more information, see the [Importing modules using import maps](/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) section in the JavaScript modules guide.

## Syntax

```html
<script type="importmap">
  // JSON object defining import
</script>
```

The `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity`, and `referrerpolicy` attributes must not be specified.

### Exceptions

- `TypeError`
  - : The import map definition is not a JSON object, the `importmap` key is defined but its value is not a JSON object, or the `scopes` key is defined but its value is not a JSON object.

Browsers generate console warnings for other cases where the import map JSON does not conform to the [import map](#import_map_json_representation) schema.

## Description

When importing a [JavaScript module](/en-US/docs/Web/JavaScript/Guide/Modules), both the [`import` statement](/en-US/docs/Web/JavaScript/Reference/Statements/import) and [`import()` operator](/en-US/docs/Web/JavaScript/Reference/Operators/import) have a "module specifier" that indicates the module to be imported.
A browser must be able to resolve this specifier to an absolute URL in order to import the module.

For example, the following statements import elements from the module specifier `"./modules/shapes/square.js"`, which is a path relative to the base URL of the document, and the module specifier `"https://example.com/shapes/circle.js"`, which is an absolute URL.

```js
import { name as squareName, draw } from "./modules/shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

Import maps allow developers to specify (almost) any text they want in the module specifier; the map provides a corresponding value that will replace the text when the module specifier is resolved.

### Bare modules

The import map below defines an `imports` key that has a "module specifier map" with properties `square` and `circle`.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./modules/shapes/square.js",
      "circle": "https://example.com/shapes/circle.js"
    }
  }
</script>
```

With this import map we can import the same modules as above, but using "bare modules" in our module specifiers:

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

### Mapping path prefixes

A module specifier map key can also be used to remap a path prefix in a module specifier.
Note that in this case the property and mapped path must both have a trailing forward slash (`/`).

```html
<script type="importmap">
  {
    "imports": {
      "shapes/": "./modules/shapes/",
      "other-shapes/": "https://example.com/modules/shapes/"
    }
  }
</script>
```

We could then import a circle module as shown.

```js
import { name as circleName } from "shapes/circle.js";
```

### Paths in the module specifier map key

Module specifier keys do not have to be single word names ("bare names").
They can also contain or end with path separators, or be absolute URLs, or be relative URL paths that start with `/`, `./`, or `../`.

```json
{
  "imports": {
    "modules/shapes/": "./modules/src/shapes/",
    "modules/square": "./modules/src/other/shapes/square.js",
    "https://example.com/modules/square.js": "./modules/src/other/shapes/square.js",
    "../modules/shapes/": "/modules/shapes/"
  }
}
```

If there are several module specifier keys in a module specifier map that might match, then the most specific key will be selected (i.e. the one with the longer path/value).

A module specifier of `./foo/../js/app.js` would be resolved to `./js/app.js` before matching.
This means that a module specifier key of `./js/app.js` would match the module specifier even though they are not exactly the same.

### Scoped module specifier maps

You can use the `scopes` key to provide mappings that are only used if the script importing the module contains a particular URL path.
If the URL of the loading script matches the supplied path, the mapping associated with the scope will be used.
This allows different versions of the module to be used depending on what code is doing the importing.

For example, the map below will only use the scoped map if the loading module has a URL that includes the path: "/modules/custom-shapes/".

```html
<script type="importmap">
  {
    "imports": {
      "square": "./modules/shapes/square.js"
    },
    "scopes": {
      "/modules/custom-shapes/": {
        "square": "https://example.com/modules/shapes/square.js"
      }
    }
  }
</script>
```

If multiple scopes match the referrer URL, then the most specific scope path is used (the scope key name with the longest name).
The browser falls back to the next most specific scoped path if there is no matching specifier, and so on, eventually falling back to the module specifier map in the `imports` key.

### Integrity metadata map

You can use the `integrity` key to provide mapping for module [integrity metadata](/en-US/docs/Web/Security/Subresource_Integrity#using_subresource_integrity).
This enables you to ensure the integrity of dynamically or statically imported modules.
`integrity` also enables you to provide a fallback for top-level or preloaded modules, in case they don't already include an `integrity` attribute.

The map keys represent module URLs, which can be absolute or relative (starting with `/`, `./`, or `../`).
The map values represent integrity metadata, identical to that used in [`integrity`](/en-US/docs/Web/HTML/Element/script#integrity) attribute values.

For example, the map below defines integrity metadata for the `square.js` module (directly) and its bare specifier (transitively, via the `imports` key).

```html
<script type="importmap">
  {
    "imports": {
      "square": "./modules/shapes/square.js"
    },
    "integrity": {
      "./modules/shapes/square.js": "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
    }
  }
</script>
```

### Merging multiple import maps

Internally, browsers maintain a single global import map representation. When multiple import maps are included in a document, their contents are merged into the global import map when they are registered.

For example, consider the following two import maps:

```html
<script type="importmap">
  {
    "imports": {
      "/app/": "./original-app/"
    }
  }
</script>
```

```html
<script type="importmap">
  {
    "imports": {
      "/app/helper": "./helper/index.mjs"
    },
    "scopes": {
      "/js": {
        "/app/": "./js-app/"
      }
    }
  }
</script>
```

These are equivalent to the following single import map:

```html
<script type="importmap">
  {
    "imports": {
      "/app/": "./original-app/",
      "/app/helper": "./helper/index.mjs"
    },
    "scopes": {
      "/js": {
        "/app/": "./js-app/"
      }
    }
  }
</script>
```

Module specifiers in each registered map that were already resolved beforehand are dropped. Subsequent resolutions of these specifiers will provide the same results as their previous resolutions.

For example, if the module specifier `/app/helper.js` was already resolved, the following new import map:

```html
<script type="importmap">
  {
    "imports": {
      "/app/helper.js": "./helper/index.mjs",
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

Would be equivalent to:

```html
<script type="importmap">
  {
    "imports": {
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

The `/app/helper.js` rule was ignored and not incorporated into the map.

Similarly, module specifiers in a registered map that were already mapped to URLs in the global map are dropped; their previous mapping prevails.

For example, the following two import maps:

```html
<script type="importmap">
  {
    "imports": {
      "/app/helper": "./helper/index.mjs",
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

```html
<script type="importmap">
  {
    "imports": {
      "/app/helper": "./main/helper/index.mjs"
    }
  }
</script>
```

Are equivalent to the following single import map:

```html
<script type="importmap">
  {
    "imports": {
      "/app/helper": "./helper/index.mjs",
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

The `/app/helper/` rule was dropped from the second map.

> [!NOTE]
> In non-supporting browsers (check the [compatibility data](#browser_compatibility)), a [polyfill](https://github.com/guybedford/es-module-shims) can be used to avoid issues related to module resolution.

## Import map JSON representation

The following is a "formal" definition of the import map JSON representation.

The import map must be a valid JSON object that can define any of the optional keys `imports`, `scopes` and `integrity`. Each key's value must be an object, which may be empty.

- `imports` {{optional_inline}}

  - : The value is a [module specifier map](#module_specifier_map), which provides the mappings between module specifier text that might appear in an `import` statement or `import()` operator, and the text that will replace it when the specifier is resolved.

    This is the fallback map that is searched for matching module specifiers if no `scopes` path URLs match, or if module specifier maps in matching `scopes` paths do not contain a key that matches the module specifier.

    - `<module specifier map>`

      - : A "module specifier map" is a valid JSON object where the _keys_ are text that may be present in the module specifier when importing a module, and the corresponding _values_ are the URLs or paths that will replace this text when the module specifier is resolved to an address.

        The module specifier map JSON object has the following requirements:

        - None of the keys may be empty.
        - All of the values must be strings, defining either a valid absolute URL or a valid URL string that starts with `/`, `./`, or `../`.
        - If a key ends with `/`, then the corresponding value must also end with `/`.
          A key with a trailing `/` can be used as a prefix for when mapping (or remapping) modules addresses.
        - The object properties' ordering is irrelevant: if multiple keys can match the module specifier, the most specific key is used (in other words, a specifier "olive/branch/" would match before "olive/").

- `integrity` {{optional_inline}}

  - : Defines a valid JSON object where the _keys_ are strings containing valid absolute or relative URLs (starting with `/`, `./`, or `../`),
    and the corresponding _values_ are valid [integrity metadata](/en-US/docs/Web/Security/Subresource_Integrity#using_subresource_integrity).

    If the URL of a script importing or preloading a module matches a key in the `integrity` object, the corresponding integrity metadata is applied to the script's fetch options,
    unless they already have integrity metadata attached to them.

- `scopes` {{optional_inline}}

  - : Scopes define path-specific [module specifier maps](#module_specifier_map), allowing the choice of map to depend on the path of the code importing the module.

    The scopes object is a valid JSON object where each property is a `<scope key>`, which is an URL path, with a corresponding value that is a `<module specifier map>`.

    If the URL of a script importing a module matches a `<scope key>` path, then the `<module specifier map>` value associated with the key is checked for matching specifiers first.
    If there are multiple matching scope keys, then the value associated with the most specific/nested scope paths are checked for matching module specifiers first.
    The fallback module specifier map in `imports` is used if there are no matching module specifier keys in any of the matching scoped module specifier maps.

    Note that the scope does not change how an address is resolved; relative addresses are always resolved to the import map base URL.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript modules > Importing modules using import maps](/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [The `type` attribute of HTML `<script>` elements](/en-US/docs/Web/HTML/Element/script#type)
- [`import` statement](/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [`import()` operator](/en-US/docs/Web/JavaScript/Reference/Operators/import)
