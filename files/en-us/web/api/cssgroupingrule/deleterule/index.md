---
title: "CSSGroupingRule: deleteRule() method"
short-title: deleteRule()
slug: Web/API/CSSGroupingRule/deleteRule
page-type: web-api-instance-method
browser-compat: api.CSSGroupingRule.deleteRule
---

{{ APIRef("CSSOM") }}

The **`deleteRule()`** method of the
{{domxref("CSSGroupingRule")}} interface removes a CSS rule from a list of child CSS
rules.

## Syntax

```js-nolint
deleteRule(index)
```

### Parameters

- `index`
  - : The index of the rule to delete.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if _index_ is greater than or equal to the number of child CSS
    rules.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the rule being removed is an `@namespace` at-rule, and the list of child CSS rules contains anything other than `@import` at-rules and `@namespace` at-rules.

## Examples

```js
let myRules = document.styleSheets[0].cssRules;
myRules[0].deleteRule(2); /* deletes the rule at index 2 */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
