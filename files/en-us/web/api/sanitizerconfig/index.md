---
title: SanitizerConfig
slug: Web/API/SanitizerConfig
page-type: web-api-interface
status:
  - experimental
browser-compat:
  - api.Sanitizer.get
  - api.Sanitizer.Sanitizer
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

The **`SanitizerConfig`** dictionary of the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) specifies what elements, attributes and comments are allowed or should be removed when inserting strings of HTML into an {{domxref("Element")}} or {{domxref("ShadowRoot")}}, or when parsing an HTML string into a {{domxref("Document")}}.

Note that normally {{domxref("Sanitizer")}} instances are used instead of `SanitizerConfig` objects, as they are more efficient to share and modify.

## Instance properties

- `elements`
  - : An array indicating the elements to allow when sanitizing HTML, optionally also specifying their allowed or removed attributes.

    Each element can be specified by name (a string), or as an object with the following properties:
    - `name`
      - : A string containing the name of the element.
    - `namespace` {{optional_inline}}
      - : A string containing the namespace of the element.
        The default namespace is `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}
      - : An array indicating the attributes to allow on this (allowed) element when sanitizing HTML.

        Each attribute can be specified by name (a string), or as an object with the following properties:
        - `name`
          - : A string containing the name of the attribute.
        - `namespace` {{optional_inline}}
          - : A string containing the namespace of the attribute, which defaults to `null`.

    - `removeAttributes` {{optional_inline}}
      - : An array indicating the attributes to remove on this (allowed) element when sanitizing HTML.

        Each attribute can be specified by name (a string), or as an object with the following properties:
        - `name`
          - : A string containing the name of the attribute.
        - `namespace` {{optional_inline}}
          - : A string containing the namespace of the attribute, which defaults to `null`.

- `removeElements`
  - : An array indicating the elements to remove when sanitizing HTML.

    Each element can be specified by name (a string), or as an object with the following properties:
    - `name`
      - : A string containing the name of the element.
    - `namespace` {{optional_inline}}
      - : A string containing the namespace of the element.
        The default namespace is `"http://www.w3.org/1999/xhtml"`.

- `replaceWithChildrenElements`
  - : An array indicating the elements to replace with their content when sanitizing HTML.
    This is primarily used to strip styles from text (for example, you could use this to change `<b>some text</b>` to `some text`).

    Each element can be specified by name (a string), or as an object with the following properties:
    - `name`
      - : A string containing the name of the element.
    - `namespace` {{optional_inline}}
      - : A string containing the namespace of the element.
        The default namespace is `"http://www.w3.org/1999/xhtml"`.

- `attributes`
  - : An array indicating the attributes to allow when sanitizing HTML.

    Each attribute can be specified by name (a string), or as an object with the following properties:
    - `name`
      - : A string containing the name of the attribute.
    - `namespace` {{optional_inline}}
      - : A string containing the namespace of the attribute, which defaults to `null`.

- `removeAttributes`
  - : An array indicating the attributes to remove from elements when sanitizing HTML.

    Each attribute can be specified by name (a string), or as an object with the following properties:
    - `name`
      - : A string containing the name of the attribute.
    - `namespace` {{optional_inline}}
      - : A string containing the namespace of the attribute, which defaults to `null`.

- `comments`
  - : `true` if comments are allowed, and `false` if they are to be removed.
- `dataAttributes`
  - : `true` if all `data-*` attributes will be allowed (in which case `data-*` attributes must not be listed in the `attributes` array).
    If `false`, any `data-*` attributes to be allowed must be listed in the `attributes` array.

## Description

A **`SanitizerConfig`** specifies what elements, attributes and comments are allowed or should be removed when inserting strings of HTML into an {{domxref("Element")}} or {{domxref("ShadowRoot")}}, or when parsing an HTML string into a {{domxref("Document")}}.

An instance of this type can be passed to the {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}} constructor to configure a {{domxref("Sanitizer")}}, and is returned by {{domxref('Sanitizer.get()')}}.
It can also be passed as the `option.sanitizer` parameter when calling the [sanitization methods](/en-US/docs/Web/API/HTML_Sanitizer_API#sanitization_methods):

- {{domxref("Element/setHTML","setHTML()")}} or {{domxref("Element/setHTMLUnsafe","setHTMLUnsafe()")}} on {{domxref("Element")}}.
- {{domxref("ShadowRoot/setHTML","setHTML()")}} or {{domxref("ShadowRoot/setHTMLUnsafe","setHTMLUnsafe()")}} on {{domxref("ShadowRoot")}}.
- [`Document.parseHTML()`](/en-US/docs/Web/API/Document/parseHTML_static) or [`Document.parseHTMLUnsafe()`](/en-US/docs/Web/API/Document/parseHTMLUnsafe_static) static methods.

### Valid configuration

The configuration object structure allows for the declaration of filter options that are contradictory or redundant, such as specifying an element in both allow and remove lists, or listing an attribute in a list multiple times.
In order to avoid any ambiguity, methods that take a `SanitizerConfig` instance require that a _valid_ configuration object be passed, and will throw a {{jsxref("TypeError")}} if an invalid configuration is used.

In a valid sanitizer configuration:

- Either the `elements` or `removeElements` array may be defined, but not both
- Either the `attributes` or `removeAttributes` array may be defined, but not both
- The `replaceWithChildrenElements` array, if defined, may not have any elements in common with `elements` or `removeElements`
- No array may contain duplicate elements or attributes
- If the global `attributes` array is defined:
  - An element may define any or none of `attributes` and `removeAttributes`
  - An element's `attributes` must not share any values in common with the global `attributes` array
  - An element's `removeAttributes` array may only contain values that are also present in the global `attributes` array.
  - If `dataAttributes` is `true` the global and element attribute arrays must not contain `data-*` attributes (since these will automatically be allowed).
- If the global `removeAttributes` array is defined:
  - An element may specify either `attributes` or `removeAttributes`, but not both
  - An element's `attributes` or `removeAttributes` array, depending on which (if either) is defined, must not share any values in common with the global `removeAttributes` array.
  - The global `dataAttributes` array must not be defined.

The empty object `{}` is a valid configuration.

> [!NOTE]
> The conditions above are from the perspective of a web developer.
> The [validity check defined in the specification](https://wicg.github.io/sanitizer-api/#sanitizerconfig-valid) is slightly different because it is executed after canonicalization of the configuration, such as adding `removeElements` when both are missing, and adding default namespaces.

## Examples

### Creating an "allow" configuration

This example shows how you might create an "allow" sanitizer configuration, and in this case pass it to the {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}} constructor.

```js
const sanitizer = new Sanitizer({
  elements: ["div", "p", "script"],
  attributes: ["id"],
  replaceWithChildrenElements: ["b"],
  comments: true,
  dataAttributes: false,
});
```

Note that you cannot specify both allow and remove lists in the same configuration without causing an exception when passing the configuration to the constructor or a sanitization method.

### Creating a "remove" configuration

This example shows how you might create a "remove" sanitizer configuration, and in this case pass it to the {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}} constructor.

```js
const sanitizer = new Sanitizer({
  removeElements: ["span", "script"],
  removeAttributes: ["lang", "id"],
  comments: false,
});
```

Note that you cannot specify both allow and remove lists in the same configuration without causing an exception when passing the configuration to the constructor or a sanitization method.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
