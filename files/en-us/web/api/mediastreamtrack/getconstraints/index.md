---
title: "MediaStreamTrack: getConstraints() method"
short-title: getConstraints()
slug: Web/API/MediaStreamTrack/getConstraints
page-type: web-api-instance-method
browser-compat: api.MediaStreamTrack.getConstraints
---

{{APIRef("Media Capture and Streams")}}

The **`getConstraints()`** method of
the {{domxref("MediaStreamTrack")}} interface returns an object containing the set of constraints most
recently established for the track using a prior call to
{{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}}. These
constraints indicate values and ranges of values that the website or application has
specified are required or acceptable for the included constrainable properties.

Constraints can be used to ensure that the media meets certain guidelines you prefer.
For example, you may prefer high definition video but require that the frame rate be a
little low to help keep the data rate low enough not overtax the network. Constraints
can also specify ideal and/or acceptable sizes or ranges of sizes. See [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints) for details on how to work with constrainable properties.

## Syntax

```js-nolint
getConstraints()
```

### Parameters

None.

### Return value

An object which indicates the constrainable
properties the website or app most recently set using
{{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}}. The properties
in the returned object are listed in the same order as when they were set, and only
properties specifically set by the site or app are included.

> [!NOTE]
> The returned set of constraints doesn't necessarily describe
> the actual state of the media. Even if any of the constraints couldn't be met, they
> are still included in the returned object as originally set by the site's code. To get
> the currently active settings for all constrainable properties, you should instead
> call {{domxref("MediaStreamTrack.getSettings", "getSettings()")}}.

The **`MediaTrackConstraints`** dictionary is used to describe a set of media capabilities and the value or values each can take on.

A constraints dictionary is passed into the {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} method of the {{domxref("MediaStreamTrack")}} interface to allow a script to establish a set of exact (required) values or ranges and/or preferred values or ranges of values for the track.

The most recently-requested set of custom constraints can be retrieved by calling {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}}.

Objects of this type may also be passed to:

- The {{domxref("MediaDevices.getUserMedia()")}} method, to specify constraints on a media stream requested from hardware such as a camera or microphone.

- The {{domxref("MediaDevices.getDisplayMedia()")}} method, to specify constraints on a media stream requested from a screen or window capture.

## Constraints

The following types are used to specify a constraint for a property.
They allow you to specify one or more `exact` values from which one must be the parameter's value, or a set of `ideal` values which should be used if possible.
You can also specify a single value (or an array of values) which the user agent will do its best to match once all more stringent constraints have been applied.

