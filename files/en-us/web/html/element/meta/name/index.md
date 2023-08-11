---
title: Standard metadata names
slug: Web/HTML/Element/meta/name
page-type: html-attribute
browser-compat: html.elements.meta.name
---

{{HTMLSidebar}}

The {{htmlelement("meta")}} element can be used to provide document metadata in terms of name-value pairs, with the [`name`](/en-US/docs/Web/HTML/Element/meta#name) attribute giving the metadata name, and the [`content`](/en-US/docs/Web/HTML/Element/meta#content) attribute giving the value.

### Standard metadata names defined in the HTML specification

The HTML specification defines the following set of standard metadata names:

- `application-name`: the name of the application running in the web page.

  > **Note:**
  >
  > - Browsers may use this to identify the application. It is different from the {{HTMLElement("title")}} element, which usually contain the application name, but may also contain information like the document name or a status.
  > - Simple web pages shouldn't define an application-name.

- `author`: the name of the document's author.
- `description`: a short and accurate summary of the content of the page. Several browsers, like Firefox and Opera, use this as the default description of bookmarked pages.
- `generator`: the identifier of the software that generated the page.
- `keywords`: words relevant to the page's content separated by commas.
- `referrer`: controls the HTTP {{httpheader("Referer")}} header of requests sent from the document:

  <table class="standard-table">
    <caption>
      Values for the
      <code>content</code>
      attribute of
      <code>&#x3C;meta name="referrer"></code>
    </caption>
    <tbody>
      <tr>
        <td><code>no-referrer</code></td>
        <td>Do not send a HTTP {{httpheader("Referer")}} header.</td>
      </tr>
      <tr>
        <td><code>origin</code></td>
        <td>Send the {{glossary("origin")}} of the document.</td>
      </tr>
      <tr>
        <td><code>no-referrer-when-downgrade</code></td>
        <td>
          Send the full URL when the destination is at least as secure as the
          current page (HTTP(S)→HTTPS), but send no referrer when it's less secure
          (HTTPS→HTTP). This is the default behavior.
        </td>
      </tr>
      <tr>
        <td><code>origin-when-cross-origin</code></td>
        <td>
          Send the full URL (stripped of parameters) for same-origin requests, but
          only send the origin for other cases.
        </td>
      </tr>
      <tr>
        <td><code>same-origin</code></td>
        <td>
          Send the full URL (stripped of parameters) for same-origin requests.
          Cross-origin requests will contain no referrer header.
        </td>
      </tr>
      <tr>
        <td><code>strict-origin</code></td>
        <td>
          Send the origin when the destination is at least as secure as the
          current page (HTTP(S)→HTTPS), but send no referrer when it's less secure
          (HTTPS→HTTP).
        </td>
      </tr>
      <tr>
        <td><code>strict-origin-when-cross-origin</code></td>
        <td>
          Send the full URL (stripped of parameters) for same-origin requests.
          Send the origin when the destination is at least as secure as the
          current page (HTTP(S)→HTTPS). Otherwise, send no referrer.
        </td>
      </tr>
      <tr>
        <td><code>unsafe-URL</code></td>
        <td>
          Send the full URL (stripped of parameters) for same-origin or
          cross-origin requests.
        </td>
      </tr>
    </tbody>
  </table>

  > **Note:**
  >
  > - Dynamically inserting `<meta name="referrer">` (with {{domxref("Document.write", "document.write()")}} or {{domxref("Node.appendChild", "appendChild()")}}) makes the referrer behavior unpredictable.
  > - When several conflicting policies are defined, the `no-referrer` policy is applied.

- [`theme-color`](/en-US/docs/Web/HTML/Element/meta/name/theme-color): indicates a suggested color that user agents should use to customize the display of the page or of the surrounding user interface. The `content` attribute contains a valid CSS {{cssxref("&lt;color&gt;")}}. The `media` attribute with a valid media query list can be included to set the media the theme color metadata applies to.
- `color-scheme`: specifies one or more color schemes with which the document is compatible.

  The browser will use this information in tandem with the user's browser or device settings to determine what colors to use for everything from background and foregrounds to form controls and scrollbars. The primary use for `<meta name="color-scheme">` is to indicate compatibility with—and order of preference for—light and dark color modes.

  The value of the [`content`](/en-US/docs/Web/HTML/Element/meta#content) property for `color-scheme` may be one of the following:

  - `normal`
    - : The document is unaware of color schemes and should be rendered using the default color palette.
  - \[`light` | `dark`]+
    - : One or more color schemes supported by the document. Specifying the same color scheme more than once has the same effect as specifying it only once. Indicating multiple color schemes indicates that the first scheme is preferred by the document, but that the second specified scheme is acceptable if the user prefers it.
  - `only light`
    - : Indicates that the document _only_ supports light mode, with a light background and dark foreground colors. By specification, `only dark` _is not valid_, because forcing a document to render in dark mode when it isn't truly compatible with it can result in unreadable content; all major browsers default to light mode if not otherwise configured.

  For example, to indicate that a document prefers dark mode but does render functionally in light mode as well:

  ```html
  <meta name="color-scheme" content="dark light" />
  ```

  This works at the document level in the same way that the CSS {{cssxref("color-scheme")}} property lets individual elements specify their preferred and accepted color schemes. Your styles can adapt to the current color scheme using the {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} CSS media feature.

### Standard metadata names defined in other specifications

The CSS Device Adaptation specification defines the following metadata name:

- `viewport`: gives hints about the size of the initial size of the {{glossary("viewport")}}.

  <table class="fullwidth-table">
    <caption>
      Values for the content of
      <code>&#x3C;meta name="viewport"></code>
    </caption>
    <thead>
      <tr>
        <th scope="col">Value</th>
        <th scope="col">Possible subvalues</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>width</code></td>
        <td>A positive integer number, or the text <code>device-width</code></td>
        <td>
          Defines the pixel width of the viewport that you want the website to be
          rendered at.
        </td>
      </tr>
      <tr>
        <td><code>height</code></td>
        <td>A positive integer, or the text <code>device-height</code></td>
        <td>Defines the height of the viewport. Not used by any browser.</td>
      </tr>
      <tr>
        <td><code>initial-scale</code></td>
        <td>A positive number between <code>0.0</code> and <code>10.0</code></td>
        <td>
          Defines the ratio between the device width (<code>device-width</code> in
          portrait mode or <code>device-height</code> in landscape mode) and the
          viewport size.
        </td>
      </tr>
      <tr>
        <td><code>maximum-scale</code></td>
        <td>A positive number between <code>0.0</code> and <code>10.0</code></td>
        <td>
          Defines the maximum amount to zoom in. It must be greater or equal to
          the <code>minimum-scale</code> or the behavior is undefined. Browser
          settings can ignore this rule and iOS10+ ignores it by default.
        </td>
      </tr>
      <tr>
        <td><code>minimum-scale</code></td>
        <td>A positive number between <code>0.0</code> and <code>10.0</code></td>
        <td>
          Defines the minimum zoom level. It must be smaller or equal to the
          <code>maximum-scale</code> or the behavior is undefined. Browser
          settings can ignore this rule and iOS10+ ignores it by default.
        </td>
      </tr>
      <tr>
        <td><code>user-scalable</code></td>
        <td><code>yes</code> or <code>no</code></td>
        <td>
          If set to <code>no</code>, the user is not able to zoom in the webpage.
          The default is <code>yes</code>. Browser settings can ignore this rule,
          and iOS10+ ignores it by default.
        </td>
      </tr>
      <tr>
        <td><code>viewport-fit</code></td>
        <td><code>auto</code>, <code>contain</code> or <code>cover</code></td>
        <td>
          <p>
            The <code>auto</code> value doesn't affect the initial layout
            viewport, and the whole web page is viewable.
          </p>
          <p>
            The <code>contain</code> value means that the viewport is scaled to
            fit the largest rectangle inscribed within the display.
          </p>
          <p>
            The <code>cover</code> value means that the viewport is scaled to fill
            the device display. It is highly recommended to make use of the
            <a href="/en-US/docs/Web/CSS/env()">safe area inset</a> variables to
            ensure that important content doesn't end up outside the display.
          </p>
        </td>
      </tr>
    </tbody>
  </table>

  > **Warning:**
  >
  > Disabling zooming capabilities by setting `user-scalable` to a value of `no` prevents people experiencing low vision conditions from being able to read and understand page content.
  >
  > - [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
  > - [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

### Other metadata names

The [WHATWG Wiki MetaExtensions page](https://wiki.whatwg.org/wiki/MetaExtensions) contains a large set of non-standard metadata names that have not been formally accepted yet; however, some of the names included there are already used quite commonly in practice — including the following:

- `creator`: the name of the creator of the document, such as an organization or institution. If there are more than one, several {{HTMLElement("meta")}} elements should be used.
- `googlebot`, a synonym of `robots`, is only followed by Googlebot (the indexing crawler for Google).
- `publisher`: the name of the document's publisher.
- `robots`: the behavior that cooperative crawlers, or "robots", should use with the page. It is a comma-separated list of the values below:

  | Value          | Description                                                                 | Used by                                                                                                                                                                                                                                                |
  | -------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `index`        | Allows the robot to index the page (default).                               | All                                                                                                                                                                                                                                                    |
  | `noindex`      | Requests the robot to not index the page.                                   | All                                                                                                                                                                                                                                                    |
  | `follow`       | Allows the robot to follow the links on the page (default).                 | All                                                                                                                                                                                                                                                    |
  | `nofollow`     | Requests the robot to not follow the links on the page.                     | All                                                                                                                                                                                                                                                    |
  | `all`          | Equivalent to `index, follow`                                               | [Google](https://developers.google.com/search/docs/advanced/crawling/special-tags?visit_id=637855965067987211-415685194&rd=1)                                                                                                                          |
  | `none`         | Equivalent to `noindex, nofollow`                                           | [Google](https://developers.google.com/search/docs/advanced/crawling/special-tags?visit_id=637855965074074862-574753619&rd=1)                                                                                                                          |
  | `noarchive`    | Requests the search engine not to cache the page content.                   | [Google](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240) |
  | `nosnippet`    | Prevents displaying any description of the page in search engine results.   | [Google](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                     |
  | `noimageindex` | Requests this page not to appear as the referring page of an indexed image. | [Google](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag)                                                                                                                                                                    |
  | `nocache`      | Synonym of `noarchive`.                                                     | [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                                                                                                          |

  > **Note:**
  >
  > - Only cooperative robots follow these rules. Do not expect to prevent email harvesters with them.
  > - The robot still needs to access the page in order to read these rules. To prevent bandwidth consumption, use a _{{Glossary("robots.txt")}}_ file.
  > - If you want to remove a page, `noindex` will work, but only after the robot visits the page again. Ensure that the `robots.txt` file is not preventing revisits.
  > - Some values are mutually exclusive, like `index` and `noindex`, or `follow` and `nofollow`. In these cases the robot's behavior is undefined and may vary between them.
  > - Some crawler robots, like Google, Yahoo and Bing, support the same values for the HTTP header `X-Robots-Tag`; this allows non-HTML documents like images to use these rules.

<!-- ## Technical summary -->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Viewport `<meta>` tag](/en-US/docs/Web/HTML/Viewport_meta_tag)
- [Metadata: the `<meta>` element](/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#metadata_the_meta_element) in [What's in the head? Metadata in HTML](/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
