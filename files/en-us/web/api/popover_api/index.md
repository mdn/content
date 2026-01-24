---
title: Popover API
slug: Web/API/Popover_API
page-type: web-api-overview
browser-compat:
  - api.HTMLElement.popover
  - api.HTMLElement.beforetoggle_event.popover_elements
  - api.HTMLElement.toggle_event.popover_elements
---

{{DefaultAPISidebar("Popover API")}}

The **Popover API** provides developers with a standard, consistent, flexible mechanism for displaying popover content on top of other page content. Popover content can be controlled either using HTML attributes, or via JavaScript.

## Concepts and usage

A very common pattern on the web is to show content over the top of other content, drawing the user's attention to specific important information or actions that need to be taken. This content can take several different names — overlays, popups, popovers, dialogs, etc. We will refer to them as popovers through the documentation. Generally speaking, these can be:

- **modal**, meaning that while a popover is being shown, the rest of the page is rendered non-interactive until the popover is actioned in some way (for example an important choice is made).
- **non-modal**, meaning that the rest of the page can be interacted with while the popover is being shown.

Popovers created using the Popover API are always non-modal. If you want to create a modal popover, a {{htmlelement("dialog")}} element is the right way to go. There is significant overlap between the two — you might for example want to create a popover that persists, but control it using HTML. You can turn a `<dialog>` element into a popover (`<dialog popover>` is perfectly valid) if you want to combine popover control with dialog semantics.

Typical use cases for the popover API include user-interactive elements like action menus, custom "toast" notifications, form element suggestions, content pickers, or teaching UI.

You can create popovers in multiple ways:

- Via a set of new HTML attributes. A simple popover with a toggle button can be created using the following code:

  ```html
  <button popovertarget="mypopover">Toggle the popover</button>
  <div id="mypopover" popover>Popover content</div>
  ```

- Via a JavaScript API. For example, {{domxref("HTMLElement.togglePopover()")}} can be used to toggle a popover between shown and hidden.

The Popover API also provides events to react to a popover being toggled and CSS features to aid in styling popovers. See [Using the popover API](/en-US/docs/Web/API/Popover_API/Using) for a detailed guide to the API.

A related feature — **interest invokers** — can be used to show popovers on hover/focus, without requiring JavaScript. Check out [Using interest invokers](/en-US/docs/Web/API/Popover_API/Using_interest_invokers) to learn more.

## HTML attributes

