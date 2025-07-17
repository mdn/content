---
title: MediaKeys
slug: Web/API/MediaKeys
page-type: web-api-interface
browser-compat: api.MediaKeys
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

The **`MediaKeys`** interface of [Encrypted Media Extensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API) represents a set of keys that an associated {{domxref("HTMLMediaElement")}} can use for decryption of media data during playback.

## Instance properties

None.

## Instance methods

- {{domxref("MediaKeys.createSession()")}}
  - : Returns a new {{domxref("MediaKeySession")}} object, which represents a context for message exchange with a content decryption module (CDM).
- {{domxref("MediaKeys.getStatusForPolicy()")}}
  - : Returns a {{jsxref("Promise")}} that resolves to a status string indicating whether the CDM would allow the presentation of encrypted media data using the keys, based on specified policy requirements.
- {{domxref("MediaKeys.setServerCertificate()")}}
  - : Returns a {{jsxref("Promise")}} to a server certificate to be used to encrypt messages to the license server.

## Examples

### Check if keys are usable with HDCP restriction

This example shows how `getStatusForPolicy()` can be used to check if keys can decrypt a particular video format in a setup that has a minimum HDCP version of `2.2`.
For more information, see the [MediaKeys: getStatusForPolicy() method](/en-US/docs/Web/API/MediaKeys/getStatusForPolicy) documentation.

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
