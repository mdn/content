---
title: Firefox 128 for developers
slug: Mozilla/Firefox/Releases/128
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 128 that affect developers. Firefox 128 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [July 9, 2024](https://whattrainisitnow.com/release/?version=128).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

- [Relative color syntax](/en-US/docs/Web/CSS/CSS_colors/Relative_colors) is now enabled by default. Relative color syntax allows you to create a color value relative to an origin color, and can allow you to change a color in a different [color space](/en-US/docs/Glossary/Color_space) using [color functions](/en-US/docs/Web/CSS/CSS_colors#functions) ([Firefox bug 1900251](https://bugzil.la/1900251)).
- The [`content`](/en-US/docs/Web/CSS/content) property now supports [alternative text](/en-US/docs/Web/CSS/content#alternative_text) for content that includes an image. The alternative text is then exposed to the browsers accessibility tree. (See [Firefox bug 1281158](https://bugzil.la/1281158) and [Firefox bug 1896047](https://bugzil.la/1896047)).

#### Removals

- The masonry layout properties `align-tracks` and `justify-tracks` have been removed. These properties were only implemented in Firefox and were recently [dropped from the spec](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox bug 1900195](https://bugzil.la/1900195)).

### JavaScript

#### Removals

### SVG

#### Removals

### HTTP

- The HTTP [`Accept`](/en-US/docs/Web/HTTP/Headers/Accept) header in [default requests and image requests](/en-US/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) now includes the `image/svg+xml` MIME type ([Firefox bug 1711622](https://bugzil.la/1711622)).

#### Removals

### Security

#### Removals

### APIs

- {{domxref('RTCRtpReceiver.getParameters()')}} and {{domxref('RTCRtpSender.getParameters()')}} are now supported, returning an object that describes the current codecs used for the encoding and transmission of media on the receiver and sender tracks, respectively. ([Firefox bug 1534687](https://bugzil.la/1534687)).
- {{domxref("Request.bytes()")}} and {{domxref("Response.bytes()")}} are now supported as a convenient way to get a {{jsxref("Uint8Array")}} from a {{domxref("Request")}} and {{domxref("Response")}}, respectively. ([Firefox bug 1896475](https://bugzil.la/1896475)).
- {{domxref("PushMessageData.bytes()")}} is now supported for returning the data from a push message as an array of bytes in a {{jsxref("Uint8Array")}} object. ([Firefox bug 1897871](https://bugzil.la/1897871)).
- {{domxref('Blob.bytes()')}} is supported for returning the data from a {{domxref('Blob')}} as an array of bytes in a {{jsxref("Uint8Array")}} object. ([Firefox bug 1896509](https://bugzil.la/1896509)).
- {{domxref('MediaKeys.getStatusForPolicy()')}} is now supported for checking whether the CDM module, which is used to decrypt DRM protected content, would allow the presentation of encrypted media data for a "hypothetical" key based on specified policy requirements such as the [High-bandwidth Digital Content Protection (HDCP)](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection) version supported by the system.
  This provides an application with a simple mechanism to know in advance whether playback at the optimal resolution will be allowed, without having to create a media key session or fetch a real license. ([Firefox bug 1878714](https://bugzil.la/1878714)).
- Serialization of [declarative shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), including the methods {{domxref('ShadowRoot.getHTML()')}} and {{domxref('Element.getHTML()')}}, and associated properties {{domxref('ShadowRoot.serializable')}} and {{domxref('HTMLTemplateElement.shadowRootSerializable')}}.

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

- Adds the ability to enable and disable rules in static declarative net request rulesets with {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} and list disabled rules for a static ruleset with {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} ([Firefox bug 1810762](https://bugzil.la/1810762))
- The default value of {{WebExtAPIRef("proxy.settings")}} property `proxyDNS` is now `false` when using SOCKS4 and `true` when using SOCKS5. Previously, it defaulted to `false` for SOCKS4 and SOCKS5 ([Firefox bug 1741375](https://bugzil.la/1741375)).
- The non-standard Web API events `overflow` and `underflow` have been deprecated. Use of these events should be removed from extension documents before the release of Firefox 131 ([Firefox bug 1898445](https://bugzil.la/1898445)).

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 128 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **`image/jxl` MIME type in Accept header for default and image requests:** `image.jxl.enabled`.

  The HTTP [`Accept`](/en-US/docs/Web/HTTP/Headers/Accept) header in [default requests and image requests](/en-US/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) can be configured to indicate support for the `image/jxl` MIME type. ([Firefox bug 1711622](https://bugzil.la/1711622)).

## Older versions

{{Firefox_for_developers}}
