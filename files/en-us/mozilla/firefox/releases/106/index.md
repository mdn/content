---
title: Firefox 106 for developers
slug: Mozilla/Firefox/Releases/106
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 106 that will affect developers. Firefox 106 was released on October 18, 2022.

## Changes for web developers

### HTML

- The {{HTMLElement("source")}} element now supports [`height`](/en-US/docs/Web/HTML/Element/source#height) & [`width`](/en-US/docs/Web/HTML/Element/source#width) attributes when it is a child of a {{HTMLElement("picture")}} element.
  This functionality is an experimental feature enabled using the `dom.picture_source_dimension_attributes.enabled` preference ([Firefox bug 1694741](https://bugzil.la/1694741)).

### MathML

- The [`<semantics>`](/en-US/docs/Web/MathML/Element/semantics) and [`<maction>`](/en-US/docs/Web/MathML/Element/maction) MathML elements now only render the first child element by default ([Firefox bug 1588733](https://bugzil.la/1588733)).

### CSS

- The [@supports](/en-US/docs/Web/CSS/@supports) at-rule now supports the `font-tech()` and `font-format()` functions.
  These functions can be used to test whether a browser supports a given font technology or format and CSS styles can be applied based on the result ([Firefox bug 1786493](https://bugzil.la/1786493)).

### JavaScript

No notable changes.

### HTTP

No notable changes.

### Security

No notable changes.

### APIs

#### DOM

- The [`HTMLMetaElement.media`](/en-US/docs/Web/API/HTMLMetaElement/media) property is now supported. This property enables you to set different theme colors based on `media` values (e.g. `max-width: 600px`).
  Meta elements with `media` properties allow the browser to use the `content` value in conjunction with `theme-color` to set the page or UI colors for a given media query ([Firefox bug 1706179](https://bugzil.la/1706179)).

### WebAssembly

No notable changes.

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Added basic support for the `script.getRealms` command that is currently limited to the `WindowRealmInfo` type which includes window realms and sandbox realms ([Firefox bug 1766240](https://bugzil.la/1766240)).

- Added support for the `browsingContext.load` event, which is emitted when a `load` event is triggered on a BrowsingContext's window ([Firefox bug 1756619](https://bugzil.la/1756619)).

- Added an object reference store to hold strong references for serialized remote values ([Firefox bug 1770736](https://bugzil.la/1770736)).

- Added support for de-serializing remote references created in the object reference store ([Firefox bug 1788124](https://bugzil.la/1788124)).

- Added full support for the `script.evaluate`, `script.callFunction` and `script.disown` commands ([Firefox bug 1778976](https://bugzil.la/1778976)).

#### Marionette

- Added support for `wheel` input source for [Actions](https://w3c.github.io/webdriver/webdriver-spec.html#actions), which is associated with a wheel-type input device ([Firefox bug 1746601](https://bugzil.la/1746601)).

- Added support for opening and closing tabs in GeckoView based applications (eg. Firefox for Android) ([Firefox bug 1506782](https://bugzil.la/1506782)).

## Changes for add-on developers

- The ability to set the [`"background"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) manifest key property `"persistent"` to `false` for Manifest V2 (to make a background page non-persistent) is now available by default.
- The `object-src` directive in the `"content_security_policy"` manifest key is now optional ([Firefox bug 1766881](https://bugzil.la/1766881)). See [object-src directive](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy#object-src_directive) on the `"content_security_policy"` manifest key page for more details.

## Older versions

{{Firefox_for_developers(105)}}
