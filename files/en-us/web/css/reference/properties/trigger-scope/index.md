---
title: trigger-scope CSS property
short-title: trigger-scope
slug: Web/CSS/Reference/Properties/trigger-scope
page-type: css-property
status:
  - experimental
browser-compat: css.properties.trigger-scope
sidebar: cssref
---

{{SeeCompatTable}}

The **`trigger-scope`** [CSS](/en-US/docs/Web/CSS) property can be used to limit the scope within which an animated element can be associated with a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations) trigger to a particular subtree.

## Syntax

```css
/* Single value */
trigger-scope: none;
trigger-scope: all;
trigger-scope: --my-trigger;

/* Multiple <dashed-ident> values */
trigger-scope: --my-trigger, --another-trigger;

/* Global values */
trigger-scope: inherit;
trigger-scope: initial;
trigger-scope: revert;
trigger-scope: revert-layer;
trigger-scope: unset;
```

The `trigger-scope` property is specified as the keyword `none`, the keyword `all`, or one or more {{cssxref("dashed-ident")}} values.

### Values

- `none`
  - : Specifies that no trigger scoping is set. This is the default value.
- `all`
  - : Sets the scope so that _any_ `timeline-trigger-name` values set in the subtree can only be associated with animated elements in the same subtree.
- [`<dashed-ident>#`](/en-US/docs/Web/CSS/Reference/Values/dashed-ident)
  - : One or more comma-separated `<dashed-ident>`s representing trigger names. Sets the scope so that the specified `timeline-trigger-name` values, when set in the subtree, can only be associated with animated elements in the same subtree.

## Description

The `trigger-scope` property is used to limit [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations) trigger scope to particular element subtrees. When such a scope is set on an element, this means that when that element or its descendents are specified as triggers (using the {{cssxref("timeline-trigger-name")}} property), animated elements can only associate themselves with those triggers (using the {{cssxref("animation-trigger")}} property) if they are within the same subtree.

When an animated element has an `animation-trigger` set on it, the browser determines what its trigger element is as follows:

1. It walks up the animated element's ancestor tree until it finds an ancestor with a `timeline-trigger-name` set that is the same as the name referenced in its `animation-trigger` property value. If the animated element is also the trigger, it will be found instantly.
2. If it can't find a suitable ancestor trigger, it will use the _last_ element in the HTML source order with that `timeline-trigger-name` value.
3. If it can't find an element anywhere in the DOM with that `timeline-trigger-name` value, the animated element won't be scroll-triggered; it will be animated on page load.

Having multiple elements with the same `timeline-trigger-name` set can create a problem. For example, if a document contains multiple repeated components, each containing a scroll-triggered animation where the animated element and trigger are different elements, all of the animated elements will have their animations controlled by the last component's trigger element. This is likely not the desired behavior.

Trigger scoping is needed to fix such scoping conflicts. You could fix it by using a different `timeline-trigger-name` in each component, but this is inconvenient.

Which trigger names are included in the scope depends on the `trigger-scope` value set:

- `trigger-scope: all` means that all trigger names are included in the scope.
- `trigger-scope: --my-trigger, --another-trigger` means that only triggers with names of `--my-trigger` and/or `--another-trigger` are included in the scope.
- `trigger-scope: none` means that no trigger scoping is set on the element.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Demonstration of `trigger-scope` usage

This example includes three separate components, each containing an animated element and trigger, and illustrates how same-named triggers can create conflicts. It also demonstrates how `trigger-scope` can be used to solve such problems.

#### HTML

In the markup for this example, we have three {{htmlelement("section")}} elements, each one containing an animated {{htmlelement("div")}} and another `<div>` to act as its trigger. We also have a {{htmlelement("form")}} element containing a [checkbox](/en-US/docs/Web/HTML/Reference/Elements/input/checkbox), which can be used to apply `trigger-scope` to the `<section>` elements when checked. It is initially unchecked, meaning no scoping is applied.

```html
<section id="one">
  <div class="animated"></div>
  ...
  <div class="trigger">Trigger for first animation</div>
  ...
</section>
<section id="two">...</section>
<section id="three">...</section>

<form>
  <label for="trigger-scope">
    Set <code>trigger-scope</code> on containers
  </label>
  <input id="trigger-scope" type="checkbox" />
</form>
```

