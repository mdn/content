---
title: RTCRtpSender.setParameters()
slug: Web/API/RTCRtpSender/setParameters
tags:
  - API
  - Audio
  - Codec
  - Encoding
  - Method
  - RTCRtpSender
  - Reference
  - Video
  - WebRTC
  - WebRTC API
  - parameters
  - sender
  - setParameters
browser-compat: api.RTCRtpSender.setParameters
---
{{APIRef("WebRTC API")}}

The **`setParameters()`** method of
the {{domxref("RTCRtpSender")}} interface applies changes the configuration of
sender's {{domxref("RTCRtpSender.track", "track")}}, which is the
{{domxref("MediaStreamTrack")}} for which the `RTCRtpSender` is
responsible.

In other words, `setParameters()` updates the configuration of the
{{Glossary("RTP")}} transmission as well as the encoding configuration for a specific
outgoing media track on the [WebRTC](/en-US/docs/Web/API/WebRTC_API)
connection.

## Syntax

```js
var promise = rtcRtpSender.setParameters(parameters)
```

### Parameters

- `parameters`

  - : A parameters object previously obtained by calling the same
    sender's {{domxref("RTCRtpSender.getParameters", "getParameters()")}} method, with
    the desired changes to the sender's configuration parameters. These parameters
    include potential codecs that could be use for encoding the sender's
    {{domxref("RTCRtpSender.track", "track")}}. The available parameters are:

    - `encodings`
      - : An array of {{domxref("RTCRtpEncodingParameters")}} objects, each specifying the parameters for a single codec that could be used to encode the track's media.
    - `transactionId`
      - : A string containing a unique ID for the last set of parameters applied; this value is used to ensure that {{domxref("RTCRtpSender.setParameters", "setParameters()")}} can only be called to alter changes made by a specific previous call to {{domxref("RTCRtpSender.getParameters", "getParameters()")}}. Once this parameter is initially set, it cannot be changed.
    - `degradationPreference` {{deprecated_inline}}
      - : Specifies the preferred way the WebRTC layer should handle optimizing bandwidth against quality in constrained-bandwidth situations; the value comes from the {{domxref("RTCDegradationPreference")}} enumerated string type, and the default is `balanced`.
    - `priority` {{deprecated_inline}}
      - : A string from the {{domxref("RTCPriorityType")}} enumerated type which indicates the encoding's priority. The default value is `low`.

### Return value

A {{jsxref("Promise")}} that resolves when the {{domxref("RTCRtpSender.track")}}
property is updated with the given parameters.

### Exceptions

If an error occurs, the returned promise is rejected with the appropriate exception
from the list below.

- `InvalidModificationError`

  - : One of the following problems was detected:

    - The number of encodings specified in the `parameters` object's
      {{domxref("RTCRtpSendParameters.encodings", "encodings")}} property does not match
      the number of encodings currently listed for the `RTCRtpSender`. You
      cannot change the number of encoding options once the sender has been created.
    - The order of the specified `encodings` has changed from the current
      list's order.
    - An attempt has been made to alter a property that cannot be changed after the
      sender is first created.

- `InvalidStateError`
  - : The transceiver of which the `RTCRtpSender` is a part is not running, or
    has no parameters to set.
- `OperationError`
  - : Any error condition which occurs that isn't covered by one of the other error codes
    results in an `OperationError`.
- `RangeError`
  - : The value specified for {{domxref("RTCRtpSendParameters.scaleResolutionDownBy",
    "scaleResolutionDownBy")}} is less than 1.0, which would result in scaling up rather
    than down, which is not allowed; or one or more of the specified encodings'
    {{domxref("RTCRtpEncodingParameters.maxFramerate", "maxFramerate")}} values is less
    than 0.0.

In addition, if a WebRTC error occurs while configuring or accessing the media, an
{{domxref("RTCError")}} is thrown with its {{domxref("RTCError.errorDetail",
  "errorDetail")}} set to `hardware-encoder-error`.

## Description

