---
title: 'Permissions-Policy: midi'
slug: Web/HTTP/Headers/Permissions-Policy/midi
tags:
  - Directive
  - Permissions Policy
  - Permissions-Policy
  - HTTP
  - MIDI
  - Reference
  - Experimental
browser-compat: http.headers.Permissions-Policy.midi
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `midi` directive controls whether the current document is allowed to use the [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API). When this policy is enabled, the {{jsxref("Promise")}} returned by {{domxref("Navigator.requestMIDIAccess()")}} will reject with a `DOMException`.

## Syntax

```http
Permissions-Policy: midi <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

The allow list is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- [Using Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy/Using_Permissions_Policy)
