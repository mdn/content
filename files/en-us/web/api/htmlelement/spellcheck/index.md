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

```js
const spellcheckElement = document.querySelector(".spellcheck-element");
const noSpellcheckElement = document.querySelector(".no-spellcheck-element");

// The spelling and grammar of text content in the element may be checked
if (!spellcheckElement.spellcheck) {
  spellcheckElement.spellcheck = true;
}

// The spelling and grammar of text content in the element may not be checked
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
