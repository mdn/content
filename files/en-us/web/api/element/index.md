---
title: Element
slug: Web/API/Element
page-type: web-api-interface
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

- {{DOMxRef("Element.assignedSlot")}} {{ReadOnlyInline}}
  - : Returns a {{DOMxRef("HTMLSlotElement")}} representing the {{htmlelement("slot")}} the node is inserted in.
- {{DOMxRef("Element.attributes")}} {{ReadOnlyInline}}
  - : Returns a {{DOMxRef("NamedNodeMap")}} object containing the assigned attributes of the corresponding HTML element.
- {{domxref("Element.childElementCount")}} {{ReadOnlyInline}}
  - : Returns the number of child elements of this element.
- {{domxref("Element.children")}} {{ReadOnlyInline}}
  - : Returns the child elements of this element.
- {{DOMxRef("Element.classList")}} {{ReadOnlyInline}}
  - : Returns a {{DOMxRef("DOMTokenList")}} containing the list of class attributes.
- {{DOMxRef("Element.className")}}
  - : A string representing the class of the element.
- {{DOMxRef("Element.clientHeight")}} {{ReadOnlyInline}}
  - : Returns a number representing the inner height of the element.
- {{DOMxRef("Element.clientLeft")}} {{ReadOnlyInline}}
  - : Returns a number representing the width of the left border of the element.
- {{DOMxRef("Element.clientTop")}} {{ReadOnlyInline}}
  - : Returns a number representing the width of the top border of the element.
- {{DOMxRef("Element.clientWidth")}} {{ReadOnlyInline}}
  - : Returns a number representing the inner width of the element.
- {{domxref("Element.firstElementChild")}} {{ReadOnlyInline}}
  - : Returns the first child element of this element.
- {{DOMxRef("Element.id")}}
  - : A string representing the id of the element.
- {{DOMxRef("Element.innerHTML")}}
  - : A string representing the markup of the element's content.
- {{domxref("Element.lastElementChild")}} {{ReadOnlyInline}}
  - : Returns the last child element of this element.
- {{DOMxRef("Element.localName")}} {{ReadOnlyInline}}
  - : A string representing the local part of the qualified name of the element.
- {{DOMxRef("Element.namespaceURI")}} {{ReadOnlyInline}}

  - : The namespace URI of the element, or `null` if it is no namespace.

    > **Note:** In Firefox 3.5 and earlier, HTML elements are in no namespace. In later versions, HTML elements are in the [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml/) namespace in both HTML and XML trees.

- {{DOMxRef("Element.nextElementSibling")}} {{ReadOnlyInline}}
  - : An {{DOMxRef("Element")}}, the element immediately following the given one in the tree, or `null` if there's no sibling node.
- {{DOMxRef("Element.outerHTML")}}
  - : A string representing the markup of the element including its content. When used as a setter, replaces the element with nodes parsed from the given string.
