---
title: Document
slug: Web/API/Document
tags:
  - API
  - DOM
  - Document
  - Interface
  - Reference
browser-compat: api.Document
---
{{APIRef("DOM")}}

The **`Document`** interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the [DOM tree](/en-US/docs/Web/API/Document_Object_Model/Using_the_W3C_DOM_Level_1_Core).

The DOM tree includes elements such as {{HTMLElement("body")}} and {{HTMLElement("table")}}, among [many others](/en-US/docs/Web/HTML/Element). It provides functionality globally to the document, like how to obtain the page's URL and create new elements in the document.

{{InheritanceDiagram}}

The `Document` interface describes the common properties and methods for any kind of document. Depending on the document's type (e.g. [HTML](/en-US/docs/Web/HTML), [XML](/en-US/docs/Web/XML), SVG, …), a larger API is available: HTML documents, served with the `"text/html"` content type, also implement the {{DOMxRef("HTMLDocument")}} interface, whereas XML and SVG documents implement the {{DOMxRef("XMLDocument")}} interface.

## Constructor

- {{DOMxRef("Document.Document", "Document()")}}
  - : Creates a new `Document` object.

## Properties

_This interface also inherits from the {{DOMxRef("Node")}} and {{DOMxRef("EventTarget")}} interfaces._

- {{DOMxRef("Document.activeElement")}} {{ReadOnlyInline}}
  - : Returns the {{DOMxRef('Element')}} that currently has focus.
- {{DOMxRef("Document.body")}}
  - : Returns the {{HTMLElement("body")}} or {{htmlelement("frameset")}} node of the current document.
- {{DOMxRef("Document.characterSet")}}{{ReadOnlyInline}}
  - : Returns the character set being used by the document.
- {{domxref("Document.childElementCount")}} {{readonlyInline}}
  - : Returns the number of child elements of the current document.
- {{domxref("Document.children")}} {{readonlyInline}}
  - : Returns the child elements of the current document.
