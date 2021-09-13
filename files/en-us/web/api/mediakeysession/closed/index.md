---
title: MediaKeySession.closed
slug: Web/API/MediaKeySession/closed
tags:
  - API
  - EncryptedMediaExtensions
  - Experimental
  - MediaKeySession
  - NeedsExample
  - Property
  - Reference
  - closed
browser-compat: api.MediaKeySession.closed
---
{{APIRef("EncryptedMediaExtensions")}}

The `MediaKeySession.closed` read-only property returns a
{{jsxref('Promise')}} signaling when a {{domxref('MediaKeySession')}} closes. This
promise can only be fulfilled and is never rejected. Closing a session means that
licenses and keys associated with it are no longer valid for decrypting media data.

## Syntax

```js
var promise = mediaKeySessionObj.closed;
```

### Value

A {{jsxref("Promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
