---
title: CSSStyleSheet.replace()
slug: Web/API/CSSStyleSheet/replace
tags:
  - API
  - Method
  - Reference
  - replace
  - CSSStyleSheet
browser-compat: api.CSSStyleSheet.replace
---
{{APIRef("CSSOM")}}

The **`replace()`** method of the {{domxref("CSSStyleSheet")}} interface asynchronously replaces the content of the stylesheet with the content passed into it. The method returns a promise that resolves with a `CSSStyleSheet` object.

The `replace()` and {{domxref("CSSStyleSheet.replaceSync()")}} methods can only be used on a stylesheet created with the {{domxref("CSSStyleSheet.CSSStyleSheet()","CSSStyleSheet()")}} constructor.

## Syntax

```js
CSSStyleSheet.replace(text);
```

### Parameters

- `text`
  - : A {{domxref("USVString","string")}} containing the style rules to replace the content of the stylesheet. If the string does not contain a parseable list of rules, then the value will be set to an empty string.

> **Note:** If any of the rules passed in `text` are an external stylesheet imported with the {{cssxref("@import")}} rule, those rules will be removed, and a warning printed to the console.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("CSSStyleSheet")}}.

### Exceptions

- {{domxref("DOMException")}} `NotAllowedError`
  - : Thrown if the stylesheet was not created using the {{domxref("CSSStyleSheet.CSSStyleSheet()","CSSStyleSheet()")}} constructor.
- {{domxref("DOMException")}} `NotAllowedError`
  - : If the stylesheet is flagged as unmodifiable.

## Examples

In the following example a new stylesheet is created and two CSS rules are added using `replace()`. The first rule is then printed to the console, which will return: `body { font-size: 1.4em };`

```js
let stylesheet = new CSSStyleSheet();

stylesheet.replace('body { font-size: 1.4em };p { color: red; }')
  .then(() => {   console.log(stylesheet.cssRules[0].cssText);
})
.catch(err => {
  console.error('Failed to replace styles:', err);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
