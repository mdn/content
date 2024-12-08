---
title: HTMLElement
slug: Web/API/HTMLElement
page-type: web-api-interface
browser-compat: api.HTMLElement
---

{{APIRef("HTML DOM")}}

The **`HTMLElement`** interface represents any [HTML](/en-US/docs/Web/HTML) element. Some elements directly implement this interface, while others implement it via an interface that inherits it.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent, {{DOMxRef("Element")}}._

- {{DOMxRef("HTMLElement.accessKey")}}
  - : A string representing the access key assigned to the element.
- {{DOMxRef("HTMLElement.accessKeyLabel")}} {{ReadOnlyInline}}
  - : Returns a string containing the element's assigned access key.
- {{DOMxRef("HTMLElement.anchorElement")}} {{ReadOnlyInline}}&nbsp;{{non-standard_inline}} {{experimental_inline}}
  - : Returns a reference to the element's anchor element, or `null` if it doesn't have one.
- {{DOMxRef("HTMLElement.attributeStyleMap")}} {{ReadOnlyInline}}
  - : A {{DOMxRef("StylePropertyMap")}} representing the declarations of the element's [`style`](/en-US/docs/Web/HTML/Global_attributes/style) attribute.
- {{domxref("HTMLElement.autocapitalize")}}
  - : A string that represents the element's capitalization behavior for user input. Valid values are: `none`, `off`, `on`, `characters`, `words`, `sentences`.
