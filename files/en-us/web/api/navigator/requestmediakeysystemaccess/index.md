---
title: "Navigator: requestMediaKeySystemAccess() method"
short-title: requestMediaKeySystemAccess()
slug: Web/API/Navigator/requestMediaKeySystemAccess
page-type: web-api-instance-method
browser-compat: api.Navigator.requestMediaKeySystemAccess
---

{{DefaultAPISidebar("Encrypted Media Extensions")}}

The **`Navigator.requestMediaKeySystemAccess()`** method
returns a {{jsxref('Promise')}} which delivers a {{domxref('MediaKeySystemAccess')}}
object that can be used to access a particular media key system, which can in turn be
used to create keys for decrypting a media stream. This method is part of the [Encrypted Media Extensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API), which brings support for encrypted media and DRM-protected video to the web.

This method may have user-visible effects such as asking for permission to access one
or more system resources. Consider that when deciding when to call
`requestMediaKeySystemAccess()`; you don't want those requests
to happen at inconvenient times. As a general rule, this function should be called only
when it's about time to create and use a {{domxref("MediaKeys")}} object by calling the
returned {{domxref("MediaKeySystemAccess")}} object's
{{domxref("MediaKeySystemAccess.createMediaKeys", "createMediaKeys()")}} method.

## Syntax

```js-nolint
requestMediaKeySystemAccess(keySystem, supportedConfigurations)
```

### Parameters

- `keySystem`
  - : A string identifying the key system. For example
    `com.example.somesystem` or `org.w3.clearkey`.
- `supportedConfigurations`
  - : A non-empty {{jsxref('Array')}} of objects conforming to the object returned by {{domxref("MediaKeySystemAccess.getConfiguration")}}. The first element with a satisfiable configuration will be used.

### Return value

A {{jsxref('Promise')}} that, when resolved, delivers a
{{domxref('MediaKeySystemAccess')}} object to your fulfillment handler function. The
fulfillment handler receives as input just one parameter:

- `mediaKeySystemAccess`
  - : A {{domxref("MediaKeySystemAccess")}} object representing the media key system
    configuration described by `keySystem` and
    `supportedConfigurations`

### Exceptions

In case of an error, the returned {{jsxref('Promise')}} is rejected with a
{{domxref('DOMException')}} whose name indicates what kind of error occurred.

- `NotSupportedError` {{domxref("DOMException")}}
  - : Either the specified `keySystem` isn't supported by the platform or the
    browser, or none of the configurations specified by
    `supportedConfigurations` can be satisfied (if, for example, none of the
    `codecs` specified in `contentType` are available).
- `SecurityError` {{domxref("DOMException")}}
  - : Use of this feature was blocked by a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
- {{jsxref("TypeError")}}`
  - : Either `keySystem` is an empty string or the
    `supportedConfigurations` array is empty.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Firefox compatibility notes

Firefox 55 outputs a warning to the console if a candidate
`MediaKeySystemConfiguration` included in
`supportedConfigurations` includes an `audioCapabilities` or
`videoCapabilities` object whose value of `contentType` doesn't
specify a `"codecs"` substring defining which codecs within the media wrapper
format should be allowed.

For example:

```js example-bad
const clearKeyOptions = [
  {
    initDataTypes: ["keyids", "webm"],
    audioCapabilities: [{ contentType: "audio/webm" }],
    videoCapabilities: [{ contentType: "video/webm" }],
  },
];

navigator
  .requestMediaKeySystemAccess("org.w3.clearkey", clearKeyOptions)
  .then((keySystemAccess) => {
    /* use the access to get create keys */
  });
```

The code above works in Firefox up to version 55, but version 55 onwards will output a
warning to console, because `"codecs"` is not included in the
`contentType` strings. This could be corrected as follows:

```js example-good
const clearKeyOptions = [
  {
    initDataTypes: ["keyids", "webm"],
    audioCapabilities: [
      { contentType: 'audio/webm; codecs="opus"' },
      { contentType: 'audio/webm; codecs="vorbis"' },
    ],
    videoCapabilities: [
      { contentType: 'video/webm; codecs="vp9"' },
      { contentType: 'video/webm; codecs="vp8"' },
    ],
  },
];

navigator
  .requestMediaKeySystemAccess("org.w3.clearkey", clearKeyOptions)
  .then((keySystemAccess) => {
    /* use the access to get create keys */
  });
```

In this revised example, the audio and video capabilities include possible codecs which
should be permitted, and therefore are valid requests.

## See also

- [Encrypted Media Extensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API)
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
