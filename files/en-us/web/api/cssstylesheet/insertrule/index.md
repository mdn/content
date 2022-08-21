---
title: CSSStyleSheet.insertRule()
slug: Web/API/CSSStyleSheet/insertRule
page-type: web-api-instance-method
tags:
  - API
  - CSSOM
  - CSSStyleSheet
  - Method
  - Reference
browser-compat: api.CSSStyleSheet.insertRule
---
{{APIRef("CSSOM")}}

The **`CSSStyleSheet.insertRule()`**
method inserts a new [CSS rule](/en-US/docs/Web/API/CSSRule) into the [current style sheet](/en-US/docs/Web/API/CSSStyleSheet).

> **Note:** Although `insertRule()` is exclusively a method of
> {{domxref("CSSStyleSheet")}}, it actually inserts the rule into
> `{{domxref("CSSStyleSheet", "", "", "1")}}.cssRules` — its internal
> {{domxref("CSSRuleList")}}.

## Syntax

```js
insertRule(rule)
insertRule(rule, index)
```

### Parameters

- `rule`

  - : A string containing the rule to be inserted. What the inserted
    rule must contain depends on its type:

    - **For [rule-sets](/en-US/docs/Web/CSS/Syntax#css_statements)**, both
      a [selector](/en-US/docs/Learn/CSS/Building_blocks/Selectors) and a
      style declaration.
    - **For [at-rules](/en-US/docs/Web/CSS/At-rule)**, both an
      at-identifier and the rule content.

- `index` {{optional_inline}}
  - : A positive integer less than or equal to `stylesheet.cssRules.length`,
    representing the newly inserted rule's position in
    `{{domxref("CSSStyleSheet", "", "", "1")}}.cssRules`. The default is
    `0`. (In older implementations, this was required. See [Browser compatibility](#browser_compatibility) for details.)

### Return value

The newly inserted rule's index within the stylesheet's rule-list.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if `index` > `{{domxref("CSSRuleList", "", "", "1")}}.length`.
- `HierarchyRequestError` {{domxref("DOMException")}}
  - : Thrown if `rule` cannot be inserted at `index` `0` due to some CSS constraint.
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if more than one rule is given in the `rule` parameter.
- `HierarchyRequestError` {{domxref("DOMException")}}
  - : Thrown if trying to insert an {{cssxref("@import")}} at-rule after a style rule.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if `rule` is {{cssxref("@namespace")}} and the rule-list has more than just `@import` at-rules and/or `@namespace` at-rules.

## Examples

### Inserting a new rule

This snippet pushes a new rule onto the top of my stylesheet.

```js
myStyle.insertRule('#blanc { color: white }', 0);
```

### Function to add a stylesheet rule

```js
/**
 * Add a stylesheet rule to the document (it may be better practice
 * to dynamically change classes, so style information can be kept in
 * genuine stylesheets and avoid adding extra elements to the DOM).
 * Note that an array is needed for declarations and rules since ECMAScript does
 * not guarantee a predictable object iteration order, and since CSS is
 * order-dependent.
 * @param {Array} rules Accepts an array of JSON-encoded declarations
 * @example
addStylesheetRules([
  ['h2', // Also accepts a second argument as an array of arrays instead
    ['color', 'red'],
    ['background-color', 'green', true] // 'true' for !important rules
  ],
  ['.myClass',
    ['background-color', 'yellow']
  ]
]);
*/
function addStylesheetRules (rules) {
  const styleEl = document.createElement('style');

  // Append <style> element to <head>
  document.head.appendChild(styleEl);

  // Grab style element's sheet
  const styleSheet = styleEl.sheet;

  for (let i = 0; i < rules.length; i++) {
    let j = 1,
        rule = rules[i],
        selector = rule[0],
        propStr = '';
    // If the second argument of a rule is an array of arrays, correct our variables.
    if (Array.isArray(rule[1][0])) {
      rule = rule[1];
      j = 0;
    }

    for (let pl = rule.length; j < pl; j++) {
      const prop = rule[j];
      propStr += `${prop[0]}: ${prop[1]}${prop[2] ? ' !important' : ''};\n`;
    }

    // Insert CSS Rule
    styleSheet.insertRule(`${selector}{${propStr}}`, styleSheet.cssRules.length);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Legacy browser support

To support Internet Explorer 8 and below, use:
`addRule(selector, rule [, index]);`. Example:
`addRule('pre', 'font: 14px verdana'); // add rule at end`

Also note the non-standard
[`removeRule()`](https://www.quirksmode.org/dom/w3c_css.html#change)
and
[`.rules`](https://www.quirksmode.org/dom/w3c_css.html#access)
instead of {{domxref("CSSStyleSheet.deleteRule","deleteRule()")}} and
{{domxref("CSSStyleSheet",".cssRules")}}, respectively.

## See also

- {{domxref("CSSStyleSheet.deleteRule")}}
- [Constructable Stylesheets](https://web.dev/constructable-stylesheets/) (web.dev)
