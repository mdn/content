---
title: Guide to scroll anchoring
slug: Web/CSS/overflow-anchor/Guide_to_scroll_anchoring
page-type: guide
browser-compat: css.properties.overflow-anchor
---

{{CSSRef}}

As a user of the web, you are probably familiar with the problem that scroll anchoring solves. You browse to a long page on a slow connection and begin to scroll to read the content; while you are busy reading, the part of the page you are looking at suddenly jumps. This has happened because large images or some other elements have just loaded further up in the content.

Scroll anchoring is a browser feature that aims to solve this problem of content jumping, which happens if content loads in after the user has already scrolled to a new part of the document.

## How does it work?

Scroll anchoring adjusts the scroll position to compensate for the changes outside of the viewport. This means that the point in the document the user is looking at remains in the viewport, which may mean their scroll position actually changes in terms of how _far_ they have moved through the document.

## How do I turn on scroll anchoring?

You don't! The feature is enabled by default in supporting browsers. In most cases anchored scrolling is exactly what you want — content jumping is a poor experience for anyone.

## What if I need to debug it?

If your page is not behaving well with scroll anchoring enabled, it is probably because some `scroll` event listener is not handling well the extra scrolling to compensate for the anchor node movement.

You can check whether disabling scroll anchoring fixes the issue in Firefox by changing `layout.css.scroll-anchoring.enabled` to `false` in `about:config`.

If it does, you can check what node is Firefox using as the anchor using the `layout.css.scroll-anchoring.highlight` switch. That will show a purple overlay on top of the anchor node.

If one node doesn't seem appropriate to be an anchor, you can exclude it using {{cssxref("overflow-anchor")}}, as described below.

## What if I need to disable it?

The specification provides a new property, {{cssxref("overflow-anchor")}}, which can be used to disable scroll anchoring on all or part of the document. It's essentially a way to opt out of the new behavior.

The only possible values are `auto` or `none`:

- `auto` is the initial value; as long as the user has a supported browser the scroll anchoring behavior will happen, and they should see fewer content jumps.
- `none` means that you have explicitly opted the document, or part of the document, out of scroll anchoring.

To opt out the entire document, you can set it on the {{htmlelement("body")}} element:

```css
body {
  overflow-anchor: none;
}
```

To opt out a certain part of the document use `overflow-anchor: none` on its container element:

```css
.container {
  overflow-anchor: none;
}
```

> [!NOTE]
> The specification details that once scroll anchoring has been opted out of, you cannot opt back into it from a child element. For example, if you opt out for the entire document, you will not be able to set `overflow-anchor: auto` elsewhere in the document to turn it back on for a subsection.

### Suppression triggers

The specification also details some _suppression triggers_, which will disable scroll anchoring in places where it might be problematic. If any of the triggers happen on the anchor node, or an ancestor of it, anchoring is suppressed.

These suppression triggers are changes to the computed value of any of the following properties:

- {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}}, or {{cssxref("bottom")}}
- {{cssxref("margin")}} or {{cssxref("padding")}}
- Any {{cssxref("width")}} or {{cssxref("height")}}-related properties
- {{cssxref("transform")}} and the individual transform properties {{cssxref("translate")}}, {{cssxref("scale")}}, and {{cssxref("rotate")}}

Additionally, {{cssxref("position")}} changes anywhere inside the scrolling box also disable scroll anchoring.

> [!NOTE]
> In [Firefox bug 1584285](https://bugzil.la/1584285) the `layout.css.scroll-anchoring.suppressions.enabled` flag was added to Firefox Nightly in order to allow the disabling of these triggers.

## Further reading

- [Explainer document on the WICG site](https://github.com/WICG/ScrollAnchoring/blob/master/explainer.md)
- [Scroll anchoring for web developers on the Chromium blog](https://blog.chromium.org/2017/04/scroll-anchoring-for-web-developers.html)

## Browser compatibility

{{Compat}}

### Compatibility notes

If you need to test whether scroll anchoring is available in a browser, use [Feature Queries](/en-US/docs/Web/CSS/@supports) to test support for the `overflow-anchor` property.
