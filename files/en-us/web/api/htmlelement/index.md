---
title: HTMLElement
slug: Web/API/HTMLElement
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - HTMLElement
  - Interface
  - NeedsNewLayout
  - Reference
browser-compat: api.HTMLElement
---
{{APIRef("HTML DOM")}}

The **`HTMLElement`** interface represents any [HTML](/en-US/docs/Web/HTML) element. Some elements directly implement this interface, while others implement it via an interface that inherits it.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{DOMxRef("Element")}}._

- {{DOMxRef("HTMLElement.accessKey")}}
  - : A string representing the access key assigned to the element.
- {{DOMxRef("HTMLElement.accessKeyLabel")}} {{ReadOnlyInline}}
  - : Returns a string containing the element's assigned access key.
- {{DOMxRef("HTMLElement.attributeStyleMap")}} {{ReadOnlyInline}}
  - : A {{DOMxRef("StylePropertyMap")}} representing the declarations of the element's {{htmlattrxref("style")}} attribute.
- {{DOMxRef("HTMLElement.contentEditable")}}
  - : A string, where a value of `true` means the element is editable and a value of `false` means it isn't.
- {{DOMxRef("HTMLElement.isContentEditable")}} {{ReadOnlyInline}}
  - : Returns a boolean value indicating whether or not the content of the element can be edited.
