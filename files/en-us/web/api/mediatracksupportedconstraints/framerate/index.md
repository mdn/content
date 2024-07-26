---
title: "MediaTrackSupportedConstraints: frameRate property"
short-title: frameRate
slug: Web/API/MediaTrackSupportedConstraints/frameRate
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrack.applyConstraints.frameRate_constraint
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSupportedConstraints")}} dictionary's **`frameRate`** property is a read-only Boolean value which is
present (and set to `true`) in the object returned by {{domxref("MediaDevices.getSupportedConstraints()")}} if and only if the {{Glossary("user agent")}} supports the {{domxref("MediaTrackConstraints.frameRate","frameRate")}} constraint.

If the constraint isn't supported, it's not included in the list, so this value will never be `false`.

The `frameRate` constraint can be used to establish acceptable upper and lower bounds on the video frame rate for a new video track, or to specify an exact frame rate that must be provided for the request to succeed.
Checking the value of this property lets you determine if the user agent allows constraining the video track configuration by frame rate. See the [example](#examples) to see how this can be used.

## Value

This property is present in the dictionary if the user agent supports the `frameRate` constraint.
If the property isn't present, the user agent doesn't allow specifying limits on the frame rate for video tracks.

> [!NOTE]
> If this property is present, its value is always `true`.

## Examples

This simple example looks to see if your browser supports constraining the frame rate when requesting video tracks.

### JavaScript

```js
const result = document.getElementById("result");
const supported = navigator.mediaDevices.getSupportedConstraints().frameRate;
result.textContent = supported ? "Supported!" : "Not supported!";
```

### HTML

```html
<div id="result"></div>
```

### CSS

```css
#result {
  font:
    14px "Arial",
    sans-serif;
}
```

### Result

The output, showing if your browser supports the `frameRate` constraint, is:

{{ EmbedLiveSample('Examples', 600, 80) }}

While this example is trivial, you can replace the simple output of "Supported" vs.
"Not supported" with code to provide alternative methods for presenting the audiovisual information you want to share with the user or otherwise work with.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
