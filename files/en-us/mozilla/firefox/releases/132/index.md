---
title: Firefox 132 for developers
slug: Mozilla/Firefox/Releases/132
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 132 that affect developers. Firefox 132 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [October 29, 2024](https://whattrainisitnow.com/release/?version=132).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- Developers can now provide a hint about the relative priority for fetching a particular resources compared to other resources of the same type.
  This can be used, for example, to indicate that a image is more or less important to the user experience that other images. The priority may be set using the `fetchpriority` attribute of the {{htmlelement("link")}}, {{htmlelement("script")}}, or {{htmlelement("img")}} elements, the `fetchPriority` property of the {{domxref("HTMLLinkElement")}}, {{domxref("HTMLScriptElement")}}, or {{domxref("HTMLImageElement")}} interfaces, the [`options.priority`](/en-US/docs/Web/API/RequestInit#priority) parameter passed to the [`Request()` constructor](/en-US/docs/Web/API/Request/Request), or in the HTTP {{httpheader("Link")}} header. Note that this mechanism is complementary to other ways of setting the priority, such as preloading. ([Firefox bug 1854077](https://bugzil.la/1854077)).

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

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 132 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}
