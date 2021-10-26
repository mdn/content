---
title: Attr
slug: Web/API/Attr
tags:
  - Interface
  - Reference
browser-compat: api.Attr
---
{{APIRef("DOM")}}

The **`Attr`** interface represents one of an element's attributes as an object. In most methods, you will directly retrieve the attribute as a string (e.g., {{domxref("Element.getAttribute()")}}), but certain functions (e.g., {{domxref("Element.getAttributeNode()")}}) or means of iterating return `Attr` types.

The core idea of an object of type `Attr` is the association between a _name_ and a _value_. An attribute may also be part of a _namespace_ and, in this case, it also have a URI identifying the namespace, and a prefix that is an abbreviation for the namespace.

The name is deemed _local_ when it ignores the eventual namespace and deemed _qualified_ when it includes the prefix of the namespace, separated from the local name by a colon (`:`). For example, if we have two attributes called `myAttr`, one without a namespace, one inside the `example` namespace, we have: `myAttr` for the qualified name of the attribute without a namespace and `example:myAttr` for the qualified name of the attribute within the `example` namespace. Both have the same local name, `myAttr`.

{{InheritanceDiagram}}

> **Note:** This interface represents only attributes present in the tree representation of the {{domxref("Element")}}, being a SVG, an HTML or a MathML element. It doesn't represent the _property_ of an interface associated with such element, such as {{domxref("HTMLTableElement")}} for a {{HTMLElement("table")}} element.

## Properties

_This interface also inherits the properties of its parent interfaces, {{domxref("Node")}} and {{domxref("EventTarget")}}._

- {{domxref("Attr.localName", "localName")}} {{readOnlyInline}}
  - : A {{jsxref("String")}} representing the local part of the qualified name of the attribute.
- {{domxref("Attr.name", "name")}} {{readOnlyInline}}
  - : The attribute's _qualified name_. If the attribute is not in a namespace, it will be the same as {{domxref("attr.localName", "localName")}} property.
- {{domxref("Attr.namespaceURI", "namespaceURI")}} {{readOnlyInline}}
  - : A {{jsxref("String")}} representing the URI of the namespace of the attribute, or `null` if there is no namespace.
- {{domxref("Attr.ownerElement", "ownerElement")}} {{readOnlyInline}}
  - : The {{domxref("Element")}} the attribute belongs to.
- {{domxref("Attr.prefix", "prefix")}} {{readOnlyInline}}
  - : A {{jsxref("String")}} representing the namespace prefix of the attribute, or `null` if no namespace is specified.
- {{domxref("Attr.specified", "specified")}} {{readOnlyInline}}{{deprecated_inline}}
  - : This property always returns `true`.
- {{domxref("Attr.value", "value")}}
  - : The attribute's value, a string that can be set and get using this property.

## Methods

_This interface has no specific methods, but inherits the methods of its parent interfaces, {{domxref("Node")}} and {{domxref("EventTarget")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other nodes are {{domxref("CDATASection")}}, {{domxref("CharacterData")}}, {{domxref("Comment")}}, {{domxref("Document")}}, {{domxref("Element")}}, {{domxref("ProcessingInstruction")}}, and {{domxref("Text")}}.
