---
title: Firefox 125 for developers
slug: Mozilla/Firefox/Releases/125
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 125 that affect developers. Firefox 125 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [April 16, 2024](https://whattrainisitnow.com/release/?version=125).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

- The {{cssxref("align-content")}} property has been updated to work with `display: block;` layouts. This brings all the layout positions from `flex` and `grid` to `block`, enabling developers to align block-level elements without converting their container to a `flex` or `grid` container. ([Firefox bug 1882853](https://bugzil.la/1882853)).
- The CSS property [`transform-box`](/en-US/docs/Web/CSS/transform-box) now supports the values `content-box` and `stroke-box`. For the reference box, the `content-box` value uses the [content box](/en-US/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) and the `stroke-box` value uses the stroke bounding box that contains an SVG's shape ([Firefox bug 1868374](https://bugzil.la/1868374)).

#### Removals

### JavaScript

- {{jsxref("Intl.Segmenter")}} is now supported, allowing developers to perform locale-sensitive text segmentation of a string.
  This enables, for example, splitting a string into words in languages that don't use spaces to separate them: `Intl.Segmenter("ja-JP", { granularity: "word" })`.
  You can also split strings into graphemes or sentences.
  ([Firefox bug 1423593](https://bugzil.la/1423593), [Firefox bug 1883914](https://bugzil.la/1883914).)

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- The [Popover API](/en-US/docs/Web/API/Popover_API) is now fully supported, allowing the creation of top level "popover" UI elements that might be used for action menus, custom "toast" notifications, form element suggestions, content pickers, and so on.
  The popover and its triggering button/input can be created using either HTML attributes or JavaScript, and styled using CSS.

  The following Web APIs are implemented:

  - [`HTMLButtonElement`](/en-US/docs/Web/API/HTMLButtonElement) properties [`popoverTargetElement`](/en-US/docs/Web/API/HTMLButtonElement/popoverTargetElement) and [`popoverTargetAction`](/en-US/docs/Web/API/HTMLButtonElement/popoverTargetAction).
  - [`HTMLInputElement`](/en-US/docs/Web/API/HTMLInputElement) properties [`popoverTargetElement`](/en-US/docs/Web/API/HTMLInputElement/popoverTargetElement) and [`popoverTargetAction`](/en-US/docs/Web/API/HTMLInputElement/popoverTargetAction).
  - [`HTMLElement`](/en-US/docs/Web/API/HTMLElement) property [`popover`](/en-US/docs/Web/API/HTMLElement/popover), [`hidePopover()`](/en-US/docs/Web/API/HTMLElement/hidePopover), [`showPopover()`](/en-US/docs/Web/API/HTMLElement/showPopover), and [`togglePopover()`](/en-US/docs/Web/API/HTMLElement/togglePopover) methods, and [`beforetoggle`](/en-US/docs/Web/API/HTMLElement/beforetoggle_event) and [`toggle_event`](/en-US/docs/Web/API/HTMLElement/toggle_event) events (of type [`ToggleEvent`](/en-US/docs/Web/API/ToggleEvent)).

  The following CSS pseudo class and element are now supported for use with popovers:

  - [`:popover-open`](/en-US/docs/Web/CSS/:popover-open)
  - [`::backdrop`](/en-US/docs/Web/CSS/::backdrop) has been extended to support popovers

  The following HTML global attributes are supported:

  - [`popovertarget`](/en-US/docs/Web/HTML/Element/button#popovertarget)
  - [`popovertargetaction`](/en-US/docs/Web/HTML/Element/button#popovertargetaction)

  ([Firefox bug 1823757](https://bugzil.la/1823757), [Firefox bug 1866993](https://bugzil.la/1866993)).

- The {{domxref("RTCIceTransport")}} properties {{domxref("RTCIceTransport/state","state")}} and {{domxref("RTCIceTransport/gatheringState","gatheringState")}}, and their associated events {{domxref("RTCIceTransport/statechange_event","statechange")}} and {{domxref("RTCIceTransport/gatheringstatechange_event","gatheringstatechange_event")}}, are now supported, along with the {{domxref("RTCDtlsTransport.iceTransport")}} property (which returns the underlying `RTCIceTransport` for a {{domxref("RTCDtlsTransport")}}).
  These allow much finer-grained monitoring than provided by the {{domxref("RTCPeerConnection")}} properties {{domxref("RTCPeerConnection.iceGatheringState","iceGatheringState")}} and {{domxref("RTCPeerConnection.connectionState","connectionState")}}.
  ([Firefox bug 1811912](https://bugzil.la/1811912))
- {{domxref("Element.ariaBrailleLabel")}} and {{domxref("Element.ariaBrailleRoleDescription")}} are now supported, respectively reflecting the global ARIA HTML attributes [`aria-braillelabel`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel) and [`aria-brailleroledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription). ([Firefox bug 1861201](https://bugzil.la/1861201)).

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

- The [`SVGAElement.text`](/en-US/docs/Web/API/SVGAElement#svgaelement.text) property has been removed. The {{domxref("Node.textContent", "textContent")}} property (inherited from `Node`) is broadly supported and should be used instead. ([Firefox bug 1880689](https://bugzil.la/1880689)).

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Added support for the ["userAgent" capability](https://w3c.github.io/webdriver/#capabilities) which identifies the default User-Agent value of the endpoint node ([Firefox bug 1885495](https://bugzil.la/1885495)).

#### WebDriver BiDi

- Added support for the [input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles) command which allows to set or update the files for `<input>` elements with `type="file"` ([Firefox bug 1855040](https://bugzil.la/1855040)).
- Added support for the [storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies) command to delete cookies ([Firefox bug 1854581](https://bugzil.la/1854581)).
- Added support for "userContext" as a field of the "partition" argument for cookie commands ([Firefox bug 1875255](https://bugzil.la/1875255)).
- Fixed an issue where [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) would not retrieve all expected cookies for a given "sourceOrigin" ([Firefox bug 1884647](https://bugzil.la/1884647)).
- Fixed an issue where recommended preferences would not be applied if only WebDriver BiDi as remote protocol, which means CDP is disabled, was enabled ([Firefox bug 1882748](https://bugzil.la/1882748)).
- Fixed an issue where creating and switching to a new tab would not wait for the `visibilityState` to be updated ([Firefox bug 1877469](https://bugzil.la/1877469)).

## Changes for add-on developers

- The content of the {{WebExtAPIRef("proxy.ProxyInfo")}} property `proxyAuthorization` is now passed to the {{httpheader("Proxy-Authorization")}} request header sent to HTTP proxies (in addition to the existing support for HTTPS proxies) as part of a [CONNECT](/en-US/docs/Web/HTTP/Methods/CONNECT) request ([Firefox bug 1794464](https://bugzil.la/1794464)).

### Removals

### Other

## Experimental web features

These features are shipping in Firefox 125 but only in developer releases or behind a preference. To try these out, you can search for the related preference on the `about:config` page to see if they're enabled or disabled. To learn more about these features, see the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **CSS `transition-behavior`:** `layout.css.transition-behavior.enabled`.
  The {{cssxref("transition-behavior")}} property is enabled by default in the Nightly release.
  Authors can use this property to control whether to apply CSS transitions to properties with a [discrete animation type](/en-US/docs/Web/CSS/CSS_animated_properties#discrete) ([Firefox bug 1882408](https://bugzil.la/1882408), [Firefox bug 1805727](https://bugzil.la/1805727)).

## Older versions

{{Firefox_for_developers}}
