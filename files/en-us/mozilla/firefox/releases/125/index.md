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

- The {{cssxref("align-content")}} property has now been enabled to work with `display: block;` layouts. This brings all the layout positions from `flex` and `grid` to block enabling developers easily align content without convert the container to a `flex` or `grid` container simply to do so. ([Firefox bug 1882853](https://bugzil.la/1882853)).

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

## Older versions

{{Firefox_for_developers}}
