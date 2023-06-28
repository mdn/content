---
title: "CSSImportRule: supportsText property"
short-title: supportsText
slug: Web/API/CSSImportRule/supportsText
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.CSSImportRule.supportsText
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

The read-only **`supportsText`** property of the {{domxref("CSSImportRule")}} interface returns the supports condition specified by the {{cssxref("@import")}} [at-rule](/en-US/docs/Web/CSS/At-rule).

## Value

A string, or `null`.

## Examples

The document's single stylesheet contains three {{cssxref("@import")}} rules. The first declaration imports a stylesheet if `display: flex` is supported. The second declaration imports a stylesheet if the `:has` selector is supported. The third declaration imports a stylesheet without a supports condition.

The `supportsText` property returns the import conditions associated with the at-rule.

```css
@import url("style1.css") supports(display: flex);
@import url("style2.css") supports(selector(p:has(a)));
@import url("style3.css");
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].supportsText); // returns `"display: flex"`
console.log(myRules[1].supportsText); // returns `"selector(p:has(a))"`
console.log(myRules[2].supportsText); // returns `null`
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using feature queries](/en-US/docs/Web/CSS/CSS_Conditional_Rules/Using_Feature_Queries)
- {{cssxref("@import")}} and {{cssxref("@supports")}}
