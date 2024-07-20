---
title: Web Components
slug: Web/API/Web_components
page-type: web-api-overview
browser-compat:
  - html.elements.template
  - api.ShadowRoot
---

{{DefaultAPISidebar("Web Components")}}

Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

## Concepts and usage

As developers, we all know that reusing code as much as possible is a good idea. This has traditionally not been so easy for custom markup structures — think of the complex HTML (and associated style and script) you've sometimes had to write to render custom UI controls, and how using them multiple times can turn your page into a mess if you are not careful.

Web Components aims to solve such problems — it consists of three main technologies, which can be used together to create versatile custom elements with encapsulated functionality that can be reused wherever you like without fear of code collisions.

- **Custom elements**
  - : A set of JavaScript APIs that allow you to define custom elements and their behavior, which can then be used as desired in your user interface.
- **Shadow DOM**
  - : A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element — which is rendered separately from the main document DOM — and controlling associated functionality. In this way, you can keep an element's features private, so they can be scripted and styled without the fear of collision with other parts of the document.
- **HTML templates**
  - : The {{HTMLElement("template")}} and {{HTMLElement("slot")}} elements enable you to write markup templates that are not displayed in the rendered page. These can then be reused multiple times as the basis of a custom element's structure.

The basic approach for implementing a web component generally looks something like this:

1. Create a class in which you specify your web component functionality, using the [class](/en-US/docs/Web/JavaScript/Reference/Classes) syntax.
2. Register your new custom element using the {{domxref("CustomElementRegistry.define()")}} method, passing it the element name to be defined, the class or function in which its functionality is specified, and optionally, what element it inherits from.
3. If required, attach a shadow DOM to the custom element using {{domxref("Element.attachShadow()")}} method. Add child elements, event listeners, etc., to the shadow DOM using regular DOM methods.
4. If required, define an HTML template using {{htmlelement("template")}} and {{htmlelement("slot")}}. Again use regular DOM methods to clone the template and attach it to your shadow DOM.
5. Use your custom element wherever you like on your page, just like you would any regular HTML element.

## Guides

- [Using custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements)
  - : A guide showing how to use the features of custom elements to create simple web components, as well as looking into lifecycle callbacks and some other more advanced features.
