---
title: FontFaceSet.onloadingdone
slug: Web/API/FontFaceSet/onloadingdone
tags:
  - API
  - Property
  - Reference
  - onloadingdone
  - FontFaceSet
browser-compat: api.FontFaceSet.onloadingdone
---
{{APIRef("CSS Font Loading API")}}

The **`onloadingdone`** EventHandler of the {{domxref("FontFaceSet")}} interface processes `loadingdone` events.

The `loadingdone` event fires when the document has loaded all fonts.

## Syntax

```js
FontFaceSet.onloadingdone = function;
FontFaceSet.addEventListener('loadingdone', function);
```

## Example

In the following example, when the font `Ephesis` has finished loading, "Font loading complete" is printed to the console.

```js
document.fonts.onloadingdone = () => {
  console.log('Font loading complete');
}

(async () => {
  await document.fonts.load("16px Ephesis");
})();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

