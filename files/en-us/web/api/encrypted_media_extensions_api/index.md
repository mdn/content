---
title: Encrypted Media Extensions API
slug: Web/API/Encrypted_Media_Extensions_API
tags:
  - API
  - EME
  - Encrypted Media Extensions
  - Encrypted Media Extensions API
  - EncryptedMediaExtensions
  - NeedsContent
  - Overview
  - Reference
---
{{DefaultAPISidebar("Encrypted Media Extensions")}}

The Encrypted Media Extensions API provides interfaces for controlling the playback of content which is subject to a digital restrictions management scheme.

## Interfaces

- {{domxref('MediaKeyMessageEvent')}}
  - : Contains the content and related data when the content decryption module (CDM) generates a message for the session.
- {{domxref('MediaKeys')}}
  - : Represents a set of keys that an associated {{domxref('HTMLMediaElement')}} can use for decryption of media data during playback.
- {{domxref('MediaKeySession')}}
  - : Represents a context for message exchange with a content decryption module (CDM).
- {{domxref('MediaKeyStatusMap')}}
  - : Is a read-only map of media key statuses by key IDs.
- {{domxref('MediaKeySystemAccess')}}
  - : Provides access to a Key System for decryption and/or a content protection provider.

## Specifications

| Specification            | Status               | Comment            |
| ------------------------ | -------------------- | ------------------ |
| {{SpecName('EME')}} | {{Spec2('EME')}} | Initial definition |

## Browser compatibility

### Navigator.requestMediaKeySystemAccess()

{{Compat("api.Navigator.requestMediaKeySystemAccess")}}
