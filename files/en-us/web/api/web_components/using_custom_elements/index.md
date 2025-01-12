---
title: Using custom elements
slug: Web/API/Web_components/Using_custom_elements
page-type: guide
---

{{DefaultAPISidebar("Web Components")}}

One of the key features of web components is the ability to create _custom elements_: that is, HTML elements whose behavior is defined by the web developer, that extend the set of elements available in the browser.

This article introduces custom elements, and walks through some examples.

## Types of custom element

There are two types of custom element:

- **Customized built-in elements** inherit from standard HTML elements such as {{domxref("HTMLImageElement")}} or {{domxref("HTMLParagraphElement")}}. Their implementation extends the behavior of select instances of the standard element.

  > [!NOTE]
  > Safari does not plan to support custom built-in elements. See the [`is` attribute](/en-US/docs/Web/HTML/Global_attributes/is) for more information.

- **Autonomous custom elements** inherit from the HTML element base class {{domxref("HTMLElement")}}. You have to implement their behavior from scratch.

## Implementing a custom element

A custom element is implemented as a [class](/en-US/docs/Web/JavaScript/Reference/Classes) which extends {{domxref("HTMLElement")}} (in the case of autonomous elements) or the interface you want to customize (in the case of customized built-in elements).

Here's the implementation of a minimal custom element that customizes the {{HTMLElement("p")}} element:

```js
class WordCount extends HTMLParagraphElement {
  constructor() {
    super();
  }
  // Element functionality written in here
}
```

Here's the implementation of a minimal autonomous custom element:

```js
class PopupInfo extends HTMLElement {
  constructor() {
    super();
  }
  // Element functionality written in here
}
```

In the class [constructor](/en-US/docs/Web/JavaScript/Reference/Classes/constructor), you can set up initial state and default values, register event listeners and perhaps create a shadow root. At this point, you should not inspect the element's attributes or children, or add new attributes or children. See [Requirements for custom element constructors and reactions](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) for the complete set of requirements.

### Custom element lifecycle callbacks

Once your custom element is registered, the browser will call certain methods of your class when code in the page interacts with your custom element in certain ways. By providing an implementation of these methods, which the specification calls _lifecycle callbacks_, you can run code in response to these events.

Custom element lifecycle callbacks include:

