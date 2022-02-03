---
title: Firefox 97 for developers
slug: Mozilla/Firefox/Releases/97
tags:
  - '97'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}{{draft}}

This article provides information about the changes in Firefox 97 that will affect developers. Firefox 97 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta), and will ship on [February 8, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

- The CSS units `cap` and `ic` are now supported for use with {{cssxref("&lt;length&gt;")}} and {{cssxref("&lt;length-percentage&gt;")}} data types.
  For more information see {{bug(1702924)}} and {{bug(1531223)}}.
- The {{cssxref('@scroll-timeline')}} at-rule and {{cssxref('animation-timeline')}} property are now supported. This allows you to define an [`AnimationTimeline`](/en-US/docs/Web/API/AnimationTimeline), of which time values are determined by scrolling progress within a scroll container and not by minutes or seconds. Once specified, a scroll timeline is associated with a [CSS Animation](/en-US/docs/Web/CSS/CSS_Animations) by using the `animation-timeline` property.
  For more information see {{bug(1676791)}} and {{bug(1676782)}}
- The CSS property `color-adjust` has been renamed to {{cssxref("print-color-adjust")}} to match the relevant specification.
  The `color-adjust` shorthand name is deprecated.
  See {{bug(747595)}} for details.

#### Removals

### JavaScript

#### Removals

### SVG

- The SVG {{SVGAttr('d')}} attribute, used to define a path to be drawn, can now be used as a property in CSS.
  It accepts the values [path()](</en-US/docs/Web/CSS/path()>) or `none`. (See {{bug(1744599)}} for details.)

#### Removals

- A number of `SVGPathSeg` APIs are now disabled by default behind a preference, and are expected to be removed in future revisions.
  This includes: `SVGPathSegList`, [SVGPathElement.getPathSegAtLength()](/en-US/docs/Web/API/SVGPathElement), `SVGAnimatedPathData`.
  (See {{bug(1388931)}} for more details.)

### HTTP

#### Removals

### Security

#### Removals

### APIs

#### DOM

- The reason for an abort signal can now be set using {{domxref("AbortController.abort()")}} (or {{domxref("AbortSignal.abort()")}}), and will be available in the {{domxref("AbortSignal.reason")}} property.
  This reason defaults to being an "AbortError" {{domxref("DOMException")}}.
  The reason can be thrown or handled via promise rejection as appropriate.
  ({{bug(1737771)}}).
- The convenience method {{domxref("AbortSignal.throwIfAborted()")}} can be used to check if a signal has been aborted, and if so throw the {{domxref("AbortSignal.reason()")}}.
  This makes it easier for developers to handle abort signals in code where you can't simply pass the signal to an abortable method. ({{bug(1745372)}}).

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (Marionette)

- `Marionette:Quit` accepts a new boolean parameter, `safeMode`, to restart Firefox in safe mode ({{bug(1144075)}}).
- Improved stability for `WebDriver:NewSession` and `WebDriver:NewWindow` when waiting for the current or initial document to be loaded ({{bug(1739369)}}, {{bug(1747359)}}).

## Changes for add-on developers

- `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} supports an array of strings. This enables queries to match tabs against more than one cookie store ID ({{bug(1730931)}}).
- `cookieStoreId` added to {{WebExtAPIRef("contentScripts.register")}}. This enables extensions to register container-specific content scripts ({{bug(1470651)}}).

#### Removals

### Other

## Older versions

{{Firefox_for_developers(96)}}
