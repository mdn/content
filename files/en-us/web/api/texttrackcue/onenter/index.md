---
title: TextTrackCue.onenter
slug: Web/API/TextTrackCue/onenter
tags:
  - API
  - Property
  - Reference
  - onenter
  - TextTrackCue
browser-compat: api.TextTrackCue.onenter
---
{{APIRef("WebVTT")}}

The **`onenter`** EventHandler of the {{domxref("TextTrackCue")}} interface processes the `enter` event.

The `enter` event fires when a cue becomes active. In the case of subtitles or a caption this is when it displays over the media.

## Syntax

```js
TextTrackCue.onenter = function;
TextTrackCue.addEventListener('enter', function);
```

## Example

In the following example, `onenter` is used to print to the console when `cue1` is the active cue.

```js
cue1.onenter = function() {
  console.log('Cue 1 has displayed');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
