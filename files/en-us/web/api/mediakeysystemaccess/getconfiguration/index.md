---
title: "MediaKeySystemAccess: getConfiguration() method"
short-title: getConfiguration()
slug: Web/API/MediaKeySystemAccess/getConfiguration
page-type: web-api-instance-method
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

```js-nolint
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
