---
title: "PushManager: supportedContentEncodings static property"
short-title: supportedContentEncodings
slug: Web/API/PushManager/supportedContentEncodings_static
page-type: web-api-static-property
browser-compat: api.PushManager.supportedContentEncodings_static
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`supportedContentEncodings`** read-only static property of the {{domxref("PushManager")}} interface returns an array of supported content codings that can be used to encrypt the payload of a push message.

<!-- The content coding is indicated using the {{httpheader("Content-Encoding")}} HTTP header field when requesting the sending of a push message from the push service. -->

User agents must support the `aes128gcm` content coding defined in {{rfc("8291")}}, and may also support content codings defined from previous versions of the specification.

Note that the returned array is frozen, and may not be modified by the recipient.

## Value

An array of strings.

## Exceptions

- `TypeError`
  - This is thrown when attempting to set a value in the returned array.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
