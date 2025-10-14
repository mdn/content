---
title: Customizable select elements
short-title: Customizable selects
slug: Learn_web_development/Extensions/Forms/Customizable_select
page-type: learn-module-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

This article explains how to create fully-customized {{htmlelement("select")}} elements using experimental browser features. This includes having full control over styling the select button, drop-down picker, arrow icon, current selection checkmark, and each individual {{htmlelement("option")}} element.

> [!WARNING]
> The CSS and HTML features demonstrated in this article currently have limited browser support; check the browser compatibility tables on the individual feature reference pages for more details. Some JavaScript frameworks block these features; in others, they cause hydration failures when Server-Side Rendering (SSR) is enabled.

## Background

Traditionally it has been difficult to customize the look and feel of `<select>` elements because they contain internals that are styled at the operating system level, which can't be targeted using CSS. This includes the drop-down picker, arrow icon, and so on.

Previously, the best available option — aside from using a custom JavaScript library — was to set an {{cssxref("appearance")}} value of `none` on the `<select>` element to strip away some of the OS-level styling, and then use CSS to customize the bits that can be styled. This technique is explained in [Advanced form styling](/en-US/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling).

Customizable `<select>` elements provide a solution to these issues. They allow you to build examples like the following, using only HTML and CSS, which are fully customized in supporting browsers. This includes `<select>` and drop-down picker layout, color scheme, icons, font, transitions, positioning, markers to indicate the selected icon, and more.

{{EmbedLiveSample("full-render", "100%", "410px")}}

In addition, they provide a progressive enhancement on top of existing functionality, falling back to "classic" selects in non-supporting browsers.

You'll find out how to build this example in the sections below.

## What features comprise a customizable select?

You can build customizable `<select>` elements using the following HTML and CSS features:

- Plain old {{htmlelement("select")}}, {{htmlelement("option")}}, and {{htmlelement("optgroup")}} elements. These work just the same as in "classic" selects, except that they have additional permitted content types.
- A {{htmlelement("button")}} element included as the first child inside the `<select>` element, which wasn't previously allowed in "classic" selects. When this is included, it replaces the default "button" rendering of the closed `<select>` element. This is commonly known as the **select button** (as it is the button you need to press to open the drop-down picker).
  > [!NOTE]
  > The select button is [inert](/en-US/docs/Web/HTML/Reference/Global_attributes/inert) by default so that if interactive children (for example, links or buttons) are included inside it, it will still be treated like a single button for interaction purposes — for example, the child items won't be focusable or clickable.
- The {{htmlelement("selectedcontent")}} element can optionally be included inside the `<select>` element's first child `<button>` element in order to display the currently selected value inside the _closed_ `<select>` element.
  This contains a clone of the currently-selected `<option>` element's content (created using {{domxref("Node.cloneNode", "cloneNode()")}} under the hood).
- The {{cssxref("::picker()", "::picker(select)")}} pseudo-element, which targets the entire contents of the picker. This includes all elements inside the `<select>` element, except the first child `<button>`.
- The {{cssxref("appearance")}} property value `base-select`, which opts the `<select>` element and the `::picker(select)` pseudo-element into the browser-defined default styles and behavior for customizable select.
- The {{cssxref(":open")}} pseudo-class, which targets the select button when the picker (`::picker(select)`) is open.
- The {{cssxref("::picker-icon")}} pseudo-element, which targets the icon inside the select button — the arrow that points down when the select is closed.
- The {{cssxref(":checked")}} pseudo-class, which targets the currently-selected `<option>` element.
- The {{cssxref("::checkmark")}} pseudo-element, which targets the checkmark placed inside the currently-selected `<option>` element to provide a visual indication of which one is selected.

In addition, the `<select>` element and its drop-down picker have the following behavior assigned to them automatically:

- They have an invoker/popover relationship, as specified by the [Popover API](/en-US/docs/Web/API/Popover_API), which provides the ability to select the picker when open via the {{cssxref(":popover-open")}} pseudo-class. See [Using the Popover API](/en-US/docs/Web/API/Popover_API/Using) for more details of popover behavior.
- They have an implicit anchor reference, meaning that the picker is automatically associated with the `<select>` element via [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning). The browser default styles position the picker relative to the button (the anchor) and you can customize this position as explained in [Positioning elements relative to their anchor](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor). The browser default styles also define some position-try fallbacks that reposition the picker if it is in danger of overflowing the viewport. Position try fallback are explained in [Handling overflow: try fallbacks and conditional hiding](/en-US/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

> [!NOTE]
> You can check browser support for customizable `<select>` by viewing the browser compatibility tables on the reference pages for related features such as {{htmlelement("selectedcontent")}}, {{cssxref("::picker()", "::picker(select)")}}, and {{cssxref("::checkmark")}}.

Let's look at all of the above features in action, by walking through the example shown at the top of the page.

## Customizable select markup

Our example is a typical {{htmlelement("select")}} menu that allows you to choose a pet. The markup is as follows:

```html live-sample___plain-render live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
<form>
  <p>
    <label for="pet-select">Select pet:</label>
    <select id="pet-select">
      <button>
        <selectedcontent></selectedcontent>
      </button>

      <option value="">Please select a pet</option>
      <option value="cat">
        <span class="icon" aria-hidden="true">🐱</span
        ><span class="option-label">Cat</span>
      </option>
      <option value="dog">
        <span class="icon" aria-hidden="true">🐶</span
        ><span class="option-label">Dog</span>
      </option>
      <option value="hamster">
        <span class="icon" aria-hidden="true">🐹</span
        ><span class="option-label">Hamster</span>
      </option>
      <option value="chicken">
        <span class="icon" aria-hidden="true">🐔</span
        ><span class="option-label">Chicken</span>
      </option>
      <option value="fish">
        <span class="icon" aria-hidden="true">🐟</span
        ><span class="option-label">Fish</span>
      </option>
      <option value="snake">
        <span class="icon" aria-hidden="true">🐍</span
        ><span class="option-label">Snake</span>
      </option>
    </select>
  </p>
</form>
```

> [!NOTE]
> The [`aria-hidden="true"`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) attribute is included on the icons so that they will be hidden from assistive technologies, avoiding the option values being announced twice (for example, "cat cat").

The example markup is nearly the same as "classic" `<select>` markup, with the following differences:

- The `<button><selectedcontent></selectedcontent></button>` structure represents the select {{htmlelement("button")}}.
  Adding the {{htmlelement("selectedcontent")}} element causes the browser to clone the currently-selected {{htmlelement("option")}} inside the button, which you can then [provide custom styles for](#adjusting_the_styling_of_the_selected_option_contents_inside_the_select_button). If this structure is not included in your markup, the browser will fall back to rendering the selected option's text inside the default button, and you won't be able to style it as easily.
  > [!NOTE]
  > You _can_ include arbitrary content inside the `<button>` to render whatever you want inside the closed `<select>`, but be careful when doing this. What you include can alter the accessible value exposed to assistive technology for the `<select>` element.
- The rest of the `<select>` contents represents the drop-down picker, which is usually limited to the `<option>` elements representing the different choices in the picker. You can include other content in the picker, but it is not recommended.
- Traditionally, `<option>` elements could only contain text, but in a customizable select you can include other markup structures like images, other non-interactive text-level semantic elements, and more. You can even use the {{cssxref("::before")}} and {{cssxref("::after")}} pseudo-elements to include other content, although bear in mind that this wouldn't be included in the submittable value. In our example, each `<option>` contains two {{htmlelement("span")}} elements containing an icon and a text label respectively, allowing each one to be styled and positioned independently.

  > [!NOTE]
  > Because the `<option>` content can contain multi-level DOM sub-trees, not just text nodes, there are rules concerning how the browser should extract the [current `<select>` value](/en-US/docs/Web/API/HTMLSelectElement/value) via JavaScript. The selected `<option>` element's {{domxref("Node.textContent", "textContent")}} property value is retrieved, {{jsxref("String.prototype.trim", "trim()")}} is run on it, and the result is set as the `<select>` value.

This design allows non-supporting browsers to fall back to a classic `<select>` experience. The `<button><selectedcontent></selectedcontent></button>` structure will be ignored completely, and the non-text `<option>` contents will be stripped out to just leave the text node contents, but the result will still function.

## Opting in to the custom select rendering

To opt-in to the custom select functionality and minimal browser base styles (and remove the OS-provided styling), your `<select>` element and its drop-down picker (represented by the `::picker(select)` pseudo-element) both need to have an {{cssxref("appearance")}} value of `base-select` set on them:

```css live-sample___plain-render live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select,
::picker(select) {
  appearance: base-select;
}
```

```css hidden live-sample___plain-render live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
}

body {
  width: 100%;
  padding: 0 10px;
  max-width: 480px;
  margin: 0 auto;
}

h2 {
  font-size: 1.2rem;
}

p {
  display: flex;
  gap: 10px;
}

label {
  width: fit-content;
  align-self: center;
}

select {
  flex: 1;
}
```

You can choose to opt-in just the `<select>` element to the new functionality, leaving the picker with the default OS styling, but in most cases, you'll want to opt-in both. You can't opt-in the picker without opting in the `<select>` element.

Once this is done, the result is a very plain rendering of a `<select>` element:

{{EmbedLiveSample("plain-render", "100%", "240px")}}

You are now free to style this in any way you want. To begin with, the `<select>` element has custom {{cssxref("border")}}, {{cssxref("background")}} (which changes on {{cssxref(":hover")}} or {{cssxref(":focus")}}), and {{cssxref("padding")}} values set, plus a {{cssxref("transition")}} so that the background change animates smoothly:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select {
  border: 2px solid #dddddd;
  background: #eeeeee;
  padding: 10px;
  transition: 0.4s;
}

select:hover,
select:focus {
  background: #dddddd;
}
```

## Styling the picker icon

To style the icon inside the select button — the arrow that points down when the select is closed — you can target it with the {{cssxref("::picker-icon")}} pseudo-element. The following code gives the icon a custom {{cssxref("color")}} and a `transition` so that changes to its {{cssxref("rotate")}} property are smoothly animated:

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

Next up, `::picker-icon` is combined with the {{cssxref(":open")}} pseudo-class — which targets the select button only when the drop-down picker is open — to give the icon a `rotate` value of `180deg` when the `<select>` is opened.

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

Let's have a look at the work so far — note how the picker arrow rotates smoothly through 180 degrees when the `<select>` opens and closes:

{{EmbedLiveSample("second-render", "100%", "250px")}}

## Styling the drop-down picker

The drop-down picker can be targeted using the {{cssxref("::picker()", "::picker(select)")}} pseudo-element. As mentioned earlier, the picker contains everything inside the `<select>` element that isn't the button and the `<selectedcontent>`. In our example, this means all the `<option>` elements and their contents.

First of all, the picker's default black {{cssxref("border")}} is removed:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

Now the `<option>` elements are styled. They are laid out with [flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout), aligning them all to the start of the flex container and including a `20px` {{cssxref("gap")}} between each one. Each `<option>` is also given the same {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("padding")}}, and {{cssxref("transition")}} as the `<select>`, to provide a consistent look and feel:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option {
  display: flex;
  justify-content: flex-start;
  gap: 20px;

  border: 2px solid #dddddd;
  background: #eeeeee;
  padding: 10px;
  transition: 0.4s;
}
```

> [!NOTE]
> Customizable `<select>` element `<option>`s have `display: flex` set on them by default, but it is included in our stylesheet anyway to clarify what is going on.

Next, a combination of the {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}, and {{cssxref(":not()")}} pseudo-classes is used to set an appropriate {{cssxref("border-radius")}} on the top and bottom `<option>` elements, and remove the {{cssxref("border-bottom")}} from all `<option>` elements — except the last one so the borders don't look messy and doubled-up. We also set the same `border-radius` on the outer `::picker(select)` container so that we don't end up with an ugly square white box around the options if we decide to set a different background-color on the page.

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:first-of-type {
  border-radius: 8px 8px 0 0;
}

option:last-of-type {
  border-radius: 0 0 8px 8px;
}

::picker(select) {
  border-radius: 8px;
}

option:not(option:last-of-type) {
  border-bottom: none;
}
```

Next, a different `background` color is set on the odd-numbered `<option>` elements using {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} to implement zebra-striping, and a different `background` color is set on the `<option>` elements on focus and hover, to provide a useful visual highlight during selection:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

Finally for this section, a larger {{cssxref("font-size")}} is set on the `<option>` icons (contained within `<span>` elements with a class of `icon`) to make them bigger, and the {{cssxref("text-box")}} property is used to remove some of the annoying spacing at the block-start and block-end edges of the icon emojis, making them align better with the text labels:

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

Our example now renders like this:

{{EmbedLiveSample("third-render", "100%", "370px")}}

## Adjusting the styling of the selected option contents inside the select button

If you select any pet option from the last few live examples, you'll notice a problem — the pet icons cause the select button to increase in height, which also changes the position of the picker icon, and there is no spacing between the option icon and label.

This can be fixed by hiding the icon when it is contained inside `<selectedcontent>`, which represents the contents of the selected `<option>` as they appear inside the select button. In our example, it is hidden using {{cssxref("display", "display: none")}}:

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

This does not affect the styling of the `<option>` contents as they appear inside the drop-down picker.

## Styling the currently selected option

To style the currently selected `<option>` as it appears inside the drop-down picker, you can target it using the {{cssxref(":checked")}} pseudo-class. This is used to set the selected `<option>` element's {{cssxref("font-weight")}} to `bold`:

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## Styling the current selection checkmark

You've probably noticed that when you open the picker to make a selection, the currently selected `<option>` has a checkmark at its inline-start end. This checkmark can be targeted using the {{cssxref("::checkmark")}} pseudo-element. For example, you might want to hide this checkmark (for example, via `display: none`).

You could also choose to do something a bit more interesting with it — earlier on the `<option>` elements were laid out horizontally using flexbox, with the flex items being aligned to the start of the row. In the below rule, the checkmark is moved from the start of the row to the end by setting an {{cssxref("order")}} value on it greater than `0`, and aligning it to the end of the row using an `auto` {{cssxref("margin-left")}} value (see [Alignment and auto margins](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_and_auto_margins)).

Finally, the value of the {{cssxref("content")}} property is set to a different emoji, to set a different icon to display.

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> The `::checkmark` and `::picker-icon` pseudo-elements are not included in the accessibility tree, so any generated {{cssxref("content")}} set on them will not be announced by assistive technologies. You should still make sure that any new icon you set visually makes sense for its intended purpose.

Let's check in again on how the example is rendering. The updated state after the last three sections is as follows:

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## Animating the picker using popover states

The customizable `<select>` element's select `button` and drop-down picker are automatically given an invoker/popover relationship, as described in [Using the Popover API](/en-US/docs/Web/API/Popover_API/Using). There are many advantages that this brings to `<select>` elements; our example takes advantage of the ability to animate between popover hidden and showing states using transitions. The {{cssxref(":popover-open")}} pseudo-class represents popovers in the showing state.

The technique is covered quickly in this section — read [Animating popovers](/en-US/docs/Web/API/Popover_API/Using#animating_popovers) for a more detailed description.

First of all, the picker is selected using `::picker(select)`, and given an {{cssxref("opacity")}} value of `0` and a `transition` value of `all 0.4s allow-discrete`. This causes all properties that change value when the popover state changes from hidden to showing to animate.

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

The list of transitioned properties features `opacity`, however it also includes two discrete properties whose values are set by the browser default styles:

- {{cssxref("display")}}
  - : The `display` values changes from `none` to `block` when the popover changes state from hidden to shown. This needs to be animated to ensure that other transitions are visible.
- {{cssxref("overlay")}}
  - : The `overlay` value changes from `none` to `auto` when the popover changes state from hidden to shown, to promote it to the {{glossary("top layer")}}, then back again when it is hidden to remove it. This needs to be animated to ensure the removal of the popover from the top layer is deferred until the transition completes, ensuring the transition is visible.

> [!NOTE]
> The [`allow-discrete`](/en-US/docs/Web/CSS/transition-behavior#allow-discrete) value is needed to enable discrete property animations.

Next, the picker is selected in the showing state using `::picker(select):popover-open` and given an `opacity` value to `1` — this is the end state of the transition:

```css live-sample___full-render
::picker(select):popover-open {
  opacity: 1;
}
```

Finally, because the picker is being transitioned while it is moving from `display: none` to a `display` value that makes it visible, the transition's starting state has to be specified inside a {{cssxref("@starting-style")}} block:

```css live-sample___full-render
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
```

These rules work together to make the picker smoothly fade in and fade out when the `<select>` is opened and closed.

## Positioning the picker using anchor positioning

A customizable `<select>` element's select button and drop-down picker have an implicit anchor reference, and the picker is automatically associated with the select button via [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning). This means that an explicit association does not need to be made using the {{cssxref("anchor-name")}} and {{cssxref("position-anchor")}} properties.

In addition, the [browser's default styles provide a default position](/en-US/docs/Web/CSS/::picker#picker_anchor_positioning), which you can customize as explained in [Positioning elements relative to their anchor](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor).

In our demo, the position of the picker is set relative to its anchor by using the {{cssxref("anchor()")}} function inside its {{cssxref("top")}} and {{cssxref("left")}} property values:

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

This results in the top edge of the picker always being positioned 1 pixel down from the bottom edge of the select button, and the left edge of the picker always being positioned `10%` of the select button's width across from its left edge.

## Final result

After the last two sections, the final updated state of our `<select>` is rendered like this:

{{EmbedLiveSample("full-render", "100%", "410px")}}

## Customizing other classic select features

The above sections have covered all the new functionality available in customizable selects, and shown how it interacts with both classic single-line selects, and related modern features such as popovers and anchor positioning. There are some other `<select>` element features not mentioned above; this section talks about how they currently work alongside customizable selects:

- [`<select multiple>`](/en-US/docs/Web/HTML/Reference/Attributes/multiple)
  - : There isn't currently any support specified for the `multiple` attribute on customizable `<select>` elements, but this will be worked on in the future.
- {{htmlelement("optgroup")}}
  - : The default styling of `<optgroup>` elements is the same as in classic `<select>` elements — bolded and indented less than the contained options. You need to make sure to style the `<optgroup>` elements so they fit into the overall design, and bear in mind that they will behave just as containers are expected to behave in conventional HTML. In customizable `<select>` elements, the {{htmlelement("legend")}} element is allowed as a child of `<optgroup>`, to provide a label that is easy to target and style. This replaces any text set in the `<optgroup>` element's `label` attribute, and it has the same semantics.

## Next up

In the next article of this module, we will explore the different [UI pseudo-classes](/en-US/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) available to us in modern browsers for styling forms in different states.

## See also

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