It's important to keep in mind that you can't create an
{{domxref("RTCRtpSendParameters")}} object yourself and expect it to work. Instead, you
_must_ first call {{domxref("RTCRtpSender.getParameters", "getParameters()")}},
modify the received parameters object, then pass that object into
`setParameters()`. WebRTC uses the parameters object's
`transactionId` property to ensure that when you set parameters, your changes
are based on the most recent parameters rather than an out of date configuration.

## Examples

One use case for `setParameters()` is to try to reduce network bandwidth use
in constrained environments by altering the resolution and/or bit rate of the media
being transmitted by the {{domxref("RTCRtpSender")}}.

Currently, some browsers have limitations on their implementations that may cause
issues. For that reason, two examples are given here. The first shows how to use
`setParameters()` when all browsers fully support the parameters being used,
while the second example demonstrates workarounds to help solve limitations in browsers
with incomplete support for the {{domxref("RTCRtpEncodingParameters.maxBitrate",
  "maxBitrate")}} and {{domxref("RTCRtpEncodingParameters.scaleResolutionDownBy",
  "scaleResolutionDownBy")}} parameters.

### By the specification

Once all browsers implement the spec fully, this implementation of
`setVideoParams()` will do the job. This demonstrates how everything
_should_ work. You should probably use the second example, below, for now. But
this is a clearer demonstration of the basic concept of first fetching the parameters,
then altering them, then setting them.

```js
async function setVideoParams(sender, height, bitrate) {
  const scaleRatio = sender.track.getSettings().height/height;
  const params = sender.getParameters();

  params.encodings[0].scaleResolutionDownBy = Math.max(ratio, 1);
  params.encodings[0].maxBitrate = bitrate;
  await sender.setParameters(params);
}
```

In calling this function, you specify a sender, as w\.ell as the height you wish to
scale the sender's video to, as well as a maximum bitrate to permit the sender to
transmit. A scaling factor for the size of the video, `scaleRatio`, is
computed. Then the sender's current parameters are fetched using
{{domxref("RTCRtpSender.getParameters", "getParameters()")}}.

The parameters are then altered by changing the first
{{domxref("RTCRtpSendParameters.encodings", "encodings")}} object's
{{domxref("RTCRtpEncodingParameters.scaleResolutionDownBy", "scaleResolutionDownBy")}}
and {{domxref("RTCRtpEncodingParameters.maxBitrate", "maxBitrate")}} to the calculated
scaling factor and the specified maximum `bitrate`.

The changed parameters are then saved by calling the sender's
`setParameters()` method.

### Currently compatible implementation

As mentioned above, the previous example shows how things are meant to work.
Unfortunately, there are implementation issues preventing this in many browsers right
now. For that reason, if you want to be compatible with iPhone and other devices running
Safari, and with Firefox, use code more like this:

```js
async function setVideoParams(sender, height, bitrate) {
  const scaleRatio = sender.track.getSettings().height/height;
  const params = sender.getParameters();

  // If encodings is null, create it

  if (!params.encodings) {
    params.encodings = [{ }];
  }

  params.encodings[0].scaleResolutionDownBy = Math.max(ratio, 1);
  params.encodings[0].maxBitrate = bitrate;
  await sender.setParameters(params);

  // If the newly changed value of scaleResolutionDownBy is 1,
  // use applyConstraints() to be sure the height is constrained,
  // since scaleResolutionDownBy may not be implemented

  if (sender.getParameters().encodings[0].scaleResolutionDownBy == 1) {
    await sender.track.applyConstraints({ height });
  }
}
```

The differences here:

- If `encodings` is `null`, we create it, in order to ensure
  that we can then set the parameters successfully without crashing.
- If, after setting the parameters, the value of `scaleResolutionDownBy` is
  still 1, we call the sender's track's {{domxref("MediaStreamTrack.applyConstraints",
    "applyConstraints()")}} method to constrain the track's height to `height`.
  This compensates for an unimplemented `scaleResolutionDownBy` (as is the
  case in Safari as of this writing).

This code will cleanly fall back and work the normal way if the browser fully
implements the used features.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Codecs used by WebRTC](/en-US/docs/Web/Media/Formats/WebRTC_codecs)
- [Web media technologies](/en-US/docs/Web/Media)
