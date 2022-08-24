---
title: MediaKeySystemAccess.getConfiguration()
slug: Web/API/MediaKeySystemAccess/getConfiguration
page-type: web-api-instance-method
tags:
  - API
  - Audio
  - EncryptedMediaExtensions
  - Media
  - MediaKeySystemAccess
  - Method
  - NeedsExample
  - Reference
  - Video
  - getConfiguration
browser-compat: api.MediaKeySystemAccess.getConfiguration
---
{{APIRef("EncryptedMediaExtensions")}}

The `MediaKeySystemAccess.getConfiguration()` method returns an object with the supported combination of
the following configuration options:

- `initDataTypes` {{ReadOnlyInline}}
  - : Returns a list of supported initialization data type names. An initialization data type is a string indicating the format of the initialization data.
- `audioCapabilities` {{ReadOnlyInline}}
  - : Returns a list of supported audio type and capability pairs.
- `videoCapabilities` {{ReadOnlyInline}}
  - : Returns a list of supported video type and capability pairs.
- `distinctiveIdentifier` {{ReadOnlyInline}}
  - : Indicates whether a persistent distinctive identifier is required.
- `persistentState` {{ReadOnlyInline}}
  - : Indicates whether the ability to persist state is required.

## Syntax

```js
getConfiguration()
```

### Parameters

None.

### Return value

An object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
