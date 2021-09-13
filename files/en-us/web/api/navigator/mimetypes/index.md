---
title: Navigator.mimeTypes
slug: Web/API/Navigator/mimeTypes
tags:
  - API
  - Property
  - Navigator
  - Reference
browser-compat: api.Navigator.mimeTypes
---
{{ ApiRef("HTML DOM") }}{{deprecated_header}}

Returns a {{domxref("MimeTypeArray")}} object, which contains a list of
{{domxref("MimeType")}} objects representing the MIME types recognized by the browser.

> **Note:** Named properties of {{domxref("MimeTypeArray")}} objects are
> no longer enumerable in the latest browser versions.

## Syntax

```js
var mimeTypes[] = navigator.mimeTypes;
```

`mimeTypes` is a `MimeTypeArray` object which has a
`length` property as well as `item(index)` and
`namedItem(name)` methods.

## Example

```js
function isJavaPresent() {
  return 'application/x-java-applet' in navigator.mimeTypes;
}

function getJavaPluginDescription() {
  var mimetype = navigator.mimeTypes['application/x-java-applet'];
  if (mimetype === undefined) {
    // no Java plugin present
    return undefined;
  }
  return mimetype.enabledPlugin.description;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
