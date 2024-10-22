---
title: "<bdi>: The Bidirectional Isolate element"
slug: Web/HTML/Element/bdi
page-type: html-element
browser-compat: html.elements.bdi
---

{{HTMLSidebar}}

The **`<bdi>`** [HTML](/en-US/docs/Web/HTML) element tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted.

{{EmbedInteractiveExample("pages/tabbed/bdi.html", "tabbed-standard")}}

Bidirectional text is text that may contain both sequences of characters that are arranged left-to-right (LTR) and sequences of characters that are arranged right-to-left (RTL), such as an Arabic quotation embedded in an English string. Browsers implement the [Unicode Bidirectional Algorithm](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics) to handle this. In this algorithm, characters are given an implicit directionality: for example, Latin characters are treated as LTR while Arabic characters are treated as RTL. Some other characters (such as spaces and some punctuation) are treated as neutral and are assigned directionality based on that of their surrounding characters.

Usually, the bidirectional algorithm will do the right thing without the author having to provide any special markup but, occasionally, the algorithm needs help. That's where `<bdi>` comes in.

The `<bdi>` element is used to wrap a span of text and instructs the bidirectional algorithm to treat this text in isolation from its surroundings. This works in two ways:

- The directionality of text embedded in `<bdi>` _does not influence_ the directionality of the surrounding text.
- The directionality of text embedded in `<bdi>` _is not influenced by_ the directionality of the surrounding text.

For example, consider some text like:

```plain
EMBEDDED-TEXT - 1st place
```

If `EMBEDDED-TEXT` is LTR, this works fine. But if `EMBEDDED-TEXT` is RTL, then `- 1` will be treated as RTL text (because it consists of neutral and weak characters). The result will be garbled:

```plain
1 - EMBEDDED-TEXTst place
```

If you know the directionality of `EMBEDDED-TEXT` in advance, you can fix this problem by wrapping `EMBEDDED-TEXT` in a {{HTMLElement("span")}} with the [`dir`](/en-US/docs/Web/HTML/Global_attributes/dir) attribute set to the known directionality. But if you don't know the directionality - for example, because `EMBEDDED-TEXT` is being read from a database or entered by the user - you should use `<bdi>` to prevent the directionality of `EMBEDDED-TEXT` from affecting its surroundings.

Though the same visual effect can be achieved using the CSS rule {{cssxref("unicode-bidi", "unicode-bidi: isolate")}} on a {{HTMLElement("span")}} or another text-formatting element, HTML authors should not use this approach because it is not semantic and browsers are allowed to ignore CSS styling.

Embedding the characters in `<span dir="auto">` has the same effect as using `<bdi>`, but its semantics are less clear.

## Attributes

Like all other HTML elements, this element supports the [global attributes](/en-US/docs/Web/HTML/Global_attributes), except that the [`dir`](/en-US/docs/Web/HTML/Global_attributes/dir) attribute behaves differently than normal: it defaults to `auto`, meaning its value is never inherited from the parent element. This means that unless you specify a value of either `rtl` or `ltr` for `dir`, the {{Glossary("user agent")}} will determine the correct directionality to use based on the contents of the `<bdi>`.

## Examples

### No bdi with only LTR

This example lists the winners of a competition using {{HTMLElement("span")}} elements only. When the names only contain LTR text the results look fine:

```html
<ul>
  <li><span class="name">Henrietta Boffin</span> - 1st place</li>
  <li><span class="name">Jerry Cruncher</span> - 2nd place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{ EmbedLiveSample('No_bdi_with_only_LTR','','120') }}

### No bdi with RTL text

This example lists the winners of a competition using {{HTMLElement("span")}} elements only, and one of the winners has a name consisting of RTL text. In this case the `- 1`, which consists of characters with neutral or weak directionality, will adopt the directionality of the RTL text, and the result will be garbled:

```html
<ul>
  <li><span class="name">اَلأَعْشَى</span> - 1st place</li>
  <li><span class="name">Jerry Cruncher</span> - 2nd place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{ EmbedLiveSample('No_bdi_with_RTL_text','','120') }}

### Using bdi with LTR and RTL text

This example lists the winners of a competition using `<bdi>` elements. These elements instruct the browser to treat the name in isolation from its embedding context, so the example output is properly ordered:

```html
<ul>
  <li><bdi class="name">اَلأَعْشَى</bdi> - 1st place</li>
  <li><bdi class="name">Jerry Cruncher</bdi> - 2nd place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{ EmbedLiveSample('Using_bdi_with_LTR_and_RTL_text','','120') }}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Inline markup and bidirectional text in HTML](https://www.w3.org/International/articles/inline-bidi-markup/)
- [Unicode Bidirectional Algorithm basics](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics)
- {{Glossary("Localization")}}
- Related HTML element: {{HTMLElement("bdo")}}
- Related CSS properties: {{cssxref("direction")}}, {{cssxref("unicode-bidi")}}
