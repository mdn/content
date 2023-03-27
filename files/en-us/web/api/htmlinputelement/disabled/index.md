---
title: HTMLInputElement.disabled
slug: Web/API/HTMLInputElement/disabled
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.disabled
---

{{ APIRef("HTML DOM") }}

The **`HTMLInputElement.disabled`** property is a boolean value that reflects the [`disabled`](/en-US/docs/Web/HTML/Element/input#disabled) HTML attribute, which indicates whether the control is disabled. If it is disabled, it does not accept clicks. A disabled element is unusable and un-clickable.

## Value

A boolean value.

## Examples

### HTML

```html
<p>
  <label>
    <input id="check-box" name="b" value="1" type="checkbox" disabled /> Check
    this box!
  </label>
</p>
<p>
  <label>
    <input id="toggle-box" name="b" value="2" type="checkbox" /> Enable the
    other checkbox.
  </label>
</p>
```

### JavaScript

```js
const checkBox = document.getElementById("check-box");
const toggleBox = document.getElementById("toggle-box");

toggleBox.addEventListener(
  "change",
  (event) => {
    checkBox.disabled = !event.target.checked;
  },
  false
);
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
