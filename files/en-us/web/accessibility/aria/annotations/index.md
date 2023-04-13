---
title: ARIA annotations
slug: Web/Accessibility/ARIA/Annotations
page-type: guide
---

<section id="Quick_links">
  <ol>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/Annotations">ARIA annotations</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Guides">ARIA guides</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">ARIA live regions</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide">ARIA screen reader implementors guide</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques">Using ARIA: Roles, states, and properties</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/Multipart_labels">Multipart labels</a></li>
    <li><a href="/en-US/docs/Web/Accessibility/ARIA/How_to_file_ARIA-related_bugs">How to file ARIA-related bugs</a></li>
    <li class="toggle">
      <details><summary>ARIA states and properties</summary>
        {{ListSubpagesForSidebar("Web/Accessibility/ARIA/Attributes", 1)}}
      </details>
    </li>
    <li class="toggle">
      <details><summary>WAI-ARIA Roles</summary>
        {{ListSubpagesForSidebar("Web/Accessibility/ARIA/Roles", 1)}}
      </details>
    </li>
  </ol>
</section>

WAI-ARIA version 1.3 sees the addition of a set of new features, collectively known as ARIA annotations, which allow the creation of accessible annotations inside web documents. Typical use cases include edit suggestions (i.e. an addition and/or deletion in an editable document), and comments (e.g. an editorial comment related to a part of a document under review).

Below we'll introduce the new features associated with ARIA annotations, and have a look at some code examples that show them in action.

