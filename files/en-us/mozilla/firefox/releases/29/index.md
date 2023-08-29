---
title: Firefox 29 for developers
slug: Mozilla/Firefox/Releases/29
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 29 was released on April 29, 2014. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

Major changes include:

- Vastly improved web console - Arrays are shown inline without clicking to bring up in the right inspector, window objects show their URL, etc.
- Added the [console API](/en-US/docs/Web/API/Console_API) to Web Workers ([bug 620935](https://bugzil.la/620935)). Now you can log messages to the Web Console from Web Workers.
- The [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) tool now shows performance statistics using pie charts ([Firefox bug 846601](https://bugzil.la/846601)).
- On the [Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html), preview tooltips of CSS transforms are now available ([Firefox bug 726427](https://bugzil.la/726427)).
- DOM elements seen in the debugger and console can be removed or inspected directly, via the new buttons to the right of the variable listing.
- A CSS source map is now supported by the [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) ([Firefox bug 926014](https://bugzil.la/926014)).
- Autocompletion of CSS properties and values has been added to the [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) ([Firefox bug 717369](https://bugzil.la/717369)).

_See the [Mozilla Hacks blog post](https://hacks.mozilla.org/2014/02/css-source-map-support-network-performance-analysis-more-firefox-developer-tools-episode-29/) for details and other smaller changes._

### CSS

- [CSS variables](/en-US/docs/Web/CSS/Using_CSS_custom_properties) have been implemented ([Firefox bug 773296](https://bugzil.la/773296)). Mozilla Hacks article can be found [here](https://hacks.mozilla.org/2013/12/css-variables-in-firefox-nightly/). They are enabled by default only for non-release builds (on release builds flip the pref `layout.css.variables.enabled` to `true` if you want to play with them).
- Flexboxes now support {{cssxref("visibility")}}`: collapse` ([Firefox bug 783470](https://bugzil.la/783470)).
- The {{cssxref("box-sizing")}} property has been unprefixed ([Firefox bug 243412](https://bugzil.la/243412)).
- The {{cssxref("will-change")}} property, a hint to that something will animate has been added. The preference `layout.css.will-change.enabled` must be switched to `true` to enable it. ([Firefox bug 940842](https://bugzil.la/940842))
- Scientific exponential notation, like `3e1` or `10e+0`, is now supported for {{cssxref("&lt;number&gt;")}} values and derivatives, like {{cssxref("&lt;percentage&gt;")}} and unit values, but not {{cssxref("&lt;integer&gt;")}} ([Firefox bug 964529](https://bugzil.la/964529)).
- Images of type {{cssxref("&lt;gradient&gt;")}} are now supported in {{cssxref("border-image")}} ([Firefox bug 709587](https://bugzil.la/709587)).
- The {{cssxref("touch-action")}} property has been implemented. It is not activated by default; the `layout.css.touch_action.enabled` pref controls it. ([Firefox bug 795567](https://bugzil.la/795567))
- Remove redundant default style for \<pre> element from quirk.css ([Firefox bug 948914](https://bugzil.la/948914)).
- CSS Variables fallback incorrectly implemented (primary cycles) ([Firefox bug 950497](https://bugzil.la/950497)).
- @supports conditions with tokens after a declaration's priority should evaluate to false ([Firefox bug 909170](https://bugzil.la/909170)).

### HTML

- `<input type=color>` and `<input type=number>` are available by default.
- Support for the non standard `<pre cols>` has been removed, as well as the layout effect of `<pre wrap>`. Both effects can, and should, be achieved using CSS. ([Firefox bug 949879](https://bugzil.la/949879))

### JavaScript

- New ECMAScript 2015 String methods: {{jsxref("String.prototype.codePointAt()")}} and {{jsxref("String.prototype.fromCodePoint()")}} have been implemented ([Firefox bug 918879](https://bugzil.la/918879)).
- The [ECMAScript Internationalization API (ECMA-402)](https://402.ecma-international.org/1.0/) has been implemented and is now enabled by default in Firefox Desktop ([Firefox bug 853301](https://bugzil.la/853301)):

  - New objects in the new {{jsxref("Intl")}} object namespace:

    - {{jsxref("Intl/Collator", "Intl.Collator")}}
    - {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
    - {{jsxref("Intl/NumberFormat", "Intl.NumberFormat")}}

  - The following methods of {{jsxref("String")}}, {{jsxref("Number")}} and {{jsxref("Date")}} have been updated to include the `locales` and `options` arguments per ECMA-402:

    - {{jsxref("String.prototype.localeCompare()")}}
    - {{jsxref("Number.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleDateString()")}}
    - {{jsxref("Date.prototype.toLocaleTimeString()")}}

- To match the updated ECMAScript 2015 draft specification, the {{jsxref("Map")}} and {{jsxref("Set")}} objects now treat `-0` and `+0` as the same when checking for key and value equality.
- `Promise` has been enabled by default ([Firefox bug 918806](https://bugzil.la/918806)).
- Completed [generators](/en-US/docs/Web/JavaScript/Reference/Statements/function*) now return an `IteratorResult` object instead of throwing ([Firefox bug 958951](https://bugzil.la/958951)).
- A malformed JSON string parsed by {{jsxref("JSON.parse()")}} now yields a more detailed error message containing the line and column number that caused the parsing error. This is useful when debugging large JSON data.
- The {{jsxref("ArrayBuffer.isView()")}} method has been added ([Firefox bug 896105](https://bugzil.la/896105)).

### Interfaces/APIs/DOM

- A new type of workers, {{domxref("SharedWorker")}}, is now available by default ([Firefox bug 924089](https://bugzil.la/924089)).
- The {{domxref("URL")}} interface now supports the {{domxref("URL.searchParams", "searchParams")}} property returning a {{domxref("URLSearchParams")}} object, allowing to modify the search params of a URL ([Firefox bug 887836](https://bugzil.la/887836)). The {{domxref("URLSearchParams.URLSearchParams", "URLSearchParams()")}} constructor allows easier parsing of query strings.
- The {{domxref("WorkerNavigator.onLine", "navigator.onLine")}} property is now supported on {{domxref("WorkerNavigator")}}, allowing to know the online/offline status in workers ([Firefox bug 925437](https://bugzil.la/925437)).
- As part of the implementation of Web Components, the `HTMLShadowElement` interface has been implemented behind the `dom.webcomponents.enabled`. Flip it to `true` if you want to use it. ([Firefox bug 887538](https://bugzil.la/887538))
- The read-only property {{domxref("HTMLIFrameElement.sandbox")}} is no longer a string but a {{domxref("DOMTokenList")}} ([Firefox bug 845057](https://bugzil.la/845057)).
- On {{domxref("HTMLCanvasElement.getContext()")}}, the value `moz-webgl` is no longer supported. Use the standard `webgl` value ([Firefox bug 913597](https://bugzil.la/913597)).
- The constructor for {{domxref("ImageData")}} has been added. This interface can be used in a {{domxref("Worker")}}. ([Firefox bug 959958](https://bugzil.la/959958))
- The property {{domxref("WorkerLocation.origin", "location.origin")}} is now available in workers (via {{domxref("WorkerLocation")}}) ([Firefox bug 964148](https://bugzil.la/964148)).
- The {{domxref("ValidityState.badInput")}} property has been implemented ([Firefox bug 827161](https://bugzil.la/827161)).
- The deprecated `Window.pkcs11` property has been removed; it was returning `null` since Firefox 3.0.14. ([Firefox bug 964964](https://bugzil.la/964964))
- The {{domxref("Node.cloneNode()")}} and {{domxref("Document.importNode()")}} methods take the Boolean `deep` argument. Until now, if omitted, these methods acted as if the value of `deep` was `true`. But this behavior has been changed as per the latest spec, and if omitted, the methods will act as if the value was `false`. ([Firefox bug 937461](https://bugzil.la/937461))
- `Window._content` is no longer available to Web content ([Firefox bug 946564](https://bugzil.la/946564)).
- {{domxref("HTMLAnchorElement/port", "URLUtils.port")}} behavior has been slightly changed: set to `''` will set it to the default port associated with the protocol, and `0` to `0.` ([Firefox bug 930450](https://bugzil.la/930450))
- {{domxref("Document.referrer")}} is now based on the incumbent script ([Firefox bug 887928](https://bugzil.la/887928)).
- The [Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) is enabled by default ([Firefox bug 878828](https://bugzil.la/878828)).
- The `CanvasRenderingContext2D.drawSystemFocusRing()` method got renamed to {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}} ([Firefox bug 959820](https://bugzil.la/959820)).

### MathML

_No change._

### SVG

_No change._

## Security

- The CSP 1.1 experimental `hash-source` directive has been implemented. The preference `security.csp.experimentalEnabled` should be set to `true` to enable this functionality ([Firefox bug 883975](https://bugzil.la/883975)).

## Changes for add-on and Mozilla developers

- Major Firefox theme changes affect most extensions that interact with the Firefox user interface.
- `nsISecurityCheckedComponent` has been removed ([Firefox bug 794943](https://bugzil.la/794943)). Most consumers can remove `nsISecurityCheckedComponent` from their interface definition and they will continue to work.

### Older versions

{{Firefox_for_developers('28')}}
