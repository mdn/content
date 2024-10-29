---
title: Attr
slug: Web/API/Attr
page-type: web-api-interface
browser-compat: api.Attr
---

{{APIRef("DOM")}}

The **`Attr`** interface represents one of an element's attributes as an object. In most situations, you will directly retrieve the attribute value as a string (e.g., {{domxref("Element.getAttribute()")}}), but some cases may require interacting with `Attr` instances (e.g., {{domxref("Element.getAttributeNode()")}}).

{{InheritanceDiagram}}

The core idea of an object of type `Attr` is the association between a _name_ and a _value_. An attribute may also be part of a _namespace_ and, in this case, it also has a URI identifying the namespace, and a prefix that is an abbreviation for the namespace.

The name is deemed _local_ when it ignores the eventual namespace prefix and deemed _qualified_ when it includes the prefix of the namespace, if any, separated from the local name by a colon (`:`). We have three cases: an attribute outside of a namespace, an attribute inside a namespace without a prefix defined, an attribute inside a namespace with a prefix:

| Attribute | Namespace name | Namespace prefix | Attribute local name | Attribute qualified name |
| --------- | -------------- | ---------------- | -------------------- | ------------------------ |
| `myAttr`  | _none_         | _none_           | `myAttr`             | `myAttr`                 |
| `myAttr`  | `mynamespace`  | _none_           | `myAttr`             | `myAttr`                 |
| `myAttr`  | `mynamespace`  | `myns`           | `myAttr`             | `myns:myAttr`            |

> [!NOTE]
> This interface represents only attributes present in the tree representation of the {{domxref("Element")}}, being a SVG, an HTML or a MathML element. It doesn't represent the _property_ of an interface associated with such element, such as {{domxref("HTMLTableElement")}} for a {{HTMLElement("table")}} element. (See {{Glossary("Attribute", "this article")}} for more information about attributes and how they are _reflected_ into properties.)

## Instance properties

_This interface also inherits the properties of its parent interfaces, {{domxref("Node")}} and {{domxref("EventTarget")}}._

- {{domxref("Attr.localName", "localName")}} {{ReadOnlyInline}}
  - : A string representing the local part of the qualified name of the attribute.
- {{domxref("Attr.name", "name")}} {{ReadOnlyInline}}
  - : The attribute's _qualified name_. If the attribute is not in a namespace, it will be the same as {{domxref("attr.localName", "localName")}} property.
- {{domxref("Attr.namespaceURI", "namespaceURI")}} {{ReadOnlyInline}}
  - : A string representing the URI of the namespace of the attribute, or `null` if there is no namespace.
- {{domxref("Attr.ownerElement", "ownerElement")}} {{ReadOnlyInline}}
  - : The {{domxref("Element")}} the attribute belongs to.
- {{domxref("Attr.prefix", "prefix")}} {{ReadOnlyInline}}
  - : A string representing the namespace prefix of the attribute, or `null` if a namespace without prefix or no namespace are specified.
- {{domxref("Attr.specified", "specified")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : This property always returns `true`.
- {{domxref("Attr.value", "value")}}
  - : The attribute's value, a string that can be set and get using this property.

## Instance methods

_This interface has no specific methods, but inherits the methods of its parent interfaces, {{domxref("Node")}} and {{domxref("EventTarget")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other nodes are {{domxref("CDATASection")}}, {{domxref("CharacterData")}}, {{domxref("Comment")}}, {{domxref("Document")}}, {{domxref("Element")}}, {{domxref("ProcessingInstruction")}}, and {{domxref("Text")}}.
