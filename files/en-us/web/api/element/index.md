---
title: Element
slug: Web/API/Element
tags:
  - API
  - DOM
  - DOM Reference
  - Element
  - Interface
  - Reference
  - Web API
browser-compat: api.Element
---
{{APIRef("DOM")}}

**`Element`** is the most general base class from which all element objects (i.e. objects that represent elements) in a {{DOMxRef("Document")}} inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from `Element`.

For example, the {{DOMxRef("HTMLElement")}} interface is the base interface for HTML elements, while the {{DOMxRef("SVGElement")}} interface is the basis for all SVG elements. Most functionality is specified further down the class hierarchy.

Languages outside the realm of the Web platform, like XUL through the `XULElement` interface, also implement `Element`.

{{InheritanceDiagram}}

## Properties

_`Element` inherits properties from its parent interface, {{DOMxRef("Node")}}, and by extension that interface's parent, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Element.assignedSlot")}}{{readonlyInline}}
  - : Returns a {{DOMxRef("HTMLSlotElement")}} representing the {{htmlelement("slot")}} the node is inserted in.
- {{DOMxRef("Element.attributes")}} {{readOnlyInline}}
  - : Returns a {{DOMxRef("NamedNodeMap")}} object containing the assigned attributes of the corresponding HTML element.
- {{domxref("Element.childElementCount")}} {{readonlyInline}}
  - : Returns the number of child elements of this element.
- {{domxref("Element.children")}} {{readonlyInline}}
  - : Returns the child elements of this element.
- {{DOMxRef("Element.classList")}} {{readOnlyInline}}
  - : Returns a {{DOMxRef("DOMTokenList")}} containing the list of class attributes.
- {{DOMxRef("Element.className")}}
  - : Is a {{DOMxRef("DOMString")}} representing the class of the element.
- {{DOMxRef("Element.clientHeight")}} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the inner height of the element.
- {{DOMxRef("Element.clientLeft")}} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the width of the left border of the element.
- {{DOMxRef("Element.clientTop")}} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the width of the top border of the element.
- {{DOMxRef("Element.clientWidth")}} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the inner width of the element.
- {{domxref("Element.firstElementChild")}} {{readonlyInline}}
  - : Returns the first child element of this element.
- {{DOMxRef("Element.id")}}
  - : Is a {{DOMxRef("DOMString")}} representing the id of the element.
- {{DOMxRef("Element.innerHTML")}}
  - : Is a {{DOMxRef("DOMString")}} representing the markup of the element's content.
- {{domxref("Element.lastElementChild")}} {{readonlyInline}}
  - : Returns the last child element of this element.
- {{DOMxRef("Element.localName")}} {{readOnlyInline}}
  - : A {{DOMxRef("DOMString")}} representing the local part of the qualified name of the element.
- {{DOMxRef("Element.namespaceURI")}} {{readonlyInline}}

  - : The namespace URI of the element, or `null` if it is no namespace.

    > **Note:** In Firefox 3.5 and earlier, HTML elements are in no namespace. In later versions, HTML elements are in the [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml "Linkification: http://www.w3.org/1999/xhtml") namespace in both HTML and XML trees.

- {{DOMxRef("Element.nextElementSibling")}} {{readOnlyInline}}
  - : Is an {{DOMxRef("Element")}}, the element immediately following the given one in the tree, or `null` if there's no sibling node.
- {{DOMxRef("Element.outerHTML")}}
  - : Is a {{DOMxRef("DOMString")}} representing the markup of the element including its content. When used as a setter, replaces the element with nodes parsed from the given string.
- {{DOMxRef("Element.part")}}
  - : Represents the part identifier(s) of the element (i.e. set using the `part` attribute), returned as a {{domxref("DOMTokenList")}}.
- {{DOMxRef("Element.prefix")}} {{readOnlyInline}}
  - : A {{DOMxRef("DOMString")}} representing the namespace prefix of the element, or `null` if no prefix is specified.
- {{DOMxRef("Element.previousElementSibling")}} {{readOnlyInline}}
  - : Is a {{DOMxRef("Element")}}, the element immediately preceding the given one in the tree, or `null` if there is no sibling element.
