---
title: DRM and authentication
slug: Plugins/Flash_to_HTML5/Video/DRM_and_authentication
tags:
  - Authentication
  - DRM
  - Flash
  - HTML
  - Video
  - credential management
  - digital rights management
---
{{PreviousMenuNext("Plugins/Flash_to_HTML5/Video/File_format_conversion", "Plugins/Flash_to_HTML5/Video/Advertising", "Plugins/Flash_to_HTML5/Video")}}

If your media requires authentication/rights to access, you'll need to work out how to hook up the necessary digital rights management and authentication mechanisms.

You can either work directly with the listed tools and technologies for DRM, or through a third-party vendor such as [Brightcove](https://www.brightcove.com/en/online-video-platform/content-protection-encryption-drm), [Google](https://www.widevine.com/) or [Adobe](https://www.adobe.com/uk/marketing-cloud/primetime/digital-rights-management.html). The advantage of using a third-party vendor's system is that generally they will provide or assist with code for checking which platform the user is on, coordinating with the relevant key system for that platform to handle the DRM, etc.

## What is needed for digital rights management?

There are a number of components involved in digital rights management (DRM) on the web:

- A combination of browser and video player that support the [Encrypted Media Extensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API) (EME). EME is a JavaScript API that coordinates the different moving parts involved in DRM. (See the [browser support tables ](/en-US/docs/Plugins/Flash_to_HTML5/Video#browser_support)for more information.) An example player that supports EME is [Google's Shaka player](https://github.com/google/shaka-player). (See [Welcome to Shaka Player](https://shaka-player-demo.appspot.com/docs/api/tutorial-welcome.html) for a series of tutorials.) EME allows you to reuse encrypted assets across many HTML5 platforms.
- A packaging service to encrypt your media. Your media needs to be encrypted to work with an EME-supporting player. HTML5 video can be encrypted once using the ISO BMFF/CENC format and streamed to many browser, mobile, and consumer electronics platforms, saving critical asset storage and maintenance costs. One tool that can satisfy these needs is [Shaka Packager](https://github.com/google/shaka-packager). (See [Widevine Encoding and Packaging](https://storage.googleapis.com/wvdocs/Widevine_DRM_Encoding_and_Packaging.pdf) and [Widevine Using the Shaka Packager and Player](https://storage.googleapis.com/wvdocs/Widevine_DRM_Using_Shaka_Packager_and_Player.pdf) for useful usage information.)
- A DRM service (key system) that generates keys to be used in license requests.
- A content decryption module (CDM) for client-side playback. This component handles retrieving keys, generating license requests by sending keys to license servers, etc. EME provides an interface for interacting with CDMs, though it does not define any itself.

You can find a lot more detail about how the system works in [What is EME?](https://developers.google.com/web/fundamentals/media/eme)

### DRM services

Unlike Flash, the web requires you to use different digital rights management services depending upon which OS/browser your app is running on. The primary DRM services (key systems) for the web are:

- [Google Widevine](https://www.widevine.com/)
- [Microsoft PlayReady](https://www.microsoft.com/playready/)
- [Apple FairPlay](https://developer.apple.com/streaming/fps/)

In general, Widevine is supported by Firefox, Chrome, and Opera, PlayReady is supported by IE/Edge, and FairPlay is supported by Safari. Check out our [Browser support tables](/en-US/docs/Plugins/Flash_to_HTML5/Video#browser_support) for more details.

## Authentication

If you want users to authenticate before they can access your content, you could build your own authentication system, or use a single toolkit like [Adobe Primetime](https://www.adobe.com/uk/marketing-cloud/primetime/digital-rights-management.html) to handle both your authentication and DRM needs in one place.

If you want to create your own system, it is worth taking a look at the [Credential Management API](/en-US/docs/Web/API/Credential_Management_API), which is a dedicated API to facilitate authentication.
