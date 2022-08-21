---
title: ARIA
slug: Web/Accessibility/ARIA
tags:
  - ARIA
  - Accessibility
  - HTML
  - Reference
  - WAI-ARIA
---
Accessible Rich Internet Applications **(<abbr>ARIA</abbr>)** is a set of [roles](/en-US/docs/Web/Accessibility/ARIA/Roles) and [attributes](/en-US/docs/Web/Accessibility/ARIA/Attributes) that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities.

It supplements HTML so that interactions and widgets commonly used in applications can be passed to assistive technologies when there is not otherwise a mechanism. For example, ARIA enables accessible JavaScript widgets, form hints and error messages, live content updates, and more.

> **Warning:** Many of these widgets are fully supported in modern browsers. **Developers should prefer using the correct semantic HTML element over using ARIA**, if such an element exists. For instance, native elements have built-in [keyboard accessibility](/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets), roles and states. However, if you choose to use ARIA, you are responsible for mimicking the equivalent browser behavior in script.

[The first rule of ARIA](https://www.w3.org/TR/using-aria/#rule1) use is "If you can use a native HTML element or attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so."

> **Note:** There is a saying "No ARIA is better than bad ARIA." In [WebAim's survey of over one million home pages](https://webaim.org/projects/million/#aria), they found that Home pages with ARIA present averaged 41% more detected errors than those without ARIA. While ARIA is designed to make web pages more accessible, if used incorrectly, it can do more harm than good.

Here's the markup for a progress bar widget:

```html
<div id="percent-loaded" role="progressbar" aria-valuenow="75"
     aria-valuemin="0" aria-valuemax="100">
</div>
```

This progress bar is built using a {{HTMLElement("div")}}, which has no meaning. We include ARIA roles and properties to add meaning. In this example, the [`role="progressbar"`](/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role) attribute informs the browser that this element is actually a JavaScript-powered progress bar widget. The [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) and [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) attributes specify the minimum and maximum values for the progress bar, and the [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) describes the current state of it and therefore must be kept updated with JavaScript.

Along with placing them directly in the markup, ARIA attributes can be added to the element and updated dynamically using JavaScript code like this:

```js
// Find the progress bar <div> in the DOM.
const progressBar = document.getElementById("percent-loaded");

// Set its ARIA roles and states,
// so that assistive technologies know what kind of widget it is.
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);

// Create a function that can be called at any time to update
// the value of the progress bar.
function updateProgress(percentComplete) {
  progressBar.setAttribute("aria-valuenow", percentComplete);
}
```

All content that is available to non-assistive technology users must be made available to assistive technologies. Similarly, no features should be included targeting assistive technology users that aren't also accessible to those not using assistive technologies. The above progressbar needs to be styled to make it look like a progressbar.

It would have been much simpler to use the native {{HTMLElement('progress')}} element instead:

```HTML
<progress id="percent-loaded" value="75" max="100">75 %</progress>
```

> **Note:** The `min` attribute is not allowed for the {{HTMLElement('progress')}} element; its minimum value is always `0`.

> **Note:** HTML landmark elements ({{HTMLElement("main")}}, {{HTMLElement("header")}}, {{HTMLElement("nav")}}, etc.) have built-in implicit ARIA roles, so there is no need to duplicate them.

## Support

Like any other web technology, there are varying degrees of support for ARIA. Support is based on the operating system and browser being used, as well as the kind of assistive technology interfacing with it. In addition, the version of the operating system, browser, and assistive technology are contributing factors. Older software versions may not support certain ARIA roles, have only partial support, or misreport its functionality.

It is also important to acknowledge that some people who rely on assistive technology are reluctant to upgrade their software, for fear of losing the ability to interact with their computer and browser. Because of this, it is important to [use semantic HTML elements](/en-US/docs/Learn/Accessibility/HTML) whenever possible, as semantic HTML has far better support for assistive technology.

It is also important to test your authored ARIA with actual assistive technology. Much as how browser emulators and simulators are not an effective solution for testing full support, proxy assistive technology solutions aren't sufficient to fully guarantee functionality.

## References

- [ARIA roles](/en-US/docs/Web/Accessibility/ARIA/Roles)
  - : Reference pages covering all the WAI-ARIA roles discussed on MDN.
- [ARIA states and properties](/en-US/docs/Web/Accessibility/ARIA/Attributes)
  - : Reference pages covering all the WAI-ARIA states and properties discussed on MDN.

## Standardization efforts

- [WAI-ARIA specification](https://w3c.github.io/aria/)
  - : The W3C specification itself.
- [WAI-ARIA authoring practices](https://www.w3.org/TR/wai-aria-practices-1.2/)
  - : The official best practices documents how best to ARIA-ify common widgets and interactions. An excellent resource.

## ARIA for scripted widgets

- [Writing keyboard-navigable JavaScript widgets](/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : Built-in elements like {{HTMLElement("input")}}, {{HTMLElement("button")}}, etc. have built-in keyboard accessibility. If you 'fake' these with {{HTMLElement("div")}}s and ARIA, you must ensure your widgets are keyboard accessible.
- [Live regions](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
  - : Live regions provide suggestions to screen readers about how to handle changes to the contents of a page.

## Videos

The following talks are a great way to understand ARIA:

[ARIA, Accessibility APIs and coding like you give a damn! – Léonie Watson](https://www.youtube.com/watch?v=qdB8SRhqvFc)
