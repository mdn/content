---
title: "HTMLElement: translate property"
short-title: translate
slug: Web/API/HTMLElement/translate
page-type: web-api-instance-property
browser-compat: api.HTMLElement.translate
---

{{APIRef("HTML DOM")}}

The **`translate`** property of the {{domxref("HTMLElement")}} interface indicates whether an element's attribute values and the values of its {{domxref("Text")}} node children are to be translated when the page is localized, or whether to leave them unchanged.

It reflects the value of the [`translate`](/en-US/docs/Web/HTML/Global_attributes/translate) HTML global attribute.

## Value

A boolean value that is `true` if an element's attribute values and the values of its {{domxref("Text")}} node children are to be translated when the page is localized, `false` otherwise.

## Examples

The following example shows how to enable or disable translation via script:

```html
<div>
  <span>The content will always be translated:</span>
</div>
<div>
  <span translate="yes">El contenido será traducido</div>
</div>
<div>
  <span id="translate-label">The content will be translated:</span>
</div>
<div>
  <span id="translate-element" translate="no">El contenido puede ser traducido.</div>
</div>
<div>
  <span>Change the checkbox to enable or disable translation</span>
</div>
<div>
  <input id="translate-controller" type="checkbox" />
</div>
```

```js
const label = document.getElementById('translate-label')
const element = document.getElementById('translate-element')
const controller = document.getElementById('translate-controller')

controller.addEventListener('change', (e) => {
  if (controller.checked) {
    element.translate = true
    label.innerText = 'The content will be translated:'
  } else {
    element.translate = false
    label.innerText = 'The content will not be translated:'
  }
})
```

{{EmbedLiveSample('Examples', 600, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`translate`](/en-US/docs/Web/HTML/Global_attributes#translate) HTML global attribute
