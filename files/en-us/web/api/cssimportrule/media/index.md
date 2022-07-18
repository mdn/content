---
title: CSSImportRule.media
slug: Web/API/CSSImportRule/media
page-type: web-api-instance-property
tags:
  - API
  - CSSOM
  - Property
  - Reference
  - CSSImportRule
  - Read-only
browser-compat: api.CSSImportRule.media
---
{{APIRef("CSSOM")}}

The read-only **`media`** property of the
{{domxref("CSSImportRule")}} interface returns a {{domxref("MediaList")}} object,
containing the value of the `media` attribute of the associated stylesheet.

## Value

Returns a {{domxref("MediaList")}} object.

The value of `media` can be set by passing a string containing the `media` attribute; for example `"print"`.

## Examples

### Getting the media property

The following stylesheet includes a single {{cssxref("@import")}} rule. Therefore the
first item in the list of CSS rules will be a `CSSImportRule`. The
`media` property returns a {{domxref("MediaList")}} object. This includes
the `mediaText` property with a value of `screen`.

```css
@import url("style.css") screen;
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].media); //returns a MediaList
```

### Setting the media property

To change the `media` attribute of the associated stylesheet, set the value of `media` to a string containing the new value.

```js
let myRules = document.styleSheets[0].cssRules;
myRules[0].media = "print";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
