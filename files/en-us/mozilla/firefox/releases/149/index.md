---
title: Firefox 149 release notes for developers (Stable)
short-title: Firefox 149 (Stable)
slug: Mozilla/Firefox/Releases/149
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 149 that affect developers.
Firefox 149 was released on [March 24, 2026](https://whattrainisitnow.com/release/?version=149).

## Changes for web developers

### HTML

- The [`popover`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover) global attribute now supports the [`hint`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover#hint) value. Popovers with the `hint` value will not close `auto` popovers when they are displayed, but will close other hint popovers. ([Firefox bug 1867743](https://bugzil.la/1867743)).

### MathML

- The CSS [`font-family: math`](/en-US/docs/Web/CSS/Reference/Properties/font-family#math) property is now supported, and applied to {{mathmlelement('math')}} elements by default.
  This ensures that websites can use an appropriate math font and/or MathML without having to know what fonts are present on the underlying OS. ([Firefox bug 2014703](https://bugzil.la/2014703)).

### CSS

- The {{CSSXRef("shape-outside")}} CSS property now supports the [`xywh()`](/en-US/docs/Web/CSS/Reference/Values/basic-shape/xywh) and [`rect()`](/en-US/docs/Web/CSS/Reference/Values/basic-shape/rect) functions as values. These functions were previously already implemented for the {{CSSXRef("clip-path")}} and {{CSSXRef("offset-path")}} properties, and are now also available for `shape-outside`. ([Firefox bug 1983187](https://bugzil.la/1983187)).

- The {{CSSXRef("vertical-align")}} CSS property is now a shorthand property for {{CSSXRef("alignment-baseline")}}, {{CSSXRef("baseline-shift")}} and {{CSSXRef("baseline-source")}} properties. ([Firefox bug 1830771](https://bugzil.la/1830771)).

- The [`<container-query>`](/en-US/docs/Web/CSS/Reference/At-rules/@container#container-query) part of the {{cssxref("@container")}} [at-rule](/en-US/docs/Web/CSS/Guides/Syntax/At-rules) condition is now optional.
  This allows matching against containers based solely on their names.
  ([Firefox bug 2016474](https://bugzil.la/2016474)).

### JavaScript

- The `"islamic-umalqura"` [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) is now supported by {{jsxref("Intl")}}.
  This string will be in the list of calendars returned by {{jsxref("Intl.supportedValuesOf()")}}, and can be set as the [`options.calendar`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#calendar) parameter in the [`DateTimeFormat()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).
  ([Firefox bug 2011505](https://bugzil.la/2011505)).

### APIs

- The [`options.resizeQuality`](/en-US/docs/Web/API/Window/createImageBitmap#resizequality) parameter is now supported by {{domxref("Window.createImageBitmap()")}} and {{domxref("WorkerGlobalScope.createImageBitmap()")}}.
  In addition, the methods now allow both resize options ([`options.resizeWidth`](/en-US/docs/Web/API/Window/createImageBitmap#resizewidth) or [`options.resizeHeight`](/en-US/docs/Web/API/Window/createImageBitmap#resizeheight)) and image bitmap parameters ([`sx`, `sy`, `sw`, and `sh`](/en-US/docs/Web/API/Window/createImageBitmap#sx)) to be set at the same time — previously setting both returned the unscaled source bitmap.
  ([Firefox bug 2010125](https://bugzil.la/2010125)).

- The [Reporting API](/en-US/docs/Web/API/Reporting_API) is now supported for reporting [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) and {{httpheader("Integrity-Policy")}} violations.
  This API allows {{domxref("CSPViolationReport")}} and {{domxref("IntegrityViolationReport")}} objects to be reported in violating pages using a {{domxref("ReportingObserver")}} (reports can be filtered on the `type` property: `"csp-violation"` or `"integrity-violation"`).
  A serialized version of the report objects can also be sent to a reporting server specified in the corresponding HTTP header — endpoint names and corresponding URLs must first be defined in the {{httpheader('Reporting-Endpoints')}} or {{httpheader('Report-To')}} HTTP response headers.
  ([Firefox bug 1976074](https://bugzil.la/1976074), [Firefox bug 2008916](https://bugzil.la/2008916)).

- Up to Firefox 148, `structuredClone.call(iframe.contentWindow)` incorrectly created objects in the caller's [realm](/en-US/docs/Web/JavaScript/Reference/Execution_model#realms) instead of the iframe's realm. The implementation now instantiates objects in the `this` realm, so the method's behavior more closely matched the specification.

#### DOM

- The [`HTMLSelectElement.showPicker()`](/en-US/docs/Web/API/HTMLInputElement/showPicker#showpicker_for_a_datalist_input) method is now supported for a list of options defined in a {{htmlelement("datalist")}}.
  This allows the browser picker for a `<datalist>` to be programmatically launched when triggered by user interaction ([Firefox bug 1998668](https://bugzil.la/1998668)).

- The {{domxref("CloseWatcher")}} interface is now supported.
  This allows developers to implement components that can be closed using device-native mechanisms, such as the <kbd>Esc</kbd> on Windows or the <kbd>Back</kbd> key on Android, in the same way as built-in components such as [dialogs](/en-US/docs/Web/HTML/Reference/Elements/dialog) and [popovers](/en-US/docs/Web/API/Popover_API).
  ([Firefox bug 1966073](https://bugzil.la/1966073)).

- DOM methods now allow wider range of characters for element and attribute names.
  Previously, DOM methods were far more restrictive, but now they allow the same set of characters as the HTML parser.
  The affected methods are: {{domxref("Document/createAttribute","createAttribute()")}}, {{domxref("Document/createAttributeNS","createAttributeNS()")}}, {{domxref("Document/createElement","createElement()")}} and {{domxref("Document/createElementNS","createElementNS()")}} of the {{domxref("Document")}} interface, {{domxref("Element/toggleAttribute","toggleAttribute()")}}, {{domxref("Element/setAttribute","setAttribute()")}}, {{domxref("Element/setAttributeNS","setAttributeNS()")}} of the {{domxref("Element")}} interface, {{domxref("DOMImplementation/createDocument","createDocument()")}} of the {{domxref("DOMImplementation")}} interface, and {{domxref("CustomElementRegistry/define","define()")}} and {{domxref("CustomElementRegistry/whenDefined","whenDefined()")}} of the {{domxref("CustomElementRegistry/whenDefined","whenDefined()")}} interface.
  ([Firefox bug 1773312](https://bugzil.la/1773312)).

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

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Updated the screenshot implementations for both the WebDriver BiDi and WebDriver classic protocols to correctly return an error when the requested screenshot area exceeds the maximum supported dimensions, rather than silently clipping it. ([Firefox bug 1994148](https://bugzil.la/1994148)).
- Updated the Actions implementation for both the WebDriver BiDi and WebDriver classic protocols to allow a `scroll` action of input source type `wheel` to scroll more than the visual viewport dimensions. ([Firefox bug 1962355](https://bugzil.la/1962355)).

#### WebDriver BiDi

- Added support for automatic user prompt handling, which can be configured through capabilities with the `session.new` command. ([Firefox bug 1905086](https://bugzil.la/1905086)).
- Added the `browser.setDownloadBehavior` command, which lets clients allow or prohibit the downloads and also set a custom download folder. This behavior can be configured per session or per user contexts. ([Firefox bug 1989022](https://bugzil.la/1989022)).
- Added the `script.realmCreated` and `script.realmDestroyed` events for worker realms (for dedicated, shared and service workers). ([Firefox bug 1936770](https://bugzil.la/1936770)).
- Fixed an issue where the `browsingContext.userPromptOpened` and `browsingContext.userPromptClosed` events incorrectly reported the top-level context ID instead of the iframe's context ID on Android. ([Firefox bug 2007385](https://bugzil.la/2007385)).
- Fixed the serialization for DOM nodes to stop exposing User Agent specific shadow roots. ([Firefox bug 2016673](https://bugzil.la/2016673)).
- Updated the logic of applying different settings to new browsing contexts to make sure that in the case of creating a browsing context with the `window.open` command, emulations, viewport overrides and preload scripts apply before the command returns. ([Firefox bug 1985997](https://bugzil.la/1985997), [Firefox bug 2005546](https://bugzil.la/2005546), and [Firefox bug 2005558](https://bugzil.la/2005558)).

#### Marionette

- Improved several WebDriver classic commands to handle `implicit` and `pageLoad` timeouts in line with the script timeout, allowing `null` values to disable the timeouts. ([Firefox bug 2008345](https://bugzil.la/2008345)).

## Changes for add-on developers

- Adds initial support for split view. This support covers:
  - Inclusion of the split view ID in {{WebExtAPIRef("tabs.query")}}, {{WebExtAPIRef("tabs.onUpdated")}}, and {{WebExtAPIRef("tabs.Tab")}}
  - Documentation of the behavior when {{WebExtAPIRef("tabs.move")}} or {{WebExtAPIRef("tabs.remove")}} include tabs in a split view.
    ([Firefox bug 1993037](https://bugzil.la/1993037))
- Adds support for `tabId` as a top-level parameter in {{WebExtAPIRef("action.isEnabled")}} and {{WebExtAPIRef("browserAction.isEnabled")}}. This change provides for compatibility with the Chrome implementation of `action.isEnabled`. ([Firefox bug 2013477](https://bugzil.la/2013477))
- A user gesture is no longer required for {{WebExtAPIRef("action.openPopup")}} and {{WebExtAPIRef("browserAction.openPopup")}} to open a popup. This feature was available behind the `extensions.openPopupWithoutUserGesture.enabled` preference from Firefox 108. This change aligns Firefox's behavior with Chrome and Safari. ([Firefox bug 1799344](https://bugzil.la/1799344))
- If `windowId` is passed in {{WebExtAPIRef("action.openPopup")}} or {{WebExtAPIRef("browserAction.openPopup")}}, the window must be focused (active) for the popup to open. To open a popup in an unfocused window {{WebExtAPIRef("windows.update","windows.update(windowId, { focused: true })")}} must be called first. This change aligns Firefox behavior with Chrome. ([Firefox bug 2011516](https://bugzil.la/2011516))
- The implementation of {{domxref("structuredClone")}} has changed to instantiate objects in the `this` realm instead of the caller's realm. For backwards compatibility, the global scope of content scripts now includes its own `structuredClone` method that shadows the `window.structuredClone` method. For more information, see [`structuredClone` in Sharing objects with page scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#structuredclone).

- The ability of extensions to dynamically execute code in their `moz-extension:` documents with {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, and {{WebExtAPIRef("scripting.removeCSS")}} is deprecated. ([Firefox bug 2011234](https://bugzil.la/2011234)) The feature is no longer available in Firefox Nightly, and the beta and release versions of Firefox provide a warning in the tab's console. This restriction will apply to all versions of Firefox 152 and later. ([Firefox bug 2015559](https://bugzil.la/2015559)) As an alternative, an extension can run code in its documents dynamically by registering a {{WebExtAPIRef("runtime.onMessage")}} listener in the document's script, then sending a message to trigger execution of the required code.
- The implicit CSS filter applied to [page action](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) SVG icons on dark themes is deactivated in Nightly builds ([Firefox bug 2001318](https://bugzil.la/2001318)) and will be deactivated in other Firefox editions from version 152 ([Firefox bug 2016509](https://bugzil.la/2016509)). You can test page action SVG icons with the CSS filter disabled in other Firefox editions by creating a boolean `about:config` preference called `extensions.webextensions.pageActionIconDarkModeFilter.enabled` and setting it to `false`.

## Experimental web features

These features are shipping in Firefox 149 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **`<attr-type>` values in `attr()` CSS function**: `layout.css.attr.enabled`

  The {{cssxref("attr")}} CSS function now supports [`<attr-type>`](/en-US/docs/Web/CSS/Reference/Values/attr#attr-type) values. This allows you to specify how an attribute value is parsed into a CSS value and take those values directly from [`data-*`](/en-US/docs/Web/HTML/How_to/Use_data_attributes). ([Firefox bug 1986631](https://bugzil.la/1986631) & [Firefox bug 1998245](https://bugzil.la/1998245)).

- **`color-mix()` accepts multiple color arguments**: `layout.css.color-mix-multi-color.enabled`

  The [`color-mix()`](/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix) CSS function now supports multiple [`<color>`](/en-US/docs/Web/CSS/Reference/Values/color_value) values, rather than just two. This allows you to mix many colors and set the percentages of each. ([Firefox bug 2007772](https://bugzil.la/2007772)).

- **Media-based pseudo-classes**: `dom.media.pseudo-classes.enabled`

  The media-based pseudo-classes {{cssxref(":buffering")}}, {{cssxref(":muted")}}, {{cssxref(":paused")}}, {{cssxref(":playing")}}, {{cssxref(":seeking")}}, {{cssxref(":stalled")}}, and {{cssxref(":volume-locked")}} allow you to style {{htmlelement("audio")}} and {{htmlelement("video")}} elements based on their current state, such as playing or paused. ([Firefox bug 1707584](https://bugzil.la/1707584), [Firefox bug 2014512](https://bugzil.la/2014512)).

- **`alpha` & `colorspace` attributes in `color` input elements** (Nightly only): `dom.forms.html_color_picker.enabled`

  The HTML [`<input type="color">`](/en-US/docs/Web/HTML/Reference/Elements/input/color) element supports [`alpha`](/en-US/docs/Web/HTML/Reference/Elements/input/color#alpha) & [`colorspace`](/en-US/docs/Web/HTML/Reference/Elements/input/color#colorspace) attributes. ([Firefox bug 1919718](https://bugzil.la/1919718)).

- **`@container style()` queries** (Nightly): `layout.css.style-queries.enabled`

  The [`@container`](/en-US/docs/Web/CSS/Reference/At-rules/@container) CSS at-rule supports [`style()`](/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) queries. This allows you to check if a container has a valid CSS declaration, a CSS property, or a custom property, and apply styles to its children accordingly. ([Firefox bug 2014404](https://bugzil.la/2014404)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  The CSS Typed Object Model Level 1 specification is being implemented.
  In this release, support for the {{domxref("CSSNumericValue/to","to()")}} method of the {{domxref("CSSNumericValue")}} interface was added, allowing the conversion of a CSS numeric value from one unit to another. ([Firefox bug 1278697](https://bugzil.la/1278697)).

- **JPEG XL image support: Rust-based decoder** (Nightly only): `image.jxl.enabled`

  The previous C++ [JPEG XL](https://jpeg.org/jpegxl/) image decoder has been replaced with a new Rust-based implementation that uses the `jxl-rs` library. ([Firefox bug 1986393](https://bugzil.la/1986393)).