- {{DOMxRef("Element.scrollHeight")}} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the scroll view height of an element.
- {{DOMxRef("Element.scrollLeft")}}
  - : Is a {{jsxref("Number")}} representing the left scroll offset of the element.
- {{DOMxRef("Element.scrollLeftMax")}} {{Non-standard_Inline}} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the maximum left scroll offset possible for the element.
- {{DOMxRef("Element.scrollTop")}}
  - : A {{jsxref("Number")}} representing number of pixels the top of the document is scrolled vertically.
- {{DOMxRef("Element.scrollTopMax")}} {{Non-standard_Inline}} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the maximum top scroll offset possible for the element.
- {{DOMxRef("Element.scrollWidth")}} {{readOnlyInline}}
  - : Returns a {{jsxref("Number")}} representing the scroll view width of the element.
- {{DOMxRef("Element.shadowRoot")}}{{readOnlyInline}}
  - : Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
- {{DOMxRef("Element.openOrClosedShadowRoot")}} {{Non-standard_Inline}}{{readOnlyInline}}
  - : Returns the shadow root that is hosted by the element, regardless if its open or closed. **Available only to [WebExtensions](/en-US/docs/Mozilla/Add-ons/WebExtensions).**
- {{DOMxRef("Element.setHTML")}}
  - : Parses and [sanitizes](/en-US/docs/Web/API/HTML_Sanitizer_API) a string of HTML and inserts into the DOM as a subtree of the element.
- {{DOMxRef("Element.slot")}} {{Experimental_Inline}}
  - : Returns the name of the shadow DOM slot the element is inserted in.
- {{DOMxRef("Element.tagName")}} {{readOnlyInline}}
  - : Returns a {{jsxref("String")}} with the name of the tag for the given element.

### Properties included from ARIA

_The `Element` interface includes the following properties, defined on the `ARIAMixin` mixin._

