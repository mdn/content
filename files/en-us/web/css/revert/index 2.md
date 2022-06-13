---
title: revert
slug: Web/CSS/revert
tags:
  - CSS
  - CSS Cascade
  - CSS Value
  - Cascade
  - Keyword
  - Layout
  - Reference
  - Style
  - revert
browser-compat: css.types.global_keywords.revert
---
{{CSSRef}}

The **`revert`** CSS keyword reverts the cascaded value of the property from its current value to the value the property would have had if no changes had been made by the current **{{Glossary("style origin")}}** to the current element. Thus, it resets the property to its inherited value if it inherits from its parent or to the default value established by the user agent's stylesheet (or by user styles, if any exist). It can be applied to any CSS property, including the CSS shorthand {{cssxref("all")}}.

This removes from the cascade all of the styles that have been overridden until the style being rolled back to is reached.

- If used by a site's own styles (the author origin), `revert` rolls back the property's cascaded value to the user's custom style, if one exists; otherwise, it rolls the style back to the user agent's default style.
- If used in a user's custom stylesheet, or if the style was applied by the user (the user origin), `revert` rolls back the cascaded value to the user agent's default style.
- If used within the user agent's default styles, this keyword is functionally equivalent to {{cssxref("unset")}}.

The `revert` keyword works exactly the same as [`unset`](/en-US/docs/Web/CSS/unset) in many cases. The only difference is for properties that have values set by the browser or by custom stylesheets created by users (set on the browser side).

Revert will not affect rules applied to children of an element you reset (but will remove effects of a parent rule on a child). So if you have a `color: green` for all sections and `all: revert` on a specific section the color of the section will be black. But if you have a rule to make all paragraphs red then all paragraphs will still be red in all sections.

> **Note:** Revert is just a value. It is still possible to override `revert` value using [specificity](/en-US/docs/Web/CSS/Specificity).

> **Note:** The `revert` keyword is different from and should not be confused with {{cssxref("initial")}}, which uses the [initial value](/en-US/docs/Web/CSS/initial_value) defined on a per-property basis by the CSS specifications. In contrast, user-agent stylesheets set default values on the basis of CSS selectors.
>
> For example, the [initial value](/en-US/docs/Web/CSS/initial_value) for the {{cssxref("display")}} property is `inline`, whereas a normal user-agent stylesheet sets the default {{cssxref("display")}} value of {{HTMLElement("div")}}s to `block`, of {{HTMLElement("table")}}s to `table`, etc.

## Examples

### Revert vs unset

Although `revert` and `unset` are similar they differ for some properties for some elements.

So in the below example, we set custom `font-weight` in a global stylesheet, but then try to unset and revert. Unset will keep the text normal because this is an initial value for font-weight property. Revert will revert to bold because this is a default value for headers in most browsers.

```css
h3 {
  font-weight: normal;
  color: blue;
}
```

```html
<h3 style="font-weight: unset; color: unset;">This will still have font-weight: normal, but color: black</h3>
<p>Just some text</p>
<h3 style="font-weight: revert; color: revert;">This should have its original font-weight (bold) and color: black</h3>
<p>Just some text</p>
```

{{EmbedLiveSample('Revert_vs_unset')}}

### Revert all

Reverting all values is useful when you did heavy modifications for something and then want to revert to defaults. So to iterate on above example instead of reverting font-weight and color separately you could just revert all of them.

```css
h3 {
  font-weight: normal;
  color: blue;
  border-bottom: 1px solid grey;
}
```

```html
<h3>This will have custom styles</h3>
<p>Just some text</p>
<h3 style="all: revert">This should be reverted to browser/user defaults</h3>
<p>Just some text</p>
```

{{EmbedLiveSample('Revert_all')}}

### Revert on a parent

Reverting effectively removes the value for the element you select with some rule and only for that element. To illustrate this we will set a green color on a section and red color on a paragraph.

```css
section { color: darkgreen }
p { color: red }
section.with-revert { color: revert }
```

```html
<section>
  <h3>This will be dark green</h3>
  <p>Text in paragraph will be red.</p>
  This will also be dark green.
</section>
<section class="with-revert">
  <h3>This will be black</h3>
  <p>Text in paragraph will be red.</p>
  This will also be black.
</section>
```

Notice how paragraph still has a red color even though a color property for the section was reverted. Also note that both the header and plain text node is black. This is exactly the same as if `section { color: darkgreen }` would not exist for the second section.

{{EmbedLiveSample('Revert_on_a_parent')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Use {{cssxref("initial")}} to set a property to its initial value.
- Use {{cssxref("unset")}} to set a property to its inherited value if it inherits, or to its initial value if not.
- Use {{cssxref("inherit")}} to make an element's property the same as its parent.
- The {{cssxref("all")}} property lets you reset all properties to their initial, inherited, reverted, or unset state at once.
