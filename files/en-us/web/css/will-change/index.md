---
title: will-change
slug: Web/CSS/will-change
tags:
  - CSS
  - CSS Property
  - CSS Will-change
  - Performance
  - Reference
  - Transitions
  - recipe:css-property
browser-compat: css.properties.will-change
---
{{CSSRef}}

The **`will-change`** [CSS](/en-US/docs/Web/CSS) property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.

> **Warning:** `will-change` is intended to be used as a last resort, in order to try to deal with existing performance problems. It should not be used to anticipate performance problems.

```css
/* Keyword values */
will-change: auto;
will-change: scroll-position;
will-change: contents;
will-change: transform;        /* Example of <custom-ident> */
will-change: opacity;          /* Example of <custom-ident> */
will-change: left, top;        /* Example of two <animatable-feature> */

/* Global values */
will-change: inherit;
will-change: initial;
will-change: revert;
will-change: revert-layer;
will-change: unset;
```

Proper usage of this property can be a bit tricky:

- _Don't apply will-change to too many elements._ The browser already tries as hard as it can to optimize everything. Some of the stronger optimizations that are likely to be tied to `will-change` end up using a lot of a machine's resources, and when overused like this can cause the page to slow down or consume a lot of resources.
- _Use sparingly._ The normal behavior for optimizations that the browser make is to remove the optimizations as soon as it can and revert back to normal. But adding `will-change` directly in a stylesheet implies that the targeted elements are always a few moments away from changing and the browser will keep the optimizations for much longer time than it would have otherwise. So it is a good practice to switch `will-change` on and off using script code before and after the change occurs.
- _Don't apply will-change to elements to perform premature optimization_. If your page is performing well, don't add the `will-change` property to elements just to wring out a little more speed. `will-change` is intended to be used as something of a last resort, in order to try to deal with existing performance problems. It should not be used to anticipate performance problems. Excessive use of `will-change` will result in excessive memory use and will cause more complex rendering to occur as the browser attempts to prepare for the possible change. This will lead to worse performance.
- _Give it sufficient time to work_. This property is intended as a method for authors to let the user-agent know about properties that are likely to change ahead of time. Then the browser can choose to apply any ahead-of-time optimizations required for the property change before the property change actually happens. So it is important to give the browser some time to actually do the optimizations. Find some way to predict at least slightly ahead of time that something will change, and set `will-change` then.
- _Be aware, that will-change may actually influence the visual appearance of elements_, when used with property values, that create a [stacking context](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) (e.g. will-change: opacity), as the stacking context is created up front.

## Syntax

### Values

- `auto`
  - : This keyword expresses no particular intent; the user agent should apply whatever heuristics and optimizations it normally does.

The `<animatable-feature>` can be one of the following values:

- `scroll-position`
  - : Indicates that the author expects to animate or change the scroll position of the element in the near future.
- `contents`
  - : Indicates that the author expects to animate or change something about the element's contents in the near future.
- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Indicates that the author expects to animate or change the property with the given name on the element in the near future. If the property given is a shorthand, it indicates the expectation for all the longhands the shorthand expands to. It cannot be one of the following values: `unset`, `initial`, `inherit`, `will-change`, `auto`, `scroll-position`, or `contents`. The spec doesn't define the behavior of particular value, but it is common for `transform` to be a compositing layer hint. [Chrome currently takes two actions](https://github.com/operasoftware/devopera/pull/330), given particular CSS property idents: establish a new compositing layer or a new {{Glossary("stacking context")}}.

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

### Via script

This is an example showing how to apply the `will-change` property through scripting, which is probably what you should be doing in most cases.

```js
const el = document.getElementById('element');

// Set will-change when the element is hovered
el.addEventListener('mouseenter', hintBrowser);
el.addEventListener('animationEnd', removeHint);

function hintBrowser() {
  // The optimizable properties that are going to change
  // in the animation's keyframes block
  this.style.willChange = 'transform, opacity';
}

function removeHint() {
  this.style.willChange = 'auto';
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform")}}
