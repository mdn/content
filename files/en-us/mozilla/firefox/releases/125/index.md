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

- {{domxref("Element.ariaBrailleLabel")}} and {{domxref("Element.ariaBrailleRoleDescription")}} are now supported, respectively reflecting the global ARIA HTML attributes [`aria-braillelabel`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel) and [`aria-brailleroledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription). ([Firefox bug 1861201](https://bugzil.la/1861201)).

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

- The [`SVGAElement.text`](/en-US/docs/Web/API/SVGAElement#svgaelement.text) property has been removed. The {{domxref("Node.textContent", "textContent")}} property (inherited from `Node`) is broadly supported and should be used instead. ([Firefox bug 1880689](https://bugzil.la/1880689)).

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

These features are newly shipped in Firefox 125 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **UA styles for `<h1>` nested into sectioning elements:** `layout.css.h1-in-section-ua-styles.enabled`.

  The `<h1>` heading doesn't decrease in font size now when nested within [sectioning elements](/en-US/docs/Web/HTML/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, and `<section>`. The UA styles for `<h1>` nested within sectioning elements are no longer relevant since the outline algorithm [has been removed](https://github.com/whatwg/html/pull/7829) from the HTML specification. ([Firefox bug 1883896](https://bugzil.la/1883896)).

  > **Note:** The preference for this feature works in reverse: it's set to `false` in the Nightly build, which removes the UA styling for headings nested in sectioning elements. It's set to `true` in all other channels, which retains the existing UA styling for the nested headings.

## Older versions

{{Firefox_for_developers}}
