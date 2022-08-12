---
title: Encrypted Media Extensions API
slug: Web/API/Encrypted_Media_Extensions_API
page-type: web-api-overview
tags:
  - API
  - EME
  - Encrypted Media Extensions
  - Encrypted Media Extensions API
  - EncryptedMediaExtensions
  - NeedsContent
  - Overview
  - Reference
browser-compat: api.Navigator.requestMediaKeySystemAccess
---
{{DefaultAPISidebar("Encrypted Media Extensions")}} {{securecontext_header}}

The Encrypted Media Extensions API provides interfaces for controlling the playback of content which is subject to a digital restrictions management scheme.

Access to this API is provided through {{domxref("Navigator.requestMediaKeySystemAccess()")}}.

## Interfaces

- {{domxref('MediaKeyMessageEvent')}}
  - : Contains the content and related data when the content decryption module (CDM) generates a message for the session.
- {{domxref('MediaKeys')}}
  - : Represents a set of keys that an associated {{domxref('HTMLMediaElement')}} can use for decryption of media data during playback.
- {{domxref('MediaKeySession')}}
  - : Represents a context for message exchange with a content decryption module (CDM).
- {{domxref('MediaKeyStatusMap')}}
  - : A read-only map of media key statuses by key IDs.
- {{domxref('MediaKeySystemAccess')}}
  - : Provides access to a Key System for decryption and/or a content protection provider.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
