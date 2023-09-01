---
title: "Highlight: type property"
short-title: type
slug: Web/API/Highlight/type
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Highlight.type
---

{{APIRef("CSS Custom Highlight API")}}{{SeeCompatTable}}

The `type` property of the {{domxref("Highlight")}} interface is an enumerated {{jsxref("String")}} used to specify the meaning of the highlight. This allows assistive technologies, such as screen readers, to include this meaning when exposing the highlight to users.

By default, a highlight object will have its type set to `highlight`, but you can change it to `spelling-error` or `grammar-error`.

## Value

The possible values of the `type` enumerated value are:

- `highlight`
  - : This is the default highlight type. It does not have any specific meaning.
- `spelling-error`
  - : Use this type when the highlight is used to emphasize misspelled content.
- `grammar-error`
  - : Use this type when the highlight is used to emphasize content that is grammatically incorrect.

## Examples

```js
const spellErrorRange = new Range();
spellErrorRange.setStart(textNode, 10);
spellErrorRange.setEnd(textNode, 20);

const spellErrorsHighlight = new Highlight(spellErrorRange);

spellErrorsHighlight.type = "spelling-error";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
