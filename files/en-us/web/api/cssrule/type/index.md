---
title: "CSSRule: type property"
short-title: type
slug: Web/API/CSSRule/type
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.CSSRule.type
---

{{APIRef("CSSOM")}}{{Deprecated_header}}

The read-only **`type`** property of the
{{domxref("CSSRule")}} interface is a deprecated property that returns an integer
indicating which type of rule the {{domxref("CSSRule")}} represents.

If you need to distinguish different types of CSS rule, a good alternative is to use [`constructor.name`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name):

```js
const sheets = Array.from(document.styleSheets);
const rules = sheets.map((sheet) => Array.from(sheet.cssRules)).flat();

for (const rule of rules) {
  console.log(rule.constructor.name);
}
```

## Value

- `CSSRule.STYLE_RULE` (`1`)
  - : The rule is a {{domxref("CSSStyleRule")}}, the most common kind of rule: `selector { prop1: val1; prop2: val2; }`.
- `CSSRule.IMPORT_RULE` (`3`)
  - : The rule is a {{domxref("CSSImportRule")}} and represents an {{cssxref("@import")}} rule.
- `CSSRule.MEDIA_RULE` (`4`)
  - : The rule is a {{domxref("CSSMediaRule")}}.
- `CSSRule.FONT_FACE_RULE` (`5`)
  - : The rule is a {{domxref("CSSFontFaceRule")}}
- `CSSRule.PAGE_RULE` (`6`)
  - : The rule is a {{domxref("CSSPageRule")}}.
- `CSSRule.KEYFRAMES_RULE` (`7`)
  - : The rule is a {{domxref("CSSKeyframesRule")}}.
- `CSSRule.KEYFRAME_RULE` (`8`)
  - : The rule is a {{domxref("CSSKeyframeRule")}}.
- `CSSRule.NAMESPACE_RULE` (`10`)
  - : The rule is a {{domxref("CSSNamespaceRule")}}.
- `CSSRule.COUNTER_STYLE_RULE` (`11`)
  - : The rule is a {{domxref("CSSCounterStyleRule")}}.
- `CSSRule.SUPPORTS_RULE` (`12`)
  - : The rule is a {{domxref("CSSSupportsRule")}}.
- `CSSRule.FONT_FEATURE_VALUES_RULE` (`14`)
  - : The rule is a {{domxref("CSSFontFeatureValuesRule")}}.

The values `CSSRule.UNKNOWN_RULE` (`0`), `CSSRule.CHARSET_RULE` (`2`), `CSSRule.DOCUMENT_RULE` (`13`), `CSSRule.VIEWPORT_RULE` (`14`), and `CSSRule.REGION_STYLE_RULE` (`16`) cannot be obtained anymore.

## Examples

```js
const rules = document.styleSheets[0].cssRules;
console.log(rules[0].type);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
