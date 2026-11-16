---
title: Hash routing
slug: Glossary/Hash_routing
page-type: glossary-definition
sidebar: glossarysidebar
---

**Hash routing** is a client-side technique used in single-page applications (SPAs) to manage navigation and state changes without reloading the entire page.

## Historical context

Early SPAs could not change the [path](/en-US/docs/Web/URI/Reference/Path) part of the URL without reloading the page. To work around this, developers used **hash-based SPA routing**, which stores the route in the "[fragment](/en-US/docs/Web/URI/Reference/Fragment)", the part of the URL that follows the symbol `#`. Common patterns included `#/profile` and `#!/profile`. Applications continually checked [`window.location.hash`](/en-US/docs/Web/API/Location/hash) (or listened for the [`hashchange`](/en-US/docs/Web/API/Window/hashchange_event) event when it was supported later) to detect fragment changes during user navigation; the SPA then updated the view whenever the fragment changed.

## Limitations

Though this approach needed no server setup, it had limitations: {{glossary("bfcache", "back/forward")}} support was limited, pages with hash-based URLs were not indexed properly (search engines ignored the fragment), and the resulting URLs were considered messy.

Hash-based routing is now considered a legacy technique. It is used, if at all, only as a fallback for very old browsers or for static hosts where server-side routing cannot be configured.

## Modern alternatives

By 2012, all major browsers (Chrome 5, Safari 5, Firefox 4) supported the [History API](/en-US/docs/Web/API/History_API). SPAs could now call [`pushState()`](/en-US/docs/Web/API/History/pushState), [`replaceState()`](/en-US/docs/Web/API/History/replaceState), and the [`popstate`](/en-US/docs/Web/API/PopStateEvent) event to manipulate the browser's history stack, switch to paths such as `/profile` directly, and update the view without a full reload. This also allowed for cleaner URLs without hash fragments.
