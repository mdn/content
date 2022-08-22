---
title: DocumentType
slug: Web/API/DocumentType
page-type: web-api-interface
tags:
  - API
  - DOM
  - DocumentType
  - Interface
browser-compat: api.DocumentType
---
{{APIRef("DOM")}}

The **`DocumentType`** interface represents a {{domxref("Node")}} containing a doctype.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("Node")}}._

- {{domxref("DocumentType.internalSubset")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : A string of the internal subset, or `null` if there is none. Eg `"<!ELEMENT foo (bar)>"`.
- {{domxref("DocumentType.name")}} {{ReadOnlyInline}}
  - : A string, eg `"html"` for `<!DOCTYPE HTML>`.
- {{domxref("DocumentType.notations")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : A {{domxref("NamedNodeMap")}} with notations declared in the DTD.
- {{domxref("DocumentType.publicId")}} {{ReadOnlyInline}}
  - : A string, eg `"-//W3C//DTD HTML 4.01//EN"`, now and empty string for HTML.
- {{domxref("DocumentType.systemId")}} {{ReadOnlyInline}}
  - : A string, eg `"http://www.w3.org/TR/html4/strict.dtd"`, now an empty string for HTML.

## Methods

_Inherits methods from its parent, {{domxref("Node")}}._

- {{domxref("DocumentType.after()")}}
  - : Inserts a set of {{domxref("Node")}} or string objects in the children list of the
    `DocumentType`'s parent, just after the `DocumentType` object.
- {{domxref("DocumentType.before()")}}
  - : Inserts a set of {{domxref("Node")}} or string objects in the children list of the
    `DocumentType`'s parent, just before the `DocumentType` object.
- {{domxref("DocumentType.remove()")}}
  - : Removes the object from its parent children list.
- {{domxref("DocumentType.replaceWith()")}}
  - : Replaces the document type with a set of given nodes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index.](/en-US/docs/Web/API/Document_Object_Model)
