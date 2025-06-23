---
title: "RTCRtpReceiver: getCapabilities() static method"
short-title: getCapabilities()
slug: Web/API/RTCRtpReceiver/getCapabilities_static
page-type: web-api-static-method
browser-compat: api.RTCRtpReceiver.getCapabilities_static
---

{{APIRef("WebRTC")}}

The _static method_ **`RTCRtpReceiver.getCapabilities()`** returns an object describing the codec and header extension capabilities supported by {{domxref("RTCRtpReceiver")}} objects on the current device.

You can, similarly, obtain the capabilities of {{domxref("RTCRtpSender")}} objects by calling the static function {{domxref("RTCRtpSender.getCapabilities_static", "RTCRtpSender.getCapabilities()")}}.

## Syntax

```js-nolint
RTCRtpReceiver.getCapabilities(kind)
```

### Parameters

- `kind`
  - : A string indicating the type of media for which the browser's receiver capabilities are requested.
    The supported media kinds are: `audio` and `video`.

### Return value

A new object that indicates what capabilities the browser has for receiving the specified media kind over an {{domxref("RTCPeerConnection")}}.
If the browser doesn't have any support for the given media `kind`, the returned value is `null`.

The returned object has the following properties:

- `codecs`

  - : An array of objects, each describing the basic capabilities of a single [media codec](/en-US/docs/Web/Media/Guides/Formats/WebRTC_codecs) supported by the {{domxref("RTCRtpReceiver")}}.

    > [!NOTE]
    > The array contains special entries that represent the underlying components of the transport — these may be ignored if you're only interested in the actual codecs used for the media itself.
    > These are described below in the section [The codecs array](#the_codecs_array).

    Each codec object has the following properties:

    - `channels` {{optional_inline}}
      - : A positive integer value indicating the maximum number of channels supported by the codec; for example, a codec that supports only mono sound would have a value of 1; stereo codecs would have a 2, etc.
    - `clockRate`
      - : A positive integer specifying the codec's clock rate in Hertz (Hz).
        The IANA maintains a [list of codecs and their parameters](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), including their clock rates.
    - `mimeType`
      - : A string indicating the codec's MIME media type and subtype.
        The MIME type strings used by RTP differ from those used elsewhere.
        See {{RFC(3555, "", 4)}} for the complete IANA registry of these types.
        Also see [Codecs used by WebRTC](/en-US/docs/Web/Media/Guides/Formats/WebRTC_codecs) for details about potential codecs that might be referenced here.
    - `sdpFmtpLine` {{optional_inline}}
      - : A string giving the format specific parameters field from the `a=fmtp` line in the SDP which corresponds to the codec, if such a line exists.
        If there is no parameters field, this property is left out.

- `headerExtensions`

  - : An array of objects, each providing the URI of a [header extension](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) supported for the current `kind` of media.
    Each object has the following property:

    - `uri`
      - : A string, specifying the URI of a header extension.
        The URI is formatted as described in {{RFC(5285)}}.

## Description

As a static function, this is always called using the form:

```js
capabilities = RTCRtpReceiver.getCapabilities("audio");
```

The returned set of capabilities is the most optimistic possible list.
It is entirely possible that certain combinations of options may fail to work when you actually try to use them.

Calling `RTCRtpReceiver.getCapabilities()` doesn't prime the browser in any way to handle media. Nothing is loaded, fetched, or otherwise prepared.
It's a means of determining what might be usable before starting to try to access media.

Because the set of capabilities available tend to be stable for a length of time (people don't install and uninstall codecs and the like very often), the media capabilities can in whole or in part provide a cross-origin method for identifying a user.
For that reason, in privacy-sensitive contexts, the browser may choose to obscure the capabilities; this might be done, for example, by leaving out rarely-used codec configurations.

### The codecs array

The `codecs` array is an array of objects that describes a single codec and its basic capabilities.
The browser will only report distinct capability combinations separately.
If two sets of capabilities can be described as one, they will be.
That means that, for instance, if there are two entries for the H.264 codec (as identified by the [`mimeType`](#mimetype) being "video/H264"), there are other values in the capabilities objects indicating how they're different in some way.

There are three special entries that should always be present, representing underlying components of the transport. Those components are:

- RED (REDundant Audio Data)
  - : The media type of an RED entry may vary due to there being several versions of it, but it will end with `red`, such as `video/red` or `video/fwdred`.
    The base RED standard can be found in {{RFC(2198)}}. There may be multiple entries for RED if different forms are supported; each will have a unique media type in that case.
- FEC (Forward Error Correction)
  - : An FEC component handles error correction data; its media type may also vary due to there being advanced versions of the standard available, but it will always end with `fec`.
    One possible value is `video/ulpfec` (a generic error connection model).
    There may also be multiple FEC entries if more than one form is supported.
- RTX (Retransmission)
  - : This component is responsible for retransmission of data; it's media type should be `video/rtx`.
    There will only be one entry for RTX, and it will not have an [`sdpFmtpLine`](#sdpfmtpline) property.

These entries should be ignored if only codecs related to the media are of interest.

## Examples

### Feature support

You can use [`Object.hasOwn()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) to check that `RTCRtpReceiver.getCapabilities()` is supported:

```html hidden
<p id="log"></p>
```

```js hidden
const log = document.querySelector("#log");
```

```js
log.textContent = `RTCRtpReceiver.getCapabilities() supported: ${Object.hasOwn(
  RTCRtpReceiver,
  "getCapabilities",
)}`;
```

{{ EmbedLiveSample('Feature support', '100%', '30px') }}

### Checking support for a particular codec

The function below returns a Boolean indicating whether or not the device supports receiving H.264 video on a WebRTC connection.

> [!NOTE]
> Since `RTCRtpReceiver.getCapabilities()` actually only indicates > _probable_ support, attempting to receive H.264 video might still fail even after getting a positive response from this function.

```js
function canReceiveH264() {
  let capabilities = RTCRtpReceiver.getCapabilities("video");

  capabilities.codecs.forEach((codec) => {
    if (codec.mimeType === "video/H264") {
      return true;
    }
  });
  return false;
}
```

### Getting all capabilities

This code example shows how we might get all supported codecs and headers.
The HTML defines a selection list for the two kinds of capabilities, and a log area.

```html
<select id="kind">
  <option value="audio">audio</option>
  <option value="video">video</option>
</select>
<textarea rows="40" cols="100" id="log"></textarea>
```

The JavaScript defines a function to log the capabilities for a particular "kind".
This is called initially with the value `audio`.
A listener updates the value when the selection list `kind` is changed.

```js
const log = document.querySelector("#log");
const kindSelector = document.querySelector("#kind");

logMediaCapabilities("audio");

kindSelector.addEventListener("click", () => {
  log.textContent = "";
  logMediaCapabilities(kindSelector.value);
});

function logMediaCapabilities(kind) {
  if (!Object.hasOwn(RTCRtpReceiver, "getCapabilities")) {
    log.textContent = "RTCRtpReceiver.getCapabilities() not supported";
    return;
  }
  const capabilities = RTCRtpReceiver.getCapabilities(`${kind}`);
  log.textContent += "Headers\n";
  capabilities.headerExtensions.forEach((header) => {
    log.textContent += ` uri: ${header.uri}\n`;
  });

  log.textContent += "\nCodecs\n";
  capabilities.codecs.forEach((codec) => {
    log.textContent += ` mime type: ${codec.mimeType}\n`;
    log.textContent += `   channels: ${codec.channels}\n`; // max channels - e.g. 2 is stereo
    log.textContent += `   clockRate: ${codec.clockRate}\n`; // clock rate in Hz
    log.textContent += `   sdpFmtpLine: ${codec.sdpFmtpLine}\n`; // mime media type and subtype
  });
}
```

#### Result

{{ EmbedLiveSample('Getting all capabilities', '100%', '500px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
