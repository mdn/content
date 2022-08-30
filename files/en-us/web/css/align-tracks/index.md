---
title: align-tracks
slug: Web/CSS/align-tracks
tags:
  - CSS
  - CSS Property
  - Experimental
  - Property
  - Reference
  - align-tracks
  - grid
  - masonry
browser-compat: css.properties.align-tracks
---

{{CSSRef}}{{SeeCompatTable}}

The **`align-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have [masonry](/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout) in their block axis.

## Syntax

```css
/* Keyword values */
align-tracks: start;
align-tracks: space-between;
align-tracks: center;
align-tracks: start,center,end;

/* Global values */
align-tracks: inherit;
align-tracks: initial;
align-tracks: revert;
align-tracks: unset;
```

The property can take a single value, in which case all tracks are aligned in the same way. If a list of values is used then the first value applies to the first track in the grid axis, the second to the next and so on.

If there are fewer values than tracks, the last value is used for all remaining tracks. If there are more values than tracks, any additional values are ignored.

### Values

- `start`
  - : The items are packed flush to each other toward the start edge of the alignment container in the masonry axis.
- `end`
  - : The items are packed flush to each other toward the end edge of the alignment container in the masonry axis.
- `center`
  - : The items are packed flush to each other toward the center of the alignment container along the masonry axis.
- `normal`
  - : Acts as `start`.
- `baseline first baseline`
  `last baseline`
  - : Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box's first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group.
    The fallback alignment for `first baseline` is `start`, the one for `last baseline` is `end`.
- `space-between`
  - : The items are evenly distributed within the alignment container along the masonry axis. The spacing between each pair of adjacent items is the same. The first item is flush with the main-start edge, and the last item is flush with the main-end edge.
- `space-around`
  - : The items are evenly distributed within the alignment container along the masonry axis. The spacing between each pair of adjacent items is the same. The empty space before the first and after the last item equals half of the space between each pair of adjacent items.
- `space-evenly`
  - : The items are evenly distributed within the alignment container along the masonry axis. The spacing between each pair of adjacent items, the main-start edge and the first item, and the main-end edge and the last item, are all exactly the same.
- `stretch`
  - : The items stretch along the masonry axis to fill the content box. Items with definite size do not stretch.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Masonry layout with multiple values for align-tracks

{{EmbedGHLiveSample("css-examples/grid/masonry/align-tracks.html", '100%', 900)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("justify-tracks")}}, {{cssxref("masonry-auto-flow")}}
