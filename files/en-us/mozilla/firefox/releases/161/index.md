---
title: Firefox 161 release notes for developers (Beta)
short-title: Firefox 161 (Beta)
slug: Mozilla/Firefox/Releases/161
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 161 that affect developers.
Firefox 161 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [November 24, 2026](https://whattrainisitnow.com/release/?version=161).

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

- The {{domxref("WebTransport.anticipatedConcurrentIncomingUnidirectionalStreams", "anticipatedConcurrentIncomingUnidirectionalStreams")}} and {{domxref("WebTransport.anticipatedConcurrentIncomingBidirectionalStreams","anticipatedConcurrentIncomingBidirectionalStreams")}} properties of the `WebTransport` interface are now supported, along with the corresponding `options` properties that can be used to set them in the {{domxref("WebTransport/WebTransport", "WebTransport()")}} constructor.
  These properties represent the maximum number of incoming unidirectional and bidirectional streams, respectively, that the application expects the server to have open at the same time.
  ([Firefox bug 2007825](https://bugzil.la/2007825)).

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

These features are shipping in Firefox 161 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Cross-document view transitions** (Nightly): `dom.viewTransitions.cross-document.enabled`

  [Cross-document view transitions](/en-US/docs/Web/API/View_Transition_API/Using#basic_mpa_view_transition) are now enabled by default in Nightly.
  These can be used to animate the transition between same-origin pages in a multi-page app.
  ([Firefox bug 2084340](https://bugzil.la/2084340)).

- **Render blocking** (Nightly): `dom.element.blocking.enabled`

  The `blocking="render"` attribute of the {{HTMLElement("link",,"blocking")}}, {{HTMLElement("script",,"blocking")}}, and {{HTMLElement("style",,"blocking")}} elements is now enabled by default in Nightly.
  This lets you block rendering of the page until the marked stylesheet has loaded or script has run, so the page doesn't first appear unstyled or incomplete.
  This preference also enables [`<link rel="expect">`](/en-US/docs/Web/HTML/Reference/Attributes/rel#expect), which blocks rendering until a particular element has been parsed. It also enables the {{domxref("PerformanceResourceTiming.renderBlockingStatus")}} property, which indicates whether a resource blocked rendering.
  ([Firefox bug 2084340](https://bugzil.la/2084340), [Firefox bug 2053279](https://bugzil.la/2053279)).
