---
title: Firefox 148 release notes for developers (Beta)
short-title: Firefox 148 (Beta)
slug: Mozilla/Firefox/Releases/148
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 148 that affect developers.
Firefox 148 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [February 24, 2026](https://whattrainisitnow.com/release/?version=148).

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

<!-- ### CSS -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- The {{domxref("Location.ancestorOrigins")}} property is now supported, which enables you to determine whether a document is being embedded in an {{htmlelement("iframe")}} and, if so, by which site(s).
  ([Firefox bug 1085214](https://bugzil.la/1085214)).

- The {{domxref("MouseEvent.movementX", "movementX")}} and {{domxref("MouseEvent.movementY", "movementY")}} properties on the {{domxref("Element/pointerrawupdate_event", "pointerrawupdate")}} event are now populated when the pointer is moved — previously these were set to zero.
  ([Firefox bug 1987671](https://bugzil.la/1987671)).

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Changes for add-on developers

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 148 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Document Picture-in-Picture API** (Nightly): `dom.documentpip.enabled`

  The [Document Picture-in-Picture API](/en-US/docs/Web/API/Document_Picture-in-Picture_API) makes it possible to open an always-on-top window that can be populated with arbitrary HTML content such as a video with custom controls or a set of streams showing the participants of a video conference call.
  ([Firefox bug 1858562](https://bugzil.la/1858562)).
