---
title: Permissions-Policy
slug: Web/HTTP/Headers/Permissions-Policy
page-type: http-header
browser-compat: http.headers.Permissions-Policy
---

{{HTTPSidebar}}

The HTTP **`Permissions-Policy`** header provides a mechanism to allow and deny the use of browser features in a document or within any {{HTMLElement("iframe")}} elements in the document.

For more information, see the main [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) article.

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

```http
Permissions-Policy: <directive>=<allowlist>
```

- `<directive>`
  - : The Permissions Policy directive to apply the `allowlist` to. See [Directives](#directives) below for a list of the permitted directive names.
- `<allowlist>`

  - : An allowlist is a list of origins that takes one or more of the following values contained in parentheses, separated by spaces:

    - `*`: The feature will be allowed in this document, and all nested browsing contexts (`<iframe>`s) regardless of their origin.
    - `()` (empty allowlist): The feature is disabled in top-level and nested browsing contexts. The equivalent for `<iframe>` `allow` attributes is `'none'`.
    - `self`: The feature will be allowed in this document, and in all nested browsing contexts (`<iframe>`s) in the same origin only. The feature is not allowed in cross-origin documents in nested browsing contexts. `self` can be considered shorthand for `https://your-site.example.com`. The equivalent for `<iframe>` `allow` attributes is `self`.
    - `src`: The feature will be allowed in this `<iframe>`, as long as the document loaded into it comes from the same origin as the URL in its {{HTMLElement('iframe','src','#Attributes')}} attribute. This value is only used in the `<iframe>` `allow` attribute, and is the _default_ `allowlist` value in `<iframe>`s.
    - `"<origin>"`: The feature is allowed for specific origins (for example, `"https://a.example.com"`). Origins should be separated by spaces. Note that origins in `<iframe>` allow attributes are not quoted.

    The values `*` and `()` may only be used on their own, while `self` and `src` may be used in combination with one or more origins.

    > **Note:** Directives have a default allowlist, which is always one of `*`, `self`, or `none` for the `Permissions-Policy` HTTP header, and governs the default behavior if they are not explicitly listed in a policy. These are specified on the individual [directive reference pages](#directives). For `<iframe>` `allow` attributes , the default behavior is always `src`.

Where supported, you can include wildcards in Permissions Policy origins. This means that instead of having to explicitly specify several different subdomains in an allowlist, you can specify them all in a single origin with a wildcard.

So instead of

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

You can specify

```http
("https://example.com" "https://*.example.com")
```

> **Note:** `"https://*.example.com"` does not match `"https://example.com"`.

## Directives

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to gather information about the acceleration of the device through the {{DOMxRef("Accelerometer")}} interface.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to gather information about the amount of light in the environment around the device through the {{DOMxRef("AmbientLightSensor")}} interface.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to use the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API).

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to autoplay media requested through the {{domxref("HTMLMediaElement")}} interface. When this policy is disabled and there were no user gestures, the {{jsxref("Promise")}} returned by {{domxref("HTMLMediaElement.play()")}} will reject with a `NotAllowedError` {{domxref("DOMException")}}. The autoplay attribute on {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements will be ignored.

- {{httpheader('Permissions-Policy/battery','battery')}} {{Experimental_Inline}}

  - : Controls whether the use of the [Battery Status API](/en-US/docs/Web/API/Battery_Status_API) is allowed. When this policy is disabled, the {{JSxRef("Promise")}} returned by {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}} will reject with a `NotAllowedError` {{DOMxRef("DOMException")}}.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}

  - : Controls whether the use of the [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API) is allowed. When this policy is disabled, the methods of the {{DOMxRef("Bluetooth")}} object returned by {{DOMxRef("Navigator.bluetooth")}} will either return `false` or reject the returned {{JSxRef("Promise")}} with a `SecurityError` {{DOMxRef("DOMException")}}.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{Experimental_Inline}} {{non-standard_inline}}

  - : Controls access to the [Topics API](/en-US/docs/Web/API/Topics_API). Where a policy specifically disallows the use of the Topics API, any attempts to call the {{domxref("Document.browsingTopics()")}} method or send a request with a {{httpheader("Sec-Browsing-Topics")}} header will fail with a `NotAllowedError` {{domxref("DOMException")}}.

