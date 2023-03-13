---
title: '<script type="importmap">'
slug: Web/HTML/Element/script/type/importmap
page-type: html-attribute-value
browser-compat: html.elements.script.type.importmap
---

{{HTMLSidebar}}

The **`importmap`** value of the [`type`](/en-US/docs/Web/HTML/Element/script/type) attribute of the [`<script>` element](/en-US/docs/Web/HTML/Element/script) indicates that the body of the element contains an import map.

An import map is a JSON object that allows developers to control how the browser resolves module specifiers when importing [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules).
It provides a mapping between the text used as the module specifier in an [`import` statement](/en-US/docs/Web/JavaScript/Reference/Statements/import) or [`import()` operator](/en-US/docs/Web/JavaScript/Reference/Operators/import), and the corresponding value that will replace the text when resolving the specifier.
The JSON object must conform to the [Import map JSON representation format](#import_map_json_representation).

Note that the import map applies only to module specifiers in the [`import` statement](/en-US/docs/Web/JavaScript/Reference/Statements/import) or [`import()` operator](/en-US/docs/Web/JavaScript/Reference/Operators/import); it does not apply to the path specified in the `src` attribute of a `<script>` element.

For more information, see the [Importing modules using import maps](/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) section in the JavaScript modules guide.

## Syntax

```html
<script type="importmap">
  // JSON object defining import
</script>
```

The `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity`, and `referrerpolicy` attributes must not be specified.

Only the first import map in the document with an inline definition is processed; any additional import maps and external import maps are ignored.
An [`error` event](/en-US/docs/Web/API/Element/error_event) is fired at script elements with `type="importmap"` that are not processed (are ignored).

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
      "square": "./module/shapes/square.js",
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
      "shapes/": "./module/shapes/",
      "othershapes/": "https://example.com/modules/shapes/"
    }
  }
</script>
```

We could then import a circle module as shown.

```js
import { name as squareName, draw } from "shapes/circle.js";
```

### Paths in the module specifier map key

Module specifier keys do not have to be single word names ("bare names").
They can also contain or end with path separators, or be absolute URLs, or be relative URL paths that start with `/`, `./`, or `../`.

```json
{
  "imports": {
    "modules/shapes/": "./module/src/shapes/",
    "modules/square": "./module/src/other/shapes/square.js",
    "https://example.com/modules/square.js": "./module/src/other/shapes/square.js",
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

For example, the map below will only use the scoped map if the loading module has a URL that includes the path: "/modules/customshapes/".

```html
<script type="importmap">
  {
    "imports": {
      "square": "./module/shapes/square.js"
    },
    "scopes": {
      "/modules/customshapes/": {
        "square": "https://example.com/modules/shapes/square.js"
      }
    }
  }
</script>
```

If multiple scopes match the referrer URL, then the most specific scope path is used (the scope key name with the longest name).
The browser falls back to the next most specific scoped path if there is no matching specifier, and so on, eventually falling back to the module specifier map in the `imports` key.

## Import map JSON representation

The following is a "formal" definition of the import map JSON representation.

The import map must be a valid JSON object that can define at most two optional keys: `imports` and `scopes`. Each key's value must be an object, which may be empty.

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
