---
title: Popover API
slug: Web/API/Popover_API
page-type: web-api-overview
browser-compat: api.HTMLElement.popover
---

{{DefaultAPISidebar("Popover API")}}

The **Popover API** provides developers with a standard, consistent, flexible mechanism for displaying popover content on top of other page content. Popover content can be controlled either declaratively using HTML attributes, or via JavaScript.

## Concepts and usage

A very common pattern on the web is to show content over the top of other content, drawing the user's attention to specific important information or actions that need to be taken. This content can take several different names — overlays, popups, popovers, dialogs, etc. We will refer to them as popovers through the documentation. Generally speaking, these can be:

- **modal**, meaning that while a popover is being shown, the rest of the page is rendered non-interactive until the popover is actioned in some way (for example an important choice is made).
- **non-modal**, meaning that the rest of the page can be interacted with while the popover is being shown.

Popovers which are created using the popover API are always non-modal. If you want to create a modal popover, a {{htmlelement("dialog")}} element is the right way to go, although bear in mind that `<dialog>` elements are not put in the {{glossary("top layer")}} by default — popovers are. There is significant overlap between the two — you might for example want to create a popover that persists, but control it using declarative HTML. You can even turn a `<dialog>` element into a popover if you want to combine popover control and top level placement with dialog semantics.

Typical use cases for the popover API include user-interactive elements like action menus, custom "toast" notifications, form element suggestions, content pickers, or teaching UI.

You can create popovers in two different ways:

- Declaratively, via a set of new HTML attributes. A simple popover with a toggle button can be created using the following code:

  ```html
  <button popovertarget="mypopover">Toggle the popover</button>
  <div id="mypopover" popover>Popover content</div>
  ```

- Via a JavaScript API. For example, {{domxref("HTMLElement.togglePopover()")}} can be used to toggle a popover between shown and hidden.

There are also new events to react to a popover being toggled, and CSS features to aid in styling popovers. All the new features are listed below.

See [Using the popover API](/en-US/docs/Web/API/Popover_API/Using) for a detailed guide to using this API.

## HTML attributes

- [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover)
  - : A global attribute that turns an element into a popover element; takes a popover state (`"auto"` or `"manual"`) as its value.
- [`popovertarget`](/en-US/docs/Web/HTML/Element/button#popovertarget)
  - : Turns a {{htmlelement("button")}} or {{htmlelement("input")}} element into a popover control button; takes the ID of the popover element to control as its value.
- [`popovertargetaction`](/en-US/docs/Web/HTML/Element/button#popovertargetaction)
  - : Specifies the action to be performed (`"hide"`, `"show"`, or `"toggle"`) on the popover element being controlled by a control {{htmlelement("button")}} or {{htmlelement("input")}}.

## CSS features

- {{cssxref("::backdrop")}}
  - : The `::backdrop` pseudo-element is a full-screen element placed directly behind popover elements, allowing effects to be added to the page content behind the popover(s) if desired (for example blurring it out).
- {{cssxref(":popover-open")}}
  - : The `:popover-open` pseudo-class matches a popover element only when it is in the showing state — it can be used to style popover elements when they are showing.

## Interfaces

- {{domxref("ToggleEvent")}}
  - : Represents an event notifying the user when a popover element's state toggles between showing and hidden. It is the event object for the {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} and {{domxref("HTMLElement.toggle_event", "toggle")}} events, which fire on popovers when their state changes.

## Extensions to other interfaces

### Instance properties

- {{domxref("HTMLElement.popover")}}
  - : Gets and sets an element's popover state via JavaScript (`"auto"` or `"manual"`), and can be used for feature detection. Reflects the value of the [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) global HTML attribute.
- {{domxref("HTMLButtonElement.popoverTargetElement")}} and {{domxref("HTMLInputElement.popoverTargetElement")}}
  - : Gets and sets the popover element being controlled by the control button. The JavaScript equivalent of the [`popovertarget`](/en-US/docs/Web/HTML/Element/button#popovertarget) HTML attribute.
- {{domxref("HTMLButtonElement.popoverTargetAction")}} and {{domxref("HTMLInputElement.popoverTargetAction")}}
  - : Gets and sets the action to be performed (`"hide"`, `"show"`, or `"toggle"`) on the popover element being controlled by the control button. Reflects the value of the [`popovertargetaction`](/en-US/docs/Web/HTML/Element/button#popovertargetaction) HTML attribute.

### Instance methods

- {{domxref("HTMLElement.hidePopover()")}}
  - : Hides a popover element by removing it from the top layer and styling it with `display: none`.
- {{domxref("HTMLElement.showPopover()")}}
  - : Shows a popover element by adding it to the top layer.
- {{domxref("HTMLElement.togglePopover()")}}
  - : Toggles a popover element between the showing and hidden states.

### Events

- `HTMLElement` {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} event
  - : Fired just before a popover element's state changes between showing and hidden, or vice versa.
- `HTMLElement` {{domxref("HTMLElement.toggle_event", "toggle")}} event
  - : Fired just after a popover element's state changes between showing and hidden, or vice versa. This event already existed to signal state changes on {{htmlelement("details")}} elements, and it seemed logical to extend it for popover elements.

## Examples

See our [Popover API examples landing page](https://mdn.github.io/dom-examples/popover-api/) to access the full collection of MDN popover examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
