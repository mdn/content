---
title: "MediaKeys: getStatusForPolicy() method"
short-title: getStatusForPolicy()
slug: Web/API/MediaKeys/getStatusForPolicy
page-type: web-api-instance-method
browser-compat: api.MediaKeys.getStatusForPolicy
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

The `getStatusForPolicy()` method of the {{domxref("MediaKeys")}} interface is used to check whether the Content Decryption Module (CDM) would allow the presentation of encrypted media data using the keys, based on the specified policy requirements.

The method returns a {{jsxref("Promise")}} that resolves with a string that indicates the status of the key with respect to all the specified policy requirements.
If the value resolves to `"usable"` then the content can be decrypted and presented at the ideal quality.
Other values indicate reasons why the keys cannot be used for presenting the content; in some cases they hint at fallback options, such as playing the content at a lower quality.

The policy restrictions currently only include a restriction on the minimum supported HDCP version.

Note that the method checks a "hypothetical key" against the restrictions.
The application does not need to first create a real key and fetch a real license using {{domxref("MediaKeySession")}}, and the {{domxref("MediaKeys")}} doesn't even have to be attached to audio or video elements.

## Syntax

```js-nolint
getStatusForPolicy(policy)
```

### Parameters

- `policy` {{optional_inline}}

  - : An object with the following optional properties:

    - `minHdcpVersion` {{optional_inline}}

      - : A string indicating the semantic version of the minimum HDCP version to check for usability, such as `1.0`, `1.4`, `2.2`, `2.3`.

> [!NOTE]
> At least one policy restriction must be specified, so `minHdcpVersion` is only "technically" optional.

### Return value

A {{jsxref("Promise")}} that resolves with a string indicating whether the key can be used for decryption given the specified policy.

The string can have one of the following values:

- `usable`
  - : The key is currently usable for decryption.
- `expired`
  - : The key is no longer usable for decryption because its expiration time has passed.
- `released`
  - : The key has been released and is no longer available to the CDM.
    However information about the key is available, such as a record of license destruction.
- `output-restricted`
  - : There are output restrictions associated with the key based on the specified policy.
    Media data decrypted with this key may be blocked from presentation.
    The status indicates that the connection between the source and output (for example, your computer and an external display), is not trusted.
    This might indicate that there are HDCP version mismatches between the source, intermediate devices, and output, or that intermediate connecting devices such as HDMI cables or video splitters are damaged or non-compliant.
    An application might opt to use a higher HDCP version, content that does not require such a high version.
    You should also check that intermediate devices and cables support HDCP, are connected firmly, and are not damaged.
- `output-downscaled`
  - : There are output restrictions associated with the key based on the specified policy, however these restrictions might be relaxed if the content is played at a lower quality.
    If this value is returned an application might play the content at a lower resolution, or it could choose to use a higher HDCP version, or use other content that does not require such a high HDCP version.
- `usable-in-future`
  - : The key will become usable for decryption in future, once its start time is reached.
- `status-pending`
  - : The status of the key is not yet known and is being determined.
- `internal-error`
  - : The key is not currently usable for decryption because of an error in the CDM.
    The application can't do anything to handle this case.

### Exceptions

- `TypeError`

  - : The `policy` has no defined properties (policy restrictions), or a property key is not valid.

- `NotSupportedError`

  - : The CDM cannot determine the status for any or all of the policy restrictions.

## Examples

### Check if keys are usable with HDCP restriction

This example checks if keys are usable for decrypting a particular video format when using a minimum HDCP version of `2.2`.

> [!NOTE]
> A status of `output-restricted` when you're using an external display can be caused by hardware HDCP incompatibility issues.
> If using a laptop, you may be able to "fix" this by disconnecting the external display.

#### HTML

```html
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const config = [
  {
    videoCapabilities: [
      {
        contentType: 'video/mp4; codecs="avc1.640028"',
        encryptionScheme: "cenc",
        robustness: "SW_SECURE_DECODE", // Widevine L3
      },
    ],
  },
];

getMediaStatus(config);

async function getMediaStatus(config) {
  try {
    const mediaKeySystemAccess = await navigator.requestMediaKeySystemAccess(
      "com.widevine.alpha",
      config,
    );
    const mediaKeys = await mediaKeySystemAccess.createMediaKeys();
    const mediaStatus = await mediaKeys.getStatusForPolicy({
      minHdcpVersion: "2.2",
    });
    log(mediaStatus);

    // Get the content or fallback to an alternative if the
    // keys are not usable
    if (mediaStatus === "usable") {
      console.log("HDCP 2.2 can be enforced.");
      // Fetch the high resolution protected content
    } else {
      log("HDCP 2.2 cannot be enforced");
      // Fallback other content, get license, etc.
    }
  } catch (error) {
    log(error);
  }
}
```

#### Results

{{EmbedLiveSample("Check if keys are usable with HDCP restriction")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See Also

- {{domxref("MediaKeyStatusMap.get()")}}
