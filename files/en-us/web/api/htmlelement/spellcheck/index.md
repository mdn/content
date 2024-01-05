---
title: "HTMLElement: spellcheck property"
short-title: spellcheck
slug: Web/API/HTMLElement/spellcheck
page-type: web-api-instance-property
browser-compat: api.HTMLElement.spellcheck
---

{{APIRef("HTML DOM")}}

The **`spellcheck`** property of the {{domxref("HTMLElement")}} interface represents a boolean value that controls the [spell-checking](/en-US/docs/Web/HTML/Global_attributes/spellcheck) hint. It is available on all HTML elements, though it doesn't affect all of them.

It reflects the value of the [`spellcheck`](/en-US/docs/Web/HTML/Global_attributes/spellcheck) HTML global attribute.

## Value

A boolean value that is `true` if the spelling and grammar of the text content in the element may be checked, `false` otherwise.

## Examples

The following example shows how to control the [spell-checking](/en-US/docs/Web/HTML/Global_attributes/spellcheck) hint via script:

```html
<div>
  <span id="spellcheck-label">The spelling and grammar may be checked:</span>
</div>
<div>
  <span id="spellcheck-element" contenteditable="true" spellcheck="true"
    >testt</span
  >
</div>
<div>
  <span
    >Change the checkbox to enable or disable spelling and grammar check</span
  >
</div>
<div>
  <input id="spellcheck-controller" type="checkbox" checked />
</div>
```

```js
const label = document.getElementById("spellcheck-label");
const element = document.getElementById("spellcheck-element");
const controller = document.getElementById("spellcheck-controller");

controller.addEventListener("change", (e) => {
  if (controller.checked) {
    element.spellcheck = true;
    label.innerText = "The spelling and grammar may be checked:";
  } else {
    element.spellcheck = false;
    label.innerText = "The spelling and grammar will not be checked:";
  }
});
```

{{EmbedLiveSample('Examples', 600, 200)}}

Note that you must enable the browser setting to check spelling and grammar.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`spellcheck`](/en-US/docs/Web/HTML/Global_attributes#spellcheck) HTML global attribute
