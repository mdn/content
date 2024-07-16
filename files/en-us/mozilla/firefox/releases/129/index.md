---
title: Firefox 129 for developers
slug: Mozilla/Firefox/Releases/129
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 129 that affect developers. Firefox 129 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [August 6, 2024](https://whattrainisitnow.com/release/?version=129).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

- The [@starting-style](/en-US/docs/Web/CSS/@starting-style) CSS at-rule is supported. This lets you define starting values for properties set on an element that you want to transition from when the element receives its first style update. Currently animating from `display: none;` is not supported ([Firefox bug 1834876](https://bugzil.la/1834876) and [Firefox bug 1834877](https://bugzil.la/1834877)).
- The {{CSSXRef("transition-behavior")}} CSS property is supported. This lets you specify if descrete properties, such as {{CSSXRef("display")}} and {{CSSXRef("overlay")}}, can be transitioned by setting the value to [`allow-descrete`](/en-US/docs/Web/CSS/transition-behavior#allow-discrete). ([Firefox bug 1901645](https://bugzil.la/1901645)).
- `-webkit-font-feature-settings` has been implemented as an alias of the standard {{cssxref("font-feature-settings")}} property ([Firefox bug 1595620](https://bugzil.la/1595620)).

#### Removals

### JavaScript

- {{jsxref("Float16Array")}} typed arrays are now supported, along with {{jsxref("DataView.prototype.getFloat16()")}} and {{jsxref("DataView.prototype.setFloat16()")}} for reading and setting `Float16Array` values from a {{jsxref("DataView")}}, and the {{jsxref("Math.f16round()")}} static method, which can be used to round numbers to 16 bits. The new type is useful for sharing data with a GPU, in particular for use cases where it makes sense to trade off precision for memory consumption. ([Firefox bug 1903329](https://bugzil.la/1903329).)
- Regular expressions can now use the same name for [named capturing groups](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) in different [disjunction alternatives](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction). This is allowed because only one alternative in a disjunction will match, so a name declared in several alternatives can only reference one captured group. The names must still be unique within a particular alternative, and across the rest of the pattern. ([Firefox bug 1903288](https://bugzil.la/1903288).)

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- The deprecated {{domxref("TextEvent", "textInput")}} event is now supported, enabling web apps that use legacy libraries or frameworks that rely on these events.
  The [`beforeinput` event](/en-US/docs/Web/API/Element/beforeinput_event) supersedes `textInput`, and should always be used by new applications.
  ([Firefox bug 1901923](https://bugzil.la/1901923).)
- The default `.toJSON()` methods {{domxref("GeolocationCoordinates.toJSON()")}} and {{domxref("GeolocationPosition.toJSON()")}} are now supported, enabling serialization of `GeolocationCoordinates` and `GeolocationPosition` objects with {{jsxref("JSON.stringify()")}} ([Firefox bug 1890706](https://bugzil.la/1890706)).
- {{domxref("CSSPageDescriptors")}} is now supported, and is used as the type for {{domxref("CSSPageRule.style")}} instead of {{domxref("CSSStyleDeclaration")}} — matching the current specification.
  This ensures that `CSSPageDescriptors` only exposes the `@page` related properties, rather than all properties, and also resolves an issue where setting the page [`size`](/en-US/docs/Web/CSS/@page#size) in a CSS `@page` at-rule was not reflected in `CSSPageRule.style`.
  ([Firefox bug 1890842](https://bugzil.la/1890842), [Firefox bug 1867106](https://bugzil.la/1867106).)
- {{domxref('MediaCapabilities.decodingInfo()')}} can now get decoding information for a particular _encrypted media_ configuration as well unencrypted media, allowing applications to tell ahead of time if the configuration is supported, and whether it will play the content smoothly and be power efficient. Changes include a new property `keySystemConfiguration` on the method's `configuration` argument that defines the properties of the key system used to encrypt the media, and a new `keySystemAccess` property on the returned object, which is a {{domxref('MediaKeySystemAccess')}} object that can be used to create keys and decode the content for playback. ([Firefox bug 1898344](https://bugzil.la/1898344)).
- Firefox now fires events for a synchronous {{domxref("XMLHttpRequest")}} before firing the events for any ongoing asynchronous `XMLHttpRequest`. This fixes a long-standing behavioral difference with other browsers. Note that while this should fix some sites, it may also cause degraded performance on sites that expect the old "non-blocking" behaviour for a synchronous `XMLHttpRequest`. Please [file a bug](https://bugzil.la/) if your website should have been fixed by this change but still appears to have related issues. ([Firefox bug 697151](https://bugzil.la/697151).)
- The {{domxref("RTCDTMFSender.canInsertDTMF")}} property is now supported for checking whether a WebRTC sender supports inserting DTMF tones into the outgoing connection, which it would do using {{domxref("RTCDTMFSender.insertDTMF()")}}. ([Firefox bug 1623193](https://bugzil.la/1623193)).

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

- The {{domxref('Navigator.vibrate()')}} method has been removed ([Firefox bug 1653318](https://bugzil.la/1653318), [Firefox bug 1900037](https://bugzil.la/1900037)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 129 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}
