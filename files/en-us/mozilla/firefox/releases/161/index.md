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

### SVG

- The [`referrerpolicy`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy) attribute is now supported on the {{SVGElement("image")}}, {{SVGElement("script")}}, and {{SVGElement("feImage")}} elements, along with the corresponding {{domxref("SVGImageElement.referrerPolicy")}}, {{domxref("SVGScriptElement.referrerPolicy")}}, and {{domxref("SVGFEImageElement.referrerPolicy")}} properties.
  These control how much referrer information is sent in the {{HTTPHeader("Referer")}} header when the element fetches the resource referenced by its `href` attribute. This works in the same way as the `referrerpolicy` attribute on the HTML {{HTMLElement("img")}} and {{HTMLElement("script")}} elements.
  ([Firefox bug 2079321](https://bugzil.la/2079321)).

<!-- #### Removals -->

### CSS

- The {{cssxref("random")}} CSS function is now supported. It generates a random value within a specified range and can optionally limit the possible values to increments of a specified step size. An optional `<random-key>` parameter can be used to share a random base value across `random()` functions, for example on different elements or in different properties. ([Firefox bug 2072252](https://bugzil.la/2072252)).

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
- The [Clipboard API](/en-US/docs/Web/API/Clipboard_API) now supports [custom clipboard formats](/en-US/docs/Web/API/Clipboard_API#custom_clipboard_formats), which allow web apps to write and read their own data formats using {{domxref("Clipboard.write()")}} and {{domxref("Clipboard.read()")}}.
  A custom format is a MIME type prefixed with `"web "`, such as `"web text/x-my-format"`.
  Custom formats can only be read by a page that is same-origin with the page that wrote them.
  ([Firefox bug 2053725](https://bugzil.la/2053725), [Firefox bug 2086505](https://bugzil.la/2086505)).

- The {{domxref("NavigationTransition.to")}} property of the [Navigation API](/en-US/docs/Web/API/Navigation_API) is now supported.
  This returns a {{domxref("NavigationDestination")}} for the ongoing navigation, so code outside the {{domxref("Navigation/navigate_event", "navigate")}} event handler can find out where the navigation is going.
  For example, a {{domxref("Navigation/navigateerror_event", "navigateerror")}} handler can use it to report which navigation failed.
  ([Firefox bug 1991959](https://bugzil.la/1991959)).

<!-- #### DOM -->

#### Media, WebRTC, and Web Audio

- The {{domxref("RTCRtpSender.setParameters()")}} method now supports the optional [`setParameterOptions`](/en-US/docs/Web/API/RTCRtpSender/setParameters#setparameteroptions) parameter.
  This lets you ask the encoder for an encoding to generate a key frame in the same call that you use to change the sender's encoding parameters, such as `active` or `scaleResolutionDownBy`. Receivers can then avoid requesting a key frame after the change.
  ([Firefox bug 2057265](https://bugzil.la/2057265)).

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
  ([Firefox bug 2084340](https://bugzil.la/2084340)).
