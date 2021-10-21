---
title: Firefox 93 for developers
slug: Mozilla/Firefox/Releases/93
tags:
  - '93'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}{{draft}}

This article provides information about the changes in Firefox 93 that will affect developers. Firefox 93 was released on October 5, 2021.

> **Note:** See also [Lots to see in Firefox 93](https://hacks.mozilla.org/2021/10/lots-to-see-in-firefox-93/) on Mozilla Hacks.

## Changes for web developers

### HTML

- The ARIA [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role) role has been implemented ({{bug(1727616)}}).
- The UI for [`<input type="datetime-local">`](/docs/Web/HTML/Element/input/datetime-local) has been implemented. ({{bug(1283388)}}).

### CSS

- The `small-caps` keyword is now supported for the {{cssxref("font-synthesis")}} property ({{bug(1706080)}}).

### JavaScript

- [Class `static` initialization blocks](/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks) are now supported, allowing more flexible initialization of {{jsxref("Classes/static", "static")}} properties ({{bug(1725689)}}).
- The properties `imageOrientation` and `premultiplyAlpha` can be passed to the method {{domxref("createImageBitmap()")}} using the `options` object ({{bug(1367251)}}).
- {{jsxref("Intl.supportedValuesOf()")}} is now supported, allowing code to enumerate values supported by an implementation, This might be used, for example, to download a polyfill for just the missing category of values ({{bug(1670033)}}).

### HTTP

- The SHA-256 algorithm is now supported for [HTTP Authentication](/en-US/docs/Web/HTTP/Authentication) using digests. This allows much more secure authentication than previously available using the MD5 algorithm ({{bug(1682995)}}).
- The default HTTP {{HTTPHeader("ACCEPT")}} header for _images_ changed to: `image/avif,image/webp,*/*` (following addition of support for the [AVIF](/en-US/docs/Web/Media/Formats/Image_types#AVIF_image) image format). ({{bug(1682995)}}).

### APIs

- {{domxref("ElementInternals.shadowRoot")}} and {{domxref("HTMLElement.attachInternals")}} are now supported ({{bug(1723521)}}).
- The value `device-pixel-content-box` is now supported for {{domxref("ResizeObserver.Observe()")}} ({{bug(1587973)}}).
- The {{domxref("reportError()")}} global function is now supported, allowing scripts to report errors to the console or global event handlers, emulating an uncaught JavaScript exception ({{bug(1722448)}}).

#### Events

- The {{domxref("GlobalEventHandlers.onsecuritypolicyviolation","onsecuritypolicyviolation")}} global event handler property is now supported.
  This can be used to assign a handler for processing [`securitypolicyviolation`](/en-US/docs/Web/API/Element/securitypolicyviolation_event) events fired when there is a [Content Security Policy](/en-US/docs/Web/HTTP/CSP) violation ({{bug(1727302)}}).
- The `onslotchange` event handler property is now supported on {{domxref("GlobalEventHandlers.onslotchange","GlobalEventHandlers")}} and {{domxref("ShadowRoot.onslotchange","ShadowRoot")}}.
  This can be used to assign a handler for processing [`slotchange`](/en-US/docs/Web/API/HTMLSlotElement/slotchange_event) events, which are fired on {{HTMLElement("slot")}} elements when the node(s) contained in the slot change ({{bug(1501983)}}).

#### Removals

- {{domxref("KeyboardEvent.initKeyEvent()")}} has been moved behind the preference `dom.keyboardevent.init_key_event.enabled` and is disabled by default.
  The method is not present in any current specification or supported in other current browsers ({{bug(1717760)}}).

### WebDriver conformance (Marionette)

- Fixed a bug which caused `WebDriver:Print` to fail for large documents ({{bug(1721982)}}).

## Changes for add-on developers

- Sidebars are now included in {{WebExtAPIRef("extension.getViews")}} when `windowId` is specified ({{bug(1612390)}}).

## Other

- Support for [AVIF](/en-US/docs/Web/Media/Formats/Image_types#AVIF_image) images is now enabled by default ({{bug(1682995)}}).
  This format has excellent compression and no patent restrictions (it was developed by the [Alliance for Open Media](http://aomedia.org/)).
  Firefox can display still images, with colorspace support for both full and limited range colors, and image transforms for mirroring and rotation.
  The preference [image.avif.compliance_strictness](/en-US/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness) can be used to adjust the compliance strictness with the specification. Animated images are not supported.

## Older versions

{{Firefox_for_developers(92)}}
