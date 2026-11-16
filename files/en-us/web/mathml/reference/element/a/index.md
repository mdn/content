---
title: <a>
slug: Web/MathML/Reference/Element/a
page-type: mathml-element
browser-compat: mathml.elements.a
sidebar: mathmlref
---

The **`<a>`** [MathML](/en-US/docs/Web/MathML) element enables hyperlinks to be created inside MathML formulae, linking different parts to different locations.

MathML's `<a>` element is a container, which means you can create a link around any MathML content. For layout purposes, it behaves like an {{MathMLElement("mrow")}} element.

If the `href` attribute is present, pressing the enter key while focused on the `<a>` element will activate it.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Reference/Global_attributes) as well as the following attributes:

- `download`
  - : Causes the browser to treat the linked URL as a download. Can be used with or without a `filename` value:
    - Without a value, the browser will suggest a filename/extension, generated from various sources:
      - The {{HTTPHeader("Content-Disposition")}} HTTP header
      - The final segment in the URL [path](/en-US/docs/Web/API/URL/pathname)
      - The {{Glossary("MIME_type", "media type")}} (from the {{HTTPHeader("Content-Type")}} header, the start of a [`data:` URL](/en-US/docs/Web/URI/Reference/Schemes/data), or {{domxref("Blob.type")}} for a [`blob:` URL](/en-US/docs/Web/URI/Reference/Schemes/blob))

    - `filename`: defining a value suggests it as the filename. `/` and `\` characters are converted to underscores (`_`). Filesystems may forbid other characters in filenames, so browsers will adjust the suggested name if necessary. This adjustment happens when the download is triggered and is not observable via the {{domxref("MathMLAnchorElement.download")}} property.

    > [!NOTE]
    >
    > - `download` only works for [same-origin URLs](/en-US/docs/Web/Security/Defenses/Same-origin_policy), same-origin [`blob:`](/en-US/docs/Web/URI/Reference/Schemes/blob), and [`data:`](/en-US/docs/Web/URI/Reference/Schemes/data) schemes. For other URLs, the `download` attribute is ignored and a normal navigation happens, although the target page may still use `Content-Disposition` to instruct a download.
    > - How browsers treat downloads varies by browser, user settings, and other factors. The user may be prompted before a download starts, or the file may be saved automatically, or it may open automatically, either in an external application or in the browser itself.
    > - The `download` attribute, when honored, overrides the `Content-Disposition: inline` behavior, but the `filename` parameter of `Content-Disposition` overrides the name in the `download` attribute.

- `href`
  - : The URL that the hyperlink points to. Links are not restricted to HTTP-based URLs — they can use any URL scheme supported by browsers:
    - Telephone numbers with `tel:` URLs
    - Email addresses with `mailto:` URLs
    - SMS text messages with `sms:` URLs
    - Executable code with [`javascript:` URLs](/en-US/docs/Web/URI/Reference/Schemes/javascript)
    - While web browsers may not support other URL schemes, websites can with [`registerProtocolHandler()`](/en-US/docs/Web/API/Navigator/registerProtocolHandler)

    Moreover other URL features can locate specific parts of the resource, including:
    - Sections of a page with document fragments
    - Specific text portions with [text fragments](/en-US/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Pieces of media files with media fragments

- `hreflang`
  - : Hints at the human language of the linked URL. No built-in functionality. Allowed values are the same as [the global HTML `lang` attribute](/en-US/docs/Web/HTML/Reference/Global_attributes/lang).

- `ping`
  - : A space-separated list of URLs. When the link is followed, the browser will send {{HTTPMethod("POST")}} requests with the body `PING` to the URLs. Typically for tracking.

- `referrerpolicy`
  - : How much of the [referrer](/en-US/docs/Web/HTTP/Reference/Headers/Referer) to send when following the link, and under what circumstances.
    - `no-referrer`: The {{HTTPHeader("Referer")}} header will not be sent.
    - `no-referrer-when-downgrade`: The {{HTTPHeader("Referer")}} header will not be sent to {{Glossary("origin")}}s without {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host")}}, and {{Glossary("port")}}.
    - `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
    - `same-origin`: A referrer will be sent for {{Glossary("Same-origin policy", "same origin")}}, but cross-origin requests will contain no referrer information.
    - `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).
    - `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](/en-US/docs/Web/API/MathMLAnchorElement/hash), [password](/en-US/docs/Web/API/MathMLAnchorElement/password), or [username](/en-US/docs/Web/API/MathMLAnchorElement/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.

- `rel`
  - : The relationship of the linked URL as space-separated link types. See the [`rel` HTML attribute](/en-US/docs/Web/HTML/Reference/Attributes/rel) page for more information.

- `target`
  - : Where to display the linked URL, as the name for a _browsing context_ (a tab, window, or {{HTMLElement("iframe")}}). The following keywords have special meanings for where to load the URL:
    - `_self`: The current browsing context. (Default)
    - `_blank`: Usually a new tab, but users can configure browsers to open a new window instead.
    - `_parent`: The parent browsing context of the current one. If no parent, behaves as `_self`.
    - `_top`: The topmost browsing context. To be specific, this means the "highest" context that's an ancestor of the current one. If no ancestors, behaves as `_self`.

- `type`
  - : Hints at the linked URL's format with a {{Glossary("MIME type")}}. No built-in functionality.

## Examples

### Basic usage

This example marks up the [Gamma function](https://en.wikipedia.org/wiki/Gamma_function) in MathML. It includes several MathML `<a>` elements to link individual parts of the formula to their respective sections on the Wiki page.

#### MathML

```html live-sample___mathml-a
<math display="block" xmlns="http://www.w3.org/1998/Math/MathML"
  ><semantics
    ><mrow
      ><a href="https://en.wikipedia.org/wiki/Gamma_function"
        ><mrow
          ><mi mathvariant="normal">Γ</mi><mo stretchy="false">(</mo><mi>t</mi
          ><mo stretchy="false">)</mo></mrow
        ></a
      ><mo>=</mo
      ><a href="https://en.wikipedia.org/wiki/Gamma_function#Main_definition"
        ><mrow
          ><msubsup
            ><mo>∫</mo><mn>0</mn><mrow><mo>+</mo><mn>∞</mn></mrow></msubsup
          ><msup
            ><mi>x</mi><mrow><mi>t</mi><mo>−</mo><mn>1</mn></mrow></msup
          ><msup
            ><mi>e</mi><mrow><mo>−</mo><mi>x</mi></mrow></msup
          ><mi>d</mi><mi>x</mi></mrow
        ></a
      ><mo>=</mo
      ><a
        href="https://en.wikipedia.org/wiki/Gamma_function#Euler's_definition_as_an_infinite_product"
        ><mrow
          ><mfrac><mn>1</mn><mi>t</mi></mfrac
          ><munderover
            ><mo>∏</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow
            ><mn>∞</mn></munderover
          ><mfrac
            ><msup
              ><mrow
                ><mo>(</mo
                ><mrow
                  ><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow
                ><mo>)</mo></mrow
              ><mi>t</mi></msup
            ><mrow
              ><mn>1</mn><mo>+</mo><mfrac><mi>t</mi><mi>n</mi></mfrac></mrow
            ></mfrac
          ></mrow
        ></a
      ><a href="https://en.wikipedia.org/wiki/Asymptotic_analysis#Definition"
        ><mo>∼</mo></a
      ><a href="https://en.wikipedia.org/wiki/Gamma_function#Stirling's_formula"
        ><mrow
          ><msqrt
            ><mfrac
              ><mrow><mn>2</mn><mi>π</mi></mrow
              ><mi>t</mi></mfrac
            ></msqrt
          ><msup
            ><mrow
              ><mo>(</mo><mfrac><mi>t</mi><mi>e</mi></mfrac
              ><mo>)</mo></mrow
            ><mi>t</mi></msup
          ></mrow
        ></a
      ></mrow
    ></semantics
  ></math
>
```

```css hidden live-sample___mathml-a
math {
  font-size: 4vw;
}
```

#### Result

{{EmbedLiveSample("mathml-a", "100%", "200")}}

## Technical summary

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles">Implicit ARIA role</a>
    </th>
    <td>
      <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role">
        <code>generic</code>
      </a>
    </td>
  </tr>
  <tr>
    <th scope="row">DOM interface</th>
    <td>{{domxref("MathMLAnchorElement")}}</td>
  </tr>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MathMLAnchorElement")}}
