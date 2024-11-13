---
title: Attribute selectors
slug: Learn/CSS/Building_blocks/Selectors/Attribute_selectors
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}

As you know from your study of HTML, elements can have attributes that give further detail about the element being marked up. In CSS you can use attribute selectors to target elements with certain attributes. This lesson will show you how to use these very useful selectors.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Basic software installed</a
        >, basic knowledge of
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >working with files</a
        >, HTML basics (study
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >), and an idea of how CSS works (study
        <a href="/en-US/docs/Learn/CSS/First_steps">CSS first steps</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>To learn what attribute selectors are and how to use them.</td>
    </tr>
  </tbody>
</table>

## Presence and value selectors

These selectors enable the selection of an element based on the presence of an attribute alone (for example `href`), or on various different matches against the value of the attribute.

| Selector             | Example                         | Description                                                                                                                            |
| -------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `[*attr*]`           | `a[title]`                      | Matches elements with an _attr_ attribute (whose name is the value in square brackets).                                                |
| `[*attr*=*value*]`   | `a[href="https://example.com"]` | Matches elements with an _attr_ attribute whose value is exactly _value_ — the string inside the quotes.                               |
| `[*attr*~=*value*]`  | `p[class~="special"]`           | Matches elements with an _attr_ attribute whose value is exactly _value_, or contains _value_ in its (space-separated) list of values. |
| `[*attr*\|=*value*]` | `div[lang\|="zh"]`              | Matches elements with an _attr_ attribute whose value is exactly _value_ or begins with _value_ immediately followed by a hyphen.      |

In the example below you can see these selectors being used.

- By using `li[class]` we can match any list item with a class attribute. This matches all of the list items except the first one.
- `li[class="a"]` matches a selector with a class of `a`, but not a selector with a class of `a` with another space-separated class as part of the value. It selects the second list item.
- `li[class~="a"]` will match a class of `a` but also a value that contains the class of `a` as part of a whitespace-separated list. It selects the second and third list items.

```html live-sample___attribute
<h1>Attribute presence and value selectors</h1>
<ul>
  <li>Item 1</li>
  <li class="a">Item 2</li>
  <li class="a b">Item 3</li>
  <li class="ab">Item 4</li>
</ul>
```

```css live-sample___attribute
body {
  font-family: sans-serif;
}
li[class] {
  font-size: 120%;
}

li[class="a"] {
  background-color: yellow;
}

li[class~="a"] {
  color: red;
}
```

{{EmbedLiveSample("attribute", "", "200px")}}

## Substring matching selectors

These selectors allow for more advanced matching of substrings inside the value of your attribute. For example, if you had classes of `box-warning` and `box-error` and wanted to match everything that started with the string "box-", you could use `[class^="box-"]` to select them both (or `[class|="box"]` as described in section above).

| Selector        | Example             | Description                                                                                        |
| --------------- | ------------------- | -------------------------------------------------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | Matches elements with an _attr_ attribute, whose value begins with _value_.                        |
| `[attr$=value]` | `li[class$="-box"]` | Matches elements with an _attr_ attribute whose value ends with _value_.                           |
| `[attr*=value]` | `li[class*="box"]`  | Matches elements with an _attr_ attribute whose value contains _value_ anywhere within the string. |

(Aside: It may help to note that `^` and `$` have long been used as _anchors_ in so-called _regular expressions_ to mean _begins with_ and _ends with_ respectively.)

The next example shows usage of these selectors:

- `li[class^="a"]` matches any attribute value which starts with `a`, so matches the first two list items.
- `li[class$="a"]` matches any attribute value that ends with `a`, so matches the first and third list item.
- `li[class*="a"]` matches any attribute value where `a` appears anywhere in the string, so it matches all of our list items.

```html live-sample___attribute-substring
<h1>Attribute substring matching selectors</h1>
<ul>
  <li class="a">Item 1</li>
  <li class="ab">Item 2</li>
  <li class="bca">Item 3</li>
  <li class="bcabc">Item 4</li>
</ul>
```

```css live-sample___attribute-substring
body {
  font-family: sans-serif;
}
li[class^="a"] {
  font-size: 120%;
}

li[class$="a"] {
  background-color: yellow;
}

li[class*="a"] {
  color: red;
}
```

{{EmbedLiveSample("attribute-substring", "", "200px")}}

## Case-sensitivity

If you want to match attribute values case-insensitively you can use the value `i` before the closing bracket. This flag tells the browser to match {{Glossary("ASCII")}} characters case-insensitively. Without the flag the values will be matched according to the case-sensitivity of the document language — in HTML's case it will be case sensitive.

In the example below, the first selector will match a value that begins with `a` — it only matches the first list item because the other two list items start with an uppercase A. The second selector uses the case-insensitive flag and so matches all of the list items.

```html live-sample___attribute-case
<h1>Case-insensitivity</h1>
<ul>
  <li class="a">Item 1</li>
  <li class="A">Item 2</li>
  <li class="Ab">Item 3</li>
</ul>
```

```css live-sample___attribute-case
body {
  font-family: sans-serif;
}
li[class^="a"] {
  background-color: yellow;
}

li[class^="a" i] {
  color: red;
}
```

{{EmbedLiveSample("attribute-case")}}

> [!NOTE]
> There is also a newer value `s`, which will force case-sensitive matching in contexts where matching is normally case-insensitive, however this is less well supported in browsers and isn't very useful in an HTML context.

## Summary

Now that we are done with attribute selectors, you can continue on to the next article and read about [pseudo-class and pseudo-element selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}
