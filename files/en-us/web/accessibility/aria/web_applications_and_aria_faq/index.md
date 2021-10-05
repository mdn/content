---
title: Web applications and ARIA FAQ
slug: Web/Accessibility/ARIA/Web_applications_and_ARIA_FAQ
tags:
  - ARIA
  - Accessibility
  - Guide
---
## What is ARIA?

WAI-ARIA is the [Accessible Rich Internet Applications](https://www.w3.org/WAI/intro/aria.php) specification from the [Web Accessibility Initiative](https://www.w3.org/WAI/) at the [W3C](https://www.w3.org/). ARIA provides a means to make web applications and widgets more accessible to a diverse range of users, including those who use assistive technologies such as screen readers or magnifiers.

ARIA provides additional semantics to describe the role, state, and functionality of many familiar user interface controls, such as menus, sliders, trees, and dialogs. It also provides additional structural information, helping authors identify landmarks, regions, and grids on their pages. ARIA enables dynamic, JavaScript-driven applications and widgets to interoperate with a variety of desktop-based assistive technologies.

For more information about how to create accessible widgets with ARIA, see the [Overview of accessible web applications and widgets](/en-US/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets).

## Where is ARIA Supported?

ARIA is a relatively new specification, but support for it is growing. A wide variety of commonly-used browsers, assistive technologies, JavaScript toolkits, and applications now support ARIA. However, many users may still be using older versions of these technologies. You may want to consider implementing ARIA using progressive enhancement techniques—such as adding ARIA using JavaScript, not directly to your markup—in order to more gracefully support older browsers and assistive technologies.

### Browsers

ARIA is supported in the following browsers:

| Browser                                                                                           | Minimum Version | Notes                                                                                                        |
| ------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------ |
| Firefox                                                                                           | 3.0+            | Works with NVDA, JAWS 10+, and Orca                                                                          |
| [Chrome](https://dev.chromium.org/developers/design-documents/accessibility#TOC-WAI-ARIA-Support) | Latest          | Screen reader support still experimental as of Chrome 15                                                     |
| Safari                                                                                            | 4+              | Safari 5 support is much improved. Live region support requires Safari 5 with VoiceOver on iOS5 or OS X Lion |
| [Opera](https://www.opera.com/docs/specs/presto28/wai-aria/roleattributes/)                       | 9.5+            | Requires VoiceOver on OS X. TBD: how well does this currently work?                                          |
| [Internet Explorer](https://msdn.microsoft.com/en-us/library/cc891505%28v=vs.85%29.aspx)          | 8+              | Works with JAWS 10+ and NVDA. No live region support in NVDA. IE9 support is much improved.                  |

In some cases, earlier versions may support only some features of ARIA. More detailed browser compatibility charts are available from multiple sources:

- [caniuse.com](https://caniuse.com/wai-aria)
- [The Paciello Group](https://www.paciellogroup.com/blog/2012/02/rough-guide-browsers-operating-systems-and-screen-reader-support/)

### Assistive Technologies

Assistive technologies are increasingly adopting ARIA. Some of them include:

| Assistive Technology | Minimum Version for basic ARIA         | Minimum version for live region and alert support              |
| -------------------- | -------------------------------------- | -------------------------------------------------------------- |
| NVDA                 | 2010.2 (NVDA is always a free upgrade) | 2011.1 for Firefox, no live region support in IE as of 2011.2. |
| Orca                 | ? (TBD)                                | ? (TBD)                                                        |
| VoiceOver            | OSX 10.5, iOS 4                        | OS X 10.7 iOS 5                                                |
| JAWS                 | 8                                      | 10                                                             |
| Window-Eyes          | 7                                      | No live region support currently                               |
| ZoomText             | ?                                      | No live region support currently                               |

Note: Early versions of these tools often had partial or buggy ARIA implementations.

For notes on JAWS support for ARIA as of JAWS 10, see this article from the Paciello Group: [JAWS Support for ARIA](https://www.paciellogroup.com/blog/2010/10/jaws-support-for-aria/).

### JavaScript Toolkits

ARIA roles, states, and properties have been added to a number of popular JavaScript user interface toolkits, including:

- Dojo/Dijit
- jQuery UI
- Fluid Infusion
- Google Closure
- Google Web Toolkit
- BBC Glow
- Yahoo! User Interface Library (YUI)

For more information about JavaScript toolkit accessibility:

- Steve Faulkner's [WAI-ARIA Implementation in JavaScript UI Libraries](https://www.paciellogroup.com/blog/2009/07/wai-aria-implementation-in-javascript-ui-libraries/)

## Can you show me an example of ARIA in action?

<p id="aria-in-action">Sure. Here's the markup for a progress bar widget:</p>

```html
<div id="percent-loaded" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
```

This progress bar is built using a `<div>`, which is not very descriptive. Unfortunately, there isn't a more semantic element available to developers in HTML 4, so we need to include ARIA roles and properties. These are specified by adding attributes to the element. In this example, the `role="progressbar"` attribute informs the browser that this element is actually a JavaScript-powered progress bar widget. The **aria-valuemin** and **aria-valuemax** attributes specify the minimum and maximum values for the progress bar, and the **aria-valuenow** describes the current state of it.

Along with placing them directly in the markup, ARIA attributes can be added to the element and updated dynamically using JavaScript code like this:

```js
// Find the progress bar <div> in the DOM.
var progressBar = document.getElementById("percent-loaded");

// Set its ARIA roles and states, so that assistive technologies know what kind of widget it is.
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);

// Create a function that can be called at any time to update the value of the progress bar.
function updateProgress(percentComplete) {
  progressBar.setAttribute("aria-valuenow", percentComplete);
}
```

## Will adding ARIA change my page styles or behavior?

No, ARIA is only made available to assistive technology APIs, and doesn't affect native browser functionality with respect to the DOM or styling. From the browser's point of view, the native HTML defines the semantic meaning and behavior of an element, with ARIA attributes acting as a layer on top to help support the AT API. Though on its own ARIA will not change any styles, as with any HTML attributes, CSS can take advantage of ARIA attributes as element selectors. This may provide a convenient mechanism to style ARIA-enabled widgets.

```css
.tab-panel[aria-hidden="true"] {
  display: none;
  }

.tab-panel[aria-hidden="false"] {
  display: block;
  }
```

### What about validation?

The new attributes introduced in ARIA, such as **role** and those prefixed with **aria-**, aren't officially part of the HTML 4 or XHTML 4 specifications. As a result, pages that include ARIA may not validate using tools such as the [W3C's Markup Validator](https://validator.w3.org/).

The first potential solution to this problem is to avoid placing ARIA roles and states in your markup directly. Instead, use JavaScript to dynamically add ARIA to your page, as shown in the answer to [Can you show me an example of ARIA in action?](#aria-in-action) above. Your page will still be theoretically invalid, but it will correctly pass all static validation checks.

Another alternative is to use the HTML5 doctype, which includes built-in support for ARIA. The W3C's HTML5 validator will even find invalid uses of ARIA in HTML5 pages for you.

## How does HTML5 relate to ARIA?

HTML5 introduces a number of useful new semantic elements to HTML. A few of these elements overlap directly with roles available in ARIA, such as the new `<progress>` element. In cases where the browser supports an HTML5 element that also exists in ARIA, there is usually no need to also add ARIA roles and states to the element. ARIA includes many roles, states, and properties that aren't available in HTML5, so these will continue to be useful to developers who use HTML5. For more information, Steve Faulkner has written a good [overview of the relationship between HTML5 and ARIA](https://www.paciellogroup.com/blog/2010/04/html5-and-the-myth-of-wai-aria-redundance/).

#### Degrading Gracefully from HTML5 to ARIA

When delivering content to browsers that aren't HTML5-aware, you may want to consider gracefully degrading to the use of ARIA where necessary. So, using the example of a progress bar, you can degrade gracefully to a `role="progressbar"` in cases where the `<progressbar>` element isn't supported.

Here is an example of the markup used for an HTML5 progress bar:

```html
<!DOCTYPE html>
<html>
  <head><title>Gracefully degrading progress bar</title></head>
  <body>
    <progress id="progress-bar" value="0" max="100">0% complete</progress>
    <button id="update-button">Update</button>
 </body>
</html>
```

... and here is the JavaScript code that will ensure the progress bar still works in older browsers:

```js
var progressBar = document.getElementById("progress-bar");

// Check to see if the browser supports the HTML5 <progress> element.
var supportsHTML5Progress = (typeof (HTMLProgressElement) !== "undefined");

function setupProgress() {
  if (!supportsHTML5Progress) {
    // HTML5 <progress> isn't supported in this browser, so we need to add
    // ARIA roles and states to the element.
    progressBar.setAttribute("role", "progressbar");
    progressBar.setAttribute("aria-valuemin", 0);
    progressBar.setAttribute("aria-valuemax", 100);
  }
}

function updateProgress(percentComplete) {
  if (!supportsHTML5Progress) {
    // HTML5 <progress> isn't supported by this browser,
    // so we need to update the aria-valuenow attribute
    progressBar.setAttribute("aria-valuenow", percentComplete);
  } else {
    // HTML5 <progress> is supported, so update the value attribute instead.
    progressBar.setAttribute("value", percentComplete);
  }

  progressBar.textContent = percentComplete + "% complete";
}

function initDemo() {
  setupProgress(); // Setup the progress bar.

  // Bind a click handler to the button, which will update the progress bar to 75%.
  document.getElementById("update-button").addEventListener("click", function (e) {
    updateProgress(75);
    e.preventDefault();
  }, false);
}
initDemo();
```

## How do assistive technologies work?

Assistive technologies use an API built into each operating system specifically designed to describe the roles, states, and structure of an application's user interface. For example, a screen reader uses this API to read the user interface with a text-to-speech engine, a magnifier uses it to highlight important or active areas of the screen, and an onscreen keyboard might use it to provide the most efficient keyboard layout for a given context or UI control. Assistive technologies often access a page's DOM as well through this API in order to understand the semantics and attributes of the page.

ARIA provides a bridge between the world of the DOM and the desktop. Browsers expose ARIA-enabled elements to the assistive technology API as if they were native widgets. As a result, the user potentially gets a more consistent user experience, where dynamic JavaScript-driven widgets on the web are comparable to their equivalents on the desktop.

## How do I test my use of ARIA? Are there any tools available for free?

Several inspecting and debugging tools exist to help you test ARIA in action:

- Object Inspector on Windows
- Accessibility Inspector on OS X
- AccProbe on Linux
- Firebug's DOM Inspector
- The [Accessibility Inspector for Firebug](https://code.google.com/p/ainspector/)
- The Audits tab in Chrome DevTools

There are several free or open source screen readers that can be used to do hands-on testing with ARIA. They include:

- [Orca](https://live.gnome.org/Orca) for Linux
- [NVDA](https://www.nvda-project.org/) for Windows
- [VoiceOver](https://www.apple.com/accessibility/voiceover/) is built into OS X

When you're testing with a screen reader, keep two key points in mind:

1.  Casual testing with a screen reader user can never replace feedback, testing, and help from real users.
2.  There's more to accessibility than just supporting screen readers. Try testing with a variety of usability and accessibility techniques.

Other helpful testing tools and techniques for ARIA-enabled applications and widgets:

- [Yahoo!'s ARIA bookmarklets](https://yaccessibilityblog.com/library/test-aria-focus-bookmarklets.html)
- Fluid Project's [simple accessibility evaluation techniques](https://wiki.fluidproject.org/display/fluid/Simple+Accessibility+Review+Protocol)

## Where do ARIA discussions happen?

- [Wai-xtech mailing list](https://lists.w3.org/Archives/Public/wai-xtech/) -- holds discussions on ARIA specs.
- [Free-ARIA google group](https://groups.google.com/group/free-aria) -- for developers and users of free tools and resources.

## Where can I learn more about ARIA?

- [An overview of accessible web applications and widgets](/en-US/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets)
- [Accessible forms](/en-US/docs/Web/Accessibility/ARIA/forms)
- The W3C's [WAI-ARIA Frequently Asked Questions](https://www.w3.org/WAI/aria/faq)
- WebAIM's [Accessibility of Rich Internet Applications](https://webaim.org/techniques/aria/)
