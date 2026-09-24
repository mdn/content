---
title: "`will-change` CSS property"
short-title: will-change
slug: Web/CSS/Reference/Properties/will-change
page-type: css-property
browser-compat: css.properties.will-change
sidebar: cssref
---

The **`will-change`** [CSS](/en-US/docs/Web/CSS) property enables optimizing animations by providing a rendering hint to a browser about how an element is expected to change.

## Syntax

```css
/* Keyword values */
will-change: auto;
will-change: scroll-position;
will-change: contents;

/* <custom-ident> values */
will-change: transform;
will-change: opacity;

/* multiple values */
will-change: left, top;

/* Global values */
will-change: inherit;
will-change: initial;
will-change: revert;
will-change: revert-layer;
will-change: unset;
```

### Values

The value is either `auto` or one or more comma separated `<animatable-feature>` values:

- `auto`
  - : Indicates that the browser applies whatever heuristics and optimizations it normally does. This is the default value.

- `<animatable-feature>`
  - : Represents one of the following:
    - `scroll-position`
      - : Specifies that the scroll position of the element is expected to change in the near future, indicating the browser can optimize the rendering of overflowing content.

    - `contents`
      - : Specifies that the element's contents, including all the elements in its subtree, are expected to change in the near future, indicating the browser can cache the element less aggressively.

    - {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
      - : Specifies the name of a CSS property, as an {{cssxref("ident")}}, whose value is animated or otherwise expected to change in the near future. If the specified `<ident>` represents a property shorthand, all of its longhand components are applied. The value cannot be `will-change`, `none`, `all`, `auto`, `scroll-position`, or `contents`.

## Description

The `will-change` property provides a rendering hint to the browser indicating which properties are expected to be animated or otherwise changed. This enables browsers to create the necessary rendering optimizations to enable smoother changes and avoid {{glossary("jank")}}.

The `will-change` property is aimed at improving rendering performance. This property can improve performance for elements with frequent repaints and reflows or for those that use properties such as {{cssxref("box-shadow")}} and {{cssxref("clip-path")}} to create complex visual effects.

Applying the property to an element applies the value to the element's entire subtree, indicating that any of the descendants can change. For this reason, applying a non-`auto` value on a large section, such as the {{htmlelement("body")}}, can actually be bad for a page's performance. Instead, limit the use of this property to deeply nested elements, containing as little of the document as possible.

> [!WARNING]
> Use the `will-change` property as a last resort to try to deal with existing performance problems. Don't use it to anticipate performance problems.

Proper usage of this property can be a bit tricky. Keep the following guidelines in mind:

- **Don't apply `will-change` to too many elements**: The browser already tries as hard as it can to optimize everything. Some of the stronger optimizations that are likely to be tied to `will-change` end up using a lot of a machine's resources. Overusing the property can cause the page to slow down instead of improving it's performance.
- **Use sparingly**: The browser's normal behavior for optimizations is to remove the optimizations as soon as it can and revert to normal state. But adding `will-change` directly to a stylesheet implies that the targeted elements are always a few moments away from changing and the browser will keep the optimizations for a much longer time than it would have otherwise. So it is a good practice to switch `will-change` on and off using script code before and after the change occurs.
- **Don't apply will-change to elements to perform premature optimization**: If your page is performing well, don't add the `will-change` property to elements just to wring out a little more speed. `will-change` is intended to be used as a last resort to try to deal with existing performance problems. It should not be used to anticipate performance problems. Excessive use of `will-change` will result in excessive memory use and will cause more complex rendering to occur as the browser attempts to prepare for the possible change. This will lead to worse performance.
- **Give it sufficient time to work**: This property enables you to signal to the browser about properties that are likely to change, so the browser can choose to apply any ahead-of-time optimizations before the property change occurs. For this reason, you should give the browser some time to do the optimizations. Predict slightly ahead of time that something will change, and then set `will-change`.
- **Be aware that `will-change` may influence the visual appearance of elements**: When used with property values that create a [stacking context](/en-US/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) (e.g., `will-change: opacity`), the stacking context is created up front.

### Animations

If applying `will-change` to improve animations, add the property before the animation starts, not within the {{cssxref("@keyframes")}} animation definitions. Animated properties are treated as if they're already included in a `will-change`, so there's no reason to add them there.

### Via stylesheet

It may be appropriate to include `will-change` in your style sheet for an application that does page flips on key presses like an album or a slide deck presentation where the pages are large and complex. This will let browser prepare the transition ahead of time and allow for snappy transitions between the pages as soon as the key is pressed. But use caution with the `will-change` property directly in stylesheets. It may cause the browser to keep the optimization in memory for much longer than it is needed.

```css
.slide {
  will-change: transform;
}
```

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Basic usage

This example demonstrates the basic CSS application of the `will-change` property.

#### CSS

We use CSS to apply the `will-change` property to the `#element`, providing a hint to the browser that the {{cssxref("transform")}} and {{cssxref("opacity")}} property values will be animated or otherwise change in the near future.

```css
#element {
  will-change: transform, opacity;
}
```

### Via script

This example shows how to apply the `will-change` property when needed and remove optimizations when done using JavaScript, which is generally how `will-change` should be applied.

#### JavaScript

We use JavaScript to add the `will-change` property to `#element` when the element is hovered over by using the {{domxref("Element/mouseenter_event", "mouseenter")}} event. Setting `will-change` to `transform, opacity` tells the browser to optimize for changes to the {{cssxref("transform")}} and {{cssxref("opacity")}} properties. When the {{domxref("Element/animationend_event", "animationend")}} event occurs, our script sets the value to `auto`.

```js
const el = document.getElementById("element");

el.addEventListener("mouseenter", hintBrowser);
el.addEventListener("animationEnd", removeHint);

function hintBrowser() {
  this.style.willChange = "transform, opacity";
}

function removeHint() {
  this.style.willChange = "auto";
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform")}}
- Individual transform properties: {{cssxref("translate")}}, {{cssxref("scale")}}, {{cssxref("rotate")}}
- {{cssxref("animation")}}
- [CSS will change](/en-US/docs/Web/CSS/Guides/Will_change) module
