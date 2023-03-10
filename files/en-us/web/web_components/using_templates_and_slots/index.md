---
title: Using templates and slots
slug: Web/Web_Components/Using_templates_and_slots
---

{{DefaultAPISidebar("Web Components")}}

This article explains how you can use the {{htmlelement("template")}} and {{htmlelement("slot")}} elements to create a flexible template that can then be used to populate the shadow DOM of a web component.

## The truth about templates

When you have to reuse the same markup structures repeatedly on a web page, it makes sense to use some kind of a template rather than repeating the same structure over and over again.
This was possible before, but it is made a lot easier by the HTML {{htmlelement("template")}} element.
This element and its contents are not rendered in the DOM, but it can still be referenced using JavaScript.

Let's look at a trivial quick example:

```html
<template id="my-paragraph">
  <p>My paragraph</p>
</template>
```

This won't appear in your page until you grab a reference to it with JavaScript and then append it to the DOM, using something like the following:

```js
let template = document.getElementById("my-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

Although trivial, you can already start to see how this could be useful.

## Using templates with web components

Templates are useful on their own, but they work even better with web components.
Let's define a web component that uses our template as the content of its shadow DOM.
We'll call it `<my-paragraph>` as well:

```js
customElements.define(
  "my-paragraph",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("my-paragraph");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  }
);
```

The key point to note here is that we append a clone of the template content to the shadow root, created using the {{domxref("Node.cloneNode()")}} method.

And because we are appending its contents to a shadow DOM, we can include some styling information inside the template in a {{htmlelement("style")}} element, which is then encapsulated inside the custom element.
This wouldn't work if we just appended it to the standard DOM.

So for example:

```html
<template id="my-paragraph">
  <style>
    p {
      color: white;
      background-color: #666;
      padding: 5px;
    }
  </style>
  <p>My paragraph</p>
</template>
```

Now we can use it by just adding it to our HTML document:

```html
<my-paragraph></my-paragraph>
```

## Adding flexibility with slots

So far so good, but the element isn't very flexible.
We can only display one bit of text inside it, meaning that at the moment it is even less useful than a regular paragraph! We can make it possible to display different text in each element instance in a nice declarative way using the {{htmlelement("slot")}} element.

Slots are identified by their `name` attribute, and allow you to define placeholders in your template that can be filled with any markup fragment you want when the element is used in the markup.

So, if we want to add a slot into our trivial example, we could update our template's paragraph element like this:

```html
<p><slot name="my-text">My default text</slot></p>
```

If the slot's content isn't defined when the element is included in the markup, or if the browser doesn't support slots, `<my-paragraph>` just contains the fallback content "My default text".

To define the slot's content, we include an HTML structure inside the `<my-paragraph>` element with a {{htmlattrxref("slot")}} attribute whose value is equal to the name of the slot we want it to fill. As before, this can be anything you like, for example:

```html
<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
</my-paragraph>
```

or

```html
<my-paragraph>
  <ul slot="my-text">
    <li>Let's have some different text!</li>
    <li>In a list!</li>
  </ul>
