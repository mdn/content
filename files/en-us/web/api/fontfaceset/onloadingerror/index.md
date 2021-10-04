---
title: FontFaceSet.onloadingerror
slug: Web/API/FontFaceSet/onloadingerror
tags:
  - API
  - Property
  - Reference
  - onloadingerror
  - FontFaceSet
browser-compat: api.FontFaceSet.onloadingerror
---
{{APIRef("CSS Font Loading API")}}

The **`onloadingerror`** EventHandler of the {{domxref("FontFaceSet")}} interface processes `loadingerror` events.

The `loadingerror` event fires when fonts have finished loading, but some or all fonts have failed to load.

## Syntax

```js
FontFaceSet.onloadingerror = function;
FontFaceSet.addEventListener('loadingerror', function);
```

## Example

In the following example, if the font `Ephesis` fails to load, "Font loading error" is printed to the console.

```js
document.fonts.onloadingerror = () => {
  console.log('Font loading error');
}

(async () => {
  await document.fonts.load("16px Ephesis");
})();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

