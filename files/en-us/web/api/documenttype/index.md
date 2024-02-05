---
title: DocumentType
slug: Web/API/DocumentType
page-type: web-api-interface
browser-compat: api.DocumentType
---

{{APIRef("DOM")}}

The **`DocumentType`** interface represents a {{domxref("Node")}} containing a doctype.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("Node")}}._

- {{domxref("DocumentType.name")}} {{ReadOnlyInline}}
  - : The type of the document. It is always `"html"` for HTML documents, but will vary for XML documents.
- {{domxref("DocumentType.publicId")}} {{ReadOnlyInline}}
  - : A string with an identifier of the type of document. Always empty (`""`) for HTML, it will be, for example, `"-//W3C//DTD SVG 1.1//EN"` for SVG documents.
- {{domxref("DocumentType.systemId")}} {{ReadOnlyInline}}
  - : A string containing the URL to the associated DTD. Always empty (`""`) for HTML, it will be, for example, `"http://www.w3.org/2000/svg"` for SVG documents.

## Instance methods

_Inherits methods from its parent, {{domxref("Node")}}._

- {{domxref("DocumentType.after()")}}
  - : Inserts a set of {{domxref("Node")}} or string objects in the children list of the
    object's parent, just after this node.
- {{domxref("DocumentType.before()")}}
  - : Inserts a set of {{domxref("Node")}} or string objects in the children list of the
    object's parent, just before this node.
- {{domxref("DocumentType.remove()")}}
  - : Removes this object from its parent children list.
- {{domxref("DocumentType.replaceWith()")}}
  - : Replaces the document type with a set of given nodes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index.](/en-US/docs/Web/API/Document_Object_Model)
- {{domxref("DOMImplementation.createDocumentType()")}} to create a new `DocumentType` node.
