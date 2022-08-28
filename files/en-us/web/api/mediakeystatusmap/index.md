---
title: MediaKeyStatusMap
slug: Web/API/MediaKeyStatusMap
page-type: web-api-interface
tags:
  - API
  - EncryptedMediaExtensions
  - MediaKeyStatusMap
  - NeedsContent
  - Reference
browser-compat: api.MediaKeyStatusMap
---
{{APIRef("EncryptedMediaExtensions")}}

The **`MediaKeyStatusMap`** interface of the [EncryptedMediaExtensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API) is a read-only map of media key statuses by key IDs.

## Properties

- {{domxref("MediaKeyStatusMap.size")}} {{ReadOnlyInline}}
  - : Returns the number of key/value pairs in the status map.

## Methods

- {{domxref("MediaKeyStatusMap.entries()")}} {{ReadOnlyInline}}
  - : Returns a new `Iterator` object containing an array of `[key, value]` for each element in the status map, in insertion order.
- {{domxref("MediaKeyStatusMap.forEach()","MediaKeyStatusMap.forEach(callback[, argument])")}} {{ReadOnlyInline}}
  - : Calls `callback` once for each key-value pair in the status map, in insertion order. If `argument` is present it will be passed to the callback.
- {{domxref("MediaKeyStatusMap.get()")}} {{ReadOnlyInline}}
  - : Returns the value associated with the given key, or `undefined` if there is none.
- {{domxref("MediaKeyStatusMap.has()")}} {{ReadOnlyInline}}
  - : Returns a boolean asserting whether a value has been associated with the given key.
- {{domxref("MediaKeyStatusMap.keys()")}} {{ReadOnlyInline}}
  - : Returns a new `Iterator` object containing keys for each element in the status map, in insertion order.
- {{domxref("MediaKeyStatusMap.values()")}} {{ReadOnlyInline}}
  - : Returns a new `Iterator` object containing values for each element in the status map, in insertion order.
- {{domxref("MediaKeyStatusMap.[@@iterator]()")}} {{ReadOnlyInline}}
  - : Returns a new `Iterator` object containing an array of `[key, value]` for each element in the status map, in insertion order.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
