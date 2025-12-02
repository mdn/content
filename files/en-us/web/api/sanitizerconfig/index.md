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

- Either the `elements` or `removeElements` array may be defined, but not both.

  > [!NOTE]
  > It is impossible to define per-element attributes if the `removeElements` array is defined, because these are added to elements in the `elements` array.

- Either the global `attributes` or `removeAttributes` array may be defined, but not both
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
  - The `dataAttributes` boolean must not be defined.

The empty object `{}` is a valid configuration.

> [!NOTE]
> The conditions above are from the perspective of a web developer.
> The [validity check defined in the specification](https://wicg.github.io/sanitizer-api/#sanitizerconfig-valid) is slightly different because it is executed after canonicalization of the configuration, such as adding `removeElements` when both are missing, and adding default namespaces.

### Allow and remove configurations

One of the main implications of the previous section is that a valid configuration can specify either `elements` or `removeElements` arrays (but not both) and either the `attributes` or `removeAttributes` arrays (but not both).

A configuration that has the `elements` and/or `attributes` arrays is referred to as an [allow configuration](/en-US/docs/Web/API/HTML_Sanitizer_API#allow_configurations), as it defines the sanitization behavior in terms of the values that are allowed to be present in the output.
A [remove configuration](/en-US/docs/Web/API/HTML_Sanitizer_API#remove_configurations) is one that has either of `removeElements` and/or `removeAttributes`, and defines the behavior in terms of the values that will be removed from the output.

## Examples

### Creating an "allow" configuration

This example shows how you might create an "allow" sanitizer configuration that allows specific elements and attributes, replaces {{htmlelement("b")}} elements with their children, allows comments to be included in the output, and requires that `data-*` attributes are explicitly listed in the `attributes` array to be included.
The configuration object is passed to the {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}} constructor.

```js
const sanitizer = new Sanitizer({
  elements: ["div", "p", "script"],
  attributes: ["id"],
  replaceWithChildrenElements: ["b"],
  comments: true,
  dataAttributes: false,
});
```

### Creating a "remove" configuration

This example shows how you might create a "remove" sanitizer configuration that removes both elements and attributes.

```js
const sanitizer = new Sanitizer({
  removeElements: ["span", "script"],
  removeAttributes: ["lang", "id"],
  comments: false,
});
```

### Allow element and remove attribute configuration

This example shows how you might create a "hybrid" sanitizer configuration that allows some elements and removes certain attributes.
You might similarly specify a configuration that removes elements and allows attributes.

```js
const sanitizer = new Sanitizer({
  elements: ["span", "script"],
  removeAttributes: ["lang", "id"],
});
```

Note that you having both allow and remove arrays for elements, or both allow and remove arrays for attributes is not a [valid configuration](#valid_configuration), and would result in a `TypeError`.

### Invalid configurations

This sections shows a number of invalid configurations.
These will throw a `TypeError`.

Invalid because both `elements` and `removeElements` are defined:

```js
const sanitizer1 = new Sanitizer({
  elements: ["span", "script"],
  removeElements: ["div", "b"],
});
```

Invalid because {{htmlelement("span")}} is in both `elements` and `removeElements`.

```js
const sanitizer2 = new Sanitizer({
  elements: ["span", "div"],
  replaceWithChildrenElements: ["span"],
});
```

Invalid because the redundant attribute `"data-test"` is defined when `dataAttributes` is true:

```js
const sanitizer3 = new Sanitizer({
  attributes: ["lang", "id", "data-test"],
  datatAttributes: true,
}); …
```

Invalid because it has `removeAttributes` and `datatAttributes` defined.

```js
const sanitizer4 = new Sanitizer({
  removeAttributes: ["lang", "id"],
  dataAttributes: true,
}); …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
