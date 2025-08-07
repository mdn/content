---
title: Handling whitespace
slug: Web/CSS/CSS_text/Whitespace
page-type: guide
sidebar: cssref
---

The presence of whitespace in the [DOM](/en-US/docs/Web/API/Document_Object_Model) can cause layout problems and make manipulation of the content tree difficult in unexpected ways, depending on where it is located. This article explores when difficulties can occur, and looks at what can be done to mitigate resulting problems.

## What is whitespace?

{{glossary("Whitespace")}} characters consist of different characters in different programming language contexts. _Document white space characters_, as far as the CSS whitespace processing rules are concerned, only include spaces (U+0020), tabs (U+0009), line feeds (LF, U+000A), and carriage returns (CR, U+000D), where CR characters are equivalent to spaces in every regard. These characters allow you to format your code for readability. Much of our source code is full of these whitespace characters, and we tend to remove them only as part of a production build step to reduce file size.

Note that this list does not include non-breaking spaces (U+00A0, `&nbsp;` in HTML). So these characters don't trigger any [collapsing](#collapsing_and_transformation), which is why they are often used to create longer spaces in HTML.

CSS also defines the concept of _segment breaks_, which in the context of HTML are equivalent to _line breaks_.

## How does HTML process whitespace?

It is a common myth that "HTML ignores whitespace", which is untrue: **HTML preserves all whitespace text content as you wrote them in the source code.** As a markup language, HTML produces a {{glossary("DOM")}} where all whitespace in the text content is preserved, which can be retrieved and manipulated via DOM APIs such as {{domxref("Node.textContent")}}. If HTML strips whitespace from the DOM, then CSS, a downstream rendering engine that works on the DOM, would not be able to preserve them using the {{cssxref("white-space")}} property.

> [!NOTE]
> To be clear, we're talking about whitespace _between HTML tags_, which becomes text nodes in the DOM. Any whitespace _inside a tag_ (between the angle brackets but not as part of an attribute value) is just part of the HTML syntax and does not appear in the DOM.

