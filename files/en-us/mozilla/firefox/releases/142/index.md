---
title: Firefox 142 for developers
short-title: Firefox 142 (Stable)
slug: Mozilla/Firefox/Releases/142
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 142 that affect developers.
Firefox 142 was released on [August 19, 2025](https://whattrainisitnow.com/release/?version=142).

## Changes for web developers

### HTML

#### Removals

- The {{HTMLElement('object')}} element no longer supports the deprecated `codebase` attribute. Use the [`data`](/en-US/docs/Web/HTML/Reference/Elements/object#data) attribute instead. (See [Firefox bug 1973900](https://bugzil.la/1973900) for more details.)

### CSS

No notable changes.

### JavaScript

No notable changes.

### APIs

- The [URL Pattern API](/en-US/docs/Web/API/URL_Pattern_API) is fully supported, enabling you to match and parse URLs using a standardized pattern syntax. ([Firefox bug 1731418](https://bugzil.la/1731418)).
- The [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) now fully supports the {{domxref("HTMLInputElement.webkitdirectory")}} (and corresponding HTML [`webkitdirectory`](/en-US/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) attribute) and {{domxref("File.webkitRelativePath")}} properties on Firefox Android.
  This lets you configure an [`<input type="file">`](/en-US/docs/Web/HTML/Reference/Elements/input/file) element to accept directories instead of files ([Firefox bug 1973726](https://bugzil.la/1973726)).

#### DOM

- The {{domxref("Selection.getComposedRanges()")}} method is now supported, allowing developers to accurately get selected text ranges across shadow DOM boundaries. In addition, the methods {{domxref("Selection.setBaseAndExtent()","setBaseAndExtent()")}}, {{domxref("Selection.collapse()","collapse()")}}, and {{domxref("Selection.extend()","extend()")}} of the {{domxref("Selection")}} interface have been modified to accept nodes inside a shadow root. ([Firefox bug 1903870](https://bugzil.la/1903870)).
- The {{domxref("Animation.overallProgress")}} property is now supported, allowing developers to track and display progress through an animation. ([Firefox bug 1834878](https://bugzil.la/1834878)).
- The {{domxref("Animation.commitStyles()")}} method no longer requires [`fill`](/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) to be set on an animation to commit the computed styles after the animation has finished. Note that until more browsers support this change, you should continue to set `fill`. ([Firefox bug 1973203](https://bugzil.la/1973203)).
- The [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API) is now supported, providing a standardized mechanism to assign and manage task priorities for an application.
  The supported interfaces include: {{domxref("Scheduler")}}, {{domxref("TaskController")}}, {{domxref("TaskSignal")}}, {{domxref("TaskPriorityChangeEvent")}} (and the {{domxref("TaskSignal/prioritychange_event","prioritychange")}} event), and the properties {{domxref("Window.scheduler")}} and {{domxref("WorkerGlobalScope.scheduler")}}.
  The {{domxref("Scheduling")}} interface and the {{domxref("Navigator.scheduling")}} property are not supported.
  ([Firefox bug 1966997](https://bugzil.la/1966997)).

#### Media, WebRTC, and Web Audio

- The {{domxref("RTCIceCandidatePairStats/currentRoundTripTime", "currentRoundTripTime")}}, {{domxref("RTCIceCandidatePairStats/totalRoundTripTime", "totalRoundTripTime")}}, and {{domxref("RTCIceCandidatePairStats/responsesReceived", "responsesReceived")}} properties of the {{domxref("RTCIceCandidatePairStats")}} dictionary are now supported. These return the current round trip time (RTT) and the information needed to calculate the average RTT for the connection.
  ([Firefox bug 1371391](https://bugzil.la/1371391)).
- The {{domxref("RTCRtpSender.setParameters()","setParameters()")}} and {{domxref("RTCRtpSender.getParameters()","getParameters()")}} methods of the {{domxref("RTCRtpSender")}} interface now support setting and getting the specific [`codec`](/en-US/docs/Web/API/RTCRtpSender/setParameters#codecs) used for each `encoding`.
  You can also set a `codec` for each encoding in the [`init.sendEncodings`](/en-US/docs/Web/API/RTCPeerConnection/addTransceiver#sendencodings) array that's passed to the {{domxref("RTCPeerConnection/addTransceiver","addTransceiver()")}} method of the {{domxref("RTCPeerConnection")}} interface.
  ([Firefox bug 1894137](https://bugzil.la/1894137)).
- The {{domxref("RTCInboundRtpStreamStats.estimatedPlayoutTimestamp", "estimatedPlayoutTimestamp")}}, {{domxref("RTCInboundRtpStreamStats.framesAssembledFromMultiplePackets", "framesAssembledFromMultiplePackets")}}, {{domxref("RTCInboundRtpStreamStats.freezeCount", "freezeCount")}}, {{domxref("RTCInboundRtpStreamStats.jitterBufferMinimumDelay", "jitterBufferMinimumDelay")}}, {{domxref("RTCInboundRtpStreamStats.jitterBufferTargetDelay", "jitterBufferTargetDelay")}}, {{domxref("RTCInboundRtpStreamStats.keyFramesDecoded", "keyFramesDecoded")}}, {{domxref("RTCInboundRtpStreamStats.pauseCount", "pauseCount")}}, {{domxref("RTCInboundRtpStreamStats.totalAssemblyTime", "totalAssemblyTime")}}, {{domxref("RTCInboundRtpStreamStats.totalFreezesDuration", "totalFreezesDuration")}} and {{domxref("RTCInboundRtpStreamStats.totalPausesDuration", "totalPausesDuration")}} properties of the {{domxref("RTCInboundRtpStreamStats")}} interface are now supported. ([Firefox bug 1926622](https://bugzil.la/1926622)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Removed FTP proxy support from WebDriver capabilities ([Firefox bug 1972670](https://bugzil.la/1972670)).
- Updated the expiry value of all the cookies set via WebDriver BiDi and WebDriver classic (Marionette) to be limited to 400 days ([Firefox bug 1974394](https://bugzil.la/1974394)).

#### WebDriver BiDi

- Implemented the new `emulation.setLocaleOverride` command which allows clients to override a locale in JavaScript APIs ([Firefox bug 1968952](https://bugzil.la/1968952)).
- Improved setting a proxy with `browsingContext.createUserContext`: added support for host patterns like `.mozilla.org` in `noProxy` property ([Firefox bug 1977180](https://bugzil.la/1977180)) and fixed a bug when setting a HTTP proxy wouldn't allow to navigate to HTTPS URLs ([Firefox bug 1977168](https://bugzil.la/1977168)).
- Fixed a bug where `browsingContext.create` would fail after a `browsingContext.print` command was interrupted by closing a tab with the `browsingContext.close` command ([Firefox bug 1841125](https://bugzil.la/1841125)).
- Updated the `session.end` command to resume all requests which were blocked by network interceptions ([Firefox bug 1974426](https://bugzil.la/1974426)).

#### Marionette

- Updated the `WebDriver:AddCookie` command to throw an error when a target cookie has `sameSite=none` and `secure=false` attributes ([Firefox bug 1977205](https://bugzil.la/1977205)).
- Removed the dialog text value from the `unexpected alert open` error message, since the dialog text is available now via the `data` field ([Firefox bug 1948236](https://bugzil.la/1948236)).

## Changes for add-on developers

- Cookies created with {{WebExtAPIRef("cookies.set()")}} in Nightly are now validated, and invalid cookies are rejected. The implementation in Nightly is to enable monitoring for any issues. The intention is to enforce validation in all channels in a future release. ([Firefox bug 1976197](https://bugzil.la/1976197))
- Adds the {{WebExtAPIRef("browserAction.onUserSettingsChanged")}} and {{WebExtAPIRef("action.onUserSettingsChanged")}} events that listen for changes in the user-specified settings that affect an extension's action. ([Firefox bug 1828220](https://bugzil.la/1828220))

## Experimental web features

- **`anchor-size()`** (Nightly): `layout.css.anchor-positioning.enabled`

  The CSS {{CSSXRef("anchor-size")}} function enables setting anchor-positioned element's size, position, and margins relative to the dimensions of anchor elements. ([Firefox bug 1972610](https://bugzil.la/1972610)).

- **`:heading`** and **`:heading()`**: `layout.css.heading-selector.enabled`

  The CSS {{CSSXRef(":heading")}} pseudo-class allows you to style all [heading elements](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) at once rather than targeting them individually. The {{CSSXRef(":heading_function", ":heading()")}} functional pseudo-class allows you to style heading elements that match the [`<An+B>`](/en-US/docs/Web/CSS/:heading_function#functional_notation) notation. ([Firefox bug 1974386](https://bugzil.la/1974386)).

- **`view-transition-name: match-element`** (Nightly): `dom.viewTransitions.enabled`

  The {{CSSXRef("view-transition-name", "match-element", "#match-element")}} value of the CSS {{CSSXRef("view-transition-name")}} property [automatically](/en-US/docs/Web/CSS/view-transition-name#specifying_view-transition-name_values_automatically) assigns a unique internal `view-transition-name` to each selected element, rather than having to name them individually. ([Firefox bug 1956141](https://bugzil.la/1956141)).

- **`Integrity-Policy` and `Integrity-Policy-Report-Only`** for scripts (Nightly): `security.integrity_policy.enabled`

  The {{httpheader("Integrity-Policy")}} and {{httpheader("Integrity-Policy-Report-Only")}} HTTP headers are now supported for script resources. These allow websites to either enforce [subresource integrity guarantees](/en-US/docs/Web/Security/Subresource_Integrity) for scripts or only report violations of the policy, respectively.
  ([Firefox bug 1976656](https://bugzil.la/1976656)).

- **`Integrity-Policy` and `Integrity-Policy-Report-Only`** for stylesheets: `security.integrity_policy.stylesheet.enabled`

  The {{httpheader("Integrity-Policy")}} and {{httpheader("Integrity-Policy-Report-Only")}} HTTP headers are now supported for stylesheet resources. These allow websites to either enforce or only report violations of the policy, respectively.
  ([Firefox bug 1974247](https://bugzil.la/1974247)).

These features are shipping in Firefox 142 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