- `connectedCallback()`: called each time the element is added to the document. The specification recommends that, as far as possible, developers should implement custom element setup in this callback rather than the constructor.
- `disconnectedCallback()`: called each time the element is removed from the document.
- `adoptedCallback()`: called each time the element is moved to a new document.
- `attributeChangedCallback()`: called when attributes are changed, added, removed, or replaced. See [Responding to attribute changes](#responding_to_attribute_changes) for more details about this callback.

Here's a minimal custom element that logs these lifecycle events:

```js
// Create a class for the element
class MyCustomElement extends HTMLElement {
  static observedAttributes = ["color", "size"];

  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    console.log("Custom element added to page.");
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
  }
}

customElements.define("my-custom-element", MyCustomElement);
```

## Registering a custom element

To make a custom element available in a page, call the {{domxref("CustomElementRegistry.define()", "define()")}} method of {{domxref("Window.customElements")}}.

The `define()` method takes the following arguments:

- `name`
  - : The name of the element. This must start with a lowercase letter, contain a hyphen, and satisfy certain other rules listed in the specification's [definition of a valid name](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name).
- `constructor`
  - : The custom element's constructor function.
- `options`
  - : Only included for customized built-in elements, this is an object containing a single property `extends`, which is a string naming the built-in element to extend.

For example, this code registers the `WordCount` customized built-in element:

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

This code registers the `PopupInfo` autonomous custom element:

```js
customElements.define("popup-info", PopupInfo);
```

## Using a custom element

Once you've defined and registered a custom element, you can use it in your code.

To use a customized built-in element, use the built-in element but with the custom name as the value of the [`is`](/en-US/docs/Web/HTML/Global_attributes/is) attribute:

```html
<p is="word-count"></p>
```

To use an autonomous custom element, use the custom name just like a built-in HTML element:

```html
<popup-info>
  <!-- content of the element -->
</popup-info>
```

## Responding to attribute changes

Like built-in elements, custom elements can use HTML attributes to configure the element's behavior. To use attributes effectively, an element has to be able to respond to changes in an attribute's value. To do this, a custom element needs to add the following members to the class that implements the custom element:

- A static property named `observedAttributes`. This must be an array containing the names of all attributes for which the element needs change notifications.
- An implementation of the `attributeChangedCallback()` lifecycle callback.

The `attributeChangedCallback()` callback is then called whenever an attribute whose name is listed in the element's `observedAttributes` property is added, modified, removed, or replaced.

The callback is passed three arguments:

- The name of the attribute which changed.
- The attribute's old value.
- The attribute's new value.

For example, this autonomous element will observe a `size` attribute, and log the old and new values when they change:

```js
// Create a class for the element
class MyCustomElement extends HTMLElement {
  static observedAttributes = ["size"];

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
    );
  }
}

customElements.define("my-custom-element", MyCustomElement);
```

Note that if the element's HTML declaration includes an observed attribute, then `attributeChangedCallback()` will be called after the attribute is initialized, when the element's declaration is parsed for the first time. So in the following example, `attributeChangedCallback()` will be called when the DOM is parsed, even if the attribute is never changed again:

```html
<my-custom-element size="100"></my-custom-element>
```

For a complete example showing the use of `attributeChangedCallback()`, see [Lifecycle callbacks](#lifecycle_callbacks) in this page.

### Custom states and custom state pseudo-class CSS selectors

Built in HTML elements can have different _states_, such as "hover", "disabled", and "read only".
Some of these states can be set as attributes using HTML or JavaScript, while others are internal, and cannot.
Whether external or internal, commonly these states have corresponding CSS [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) that can be used to select and style the element when it is in a particular state.

Autonomous custom elements (but not elements based on built-in elements) also allow you to define states and select against them using the [`:state()`](/en-US/docs/Web/CSS/:state) pseudo-class function.
The code below shows how this works using the example of an autonomous custom element that has an internal state `"collapsed"`.

The `collapsed` state is represented as a boolean property (with setter and getter methods) that is not visible outside of the element.
To make this state selectable in CSS the custom element first calls {{domxref("HTMLElement.attachInternals()")}} in its constructor in order to attach an {{domxref("ElementInternals")}} object, which in turn provides access to a {{domxref("CustomStateSet")}} through the {{domxref("ElementInternals.states")}} property.
The setter for the (internal) collapsed state adds the _identifier_ `hidden` to the `CustomStateSet` when the state is `true`, and removes it when the state is `false`.
The identifier is just a string: in this case we called it `hidden`, but we could have just as easily called it `collapsed`.

```js
class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  get collapsed() {
    return this._internals.states.has("hidden");
  }

  set collapsed(flag) {
    if (flag) {
      // Existence of identifier corresponds to "true"
      this._internals.states.add("hidden");
    } else {
      // Absence of identifier corresponds to "false"
      this._internals.states.delete("hidden");
    }
  }
}

// Register the custom element
customElements.define("my-custom-element", MyCustomElement);
```

We can use the identifier added to the custom element's `CustomStateSet` (`this._internals.states`) for matching the element's custom state.
This is matched by passing the identifier to the [`:state()`](/en-US/docs/Web/CSS/:state) pseudo-class.
For example, below we select on the `hidden` state being true (and hence the element's `collapsed` state) using the `:hidden` selector, and remove the border.

```css
my-custom-element {
  border: dashed red;
}
my-custom-element:state(hidden) {
  border: none;
}
```

The `:state()` pseudo-class can also be used within the [`:host()`](/en-US/docs/Web/CSS/:host_function) pseudo-class function to match a custom state [within a custom element's shadow DOM](/en-US/docs/Web/CSS/:state#matching_a_custom_state_in_a_custom_elements_shadow_dom). Additionally, the `:state()` pseudo-class can be used after the [`::part()`](/en-US/docs/Web/CSS/::part) pseudo-element to match the [shadow parts](/en-US/docs/Web/CSS/CSS_shadow_parts) of a custom element that is in a particular state.

There are several live examples in {{domxref("CustomStateSet")}} showing how this works.

## Examples

In the rest of this guide we'll look at a few example custom elements. You can find the source for all these examples, and more, in the [web-components-examples](https://github.com/mdn/web-components-examples) repository, and you can see them all live at <https://mdn.github.io/web-components-examples/>.

### An autonomous custom element

First, we'll look at an autonomous custom element. The `<popup-info>` custom element takes an image icon and a text string as attributes, and embeds the icon into the page. When the icon is focused, it displays the text in a pop up information box to provide further in-context information.

- [See the example running live](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)
- [See the source code](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component)

To begin with, the JavaScript file defines a class called `PopupInfo`, which extends the {{domxref("HTMLElement")}} class.

```js
// Create a class for the element
class PopupInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create spans
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    const icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    const info = document.createElement("span");
    info.setAttribute("class", "info");

    // Take attribute content and put it inside the info span
    const text = this.getAttribute("data-text");
    info.textContent = text;

    // Insert icon
    let imgUrl;
    if (this.hasAttribute("img")) {
      imgUrl = this.getAttribute("img");
    } else {
      imgUrl = "img/default.png";
    }

    const img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);

    // Create some CSS to apply to the shadow dom
    const style = document.createElement("style");
    console.log(style.isConnected);

    style.textContent = `
      .wrapper {
        position: relative;
      }

      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }

      img {
        width: 1.2rem;
      }

      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}
```

The class definition contains the [`constructor()`](/en-US/docs/Web/JavaScript/Reference/Classes/constructor) for the class, which always starts by calling [`super()`](/en-US/docs/Web/JavaScript/Reference/Operators/super) so that the correct prototype chain is established.

Inside the method `connectedCallback()`, we define all the functionality the element will have when the element is connected to the DOM. In this case we attach a shadow root to the custom element, use some DOM manipulation to create the element's internal shadow DOM structure — which is then attached to the shadow root — and finally attach some CSS to the shadow root to style it. We don't do this work in the constructor because an element's attributes are unavailable until it is connected to the DOM.

Finally, we register our custom element in the `CustomElementRegistry` using the `define()` method we mentioned earlier — in the parameters we specify the element name, and then the class name that defines its functionality:

```js
customElements.define("popup-info", PopupInfo);
```

It is now available to use on our page. Over in our HTML, we use it like so:

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

### Referencing external styles

In the above example we apply styles to the shadow DOM using a {{htmlelement("style")}} element, but you can reference an external stylesheet from a {{htmlelement("link")}} element instead. In this example we'll modify the `<popup-info>` custom element to use an external stylesheet.

- [See the example running live](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/)
- [See the source code](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-external-stylesheet)

Here's the class definition:

```js
// Create a class for the element
class PopupInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create spans
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    const icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    const info = document.createElement("span");
    info.setAttribute("class", "info");

    // Take attribute content and put it inside the info span
    const text = this.getAttribute("data-text");
    info.textContent = text;

    // Insert icon
    let imgUrl;
    if (this.hasAttribute("img")) {
      imgUrl = this.getAttribute("img");
    } else {
      imgUrl = "img/default.png";
    }

    const img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);

    // Apply external styles to the shadow dom
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "style.css");

    // Attach the created elements to the shadow dom
    shadow.appendChild(linkElem);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}