</my-paragraph>
```

> **Note:** Nodes that can be inserted into slots are known as _Slottable_ nodes; when a node has been inserted in a slot, it is said to be _slotted_.

> **Note:** An unnamed {{HTMLElement("slot")}} will be filled with all of the custom element's top-level child nodes that do not have the {{htmlattrxref("slot")}} attribute. This includes text nodes.

And that's it for our trivial example.
If you want to play with it some more, you can [find it on GitHub](https://github.com/mdn/web-components-examples/tree/main/simple-template) (see it [running live](https://mdn.github.io/web-components-examples/simple-template/) also).

## A more involved example

To finish off the article, let's look at something a little less trivial.

The following set of code snippets show how to use {{HTMLElement("slot")}} together with {{HTMLElement("template")}} and some JavaScript to:

- create a **`<element-details>`** element with [named slots](/en-US/docs/Web/HTML/Element/slot#name) in its [shadow root](/en-US/docs/Web/API/ShadowRoot)
- design the **`<element-details>`** element in such a way that, when used in documents, it is rendered from composing the element's content together with content from its [shadow root](/en-US/docs/Web/API/ShadowRoot)—that is, pieces of the element's content are used to fill in [named slots](/en-US/docs/Web/HTML/Element/slot#name) in its [shadow root](/en-US/docs/Web/API/ShadowRoot)

Note that it is technically possible to use {{HTMLElement("slot")}} element without a {{HTMLElement("template")}} element, e.g., within say a regular {{HTMLElement("div")}} element, and still take advantage of the place-holder features of {{HTMLElement("slot")}} for Shadow DOM content, and doing so may indeed avoid the small trouble of needing to first access the template element's `content` property (and clone it).
However, it is generally more practical to add slots within a {{HTMLElement("template")}} element, since you are unlikely to need to define a pattern based on an already-rendered element.

In addition, even if it is not already rendered, the purpose of the container as a template should be more semantically clear when using the {{HTMLElement("template")}}. In addition, {{HTMLElement("template")}} can have items directly added to it, like {{HTMLElement("td")}}, which would disappear when added to a {{HTMLElement("div")}}.

> **Note:** You can find this complete example at [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) (see it [running live](https://mdn.github.io/web-components-examples/element-details/) also).

### Creating a template with some slots

First of all, we use the {{HTMLElement("slot")}} element within a {{HTMLElement("template")}} element to create a new "element-details-template" [document fragment](/en-US/docs/Web/API/DocumentFragment) containing some [named slots](/en-US/docs/Web/HTML/Element/slot#name):

```html
<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", Helvetica, Arial;
    }
    .name {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    h4 {
      margin: 10px 0 -8px 0;
    }
    h4 span {
      background: #217ac0;
      padding: 2px 6px 2px 6px;
    }
    h4 span {
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    h4 span {
      color: white;
    }
    .attributes {
      margin-left: 22px;
      font-size: 90%;
    }
    .attributes p {
      margin-left: 16px;
      font-style: italic;
    }
  </style>
  <details>
    <summary>
      <span>
        <code class="name">&lt;<slot name="element-name">NEED NAME</slot>&gt;</code>
        <span class="desc"><slot name="description">NEED DESCRIPTION</slot></span>
      </span>
    </summary>
    <div class="attributes">
      <h4><span>Attributes</span></h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr />
</template>
```

That {{HTMLElement("template")}} element has several features:

- The {{HTMLElement("template")}} has a {{HTMLElement("style")}} element with a set of CSS styles that are scoped just to the document fragment the {{HTMLElement("template")}} creates.
- The {{HTMLElement("template")}} uses {{HTMLElement("slot")}} and its {{htmlattrxref("name", "slot")}} attribute to make three [named slots](/en-US/docs/Web/HTML/Element/slot#name):

  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- The {{HTMLElement("template")}} wraps the [named slots](/en-US/docs/Web/HTML/Element/slot#name) in a {{HTMLElement("details")}} element.

### Creating a new \<element-details> element from the \<template>

Next, let's create a new custom element named **`<element-details>`** and use {{DOMXref("Element.attachShadow")}} to attach to it, as its [shadow root](/en-US/docs/Web/API/ShadowRoot), that document fragment we created with our {{HTMLElement("template")}} element above.
This uses exactly the same pattern as we saw in our earlier trivial example.

```js
customElements.define(
  "element-details",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById(
        "element-details-template"
      ).content;
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.cloneNode(true));
    }
  }
);
```

### Using the \<element-details> custom element with named slots

Now let's take that **`<element-details>`** element and actually use it in our document:

```html
<element-details>
  <span slot="element-name">slot</span>
  <span slot="description">A placeholder inside a web
    component that users can fill with their own markup,
    with the effect of composing different DOM trees
    together.</span>
  <dl slot="attributes">
    <dt>name</dt>
    <dd>The name of the slot.</dd>
  </dl>
