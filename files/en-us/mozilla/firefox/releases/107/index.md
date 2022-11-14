---
title: Firefox 107 for developers
slug: Mozilla/Firefox/Releases/107
tags:
  - "107"
  - Firefox
  - Mozilla
  - Release
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 107 that will affect developers. Firefox 107 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and will ship on [November 15, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

- The [`contain-intrinsic-size`](/en-US/docs/Web/CSS/contain-intrinsic-size) shorthand CSS property can now be applied to specify the size of a UI element that is subject to [size containment](/en-US/docs/Web/CSS/CSS_Containment#size_containment).
  This allows a user agent to determine the size of an element without needing to render its child elements.
  The shorthand properties [`contain-intrinsic-width`](/en-US/docs/Web/CSS/contain-intrinsic-width) and [`contain-intrinsic-height`](/en-US/docs/Web/CSS/contain-intrinsic-height) are also supported, along with the [logical properties](/en-US/docs/Web/CSS/CSS_Logical_Properties) [`contain-intrinsic-block-size`](/en-US/docs/Web/CSS/contain-intrinsic-block-size) and [`contain-intrinsic-inline-size`](/en-US/docs/Web/CSS/contain-intrinsic-inline-size).
  ({{bug(1597529)}}).

#### Removals

### JavaScript

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

- The non-standard and deprecated [`SVGSVGElement.useCurrentView`](/en-US/docs/Web/API/SVGSVGElement#svgsvgelement.usecurrentview) property has been removed.
  (See {{bug(1174097)}} for more details.)

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Added Realm support to `target` argument for `script.evaluate`, `script.callFunction`, and `script.disown` commands ({{bug("1779231")}}).

- Added support for JSON serialization of complex objects with container value fields, eg. `WeakMap` and `Uint8Array` ({{bug("1770754")}}).

- Added support for the `context` parameter of the `browsingContext.create` command, which allows opening a new tab related to an existing one ({{bug("1765619")}}).

- Improved reliability of the `browsingContext.navigate` command when called with the `wait` parameter set to `none` ({{bug("1763109")}}).

#### Marionette
- The command `WebDriver:ElementSendKeys` now only sets the caret if the element is not focused yet ({{bug("1791736")}}).

- Updated the command `WebDriver:PerformAction` to no longer accept `undefined` as value for various parameters of the `pointerMove` and `wheel` actions ({{bug("1781066")}}).

- Updated the [Selenium Atoms](https://firefox-source-docs.mozilla.org/testing/marionette/SeleniumAtoms.html) to match a recent WebDriver specification change ({{bug("1771942")}}).

## Changes for add-on developers

### Removals

### Other

## Older versions

{{Firefox_for_developers(106)}}