- [Using shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
  - : A guide that looks at shadow DOM fundamentals, showing how to attach a shadow DOM to an element, add to the shadow DOM tree, style it, and more.
- [Using templates and slots](/en-US/docs/Web/API/Web_components/Using_templates_and_slots)
  - : A guide showing how to define a reusable HTML structure using {{htmlelement("template")}} and {{htmlelement("slot")}} elements, and then use that structure inside your web components.

## Reference

### Custom elements

- {{domxref("CustomElementRegistry")}}
  - : Contains functionality related to custom elements, most notably the {{domxref("CustomElementRegistry.define()")}} method used to register new custom elements so they can then be used in your document.
- {{domxref("Window.customElements")}}
  - : Returns a reference to the `CustomElementRegistry` object.
- [Life cycle callbacks](/en-US/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks)

  - : Special callback functions defined inside the custom element's class definition, which affect its behavior:

    - `connectedCallback()`
      - : Invoked when the custom element is first connected to the document's DOM.
    - `disconnectedCallback()`
      - : Invoked when the custom element is disconnected from the document's DOM.
    - `adoptedCallback()`
      - : Invoked when the custom element is moved to a new document.
    - `attributeChangedCallback()`
      - : Invoked when one of the custom element's attributes is added, removed, or changed.

- Extensions for creating custom built-in elements

  - : The following extensions are defined:

    - The [`is`](/en-US/docs/Web/HTML/Global_attributes/is) global HTML attribute
      - : Allows you to specify that a standard HTML element should behave like a registered custom built-in element.
    - The "is" option of the {{domxref("Document.createElement()")}} method
      - : Allows you to create an instance of a standard HTML element that behaves like a given registered custom built-in element.

- CSS pseudo-classes

  - : Pseudo-classes relating specifically to custom elements:

    - {{cssxref(":defined")}}
      - : Matches any element that is defined, including built in elements and custom elements defined with `CustomElementRegistry.define()`.
    - {{cssxref(":host")}}
      - : Selects the shadow host of the [shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) containing the CSS it is used inside.
    - {{cssxref(":host", ":host()")}}
      - : Selects the shadow host of the [shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) containing the CSS it is used inside (so you can select a custom element from inside its shadow DOM) — but only if the selector given as the function's parameter matches the shadow host.
    - {{cssxref(":host-context", ":host-context()")}}
      - : Selects the shadow host of the [shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) containing the CSS it is used inside (so you can select a custom element from inside its shadow DOM) — but only if the selector given as the function's parameter matches the shadow host's ancestor(s) in the place it sits inside the DOM hierarchy.
    - {{CSSxRef(":state",":state()")}}
      - : Matches custom elements that are in a specified custom state.
        More precisely, it matches anonymous custom elements where the specified state is present in the element's {{domxref("CustomStateSet")}}.

- CSS pseudo-elements

  - : Pseudo-elements relating specifically to custom elements:

    - {{cssxref("::part")}}
      - : Represents any element within a [shadow tree](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) that has a matching [`part`](/en-US/docs/Web/HTML/Global_attributes#part) attribute.

### Shadow DOM

- {{domxref("ShadowRoot")}}
  - : Represents the root node of a shadow DOM subtree.
- {{domxref("Element")}} extensions

  - : Extensions to the `Element` interface related to shadow DOM:

    - The {{domxref("Element.attachShadow()")}} method attaches a shadow DOM tree to the specified element.
    - The {{domxref("Element.shadowRoot")}} property returns the shadow root attached to the specified element, or `null` if there is no shadow root attached.

- Relevant {{domxref("Node")}} additions

  - : Additions to the `Node` interface relevant to shadow DOM:

    - The {{domxref("Node.getRootNode()")}} method returns the context object's root, which optionally includes the shadow root if it is available.
    - The {{domxref("Node.isConnected")}} property returns a boolean indicating whether or not the Node is connected (directly or indirectly) to the context object, e.g. the {{domxref("Document")}} object in the case of the normal DOM, or the {{domxref("ShadowRoot")}} in the case of a shadow DOM.

- {{domxref("Event")}} extensions

  - : Extensions to the `Event` interface related to shadow DOM:

    - {{domxref("Event.composed")}}
      - : Returns `true` if the event will propagate across the shadow DOM boundary into the standard DOM, otherwise `false`.
    - {{domxref("Event.composedPath")}}
      - : Returns the event's path (objects on which listeners will be invoked). This does not include nodes in shadow trees if the shadow root was created with {{domxref("ShadowRoot.mode")}} closed.

### HTML templates

- {{htmlelement("template")}}
  - : Contains an HTML fragment that is not rendered when a containing document is initially loaded, but can be displayed at runtime using JavaScript, mainly used as the basis of custom element structures. The associated DOM interface is {{domxref("HTMLTemplateElement")}}.
- {{htmlelement("slot")}}
  - : A placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together. The associated DOM interface is {{domxref("HTMLSlotElement")}}.
- The [`slot`](/en-US/docs/Web/HTML/Global_attributes/slot) global HTML attribute
  - : Assigns a slot in a shadow DOM shadow tree to an element.
- {{domxref("Element.assignedSlot")}}
  - : A read-only attribute which returns a reference to the {{htmlelement("slot")}} in which this element is inserted.
- {{domxref("Text.assignedSlot")}}
  - : A read-only attribute which returns a reference to the {{htmlelement("slot")}} in which this text node is inserted.
- {{domxref("Element")}} extensions

  - : Extensions to the `Element` interface related to slots:

    - {{domxref("Element.slot")}}
      - : Returns the name of the shadow DOM slot attached to the element.

- CSS pseudo-elements

  - : Pseudo-elements relating specifically to slots:

    - {{cssxref("::slotted")}}
      - : Matches any content that is inserted into a slot.

- The {{domxref("HTMLSlotElement/slotchange_event", "slotchange")}} event
  - : Fired on an {{domxref("HTMLSlotElement")}} instance ({{htmlelement("slot")}} element) when the node(s) contained in that slot change.

## Examples

We are building up a number of examples in our [web-components-examples](https://github.com/mdn/web-components-examples) GitHub repo. More will be added as time goes on.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
