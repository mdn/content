---
title: "MediaCapabilities: decodingInfo() method"
short-title: decodingInfo()
slug: Web/API/MediaCapabilities/decodingInfo
page-type: web-api-instance-method
browser-compat: api.MediaCapabilities.decodingInfo
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers}}

The **`decodingInfo()`** method of the {{domxref("MediaCapabilities")}} interface returns a promise that fulfils with information about how well the user agent can decode/display media with a given configuration.

The resolved object contains three boolean properties `supported`, `smooth`, and `powerefficient`, which indicate whether decoding the media described would be supported, and if so, whether decoding would be smooth and power-efficient.

The method can also be used to test the user agent capabilities for decoding media encoded with a key system, but only when called in the main thread and in a secure context.
If the configuration passed in the `configuration.keySystemConfiguration` property is supported for decoding the data, the resolved promise also includes a {{domxref("MediaKeySystemAccess")}} object that can be used to create a {{domxref("MediaKeys")}} object to setup encrypted playback.

> [!NOTE]
> Calling `decodingInfo()` with this property may result in user-visible effects, such as asking for permission to access one or more system resources.
> As such, this function should only be called when the application is ready to create and use a `MediaKeys` object with the provided configuration.

## Syntax

```js-nolint
decodingInfo(configuration)
```

### Parameters

