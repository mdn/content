---
title: "Document: createElementNS() method"
short-title: createElementNS()
slug: Web/API/Document/createElementNS
page-type: web-api-instance-method
browser-compat: api.Document.createElementNS
---

{{APIRef("DOM")}}

The **`createElementNS()`** method of the {{domxref("Document")}} interface creates a new element with the specified namespace URI and qualified name.

This is useful in mixed-namespace documents, such as SVG or MathML embedded in HTML, where the parser cannot reliably infer the namespace.

The {{DOMxRef("Document.createElement()", "createElement()")}} method is simpler if you want to create a plain HTML element.

## Syntax

```js-nolint
createElementNS(namespaceURI, qualifiedName)
createElementNS(namespaceURI, qualifiedName, options)
```

### Parameters

- `namespaceURI`
  - : A string that specifies the {{DOMxRef("element.namespaceURI", "namespaceURI")}} to associate with the element. Some important namespace URIs are:
    - [HTML](/en-US/docs/Web/HTML)
      - : `http://www.w3.org/1999/xhtml`
    - [SVG](/en-US/docs/Web/SVG)
      - : `http://www.w3.org/2000/svg`
    - [MathML](/en-US/docs/Web/MathML)
      - : `http://www.w3.org/1998/Math/MathML`

- `qualifiedName`
  - : A string containing the qualified name of the new element.
    The {{DOMxRef("node.nodeName", "nodeName")}} property of the created element is initialized with this value.

    The format of the qualified name is `prefix:localName` or `localName`, where the parts are defined as:
    - `prefix` {{optional_inline}}
      - : A "short alias" for the namespace.
        The prefix is optional, but if it is specified the `namespaceURI` parameter must also be specified.
        If the prefix is set to `xml` or `xmlns`, the `namespaceURI` must be set to `http://www.w3.org/XML/1998/namespace` or `http://www.w3.org/2000/xmlns/`, respectively.

        The value is used to initialize the new element's {{DOMxRef("Element/prefix", "prefix")}} property.
        Defaults to `null`.

    - `localName`
      - : The local name of the element.
        The value is used to initialize the new element's {{DOMxRef("Element.localName", "localName")}} property.

- `options` {{Optional_Inline}}
  - : An object with the following optional properties (note that only one of `is` and `customElementRegistry` may be set):
    - `is` {{Optional_Inline}}
      - : A string defining the tag name for a custom element previously defined using {{domxref("CustomElementRegistry/define", "customElements.define()")}}.
        The new element will be given an `is` attribute whose value is the custom element's tag name.
    - `customElementRegistry` {{Optional_Inline}}
      - : A {{domxref("CustomElementRegistry")}} that sets the [Scoped custom element registry](/en-US/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) of a custom element.

    For backward compatibility, some browsers allow you to pass a string here instead of an object, where the string's value is the custom element's tag name.
    See [Extending native HTML elements](https://web.dev/articles/web-components) for more information on how to use this parameter.

### Return value

The new {{DOMxRef("Element")}}.

### Exceptions

- `NamespaceError` {{domxref("DOMException")}}
  - : Thrown if the [`namespaceURI`](#namespaceURI) value is:
    - not a valid namespace URI.
    - set to the empty string when `prefix` has a value.
    - not the value `http://www.w3.org/XML/1998/namespace` or `http://www.w3.org/2000/xmlns/` when [`prefix`](#prefix) is set to `xml` or `xmlns`, respectively.
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if either the `prefix` or `localName` is not valid:
    - The `prefix` must have at least one character, and cannot contain ASCII whitespace, `NULL`, `/`, or `>` (U+0000, U+002F, or U+003E, respectively).
    - The `localName` is a valid element name if it has a length of at least 1 and:
      - it starts with an alphabet character and does not contain ASCII whitespace, `NULL`, `/`, or `>` (U+0000, U+002F, or U+003E, respectively).
      - it starts with `:` (U+003A), `_` (U+005F), or any characters in the range U+0080 to U+10FFFF (inclusive), _and_ the remaining code points only include those same characters along with the ASCII alphanumeric characters, `-` (U+002D), and `.` (U+002E),

    > [!NOTE]
    > Earlier versions of the specification were more restrictive, requiring that the `qualifiedName` be a valid [XML name](https://www.w3.org/TR/xml/#dt-name).

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if both the [`is`](#is) and [`customElementRegistry`](#customElementRegistry) options are specified.

## Examples

### Basic usage

This shows how to create a new `<div>` element in the {{Glossary("XHTML")}} namespace.

```js
const divElementXHTML = document.createElementNS(
  "http://www.w3.org/1999/xhtml",
  "div",
);

// This is equivalent!
const divElementHTML = document.createElement("div");
```

### Create an SVG element

This example shows how you might create an SVG element ({{domxref("SVGSVGElement")}}) and append it to the HTML `<body>` element.

Using `createElementNS()` with the SVG namespace is necessary when working with an HTML document.
If you were to call {{DOMxRef("Document.createElement()", "createElement(\"svg\")")}}, an {{domxref("HTMLUnknownElement")}} would be returned, and the SVG would not be rendered.

```js
const svgNS = "http://www.w3.org/2000/svg";

const svg = document.createElementNS(svgNS, "svg");
svg.setAttribute("width", "100");
svg.setAttribute("height", "100");

const circle = document.createElementNS(svgNS, "circle");
circle.setAttribute("cx", "50");
circle.setAttribute("cy", "50");
circle.setAttribute("r", "40");
circle.setAttribute("fill", "steelblue");

svg.appendChild(circle);
document.body.appendChild(svg);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("document.createElement()")}}
- {{DOMxRef("document.createTextNode()")}}
- {{DOMxRef("Element.namespaceURI")}}
