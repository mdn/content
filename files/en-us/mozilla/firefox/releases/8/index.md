---
title: Firefox 8 for developers
slug: Mozilla/Firefox/Releases/8
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 8 was released on November 8, 2011. This article provides information both for [web developers](#changes_for_web_developers) and for add-on and [Mozilla project developers](#changes_for_mozilla_and_add-on_developers) to help take full advantage of the features of this release.

## Changes for web developers

### HTML

- The {{ domxref("HTMLImageElement") }} `crossOrigin` property has been added and the [`crossorigin`](/en-US/docs/Web/HTML/Reference/Elements/img#crossorigin) attribute has been added to the {{ HTMLElement("img") }} element. (see [Firefox bug 664299](https://bugzil.la/664299))
- The {{ domxref("HTMLSelectElement","","add()") }} method now supports either an item or index of an item that the new item should be inserted before. Previously it only supported an item. (see [Firefox bug 666200](https://bugzil.la/666200))
- The `HTMLIsIndexElement` constructor has been removed. No elements have implemented this interface since before Firefox 4.
- The HTML5 "context menu" feature (`contextmenu` attribute), which lets you add custom element specific items to native context menu, is now supported (the implementation is still experimental awaiting changes in the specification; see [Firefox bug 617528](https://bugzil.la/617528)).
- Support for the {{ domxref("HTMLElement.accessKeyLabel") }} attribute has been added to all elements.
- The {{ HTMLElement("input") }} and {{ HTMLElement("textarea") }} elements now support the `selectionDirection` attribute, and their `setSelectionRange()` methods have been updated to support optionally specifying a direction.
- Most elements now get a focus ring drawn around them if they've been made focusable by using the `tabindex` attribute and the user then focuses the element.
- In a set of nested {{ HTMLElement("label") }} elements click events do no longer trigger multiple \<label> elements, which caused Firefox to stop responding in the past (see [Firefox bug 646157](https://bugzil.la/646157)).

### DOM

- The {{ domxref("Element.insertAdjacentHTML","insertAdjacentHTML") }} method has been implemented.
- `BlobBuilder` now has a `getFile()` method that returns the content of the blob as a file.
- The {{ domxref("FileReaderSync") }} interface (part of the FileAPI) has been implemented.
- Event handling in nested {{ HTMLElement("label") }}s has been fixed.
- You can now use {{ domxref("window.postMessage()") }} to pass {{ domxref("File") }} and {{ domxref("FileList") }} objects between windows.
- When editing {{ domxref("HTMLelement.contenteditable", "contenteditable") }} areas, exiting a heading by pressing return, or exiting list editing mode by pressing return twice, now returns to paragraph entry mode (that is, paragraphs inside {{ HTMLElement("p") }} blocks) instead of separating lines by {{ HTMLElement("br") }} elements.
- Fixed a bug that prevents justification from taking effect properly when applied to the first line in a {{ domxref("HTMLelement.contenteditable", "contenteditable") }} area.
- Fixed a bug that caused pressing delete or backspace at the beginning of a {{ domxref("HTMLelement.contenteditable", "contenteditable") }} area to affect the previous `contenteditable` block if one is present.
- {{ domxref("Document.getSelection()") }} now returns the same `Selection` object as {{ domxref("window.getSelection()") }}, instead of _stringifying_ it.
- The HTML5 `selectionDirection` property makes it possible to define the direction of the selection in an editable text.
- {{ domxref("HTMLMediaElement") }} now have a `seekable` property that return a {{ domxref("TimeRanges") }} object.
- The {{ domxref("HTMLMediaElement.preload") }} attribute now correctly reflects as an _enumerated value_.
- [`crossOrigin` property](/en-US/docs/Web/HTML/Reference/Attributes/crossorigin) defaults to "Anonymous" when an invalid value is used.
- {{ domxref("navigator.cookieEnabled") }} now returns correct information when the default cookie setting is overridden on a per-site basis.

### JavaScript

- [`RegExp.exec()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) and [`RegExp.test()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) called with no arguments now match against the string "undefined".
- [`String.search()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search) and [`String.match()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) called with no arguments or `undefined` now match against the empty string and thus match every string.
- Support for watchlists has been implemented with the new (non-standard) `watch()` and `unwatch()` methods.

### CSS

- {{ cssxref("resolution") }} now accepts {{cssxref("&lt;number&gt;")}}, not just {{cssxref("&lt;integer&gt;")}} values as per the specification.
- Hyphenation rules have been added for many new languages when using {{ cssxref("hyphens") }}.
- Handling of {{ cssxref("background-size") }} has been revised to more closely match the specification.
- In the past, {{ cssxref("text-decoration") }} in quirks mode had line thickness and position adjusted on descendant text to match the descendant. Now standards mode and quirks mode rendering are more similar.
- Horizontal positioning for elements has been brought more in line with the specification in many cases. Documentation for this is forthcoming, but for now, see [Firefox bug 682780](https://bugzil.la/682780), comment 23 for details.
- [SVG images are now scaled properly](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds) when used as background images.

### Network

- Double quotes are no longer accepted as a delimiter for {{ RFC("2231") }} or {{ RFC("5987") }} encoding, as per those RFCs.
- MIME header field parser (`Content-Disposition`) now requires "=" in parameters.
- Scripts are no longer downloaded when JavaScript is disabled.
- SSL 2.0 is no longer supported.

### WebSockets

- The [`WebSocket`](/en-US/docs/Web/API/WebSocket) object's [`send()`](/en-US/docs/Web/API/WebSocket/send) method no longer incorrectly returns a Boolean value.
- The [`WebSocket`](/en-US/docs/Web/API/WebSocket) object's [`close()`](/en-US/docs/Web/API/WebSocket/close) method now matches the current draft of the standard, and close events now properly use the [`CloseEvent`](/en-US/docs/Web/API/CloseEvent) interface.
- The [`WebSocket`](/en-US/docs/Web/API/WebSocket) object's `extensions` attribute is now supported.
- The WebSocket constructor now supports an array of protocols as well as a single protocol string.
- Mixed content is not allowed with WebSockets; that is, you can no longer open a connection to a non-secure WebSocket server from secure content.
- Connection errors with WebSockets now trigger the `onerror` handler.
- [WebSocket](/en-US/docs/Web/API/WebSockets_API) API has been updated to the latest draft of the specification (see [Firefox bug 674890](https://bugzil.la/674890), [Firefox bug 674527](https://bugzil.la/674527), and [Firefox bug 674716](https://bugzil.la/674716)).
- The deflate-stream extension to WebSockets has been disabled; it has been deprecated, and was breaking compatibility with some sites.

### WebGL

- [Cross-domain textures](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) can now be allowed with CORS approval.
- Cross-process rendering with Direct2D/Direct3D 10.

### MathML

- Support for the `displaystyle` attribute on the top-level {{ MathMLElement("math") }} element has been added.
- The interpretation of negative row numbers for the `align` attribute on {{ MathMLElement("mtable") }} has been corrected.

### Developer tools

- The [`console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) object has a new `dir()` method, which displays an interactive list of the properties on a specified object.

## Changes for Mozilla and add-on developers

See [Updating add-ons for Firefox 8](/en-US/docs/Mozilla/Firefox/Releases/8/Updating_add-ons) for a guide to changes you're likely to have to make your add-ons compatible with Firefox 8.

> [!NOTE]
> Firefox 8 requires that binary components be recompiled, as do all major releases of Firefox.

### XPCOM

- `Components.utils`
  - : The new methods `Components.utils.createObjectIn()` and `Components.utils.makeObjectPropsNormal()` have been created to make it easier to create objects in specific compartments.

#### Other XPCOM-related changes

- You can now instantiate DOM {{ domxref("File") }} objects from component code by doing new File, instead of having to instantiate an `nsIDOMFile` directly.
- The `nsTPtrArray` array type has been removed. Its functionality is now all available on `nsTArray`, which now offers the `SafeElementAt()` method when instantiated using a pointer type.

### Workers

It is no longer possible to access XPCOM objects from ChromeWorkers. XPConnect has been disabled in worker contexts as of [Firefox bug 649537](https://bugzil.la/649537).

### XUL

- A bug in {{ domxref("document.execCommand()") }} that occurred when calling it on the value of `contentDocument` has been fixed. Since Firefox 3, this has resulted in errors instead of working correctly.
- Bootstrapped add-ons can now load chrome using a `chrome.manifest` file.
- XUL images now shrink down with the same ratio in both directions when specifying maximum sizes.

### Changes to the build system

- The following build configuration options have been removed:

  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- When compiling IDL files to headers, the header file `jspubtd.h` is automatically included when needed. Manual inclusions of `jspubtd.h` and/or `jsapi.h` in IDL files that use jsval or \[implicit_jscontext] are no longer necessary.

### Chrome registration

- The `platformversion` flag can be used in the chrome.manifest to specify Gecko version compatibility.

### Interface changes

- The `mozIJSSubScriptLoader.loadSubScript()` method now loads scripts from the startup cache when possible.
- The `ownerWindow` attribute has been removed from the `nsIAccessNode` interface.
- The `nsIDOMStorageWindow` interface has been merged into the `nsIDOMWindow` interface.
- All members of the `nsIDOMWindowInternal` interface have been moved into the `nsIDOMWindow` interface. The interface itself (with no members) remains available for compatibility until Firefox 9.
- In order to improve performance, callback handling for asynchronous Places database updates has been changed. See the new `mozIVisitInfoCallback.handleResult()` and `mozIVisitInfoCallback.handleError()` methods, which replace the old single method for both error and success condition handling.
- The `KIND_MAPPED` attribute of `nsIMemoryReporter` has been deprecated in favor of `KIND_NONHEAP`, new unit types `UNITS_COUNT_CUMULATIVE` and `UNITS_PERCENTAGE` have been added.
- The `nsIMemoryReporterManager` interface has a new `explicit` attribute, which reports the total size of explicit memory allocations.
- The `nsIMemoryReporterManager` interface has a new `resident` attribute, which reports the amount of physical memory used.
- The `nsINetworkLinkService` interface has a new attribute, `linkType`. This attribute provides the type of network connection in use. All Operating Systems currently return `LINK_TYPE_UNKNOWN`. Android support was backed out due to perceived security concerns.
- The `nsISelection2` interface has been merged into the `nsISelectionPrivate` interface.
- The `nsISelection3` interface has been merged into the `nsISelection` interface.
- The `nsISessionStartup` attribute state is now a `jsval` instead of a string, for performance reasons.
- The `nsIDocShell` attribute `isActive` is now `false` for minimized windows.
- The `nsIDownloadHistory.addDownload()` method now saves the target where the download is saved on the local file system.

#### Removed interfaces

The following interfaces were implementation details that are no longer needed:

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

The `nsIWorkerFactory` interface has been removed as well. Workers can still be created using the `Worker` and `ChromeWorker` constructors.

### Other changes

- When a window is minimized, un-minimized, or switches between full screen and windowed mode, it receives a `sizemodechange` event.
- You can now [use the `extensions.autoDisableScopes` preference](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#preventing_automatic_install_from_specific_locations) to disable automatic installation of add-ons from specific add-on install locations.
- The new `mozSyntheticDocument` property on {{ domxref("Document") }} objects lets you determine whether a document is synthetic (that is, something like a standalone image, video, or audio file) rather than a full, standard DOM document. This can be useful, for example, if you want to present different user interface in this situation (such as adding contextual items differently depending on this case).
- You can now specify a filter when opening `about:config`; for example, `about:config?filter=sessionstore` will show only session storage related preferences.

<!-- cSpell:ignore sessionstore -->

## See also

- [Firefox 7 for developers](/en-US/docs/Mozilla/Firefox/Releases/7)
- [Firefox 6 for developers](/en-US/docs/Mozilla/Firefox/Releases/6)
- [Firefox 5 for developers](/en-US/docs/Mozilla/Firefox/Releases/5)
- [Firefox 4 for developers](/en-US/docs/Mozilla/Firefox/Releases/4)
- [Firefox 3.6 for developers](/en-US/docs/Mozilla/Firefox/Releases/3.6)
- [Firefox 3.5 for developers](/en-US/docs/Mozilla/Firefox/Releases/3.5)
- [Firefox 3 for developers](/en-US/docs/Mozilla/Firefox/Releases/3)
- [Firefox 2 for developers](/en-US/docs/Mozilla/Firefox/Releases/2)
- [Firefox 1.5 for developers](/en-US/docs/Mozilla/Firefox/Releases/1.5)
