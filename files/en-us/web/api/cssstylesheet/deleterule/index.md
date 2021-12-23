---
title: CSSStyleSheet.deleteRule()
slug: Web/API/CSSStyleSheet/deleteRule
tags:
  - API
  - CSS
  - CSSOM
  - CSSOM API
  - CSSStyleSheet
  - Layout
  - Method
  - Object Model
  - Reference
  - Rule
  - StyleSheet
  - delete
  - deleteRule
  - remove
browser-compat: api.CSSStyleSheet.deleteRule
---
{{APIRef("CSSOM")}}

The {{domxref("CSSStyleSheet")}} method
**`deleteRule()`** removes a rule from the stylesheet
object.

## Syntax

```js
cssStyleSheet.deleteRule(index)
```

### Parameters

- `index`
  - : The index into the stylesheet's {{domxref("CSSRuleList")}} indicating the rule to be
    removed.

### Return value

`undefined`

## Example

This example removes the first rule from the stylesheet `myStyles`.

```js
 myStyles.deleteRule(0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model)
- [Using
  dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- {{domxref("CSSStyleSheet.insertRule", "insertRule()")}}
