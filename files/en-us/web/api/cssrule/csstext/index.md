---
title: CSSRule.cssText
slug: Web/API/CSSRule/cssText
page-type: web-api-instance-property
tags:
  - API
  - CSSOM
  - Property
  - Reference
browser-compat: api.CSSRule.cssText
---
{{APIRef("CSSOM") }}

The **`cssText`** property of the {{domxref("CSSRule")}}
interface returns the actual text of a {{domxref("CSSStyleSheet")}} style-rule.

> **Note:** Do not confuse this property with element-style
> {{domxref("CSSStyleDeclaration.cssText")}}.

Be aware that this property can no longer be set directly, as it is [now specified](https://www.w3.org/TR/cssom-1/#changes-from-5-december-2013)
to be _functionally_ modify-only, and silently so. In other words, attempting to
set it _does absolutely nothing_, and doesn't even omit a warning or error.
Furthermore, it has no settable sub-properties. Therefore, to modify it, use the
stylesheet's {{domxref("CSSRuleList", "cssRules")}}`[index]` properties
{{domxref("CSSStyleRule.selectorText", ".selectorText")}} and
{{domxref("CSSStyleRule.style", ".style")}} (or its sub-properties). See [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) for details.

## Value

A string containing the actual text of the {{domxref("CSSStyleSheet")}} rule.

## Examples

```css
body {
  background-color: darkblue;
}
```

```js
let stylesheet = document.styleSheets[0];
console.log(stylesheet.cssRules[0].cssText); // body { background-color: darkblue; }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
