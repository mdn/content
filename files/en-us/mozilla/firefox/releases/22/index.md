---
title: Firefox 22 for developers
slug: Mozilla/Firefox/Releases/22
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

## Changes for Web developers

### HTML

- The HTML5 {{HTMLElement("data")}} element has been implemented ([Firefox bug 839371](https://bugzil.la/839371)).
- The HTML5 {{HTMLElement("time")}} element has been implemented ([Firefox bug 629801](https://bugzil.la/629801)).
- The `range` state of the {{HTMLElement("input")}} element (`<input type="range">`) has been implemented, behind the preference `dom.experimental_forms_range`, only enabled by default on Nightly and Aurora channel ([Firefox bug 841948](https://bugzil.la/841948)).
- The support for the {{HTMLElement("template")}} element, part of the Web component specification has been implemented ([Firefox bug 818976](https://bugzil.la/818976)).

### JavaScript

- [Asm.js](http://asmjs.org/spec/latest/) optimizations are enabled, making it possible to compile C/C++ applications to a subset of JavaScript for better performance.
- ES2015 [Arrow Function](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) syntax has been implemented ([Firefox bug 846406](https://bugzil.la/846406)).
- The new [Object.is](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) function has been added ([Firefox bug 839979](https://bugzil.la/839979)).
- [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) in generator expressions is now inherited from enclosing lexical scope ([Firefox bug 848051](https://bugzil.la/848051)).
- The ES2015 Proxy {{jsxref("Global_Objects/Proxy/Proxy/preventExtensions", "preventExtensions")}} trap have been implemented ([Firefox bug 789897](https://bugzil.la/789897)).

### DOM

- Support for the `multipart` property on `XMLHttpRequest` and `multipart/x-mixed-replace` responses in `XMLHttpRequest` has been removed. This was a Gecko-only feature that was never standardized. [Server-Sent Events](/en-US/docs/Web/API/Server-sent_events), [Web Sockets](/en-US/docs/Web/API/WebSockets_API) or inspecting `responseText` from progress events can be used instead.
- Support for [Web Notifications](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API) has been landed ([Firefox bug 782211](https://bugzil.la/782211)).
- The {{domxref("FormData")}} `append` method now accepts a third optional `filename` parameter ([Firefox bug 690659](https://bugzil.la/690659)).
- {{domxref("Node.isSupported")}} has been removed ([Firefox bug 801562](https://bugzil.la/801562)).
- `Node.setUserData` and `Node.getUserData` has been removed for web content and are deprecated for chrome content ([Firefox bug 842372](https://bugzil.la/842372)).
- The {{domxref("Element.attributes")}} property has been moved there from {{domxref("Node")}} as required by the spec ([Firefox bug 844134](https://bugzil.la/844134)).
- The Mac OS X backend for **Ambient Light Events** has been implemented.
- Elements in the HTML namespace with local names `<bgsound>`, {{HTMLElement("multicol")}}, and {{HTMLElement("image")}} no longer implement the {{domxref("HTMLSpanElement")}} interface. `<bgsound>` implements {{domxref("HTMLUnknownElement")}} and {{HTMLElement("image")}} implements {{domxref("HTMLElement")}}.
- The {{ domxref("NodeIterator.detach") }} method has been changed to do nothing ([Firefox bug 823549](https://bugzil.la/823549)).
- The {{domxref("BlobEvent")}} interface has been implemented ([Firefox bug 834165](https://bugzil.la/834165)).
- The properties `HTMLMediaElement.crossorigin` and `HTMLInputElement.inputmode` has been removed to match the spec in {{domxref("HTMLMediaElement.crossOrigin")}} and `HTMLInputElement.inputMode`, respectively ([Firefox bug 847370](https://bugzil.la/847370) and [Firefox bug 850346](https://bugzil.la/850346)).
- WebRTC: the Media Stream API and Peer Connection API are now supported by default.
- Web Components: the {{domxref("Document.register")}} method has been implemented ([Firefox bug 783129](https://bugzil.la/783129)).
- The `ProgressEvent.initProgressEvent()` constructor method has been removed. Use the standard constructor, {{domxref("ProgressEvent.ProgressEvent", "ProgressEvent()")}} to construct and initialize {{domxref("ProgressEvent")}} ([Firefox bug 843489](https://bugzil.la/843489)).
- Manipulated data associated with a {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, or {{domxref("Element/paste_event", "paste")}} event can now be accessed via the {{domxref("ClipboardEvent.clipboardData")}} property ([Firefox bug 407983](https://bugzil.la/407983)).
- The {{domxref("HTMLTimeElement")}} interface has been implemented ([Firefox bug 629801](https://bugzil.la/629801)).
- When a {{domxref("Worker")}} constructor is passed an invalid URL, it now throws {{domxref("DOMException")}} of type `SECURITY_ERR` ([Firefox bug 587251](https://bugzil.la/587251)).

### CSS

- Support for [CSS Flexbox layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) has been enabled by default ([Firefox bug 841876](https://bugzil.la/841876)).
- Following a spec change, the initial value for {{cssxref("min-width")}} and {{cssxref("min-height")}} has been changed back to `0`, even on flex items ([Firefox bug 848539](https://bugzil.la/848539)).
- Support for CSS Conditionals ({{cssxref("@supports")}} and {{domxref("CSS.supports")}}) has been enabled by default ([Firefox bug 855455](https://bugzil.la/855455)).
- Support for {{cssxref("background-clip")}} and {{cssxref("background-origin")}} properties in the {{cssxref("background")}} shorthand has been implemented ([Firefox bug 570896](https://bugzil.la/570896)).

## Changes for add-on and Mozilla developers

- The `properties` parameter has been removed from the `nsITreeView.getCellProperties()`, `nsITreeView.getColumnProperties()` and `nsITreeView.getRowProperties()` methods of `nsITreeView`. These methods should now return a string of space-separated property names ([Firefox bug 407956](https://bugzil.la/407956)).
- The `inIDOMUtils.getCSSPropertyNames()` method has been implemented and will return all supported [CSS property](/en-US/docs/Web/CSS/Reference) names.
- See [here](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/) for more changes.

### Firefox Developer Tools

- [Font inspector](https://hacks.mozilla.org/2013/04/developer-tools-update-firefox-22/) shows which fonts on your computer are applied to the page.
- Visual paint feedback mode shows when and where a page is repainted.
- The dev tools may now be docked to the right side, not just the bottom of the browser.
- Some panes within the dev tools have switched from [XUL to HTML](https://bugzil.la/875727). For example, the CSS rule viewer is now chrome://browser/content/devtools/cssruleview\.xhtml, not `cssruleview.xul`. Instead of adding an overlay directly to extend features of these panes, you may add an overlay and script to the outer xul document, to add load listeners and change these HTML documents.
- The stack trace is now shown as a breadcrumb near the top, and the script listing is now at the left panel of the debugger.

## See also

- [Firefox 22 Beta Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/22.0beta/releasenotes/)
- [Add-on Compatibility for Firefox 22](https://blog.mozilla.org/addons/2013/06/03/compatibility-for-firefox-22/)

### Versions

{{Firefox_for_developers('21')}}
