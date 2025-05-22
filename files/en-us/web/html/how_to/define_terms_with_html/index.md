---
title: Define terms with HTML
slug: Web/HTML/How_to/Define_terms_with_HTML
page-type: how-to
---

{{HTMLSidebar}}

HTML provides several ways to convey description semantics, whether inline or as structured glossaries. In this article, we'll cover how to properly mark up keywords when you're defining them.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        You need to be familiar with how to
        <a href="/en-US/docs/Learn_web_development/Getting_started/Your_first_website"
          >create a basic HTML document</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        Learn how to introduce new keywords and how to build description lists.
      </td>
    </tr>
  </tbody>
</table>

When you need a term defined, you probably go straight to a dictionary or glossary. Dictionaries and glossaries _formally_ associate keywords with one or more descriptions, as in this case:

> - Blue (_Adjective_)
>   - : Of a color like the sky in a sunny day.
>     _"The clear blue sky"_

But we're constantly defining keywords informally, as here:

> **Firefox** is the web browser created by the Mozilla Foundation.

To deal with these use cases, {{Glossary("HTML")}} provides {{Glossary("tag","tags")}} to mark descriptions and words described, so that your meaning gets across properly to your readers.

## How to mark informal description

In textbooks, the first time a keyword occurs, it's common to put the keyword in bold and define it right away.

We do that in HTML too, except HTML is not a visual medium and so we don't use bold. We use {{htmlelement("dfn")}}, which is a special element just for marking the first occurrence of keywords. Note that `<dfn>` tags go around the _word to be defined,_ not the definition (the definition consists of the entire paragraph):

```html
<p><dfn>Firefox</dfn> is the web browser created by the Mozilla Foundation.</p>
```

> [!NOTE]
> Another use for bold is to emphasize content. Bold itself is a concept foreign to HTML, but there are [tags for indicating emphasis.](/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)

### Special case: Abbreviations

It's best to [mark abbreviations specially](/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations) with {{htmlelement("abbr")}}, so that screen readers read them appropriately and so that you can operate on all abbreviations uniformly. Just as with any new keyword, you should define your abbreviations the first time they occur.

```html
<p>
  <dfn><abbr>HTML</abbr> (hypertext markup language)</dfn>
  is a description language used to structure documents on the web.
</p>
```

> [!NOTE]
> The HTML spec does indeed [set aside the `title` attribute](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element) for expanding the abbreviation. However, this is not an acceptable alternative for providing an inline expansion. The contents of `title` are completely hidden from your users, unless they're using a mouse and they happen to hover over the abbreviation. The spec duly [acknowledges this as well.](https://html.spec.whatwg.org/multipage/dom.html#attr-title)

### Improve accessibility

{{HTMLElement('dfn')}} marks the keyword defined, and indicates that the current paragraph defines the keyword. In other words, there's an implicit relationship between the `<dfn>` element and its container. If you want a more formal relationship, or your definition consists of only one sentence rather than the whole paragraph, you can use the [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) attribute to associate a term more formally with its definition:

```html
<p>
  <span id="ff">
    <dfn aria-describedby="ff">Firefox</dfn>
    is the web browser created by the Mozilla Foundation.
  </span>
  You can download it at <a href="https://www.mozilla.org">mozilla.org</a>
</p>
```

Assistive technology can often use this attribute to find a text alternative to a given term. You can use `aria-describedby` on any tag enclosing a keyword to be defined (not just the `<dfn>` element). `aria-describedby` references the [`id`](/en-US/docs/Web/HTML/Reference/Global_attributes/id) of the element containing the description.

## How to build a description list

Description lists are just what they claim to be: a list of terms and their matching descriptions (e.g., definition lists, dictionary entries, FAQs, and key-value pairs).

> [!NOTE]
> Description lists are [not suitable for marking up dialog,](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element) because conversation does not directly describe the speakers. Here are [recommendations for marking up dialog](https://html.spec.whatwg.org/multipage/semantics-other.html#conversations).

The terms described go inside {{htmlelement("dt")}} elements. The matching description follows immediately, contained within one or more {{htmlelement("dd")}} elements. Enclose the whole description list with a {{htmlelement("dl")}} element.

### A simple example

Here's an example describing kinds of food and drink:

```html
<dl>
  <dt>jambalaya</dt>
  <dd>
    rice-based entree typically containing chicken, sausage, seafood, and spices
  </dd>

  <dt>sukiyaki</dt>
  <dd>
    Japanese specialty consisting of thinly sliced meat, vegetables, and
    noodles, cooked in sake and soy sauce
  </dd>

  <dt>chianti</dt>
  <dd>dry Italian red wine originating in Tuscany</dd>
</dl>
```

> [!NOTE]
> The basic pattern, as you can see, is to alternate `<dt>` terms with `<dd>` descriptions. If two or more terms occur in a row, the following description applies to all of them. If two or more descriptions occur in a row, they all apply to the last given term.

### Improving the visual output

Here's how a graphical browser displays the foregoing list:

{{EmbedLiveSample("A_simple_example", 600, 180)}}

If you want the keywords to stand out better, you could try bolding them. Remember, HTML is not a visual medium; we need {{glossary("CSS")}} for all visual effects. The CSS {{cssxref("font-weight")}} property is what you need here:

```css
dt {
  font-weight: bold;
}
```

This produces the slightly more readable result below:

{{EmbedLiveSample("How_to_build_a_description_list", 600, 180)}}

## Learn more

- {{htmlelement("dfn")}}
- {{htmlelement("dl")}}
- {{htmlelement("dt")}}
- {{htmlelement("dd")}}
- [How to use the aria-describedby attribute](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
