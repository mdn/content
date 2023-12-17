---
title: Document Object Model (DOM)
slug: Web/API/Document_Object_Model
page-type: web-api-overview
spec-urls: https://dom.spec.whatwg.org/
---

{{DefaultAPISidebar("DOM")}}

The **Document Object Model** (**DOM**) connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory. Usually it refers to JavaScript, even though modeling HTML, SVG, or XML documents as objects are not part of the core JavaScript language.

The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.

Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.

To learn more about what the DOM is and how it represents documents, see our article [Introduction to the DOM](/en-US/docs/Web/API/Document_Object_Model/Introduction).

## DOM interfaces

- {{DOMxRef("AbortController")}}
- {{DOMxRef("AbortSignal")}}
- {{DOMxRef("AbstractRange")}}
- {{DOMxRef("Attr")}}
- {{DOMxRef("CDATASection")}}
- {{DOMxRef("CharacterData")}}
- {{DOMxRef("Comment")}}
- {{DOMxRef("CustomEvent")}}
- {{DOMxRef("Document")}}
- {{DOMxRef("DocumentFragment")}}
- {{DOMxRef("DocumentType")}}
- {{DOMxRef("DOMError")}} {{Deprecated_Inline}}
- {{DOMxRef("DOMException")}}
- {{DOMxRef("DOMImplementation")}}
- {{DOMxRef("DOMParser")}}
- {{DOMxRef("DOMPoint")}}
- {{DOMxRef("DOMPointReadOnly")}}
- {{DOMxRef("DOMRect")}}
- {{DOMxRef("DOMTokenList")}}
- {{DOMxRef("Element")}}
- {{DOMxRef("Event")}}
- {{DOMxRef("EventTarget")}}
- {{DOMxRef("HTMLCollection")}}
- {{DOMxRef("MutationObserver")}}
- {{DOMxRef("MutationRecord")}}
- {{DOMxRef("NamedNodeMap")}}
- {{DOMxRef("Node")}}
- {{DOMxRef("NodeIterator")}}
- {{DOMxRef("NodeList")}}
- {{DOMxRef("ProcessingInstruction")}}
- {{DOMxRef("Range")}}
- {{DOMxRef("StaticRange")}}
- {{DOMxRef("Text")}}
- {{DOMxRef("TextDecoder")}}
- {{DOMxRef("TextEncoder")}}
- {{DOMxRef("TimeRanges")}}
- {{DOMxRef("TreeWalker")}}
- {{DOMxRef("XMLDocument")}}

### Obsolete DOM interfaces

The Document Object Model has been highly simplified. To achieve this, the following interfaces in the different DOM level 3 or earlier specifications have been removed. They are no longer available to web developers.

- `DOMConfiguration`
- `DOMErrorHandler`
- `DOMImplementationList`
- `DOMImplementationRegistry`
- `DOMImplementationSource`
- `DOMLocator`
- `DOMObject`
- `DOMSettableTokenList`
- `DOMUserData`
- `ElementTraversal`
- `Entity`
- `EntityReference`
- `NameList`
- `Notation`
- `TypeInfo`
- `UserDataHandler`

## HTML DOM

A document containing HTML is described using the {{DOMxRef("Document")}} interface, which is extended by the HTML specification to include various HTML-specific features. In particular, the {{domxref("Element")}} interface is enhanced to become {{domxref("HTMLElement")}} and various subclasses, each representing one of (or a family of closely related) elements.

The HTML DOM API provides access to various browser features such as tabs and windows, CSS styles and stylesheets, browser history, etc. These interfaces are discussed further in the [HTML DOM API](/en-US/docs/Web/API/HTML_DOM_API) documentation.

## SVG DOM

Similarly, a document containing SVG is also described using the {{DOMxRef("Document")}} interface, which is extended by the SVG specification to include various SVG-specific features. In particular, the {{domxref("Element")}} interface is enhanced to become {{domxref("SVGElement")}} and various subclasses, each representing an element or a family of closely related elements. These interfaces are discussed further in the [SVG API](/en-US/docs/Web/API/SVG_API) documentation.

## Specifications

{{Specifications}}

## See also

- [DOM Examples](/en-US/docs/Web/API/Document_Object_Model/Examples)
- [CSS Object Model (CSSOM)](/en-US/docs/Web/API/CSS_Object_Model)
