---
title: Overview of scroll anchoring
short-title: Overview
slug: Web/CSS/CSS_scroll_anchoring/Scroll_anchoring
page-type: guide
browser-compat: css.properties.overflow-anchor
sidebar: cssref
---

As a user of the web, you are probably familiar with the problem that scroll anchoring solves. You browse to a long page on a slow connection and begin to scroll to read the content; while you are busy reading, the part of the page you are looking at suddenly jumps. This has happened because large images or some other elements have just loaded further up in the content.

Scroll anchoring is a browser feature that aims to solve this problem of content jumping, which happens if content loads in after the user has already scrolled to a new part of the document.

## How does it work?

Scroll anchoring adjusts the scroll position to compensate for the changes outside of the viewport. This means that the point in the document the user is looking at remains in the viewport, which may mean their scroll position actually changes in terms of how _far_ they have moved through the document.

## How do I turn on scroll anchoring?

You don't! The feature is enabled by default in supporting browsers. In most cases anchored scrolling is exactly what you want — content jumping is a poor experience for anyone.

## What if I need to debug it?

If your page is not behaving well with scroll anchoring enabled, it is probably because some `scroll` event listener is not handling the extra scrolling to compensate for the anchor node movement.

You can check whether disabling scroll anchoring fixes the issue in Firefox by changing `layout.css.scroll-anchoring.enabled` to `false` in `about:config`. You can also check what node Firefox is using as the anchor using the `layout.css.scroll-anchoring.highlight` switch. That will show a purple overlay on top of the anchor node.

If a node doesn't seem to be an appropriate anchor, you can exclude it using {{cssxref("overflow-anchor")}}, as described below.

## What if I need to disable it?

The [CSS scroll anchoring module](/en-US/docs/Web/CSS/CSS_scroll_anchoring) provides the {{cssxref("overflow-anchor")}} property, which can be used to disable scroll anchoring on all or part of the document. It's essentially a way to opt out of the behavior.

The only possible values are `auto` or `none`:

- `auto` is the initial value; as long as the user's browser supports scroll anchoring, the behavior will happen, and they should see fewer content jumps.
- `none` means that you have explicitly opted the document, or part of the document, out of scroll anchoring.

To opt out the entire document, you can set it on the {{htmlelement("body")}} element:

```css
body {
  overflow-anchor: none;
}
```

To opt out of scroll anchoring for a section of the document, set `overflow-anchor: none` on the section's container element:

```css
.container {
  overflow-anchor: none;
}
```

If opting out of scroll anchoring on the document or a section thereof, a descendant of an opted-out area cannot be opted back in. For example, if you opt out the entire document, you can't set `overflow-anchor: auto` on a descendant node to turn scroll anchoring back on for a subsection.

### Suppression triggers

There are some _suppression triggers_, which disable scroll anchoring in places where it might be problematic. If any of the triggers happen on the anchor node, or an ancestor of it, anchoring is suppressed.

These suppression triggers are changes to the computed value of any of the following properties:

- {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}}, or {{cssxref("bottom")}}
- {{cssxref("margin")}} or {{cssxref("padding")}}
- Any {{cssxref("width")}} or {{cssxref("height")}}-related properties
- {{cssxref("transform")}} and the individual transform properties {{cssxref("translate")}}, {{cssxref("scale")}}, and {{cssxref("rotate")}}

Additionally, {{cssxref("position")}} changes anywhere inside the {{glossary("scroll container")}} also disable scroll anchoring.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

To conditionally apply styles based on whether scroll anchoring can be disabled, use [`@supports` feature queries](/en-US/docs/Web/CSS/@supports) to test support for the `overflow-anchor` property.

## See also

- [Original scroll anchoring explainer](https://github.com/WICG/ScrollAnchoring/blob/master/explainer.md) via WICG (2016)
- [Scroll anchoring for web developers](https://blog.chromium.org/2017/04/scroll-anchoring-for-web-developers.html) via Chromium (2017)
