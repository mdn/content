---
title: "Element: ariaPosInSet property"
short-title: ariaPosInSet
slug: Web/API/Element/ariaPosInSet
page-type: web-api-instance-property
browser-compat: api.Element.ariaPosInSet
---

{{DefaultAPISidebar("DOM")}}

The **`ariaPosInSet`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) attribute, which defines an element's number or position in the current set of listitems or treeitems.

## Value

A string containing an integer.

## Examples

In this example the `aria-posinset` attribute on the element with an ID of `article2` is set to "2". Using `ariaPosInSet` we update the value to "3".

```html
<article id="article1" aria-posinset="1">…</article>
<article id="article2" aria-posinset="2">…</article>
```

```js
let el = document.getElementById("article2");
console.log(el.ariaPosInSet); // "2"
el.ariaPosInSet = "3";
console.log(el.ariaPosInSet); // "3"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
