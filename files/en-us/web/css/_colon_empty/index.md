---
title: ":empty"
slug: Web/CSS/:empty
page-type: css-pseudo-class
browser-compat: css.selectors.empty
---

{{CSSRef}}

The **`:empty`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents any element that has no children. Children can be either element nodes or text (including whitespace). Comments, processing instructions, and CSS {{cssxref("content")}} do not affect whether an element is considered empty.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-empty.html", "tabbed-shorter")}}

> **Note:** In [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo), the `:empty` pseudo-class was changed to act like {{CSSxRef(":-moz-only-whitespace")}}, but no browser currently supports this yet.

## Syntax

```css
:empty {
  /* ... */
}
```

## Examples

### HTML

```html
<div class="box"><!-- I will be lime. --></div>
<div class="box">I will be pink.</div>
<div class="box">
  <!-- I will be pink in older browsers because of the whitespace around this comment. -->
</div>
<div class="box">
  <p>
    <!-- I will be pink in all browsers because of the non-collapsible whitespace and elements around this comment. -->
  </p>
</div>
```

### CSS

```css hidden
body {
  display: flex;
  justify-content: space-around;
}
```

```css
.box {
  background: pink;
  height: 80px;
  width: 80px;
}

.box:empty {
  background: lime;
}
```

### Result

{{EmbedLiveSample("Examples", 300, 80)}}

## Accessibility concerns

Assistive technology such as screen readers cannot parse interactive content that is empty. All interactive content must have an accessible name, which is created by providing a text value for the interactive control's parent element ([anchors](/en-US/docs/Web/HTML/Element/a), [buttons](/en-US/docs/Web/HTML/Element/button), etc.). Accessible names expose the interactive control to the [accessibility tree](/en-US/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis), an API that communicates information useful for assistive technologies.

The text that provides the interactive control's accessible name can be hidden using [a combination of properties](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) that remove it visually from the screen but keep it parsable by assistive technology. This is commonly used for buttons that rely solely on an icon to convey purpose.

- [What is an accessible name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [Hidden content for better a11y | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Understanding WCAG, Guideline 2.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef(":-moz-only-whitespace")}} {{Non-standard_Inline}} – The {{glossary("Vendor_Prefix", "prefixed")}} implementation of the changes in [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo)
- {{CSSxRef(":blank")}} {{Experimental_Inline}}
