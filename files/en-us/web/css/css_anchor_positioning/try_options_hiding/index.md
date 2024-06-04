---
title: "Handling overflow: try options and conditional hiding"
slug: Web/CSS/CSS_anchor_positioning/Try_options_hiding
page-type: guide
---

{{CSSRef}}

When using [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning), an important consideration is ensuring that anchor-positioned elements will always appear in a convenient place for the user to interact with them if at all possible, regardless of where the anchor is positioned. This often requires changing an elements' position as its anchor gets close to the edge of its containing element or the viewport, to stop the positioned element overflowing.

Alternatively, in some situations it may be preferrable to just hide overflowing positioned elements.

This guide explains how to use the mechanisms CSS anchor positioning provides to manage overflow — **position try options** and **conditional hiding**.

> **Note:** For information on the basic fundamentals of CSS anchor positioning, see [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using).

## Feature summary

In CSS anchor positioning, the {{cssxref("position-try-options")}} property specifies one or more alternative position try options for the browser to try placing the positioned element in, to stop it from overflowing. Options can be specified using predefined try options, {{cssxref("inset-area")}} values (wrapped inside an [`inset-area()`](/en-US/docs/Web/CSS/inset-area_function) function), or custom options defined using the {{cssxref("@position-try")}} at-rule.

In addition, the {{cssxref("position-try-order")}} property allows you to specify various options that result in an available position try option being set in preference to the element's initial positioning. For example, you might want to initially display the element in a space that has more available height or width.

> **Note:** The shorthand property {{cssxref("position-try")}} can be used to specify `position-try-order` and `position-try-options` values in a single declaration.

Conditional hiding is managed via the {{cssxref("position-visibility")}} property, which takes various values that define conditions under which overflowing elements will be hidden.

## Using predefined try options

The predefined try options are as follows:

- `flip-block`
  - : Flips the element's position along the block axis so that it appears the same distance away from the anchor but on the opposite side of it. To put it another way, it mirrors the element's position across an inline axis drawn through the center of the anchor. As an example, if the positioned element started to overflow at the top of the anchor, this value would flip it to the bottom.
- `flip-inline`
  - : Flips the element's position along the inline axis so that it appears the same distance away from the anchor but on the opposite side of it. To put it another way, it mirrors the element's position across a block axis drawn through the center of the anchor. As an example, if the positioned element started to overflow at the left of the anchor, this value would flip it to the right.
- `flip-start`
  - : Mirrors the element's position across an axis drawn diagonally through the center of the anchor, passing through the point at the intersection of the block axis start and the inline axis start, and the point at the intersection of the block axis end and the inline axis end. As an example, if the positioned element started to overflow at the left of the anchor, this value would flip it to the top.

Let's look at an example that illustrates usage of a couple of these predefined values.

In this example, we include two {{htmlelement("div")}} elements in the HTML. The first one will be our anchor element, and the second one will be positioned relative to the anchor:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

In the CSS, we start by styling the `<body>` element to be very large, so that we can scroll the anchor and the positioned element around in the viewport, both horizontally and vertically:

```css
body {
  width: 1500px;
  height: 500px;
}
```

We absolutely position the anchor so that it appears somewhere near the center of the initial `<body>` rendering:

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --myAnchor;
  position: absolute;
  top: 100px;
  left: 350px;
}
```

The anchor-positioned element is given fixed positioning and tethered to the anchor's top-left corner using an `inset-area`. It is given `position-try-options: flip-block, flip-inline;` to provide it with some options for moving the positioned element to stop it overflowing when the anchor gets near the edge of the viewport.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;

  inset-area: top left;

  position-try-options: flip-block, flip-inline;
}
```

> **Note:** When multiple try options are specified, they are separated by commas. Position try options are tried in the order they are specified in.

This gives us the following result. Try scrolling the demo so that the anchor starts to get near the edges:

- If you move the anchor near the top of the viewport, you will see the positioned element flip to the bottom-left of the anchor to avoid overflowing.
- If you move the anchor near the left of the viewport, you will see the positioned element flip to the top-right of the anchor to avoid overflowing.

{{ EmbedLiveSample("Using predefined try options", "100%", "250") }}

However, if you move the anchor towards the top-left corner of the viewport, you'll notice a problem — as the positioned element starts to overflow in the block and inline direction, it flips back to its default top-left position and overflows in both directions, which not what we want.

This is because we only gave the browser position options of `flip-block` _or_ `flip-vertical`. We didn't give it an option of trying both at the same time. In addition, the browser tries the options, looking for one that causes the positioned element to be rendered completely inside the viewport or containing block. If it doesn't find one, it renders the positioned element in its default rendering position, with no position options applied.

The next section will show you how to fix this issue.

## Combining multiple values into one option

It is possible to put multiple [predefined try option](#using_predefined_try_options) or [custom try option](#using_custom_try_options) names into a single try option. The browser will combine the individual effects of these try options into a single combined option when trying to apply this option.

> **Note:** `inset-area` try options can't be added into a combined try option.

Let's use a combined try option to fix the problem we found with the previous demo. All of the HTML and CSS in this demo is the same, except for the infobox positioning code. In this case, it is given a third position try option: `flip-block flip-inline`:

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

```css hidden
body {
  width: 1500px;
  height: 500px;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --myAnchor;
  position: absolute;
  top: 100px;
  left: 350px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --myAnchor;

  inset-area: top left;

  position-try-options:
    flip-block,
    flip-inline,
    flip-block flip-inline;
}
```

This means that the browser will try `flip-block` and then `flip-inline` to avoid overflow. If those options both fail, it will then try combining the two, flipping the element's position in the block _and_ inline directions at the same time. Now when you scroll the anchor towards the top _and_ left edges of the viewport, the positioned element will flip over to the bottom-right.

{{ EmbedLiveSample("Combining multiple values into one option", "100%", "250") }}

## Using `inset-area` try options

You can use an {{cssxref("inset-area")}} value as a position try option. To do so, you need to wrap it inside an [`inset-area()`](/en-US/docs/Web/CSS/inset-area_function) function and then include it in the `position-try-options` list as normal. The `inset-area()` function has the effect of automatically creating a try option based on that inset area behind the scenes. In effect, it is a shortcut for creating a [custom try option](#using_custom_try_options) that contains only that `inset-area` property value.

Now we'll look at a demo that shows `inset-area` position try options in use. All of the HTML and CSS in this demo is the same, except for the infobox positioning code. In this case, our position try options are all `inset-area()` functions; we've included an option for top, top-right, right, bottom-right, bottom, bottom-left, and left.

This means that the positioned element will find a reasonable position to display in, whatever viewport edges the anchor is near. This approach is a bit more longwinded than the predefined values approach, but it is also more granular and flexible.

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

```css hidden
body {
  width: 1500px;
  height: 500px;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --myAnchor;
  position: absolute;
  top: 100px;
  left: 350px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --myAnchor;

  inset-area: top left;

  position-try-options:
    inset-area(top), inset-area(top right),
    inset-area(right), inset-area(bottom right),
    inset-area(bottom), inset-area(bottom left),
    inset-area(left);
}
```

Scroll the page and check out the effect of these position try options as the anchor nears the edge of the viewport:

{{ EmbedLiveSample("Using `inset-area` try options", "100%", "250") }}

## Using custom try options

If you want to use specific try options that aren't available via the above mechanisms, then you can create your own. This is done using the {{cssxref("@position-try")}} at-rule, the syntax of which looks like this:

```text
@position-try <dashed-ident> {
  declaration-list
}
```

- The {{cssxref("dashed-ident")}} is a developer-defined identifying name for the position try option, which can then be specified in the {{cssxref("position-try-options")}} property value to add that option to the try options list.
- The `declaration-list` is a list of declarations that define property values specifying the behavior of the custom try option, e.g., how it will result in the positioned element being placed or sized. Only certain properties can be used inside a `@position-try` block. This includes:
  - {{cssxref("position-anchor")}}
  - {{cssxref("inset-area")}}
  - [Inset properties](/en-US/docs/Glossary/Inset_properties) such as {{cssxref("top")}} or {{cssxref("inset-block-start")}}
  - Margin properties such as {{cssxref("margin-left")}} or {{cssxref("margin-inline-start")}}
  - Sizing properties such as {{cssxref("width")}} or {{cssxref("inline-size")}}
  - Self-alignment properties such as {{cssxref("align-self")}} and {{cssxref("justify-self")}}

In the next example we'll show how to set up and use some custom try options. All of the HTML and CSS in this demo is the same, except for the positioning code. First of all we'll define some custom try options using `@position-try`:

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

```css hidden
body {
  width: 1500px;
  height: 500px;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --myAnchor;
  position: absolute;
  top: 100px;
  left: 350px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
@position-try --custom-left {
  inset-area: left;
  width: 100px;
  margin: 0 10px 0 0;
}

@position-try --custom-bottom {
  inset-area: bottom;
  margin: 10px 0 0 0;
}

@position-try --custom-right {
  inset-area: right;
  width: 100px;
  margin: 0 0 0 10px;
}

@position-try --custom-bottom-right {
  inset-area: bottom right;
  margin: 10px 0 0 10px;
}
```

Now we can include those custom try options in the position list by referencing their names:

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  inset-area: top;
  width: 200px;
  margin: 0 0 10px 0;
  position-try-options:
    --custom-left, --custom-bottom,
    --custom-right, --custom-bottom-right;
}
```

Let's talk through how these position options work:

- First of all, note that our default position is defined by `inset-area: top`. When the infobox isn't overflowing the page in any direction, the infobox sits above the anchor, and the position try options set in the `position-try-options` property are ignored. Also note that the infobox has a fixed width and bottom margin set. These values will change as different position try options are applied.
- If the infobox starts to overflow, the browser first tries the `--custom-left` position. This moves the infobox to the left of the anchor, adjusts the margin to suit, and also gives the infobox a different width.
- Next, the browser tries the `--custom-bottom` position. This moves the infobox to the bottom of the anchor, and sets an appropriate margin. It doesn't include a `width` descriptor, so the infobox returns to its default width of `200px` set by the `width` property.
- The browser next tries the `--custom-right` position. This works much the same as the `--custom-left` position, with the same `width` descriptor value applied, but the `inset-area` and `margin` values are mirrored to place the infobox appropriately to the right.
- If none of the other try options succeed in stopping the postitioned element from overflowing, the browser tries the `--custom-bottom-right` position as a last resort. This works in much the same way as the other options, but it places the positioned element to the bottom-right of the anchor.

When a position try option is applied, its values will override the default values set on the positioned element. For example, the default `width` set on the positioned element is `200px`, but when the `--custom-right` position try option is applied, its width is set to `100px`.

Scroll the page and check out the effect of these position try options as the anchor nears the edge of the viewport:

{{ EmbedLiveSample("Using custom try options", "100%", "250") }}

## Using `position-try-order`

The {{cssxref("position-try-order")}} property has a slightly different focus to the rest of the position try functionality, in that it makes use of position try options when the positioned element is first displayed, rather than when it is in the process of overflowing.

It allows you to specify that you want the positioned element initially displayed using the position try option that gives its containing block the most width, or height. If no position try option is available that provides more width/height than the initial positioning assigned to the element, `position-try-order` has no effect.

`position-try-order` has five possible values:

- `normal`
  - : The default. no position try options will be tried when the element is first displayed.
- `most-height`
  - : The position try option will be applied that gives the element's containing block the most height.
- `most-width`
  - : The position try option will be applied that gives the element's containing block the most width.
- `most-block-size`
  - : The position try option will be applied that gives the element's containing block the most size in the block direction.
- `most-inline-size`
  - : The position try option will be applied that gives the element's containing block the most size in the inline direction.

Let's have a look at a demo that shows the effect of this property. The HTML is the same as in previous demos, except that we've added a `<form>` containing radio buttons, allowing you to select different values of `position-try-order` to see what their effects are.

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>

<form>
  <fieldset>
    <legend>Choose a try order</legend>
    <div>
      <label for="radio-normal">normal</label>
      <input
        type="radio"
        id="radio-normal"
        name="position-try-order"
        value="normal"
        checked />
    </div>
    <div>
      <label for="radio-most-height">most-height</label>
      <input
        type="radio"
        id="radio-most-height"
        name="position-try-order"
        value="most-height" />
    </div>
  </fieldset>
</form>
```

The CSS for the example is mostly the same as in previous ones. We do however include a custom try option — `--custom-bottom` — which positions the element below the anchor and gives it an appropriate margin value:

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --myAnchor;
  position: absolute;
  top: 100px;
  left: 250px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
}

