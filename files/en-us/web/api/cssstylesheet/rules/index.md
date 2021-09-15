---
title: CSSStyleSheet.rules
slug: Web/API/CSSStyleSheet/rules
tags:
  - API
  - CSS
  - CSSOM
  - CSSOM API
  - CSSStyleSheet
  - Layout
  - Object Model
  - Property
  - Read-only
  - Reference
  - Style
  - StyleSheet
  - legacy
  - Deprecated
browser-compat: api.CSSStyleSheet.rules
---
{{APIRef("CSSOM")}}{{deprecated_header}}

**`rules`** is a _deprecated_
_legacy property_ of the {{domxref("CSSStyleSheet")}} interface. Functionally
identical to the preferred {{domxref("CSSStyleSheet.cssRules", "cssRules")}} property,
it provides access to a live-updating list of the CSS rules comprising the
stylesheet.

> **Note:** As a legacy property, you not use `rules` and
> should instead use the preferred {{domxref("CSSStyleSheet.cssRules", "cssRules")}}.
> While `rules` is unlikely to be removed soon, its availability is not as
> widespread and using it will result in compatibility problems for your site or app.

## Syntax

```js
var rules = cssStyleSheet.rules;
```

### Value

A live-updating {{domxref("CSSRuleList")}} containing each of the CSS rules making up
the stylesheet. Each entry in the rule list is a {{domxref("CSSRule")}} object
describing one rule making up the stylesheet.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model)
- [Using
  dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
