---
title: "HTMLStyleElement: media property"
short-title: media
slug: Web/API/HTMLStyleElement/media
page-type: web-api-instance-property
browser-compat: api.HTMLStyleElement.media
---

{{APIRef("HTML DOM")}}

The **`HTMLStyleElement.media`** property specifies the
intended destination medium for style information.

## Value

A string describing a single medium or a comma-separated list.

## Examples

Suppose the `<head>` contains the following:

```html
<style id="inline-style" media="screen, print">
  p {
    color: blue;
  }
</style>
```

Then:

```js
const style = document.getElementById("inline-style");

console.log(style.media); // 'screen, print'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
