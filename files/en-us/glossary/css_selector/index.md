---
title: Selector (CSS)
slug: Glossary/CSS_Selector
page-type: glossary-definition
---

{{GlossarySidebar}}

A **CSS selector** is the part of a CSS rule that describes what elements in a document the rule will match. The matching elements will have the rule's specified style applied to them.

## Example

Consider this CSS:

```css
p {
  color: green;
}

div.warning {
  width: 100%;
  border: 2px solid yellow;
  color: white;
  background-color: darkred;
  padding: 0.8em 0.8em 0.6em;
}

#customized {
  font:
    16px Lucida Grande,
    Arial,
    Helvetica,
    sans-serif;
}
```

The selectors here are `"p"` (which applies the color green to the text inside any {{HTMLElement("p")}} element), `"div.warning"` (which makes any {{HTMLElement("div")}} element with the [class](/en-US/docs/Web/HTML/Global_attributes/class) `"warning"` look like a warning box), and `"#customized"`, which sets the base font of the element with the ID `"customized"` to 16-pixel tall Lucida Grande or one of a few fallback fonts.

We can then apply this CSS to some HTML, such as:

```html
<p>This is happy text.</p>

<div class="warning">
  Be careful! There are wizards present, and they are quick to anger!
</div>

<div id="customized">
  <p>This is happy text.</p>

  <div class="warning">
    Be careful! There are wizards present, and they are quick to anger!
  </div>
</div>
```

The resulting page content is styled like this:

{{EmbedLiveSample("Example", 640, 240)}}

## See also

- [Learn more about CSS selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors) in our introduction to CSS.
- Basic selectors

  - [Type selectors](/en-US/docs/Web/CSS/Type_selectors) `elementname`
  - [Class selectors](/en-US/docs/Web/CSS/Class_selectors) `.classname`
  - [ID selectors](/en-US/docs/Web/CSS/ID_selectors) `#idname`
  - [Universal selectors](/en-US/docs/Web/CSS/Universal_selectors) `* ns|* *|*`
  - [Attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) `[attr=value]`
  - [State selectors](/en-US/docs/Web/CSS/Pseudo-classes) `a:active, a:visited`

- Grouping selectors

  - [Selector list](/en-US/docs/Web/CSS/Selector_list) `A, B`

- Combinators

  - [Adjacent sibling selectors](/en-US/docs/Web/CSS/Adjacent_sibling_combinator) `A + B`
  - [General sibling selectors](/en-US/docs/Web/CSS/General_sibling_combinator) `A ~ B`
  - [Child selectors](/en-US/docs/Web/CSS/Child_combinator) `A > B`
  - [Descendant selectors](/en-US/docs/Web/CSS/Descendant_combinator) `A B`

- Pseudo

  - [Pseudo classes](/en-US/docs/Web/CSS/Pseudo-classes) `:`
  - [Pseudo elements](/en-US/docs/Web/CSS/Pseudo-elements) `::`
