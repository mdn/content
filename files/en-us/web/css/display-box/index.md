---
title: <display-box>
slug: Web/CSS/display-box
page-type: css-type
browser-compat: css.properties.display.contents
---

{{CSSRef}}

These keywords define whether an element generates display boxes at all.

## Syntax

Valid `<display-box>` values:

- `contents`

  - : These elements don't produce a specific box by themselves. They are replaced by their pseudo-box and their child boxes. Please note that the CSS Display Level 3 spec defines how the `contents` value should affect "unusual elements" — elements that aren't rendered purely by CSS box concepts such as replaced elements. See [Appendix B: Effects of display: contents on Unusual Elements](https://drafts.csswg.org/css-display/#unbox) for more details.

    _Due to a bug in browsers this will currently remove the element from the accessibility tree — screen readers will not look at what's inside. See the [Accessibility](#accessibility) section below for more details._

- `none`
  - : Turns off the display of an element so that it has no effect on layout (the document is rendered as though the element did not exist). All descendant elements also have their display turned off.
    To have an element take up the space that it would normally take, but without actually rendering anything, use the {{CSSxRef("visibility")}} property instead.

## Accessibility

Current implementations in most browsers will remove from the [accessibility tree](/en-US/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) any element with a `display` value of `contents`. This will cause the element — and in some browser versions, its descendant elements — to no longer be announced by screen reading technology. This is incorrect behavior according to the [CSSWG specification](https://drafts.csswg.org/css-display/#the-display-properties).

- [More accessible markup with display: contents | Hidde de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

## Formal syntax

{{csssyntax}}

## Examples

In this first example, the paragraph with a class of secret is set to `display: none`; the box and any content is now not rendered.

### display: none

#### HTML

```html
<p>Visible text</p>
<p class="secret">Invisible text</p>
```

#### CSS

```css
p.secret {
  display: none;
}
```

#### Result

{{EmbedLiveSample("display_none", "100%", 60)}}

### display: contents

In this example the outer {{htmlelement("div")}} has a 2-pixel red border and a width of 300px. However it also has `display: contents` specified therefore this `<div>` will not be rendered, the border and width will no longer apply, and the child element will be displayed as if the parent had never existed.

#### HTML

```html
<div class="outer">
  <div>Inner div.</div>
</div>
```

#### CSS

```css
.outer {
  border: 2px solid red;
  width: 300px;
  display: contents;
}

.outer > div {
  border: 1px solid green;
}
```

#### Result

{{EmbedLiveSample("display_contents", 300, 60)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [Display: Contents Is Not a CSS Reset | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)
- [More accessible markup with display: contents](https://hidde.blog/more-accessible-markup-with-display-contents/) by Hidde de Vries (2018)
