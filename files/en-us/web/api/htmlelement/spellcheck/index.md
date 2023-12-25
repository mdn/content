---
title: "HTMLElement: spellcheck property"
short-title: spellcheck
slug: Web/API/HTMLElement/spellcheck
page-type: web-api-instance-property
browser-compat: api.HTMLElement.spellcheck
---

{{APIRef("HTML DOM")}}

The **`spellcheck`** property of the {{domxref("HTMLElement")}} interface gets and sets a {{jsxref("Boolean")}} indicating if the spell and grammar of the element will be checked.

It reflects the value of the [`spellcheck`](/en-US/docs/Web/HTML/Global_attributes/spellcheck) HTML global attribute.

## Value

A {{jsxref("Boolean")}}, `true` if the spell and grammar of the element will be checked, `false` otherwise.

## Examples

The following example shows how to enable or disable the element's ability to drag via script:

```js
const spellcheckElement = document.querySelector(".spellcheck-element");
const noSpellcheckElement = document.querySelector(".no-spellcheck-element");

// enable the spell and grammar of the element to be checked
if (!spellcheckElement.spellcheck) {
  spellcheckElement.spellcheck = true;
}

// disable the spell and grammar of the element to be checked
if (noSpellcheckElement.spellcheck) {
  noSpellcheckElement.spellcheck = false;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`spellcheck`](/en-US/docs/Web/HTML/Global_attributes#spellcheck) HTML global attribute
