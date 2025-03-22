---
title: :first-child
slug: Web/CSS/:first-child
page-type: css-pseudo-class
browser-compat: css.selectors.first-child
---

{{CSSRef}}

The **`:first-child`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents the first element among a group of sibling elements.

{{InteractiveExample("CSS Demo: :first-child", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

li:first-child {
  border: 2px solid orange;
}
```

```html interactive-example
<p>Track &amp; field champions:</p>
<ul>
  <li>Adhemar da Silva</li>
  <li>Wang Junxia</li>
  <li>Wilma Rudolph</li>
  <li>Babe Didrikson-Zaharias</li>
  <li>Betty Cuthbert</li>
  <li>Fanny Blankers-Koen</li>
  <li>Florence Griffith-Joyner</li>
  <li>Irena Szewinska</li>
  <li>Jackie Joyner-Kersee</li>
  <li>Shirley Strickland</li>
  <li>Carl Lewis</li>
  <li>Emil Zatopek</li>
  <li>Haile Gebrselassie</li>
  <li>Jesse Owens</li>
  <li>Jim Thorpe</li>
  <li>Paavo Nurmi</li>
  <li>Sergei Bubka</li>
  <li>Usain Bolt</li>
</ul>
```

## Syntax

```css
:first-child {
  /* ... */
}
```

## Examples

### Basic example

#### HTML

```html
<div>
  <p>This text is selected!</p>
  <p>This text isn't selected.</p>
</div>

<div>
  <h2>This text isn't selected: it's not a `p`.</h2>
  <p>This text isn't selected.</p>
</div>
```

#### CSS

```css
p:first-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

#### Result

{{EmbedLiveSample('Basic_example', 500, 200)}}

### Styling a list

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>
    Item 3
    <ul>
      <li>Item 3.1</li>
      <li>Item 3.2</li>
      <li>Item 3.3</li>
    </ul>
  </li>
</ul>
```

#### CSS

```css
ul li {
  color: blue;
}

ul li:first-child {
  color: red;
  font-weight: bold;
}
```

#### Result

{{EmbedLiveSample('Styling_a_list')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef(":-moz-first-node")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
