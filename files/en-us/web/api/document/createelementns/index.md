---
title: Document.createElementNS()
slug: Web/API/Document/createElementNS
tags:
  - API
  - DOM
  - Method
  - Reference
browser-compat: api.Document.createElementNS
---
{{APIRef("DOM")}}

Creates an element with the specified namespace URI and qualified name.

To create an element without specifying a namespace URI, use the
{{DOMxRef("Document.createElement()", "createElement()")}} method.

## Syntax

```js
var element = document.createElementNS(namespaceURI, qualifiedName[, options]);
```

### Parameters

- _namespaceURI_
  - : A string that specifies the [namespace URI](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI) to associate with the element.
    The {{DOMxRef("element.namespaceURI", "namespaceURI")}} property of the created element is initialized with the value of _namespaceURI_.
    See [Valid Namespace URIs](#important_namespace_uris).
- _qualifiedName_
  - : A string that specifies the type of element to be created.
    The {{DOMxRef("element.nodeName", "nodeName")}} property of the created element is initialized with the value of _qualifiedName_.
- _options_{{Optional_Inline}}

  - : An optional `ElementCreationOptions` object containing a single property named `is`, whose value is the tag name for a custom element previously defined using `customElements.define()`.
    For backwards compatibility with previous versions of the [Custom Elements specification](https://www.w3.org/TR/custom-elements/),
    some browsers will allow you to pass a string here instead of an object, where the string's value is the custom element's tag name.
    See [Extending native HTML elements](https://developers.google.com/web/fundamentals/primers/customelements/#extendhtml) for more information on how to use this parameter.

    The new element will be given an `is` attribute whose value is the custom element's tag name. Custom elements are an experimental feature only available in some browsers.

### Return value

The new {{DOMxRef("Element")}}.

## Important Namespace URIs

- [HTML](/en-US/docs/Web/HTML)
  - : `http://www.w3.org/1999/xhtml`
- [SVG](/en-US/docs/Web/SVG)
  - : `http://www.w3.org/2000/svg`
- [MathML](/en-US/docs/Web/MathML)
  - : `http://www.w3.org/1998/Math/MathML`
- [XUL](/en-US/docs/Mozilla/Tech/XUL) {{Non-standard_Inline}}
  - : `http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul`
- [XBL](/en-US/docs/Mozilla/Tech/XBL) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : `http://www.mozilla.org/xbl`

## Example

This creates a new \<div> element in the {{Glossary("XHTML")}} namespace and
appends it to the vbox element. Although this is not an extremely useful [XUL](/en-US/docs/Mozilla/Tech/XUL) document, it does demonstrate the use of
elements from two different namespaces within a single document:

```xml
<?xml version="1.0"?>
<page xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
      xmlns:html="http://www.w3.org/1999/xhtml"
      title="||Working with elements||"
      onload="init()">

<script type="application/javascript"><![CDATA[
 let container;
 let newdiv;
 let txtnode;

 function init(){
   container = document.getElementById("ContainerBox");
   newdiv = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
   txtnode = document.createTextNode("This is text that was constructed dynamically with createElementNS and createTextNode then inserted into the document using appendChild.");
   newdiv.appendChild(txtnode);
   container.appendChild(newdiv);
 }

]]></script>

 <vbox id="ContainerBox" flex="1">
  <html:div>
   The script on this page will add dynamic content below:
  </html:div>
 </vbox>

</page>
```

> **Note:** The example given above uses inline script which is not recommended in XHTML
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
- [Namespaces in XML](https://www.w3.org/TR/1999/REC-xml-names-19990114)
