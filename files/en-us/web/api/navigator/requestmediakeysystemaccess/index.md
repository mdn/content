---
title: "Navigator: requestMediaKeySystemAccess() method"
short-title: requestMediaKeySystemAccess()
slug: Web/API/Navigator/requestMediaKeySystemAccess
page-type: web-api-instance-method
browser-compat: api.Navigator.requestMediaKeySystemAccess
---

{{DefaultAPISidebar("Encrypted Media Extensions")}}{{SecureContext_Header}}

The **`requestMediaKeySystemAccess()`** method of the {{domxref("Navigator")}} interface returns a {{jsxref('Promise')}} which delivers a {{domxref('MediaKeySystemAccess')}} object that can be used to access a particular media key system, which can in turn be used to create keys for decrypting a media stream.

This method is part of the [Encrypted Media Extensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API), which brings support for encrypted media and DRM-protected video to the web.

This method may have user-visible effects such as asking for permission to access one or more system resources.
Consider that when deciding when to call `requestMediaKeySystemAccess()`; you don't want those requests to happen at inconvenient times.
As a general rule, this function should be called only when it's about time to create and use a {{domxref("MediaKeys")}} object by calling the returned {{domxref("MediaKeySystemAccess")}} object's {{domxref("MediaKeySystemAccess.createMediaKeys", "createMediaKeys()")}} method.

## Syntax

```js-nolint
requestMediaKeySystemAccess(keySystem, supportedConfigurations)
```

### Parameters

- `keySystem`
  - : A string identifying the key system.
    For example `com.example.somesystem` or `org.w3.clearkey`.
- `supportedConfigurations`

  - : A non-empty {{jsxref('Array')}} of objects conforming to the object returned by {{domxref("MediaKeySystemAccess.getConfiguration")}}.
    The first element with a satisfiable configuration will be used.

    Each object may have the following properties:

    > **Note:** Either `videoCapabilities` or `audioCapabilities` may be empty, but not both!

    - `label` {{optional_inline}}
      - : An optional label for the configuration, which defaults to `""`.
        This label is preserved for configurations fetched using {{domxref("MediaKeySystemAccess.getConfiguration")}}
    - `initDataTypes`
      - : An array of strings that indicate the data type names for the supported initialization data formats (default to an empty array).
        These names are names like `"cenc"`, `"keyids"` and `"webm"` that are defined in the [Encrypted Media Extensions Initialization Data Format Registry](https://www.w3.org/TR/eme-initdata-registry/).
    - `audioCapabilities`

      - : An array of supported audio capabilities.
        If the array is empty the content type does not support audio capabilities.

        Each object in the array has the following properties:

        - `contentType`
          - : A string indicating the media MIME-type of the media resource, such as `"audio/mp4;codecs=\"mp4a.40.2\"`.
            Note that the empty string is invalid, and that if the MIME-type definition includes parameters, such as `codecs`, these must also be included.
        - `encryptionScheme`
          - : The encryption scheme associated with the content type, such as `cenc`, `cbcs`, `cbcs-1-9`.
            This value should be set by an application (it defaults to `null`, indicating that any encryption scheme may be used).
        - `robustness`
          - : The robustness level associated with the content type.
            The empty string indicates that any ability to decrypt and decode the content type is acceptable.

    - `videoCapabilities`

      - : An array of supported video capabilities.
        The objects in the array have the same form as those in `audioCapabilities`.

    - `distinctiveIdentifier`

      - : A string indicating whether the implementation may use "distinctive identifiers" (or distinctive permanent identifiers) for any operations associated with any object created from this configuration.
        The allowed values are:

        - `required`
          - : The returned object must support this feature.
        - `optional`
          - : The returned object may support this feature.
            This is the default
        - `not-allowed`
          - : The returned object must not support or use this feature.

    - `persistentState`

      - : A string indicating whether the returned object must be able to persist session data or any other type of state.
        The values are the same as for `distinctiveIdentifier` and have the same meaning: `required`, `optional` (default) ,`not-allowed`.
        Only "temporary" sessions may be created when persistent state is not allowed.

    - `sessionTypes`

      - : An array of strings indicating the session types that must be supported.
        Permitted values include:

        - `temporary`
          - : A session for which the license, key(s) and record of or data related to the session are not persisted.
            The application does not need to manage such storage.
            Implementations must support this option, and it is the default.
        - `persistent-license`
          - : A session for which the license (and potentially other data related to the session) will be persisted.
            A record of the license and associated keys persists even if the license is destroyed, providing an attestation that the license and key(s) it contains are no longer usable by the client.

### Return value

A {{jsxref('Promise')}} that fulfils with a {{domxref('MediaKeySystemAccess')}} object representing the media key system configuration described by `keySystem` and `supportedConfigurations`.

### Exceptions

In case of an error, the returned {{jsxref('Promise')}} is rejected with a {{domxref('DOMException')}} whose name indicates what kind of error occurred.

- `NotSupportedError` {{domxref("DOMException")}}
  - : Either the specified `keySystem` isn't supported by the platform or the browser, or none of the configurations specified by `supportedConfigurations` can be satisfied (if, for example, none of the `codecs` specified in `contentType` are available).
- `SecurityError` {{domxref("DOMException")}}
  - : Use of this feature was blocked by [`Permissions-Policy: encrypted-media`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/encrypted-media).
- {{jsxref("TypeError")}}
  - : Either `keySystem` is an empty string or the `supportedConfigurations` array is empty.

## Examples

The example below shows how you might use `requestMediaKeySystemAccess()`, specifying a key system and configuration.

```js
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Encrypted Media Extensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API)
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("MediaCapabilities.decodingInfo()")}}
