---
title: Using CSS nesting
slug: Web/CSS/CSS_nesting/Using_CSS_nesting
page-type: guide
---

{{CSSRef}}

The [CSS Nesting](/en-US/docs/Web/CSS/CSS_nesting) module allows you to wite your stylesheets so that they are easier to read, more modular, and more maintainable. As you are not constantly repeating selectors the file size can also be reduced.

This guide shows different ways to arrange nesting in CSS.

> **Note:** Early versions of the specification did not allow nesting of [type selectors](/en-US/docs/Web/CSS/Type_selectors) without the [`&` nesting selector](/en-US/docs/Web/CSS/Nesting_selector). This has been updated so the `&` selector is no longer needed. At the time of writing Firefox supports the new version of the specification while Chrome and Safari support the old version of the specification and must use the `&` nesting selector for type selector nesting.

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

In these examples the `<input>` inside the `<label>` is being styled differently to the `<input>` that is a sibling of a `<label>`.

#### HTML

```html-nolint
<form>
  <label for="name">Name:
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

[CSS Combinators](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators) can also be used with or without the `&` nesting selector.

### Example

#### Nesting the sibling combinator

In this example, the first paragraph after an `<h2>` is targeted with the [adjacent sibling combinator (`+`)](/en-US/docs/Web/CSS/Adjacent_sibling_combinator) using CSS nesting.

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
/* this code can also be written with the & nesting selector */
/* 
h2 {
  color: tomato;
  & + p {
    color: white;
    background-color: black;
  }
}
*/
```

##### Result

{{EmbedLiveSample('Nesting_the_sibling_combinator','100%','135')}}

## Compound selectors

When using [compound selectors](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) in nested CSS you **have** to use the `&` nesting selector. This is because the browser will automatically add whitespace between selectors that do not use the `&` nesting selector.

In order to target an element with `class="a b"` the `&` nesting selector is needed otherwise the whitespace will break the compound selector.

```css
.a {
  /* styles for element with class="a" */
  .b {
    /* styles for element with class="b" which is a descendant of class="a" */
  }
  &.b {
    /* styles for element with class="a b" */
  }
}
/* this becomes */
.a {
  /* styles for element with class="a" */
}
.a .b {
  /* styles for element with class="b" which is a descendant of class="a" */
}
.a.b {
  /* styles for element with class="a b" */
}
```

### Example

#### Nesting and compound selectors

In this example the `&` nesting selector is used to create compound selectors to style elements with multiple classes.

##### HTML

```html
<div class="wrapper">
  <div class="a c"></div>
  <div class="a">
    <div class="b c"></div>
    <div class="b"></div>
  </div>
</div>
```

##### CSS

Styles for the `.wrapper` to create a {{cssxref('CSS_flexible_box_layout', 'flexbox layout')}}.

```css
.wrapper,
.a {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 0.5rem;
}
```

Styles using nesting to create compound selectors.

```css
.a {
  /* styles for element with class="a" */
  height: 50px;
  width: 100px;
  border-radius: 0.5rem;
  border: red dotted 2px;
  .b {
    /* styles for element with class="a" and descendant with class="b" */
    height: 40px;
    width: 40px;
    border: black solid 2px;
    &.c {
      /* styles for element with class="b c" */
      border: blue solid;
    }
  }
  &.c {
    /* styles for element with class="a c" */
    border: green solid;
  }
}
```

##### Result

{{EmbedLiveSample('Nesting_and_compound_selectors','100%')}}

## Appended nesting selector

Using the `&` nesting selector before a nested selector applies the styles to the child selector when it is within the parent selector.

```css
.parent {
  /* .parent styles */
  & .child {
    /* .parent .child styles */
  }
}
```

The `&` nesting selector can also be appended to a nested selector which has the effect of reversing the context.

```css
.parent {
  /* .parent styles */
  .child & {
    /* .child .parent styles */
  }
}
```

### Example

#### Appending nesting selector

In this example there are 3 cards, one of which is featured. The cards are all exactly the same except the featured card will have an alternative color for the heading. By appending the `&` nesting selector the style for the .featured .h2 can be nested in the style for the `h2`.

