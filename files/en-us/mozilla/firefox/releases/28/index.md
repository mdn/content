---
title: Firefox 28 for developers
slug: Mozilla/Firefox/Releases/28
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 28 was released on March 18, 2014. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

- The `console.exception` property has been added ([Firefox bug 922214](https://bugzil.la/922214)).
- The {{domxref("console/assert_static", "console.assert()")}} property has been added ([Firefox bug 760193](https://bugzil.la/760193)).
- App Manager: a new Manifest Editor was added.
- App Manager: the toolbox used for debugging apps is now embedded in the app manager UI.
- Web Console: added a "split console" mode - press Escape to quickly open the console in any other tool.
- Web Console: added a dark theme for the output.
- Debugger: pretty-print minified JavaScript.
- Debugger: hover over any variable or click on it to bring up a pop-up that displays the current value.
- Inspector: added a color picker in rules view and various tooltips.
- Browser Toolbox: allows add-on and platform developers to use almost all of the developer tools while targeting the browser itself.

More details in [this post](https://hacks.mozilla.org/2013/12/split-console-pretty-print-minified-js-and-more-firefox-developer-tools-episode-28/).

### CSS

- Support for multi-line [flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) has been added ([Firefox bug 939901](https://bugzil.la/939901)).
- Longhand East Asian [counter styles](/en-US/docs/Web/CSS/list-style-type) have been implemented ([Firefox bug 934072](https://bugzil.la/934072)).
- Experimental support for the {{cssxref("background-blend-mode")}} property has been added, but is disabled by default ([Firefox bug 841601](https://bugzil.la/841601)).
- The `none` value has been added to {{cssxref("font-variant-ligatures")}} ([Firefox bug 913264](https://bugzil.la/913264)).
- Support for the {{cssxref(":hover")}} user action pseudo-class on pseudo-elements has been implemented ([Firefox bug 922669](https://bugzil.la/922669)).

### HTML

- `<input type=color>` and `<input type=number>` have been implemented, disabled by default.

### JavaScript

- ECMAScript 2015 implementation continues:

  - New `Array` methods have been implemented: {{jsxref("Array.prototype.entries()")}} and {{jsxref("Array.prototype.keys()")}} ([Firefox bug 894658](https://bugzil.la/894658)).

- A bug causing that {{jsxref("Object.getOwnPropertyNames()")}} did not see unresolved properties of {{jsxref("Error")}} objects has been fixed ([Firefox bug 724768](https://bugzil.la/724768)).

### Interfaces/APIs/DOM

- `HTMLVideoElement.canPlayType('video/webm')` now reports `maybe`. ([Firefox bug 884275](https://bugzil.la/884275)).
- The {{domxref("DocumentFragment.getElementById()")}} method has been implemented. E.g. `document.createDocumentFragment().getElementById()` ([Firefox bug 933193](https://bugzil.la/933193)).
- The {{domxref("KeyboardEvent.repeat")}} attribute has been implemented ([Firefox bug 600117](https://bugzil.la/600117)).
- The {{domxref("File")}} constructor, e.g. `new File(["foo"], "foo.txt")` has been implemented. ([Firefox bug 819900](https://bugzil.la/819900)).
- The {{domxref("Navigator.plugins")}} is no more enumerable, for privacy reasons ([Firefox bug 757726](https://bugzil.la/757726)).
- The two attributes {{domxref("Window.screenX")}} and {{domxref("Window.screenY")}} now return CSS pixels (and no more device pixels) ([Firefox bug 943668](https://bugzil.la/943668)).
- The two methods `CanvasRenderingContext2D.drawSystemFocusRing()` and {{domxref("CanvasRenderingContext2D/drawFocusIfNeeded", "CanvasRenderingContext2D.drawCustomFocusRing()")}} have been implemented. The preference `canvas.focusring.enabled` must be set to `true` to activate both ([Firefox bug 540456](https://bugzil.la/540456)).
- The `willReadFrequently` context attribute for "`2d`" canvas contexts has been implemented (see {{domxref("HTMLCanvasElement.getContext()")}}) ([Firefox bug 884226](https://bugzil.la/884226)).
- The following attributes and methods of `NavigatorID` have been implemented on {{domxref("WorkerNavigator")}} to allow their use in workers: {{domxref("Navigator.appCodeName")}}, {{domxref("Navigator.product")}}, and {{domxref("Navigator.taintEnabled")}} ([Firefox bug 925847](https://bugzil.la/925847)).
- The {{domxref("Element/previousElementSibling", "previousElementSibling")}} and {{domxref("Element/nextElementSibling", "nextElementSibling")}} properties has been removed from {{domxref("DocumentType")}}, because of compatibility problems ([Firefox bug 932501](https://bugzil.la/932501)).

### MathML

- Support of the `mathvariant` attribute has been added ([Firefox bug 114365](https://bugzil.la/114365)).

### SVG

_No change._

### Audio/Video

- Opus in WebM is now supported ([Firefox bug 887978](https://bugzil.la/887978)).
- The VP9 video decoder is now supported ([Firefox bug 833023](https://bugzil.la/833023)).

### Network

- Support of `SPDY/2` has been removed.

## Changes for add-ons and Mozilla developers

- The interface of `DeferredTask.jsm` has been changed, and the `isPending()`, `start()`, `flush()`, and `cancel()` methods have been removed ([Firefox bug 940408](https://bugzil.la/940408)).

## Security

- CSP was not enforced in sandboxed iframes. This has been fixed ([Firefox bug 886164](https://bugzil.la/886164)).
- The CSP 1.1 experimental `script-nonce` directive has been implemented. The preference `security.csp.experimentalEnabled` should be set to `true` to enable this functionality ([Firefox bug 855326](https://bugzil.la/855326)).

### Older versions

{{Firefox_for_developers}}
