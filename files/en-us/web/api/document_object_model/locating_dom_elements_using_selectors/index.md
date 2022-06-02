---
title: Locating DOM elements using selectors
slug: Web/API/Document_object_model/Locating_DOM_elements_using_selectors
page-type: guide
tags:
  - Beginner
  - DOM
  - NeedsBeginnerUpdate
---
{{DefaultAPISidebar("DOM")}}

The Selectors API provides methods that make it quick and easy to retrieve {{domxref("Element")}} nodes from the DOM by matching against a set of [selectors](/en-US/docs/Web/CSS/CSS_Selectors). This is much faster than past techniques, wherein it was necessary to, for example, use a loop in JavaScript code to locate the specific items you needed to find.

## The NodeSelector interface

This specification adds two new methods to any objects implementing the {{domxref("Document")}}, {{domxref("DocumentFragment")}}, or {{domxref("Element")}} interfaces:

- {{domxref("Element.querySelector", "querySelector()")}}
  - : Returns the first matching {{domxref("Element")}} node within the node's subtree. If no matching node is found, `null` is returned.
- {{domxref("Element.querySelectorAll", "querySelectorAll()")}}
  - : Returns a {{domxref("NodeList")}} containing all matching `Element` nodes within the node's subtree, or an empty `NodeList` if no matches are found.

> **Note:** The {{domxref("NodeList")}} returned by {{domxref("Element.querySelectorAll()", "querySelectorAll()")}} is not live, which means that changes in the DOM are not reflected in the collection. This is different from other DOM querying methods that return live node lists.

You may find examples and details by reading the documentation for the {{domxref("Element.querySelector()")}} and {{domxref("Element.querySelectorAll()")}} methods.

## Selectors

The selector methods accept [selectors](/en-US/docs/Web/CSS/CSS_Selectors) to determine what element or elements should be returned. This includes [selector lists](/en-US/docs/Web/CSS/Selector_list) so you can group multiple selectors in a single query.

To protect the user's privacy, some [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) are not supported or behave differently. For example {{cssxref(":visited")}} will return no matches and {{cssxref(":link")}} is treated as {{cssxref(":any-link")}}.

Only elements can be selected, so [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) are not supported.

## Examples

To select all paragraph (`p`) elements in a document whose classes include `warning` or `note`, you can do the following:

```js
const special = document.querySelectorAll("p.warning, p.note");
```

You can also query by ID. For example:

```js
const el = document.querySelector("#main, #basic, #exclamation");
```

After executing the above code, `el` contains the first element in the document whose ID is one of `main`, `basic`, or `exclamation`.

## See also

- [Selectors specification](https://drafts.csswg.org/selectors/)
- [CSS Selectors](/en-US/docs/Web/CSS/CSS_Selectors)
- {{domxref("Element.querySelector()")}}
- {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}}
- {{domxref("Document.querySelectorAll()")}}
