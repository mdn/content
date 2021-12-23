---
title: MediaKeySession.update()
slug: Web/API/MediaKeySession/update
tags:
  - API
  - EncryptedMediaExtensions
  - Experimental
  - MediaKeySession
  - Method
  - NeedsExample
  - Reference
  - Update
browser-compat: api.MediaKeySession.update
---
{{APIRef("EncryptedMediaExtensions")}}

The `MediaKeySession.update()` method loads messages and licenses to the
CDM, and then returns a {{jsxref('Promise')}} .

## Syntax

```js
mediaKeySession.update(response).then(function() { /* ... */ });
```

### Parameters

- response
  - : An instance of type BufferSource.

### Return value

A {{jsxref('Promise')}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
