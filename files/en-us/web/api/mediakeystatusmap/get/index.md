---
title: "MediaKeyStatusMap: get() method"
short-title: get()
slug: Web/API/MediaKeyStatusMap/get
page-type: web-api-instance-method
browser-compat: api.MediaKeyStatusMap.get
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

The **`get()`** method of the {{domxref("MediaKeyStatusMap")}} interface returns the status value associated with the given key, or `undefined` if there is none.

The status value indicates whether or not the specific key can be used for decryption.

## Syntax

```js-nolint
get(key)
```

### Parameters

- `key`
  - : The key whose value you want returned.

### Return value

A string specifying the status value associated with the given key, or `undefined`.

The following status values are allowed:

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