```html hidden live-sample___trigger-scope
<section id="one">
  <div class="animated"></div>

  <p>
    Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
    purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
    ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
    euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
    Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
    sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
    facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
    suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
    iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
    luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
    tristique tellus, sed tincidunt velit.
  </p>

  <div class="trigger">Trigger for first animation</div>

  <p>
    Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
    purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
    ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
    euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
    Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
    sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
    facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
    suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
    iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
    luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
    tristique tellus, sed tincidunt velit.
  </p>
</section>
<section id="two">
  <div class="animated"></div>
  <p>
    Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
    purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
    ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
    euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
    Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
    sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
    facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
    suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
    iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
    luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
    tristique tellus, sed tincidunt velit.
  </p>

  <div class="trigger">Trigger for second animation</div>

  <p>
    Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
    purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
    ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
    euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
    Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
    sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
    facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
    suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
    iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
    luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
    tristique tellus, sed tincidunt velit.
  </p>
</section>
<section id="three">
  <div class="animated"></div>

  <p>
    Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
    purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
    ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
    euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
    Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
    sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
    facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
    suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
    iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
    luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
    tristique tellus, sed tincidunt velit.
  </p>

  <div class="trigger">Trigger for third animation</div>

  <p>
    Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
    purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
    ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
    euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
    Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
    sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
    facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
    suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
    iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
    luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
    tristique tellus, sed tincidunt velit.
  </p>
</section>
<form>
  <label for="trigger-scope"
    >Set <code>trigger-scope</code> on containers</label
  >
  <input id="trigger-scope" type="checkbox" />
</form>
```

#### CSS

```css hidden live-sample___trigger-scope
body {
  width: 60%;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
}

p {
  font-size: 1.3rem;
  line-height: 1.5;
}

section {
  background: #eee;
  padding: 10px 20px;
  margin-top: 20px;
}

.animated {
  width: 50px;
  height: 50px;
  background: red;
  border: 5px solid black;
}

form {
  position: fixed;
  bottom: 2px;
  right: 2px;
  padding: 5px;
  border: 2px solid black;
  background: white;
}
```

We give each `.animated` `<div>` a {{cssxref("position")}} of `fixed`, and position them near the top of the viewport. We do this so it is easy to see their animated state at all times. We also give each animated element the same `animation-trigger` value — their animations will all be triggered by a trigger with `timeline-trigger-name: --t`, and the animation will play when it activates and then reset when it deactivates.

```css live-sample___trigger-scope
.animated {
  position: fixed;
  top: 10px;
  animation-trigger: --t play reset;
}
```

Each `.animated` `<div>` is then given a different `animation`, and a different {{cssxref("left")}} value so that they are not positioned on top of one another.

```css live-sample___trigger-scope
#one .animated {
  animation: fade-in 1s infinite alternate ease-in both;
  left: 10px;
}

#two .animated {
  animation: color-cycle 1s infinite alternate linear both;
  left: 110px;
}

#three .animated {
  animation: move-up-down 2s infinite linear both;
  left: 210px;
}
```

Next, we set our `.trigger` `<div>` elements as triggers for the `.animated` `<div>` elements by giving them a {{cssxref("timeline-trigger")}} value that references the same name value, `--t`. We also set some rudimentary styles to make them stand out from the rest of the text.

```css live-sample___trigger-scope
.trigger {
  timeline-trigger: --t view() contain;
  padding: 10px;
  border: 2px solid black;
  background: black;
  color: white;
}
```

We then define a `.scoped` class style, which sets a `trigger-scope` value of `all`. This `class` will be set on the three `<section>` elements when the checkbox is checked, and removed again when the checkbox is unchecked.

```css live-sample___trigger-scope
.scoped {
  trigger-scope: all;
}
```

Finally, we define the {{cssxref("@keyframes")}} referenced in the `animation` properties set earlier.

```css live-sample___trigger-scope
@keyframes fade-in {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes color-cycle {
  from {
    background: red;
  }

  to {
    background: blue;
  }
}

@keyframes move-up-down {
  25% {
    translate: 0 -10px;
  }

  75% {
    translate: 0 10px;
  }
}
```

```js hidden live-sample___trigger-scope
const sections = document.querySelectorAll("section");
const checkbox = document.querySelector("input");

checkbox.addEventListener("change", () => {
  sections.forEach((section) => {
    section.classList.toggle("scoped");
  });
});
```

The example renders like this:

{{embedlivesample("trigger-scope", "100%", 400)}}

Scroll through the example content without checking the checkbox. None of the red squares (the `.animated` `<div>` elements) animate until the third `.trigger` `<div>` is visible in the viewport, at which point all of the red squares will start to animate — they are all using the last trigger element in the DOM as their trigger.

Now scroll up to the top of the content, check the checkbox to apply `trigger-scope: all` to all of the `<section>` elements, and scroll through the content again. This time you will only see one red square animate at a time — each one animates only when the trigger element located inside the same `<section>` is visible in the viewport.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, {{cssxref("timeline-trigger-activation-range")}}, and {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("timeline-trigger")}} shorthand property
- {{cssxref("animation-action")}} type
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animations/Using_scroll-triggered_animations)
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
