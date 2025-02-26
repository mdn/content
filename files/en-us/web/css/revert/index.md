---
title: revert
slug: Web/CSS/revert
page-type: css-keyword
browser-compat: css.types.global_keywords.revert
---

{{CSSRef}}

The **`revert`** CSS keyword reverts the cascaded value of the property from its current value to the value the property would have had if no changes had been made by the current **{{Glossary("style origin")}}** to the current element. Thus, it resets the property either to user agent set value, to user set value, to its inherited value (if it is inheritable), or to initial value. It can be applied to any CSS property, including the CSS shorthand property {{cssxref("all")}}.

This keyword removes from the cascade all of the styles that have been overridden until the style being rolled back to is reached.

- If used by a site's own styles (the author origin), `revert` rolls back the property's cascaded value to the user's custom style, if one exists; otherwise, it rolls the style back to the user agent's default style.
- If used in a user's custom stylesheet, or if the style was applied by the user (the user origin), `revert` rolls back the cascaded value to the user agent's default style.
- If used within the user agent's default styles, this keyword is functionally equivalent to {{cssxref("unset")}}.

The `revert` keyword works exactly the same as [`unset`](/en-US/docs/Web/CSS/unset) in many cases. The only difference is for properties that have values set by the browser or by custom stylesheets created by users (set on the browser side).

Revert will not affect rules applied to children of an element you reset (but will remove effects of a parent rule on a child). So if you have a `color: green` for all sections and `all: revert` on a specific section, the color of the section will be black. But if you have a rule to make all paragraphs red, then all paragraphs will still be red in all sections.

> [!NOTE]
> Revert is just a value. It is still possible to override the `revert` value using [specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity).

> [!NOTE]
> The `revert` keyword is different from and should not be confused with the {{cssxref("initial")}} keyword, which uses the [initial value](/en-US/docs/Web/CSS/CSS_cascade/initial_value) defined on a per-property basis by the CSS specifications. In contrast, user-agent stylesheets set default values on the basis of CSS selectors.
>
> For example, the [initial value](/en-US/docs/Web/CSS/CSS_cascade/initial_value) for the [`display`](/en-US/docs/Web/CSS/display#formal_definition) property is `inline`, whereas a normal user-agent stylesheet sets the default {{cssxref("display")}} value of {{HTMLElement("div")}}s to `block`, of {{HTMLElement("table")}}s to `table`, etc.

## Examples

### Revert vs. unset

Although `revert` and `unset` are similar, they differ for some properties for some elements.

So in the below example, we set custom [`font-weight`](/en-US/docs/Web/CSS/font-weight#formal_definition), but then try to `revert` and `unset` it inline in the HTML document. The `revert` keyword will revert the text to bold because that is the default value for headers in most browsers. The `unset` keyword will keep the text normal because, as an inherited property, the `font-weight` would then inherit its value from the body.

#### HTML

```html
<h3 style="font-weight: revert; color: revert;">
  This should have its original font-weight (bold) and color: black
</h3>
<p>Just some text</p>
<h3 style="font-weight: unset; color: unset;">
  This will still have font-weight: normal, but color: black
</h3>
<p>Just some text</p>
```

#### CSS

```css
h3 {
  font-weight: normal;
  color: blue;
}
```

#### Result

{{EmbedLiveSample('Revert_vs_unset', 0, 200)}}

### Revert all

Reverting all values is useful in a situation where you've made several style changes and then you want to revert to the browser default values. So in the above example, instead of reverting `font-weight` and `color` separately, you could just revert all of them at once - by applying the `revert` keyword on `all`.

#### HTML

```html
<h3>This will have custom styles</h3>
<p>Just some text</p>
<h3 style="all: revert">This should be reverted to browser/user defaults.</h3>
<p>Just some text</p>
```

#### CSS

```css
h3 {
  font-weight: normal;
  color: blue;
  border-bottom: 1px solid grey;
}
```

#### Result

{{EmbedLiveSample('Revert_all', 0, 200)}}

### Revert on a parent

Reverting effectively removes the value for the element you select with some rule and this happens only for that element. To illustrate this, we will set a green color on a section and red color on a paragraph.

#### HTML

```html
<main>
  <section>
    <h3>This h3 will be dark green</h3>
    <p>Text in paragraph will be red.</p>
    This stray text will also be dark green.
  </section>
  <section class="with-revert">
    <h3>This h3 will be steelblue</h3>
    <p>Text in paragraph will be red.</p>
    This stray text will also be steelblue.
  </section>
</main>
```

#### CSS

```css hidden
main {
  border: 3px solid steelblue;
}

section {
  margin: 0.5rem;
  border: 2px dashed darkgreen;
}
```

```css
main {
  color: steelblue;
}
section {
  color: darkgreen;
}
p {
  color: red;
}
section.with-revert {
  color: revert;
}
```

#### Result

{{EmbedLiveSample('Revert_on_a_parent', '100%', '300px')}}

Notice how the paragraph is still red even though a `color` property for the section was reverted. Also, note that both the header and plain text node are `steelblue`. The result of reverting makes it as if `section { color: darkgreen; }` did not exist for the section with `color: revert` applied.

Also, if neither the user agent nor the user override the `<h3>` or `<section>` color values, then the `steelblue` color is inherited from `<main>`, as the {{cssxref("color")}} property is an inherited property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Use the {{cssxref("initial")}} keyword to set a property to its initial value.
- Use the {{cssxref("inherit")}} keyword to make an element's property the same as its parent.
- Use the {{cssxref("revert-layer")}} keyword to reset a property to the value established in a previous cascade layer.
- Use the {{cssxref("unset")}} keyword to set a property to its inherited value if it inherits or to its initial value if not.
- The {{cssxref("all")}} property lets you reset all properties to their initial, inherited, reverted, or unset state at once.
