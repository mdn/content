---
title: "MediaDevices: getUserMedia() method"
short-title: getUserMedia()
slug: Web/API/MediaDevices/getUserMedia
page-type: web-api-instance-method
browser-compat: api.MediaDevices.getUserMedia
---

{{securecontext_header}}{{APIRef("Media Capture and Streams")}}

The **`getUserMedia()`** method of the {{domxref("MediaDevices")}} interface prompts the user for permission to use a media input which produces a {{domxref("MediaStream")}} with tracks containing the requested types of media.

That stream can include, for example, a video track (produced by either a hardware or virtual video source such as a camera, video recording device, screen sharing service, and so forth), an audio track (similarly, produced by a physical or virtual audio source like a microphone, A/D converter, or the like), and possibly other track types.

It returns a {{jsxref("Promise")}} that resolves to a {{domxref("MediaStream")}} object.
If the user denies permission, or matching media is not available, then the promise is rejected with `NotAllowedError` or `NotFoundError` {{domxref("DOMException")}} respectively.

> [!NOTE]
> It's possible for the returned promise to _neither_ resolve nor reject, as the user is not required to make a choice at all and may ignore the request.

## Syntax

```js-nolint
getUserMedia(constraints)
```

### Parameters

- `constraints`

  - : An object specifying the types of media to
    request, along with any requirements for each type.

    The `constraints` parameter is an object with two members: `video` and
    `audio`, describing the media types requested. Either or both must be
    specified. If the browser cannot find all media tracks with the specified types that
    meet the constraints given, then the returned promise is rejected with
    `NotFoundError` {{domxref("DOMException")}}.

    For both `video` and `audio`, its value is either a boolean or an object. The default value is `false`.

    - If `true` is specified for a media type, the resulting stream is _required_ to have that type of track in it. If one cannot be included for any reason, the returned promise will reject.
    - If `false` is specified for a media type, the resulting stream _must not_ have that type of track, or the returned promise will reject. Because both `video` and `audio` default to `false`, if the `constraints` object contains neither property or if it's not present at all, the returned promise will always reject.
    - If an object is specified for a media type, the object is read as a {{domxref("MediaTrackConstraints")}} dictionary.

### Return value

A {{jsxref("Promise")}} whose fulfillment handler receives a {{domxref("MediaStream")}}
object when the requested media has successfully been obtained.

### Exceptions

- `AbortError` {{domxref("DOMException")}}

  - : Although the user and operating system both granted access to the hardware device,
    and no hardware issues occurred that would cause a `NotReadableError` {{domxref("DOMException")}}, throw if some
    problem occurred which prevented the device from being used.

- `InvalidStateError` {{domxref("DOMException")}}

  - : Thrown if current document is not fully active.

- `NotAllowedError` {{domxref("DOMException")}}

  - : Thrown if one or more of the requested source devices cannot be used at this time. This will
    happen if the browsing context is insecure (that is, the page was loaded using HTTP
    rather than HTTPS). It also happens if the user has specified that the current
    browsing instance is not permitted access to the device, the user has denied access
    for the current session, or the user has denied all access to user media devices
    globally. On browsers that support managing media permissions with [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy), this error is
    returned if Permissions Policy is not configured to allow access to the input source(s).

    > [!NOTE]
    > Older versions of the specification used `SecurityError`
    > for this instead; `SecurityError` has taken on a new meaning.

- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if no media tracks of the type specified were found that satisfy the given constraints.
- `NotReadableError` {{domxref("DOMException")}}
  - : Thrown if, although the user granted permission to use the matching devices, a hardware error
    occurred at the operating system, browser, or Web page level which prevented access to
    the device.
- `OverconstrainedError` {{domxref("DOMException")}}

  - : Thrown if the specified constraints resulted in no candidate devices which met the criteria
    requested. The error is an object of type `OverconstrainedError`, and has a
    `constraint` property whose string value is the name of a constraint which
    was impossible to meet, and a `message` property containing a
    human-readable string explaining the problem.

    > [!NOTE]
    > Because this error can occur even when the user has not yet granted
    > permission to use the underlying device, it can potentially be used as a
    > [fingerprinting](/en-US/docs/Glossary/Fingerprinting) surface.

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if user media support is disabled on the {{domxref("Document")}} on which
    `getUserMedia()` was called. The mechanism by which user media support is
    enabled and disabled is left up to the individual user agent.
- {{jsxref("TypeError")}}
  - : Thrown if the list of constraints specified is empty, or has all constraints set to
    `false`. This can also happen if you try to call
    `getUserMedia()` in an insecure context, since
    {{domxref("navigator.mediaDevices")}} is `undefined` in an insecure
    context.

## Privacy and security

As an API that may involve significant privacy concerns, `getUserMedia()`'s
specification lays out a wide array of privacy and security requirements that browsers
are obligated to meet.

