---
title: Firefox 145 release notes for developers (Beta)
short-title: Firefox 145 (Beta)
slug: Mozilla/Firefox/Releases/145
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 145 that affect developers.
Firefox 145 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [November 11, 2025](https://whattrainisitnow.com/release/?version=145).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

- The {{cssxref("text-autospace")}} property is now supported, allowing automatic spacing adjustments between characters from different scripts ([Firefox bug 1981086](https://bugzil.la/1981086), [Firefox bug 1869577](https://bugzil.la/1869577)).

- Firefox now supports the legacy [`-webkit-fill-available` keyword](Web/CSS/WebKit_Extensions) as a value for the CSS {{cssxref("width")}} and {{cssxref("height")}} properties, to improve web compatibility.
  This keyword is an alias for the recently-standardized `stretch` keyword (i.e., [`width: stretch`](/en-US/docs/Web/CSS/width#stretch) and [`height: stretch`](/en-US/docs/Web/CSS/height#stretch)) which isn't yet supported in Firefox.
  ([Firefox bug 1988938](https://bugzil.la/1988938), [Firefox bug 1789477](https://bugzil.la/1789477)).

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

### HTTP

- The {{httpheader("Integrity-Policy")}} and {{httpheader("Integrity-Policy-Report-Only")}} HTTP headers are now supported for script resources. These allow websites to enforce [subresource integrity guarantees](/en-US/docs/Web/Security/Subresource_Integrity) for _scripts_.
  Note that the [`endpoints`](/en-US/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) key is not yet supported (violations are logged to console).
  ([Firefox bug 1984973](https://bugzil.la/1984973)).

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

<!-- #### DOM -->

#### Media, WebRTC, and Web Audio

- {{domxref("RTCEncodedVideoFrame")}} and {{domxref("RTCEncodedAudioFrame")}} are now {{glossary("Serializable object", "serializable objects")}}, and {{domxref("RTCEncodedAudioFrame/RTCEncodedAudioFrame", "RTCEncodedAudioFrame()")}} and {{domxref("RTCEncodedVideoFrame/RTCEncodedVideoFrame", "RTCEncodedVideoFrame()")}} copy constructors are supported. These changes allow frames to be cloned, and to be shared between workers and the main thread. ([Firefox bug 1868223](https://bugzil.la/1868223) and [Firefox bug 1975032](https://bugzil.la/1975032)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Changes for add-on developers

- Cookies created with {{WebExtAPIRef("cookies.set()")}} are now validated, and invalid cookies are rejected. This change was implemented in Nightly only from Firefox 142. ([Firefox bug 1976509](https://bugzil.la/1976509))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 145 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **CSS anchor positioning** (Nightly): `layout.css.anchor-positioning.enabled`

  Nightly builds now support [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) by default, which allows to tether elements together.
  The anchor-positioned elements can then have their size and position set relative to the size and location of the anchor elements to which they are bound.
  ([Firefox bug 1988224](https://bugzil.la/1988224)).
