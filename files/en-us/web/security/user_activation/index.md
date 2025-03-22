---
title: Features gated by user activation
slug: Web/Security/User_activation
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

To ensure applications are unable to abuse APIs that can create a bad user experience when the behavior is not desired, some APIs can only be used when the user is in an "active interaction" state, meaning the user is currently interacting with the web page, or has interacted with the page at least once. Browsers limit access to sensitive APIs like popups, fullscreen, or vibration APIs to active user interactions to prevent malicious scripts from abusing these features. This page lists web platform features available only after user activation.

A user activation either implies that the user is currently interacting with the page, or has completed an interaction since page load. Typically, this is a click on a button or some other user interaction with the UI.

More precisely, an _activation triggering input event_ is an event which:

- has the [`isTrusted`](/en-US/docs/Web/API/Event/isTrusted) attribute set to `true`, and
- is an event of the following types:
  - [`keydown`](/en-US/docs/Web/API/Element/keydown_event) (except for the <kbd>Esc</kbd> key nor a shortcut key reserved by the user agent)
  - [`mousedown`](/en-US/docs/Web/API/Element/mousedown_event)
  - [`pointerdown`](/en-US/docs/Web/API/Element/pointerdown_event) (if `pointerType` is "mouse")
  - [`pointerup`](/en-US/docs/Web/API/Element/pointerup_event) (if `pointerType` is not "mouse")
  - [`touchend`](/en-US/docs/Web/API/Element/touchend_event)

If an activation has been triggered, the user agent differentiates between two types of user activation window states: sticky and transient.

## Transient activation

{{Glossary("Transient activation")}} is a window state that indicates a user has recently pressed a button, moved a mouse, used a menu, or performed some other user interaction. Transient activation expires after a timeout (if not renewed by further interaction) and may also be consumed by some APIs (like {{domxref("Window.open()")}}).

APIs that require transient activation (list is not exhaustive):

- {{domxref("Clients.openWindow()")}}
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.readText()")}}
- {{domxref("Clipboard.write()")}}
- {{domxref("Clipboard.writeText()")}}
- {{domxref("ContactsManager.select()")}}
- {{domxref("Document.requestStorageAccess()")}}
- {{domxref("DocumentPictureInPicture.requestWindow()")}}
- {{domxref("Element.requestFullScreen()")}}
- {{domxref("Element.requestPointerLock()")}}
- {{domxref("EyeDropper.open()")}}
- {{domxref("HID.requestDevice()")}}
- {{domxref("HTMLInputElement.showPicker()")}}
- {{domxref("HTMLSelectElement.showPicker()")}}
- {{domxref("HTMLVideoElement.requestPictureInPicture()")}}
- {{domxref("IdleDetector/requestPermission_static", "IdleDetector.requestPermission()")}}
- {{domxref("Keyboard.lock()")}}
- {{domxref("MediaDevices.getDisplayMedia()")}}
- `MediaDevices.getViewportMedia()`
- {{domxref("MediaDevices.selectAudioOutput()")}}
- `MediaStreamTrack.sendCaptureAction()`
- {{domxref("Navigator.share()")}}
- {{domxref("PaymentRequest.show()")}}
- {{domxref("PresentationRequest.start()")}}
- {{domxref("RemotePlayback.prompt()")}}
- {{domxref("Serial.requestPort()")}}
- {{domxref("USB.requestDevice()")}}
- {{domxref("Window.getScreenDetails()")}}
- {{domxref("Window.open()")}}
- {{domxref("Window.queryLocalFonts()")}}
- {{domxref("Window.showDirectoryPicker()")}}
- {{domxref("Window.showOpenFilePicker()")}}
- {{domxref("Window.showSaveFilePicker()")}}
- {{domxref("WindowClient.focus()")}}
- {{domxref("XRSystem.requestSession()")}}

## Sticky activation

{{Glossary("Sticky activation")}} is a window state that indicates a user has pressed a button, moved a mouse, used a menu, or performed some other user interaction. It is not reset after it has been set initially (unlike transient activation).

APIs that require sticky activation (not exhaustive):

- {{domxref("Window/beforeunload_event", "beforeunload")}} event
- {{domxref("Navigator.vibrate()")}}
- {{domxref("VirtualKeyboard.show()")}}
- Autoplay of [Media and Web Audio APIs](/en-US/docs/Web/Media/Guides/Autoplay) (in particular for [`AudioContexts`](/en-US/docs/Web/API/AudioContext)).

## UserActivation API

To programmatically determine if a window has either sticky or transient user activation, the {{domxref("UserActivation")}} API provides two properties which are available using {{domxref("navigator.userActivation")}}:

- {{domxref("UserActivation.hasBeenActive")}} indicates whether the window has sticky user activation.
- {{domxref("UserActivation.isActive")}} indicates whether the window has transient user activation.

## See also

- {{Glossary("Transient activation")}}
- {{Glossary("Sticky activation")}}
- {{domxref("UserActivation")}} API
- [Features restricted to secure contexts](/en-US/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
