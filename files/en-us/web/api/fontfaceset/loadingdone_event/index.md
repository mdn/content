---
title: 'FontFaceSet: loadingdone event'
slug: Web/API/FontFaceSet/loadingdone_event
page-type: web-api-event
tags:
  - API
  - Property
  - Reference
  - onloadingdone
  - FontFaceSet
browser-compat: api.FontFaceSet.loadingdone_event
---
{{APIRef("CSS Font Loading API")}}

The `loadingdone` event fires when the document has loaded all events.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('loadingdone', (event) => { });

onloadingdone = (event) => { };
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
