---
title: CSSGroupingRule.insertRule()
slug: Web/API/CSSGroupingRule/insertRule
page-type: web-api-instance-method
tags:
  - API
  - CSSOM
  - CSSGroupingRule
  - Method
  - Reference
browser-compat: api.CSSGroupingRule.insertRule
---
{{ APIRef("CSSOM") }}

The **`insertRule()`** method of the
{{domxref("CSSGroupingRule")}} interface adds a new CSS rule to a list of CSS rules.

## Syntax

```js
insertRule(rule)
insertRule(rule, index)
```

### Parameters

- `rule`
  - : A string
- `index` {{optional_inline}}
  - : An optional index at which to insert the rule; defaults to 0.

### Return value

The index of the new rule.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if _index_ is greater than the number of child CSS rules.
- `HierarchyRequestError` {{domxref("DOMException")}}
  - : Thrown if, due to constraints specified by CSS, the new rule cannot be inserted into
    the list at the (zero-index) index position given.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the new rule is an `@namespace` at-rule, and the list of child CSS rules contains anything other than `@import` at-rules and `@namespace` at-rules.

## Examples

```js
let myRules = document.styleSheets[0].cssRules;
myRules[0].insertRule('html {background-color: blue;}',0); /* inserts a rule for the HTML element at position 0 */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
