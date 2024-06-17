---
title: "MediaKeySession: update() method"
short-title: update()
slug: Web/API/MediaKeySession/update
page-type: web-api-instance-method
browser-compat: api.MediaKeySession.update
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

The `update()` method of the {{domxref('MediaKeySession')}} interface loads messages and licenses to the CDM, and then returns a {{jsxref('Promise')}} .

## Syntax

```js-nolint
update(response)
```

### Parameters

- `response`
  - : An instance that is either an {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}}.

### Return value

A {{jsxref('Promise')}} that resolves to `undefined`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
