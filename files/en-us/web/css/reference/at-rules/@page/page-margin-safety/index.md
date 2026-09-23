---
title: "`page-margin-safety` CSS at-rule descriptor"
short-title: page-margin-safety
slug: Web/CSS/Reference/At-rules/@page/page-margin-safety
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.page.descriptor_page-margin-safety
sidebar: cssref
---

The **`page-margin-safety`** [CSS](/en-US/docs/Web/CSS) descriptor for the {{cssxref("@page")}} at-rule constrains page margins so that the content stays within the printable page area.

## Syntax

```css
/* Page margins are not constrained  */
@page {
  page-margin-safety: none;
}

/* Clamp all page margins using the clamp keyword  */
@page {
  page-margin-safety: clamp;
}

/* Clamp the top and right page margins using the add keyword */
@page {
  @top-right {
    page-margin-safety: add;
  }
}
```

## Values

This descriptor is specified as one of the following keywords:

- `none`
  - : Page margins are not constrained.
- `clamp`
  - : Constrained page margins are set to the larger of the [`safe-printable-inset`](#the_safe-printable-inset) value and the margin's [resolved value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value).
- `add`
  - : Constrained page margins are set to the `safe-printable-inset` value plus the margin's resolved value.

## Description

Most printers have a small region along the edge of the page that is unprintable, typically due to the printer's paper handling mechanism. The `page-margin-safety` descriptor can be set inside a web document `@page` at-rule to constain the page's outer margins, making sure that the page content stays within the page's printable area during printing. The margins are constrained relative to a value called the [`safe-printable-inset`](#the_safe-printable-inset).

The constrained margins are those that are adjacent to one of the edges of a page. No other margins are affected.

Two values are available for `page-margin-safety`:

- The `clamp` value is used to constrain page margins to the larger of the `safe-printable-inset` value and the margin's resolved value. This ensures that the margin will be set to a minimum value that still ensures content will print safely, but the margin's own set value will be used if it is larger than the minimum.
- The `add` value is used to increase the set margin value by the `safe-printable-inset` value, guaranteeing extra spacing regardless of the margin value.

## The safe-printable-inset

The browser is able to determine a width for each page margin from the underlying operating system that guarantees all content will be kept out of the unprintable page area. This width is called the `safe-printable-inset`, and it is used to constrain the page margins when `page-margin-safety` is set to `clamp` or `add`.

The value of the `safe-printable-inset` depends on how a printer operates:

- Some printers don't have a uniform unprintable region along each of the four paper edges. Different edges may have unprintable regions with different widths, and the printer may rotate the print output at its own discretion. The browser therefore may not know which edge will be fed first into the printer, or what orientation the sheet of paper has. In such cases, the width of each edge's unprintable region is collected, and `safe-printable-inset` for each side of the page is set to the largest of those values.
- Some printers return such information reliably. If the user agent can trust that the four values are usable individually, and that no rotation will be applied, each side of the page will use its own `safe-printable-inset` value returned from the OS.

## Constraining specific margins

When `page-margin-safety` is applied to a [margin at-rule](/en-US/docs/Web/CSS/Reference/At-rules/@page#margin_at-rules) inside the `@page` at rule, it will only constrain the margin on one or two sides. For example, in this case, only the bottom and left page margins are constrained:

```css
@page {
  @bottom-left {
    page-margin-safety: add;
  }
}
```

In this case, only the top page margin is constrained:

```css
@page {
  @top-center {
    page-margin-safety: add;
  }
}
```

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example shows how to use the `page-margin-safety` descriptor to stop your page content from being cut off while printing. We present two versions of the same example, one with the `page-margin-safety` descriptor applied, and one without.

#### HTML

The HTML features a "print" {{htmlelement("button")}} and a {{htmlelement("p")}} element containing content.

```html live-sample___page-margin-safety-1 live-sample___page-margin-safety-2
<button id="print">Print</button>
<p>This is my page content.</p>
```

#### CSS

We have deliberately set the {{htmlelement("body")}} element's {{cssxref("margin")}} to `0`:

```css live-sample___page-margin-safety-1 live-sample___page-margin-safety-2
body {
  margin: 0;
  border: 10px solid red;
}
```

In the second live example, we set `page-margin-safety: add` inside the `@page` descriptor to ensure that the page content will all be inside the printable area during printing.

```css live-sample___page-margin-safety-2
@page {
  page-margin-safety: add;
}
```

```css hidden live-sample___page-margin-safety-1 live-sample___page-margin-safety-2
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-family: sans-serif;
  font-size: 2rem;
}

#print {
  position: absolute;
  top: 15px;
  left: 15px;
}
```

```js hidden live-sample___page-margin-safety-1 live-sample___page-margin-safety-2
const printButton = document.querySelector("#print");
printButton.addEventListener("click", () => {
  window.print();
});
```

#### Result

The first live example doesn't have the `page-margin-safety` descriptor applied:

{{EmbedLiveSample("page-margin-safety-1", "100%", "300", , , , , "allow-modals")}}

Click the print button and examine the page inset during printing.

The second live example **does** have the `page-margin-safety` descriptor applied:

{{EmbedLiveSample("page-margin-safety-2", "100%", "300", , , , , "allow-modals")}}

Again, click the print button and examine the page inset during printing. You should see that some extra inset has been added around the page content due to the `page-margin-safety` descriptor inside the `@page` at-rule.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
