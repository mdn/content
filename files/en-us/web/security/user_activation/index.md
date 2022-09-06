---
title: Features gated by user activation
slug: Web/Security/User_activation
---

Browsers gate access to sensitive APIs like popups, fullscreen, or vibration APIs behind user activation to prevent malicious scripts from abusing these features. This page lists web platform features available only after user activation.

A user activation either implies that the user is currently interacting with the page, or has completed an interaction since page load. Typically, this is a click on a button or some other user interaction with the UI.

There are two types of user activation, sticky and transient.

## Transient activation

{{Glossary("Transient activation")}} is a window state that indicates a user has recently pressed a button, moved a mouse, used a menu, or performed some other user interaction. Transient activation expires after a timeout (if not renewed by further interaction) and may also be consumed by some APIs (like {{domxref("Window.open()")}}).

Example APIs that require transient activation:

- [`beforeunload` event](/en-US/docs/Web/API/Window/beforeunload_event)
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.readText()")}}
- {{domxref("Document.requestStorageAccess()")}}
- {{domxref("Element.requestFullScreen()")}}
- {{domxref("Element.requestPointerLock()")}}
- `GPUAdapter.requestAdapterInfo()`
- {{domxref("HID.requestDevice()")}}
- {{domxref("HTMLVideoElement.requestPictureInPicture()")}}
- {{domxref("IdleDetector.requestPermission()")}}
- {{domxref("MediaDevices.selectAudioOutput()")}}
- `MediaStreamTrack.sendCaptureAction()`
- `MediaDevices.getViewportMedia()`
- {{domxref("MediaDevices.getDisplayMedia()")}}
- {{domxref("Navigator.share()")}}
- {{domxref("PaymentRequest.show()")}}
- {{domxref("PresentationREquest.start()")}}
- {{domxref("RemotePlayback.prompt()")}}
- {{domxref("USB.requestDevice()")}}
- {{domxref("Keyboard.lock()")}}
- {{domxref("Window.open()")}}
- {{domxref("Window.showOpenFilePicker()")}}
- {{domxref("Window.showSaveFilePicker()")}}
- {{domxref("Window.showDirectoryPicker()")}}
- `Window.getScreenDetails()`
- `Window.queryLocalFonts()`
- {{domxref("XRSystem.requestSession()")}}

## Sticky activation

{{Glossary("Sticky activation")}} is a window state that indicates a user has pressed a button, moved a mouse, used a menu, or performed some other user interaction. It is not reset during the frame's lifetime after it has been set initially (unlike transient activation).

Examples APIs that require sticky activation:

- {{domxref("Navigator.vibrate()")}}
- `navigator.getAutoplayPolicy()`
- `navigator.virtualKeyboard.show()`

## See also

- {{Glossary("Transient activation")}}
- {{Glossary("Sticky activation")}}
- [Features restricted to secure contexts](/en-US/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}
