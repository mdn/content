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

The **`trigger-scope`** [CSS](/en-US/docs/Web/CSS) property can be used to limit the scope of a trigger name of a [scroll-triggered animation](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) to a document subtree.

## Syntax

```css
/* Keywords */
trigger-scope: none;
trigger-scope: all;

/* <dashed-ident> */
trigger-scope: --my-trigger;

/* Multiple values */
trigger-scope: --my-trigger, --another-trigger;

/* Global values */
trigger-scope: inherit;
trigger-scope: initial;
trigger-scope: revert;
trigger-scope: revert-layer;
trigger-scope: unset;
```

### Values

This property is specified as `none`, `all`, or a comma-separated list of {{cssxref("dashed-ident")}} values:

- `none`
  - : Specifies that no trigger scoping is set. This is the default value.
- `all`
  - : Sets the scope so that _any_ `timeline-trigger-name` values set in the subtree can only be associated with animated elements in the same subtree.
- {{cssxref("dashed-ident")}}
  - : A trigger name. Sets the scope so that the specified `timeline-trigger-name` values, when set in the subtree, can only be associated with animated elements in the same subtree.

## Description

The `trigger-scope` property is used to limit trigger scope to specific element subtrees in [scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations).

Trigger names, defined with the {{cssxref("timeline-trigger-name")}} property, are global by default. By default, if an elements is associate with a trigger name via its {{cssxref("animation-trigger")}} property, if multiple elements define triggers with the same trigger name, only the last element with that trigger name in the document tree will be used as the trigger.

The `trigger-scope` property can limit the scope of a trigger name to a subtree of the document, only visible to elements within the same subtree, and have no effect on elements outside the subtree. When `trigger-scope` is set on an element, when that element or its descendants are defined as triggers, animated elements are only associates with those triggers if they are within the same subtree.

When an animated element has an `animation-trigger` set, the browser determines what its trigger element is as follows:

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

### Basic usage

This example demonstrates using the `trigger-scope` property to limit the scope of an animation trigger name.

#### HTML

We include three separate components, each containing an animated element and trigger. Each of the three {{htmlelement("section")}} elements contains two {{htmlelement("div")}} elements: an `.animated` element and a `.trigger` element.

Most of the HTML, included a [checkbox](/en-US/docs/Web/HTML/Reference/Elements/input/checkbox) toggle that will enable disabling the `trigger-scope` property, have been hidden for brevity.

```html
<section id="one">
  <div class="animated"></div>
  ...
  <div class="trigger">Trigger for first animation</div>
  ...
</section>
<section id="two">
  <div class="animated"></div>
  ...
  <div class="trigger">Trigger for second animation</div>
  ...
</section>
<section id="three">
  <div class="animated"></div>
  ...
  <div class="trigger">Trigger for third animation</div>
  ...
</section>
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
<label for="trigger-scope"
  >Set <code>trigger-scope</code> to <code>none</code>
  <input id="trigger-scope" type="checkbox" />
</label>
```

#### CSS

We define three {{cssxref("@keyframes")}} animations. Each will be applied to a different `.animated` element.

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
    scale: 1;
  }

  to {
    background: blue;
    scale: 2;
  }
}

@keyframes move-up-down {
  25% {
    translate: 0 -20px;
  }

  75% {
    translate: 0 20px;
  }
}
```

```css hidden live-sample___trigger-scope
body {
  width: 60%;
  margin: 0 auto;
  font-size: 1.3rem;
  font-family: Arial, Helvetica, sans-serif;
}

p {
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

label {
  position: fixed;
  bottom: 2px;
  right: 2px;
  padding: 5px;
  border: 2px solid black;
  background: white;
}
```

The animated `<div>` elements's {{cssxref("position")}} are set to `fixed`, positioning them near the top of the scrollport to enable us to keep the animatable elements visible at all times.

Each animated element has the same `animation-trigger` value — their animations are triggered by a trigger with a `timeline-trigger-name` of `--t`, and the animations will play when their trigger activates and then reset when their trigger deactivates.

```css live-sample___trigger-scope
.animated {
  position: fixed;
  top: 10px;
  animation-trigger: --t play reset;
}
```

Each `.animated` element is set to a different named `animation`, and a different {{cssxref("left")}} value so that they are not positioned on top of one another.

```css live-sample___trigger-scope
#one .animated {
  animation: fade-in 1s infinite alternate ease-in;
  left: 10px;
}

#two .animated {
  animation: color-cycle 1s infinite alternate linear;
  left: 110px;
}

#three .animated {
  animation: move-up-down 2s infinite linear;
  left: 210px;
}
```

The `.trigger` elements are set as triggers for the `.animated` elements by giving them a {{cssxref("timeline-trigger-name")}} value that references the same name value, `--t`, and a `timeline-trigger-source` of `view()`. We set the `timeline-trigger-activation-range` to `contain`, so the activation and deactivation occurs when the trigger is still visible. We also set some rudimentary styles to make them stand out from the rest of the text.

```css live-sample___trigger-scope
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: contain;

  padding: 10px;
  border: 2px solid black;
  background: black;
  color: white;
}
```

Finally, we set the `trigger-scope` on the {{htmlelement("section")}} element to `all`. This limits the effect of each trigger named `--t` to their ancestor `<section>` container.

```css live-sample___trigger-scope
section {
  trigger-scope: all;
}
```

```css hidden live-sample___trigger-scope
:has(:checked) section {
  trigger-scope: none;
}

@supports not (trigger-scope: all) {
  body::before {
    content: "Your browser does not support the trigger-scope property.";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

#### Result

{{embedlivesample("Basic usage", "100%", 400)}}

We only see one square animate at a time as each square animates only when the trigger element located inside the same `<section>` is visible in the scrollport. Even though the three triggers share the same trigger name, each `.animated` element's animation is triggered by a different trigger. Only one square animates at a time as each one animates only when their same-scoped trigger element, located inside the same `<section>`, is visible in the scrollport.

Now check the checkbox to remove `trigger-scope: all` from the `<section>` element. Scroll through the content again. None of the squares animate until the third `.trigger` is visible in the scrollport, at which point all of the squares start animating at the same time. This is because scoping has been removed, so each `.animated` element's animation is activated and deactivated by the last `.trigger`'s trigger; all three animatable elements are now using the last trigger element in the DOM as their trigger.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, {{cssxref("timeline-trigger-activation-range")}}, and {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("timeline-trigger")}} shorthand property
- {{cssxref("animation-action")}} type
- [Using CSS scroll-triggered animations](/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- [CSS animation triggers](/en-US/docs/Web/CSS/Guides/Animation_triggers/) module
- [CSS animations](/en-US/docs/Web/CSS/Guides/Animations) module
