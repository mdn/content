---
title: "HTMLElement: spellcheck property"
short-title: spellcheck
slug: Web/API/HTMLElement/spellcheck
page-type: web-api-instance-property
browser-compat: api.HTMLElement.spellcheck
---

{{APIRef("HTML DOM")}}

The **`spellcheck`** property of the {{domxref("HTMLElement")}} interface gets and sets a {{jsxref("Boolean")}} primitive indicating if spell and grammar of the element will be checked or will be act like its parent elements'.

It reflects the value of the [`spellcheck`](/en-US/docs/Web/HTML/Global_attributes/spellcheck) HTML global attribute.

## Value

A {{jsxref("Boolean")}} primitive that is `true` if spell and grammar of the element will be checked or will be act like its parent elements', `false` otherwise.

## Examples

The following example shows how to enable or disable spell and grammar check of the element via script:

```js
const spellcheckElement = document.querySelector(".spellcheck-element");
const noSpellcheckElement = document.querySelector(".no-spellcheck-element");

// enable spell and grammar check of the element
if (!spellcheckElement.spellcheck) {
  spellcheckElement.spellcheck = true;
}

// disable spell and grammar check of the element
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
