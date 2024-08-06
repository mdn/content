---
title: ":nth-of-type()"
slug: Web/CSS/:nth-of-type
page-type: css-pseudo-class
browser-compat: css.selectors.nth-of-type
---

{{CSSRef}}

The **`:nth-of-type()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches elements based on their position among siblings of the same type (tag name).

Tips:When you use non-tag selectors like div, p, etc., the browser first matches the selected elements, then parses the elements' tags, and finally matches them based on the position of the tags within the parent elements.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-nth-of-type.html", "tabbed-shorter")}}

## Syntax

The `nth-of-type` pseudo-class is specified with a single argument, which represents the pattern for matching elements.

See {{Cssxref(":nth-child")}} for a more detailed explanation of its syntax.

```css-nolint
:nth-of-type(<An+B> | even | odd) {
  /* ... */
}
```

## Examples

### Basic example

#### HTML

```html
<div>
  <div>This element isn't counted.</div>
  <p>1st paragraph.</p>
  <p class="fancy">2nd paragraph.</p>
  <div>This element isn't counted.</div>
  <p class="fancy">3rd paragraph.</p>
  <p>4th paragraph.</p>
</div>
```

#### CSS

```css
/* Odd paragraphs */
p:nth-of-type(2n + 1) {
  color: red;
}

/* Even paragraphs */
p:nth-of-type(2n) {
  color: blue;
}

/* First paragraph */
p:nth-of-type(1) {
  font-weight: bold;
}

/* This will match the 3rd paragraph as it will match elements which are 2n+1 AND have a class of fancy.
The second paragraph has a class of fancy but is not matched as it is not :nth-of-type(2n+1) */
p.fancy:nth-of-type(2n + 1) {
  text-decoration: underline;
}
```

#### Result

{{EmbedLiveSample('Basic_example', 250, 250)}}

> [!NOTE]
> There is no way to select the nth-of-class using this selector. The selector looks at the type only when creating the list of matches. You can however apply CSS to an element based on `:nth-of-type` location **and** a class, as shown in the example above.

### Selector Execution Process

#### HTML

```html
<body>
  <div class="father">
    <div class="aaa">1</div>
    <div class="children">2</div>
    <div class="children">3</div>
    <div class="children">4</div>
    <span class="children">5</span>
    <div class="children">6</div>
  </div>
  <p class="children">7</p>
</body>
```

#### CSS

```css
<style>
.children:nth-of-type(2) {
  background: blue;
}
</style>
```

1. Use `.children` to find elements with content `2, 3, 4, 6, 7`.
2. Get all sibling elements with the same tag (here, all `div`s under `father`, `span`s under `father`, and `p`s under `body`)
3. Select and apply CSS styles based on `(2)` (The following is a simple comparison for easier understanding)
   ```json
   // Please note that this is not a standard JSON format!
   // All elements are HTML objects, and for ease of understanding, text is directly used here.
   {
     "father": {
       "span": [
         "<span class='children'>5</span>" // class includes 'children' but index: 1 not selected.
       ],
       "div": [
         "<div class='aaa'>1</div>", // index: 1 and class does not include 'children'. not selected.
         "<div class='children'>2</div>", // index: 2 and class includes 'children'. Selected and rendered.
         "<div class='children'>3</div>", // class includes 'children' but index: 3 not selected.
         "<div class='children'>4</div>", // class includes 'children' but index: 4 not selected.
         "<div class='children'>6</div>" // class includes 'children' but index: 5 not selected.
       ]
     },
     "body": [
       "<p class='children'>6</p>" // class includes 'children' but index: 1 not selected.
     ]
   }
   ```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}
