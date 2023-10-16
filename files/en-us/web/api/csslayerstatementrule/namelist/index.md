---
title: "CSSLayerStatementRule: nameList property"
short-title: nameList
slug: Web/API/CSSLayerStatementRule/nameList
page-type: web-api-instance-property
browser-compat: api.CSSLayerStatementRule.nameList
---

{{APIRef("CSSOM")}}

The read-only **`nameList`** property of the {{DOMxRef("CSSLayerStatementRule")}} interface return the list of associated cascade layer names. The names can't be modified.

## Value

A {{jsxref("Array")}} of strings, each representing a cascade layer represented by the {{cssxref("@layer")}} statement rule.

## Examples

### HTML

```html
<div></div>
```

### CSS

```css
@layer layerName, layerName2;

@layer layerName3 {
  div {
    font-family: serif;
  }
}
```

### JavaScript

```js
const item = document.getElementsByTagName("div")[0];
const rules = document.styleSheets[1].cssRules;
// Note that stylesheet #1 is the stylesheet associated with this embedded example,
// while stylesheet #0 is the stylesheet associated with the whole MDN page

const layerStatementRule = rules[0]; // A CSSLayerStatementRule
const layerBlockRule = rules[1]; // A CSSLayerBlockRule; no nameList property.

item.textContent = `@layer declares the following layers: ${layer.nameList.join(
  ", ",
)}.`;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMXRef("CSSLayerBlockRule.name")}}
- {{CSSXref("@layer")}}
- [The `@layer` statement at-rule for named layers](/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
