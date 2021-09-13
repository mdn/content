---
title: TextTrackCue.onexit
slug: Web/API/TextTrackCue/onexit
tags:
  - API
  - Property
  - Reference
  - onexit
  - TextTrackCue
browser-compat: api.TextTrackCue.onexit
---
{{APIRef("WebVTT")}}

The **`onexit`** EventHandler of the {{domxref("TextTrackCue")}} interface processes `exit` events.

The `exit` event fires when a cue stops being active.

## Syntax

```js
TextTrackCue.onexit = function;
TextTrackCue.addEventListener('exit', function);
```

## Example

In the following example, `onenter` is used to print to the console when `cue1` stops being displayed as the active cue.

```js
cue1.onexit = function() {
  console.log('Cue 1 has left the building.');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
