---
title: "MediaKeys: createSession() method"
short-title: createSession()
slug: Web/API/MediaKeys/createSession
page-type: web-api-instance-method
browser-compat: api.MediaKeys.createSession
---

{{APIRef("EncryptedMediaExtensions")}}

The `MediaKeys.createSession()` method returns a new
{{domxref("MediaKeySession")}} object, which represents a context for message exchange
with a content decryption module (CDM).

## Syntax

```js-nolint
createSession()
createSession(mediaKeySessionType)
```

### Parameters

- `mediaKeySessionType` {{optional_inline}}
  - : A string. Either "temporary" or "persistent-license". The default value is "temporary".

### Return value

A new {{domxref("MediaKeySession")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
