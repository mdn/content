---
title: CSS Custom Highlight API
slug: Web/API/CSS_Custom_Highlight_API
page-type: web-api-overview
tags:
  - API
  - CSS Custom Highlight
  - Reference
browser-compat:
  - api.Highlight
  - api.HighlightRegistry
  - css.selectors.highlight
---

{{DefaultAPISidebar("CSS Custom Highlight API")}}

Styling ranges of text on a webpage can be very useful. For example, text editing web apps highlight spelling or grammar errors, and code editors highlight syntax errors.

The CSS Custom Highlight API provides a mechanism for styling arbitrary ranges on a document by using JavaScript to create the ranges, and CSS to style them.

## Concepts and usage

The CSS Custom Highlight API extends the concept of other highlight pseudo-elements such as {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, and {{cssxref('::target-text')}} by providing a way to create and style arbitrary {{domxref('Range')}} objects, rather than being limited to browser-defined ranges.

Using the CSS Custom Highlight API, you can programmatically create ranges and then highlight them without affecting the DOM structure in the page.

There are four steps to style ranges of text on a webpage using the API:

1. Creating {{domxref('Range')}} objects.
2. Creating {{domxref('Highlight')}} objects for the ranges.
3. Registering the highlights using the {{domxref('HighlightRegistry')}}.
4. Styling the highlights using the {{cssxref('::highlight', '::highlight() pseudo-element')}}.

### Creating ranges

The first step is to define the ranges that need to be styled by creating {{domxref('Range')}} objects in JavaScript. For example:

```js
const parentNode = document.getElementById("foo");

const range1 = new Range();
range1.setStart(parentNode, 10);
range1.setEnd(parentNode, 20);

const range2 = new Range();
range2.setStart(parentNode, 40);
range2.setEnd(parentNode, 60);
```

### Creating highlights

Once you've defined ranges, the second step is to instantiate {{domxref('Highlight')}} objects for them. Multiple ranges can be associated to one highlight. If you want to highlight multiple pieces of text the same way, you need to create a single highlight and initialize it with all of the corresponding ranges.

```js
const highlight = new Highlight(range1, range2);
```

But you can also create as many highlights as you need. For example, if you are building a collaborative text editor where each user gets a different text color, then you can create one highlight per user, as seen in the code snippet below:

```js
const highlight1 = new Highlight(range1);
const highlight2 = new Highlight(range2);
```

Each highlight can then be styled differently.

### Registering highlights

Once highlights have been created, register them by using the {{domxref('HighlightRegistry')}} available as `CSS.highlights`.

The registry is a {{jsxref('Map')}}-like object used to register highlights by names, as seen below:

```js
CSS.highlights.set('search-results', highlight);
```

In the above code snippet, the `search-results` string is a custom identifier that will be used in CSS to apply styles to the registered highlight.

You can register as many highlights as you need in the registry, as well as remove highlights and clear the entire registry.

```js
// Remove a single highlight from the registry.
CSS.highlights.delete('search-results');

// Clear the registry.
CSS.highlights.clear();
```

### Styling highlights

The final step is to style the registered highlights. This is done by using the {{cssxref('::highlight', '::highlight()')}} pseudo-element. For example, to style the `search-results` highlight registered in the previous step:

```css
::highlight(search-results) {
  background-color: yellow;
  color: black;
}
```

## Interfaces

- {{domxref('Highlight')}}
  - : This interface is used to represent a collection of ranges to be styled on a document.
- {{domxref('HighlightRegistry')}}
  - : Accessible via `CSS.highlights`, this map-like object is used to register highlights under custom IDs.

## Examples

### Highlighting search results

This example shows how to use the CSS Custom Highlight API to highlight search results.

#### HTML

The HTML code snippet below defines a search field and an article with a few paragraphs and styles text:

```html
<label>Search within text <input id="query" type="text"></label>
<article>
  <p>
    Maxime debitis hic, delectus perspiciatis <em>laborum molestiae labore</em>,
    deleniti, quam consequatur iure veniam alias voluptas nisi quo.
    Dolorem eaque alias, quo vel quas repudiandae architecto deserunt
    quidem, sapiente laudantium nulla.
  </p>
  <p>
    Maiores odit molestias, necessitatibus doloremque dolor illum reprehenderit
    provident nostrum laboriosam iste, <strong>tempore perferendis</strong>!
    Ab porro neque esse voluptas libero necessitatibus fugiat, ex, minus atque
    deserunt veniam molestiae tempora? Vitae.
  </p>
  <p>
    Dolorum facilis voluptate eaque eius similique ducimus dignissimos
    assumenda quos architecto. Doloremque deleniti non exercitationem
    rerum quam alias harum, nisi obcaecati corporis temporibus vero
    <em>sapiente voluptatum est quibusdam id ipsa</em>.
  </p>
</article>
```

#### JavaScript

JavaScript is used to listen to `input` events on the search field. When the event is fired, the code finds the typed text in the article, and uses the CSS Custom Highlight API to create and register a `search-results` highlight object:

```js
const query = document.getElementById("query");
const article = document.querySelector("article");

// Find all text nodes in the article. We'll search within
// these text nodes.
const treeWalker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT);
const allTextNodes = [];
let currentNode = treeWalker.nextNode();
while (currentNode) {
  allTextNodes.push(currentNode);
  currentNode = treeWalker.nextNode();
}

// Listen to the input event to run the search.
query.addEventListener("input", () => {
  // Clear the HighlightRegistry to remove the 
  // previous search results.
  CSS.highlights.clear();

  // Clean-up the search query and bail-out if
  // if it's empty.
  const str = query.value.trim().toLowerCase();
  if (!str) {
    return;
  }

  const ranges = allTextNodes
    .map((el) => {
      return { el, text: el.textContent.toLowerCase() };
    })
    .map(({ text, el }) => {
      const indices = [];
      let startPos = 0;
      while (startPos < text.length) {
        const index = text.indexOf(str, startPos);
        if (index === -1) break;
        indices.push(index);
        startPos = index + str.length;
      }

      // Create a range object for each instance of 
      // str we found in the text node.
      return indices.map((index) => {
        const range = new Range();
        range.setStart(el, index);
        range.setEnd(el, index + str.length);
        return range;
      });
    });

  // Create a Highlight object for the ranges.
  const searchResultsHighlight = new Highlight(...ranges.flat());
  // Register the Highlight object in the registry.
  CSS.highlights.set("search-results", searchResultsHighlight);
});
```

#### CSS

Finally, the `::highlight()` pseudo-element is used to style the ranges:

```css
::highlight(search-results) {
  background-color: #f06;
  color: white;
}
```

#### Result

The result is shown below. Type text within the search field to highlight matches in the article:

{{ EmbedLiveSample('Highlighting search results', 700, 300) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
