---
title: "FontFaceSet: loadingerror event"
short-title: loadingerror
slug: Web/API/FontFaceSet/loadingerror_event
page-type: web-api-event
browser-compat: api.FontFaceSet.loadingerror_event
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

The `loadingerror` event fires when fonts have finished loading, but some or all fonts have failed to load.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("loadingerror", (event) => {});

onloadingerror = (event) => {};
```

## Example

In the following example, if the font `Ephesis` fails to load, "Font loading error" is printed to the console.

```js
document.fonts.onloadingerror = () => {
  console.log("Font loading error");
};

(async () => {
  await document.fonts.load("16px Ephesis");
})();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
