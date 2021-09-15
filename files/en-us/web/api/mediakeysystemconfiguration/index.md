---
title: MediaKeySystemConfiguration
slug: Web/API/MediaKeySystemConfiguration
tags:
  - API
  - EME
  - Encrypted Media Extensions
  - Encrypted Media Extensions API
  - EncryptedMediaExtensions
  - Interface
  - MediaKeySystemConfiguration
  - NeedsContent
  - NeedsExample
  - Reference
browser-compat: api.MediaKeySystemConfiguration
---
{{APIRef("Encrypted Media Extensions")}}{{SeeCompatTable}}

The **`MediaKeySystemConfiguration`** dictionary holds configuration information about the media key system in use.

## Properties

- {{domxref("MediaKeySystemConfiguration.initDataTypes")}} {{readonlyinline}}
  - : Returns a list of supported initialization data type names. An initialization data type is a string indicating the format of the initialization data.
- {{domxref("MediaKeySystemConfiguration.audioCapabilities")}} {{readonlyinline}}
  - : Returns a list of supported audio type and capability pairs.
- {{domxref("MediaKeySystemConfiguration.videoCapabilities")}} {{readonlyinline}}
  - : Returns a list of supported video type and capability pairs.
- {{domxref("MediaKeySystemConfiguration.distinctiveIdentifier")}} {{readonlyinline}}
  - : Indicates whether a persistent distinctive identifier is required.
- {{domxref("MediaKeySystemConfiguration.persistentState")}} {{readonlyinline}}
  - : Indicates whether the ability to persist state is required.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
