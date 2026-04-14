---
title: Firefox 150 release notes for developers (Beta)
short-title: Firefox 150 (Beta)
slug: Mozilla/Firefox/Releases/150
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 150 that affect developers.
Firefox 150 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [April 21, 2026](https://whattrainisitnow.com/release/?version=150).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

### HTML

- The `"auto"` keyword is now supported as an option for the [`sizes`](/en-US/docs/Web/HTML/Reference/Elements/img#sizes) attribute of `<img>` elements (and [`HTMLImageElement.sizes`](/en-US/docs/Web/API/HTMLImageElement/sizes)).
  This allows lazy-loaded `<img>` elements to use the calculated image layout size, after any CSS has been applied, to select which image to display from a [`srcset`](/en-US/docs/Web/HTML/Reference/Elements/img#srcset).
  This is simpler that specifying media conditions and their associated sizes in the attribute, which likely duplicates behavior that is already captured in CSS media queries.
  ([Firefox bug 1819581](https://bugzil.la/1819581)).

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

- The [`light-dark()`](/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark) CSS function now accepts [`<image>`](/en-US/docs/Web/CSS/Reference/Values/image) values. This allows using images, gradients, and so on for different color schemes.
  ([Firefox bug 2023569](https://bugzil.la/2023569)).

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- The {{domxref("Sanitizer.replaceElementWithChildren()")}} method will now return `false` if the element to be replaced is {{htmlelement("html")}} in the HTML [namespace](/en-US/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace).
  In other words, you can't use this method to create a {{domxref("Sanitizer")}} that will replace the `<html>` element with its inner content. ([Firefox bug 2022176](https://bugzil.la/2022176)).

#### DOM

- The [`options.shadowRoots`](/en-US/docs/Web/API/Document/caretPositionFromPoint#shadowroots) argument of the {{domxref('Document.caretPositionFromPoint()')}} method is now supported.
  This allows the method to return the node containing the caret from within a shadow DOM, provided its associated {{domxref("ShadowRoot")}} was passed as an option.
  ([Firefox bug 1914596](https://bugzil.la/1914596)).

- The non-standard {{domxref("Document/caretRangeFromPoint","caretRangeFromPoint()")}} method of the {{domxref("Document")}} interface is now supported. ([Firefox bug 1550635](https://bugzil.la/1550635)).
- The `ariaNotify()` method is now supported on {{domxref("Document/ariaNotify","Document")}} and {{domxref("Element/ariaNotify","Element")}}.
  This queues a string of text to be announced by a {{glossary("screen reader")}}, providing a more ergonomic and reliable alternative to [ARIA live regions](/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions).
  ([Firefox bug 2018095](https://bugzil.la/2018095)).

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Changes for add-on developers

- The behavior of {{WebExtAPIRef("tabs.move")}} is updated for split views so that:
  - The order of tabs in a split view can be swapped. ([Firefox bug 2016762](https://bugzil.la/2016762))
  - When the list of tabs includes both split view tabs and places one or more tabs between them, the tabs are moved apart and the split view closed. ([Firefox bug 2022549](https://bugzil.la/2022549))
- Extension documents can now use the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) and assert a [Relying Party ID (RP ID)](/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#rp) for any domain covered by the extension's [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions). This change means that {{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}} and {{domxref("CredentialsContainer.create()", "navigator.credentials.get()")}} can specify an RP ID matching a host-permitted domain, enabling extensions to create and retrieve WebAuthn credentials on behalf of web services. See [Use Web Authn API in web extensions](/en-US/docs/Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api) for details. ([Firefox bug 1956484](https://bugzil.la/1956484)).
- Resolved an issue with some JavaScript [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) calls failing to import CSS. ([Firefox bug 2016369](https://bugzil.la/2016369))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 150 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Scoped custom element registries**: `dom.scoped-custom-element-registries.enabled`

  The {{domxref("CustomElementRegistry","customElementRegistry")}} property is supported on {{domxref("Document")}}, {{domxref("Element")}}, and {{domxref("ShadowRoot")}}.
  This allows the definition of [scoped custom element registries](/en-US/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries).
  ([Firefox bug 2018900](https://bugzil.la/2018900)).
