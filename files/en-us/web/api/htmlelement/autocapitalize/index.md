---
title: "HTMLElement: autocapitalize property"
short-title: autocapitalize
slug: Web/API/HTMLElement/autocapitalize
page-type: web-api-instance-property
browser-compat: api.HTMLElement.autocapitalize
---

{{APIRef("HTML DOM")}}

The **`autocapitalize`** property of the {{domxref("HTMLElement")}} interface represents the element's capitalization behavior for user input. Valid values are: `none`, `off`, `characters`, `words`, `sentences`. It is available on all HTML elements, though it doesn't affect all of them.

It reflects the value of the [`autocapitalize`](/en-US/docs/Web/HTML/Global_attributes/autocapitalize) HTML global attribute.

## Value

A string that represents the element's capitalization behavior for user input. Valid values are: `none`, `off`, `characters`, `words`, `sentences`.

## Examples

The following example shows how to control the [spell-checking](/en-US/docs/Web/HTML/Global_attributes/spellcheck) hint via script:

```html
<div>
  <span id="sc-label">The spelling and grammar may be checked: </span>
  <span id="sc-element" contenteditable="true" spellcheck="true">test</span>
</div>
<input id="spellcheck-controller" type="checkbox" checked />Enable spelling and
grammar check
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

- [`autocapitalize`](/en-US/docs/Web/HTML/Global_attributes#autocapitalize) HTML global attribute
