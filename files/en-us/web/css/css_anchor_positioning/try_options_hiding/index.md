---
title: "Handling overflow: try fallbacks and conditional hiding"
slug: Web/CSS/CSS_anchor_positioning/Try_options_hiding
page-type: guide
---

{{CSSRef}}

When using [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning), an important consideration is ensuring that anchor-positioned elements always appear in a convenient place for the user to interact with them, if at all possible, regardless of where the anchor is positioned. For example, when you scroll the page, anchors and their associated positioned elements will move toward the edge of the viewport. When a positioned element starts to overflow the viewport, you will want to change its position to put it back on the screen again, for example on the opposite side of the anchor.

Alternatively, in some situations it may be preferable to just hide overflowing positioned elements — for example, if their anchors are off-screen their content might not make sense.

This guide explains how to use CSS anchor positioning mechanisms to manage these issues — **position-try fallback options** and **conditional hiding**. Position-try fallback options provide alternative positions for the browser to try placing positioned elements in as they start to overflow, to keep them on-screen. Conditional hiding allows conditions to be specified under which the anchor or a positioned element will be hidden.

> **Note:** For information on the basic fundamentals of CSS anchor positioning, see [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using).

## Feature summary

If a tooltip is fixed to the top-right of a UI element, when the user scrolls the content so that the UI feature is in the top-right corner of the viewport, that UI feature's tooltip will have scrolled off the screen. CSS anchor positioning solves such problems. The module's {{cssxref("position-try-fallbacks")}} property specifies one or more alternative position-try fallback options for the browser to try to prevent the positioned element from overflowing.

Position-try fallback options can be specified using:

- [Predefined fallback options](#predefined_fallback_options).
- [`inset-area` values](#using-inset-area_try_fallbacks).
- [Custom options](#custom_fallback_options) defined using the {{cssxref("@position-try")}} at-rule.

In addition, the {{cssxref("position-try-order")}} property allows you to specify various options that result in an available position try option being set in preference to the element's initial positioning. For example, you might want to initially display the element in a space that has more available height or width.

The shorthand property {{cssxref("position-try")}} can be used to specify `position-try-order` and `position-try-fallbacks` values in a single declaration.

In some situations, anchor-positioned content does not make sense if the anchor is off-screen, or vice-versa. For example, you might have an anchor containing a quiz question, and answers contained in associated positioned elements, and wish to show them both together or not at all. This can be achieved with conditional hiding, which is managed via the {{cssxref("position-visibility")}} property. This property takes various values that define conditions under which overflowing elements will be hidden.

## Predefined fallback options

The predefined fallback option values of the `position-try-fallbacks` property (defined as [`<try-tactic>`](/en-US/docs/Web/CSS/position-try-fallbacks#try-tactic)s in the spec) will "flip" the position of the anchor-positioned element across one or both axes if the element would otherwise overflow.

The element can be set to flip across the block axis (`flip-block`), the inline axis (`flip-inline`), or diagonally across an imaginary line drawn from a corner of the anchor through its center to its opposite corner (`flip-start`). These three values flip the element, mirroring its position on an opposite side for the first two values, and an adjacent side for `flip-start`. For example, if an element positioned `10px` above its anchor starts to overflow at the top of the anchor, the `flip-block` value would flip the positioned element to be 10px below its anchor.

In this example, we include two {{htmlelement("div")}} elements. The first one will be our anchor element, and the second one will be positioned relative to the anchor:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

We style the `<body>` element to be larger than the viewport so that we can scroll the anchor and the positioned element around in the viewport, both horizontally and vertically:

```css
body {
  width: 1500px;
  height: 500px;
}
```

For illustrative purposes, we absolutely position the anchor so that it appears somewhere near the center of the initial `<body>` rendering:

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
  left: 45%;
}
```

The anchor-positioned element is given fixed positioning and tethered to the anchor's top-left corner using an `inset-area`. It is given `position-try-fallbacks: flip-block, flip-inline;` to provide it with some fallback options for moving the positioned element to stop it from overflowing when the anchor gets near the edge of the viewport.

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
  position-try-fallbacks: flip-block, flip-inline;
}
```

> ![NOTE]
> When multiple position try fallback options are specified, they are separated by commas, and tried in the order they are specified.

Try scrolling the demo so that the anchor starts to get near the edges:

{{ EmbedLiveSample("Using predefined fallback options", "100%", "250") }}

- Move the anchor to the top of the viewport. The positioned element flips to the bottom-left of the anchor to avoid overflowing.
- Move the anchor to the left of the viewport. The positioned element flips to the top-right of the anchor to avoid overflowing.

If you move the anchor towards the top-left corner of the viewport, you'll notice a problem — as the positioned element starts to overflow in the block and inline direction, it flips back to its default top-left position and overflows in both directions, which is not what we want.

This happens because we only gave the browser position options of `flip-block` _or_ `flip-inline`. We didn't give it the option of trying both at the same time. The browser tries the fallback options, looking for one that causes the positioned element to be rendered completely inside the viewport or containing block. If it doesn't find one, it renders the positioned element in its originally defined rendering position, with no position fallback options applied.

The next section demonstrates how to fix this issue.

## Combining multiple values into one option

It is possible to put multiple [predefined try fallback options](#predefined_fallback_options) or [custom try option](#custom_fallback_options) names into a single space-separated try fallback option value within the comma-separated `position-try-fallbacks` list. When trying to apply these fallback options, the browser will combine the individual effects into a single combined fallback option.

Let's use a combined try fallback option to fix the problem we found with the previous demo. The HTML and CSS in this demo are the same, except for the infobox positioning styles. In this case, it is given a third position try fallback option: `flip-block flip-inline`:

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
  left: 45%;
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
  position-try-fallbacks:
    flip-block,
    flip-inline,
    flip-block flip-inline;
}
```

This means that the browser will first try `flip-block` and then try `flip-inline` to avoid overflow. If those fallback options both fail, it will then try combining the two, flipping the element's position in the block _and_ inline directions at the same time. Now when you scroll the anchor towards the top _and_ left edges of the viewport, the positioned element will flip over to the bottom-right.

{{ EmbedLiveSample("Combining multiple values into one option", "100%", "250") }}

## Using `inset-area` try fallbacks

The predefined `<try-tactic>` try fallback options are useful but limited, as they only allow positioned element placement to be flipped across axes. What if you had an anchor-positioned element positioned to the top left of its anchor, and wanted to change its position to directly below the anchor if it started to overflow?

To achieve this, you can use an {{cssxref("inset-area")}} value as a position-try fallback option, including it in the `position-try-fallbacks` list. This automatically creates a try fallback option based on that inset area. In effect, it is a shortcut for creating a [custom position option](#custom_fallback_options) that contains only that `inset-area` property value.

The following example shows `inset-area` position try fallback options in use. We use the same HTML and CSS, except for the infobox positioning. In this case, our position-try fallback options are `inset-area` values — `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left`, and `left`. The positioned element will be reasonably positioned no matter which viewport edge the anchor approaches. This verbose approach is more granular and flexible than the predefined values approach.

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
  left: 45%;
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
  position-try-fallbacks:
    top, top right, right,
    bottom right, bottom,
    bottom left, left;
}
```

> **Note:** `inset-area` try fallback options can't be added into a space-separated combined position option within a position-try fallback list.

Scroll the page and check out the effect of these position-try fallback options as the anchor nears the edge of the viewport:

{{ EmbedLiveSample("Using `inset-area` try fallbacks", "100%", "250") }}

## Custom fallback options

To use custom position fallback options that aren't available via the above mechanisms, you can create your own with the {{cssxref("@position-try")}} at-rule. The syntax is:

```text
@position-try --try-fallback-name {
  descriptor-list
}
```

The `--try-fallback-name` is a developer-defined name for the position try fallback option. This name can then be specified within the comma-separated list of try fallback options within the {{cssxref("position-try-fallbacks")}} property value. If multiple `@position-try` rules have the same name, the last one in the document order overrides the others. Avoid using the same name for your try fallback options _and_ your anchor or custom property names; it doesn't invalidate the at-rule, but it will make your CSS very difficult to follow.

The `descriptor-list` defines the property values for that individual custom try fallback option, including how the positioned element should be placed and sized, and any margins. The limited list of property descriptors allowed includes:

- {{cssxref("inset-area")}}
- [Inset properties](/en-US/docs/Glossary/Inset_properties)
- Margin properties (e.g. {{cssxref("margin-left")}}, {{cssxref("margin-block-start")}})
- [self-alignment](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) properties
- Sizing properties ({{cssxref("width")}}, {{cssxref("block-size")}}, etc.)
- {{cssxref("position-anchor")}}

The values you include in the at-rule get applied to the positioned element if the named custom-try fallback option gets applied. If any of the properties were previously set on the positioned element, those property values get overridden by the descriptor values. If the user scrolls, causing a different try fallback option or no try fallback option to be applied, the values from the previously-applied try fallback option are unset.

In this example, we set up and use several custom try fallback options. We use the same base HTML and CSS code as in the previous examples.

We start by defining four custom try fallback options using `@position-try`:

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
  left: 45%;
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

Once our custom try fallback options are created, we can include them in the position list by referencing their names:

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  inset-area: top;
  width: 200px;
  margin: 0 0 10px 0;
  position-try-fallbacks:
    --custom-left, --custom-bottom,
    --custom-right, --custom-bottom-right;
}
```

Note that our default position is defined by `inset-area: top`. When the infobox isn't overflowing the page in any direction, the infobox sits above the anchor, and the position-try fallback options set in the `position-try-fallbacks` property are ignored. Also, note that the infobox has a fixed width and bottom margin set. These values will change as different position-try fallback options are applied.

If the infobox starts to overflow, the browser tries the position options listed in the `position-try-fallbacks` property:

- The browser first tries the `--custom-left` fallback position. This moves the infobox to the left of the anchor, adjusts the margin to suit, and also gives the infobox a different width.
- Next, the browser tries the `--custom-bottom` position. This moves the infobox to the bottom of the anchor, and sets an appropriate margin. It doesn't include a `width` descriptor, so the infobox returns to its default width of `200px` set by the `width` property.
- The browser next tries the `--custom-right` position. This works much the same as the `--custom-left` position, with the same `width` descriptor value applied, but the `inset-area` and `margin` values are mirrored to place the infobox appropriately to the right.
- If none of the other fallbacks succeed in stopping the positioned element from overflowing, the browser tries the `--custom-bottom-right` position as a last resort. This works in much the same way as the other fallback options, but it places the positioned element to the bottom-right of the anchor.

If none of the fallbacks succeed in stopping the positioned element from overflowing, the position will revert to the initial `inset-area: top;` value.

> **Note:** When a position try fallback option is applied, its values will override the default values set on the positioned element. For example, the default `width` set on the positioned element is `200px`, but when the `--custom-right` position try fallback option is applied, its width is set to `100px`.

Scroll the page and check out the effect of these position-try fallback options as the anchor nears the edge of the viewport:

{{ EmbedLiveSample("Custom fallback options", "100%", "250") }}

## Using `position-try-order`

The {{cssxref("position-try-order")}} property has a slightly different focus to the rest of the position try functionality, in that it makes use of position try fallback options when the positioned element is first displayed, rather than when it is in the process of overflowing.

This property allows you to specify that you want the positioned element initially displayed using the position try fallback option that gives its containing block the most width or most height. This is achieved by setting the `most-height`, `most-width`, `most-block-size`, or `most-inline-size` values. You can also remove the effects of any previously set `position-try-order` values using the `normal` value.

If no position-try fallback option is available that provides more width/height than the initial positioning assigned to the element, `position-try-order` has no effect.

Let's have a look at a demo that shows the effect of this property. The HTML is the same as in previous examples, except that we've added a `<form>` containing radio buttons, allowing you to select different values of `position-try-order` to see their effects.

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

We include a custom try fallback option — `--custom-bottom` — which positions the element below the anchor and adds a margin:

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
  left: 45%;
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

We initially position the infobox at the top of the anchor, and then give it our custom try fallback:

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  bottom: anchor(top);
  margin-bottom: 10px;
  justify-self: anchor-center;
  position-try-fallbacks: --custom-bottom;
}
```

Finally, we include some JavaScript that sets a [`change`](/en-US/docs/Web/API/HTMLElement/change_event) event handler on the radio buttons. When a radio button is selected, its value is applied to the infobox's `position-try-order` property.

```js
const infobox = document.querySelector(".infobox");
const radios = document.querySelectorAll('[name="position-try-order"]');

for (const radio of radios) {
  radio.addEventListener("change", setTryOrder);
}

function setTryOrder(e) {
  const tryOrder = e.target.value;
  infobox.style.positionTryOrder = tryOrder;
}
```

Try selecting the `most-height` order option. This has the effect of applying the `--custom-bottom` position try fallback option, which positions the element below the anchor. This occurs because there is more space below the anchor than there is above it.

{{ EmbedLiveSample("Using `position-try-order`", "100%", "300") }}

## Conditionally hiding anchor-positioned elements

In some situations, you might want to hide an anchor-positioned element. For example, if the anchor element is clipped because it's too close to the edge of the viewport, you might want to just hide its associated element altogether. The {{cssxref("position-visibility")}} property allows you to specify conditions under which positioned elements are hidden.

By default, the positioned element is `always` displayed. The `no-overflow` value will **strongly hide** the positioned element if it starts to overflow its containing element or the viewport.

The `anchors-visible` value, on the other hand, strongly hides the positioned element if its associated anchor(s) are _completely_ hidden, either by overflowing its containing element (or the viewport) or being covered by other elements. The positioned element will be visible if any part of the anchor(s) is still visible.

A strongly hidden element acts as though it and its descendant elements have a {{cssxref("visibility")}} value of `hidden` set, regardless of what their actual `visibility` value is.

Let's see this property in action.

This example uses the same HTML and CSS as in the previous examples, with the infobox tethered to the anchor's bottom edge. The infobox is given `position-visibility: no-overflow;` to hide it completely when it is scrolled upwards to the point where it starts to overflow the viewport.

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

Scroll down the page and note how the positioned element is hidden once it reaches the top of the viewport:

{{ EmbedLiveSample("Conditional hiding using `position-visibility`", "100%", "250") }}

## See also

- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Learn: CSS positioning](/en-US/docs/Learn/CSS/CSS_layout/Positioning)
- [CSS logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values) module
- [Sizing items in CSS](/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