- {{httpheader('Permissions-Policy/camera', 'camera')}}

  - : Controls whether the current document is allowed to use video input devices. When this policy is disabled, the {{jsxref("Promise")}} returned by {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} will reject with a `NotAllowedError` {{DOMxRef("DOMException")}}.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}

  - : Controls access to the [Compute Pressure API](/en-US/docs/Web/API/Compute_Pressure_API).

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}}

  - : Controls whether or not the current document is permitted to use the {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} method to capture screen contents. When this policy is disabled, the promise returned by `getDisplayMedia()` will reject with a `NotAllowedError` {{DOMxRef("DOMException")}} if permission is not obtained to capture the display's contents.

- {{httpheader('Permissions-Policy/document-domain','document-domain')}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to set {{domxref("document.domain")}}. When this policy is disabled, attempting to set {{domxref("document.domain")}} will fail and cause a `SecurityError` {{domxref("DOMException")}} to be thrown.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to use the [Encrypted Media Extensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API) (EME). When this policy is disabled, the {{jsxref("Promise")}} returned by {{domxref("Navigator.requestMediaKeySystemAccess()")}} will reject with a `SecurityError` {{domxref("DOMException")}}.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}}

  - : Controls whether the current document is allowed to use {{DOMxRef("Element.requestFullscreen()")}}. When this policy is disabled, the returned {{JSxRef("Promise")}} rejects with a {{JSxRef("TypeError")}}.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to use the [Gamepad API](/en-US/docs/Web/API/Gamepad_API).
    When this policy is disabled, calls to {{domxref('Navigator.getGamepads()')}} will throw a `SecurityError` {{domxref('DOMException')}}, and the {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} and {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} events will not fire.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}}

  - : Controls whether the current document is allowed to use the {{domxref('Geolocation')}} Interface. When this policy is disabled, calls to {{domxref('Geolocation.getCurrentPosition','getCurrentPosition()')}} and {{domxref('Geolocation.watchPosition','watchPosition()')}} will cause those functions' callbacks to be invoked with a {{domxref('GeolocationPositionError')}} code of `PERMISSION_DENIED`.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to gather information about the orientation of the device through the {{DOMxRef("Gyroscope")}} interface.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to use the {{domxref("WebHID API", "WebHID API", "", "nocode")}} to connect to uncommon or exotic human interface devices such as alternative keyboards or gamepads.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to use the [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API), and more specifically the {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} method with an `identity` option. Where this policy forbids use of the API, the {{jsxref("Promise")}} returned by the `get()` call will reject with a `NotAllowedError` {{domxref("DOMException")}}.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to use the {{domxref("Idle Detection API", "Idle Detection API", "", "nocode")}} to detect when users are interacting with their devices, for example to report "available"/"away" status in chat applications.

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to gather data on the user's locally-installed fonts via the {{DOMxRef("Window.queryLocalFonts()")}} method (see also the {{domxref("Local Font Access API", "Local Font Access API", "", "nocode")}}).

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to gather information about the orientation of the device through the {{DOMxRef("Magnetometer")}} interface.

- {{httpheader('Permissions-Policy/microphone','microphone')}}

  - : Controls whether the current document is allowed to use audio input devices. When this policy is disabled, the {{jsxref("Promise")}} returned by {{domxref("MediaDevices.getUserMedia()")}} will reject with a `NotAllowedError` {{domxref("DOMException")}}.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to use the [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API). When this policy is disabled, the {{jsxref("Promise")}} returned by {{domxref("Navigator.requestMIDIAccess()")}} will reject with a `SecurityError` {{domxref("DOMException")}}.

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to use the [WebOTP API](/en-US/docs/Web/API/WebOTP_API) to request a one-time password (OTP) from a specially-formatted SMS message sent by the app's server, i.e., via {{domxref("CredentialsContainer.get", "navigator.credentials.get({otp: ..., ...})")}}.

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to use the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API). When this policy is enabled, the {{domxref("PaymentRequest","PaymentRequest()")}} constructor will throw a `SecurityError` {{domxref("DOMException")}}.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to play a video in a Picture-in-Picture mode via the corresponding API.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to use the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) to create new asymmetric key credentials, i.e., via {{domxref("CredentialsContainer.create", "navigator.credentials.create({publicKey: ..., ...})")}}.

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}

  - : Controls whether the current document is allowed to use the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) to retrieve already stored public-key credentials, i.e., via {{domxref("CredentialsContainer.get", "navigator.credentials.get({publicKey: ..., ...})")}}.

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}}

  - : Controls whether the current document is allowed to use [Screen Wake Lock API](/en-US/docs/Web/API/Screen_Wake_Lock_API) to indicate that device should not turn off or dim the screen.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to use the {{domxref("Web Serial API", "Web Serial API", "", "nocode")}} to communicate with serial devices, either directly connected via a serial port, or via USB or Bluetooth devices emulating a serial port.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to use the [Audio Output Devices API](/en-US/docs/Web/API/Audio_Output_Devices_API) to list and select speakers.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}

  - : Controls whether a document loaded in a third-party context (i.e. embedded in an {{htmlelement("iframe")}}) is allowed to use the {{domxref("Storage Access API", "Storage Access API", "", "nocode")}} to request access to unpartitioned cookies.

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}

  - : Controls whether the current document is allowed to use the [WebUSB API](/en-US/docs/Web/API/WebUSB_API).

