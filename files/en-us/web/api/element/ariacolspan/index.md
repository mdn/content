---
title: Element.ariaColSpan
slug: Web/API/Element/ariaColSpan
tags:
  - API
  - Property
  - Reference
  - ariaColSpan
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaColSpan
---
{{DefaultAPISidebar("DOM")}}

The **`ariaColSpan`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-colspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) attribute, which defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

## Syntax

```js
var ariaColSpan = element.ariaColSpan;
element.ariaColSpan = ariaColSpan
```

### Value

A {{domxref("DOMString")}} which contains an integer.

## Examples

In this example the `aria-colspan` attribute on the element with an ID of `spanning-heading` is set to "2". Using `ariaColSpan` we update the value to "3".

```html
<table>
  <tr>
    <th>Heading 1</th>
    <th>Heading 2</th>
    <th>Heading 3</td>
  </tr>
  <tr>
    <td colspan="2" aria-colspan="2" id="spanning-column">Spanning</td>
    <td>One</td>
  </tr>
</table>
```

```js
let el = document.getElementById('spanning-column');
console.log(el.ariaColSpan);
el.ariaColSpan = "3";
console.log(el.ariaColSpan);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: table role](/en-US/docs/Web/Accessibility/ARIA/Roles/Table_Role)