> [!NOTE]
> Due to the magic that is HTML parsing (quote from [DOM spec](https://dom.spec.whatwg.org/#introduction-to-the-dom)), there do exist certain places where whitespace characters could be ignored; for example, whitespace between the `<html>` and `<head>` opening tags, or `</body>` and `</html>` closing tags. Here, we just focus on concrete, rendered text content.
>
> Furthermore, the HTML parser does [_normalize_ certain whitespaces](https://html.spec.whatwg.org/multipage/parsing.html#preprocessing-the-input-stream). It would replace CR (U+000D) and CRLF sequences with single LF (U+000A). However, CR characters can still be inserted into the DOM either via [character references](/en-US/docs/Glossary/Character_reference) or JavaScript, so the CSS whitespace processing rules still need to explicitly handle them.

Take the following document, for example:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>My Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
  </body>
</html>
```

The DOM tree for this looks like so:

![The DOM tree representing a simple HTML document](dom-string.png)

Note that:

- Some text nodes will contain only whitespace.
- Other text nodes may have whitespace at the beginning or the end.

> [!NOTE]
> [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) supports highlighting text nodes, making it easier to see exactly which nodes contain whitespace characters. Pure whitespace nodes are marked with a "whitespace" label.

Conserving whitespace characters in the DOM is useful in many ways, but it can also make certain layouts more difficult to implement and may cause problems for developers who want to iterate over DOM nodes. We'll look at these issues and some solutions later on.

## How does CSS process whitespace?

When the DOM is passed to CSS for rendering, the whitespace is largely stripped by default. This means that the way your code is formatted is not visible to the end user—creating space around and inside elements is the job of CSS.

```html-nolint live-sample___html-whitespace
<!doctype html>

  <h1>      Hello      World!     </h1>
```

This source code contains a couple of line feeds after the `doctype` and a bunch of space characters before, after, and inside the `<h1>` element. But the browser ignores these spaces and just shows the words "Hello World!" as if these characters didn't exist at all:

{{EmbedLiveSample("html-whitespace")}}

CSS ignores most, but not all, whitespace characters. In this example, one of the spaces between "Hello" and "World!" still exists when the page is rendered in a browser. CSS uses [a specific algorithm](https://drafts.csswg.org/css-text-4/#white-space-processing) to decide which whitespace characters are user-irrelevant and how they are removed or transformed. We'll explain how this processing works in the next few sections.

### Collapsing and transformation

Let's look at an example. To make the whitespace characters more salient, we've also added a comment to show all spaces as ◦, all tabs as ⇥, and all line breaks as ⏎:

<!-- markdownlint-disable no-hard-tabs -->

```html-nolint live-sample___ex-inline
<h1>   Hello
				<span> World!</span>	  </h1>

<!--
<h1>◦◦◦Hello◦⏎
⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
-->
```

<!-- markdownlint-enable no-hard-tabs -->

This example is rendered in the browser like so:

{{EmbedLiveSample('ex-inline')}}

The `<h1>` element contains:

- A text node (consisting of some spaces, the word "Hello", a line break, and some tabs).
- An inline element (`<span>`, which contains a space, and the word "World!").
- Another text node (with a tab and spaces after the `<span>`).

Because this `<h1>` element contains only inline elements, it establishes an [inline formatting context](/en-US/docs/Web/CSS/CSS_inline_layout/Inline_formatting_context). This is one of the several layout rendering contexts that browser engines use to arrange content on the page.

Inside this inline formatting context, whitespace characters are processed as follows:

> [!NOTE]
> This algorithm can be configured via the {{cssxref("white-space-collapse")}} property (or its shorthand property {{cssxref("white-space")}}). We'll start by assuming its default value (`white-space-collapse: collapse`), then look at how different property values affect this algorithm.

1. First, all spaces and tabs immediately before and after a line break are ignored. So, if we take our example markup from before:

   ```html-nolint
   <h1>◦◦◦Hello◦⏎
   ⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
   ```

   ...and apply this first rule, we get:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>⇥◦◦</h1>
   ```

2. Next, consecutive line breaks are collapsed into a single line break. We don't have any in this example.
3. Next, lines in the source code are joined into single lines by removing any remaining line break characters. They are either transformed into spaces (U+0020) or simply removed, depending on the context before and after the break. The exact choice between the two is browser- and language-dependent. In our example here in English (where spaces separate words), we can expect all line breaks to be "transformed" into spaces. So we end up with:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>◦◦◦</h1>
   ```

   Notably, in languages that have no word separators, such as Chinese, lines are joined with no intervening space. So:

   ```html-nolint
   <div>你好
   世界</div>
   ```

   might be rendered as "你好世界" without any spaces in between, depending on the browser's heuristics.

4. Next, all tab characters are transformed into space characters, so the example becomes:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>◦◦◦</h1>
   ```

5. After that, any space immediately following another space (even across two separate inline elements) is ignored, so we end up with:

   ```html-nolint
   <h1>◦Hello◦<span>World!</span>◦</h1>
   ```

This is why people visiting the web page will see the phrase "Hello World!" nicely written at the top of the page, rather than a weirdly indented "Hello" followed by an even more weirdly indented "World!" on the next line.

After these steps, the browser processes line wrapping and bidirectional text, which we will ignore here. Note that there are still spaces left after the opening `<h1>` tag and before the closing `</h1>` tag, but these are not rendered in the browser. We'll handle that next, as each line is laid out.

Different {{cssxref("white-space-collapse")}} values skip different steps of this algorithm:

- `preserve` and `break-spaces`: the whole algorithm is skipped, and no whitespace collapsing or transformation happens.
- `preserve-breaks`: steps 2 and 3 are skipped, and line breaks are preserved.
- `preserve-spaces`: the whole algorithm is skipped and replaced with a single step to convert each tab or line break into a space.

In a nutshell, different whitespace characters are collapsed and transformed in the following fashion:

- Tabs are generally converted to spaces.
- If segment breaks are to be collapsed:
  - Sequences of segment breaks are collapsed to a single segment break.
  - They are converted to spaces in languages that separate words with spaces (like English), or removed altogether in languages that do not separate words with spaces (like Chinese).
- If spaces are to be collapsed:
  - Spaces or tabs before or after segment breaks are removed.
  - Sequences of spaces are collapsed to a single space.
- When spaces are preserved, sequences of spaces are treated as non-breaking, except that they will soft wrap at the end of each sequence — that is, the next line will always start with the next non-space character. In the case of the `break-spaces` value, however, a soft wrap could potentially occur after each space, so the next line may start with one or more spaces.

### Trimming and positioning

For both inline and [block formatting context](/en-US/docs/Web/CSS/CSS_display/Block_formatting_context), elements are laid out in _lines_ (for inline formatting, because of wrapping; for block formatting, each block is already a line). As each line is laid out, whitespace is processed further.

Let's take a look at an example to explain how. We've marked the whitespace characters as before. We have 3 text nodes that contain only whitespace, one before the first `<div>`, one between the 2 `<div>`s, and one after the second `<div>`.

<!-- markdownlint-disable no-hard-tabs -->

```html-nolint live-sample___ex-block
<body>
	<div>	Hello	</div>

   <div>  World!   </div>
</body>

<!--
<body>⏎
⇥<div>⇥Hello⇥</div>⏎
⏎
◦◦◦<div>◦◦World!◦◦</div>◦◦⏎
</body>
-->
```

<!-- markdownlint-enable no-hard-tabs -->

This renders like so:

{{EmbedLiveSample('ex-block')}}

We can summarize how the whitespace here is handled as follows:

> [!NOTE]
> This algorithm can be configured via the {{cssxref("white-space-collapse")}} property (or its shorthand property {{cssxref("white-space")}}). We'll start by assuming its default value (`white-space-collapse: collapse`), then look at how different property values affect this algorithm.

1. We first collapse whitespace the way as before, turning this:

   ```html-nolint
   <body>⏎
   ⇥<div>⇥Hello⇥</div>⏎
   ⏎
   ◦◦◦<div>◦◦World!◦◦</div>◦◦⏎
   </body>
   ```

   Into this:

   ```html-nolint
   <body>◦<div>◦Hello◦</div>◦<div>◦World!◦</div>◦</body>
   ```

   We are laying out lines here, so we first need to figure out how many lines there are. In this example, `<body>` establishes a block formatting context, so its five child nodes are each one line (each line in this code and below represents a line in the layout, not in the source code):

   ```html-nolint
   <body>
   ◦
   <div>◦Hello◦</div>
   ◦
   <div>◦World!◦</div>
   ◦
   </body>
   ```

   Note that if the lines get long, each line may wrap and create more lines, so in reality browsers can only know what each line contains as it lays them out. We'll skip the part about how text wrapping works.

2. Sequences of spaces at the beginning of a line are removed, so the above becomes:

   ```html-nolint
   <body>

   <div>Hello◦</div>

   <div>World!◦</div>

   </body>
   ```

3. Each tab that's preserved at this point is rendered according to the {{cssxref("tab-size")}}. This can only happen with `white-space-collapse` set to `preserve` or `break-spaces`, because all other settings turn tabs into spaces.
4. Sequences of spaces at the end of a line are removed, so the above becomes:

   ```html-nolint
   <body>

   <div>Hello</div>

   <div>World!</div>

   </body>
   ```

The 3 empty lines we now have are not going to occupy any space in the final layout, because they don't contain anything, so we'll end up with only 2 lines taking up space in the page. People viewing the web page see the words "Hello" and "World!" on 2 separate lines as you'd expect 2 `<div>`s to be laid out. The browser engine has essentially ignored all of the whitespace that was added in the source code.

Different {{cssxref("white-space-collapse")}} values skip different steps of this algorithm:

- `preserve` and `break-spaces`: the whole algorithm except step 3 is skipped, and no whitespace collapsing or transformation happens.
- `preserve-spaces`: the whole algorithm is skipped, so whitespace at the start and end of lines are preserved.
- `preserve-breaks`: the algorithm is the same as `collapse`.

### Whitespace processing between inline and inline-block elements

Let's move on to look at a few issues that can arise due to whitespace, and what can be done about them. First of all, we'll look at what happens with spaces in between inline and inline-block elements. In fact, we saw this already in our very first example, when we described how whitespace is processed inside inline formatting contexts.

We said that there were rules to ignore most characters but that word-separating characters remain. When you're only dealing with block-level elements such as `<p>` that only contain inline elements such as `<em>`, `<strong>`, `<span>`, etc., you don't normally care about this because the extra whitespace that does make it to the layout is helpful to separate the words in the sentence.

It gets more interesting however when you start using `inline-block` elements. These elements behave like inline elements on the outside, and blocks on the inside, and are often used to display more complex pieces of UI than just text, side-by-side on the same line, for example navigation menu items.

Because they are blocks, many people expect that they will behave as such, but really they don't. If there is formatting whitespace between adjacent inline elements, this will result in space in the layout, just like the spaces between words in text.

Consider this example (again, we've included an HTML comment that shows the whitespace characters in the HTML):

```css live-sample___inline-block
.people-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.people-list li {
  display: inline-block;
  width: 2em;
  height: 2em;
  background: #ff0066;
  border: 1px solid;
}
```

```html live-sample___inline-block
<ul class="people-list">
  <li></li>

  <li></li>

  <li></li>

  <li></li>

  <li></li>
</ul>

<!--
<ul class="people-list">⏎
◦◦<li></li>⏎
⏎
◦◦<li></li>⏎
⏎
◦◦<li></li>⏎
⏎
◦◦<li></li>⏎
⏎
◦◦<li></li>⏎
</ul>
-->
```

This renders as follows:

{{EmbedLiveSample('inline-block')}}

You probably don't want the gaps in between the blocks — depending on the use case (is this a list of avatars, or horizontal nav buttons?), you probably want the element sides flush with each other, and to be able to control any spacing yourself.

The Firefox DevTools HTML Inspector will highlight text nodes, and also show you exactly what area the elements are taking up — useful if you are wondering what is causing the problem, and are maybe thinking you've got some extra margin in there or something!

![Example of displaying whitespaces between blocks in the Firefox DevTools HTML Inspector](whitespace-devtools.png)

There are a few ways of getting around this problem:

Use [Flexbox](/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox) to create the horizontal list of items instead of trying an `inline-block` solution. This handles everything for you, and is definitely the preferred solution:

```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}
```

If you need to rely on `inline-block`, you could set the [`font-size`](/en-US/docs/Web/CSS/font-size) of the list to 0. This only works if your blocks are not sized with ems (based on the `font-size`, so the block size would also end up being 0). rems would be a good choice here:

```css
ul {
  font-size: 0;
  /* … */
}

li {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  /* … */
}
```

Or you could set negative margin on the list items:

```css
li {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: -0.25rem;
}
```

You can also solve this problem by avoiding whitespace nodes between `<li>` items:

```html-nolint
<li>
  ...
</li><li>
  ...
</li>
```

## Working with whitespace in the DOM

As mentioned previously, whitespace is collapsed and trimmed when rendered, but preserved in DOM. This may present some pitfalls when trying to do [DOM](/en-US/docs/Web/API/Document_Object_Model) manipulation in JavaScript. For example, if you have a reference to a parent node and want to affect its first element child using [`Node.firstChild`](/en-US/docs/Web/API/Node/firstChild), if there is a rogue whitespace node just after the opening parent tag you will not get the result you are expecting. The text node would be selected instead of the element you want to affect.

As another example, if you have a certain subset of elements that you want to do something to based on whether they are empty (have no child nodes) or not, you could check whether each element is empty using something like [`Node.hasChildNodes()`](/en-US/docs/Web/API/Node/hasChildNodes), but again, if any target elements contain text nodes, you could end up with false results.

The JavaScript code below defines several functions that make it easier to deal with whitespace in the DOM:

```js
/**
 * Throughout, whitespace is defined as one of the characters
 *  "\t" TAB \u0009
 *  "\n" LF  \u000A
 *  "\r" CR  \u000D
 *  " "  SPC \u0020
 *
 * This does not use JavaScript's "\s" because that includes non-breaking
 * spaces (and also some other characters).
 */

/**
 * Determine whether a node's text content is entirely whitespace.
 *
 * @param nod  A node implementing the `CharacterData` interface (i.e.,
 *             a `Text`, `Comment`, or `CDATASection` node)
 * @return     `true` if all of the text content of `nod` is whitespace,
 *             otherwise `false`.
 */
function isAllWs(nod) {
  return !/[^\t\n\r ]/.test(nod.textContent);
}

/**
 * Determine if a node should be ignored by the iterator functions.
 *
 * @param nod  An object implementing the `Node` interface.
 * @return     `true` if the node is:
 *                1) A `Text` node that is all whitespace
 *                2) A `Comment` node
 *             and otherwise `false`.
 */
function isIgnorable(nod) {
  return (
    nod.nodeType === 8 || // a comment node
    (nod.nodeType === 3 && isAllWs(nod))
  ); // a text node, all ws
}

/**
 * Version of `previousSibling` that skips nodes that are entirely
 * whitespace or comments. (Normally `previousSibling` is a property
 * of all DOM nodes that gives the sibling node, the node that is
 * a child of the same parent, that occurs immediately before the
 * reference node.)
 *
 * @param sib  The reference node.
 * @return     The closest previous sibling to `sib` that is not
 *             ignorable according to `isIgnorable`, or `null` if
 *             no such node exists.
 */
function nodeBefore(sib) {
  while ((sib = sib.previousSibling)) {
    if (!isIgnorable(sib)) {
      return sib;
    }
  }
  return null;
}

/**
 * Version of `nextSibling` that skips nodes that are entirely
 * whitespace or comments.
 *
 * @param sib  The reference node.
 * @return     The closest next sibling to `sib` that is not
 *             ignorable according to `isIgnorable`, or `null`
 *             if no such node exists.
 */
function nodeAfter(sib) {
  while ((sib = sib.nextSibling)) {
    if (!isIgnorable(sib)) {
      return sib;
    }
  }
  return null;
}

/**
 * Version of `lastChild` that skips nodes that are entirely
 * whitespace or comments. (Normally `lastChild` is a property
 * of all DOM nodes that gives the last of the nodes contained
 * directly in the reference node.)
 *
 * @param sib  The reference node.
 * @return     The last child of `sib` that is not ignorable
 *             according to `isIgnorable`, or `null` if no
 *             such node exists.
 */
function lastChild(par) {
  let res = par.lastChild;
  while (res) {
    if (!isIgnorable(res)) {
      return res;
    }
    res = res.previousSibling;
  }
  return null;
}

/**
 * Version of `firstChild` that skips nodes that are entirely
 * whitespace and comments.
 *
 * @param sib  The reference node.
 * @return     The first child of `sib` that is not ignorable
 *             according to `isIgnorable`, or `null` if no
 *             such node exists.
 */
function firstChild(par) {
  let res = par.firstChild;
  while (res) {
    if (!isIgnorable(res)) {
      return res;
    }
    res = res.nextSibling;
  }
  return null;
}

/**
 * Version of `data` that doesn't include whitespace at the beginning
 * and end and normalizes all whitespace to a single space. (Normally
 * `data` is a property of text nodes that gives the text of the node.)
 *
 * @param txt  The text node whose data should be returned
 * @return     A string giving the contents of the text node with
 *             whitespace collapsed.
 */
function dataOf(txt) {
  let data = txt.textContent;
  data = data.replace(/[\t\n\r ]+/g, " ");
  if (data[0] === " ") {
    data = data.substring(1, data.length);
  }
  if (data[data.length - 1] === " ") {
    data = data.substring(0, data.length - 1);
  }
  return data;
}
```

The following code demonstrates the use of the functions above. It iterates over the children of an element (whose children are all elements) to find the one whose text is `"This is the third paragraph"`, and then changes the class attribute and the contents of that paragraph.

```js
let cur = firstChild(document.getElementById("test"));
while (cur) {
  if (dataOf(cur.firstChild) === "This is the third paragraph.") {
    cur.className = "magic";
    cur.firstChild.textContent = "This is the magic paragraph.";
  }
  cur = nodeAfter(cur);
}
```

Not all DOM APIs preserve whitespace; some APIs deal with the _rendered text_ by design. For example, {{domxref("HTMLElement.innerText")}} returns the text exactly as it's rendered, with all whitespace collapsed and trimmed. {{domxref("Selection.toString()")}} returns the text as it would be pasted, which generally means that whitespace is collapsed. However, in Firefox (which collapses whitespace between Chinese characters, as mentioned in the [collapsing and transformation](#collapsing_and_transformation) section above), the collapsed whitespace is still preserved both in the string returned by `toString()` and in the pasted text.
