---
title: "FontFaceSet: loading event"
short-title: loading
slug: Web/API/FontFaceSet/loading_event
page-type: web-api-event
browser-compat: api.FontFaceSet.loading_event
---

{{APIRef("CSS Font Loading API")}}

The `loading` event fires when the document begins loading fonts.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("loading", (event) => {});

onloading = (event) => {};
```

## Example

In the following example, when the font `Ephesis` starts to load, "Font is loading…" is printed to the console.

```js
document.fonts.onloading = () => {
  console.log("Font is loading");
};

(async () => {
  await document.fonts.load("16px Ephesis");
})();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