- {{httpheader("Permissions-Policy/web-share", "web-share")}}

  - : Controls whether or not the current document is allowed to use the {{domxref("Navigator.share","Navigator.share()")}} of [Web Share API](/en-US/docs/Web/API/Web_Share_API) to share text, links, images, and other content to arbitrary destinations of user's choice, e.g. mobile apps.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}

  - : Controls whether or not the current document is allowed to use the [Window Management API](/en-US/docs/Web/API/Window_Management_API) to manage windows on multiple displays.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Controls whether or not the current document is allowed to use the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) to interact with a WebXR session.

## Examples

### Basic usage

#### Permissions-Policy header

To allow all origins access to geolocation, you would do this:

```http
Permissions-Policy: geolocation=*
```

Or to allow access to a subset of origins, you'd do this:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Several features can be controlled at the same time by sending the header with a comma-separated list of policies, or by sending a separate header for each policy.

For example, the following are equivalent:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com)
Permissions-Policy: camera=*
```

#### iframes

For an `<iframe>` to have a feature enabled its allowed origin must also be in the allowlist for the parent page. Because of this [inheritance behavior](/en-US/docs/Web/HTTP/Permissions_Policy#inheritance_of_policies_for_embedded_content), it is a good idea to specify the widest acceptable support for a feature in the HTTP header, and then specify the subset of support you need in each `<iframe>`.

To allow all origins access to geolocation, you would do this:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

To apply a policy to the current origin and others, you'd do this:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

This is important: By default, if an `<iframe>` navigates to another origin, the policy is not applied to the origin that the `<iframe>` navigates to. By listing the origin that the `<iframe>` navigates to in the `allow` attribute, the Permissions Policy that was applied to the original `<iframe>` will be applied to the origin the `<iframe>` navigates to.

Several features can be controlled at the same time by including a semi-colon-separated list of policy directives inside the `allow` attribute.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

It is worth giving the `src` value a special mention. We mentioned above that using this allowlist value will mean that the associated feature will be allowed in this `<iframe>`, as long as the document loaded into it comes from the same origin as the URL in its {{HTMLElement('iframe','src','#Attributes')}} attribute. This value is the _default_ `allowlist` value for features listed in `allow`, so the following are equivalent:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

### Denying access to powerful features

SecureCorp Inc. wants to disable Microphone (for example {{domxref("MediaDevices.getUserMedia()")}}) and {{domxref("Geolocation")}} APIs in its application. It can do so using the following response header:

```http
Permissions-Policy: microphone=(), geolocation=()
```

By specifying `()` for the origin list, the specified features will be disabled for all browsing contexts (this includes all `<iframe>`s), regardless of their origin.

### Combining HTTP header and `<iframe>` policies

For example, let's say that we wanted to enable geolocation usage on our own origin, and in embedded content coming from our trusted ad network. We could set up the page-wide Permissions Policy like this:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

Over in our ad `<iframe>`s, we could set access to the `https://trusted-ad-network.com` origin like this:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

If a different origin ended up getting loaded into `<iframe>`, it would not have access to geolocation:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- {{DOMxRef("Document.featurePolicy")}} and {{DOMxRef("FeaturePolicy")}}
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
