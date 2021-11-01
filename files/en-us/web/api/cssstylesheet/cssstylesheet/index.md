---
title: CSSStyleSheet()
slug: Web/API/CSSStyleSheet/CSSStyleSheet
tags:
  - API
  - Constructor
  - Reference
  - CSSStyleSheet
browser-compat: api.CSSStyleSheet.CSSStyleSheet
---
{{APIRef("CSSOM")}}

The **`CSSStyleSheet()`** constructor creates a new {{domxref("CSSStyleSheet")}} object which represents a single [Stylesheet](/en-US/docs/Glossary/Stylesheet).

After constructing a stylesheet the {{domxref("CSSStyleSheet.replace()")}} or {{domxref("CSSStyleSheet.replaceSync()")}} methods can be used to add rules to the new stylesheet.

## Syntax

```js
new CSSStyleSheet();
new CSSStyleSheet(options);
```

### Parameters

- `options`{{optional_inline}}

  - : An object containing the following:

    - `baseURL`{{optional_inline}}
      - : A {{domxref("DOMString","string")}} containing the `baseURL` used to resolve relative URLs in the stylesheet.
    - `media`{{optional_inline}}
      - : A {{domxref("MediaList")}} containing a list of media rules, or a {{domxref("DOMString","string")}} containing a single rule.
    - `disabled`{{optional_inline}}
      - : A {{jsxref("Boolean")}} indicating whether the stylesheet is disabled. False by default.

## Examples

In the following example a new {{domxref("CSSStyleSheet")}} is constructed, with a media rule of `"print"`. Printing {{domxref("StyleSheet.media")}} to the console returns a {{domxref("MediaList")}} with a single entry for this print rule.

```css
let stylesheet = new CSSStyleSheet({media: 'print'});
console.log(stylesheet.media);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Polyfill

- [construct-style-sheets-polyfill](https://www.npmjs.com/package/construct-style-sheets-polyfill)
