---
title: "CSSImportRule: media property"
short-title: media
slug: Web/API/CSSImportRule/media
page-type: web-api-instance-property
browser-compat: api.CSSImportRule.media
---

{{APIRef("CSSOM")}}

The read-only **`media`** property of the {{domxref("CSSImportRule")}} interface returns a {{domxref("MediaList")}} object representing the media query list of the {{cssxref("@import")}} rule.

## Value

A {{domxref("MediaList")}} object.

Although the `media` property itself is read-only in the sense that you can't replace the `MediaList` object, you can still assign to the `media` property directly, which is equivalent to assigning to its {{domxref("MediaList/mediaText", "mediaText")}} property. You can also modify the `MediaList` object using the {{domxref("MediaList/appendMedium", "appendMedium()")}} and {{domxref("MediaList/deleteMedium", "deleteMedium()")}} methods.

## Examples

### Getting the media property

The following stylesheet includes a single {{cssxref("@import")}} rule. Therefore the
first item in the list of CSS rules will be a `CSSImportRule`. The
`media` property returns a {{domxref("MediaList")}} object. This includes
the `mediaText` property with a value of `screen`.

```css
@import "style.css" screen;
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].media); // A MediaList
```

### Setting the media property

To change the `media` attribute of the associated stylesheet, set the value of `media` to a string containing the new value.

```js
const myRules = document.styleSheets[0].cssRules;
myRules[0].media = "print";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