`getUserMedia()` is a powerful feature that can only be used in [secure contexts](/en-US/docs/Web/Security/Secure_Contexts); in insecure
contexts, `navigator.mediaDevices` is `undefined`, preventing
access to `getUserMedia()`. A secure context is, in short, a page loaded
using HTTPS or the `file:///` URL scheme, or a page loaded from
`localhost`.

In addition, user permission is always required to access the user's audio and video
inputs. Only a window's top-level document context for a valid origin can even request
permission to use `getUserMedia()`, unless the top-level context expressly
grants permission for a given {{HTMLElement("iframe")}} to do so using [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy). Otherwise, the user
will never even be asked for permission to use the input devices.

For additional details on these requirements and rules, how they are reflected in the
context in which your code is running, and about how browsers manage user privacy and
security issues, read on.

### User privacy

As an API that may involve significant privacy concerns, `getUserMedia()` is
held by the specification to very specific requirements for user notification and
permission management. First, `getUserMedia()` must always get user
permission before opening any media gathering input such as a webcam or microphone.
Browsers may offer a once-per-domain permission feature, but they must ask at least the
first time, and the user must specifically grant ongoing permission if they choose to do
so.

Of equal importance are the rules around notification. Browsers are required to display
an indicator that shows that a camera or microphone is in use, above and beyond any
hardware indicator that may exist. They must also show an indicator that permission has
been granted to use a device for input, even if the device is not actively recording at
the moment.

For example in Firefox, the URL bar displays a pulsing red icon to indicate that
recording is underway. The icon is gray if the permission is in place but recording is
not currently underway. The device's physical light is used to indicate whether or not
recording is currently active. If you've muted your camera (so-called "facemuting"),
your camera's activity light goes out to indicate that the camera is not actively
recording you, without discarding the permission to resume using the camera once muting
is over.

### Security

There are a number of ways security management and controls in a {{Glossary("user agent")}} can cause `getUserMedia()` to return a security-related error.

#### Permissions Policy

The two [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) directives that apply to `getUserMedia()` are `camera`
and `microphone`.

For example, this HTTP header will enable use of a camera by the document
and any embedded {{HTMLElement("iframe")}} elements that are loaded from the same
origin:

```http
Permissions-Policy: camera=(self)
```

This will request access to the microphone for the current origin and the specific
origin `https://developer.mozilla.org`:

```http
Permissions-Policy: microphone=(self "https://developer.mozilla.org")
```

If you're using `getUserMedia()` within an `<iframe>`, you
can request permission just for that frame, which is clearly more secure than requesting
a more general permission. Here, indicate we need the ability to use both camera and
microphone:

```html
<iframe src="https://mycode.example.net/etc" allow="camera; microphone">
</iframe>
```

#### Encryption based security

The `getUserMedia()` method is only available in [secure contexts](/en-US/docs/Web/Security/Secure_Contexts). A secure context
is one the browser is reasonably confident contains a document which was loaded
securely, using HTTPS/TLS, and has limited exposure to insecure contexts. If a document
isn't loaded in a secure context, the {{domxref("navigator.mediaDevices")}} property is
`undefined`, making access to `getUserMedia()` impossible.

Attempting to access `getUserMedia()` in this situation will result in a
{{jsxref("TypeError")}}.

#### Document source security

Because of the obvious security concern associated with `getUserMedia()` if
used unexpectedly or without security being carefully managed, it can only be used in
secure contexts. There are a number of insecure ways to load a document that might, in
turn, attempt to call `getUserMedia()`. The following are examples of
situations in which `getUserMedia()` is not permitted to be called:

