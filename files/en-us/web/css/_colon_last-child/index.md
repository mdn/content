---
title: :last-child
slug: Web/CSS/:last-child
page-type: css-pseudo-class
browser-compat: css.selectors.last-child
---

{{CSSRef}}

The **`:last-child`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents the last element among a group of sibling elements.

{{InteractiveExample("CSS Demo: :last-child", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

li:last-child {
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
:last-child {
  /* ... */
}
```

## Examples

### Basic example

#### HTML

```html
<div>
  <p>This text isn't selected.</p>
  <p>This text is selected!</p>
</div>

<div>
  <p>This text isn't selected.</p>
  <h2>This text isn't selected: it's not a `p`.</h2>
</div>
```

#### CSS

```css
p:last-child {
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

ul li:last-child {
  border: 1px solid red;
  color: red;
}
```

#### Result

{{EmbedLiveSample('Styling_a_list')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef(":-moz-last-node")}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":nth-child")}}
