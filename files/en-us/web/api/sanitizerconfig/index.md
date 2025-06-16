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

The **`SanitizerConfig`** dictionary of the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) represents a sanitizer configuration object.
The configuration specifies what elements, attributes and comments are allowed or should be removed when inserting strings of HTML into an {{domxref("Element")}} or {{domxref("ShadowRoot")}}, or when parsing an HTML string into a {{domxref("Document")}}.

An instance of this type can be passed to the {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}} constructor to configure a {{domxref("Sanitizer")}}, and is returned by {{domxref('Sanitizer.get()')}}.
It can also be passed as the `option.sanitizer` parameter when calling the [sanitization methods](/en-US/docs/Web/API/HTML_Sanitizer_API#sanitization_methods):

- {{domxref("Element/setHTMLUnsafe","setHTMLUnsafe()")}} or {{domxref("Element/setHTMLUnsafe","setHTMLUnsafe()")}} on {{domxref("Element")}}.
- {{domxref("ShadowRoot/setHTMLUnsafe","setHTMLUnsafe()")}} or {{domxref("ShadowRoot/setHTMLUnsafe","setHTMLUnsafe()")}} on {{domxref("ShadowRoot")}}.
- [`Document.parseHTMLUnsafe()`](/en-US/docs/Web/API/Document/parseHTMLUnsafe_static) or [`Document.parseHTML()`](/en-US/docs/Web/API/Document/parseHTML_static) static methods.

Note that normally a {{domxref("Sanitizer")}} instance would be be passed as the option instead of `SanitizerConfig` in the above methods, in particular because `sanitizer` instances are more efficient to share and modify.

## Instance properties

- `elements`

  - : An array indicating the elements to allow when sanitizing HTML, optionally also specifying their allowed or removed attributes.

    Each element can be specified by name (a string), or as a object with the following properties:

    - `name`
      - : A string containing the name of the element.
    - `namespace` {{optional_inline}}
      - : A string containing the namespace of the element.
        The default namespace is `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}}

      - : An array indicating the attributes to allow on this (allowed) element when sanitizing HTML.

        Each attribute can be specified by name (a string), or as a object with the following properties:

        - `name`
          - : A string containing the name of the attribute.
        - `namespace` {{optional_inline}}
          - : A string containing the namespace of the attribute, which defaults to `null`.

    - `removeAttributes` {{optional_inline}}

      - : An array indicating the attributes to remove on this (allowed) element when sanitizing HTML.

        Each attribute can be specified by name (a string), or as a object with the following properties:

        - `name`
          - : A string containing the name of the attribute.
        - `namespace` {{optional_inline}}
          - : A string containing the namespace of the attribute, which defaults to `null`.

- `removeElements`

  - : An array indicating the elements to remove when sanitizing HTML.

    Each element can be specified by name (a string), or as a object with the following properties:

    - `name`
      - : A string containing the name of the element.
    - `namespace` {{optional_inline}}
      - : A string containing the namespace of the element.
        The default namespace is `"http://www.w3.org/1999/xhtml"`.

- `replaceWithChildrenElements`

  - : An array indicating the elements to replace with their content when sanitizing HTML.
    This is primarily used to strip styles from text (for example, you could use this to change `<b>some text</b>` to `some text`).

    Each element can be specified by name (a string), or as a object with the following properties:

    - `name`
      - : A string containing the name of the element.
    - `namespace` {{optional_inline}}
      - : A string containing the namespace of the element.
        The default namespace is `"http://www.w3.org/1999/xhtml"`.

- `attributes`

  - : An array indicating the attributes to allow when sanitizing HTML.

    Each attribute can be specified by name (a string), or as a object with the following properties:

    - `name`
      - : A string containing the name of the attribute.
    - `namespace` {{optional_inline}}
      - : A string containing the namespace of the attribute, which defaults to `null`.

- `removeAttributes`

  - : An array indicating the attributes to remove from elements when sanitizing HTML.

    Each attribute can be specified by name (a string), or as a object with the following properties:

    - `name`
      - : A string containing the name of the attribute.
    - `namespace` {{optional_inline}}
      - : A string containing the namespace of the attribute, which defaults to `null`.

- `comments`
  - : `true` if comments are allowed, and `false` if they are to be removed.
- `dataAttributes`
  - : `true` if data attributes are allowed, and `false` if they are to be removed.

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