- A document loaded into a sandboxed {{HTMLElement("iframe")}} element cannot call
  `getUserMedia()` unless the `<iframe>` has its
  [`sandbox`](/en-US/docs/Web/HTML/Element/iframe#sandbox) attribute set to `allow-same-origin`.
- A document loaded using a `data://` or `blob://` URL which has
  no origin (such as when one of these URLs is typed by the user into the address bar)
  cannot call `getUserMedia()`. These kinds of URLs loaded from JavaScript
  code inherit the script's permissions.
- Any other situation in which there is no origin, such as when the
  [`srcdoc`](/en-US/docs/Web/HTML/Element/iframe#srcdoc) attribute is used to specify the contents of a
  frame.

## Examples

### Using getUserMedia()

Generally, you will access the {{domxref("MediaDevices")}} singleton object using {{domxref("navigator.mediaDevices")}}, like this:

```js
async function getMedia(constraints) {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    /* use the stream */
  } catch (err) {
    /* handle the error */
  }
}
```

Similarly, using the raw promises directly, the code looks like this:

```js
navigator.mediaDevices
  .getUserMedia(constraints)
  .then((stream) => {
    /* use the stream */
  })
  .catch((err) => {
    /* handle the error */
  });
```

> [!NOTE]
> If the current document isn't loaded securely,
> `navigator.mediaDevices` will be `undefined`, and you cannot use
> `getUserMedia()`. See [Security](#security) for more information on this and
> other security issues related to using `getUserMedia()`.

Below are some examples of the `constraints` parameter.

The following requests both audio and video without any specific requirements:

```js
getUserMedia({
  audio: true,
  video: true,
});
```

While information about a user's cameras and microphones are inaccessible for
privacy reasons, an application can request the camera and microphone capabilities
it needs and wants, using additional constraints. The following expresses a
preference for 1280x720 camera resolution:

```js
getUserMedia({
  audio: true,
  video: { width: 1280, height: 720 },
});
```

The browser will try to honor this, but may return other
resolutions if an exact match is not available, or the user overrides it.

To _require_ a capability, use the keywords `min`,
`max`, or `exact` (a.k.a. `min === max`). The
following demands a minimum resolution of 1280x720:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1280 },
    height: { min: 720 },
  },
});
```

If no camera exists with this resolution or higher, then the returned promise will
be rejected with `OverconstrainedError`, and the user will not be
prompted.

The reason for the difference in behavior is that the keywords `min`,
`max`, and `exact` are inherently mandatory — whereas plain
values and a keyword called `ideal` are not. Here's a full example:

```js
getUserMedia({
  audio: true,
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 576, ideal: 720, max: 1080 },
  },
});
```

An `ideal` value, when used, has gravity — which means that the browser
will try to find the setting (and camera, if you have more than one), with the
smallest [fitness distance](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance) from the ideal values given.

Plain values are inherently ideal, which means that the first of our resolution
examples above could have been written like this:

```js
getUserMedia({
  audio: true,
  video: {
    width: { ideal: 1280 },
    height: { ideal: 720 },
  },
});
```

Not all constraints are numbers. For example, on mobile devices, the following will
prefer the front camera (if one is available) over the rear one:

```js
getUserMedia({
  audio: true,
  video: { facingMode: "user" },
});
```

To _require_ the rear camera, use:

```js
getUserMedia({
  audio: true,
  video: {
    facingMode: { exact: "environment" },
  },
});
```

Another non-number constraint is the `deviceId` constraint. If you have
a `deviceId` from {{domxref("mediaDevices.enumerateDevices()")}}, you can
use it to request a specific device:

```js
getUserMedia({
  video: {
    deviceId: myPreferredCameraDeviceId,
  },
});
```

The above will return the camera you requested, or a different camera if that
specific camera is no longer available. Again, to _require_ the specific
camera, you would use:

```js
getUserMedia({
  video: {
    deviceId: {
      exact: myExactCameraOrBustDeviceId,
    },
  },
});
```

### Width and height

This example gives a preference for camera resolution, and assigns the resulting
{{domxref("MediaStream")}} object to a video element.

```js
// Prefer camera resolution nearest to 1280x720.
const constraints = {
  audio: true,
  video: { width: 1280, height: 720 },
};

navigator.mediaDevices
  .getUserMedia(constraints)
  .then((mediaStream) => {
    const video = document.querySelector("video");
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  })
  .catch((err) => {
    // always check for errors at the end.
    console.error(`${err.name}: ${err.message}`);
  });
```

### Frame rate

Lower frame-rates may be desirable in some cases, like WebRTC transmissions with
bandwidth restrictions.

```js
const constraints = {
  video: { frameRate: { ideal: 10, max: 15 } },
};
```

### Front and back camera

On mobile phones.

```js
let front = false;
document.getElementById("flip-button").onclick = () => {
  front = !front;
};

const constraints = {
  video: { facingMode: front ? "user" : "environment" },
};
```

> [!NOTE]
> In certain cases, it may be necessary to release the current camera facing mode before you can switch to a different one. To ensure the camera switch, it is advisable to free up the media resources by invoking the "stop()" method on the track before requesting a different facing mode.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The older {{domxref("Navigator.getUserMedia()")}} legacy API
- {{domxref("MediaDevices.enumerateDevices()")}}: Listing available media devices
- {{domxref("WebRTC API", "", "", "nocode")}}
- {{domxref("Media Capture and Streams API", "", "", "nocode")}}
- {{domxref("Screen Capture API", "", "", "nocode")}}: Capturing screen contents as a {{domxref("MediaStream")}}
- {{domxref("MediaDevices.getDisplayMedia()")}}: Getting a stream containing screen contents
- {{domxref("Media Capture and Streams API/Taking Still Photos", "Taking webcam photos", "", "nocode")}}: A tutorial on using `getUserMedia()` to take still photos rather than video
