---
title: CSSStyleSheet.insertRule()
slug: Web/API/CSSStyleSheet/insertRule
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
method inserts a new [CSS rule](/en-US/docs/Web/API/CSSRule) into the [current style sheet](/en-US/docs/Web/API/CSSStyleSheet), with some [restrictions](#restrictions).

> **Note:** Although `insertRule()` is exclusively a method of
> {{domxref("CSSStyleSheet")}}, it actually inserts the rule into
> `{{domxref("CSSStyleSheet", "", "", "1")}}.cssRules` — its internal
> {{domxref("CSSRuleList")}}.

## Syntax

```js
stylesheet.insertRule(rule [, index])
```

### Parameters

- `rule`

  - : A {{domxref("DOMString")}} containing the rule to be inserted. What the inserted
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

CSS has some intuitive and not-so-intuitive restrictions affecting where rules can be
inserted. Violating them will raise an exception.

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if `index` > `{{domxref("CSSRuleList", "", "", "1")}}.length`.
- `HierarchyRequestError` {{domxref("DOMException")}}
  - : Thrown if `rule` cannot be inserted at `index` `0` due to some CSS constraint.
- `SyntaxError`{{domxref("DOMException")}}
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
  var styleEl = document.createElement('style');

  // Append <style> element to <head>
  document.head.appendChild(styleEl);

  // Grab style element's sheet
  var styleSheet = styleEl.sheet;

  for (var i = 0; i < rules.length; i++) {
    var j = 1,
        rule = rules[i],
        selector = rule[0],
        propStr = '';
    // If the second argument of a rule is an array of arrays, correct our variables.
    if (Array.isArray(rule[1][0])) {
      rule = rule[1];
      j = 0;
    }

    for (var pl = rule.length; j < pl; j++) {
      var prop = rule[j];
      propStr += prop[0] + ': ' + prop[1] + (prop[2] ? ' !important' : '') + ';\n';
    }

    // Insert CSS Rule
    styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length);
  }
}
```

## Polyfill

The below polyfill will correct the input of the arguments of `insertRule()`
to standardize them in Internet Explorer 5–8. It supplements `insertRule()`
with a function that separates the selector from the rules before sending the arguments
to the default native `insertRule()`.

```js
(function(Sheet_proto){
  var originalInsertRule = Sheet_proto.insertRule;

  if (originalInsertRule.length === 2){ // 2 mandatory arguments: (selector, rules)
    Sheet_proto.insertRule = function(selectorAndRule){
      // First, separate the selector from the rule
      a: for (var i=0, Len=selectorAndRule.length, isEscaped=0, newCharCode=0; i !== Len; ++i) {
        newCharCode = selectorAndRule.charCodeAt(i);
        if (!isEscaped && (newCharCode === 123)) { // 123 = "{".charCodeAt(0)
          // Secondly, find the last closing bracket
          var openBracketPos = i, closeBracketPos = -1;

          for (; i !== Len; ++i) {
            newCharCode = selectorAndRule.charCodeAt(i);
            if (!isEscaped && (newCharCode === 125)) { // 125 = "}".charCodeAt(0)
              closeBracketPos = i;
            }
            isEscaped ^= newCharCode===92?1:isEscaped; // 92 = "\\".charCodeAt(0)
          }

          if (closeBracketPos === -1) break a; // No closing bracket was found!
            /*else*/ return originalInsertRule.call(
            this, // the sheet to be changed
            selectorAndRule.substring(0, openBracketPos), // The selector
            selectorAndRule.substring(closeBracketPos), // The rule
            arguments[3] // The insert index
          );
        }

        // Works by if the char code is a backslash, then isEscaped
        // gets flipped (XOR-ed by 1), and if it is not a backslash
        // then isEscaped gets XORed by itself, zeroing it
        isEscaped ^= newCharCode===92?1:isEscaped; // 92 = "\\".charCodeAt(0)
      }
      // Else, there is no unescaped bracket
      return originalInsertRule.call(this, selectorAndRule, "", arguments[2]);
    };
  }
})(CSSStyleSheet.prototype);
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
[`removeRule()`](http://www.quirksmode.org/dom/w3c_css.html#change)
and
[`.rules`](http://www.quirksmode.org/dom/w3c_css.html#access)
instead of {{domxref("CSSStyleSheet.deleteRule","deleteRule()")}} and
{{domxref("CSSStyleSheet",".cssRules")}}, respectively.

## See also

- {{domxref("CSSStyleSheet.deleteRule")}}
- [Cross-Browser
  CSS-rules ordering (CSS1)](http://www-archive.mozilla.org/docs/web-developer/css1technote/css1tojs.html#priority)
- [Quirksmode -
  CSS](http://www.quirksmode.org/dom/w3c_css.html)
