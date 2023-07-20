---
title: <overflow>
slug: Web/CSS/overflow_value
page-type: css-type
browser-compat: css.types.overflow
---

{{CSSRef}}

The **`<overflow>`** {{glossary("enumerated")}} value type represents the keyword values for the {{cssxref("overflow-block")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-x")}}, and {{cssxref("overflow-y")}} longhand properties and the {{cssxref("overflow")}} shorthand property. These properties apply to block containers, flex containers, and grid containers.

## Syntax

```css
<overflow> = visible | hidden | clip | scroll | auto
```

## Values

The `<overflow>` enumerated value type is specified using one of the values listed below.

- `visible`
  - : Overflow content is not clipped and may be visible outside the element's padding box. The element box is not a {{glossary("scroll container")}}. This is the default value for all the properties that have the `<overflow>` enumerated value type.
- `hidden`
  - : Overflow content is clipped at the element's padding box. There are no scroll bars, and the clipped content is not visible (i.e., clipped content is hidden), but the content still exists. User agents do not add scrollbars and also do not allow users to view the content outside the clipped region by actions such as dragging on a touch screen or using the scroll wheel on a mouse. The content _can_ be scrolled programmatically (for example, by setting the value of the {{domxref("Element.scrollLeft", "scrollLeft")}} property or the {{domxref("Element.scrollTo", "scrollTo()")}} method). The content can also be scrolled via keyboard interaction; arrows enable scrolling through the content and tabbing to a focusable element within the hidden content enables scrolling the focused element into view. The element box on which this value is set is a scroll container.
- `clip`
  - : Overflow content is clipped at the element's _overflow clip edge_ that is defined using the [`overflow-clip-margin`](/en-US/docs/Web/CSS/overflow-clip-margin) property. As a result, content overflows the element's padding box by the {{cssxref("&lt;length&gt;")}} value of `overflow-clip-margin` or by `0px` if not set. Overflow content outside the clipped region is not visible, user agents do not add a scrollbar, and programmatic scrolling is also not supported. No new [formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context) is created.
- `scroll`
  - : Overflow content is clipped at the element's padding box, and overflow content can be scrolled into view using scrollbars. User agents display scrollbars in both horizontal and vertical directions if only one value is set, whether or not any content is overflowing or clipped. The use of this keyword value, therefore, can prevent scrollbars from appearing and disappearing as content changes. Printers may still print overflowing content. The element box on which this value is set is a scroll container.
- `auto`
  - : Overflow content is clipped at the element's padding box, and overflow content can be scrolled into view. Unlike `scroll`, user agents display scrollbars _only if_ the content is overflowing and hide scrollbars by default. If content fits inside the element's padding box, it looks the same as with `visible` but still establishes a new formatting context. The element box on which this value is set is a scroll container.

> **Note:** The keyword value `overlay` is a legacy value alias for `auto`. With `overlay`, the scroll bars are drawn on top of the content instead of taking up space.

## Examples

This example demos all the `<overflow>` enumerated values for the {{cssxref("overflow")}} property.

### HTML

The HTML in this example contains some lyrics within the {{HTMLELement("pre")}} element. The HTML also contains a link text to enable testing the effects of keyboard focus on overflow and scroll behaviors. The same HTML code is repeated multiple times to show the effect of each `<overflow>` enumerated value.

```html
<pre>&nbsp;
Oh, Rubber Duckie, you're the one
You make bath time lots of fun
Rubber Duckie, I'm awfully fond of you

Rubber Duckie, joy of joys
When I squeeze you, you make noise
Rubber Duckie, you're my very best friend, it's true

Oh, every day when I make my way to the tubby
I find a little fella who's cute and yellow and chubby
Rub-a-dub-dubby

<a href="#">Rubber Duckie</a>, you're so fine
And I'm lucky that you're mine
Rubber Duckie, I'm awfully fond of you
</pre>
```

```html hidden
<pre>&nbsp;
Oh, Rubber Duckie, you're the one
You make bath time lots of fun
Rubber Duckie, I'm awfully fond of you

Rubber Duckie, joy of joys
When I squeeze you, you make noise
Rubber Duckie, you're my very best friend, it's true

Oh, every day when I make my way to the tubby
I find a little fella who's cute and yellow and chubby
Rub-a-dub-dubby

<a href="#">Rubber Duckie</a>, you're so fine
And I'm lucky that you're mine
Rubber Duckie, I'm awfully fond of you
</pre>

<pre>&nbsp;
Oh, Rubber Duckie, you're the one
You make bath time lots of fun
Rubber Duckie, I'm awfully fond of you

Rubber Duckie, joy of joys
When I squeeze you, you make noise
Rubber Duckie, you're my very best friend, it's true

Oh, every day when I make my way to the tubby
I find a little fella who's cute and yellow and chubby
Rub-a-dub-dubby

<a href="#">Rubber Duckie</a>, you're so fine
And I'm lucky that you're mine
Rubber Duckie, I'm awfully fond of you
</pre>

<pre>&nbsp;
Oh, Rubber Duckie, you're the one
You make bath time lots of fun
Rubber Duckie, I'm awfully fond of you

Rubber Duckie, joy of joys
When I squeeze you, you make noise
Rubber Duckie, you're my very best friend, it's true

Oh, every day when I make my way to the tubby
I find a little fella who's cute and yellow and chubby
Rub-a-dub-dubby

<a href="#">Rubber Duckie</a>, you're so fine
And I'm lucky that you're mine
Rubber Duckie, I'm awfully fond of you
</pre>

<pre>&nbsp;
Oh, Rubber Duckie, you're the one
You make bath time lots of fun
Rubber Duckie, I'm awfully fond of you

Rubber Duckie, joy of joys
When I squeeze you, you make noise
Rubber Duckie, you're my very best friend, it's true

Oh, every day when I make my way to the tubby
I find a little fella who's cute and yellow and chubby
Rub-a-dub-dubby

<a href="#">Rubber Duckie</a>, you're so fine
And I'm lucky that you're mine
Rubber Duckie, I'm awfully fond of you
</pre>

<pre>&nbsp;
Oh, Rubber Duckie, you're the one
You make bath time lots of fun
Rubber Duckie, I'm awfully fond of you

Rubber Duckie, joy of joys
When I squeeze you, you make noise
Rubber Duckie, you're my very best friend, it's true

Oh, every day when I make my way to the tubby
I find a little fella who's cute and yellow and chubby
Rub-a-dub-dubby

<a href="#">Rubber Duckie</a>, you're so fine
And I'm lucky that you're mine
Rubber Duckie, I'm awfully fond of you
</pre>
```

### CSS

For the purpose of demonstration, the size of the `<pre>` element box has been defined to ensure that the content overflows its container in both the inline and block directions. A different `<overflow>` value is set for each of the repeating `<pre>` elements. For the `clip` value demonstration, a {{CSSXref("overflow-clip-margin")}} has been added.

```css hidden
pre {
  border: 2px dashed red;
  margin-bottom: 3em;
}

::before {
  font-weight: bold;
  color: white;
  background: crimson;
  display: inline-block;
  width: 100%;
  padding: 3px 5px;
  box-sizing: border-box;
}
```

```css
pre {
  block-size: 100px;
  inline-size: 295px;
}

pre:nth-of-type(1) {
  overflow: hidden;
}
pre:nth-of-type(1)::before {
  content: "hidden: ";
}

pre:nth-of-type(2) {
  overflow: clip;
  overflow-clip-margin: 1em;
}
pre:nth-of-type(2)::before {
  content: "clip: ";
}

pre:nth-of-type(3) {
  overflow: scroll;
}
pre:nth-of-type(3)::before {
  content: "scroll: ";
}

pre:nth-of-type(4) {
  overflow: auto;
}
pre:nth-of-type(4)::before {
  content: "auto: ";
}

pre:nth-of-type(5) {
  overflow: clip;
  overflow: overlay;
  overflow-clip-margin: 3em;
}
pre:nth-of-type(5)::before {
  content: "overlay (or clip if not supported): ";
}

pre:nth-of-type(6) {
  overflow: visible;
}
pre:nth-of-type(6)::before {
  content: "visible: ";
}
```

### Result

{{EmbedLiveSample("Examples", "500", "800")}}

To see the effect of keyboard focus on overflow and scroll behaviors, try tabbing through all the links in the example. Notice that the `clip` box does not create a scroll container, and the link does not come into view when the link is focused. The `visible` value, which has the link always in view, is also not a scroll container.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-block")}} and {{cssxref("overflow")}}
- [CSS overflow module](/en-US/docs/Web/CSS/CSS_overflow)