- {{DOMxRef("Element.openOrClosedShadowRoot")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Returns the shadow root that is hosted by the element, regardless if its open or closed. **Only available to [WebExtensions](/en-US/docs/Mozilla/Add-ons/WebExtensions).**
- {{DOMxRef("Element.part")}}
  - : Represents the part identifier(s) of the element (i.e. set using the `part` attribute), returned as a {{domxref("DOMTokenList")}}.
- {{DOMxRef("Element.prefix")}} {{ReadOnlyInline}}
  - : A string representing the namespace prefix of the element, or `null` if no prefix is specified.
- {{DOMxRef("Element.previousElementSibling")}} {{ReadOnlyInline}}
  - : An {{DOMxRef("Element")}}, the element immediately preceding the given one in the tree, or `null` if there is no sibling element.
- {{DOMxRef("Element.scrollHeight")}} {{ReadOnlyInline}}
  - : Returns a number representing the scroll view height of an element.
- {{DOMxRef("Element.scrollLeft")}}
  - : A number representing the left scroll offset of the element.
- {{DOMxRef("Element.scrollLeftMax")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Returns a number representing the maximum left scroll offset possible for the element.
- {{DOMxRef("Element.scrollTop")}}
  - : A number representing number of pixels the top of the element is scrolled vertically.
- {{DOMxRef("Element.scrollTopMax")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Returns a number representing the maximum top scroll offset possible for the element.
- {{DOMxRef("Element.scrollWidth")}} {{ReadOnlyInline}}
  - : Returns a number representing the scroll view width of the element.
- {{DOMxRef("Element.shadowRoot")}} {{ReadOnlyInline}}
  - : Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
- {{DOMxRef("Element.slot")}}
  - : Returns the name of the shadow DOM slot the element is inserted in.
- {{DOMxRef("Element.tagName")}} {{ReadOnlyInline}}
  - : Returns a string with the name of the tag for the given element.

### Properties included from ARIA

_The `Element` interface includes the following properties, defined on the `ARIAMixin` mixin._

- {{domxref("Element.ariaAtomic")}}
  - : A string reflecting the [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) attribute, which indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) attribute.
- {{domxref("Element.ariaAutoComplete")}}
  - : A string reflecting the [`aria-autocomplete`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) attribute, which indicates whether inputting text could trigger display of one or more predictions of the user's intended value for a combobox, searchbox, or textbox and specifies how predictions would be presented if they were made.
- {{domxref("Element.ariaBusy")}}
  - : A string reflecting the [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy) attribute, which indicates whether an element is being modified, as assistive technologies may want to wait until the modifications are complete before exposing them to the user.
- {{domxref("Element.ariaChecked")}}
  - : A string reflecting the [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) attribute, which indicates the current "checked" state of checkboxes, radio buttons, and other widgets that have a checked state.
- {{domxref("Element.ariaColCount")}}
  - : A string reflecting the [`aria-colcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) attribute, which defines the number of columns in a table, grid, or treegrid.
- {{domxref("Element.ariaColIndex")}}
  - : A string reflecting the [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) attribute, which defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
- {{domxref("Element.ariaColIndexText")}}
  - : A string reflecting the [`aria-colindextext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext) attribute, which defines a human readable text alternative of aria-colindex.
- {{domxref("Element.ariaColSpan")}}
  - : A string reflecting the [`aria-colspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) attribute, which defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
- {{domxref("Element.ariaCurrent")}}
  - : A string reflecting the [`aria-current`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) attribute, which indicates the element that represents the current item within a container or set of related elements.
- {{domxref("Element.ariaDescription")}}
  - : A string reflecting the [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description) attribute, which defines a string value that describes or annotates the current element.
- {{domxref("Element.ariaDisabled")}}
  - : A string reflecting the [`aria-disabled`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) attribute, which indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
- {{domxref("Element.ariaExpanded")}}
  - : A string reflecting the [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) attribute, which indicates whether a grouping element owned or controlled by this element is expanded or collapsed.
- {{domxref("Element.ariaHasPopup")}}
  - : A string reflecting the [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) attribute, which indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
- {{domxref("Element.ariaHidden")}}
  - : A string reflecting the [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) attribute, which indicates whether the element is exposed to an accessibility API.
- {{domxref("Element.ariaKeyShortcuts")}}
  - : A string reflecting the [`aria-keyshortcuts`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts) attribute, which indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
- {{domxref("Element.ariaLabel")}}
  - : A string reflecting the [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attribute, which defines a string value that labels the current element.
- {{domxref("Element.ariaLevel")}}
  - : A string reflecting the [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level) attribute, which defines the hierarchical level of an element within a structure.
- {{domxref("Element.ariaLive")}}
  - : A string reflecting the [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) attribute, which indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
- {{domxref("Element.ariaModal")}}
  - : A string reflecting the [`aria-modal`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal) attribute, which indicates whether an element is modal when displayed.
- {{domxref("Element.ariaMultiline")}}
  - : A string reflecting the [`aria-multiline`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) attribute, which indicates whether a text box accepts multiple lines of input or only a single line.
- {{domxref("Element.ariaMultiSelectable")}}
  - : A string reflecting the [`aria-multiselectable`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) attribute, which indicates that the user may select more than one item from the current selectable descendants.
- {{domxref("Element.ariaOrientation")}}
  - : A string reflecting the [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) attribute, which indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
- {{domxref("Element.ariaPlaceholder")}}
  - : A string reflecting the [`aria-placeholder`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) attribute, which defines a short hint intended to aid the user with data entry when the control has no value.
- {{domxref("Element.ariaPosInSet")}}
  - : A string reflecting the [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) attribute, which defines an element's number or position in the current set of listitems or treeitems.
- {{domxref("Element.ariaPressed")}}
  - : A string reflecting the [`aria-pressed`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) attribute, which indicates the current "pressed" state of toggle buttons.
- {{domxref("Element.ariaReadOnly")}}
  - : A string reflecting the [`aria-readonly`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) attribute, which indicates that the element is not editable, but is otherwise operable.
- {{domxref("Element.ariaRelevant")}} {{Non-standard_Inline}}
  - : A string reflecting the [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) attribute, which indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. This is used to describe what changes in an `aria-live` region are relevant and should be announced.
- {{domxref("Element.ariaRequired")}}
  - : A string reflecting the [`aria-required`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required) attribute, which indicates that user input is required on the element before a form may be submitted.
- {{domxref("Element.ariaRoleDescription")}}
  - : A string reflecting the [`aria-roledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) attribute, which defines a human-readable, author-localized description for the role of an element.
- {{domxref("Element.ariaRowCount")}}
  - : A string reflecting the [`aria-rowcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) attribute, which defines the total number of rows in a table, grid, or treegrid.
- {{domxref("Element.ariaRowIndex")}}
  - : A string reflecting the [`aria-rowindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) attribute, which defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
- {{domxref("Element.ariaRowIndexText")}}
  - : A string reflecting the [`aria-rowindextext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext) attribute, which defines a human readable text alternative of aria-rowindex.
- {{domxref("Element.ariaRowSpan")}}
  - : A string reflecting the [`aria-rowspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) attribute, which defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
- {{domxref("Element.ariaSelected")}}
  - : A string reflecting the [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) attribute, which indicates the current "selected" state of elements that have a selected state.
- {{domxref("Element.ariaSetSize")}}
  - : A string reflecting the [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) attribute, which defines the number of items in the current set of listitems or treeitems.
- {{domxref("Element.ariaSort")}}
  - : A string reflecting the [`aria-sort`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort) attribute, which indicates if items in a table or grid are sorted in ascending or descending order.
- {{domxref("Element.ariaValueMax")}}
  - : A string reflecting the [`aria-valueMax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) attribute, which defines the maximum allowed value for a range widget.
- {{domxref("Element.ariaValueMin")}}
  - : A string reflecting the [`aria-valueMin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) attribute, which defines the minimum allowed value for a range widget.
- {{domxref("Element.ariaValueNow")}}
  - : A string reflecting the [`aria-valueNow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) attribute, which defines the current value for a range widget.
- {{domxref("Element.ariaValueText")}}
  - : A string reflecting the [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) attribute, which defines the human readable text alternative of aria-valuenow for a range widget.

## Methods

_`Element` inherits methods from its parents {{DOMxRef("Node")}}, and its own parent, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("EventTarget.addEventListener()")}}
  - : Registers an event handler to a specific event type on the element.
- {{DOMxRef("Element.after()")}}
  - : Inserts a set of {{domxref("Node")}} objects or strings in the children list of the `Element`'s parent, just after the `Element`.
- {{DOMxRef("Element.attachShadow()")}}
  - : Attaches a shadow DOM tree to the specified element and returns a reference to its {{DOMxRef("ShadowRoot")}}.
- {{DOMxRef("Element.animate()")}}
  - : A shortcut method to create and run an animation on an element. Returns the created Animation object instance.
- {{DOMxRef("Element.append()")}}
  - : Inserts a set of {{domxref("Node")}} objects or strings after the last child of the element.
- {{DOMxRef("Element.before()")}}
  - : Inserts a set of {{domxref("Node")}} objects or strings in the children list of the `Element`'s parent, just before the `Element`.
- {{DOMxRef("Element.closest()")}}
  - : Returns the {{DOMxRef("Element")}} which is the closest ancestor of the current element (or the current element itself) which matches the selectors given in parameter.
- {{DOMxRef("Element.createShadowRoot()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Creates a [shadow DOM](/en-US/docs/Web/Web_Components/Using_shadow_DOM) on the element, turning it into a shadow host. Returns a {{DOMxRef("ShadowRoot")}}.
- {{DOMxRef("Element.computedStyleMap()")}} {{Experimental_Inline}}
  - : Returns a {{DOMxRef("StylePropertyMapReadOnly")}} interface which provides a read-only representation of a CSS declaration block that is an alternative to {{DOMxRef("CSSStyleDeclaration")}}.
- {{DOMxRef("EventTarget.dispatchEvent()")}}
  - : Dispatches an event to this node in the DOM and returns a boolean value that indicates whether no handler canceled the event.
- {{DOMxRef("Element.getAnimations()")}}
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
- {{domxref("Element.getBoxQuads()")}} {{Experimental_Inline}}
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
  - : Inserts a set of {{domxref("Node")}} objects or strings before the first child of the element.
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
  - : Replaces the element in the children list of its parent with a set of {{domxref("Node")}} objects or strings.
- {{DOMxRef("Element.requestFullscreen()")}}
  - : Asynchronously asks the browser to make the element fullscreen.
- {{DOMxRef("Element.requestPointerLock()")}}
  - : Allows to asynchronously ask for the pointer to be locked on the given element.
- {{domxref("Element.scroll()")}}
  - : Scrolls to a particular set of coordinates inside a given element.
- {{domxref("Element.scrollBy()")}}
  - : Scrolls an element by the given amount.
- {{DOMxRef("Element.scrollIntoView()")}}
  - : Scrolls the page until the element gets into the view.
- {{DOMxRef("Element.scrollIntoViewIfNeeded()")}} {{Non-standard_Inline}}
  - : Scrolls the current element into the visible area of the browser window if it's not already within the visible area of the browser window. **Use the standard {{DOMxRef("Element.scrollIntoView()")}} instead.**
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
- {{DOMxRef("Element.setCapture()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Sets up mouse event capture, redirecting all mouse events to this element.
- {{DOMxRef("Element.setHTML()")}} {{Experimental_Inline}}
  - : Parses and [sanitizes](/en-US/docs/Web/API/HTML_Sanitizer_API) a string of HTML and inserts into the DOM as a subtree of the element.
- {{DOMxRef("Element.setPointerCapture()")}}
  - : Designates a specific element as the capture target of future [pointer events](/en-US/docs/Web/API/Pointer_events).
- {{DOMxRef("Element.toggleAttribute()")}}
  - : Toggles a boolean attribute, removing it if it is present and adding it if it is not present, on the specified element.

## Events

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- {{domxref("HTMLDialogElement/cancel_event", "cancel")}}

  - : Fires on a {{HTMLElement("dialog")}} when the user instructs the browser that they wish to dismiss the current open dialog. For example, the browser might fire this event when the user presses the <kbd>Esc</kbd> key or clicks a "Close dialog" button which is part of the browser's UI.

- {{domxref("Element/error_event", "error")}}
  - : Fired when a resource failed to load, or can't be used. For example, if a script has an execution error or an image can't be found or is invalid.
- {{domxref("Element/scroll_event", "scroll")}}
  - : Fired when the document view or an element has been scrolled.
- {{domxref("Element/securitypolicyviolation_event","securitypolicyviolation")}} {{Deprecated_Inline}}
  - : Fired when a [Content Security Policy](/en-US/docs/Web/HTTP/CSP) is violated.

- {{domxref("Element/select_event", "select")}}
  - : Fired when some text has been selected.
- {{domxref("Element/show_event", "show")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired when a {{domxref("Element/contextmenu_event", "contextmenu")}} event was fired on/bubbled to an element that has a [`contextmenu`](/en-US/docs/Web/HTML/Global_attributes/contextmenu) attribute.
- {{domxref("Element/wheel_event","wheel")}}
  - : Fired when the user rotates a wheel button on a pointing device (typically a mouse).

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
- {{domxref("Element/focus_event", "focus")}}
  - : Fired when an element has gained focus.
- {{domxref("Element/focusin_event", "focusin")}}
  - : Fired when an element is about to gain focus.
- {{domxref("Element/focusout_event", "focusout")}}
  - : Fired when an element is about to lose focus.

### Fullscreen events

- {{domxref("Element/fullscreenchange_event", "fullscreenchange")}}
  - : Sent to an {{domxref("Element")}} when it transitions into or out of [fullscreen](/en-US/docs/Web/API/Fullscreen_API/Guide) mode.
- {{domxref("Element/fullscreenerror_event", "fullscreenerror")}}
  - : Sent to an `Element` if an error occurs while attempting to switch it into or out of [fullscreen](/en-US/docs/Web/API/Fullscreen_API/Guide) mode.

### Keyboard events

- {{domxref("Element/keydown_event", "keydown")}}
  - : Fired when a key is pressed.
- {{domxref("Element/keypress_event", "keypress")}}  {{Deprecated_Inline}}
  - : Fired when a key that produces a character value is pressed down.
- {{domxref("Element/keyup_event", "keyup")}}
  - : Fired when a key is released.

### Mouse events

- {{domxref("Element/auxclick_event", "auxclick")}}
  - : Fired when a non-primary pointing device button (e.g., any mouse button other than the left button) has been pressed and released on an element.
- {{domxref("Element/click_event", "click")}}
  - : Fired when a pointing device button (e.g., a mouse's primary button) is pressed and released on a single element.
- {{domxref("Element/contextmenu_event", "contextmenu")}}
  - : Fired when the user attempts to open a context menu.
- {{domxref("Element/dblclick_event", "dblclick")}}
  - : Fired when a pointing device button (e.g., a mouse's primary button) is clicked twice on a single element.
- {{domxref("Element/DOMActivate_event", "DOMActivate")}} {{Deprecated_Inline}}
  - : Occurs when an element is activated, for instance, through a mouse click or a keypress.
- {{domxref("Element/mousedown_event", "mousedown")}}
  - : Fired when a pointing device button is pressed on an element.
- {{domxref("Element/mouseenter_event", "mouseenter")}}
  - : Fired when a pointing device (usually a mouse) is moved over the element that has the listener attached.
- {{domxref("Element/mouseleave_event", "mouseleave")}}
  - : Fired when the pointer of a pointing device (usually a mouse) is moved out of an element that has the listener attached to it.
- {{domxref("Element/mousemove_event", "mousemove")}}
  - : Fired when a pointing device (usually a mouse) is moved while over an element.
- {{domxref("Element/mouseout_event", "mouseout")}}
  - : Fired when a pointing device (usually a mouse) is moved off the element to which the listener is attached or off one of its children.
- {{domxref("Element/mouseover_event", "mouseover")}}
  - : Fired when a pointing device is moved onto the element to which the listener is attached or onto one of its children.
- {{domxref("Element/mouseup_event", "mouseup")}}
  - : Fired when a pointing device button is released on an element.
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}} {{Non-standard_Inline}}
  - : Fired each time the amount of pressure changes on the trackpadtouchscreen.
- {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} {{Non-standard_Inline}}
  - : Fired after the mousedown event as soon as sufficient pressure has been applied to qualify as a "force click".
- {{domxref("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}} {{Non-standard_Inline}}
  - : Fired before the {{domxref("Element/mousedown_event", "mousedown")}} event.
- {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}} {{Non-standard_Inline}}
  - : Fired after the {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} event as soon as the pressure has been reduced sufficiently to end the "force click".

### Touch events

- {{domxref("Element/touchcancel_event", "touchcancel")}}
  - : Fired when one or more touch points have been disrupted in an implementation-specific manner (for example, too many touch points are created).
- {{domxref("Element/touchend_event", "touchend")}}
  - : Fired when one or more touch points are removed from the touch surface.
- {{domxref("Element/touchmove_event", "touchmove")}}
  - : Fired when one or more touch points are moved along the touch surface.
- {{domxref("Element/touchstart_event", "touchstart")}}
  - : Fired when one or more touch points are placed on the touch surface.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
