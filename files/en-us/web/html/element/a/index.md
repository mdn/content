---
title: "<a>: The Anchor element"
slug: Web/HTML/Element/a
page-type: html-element
browser-compat: html.elements.a
---

{{HTMLSidebar}}

The **`<a>`** [HTML](/en-US/docs/Web/HTML) element (or _anchor_ element), with [its `href` attribute](#href), creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.

Content within each `<a>` _should_ indicate the link's destination. If the `href` attribute is present, pressing the enter key while focused on the `<a>` element will activate it.

{{EmbedInteractiveExample("pages/tabbed/a.html", "tabbed-shorter")}}

## Attributes

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `download`

  - : Causes the browser to treat the linked URL as a download. Can be used with or without a `filename` value:

    - Without a value, the browser will suggest a filename/extension, generated from various sources:

      - The {{HTTPHeader("Content-Disposition")}} HTTP header
      - The final segment in the URL [path](/en-US/docs/Web/API/URL/pathname)
      - The {{Glossary("MIME_type", "media type")}} (from the {{HTTPHeader("Content-Type")}} header, the start of a [`data:` URL](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs), or {{domxref("Blob.type")}} for a [`blob:` URL](/en-US/docs/Web/API/URL/createObjectURL))

    - `filename`: defining a value suggests it as the filename. `/` and `\` characters are converted to underscores (`_`). Filesystems may forbid other characters in filenames, so browsers will adjust the suggested name if necessary.

    > **Note:**
    >
    > - `download` only works for [same-origin URLs](/en-US/docs/Web/Security/Same-origin_policy), or the `blob:` and `data:` schemes.
    > - How browsers treat downloads varies by browser, user settings, and other factors. The user may be prompted before a download starts, or the file may be saved automatically, or it may open automatically, either in an external application or in the browser itself.
    > - If the `Content-Disposition` header has different information from the `download` attribute, resulting behavior may differ:
    >
    >   - If the header specifies a `filename`, it takes priority over a filename specified in the `download` attribute.
    >   - If the header specifies a disposition of `inline`, Chrome and Firefox prioritize the attribute and treat it as a download. Old Firefox versions (before 82) prioritize the header and will display the content inline.

- `href`

  - : The URL that the hyperlink points to. Links are not restricted to HTTP-based URLs — they can use any URL scheme supported by browsers:

    - Sections of a page with document fragments
    - Specific text portions with [text fragments](/en-US/docs/Web/Text_fragments)
    - Pieces of media files with media fragments
    - Telephone numbers with `tel:` URLs
    - Email addresses with `mailto:` URLs
    - While web browsers may not support other URL schemes, websites can with [`registerProtocolHandler()`](/en-US/docs/Web/API/Navigator/registerProtocolHandler)

- `hreflang`
  - : Hints at the human language of the linked URL. No built-in functionality. Allowed values are the same as [the global `lang` attribute](/en-US/docs/Web/HTML/Global_attributes/lang).
- `ping`
  - : A space-separated list of URLs. When the link is followed, the browser will send {{HTTPMethod("POST")}} requests with the body `PING` to the URLs. Typically for tracking.
- `referrerpolicy`

  - : How much of the [referrer](/en-US/docs/Web/HTTP/Headers/Referer) to send when following the link.

    - `no-referrer`: The {{HTTPHeader("Referer")}} header will not be sent.
    - `no-referrer-when-downgrade`: The {{HTTPHeader("Referer")}} header will not be sent to {{Glossary("origin")}}s without {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host")}}, and {{Glossary("port")}}.
    - `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
    - `same-origin`: A referrer will be sent for {{Glossary("Same-origin policy", "same origin")}}, but cross-origin requests will contain no referrer information.
    - `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).
    - `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](/en-US/docs/Web/API/HTMLAnchorElement/hash), [password](/en-US/docs/Web/API/HTMLAnchorElement/password), or [username](/en-US/docs/Web/API/HTMLAnchorElement/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.

- `rel`
  - : The relationship of the linked URL as space-separated link types.
- `target`

  - : Where to display the linked URL, as the name for a _browsing context_ (a tab, window, or {{HTMLElement("iframe")}}). The following keywords have special meanings for where to load the URL:

    - `_self`: the current browsing context. (Default)
    - `_blank`: usually a new tab, but users can configure browsers to open a new window instead.
    - `_parent`: the parent browsing context of the current one. If no parent, behaves as `_self`.
    - `_top`: the topmost browsing context (the "highest" context that's an ancestor of the current one). If no ancestors, behaves as `_self`.

    > **Note:** Setting `target="_blank"` on `<a>` elements implicitly provides the same `rel` behavior as setting [`rel="noopener"`](/en-US/docs/Web/HTML/Attributes/rel/noopener) which does not set `window.opener`.

- `type`
  - : Hints at the linked URL's format with a {{Glossary("MIME type")}}. No built-in functionality.

### Deprecated attributes

- `charset` {{Deprecated_Inline}}

  - : Hinted at the {{Glossary("character encoding")}} of the linked URL.

    > **Note:** This attribute is deprecated and **should not be used by authors**. Use the HTTP {{HTTPHeader("Content-Type")}} header on the linked URL.

- `coords` {{Deprecated_Inline}}
  - : Used with [the `shape` attribute](#shape). A comma-separated list of coordinates.
- `name` {{Deprecated_Inline}}

  - : Was required to define a possible target location in a page. In HTML 4.01, `id` and `name` could both be used on `<a>`, as long as they had identical values.

    > **Note:** Use the global attribute {{HTMLAttrxRef("id")}} instead.

- `rev` {{Deprecated_Inline}}
  - : Specified a reverse link; the opposite of [the `rel` attribute](#rel). Deprecated for being very confusing.
- `shape` {{Deprecated_Inline}}

  - : The shape of the hyperlink's region in an image map.

    > **Note:** Use the {{HTMLElement("area")}} element for image maps instead.

## Examples

### Linking to an absolute URL

#### HTML

```html
<a href="https://www.mozilla.com"> Mozilla </a>
```

#### Result

{{EmbedLiveSample('Linking_to_an_absolute_URL')}}

### Linking to relative URLs

#### HTML

```html
<a href="//example.com">Scheme-relative URL</a>
<a href="/en-US/docs/Web/HTML">Origin-relative URL</a>
<a href="./p">Directory-relative URL</a>
```

```css hidden
a {
  display: block;
  margin-bottom: 0.5em;
}
```

#### Result

{{EmbedLiveSample('Linking_to_relative_URLs')}}

### Linking to an element on the same page

```html
<!-- <a> element links to the section below -->
<p><a href="#Section_further_down"> Jump to the heading below </a></p>

<!-- Heading to link to -->
<h2 id="Section_further_down">Section further down</h2>
```

#### Result

{{EmbedLiveSample('Linking to an element on the same page')}}

> **Note:** You can use `href="#top"` or the empty fragment (`href="#"`) to link to the top of the current page, [as defined in the HTML specification](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier).

### Linking to an email address

To create links that open in the user's email program to let them send a new message, use the `mailto:` scheme:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Result

{{EmbedLiveSample('Linking to an email address')}}

For details about `mailto:` URLs, such as including a subject or body, see [Email links](/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#email_links) or {{RFC(6068)}}.

### Linking to telephone numbers

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Result

{{EmbedLiveSample('Linking to telephone numbers')}}

`tel:` link behavior varies with device capabilities:

- Cellular devices autodial the number.
- Most operating systems have programs that can make calls, like Skype or FaceTime.
- Websites can make phone calls with {{domxref("Navigator/registerProtocolHandler", "registerProtocolHandler")}}, such as `web.skype.com`.
- Other behaviors include saving the number to contacts, or sending the number to another device.

See {{RFC(3966)}} for syntax, additional features, and other details about the `tel:` URL scheme.

### Using the download attribute to save a \<canvas> as a PNG

To save a {{HTMLElement("canvas")}} element's contents as an image, you can create a link where the `href` is the canvas data as a `data:` URL created with JavaScript and the `download` attribute provides the file name for the downloaded PNG file:

#### Example painting app with save link

##### HTML

```html
<p>
  Paint by holding down the mouse button and moving it.
  <a href="" download="my_painting.png">Download my painting</a>
</p>

<canvas width="300" height="300"></canvas>
```

##### CSS

```css
html {
  font-family: sans-serif;
}
canvas {
  background: #fff;
  border: 1px dashed;
}
a {
  display: inline-block;
  background: #69c;
  color: #fff;
  padding: 5px 10px;
}
```

##### JavaScript

```js
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
c.fillStyle = "hotpink";

function draw(x, y) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI * 2);
    c.closePath();
    c.fill();
  }
}

canvas.addEventListener("mousemove", (event) =>
  draw(event.offsetX, event.offsetY)
);
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));

document
  .querySelector("a")
  .addEventListener(
    "click",
    (event) => (event.target.href = canvas.toDataURL())
  );
```

##### Result

{{EmbedLiveSample('Example_painting_app_with_save_link', '100%', '400')}}

## Security and privacy

`<a>` elements can have consequences for users' security and privacy. See [`Referer` header: privacy and security concerns](/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns) for information.

Using `target="_blank"` without [`rel="noreferrer"`](/en-US/docs/Web/HTML/Attributes/rel/noreferrer) and [`rel="noopener"`](/en-US/docs/Web/HTML/Attributes/rel/noopener) makes the website vulnerable to {{domxref("window.opener")}} API exploitation attacks, although note that, in newer browser versions setting `target="_blank"` implicitly provides the same protection as setting `rel="noopener"`. See [browser compatibility](#browser_compatibility) for details.

## Accessibility

### Strong link text

**The content inside a link should indicate where the link goes**, even out of context.

#### Inaccessible, weak link text

A sadly common mistake is to only link the words "click here" or "here":

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### Result

{{EmbedLiveSample('Inaccessible, weak link text')}}

#### Strong link text

Luckily, this is an easy fix, and it's actually shorter than the inaccessible version!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Result

{{EmbedLiveSample('Strong link text')}}

Assistive software has shortcuts to list all links on a page. However, strong link text benefits all users — the "list all links" shortcut emulates how sighted users quickly scan pages.

### onclick events

Anchor elements are often abused as fake buttons by setting their `href` to `#` or `javascript:void(0)` to prevent the page from refreshing, then listening for their `click` events .

These bogus `href` values cause unexpected behavior when copying/dragging links, opening links in a new tab/window, bookmarking, or when JavaScript is loading, errors, or is disabled. They also convey incorrect semantics to assistive technologies, like screen readers.

Use a {{HTMLElement("button")}} instead. In general, **you should only use a hyperlink for navigation to a real URL**.

### External links and linking to non-HTML resources

Links that open in a new tab/window via `target="_blank"`, or links that point to a download file should indicate what will happen when the link is followed.

People experiencing low vision conditions, navigating with the aid of screen reading technology, or with cognitive concerns may be confused when a new tab, window, or application opens unexpectedly. Older screen-reading software may not even announce the behavior.

#### Link that opens a new tab/window

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Result

{{EmbedLiveSample('Link that opens a new tab/window')}}

#### Link to a non-HTML resource

```html
<a href="2017-annual-report.ppt"> 2017 Annual Report (PowerPoint) </a>
```

If an icon is used to signify link behavior, make sure it has an [_alt text_](/en-US/docs/Web/HTML/Element/img#alt):

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia
  <img alt="(opens in new tab)" src="newtab.svg" />
</a>

<a href="2017-annual-report.ppt">
  2017 Annual Report
  <img alt="(PowerPoint file)" src="ppt-icon.svg" />
</a>
```

##### Result

{{EmbedLiveSample('Link to a non-HTML resource')}}

- [WebAIM: Links and Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Understanding WCAG, Guideline 3.2](/en-US/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Opening new windows and tabs from a link only when necessary](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Giving users advanced warning when opening a new window](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip links

A **skip link** is a link placed as early as possible in {{HTMLElement("body")}} content that points to the beginning of the page's main content. Usually, CSS hides a skip link offscreen until focused.

```html
<body>
  <a href="#content" class="skip-link">Skip to main content</a>

  <header>…</header>

  <main id="content"></main>
  <!-- The skip link jumps to here -->
</body>
```

```css
.skip-link {
  position: absolute;
  top: -3em;
  background: #fff;
}
.skip-link:focus {
  top: 0;
}
```

#### Result

{{EmbedLiveSample('Skip links')}}

Skip links let keyboard users bypass content repeated throughout multiple pages, such as header navigation.

Skip links are especially useful for people who navigate with the aid of assistive technology such as switch control, voice command, or mouth sticks/head wands, where the act of moving through repetitive links can be laborious.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [How-to: Use Skip Navigation links](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / Understanding WCAG, Guideline 2.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Size and proximity

#### Size

Interactive elements, like links, should provide an area large enough that it is easy to activate them. This helps a variety of people, including those with motor control issues and those using imprecise inputs such as a touchscreen. A minimum size of 44×44 [CSS pixels](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) is recommended.

Text-only links in prose content are exempt from this requirement, but it's still a good idea to make sure enough text is hyperlinked to be easily activated.

- [Understanding Success Criterion 2.5.5: Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets](https://www.a11yproject.com/posts/large-touch-targets/)

#### Proximity

Interactive elements, like links, placed in close visual proximity should have space separating them. Spacing helps people with motor control issues, who may otherwise accidentally activate the wrong interactive content.

Spacing may be created using CSS properties like {{CSSxRef("margin")}}.

- [Hand tremors and the giant-button-problem](https://axesslab.com/hand-tremors/)

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
        >,
        <a
          href="/en-US/docs/Web/HTML/Content_categories#interactive_content"
          >interactive content</a
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a
          href="/en-US/docs/Web/HTML/Content_categories#transparent_content_model"
          >Transparent</a
        >, except that no descendant may be
        <a
          href="/en-US/docs/Web/HTML/Content_categories#interactive_content"
          >interactive content</a
        > or an
        <a href="/en-US/docs/Web/HTML/Element/a"
          >a</a
        > element, and no descendant may have a specified
        <a
          href="/en-US/docs/Web/HTML/Global_attributes/tabindex"
          >tabindex</a
        > attribute.
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
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >, or any element that accepts
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >flow content</a
        >, but not other <code>&#x3C;a></code> elements.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a> when <code>href</code> attribute is
        present, otherwise
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >no corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <p>When <code>href</code> attribute is present:</p>
        <ul>
          <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></li>
          <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a></li>
          <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a></li>
          <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
          <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
          <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></li>
          <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a></li>
          <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a></li>
          <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a></li>
          <li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>treeitem</code></a></li>
        </ul>
        <p>When <code>href</code> attribute is not present:</p>
        <ul>
          <li>any</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{DOMxRef("HTMLAnchorElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("link")}} is similar to `<a>`, but for metadata hyperlinks that are invisible to users.
- {{CSSxRef(":link")}} is a CSS pseudo-class that will match `<a>` elements with URL in `href` attribute that was not yet visited by the user.
- {{CSSxRef(":visited")}} is a CSS pseudo-class that will match `<a>` elements with URL in `href` attribute that was visited by the user in the past.
- {{CSSxRef(":any-link")}} is a CSS pseudo-class that will match `<a>` elements with `href` attribute.
- [Text fragments](/en-US/docs/Web/Text_fragments) are user-agent instructions added to URLs that allow content authors to link to specific text on a page, without IDs being required.
