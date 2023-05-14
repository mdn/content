---
title: HTMLOptionsCollection
slug: Web/API/HTMLOptionsCollection
page-type: web-api-interface
browser-compat: api.HTMLOptionsCollection
---

{{ APIRef("HTML DOM") }}

The **`HTMLOptionsCollection`** interface represents a collection of [`<option>`](/en-US/docs/Web/HTML/Element/option) HTML elements (in document order) and offers methods and properties for selecting from the list as well as optionally altering its items. This object is returned only by the `options` property of [select](/en-US/docs/Web/API/HTMLSelectElement).

{{InheritanceDiagram}}

## Instance properties

- `length`
  - : `unsigned long`. Returns the number of elements in collection. Mozilla allows this, while other implementations could potentially throw a [DOMException](/en-US/docs/Web/API/DOMException).

- `selectedIndex`
  - : Returns the index of the first selected item, if any, or −1 if there is no selected item.

## Instance methods

-`add`
- : Inserts element before the node given by before. The before argument can be a number, in which case element is inserted before the item with that number, or an element from collection, in which case element is inserted before that element. If before is omitted, null, or a number out of range, then element will be added at the end of the list. Throws a "HierarchyRequestError" DOMException if element is an ancestor of the element into which it is to be inserted.
- : Has 4 overloads
    i. add(element : HTMLOptionElement, [before : HTMLElement]) : undefined
    ii. add(element : HTMLOptionElement, [before : Number]) : undefined
    iii. add(element : HTMLOptGroupElement, [before : HTMLElement]) : undefined
    iv. add(element : HTMLOptGroupElement, [before : Number]) : undefined
    
-`remove`
- : Removes the item with index index from collection.
  
 - `item`
  - : This method retrieves a node specified by ordinal index. Nodes are numbered in tree order (depth-first traversal order).

- `namedItem`
  - : This method retrieves a Node using a name. It first searches for a Node with a matching id attribute. If it doesn't find one, it then searches for a Node with a matching name attribute, but only on those elements that are allowed a name attribute. This method is case insensitive in HTML documents and case sensitive in XHTML documents.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTMLCollection](/en-US/docs/Web/API/HTMLCollection)
