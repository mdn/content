---
title: Features restricted to secure contexts
slug: Web/Security/Secure_Contexts/features_restricted_to_secure_contexts
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

This reference lists the web platform features available only in secure contexts — see [Secure Contexts](/en-US/docs/Web/Security/Secure_Contexts) for a definition and more details.

## Current features available only in secure contexts

This section lists APIs that specifications make available only in secure contexts.

- [Async Clipboard API](/en-US/docs/Web/API/Clipboard)
- [Background Sync](https://wicg.github.io/BackgroundSync/spec/) (see {{domxref("SyncManager")}}, for example)
- [`Cache-Control: immutable`](/en-US/docs/Web/HTTP/Headers/Cache-Control)
- [Credential Management API](/en-US/docs/Web/API/Credential_Management_API)
- [Device Orientation / Device Motion](/en-US/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [EyeDropper API](/en-US/docs/Web/API/EyeDropper)
- [Encrypted Media Extensions](/en-US/docs/Web/API/Encrypted_Media_Extensions_API)
- [Generic Sensor API](https://w3c.github.io/sensors/)
- {{domxref("Geolocation")}}
- [Notifications API](/en-US/docs/Web/API/Notifications_API)
- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Presentation API](/en-US/docs/Web/API/Presentation_API)
- [Push API](/en-US/docs/Web/API/Push_API)
- [Reporting API](/en-US/docs/Web/API/Reporting_API)
- [Service Workers](/en-US/docs/Web/API/Service_Worker_API)
- [Storage API](/en-US/docs/Web/API/Storage_API)
- [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API)
- [Web Bluetooth](/en-US/docs/Web/API/Web_Bluetooth_API)
- [Web MIDI](/en-US/docs/Web/API/Web_MIDI_API)
- [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API)
- [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
- [Web Share API](/en-US/docs/Web/API/Web_Share_API)

In addition, the following methods require a secure context (even if the associated API does not):

- [`MediaDevices.getUserMedia()`](/en-US/docs/Web/API/MediaDevices/getUserMedia)
- [`Navigator.registerProtocolHandler()`](/en-US/docs/Web/API/Navigator/registerProtocolHandler)

## See also

- [Secure contexts](/en-US/docs/Web/Security/Secure_Contexts)
- ["secure context" query on Chrome Platform Status](https://chromestatus.com/features#secure%20context)