</element-details>

<element-details>
  <span slot="element-name">template</span>
  <span slot="description">A mechanism for holding client-
    side content that is not to be rendered when a page is
    loaded but may subsequently be instantiated during
    runtime using JavaScript.</span>
</element-details>
```

About that snippet, notice these points:

- The snippet has two instances of **`<element-details>`** elements which both use the {{htmlattrxref("slot")}} attribute to reference the [named slots](/en-US/docs/Web/HTML/Element/slot#name) `"element-name"` and `"description"` we put in the `<element-details>` [shadow root](/en-US/docs/Web/API/ShadowRoot) .
- Only the first of those two **`<element-details>`** elements references the `"attributes"` [named slot](/en-US/docs/Web/HTML/Element/slot#name). The second `<element-details>` element lacks any reference to the `"attributes"` [named slot](/en-US/docs/Web/HTML/Element/slot#name).
- The first `<element-details>` element references the `"attributes"` [named slot](/en-US/docs/Web/HTML/Element/slot#name) using a {{HTMLElement("dl")}} element with {{HTMLElement("dt")}} and {{HTMLElement("dd")}} children.

### Adding a final bit of style

As a finishing touch, we'll add a tiny bit more CSS for the {{HTMLElement("dl")}}, {{HTMLElement("dt")}}, and {{HTMLElement("dd")}} elements in our doc:

```css
dl {
  margin-left: 6px;
}
dt {
  color: #217ac0;
  font-family: Consolas, "Liberation Mono", Courier;
  font-size: 110%;
  font-weight: bold;
}
dd {
  margin-left: 16px;
}
```

```css hidden
body {
  margin-top: 47px;
}
```

### Result

Finally let's put all the snippets together and see what the rendered result looks like.

{{ EmbedLiveSample('A_more_involved_example', '300','400','element-details.png','') }}

Notice the following points about this rendered result:

- Even though the instances of the **`<element-details>`** element in the document do not directly use the {{HTMLElement("details")}} element, they get rendered using {{HTMLElement("details")}} because the [shadow root](/en-US/docs/Web/API/ShadowRoot) causes them to get populated with that.
- Within the rendered {{HTMLElement("details")}} output, the content in the **`<element-details>`** elements fills the [named slots](/en-US/docs/Web/HTML/Element/slot#name) from the [shadow root](/en-US/docs/Web/API/ShadowRoot). In other words, the DOM tree from the **`<element-details>`** elements get _composed_ together with the content of the [shadow root](/en-US/docs/Web/API/ShadowRoot).
- For both **`<element-details>`** elements, an **Attributes** heading gets automatically added from the [shadow root](/en-US/docs/Web/API/ShadowRoot) before the position of the `"attributes"` [named slot](/en-US/docs/Web/HTML/Element/slot#name).
- Because the first **`<element-details>`** has a {{HTMLElement("dl")}} element which explicitly references the `"attributes"` [named slot](/en-US/docs/Web/HTML/Element/slot#name) from its [shadow root](/en-US/docs/Web/API/ShadowRoot), the contents of that {{HTMLElement("dl")}} replace the `"attributes"` [named slot](/en-US/docs/Web/HTML/Element/slot#name) from the [shadow root](/en-US/docs/Web/API/ShadowRoot).
- Because the second **`<element-details>`** doesn't explicitly reference the `"attributes"` [named slot](/en-US/docs/Web/HTML/Element/slot#name) from its [shadow root](/en-US/docs/Web/API/ShadowRoot), its content for that [named slot](/en-US/docs/Web/HTML/Element/slot#name) gets filled with the default content for it from the [shadow root](/en-US/docs/Web/API/ShadowRoot).
