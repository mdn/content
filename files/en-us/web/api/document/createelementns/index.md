---
title: "Document: createElementNS() method"
short-title: createElementNS()
slug: Web/API/Document/createElementNS
page-type: web-api-instance-method
browser-compat: api.Document.createElementNS
---

{{APIRef("DOM")}}

Creates an element with the specified namespace URI and qualified name.

To create an element without specifying a namespace URI, use the
{{DOMxRef("Document.createElement()", "createElement()")}} method.

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
  - : A string that specifies the type of element to be created.
    The {{DOMxRef("node.nodeName", "nodeName")}} property of the created element is initialized with the value of _qualifiedName_.
- `options` {{Optional_Inline}}

  - : An optional `ElementCreationOptions` object containing a single property named `is`, whose value is the tag name for a custom element previously defined using `customElements.define()`.
    For backwards compatibility with previous versions of the [Custom Elements specification](https://www.w3.org/TR/custom-elements/),
    some browsers will allow you to pass a string here instead of an object, where the string's value is the custom element's tag name.
    See [Extending native HTML elements](https://web.dev/articles/web-components) for more information on how to use this parameter.

    The new element will be given an `is` attribute whose value is the custom element's tag name. Custom elements are an experimental feature only available in some browsers.

### Return value

The new {{DOMxRef("Element")}}.

### Exceptions

- `NamespaceError` {{domxref("DOMException")}}
  - : Thrown if the [`namespaceURI`](#namespaceuri) value is not a valid namespace URI.
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if the [`qualifiedName`](#qualifiedname) value is not a valid [XML name](https://www.w3.org/TR/REC-xml/#dt-name); for example, it starts with a number, hyphen, or period, or contains characters other than alphanumeric characters, underscores, hyphens, or periods.

## Examples

This creates a new `<div>` element in the {{Glossary("XHTML")}} namespace and
appends it to the vbox element. Although this is not an extremely useful XUL document, it does demonstrate the use of
elements from two different namespaces within a single document:

```xml
<?xml version="1.0"?>
<page xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
      xmlns:html="http://www.w3.org/1999/xhtml"
      title="||Working with elements||"
      onload="init()">

<script><![CDATA[
 let container;
 let newDiv;
 let textNode;

 function init(){
   container = document.getElementById("ContainerBox");
   newDiv = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
   textNode = document.createTextNode("This is text that was constructed dynamically with createElementNS and createTextNode then inserted into the document using appendChild.");
   newDiv.appendChild(textNode);
   container.appendChild(newDiv);
 }

]]></script>

 <vbox id="ContainerBox" flex="1">
  <html:div>
   The script on this page will add dynamic content below:
  </html:div>
 </vbox>

</page>
```

> [!NOTE]
> The example given above uses inline script which is not recommended in XHTML
> documents. This particular example is actually an XUL document with embedded XHTML,
> however, the recommendation still applies.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("document.createElement()")}}
- {{DOMxRef("document.createTextNode()")}}
- {{DOMxRef("Element.namespaceURI")}}
