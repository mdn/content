---
title: Firefox 93 for developers
slug: Mozilla/Firefox/Releases/93
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 93 that will affect developers. Firefox 93 was released on October 5, 2021.

> **Note:** See also [Lots to see in Firefox 93](https://hacks.mozilla.org/2021/10/lots-to-see-in-firefox-93/) on Mozilla Hacks.

## Changes for web developers

### HTML

- The ARIA [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role) role has been implemented ([Firefox bug 1727616](https://bugzil.la/1727616)).
- The UI for [`<input type="datetime-local">`](/en-US/docs/Web/HTML/Element/input/datetime-local) has been implemented. ([Firefox bug 1283388](https://bugzil.la/1283388)).

### CSS

- The `small-caps` keyword is now supported for the {{cssxref("font-synthesis")}} property ([Firefox bug 1706080](https://bugzil.la/1706080)).

### JavaScript

- [Class `static` initialization blocks](/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) are now supported, allowing more flexible initialization of {{jsxref("Classes/static", "static")}} properties ([Firefox bug 1725689](https://bugzil.la/1725689)).
- The properties `imageOrientation` and `premultiplyAlpha` can be passed to the method {{domxref("createImageBitmap()")}} using the `options` object ([Firefox bug 1367251](https://bugzil.la/1367251)).
- {{jsxref("Intl.supportedValuesOf()")}} is now supported, allowing code to enumerate values supported by an implementation, This might be used, for example, to download a polyfill for just the missing category of values ([Firefox bug 1670033](https://bugzil.la/1670033)).

### HTTP

- The SHA-256 algorithm is now supported for [HTTP Authentication](/en-US/docs/Web/HTTP/Authentication) using digests. This allows much more secure authentication than previously available using the MD5 algorithm ([Firefox bug 472823](https://bugzil.la/472823)).
- The default HTTP {{HTTPHeader("ACCEPT")}} header for _images_ changed to: `image/avif,image/webp,*/*` (following addition of support for the [AVIF](/en-US/docs/Web/Media/Formats/Image_types#avif_image) image format). ([Firefox bug 1682995](https://bugzil.la/1682995)).

### APIs

- {{domxref("ElementInternals.shadowRoot")}} and {{domxref("HTMLElement.attachInternals")}} are now supported ([Firefox bug 1723521](https://bugzil.la/1723521)).
- The value `device-pixel-content-box` is now supported for {{domxref("ResizeObserver.Observe()")}} ([Firefox bug 1587973](https://bugzil.la/1587973)).
- The {{domxref("reportError()")}} global function is now supported, allowing scripts to report errors to the console or global event handlers, emulating an uncaught JavaScript exception ([Firefox bug 1722448](https://bugzil.la/1722448)).

#### Events

- The {{domxref("Element.securitypolicyviolation_event","onsecuritypolicyviolation")}} global event handler property is now supported.
  This can be used to assign a handler for processing [`securitypolicyviolation`](/en-US/docs/Web/API/Element/securitypolicyviolation_event) events fired when there is a [Content Security Policy](/en-US/docs/Web/HTTP/CSP) violation ([Firefox bug 1727302](https://bugzil.la/1727302)).
- The `onslotchange` event handler property is now supported on {{domxref("HTMLSlotElement.onslotchange","HTMLSlotElement")}} and {{domxref("ShadowRoot")}}.
  This can be used to assign a handler for processing [`slotchange`](/en-US/docs/Web/API/HTMLSlotElement/slotchange_event) events, which are fired on {{HTMLElement("slot")}} elements when the node(s) contained in the slot change ([Firefox bug 1501983](https://bugzil.la/1501983)).

#### Removals

- {{domxref("KeyboardEvent.initKeyEvent()")}} has been moved behind the preference `dom.keyboardevent.init_key_event.enabled` and is disabled by default.
  The method is not present in any current specification or supported in other current browsers ([Firefox bug 1717760](https://bugzil.la/1717760)).

### WebDriver conformance (Marionette)

- Fixed a bug which caused `WebDriver:Print` to fail for large documents ([Firefox bug 1721982](https://bugzil.la/1721982)).

## Changes for add-on developers

- Sidebars are now included in {{WebExtAPIRef("extension.getViews")}} when `windowId` is specified ([Firefox bug 1612390](https://bugzil.la/1612390)).

## Other

- Support for [AVIF](/en-US/docs/Web/Media/Formats/Image_types#avif_image) images is now enabled by default ([Firefox bug 1682995](https://bugzil.la/1682995)).
  This format has excellent compression and no patent restrictions (it was developed by the [Alliance for Open Media](https://aomedia.org/)).
  Firefox can display still images, with colorspace support for both full and limited range colors, and image transforms for mirroring and rotation.
  The preference [image.avif.compliance_strictness](/en-US/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness) can be used to adjust the compliance strictness with the specification. Animated images are not supported.

## Older versions

{{Firefox_for_developers(92)}}