- [`interestfor`](/en-US/docs/Web/HTML/Reference/Elements/button#interestfor) {{experimental_inline}}
  - : Defines an HTML {{htmlelement("a")}}, {{htmlelement("button")}}, or {{htmlelement("area")}} element, or an SVG [`<a>`](/en-US/docs/Web/SVG/Reference/Element/a) element, as an interest invoker. Its value is the `id` of the target element, which will be affected in some way (normally shown or hidden) when interest is shown or lost on the invoker element.
- [`popover`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover)
  - : A global attribute that turns an element into a popover element; takes a popover state (`"auto"`, `"hint"`, or `"manual"`) as its value.
- [`popovertarget`](/en-US/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - : Turns a {{htmlelement("button")}} or {{htmlelement("input")}} element into a popover control button; takes the ID of the popover element to control as its value.
- [`popovertargetaction`](/en-US/docs/Web/HTML/Reference/Elements/button#popovertargetaction)
  - : Specifies the action to be performed (`"hide"`, `"show"`, or `"toggle"`) on the popover element being controlled by a control {{htmlelement("button")}} or {{htmlelement("input")}}.

## CSS features

- {{cssxref("::backdrop")}}
  - : The `::backdrop` pseudo-element is a full-screen element placed directly behind popover elements, allowing effects to be added to the page content behind the popover(s) if desired (for example blurring it out).
- {{cssxref("interest-delay")}}, {{cssxref("interest-delay-start")}}, and {{cssxref("interest-delay-end")}} {{experimental_inline}}
  - : The `interest-delay` shorthand property and its related `interest-delay-start` and `interest-delay-end` longhands can be used to add a delay between the user showing or losing interest and the browser acting on that change.
- {{cssxref(":interest-source")}} and {{cssxref(":interest-target")}}
  - : These selectors can be used to apply styles to the interest invoker and its associated target element, respectively, only when interest is indicated.
- {{cssxref(":popover-open")}}
  - : The `:popover-open` pseudo-class matches a popover element only when it is in the showing state — it can be used to style popover elements when they are showing.

## Interfaces

- {{domxref("InterestEvent")}} {{experimental_inline}}
  - : The event object for the {{domxref("HTMLElement.interest_event", "interest")}} and {{domxref("HTMLElement.loseinterest_event", "loseinterest")}} events. This includes a `source` property that contains a reference to the associated interest invoker element.
- {{domxref("ToggleEvent")}}
  - : Represents an event that fires when a popover element is toggled between being shown and hidden. It is the event object for the {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} and {{domxref("HTMLElement.toggle_event", "toggle")}} events, which fire on popovers when their state changes.

## Extensions to other interfaces

### Instance properties

- {{domxref("HTMLButtonElement.interestForElement", "interestForElement")}} {{experimental_inline}}
  - : Gets or sets a reference to the element being targeted by an interest invoker. If an HTML or SVG interest invoker references a target element in its `interestfor` attribute, that element will be referenced in the equivalent DOM object's `interestForElement` property. Available on the {{domxref("HTMLButtonElement")}}, {{domxref("HTMLAnchorElement")}}, {{domxref("HTMLAreaElement")}}, and {{domxref("SVGAElement")}} interfaces.
- {{domxref("HTMLElement.popover")}}
  - : Gets and sets an element's popover state via JavaScript (`"auto"`, `"hint"`, or `"manual"`), and can be used for feature detection. Reflects the value of the [`popover`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover) global HTML attribute.
- {{domxref("HTMLButtonElement.popoverTargetElement")}} and {{domxref("HTMLInputElement.popoverTargetElement")}}
  - : Gets and sets the popover element being controlled by the control button. The JavaScript equivalent of the [`popovertarget`](/en-US/docs/Web/HTML/Reference/Elements/button#popovertarget) HTML attribute.
- {{domxref("HTMLButtonElement.popoverTargetAction")}} and {{domxref("HTMLInputElement.popoverTargetAction")}}
  - : Gets and sets the action to be performed (`"hide"`, `"show"`, or `"toggle"`) on the popover element being controlled by the control button. Reflects the value of the [`popovertargetaction`](/en-US/docs/Web/HTML/Reference/Elements/button#popovertargetaction) HTML attribute.

### Instance methods

- {{domxref("HTMLElement.hidePopover()")}}
  - : Hides a popover element by removing it from the top layer and styling it with `display: none`.
- {{domxref("HTMLElement.showPopover()")}}
  - : Shows a popover element by adding it to the top layer.
- {{domxref("HTMLElement.togglePopover()")}}
  - : Toggles a popover element between the showing and hidden states.

### Events

- {{domxref("HTMLElement.beforetoggle_event","beforetoggle")}} event
  - : Fired just before a popover element's state changes between showing and hidden, or vice versa.
    Can be used to prevent a popover from opening, or to update other elements that need to be triggered by popover state.
- {{domxref("HTMLElement.toggle_event", "toggle")}} event
  - : Fired just after a popover element's state changes between showing and hidden, or vice versa.
- {{domxref("HTMLElement.interest_event", "interest")}} {{experimental_inline}}
  - : Fired on an interest invoker's target element when interest is shown, allowing code to be run in response.
- {{domxref("HTMLElement.loseinterest_event", "loseinterest")}} {{experimental_inline}}
  - : Fired on an interest invoker's target element when interest is lost, allowing code to be run in response.

## Examples

- See our collection of [Popover API examples](https://mdn.github.io/dom-examples/popover-api/).
- See our collection of [interest invoker examples](https://mdn.github.io/dom-examples/interest-invokers/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`popover`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover) HTML global attribute
- [`popovertarget`](/en-US/docs/Web/HTML/Reference/Elements/button#popovertarget) HTML attribute
- [`popovertargetaction`](/en-US/docs/Web/HTML/Reference/Elements/button#popovertargetaction) HTML attribute
- {{cssxref("::backdrop")}} CSS pseudo-element
- {{cssxref(":popover-open")}} CSS pseudo-class
