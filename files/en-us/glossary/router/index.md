---
title: Router
slug: Glossary/Router
page-type: glossary-definition
---

{{GlossarySidebar}}

On the web, the term **router** can refer to different concepts depending on the context:

- For the network layer, a router is a networking device that decides where to direct {{Glossary('Packet', 'data packets')}}.
- For a {{Glossary("SPA", "single-page application (SPA)")}} in the application layer, a router is a library that decides what web page is presented by a given {{Glossary('URL')}}. This middleware module is used for all URL functions, as these are given a path to a file that is rendered to open the next page.

  The concept of routing in SPAs has evolved significantly over the years. See the [Brief history of hash-based SPA routing](#brief_history_of_hash-based_spa_routing) section.

- In the implementation of an {{Glossary('API')}} in a service layer, a router is a software component that parses a request and directs or routes the request to various handlers within a program. The router code usually accepts a response from the handler and facilitates its return to the requester.

## Brief history of hash-based SPA routing

Early SPAs could not change the path part of the URL without reloading the page. To work around this, developers used hash-based routing, which stores the route in the "fragment identifier", the portion of the URL that follows the symbol `#`. The part following `#` was used to determine the view to render. Common patterns included `#/profile` and `#!/profile`. The code continually checked [`window.location.hash`](/en-US/docs/Web/API/Location/hash) (or listened for the [`hashchange`](/en-US/docs/Web/API/Window/hashchange_event) event when it was supported later) to detect fragment changes during user navigation; the SPA then updated the view whenever the fragment changed.

Though this approach needed no server setup, it had limitations: Back/Forward support was limited, pages with hash-based URLs were not indexed properly (search engines ignored the fragment), and the URLs looked messy.

By 2012, all major browsers (Chrome 5, Safari 5, Firefox 4) supported the [History API](/en-US/docs/Web/API/History_API). SPAs could now call [`pushState()`](/en-US/docs/Web/API/History/pushState), [`replaceState()`](/en-US/docs/Web/API/History/replaceState), and the [`popstate`](/en-US/docs/Web/API/PopStateEvent) event to manipulate the browser's history stack, switch to paths such as `/profile` directly, and update the view without a full reload. This also allowed for cleaner URLs without hash fragments.

Hash-based routing is now considered a legacy technique. It is used, if at all, only as a fallback for very old browsers or for static hosts where server-side routing cannot be configured.

## See also

- For the network layer context, see [Router (computing)](<https://en.wikipedia.org/wiki/Router_(computing)>) on Wikipedia.
- In the application layer context, most of the popular SPA frameworks include built-in routing libraries, such as:
  - [Angular router](https://angular.dev/guide/routing/common-router-tasks)
  - [React router](https://reactrouter.com/)
  - [Vue router](https://router.vuejs.org/)