```

It's just like the original `<popup-info>` example, except that we link to an external stylesheet using a {{HTMLElement("link")}} element, which we add to the shadow DOM.

Note that {{htmlelement("link")}} elements do not block paint of the shadow root, so there may be a flash of unstyled content (FOUC) while the stylesheet loads.

Many modern browsers implement an optimization for {{htmlelement("style")}} tags either cloned from a common node or that have identical text, to allow them to share a single backing stylesheet. With this optimization the performance of external and internal styles should be similar.

### Customized built-in elements

Now let's have a look at a customized built in element example. This example extends the built-in {{HTMLElement("ul")}} element to support expanding and collapsing the list items.

- [See the example running live](https://mdn.github.io/web-components-examples/expanding-list-web-component/)
- [See the source code](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component)

> [!NOTE]
> Please see the [`is`](/en-US/docs/Web/HTML/Global_attributes/is) attribute reference for caveats on implementation reality of custom built-in elements.

First of all, we define our element's class:

```js
// Create a class for the element
class ExpandingList extends HTMLUListElement {
  constructor() {
    // Always call super first in constructor
    // Return value from super() is a reference to this element
    self = super();
  }

  connectedCallback() {
    // Get ul and li elements that are a child of this custom ul element
    // li elements can be containers if they have uls within them
    const uls = Array.from(self.querySelectorAll("ul"));
    const lis = Array.from(self.querySelectorAll("li"));
    // Hide all child uls
    // These lists will be shown when the user clicks a higher level container
    uls.forEach((ul) => {
      ul.style.display = "none";
    });

    // Look through each li element in the ul
    lis.forEach((li) => {
      // If this li has a ul as a child, decorate it and add a click handler
      if (li.querySelectorAll("ul").length > 0) {
        // Add an attribute which can be used  by the style
        // to show an open or closed icon
        li.setAttribute("class", "closed");

        // Wrap the li element's text in a new span element
        // so we can assign style and event handlers to the span
        const childText = li.childNodes[0];
        const newSpan = document.createElement("span");

        // Copy text from li to span, set cursor style
        newSpan.textContent = childText.textContent;
        newSpan.style.cursor = "pointer";

        // Add click handler to this span
        newSpan.addEventListener("click", (e) => {
          // next sibling to the span should be the ul
          const nextUl = e.target.nextElementSibling;

          // Toggle visible state and update class attribute on ul
          if (nextUl.style.display == "block") {
            nextUl.style.display = "none";
            nextUl.parentNode.setAttribute("class", "closed");
          } else {
            nextUl.style.display = "block";
            nextUl.parentNode.setAttribute("class", "open");
          }
        });
        // Add the span and remove the bare text node from the li
        childText.parentNode.insertBefore(newSpan, childText);
        childText.parentNode.removeChild(childText);
      }
    });
  }
}
```

Note that this time we extend {{domxref("HTMLUListElement")}}, rather than {{domxref("HTMLElement")}}. This means that we get the default behavior of a list, and only have to implement our own customizations.

As before, most of the code is in the `connectedCallback()` lifecycle callback.

Next, we register the element using the `define()` method as before, except that this time it also includes an options object that details what element our custom element inherits from:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Using the built-in element in a web document also looks somewhat different:

```html
<ul is="expanding-list">
  …
