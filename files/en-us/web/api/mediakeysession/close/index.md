---
title: MediaKeySession.close()
slug: Web/API/MediaKeySession/close
page-type: web-api-instance-method
tags:
  - API
  - EncryptedMediaExtensions
  - MediaKeySession
  - Method
  - NeedsExample
  - Reference
  - close
browser-compat: api.MediaKeySession.close
---
{{APIRef("EncryptedMediaExtensions")}}

The `MediaKeySession.close()` method notifies that the current media session
is no longer needed, and that the content decryption module should release any resources
associated with this object and close it. Then, it returns a {{jsxref('Promise')}}.

## Syntax

```js
close()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
