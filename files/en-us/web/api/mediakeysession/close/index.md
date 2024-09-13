---
title: "MediaKeySession: close() method"
short-title: close()
slug: Web/API/MediaKeySession/close
page-type: web-api-instance-method
browser-compat: api.MediaKeySession.close
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

The `close()` method of the {{domxref('MediaKeySession')}} interface notifies that the current media session is no longer needed, and that the content decryption module should release any resources associated with this object and close it.
Then, it returns a {{jsxref('Promise')}}.

## Syntax

```js-nolint
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