- `configuration`

  - : An object with a property `type`, _either_ a `video` or `audio` property containing a configuration of the appropriate type, and optionally a `keySystemConfiguration` when decoding media encrypted with a key system: <!-- MediaDecodingConfiguration in the spec -->

    - `type`

      - : The type of media being tested. This takes one of three values:

        - `file`
          - : Represents a configuration that is meant to be used for a plain file playback.
        - `media-source`
          - : Represents a configuration that is meant to be used for playback of a {{domxref("MediaSource")}}.
        - `webrtc`
          - : Represents a configuration that is meant to be received using {{domxref("RTCPeerConnection")}} (not allowed when `keySystemConfiguration` is set).

    - `video`

      - : Configuration object for a video media source.
        This has the following properties: <!-- VideoConfiguration in the spec -->

        - `contentType`
          - : String containing a valid video MIME type, and (optionally) a [`codecs` parameter](/en-US/docs/Web/Media/Guides/Formats/codecs_parameter).
        - `width`
          - : The width of the video.
        - `height`
          - : The height of the video.
        - `bitrate`
          - : The number of bits used to encode one second of the video file.
        - `framerate`
          - : The number of frames making up one second of video playback.

    - `audio`

      - : Configuration object for an audio media source.
        This has the following properties: <!-- AudioConfiguration in the spec -->

        - `contentType`
          - : String containing a valid audio MIME type, and (optionally) a [`codecs` parameter](/en-US/docs/Web/Media/Guides/Formats/codecs_parameter).
        - `channels`
          - : The number of channels used by the audio track.
        - `bitrate`
          - : The number of bits used to encode one second of the audio file.
        - `samplerate`
          - : The number of audio samples making up one second of the audio file.

    - `keySystemConfiguration` {{optional_inline}}

      - : Object specifying the key system configuration for encrypted media.

        > **Note:** [`Navigator.requestMediaKeySystemAccess()`](/en-US/docs/Web/API/Navigator/requestMediaKeySystemAccess) takes arrays some of the same data types in its `supportedConfigurations` argument.

        If specified, the [`type`](#type) must be `media-source` or `file` (not `webrtc`).
        This has the following properties: <!-- MediaCapabilitiesKeySystemConfiguration in the spec -->

        - `keySystem`

          - : A string identifying the media key system.
            For example `org.w3.clearkey` or `com.widevine.alpha`.

        - `initDataType` {{optional_inline}}

          - : A string indicating the data type name the initialization data format, such as `"cenc"`, `"keyids"` and `"webm"`.
            Allowed names are defined in the [Encrypted Media Extensions Initialization Data Format Registry](https://www.w3.org/TR/eme-initdata-registry/).

        - `distinctiveIdentifier` {{optional_inline}}

          - : A string indicating whether the implementation may use "distinctive identifiers" (or distinctive permanent identifiers) for any operations associated with any object created from this configuration.
            The allowed values are:

            - `required`
              - : The returned object must support this feature.
            - `optional`
              - : The returned object may support this feature.
                This is the default
            - `not-allowed`
              - : The returned object must not support or use this feature.

        - `persistentState` {{optional_inline}}

          - : A string indicating whether the returned object must be able to persist session data or any other type of state.
            The allowed values are:

            - `required`
              - : The returned object must support this feature.
            - `optional`
              - : The returned object may support this feature.
                This is the default
            - `not-allowed`
              - : The returned object must not support or use this feature.
                Only "temporary" sessions may be created when persistent state is not allowed.

        - `sessionTypes` {{optional_inline}}

          - : An array of strings indicating the session types that must be supported.
            Permitted values include:

            - `temporary`
              - : A session for which the license, key(s) and record of or data related to the session are not persisted.
                The application does not need to manage such storage.
                Implementations must support this option, and it is the default.
            - `persistent-license`
              - : A session for which the license (and potentially other data related to the session) will be persisted.
                A record of the license and associated keys persists even if the license is destroyed, providing an attestation that the license and key(s) it contains are no longer usable by the client.

        - `audio` {{optional_inline}}

          - : The audio key system track configuration associated with the [`audio` configuration](#audio) above.
            If set, then the [`audio` configuration](#audio) must also be set.

            - `encryptionScheme`
              - : The encryption scheme associated with the content type, such as `cenc`, `cbcs`, `cbcs-1-9`.
                This value should be set by an application (it defaults to `null`, indicating that any encryption scheme may be used).
            - `robustness`
              - : The robustness level associated with the content type.
                The empty string indicates that any ability to decrypt and decode the content type is acceptable.

        - `video` {{optional_inline}}

          - : The video key system track configuration associated with the [`video` configuration](#video) above.
            If set, then the [`video` configuration](#video) must also be set.

            - `encryptionScheme`
              - : The encryption scheme associated with the content type, such as `cenc`, `cbcs`, `cbcs-1-9`.
                This value should be set by an application (it defaults to `null`, indicating that any encryption scheme may be used).
            - `robustness`
              - : The robustness level associated with the content type.
                The empty string indicates that any ability to decrypt and decode the content type is acceptable.

### Return value

A {{jsxref('Promise')}} fulfilling with an object containing the following attributes:

- `supported`
  - : `true` if the media content can be decoded at all. Otherwise, it is `false`.
- `smooth`
  - : `true` if playback of the media can be played at the frame rate specified by the configuration without needing to drop frames. Otherwise it is `false`.
- `powerEfficient`
  - : `true` if playback of the media will be power efficient. Otherwise, it is `false`.
- `keySystemAccess`
  - : A {{domxref("MediaKeySystemAccess")}} that can be used to create a {{domxref("MediaKeys")}} object to setup encrypted playback, or `null` if decoding is not supported using the supplied configuration.

Browsers will report a supported media configuration as `smooth` and `powerEfficient` until stats on this device have been recorded.
All supported audio codecs report `powerEfficient` as true.

### Exceptions

- {{jsxref("TypeError")}}

  - : Thrown if the `configuration` passed to the `decodingInfo()` method is invalid, either because the type is not video or audio, the `contentType` is not a valid codec MIME type, the media decoding configuration is not a valid value for the `type` (file, media-source, or webrtc), or any other error in the media configuration passed to the method, including omitting any values.

- `InvalidStateError` {{domxref("DOMException")}}

  - : The method is called in a worker when [`configuration.keySystemConfiguration`](#keysystemconfiguration) is defined.

- `SecurityError` {{domxref("DOMException")}}
  - : The method is called outside of a secure context and [`configuration.keySystemConfiguration`](#keysystemconfiguration) is defined.

## Usage notes

### Comparison with Navigator.requestMediaKeySystemAccess()

`decodingInfo()` and the {{domxref("Navigator.requestMediaKeySystemAccess()")}} method of the [Encrypted Media Extensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API) reflect fundamentally different approaches for selecting a configuration for decoding encrypted media.

The configuration parameter for `Navigator.requestMediaKeySystemAccess()` takes an array of possible configurations and allows the system to choose the one that it considers appropriate.

By contrast, `decodingInfo()` takes one configuration at a time.
The expectation is that the caller will execute `decodingInfo()` multiple times, starting with the most preferred configurations and stopping as soon as it finds a configuration that meets application requirements for being smooth, power-efficient, or both.
In other words, the selection decision is devolved to the caller.

## Examples

### Getting decoding information for unencrypted media files

This example shows how to create a media configuration for an audio file and then use it in `MediaCapabilities.decodingInfo()`.

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
//Create media configuration to be tested
const audioConfig = {
  type: "file", // or 'media-source' or 'webrtc'
  audio: {
    contentType: "audio/ogg; codecs=vorbis", // valid content type
    channels: 2, // audio channels used by the track
    bitrate: 132700, // number of bits used to encode 1s of audio
    samplerate: 5200, // number of audio samples making up that 1s.
  },
};

// check support and performance
navigator.mediaCapabilities.decodingInfo(audioConfig).then((result) => {
  if (result.supported) {
    log(
      `The audio configuration is supported${result.smooth ? ", smooth" : ", not smooth"}${result.powerEfficient ? ", power efficient" : ", not power efficient"}.`,
    );
  } else {
    log("The audio configuration is not supported");
  }
});
```

Similarly, the code below shows the configuration for a video file.

```js
const videoConfig = {
  type: "file",
  video: {
    contentType: "video/webm;codecs=vp8", // valid content type
    width: 800, // width of the video
    height: 600, // height of the video
    bitrate: 10000, // number of bits used to encode 1s of video
    framerate: 30, // number of frames making up that 1s.
  },
};

// check support and performance
navigator.mediaCapabilities.decodingInfo(videoConfig).then((result) => {
  if (result.supported) {
    log(
      `The video configuration is supported${result.smooth ? ", smooth" : ", not smooth"}${result.powerEfficient ? ", power efficient" : ", not power efficient"}.`,
    );
  } else {
    log("The video configuration is not supported");
  }
});
```

{{EmbedLiveSample("Getting decoding information for unencrypted media files")}}

### Getting decoding information for encrypted media

This example shows how you might use `decodingInfo()` to select a media configuration for encrypted content.

As in the previous example we define a media configuration, but this time we use the `type` of `media-source` (rather than `file`), and specify both audio and video content.
We also specify a simple `keySystemConfiguration`.

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const encryptedMediaConfig = {
  type: "media-source", // or 'file'
  audio: {
    contentType: "audio/webm; codecs=opus",
    channels: 2, // audio channels used by the track
    bitrate: 132700, // number of bits used to encode 1s of audio
    samplerate: 48000, // number of audio samples making up that 1s.
  },
  video: {
    contentType: 'video/webm; codecs="vp09.00.10.08"',
    width: 800, // width of the video
    height: 600, // height of the video
    bitrate: 10000, // number of bits used to encode 1s of video
    framerate: 30, // number of frames making up that 1s.
  },
  keySystemConfiguration: {
    keySystem: "org.w3.clearkey",
    initDataType: "webm",
    distinctiveIdentifier: "required",
  },
};
```

In the previous example we used [promise chaining](/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining), to wait on the result.
Here we've chosen to use [`async` and `await`](/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await) to wait on the result, and then log it.

```js
getDecodingInfo(encryptedMediaConfig);

async function getDecodingInfo(mediaConfig) {
  const result = await navigator.mediaCapabilities.decodingInfo(mediaConfig);
  console.log(result);
  if (!result.supported) {
    log("This encrypted media configuration is not supported.");
    return;
  }

  // keySystemAccess is returned if decoding encrypted media is supported
  // This can be used to decrypt and playback the media
  if (!result.keySystemAccess) {
    log("Encrypted media support is not available.");
    return;
  }

  log(
    `The encrypted media configuration is supported${result.smooth ? ", smooth" : ", not smooth"}${result.powerEfficient ? ", power efficient" : ", not power efficient"}.`,
  );
}
```

The log output is shown below.

{{EmbedLiveSample("Getting decoding information for encrypted media")}}

### Iterating through decoding information for encrypted media

The previous example showed how you can use `decodingInfo()` to get information for just one configuration.
In reality the method would normally be called iteratively with a number of configurations, selecting the first supported configuration that matches the application's criteria for smooth playing or power efficiency.
The way this works is described below.

Assuming we already have an `Array` of media configurations named `orderedMediaConfigs`, which we have ordered from most to least wanted, we can use the [`Array.prototype.map()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to call `decodingInfo()` for each configuration and get an array containing all the returned {{jsxref("Promise")}} objects.

```js
const capabilitiesPromises = orderedMediaConfigs.map((mediaConfig) =>
  navigator.mediaCapabilities.decodingInfo(mediaConfig),
);
```

We then use a [`for await...of` loop](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) to iterate the promises as they resolve.
In the loop we store the last supported configuration to `nonSmoothConfig`, and we exit the loop as soon as we find a smooth configuration, setting this as our `bestConfig`.

```js
// Assume this app wants a supported && smooth config.
let bestConfig = null;
let nonSmoothConfig = null;
for await (const mediaCapabilityInfo of capabilitiesPromises) {
  if (!mediaCapabilityInfo.supported) continue;

  if (!mediaCapabilityInfo.smooth) {
    nonSmoothConfig = mediaCapabilityInfo;
    continue;
  }

  bestConfig = mediaCapabilityInfo;
  break;
}
```

If we found a smooth and supported configuration while looping (`bestConfig`) we use it to [create our media keys](/en-US/docs/Web/API/MediaKeySystemAccess/createMediaKeys) and decode the media.
If we didn't discover any smooth configurations we might instead use `nonSmoothConfig` to decode the media.
This will be the supported configuration that was found last, which because of the way we ordered the original `orderedMediaConfigs`, should be the one with the lowest framerate.

```js
let keys = null;
if (bestConfig) {
  keys = await bestConfig.keySystemAccess.createMediaKeys();
  // ... use keys to decode media using best config
} else if (nonSmoothConfig) {
  console.log(
    "No smooth configs found. Using lowest resolution configuration!",
  );
  keys = await nonSmoothConfig.keySystemAccess.createMediaKeys();
  // ... use keys to decode media using lowest framerate config
} else {
  console.log("No supported configs!");
  // Fail!
}
```

If there are no supported configuration, we have no choice but to fail and notify the user.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaCapabilities.encodingInfo()")}}
- {{domxref("HTMLMediaElement.canPlayType()")}} for file
- {{domxref("MediaSource.isTypeSupported_static", "MediaSource.isTypeSupported()")}} for media-source
- {{domxref("Navigator.requestMediaKeySystemAccess()")}}
