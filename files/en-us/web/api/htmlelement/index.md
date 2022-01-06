---
title: HTMLElement
slug: Web/API/HTMLElement
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

_Inherits properties from its parent, {{DOMxRef("Element")}}, and implements those from {{DOMxRef("DocumentAndElementEventHandlers")}}, {{DOMxRef("GlobalEventHandlers")}}, and {{DOMxRef("TouchEventHandlers")}}._

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
- {{DOMxRef("HTMLElement.contextMenu")}} {{Deprecated_Inline}}
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
  - : Represents the "rendered" text content of a node and its descendants. As a getter, it approximates the text the user would get if they highlighted the contents of the element with the cursor and then copied it to the clipboard.
- {{DOMxRef("HTMLElement.itemScope")}} {{Experimental_Inline}}
  - : A boolean value representing the item scope.
- {{DOMxRef("HTMLElement.itemType")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : Returns a {{DOMxRef("DOMTokenList")}}…
- {{DOMxRef("HTMLElement.itemId")}} {{Experimental_Inline}}
  - : A string representing the item ID.
- {{DOMxRef("HTMLElement.itemRef")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : Returns a {{DOMxRef("DOMTokenList")}}…
- {{DOMxRef("HTMLElement.itemProp")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : Returns a {{DOMxRef("DOMTokenList")}}…
- {{DOMxRef("HTMLElement.itemValue")}} {{Experimental_Inline}}
  - : Returns a {{JSxRef("Object")}} representing the item value.
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
  - : Returns a {{DOMxRef("Element")}} that is the element from which all offset calculations are currently computed.
- {{DOMxRef("HTMLElement.offsetTop")}} {{ReadOnlyInline}}
  - : Returns a `double`, the distance from this element's top border to its `offsetParent`'s top border.
- {{DOMxRef("HTMLElement.offsetWidth")}} {{ReadOnlyInline}}
  - : Returns a `double` containing the width of an element, relative to the layout.
- {{DOMxRef("HTMLElement.properties")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : Returns a {{DOMxRef("HTMLPropertiesCollection")}}…
- {{DOMxRef("HTMLElement.spellcheck")}}
  - : A boolean value that controls [spell-checking](/en-US/docs/Web/HTML/Global_attributes/spellcheck). It is present on all HTML elements, though it doesn't have an effect on all of them.
- {{DOMxRef("HTMLElement.style")}}
  - : A {{DOMxRef("CSSStyleDeclaration")}} representing the declarations of the element's {{htmlattrxref("style")}} attribute.
- {{DOMxRef("HTMLElement.tabIndex")}}
  - : A `long` representing the position of the element in the tabbing order.
- {{DOMxRef("HTMLElement.title")}}
  - : A string containing the text that appears in a popup box when mouse is over the element.
- {{DOMxRef("HTMLElement.translate")}} {{Experimental_Inline}}
  - : A boolean value representing the translation.

### Event handlers

Most event handler properties, of the form `onXYZ`, are defined on the {{DOMxRef("DocumentAndElementEventHandlers")}}, {{DOMxRef("GlobalEventHandlers")}} or {{DOMxRef("TouchEventHandlers")}} interfaces and implemented by `HTMLElement`. In addition, the following handlers are specific to `HTMLElement`.

- {{DOMxRef("HTMLElement.oncopy")}} {{Non-standard_Inline}}
  - : Returns the event handling code for the `copy` event ({{bug("280959")}}).
- {{DOMxRef("HTMLElement.oncut")}} {{Non-standard_Inline}}
  - : Returns the event handling code for the `cut` event ({{bug("280959")}}).
- {{DOMxRef("HTMLElement.onpaste")}} {{Non-standard_Inline}}
  - : Returns the event handling code for the `paste` event ({{bug("280959")}}).
- {{DOMxRef("TouchEventHandlers.ontouchstart")}} {{Non-standard_Inline}}
  - : Returns the event handling code for the {{domxref("Element/touchstart_event", "touchstart")}} event.
- {{DOMxRef("TouchEventHandlers.ontouchend")}} {{Non-standard_Inline}}
  - : Returns the event handling code for the {{domxref("Element/touchend_event", "touchend")}} event.
- {{DOMxRef("TouchEventHandlers.ontouchmove")}} {{Non-standard_Inline}}
  - : Returns the event handling code for the {{domxref("Element/touchmove_event", "touchmove")}} event.
- {{DOMxRef("TouchEventHandlers.ontouchenter")}} {{Non-standard_Inline}}
  - : Returns the event handling code for the {{event("touchenter")}} event.
- {{DOMxRef("TouchEventHandlers.ontouchleave")}} {{Non-standard_Inline}}
  - : Returns the event handling code for the {{event("touchleave")}} event.
- {{DOMxRef("TouchEventHandlers.ontouchcancel")}} {{Non-standard_Inline}}
  - : Returns the event handling code for the {{domxref("Element/touchcancel_event", "touchcancel")}} event.

## Methods

_Inherits methods from its parent, {{DOMxRef("Element")}}, and implements those from {{DOMxRef("DocumentAndElementEventHandlers")}}, {{DOMxRef("GlobalEventHandlers")}}, and {{DOMxRef("TouchEventHandlers")}}._

- {{DOMxRef("HTMLElement.attachInternals()")}} {{Experimental_Inline}}
  - : Returns an {{DOMxRef("ElementInternals")}} object, and enables a custom element to participate in HTML forms.
- {{DOMxRef("HTMLElement.blur()")}}
  - : Removes keyboard focus from the currently focused element.
- {{DOMxRef("HTMLElement.click()")}}
  - : Sends a mouse click event to the element.
- {{DOMxRef("HTMLElement.focus()")}}
  - : Makes the element the current keyboard focus.

## Events

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- {{domxref("HTMLInputElement/invalid_event", "invalid")}}
  - : Fired when an element does not satisfy its constraints during constraint validation.
    Also available via the {{domxref("GlobalEventHandlers/oninvalid", "oninvalid")}} property.

### Animation events

- {{domxref("HTMLElement/animationcancel_event", "animationcancel")}}
  - : Fired when an animation unexpectedly aborts.
    Also available via the {{domxref("GlobalEventHandlers/onanimationcancel", "onanimationcancel")}} property.
- {{domxref("HTMLElement/animationend_event", "animationend")}}
  - : Fired when an animation has completed normally.
    Also available via the {{domxref("GlobalEventHandlers/onanimationend", "onanimationend")}} property.
- {{domxref("HTMLElement/animationiteration_event", "animationiteration")}}
  - : Fired when an animation iteration has completed.
    Also available via the {{domxref("GlobalEventHandlers/onanimationiteration", "onanimationiteration")}} property.
- {{domxref("HTMLElement/animationstart_event", "animationstart")}}
  - : Fired when an animation starts.
    Also available via the {{domxref("GlobalEventHandlers/onanimationstart", "onanimationstart")}} property.

### Input events

- {{domxref("HTMLElement/beforeinput_event", "beforeinput")}}
  - : Fired when the value of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element is about to be modified.
- {{domxref("HTMLElement/input_event", "input")}}
  - : Fired when the `value` of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element has been changed.
    Also available via the {{domxref("GlobalEventHandlers/oninput", "oninput")}} property.
- {{domxref("HTMLElement/change_event", "change")}}
  - : Fired when the `value` of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element has been changed and committed by the user. Unlike the {{domxref("HTMLElement/input_event", "input")}} event, the `change` event is not necessarily fired for each alteration to an element's `value`.

### Pointer events

- {{domxref("HTMLElement/gotpointercapture_event", "gotpointercapture")}}
  - : Fired when an element captures a pointer using {{domxref("Element/setPointerCapture", "setPointerCapture()")}}.
    Also available via the {{domxref("GlobalEventHandlers/ongotpointercapture", "ongotpointercapture")}} property.
- {{domxref("HTMLElement/lostpointercapture_event", "lostpointercapture")}}
  - : Fired when a [captured pointer](/en-US/docs/Web/API/Pointer_events#pointer_capture) is released.
    Also available via the {{domxref("GlobalEventHandlers/onlostpointercapture", "onlostpointercapture")}} property.
- {{domxref("HTMLElement/pointercancel_event", "pointercancel")}}
  - : Fired when a pointer event is canceled.
    Also available via the {{domxref("GlobalEventHandlers/onpointercancel", "onpointercancel")}} property.
- {{domxref("HTMLElement/pointerdown_event", "pointerdown")}}
  - : Fired when a pointer becomes active.
    Also available via the {{domxref("GlobalEventHandlers/onpointerdown", "onpointerdown")}} property.
- {{domxref("HTMLElement/pointerenter_event", "pointerenter")}}
  - : Fired when a pointer is moved into the hit test boundaries of an element or one of its descendants.
    Also available via the {{domxref("GlobalEventHandlers/onpointerenter", "onpointerenter")}} property.
- {{domxref("HTMLElement/pointerleave_event", "pointerleave")}}
  - : Fired when a pointer is moved out of the hit test boundaries of an element.
    Also available via the {{domxref("GlobalEventHandlers/onpointerleave", "onpointerleave")}} property.
- {{domxref("HTMLElement/pointermove_event", "pointermove")}}
  - : Fired when a pointer changes coordinates.
    Also available via the {{domxref("GlobalEventHandlers/onpointermove", "onpointermove")}} property.
- {{domxref("HTMLElement/pointerout_event", "pointerout")}}
  - : Fired when a pointer is moved out of the _hit test_ boundaries of an element (among other reasons).
    Also available via the {{domxref("GlobalEventHandlers/onpointerout", "onpointerout")}} property.
- {{domxref("HTMLElement/pointerover_event", "pointerover")}}
  - : Fired when a pointer is moved into an element's hit test boundaries.
    Also available via the {{domxref("GlobalEventHandlers/onpointerover", "onpointerover")}} property.
- {{domxref("HTMLElement/pointerup_event", "pointerup")}}
  - : Fired when a pointer is no longer active.
    Also available via the {{domxref("GlobalEventHandlers/onpointerup", "onpointerup")}} property.

### Transition events

- {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) is canceled.
    Also available via the {{domxref("GlobalEventHandlers/ontransitioncancel", "ontransitioncancel")}} property.
- {{domxref("HTMLElement/transitionend_event", "transitionend")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) has completed.
    Also available via the {{domxref("GlobalEventHandlers/ontransitionend", "ontransitionend")}} property.
- {{domxref("HTMLElement/transitionrun_event", "transitionrun")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) is first created.
    Also available via the {{domxref("GlobalEventHandlers/ontransitionrun", "ontransitionrun")}} property.
- {{domxref("HTMLElement/transitionstart_event", "transitionstart")}}
  - : Fired when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) has actually started.
    Also available via the {{domxref("GlobalEventHandlers/ontransitionstart", "ontransitionstart")}} property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Element")}}
