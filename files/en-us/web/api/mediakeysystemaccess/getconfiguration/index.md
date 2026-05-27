---
title: "MediaKeySystemAccess: getConfiguration() method"
short-title: getConfiguration()
slug: Web/API/MediaKeySystemAccess/getConfiguration
page-type: web-api-instance-method
browser-compat: api.MediaKeySystemAccess.getConfiguration
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

The **`getConfiguration()`** method of the {{domxref("MediaKeySystemAccess")}} interface returns an object with the supported combination of the following configuration options:

- `label` {{ReadOnlyInline}}
  - : A string identifying the configuration, preserved as-is from the configuration passed to {{domxref("Navigator.requestMediaKeySystemAccess()")}}. Defaults to the empty string.
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
- `sessionTypes` {{ReadOnlyInline}}
  - : An array of strings indicating the session types that must be supported, such as `"temporary"` or `"persistent-license"`.

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
