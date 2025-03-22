---
title: "HTMLOptionElement: disabled property"
short-title: disabled
slug: Web/API/HTMLOptionElement/disabled
page-type: web-api-instance-property
browser-compat: api.HTMLOptionElement.disabled
---

{{ APIRef("HTML DOM") }}

The **`disabled`** property of the {{domxref("HTMLOptionElement")}} is a boolean value that indicates whether the {{htmlelement("option")}} element is unavailable to be selected. The property reflects the value of the [`disabled`](/en-US/docs/Web/HTML/Element/option#disabled) HTML attribute.

The property reflects the value of the `disabled` attribute on the `<option>` element itself. If an option is disabled because it is a child of an {{HTMLElement("optgroup")}} element that is disabled, the `true` of the {{domxref("HTMLOptGroupElement.disabled")}} property is not inherited by the option itself.

## Value

A boolean value.

## Examples

### HTML

```html
<label for="drink-options">Drink selection:</label>
<select id="drink-options">
  <option value="water">Water</option>
  <option value="lemonade">Lemonade</option>
  <option value="beer">Beer</option>
  <option value="whisky" disabled>Whisky</option>
</option>
```

### JavaScript

```js
const drinks = document.querySelectorAll("#drink-options option");
console.log(drinks[0].disabled); // false
console.log(drinks[3].disabled); // true
drinks[1].disabled = true; // disables the beer option
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("option")}}
- {{HTMLElement("select")}}
- {{HTMLElement("optgroup")}}
- {{DOMxRef("HTMLSelectElement.disabled")}}
- {{DOMxRef("HTMLOptGroupElement.disabled")}}
- {{DOMxRef("HTMLOptionElement.selected")}}
- {{DOMxRef("HTMLOptionElement.index")}}
- {{DOMxRef("HTMLOptionsCollection")}}
- {{cssxref(":disabled")}}
