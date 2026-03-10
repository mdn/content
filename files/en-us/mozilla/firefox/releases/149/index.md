---
title: Firefox 149 release notes for developers (Beta)
short-title: Firefox 149 (Beta)
slug: Mozilla/Firefox/Releases/149
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 149 that affect developers.
Firefox 149 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [March 24, 2026](https://whattrainisitnow.com/release/?version=149).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

### HTML

- The [`popover`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover) global attribute now supports the [`hint`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover#hint) value. Popovers with the `hint` value will not close `auto` popovers when they are displayed, but will close other hint popovers. ([Firefox bug 1867743](https://bugzil.la/1867743)).

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

#### DOM

- The {{domxref("CloseWatcher")}} interface is now supported.
  This allows developers to implement components that can be closed using device-native mechanisms, such as the <kbd>Esc</kbd> on Windows or the <kbd>Back</kbd> key on Android, in the same way as built-in components such as [dialogs](/en-US/docs/Web/HTML/Reference/Elements/dialog) and [popovers](/en-US/docs/Web/API/Popover_API).
  ([Firefox bug 1966073](https://bugzil.la/1966073)).

- DOM methods now allow the same characters to be used for element and attribute names as the HTML parser (previously DOM methods were far more restrictive about the set of allowed characters).
  ([Firefox bug 1773312](https://bugzil.la/1773312)).

  The affected methods are: {{domxref("Document/createAttribute","createAttribute()")}}, {{domxref("Document/createAttributeNS","createAttributeNS()")}}, {{domxref("Document/createElement","createElement()")}} and {{domxref("Document/createElementNS","createElementNS()")}} of the {{domxref("Document")}} interface, {{domxref("Element/toggleAttribute","toggleAttribute()")}}, {{domxref("Element/setAttribute","setAttribute()")}}, {{domxref("Element/setAttributeNS","setAttributeNS()")}} of the {{domxref("Element")}} interface, {{domxref("DOMImplementation/createDocument","createDocument()")}} of the {{domxref("DOMImplementation")}} interface, and {{domxref("CustomElementRegistry/define","define()")}} and {{domxref("CustomElementRegistry/whenDefined","whenDefined()")}} of the {{domxref("CustomElementRegistry/whenDefined","whenDefined()")}} interface.

#### Media, WebRTC, and Web Audio

- The {{domxref("HTMLMediaElement.captureStream()")}} method is now supported.
  This returns an object that streams the real-time capture of the content in the element.
  The stream can be used, for example, as a source for a WebRTC {{domxref("RTCPeerConnection")}}.
  Previously, `captureStream()` was available only as the non-standard `mozCaptureStream()` method.
  ([Firefox bug 2017708](https://bugzil.la/2017708)).

- {{domxref("MediaElementAudioSourceNode")}} now respects the media element's volume when capturing audio for all types of sources (as required by the specification).
  Previously, setting the volume of the element did not affect the captured audio for {{domxref("MediaStream")}} sources.
  ([Firefox bug 2010427](https://bugzil.la/2010427)).

- The {{domxref("HTMLMediaElement.captureStream()", "HTMLMediaElement.mozCaptureStream()")}} method now captures raw audio from the source without applying the media element's volume, regardless of the type of source the media element is playing (as required by the specification).
  Prior to this change, the media element's volume affected the volume of the captured stream.
  ([Firefox bug 2010427](https://bugzil.la/2010427)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Changes for add-on developers

<!-- ### Removals -->

The ability of extensions to dynamically execute code in their `moz-extension:` documents with {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, and {{WebExtAPIRef("scripting.removeCSS")}} is deprecated. The feature is no longer available in Firefox Nightly, and the beta and release versions of Firefox provide a warning in the tab's console. This restriction will apply to all versions of Firefox 152 and later. As an alternative, an extension can run code in its documents dynamically by registering a {{WebExtAPIRef("runtime.onMessage")}} listener in the document's script, then sending a message to trigger execution of the required code.([Firefox bug 2011234](https://bugzil.la/2011234))

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 149 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **`<attr-type>` values in `attr()` CSS function**: `layout.css.attr.enabled`

  The {{cssxref("attr")}} CSS function now supports [`<attr-type>`](/en-US/docs/Web/CSS/Reference/Values/attr#attr-type) values. This allows you to specify how an attribute value is parsed into a CSS value and take those values directly from [`data-*`](/en-US/docs/Web/HTML/How_to/Use_data_attributes). ([Firefox bug 1986631](https://bugzil.la/1986631) & [Firefox bug 1998245](https://bugzil.la/1998245)).

- **`color-mix()` accepts multiple color arguments**: `layout.css.color-mix-multi-color.enabled`

  The [`color-mix()`](/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS function now supports multiple [`<color>`](/en-US/docs/Web/CSS/Reference/Values/color_value) values, rather than just two. This allows you to mix many colors and set the percentages of each. ([Firefox bug 2007772](https://bugzil.la/2007772)).
