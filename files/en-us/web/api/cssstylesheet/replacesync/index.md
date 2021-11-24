---
title: CSSStyleSheet.replaceSync()
slug: Web/API/CSSStyleSheet/replaceSync
tags:
  - API
  - Method
  - Reference
  - replaceSync
  - CSSStyleSheet
browser-compat: api.CSSStyleSheet.replaceSync
---
{{APIRef("CSSOM")}}

The **`replaceSync()`** method of the {{domxref("CSSStyleSheet")}} interface synchronously replaces the content of the stylesheet with the content passed into it.

The `replaceSync()` and {{domxref("CSSStyleSheet.replace()")}} methods can only be used on a stylesheet created with the {{domxref("CSSStyleSheet.CSSStyleSheet()","CSSStyleSheet()")}} constructor.

## Syntax

```js
CSSStyleSheet.replaceSync(text);
```

### Parameters

- `text`
  - : A {{domxref("USVString","string")}} containing the style rules to replace the content of the stylesheet. If the string does not contain a parseable list of rules, then the value will be set to an empty string.

> **Note:** If any of the rules passed in `text` are an external stylesheet imported with the {{cssxref("@import")}} rule, those rules will be removed, and a warning printed to the console.

### Return value

Undefined.

### Exceptions

- {{domxref("DOMException")}} `NotAllowedError`
  - : Thrown if the stylesheet was not created using the {{domxref("CSSStyleSheet.CSSStyleSheet()","CSSStyleSheet()")}} constructor or if the stylesheet is flagged as unmodifiable.

## Examples

In the following example a new stylesheet is created and two CSS rules are added using `replaceSync`.

```js
let stylesheet = new CSSStyleSheet();

stylesheet.replaceSync('body { font-size: 1.4em };p { color: red; }');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
