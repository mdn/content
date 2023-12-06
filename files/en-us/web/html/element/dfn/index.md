---
title: "<dfn>: The Definition element"
slug: Web/HTML/Element/dfn
page-type: html-element
browser-compat: html.elements.dfn
---

{{HTMLSidebar}}

The **`<dfn>`** [HTML](/en-US/docs/Web/HTML) element is used to indicate the term being defined within the context of a definition phrase or sentence. The ancestor {{HTMLElement("p")}} element, the {{HTMLElement("dt")}}/{{HTMLElement("dd")}} pairing, or the nearest {{HTMLElement("section")}} ancestor of the `<dfn>` element, is considered to be the definition of the term.

{{EmbedInteractiveExample("pages/tabbed/dfn.html", "tabbed-shorter")}}

## Attributes

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

The [`title`](/en-US/docs/Web/HTML/Global_attributes#title) attribute has special meaning, as noted below.

## Usage notes

There are some not-entirely-obvious aspects to using the `<dfn>` element. We examine those here.

### Specifying the term being defined

The term being defined is identified following these rules:

1. If the `<dfn>` element has a [`title`](/en-US/docs/Web/HTML/Global_attributes#title) attribute, the value of the `title` attribute is considered to be the term being defined. The element must still have text within it, but that text may be an abbreviation (perhaps using {{HTMLElement("abbr")}}) or another form of the term.
2. If the `<dfn>` contains a single child element and does not have any text content of its own, and the child element is an {{HTMLElement("abbr")}} element with a `title` attribute itself, then the exact value of the `<abbr>` element's `title` is the term being defined.
3. Otherwise, the text content of the `<dfn>` element is the term being defined. This is shown [in the first example below](#basic_identification_of_a_term).

> **Note:** If the `<dfn>` element has a `title` attribute, it _must_ contain the term being defined and no other text.

### Links to `<dfn>` elements

If you include an [`id`](/en-US/docs/Web/HTML/Global_attributes#id) attribute on the `<dfn>` element, you can then link to it using {{HTMLElement("a")}} elements. Such links should be uses of the term, with the intent being that the reader can quickly navigate to the term's definition if they're not already aware of it, by clicking on the term's link.

This is shown in the example under [Links to definitions](#links_to_definitions) below.

## Examples

Let's take a look at some examples of various usage scenarios.

### Basic identification of a term

This example uses a plain `<dfn>` element to identify the location of a term within the definition.

#### HTML

```html
<p>
  The <strong>HTML Definition element (<dfn>&lt;dfn&gt;</dfn>)</strong> is used
  to indicate the term being defined within the context of a definition phrase
  or sentence.
</p>
```

Since the `<dfn>` element has no `title`, the text contents of the `<dfn>` element itself are used as the term being defined.

#### Result

{{EmbedLiveSample("Basic_identification_of_a_term", 650, 120)}}

### Links to definitions

To add links to the definitions, you create the link the same way you always do, with the {{HTMLElement("a")}} element.

#### HTML

```html-nolint
<p>
  The
  <strong>HTML Definition element (<dfn id="definition-dfn">&lt;dfn&gt;</dfn>)</strong>
  is used to indicate the term being defined within the context of a definition
  phrase or sentence.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Graece donan, Latine
  voluptatem vocant. Confecta res esset. Duo Reges: constructio interrete.
  Scrupulum, inquam, abeunti;
</p>

<p>
  Because of all of that, we decided to use the
  <code><a href="#definition-dfn">&lt;dfn&gt;</a></code> element for this
  project.
</p>
```

Here we see the definition — now with an [`id`](/en-US/docs/Web/HTML/Global_attributes#id) attribute, `"definition-dfn"`, which can be used as the target of a link. Later on, a link is created using `<a>` with the [`href`](/en-US/docs/Web/HTML/Element/a#href) attribute set to `"#definition-dfn"` to set up the link back to the definition.

#### Result

{{EmbedLiveSample("Links_to_definitions", 650, 300)}}

### Using abbreviations and definitions together

In some cases, you may wish to use an abbreviation for a term when defining it. This can be done by using the `<dfn>` and {{HTMLElement("abbr")}} elements in tandem, like this:

#### HTML

```html
<p>
  The <dfn><abbr title="Hubble Space Telescope">HST</abbr></dfn> is among the
  most productive scientific instruments ever constructed. It has been in orbit
  for over 20 years, scanning the sky and returning data and photographs of
  unprecedented quality and detail.
</p>

<p>
  Indeed, the <abbr title="Hubble Space Telescope">HST</abbr> has arguably done
  more to advance science than any device ever built.
</p>
```

Note the `<abbr>` element nested inside the `<dfn>`. The former establishes that the term is an abbreviation ("HST") and specifies the full term ("Hubble Space Telescope") in its `title` attribute. The latter indicates that the abbreviated term represents a term being defined.

#### Result

{{EmbedLiveSample("Using_abbreviations_and_definitions_together", 650, 200)}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">Flow content</a>,
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content">phrasing content</a>, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content">Phrasing content</a>,
        but no {{HTMLElement("dfn")}} element must be a descendant.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content">phrasing content</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/term_role"><code>term</code></a></td>
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

- Elements related to definition lists: {{HTMLElement("dl")}}, {{HTMLElement("dt")}}, {{HTMLElement("dd")}}
- {{HTMLElement("abbr")}}