- {{domxref("Element.ariaAtomic")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-atomic` attribute, which indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the `aria-relevant` attribute.
- {{domxref("Element.ariaAutoComplete")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-autocomplete` attribute, which indicates whether inputting text could trigger display of one or more predictions of the user's intended value for a combobox, searchbox, or textbox and specifies how predictions would be presented if they were made.
- {{domxref("Element.ariaBusy")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-busy` attribute, which indicates whether an element is being modified, as assistive technologies may want to wait until the modifications are complete before exposing them to the user.
- {{domxref("Element.ariaChecked")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-checked` attribute, which indicates the current "checked" state of checkboxes, radio buttons, and other widgets that have a checked state.
- {{domxref("Element.ariaColCount")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-colcount` attribute, which defines the number of columns in a table, grid, or treegrid.
- {{domxref("Element.ariaColIndex")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-colindex` attribute, which defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
- {{domxref("Element.ariaColIndexText")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-colindextext` attribute, which defines a human readable text alternative of aria-colindex.
- {{domxref("Element.ariaColSpan")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-colspan` attribute, which defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
- {{domxref("Element.ariaCurrent")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-current` attribute, which indicates the element that represents the current item within a container or set of related elements.
- {{domxref("Element.ariaDescription")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-description` attribute, which defines a string value that describes or annotates the current element.
- {{domxref("Element.ariaDisabled")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-disabled` attribute, which indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
- {{domxref("Element.ariaExpanded")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-expanded` attribute, which indicates whether a grouping element owned or controlled by this element is expanded or collapsed.
- {{domxref("Element.ariaHasPopup")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-haspopup` attribute, which indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
- {{domxref("Element.ariaHidden")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-hidden` attribute, which indicates whether the element is exposed to an accessibility API.
- {{domxref("Element.ariaKeyShortcuts")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-keyshortcuts` attribute, which indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
- {{domxref("Element.ariaLabel")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-label` attribute, which defines a string value that labels the current element.
- {{domxref("Element.ariaLevel")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-level` attribute, which defines the hierarchical level of an element within a structure.
- {{domxref("Element.ariaLive")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-live` attribute, which indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
- {{domxref("Element.ariaModal")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-modal` attribute, which indicates whether an element is modal when displayed.
- {{domxref("Element.ariaMultiline")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-multiline` attribute, which indicates whether a text box accepts multiple lines of input or only a single line.
- {{domxref("Element.ariaMultiSelectable")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-multiselectable` attribute, which indicates that the user may select more than one item from the current selectable descendants.
- {{domxref("Element.ariaOrientation")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-orientation` attribute, which indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
- {{domxref("Element.ariaPlaceholder")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-placeholder` attribute, which defines a short hint intended to aid the user with data entry when the control has no value.
- {{domxref("Element.ariaPosInSet")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-posinset` attribute, which defines an element's number or position in the current set of listitems or treeitems.
- {{domxref("Element.ariaPressed")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-pressed` attribute, which indicates the current "pressed" state of toggle buttons.
- {{domxref("Element.ariaReadOnly")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-readonly` attribute, which indicates that the element is not editable, but is otherwise operable.
- {{domxref("Element.ariaRelevant")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-relevant` attribute, which indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. This is used to describe what changes in an `aria-live` region are relevant and should be announced.
- {{domxref("Element.ariaRequired")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-required` attribute, which indicates that user input is required on the element before a form may be submitted.
- {{domxref("Element.ariaRoleDescription")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-roledescription` attribute, which defines a human-readable, author-localized description for the role of an element.
- {{domxref("Element.ariaRowCount")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-rowcount` attribute, which defines the total number of rows in a table, grid, or treegrid.
- {{domxref("Element.ariaRowIndex")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-rowindex` attribute, which defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
- {{domxref("Element.ariaRowIndexText")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-rowindextext` attribute, which defines a human readable text alternative of aria-rowindex.
- {{domxref("Element.ariaRowSpan")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-rowspan` attribute, which defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
- {{domxref("Element.ariaSelected")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-selected` attribute, which indicates the current "selected" state of elements that have a selected state.
- {{domxref("Element.ariaSetSize")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-setsize` attribute, which defines the number of items in the current set of listitems or treeitems.
- {{domxref("Element.ariaSort")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-sort` attribute, which indicates if items in a table or grid are sorted in ascending or descending order.
- {{domxref("Element.ariaValueMax")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-valueMax` attribute, which defines the maximum allowed value for a range widget.
- {{domxref("Element.ariaValueMin")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-valueMin` attribute, which defines the minimum allowed value for a range widget.
- {{domxref("Element.ariaValueNow")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-valueNow` attribute, which defines the current value for a range widget.
- {{domxref("Element.ariaValueText")}}
  - : Is a {{domxref("DOMString")}} reflecting the `aria-valuetext` attribute, which defines the human readable text alternative of aria-valuenow for a range widget.

### Event handlers

- {{domxref("Element.onfullscreenchange")}}
  - : An event handler for the {{event("fullscreenchange")}} event, which is sent when the element enters or exits full-screen mode. This can be used to watch both for successful expected transitions, but also to watch for unexpected changes, such as when your app is running in the background.
- {{domxref("Element.onfullscreenerror")}}
  - : An event handler for the {{event("fullscreenerror")}} event, which is sent when an error occurs while attempting to change into full-screen mode.

## Methods

_`Element` inherits methods from its parents {{DOMxRef("Node")}}, and its own parent, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("EventTarget.addEventListener()")}}
  - : Registers an event handler to a specific event type on the element.
- {{DOMxRef("Element.after()")}}
  - : Inserts a set of {{domxref("Node")}} or {{domxref("DOMString")}} objects in the children list of the `Element`'s parent, just after the `Element`.
- {{DOMxRef("Element.attachShadow()")}}
  - : Attaches a shadow DOM tree to the specified element and returns a reference to its {{DOMxRef("ShadowRoot")}}.
- {{DOMxRef("Element.animate()")}} {{Experimental_Inline}}
  - : A shortcut method to create and run an animation on an element. Returns the created Animation object instance.
- {{DOMxRef("Element.append()")}}
  - : Inserts a set of {{domxref("Node")}} objects or {{domxref("DOMString")}} objects after the last child of the element.
- {{DOMxRef("Element.before()")}}
  - : Inserts a set of {{domxref("Node")}} or {{domxref("DOMString")}} objects in the children list of the `Element`'s parent, just before the `Element`.
- {{DOMxRef("Element.closest()")}}
  - : Returns the {{DOMxRef("Element")}} which is the closest ancestor of the current element (or the current element itself) which matches the selectors given in parameter.
- {{DOMxRef("Element.createShadowRoot()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Creates a [shadow DOM](/en-US/docs/Web/Web_Components/Using_shadow_DOM) on the element, turning it into a shadow host. Returns a {{DOMxRef("ShadowRoot")}}.
- {{DOMxRef("Element.computedStyleMap()")}} {{Experimental_Inline}}
  - : Returns a {{DOMxRef("StylePropertyMapReadOnly")}} interface which provides a read-only representation of a CSS declaration block that is an alternative to {{DOMxRef("CSSStyleDeclaration")}}.
- {{DOMxRef("EventTarget.dispatchEvent()")}}
  - : Dispatches an event to this node in the DOM and returns a boolean value that indicates whether no handler canceled the event.
- {{DOMxRef("Element.getAnimations()")}} {{Experimental_Inline}}
  - : Returns an array of Animation objects currently active on the element.
- {{DOMxRef("Element.getAttribute()")}}
  - : Retrieves the value of the named attribute from the current node and returns it as a string.
- {{DOMxRef("Element.getAttributeNames()")}}
  - : Returns an array of attribute names from the current element.
- {{DOMxRef("Element.getAttributeNode()")}}
  - : Retrieves the node representation of the named attribute from the current node and returns it as an {{DOMxRef("Attr")}}.
- {{DOMxRef("Element.getAttributeNodeNS()")}}
  - : Retrieves the node representation of the attribute with the specified name and namespace, from the current node and returns it as an {{DOMxRef("Attr")}}.
- {{DOMxRef("Element.getAttributeNS()")}}
  - : Retrieves the value of the attribute with the specified namespace and name from the current node and returns it as a string.
- {{DOMxRef("Element.getBoundingClientRect()")}}
  - : Returns the size of an element and its position relative to the viewport.
- {{domxref("Element.getBoxQuads()")}} {{experimental_inline}}
  - : Returns a list of {{domxref("DOMQuad")}} objects representing the CSS fragments of the node.
- {{DOMxRef("Element.getClientRects()")}}
  - : Returns a collection of rectangles that indicate the bounding rectangles for each line of text in a client.
- {{DOMxRef("Element.getElementsByClassName()")}}
  - : Returns a live {{DOMxRef("HTMLCollection")}} that contains all descendants of the current element that possess the list of classes given in the parameter.
- {{DOMxRef("Element.getElementsByTagName()")}}
  - : Returns a live {{DOMxRef("HTMLCollection")}} containing all descendant elements, of a particular tag name, from the current element.
- {{DOMxRef("Element.getElementsByTagNameNS()")}}
  - : Returns a live {{DOMxRef("HTMLCollection")}} containing all descendant elements, of a particular tag name and namespace, from the current element.
- {{DOMxRef("Element.hasAttribute()")}}
  - : Returns a boolean value indicating if the element has the specified attribute or not.
- {{DOMxRef("Element.hasAttributeNS()")}}
  - : Returns a boolean value indicating if the element has the specified attribute, in the specified namespace, or not.
- {{DOMxRef("Element.hasAttributes()")}}
  - : Returns a boolean value indicating if the element has one or more HTML attributes present.
- {{DOMxRef("Element.hasPointerCapture()")}}
  - : Indicates whether the element on which it is invoked has pointer capture for the pointer identified by the given pointer ID.
- {{DOMxRef("Element.insertAdjacentElement()")}}
  - : Inserts a given element node at a given position relative to the element it is invoked upon.
- {{DOMxRef("Element.insertAdjacentHTML()")}}
  - : Parses the text as HTML or XML and inserts the resulting nodes into the tree in the position given.
- {{DOMxRef("Element.insertAdjacentText()")}}
  - : Inserts a given text node at a given position relative to the element it is invoked upon.
- {{DOMxRef("Element.matches()")}}
  - : Returns a boolean value indicating whether or not the element would be selected by the specified selector string.
- {{DOMxRef("Element.prepend()")}}
  - : Inserts a set of {{domxref("Node")}} objects or {{domxref("DOMString")}} objects before the first child of the element.
- {{DOMxRef("Element.querySelector()")}}
  - : Returns the first {{DOMxRef("Node")}} which matches the specified selector string relative to the element.
- {{DOMxRef("Element.querySelectorAll()")}}
  - : Returns a {{DOMxRef("NodeList")}} of nodes which match the specified selector string relative to the element.
- {{DOMxRef("Element.releasePointerCapture()")}}
  - : Releases (stops) pointer capture that was previously set for a specific {{DOMxRef("PointerEvent","pointer event")}}.
- {{DOMxRef("Element.remove()")}}
  - : Removes the element from the children list of its parent.
- {{DOMxRef("Element.removeAttribute()")}}
  - : Removes the named attribute from the current node.
- {{DOMxRef("Element.removeAttributeNode()")}}
  - : Removes the node representation of the named attribute from the current node.
- {{DOMxRef("Element.removeAttributeNS()")}}
  - : Removes the attribute with the specified name and namespace, from the current node.
- {{DOMxRef("EventTarget.removeEventListener()")}}
  - : Removes an event listener from the element.
- {{DOMxRef("Element.replaceChildren()")}}
  - : Replaces the existing children of a {{domxref("Node")}} with a specified new set of children.
- {{DOMxRef("Element.replaceWith()")}}
  - : Replaces the element in the children list of its parent with a set of {{domxref("Node")}} or {{domxref("DOMString")}} objects.
- {{DOMxRef("Element.requestFullscreen()")}} {{Experimental_Inline}}
  - : Asynchronously asks the browser to make the element full-screen.
- {{DOMxRef("Element.requestPointerLock()")}} {{Experimental_Inline}}
  - : Allows to asynchronously ask for the pointer to be locked on the given element.
- {{domxref("Element.scroll()")}}
  - : Scrolls to a particular set of coordinates inside a given element.
- {{domxref("Element.scrollBy()")}}
  - : Scrolls an element by the given amount.
- {{DOMxRef("Element.scrollIntoView()")}} {{Experimental_Inline}}
  - : Scrolls the page until the element gets into the view.
- {{domxref("Element.scrollTo()")}}
  - : Scrolls to a particular set of coordinates inside a given element.
- {{DOMxRef("Element.setAttribute()")}}
  - : Sets the value of a named attribute of the current node.
- {{DOMxRef("Element.setAttributeNode()")}}
  - : Sets the node representation of the named attribute from the current node.
- {{DOMxRef("Element.setAttributeNodeNS()")}}
  - : Sets the node representation of the attribute with the specified name and namespace, from the current node.
- {{DOMxRef("Element.setAttributeNS()")}}
  - : Sets the value of the attribute with the specified name and namespace, from the current node.
- {{DOMxRef("Element.setCapture()")}} {{Non-standard_Inline}}{{Deprecated_Inline}}
  - : Sets up mouse event capture, redirecting all mouse events to this element.
- {{DOMxRef("Element.setPointerCapture()")}}
  - : Designates a specific element as the capture target of future [pointer events](/en-US/docs/Web/API/Pointer_events).
- {{DOMxRef("Element.toggleAttribute()")}}
  - : Toggles a boolean attribute, removing it if it is present and adding it if it is not present, on the specified element.

## Events

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- {{domxref("HTMLDialogElement/cancel_event", "cancel")}}

  - : Fires on a {{HTMLElement("dialog")}} when the user instructs the browser that they wish to dismiss the current open dialog. For example, the browser might fire this event when the user presses the <kbd>Esc</kbd> key or clicks a "Close dialog" button which is part of the browser's UI. Also available via the {{domxref("GlobalEventHandlers/oncancel", "oncancel")}} property.

- {{domxref("Element/error_event", "error")}}
  - : Fired when a resource failed to load, or can't be used. For example, if a script has an execution error or an image can't be found or is invalid.
    Also available via the {{domxref("GlobalEventHandlers/onerror", "onerror")}} property.
- {{domxref("Element/scroll_event", "scroll")}}
  - : Fired when the document view or an element has been scrolled.
    Also available via the {{DOMxRef("GlobalEventHandlers.onscroll", "onscroll")}} property.
- {{domxref("Element/select_event", "select")}}
  - : Fired when some text has been selected.
    Also available via the {{DOMxRef("GlobalEventHandlers.onselect", "onselect")}} property.
- {{domxref("Element/show_event", "show")}}
  - : Fired when a {{domxref("Element/contextmenu_event", "contextmenu")}} event was fired on/bubbled to an element that has a [`contextmenu`](/en-US/docs/Web/HTML/Global_attributes/contextmenu) attribute. {{deprecated_inline}}
    Also available via the {{DOMxRef("GlobalEventHandlers.onshow", "onshow")}} property.
- {{domxref("Element/wheel_event","wheel")}}
  - : Fired when the user rotates a wheel button on a pointing device (typically a mouse).
    Also available via the {{DOMxRef("GlobalEventHandlers.onwheel", "onwheel")}} property.
- {{domxref("Element/securitypolicyviolation_event","securitypolicyviolation")}}
  - : Fired when a [Content Security Policy](/en-US/docs/Web/HTTP/CSP) is violated.
    Also available via the global {{DOMxRef("GlobalEventHandlers.onsecuritypolicyviolation", "onsecuritypolicyviolation")}} property, which available on elements and the {{domxref("Document")}} and {{domxref("Window")}} objects.

### Clipboard events

- {{domxref("Element/copy_event", "copy")}}
  - : Fired when the user initiates a copy action through the browser's user interface.
    Also available via the {{domxref("HTMLElement/oncopy", "oncopy")}} property.
- {{domxref("Element/cut_event", "cut")}}
  - : Fired when the user initiates a cut action through the browser's user interface.
    Also available via the {{domxref("HTMLElement/oncut", "oncut")}} property.
- {{domxref("Element/paste_event", "paste")}}
  - : Fired when the user initiates a paste action through the browser's user interface.
    Also available via the {{domxref("HTMLElement/onpaste", "onpaste")}} property.

### Composition events

- {{domxref("Element/compositionend_event", "compositionend")}}
  - : Fired when a text composition system such as an {{glossary("input method editor")}} completes or cancels the current composition session.
- {{domxref("Element/compositionstart_event", "compositionstart")}}
  - : Fired when a text composition system such as an {{glossary("input method editor")}} starts a new composition session.
- {{domxref("Element/compositionupdate_event", "compositionupdate")}}
  - : Fired when a new character is received in the context of a text composition session controlled by a text composition system such as an {{glossary("input method editor")}}.

### Focus events

- {{domxref("Element/blur_event", "blur")}}
  - : Fired when an element has lost focus.
    Also available via the {{domxref("GlobalEventHandlers/onblur", "onblur")}} property.
- {{domxref("Element/focus_event", "focus")}}
  - : Fired when an element has gained focus.
    Also available via the {{domxref("GlobalEventHandlers/onfocus", "onfocus")}} property
- {{domxref("Element/focusin_event", "focusin")}}
  - : Fired when an element is about to gain focus.
- {{domxref("Element/focusout_event", "focusout")}}
  - : Fired when an element is about to lose focus.

### Fullscreen events

- {{domxref("Element/fullscreenchange_event", "fullscreenchange")}}
  - : Sent to an {{domxref("Element")}} when it transitions into or out of [full-screen](/en-US/docs/Web/API/Fullscreen_API/Guide) mode.
    Also available via the {{domxref("Element.onfullscreenchange", "onfullscreenchange")}} property.
- {{domxref("Element/fullscreenerror_event", "fullscreenerror")}}
  - : Sent to an `Element` if an error occurs while attempting to switch it into or out of [full-screen](/en-US/docs/Web/API/Fullscreen_API/Guide) mode.
    Also available via the {{domxref("Element.onfullscreenerror", "onfullscreenerror")}} property.

### Keyboard events

- `{{domxref("Element/keydown_event", "keydown")}}`
  - : Fired when a key is pressed.
    Also available via the {{domxref("GlobalEventHandlers/onkeydown", "onkeydown")}} property.
- `{{domxref("Element/keypress_event", "keypress")}}`
  - : Fired when a key that produces a character value is pressed down. {{deprecated_inline}}
    Also available via the {{domxref("GlobalEventHandlers/onkeypress", "onkeypress")}} property.
- `{{domxref("Element/keyup_event", "keyup")}}`
  - : Fired when a key is released.
    Also available via the {{domxref("GlobalEventHandlers/onkeyup", "onkeyup")}} property.

### Mouse events

- {{domxref("Element/auxclick_event", "auxclick")}}
  - : Fired when a non-primary pointing device button (e.g., any mouse button other than the left button) has been pressed and released on an element.
    Also available via the {{domxref("GlobalEventHandlers/onauxclick", "onauxclick")}} property.
- {{domxref("Element/click_event", "click")}}
  - : Fired when a pointing device button (e.g., a mouse's primary button) is pressed and released on a single element.
    Also available via the {{domxref("GlobalEventHandlers/onclick", "onclick")}} property.
- {{domxref("Element/contextmenu_event", "contextmenu")}}
  - : Fired when the user attempts to open a context menu.
    Also available via the {{domxref("GlobalEventHandlers/oncontextmenu", "oncontextmenu")}} property.
- {{domxref("Element/dblclick_event", "dblclick")}}
  - : Fired when a pointing device button (e.g., a mouse's primary button) is clicked twice on a single element.
    Also available via the {{domxref("GlobalEventHandlers/ondblclick", "ondblclick")}} property.
- {{domxref("Element/DOMActivate_event", "DOMActivate")}} {{Deprecated_Inline}}
  - : Occurs when an element is activated, for instance, through a mouse click or a keypress.
- {{domxref("Element/mousedown_event", "mousedown")}}
  - : Fired when a pointing device button is pressed on an element.
    Also available via the {{domxref("GlobalEventHandlers/onmousedown", "onmousedown")}} property.
- {{domxref("Element/mouseenter_event", "mouseenter")}}
  - : Fired when a pointing device (usually a mouse) is moved over the element that has the listener attached.
    Also available via the {{domxref("GlobalEventHandlers/onmouseenter", "onmouseenter")}} property.
- {{domxref("Element/mouseleave_event", "mouseleave")}}
  - : Fired when the pointer of a pointing device (usually a mouse) is moved out of an element that has the listener attached to it.
    Also available via the {{domxref("GlobalEventHandlers/onmouseleave", "onmouseleave")}} property.
- {{domxref("Element/mousemove_event", "mousemove")}}
  - : Fired when a pointing device (usually a mouse) is moved while over an element.
    Also available via the {{domxref("GlobalEventHandlers/onmousemove", "onmousemove")}} property.
- {{domxref("Element/mouseout_event", "mouseout")}}
  - : Fired when a pointing device (usually a mouse) is moved off the element to which the listener is attached or off one of its children.
    Also available via the {{domxref("GlobalEventHandlers/onmouseout", "onmouseout")}} property.
- {{domxref("Element/mouseover_event", "mouseover")}}
  - : Fired when a pointing device is moved onto the element to which the listener is attached or onto one of its children.
    Also available via the {{domxref("GlobalEventHandlers/onmouseover", "onmouseover")}} property.
- {{domxref("Element/mouseup_event", "mouseup")}}
  - : Fired when a pointing device button is released on an element.
    Also available via the {{domxref("GlobalEventHandlers/onmouseup", "onmouseup")}} property.
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}}
  - : Fired each time the amount of pressure changes on the trackpadtouchscreen.
- {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}}
  - : Fired after the mousedown event as soon as sufficient pressure has been applied to qualify as a "force click".
- {{domxref("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}}
  - : Fired before the {{domxref("Element/mousedown_event", "mousedown")}} event.
- {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}}
  - : Fired after the {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} event as soon as the pressure has been reduced sufficiently to end the "force click".

### Touch events

- {{domxref("Element/touchcancel_event", "touchcancel")}}
  - : Fired when one or more touch points have been disrupted in an implementation-specific manner (for example, too many touch points are created).
    Also available via the {{domxref("GlobalEventHandlers/ontouchcancel", "ontouchcancel")}} property.
- {{domxref("Element/touchend_event", "touchend")}}
  - : Fired when one or more touch points are removed from the touch surface.
    Also available via the {{domxref("GlobalEventHandlers/ontouchend", "ontouchend")}} property
- {{domxref("Element/touchmove_event", "touchmove")}}
  - : Fired when one or more touch points are moved along the touch surface.
    Also available via the {{domxref("GlobalEventHandlers/ontouchmove", "ontouchmove")}} property
- {{domxref("Element/touchstart_event", "touchstart")}}
  - : Fired when one or more touch points are placed on the touch surface.
    Also available via the {{domxref("GlobalEventHandlers/ontouchstart", "ontouchstart")}} property

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
