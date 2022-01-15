---
title: FontFaceSet.onloading
slug: Web/API/FontFaceSet/onloading
tags:
  - API
  - Property
  - Reference
  - onloading
  - FontFaceSet
browser-compat: api.FontFaceSet.onloading
---
{{APIRef("CSS Font Loading API")}}

The **`onloading`** EventHandler of the {{domxref("FontFaceSet")}} interface processes `loading` events.

The `loading` event fires when the document begins loading fonts.

## Syntax

```js
FontFaceSet.onloading = function;
FontFaceSet.addEventListener('loading', function);
```

## Example

In the following example, when the font `Ephesis` starts to load, "Font is loading..." is printed to the console.

```js
document.fonts.onloading = () => {
  console.log('Font is loading');
}

(async () => {
  await document.fonts.load("16px Ephesis");
})();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