- {{domxref("HTMLElement.autofocus")}}
  - : A boolean value reflecting the [`autofocus`](/en-US/docs/Web/HTML/Element/select#autofocus) HTML global attribute, which indicates whether the control should be focused when the page loads, or when dialog or popover become shown if specified in an element inside {{htmlelement("dialog")}} elements or elements whose popover attribute is set.
- {{domxref("HTMLElement.autocorrect")}} {{experimental_inline}}
  - : A boolean that represents whether or not text input by a user should be automatically corrected.
    This reflects the [`autocorrect`](/en-US/docs/Web/HTML/Global_attributes/autocorrect) HTML global attribute.
- {{DOMxRef("HTMLElement.contentEditable")}}
  - : A string, where a value of `true` means the element is editable and a value of `false` means it isn't.
- {{DOMxRef("HTMLElement.dataset")}} {{ReadOnlyInline}}
  - : Returns a {{DOMxRef("DOMStringMap")}} with which script can read and write the element's [custom data attributes](/en-US/docs/Learn/HTML/Howto/Use_data_attributes) (`data-*`).
- {{DOMxRef("HTMLElement.dir")}}
  - : A string, reflecting the `dir` global attribute, representing the directionality of the element. Possible values are `"ltr"`, `"rtl"`, and `"auto"`.
- {{DOMxRef("HTMLElement.draggable")}}
  - : A boolean value indicating if the element can be dragged.
- {{DOMxRef("HTMLElement.editContext")}} {{experimental_inline}}
  - : Returns the {{DOMxRef("EditContext")}} associated with the element, or `null` if there isn't one.
- {{DOMxRef("HTMLElement.enterKeyHint")}}
  - : A string defining what action label (or icon) to present for the enter key on virtual keyboards.
- {{DOMxRef("HTMLElement.hidden")}}
  - : A string or boolean value reflecting the value of the element's [`hidden`](/en-US/docs/Web/HTML/Global_attributes/hidden) attribute.
- {{DOMxRef("HTMLElement.inert")}}
  - : A boolean value indicating whether the user agent must act as though the given node is absent for the purposes of user interaction events, in-page text searches ("find in page"), and text selection.
- {{DOMxRef("HTMLElement.innerText")}}
  - : Represents the rendered text content of a node and its descendants.
    As a getter, it approximates the text the user would get if they highlighted the contents of the element with the cursor and then copied it to the clipboard.
    As a setter, it replaces the content inside the selected element, converting any line breaks into {{HTMLElement("br")}} elements.
- {{DOMxRef("HTMLElement.inputMode")}}
  - : A string value reflecting the value of the element's [`inputmode`](/en-US/docs/Web/HTML/Global_attributes/inputmode) attribute.
- {{DOMxRef("HTMLElement.isContentEditable")}} {{ReadOnlyInline}}
  - : Returns a boolean value indicating whether or not the content of the element can be edited.
- {{DOMxRef("HTMLElement.lang")}}
  - : A string representing the language of an element's attributes, text, and element contents.
- {{DOMxRef("HTMLElement.nonce")}}
  - : Returns the cryptographic number used once that is used by Content Security Policy to determine whether a given fetch will be allowed to proceed.
- {{DOMxRef("HTMLElement.offsetHeight")}} {{ReadOnlyInline}}
  - : Returns a `double` containing the height of an element, relative to the layout.
- {{DOMxRef("HTMLElement.offsetLeft")}} {{ReadOnlyInline}}
  - : Returns a `double`, the distance from this element's left border to its `offsetParent`'s left border.
- {{DOMxRef("HTMLElement.offsetParent")}} {{ReadOnlyInline}}
  - : An {{DOMxRef("Element")}} that is the element from which all offset calculations are currently computed.
- {{DOMxRef("HTMLElement.offsetTop")}} {{ReadOnlyInline}}
  - : Returns a `double`, the distance from this element's top border to its `offsetParent`'s top border.
- {{DOMxRef("HTMLElement.offsetWidth")}} {{ReadOnlyInline}}
  - : Returns a `double` containing the width of an element, relative to the layout.
- {{DOMxRef("HTMLElement.outerText")}}
  - : Represents the rendered text content of a node and its descendants.
    As a getter, it is the same as {{DOMxRef("HTMLElement.innerText")}} (it represents the rendered text content of an element and its descendants).
    As a setter, it replaces the selected node and its contents with the given value, converting any line breaks into {{HTMLElement("br")}} elements.
- {{domxref("HTMLElement.popover")}}
  - : Gets and sets an element's popover state via JavaScript (`"auto"` or `"manual"`), and can be used for feature detection. Reflects the value of the [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) global HTML attribute.
- {{DOMxRef("HTMLElement.spellcheck")}}
  - : A boolean value that controls the [spell-checking](/en-US/docs/Web/HTML/Global_attributes/spellcheck) hint. It is available on all HTML elements, though it doesn't affect all of them.
- {{DOMxRef("HTMLElement.style")}}
  - : A {{DOMxRef("CSSStyleDeclaration")}} representing the declarations of the element's [`style`](/en-US/docs/Web/HTML/Global_attributes/style) attribute.
- {{DOMxRef("HTMLElement.tabIndex")}}
  - : A `long` representing the position of the element in the tabbing order.
- {{DOMxRef("HTMLElement.title")}}
  - : A string containing the text that appears in a popup box when mouse is over the element.
- {{DOMxRef("HTMLElement.translate")}}
  - : A boolean value representing the translation.
- {{DOMxRef("HTMLElement.virtualKeyboardPolicy")}} {{Experimental_Inline}}
  - : A string indicating the on-screen virtual keyboard behavior on devices such as tablets, mobile phones, or other devices where a hardware keyboard may not be available, if the element's content is editable (for example, it is an {{htmlelement("input")}} or {{htmlelement("textarea")}} element, or an element with the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute set).
- {{DOMxRef("HTMLElement.writingSuggestions")}}
  - : A string indicating if browser-provided writing suggestions should be enabled under the scope of the element or not.

## Instance methods

_Also inherits methods from its parent, {{DOMxRef("Element")}}._

- {{DOMxRef("HTMLElement.attachInternals()")}}
  - : Returns an {{DOMxRef("ElementInternals")}} object, and enables a custom element to participate in HTML forms.
- {{DOMxRef("HTMLElement.blur()")}}
  - : Removes keyboard focus from the currently focused element.
- {{DOMxRef("HTMLElement.click()")}}
  - : Sends a mouse click event to the element.
- {{DOMxRef("HTMLElement.focus()")}}
  - : Makes the element the current keyboard focus.
- {{DOMxRef("HTMLElement.hidePopover()")}}
  - : Hides a popover element by removing it from the {{glossary("top layer")}} and styling it with `display: none`.
- {{DOMxRef("HTMLElement.showPopover()")}}
  - : Shows a popover element by adding it to the {{glossary("top layer")}} and removing `display: none;` from its styles.
- {{DOMxRef("HTMLElement.togglePopover()")}}
  - : Toggles a popover element between the hidden and showing states.

## Events

Listen to these events using {{domxref("EventTarget.addEventListener", "addEventListener()")}} or by assigning an event listener to the `oneventname` property of this interface.

_Also, inherits events from its parent, {{DOMxRef("Element")}}._

- {{DOMxRef("HTMLElement/cancel_event", "cancel")}}
  - : Fired for {{HTMLElement("input")}} and {{HTMLElement("dialog")}} elements when the user cancels the currently open dialog by closing it with the <kbd>Esc</kbd> key.
- {{DOMxRef("HTMLElement/change_event", "change")}}
  - : Fired when the `value` of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element has been changed and committed by the user. Unlike the {{domxref("Element/input_event", "input")}} event, the `change` event is not necessarily fired for each alteration to an element's `value`.
- {{DOMxRef("HTMLElement/error_event", "error")}}
  - : Fired when a resource failed to load, or can't be used.
- {{DOMxRef("HTMLElement/load_event", "load")}}
  - : Fires for elements containing a resource when the resource has successfully loaded.

### Clipboard events

- {{DOMxRef("HTMLElement/copy_event", "copy")}}
  - : Fired when the user initiates a copy action through the browser's user interface.
- {{DOMxRef("HTMLElement/cut_event", "cut")}}
  - : Fired when the user initiates a cut action through the browser's user interface.
- {{DOMxRef("HTMLElement/paste_event", "paste")}}
  - : Fired when the user initiates a paste action through the browser's user interface.

### Drag & drop events

- {{DOMxRef("HTMLElement/drag_event", "drag")}}
  - : This event is fired when an element or text selection is being dragged.
- {{DOMxRef("HTMLElement/dragend_event", "dragend")}}
  - : This event is fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key).
