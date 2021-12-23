---
title: CSSRule.parentRule
slug: Web/API/CSSRule/parentRule
tags:
  - API
  - CSSOM
  - CSSRule
  - Property
  - Reference
browser-compat: api.CSSRule.parentRule
---
{{ APIRef("CSSOM") }}

The **`parentRule`** property of the {{domxref("CSSRule")}}
interface returns the containing rule of the current rule if this exists, or otherwise
returns null.

## Syntax

```js
var parentRule = cssRule.parentRule
```

### Values

- `parentRule`
  - : A {{domxref("CSSRule")}} which is the type of the containing rules. If the current
    rule is inside a media query, this would return {{domxref("CSSMediaRule")}}. Otherwise
    it returns null.

## Example

```css
@media (min-width: 500px) {
  .box {
    width: 100px;
    height: 200px;
    background-color: red;
  }

  body {
    color: blue;
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let childRules = myRules[0].cssRules;
console.log(childRules[0].parentRule); // a CSSMediaRule
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
