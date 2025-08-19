---
title: "CSSGroupingRule: insertRule() method"
short-title: insertRule()
slug: Web/API/CSSGroupingRule/insertRule
page-type: web-api-instance-method
browser-compat: api.CSSGroupingRule.insertRule
---

{{ APIRef("CSSOM") }}

The **`insertRule()`** method of the
{{domxref("CSSGroupingRule")}} interface adds a new CSS rule to a list of CSS rules.

## Syntax

```js-nolint
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
  - : Thrown if `rule` cannot be inserted at the specified index due to some CSS constraint.
- `HierarchyRequestError` {{domxref("DOMException")}}
  - : Thrown if the `rule` is a valid statement but not a [nested statement](/en-US/docs/Web/CSS/CSS_syntax/Syntax#nested_statements).

## Examples

```js
let myRules = document.styleSheets[0].cssRules;
myRules[0].insertRule(
  "html {background-color: blue;}",
  0,
); /* inserts a rule for the HTML element at position 0 */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
