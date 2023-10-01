---
title: "MediaKeySession: update() method"
short-title: update()
slug: Web/API/MediaKeySession/update
page-type: web-api-instance-method
browser-compat: api.MediaKeySession.update
---

{{APIRef("EncryptedMediaExtensions")}}

The `MediaKeySession.update()` method loads messages and licenses to the
CDM, and then returns a {{jsxref('Promise')}} .

## Syntax

```js-nolint
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
