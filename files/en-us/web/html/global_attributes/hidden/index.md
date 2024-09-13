---
title: hidden
slug: Web/HTML/Global_attributes/hidden
page-type: html-attribute
browser-compat: html.global_attributes.hidden
---

{{HTMLSidebar("Global_attributes")}}

The **`hidden`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is an {{Glossary("enumerated")}} attribute indicating that the browser should not render the contents of the element. For example, it can be used to hide elements of the page that can't be used until the login process has been completed.

{{EmbedInteractiveExample("pages/tabbed/attribute-hidden.html","tabbed-shorter")}}

## Description

The `hidden` attribute is used to indicate that the content of an element should not be presented to the user. This attribute can take any one of the following values:

- an empty string
- the keyword `hidden`
- the keyword `until-found`

There are two states associated with the `hidden` attribute: the _hidden_ state and the _hidden until found_ state.

- An empty string, or the keyword `hidden`, set the element to the _hidden_ state. Additionally, invalid values set the element to the _hidden_ state.

- The keyword `until-found` sets the element to the _hidden until found_ state.

Thus, all the following set the element to the [_hidden_](#the_hidden_state) state:

```html
<span hidden>I'm hidden</span>
<span hidden="">I'm also hidden</span>
<span hidden="hidden">I'm hidden too!</span>
```

The following sets the element to the [_hidden until found_](#the_hidden_until_found_state) state:

```html
<span hidden="until-found">I'm hidden until found</span>
```

The `hidden` attribute must not be used to hide content just from one presentation. If something is marked hidden, it is hidden from all presentations, including, for instance, screen readers.

Hidden elements shouldn't be linked from non-hidden elements. For example, it would be incorrect to use the `href` attribute to link to a section marked with the `hidden` attribute. If the content is not applicable or relevant, then there is no reason to link to it.

It would be fine, however, to use the ARIA [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attribute to refer to descriptions that are themselves hidden. While hiding the descriptions implies that they are not useful on their own, they could be written in such a way that they are useful in the specific context of being referenced from the element that they describe.

Similarly, a canvas element with the `hidden` attribute could be used by a scripted graphics engine as an off-screen buffer, and a form control could refer to a hidden form element using its form attribute.

Elements that are descendants of a hidden element are still active, which means that script elements can still execute and form elements can still submit.

### The hidden state

The _hidden_ state indicates that the element is not currently relevant to the page, or that it is being used to declare content for reuse by other parts of the page and should not be directly presented to the user. The browser will not render elements that are in the _hidden_ state.

Web browsers may implement the _hidden_ state using `display: none`, in which case the element will not participate in page layout. This also means that changing the value of the CSS {{cssxref("display")}} property on an element in the _hidden_ state will override the state. For instance, elements styled `display: block` will be displayed despite the `hidden` attribute's presence.

### The hidden until found state

In the _hidden until found_ state, the element is hidden but its content will be accessible to the browser's "find in page" feature or to fragment navigation. When these features cause a scroll to an element in a _hidden until found_ subtree, the browser will:

- fire a [`beforematch`](/en-US/docs/Web/API/Element/beforematch_event) event on the hidden element
- remove the `hidden` attribute from the element
- scroll to the element

This enables a developer to collapse a section of content, but make it searchable and accessible via fragment navigation.

Note that browsers typically implement _hidden until found_ using {{cssxref("content-visibility", "content-visibility: hidden")}}. This means that unlike elements in the _hidden_ state, elements in the _hidden until found_ state will have generated boxes, meaning that:

- the element will participate in page layout
- margin, borders, padding, and background for the element will be rendered.

Also, the element needs to be affected by [layout containment](/en-US/docs/Web/CSS/CSS_containment) in order to be revealed. This means that if the element in the _hidden until found_ state has a `display` value of `none`, `contents`, or `inline`, then the element will not be revealed by find in page or fragment navigation.

## Examples

### Using until-found

In this example we have:

- Three {{HTMLElement("div")}} elements. The first and the third are not hidden, while the second has `hidden="until-found"` and `id="until-found-box"` attributes.
- A link whose target is the `"until-found-box"` fragment.

The hidden until found element has a dotted red border and a gray background.

We also have some JavaScript that listens for the `beforematch` event firing on the hidden until found element. The event handler changes the text content of the box.

#### HTML

```html
<a href="#until-found-box">Go to hidden content</a>

<div>I'm not hidden</div>
<div id="until-found-box" hidden="until-found">Hidden until found</div>
<div>I'm not hidden</div>
```

```html hidden
<button id="reset">Reset</button>
```

#### CSS

```css
div {
  height: 40px;
  width: 300px;
  border: 5px dashed black;
  margin: 1rem 0;
  padding: 1rem;
  font-size: 2rem;
}

div#until-found-box {
  color: red;
  border: 5px dotted red;
  background-color: lightgray;
}
```

```css hidden
#until-found-box {
  scroll-margin-top: 200px;
}
```

#### JavaScript

```js
const untilFound = document.querySelector("#until-found-box");
untilFound.addEventListener(
  "beforematch",
  () => (untilFound.textContent = "I've been revealed!"),
);
```

```js hidden
document.querySelector("#reset").addEventListener("click", () => {
  document.location.hash = "";
  document.location.reload();
});
```

#### Result

Note that although the content of the element is hidden, the element still has a generated box, occupying space in the layout and with background and borders rendered.

Clicking the "Go to hidden content" button navigates to the hidden until found element. The `beforematch` event fires, the text content is updated, and the element content is displayed.

To run the example again, click "Reset".

{{EmbedLiveSample("Using until-found", "", 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("HTMLElement.hidden")}}
- All [global attributes](/en-US/docs/Web/HTML/Global_attributes)
- The [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) attribute
- The [`beforematch`](/en-US/docs/Web/API/Element/beforematch_event) event
