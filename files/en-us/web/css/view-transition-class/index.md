---
title: view-transition-class
slug: Web/CSS/view-transition-class
page-type: css-property
browser-compat: css.properties.view-transition-class
---

{{CSSRef}}

The **`view-transition-class`** [CSS](/en-US/docs/Web/CSS) property provides the selected element with with the same animation properties to the selector. The `view-transition-class` is used only to apply styles using the view transition pseudo-elements ({{cssxref("::view-transition-group()")}}, {{cssxref("::view-transition-image-pair()")}}, {{cssxref("::view-transition-old()")}}, {{cssxref("::view-transition-new()")}}).

## Syntax

```css
/* <custom-ident> value examples */
view-transition-class: header;
view-transition-class: element;

/* Keyword value */
view-transition-class: none;
```

### Values

- {{cssxref("custom-ident","&lt;custom-ident&gt;+")}}
  - : An identifying name that causes the selected element to participate in a separate [view transition](/en-US/docs/Web/API/View_Transition_API) from the root view transition. The identifier must be unique.
    > [!NOTE]
    > All of the specified `<custom-ident>` values (apart from `none`) are applied when used in named view transition pseudo-element selectors. `none` is an invalid `<custom-ident>` for view-transition-class, even when combined with another `<custom-ident>`.
- `none`
  - : No class would apply to the named [view transition pseudo-elements](/en-US/docs/Web/API/View_Transition_API#pseudo-elements) generated for this element.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

```css
.element {
  view-transition-class: element;
}
::view-transition-group(.element) {
  /* animation properties and values */
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
- {{cssxref("::view-transition-group()")}}
- {{cssxref("::view-transition-image-pair()")}}
- {{cssxref("::view-transition-old()")}}
- {{cssxref("::view-transition-new()")}}
- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