- {{DOMxRef("HTMLElement/dragenter_event", "dragenter")}}
  - : This event is fired when a dragged element or text selection enters a valid drop target.
- {{DOMxRef("HTMLElement/dragleave_event", "dragleave")}}
  - : This event is fired when a dragged element or text selection leaves a valid drop target.
- {{DOMxRef("HTMLElement/dragover_event", "dragover")}}
  - : This event is fired continuously when an element or text selection is being dragged and the mouse pointer is over a valid drop target (every 50 ms WHEN mouse is not moving ELSE much faster between 5 ms (slow movement) and 1ms (fast movement) approximately. This firing pattern is different than {{domxref("Element/mouseover_event", "mouseover")}} ).
- {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}}
  - : This event is fired when the user starts dragging an element or text selection.
- {{DOMxRef("HTMLElement/drop_event", "drop")}}
  - : This event is fired when an element or text selection is dropped on a valid drop target.

### Toggle events

- {{DOMxRef("HTMLElement/beforetoggle_event", "beforetoggle")}}
  - : Fired when the element is a [popover](/en-US/docs/Web/API/Popover_API) or {{htmlelement("dialog")}}, before it is hidden or shown.
- {{DOMxRef("HTMLElement/toggle_event", "toggle")}}
  - : Fired when the element is a [popover](/en-US/docs/Web/API/Popover_API), {{htmlelement("dialog")}}, or {{htmlelement("details")}} element, just after it is hidden or shown.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Element")}}
