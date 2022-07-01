---
title: CSSStyleDeclaration.cssText
slug: Web/API/CSSStyleDeclaration/cssText
page-type: web-api-instance-property
tags:
  - API
  - CSSOM
  - NeedsSpecTable
  - Reference
browser-compat: api.CSSStyleDeclaration.cssText
---
{{APIRef("CSSOM")}}

The **`cssText`** property of the {{domxref("CSSStyleDeclaration")}} interface returns or sets the text of the element's **inline** style declaration only.

To be able to set a **stylesheet** rule dynamically, see [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information).

Not to be confused with stylesheet style-rule {{domxref("CSSRule.cssText")}}.

## Value

A string containing the text of the element's inline style declaration.

## Example

```html
<span id="s1" style="color: red;">
  Some text
</span>

<script>
  const elem = document.getElementById("s1");
  alert(elem.style.cssText); // "color: red;"
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
