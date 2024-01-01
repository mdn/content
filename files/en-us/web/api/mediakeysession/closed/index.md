---
title: "MediaKeySession: closed property"
short-title: closed
slug: Web/API/MediaKeySession/closed
page-type: web-api-instance-property
browser-compat: api.MediaKeySession.closed
---

{{APIRef("EncryptedMediaExtensions")}}

The `MediaKeySession.closed` read-only property returns a
{{jsxref('Promise')}} signaling when a {{domxref('MediaKeySession')}} closes. This
promise can only be fulfilled and is never rejected. Closing a session means that
licenses and keys associated with it are no longer valid for decrypting media data.

## Value

A {{jsxref("Promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
