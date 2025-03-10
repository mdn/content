---
title: overflow-block
slug: Web/CSS/overflow-block
page-type: css-property
browser-compat: css.properties.overflow-block
---

{{CSSRef}}

The **`overflow-block`** [CSS](/en-US/docs/Web/CSS) property sets what shows when content overflows the block start and block end edges of a box. This may be nothing, a scroll bar, or the overflow content.

> [!NOTE]
> The `overflow-block` property maps to {{Cssxref("overflow-y")}} or {{Cssxref("overflow-x")}} depending on the writing mode of the document.

## Syntax

```css
/* Keyword values */
overflow-block: visible;
overflow-block: hidden;
overflow-block: clip;
overflow-block: scroll;
overflow-block: auto;

/* Global values */
overflow-block: inherit;
overflow-block: initial;
overflow-block: revert;
overflow-block: revert-layer;
overflow-block: unset;
```

The `overflow-block` property is specified as a single {{CSSXref("overflow_value", "&lt;overflow&gt;")}} keyword value:

### Values

- `visible`
  - : Content is not clipped and may be rendered outside the padding box's block start and block end edges.
- `hidden`
  - : Content is clipped if necessary to fit the block dimension in the padding box. No scrollbars are provided.
- `clip`
  - : Overflow content is clipped at the element's overflow clip edge that is defined using the {{CSSXref("overflow-clip-margin")}} property.
- `scroll`
  - : Content is clipped if necessary to fit in the block dimension in the padding box. Browsers display scrollbars whether or not any content is actually clipped. (This prevents scrollbars from appearing or disappearing when the content changes.) Printers may still print overflowing content.
- `auto`
  - : Depends on the user agent. If content fits inside the padding box, it looks the same as `visible`, but still establishes a new block-formatting context.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<ul>
  <li>
    <code>overflow-block: hidden</code> (hides the text outside the box)
    <div id="hidden">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: scroll</code> (always adds a scrollbar)
    <div id="scroll">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: clip</code> (hides the text outside the box beyond the
    overflow clip edge)
    <div id="clip">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: visible</code> (displays the text outside the box if
    needed)
    <div id="visible">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: auto</code> (on most browsers, equivalent to
    <code>scroll</code>)
    <div id="auto">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>
</ul>
```

### CSS

```css
div {
  border: 1px solid black;
  width: 250px;
  height: 100px;
  margin-bottom: 120px;
}

#hidden {
  overflow-block: hidden;
}
#scroll {
  overflow-block: scroll;
}
#clip {
  overflow-block: clip;
}
#visible {
  overflow-block: visible;
}
#auto {
  overflow-block: auto;
}
```

### Result

{{EmbedLiveSample("Examples", "100%", "780")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-inline")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
- [CSS logical properties](/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS scrollbars style](/en-US/docs/Web/CSS/CSS_scrollbars_styling) module
- [CSS writing modes](/en-US/docs/Web/CSS/CSS_writing_modes)
- [Learn: Overflowing content](/en-US/docs/Learn_web_development/Core/Styling_basics/Overflow)