To learn more about how constraints work, see [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

> [!NOTE]
> `min` and `exact` values are not permitted in constraints used in {{domxref("MediaDevices.getDisplayMedia()")}} calls — they produce a `TypeError` — but they are allowed in constraints used in {{domxref("MediaStreamTrack.applyConstraints()")}} calls.

### ConstrainBoolean

The `ConstrainBoolean` constraint type is used to specify a constraint for a property whose value is a Boolean value.
Its value may either be set to a Boolean (`true` or `false`) or an object containing the following properties:

- `exact`
  - : A Boolean which must be the value of the property.
    If the property can't be set to this value, matching will fail.
- `ideal`
  - : A Boolean specifying an ideal value for the property.
    If possible, this value will be used, but if it's not possible, the user agent will use the closest possible match.

### ConstrainBooleanOrDOMString

The `ConstrainBooleanOrDOMString` constraint type is used to specify a constraint for a property whose value is a Boolean or string value. It can take values as specified in the [`ConstrainBoolean`](#constrainboolean) and [`ConstrainDOMString`](#constraindomstring) sections.

### ConstrainDouble

The `ConstrainDouble` constraint type is used to specify a constraint for a property whose value is a double-precision floating-point number.
Its value may either be set to a number or an object containing the following properties:

- `max`
  - : A decimal number specifying the largest permissible value of the property it describes.
    If the value cannot remain equal to or less than this value, matching will fail.
- `min`
  - : A decimal number specifying the smallest permissible value of the property it describes.
    If the value cannot remain equal to or greater than this value, matching will fail.
- `exact`
  - : A decimal number specifying a specific, required, value the property must have to be considered acceptable.
- `ideal`
  - : A decimal number specifying an ideal value for the property.
    If possible, this value will be used, but if it's not possible, the user agent will use the closest possible match.

### ConstrainDOMString

The `ConstrainDOMString` constraint type is used to specify a constraint for a property whose value is a string.
Its value may either be set to a string, an array of strings, or an object containing the following properties:

- `exact`
  - : A string or an array of strings, one of which must be the value of the property.
    If the property can't be set to one of the listed values, matching will fail.
- `ideal`
  - : A string or an array of strings, specifying ideal values for the property.
    If possible, one of the listed values will be used, but if it's not possible, the user agent will use the closest possible match.

### ConstrainULong

The `ConstrainULong` constraint type is used to specify a constraint for a property whose value is an integer.
Its value may either be set to a number or an object containing the following properties:

- `max`
  - : An integer specifying the largest permissible value of the property it describes.
    If the value cannot remain equal to or less than this value, matching will fail.
- `min`
  - : An integer specifying the smallest permissible value of the property it describes.
    If the value cannot remain equal to or greater than this value, matching will fail.
- `exact`
  - : An integer specifying a specific, required, value the property must have to be considered acceptable.
- `ideal`
  - : An integer specifying an ideal value for the property.
    If possible, this value will be used, but if it's not possible, the user agent will use the closest possible match.

## Instance properties

Some combination—but not necessarily all—of the following properties will exist on the object.
This may be because a given browser doesn't support the property, or because it doesn't apply
For example, because {{Glossary("RTP")}} doesn't provide some of these values during negotiation of a WebRTC connection, a track associated with a {{domxref("RTCPeerConnection")}} will not include certain values, such as {{domxref("MediaTrackConstraints.facingMode", "facingMode")}} or {{domxref("MediaTrackConstraints.groupId", "groupId")}}.

### Instance properties of all media tracks

- {{domxref("MediaTrackConstraints.deviceId", "deviceId")}}
  - : The {{domxref("MediaTrackConstraints")}} dictionary's
    **`deviceId`** property is a [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring)
    describing the requested or mandatory constraints placed upon the value of the
    [`deviceId`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#deviceid) constrainable property.

    If needed, you can determine whether or not this constraint is supported by checking
    the value of [`deviceId`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#deviceid) as returned by a
    call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
    is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    Because {{Glossary("RTP")}} doesn't include this information, tracks associated with a
    [WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}}
    will never include this property.

    An object based on [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) specifying one or more acceptable,
    ideal, and/or exact (mandatory) device IDs which are acceptable as the source of media
    content.

    Device IDs are unique for a given origin, and are guaranteed to be the same across
    browsing sessions on the same origin. However, the value of the `deviceId` is
    determined by the source of the track's content, and there's no particular format
    mandated by the specification (although some kind of GUID is recommended). That means
    that a given track will only return one value for the `deviceId` when you
    call {{domxref("MediaStreamTrack.getCapabilities", "getCapabilities()")}}.

    Because of this, there's no use for the device ID when calling
    {{domxref("MediaStreamTrack.applyConstraints()")}}, since there is only one possible
    value; however, you can record a `deviceId` and use it to ensure that you get
    the same source for multiple calls to {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}.

    > [!NOTE]
    > An exception to the rule that device IDs are the same across browsing sessions:
    > private browsing mode will use a different ID, and will change it each browsing
    > session.

- {{domxref("MediaTrackConstraints.groupId", "groupId")}}
  - : The {{domxref("MediaTrackConstraints")}} dictionary's
    **`groupId`** property is a [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring)
    describing the requested or mandatory constraints placed upon the value of the
    [`groupId`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#groupid) constrainable property.

    If needed, you can determine whether or not this constraint is supported by checking
    the value of [`groupId`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#groupid) as returned by a call
    to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is
    unnecessary since browsers will ignore any constraints they're unfamiliar with.

    An object based on [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) specifying one or more acceptable,
    ideal, and/or exact (mandatory) group IDs which are acceptable as the source of media
    content.

    Group IDs are unique for a given origin for the duration of a single browsing session,
    and are shared by all media sources that come from the same physical device. For
    example, the microphone and speaker on the same headset would share a group ID. This
    makes it possible to use the group ID to ensure that the audio and input devices are on
    the same headset by retrieving the group ID of the input device and specifying it when
    asking for an output device, perhaps.

    However, the value of the `groupId` is determined by the source of the
    track's content, and there's no particular format mandated by the specification
    (although some kind of GUID is recommended). That means that a given track will only
    return one value for the `groupId` when you call
    {{domxref("MediaStreamTrack.getCapabilities", "getCapabilities()")}}, and keep in mind
    that this value will change for each browsing session.

    Because of this, there's no use for the group ID when calling
    {{domxref("MediaStreamTrack.applyConstraints()")}}, since there is only one possible
    value, and you can't use it to ensure the same group is used across multiple browsing
    sessions when calling `getUserMedia()`.

### Instance properties of audio tracks

- {{domxref("MediaTrackConstraints.autoGainControl", "autoGainControl")}}
  - : The {{domxref("MediaTrackConstraints")}} dictionary's **`autoGainControl`** property is a [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) describing the requested or mandatory constraints placed
    upon the value of the [`autoGainControl`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#autogaincontrol) constrainable property.

    If needed, you can determine whether or not this constraint is supported by checking
    the value of [`autoGainControl`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#autogaincontrol) as returned
    by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically
    this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    Automatic gain control is typically a feature provided by microphones, although it can
    be provided by other input sources as well.

    If this value is a simple `true` or `false`, the user agent will
    attempt to obtain media with automatic gain control enabled or disabled as specified, if
    possible, but will not fail if this can't be done. If, instead, the value is given as an
    object with an `exact` field, that field's Boolean value indicates a required
    setting for the automatic gain control feature; if it can't be met, then the request
    will result in an error.

- {{domxref("MediaTrackConstraints.channelCount", "channelCount")}}
  - : The {{domxref("MediaTrackConstraints")}} dictionary's
    **`channelCount`** property is a [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong)
    describing the requested or mandatory constraints placed upon the value of the
    [`channelCount`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#channelcount) constrainable property.

    If needed, you can determine whether or not this constraint is supported by checking
    the value of [`channelCount`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#channelcount) as returned by a
    call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
    is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    If this value is a number, the user agent will attempt to obtain media whose channel
    count is as close as possible to this number given the capabilities of the hardware and
    the other constraints specified. Otherwise, the value of this
    [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong) will guide the user agent in its efforts to provide an
    exact match to the required channel count (if `exact` is specified or both
    `min` and `max` are provided and have the same value) or to a
    best-possible value.

    The channel count is 1 for monaural sound, 2 for stereo, and so forth.

- {{domxref("MediaTrackConstraints.echoCancellation", "echoCancellation")}}
  - : The {{domxref("MediaTrackConstraints")}} dictionary's
    **`echoCancellation`** property is a
    [`ConstrainBooleanOrDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constrainbooleanordomstring) describing the requested or mandatory constraints placed
    upon the value of the [`echoCancellation`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#echocancellation) constrainable property.

    If needed, you can determine whether or not this constraint is supported by checking
    the value of [`echoCancellation`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#echocancellation) as returned
    by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically
    this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    A boolean, a string, or a [`ConstrainBooleanOrDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constrainbooleanordomstring) object.

    If the browser supports specific echo cancellation types, the value can be set as one of the following:

    - `"all"` {{experimental_inline}}
      - : All user system-generated audio captured by the user's microphone is removed. This is useful for example in situations where you want to avoid capturing privacy-sensitive audio such as screen reader output and system notifications.
    - `"remote-only"` {{experimental_inline}}
      - : Only user system-generated audio captured by the user's microphone from remote sources (as represented by {{domxref("MediaStreamTrack")}}s sourced from an {{domxref("RTCPeerConnection")}}) is removed. This is useful when you want to remove echo from communication with remote peers but still share local audio, such as in the case of a music lesson where the teacher wants to hear their student(s) playing along to an audio track but still communicate clearly with them.
    - `true`
      - : The browser decides what audio will be removed from the signals recorded by the microphone. It must attempt to cancel at least as much as `remote-only` and should attempt to cancel as much as `all`.
    - `false`
      - : No audio is removed; no echo cancellation will take place.

    If the browser doesn't support specific echo cancellation types, the value can be `true` or `false`.

    If set as one of the above values, the user agent will attempt to obtain media with echo cancellation enabled or disabled as specified, if possible, but will not fail if this can't be done.

    If the value is given as an object with an `exact` field, that field's value indicates a required setting for the echo cancellation feature; if it can't be met, then the request will result in an error.

- {{domxref("MediaTrackConstraints.latency", "latency")}}
  - : The {{domxref("MediaTrackConstraints")}} dictionary's
    **`latency`** property is a [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble)
    describing the requested or mandatory constraints placed upon the value of the
    [`latency`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#latency) constrainable property.

    If needed, you can determine whether or not this constraint is supported by checking
    the value of [`latency`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#latency) as returned by a call
    to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is
    unnecessary since browsers will ignore any constraints they're unfamiliar with.

    Because {{Glossary("RTP")}} doesn't include this information, tracks associated with a
    [WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}}
    will never include this property.

    A [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble) describing the acceptable or required value(s) for an
    audio track's latency, with values specified in seconds. In audio processing, latency is
    the time between the start of processing (when sound occurs in the real world, or is
    generated by a hardware device) and the data being made available to the next step in
    the audio input or output process. In most cases, low latency is desirable for
    performance and user experience purposes, but when power consumption is a concern, or
    delays are otherwise acceptable, higher latency might be acceptable.

    If this property's value is a number, the user agent will attempt to obtain media whose
    latency tends to be as close as possible to this number given the capabilities of the
    hardware and the other constraints specified. Otherwise, the value of this
    [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble) will guide the user agent in its efforts to provide an
    exact match to the required latency (if `exact` is specified or both
    `min` and `max` are provided and have the same value) or to a
    best-possible value.

    > [!NOTE]
    > Latency is always prone to some variation due to hardware usage demands, network
    > constraints, and so forth, so even in an "exact" match, some variation should be
    > expected.

- {{domxref("MediaTrackConstraints.noiseSuppression", "noiseSuppression")}}
  - : The {{domxref("MediaTrackConstraints")}} dictionary's **`noiseSuppression`** property is a [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) describing the requested or mandatory constraints placed upon the value of the [`noiseSuppression`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#noisesuppression) constrainable property.

    If needed, you can determine whether or not this constraint is supported by checking
    the value of [`noiseSuppression`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#noisesuppression) as returned
    by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically
    this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    Noise suppression is typically provided by microphones, although it can be provided by
    other input sources as well.

    If this value is a simple `true` or `false`, the user agent will
    attempt to obtain media with noise suppression enabled or disabled as specified, if
    possible, but will not fail if this can't be done. If, instead, the value is given as an
    object with an `exact` field, that field's Boolean value indicates a required
    setting for the noise suppression feature; if it can't be met, then the request will
    result in an error.

- {{domxref("MediaTrackConstraints.sampleRate", "sampleRate")}}
  - : The {{domxref("MediaTrackConstraints")}} dictionary's
    **`sampleRate`** property is a [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong)
    describing the requested or mandatory constraints placed upon the value of the
    [`sampleRate`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#samplerate) constrainable property.

    If needed, you can determine whether or not this constraint is supported by checking
    the value of [`sampleRate`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#samplerate) as returned by a
    call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
    is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    If this value is a number, the user agent will attempt to obtain media whose sample
    rate is as close as possible to this number given the capabilities of the hardware and
    the other constraints specified. Otherwise, the value of this
    [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong) will guide the user agent in its efforts to provide an
    exact match to the required sample rate (if `exact` is specified or both
    `min` and `max` are provided and have the same value) or to a
    best-possible value.

- {{domxref("MediaTrackConstraints.sampleSize", "sampleSize")}}
  - : The {{domxref("MediaTrackConstraints")}} dictionary's
    **`sampleSize`** property is a [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong)
    describing the requested or mandatory constraints placed upon the value of the
    [`sampleSize`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#samplesize) constrainable property.

    If needed, you can determine whether or not this constraint is supported by checking
    the value of [`sampleSize`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#samplesize) as returned by a
    call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
    is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    If this value is a number, the user agent will attempt to obtain media whose sample
    size (in bits per linear sample) is as close as possible to this number given the
    capabilities of the hardware and the other constraints specified. Otherwise, the value
    of this [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong) will guide the user agent in its efforts to provide
    an exact match to the required sample size (if `exact` is specified or both
    `min` and `max` are provided and have the same value) or to a
    best-possible value.

    > [!NOTE]
    > Since this property can only represent linear sample sizes, this constraint can only
    > be met by devices that can produce audio with linear samples.

- {{domxref("MediaTrackConstraints.volume", "volume")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : The {{domxref("MediaTrackConstraints")}} dictionary's
    **`volume`** property is a [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble)
    describing the requested or mandatory constraints placed upon the value of the
    [`volume`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#volume) constrainable property.

    If needed, you can determine whether or not this constraint is supported by checking
    the value of [`volume`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#volume) as returned by a call
    to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is
    unnecessary since browsers will ignore any constraints they're unfamiliar with.

    A [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble) describing the acceptable or required value(s) for an
    audio track's volume, on a linear scale where 0.0 means silence and 1.0 is the highest
    supported volume.

    If this value is a number, the user agent will attempt to obtain media whose volume is
    as close as possible to this number given the capabilities of the hardware and the other
    constraints specified. Otherwise, the value of this [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble) will
    guide the user agent in its efforts to provide an exact match to the required volume (if
    `exact` is specified or both `min` and `max` are
    provided and have the same value) or to a best-possible value.

    Any constraint set which only permits values outside the range 0.0 to 1.0 cannot be
    satisfied and will result in failure.

### Instance properties of image tracks

- `whiteBalanceMode`
  - : A {{jsxref("String")}} specifying one of `"none"`, `"manual"`, `"single-shot"`, or `"continuous"`.
- `exposureMode`
  - : A {{jsxref("String")}} specifying one of `"none"`, `"manual"`, `"single-shot"`, or `"continuous"`.
- `focusMode`
  - : A {{jsxref("String")}} specifying one of `"none"`, `"manual"`, `"single-shot"`, or `"continuous"`.
- `pointsOfInterest`
  - : The pixel coordinates on the sensor of one or more points of interest.
    This is either an object in the form { x:_value_, y:_value_ } or an array of such objects, where _value_ is a double-precision integer.
- `exposureCompensation`
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying f-stop adjustment by up to ±3.
- `colorTemperature`
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying a desired color temperature in degrees kelvin.
- `iso`
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying a desired iso setting.
- `brightness`
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying a desired brightness setting.
- `contrast`
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying the degree of difference between light and dark.
- `saturation`
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying the degree of color intensity.
- `sharpness`
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying the intensity of edges.
- `focusDistance`
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying distance to a focused object.
- `zoom`
  - : A [`ConstrainDouble`](#constraindouble) (a double-precision integer) specifying the desired focal length.
- `torch`
  - : A boolean value defining whether the fill light is continuously connected, meaning it stays on as long as the track is active.

### Instance properties of video tracks

- {{domxref("MediaTrackConstraints.aspectRatio", "aspectRatio")}}
  - : The {{domxref("MediaTrackConstraints")}} dictionary's **`aspectRatio`** property is a [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble) describing the requested or mandatory constraints placed upon the value of the
    [`aspectRatio`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#aspectratio) constrainable property.

    If needed, you can determine whether or not this constraint is supported by checking
    the value of [`aspectRatio`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#aspectratio) as returned by a
    call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
    is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    A [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble) describing the acceptable or required value(s) for a
    video track's {{glossary("aspect ratio")}}. The value is the width divided by the height and is rounded
    to ten decimal places. For example, the standard high-definition video aspect ratio of
    16:9 can be computed as 1920/1080, or 1.7777777778.

    If this value is a number, the user agent will attempt to obtain media whose aspect
    ratio is as close as possible to this number given the capabilities of the hardware and
    the other constraints specified. Otherwise, the value of this
    [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble) will guide the user agent in its efforts to provide an
    exact match to the required aspect ratio (if `exact` is specified or both
    `min` and `max` are provided and have the same value) or to a
    best-possible value.

- {{domxref("MediaTrackConstraints.facingMode", "facingMode")}}
  - : The {{domxref("MediaTrackConstraints")}} dictionary's
    **`facingMode`** property is a [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring)
    describing the requested or mandatory constraints placed upon the value of the
    [`facingMode`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#facingmode) constrainable property.

    If needed, you can determine whether or not this constraint is supported by checking
    the value of [`facingMode`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#facingmode) as returned by a
    call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
    is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    Because {{Glossary("RTP")}} doesn't include this information, tracks associated with a
    [WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}}
    will never include this property.

    An object based on [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) specifying one or more acceptable,
    ideal, and/or exact (mandatory) facing modes are acceptable for a video track.

    An `exact` value in this case indicates that the specified facing mode is
    specifically required; for example:

    ```js
    const constraints = {
      facingMode: { exact: "user" },
    };
    ```

    This indicates that only a user-facing camera is acceptable; if there is no user-facing
    camera, or the user declines permission to use that camera, the media request will fail.

    The following strings are permitted values for the facing mode. These may represent
    separate cameras, or they may represent directions in which an adjustable camera can be
    pointed.

    - `"user"`
      - : The video source is facing toward the user; this includes, for example, the
        front-facing camera on a smartphone.
    - `"environment"`
      - : The video source is facing away from the user, thereby viewing their environment.
        This is the back camera on a smartphone.
    - `"left"`
      - : The video source is facing toward the user but to their left, such as a camera aimed
        toward the user but over their left shoulder.
    - `"right"`
      - : The video source is facing toward the user but to their right, such as a camera
        aimed toward the user but over their right shoulder.

- {{domxref("MediaTrackConstraints.frameRate", "frameRate")}}
  - : The {{domxref("MediaTrackConstraints")}} dictionary's
    **`frameRate`** property is a [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble)
    describing the requested or mandatory constraints placed upon the value of the
    [`frameRate`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#framerate) constrainable property.

    If needed, you can determine whether or not this constraint is supported by checking
    the value of [`frameRate`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#framerate) as returned by a
    call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
    is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    A [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble) describing the acceptable or required value(s) for a
    video track's frame rate, in frames per second.

    If this value is a number, the user agent will attempt to obtain media whose frame rate
    is as close as possible to this number given the capabilities of the hardware and the
    other constraints specified. Otherwise, the value of this [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble)
    will guide the user agent in its efforts to provide an exact match to the required frame
    rate (if `exact` is specified or both `min` and `max`
    are provided and have the same value) or to a best-possible value.

- {{domxref("MediaTrackConstraints.height", "height")}}
  - : The {{domxref("MediaTrackConstraints")}} dictionary's
    **`height`** property is a [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong)
    describing the requested or mandatory constraints placed upon the value of the
    [`height`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#height) constrainable property.

    If needed, you can determine whether or not this constraint is supported by checking
    the value of [`height`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#height) as returned by a call
    to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is
    unnecessary since browsers will ignore any constraints they're unfamiliar with.

    If this value is a number, the user agent will attempt to obtain media whose height is
    as close as possible to this number given the capabilities of the hardware and the other
    constraints specified. Otherwise, the value of this [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong) will
    guide the user agent in its efforts to provide an exact match to the required height (if
    `exact` is specified or both `min` and `max` are
    provided and have the same value) or to a best-possible value.

- {{domxref("MediaTrackConstraints.width", "width")}}
  - : The {{domxref("MediaTrackConstraints")}} dictionary's
    **`width`** property is a [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong)
    describing the requested or mandatory constraints placed upon the value of the
    [`width`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#width) constrainable property.

    If needed, you can determine whether or not this constraint is supported by checking
    the value of [`width`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#width) as returned by a call
    to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is
    unnecessary since browsers will ignore any constraints they're unfamiliar with.

    If this value is a number, the user agent will attempt to obtain media whose width is
    as close as possible to this number given the capabilities of the hardware and the other
    constraints specified. Otherwise, the value of this [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong) will
    guide the user agent in its efforts to provide an exact match to the required width (if
    `exact` is specified or both `min` and `max` are
    provided and have the same value) or to a best-possible value.

- `resizeMode`
  - : A [`ConstrainDOMString`](#constraindomstring) object specifying a mode or an array of modes the UA can use to derive the resolution and frame rate of a video track.
    Allowed values are:
    - `crop-and-scale`
      - : The user agent can use cropping and downscaling of resolution or frame rate on the raw output from the hardware/OS, in order to satisfy other constraints.
        This constraint allows developers to get a downscaled video even if the particular format indicated by their constraints is not natively supported by the hardware.
    - `none`
      - : The user agent uses the resolution provided by the underlying hardware, such as a camera or its driver, or the OS.

    If `resizeMode` is unspecified the browser will choose a resolution based on a [fitness distance](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance) that considers the specified constraints and _both_ of the allowed values.

### Instance properties of shared screen tracks

These constraints apply to the `video` property of the object passed into {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} to obtain a stream for screen sharing.

- {{domxref("MediaTrackConstraints.displaySurface", "displaySurface")}}
  - : A [`ConstrainDOMString`](#constraindomstring) which specifies the types of display surface that may be selected by the user.
    This may be a single one of the following strings, or a list of them to allow multiple source surfaces:
    - `browser`
      - : The stream contains the contents of a single browser tab selected by the user.
    - `monitor`
      - : The stream's video track contains the entire contents of one or more of the user's screens.
    - `window`
      - : The stream contains a single window selected by the user for sharing.

    The {{domxref("MediaTrackConstraints")}} dictionary's **`displaySurface`** property is a [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) describing the preferred value for the [`displaySurface`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#displaysurface) constrainable property.

    This is set by the application to identify to the user agent the type of display surface (`window`, `browser`, or `monitor`) preferred by the application. It has no effect on what the user can choose to share, but may be used to present the options in a different order.

    If needed, you can determine whether or not this constraint is supported by checking the value of [`displaySurface`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#displaysurface) as returned by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) which specifies the type of display surface preferred by the application.
    This value _does not_ add or remove display sources in the browser's user interface, but may reorder them. You can't use this property to limit the user to a subset of the three display-surface values `window`, `browser`, and `monitor` — but, as you will see below, you can see what was chosen, and reject it.

    See [how constraints are defined](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#how_constraints_are_defined).

    > [!NOTE]
    > You cannot set [`monitorTypeSurfaces: "exclude"`](/en-US/docs/Web/API/MediaDevices/getDisplayMedia#monitortypesurfaces) at the same time as `displaySurface: "monitor"` as the two settings are contradictory. Trying to do so will result in the associated `getDisplayMedia()` call failing with a `TypeError`.

- {{domxref("MediaTrackConstraints.logicalSurface", "logicalSurface")}}
  - : A [`ConstrainBoolean`](#constrainboolean) value which may contain a single Boolean value or a set of them, indicating whether or not to allow the user to choose source surfaces which do not directly correspond to display areas.
    These may include backing buffers for windows to allow capture of window contents that are hidden by other windows in front of them, or buffers containing larger documents that need to be scrolled through to see the entire contents in their windows.

    The {{domxref("MediaTrackConstraints")}} dictionary's **`logicalSurface`** property is a [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) describing the requested or mandatory constraints placed upon the value of the [`logicalSurface`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#logicalsurface) constrainable property.

    This is used to specify whether or
    not {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} should allow the
    user to choose display surfaces which are not necessarily fully visible on the screen,
    such as occluded windows or the complete content of windows which are large enough to
    require scrolling to see their entire contents.

    If needed, you can determine whether or not this constraint is supported by checking
    the value of [`logicalSurface`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#logicalsurface) as returned by
    a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
    is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    A [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) which is `true` if logical surfaces should be permitted among the selections available to the user.

    See [how constraints are defined](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#how_constraints_are_defined).

- {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback", "suppressLocalAudioPlayback")}} {{Experimental_Inline}}
  - : The {{domxref("MediaTrackConstraints")}} dictionary's **`suppressLocalAudioPlayback`** property is a [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) describing the requested or mandatory constraints placed upon the value of the [`suppressLocalAudioPlayback`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#suppresslocalaudioplayback) constrainable property. This property controls whether the audio playing in a tab will continue to be played out of a user's local speakers when the tab is captured.

    If needed, you can determine whether or not this constraint is supported by checking
    the value of [`suppressLocalAudioPlayback`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#suppresslocalaudioplayback) as returned
    by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically
    this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

    A [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) value.

    If this value is a simple `true` or `false`, the user agent will
    attempt to obtain media with local audio playback enabled or disabled as specified, if
    possible, but will not fail if this can't be done.

    If the value is given as `ideal`, that field's boolean value indicates an ideal
    setting for the local audio playback suppression feature; if it can't be met, then the request will
    result in an error.

- {{domxref("MediaTrackConstraints.restrictOwnAudio", "restrictOwnAudio")}} {{Experimental_Inline}}
  - : The {{domxref("MediaTrackConstraints")}} dictionary's **`restrictOwnAudio`** property is a [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) that specifies the requested or mandatory constraints placed on the value of the [`restrictOwnAudio`](/en-US/docs/Web/API/MediaStreamTrack/getSettings#restrictownaudio) constrainable property.

    This property controls whether system audio originating from the capturing tab is filtered out of screen capture, allowing for cleaner screen recordings in some cases. For example, if the capturing web page itself is playing embedded audio or video, that audio would be included in the capture. Since this could lead to an undesirable echo or interfere with the intended audio sources from other tabs or applications, removing it from the capture is desirable.

    If needed, you can determine whether or not this constraint is supported by checking
    the value of [`restrictOwnAudio`](/en-US/docs/Web/API/MediaDevices/getSupportedConstraints#restrictownaudio), as returned
    by {{domxref("MediaDevices.getSupportedConstraints()")}}. However,
    this is rarely necessary since browsers typically ignore any constraints they don't recognize.

    A [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) value.

    If the value is `true`, the user agent will attempt to remove any audio originating from the tab that called {{domxref("MediaDevices.getDisplayMedia()")}} to initiate screen capture. If removal of audio via processing fails, the user agent may exclude all audio originating from the capturing tab.

    > [!NOTE]
    > If the captured display surface doesn't include system audio, this setting will have no effect.

    If the value is given as `exact`, that field's boolean value indicates an exact requirement for the `restrictOwnAudio` feature; if the user agent can't meet this requirement, the request will result in an error.

    If the value is `false`, the user agent will not attempt to restrict any system audio originating from the capturing tab.

## Examples

### Using getConstraints

This example obtains the current constraints for a track, sets the `facingMode`, and applies the updated
constraints.

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

In addition, see the [Constraint exerciser](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) example that demonstrates how constraints are used.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaStreamTrack")}}
- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Using the Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaDevices.getUserMedia()")}}
- {{domxref("MediaDevices.getDisplayMedia()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
