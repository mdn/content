---
title: "Element: children property"
short-title: children
slug: Web/API/Element/children
page-type: web-api-instance-property
browser-compat: api.Element.children
---

{{ APIRef("DOM") }}

The read-only **`children`** property returns a live {{domxref("HTMLCollection")}}
which contains all of the child {{domxref("Element", "elements")}} of the element upon which it was called.

`Element.children` includes only element nodes. To get all child nodes, including non-element nodes like text and comment nodes, use {{domxref("Node.childNodes")}}.

## Value

An {{ domxref("HTMLCollection") }} which is a live, ordered collection of the DOM
elements which are children of `node`. You can access the
individual child nodes in the collection by using either the
{{domxref("HTMLCollection.item()", "item()")}} method on the collection, or by using
JavaScript array-style notation.

If the element has no element children, then `children` is an empty list with a
`length` of `0`.

## Examples

```js
const myElement = document.getElementById("foo");
for (const child of myElement.children) {
  console.log(child.tagName);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.childNodes")}}
