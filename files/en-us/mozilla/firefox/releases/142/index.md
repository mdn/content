---
title: Firefox 142 for developers
short-title: Firefox 142 (Beta)
slug: Mozilla/Firefox/Releases/142
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 142 that affect developers.
Firefox 142 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [August 19, 2025](https://whattrainisitnow.com/release/?version=142).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

### HTML

<!-- No notable changes. -->

#### Removals

- The {{HTMLElement('object')}} element no longer supports the deprecated `codebase` attribute. Use the [`data`](/en-US/docs/Web/HTML/Reference/Elements/object#data) attribute instead. (See [Firefox bug 1973900](https://bugzil.la/1973900) for more details.)

<!-- ### CSS -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

#### DOM

- The {{domxref("Selection.getComposedRanges()")}} method is now supported, allowing developers to accurately get selected text ranges across shadow DOM boundaries. In addition, the methods {{domxref("Selection.setBaseAndExtent()","setBaseAndExtent()")}}, {{domxref("Selection.collapse()","collapse()")}}, and {{domxref("Selection.extend()","extend()")}} of the {{domxref("Selection")}} interface have been modified to accept nodes inside a shadow root. ([Firefox bug 1903870](https://bugzil.la/1903870)).
- The {{domxref("Animation.overallProgress")}} property is now supported, allowing developers to track and display progress through an animation. ([Firefox bug 1834878](https://bugzil.la/1834878)).
- The {{domxref("Animation.commitStyles()")}} method no longer requires [`fill`](/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) to be set on an animation to commit the computed styles after the animation has finished. Note that until more browsers support this change, you should continue to set `fill`. ([Firefox bug 1973203](https://bugzil.la/1973203)).

#### Media, WebRTC, and Web Audio

- The {{domxref("RTCRtpSender.setParameters()","setParameters()")}} and {{domxref("RTCRtpSender.getParameters()","getParameters()")}} methods of the {{domxref("RTCRtpSender")}} interface now support setting and getting the specific [`codec`](/en-US/docs/Web/API/RTCRtpSender/setParameters#codecs) used for each `encoding`.
  You can also set a `codec` for each encoding in the [`init.sendEncodings`](/en-US/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings) array that's passed to the {{domxref("RTCPeerConnection/addTransceiver","addTransceiver()")}} method of the {{domxref("RTCPeerConnection")}} interface.
  ([Firefox bug 1894137](https://bugzil.la/1894137)).
- The {{domxref("RTCInboundRtpStreamStats.estimatedPlayoutTimestamp", "estimatedPlayoutTimestamp")}}, {{domxref("RTCInboundRtpStreamStats.framesAssembledFromMultiplePackets", "framesAssembledFromMultiplePackets")}}, {{domxref("RTCInboundRtpStreamStats.freezeCount", "freezeCount")}}, {{domxref("RTCInboundRtpStreamStats.jitterBufferMinimumDelay", "jitterBufferMinimumDelay")}}, {{domxref("RTCInboundRtpStreamStats.jitterBufferTargetDelay", "jitterBufferTargetDelay")}}, {{domxref("RTCInboundRtpStreamStats.keyFramesDecoded", "keyFramesDecoded")}}, {{domxref("RTCInboundRtpStreamStats.pauseCount", "pauseCount")}}, {{domxref("RTCInboundRtpStreamStats.totalAssemblyTime", "totalAssemblyTime")}}, {{domxref("RTCInboundRtpStreamStats.totalFreezesDuration", "totalFreezesDuration")}} and {{domxref("RTCInboundRtpStreamStats.totalPausesDuration", "totalPausesDuration")}} properties of the {{domxref("RTCInboundRtpStreamStats")}} interface are now supported. ([Firefox bug 1926622](https://bugzil.la/1926622)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Changes for add-on developers

- Cookies created with {{WebExtAPIRef("cookies.set()")}} in Nightly are now validated, and invalid cookies are rejected. The implementation in Nightly is to enable monitoring for any issues. The intention is to enforce validation in all channels in a future release. ([Firefox bug 1976197](https://bugzil.la/1976197))
- Adds the {{WebExtAPIRef("browserAction.onUserSettingsChanged")}} and {{WebExtAPIRef("action.onUserSettingsChanged")}} events that listen for changes in the user-specified settings that affect an extension's action. ([Firefox bug 1828220](https://bugzil.la/1828220))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  The CSS {{CSSXRef("anchor-size")}} function enables setting anchor-positioned element's size, position, and margins relative to the dimensions of anchor elements. ([Firefox bug 1972610](https://bugzil.la/1972610)).

- **`:heading`** and **`:heading()`**: `layout.css.anchor-positioning.enabled`

  The CSS {{CSSXRef(":heading")}} pseudo-class allows you to style all [heading elements](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) at once rather than targeting them individually. The {{CSSXRef(":heading_function", ":heading()")}} functional pseudo-class allows you to style heading elements that match the [`<An+B>`](/en-US/docs/Web/CSS/:heading_function#functional_notation) notation. ([Firefox bug 1974386](https://bugzil.la/1974386)).

- **`view-transition-name: match-element`** (Nightly): `layout.css.anchor-positioning.enabled`

  The CSS {{CSSXRef("view-transition-name", "match-element", "#match-element")}} value of the `view-transition-name` property gives each selected element a unique internal `view-transition-name`, rather than [having to name them individually](/en-US/docs/Web/CSS/view-transition-name#specifying_view-transition-name_values_automatically). ([Firefox bug 1956141](https://bugzil.la/1956141)).

- **`Integrity-Policy` and `Integrity-Policy-Report-Only`** (Nightly): `security.integrity_policy.enabled`

  The {{httpheader("Integrity-Policy")}} and {{httpheader("Integrity-Policy-Report-Only")}} HTTP headers are now supported. These allow websites to either enforce [subresource integrity guarantees](/en-US/docs/Web/Security/Subresource_Integrity) for scripts or only report violations of the policy, respectively.
  ([Firefox bug 1976656](https://bugzil.la/1976656)).

These features are shipping in Firefox 142 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
