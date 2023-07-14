---
title: Firefox 97 for developers
slug: Mozilla/Firefox/Releases/97
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 97 that affect developers. Firefox 97 was released on February 8, 2022.

## Changes for web developers

### HTML

No notable changes

### CSS

- The CSS units `cap` and `ic` are now supported for use with {{cssxref("&lt;length&gt;")}} and {{cssxref("&lt;length-percentage&gt;")}} data types.
  For more information, see [Firefox bug 1702924](https://bugzil.la/1702924) and [Firefox bug 1531223](https://bugzil.la/1531223).

- The CSS property `color-adjust` has been renamed to {{cssxref("print-color-adjust")}} to match the relevant specification.
  The `color-adjust` shorthand name is deprecated.
  See [Firefox bug 747595](https://bugzil.la/747595) for details.

- CSS cascade layers are now available by default. The [`@layer`](/en-US/docs/Web/CSS/@layer) rule declares a cascade layer, which allows declaration of styles and can be imported via the [`@import`](/en-US/docs/Web/CSS/@import) rule using the `layer()` function. See [Firefox bug 1699217](https://bugzil.la/1699217) for more details.

- The global CSS keyword {{cssxref("revert-layer")}} has been added to allow rolling back of property values in one cascade layer to the matching rules in the previous cascade layer. This keyword can be applied on any property, including the CSS shorthand property {{cssxref("all")}}. For more information, see [Firefox bug 1699220](https://bugzil.la/1699220).

- The CSS [`scrollbar-gutter`](/en-US/docs/Web/CSS/scrollbar-gutter) property is now supported. This gives developers control over reserved space for the scrollbar, preventing unwanted layout changes as the content grows.
  See [Firefox bug 1715112](https://bugzil.la/1715112) for more details.

### JavaScript

No notable changes

### SVG

- The SVG {{SVGAttr('d')}} attribute, used to define a path to be drawn, can now be used as a property in CSS.
  It accepts the values [path()](/en-US/docs/Web/CSS/path) or `none`. (See [Firefox bug 1744599](https://bugzil.la/1744599) for details.)

#### Removals

- A number of `SVGPathSeg` APIs are now disabled by default behind a preference, and are expected to be removed in future revisions.
  This includes: `SVGPathSegList`, [SVGPathElement.getPathSegAtLength()](/en-US/docs/Web/API/SVGPathElement), `SVGAnimatedPathData`.
  (See [Firefox bug 1388931](https://bugzil.la/1388931) for more details.)

### APIs

- `AnimationFrameProvider` is now available in a [`DedicatedWorkerGlobalScope`](/en-US/docs/Web/API/DedicatedWorkerGlobalScope). This means the [`requestAnimationFrame`](/en-US/docs/Web/API/window/requestAnimationFrame) and [`cancelAnimationFrame`](/en-US/docs/Web/API/Window/cancelAnimationFrame) methods can be used within a dedicated worker.
  (See [Firefox bug 1388931](https://bugzil.la/1388931) for more details.)

#### DOM

- The reason for an abort signal can now be set using {{domxref("AbortController.abort()")}} (or {{domxref("AbortSignal.abort()")}}), and will be available in the {{domxref("AbortSignal.reason")}} property.
  This reason defaults to being an "AbortError" {{domxref("DOMException")}}.
  The reason can be thrown or handled via promise rejection as appropriate.
  ([Firefox bug 1737771](https://bugzil.la/1737771)).
- The convenience method {{domxref("AbortSignal.throwIfAborted()")}} can be used to check if a signal has been aborted, and if so throw the {{domxref("AbortSignal.reason()")}}.
  This makes it easier for developers to handle abort signals in code where you can't simply pass the signal to an abortable method. ([Firefox bug 1745372](https://bugzil.la/1745372)).

### WebDriver conformance (Marionette)

- `Marionette:Quit` accepts a new boolean parameter, `safeMode`, to restart Firefox in safe mode ([Firefox bug 1144075](https://bugzil.la/1144075)).
- Improved stability for `WebDriver:NewSession` and `WebDriver:NewWindow` when waiting for the current or initial document to be loaded ([Firefox bug 1739369](https://bugzil.la/1739369), [Firefox bug 1747359](https://bugzil.la/1747359)).

## Changes for add-on developers

- `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} supports an array of strings. This enables queries to match tabs against more than one cookie store ID ([Firefox bug 1730931](https://bugzil.la/1730931)).
- `cookieStoreId` added to {{WebExtAPIRef("contentScripts.register")}}. This enables extensions to register container-specific content scripts ([Firefox bug 1470651](https://bugzil.la/1470651)).

## Older versions

{{Firefox_for_developers(96)}}
