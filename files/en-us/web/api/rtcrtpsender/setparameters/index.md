---
title: "RTCRtpSender: setParameters() method"
short-title: setParameters()
slug: Web/API/RTCRtpSender/setParameters
page-type: web-api-instance-method
browser-compat: api.RTCRtpSender.setParameters
---

{{APIRef("WebRTC API")}}

The **`setParameters()`** method of the {{domxref("RTCRtpSender")}} interface applies changes the configuration of sender's {{domxref("RTCRtpSender.track", "track")}}, which is the {{domxref("MediaStreamTrack")}} for which the `RTCRtpSender` is responsible.

In other words, `setParameters()` updates the configuration of the {{Glossary("RTP")}} transmission as well as the encoding configuration for a specific outgoing media track on the [WebRTC](/en-US/docs/Web/API/WebRTC_API) connection.

## Syntax

```js-nolint
setParameters(parameters)
```

### Parameters

- `parameters`

  - : A parameters object previously obtained by calling the same sender's {{domxref("RTCRtpSender.getParameters", "getParameters()")}} method, with the desired changes to the sender's configuration parameters.
    These parameters include potential codecs that could be use for encoding the sender's {{domxref("RTCRtpSender.track", "track")}}.
    The available parameters are:

    - `encodings`

      - : An array of objects, each specifying the parameters for a single codec that could be used to encode the track's media.
        The properties of the objects include:

        - `active`

          - : Setting this value `true` (the default) causes this encoding to be sent, while `false` stops it from being sent and used (but does not cause the SSRC to be removed).

        - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}

          - : Only used for an {{domxref("RTCRtpSender")}} whose {{domxref("MediaStreamTrack.kind", "kind")}} is `audio`, this property indicates whether or not to use discontinuous transmission (a feature by which a phone is turned off or the microphone muted automatically in the absence of voice activity).
            The value is taken either `enabled` or `disabled`.

        - `maxBitrate`

          - : A positive integer indicating the maximum number of bits per second that the user agent is allowed to grant to tracks encoded with this encoding.
            Other parameters may further constrain the bit rate, such as the value of `maxFramerate`, or the bandwidth available for the transport or physical network.

            The value is computed using the standard Transport Independent Application Specific Maximum (TIAS) bandwidth as defined by {{RFC(3890, "", "6.2.2")}}; this is the maximum bandwidth needed without considering protocol overheads from IP, TCP or UDP, and so forth.

            Note that the bitrate can be achieved in a number of ways, depending on the media and encoding.
            For example, for video a low bit rate might be achieved by dropping frames (a bitrate of zero might allow just one frame to be sent), while for audio the track might have to stop playing if the bitrate is too low for it to be sent.

        - `maxFramerate`
          - : A value specifying the maximum number of frames per second to allow for this encoding.
        - `priority`
          - : A string indicating the priority of the {{domxref("RTCRtpSender")}}, which may determine how the user agent allocates bandwidth between senders.
            Allowed values are `very-low`, `low` (default), `medium`, `high`.
        - `rid`

          - : A string which, if set, specifies an _RTP stream ID_ (_RID_) to be sent using the RID header extension.
            This parameter cannot be modified using {{domxref("RTCRtpSender.setParameters", "setParameters()")}}.
            Its value can only be set when the transceiver is first created.

        - `scaleResolutionDownBy`
          - : Only used for senders whose track's {{domxref("MediaStreamTrack.kind", "kind")}} is `video`, this is a floating-point value specifying a factor by which to scale down the video during encoding.
            The default value, 1.0, means that the video will be encoded at its original size.
            A value of 2.0 scales the video frames down by a factor of 2 in each dimension, resulting in a video 1/4 the size of the original.
            The value must not be less than 1.0 (attempting to scale the video to a larger size will throw a {{jsxref("RangeError")}}).

    - `transactionId`
      - : A string containing a unique ID.
        This ID is set in the previous {{domxref("RTCRtpSender.getParameters", "getParameters()")}} call, and ensures that the parameters originated from a previous call to {{domxref("RTCRtpSender.getParameters", "getParameters()")}}.
        <!-- spec defines following in RTCRtpParameters -->
    - `codecs`

      - : An array of objects describing the [media codecs](/en-US/docs/Web/Media/Formats/WebRTC_codecs) from which the sender will choose.
        This parameter cannot be changed once initially set.

        Each codec object in the array may have the following properties: <!-- RTCRtpCodecParameters -->

        - `channels` {{optional_inline}}

          - : A positive integer indicating the number of channels supported by the codec.
            For example, for audio codecs a value of 1 specifies monaural sound, while 2 indicates stereo.

        - `clockRate`

          - : A positive integer specifying the codec's clock rate in Hertz (Hz).
            The clock rate is the rate at which the codec's RTP timestamp advances.
            Most codecs have specific values or ranges of values they permit.
            The IANA maintains a [list of codecs and their parameters](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), including their clock rates.

        - `mimeType`

          - : A string indicating the codec's MIME media type and subtype, specified as a string of the form `"type/subtype"`.
            The MIME type strings used by RTP differ from those used elsewhere.
            IANA maintains a [registry of valid MIME types](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
            Also see [Codecs used by WebRTC](/en-US/docs/Web/Media/Formats/WebRTC_codecs) for details about potential codecs that might be referenced here.

        - `payloadType`

          - : The [RTP payload type](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1) used to identify this codec.

        - `sdpFmtpLine` {{optional_inline}}
          - : A string giving the format specific parameters provided by the local description.

    - `headerExtensions`
      - : An array of zero or more RTP header extensions, each identifying an extension supported by the sender.
        Header extensions are described in {{RFC(3550, "", "5.3.1")}}.
        This parameter cannot be changed.
    - `rtcp`
      - : An {{domxref("RTCRtcpParameters")}} object providing the configuration parameters used for {{Glossary("RTCP")}} on the sender.
        This parameter cannot be changed.
    - `degradationPreference` {{deprecated_inline}}
      - : Specifies the preferred way the WebRTC layer should handle optimizing bandwidth against quality in constrained-bandwidth situations.
        The possible values are `maintain-framerate`, `maintain-resolution`, or `balanced`.
        The default value is `balanced`.

### Return value

A {{jsxref("Promise")}} that resolves when the {{domxref("RTCRtpSender.track")}} property is updated with the given parameters.

### Exceptions

If an error occurs, the returned promise is rejected with the appropriate exception from the list below.

- `InvalidModificationError` {{domxref("DOMException")}}
  - : Returned if one of the following problems is detected:
    - The number of encodings specified in the `parameters` object's `encodings` property does not match the number of encodings currently listed for the `RTCRtpSender`.
      You cannot change the number of encoding options after the sender has been created.
    - The order of the specified `encodings` has changed from the current list's order.
    - An attempt has been made to alter a property that cannot be changed after the sender is first created.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the transceiver, of which the `RTCRtpSender` is a part, is not running or has no parameters to set.
- `OperationError` {{domxref("DOMException")}}
  - : Returned if an error occurs that does not match the ones specified here.
- {{jsxref("RangeError")}}
  - : Returned if the value specified for `scaleResolutionDownBy` option is less than 1.0 — which would result in scaling up rather than down, which is not allowed; or if one or more of the specified `encodings` [`maxFramerate`](#maxframerate) values is less than 0.0.

In addition, if a WebRTC error occurs while configuring or accessing the media, an {{domxref("RTCError")}} is thrown with its {{domxref("RTCError.errorDetail", "errorDetail")}} set to `hardware-encoder-error`.

## Description

It's important to keep in mind that you can't create the `parameters` object yourself and expect it to work.
Instead, you _must_ first call {{domxref("RTCRtpSender.getParameters", "getParameters()")}}, modify the received parameters object, then pass that object into `setParameters()`.
WebRTC uses the parameters object's `transactionId` property to ensure that when you set parameters, your changes are based on the most recent parameters rather than an out of date configuration.

## Examples

One use case for `setParameters()` is to try to reduce network bandwidth used in constrained environments by altering the resolution and/or bit rate of the media being transmitted by the {{domxref("RTCRtpSender")}}.

Currently, some browsers have limitations on their implementations that may cause issues.
For that reason, two examples are given here.
The first shows how to use `setParameters()` when all browsers fully support the parameters being used, while the second example demonstrates workarounds to help solve limitations in browsers with incomplete support for the [`maxBitrate`](#maxbitrate) and [`scaleResolutionDownBy`](#scaleresolutiondownby) parameters.

### By the specification

Once all browsers implement the spec fully, this implementation of `setVideoParams()` will do the job. This demonstrates how everything _should_ work.
You should probably use the second example, below, for now.
But this is a clearer demonstration of the basic concept of first fetching the parameters, then altering them, then setting them.

```js
async function setVideoParams(sender, height, bitrate) {
  const scaleRatio = sender.track.getSettings().height / height;
  const params = sender.getParameters();

  params.encodings[0].scaleResolutionDownBy = Math.max(scaleRatio, 1);
  params.encodings[0].maxBitrate = bitrate;
  await sender.setParameters(params);
}
```

In calling this function, you specify a sender, as well as the height you wish to scale the sender's video to, as well as a maximum bitrate to permit the sender to transmit.
A scaling factor for the size of the video, `scaleRatio`, is computed.
Then the sender's current parameters are fetched using {{domxref("RTCRtpSender.getParameters", "getParameters()")}}.

The parameters are then altered by changing the first `encodings` object's [`scaleResolutionDownBy`](#scaleresolutiondownby) and [`maxBitrate`](#maxbitrate) to the calculated scaling factor and the specified maximum `bitrate`.

The changed parameters are then saved by calling the sender's `setParameters()` method.

### Currently compatible implementation

As mentioned above, the previous example shows how things are meant to work.
Unfortunately, there are implementation issues preventing this in many browsers right now.
For that reason, if you want to be compatible with iPhone and other devices running Safari, and with Firefox, use code more like this:

```js
async function setVideoParams(sender, height, bitrate) {
  const scaleRatio = sender.track.getSettings().height / height;
  const params = sender.getParameters();

  // If encodings is null, create it

  if (!params.encodings) {
    params.encodings = [{}];
  }

  params.encodings[0].scaleResolutionDownBy = Math.max(scaleRatio, 1);
  params.encodings[0].maxBitrate = bitrate;
  await sender.setParameters(params);

  // If the newly changed value of scaleResolutionDownBy is 1,
  // use applyConstraints() to be sure the height is constrained,
  // since scaleResolutionDownBy may not be implemented

  if (sender.getParameters().encodings[0].scaleResolutionDownBy === 1) {
    await sender.track.applyConstraints({ height });
  }
}
```

The differences here:

- If `encodings` is `null`, we create it, in order to ensure that we can then set the parameters successfully without crashing.
- If, after setting the parameters, the value of `scaleResolutionDownBy` is still 1, we call the sender's track's {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} method to constrain the track's height to `height`.
  This compensates for an unimplemented `scaleResolutionDownBy` (as is the case in Safari as of this writing).

This code will cleanly fall back and work the normal way if the browser fully implements the used features.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Codecs used by WebRTC](/en-US/docs/Web/Media/Formats/WebRTC_codecs)
- [Web media technologies](/en-US/docs/Web/Media)
