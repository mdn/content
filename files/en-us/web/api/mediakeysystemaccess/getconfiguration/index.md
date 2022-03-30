---
title: MediaKeySystemAccess.getConfiguration()
slug: Web/API/MediaKeySystemAccess/getConfiguration
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
{{APIRef("EncryptedMediaExtensions")}}{{SeeCompatTable}}

The `MediaKeySystemAccess.getConfiguration()` method returns an object with the supported combination of
the following configuration options:

- `initDataTypes` {{readonlyinline}}
  - : Returns a list of supported initialization data type names. An initialization data type is a string indicating the format of the initialization data.
- `audioCapabilities` {{readonlyinline}}
  - : Returns a list of supported audio type and capability pairs.
- `videoCapabilities` {{readonlyinline}}
  - : Returns a list of supported video type and capability pairs.
- `distinctiveIdentifier` {{readonlyinline}}
  - : Indicates whether a persistent distinctive identifier is required.
- `persistentState` {{readonlyinline}}
  - : Indicates whether the ability to persist state is required.

## Syntax

```js
var mediaKeySystemConfiguration = mediaKeySystemAccess.getConfiguration();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
