---
title: CSSStyleSheet.removeRule()
slug: Web/API/CSSStyleSheet/removeRule
page-type: web-api-instance-method
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
  - legacy
  - remove
  - removeRule
  - Deprecated
browser-compat: api.CSSStyleSheet.removeRule
---
{{APIRef("CSSOM")}}{{deprecated_header}}

The obsolete {{domxref("CSSStyleSheet")}} method
**`removeRule()`** removes a rule from the stylesheet
object. It is functionally identical to the standard, preferred method
{{domxref("CSSStyleSheet.deleteRule", "deleteRule()")}}.

> **Note:** This is a _legacy method_ which has been replaced by
> the standard method {{domxref("CSSStyleSheet.deleteRule", "deleteRule()")}}. You
> should use that instead.

## Syntax

```js
removeRule(index)
```

### Parameters

- `index`
  - : The index into the stylesheet's {{domxref("CSSRuleList")}} indicating the rule to be
    removed.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example removes the first rule from the stylesheet `myStyles`.

```js
 myStyles.removeRule(0);
```

You can rewrite this to use the standard `deleteRule()` method very easily:

```js
myStyles.deleteRule(0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model)
- [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- {{domxref("CSSStyleSheet.insertRule", "insertRule()")}}
