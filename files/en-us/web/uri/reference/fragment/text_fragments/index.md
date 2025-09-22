---
title: Text fragments
slug: Web/URI/Reference/Fragment/Text_fragments
page-type: uri-component
browser-compat:
  - html.elements.a.text_fragments
  - api.FragmentDirective
  - css.selectors.target-text
sidebar: urlsidebar
---

**Text fragments** link directly to specific text in a web page, without requiring the page author to add an ID. They use a special syntax in the URL fragment. This feature lets you create deep links to content you don't control, which may not have associated IDs. It also makes sharing links more useful by directly point others to specific words. Browsers may differ in how they draw attention to the linked text—usually, the text is scrolled into view and highlighted with color.

## Concepts and usage

Historically, one of the web's key features has always been its ability to provide links between different documents — it is what makes _the web_, a web:

- You can link to the top of a document by linking to its URL, for example:
  - [https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a](/en-US/docs/Web/HTML/Reference/Elements/a).
- You can link to a specific section of a document by linking to its URL plus the _document fragment_ (ID) of that section, for example:
  - [https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#browser_compatibility](/en-US/docs/Web/HTML/Reference/Elements/a#browser_compatibility).

The issue with linking to specific document fragments is that the author of the linked page needs to put an anchor in place to _actually_ link to. The second example above links to an {{htmlelement("Heading_Elements", "h2")}} element with an ID of `browser_compatibility`:

```html
<h2 id="browser_compatibility">
  <a href="#browser_compatibility">Browser compatibility</a>
</h2>
```

Not all documents have such anchors, and even if they do, linking to a heading might be much less obvious than linking directly to the specific text you are citing. This is where text fragments help: they allow the link author to have full control over what text to link to, without requiring any special markup in the target document. For example, a search engine may refer to a specific sentence in its search results, and clicking the link will take you directly to that sentence.

However, text fragments also have a limitation: text in a document is less stable than document structure. If the text in the linked document is updated, the fragment no longer matches, and the browser navigates to the top of the page. This is fine for transient links such as those in search results, but if you intend for the link to work over time, document fragments may be more reliable.

## Syntax

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Text fragments are a kind of URL fragment, and is written after the `#`. The key parts to understand are as follows:

- `:~:`
  - : Otherwise known as _the fragment directive_, this sequence of characters tells the browser that what comes next is one or more user-agent instructions, which are stripped from the URL during loading so that author scripts cannot directly interact with them. User-agent instructions are also called directives.
- `text=`
  - : A text directive. This provides a text fragment to the browser, defining what text is to be linked to in the linked document.
- `textStart`
  - : A text string specifying the start of the linked text.
- `textEnd` {{optional_inline}}
  - : A text string specifying the end of the linked text.
- `prefix-` {{optional_inline}}
  - : A text string followed by a hyphen specifying what text should immediately precede the linked text, only allowing for whitespace in between. This helps the browser to select the correct linked text, in cases where there are multiple matches.
- `-suffix` {{optional_inline}}
  - : A hyphen followed by a text string specifying what text should immediately follow the linked text, only allowing for whitespace in between. This helps the browser to select the correct linked text, in cases where there are multiple matches.

Supporting browsers will scroll to and highlight the first text fragment in the linked document that matches the specified directive. Note that it is possible to specify multiple text fragments to highlight in the same URL by separating them with ampersand (`&`) characters.

### Usage notes

- Text strings used for the `textStart`, `textEnd`, `prefix-`, and `-suffix` values need to be [percent-encoded](/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent). In addition, [the standard](https://wicg.github.io/scroll-to-text-fragment/#syntax) requires the URL-safe dash character `'-'` to be similarly percent-encoded.
- Matches are case-insensitive.
- Individual `textStart`, `textEnd`, `prefix-`, and `-suffix` strings need to reside wholly inside the same [block-level element](/en-US/docs/Glossary/Block-level_content), but complete matches can span across multiple element boundaries.
- For security reasons, when linking to a cross-origin page using this feature, you should open the link in a `noopener` context — you need to add `rel="noopener"` to your {{htmlelement("a")}} elements, and add `noopener` to your {{domxref("window.open()")}} calls when using this feature.
- Text fragments are invoked only on user-initiated navigations.
- Text fragments are only applied to the main frame; text will not be searched inside {{htmlelement("iframe")}}s, and `iframe` navigation will not invoke a text fragment.
- For sites that wish to opt-out, Chromium-based browsers support a [Document Policy](https://wicg.github.io/document-policy/) header value that they can send so user agents will not process Text Fragments:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> If the provided text fragment does not match any text in the linked document, or if the browser does not support text fragments, the whole text fragment is ignored and the top of the document is linked.

## Examples

### Text fragment with textStart

- [https://example.com/#:~:text=for](https://example.com/#:~:text=for) scrolls to and highlights the first instance of the text `for` in the document.
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#:~:text=human](/en-US/docs/Web/HTML/Reference/Elements/a#:~:text=human) scrolls to and highlights the first instance of the text `human` in the document.
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL](/en-US/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL) scrolls to and highlights the first instance of the text `linked URL` in the document.

### textStart and textEnd

- [https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#:~:text=human,URL](/en-US/docs/Web/HTML/Reference/Elements/a#:~:text=human,url) scrolls to and highlights the first instance of a text string starting with `human` and ending with `URL`.
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,defining%20a%20value](/en-US/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,defining%20a%20value) scrolls to and highlights the first instance of a text string starting with `linked URL` and ending with `defining a value`. Note how the highlighted text spans across multiple block-level elements.

### Examples with prefix- and/or -suffix

- [https://example.com/#:~:text=asking-,for](https://example.com/#:~:text=asking-,for) scrolls to and highlights the second instance of the text `for` in the document.
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#:~:text=sent-,referrer](/en-US/docs/Web/HTML/Reference/Elements/a#:~:text=sent-,referrer) scrolls to and highlights the first instance of the text `referrer` that has the text `sent` directly before it. This is the 5th instance of `referrer` in the document; without the prefix, the first instance would be highlighted.
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format](/en-US/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format) scrolls to and highlights the first instance of the text `linked URL` that has the text `'s format` directly following it. This is the 5th instance of `linked URL` in the document; without the suffix, the first instance would be highlighted.
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins](/en-US/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins) scrolls to and highlights the instance of the text `The Referer ... be sent` that is prefixed by `downgrade:` and suffixed by `to origins`. This illustrates a more complex example where the prefix/suffix are used to home in on the specific text instance you want to link to. Try removing the prefix, for example, and seeing what is matched.

### URLs with multiple text fragments

You can specify multiple text fragments to highlight in the same URL by separating them with ampersand (`&`) characters. Let's look at a couple of examples:

- [https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#:~:text=Causes&text=linked](/en-US/docs/Web/HTML/Reference/Elements/a#:~:text=causes&text=linked) scrolls to and highlights the first instances of the text strings `Causes` and `linked`.
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/en-US/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute) scrolls to and highlights two text instances:
  - The first instance of the text `linked URL` that has the text `'s format` directly following it.
  - The first instance of a text string starting with `attributes` and ending with `attribute`, which is prefixed by `Deprecated`.

If you don't see one or more of your text fragments highlighted and you are sure you've got the syntax correct, you might just be highlighting a different instance than the one you expected. It might be highlighted, but offscreen.

### Styling matched text fragments

Browsers are free to style the highlighted text in whatever default way they choose. The [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) defines a pseudo-element, {{cssxref("::target-text")}}, which allows you to specifying custom styling.

For example, in our [scroll-to-text demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) we have the following CSS:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Try following the above link in a supporting browser to see the effect this has.

### Feature Detectability

The {{domxref("FragmentDirective")}} object, which is accessed via the {{domxref("Document.fragmentDirective")}} property, can be used to test whether or not text fragments are supported in a browser.

Try running the following in a supporting browser's devtools, in a tab with one or more matched text fragments:

```js
document.fragmentDirective;
// returns an empty FragmentDirective object, if supported
// undefined otherwise
```

This functionality is mainly intended for feature detection at present. In the future, the `FragmentDirective` object could include additional information.

## Reference

### API

- {{domxref("FragmentDirective")}}
  - : An object representing the text fragments. Currently empty and mainly intended for feature detection.
- {{domxref("Document.fragmentDirective")}}
  - : Returns the {{domxref("FragmentDirective")}} for the current document.

### CSS

- {{cssxref("::target-text")}}
  - : Represents the highlighted text fragments in the current document. It allows authors to customize the styling of text fragments.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Boldly link where no one has linked before: Text Fragments](https://web.dev/articles/text-fragments)
