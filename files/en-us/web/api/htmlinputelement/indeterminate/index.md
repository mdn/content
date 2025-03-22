---
title: "HTMLInputElement: indeterminate property"
short-title: indeterminate
slug: Web/API/HTMLInputElement/indeterminate
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.indeterminate
---

{{APIRef("HTML DOM")}}

The **`indeterminate`** property of the {{domxref("HTMLInputElement")}} interface returns a boolean value that indicates whether the checkbox is in the _indeterminate_ state. For example, a "select all/deselect all" checkbox may be in the indeterminate state when some but not all of its sub-controls are checked. The `indeterminate` state can only be set via JavaScript and is only relevant to [`checkbox`](/en-US/docs/Web/HTML/Element/input/checkbox) controls.

It is unrelated to the {{domxref("HTMLInputElement.checked")}} property, and an indeterminate checkbox can be either checked or unchecked. Being indeterminate only affects the checkbox's appearance (see example below), not its presence when submitted (which is controlled by the checkedness).

## Value

A boolean.

## Examples

```html
<input type="checkbox" id="indeterminate-checkbox" />
<label for="indeterminate-checkbox">Indeterminate checkbox</label>
```

```js
const checkbox = document.getElementById("indeterminate-checkbox");
checkbox.indeterminate = true;
```

{{EmbedLiveSample("examples", "", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement")}}
- {{domxref("HTMLInputElement.checked")}}
- {{HTMLElement("input")}}
- [Indeterminate state checkboxes](/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)
- CSS {{cssxref(":indeterminate")}} property
