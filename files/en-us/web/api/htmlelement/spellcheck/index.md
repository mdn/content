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
  <span id="sc-label">The spelling and grammar may be checked: </span>
  <span id="sc-element" contenteditable="true" spellcheck="true">test</span>
</div>
<input id="sc-controller" type="checkbox" checked />Enable spelling and grammar
check
```

```js
const label = document.getElementById("sc-label");
const element = document.getElementById("sc-element");
const controller = document.getElementById("sc-controller");

controller.addEventListener("change", (e) => {
  if (controller.checked) {
    element.spellcheck = true;
    label.innerText = "The spelling and grammar may be checked: ";
  } else {
    element.spellcheck = false;
    label.innerText = "The spelling and grammar may not be checked: ";
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

- [`spellcheck`](/en-US/docs/Web/HTML/Global_attributes/spellcheck) HTML global attribute
