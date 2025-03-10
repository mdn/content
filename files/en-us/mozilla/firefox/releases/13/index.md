---
title: Firefox 13 for developers
slug: Mozilla/Firefox/Releases/13
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 13 was shipped on June 5, 2012. This page summarizes the changes in Firefox 13 that affect developers.

## Changes for Web developers

### HTML

- Tables' [`cellspacing`](/en-US/docs/Web/HTML/Element/table#cellspacing) attributes are now parsed the same outside quirks mode as they are in quirks mode. That is, if a value is specified as a percentage, it's treated as a number of pixels instead, since percentage values are not actually permitted according to the specification.
- The {{htmlelement("wbr")}} element has seen its bidirectional behavior fixed. It now behaves like the Unicode `U+200B ZERO-WIDTH SPACE` and therefore doesn't affect bi-directionality of its parent element anymore.
- The {{Cssxref(":invalid")}} pseudo-class can now be applied to the {{htmlelement("form")}} element.

### CSS

- The `turn` {{cssxref("&lt;angle&gt;")}} unit is now supported (to be used with CSS functions like `rotate()`).
- Support for 3-to-4 value syntax of the {{cssxref("background-position")}} has been added. You can offset a background image from any corner by writing like "`right 10px bottom 20px`". See [Firefox bug 522607](https://bugzil.la/522607)
- Support for the 2-value syntax of the CSS {{cssxref("background-repeat")}} has been added.
- Support for {{cssxref("border-radius","-moz-border-radius*")}} and {{cssxref("box-shadow","-moz-box-shadow")}} has been removed. Authors should use unprefixed `border-radius` or `box-shadow` instead. See [Firefox bug 693510](https://bugzil.la/693510)
- The {{cssxref("column-fill")}} property has been implemented (prefixed).

### JavaScript

- Support for the ECMAScript 2015 [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) construct has been added.
- Experimental support for ECMAScript 2015 [Map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) and [Set](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) objects has been implemented.

### DOM

- The {{domxref("Node.cloneNode()")}} method's `deep` argument is now optional, as specified in DOM4.
- The {{domxref("Window.setTimeout", "setTimeout()")}}, {{domxref("WorkerGlobalScope.setTimeout", "setTimeout()")}}, {{domxref("Window.setInterval()")}} and {{domxref("WorkerGlobalScope.setInterval()")}} methods no longer pass an additional "lateness" argument to the callback routine.
- The {{domxref("Blob","Blob.mozSlice()")}} method has been unprefixed.
- Support for the {{domxref("Blob")}} constructor has been added.
- Support for `globalStorage` has been removed.
- The new `DOMRequest` interface, used for reporting the status and result of background operations, has been added.
- The {{domxref("HTMLOptionElement", "HTMLOptionElement.index()")}} method now returns `0` instead of the incorrect `-1` when the {{HTMLElement("option")}} is inside a {{HTMLElement("datalist")}} HTML element.
- {{domxref("DOMException")}} as defined in DOM Level 4 has been implemented.
- The {{domxref("FileError")}} interface has been removed in favor of the {{domxref("DOMError")}} interface as defined in the latest FileAPI specification.
- The {{domxref("Range")}} object no longer throws a `RangeException`. Instead a {{domxref("DOMException")}} as defined in DOM 4 is used.
- {{domxref("element.getAttributeNS()")}} now always returns `null` instead of the empty string for non-existent attributes. Previously, there were cases in which the empty string could be returned. This is in keeping with the DOM4 specification, which now says this should return null for non-existent attributes, instead of an empty string.
- The {{domxref("HTMLCanvasElement")}} interface now has a non-standard `mozFetchAsStream()` method, which provides an input stream containing the element's image data in the specified format.

### UA string

- Firefox for Android now has a [Tablet or Mobile token in the UA string](/en-US/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators) to indicate the form factor and no longer has the Fennec token. Also, the number after "Gecko/" is now the Gecko version number instead of a frozen date.
- The UA string no longer exposes the Gecko patch number or release status in the version number; that is, the version number is now always of the form "X.Y", where X is the major release number and Y the minor. For example, "13.0" or "14.1". It will no longer be something like "14.0.1b1".

### SVG

- The {{domxref("SVGStringList")}} DOM interface is now indexable like [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) (see [Firefox bug 722071](https://bugzil.la/722071)).

### WebGL

- Support has been added for the [`EXT_texture_filter_anisotropic`](/en-US/docs/Web/API/WebGL_API/Using_Extensions#ext_texture_filter_anisotropic) extension. Anisotropic texture filtering improves the quality of mipmapped texture access when viewing a textured primitive at an oblique angle.

### MathML

- Support for the `width` attribute on {{MathMLElement("mtable")}} elements has been added ([Firefox bug 722880](https://bugzil.la/722880)).
- [MathJax fonts](https://docs.mathjax.org/en/latest/output/fonts.html) are now used as the default fonts for mathematical text. See [Fonts for Mozilla's MathML engine](/en-US/docs/Mozilla_MathML_Project/Fonts) for more information.

### Network

- The SPDY protocol now enabled by default.

### Developer tools

#### 3D view improvements

- You can now press the "f" key to make sure the currently selected node is visible.

#### Style panel improvements

- Clicking the heading for any rule in the [style panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) now opens the [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) at the corresponding CSS.
- Right-clicking on a rule in the [style panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#css-pane) now offers an option to copy the rule to the clipboard.
- Entering an unknown property name, or an illegal property value, displays a warning icon next to that property.

#### Scratchpad improvements

- The _Scratchpad_ now has an option in the Help menu to take you to the MDN documentation about Scratchpad.

## Changes for Mozilla and add-on developers

### Compatibility note

Starting in Firefox 13, Firefox for Windows requires at least Windows XP Service Pack 2; it will no longer run on Windows 2000 or earlier versions of Windows XP.

### JavaScript code modules

#### source-editor.jsm

- Support for a dirty flag has been added to the Source Editor API.
- The Source Editor no longer supports falling back to a {{HTMLElement("textarea")}} instead of using Orion.
- The editor now exposes focus and blur events.
- The [`getIndentationString()`](/en-US/docs/JavaScript_code_modules/source-editor.jsm#getIndentationString%28%29) method has been added; this returns the string to use for indenting text in the editor.
- The Source Editor now supports managing a list of breakpoints and displaying user interface for toggling them on and off; it does not actually implement breakpoints, however. That's up to you to write debugger code for.
- Support has been added for highlighting the current line, using the `highlightCurrentLine` configuration option.

### ARIA

- The CSS properties {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}, {{cssxref("margin-bottom")}} are now all reflected into ARIA object attributes with the same name. See [Gecko object attributes](/en-US/docs/Accessibility/AT-APIs/Gecko/Attrs) for more information.

### Interfaces

- The `nsIScreen` interface now supports controlling rotation through the new `rotation` attribute.
- The `nsIPrefBranch2` interface has been merged into `nsIPrefBranch` ([Firefox bug 718255](https://bugzil.la/718255)).
- The new message manager wake-up service, implemented by `nsIMessageWakeupService`, has been implemented. See [Firefox bug 591052](https://bugzil.la/591052).
- The aliases `MozOpacity`, `MozOutline`, `MozOutlineStyle`, `MozOutlineWidth`, `MozOutlineOffset`, and `MozOutlineColor`, all of which were removed in previous versions of Gecko, have been removed from `nsIDOMCSS2Properties`, which should have been done with the aliases were initially removed.
- The `nsINavHistoryQueryOptions` attribute `excludeItemIfParentHasAnnotation` has been removed, along with the corresponding query operation. It existed to support livemarks, which no longer exist.

## See also

{{Firefox_for_developers}}
