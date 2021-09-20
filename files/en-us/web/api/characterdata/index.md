---
title: CharacterData
slug: Web/API/CharacterData
tags:
  - API
  - DOM
  - Interface
  - Node
browser-compat: api.CharacterData
---
{{APIRef("DOM")}}

The **`CharacterData`** abstract interface represents a {{domxref("Node")}} object that contains characters. This is an abstract interface, meaning there aren't any objects of type `CharacterData`: it is implemented by other interfaces like {{domxref("Text")}}, {{domxref("Comment")}}, or {{domxref("ProcessingInstruction")}}, which aren't abstract.

{{InheritanceDiagram}}

## Properties

_`CharacterData` inherits properties from its parent, {{domxref("Node")}}._

- {{domxref("CharacterData.data")}}
  - : Is a {{domxref("DOMString")}} representing the textual data contained in this object.
- {{domxref("CharacterData.length")}} {{readonlyInline}}
  - : Returns an `unsigned long` representing the size of the string contained in `CharacterData.data`.
- {{domxref("Element.nextElementSibling")}} {{readonlyInline}}
  - : Returns the {{domxref("Element")}} immediately following the specified one in its parent's children list, or `null` if the specified element is the last one in the list.
- {{domxref("Element.previousElementSibling")}} {{readonlyInline}}
  - : Returns the {{domxref("Element")}} immediately prior to the specified one in its parent's children list, or `null` if the specified element is the first one in the list.

## Methods

_`CharacterData` inherits methods from its parent, {{domxref("Node")}}._

- {{domxref("CharacterData.after()")}}
  - : Inserts a set of {{domxref("Node")}} or {{domxref("DOMString")}} objects in the children list of the
    `CharacterData`'s parent, just after the `CharacterData` object.
- {{domxref("CharacterData.appendData()")}}
  - : Appends the given {{domxref("DOMString")}} to the `CharacterData.data` string; when this method returns, `data` contains the concatenated {{domxref("DOMString")}}.
- {{domxref("CharacterData.before()")}}
  - : Inserts a set of {{domxref("Node")}} or {{domxref("DOMString")}} objects in the children list of the
    `CharacterData`'s parent, just before the `CharacterData` object.
- {{domxref("CharacterData.deleteData()")}}
  - : Removes the specified amount of characters, starting at the specified offset, from the `CharacterData.data` string; when this method returns, `data` contains the shortened {{domxref("DOMString")}}.
- {{domxref("CharacterData.insertData()")}}
  - : Inserts the specified characters, at the specified offset, in the `CharacterData.data` string; when this method returns, `data` contains the modified {{domxref("DOMString")}}.
- {{domxref("CharacterData.remove()")}}
  - : Removes the object from its parent children list.
- {{domxref("CharacterData.replaceData()")}}
  - : Replaces the specified amount of characters, starting at the specified offset, with the specified {{domxref("DOMString")}}; when this method returns, `data` contains the modified {{domxref("DOMString")}}.
- {{DOMxRef("CharacterData.replaceWith()")}}
  - : Replaces the characters in the children list of its parent with a set of {{domxref("Node")}} or {{domxref("DOMString")}} objects.
- {{domxref("CharacterData.substringData()")}}
  - : Returns a {{domxref("DOMString")}} containing the part of `CharacterData.data` of the specified length and starting at the specified offset.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model).
