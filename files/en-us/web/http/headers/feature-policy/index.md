---
title: Feature-Policy
slug: Web/HTTP/Headers/Feature-Policy
tags:
  - Authorization
  - Experimental
  - Feature-Policy
  - HTTP
  - Permissions
  - Reference
  - Security
  - Web
  - header
browser-compat: http.headers.Feature-Policy
---
{{HTTPSidebar}} {{SeeCompatTable}}

> **Warning:** The header has now been renamed to `Permissions-Policy` in the spec, and this article will eventually be updated to reflect that change.

The HTTP **`Feature-Policy`** header provides a mechanism to allow and deny the use of browser features in its own frame, and in content within any {{HTMLElement("iframe")}} elements in the document.

For more information, see the main [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy) article.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Feature-Policy: <directive> <allowlist>
```

- `<directive>`
  - : The Feature Policy directive to apply the `allowlist` to. See [Directives](#directives) below for a list of the permitted directive names.
- \<allowlist>

  - : An `allowlist` is a list of origins that takes one or more of the following values, separated by spaces:

    - `*`: The feature will be allowed in this document, and all nested browsing contexts (iframes) regardless of their origin.
    - `'self'`: The feature will be allowed in this document, and in all nested browsing contexts (iframes) in the same origin. The feature is not allowed in cross-origin documents in nested browsing contexts.
    - `'src'`: (In an iframe `allow` attribute only) The feature will be allowed in this iframe, as long as the document loaded into it comes from the same origin as the URL in the iframe's {{HTMLElement('iframe','src','#Attributes')}} attribute.

      > **Note:** The `'src'` origin is used in the iframe `allow` attribute only, and is the _default_ `allowlist` value.

    - `'none'`: The feature is disabled in top-level and nested browsing contexts.
    - \<origin(s)>: The feature is allowed for specific origins (for example, https\://example.com). Origins should be separated by a space.

    The values `*` (enable for all origins) or `'none'` (disable for all origins) may only be used alone, while `'self'` and `'src'` may be used with one or more origins.

    Features have a _default_ allowlist, which is one of: `*`, `'self'`, or `'none'`.

## Directives

- {{httpheader('Feature-Policy/accelerometer','accelerometer')}}
  - : Controls whether the current document is allowed to gather information about the acceleration of the device through the {{DOMxRef("Accelerometer")}} interface.
- {{httpheader('Feature-Policy/ambient-light-sensor','ambient-light-sensor')}}
  - : Controls whether the current document is allowed to gather information about the amount of light in the environment around the device through the {{DOMxRef("AmbientLightSensor")}} interface.
- {{httpheader('Feature-Policy/autoplay','autoplay')}}
  - : Controls whether the current document is allowed to autoplay media requested through the {{domxref("HTMLMediaElement")}} interface. When this policy is disabled and there were no user gestures, the {{jsxref("Promise")}} returned by {{domxref("HTMLMediaElement.play()")}} will reject with a {{domxref("DOMException")}}. The autoplay attribute on {{HTMLELement("audio")}} and {{HTMLElement("video")}} elements will be ignored.
- {{httpheader('Feature-Policy/battery','battery')}}
  - : Controls whether the use of the [Battery Status API](/en-US/docs/Web/API/Battery_Status_API) is allowed. When this policy is disabled, the {{JSxRef("Promise")}} returned by {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}} will reject with a {{Exception("NotAllowedError")}} {{DOMxRef("DOMException")}}.
- {{httpheader('Feature-Policy/camera', 'camera')}}
  - : Controls whether the current document is allowed to use video input devices. When this policy is disabled, the {{jsxref("Promise")}} returned by {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} will reject with a {{Exception("NotAllowedError")}} {{DOMxRef("DOMException")}}.
- {{HTTPHeader('Feature-Policy/display-capture', 'display-capture')}}
  - : Controls whether or not the current document is permitted to use the {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} method to capture screen contents. When this policy is disabled, the promise returned by `getDisplayMedia()` will reject with a {{Exception("NotAllowedError")}} if permission is not obtained to capture the display's contents.
- {{httpheader('Feature-Policy/document-domain','document-domain')}}
  - : Controls whether the current document is allowed to set {{domxref("document.domain")}}. When this policy is disabled, attempting to set {{domxref("document.domain")}} will fail and cause a {{Exception("SecurityError")}} {{domxref("DOMException")}} to be thrown.
- {{httpheader('Feature-Policy/encrypted-media', 'encrypted-media')}}
  - : Controls whether the current document is allowed to use the [Encrypted Media Extensions](/en-US/docs/Web/API/Encrypted_Media_Extensions_API) API (EME). When this policy is disabled, the {{jsxref("Promise")}} returned by {{domxref("Navigator.requestMediaKeySystemAccess()")}} will reject with a {{domxref("DOMException")}}.
- {{httpheader('Feature-Policy/execution-while-not-rendered', 'execution-while-not-rendered')}}
  - : Controls whether tasks should execute in frames while they're not being rendered (e.g. if an iframe is [`hidden`](/en-US/docs/Web/HTML/Global_attributes/hidden) or `display: none`).
- {{httpheader('Feature-Policy/execution-while-out-of-viewport', 'execution-while-out-of-viewport')}}
  - : Controls whether tasks should execute in frames while they're outside of the visible viewport.
- {{httpheader('Feature-Policy/fullscreen','fullscreen')}}
  - : Controls whether the current document is allowed to use {{DOMxRef("Element.requestFullScreen()")}}. When this policy is disabled, the returned {{JSxRef("Promise")}} rejects with a {{JSxRef("TypeError")}}.
- {{httpheader('Feature-Policy/gamepad','gamepad')}}
  - : Controls whether the current document is allowed to use the [Gamepad API](/en-US/docs/Web/API/Gamepad_API).
    When this policy is disabled, calls to {{domxref('Navigator.getGamepads()')}} will throw a `SecurityError` {{domxref('DOMException')}}, and the {{event("gamepadconnected")}} and {{event("gamepaddisconnected")}} events will not fire.
- {{httpheader('Feature-Policy/geolocation','geolocation')}}
  - : Controls whether the current document is allowed to use the {{domxref('Geolocation')}} Interface. When this policy is disabled, calls to {{domxref('Geolocation.getCurrentPosition','getCurrentPosition()')}} and {{domxref('Geolocation.watchPosition','watchPosition()')}} will cause those functions' callbacks to be invoked with a {{domxref('GeolocationPositionError')}} code of `PERMISSION_DENIED`.
- {{httpheader('Feature-Policy/gyroscope','gyroscope')}}
  - : Controls whether the current document is allowed to gather information about the orientation of the device through the {{DOMxRef("Gyroscope")}} interface.
- {{httpheader('Feature-Policy/layout-animations','layout-animations')}}
  - : Controls whether the current document is allowed to show layout animations.
- {{httpheader('Feature-Policy/legacy-image-formats','legacy-image-formats')}}
  - : Controls whether the current document is allowed to display images in legacy formats.
- {{httpheader('Feature-Policy/magnetometer','magnetometer')}}
  - : Controls whether the current document is allowed to gather information about the orientation of the device through the {{DOMxRef("Magnetometer")}} interface.
- {{httpheader('Feature-Policy/microphone','microphone')}}
  - : Controls whether the current document is allowed to use audio input devices. When this policy is disabled, the {{jsxref("Promise")}} returned by {{domxref("MediaDevices.getUserMedia()")}} will reject with a {{Exception("NotAllowedError")}}.
- {{httpheader('Feature-Policy/midi', 'midi')}}
  - : Controls whether the current document is allowed to use the [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API). When this policy is disabled, the {{jsxref("Promise")}} returned by {{domxref("Navigator.requestMIDIAccess()")}} will reject with a {{domxref("DOMException")}}.
- {{httpheader('Feature-Policy/navigation-override','navigation-override')}}
  - : Controls the availability of mechanisms that enables the page author to take control over the behavior of [spatial navigation](https://www.w3.org/TR/css-nav/), or to cancel it outright.
- {{httpheader('Feature-Policy/oversized-images','oversized-images')}}
  - : Controls whether the current document is allowed to download and display large images.
- {{httpheader('Feature-Policy/payment', 'payment')}}
  - : Controls whether the current document is allowed to use the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API). When this policy is enabled, the {{domxref("PaymentRequest","PaymentRequest()")}} constructor will throw a {{Exception("SecurityError")}} {{domxref("DOMException")}}.
- {{httpheader('Feature-Policy/picture-in-picture', 'picture-in-picture')}}
  - : Controls whether the current document is allowed to play a video in a Picture-in-Picture mode via the corresponding API.
- {{httpheader("Feature-Policy/publickey-credentials-get", "publickey-credentials-get")}}
  - : Controls whether the current document is allowed to use the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) to retrieve already stored public-key credentials, i.e. via {{domxref("CredentialsContainer.get","navigator.credentials.get({publicKey: ..., ...})")}}.
- {{httpheader('Feature-Policy/sync-xhr', 'sync-xhr')}}
  - : Controls whether the current document is allowed to make synchronous {{DOMxRef("XMLHttpRequest")}} requests.
- {{httpheader('Feature-Policy/unoptimized-images', 'unoptimized-images')}} {{experimental_inline}}{{Non-standard_Inline}}
  - : Controls whether the current document is allowed to download and display unoptimized images.
- {{httpheader('Feature-Policy/unsized-media', 'unsized-media')}} {{experimental_inline}}{{Non-standard_Inline}}
  - : Controls whether the current document is allowed to change the size of media elements after the initial layout is complete.
- {{httpheader('Feature-Policy/usb', 'usb')}}
  - : Controls whether the current document is allowed to use the [WebUSB API](https://wicg.github.io/webusb/).
- {{httpheader('Feature-Policy/vibrate', 'vibrate')}} {{deprecated_inline}}{{experimental_inline}}{{Non-standard_Inline}}
  - : Controls whether the current document is allowed to trigger device vibrations via {{DOMxRef("Navigator.vibrate","Navigator.vibrate()")}} method of [Vibration API](/en-US/docs/Web/API/Vibration_API).
- {{httpheader('Feature-Policy/vr', 'vr')}} {{deprecated_inline}}
  - : Controls whether the current document is allowed to use the [WebVR API](/en-US/docs/Web/API/WebVR_API). When this policy is disabled, the {{jsxref("Promise")}} returned by {{domxref("Navigator.getVRDisplays","Navigator.getVRDisplays()")}} will reject with a {{domxref("DOMException")}}. Keep in mind that the WebVR standard is in the process of being replaced with [WebXR](/en-US/docs/Web/API/WebXR_Device_API).
- {{httpheader('Feature-Policy/screen-wake-lock', 'screen-wake-lock')}}
  - : Controls whether the current document is allowed to use [Screen Wake Lock API](/en-US/docs/Web/API/Screen_Wake_Lock_API) to indicate that device should not turn off or dim the screen.
- {{httpheader("Feature-Policy/web-share", "web-share")}}
  - : Controls whether or not the current document is allowed to use the {{domxref("Navigator.share","Navigator.share()")}} of Web Share API to share text, links, images, and other content to arbitrary destinations of user's choice, e.g. mobile apps.
- {{httpheader("Feature-Policy/xr-spatial-tracking", "xr-spatial-tracking")}}
  - : Controls whether or not the current document is allowed to use the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) to interact with a WebXR session.

## Example

SecureCorp Inc. wants to disable Microphone and Geolocation APIs in its application. It can do so by delivering the following HTTP response header to define a feature policy:

```
Feature-Policy: microphone 'none'; geolocation 'none'
```

By specifying the `'none'` keyword for the origin list, the specified features will be disabled for all browsing contexts (this includes all iframes), regardless of their origin.

## Specifications

| Specification                                                                                                  |
| -------------------------------------------------------------------------------------------------------------- |
| [Permissions Policy](https://w3c.github.io/webappsec-permissions-policy/#permissions-policy-http-header-field) |

## Browser compatibility

{{Compat}}

## See also

- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- {{DOMxRef("Document.featurePolicy")}} and {{DOMxRef("FeaturePolicy")}}
- [Feature-Policy Tester (Chrome Developer Tools extension)](https://chrome.google.com/webstore/detail/feature-policy-tester-dev/pchamnkhkeokbpahnocjaeednpbpacop)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
