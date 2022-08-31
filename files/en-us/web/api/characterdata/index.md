---
title: CharacterData
slug: Web/API/CharacterData
page-type: web-api-interface
tags:
  - Interface
  - Reference
browser-compat: api.CharacterData
---
{{APIRef("DOM")}}

The **`CharacterData`** abstract interface represents a {{domxref("Node")}} object that contains characters. This is an abstract interface, meaning there aren't any objects of type `CharacterData`: it is implemented by other interfaces like {{domxref("Text")}}, {{domxref("Comment")}}, {{domxref("CDATASection")}}, or {{domxref("ProcessingInstruction")}}, which aren't abstract.

{{InheritanceDiagram}}

## Properties

_This interface also inherits properties from its parents, {{domxref("Node")}} and {{domxref("EventTarget")}}._

- {{domxref("CharacterData.data")}}
  - : A string representing the textual data contained in this object.
- {{domxref("CharacterData.length")}} {{ReadOnlyInline}}
  - : Returns a number representing the size of the string contained in the object.
- {{domxref("CharacterData.nextElementSibling")}} {{ReadOnlyInline}}
  - : Returns the first {{domxref("Element")}} that _follows_ this node, and is a sibling.
- {{domxref("CharacterData.previousElementSibling")}} {{ReadOnlyInline}}
  - : Returns the first {{domxref("Element")}} that _precedes_ this node, and is a sibling.

## Methods

_This interface also inherits methods from its parents, {{domxref("Node")}} and {{domxref("EventTarget")}}._

- {{domxref("CharacterData.after()")}}
  - : Inserts a set of {{domxref("Node")}} objects or strings in the children list of the
    `CharacterData`'s parent, just after the `CharacterData` object.
- {{domxref("CharacterData.appendData()")}}
  - : Appends the given string to the `CharacterData.data` string; when this method returns, `data` contains the concatenated string.
- {{domxref("CharacterData.before()")}}
  - : Inserts a set of {{domxref("Node")}} objects or strings in the children list of the
    `CharacterData`'s parent, just before the `CharacterData` object.
- {{domxref("CharacterData.deleteData()")}}
  - : Removes the specified amount of characters, starting at the specified offset, from the `CharacterData.data` string; when this method returns, `data` contains the shortened string.
- {{domxref("CharacterData.insertData()")}}
  - : Inserts the specified characters, at the specified offset, in the `CharacterData.data` string; when this method returns, `data` contains the modified string.
- {{domxref("CharacterData.remove()")}}
  - : Removes the object from its parent children list.
- {{domxref("CharacterData.replaceData()")}}
  - : Replaces the specified amount of characters, starting at the specified offset, with the specified string; when this method returns, `data` contains the modified string.
- {{DOMxRef("CharacterData.replaceWith()")}}
  - : Replaces the characters in the children list of its parent with a set of {{domxref("Node")}} objects or strings.
- {{domxref("CharacterData.substringData()")}}
  - : Returns a string containing the part of `CharacterData.data` of the specified length and starting at the specified offset.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM overview page](/en-US/docs/Web/API/Document_Object_Model).
- The concrete interfaces implemented it: {{domxref("Text")}}, {{domxref("CDATASection")}}, {{domxref("ProcessingInstruction")}}, and {{domxref("Comment")}}.
