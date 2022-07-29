---
title: Microsoft API extensions
slug: Web/API/Microsoft_Extensions
page-type: landing-page
tags:
  - API
  - API:Microsoft Extensions
  - Non-standard
  - Overview
  - Reference
---
{{DefaultAPISidebar("Microsoft Extensions")}}

Microsoft browsers (Internet Explorer, and in a few cases, Microsoft Edge) support a number of special Microsoft extensions to the otherwise standard [DOM APIs](/en-US/docs/Web/API). These extensions are prefixed with `MS` or `ms`.

> **Note:** These APIs will only work in Microsoft applications, and are not on a standards track.

## Touch APIs

- {{DOMxRef("Element.msZoomTo()")}}
- {{domxref("Element/msContentZoom_event", "msContentZoom")}}
- {{DOMxRef("MSManipulationEvent")}}
- {{domxref("Element/MSManipulationStateChanged_event", "MSManipulationStateChanged")}}
- {{DOMxRef("Touch.MsManipulationViewsEnabled")}}
- `MSPointerHover` {{Deprecated_Inline}}

## Media APIs

- {{DOMxRef("HTMLVideoElement.msFrameStep()")}}
- {{DOMxRef("HTMLVideoElement.msHorizontalMirror")}}
- {{DOMxRef("HTMLVideoElement.msInsertVideoEffect()")}}
- {{DOMxRef("HTMLVideoElement.msIsLayoutOptimalForPlayback")}}
- {{DOMxRef("HTMLVideoElement.msIsStereo3D")}}
- {{DOMxRef("HTMLVideoElement.msZoom")}}
- {{DOMxRef("HTMLAudioElement.msAudioCategory")}}
- {{DOMxRef("HTMLAudioElement.msAudioDeviceType")}}
- {{DOMxRef("HTMLMediaElement.msClearEffects()")}}
- {{DOMxRef("HTMLMediaElement.msInsertAudioEffect()")}}
- {{DOMxRef("MediaError.msExtendedCode")}}
- {{DOMxRef("MSGraphicsTrust")}}
- {{DOMxRef("msGraphicsTrustStatus")}}
- {{DOMxRef("msIsBoxed")}}
- {{DOMxRef("msPlayToDisabled")}}
- {{DOMxRef("msPlayToPreferredSourceUri")}}
- {{DOMxRef("msPlayToPrimary")}}
- {{DOMxRef("msPlayToSource")}}
- {{DOMxRef("msRealTime")}}
- {{DOMxRef("msSetMediaProtectionManager")}}
- {{DOMxRef("HTMLVideoElement.msSetVideoRectangle")}}
- {{DOMxRef("HTMLVideoElement.msStereo3DPackingMode")}}
- {{DOMxRef("HTMLVideoElement.msStereo3DRenderMode")}}
- {{DOMxRef("HTMLVideoElement.onMSVideoFormatChanged")}}
- {{DOMxRef("HTMLVideoElement.onMSVideoFrameStepCompleted")}}
- {{DOMxRef("HTMLVideoElement.onMSVideoOptimalLayoutChanged")}}
- {{DOMxRef("msFirstPaint")}}

## Pinned Sites APIs

- {{DOMxRef("MSSiteModeEvent")}}
- {{DOMxRef("mssitemodejumplistitemremoved")}}
- {{DOMxRef("msthumbnailclick")}}

## Other APIs

- [`x-ms-aria-flowfrom`](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/x-ms-aria-flowfrom)
- [`x-ms-acceleratorkey`](/en-US/docs/Web/HTML/Global_attributes/x-ms-acceleratorkey)
- [`x-ms-format-detection`](/en-US/docs/Web/HTML/Global_attributes/x-ms-format-detection)
- {{DOMxRef("msCaching")}}
- {{DOMxRef("msCachingEnabled")}}
- {{DOMxRef("msCapsLockWarningOff")}}
- {{DOMxRef("Event.msConvertURL()")}}
- {{DOMxRef("mselementresize")}}
- {{DOMxRef("msIsStaticHTML")}}
- {{DOMxRef("Navigator.msLaunchUri()")}}
- {{DOMxRef("msLaunchUriCallback")}}
- `Element.msMatchesSelector()` {{Deprecated_Inline}}
- {{DOMxRef("msProtocols")}}
- {{DOMxRef("msPutPropertyEnabled")}}
- {{DOMxRef("msWriteProfilerMark")}}

## See also

- [Microsoft CSS extensions](/en-US/docs/Web/CSS/Microsoft_Extensions)
- [Microsoft JavaScript extensions](/en-US/docs/Web/JavaScript/Microsoft_JavaScript_extensions)