> **Note:** You can find all the examples discussed in this article in a demo file at [aria-annotations](https://mdn.github.io/html-examples/aria-annotations/).

## ARIA annotations features

The ARIA attributes providing these new abilities are as follows:

- `aria-description=""` — provides a detailed description of an HTML element, as opposed to the brief label provided by [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label).
- `role="insertion"` and `role="deletion"` — semantically denote HTML elements whose contents represent an insertion to or deletion from the overall document. These are semantically equivalent to the HTML {{HTMLElement('ins')}} and {{HTMLElement('del')}} elements. Note that these aren't part of the new ARIA annotations features, but they are of central relevance.
- `role="mark"` — semantically denotes HTML elements containing text that is marked/highlighted for reference purposes. This is semantically equivalent to the HTML {{HTMLElement('mark')}} element.
- `role="suggestion"` — semantically denotes a single proposed change to an editable document. This should be used on an element that wraps a single insertion and deletion (see `role="insertion"` and `role="deletion"` above).
- `role="comment"` — semantically denotes a comment/reaction to some content on the page, or to a previous comment.

To provide a semantic association between the document content being annotated and the annotation, an `aria-details` attribute can be set on the annotated content that contains the ID of the annotated element. `aria-details` has been updated so that it can support multiple IDs — this makes sense, for example you can easily envisage having multiple comments relating to the same bit of text.

ARIA annotation roles and objects are currently exposed in:

- Firefox from version 75 onwards, on Windows and Linux (on macOS, we are first waiting for Apple to define what Safari will expose as Apple-dialect attributes to VoiceOver, and will then follow suit.)
- Chrome from version 81 onwards, currently behind the `#enable-accessibility-expose-aria-annotations` flag (go to `chrome://flags` to enable this.)

Unfortunately, you won't be able to use any of these yet, as screen reader support is currently not there. For the moment, you can see the annotations data being exposed with tools like [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html). The annotations should just work once screen reader support is added.

## Associating annotated elements with their details

There are a number of different ways in which you can associate UI features with text labels or descriptions for accessibility purposes. It is useful to know when to use each. You'll see examples of most of these later on in the article, but briefly:

- `aria-label=""` can be set on an element to provide a brief descriptive label when it isn't appropriate to have the label actually appearing in the UI, for example a [search input](/en-US/docs/Web/HTML/Element/input/search) in a horizontal nav bar.
- `aria-labelledby=""` can be set on an element and given a value the same as the ID of an element that contains a label for the element. This is useful when the element's label is available in the UI, but for some reason a conventional {{HTMLElement('label')}} won't work.
- `aria-description=""` is similar to `aria-label=""` in that it accepts a string of text, but is used when you want to give an element a description, in addition to its short label.
- `aria-describedby=""` is analogous to `aria-labelledby=""` in that it accepts an ID reference, but is used when you want to associate the element with a more detailed description, in addition to its short label.
- `aria-details=""` references a more complex sets of details, distinct from simple text descriptions. You can learn more about this in the next section.

### aria-details versus aria-describedby

We have already alluded to the difference between these two above — `aria-describedby` is for textual descriptions, whereas `aria-details` is for more complex sets of details. But what does this actually mean?

`aria-describedby` is appropriate for associating an element with a simple text description, where you don't have much in the way of meaningful semantics contained within. For example:

```html
<p id="description-id">An extended text description of some kind.</p>

<div aria-describedby="description-id">
  <!-- Some kind of UI feature that needs an accessible description -->
</div>
```

`aria-details` is appropriate when linking to descriptions or annotations that are a bit more complex — rather than a simple text string, it might contain multiple bits of semantic information:

```html
<div id="detail-id">
  <h2>A heading</h2>
  <p>An extended text description of some kind…</p>
  <p><time datetime="…">A timestamp</time></p>
</div>

<div aria-details="detail-id">
  <!-- Some kind of UI feature where additional details might be useful -->
</div>
```

This difference becomes apparent when you get to how the content is interpreted in the accessibility layer and presented by screen readers, both in interaction guidance and through the [accessible name and description computation](https://www.w3.org/TR/accname/).

Content associated via `aria-describedby` becomes part of the accessible description and is flattened into a simple string (lists, links, etc. are not exposed). Generally it is announced after the accessible name. ARIA 1.3 also identifies [which roles _disallow_ its use](https://w3c.github.io/aria/#namefromprohibited) (such as `generic`, which maps to `<div>`).

Content associated via `aria-details` is _not_ factored into the accessible description computation. A screen reader would ideally make the user aware the content is available and then let the user navigate directly to that content. As such, it can contain rich content. The role of the referenced element (eg: `comment`, `definition`) may affect how a screen reader exposes or references the content. `aria-details` has no restrictions on which roles may use it.

## A basic description

Simple descriptions basically just involve usage of `aria-description` on an element to provide a description that can't be gotten from the element's text alone. As an example, let's say you have a poll/voting UI widget that shows numbers of votes, but you want to summarize the purpose of the widget in a clear description because the UI does not make it clear:

```html
<section
  aria-description="Choose your favorite fruit — the fruit with the highest number of votes will be added to the lunch options next week.">
  <form>
    <fieldset>
      <legend>
        <p>Pick your favorite fruit:</p>
      </legend>
      <ul>
        <li>
          <label
            >Apple: <input type="radio" name="fruit" value="apple"
          /></label>
        </li>
        <li>
          <label
            >Orange: <input type="radio" name="fruit" value="orange"
          /></label>
        </li>
        <li>
          <label
            >Banana: <input type="radio" name="fruit" value="banana"
          /></label>
        </li>
      </ul>
    </fieldset>
  </form>
</section>
```

If the descriptive text does appear in the UI (it should for this example), you can link the description to the widget using `aria-describedby`, like so:

```html
<p id="fruit-desc">
  Choose your favorite fruit — the fruit with the highest number of votes will
  be added to the lunch options next week.
</p>

<section aria-describedby="fruit-desc">
  <form>
    <fieldset>
      <legend>
        <p>Pick your favorite fruit:</p>
      </legend>
      <ul>
        <li>
          <label
            >Apple: <input type="radio" name="fruit" value="apple"
          /></label>
        </li>
        <li>
          <label
            >Orange: <input type="radio" name="fruit" value="orange"
          /></label>
        </li>
        <li>
          <label
            >Banana: <input type="radio" name="fruit" value="banana"
          /></label>
        </li>
      </ul>
    </fieldset>
  </form>
</section>
```

## Insertions and deletions

A common wish in online document systems like Google Docs is to be able to track changes, to see what reviewers or editors have suggested as changes to the text, before the managing editor or author accepts or rejects those changes. The semantics for this have long been available in HTML, via the {{HTMLElement('ins')}} and {{HTMLElement('del')}} elements:

```html
<p>
  Freida's pet is a <del>black Cat called Luna</del
  ><ins>purple Tyrannosaurus Rex called Tiny</ins>.
</p>
```

With the new additions, you now have new roles available to provide the same semantics, should you be unable to use {{HTMLElement('ins')}} and {{HTMLElement('del')}} elements for some reason:

```html
<p>
  Freida's pet is a <span role="deletion">black Cat called Luna</span
  ><span role="insertion">purple Tyrannosaurus Rex called Tiny</span>.
</p>
```

However, this often isn't enough — when you've got a content change like the one above that involves an insertion _and_ a deletion, there is no way for a screen reader user to work out if the two are related or not. This is the job of `role="suggestion"`, which should be set on an element wrapping both of them like so:

```html
<p>
  Freida's pet is a
  <span role="suggestion"
    ><span role="deletion">black Cat called Luna</span
    ><span role="insertion">purple Tyrannosaurus Rex called Tiny</span></span
  >.
</p>
```

We could even provide an information box saying who made the suggestion and when, and associate it with the suggestion via `aria-details`:

```html
<p>
  Freida's pet is a
  <span role="suggestion" aria-details="comment-source">
    <span role="deletion">black Cat called Luna</span>
    <span role="insertion">purple Tyrannosaurus Rex called Tiny</span></span
  >.
</p>

<div id="comment-source">
  Suggested by Chris,
  <time datetime="2019-03-30T19:29">March 30 2021, 19:29</time>
</div>
```

Browsers tend to provide a default black strikethrough for deletions, and a black underline for insertions, but you'll probably want to use some more interesting styling of your own, for example:

```css
ins,
[role="insertion"] {
  color: #0c0;
  text-decoration: underline;
}

del,
[role="deletion"] {
  color: red;
  text-decoration: line-through;
}

ins,
[role="insertion"],
del,
[role="deletion"] {
  text-decoration-thickness: 2px;
  background-color: #fee;
  padding: 2px 4px;
  margin: 0 1px;
}
```

## Comments

Online document applications also commonly feature commenting systems, and it would be nice to have a way to semantically associate commented content and its comments. ARIA annotations can help us here too.

Let's say we have a comment box like so:

```html
<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris said</h3>
  <p class="comment-text">I really think this could use more cowbell.</p>
  <p><time datetime="2019-03-30T19:29">March 30 2019, 19:29</time></p>
</div>
```

We've used `role="comment"` to mark this up as a comment. To associate the comment with the text being commented, we need to wrap the commented text with an element containing the `aria-details` attribute, the value of which should be the ID of the comment. {{HTMLElement('mark')}} is a suitable element for this purpose (a comment is a reference annotation), so the annotation could look like this:

```html
<p>
  The last half of the song is a slow-rising crescendo that peaks at the
  <mark aria-details="thread-1">end of the guitar solo</mark>, before fading
  away sharply.
</p>

<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris said</h3>
  <p class="comment-text">I really think this moment could use more cowbell.</p>
  <p><time datetime="2019-03-30T19:29">March 30 2019, 19:29</time></p>
</div>
```

> **Note:** If for some reason you can't use the {{HTMLElement('mark')}} element in your application, you could also use [`<span role="mark"></span>`](/en-US/docs/Web/Accessibility/ARIA/Roles/mark_role).

Since `aria-details` can now accept multiple IDs, we can associate multiple comments with the same annotation, like so:

```html
<p>
  The last half of the song is a slow-rising crescendo that peaks at the
  <mark aria-details="thread-1 thread-2">end of the guitar solo</mark>, before
  fading away sharply.
</p>

<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris said</h3>
  <p class="comment-text">I really think this moment could use more cowbell.</p>
  <p><time datetime="2019-03-30T19:29">March 30 2019, 19:29</time></p>
</div>

<div role="comment" id="thread-2" data-author="chris">
  <h3>Marcus said</h3>
  <p class="comment-text">
    The guitar solo could do with a touch more chorus, and a slightly lower
    volume.
  </p>
  <p><time datetime="2019-03-29T15:35">March 29 2019, 15:35</time></p>
</div>
```

Nested comments are also possible with ARIA annotations — nest the comments inside one another, like so:

```html
<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris said</h3>
  <p class="comment-text">I really think this moment could use more cowbell.</p>
  <p><time datetime="2019-03-30T19:29">March 30 2019, 19:29</time></p>

  <div role="comment" data-author="marcus">
    <h3>Marcus replied</h3>
    <p class="comment-text">
      I don't know about that. I think the cowbell could distract from the solo.
    </p>
    <p><time datetime="2019-03-30T21:02">March 30 2019, 21:02</time></p>
  </div>
</div>
```
