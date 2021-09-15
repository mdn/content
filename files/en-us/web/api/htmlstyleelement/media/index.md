---
title: HTMLStyleElement.media
slug: Web/API/HTMLStyleElement/media
tags:
  - API
  - HTML DOM
  - HTMLStyleElement
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.HTMLStyleElement.media
---
{{APIRef("HTML DOM")}}

The **`HTMLStyleElement.media`** property specifies the
intended destination medium for style information.

## Syntax

```js
medium = style.media
style.media = medium
```

### Parameters

- `medium` is a string describing a single medium or a comma-separated
  list.

## Example

```html
<!doctype html>
<html>
<head>

<link id="LinkedStyle" rel="stylesheet" href="document.css" type="text/css" media="screen" />
<style id="InlineStyle" rel="stylesheet" type="text/css" media="screen, print">
p { color: blue; }
</style>
</head>
<body>

<script>
alert('LinkedStyle: ' + document.getElementById('LinkedStyle').media); // 'screen'
alert('InlineStyle: ' + document.getElementById('InlineStyle').media); // 'screen, print'
</script>

</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
