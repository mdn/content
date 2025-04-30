---
title: Privacy and the :visited selector
slug: Web/CSS/CSS_selectors/Privacy_and_the_visited_selector
page-type: guide
---

{{CSSRef}}

Originally, the [CSS](/en-US/docs/Web/CSS) {{ cssxref(":visited") }} selector was a privacy and security risk. With a little bit of JavaScript, websites could uncover a user's browsing history and figure out what sites the user had visited. This was done using methods like {{domxref("window.getComputedStyle")}} and other techniques. This process was quick, enabling websites to not only determine where the user had been on the web, but also to guess a lot of information about the user's identity.

To mitigate this privacy concern, browsers limit the amount of information that can be obtained from visited links.

## Little white lies

To preserve users' privacy, browsers lie to web applications under certain circumstances:

- The `window.getComputedStyle` method and similar functions, such as {{ domxref("element.querySelector") }}, always return values indicating that a user has never visited any of the links on a page.
- When using a sibling selector, such as `:visited + span`, the adjacent element (`span` in this example) is styled as though the link were unvisited.
- In rare scenarios, if you're using nested link elements and the element being matched is different from the link whose presence in history is being tested, the element will be rendered as though the link were unvisited.

## Limits to visited link styles

You can style visited links, but there are limits to which styles you can use. Only the following styles can be applied to visited links:

- {{ cssxref("color") }}
- {{ cssxref("background-color") }}
- {{ cssxref("border-color") }} (and its sub-properties)
- {{ cssxref("column-rule-color") }}
- {{ cssxref("outline-color") }}
- {{ cssxref("text-decoration-color") }}
- {{ cssxref("text-emphasis-color") }}
- Color parts of the {{SVGAttr("fill")}} and {{SVGAttr("stroke")}} attributes

In addition, even for the styles mentioned above, transparency differences between unvisited and visited links are not applied. This restriction prevents the use of the `alpha` parameter in various {{cssxref("color_value", "&lt;color&gt;")}} functions or the [`transparent`](/en-US/docs/Web/CSS/named-color#transparent) keyword to distinguish between the two states.

Here is an example of how to use styles with the aforementioned restrictions:

```css
:link {
  outline: 1px dotted blue;
  background-color: white;
  /* The default value of `background-color` is `transparent`. You need to
     specify a different value, otherwise changes on `:visited` won't apply. */
}

:visited {
  outline-color: orange; /* Visited links have an orange outline */
  background-color: green; /* Visited links have a green background */
  color: yellow; /* Visited links have yellow colored text */
}
```

## Impact on web developers

You may want to consider the following when developing sites:

- Changing {{cssxref("background-image")}} values based on a link's visited state will not work since only colors can be used to style visited links.
- Colors that are otherwise transparent will not apply when styled via a `:visited` selector.

## See also

- [Preventing attacks on a user's history through CSS `:visited` selectors](https://dbaron.org/mozilla/visited-privacy) (2010)
