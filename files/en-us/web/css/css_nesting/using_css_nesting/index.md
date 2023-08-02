---
title: Using CSS nesting
slug: Web/CSS/CSS_nesting/Using_CSS_nesting
page-type: guide
---

{{CSSRef}}

The [CSS Nesting](/en-US/docs/Web/CSS/CSS_nesting) module allows you to wite your stylesheets so that they are easier to read, more modular and more maintainable. As you are not constantly repeating selectors the file size can also be drastically reduced too.

This guide show some of the different ways the nesting in CSS can be arranged.

> **Note:** The early version of the specification did not allow the nesting of [Type selectors](/en-US/docs/Web/CSS/Type_selectors) without the `&` nesting selector. This has now been updated and can be used without the `&` nesting selector. At the time of writing Firefox supports the new version of the specification while Chrome and Safari support the old version of the specification and must use the `&` nesting selector to work.

## Child selectors

You can use CSS nesting to target selectors that are child selectors of a parent. This can be done with or without the [`&` nesting selector](/en-US/docs/Web/CSS/Nesting_selector).

```css
/* Without nesting selector */
parent {
  /* parent styles */
  child {
    /* child of parent styles */
  }
}
/* Without nesting selector */
parent {
  /* parent styles */
  & child {
    /* child of parent styles */
  }
}
/* both these become */
parent {
  /* parent styles */
}
parent child {
  /* child of parent styles */
}
```

### Examples

In these examples the `<input>`s inside `<label>`s are being styled differently to the `<input>`s as a sibling of `<label>`s.

#### HTML

```html
<form>
  <label for="name"
    >Name:
    <input type="text" id="name" />
  </label>
  <label for="email">email:</label>
  <input type="text" id="email" />
</form>
```

#### Without `&` nesting selector

```html hidden
<form>
  <label for="name"
    >Name:
    <input type="text" id="name" />
  </label>
  <label for="email">email:</label>
  <input type="text" id="email" />
</form>
```

##### CSS

```css hidden
form,
label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

```css
input {
  /* styles for input not in a label  */
  border-color: tomato;
}
label {
  /* styles for label */
  font-family: system-ui;
  font-size: 1.25rem;
  input {
    /* styles for input in a label  */
    border-color: blue;
  }
}
```

##### Result

{{EmbedLiveSample('Without_&_nesting_selector','100%','120')}}

#### With `&` nesting selector

```html hidden
<form>
  <label for="name"
    >Name:
    <input type="text" id="name" />
  </label>
  <label for="email">email:</label>
  <input type="text" id="email" />
</form>
```

##### CSS

```css hidden
form,
label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

```css
input {
  /* styles for input not in a label  */
  border-color: tomato;
}
label {
  /* styles for label */
  font-family: system-ui;
  font-size: 1.25rem;
  & input {
    /* styles for input in a label  */
    border-color: blue;
  }
}
```

##### Result

{{EmbedLiveSample('With_&_nesting_selector','100%','120')}}

## Combinators

CSS Combinators can also be used with or without the `&` nesting selector.

### Example

#### Nesting the sibling combinator

In this example the **first paragraph** after an **h2** is targeted with the [adjacent sibling combinator (`+`)](/en-US/docs/Web/CSS/Adjacent_sibling_combinator) and this is done with CSS nesting.

##### HTML

```html
<h2>Heading</h2>
<p>This is the first paragraph.</p>
<p>This is the second paragraph.</p>
```

##### CSS

```css
h2 {
  color: tomato;
  + p {
    color: white;
    background-color: black;
  }
}
```

##### Result

{{EmbedLiveSample('Nesting_the_sibling_combinator','100%','135')}}

## Compound selectors

## Appended nesting selector

## Concatenation

## See Also

- [Nesting @rules](/en-US/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [Nesting and specificity](/en-US/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
