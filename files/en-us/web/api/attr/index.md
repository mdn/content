---
title: Attr
slug: Web/API/Attr
tags:
  - API
  - DOM
browser-compat: api.Attr
---
{{APIRef("DOM")}}

The **`Attr`** interface represents one of a DOM element's attributes as an object. In most DOM methods, you will directly retrieve the attribute as a string (e.g., {{domxref("Element.getAttribute()")}}), but certain functions (e.g., {{domxref("Element.getAttributeNode()")}}) or means of iterating return `Attr` types.

{{InheritanceDiagram}}

> **Warning:** Starting in Gecko 7.0 {{geckoRelease("7.0")}}, a number of deprecated properties and methods output warning messages to the console. You should revise your code accordingly. See [Deprecated properties and methods](#deprecated_properties_and_methods) for a complete list.

## Properties

- {{domxref("Attr.name", "name")}} {{readOnlyInline}}
  - : The attribute's name.
- {{domxref("Attr.namespaceURI", "namespaceURI")}} {{readOnlyInline}}
  - : A {{domxref("DOMString")}} representing the namespace URI of the attribute, or `null` if there is no namespace.
- {{domxref("Attr.localName", "localName")}} {{readOnlyInline}}
  - : A {{domxref("DOMString")}} representing the local part of the qualified name of the attribute.
- {{domxref("Attr.prefix", "prefix")}} {{readOnlyInline}}
  - : A {{domxref("DOMString")}} representing the namespace prefix of the attribute, or `null` if no prefix is specified.
- {{domxref("Attr.ownerElement", "ownerElement")}} {{readOnlyInline}}

  - : The element holding the attribute.

    > **Note:** DOM Level 4 removed this property. The assumption was that since you get an `Attr` object from an {{domxref("Element")}}, you should already know the associated element.
    > As that doesn't hold true in cases like `Attr` objects being returned by {{domxref("Document.evaluate")}}, the DOM Living Standard reintroduced the property.
    >
    > Gecko outputs a deprecation note starting from Gecko 7.0 {{geckoRelease("7.0")}}. This note was removed again in Gecko 49.0 {{geckoRelease("49.0")}}.

- {{domxref("Attr.specified", "specified")}} {{readOnlyInline}}
  - : This property always returns `true`. Originally, it returned `true` if the attribute was explicitly specified in the source code or by a script, and `false` if its value came from the default one defined in the document's DTD.
- {{domxref("Attr.value", "value")}}
  - : The attribute's value.

## Deprecated properties and methods

The following properties have been deprecated. Where available, the appropriate replacement is noted.

- `attributes`
  - : This property now always returns `NULL`.
- `childNodes` {{deprecated_inline}}
  - : This property now always returns an empty {{domxref("NodeList")}}.
- `firstChild` {{deprecated_inline}}
  - : This property now always returns `NULL`.
- `isId` {{readOnlyInline}}
  - : Indicates whether the attribute is an "ID attribute". An "ID attribute" being an attribute which value is expected to be unique across a DOM Document. In HTML DOM, "id" is the only ID attribute, but XML documents could define others. Whether or not an attribute is unique is often determined by a {{Glossary("DTD")}} or other schema description.
- `lastChild` {{deprecated_inline}}
  - : This property now always returns `NULL`.
- `nextSibling`
  - : This property now always returns `NULL`.
- `nodeName`
  - : Use {{domxref("Attr.name")}} instead.
- `nodeType`
  - : This property now always returns 2 (`ATTRIBUTE_NODE`).
- `nodeValue`
  - : Use {{domxref("Attr.value")}} instead.
- `ownerDocument`
  - : You shouldn't have been using this in the first place, so you probably don't care that this is going away.
- `parentNode`
  - : This property now always returns `NULL`.
- `previousSibling`
  - : This property now always returns `NULL`.
- `schemaTypeInfo` {{deprecated_inline}} {{readOnlyInline}}
  - : The type information associated with this attribute. While the type information contained in this attribute is guaranteed to be correct after loading the document or invoking {{domxref("Document.normalizeDocument")}}, this property may not be reliable if the node was moved.
- `specified`
  - : This property now always returns `true`.
- `textContent`
  - : Use {{domxref("Attr.value")}} instead.

The following methods have been deprecated:

- `appendChild()` {{deprecated_inline}}
  - : Modify the value of {{domxref("Attr.value")}} instead.
- `cloneNode()`
  - : You shouldn't have been using this in the first place, so you probably don't care that this is going away.
- `createAttribute()`
  - : Use {{domxref("Element.setAttribute()")}} instead.
- `createAttributeNS()`
  - : Use {{domxref("Element.setAttributeNS()")}} instead.
- `getAttributeNode()`
  - : Use {{domxref("Element.getAttribute()")}} instead.
- `getAttributeNodeNS()`
  - : Use {{domxref("Element.getAttributeNS()")}} instead.
- `hasAttributes()` {{deprecated_inline}}
  - : This method now always returns false.
- `hasChildNodes()`
  - : This method now always returns false.
- `insertBefore()`
  - : Modify the value of {{domxref("Attr.value")}} instead.
- `isSupported()`
  - : You shouldn't have been using this in the first place, so you probably don't care that this is going away.
- `isEqualNode()`
  - : You shouldn't have been using this in the first place, so you probably don't care that this is going away.
- `normalize()`
  - : You shouldn't have been using this in the first place, so you probably don't care that this is going away.
- `removeAttributeNode()`
  - : Use {{domxref("Element.removeAttribute()")}} instead.
- `removeChild()` {{deprecated_inline}}
  - : Modify the value of {{domxref("Attr.value")}} instead.
- `replaceChild()` {{deprecated_inline}}
  - : Modify the value of {{domxref("Attr.value")}} instead.
- `setAttributeNode()`
  - : Use {{domxref("Element.setAttribute()")}} instead.
- `setAttributeNodeNS()`
  - : Use {{domxref("Element.setAttributeNS()")}} instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
