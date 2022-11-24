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

This article provides information about the changes in Firefox 107 that will affect developers. Firefox 107 was released on November 15, 2022.

## Changes for web developers

### HTML

No notable changes

### MathML

- Deprecated `lquote` and `rquote` attributes of the [`<ms>`](/en-US/docs/Web/MathML/Element/ms) MathML element for custom opening and closing quotes are now disabled.
  This behavior is configured via the `mathml.ms_lquote_rquote_attributes.disabled` preference which is set to `true` by default ({{bug(1793387)}}).

### CSS

- The [`contain-intrinsic-size`](/en-US/docs/Web/CSS/contain-intrinsic-size) shorthand CSS property can now be applied to specify the size of a UI element that is subject to [size containment](/en-US/docs/Web/CSS/CSS_Containment#size_containment).
  This allows a user agent to determine the size of an element without needing to render its child elements.
  The shorthand properties [`contain-intrinsic-width`](/en-US/docs/Web/CSS/contain-intrinsic-width) and [`contain-intrinsic-height`](/en-US/docs/Web/CSS/contain-intrinsic-height) are also supported, along with the [logical properties](/en-US/docs/Web/CSS/CSS_Logical_Properties) [`contain-intrinsic-block-size`](/en-US/docs/Web/CSS/contain-intrinsic-block-size) and [`contain-intrinsic-inline-size`](/en-US/docs/Web/CSS/contain-intrinsic-inline-size).
  ({{bug(1597529)}}).

### JavaScript

No notable changes

### APIs

#### Removals

- The non-standard and deprecated [`SVGSVGElement.useCurrentView`](/en-US/docs/Web/API/SVGSVGElement#svgsvgelement.usecurrentview) property has been removed.
  (See {{bug(1174097)}} for more details.)

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

- The `error` property returned when an error occurs in {{WebExtAPIRef("scripting.executeScript")}} now represents any value the script throws or rejects with, instead of being just an object with a message property {{bug(1740608)}}.

## Older versions

{{Firefox_for_developers(106)}}
