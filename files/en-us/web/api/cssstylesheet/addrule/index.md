---
title: "CSSStyleSheet: addRule() method"
short-title: addRule()
slug: Web/API/CSSStyleSheet/addRule
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.CSSStyleSheet.addRule
---

{{APIRef("CSSOM")}}{{deprecated_header}}

The obsolete {{domxref("CSSStyleSheet")}} interface's
**`addRule()`** _legacy method_ adds a new rule to the
stylesheet. You should avoid using this method, and should instead use the more standard
{{domxref("CSSStyleSheet.insertRule", "insertRule()")}} method.

## Syntax

```js-nolint
addRule(selector, styleBlock, index)
```

### Parameters

- `selector`
  - : A string specifying the selector portion of the CSS rule. The
    default is the string `undefined`.
- `styleBlock`
  - : A string indicating the style block to apply to elements matching
    the `selector`. The default is the string `undefined`.
- `index` {{optional_inline}}
  - : An optional index into the stylesheet's {{domxref("CSSRuleList")}} at which to
    insert the new rule. If `index` is not specified, the next index after the
    last item currently in the list is used (that is, the value of
    `cssStyleSheet.cssRules.length`).

### Return value

Always returns -1.

Note that due to somewhat esoteric rules about where you can legally insert rules,
it's possible that an exception may be thrown. See {{domxref("CSSStyleSheet.insertRule",
  "insertRule()")}} for more information.

## Usage notes

This method is implemented by browsers by constructing a string using the template
literal `` `${selector}{${styleBlock}}` ``, then passing it into the standard
{{domxref("CSSStyleSheet.insertRule", "insertRule()")}} method.

Therefore, given existing code such as the following:

```js
cssStyleSheet.addRule(selector, styles, 0);
```

You can rewrite this to use the more standard `insertRule()` like this:

```js
cssStyleSheet.insertRule(`${selector} {${styles}}`, 0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model)
- [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