- {{DOMxRef("HTMLElement.contextMenu")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A {{DOMxRef("HTMLMenuElement")}} representing the contextual menu associated with the element. It may be `null`.
- {{DOMxRef("HTMLElement.dataset")}} {{ReadOnlyInline}}
  - : Returns a {{DOMxRef("DOMStringMap")}} with which script can read and write the element's [custom data attributes](/en-US/docs/Learn/HTML/Howto/Use_data_attributes) (`data-*`) .
- {{DOMxRef("HTMLElement.dir")}}
  - : A string, reflecting the `dir` global attribute, representing the directionality of the element. Possible values are `"ltr"`, `"rtl"`, and `"auto"`.
- {{DOMxRef("HTMLElement.draggable")}}
  - : A boolean value indicating if the element can be dragged.
- {{DOMxRef("HTMLElement.enterkeyhint")}}
  - : A string defining what action label (or icon) to present for the enter key on virtual keyboards.
- {{DOMxRef("HTMLElement.hidden")}}
  - : A boolean value indicating if the element is hidden or not.
- {{DOMxRef("HTMLElement.inert")}}
  - : A boolean value indicating whether the user agent must act as though the given node is absent for the purposes of user interaction events, in-page text searches ("find in page"), and text selection.
- {{DOMxRef("HTMLElement.innerText")}}
  - : Represents the rendered text content of a node and its descendants.
    As a getter, it approximates the text the user would get if they highlighted the contents of the element with the cursor and then copied it to the clipboard.
    As a setter, it replaces the content inside the selected element, converting any line breaks into {{HTMLElement("br")}} elements.
- {{DOMxRef("HTMLElement.lang")}}
  - : A string representing the language of an element's attributes, text, and element contents.
- {{DOMxRef("HTMLElement.noModule")}}
  - : A boolean value indicating whether an import script can be executed in user agents that support module scripts.
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
- {{DOMxRef("HTMLElement.properties")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns a {{DOMxRef("HTMLPropertiesCollection")}}…
- {{DOMxRef("HTMLElement.spellcheck")}}
  - : A boolean value that controls [spell-checking](/en-US/docs/Web/HTML/Global_attributes/spellcheck). It is present on all HTML elements, though it doesn't have an effect on all of them.
- {{DOMxRef("HTMLElement.style")}}
  - : A {{DOMxRef("CSSStyleDeclaration")}} representing the declarations of the element's {{htmlattrxref("style")}} attribute.
- {{DOMxRef("HTMLElement.tabIndex")}}
  - : A `long` representing the position of the element in the tabbing order.
- {{DOMxRef("HTMLElement.title")}}
  - : A string containing the text that appears in a popup box when mouse is over the element.
- {{DOMxRef("HTMLElement.translate")}}
  - : A boolean value representing the translation.

## Methods

_Inherits methods from its parent, {{DOMxRef("Element")}}._

- {{DOMxRef("HTMLElement.attachInternals()")}}
  - : Returns an {{DOMxRef("ElementInternals")}} object, and enables a custom element to participate in HTML forms.
- {{DOMxRef("HTMLElement.blur()")}}
  - : Removes keyboard focus from the currently focused element.
- {{DOMxRef("HTMLElement.click()")}}
  - : Sends a mouse click event to the element.
- {{DOMxRef("HTMLElement.focus()")}}
  - : Makes the element the current keyboard focus.

## Events

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- {{DOMxRef("HTMLElement.copy_event", "copy")}}
  - : Fired when the user initiates a copy action through the browser's user interface.
- {{DOMxRef("HTMLElement.cut_event", "cut")}}
  - : Fired when the user initiates a cut action through the browser's user interface.
- {{DOMxRef("HTMLElement.paste_event", "paste")}}
  - : Fired when the user initiates a paste action through the browser's user interface.
- {{domxref("HTMLInputElement/invalid_event", "invalid")}}
  - : Fired when an element does not satisfy its constraints during constraint validation.

### Animation events

- {{domxref("HTMLElement/animationcancel_event", "animationcancel")}}
  - : Fired when an animation unexpectedly aborts.
- {{domxref("HTMLElement/animationend_event", "animationend")}}
  - : Fired when an animation has completed normally.
- {{domxref("HTMLElement/animationiteration_event", "animationiteration")}}
  - : Fired when an animation iteration has completed.
- {{domxref("HTMLElement/animationstart_event", "animationstart")}}
  - : Fired when an animation starts.

### Input events

- {{domxref("HTMLElement/beforeinput_event", "beforeinput")}}
  - : Fired when the value of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element is about to be modified.
- {{domxref("HTMLElement/input_event", "input")}}
  - : Fired when the `value` of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element has been changed.
- {{domxref("HTMLElement/change_event", "change")}}
  - : Fired when the `value` of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element has been changed and committed by the user. Unlike the {{domxref("HTMLElement/input_event", "input")}} event, the `change` event is not necessarily fired for each alteration to an element's `value`.

### Pointer events

- {{domxref("HTMLElement/gotpointercapture_event", "gotpointercapture")}}
  - : Fired when an element captures a pointer using {{domxref("Element/setPointerCapture", "setPointerCapture()")}}.
- {{domxref("HTMLElement/lostpointercapture_event", "lostpointercapture")}}
  - : Fired when a [captured pointer](/en-US/docs/Web/API/Pointer_events#pointer_capture) is released.
- {{domxref("HTMLElement/pointercancel_event", "pointercancel")}}
  - : Fired when a pointer event is canceled.
- {{domxref("HTMLElement/pointerdown_event", "pointerdown")}}
  - : Fired when a pointer becomes active.
- {{domxref("HTMLElement/pointerenter_event", "pointerenter")}}
  - : Fired when a pointer is moved into the hit test boundaries of an element or one of its descendants.
- {{domxref("HTMLElement/pointerleave_event", "pointerleave")}}
  - : Fired when a pointer is moved out of the hit test boundaries of an element.
- {{domxref("HTMLElement/pointermove_event", "pointermove")}}
  - : Fired when a pointer changes coordinates.
- {{domxref("HTMLElement/pointerout_event", "pointerout")}}
  - : Fired when a pointer is moved out of the _hit test_ boundaries of an element (among other reasons).
- {{domxref("HTMLElement/pointerover_event", "pointerover")}}
  - : Fired when a pointer is moved into an element's hit test boundaries.
- {{domxref("HTMLElement/pointerup_event", "pointerup")}}
  - : Fired when a pointer is no longer active.

### Transition events

- {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) is canceled.
- {{domxref("HTMLElement/transitionend_event", "transitionend")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) has completed.
- {{domxref("HTMLElement/transitionrun_event", "transitionrun")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) is first created.
- {{domxref("HTMLElement/transitionstart_event", "transitionstart")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) has actually started.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Element")}}
