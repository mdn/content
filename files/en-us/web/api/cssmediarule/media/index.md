---
title: "CSSMediaRule: media property"
short-title: media
slug: Web/API/CSSMediaRule/media
page-type: web-api-instance-property
browser-compat: api.CSSMediaRule.media
---

{{ APIRef("CSSOM") }}

The read-only **`media`** property of the {{domxref("CSSMediaRule")}} interface contains a {{domxref("MediaList")}} object representing the media query list of the {{cssxref("@media")}} rule.

## Value

A {{domxref("MediaList")}} object.

Although the `media` property itself is read-only in the sense that you can't replace the `MediaList` object, you can still assign to the `media` property directly, which is equivalent to assigning to its {{domxref("MediaList/mediaText", "mediaText")}} property. You can also modify the `MediaList` object using the {{domxref("MediaList/appendMedium", "appendMedium()")}} and {{domxref("MediaList/deleteMedium", "deleteMedium()")}} methods.

## Examples

The CSS includes a media query with one style rule. This will be the first
{{domxref("CSSRule")}} returned by `document.styleSheets[0].cssRules`.
Calling `myRules[0].media` therefore returns a {{domxref("MediaList")}}
object representing the media query.

```css
@media (width >= 500px) {
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
