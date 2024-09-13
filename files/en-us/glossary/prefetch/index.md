---
title: Prefetch
slug: Glossary/Prefetch
page-type: glossary-definition
---

{{GlossarySidebar}}

Prefetching refers to the practice of speculatively fetching documents or subresources in the background for pages that the user is _likely_ to navigate to in the near future.
This can significantly reduce the load time for the prefetched page if the user does choose to navigate to it.
Prefetching might be used, for example, to fetch the page linked by a "Next" button or its subresources, or a link popup that a user hovers over, or search results.

### Resource prefetching

Resources should be prefetched based on how likely it is that they will be needed in a future navigation. Browsers can infer this automatically for some resources, such as the current URL in the address bar.

This can be done using [`<link rel="prefetch">`](/en-US/docs/Web/HTML/Attributes/rel/prefetch) (the [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) only handles document prefetches for navigations):

```html
<link rel="prefetch" href="next.html" />
```

### Document prefetching

Developers can provide hints to the browser of navigations that should be prefetched in a couple of different ways:

[`<link rel="prefetch">`](/en-US/docs/Web/HTML/Attributes/rel/prefetch):

```html
<link rel="prefetch" href="next.html" />
```

[Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) prefetch:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "source": "list",
        "urls": ["next.html"]
      }
    ]
  }
</script>
```

The Speculation Rules API handles document prefetches for navigations much better than `<link rel="prefetch">`; the former was designed specifically for that purpose whereas the latter has a number of limitations; see [`<link rel="prefetch">`](/en-US/docs/Web/HTML/Attributes/rel/prefetch) for details.

### DNS prefetching

[DNS prefetching](/en-US/docs/Web/HTML/Attributes/rel/dns-prefetch) resolves domain names in advance, speeding up load times by reducing the time associated with domain lookup at request time.

```html
<link rel="dns-prefetch" href="https://example.com/" />
```

## See also

- [Speculative loading](/en-US/docs/Web/Performance/Speculative_loading)
- Related glossary terms:
  - {{Glossary("Prerender")}}
- [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API)
