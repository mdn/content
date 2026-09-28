---
title: "MediaDevices: getSupportedConstraints() method"
short-title: getSupportedConstraints()
slug: Web/API/MediaDevices/getSupportedConstraints
page-type: web-api-instance-method
browser-compat: api.MediaDevices.getSupportedConstraints
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

The **`getSupportedConstraints()`** method of the {{domxref("MediaDevices")}} interface returns an object whose member fields each specify one of the constrainable properties the {{Glossary("user agent")}} understands.

## Syntax

```js-nolint
getSupportedConstraints()
```

### Parameters

None.

### Return value

A new object listing the constraints supported by the user agent.
Because only constraints supported by the user agent are included in the list, each of these Boolean properties has the value `true`.
Unsupported constraints are omitted, so reading their properties returns {{jsxref("undefined")}}.
Available properties are:

- [`aspectRatio`](/en-US/docs/Web/API/MediaTrackConstraints/aspectRatio)
- [`autoGainControl`](/en-US/docs/Web/API/MediaTrackConstraints/autoGainControl)
- [`channelCount`](/en-US/docs/Web/API/MediaTrackConstraints/channelCount)
- [`deviceId`](/en-US/docs/Web/API/MediaTrackConstraints/deviceId)
- [`displaySurface`](/en-US/docs/Web/API/MediaTrackConstraints/displaySurface)
- [`echoCancellation`](/en-US/docs/Web/API/MediaTrackConstraints/echoCancellation)
- [`facingMode`](/en-US/docs/Web/API/MediaTrackConstraints/facingMode)
- [`frameRate`](/en-US/docs/Web/API/MediaTrackConstraints/frameRate)
- [`groupId`](/en-US/docs/Web/API/MediaTrackConstraints/groupId)
- [`height`](/en-US/docs/Web/API/MediaTrackConstraints/height)
- [`latency`](/en-US/docs/Web/API/MediaTrackConstraints/latency)
- [`logicalSurface`](/en-US/docs/Web/API/MediaTrackConstraints/logicalSurface)
- [`noiseSuppression`](/en-US/docs/Web/API/MediaTrackConstraints/noiseSuppression)
- [`resizeMode`](/en-US/docs/Web/API/MediaTrackConstraints#resizemode)
- [`restrictOwnAudio`](/en-US/docs/Web/API/MediaTrackConstraints/restrictOwnAudio) {{Experimental_Inline}}
- [`sampleRate`](/en-US/docs/Web/API/MediaTrackConstraints/sampleRate)
- [`sampleSize`](/en-US/docs/Web/API/MediaTrackConstraints/sampleSize)
- [`suppressLocalAudioPlayback`](/en-US/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) {{Experimental_Inline}}
- [`volume`](/en-US/docs/Web/API/MediaTrackConstraints/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
- [`width`](/en-US/docs/Web/API/MediaTrackConstraints/width)

## Examples

### Checking constraint support

This example generates a table showing whether each of the listed constraints is supported by your browser.

#### HTML

```html
<table>
  <caption>
    Media constraint support
  </caption>
  <thead>
    <tr>
      <th scope="col">Constraint</th>
      <th scope="col">Supported</th>
    </tr>
  </thead>
  <tbody id="constraintSupport"></tbody>
</table>
```

```css hidden
body {
  font:
    15px "Arial",
    sans-serif;
}

table {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid;
  padding: 0.25em 0.5em;
  text-align: left;
}
```

#### JavaScript

```js
const constraints = [
  "aspectRatio",
  "autoGainControl",
  "channelCount",
  "deviceId",
  "displaySurface",
  "echoCancellation",
  "facingMode",
  "frameRate",
  "groupId",
  "height",
  "latency",
  "logicalSurface",
  "noiseSuppression",
  "resizeMode",
  "restrictOwnAudio",
  "sampleRate",
  "sampleSize",
  "suppressLocalAudioPlayback",
  "volume",
  "width",
];
const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
const tableBody = document.querySelector("#constraintSupport");

for (const constraint of constraints) {
  const row = document.createElement("tr");
  const name = document.createElement("th");
  name.scope = "row";
  const code = document.createElement("code");
  code.textContent = constraint;
  name.appendChild(code);

  const support = document.createElement("td");
  support.textContent = supportedConstraints[constraint] ? "Yes" : "No";

  row.append(name, support);
  tableBody.appendChild(row);
}
```

#### Result

{{EmbedLiveSample("checking_constraint_support", 600, 650)}}

### Checking constraints before requesting screen capture

The function below sets up the options object for the call to {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}. It adds each of the following constraints only if it is known to be supported by the browser:

- `displaySurface`, requesting a preference for sharing an entire monitor.
- `logicalSurface`, requesting logical display surfaces, which may not be entirely visible onscreen.
- `suppressLocalAudioPlayback`, requesting that captured audio is not played out of the user's local speakers.

These constraints do not limit the display surfaces the user can choose to share. Capturing is then started by calling `getDisplayMedia()` and attaching the returned stream to the {{(htmlelement("video")}} element represented by `videoElem`.

```js
async function capture(videoElem) {
  const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  const displayMediaOptions = {
    video: {},
    audio: {},
  };

  if (supportedConstraints.displaySurface) {
    displayMediaOptions.video.displaySurface = "monitor";
  }

  if (supportedConstraints.logicalSurface) {
    displayMediaOptions.video.logicalSurface = true;
  }

  if (supportedConstraints.suppressLocalAudioPlayback) {
    displayMediaOptions.audio.suppressLocalAudioPlayback = true;
  }

  try {
    videoElem.srcObject =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch (err) {
    /* handle the error */
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
