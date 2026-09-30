---
title: Firefox 157 release notes for developers (Stable)
short-title: Firefox 157 (Stable)
slug: Mozilla/Firefox/Releases/157
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 157 that affect developers.
Firefox 157 was released on [September 29, 2026](https://whattrainisitnow.com/release/?version=157).

## Changes for web developers

### HTML

No notable changes.

### CSS

- The [`at-rule()`](/en-US/docs/Web/CSS/Reference/At-rules/@supports#at-rule) function in the {{cssxref("@supports")}} at-rule lets you test whether the browser supports a given CSS at-rule, for example @supports at-rule(@scope). It also works in the [`supports()`](/en-US/docs/Web/CSS/Reference/At-rules/@import#supports-condition) function of {{cssxref("@import")}} CSS at-rule. ([Firefox bug 2060755](https://bugzil.la/2060755)).
- The {{cssxref("overscroll-behavior")}} shorthand property and the {{cssxref("overscroll-behavior-block")}}, {{cssxref("overscroll-behavior-inline")}}, {{cssxref("overscroll-behavior-x")}} and {{cssxref("overscroll-behavior-y")}} longhand properties now support the [`chain`](/en-US/docs/Web/CSS/Reference/Properties/overscroll-behavior#chain) value. The `chain` value allows scrolling to pass to another scrollable area, but does not allow the browser's default overscroll behavior (such as "bounce") when reaching the boundary. ([Firefox bug 2036966](https://bugzil.la/2036966)).

### JavaScript

No notable changes.

### APIs

- The [WebGPU](/en-US/docs/Web/API/WebGPU_API) `TRANSIENT_ATTACHMENT` [texture usage type](/en-US/docs/Web/API/GPUTexture/usage#value) is now supported. This enables creating memory-efficient attachments that are only used within the current render pass. Related render pass operations stay in tile memory, which avoids VRAM traffic and can avoid VRAM allocation for the textures. ([Firefox bug 2005061](https://bugzil.la/2005061)).

#### DOM

- The {{domxref("Animation.reverse()")}} method and the {{domxref("Animation.playbackRate")}} property now match the [Web Animations](/en-US/docs/Web/API/Web_Animations_API) specification in two cases. First, calling `reverse()` on an animation whose `playbackRate` is `0` now plays the animation. This updates its {{domxref("Animation.startTime", "startTime")}} and {{domxref("Animation.currentTime", "currentTime")}} while leaving `playbackRate` at `0`. Previously, the call had no effect. Second, switching `playbackRate` between a positive and a negative value on a [scroll-driven animation](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) now mirrors the animation's `startTime` to the opposite end of the timeline. As a result, the reversed animation still falls within the scroll range. Previously, `startTime` was left unchanged, which is only correct for time-based timelines such as {{domxref("DocumentTimeline")}}. This adjustment applies when the animation has a `startTime` and a finite duration. ([Firefox bug 2046973](https://bugzil.la/2046973)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- From now on, the recommended preferences will be restored at a different stage during shutdown.
  ([Firefox bug 2066531](https://bugzil.la/2066531)).

#### WebDriver BiDi

- Updated `browser.setDownloadBehavior` command to require `destinationFolder` parameter when calling the command with `type=”allowed”`,
  which aligns us with the specification. In order to restore the default behavior without having to specify a folder, clients should call
  `browser.setDownloadBehavior` with null instead. ([Firefox bug 2069952](https://bugzil.la/2069952)).

## Changes for add-on developers

## Experimental web features

These features are shipping in Firefox 157 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **`export * from "mod"` includes the default export**: `javascript.options.experimental.export_star_default`

  The [TC39 export `*` default proposal](https://tc39.es/proposal-export-star-default/) makes [`export * from "mod"`](/en-US/docs/Web/JavaScript/Reference/Statements/export#re-exporting__aggregating) also provide the module's default export, which it currently omits.
  Note that this preference can only be set in Nightly builds. ([Firefox bug 2065611](https://bugzil.la/2065611)).

- **`navigate` option for notifications**: `dom.webnotifications.navigate.enabled`

  The `navigate` option of the {{domxref("Notification.Notification", "Notification()")}} constructor and {{domxref("ServiceWorkerRegistration.showNotification()")}} takes a URL to open when the user clicks the notification, so you no longer need a click handler just to open a page. The new read-only {{domxref("Notification.navigate")}} property returns that URL. When the option is set, the {{domxref("Notification.click_event", "click")}} and {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} events no longer fire for that notification. Each entry in the {{domxref("Notification.actions", "actions")}} option can set its own `navigate` URL, and an action button without one still fires `notificationclick` rather than using the notification's URL.
  ([Firefox bug 2066184](https://bugzil.la/2066184)).

- **Sanitizing HTML while parsing**: `dom.security.sanitizer.while-parsing`

  Methods that sanitize HTML with the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API), such as {{domxref("Element.setHTML()")}}, now remove unwanted elements and attributes as the markup is parsed, instead of parsing all of the markup first and cleaning up the resulting DOM tree afterwards. The result is the same, except that neighboring text now lands in a single text node instead of being split across several. ([Firefox bug 2062652](https://bugzil.la/2062652)).

- **Key encapsulation in Web Crypto**: `dom.webcrypto.encapsulation.enabled`

  The [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) supports ML-KEM, an algorithm that lets two parties agree on a shared secret key. It is designed to stay secure against attacks by quantum computers. {{domxref("SubtleCrypto")}} has the new `encapsulateKey()`, `encapsulateBits()`, `decapsulateKey()`, and `decapsulateBits()` methods, with matching {{domxref("CryptoKey.usages", "key usages")}}. The supported algorithm names include `ML-KEM-512`, `ML-KEM-768`, and `ML-KEM-1024`. {{domxref("SubtleCrypto.importKey()")}} and {{domxref("SubtleCrypto.exportKey()")}} also accept the new `raw-public` and `raw-seed` key formats. This feature is enabled by default in Nightly builds. ([Firefox bug 1943614](https://bugzil.la/1943614)).
