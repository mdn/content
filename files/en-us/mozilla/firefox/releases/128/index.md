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

#### Removals

### Security

#### Removals

### APIs

- {{domxref('RTCRtpReceiver.getParameters()')}} and {{domxref('RTCRtpSender.getParameters()')}} are now supported, returning an object that describes the current codecs used for the encoding and transmission of media on the receiver and sender tracks, respectively. ([Firefox bug 1534687](https://bugzil.la/1534687)).

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
- Introduces {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} and {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} to {{WebExtAPIRef("declarativeNetRequest")}}. These properties represent the maximum number of dynamic and session-scoped rules an extension can add. They replace {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, which is now deprecated ([Firefox bug 1894128](https://bugzil.la/1894128)).

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 128 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}
