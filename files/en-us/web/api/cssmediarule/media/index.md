---
title: "CSSMediaRule: media property"
short-title: media
slug: Web/API/CSSMediaRule/media
page-type: web-api-instance-property
browser-compat: api.CSSMediaRule.media
---

{{ APIRef("CSSOM") }}

The read-only **`media`** property of the
{{domxref("CSSMediaRule")}} interface {{domxref("MediaList")}} represents the intended
destination medium for style information.

## Value

a {{domxref("MediaList")}}

## Examples

The CSS includes a media query with one style rule. This will be the first
{{domxref("CSSRule")}} returned by `document.styleSheets[0].cssRules`.
Calling `myRules[0].media` therefore returns a {{domxref("MediaList")}}
object representing the media query.

```css
@media (min-width: 500px) {
  body {
    color: blue;
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].media); // a MediaList
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
