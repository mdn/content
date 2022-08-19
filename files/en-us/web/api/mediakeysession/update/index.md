---
title: MediaKeySession.update()
slug: Web/API/MediaKeySession/update
page-type: web-api-instance-method
tags:
  - API
  - EncryptedMediaExtensions
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
update(response)
```

### Parameters

- `response`
  - : An instance that is either an {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}}.

### Return value

A {{jsxref('Promise')}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
