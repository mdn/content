---
title: "RTCRtpSender: setParameters() method"
short-title: setParameters()
slug: Web/API/RTCRtpSender/setParameters
page-type: web-api-instance-method
browser-compat: api.RTCRtpSender.setParameters
spec-urls:
  - https://w3c.github.io/webrtc-pc/#dom-rtcrtpsender-setparameters
  - https://w3c.github.io/mst-content-hint/#dom-rtcdegradationpreference
  - https://w3c.github.io/webrtc-extensions/#dom-rtcsetparameteroptions-encodingoptions
---

{{APIRef("WebRTC API")}}

The **`setParameters()`** method of the {{domxref("RTCRtpSender")}} interface applies changes the configuration of sender's {{domxref("RTCRtpSender.track", "track")}}, which is the {{domxref("MediaStreamTrack")}} for which the `RTCRtpSender` is responsible.

In other words, `setParameters()` updates the configuration of the {{Glossary("RTP")}} transmission as well as the encoding configuration for a specific outgoing media track on the [WebRTC](/en-US/docs/Web/API/WebRTC_API) connection.

## Syntax

```js-nolint
setParameters(parameters)
setParameters(parameters, setParameterOptions)
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

        - `codec` {{optional_inline}}
          - : Selects the [media codec](/en-US/docs/Web/Media/Guides/Formats/WebRTC_codecs) that is used for this encoding's RTP stream.
            If not set, the user agent may select any codec negotiated for sending.
            <!-- RTCRtpCodec -->
            - `channels` {{optional_inline}}
              - : A positive integer indicating the number of channels supported by the codec.
                For example, for audio codecs a value of 1 specifies monaural sound, while 2 indicates stereo.

            - `clockRate`
              - : A positive integer specifying the codec's clock rate in Hertz (Hz).
                The clock rate is the rate at which the codec's RTP timestamp advances.
                Most codecs have specific values or ranges of values they permit.
                The IANA maintains a [list of codecs and their parameters](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-1), including their clock rates.

            - `mimeType`
              - : A string indicating the codec's MIME media type and subtype, specified as a string of the form `"type/subtype"`.
                The MIME type strings used by RTP differ from those used elsewhere.
                IANA maintains a [registry of valid MIME types](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-2).
                Also see [Codecs used by WebRTC](/en-US/docs/Web/Media/Guides/Formats/WebRTC_codecs) for details about potential codecs that might be referenced here.

            - `sdpFmtpLine` {{optional_inline}}
              - : A string giving the format specific parameters provided by the local description.

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
            This parameter cannot be modified using `setParameters()`.
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
      - : An array of objects describing the [media codecs](/en-US/docs/Web/Media/Guides/Formats/WebRTC_codecs) from which the sender will choose.
        This parameter cannot be changed once initially set.

        Each codec object in the array may have the following properties: <!-- RTCRtpCodecParameters -->
        - `channels` {{optional_inline}}
          - : A positive integer indicating the number of channels supported by the codec.
            For example, for audio codecs a value of 1 specifies monaural sound, while 2 indicates stereo.

        - `clockRate`
          - : A positive integer specifying the codec's clock rate in Hertz (Hz).
            The clock rate is the rate at which the codec's RTP timestamp advances.
            Most codecs have specific values or ranges of values they permit.
            The IANA maintains a [list of codecs and their parameters](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-1), including their clock rates.

        - `mimeType`
          - : A string indicating the codec's MIME media type and subtype, specified as a string of the form `"type/subtype"`.
            The MIME type strings used by RTP differ from those used elsewhere.
            IANA maintains a [registry of valid MIME types](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-2).
            Also see [Codecs used by WebRTC](/en-US/docs/Web/Media/Guides/Formats/WebRTC_codecs) for details about potential codecs that might be referenced here.

        - `payloadType`
          - : The [RTP payload type](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-1) used to identify this codec.

        - `sdpFmtpLine` {{optional_inline}}
          - : A string giving the format specific parameters provided by the local description.

    - `headerExtensions`
      - : An array of zero or more RTP header extensions, each identifying an extension supported by the sender.
        Header extensions are described in {{RFC(3550, "", "5.3.1")}}.
        This parameter cannot be changed.
    - `rtcp`
      - : An object providing the configuration parameters used for {{Glossary("RTCP")}} on the sender.
        This parameter cannot be changed.

        The object may have the following properties: <!-- RTCRtcpParameters -->
        - `cname`
          - : A read-only string giving the canonical name (CNAME) used by RTCP (e.g., in SDES messages).
        - `reducedSize`
          - : A read-only boolean that is `True` if reduced size RTCP is configured ({{rfc("5506")}}), and `False` if compound RTCP is specified ({{rfc("3550")}}).

    - `degradationPreference` {{optional_inline}}
      - : Specifies the preferred way in which the WebRTC layer should handle optimizing performance in constrained-bandwidth situations. The possible values are:
        - `balanced`
          - : The default value. The browser will balance degradation of framerate and resolution.
        - `maintain-framerate`
          - : The browser will degrade resolution to maintain framerate.
        - `maintain-resolution`
          - : The browser will degrade framerate to maintain resolution.
        - `maintain-framerate-and-resolution`
          - : The browser will maintain framerate and resolution regardless of video quality, which may cause frames to be dropped before encoding if necessary so as not to overuse network and encoder resources. This setting is useful for applications that implement their own video encoding quality and performance optimization mechanism, and don't want the browser's own internal mechanism to interfere with it.

- `setParameterOptions` {{optional_inline}}
  - : An object containing options for this call to `setParameters()`.
    The available options are:
    - `encodingOptions` {{optional_inline}}
      - : An array of objects that set options for each encoding in the `parameters` object's [`encodings`](#encodings) array.
        The object at each index applies to the encoding at the same index.
        If the array isn't empty, it must have the same number of items as `encodings`.
        The default value is an empty array, which sets no options.
        This option is ignored if the sender sends audio.

        Each object in the array may have the following property: <!-- RTCEncodingOptions -->
        - `keyFrame` {{optional_inline}}
          - : A boolean value.
            If `true`, the browser asks the encoder that produces the matching encoding to generate a [key frame](#requesting_key_frames).
            The default value is `false`.

### Return value

A {{jsxref("Promise")}} that resolves when the {{domxref("RTCRtpSender.track")}} property is updated with the given parameters.
The promise doesn't wait for the encoder to generate any key frames requested in `setParameterOptions`.

### Exceptions

If an error occurs, the returned promise is rejected with the appropriate exception from the list below.

- `InvalidModificationError` {{domxref("DOMException")}}
  - : Returned if one of the following problems is detected:
    - The number of encodings specified in the `parameters` object's `encodings` property does not match the number of encodings currently listed for the `RTCRtpSender`.
      You cannot change the number of encoding options after the sender has been created.
    - The order of the specified `encodings` has changed from the current list's order.
    - An attempt has been made to alter a property that cannot be changed after the sender is first created.
    - The `setParameterOptions` object's `encodingOptions` array is not empty and does not have the same number of items as the `parameters` object's `encodings` array.
      The browser skips this check if the sender sends audio.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the transceiver, of which the `RTCRtpSender` is a part, is not running or has no parameters to set.
- `OperationError` {{domxref("DOMException")}}
  - : Returned if an error occurs that does not match the ones specified here.
- {{jsxref("RangeError")}}
  - : Returned if the value specified for `scaleResolutionDownBy` option is less than 1.0 — which would result in scaling up rather than down, which is not allowed; or if one or more of the specified `encodings` [`maxFramerate`](#maxframerate) values is less than 0.0.

In addition, if a WebRTC error occurs while configuring or accessing the media, an {{domxref("RTCError")}} is thrown with its {{domxref("RTCError.errorDetail", "errorDetail")}} set to `hardware-encoder-error`.

## Description

### Getting and setting parameters

The `parameters` object that you pass to `setParameters()` must be one returned by the same sender's {{domxref("RTCRtpSender.getParameters", "getParameters()")}} method, with your changes made to it.
You must also call `setParameters()` straight after `getParameters()`, without waiting for anything in between, such as with `await`.
This is because the sender discards its record of the parameters it returned shortly after `getParameters()` runs.
The browser uses this record, including the object's `transactionId`, to check that your changes are based on the sender's current configuration rather than an out-of-date one.
If you don't follow these rules, the promise rejects with an `InvalidStateError` or an `InvalidModificationError`.

### Requesting key frames

You can use `setParameters()` to ask the encoder that produces a video encoding to generate a key frame.
This lets you provide a key frame when you change the encodings, so that receivers don't have to request one.

A key frame contains a complete image, while the frames between key frames contain only the changes since the frame before.
A receiver therefore can't start decoding video until it gets a key frame.
The browser generates key frames automatically when sending starts and when a receiver asks for one because it has just joined or has lost data.
However, it doesn't necessarily generate one when you change the encodings.

For example, with [simulcast](/en-US/docs/Web/API/WebRTC_API/Protocols#simulcast), a sender sends several encodings of the same video at different resolutions, and a server forwards one of them to each participant.
If you set the high-resolution encoding's `active` property to `false`, the server switches the participants who were receiving it to a lower-resolution encoding.
Those participants can't display the lower-resolution video until that encoding sends its next key frame.
To avoid that wait, set `keyFrame` to `true` in `setParameterOptions.encodingOptions` for the encodings that need a key frame, in the same `setParameters()` call that changes the encodings.
The browser then requests the key frames while it applies the change.

## Examples

One use case for `setParameters()` is to try to reduce network bandwidth used in constrained environments by altering the resolution and/or bit rate of the media being transmitted by the {{domxref("RTCRtpSender")}}.

Currently, some browsers have limitations on their implementations that may cause issues.
For that reason, the first two examples cover this use case.
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
  params.encodings ??= [{}];
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

### Requesting key frames when deactivating an encoding

This example shows how to request key frames when you stop sending one of several encodings.
It assumes a video call in which the sender uses simulcast to send several encodings at different resolutions, and a server forwards one of them to each participant.
When the code deactivates an encoding, the server switches the participants who were receiving it to one of the other encodings, and they can't display that video until they get a key frame.
The code therefore requests a key frame from every encoding that is still active.

The `deactivateEncoding()` function gets the sender's current parameters and sets `active` to `false` for the encoding at `deactivateIndex`.
It then creates an `encodingOptions` array with one object for each item in `params.encodings`, setting `keyFrame` to `true` for every encoding that is still active.
Finally, it passes the changed parameters and the options to `setParameters()`, which requests the key frames while it applies the encoding change.

```js
async function deactivateEncoding(sender, deactivateIndex) {
  const params = sender.getParameters();
  params.encodings[deactivateIndex].active = false;
  const encodingOptions = params.encodings.map((encoding) => ({
    keyFrame: encoding.active,
  }));
  await sender.setParameters(params, { encodingOptions });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCRtpScriptTransformer.generateKeyFrame()")}}
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [Codecs used by WebRTC](/en-US/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- [Web media technologies](/en-US/docs/Web/Media)