##### HTML

```html
<div class="wrapper">
  <article class="card">
    <h2>Card 1</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </article>
  <article class="card featured">
    <h2>Card 2</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </article>
  <article class="card">
    <h2>Card 3</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </article>
</div>
```

##### CSS

```css
.wrapper {
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  font-family: system-ui;
}
```

In the following CSS we are creating the styles for `.card`, `.card h2` and then in the `h2` styles we nest the `.featured` class with the `&` nesting selector appended which creates a style for `.card .featured h2`.

```css
.card {
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  & h2 {
    color: slateblue;
    .featured & {
      color: tomato;
    }
  }
}
```

##### Result

{{EmbedLiveSample('Appending_nesting_selector','100%','250')}}

## Concatenation

CSS pre-processors, such as [SASS](https://sass-lang.com/), it is possible to use nesting to join strings to create new classes, this is common in CSS methodologies such as [BEM](http://getbem.com/naming/).

```css
.component {
  &__child-element {
  }
}
/* In SASS this becomes */
.component__child-element {
}
```

This is not possible in CSS nesting, as without an [combinator](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators) the nested selector is treated as [type selector](/en-US/docs/Web/CSS/Type_selectors) and allowing concatenation would break this.

For [compound selectors](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) using `&Element` (a [Type selector](/en-US/docs/Web/CSS/Type_selectors)) would make the CSS invalid as the type selector must come first in a compound selector so must be written `Element&`.

```css example-good
.my-class {
  element& {
  }
}
/* This becomes the compound selector */
.my-class {
}
element.my-class {
}
```

## Invalid nested style rules

If a nested CSS rule is invalid then all of the enclosed styles will be ignored. This does not effect the parent or proceeding rules.

In the following example there is an invalid selector (`%invalid` `%` is not a valid character for selectors), this will ignore the styles with the rule.

```css example-bad
.parent {
  /* .parent styles these work fine */
  & %invalid {
    /* %invalid styles all of which are ignored */
  }
  & .valid {
    /* .parent .valid styles these work fine */
  }
}
```

### Example

#### Trying to concatenate a string in CSS

In this example we are trying to replicate the way that pre-processors are used to concatenate the `__content` string onto the `.card` class. As we have [previously seen](#concatenation) this is not possible and makes the rule invalid.

##### HTML

```html
<div class="wrapper invalid">
  <article class="card">
    <h2>Card 1</h2>
    <p class="card__content">
      Lorem ipsum dolor, <a href="#">sit amet</a> consectetur adipisicing elit.
    </p>
  </article>
  <article class="card featured">
    <h2>Card 2</h2>
    <p class="card__content">
      Lorem ipsum dolor, <a href="#">sit amet</a> consectetur adipisicing elit.
    </p>
  </article>
  <article class="card">
    <h2>Card 3</h2>
    <p class="card__content">
      Lorem ipsum dolor, <a href="#">sit amet</a> consectetur adipisicing elit.
    </p>
  </article>
</div>
```

##### CSS

```css
.wrapper {
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  font-family: system-ui;
}
```

In the `__content` rule all of the enclosed styles and rules are ignored. This means that the content will not be italic or the links will not be styled. The rest of the rules all work as expected. In order to fix this we can change the `&__content` to show the full class name `& card__content`.

```css
.card {
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  &__content {
    font-style: italic;
    & a {
      color: slateblue;
      text-decoration-style: wavy;
      .featured & {
        color: tomato;
      }
    }
  }
  & h2 {
    color: slateblue;
    .featured & {
      color: tomato;
    }
  }
}
```

##### Result

{{EmbedLiveSample('trying_to_concatenate_a_string_in_css','100%','200')}}

## See Also

- [CSS Nesting](/en-US/docs/Web/CSS/CSS_nesting)
- [`&` nesting selector](/en-US/docs/Web/CSS/Nesting_selector)
- [Nesting @rules](/en-US/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [Nesting and specificity](/en-US/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
