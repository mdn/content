---
title: MediaKeySession.expiration
slug: Web/API/MediaKeySession/expiration
page-type: web-api-instance-property
tags:
  - API
  - EncryptedMediaExtensions
  - MediaKeySession
  - NeedsExample
  - Property
  - Reference
  - expiration
browser-compat: api.MediaKeySession.expiration
---
{{APIRef("EncryptedMediaExtensions")}}

The **`MediaKeySession.expiration`** read-only property returns
the time after which the keys in the current session can no longer be used to decrypt
media data, or NaN if no such time exists. This value is determined by the CDM and
measured in milliseconds since January 1, 1970, UTC. This value may change during a
session lifetime, such as when an action triggers the start of a window.

## Value

A number or NaN.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
