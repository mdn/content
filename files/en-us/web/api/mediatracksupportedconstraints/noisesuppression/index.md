---
title: MediaTrackSupportedConstraints.noiseSuppression
slug: Web/API/MediaTrackSupportedConstraints/noiseSuppression
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - Constraints
  - Media
  - Media Capture and Streams API
  - Media Constraints
  - Media Streams API
  - MediaStreamTrackSupportedConstraints
  - Property
  - noiseSuppression
browser-compat: api.MediaTrackSupportedConstraints.noiseSuppression
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSupportedConstraints")}} dictionary's
**`noiseSuppression`** property is a read-only Boolean value
which is present (and set to `true`) in the object returned by
{{domxref("MediaDevices.getSupportedConstraints()")}} if and only if the
{{Glossary("user agent")}} supports the **`noiseSuppression`**
constraint. If the constraint isn't supported, it's not included in the list, so this
value will never be `false`.

You can access the supported constraints dictionary by calling
`navigator.mediaDevices.getSupportedConstraints()`.

The `noiseSuppression` constraint indicates whether or not the browser
offers the ability to automatically control the gain (volume) on media tracks; this
obviously is contingent on whether or not the individual device supports automatic gain
control as well.

## Value

This property is present in the dictionary (and its value is always `true`)
if the user agent supports the `noiseSuppression` constraint (and therefore
supports noise suppression on audio tracks). If the property isn't present, this
property is missing from the supported constraints dictionary, and you'll get
{{jsxref("undefined")}} if you try to look at its value.

## Examples

This example displays whether or not your browser supports the
`noiseSuppression` constraint.

```html hidden
<div id="result">
</div>
```

```css hidden
#result {
  font: 14px "Arial", sans-serif;
}
```

```js
const result = document.getElementById("result");
const supported = navigator.mediaDevices.getSupportedConstraints().noiseSuppression;
result.textContent = supported ? "Supported!" : "Not supported!";
```

### Result

{{ EmbedLiveSample('Examples', 600, 80) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API)
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
