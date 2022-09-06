---
title: 'Feature-Policy: midi'
slug: Web/HTTP/Headers/Feature-Policy/midi
tags:
  - Directive
  - Feature Policy
  - Feature-Policy
  - HTTP
  - MIDI
  - Reference
  - Experimental
browser-compat: http.headers.Feature-Policy.midi
---
{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `midi` directive controls whether the current document is allowed to use the [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API). When this policy is enabled, the {{jsxref("Promise")}} returned by {{domxref("Navigator.requestMIDIAccess()")}} will reject with a `DOMException`.

## Syntax

```http
Feature-Policy: midi <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

The allow list is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