- {{DOMxRef("Document.compatMode")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : Indicates whether the document is rendered in _quirks_ or _strict_ mode.
- {{DOMxRef("Document.contentType")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : Returns the Content-Type from the MIME Header of the current document.
- {{DOMxRef("Document.currentScript")}}{{ReadOnlyInline}}
  - : Returns the {{HTMLElement("script")}} element whose script is currently being processed and [isn't a JavaScript module](https://github.com/whatwg/html/issues/997).
- {{DOMxRef("Document.doctype")}}{{ReadOnlyInline}}
  - : Returns the Document Type Definition (DTD) of the current document.
- {{DOMxRef("Document.documentElement")}}{{ReadOnlyInline}}
  - : Returns the {{DOMxRef("Element")}} that is a direct child of the document. For HTML documents, this is normally the {{DOMxRef("HTMLHtmlElement")}} object representing the document's {{HTMLElement("html")}} element.
- {{DOMxRef("Document.documentURI")}}{{ReadOnlyInline}}
  - : Returns the document location as a string.
- {{DOMxRef("Document.embeds")}}{{ReadOnlyInline}}
  - : Returns an {{DOMxRef("HTMLCollection")}} of the embedded {{HTMLElement('embed')}} elements in the document.
- {{domxref("Document.firstElementChild")}} {{readonlyInline}}
  - : Returns the first child element of the current document.
- {{DOMxRef("Document.fonts")}}
  - : Returns the {{DOMxRef("FontFaceSet")}} interface of the current document.
- {{DOMxRef("Document.forms")}}{{ReadOnlyInline}}
  - : Returns an {{DOMxRef("HTMLCollection")}} of the {{HTMLElement("form")}} elements in the document.
- {{DOMxRef("Document.fullscreenElement")}} {{ReadOnlyInline}}
  - : The element that's currently in full screen mode for this document.
- {{DOMxRef("Document.head")}}{{ReadOnlyInline}}
  - : Returns the {{HTMLElement("head")}} element of the current document.
- {{DOMxRef("Document.hidden")}}{{ReadOnlyInline}}
  - : Returns a Boolean value indicating if the page is considered hidden or not.
- {{DOMxRef("Document.images")}}{{ReadOnlyInline}}
  - : Returns an {{DOMxRef("HTMLCollection")}} of the images in the document.
- {{DOMxRef("Document.implementation")}}{{ReadOnlyInline}}
  - : Returns the DOM implementation associated with the current document.
- {{domxref("Document.lastElementChild")}} {{readonlyInline}}
  - : Returns the last child element of the current document.
- {{DOMxRef("Document.links")}}{{ReadOnlyInline}}
  - : Returns an {{DOMxRef("HTMLCollection")}} of the hyperlinks in the document.
- {{DOMxRef("Document.mozSyntheticDocument")}} {{Non-standard_Inline}}
  - : Returns `true` only if this document is synthetic, such as a standalone image, video, audio file, or the like.
- {{DOMxRef("Document.pictureInPictureElement")}} {{ReadOnlyInline}}
  - : Returns the {{DOMxRef('Element')}} currently being presented in picture-in-picture mode in this document.
- {{DOMxRef("Document.pictureInPictureEnabled")}} {{ReadOnlyInline}}
  - : Returns true if the picture-in-picture feature is enabled.
- {{DOMxRef("Document.plugins")}}{{ReadOnlyInline}}
  - : Returns an {{DOMxRef("HTMLCollection")}} of the available plugins.
- {{DOMxRef("Document.pointerLockElement")}} {{ReadOnlyInline}}
  - : Returns the element set as the target for mouse events while the pointer is locked. `null` if lock is pending, pointer is unlocked, or if the target is in another document.
- {{DOMxRef("Document.featurePolicy")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : Returns the {{DOMxRef("FeaturePolicy")}} interface which provides a simple API for introspecting the feature policies applied to a specific document.
- {{DOMxRef("Document.scripts")}}{{ReadOnlyInline}}
  - : Returns an {{DOMxRef("HTMLCollection")}} of the {{HTMLElement("script")}} elements in the document.
- {{DOMxRef("Document.scrollingElement")}}{{ReadOnlyInline}}
  - : Returns a reference to the {{DOMxRef("Element")}} that scrolls the document.
- {{DOMxRef("Document.styleSheets")}} {{ReadOnlyInline}}
  - : Returns a {{DOMxRef('StyleSheetList')}} of {{DOMxRef('CSSStyleSheet')}} objects for stylesheets explicitly linked into, or embedded in a document.
- {{DOMxRef("Document.timeline")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : Returns timeline as a special instance of {{domxref("DocumentTimeline")}} that is automatically created on page load.
- {{DOMxRef("Document.visibilityState")}}{{ReadOnlyInline}}
  - : Returns a `string` denoting the visibility state of the document. Possible values are `visible`, `hidden`, `prerender`, and `unloaded`.

### Extensions for HTMLDocument

_The `Document` interface for HTML documents inherits from the {{DOMxRef("HTMLDocument")}} interface or, since HTML5, is extended for such documents._

- {{DOMxRef("Document.cookie")}}
  - : Returns a semicolon-separated list of the cookies for that document or sets a single cookie.
- {{DOMxRef("Document.defaultView")}}{{ReadOnlyInline}}
  - : Returns a reference to the window object.
- {{DOMxRef("Document.designMode")}}
  - : Gets/sets the ability to edit the whole document.
- {{DOMxRef("Document.dir")}}
  - : Gets/sets directionality (rtl/ltr) of the document.
- {{DOMxRef("Document.domain")}} {{Deprecated_Inline}}
  - : Gets/sets the domain of the current document.
- {{DOMxRef("Document.lastModified")}}{{ReadOnlyInline}}
  - : Returns the date on which the document was last modified.
- {{DOMxRef("Document.location")}}{{ReadOnlyInline}}
  - : Returns the URI of the current document.
- {{DOMxRef("Document.readyState")}}{{ReadOnlyInline}}
  - : Returns loading status of the document.
- {{DOMxRef("Document.referrer")}}{{ReadOnlyInline}}
  - : Returns the URI of the page that linked to this page.
- {{DOMxRef("Document.title")}}
  - : Sets or gets the title of the current document.
- {{DOMxRef("Document.URL")}}{{ReadOnlyInline}}
  - : Returns the document location as a string.

### Event handlers

_The `Document` interface is extended with additional event handlers defined in [GlobalEventHandlers](/en-US/docs/Web/API/GlobalEventHandlers#event_handlers)._

- {{DOMxRef("Document.onafterscriptexecute")}} {{Non-standard_Inline}}
  - : Represents the event handling code for the {{domxref("Document/afterscriptexecute_event", "afterscriptexecute")}} event.
- {{DOMxRef("Document.onbeforescriptexecute")}} {{Non-standard_Inline}}
  - : Represents the event handling code for the {{domxref("Document/beforescriptexecute_event", "beforescriptexecute")}} event.
- {{DOMxRef("Document.oncopy")}} {{Non-standard_Inline}}
  - : Represents the event handling code for the {{domxref("Document/copy_event", "copy")}} event.
- {{DOMxRef("Document.oncut")}} {{Non-standard_Inline}}
  - : Represents the event handling code for the {{domxref("Document/cut_event", "cut")}} event.
- {{DOMxRef("Document.onfullscreenchange")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("Document/fullscreenchange_event", "fullscreenchange")}} event is raised.
- {{DOMxRef("Document.onfullscreenerror")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("Document/fullscreenerror_event", "fullscreenerror")}} event is raised.
- {{DOMxRef("Document.onpaste")}} {{Non-standard_Inline}}
  - : Represents the event handling code for the {{domxref("Document/paste_event", "paste")}} event.
- {{DOMxRef("Document.onreadystatechange")}}
  - : Represents the event handling code for the {{domxref("Document/readystatechange_event", "readystatechange")}} event.
- {{DOMxRef("GlobalEventHandlers.onselectionchange")}} {{Experimental_Inline}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("Document/selectionchange_event", "selectionchange")}} event is raised.
- {{DOMxRef("Document.onvisibilitychange")}}
  - : Is an [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{domxref("Document/visibilitychange_event", "visibilitychange")}} event is raised.

### Deprecated properties

- {{DOMxRef("Document.alinkColor")}} {{Deprecated_Inline}}
  - : Returns or sets the color of active links in the document body.
- {{DOMxRef("Document.all")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Provides access to all elements in the document — it returns an {{DOMxRef('HTMLAllCollection')}} rooted at the document node. This is a legacy, non-standard property and should not be used.
- {{DOMxRef("Document.anchors")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Returns a list of all of the anchors in the document.
- {{DOMxRef("Document.applets")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Returns an ordered list of the applets within a document.
- {{DOMxRef("Document.bgColor")}} {{Deprecated_Inline}}
  - : Gets/sets the background color of the current document.
- {{DOMxRef("Document.characterSet","Document.charset")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Alias of {{DOMxRef("Document.characterSet")}}. Use this property instead.
- {{DOMxRef("Document.fgColor")}} {{Deprecated_Inline}}
  - : Gets/sets the foreground color, or text color, of the current document.
- {{DOMxRef("Document.fullscreen")}} {{deprecated_inline}}
  - : `true` when the document is in {{DOMxRef("Using_full-screen_mode","full-screen mode")}}.
- {{DOMxRef("Document.height")}} {{Non-standard_Inline}} {{deprecated_inline}}
  - : Gets/sets the height of the current document.
- {{DOMxRef("Document.characterSet", "Document.inputEncoding")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Alias of {{DOMxRef("Document.characterSet")}}. Use this property instead.
- {{DOMxRef("Document.lastStyleSheetSet")}} {{deprecated_inline}}{{ReadOnlyInline}}
  - : Returns the name of the style sheet set that was last enabled. Has the value `null` until the style sheet is changed by setting the value of {{DOMxRef("Document.selectedStyleSheetSet","selectedStyleSheetSet")}}.
- {{DOMxRef("Document.linkColor")}} {{Deprecated_Inline}}
  - : Gets/sets the color of hyperlinks in the document.
- {{DOMxRef("Document.preferredStyleSheetSet")}} {{deprecated_inline}}{{ReadOnlyInline}}
  - : Returns the preferred style sheet set as specified by the page author.
- {{DOMxRef("Document.rootElement")}} {{Deprecated_Inline}}
  - : Like {{DOMxRef("Document.documentElement")}}, but only for {{SVGElement("svg")}} root elements. Use this property instead.
- {{DOMxRef("Document.selectedStyleSheetSet")}} {{deprecated_inline}}
  - : Returns which style sheet set is currently in use.
- {{DOMxRef("Document.styleSheetSets")}} {{deprecated_inline}}{{ReadOnlyInline}}
  - : Returns a list of the style sheet sets available on the document.
- {{DOMxRef("Document.vlinkColor")}} {{Deprecated_Inline}}
  - : Gets/sets the color of visited hyperlinks.
- {{DOMxRef("Document.width")}} {{Non-standard_Inline}} {{deprecated_inline}}
  - : Returns the width of the current document.
- {{DOMxRef("Document.xmlEncoding")}} {{Deprecated_Inline}}
  - : Returns the encoding as determined by the XML declaration.
- {{DOMxRef("Document.xmlStandalone")}} {{deprecated_inline}}
  - : Returns `true` if the XML declaration specifies the document to be standalone (_e.g.,_ An external part of the DTD affects the document's content), else `false`.
- {{DOMxRef("Document.xmlVersion")}} {{deprecated_inline}}
  - : Returns the version number as specified in the XML declaration or `"1.0"` if the declaration is absent.

## Methods

_This interface also inherits from the {{DOMxRef("Node")}} and {{DOMxRef("EventTarget")}} interfaces._

- {{DOMxRef("Document.adoptNode()")}}
  - : Adopt node from an external document.
- {{DOMxRef("Document.append()")}}
  - : Inserts a set of {{domxref("Node")}} objects or {{domxref("DOMString")}} objects after the last child of the document.
- {{DOMxRef("Document.captureEvents()")}} {{Deprecated_Inline}}
  - : See {{DOMxRef("Window.captureEvents")}}.
- {{DOMxRef("Document.caretPositionFromPoint()")}}
  - : Returns a {{DOMxRef('CaretPosition')}} object containing the DOM node containing the caret, and caret's character offset within that node.
- {{DOMxRef("Document.caretRangeFromPoint()")}} {{Non-standard_Inline}}
  - : Gets a {{DOMxRef("Range")}} object for the document fragment under the specified coordinates.
- {{DOMxRef("Document.createAttribute()")}}
  - : Creates a new {{DOMxRef("Attr")}} object and returns it.
- {{DOMxRef("Document.createAttributeNS()")}}
  - : Creates a new attribute node in a given namespace and returns it.
- {{DOMxRef("Document.createCDATASection()")}}
  - : Creates a new CDATA node and returns it.
- {{DOMxRef("Document.createComment()")}}
  - : Creates a new comment node and returns it.
- {{DOMxRef("Document.createDocumentFragment()")}}
  - : Creates a new document fragment.
- {{DOMxRef("Document.createElement()")}}
  - : Creates a new element with the given tag name.
- {{DOMxRef("Document.createElementNS()")}}
  - : Creates a new element with the given tag name and namespace URI.
- {{DOMxRef("Document.createEntityReference()")}} {{deprecated_inline}}
  - : Creates a new entity reference object and returns it.
- {{DOMxRef("Document.createEvent()")}}
  - : Creates an event object.
- {{DOMxRef("Document.createNodeIterator()")}}
  - : Creates a {{DOMxRef("NodeIterator")}} object.
- {{DOMxRef("Document.createProcessingInstruction()")}}
  - : Creates a new {{DOMxRef("ProcessingInstruction")}} object.
- {{DOMxRef("Document.createRange()")}}
  - : Creates a {{DOMxRef("Range")}} object.
- {{DOMxRef("Document.createTextNode()")}}
  - : Creates a text node.
- {{DOMxRef("Document.createTouch()")}} {{Deprecated_Inline}}
  - : Creates a {{DOMxRef("Touch")}} object.
- {{DOMxRef("Document.createTouchList()")}} {{Deprecated_Inline}}
  - : Creates a {{DOMxRef("TouchList")}} object.
- {{DOMxRef("Document.createTreeWalker()")}}
  - : Creates a {{DOMxRef("TreeWalker")}} object.
- {{DOMxRef("Document.elementFromPoint()")}}
  - : Returns the topmost element at the specified coordinates.
- {{DOMxRef("Document.elementsFromPoint()")}}
  - : Returns an array of all elements at the specified coordinates.
- {{DOMxRef("Document.enableStyleSheetsForSet()")}} {{deprecated_inline}}
  - : Enables the style sheets for the specified style sheet set.
- {{DOMxRef("Document.exitPictureInPicture()")}}
  - : Remove the video from the floating picture-in-picture window back to its original container.
- {{DOMxRef("Document.exitPointerLock()")}} {{Experimental_Inline}}
  - : Release the pointer lock.
- {{DOMxRef("Document.getAnimations()")}}
  - : Returns an array of all {{DOMxRef("Animation")}} objects currently in effect, whose target elements are descendants of the `document`.
- {{domxref("Document.getBoxQuads()")}} {{experimental_inline}}
  - : Returns a list of {{domxref("DOMQuad")}} objects representing the CSS fragments of the node.
- {{DOMxRef("Document.getElementById", "Document.getElementById()")}}
  - : Returns an object reference to the identified element.
- {{DOMxRef("Document.getElementsByClassName()")}}
  - : Returns a list of elements with the given class name.
- {{DOMxRef("Document.getElementsByTagName()")}}
  - : Returns a list of elements with the given tag name.
- {{DOMxRef("Document.getElementsByTagNameNS()")}}
  - : Returns a list of elements with the given tag name and namespace.
- {{DOMxRef("Document.getSelection()")}}
  - : Returns a {{DOMxRef('Selection')}} object representing the range of text selected by the user, or the current position of the caret.
- {{DOMxRef("Document.hasStorageAccess()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves with a boolean value indicating whether the document has access to its first-party storage.
- {{DOMxRef("Document.importNode()")}}
  - : Returns a clone of a node from an external document.
- {{DOMxRef("Document.normalizeDocument()")}} {{deprecated_inline}}
  - : Replaces entities, normalizes text nodes, etc.
- {{DOMxRef("Document.prepend()")}}
  - : Inserts a set of {{domxref("Node")}} objects or {{domxref("DOMString")}} objects before the first child of the document.
- {{DOMxRef("Document.querySelector()")}}
  - : Returns the first Element node within the document, in document order, that matches the specified selectors.
- {{DOMxRef("Document.querySelectorAll()")}}
  - : Returns a list of all the Element nodes within the document that match the specified selectors.
- {{DOMxRef("Document.releaseCapture()")}} {{Non-standard_Inline}}
  - : Releases the current mouse capture if it's on an element in this document.
- {{DOMxRef("Document.releaseEvents()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : See {{DOMxRef("Window.releaseEvents()")}}.
- {{DOMxRef("Document.replaceChildren()")}}
  - : Replaces the existing children of a document with a specified new set of children.
- {{DOMxRef("Document.requestStorageAccess()")}}
  - : Returns a {{jsxref("Promise")}} that resolves if the access to first-party storage was granted, and rejects if access was denied.
- {{DOMxRef("Document.mozSetImageElement()")}} {{Non-standard_Inline}}
  - : Allows you to change the element being used as the background image for a specified element ID.

The `Document` interface is extended with the {{DOMxRef("XPathEvaluator")}} interface:

- {{DOMxRef("Document.createExpression()")}}
  - : Compiles an [`XPathExpression`](/en-US/docs/Web/API/XPathExpression) which can then be used for (repeated) evaluations.
- {{DOMxRef("Document.createNSResolver()")}}
  - : Creates an {{DOMxRef("XPathNSResolver")}} object.
- {{DOMxRef("Document.evaluate()")}}
  - : Evaluates an XPath expression.

### Extension for HTML documents

The `Document` interface for HTML documents inherit from the {{DOMxRef("HTMLDocument")}} interface or, since HTML5, is extended for such documents:

- {{DOMxRef("Document.clear()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : In majority of modern browsers, including recent versions of Firefox and Internet Explorer, this method does nothing.
- {{DOMxRef("Document.close()")}}
  - : Closes a document stream for writing.
- {{DOMxRef("Document.execCommand()")}} {{deprecated_inline}}
  - : On an editable document, executes a formatting command.
- {{DOMxRef("Document.getElementsByName()")}}
  - : Returns a list of elements with the given name.
- {{DOMxRef("Document.hasFocus()")}}
  - : Returns `true` if the focus is currently located anywhere inside the specified document.
- {{DOMxRef("Document.open()")}}
  - : Opens a document stream for writing.
- {{DOMxRef("Document.queryCommandEnabled()")}} {{deprecated_inline}}
  - : Returns true if the formatting command can be executed on the current range.
- {{DOMxRef("Document.queryCommandIndeterm()")}} {{deprecated_inline}}
  - : Returns true if the formatting command is in an indeterminate state on the current range.
- {{DOMxRef("Document.queryCommandState()")}} {{deprecated_inline}}
  - : Returns true if the formatting command has been executed on the current range.
- {{DOMxRef("Document.queryCommandSupported()")}} {{deprecated_inline}}
  - : Returns true if the formatting command is supported on the current range.
- {{DOMxRef("Document.queryCommandValue()")}} {{deprecated_inline}}
  - : Returns the current value of the current range for a formatting command.
- {{DOMxRef("Document.write()")}}
  - : Writes text in a document.
- {{DOMxRef("Document.writeln()")}}
  - : Writes a line of text in a document.

## Events

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- {{DOMxRef("Document/scroll_event", "scroll")}}
  - : Fired when the document view or an element has been scrolled.
    Also available via the {{DOMxRef("GlobalEventHandlers.onscroll", "onscroll")}} property.
- {{DOMxRef("Document/visibilitychange_event", "visibilitychange")}}
  - : Fired when the content of a tab has become visible or has been hidden.
    Also available via the {{DOMxRef("Document.onvisibilitychange", "onvisibilitychange")}} property.
- {{DOMxRef("Document/wheel_event","wheel")}}
  - : Fired when the user rotates a wheel button on a pointing device (typically a mouse).
    Also available via the {{DOMxRef("GlobalEventHandlers.onwheel", "onwheel")}} property.

### Animation events

- {{DOMxRef("Document/animationcancel_event", "animationcancel")}}
  - : Fired when an animation unexpectedly aborts.
    Also available via the {{DOMxRef("GlobalEventHandlers/onanimationcancel", "onanimationcancel")}} property.
- {{DOMxRef("Document/animationend_event", "animationend")}}
  - : Fired when an animation has completed normally.
    Also available via the {{DOMxRef("GlobalEventHandlers/onanimationend", "onanimationend")}} property.
- {{DOMxRef("Document/animationiteration_event", "animationiteration")}}
  - : Fired when an animation iteration has completed.
    Also available via the {{DOMxRef("GlobalEventHandlers/onanimationiteration", "onanimationiteration")}} property.
- {{DOMxRef("Document/animationstart_event", "animationstart")}}
  - : Fired when an animation starts.
    Also available via the {{DOMxRef("GlobalEventHandlers/onanimationstart", "onanimationstart")}} property.

### Clipboard events

- {{DOMxRef("Document/copy_event", "copy")}}
  - : Fired when the user initiates a copy action through the browser's user interface.
    Also available via the {{DOMxRef("HTMLElement/oncopy", "oncopy")}} property.
- {{DOMxRef("Document/cut_event", "cut")}}
  - : Fired when the user initiates a cut action through the browser's user interface.
    Also available via the {{DOMxRef("HTMLElement/oncut", "oncut")}} property.
- {{DOMxRef("Document/paste_event", "paste")}}
  - : Fired when the user initiates a paste action through the browser's user interface.
    Also available via the {{DOMxRef("HTMLElement/onpaste", "onpaste")}} property.

### Drag & drop events

- {{DOMxRef("Document/drag_event", "drag")}}
  - : Fired every few hundred milliseconds as an element or text selection is being dragged by the user.
    Also available via the {{DOMxRef("GlobalEventHandlers/ondrag", "ondrag")}} property.
- {{DOMxRef("Document/dragend_event", "dragend")}}
  - : Fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key).
    Also available via the {{DOMxRef("GlobalEventHandlers/ondragend", "ondragend")}} property.
- {{DOMxRef("Document/dragenter_event", "dragenter")}}
  - : Fired when a dragged element or text selection enters a valid drop target.
    Also available via the {{DOMxRef("GlobalEventHandlers/ondragenter", "ondragenter")}} property.
- {{DOMxRef("Document/dragleave_event", "dragleave")}}
  - : Fired when a dragged element or text selection leaves a valid drop target.
    Also available via the {{DOMxRef("GlobalEventHandlers/ondragleave", "ondragleave")}} property.
- {{DOMxRef("Document/dragover_event", "dragover")}}
  - : Fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).
    Also available via the {{DOMxRef("GlobalEventHandlers/ondragover", "ondragover")}} property.
- {{DOMxRef("Document/dragstart_event", "dragstart")}}
  - : Fired when the user starts dragging an element or text selection.
    Also available via the {{DOMxRef("GlobalEventHandlers/ondragstart", "ondragstart")}} property.
- {{DOMxRef("Document/drop_event", "drop")}}
  - : Fired when an element or text selection is dropped on a valid drop target.
    Also available via the {{DOMxRef("GlobalEventHandlers/ondrop", "ondrop")}} property.

### Fullscreen events

- {{DOMxRef("Document/fullscreenchange_event", "fullscreenchange")}}
  - : Fired when the `Document` transitions into or out of [full-screen](/en-US/docs/Web/API/Fullscreen_API/Guide) mode.
    Also available via the {{DOMxRef("Document.onfullscreenchange", "onfullscreenchange")}} property.
- [`fullscreenerror`](/en-US/docs/Web/API/Document/fullscreenerror_event)
  - : Fired if an error occurs while attempting to switch into or out of [full-screen](/en-US/docs/Web/API/Fullscreen_API/Guide) mode.
    Also available via the  {{DOMxRef("Document.onfullscreenerror", "onfullscreenerror")}} property.

### Keyboard events

- {{DOMxRef("Document/keydown_event", "keydown")}}
  - : Fired when a key is pressed.
    Also available via the {{DOMxRef("GlobalEventHandlers/onkeydown", "onkeydown")}} property.
- {{DOMxRef("Document/keypress_event", "keypress")}}
  - : Fired when a key that produces a character value is pressed down. {{Deprecated_Inline}}
    Also available via the {{DOMxRef("GlobalEventHandlers/onkeypress", "onkeypress")}} property.
- {{DOMxRef("Document/keyup_event", "keyup")}}
  - : Fired when a key is released.
    Also available via the {{DOMxRef("GlobalEventHandlers/onkeyup", "onkeyup")}} property.

### Load & unload events

- {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - : Fired when the document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
- {{DOMxRef("Document/readystatechange_event", "readystatechange")}}
  - : Fired when the {{DOMxRef("Document/readyState", "readyState")}} attribute of a document has changed.
    Also available via the `onreadystatechange` property.

### Pointer events

- {{DOMxRef("Document/gotpointercapture_event", "gotpointercapture")}}
  - : Fired when an element captures a pointer using [`setPointerCapture()`](/en-US/docs/Web/API/Element/setPointerCapture).
    Also available via the {{DOMxRef("GlobalEventHandlers/ongotpointercapture", "ongotpointercapture")}} property.
- {{DOMxRef("Document/lostpointercapture_event", "lostpointercapture")}}
  - : Fired when a [captured pointer](/en-US/docs/Web/API/Pointer_events#pointer_capture) is released.
    Also available via the {{DOMxRef("GlobalEventHandlers/onlostpointercapture", "onlostpointercapture")}} property.
- {{DOMxRef("Document/pointercancel_event", "pointercancel")}}
  - : Fired when a pointer event is canceled.
    Also available via the {{DOMxRef("GlobalEventHandlers/onpointercancel", "onpointercancel")}} property.
- {{DOMxRef("Document/pointerdown_event", "pointerdown")}}
  - : Fired when a pointer becomes active.
    Also available via the {{DOMxRef("GlobalEventHandlers/onpointerdown", "onpointerdown")}} property.
- {{DOMxRef("Document/pointerenter_event", "pointerenter")}}
  - : Fired when a pointer is moved into the hit test boundaries of an element or one of its descendants.
    Also available via the {{DOMxRef("GlobalEventHandlers/onpointerenter", "onpointerenter")}} property.
- {{DOMxRef("Document/pointerleave_event", "pointerleave")}}
  - : Fired when a pointer is moved out of the hit test boundaries of an element.
    Also available via the {{DOMxRef("GlobalEventHandlers/onpointerleave", "onpointerleave")}} property.
- {{DOMxRef("Document/pointerlockchange_event", "pointerlockchange")}}
  - : Fired when the pointer is locked/unlocked.
    Also available via the {{DOMxRef("GlobalEventHandlers/onpointerlockchange", "onpointerlockchange")}} property.
- {{DOMxRef("Document/pointerlockerror_event", "pointerlockerror")}}
  - : Fired when locking the pointer failed.
    Also available via the {{DOMxRef("GlobalEventHandlers/onpointerlockerror", "onpointerlockerror")}} property.
- {{DOMxRef("Document/pointermove_event", "pointermove")}}
  - : Fired when a pointer changes coordinates.
    Also available via the {{DOMxRef("GlobalEventHandlers/onpointermove", "onpointermove")}} property.
- {{DOMxRef("Document/pointerout_event", "pointerout")}}
  - : Fired when a pointer is moved out of the _hit test_ boundaries of an element (among other reasons).
    Also available via the {{DOMxRef("GlobalEventHandlers/onpointerout", "onpointerout")}} property.
- {{DOMxRef("Document/pointerover_event", "pointerover")}}
  - : Fired when a pointer is moved into an element's hit test boundaries.
    Also available via the {{DOMxRef("GlobalEventHandlers/onpointerover", "onpointerover")}} property.
- {{DOMxRef("Document/pointerup_event", "pointerup")}}
  - : Fired when a pointer is no longer active.
    Also available via the {{DOMxRef("GlobalEventHandlers/onpointerup", "onpointerup")}} property.

### Selection events

- {{DOMxRef("Document/selectionchange_event", "selectionchange")}}
  - : Fired when the current text selection on a document is changed.
    Also available via the {{DOMxRef("GlobalEventHandlers/onselectionchange", "onselectionchange")}} property.
- {{DOMxRef("Document/selectstart_event", "selectstart")}}
  - : Fired when the user begins a new selection.
    Also available via the {{DOMxRef("GlobalEventHandlers/onselectstart", "onselectstart")}} property.

### Touch events

- {{DOMxRef("Document/touchcancel_event", "touchcancel")}}
  - : Fired when one or more touch points have been disrupted in an implementation-specific manner (for example, too many touch points are created).
    Also available via the {{DOMxRef("GlobalEventHandlers/ontouchcancel", "ontouchcancel")}} property.
- {{DOMxRef("Document/touchend_event", "touchend")}}
  - : Fired when one or more touch points are removed from the touch surface.
    Also available via the {{DOMxRef("GlobalEventHandlers/ontouchend", "ontouchend")}} property
- {{DOMxRef("Document/touchmove_event", "touchmove")}}
  - : Fired when one or more touch points are moved along the touch surface.
    Also available via the {{DOMxRef("GlobalEventHandlers/ontouchmove", "ontouchmove")}} property
- {{DOMxRef("Document/touchstart_event", "touchstart")}}
  - : Fired when one or more touch points are placed on the touch surface.
    Also available via the {{DOMxRef("GlobalEventHandlers/ontouchstart", "ontouchstart")}} property

### Transition events

- {{DOMxRef("Document/transitioncancel_event", "transitioncancel")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) is canceled.
    Also available via the {{DOMxRef("GlobalEventHandlers/ontransitioncancel", "ontransitioncancel")}} property.
- {{DOMxRef("Document/transitionend_event", "transitionend")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) has completed.
    Also available via the {{DOMxRef("GlobalEventHandlers/ontransitionend", "ontransitionend")}} property.
- {{DOMxRef("Document/transitionrun_event", "transitionrun")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) is first created.
    Also available via the {{DOMxRef("GlobalEventHandlers/ontransitionrun", "ontransitionrun")}} property.
- {{DOMxRef("Document/transitionstart_event", "transitionstart")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) has actually started.
    Also available via the {{DOMxRef("GlobalEventHandlers/ontransitionstart", "ontransitionstart")}} property.

## Non-standard extensions {{Non-standard_Inline}}

{{non-standard_header}}

### Firefox notes

Firefox defines some non-standard methods:

- {{DOMxRef("Document.execCommandShowHelp()")}} {{deprecated_inline}}
  - : This method never did anything and always threw an exception, so it was removed in Gecko 14.0 {{geckoRelease("14.0")}}.
- {{DOMxRef("Document.getBoxObjectFor()")}} {{deprecated_inline}}
  - : Use the {{DOMxRef("Element.getBoundingClientRect()")}} method instead.
- {{DOMxRef("Document.loadOverlay()")}} {{deprecated_inline}}
  - : Loads a [XUL overlay](/en-US/docs/XUL_Overlays) dynamically. This only works in XUL documents.
- {{DOMxRef("Document.queryCommandText()")}} {{deprecated_inline}}
  - : This method never did anything but throw an exception, and was removed in Gecko 14 {{GeckoRelease("14")}}.

### Internet Explorer notes

Microsoft defines some non-standard properties:

- {{DOMxRef("Document.fileSize")}}\* {{Non-standard_Inline}} {{deprecated_inline}}
  - : Returns size in bytes of the document. Starting with Internet Explorer 11, that property is no longer supported. See [MSDN](https://msdn.microsoft.com/en-us/library/ms533752%28v=VS.85%29.aspx).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