</ul>
```

You use a `<ul>` element as normal, but specify the name of the custom element inside the `is` attribute.

Note that in this case we must ensure that the script defining our custom element is executed after the DOM has been fully parsed, because `connectedCallback()` is called as soon as the expanding list is added to the DOM, and at that point its children have not been added yet, so the `querySelectorAll()` calls will not find any items. One way to ensure this is to add the [defer](/en-US/docs/Web/HTML/Element/script#defer) attribute to the line that includes the script:

```html
<script src="main.js" defer></script>
```

### Lifecycle callbacks

So far we've seen only one lifecycle callback in action: `connectedCallback()`. In the final example, `<custom-square>`, we'll see some of the others. The `<custom-square>` autonomous custom element draws a square whose size and color are determined by two attributes, named `"size"` and `"color"`.

- [See the example running live](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)
- [See the source code](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)

In the class constructor, we attach a shadow DOM to the element, then attach empty {{htmlelement("div")}} and {{htmlelement("style")}} elements to the shadow root:

```js
constructor() {
  // Always call super first in constructor
  super();

  const shadow = this.attachShadow({ mode: "open" });

  const div = document.createElement("div");
  const style = document.createElement("style");
  shadow.appendChild(style);
  shadow.appendChild(div);
}
```

The key function in this example is `updateStyle()` — this takes an element, gets its shadow root, finds its `<style>` element, and adds {{cssxref("width")}}, {{cssxref("height")}}, and {{cssxref("background-color")}} to the style.

```js
function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  shadow.querySelector("style").textContent = `
    div {
      width: ${elem.getAttribute("size")}px;
      height: ${elem.getAttribute("size")}px;
      background-color: ${elem.getAttribute("color")};
    }
  `;
}
```

The actual updates are all handled by the lifecycle callbacks. The `connectedCallback()` runs each time the element is added to the DOM — here we run the `updateStyle()` function to make sure the square is styled as defined in its attributes:

```js
connectedCallback() {
  console.log("Custom square element added to page.");
  updateStyle(this);
}
```

The `disconnectedCallback()` and `adoptedCallback()` callbacks log messages to the console to inform us when the element is either removed from the DOM, or moved to a different page:

```js
disconnectedCallback() {
  console.log("Custom square element removed from page.");
}

adoptedCallback() {
  console.log("Custom square element moved to new page.");
}
```

The `attributeChangedCallback()` callback is run whenever one of the element's attributes is changed in some way. As you can see from its parameters, it is possible to act on attributes individually, looking at their name, and old and new attribute values. In this case however, we are just running the `updateStyle()` function again to make sure that the square's style is updated as per the new values:

```js
attributeChangedCallback(name, oldValue, newValue) {
  console.log("Custom square element attributes changed.");
  updateStyle(this);
}
```

Note that to get the `attributeChangedCallback()` callback to fire when an attribute changes, you have to observe the attributes. This is done by specifying a `static get observedAttributes()` method inside the custom element class - this should return an array containing the names of the attributes you want to observe:

```js
static get observedAttributes() {
  return ["color", "size"];
}
```
