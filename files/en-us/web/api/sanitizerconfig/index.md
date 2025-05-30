---
title: SanitizerConfig
slug: Web/API/SanitizerConfig
page-type: web-api-interface
browser-compat: api.Sanitizer.get api.Sanitizer.Sanitizer
---

{{APIRef("HTML Sanitizer API")}}

The **`SanitizerConfig`** dictionary of the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API) represents a sanitizer configuration.

An instance of this type can be passed to the {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}} constructor to configure a {{domxref("Sanitizer")}}, and is returned by {{domxref('Sanitizer.get()')}}.
It can also be passed as the `option.sanitizer` parameter when calling:

- {{domxref("Element/setHTMLUnsafe","setHTMLUnsafe()")}} or {{domxref("Element/setHTMLUnsafe","setHTMLUnsafe()")}} on {{domxref("Element")}}.
- {{domxref("ShadowRoot/setHTMLUnsafe","setHTMLUnsafe()")}} or {{domxref("ShadowRoot/setHTMLUnsafe","setHTMLUnsafe()")}} on {{domxref("ShadowRoot")}}.
- [`Document.parseHTMLUnsafe()`](/en-US/docs/Web/API/Document/parseHTMLUnsafe_static) or [`Document.parseHTML()`](/en-US/docs/Web/API/Document/parseHTML_static) static methods

Note that normally a {{domxref("Sanitizer")}} instance would be be passed as the option instead of `SanitizerConfig` in the above methods, in particular because `anitizer` instances are more efficient to share and modify.

<!-- High level description probably needed, or a link to the user guide. Specifically to make it clear that -->

## Instance properties

- `elements`

  - : An array indicating the elements to allow when sanitizing HTML, optionally also specifying their allowed or removed attributes.

    Each element can be specified by name (a string), or as a object with the following properties:

    - `name`
      - : A string containing the name of the element.
    - `namespace` {{optional_inline}}
      - : A string containing the namespace of the element.
        The default namespace is `"http://www.w3.org/1999/xhtml"`.
    - `attributes` {{optional_inline}} <!-- to check: spec doesn't explicitly make them optional -->

      - : An array indicating the attributes to allow on this (allowed) element when sanitizing HTML.

        Each attribute can be specified by name (a string), or as a object with the following properties:

        - `name`
          - : A string containing the name of the attribute.
        - `namespace` {{optional_inline}}
          - : A string containing the namespace of the attribute, which defaults to `null`.

    - `removeAttributes` {{optional_inline}} <!-- to check: spec doesn't explicitly make them optional -->

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

    <!-- TODO: How deep does it go? Some test code  -->

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

<!-- TBD -->
<!-- Perhaps showing how you might get/set/modify, or a link to user guide once we have one. that -->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
