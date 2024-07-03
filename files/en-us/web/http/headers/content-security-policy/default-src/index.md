---
title: "CSP: default-src"
slug: Web/HTTP/Headers/Content-Security-Policy/default-src
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.default-src
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`default-src`** directive serves as a fallback for the other CSP {{Glossary("fetch directive", "fetch directives")}}. For each of the following directives that are absent, the user agent looks for the `default-src` directive and uses this value for it:

- {{CSP("child-src")}}
- {{CSP("connect-src")}}
- {{CSP("font-src")}}
- {{CSP("frame-src")}}
- {{CSP("img-src")}}
- {{CSP("manifest-src")}}
- {{CSP("media-src")}}
- {{CSP("object-src")}}
- {{CSP("prefetch-src")}}
- {{CSP("script-src")}}
- {{CSP("script-src-elem")}}
- {{CSP("script-src-attr")}}
- {{CSP("style-src")}}
- {{CSP("style-src-elem")}}
- {{CSP("style-src-attr")}}
- {{CSP("worker-src")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

One or more sources can be allowed for the `default-src` policy:

```http
Content-Security-Policy: default-src <source>;
Content-Security-Policy: default-src <source> <source>;
```

### Sources

`<source>` can be any one of the values listed in [CSP Source Values](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

Note that this same set of values can be used in all {{Glossary("fetch directive", "fetch directives")}} (and a [number of other directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)).

## Examples

### No inheritance with default-src

If there are other directives specified, `default-src` does not influence them. The following header:

```http
Content-Security-Policy: default-src 'self'; script-src https://example.com
```

is the same as:

```http
Content-Security-Policy: connect-src 'self';
                         font-src 'self';
                         frame-src 'self';
                         img-src 'self';
                         manifest-src 'self';
                         media-src 'self';
                         object-src 'self';
                         script-src https://example.com;
                         style-src 'self';
                         worker-src 'self'
```

### Firefox `default-src: none` SVG sprite blocking issue

CSP guidelines often recommend starting with `default-src 'none'` to lock down all resource loading and then adding further directives to open up the policy, allowing you to load just the resources you need. For example, to allow same-origin loading of images only:

```http
Content-Security-Policy: default-src 'none'; img-src 'self'
```

However, there is a problem here. If you are embedding SVG sprites defined in external files via the [`<use>`](/en-US/docs/Web/SVG/Element/use) element, for example:

```svg
<svg>
  <use href="/images/icons.svg#icon"/>
</svg>
```

your SVG images will be blocked in Firefox if you have a `default-src 'none'` policy set. Firefox does not treat the SVG as an embedded image like other browsers do, therefore `img-src 'self'` will not allow them to be loaded. You need to use `default-src 'self'` if you want your external sprites to load in Firefox (see [bug 1773976](https://bugzilla.mozilla.org/show_bug.cgi?id=1773976) and [this CSP spec issue](https://github.com/w3c/webappsec-csp/issues/199) for more information).

Alternatively, if the `default-src 'none'` policy is a hard requirement, you can include the SVG sprites inline in the HTML page:

```html
<body>
  <svg style="display: none">
    <symbol id="icon" viewBox="0 0 24 24">
      <path d="…" />
    </symbol>
  </svg>
  …
  <svg>
    <use href="#icon" />
  </svg>
</body>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- CSP directives (<https://www.w3.org/TR/CSP/#csp-directives>):

  - {{Glossary("Fetch directive")}}
  - {{Glossary("Document directive")}}
  - {{Glossary("Navigation directive")}}
  - {{Glossary("Reporting directive")}}
  - [`upgrade-insecure-requests`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests)
  - [`block-all-mixed-content`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content)