form {
  position: fixed;
  bottom: 2px;
  right: 2px;
}
```

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

We initially position the infobox at the top of the anchor, and then give it our custom try option:

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;

  bottom: anchor(top);
  margin-bottom: 10px;
  justify-self: anchor-center;

  position-try-options: --custom-bottom;
}
```

Finally, we include some JavaScript. This sets a [`change`](/en-US/docs/Web/API/HTMLElement/change_event) event handler on the radio buttons so that, when a new value is selected, that value is applied to the infobox's `position-try-order` property.

```js
const infobox = document.querySelector(".infobox");
const form = document.forms[0];
const radios = form.elements["position-try-order"];

for (const radio of radios) {
  radio.addEventListener("change", setTryOrder);
}

function setTryOrder(e) {
  const tryOrder = e.target.value;
  infobox.style.positionTryOrder = tryOrder;
}
```

Try selecting the `most-height` order option. This has the effect of applying the `--custom-bottom` position try option, which positions the element below the anchor. This occurs because there is more space below the anchor than there is above it.

{{ EmbedLiveSample("Using `position-try-order`", "100%", "300") }}

## Conditional hiding using `position-visibility`

There are some situations in which you might not want to display an anchor-positioned element — for example, if it is clipped because its anchor is too close to the adge of the viewport, you might want to just hide it altogether. The {{cssxref("position-visibility")}} property allows you to control whether positioned elements are hidden in such situations. It can take the following values:

- `always`
  - : The positioned element is always displayed.
- `anchors-visible`
  - : If the anchor is completely hidden, either by overflowing its containing element (or the viewport) or being covered by other elements, the positioned element will be **strongly hidden**.
- `no-overflow`
  - : If the positioned element starts to overflow its containing element or the viewport, it will be strongly hidden.

> **Note:** A strongly hidden element acts as though it and its descendant elements have a {{cssxref("visibility")}} value of `hidden` set, regardless of what their actual `visibility` value is.

Let's see this property in action.

The HTML is basically the same as in the previous example, as is the CSS for the `<body>` and anchor element.

```html hidden
<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --myAnchor;
}

body {
  width: 50%;
  margin: 0 auto;
}
```

The infobox is given fixed positioning and tethered to the anchor's bottom edge. It is given `position-visibility: no-overflow;` to hide it completely when it is scrolled upwards to the point where it starts to overflow the viewport.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;

  margin-bottom: 5px;
  inset-area: top span-all;

  position-visibility: no-overflow;
}
```

This gives us the following result. Scroll down the page and note how the positioned element is hidden once it reaches the top of the viewport:

{{ EmbedLiveSample("Conditional hiding using `position-visibility`", "100%", "250") }}

## See also

- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Positioning](/en-US/docs/Learn/CSS/CSS_layout/Positioning)
- [CSS logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
- [Sizing items in CSS](/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
