---
title: Router
slug: Glossary/Router
page-type: glossary-definition
sidebar: glossarysidebar
---

On the web, the term **router** can refer to different concepts depending on the context:

- For the network layer, a router is a networking device that decides where to direct {{Glossary('Packet', 'data packets')}}.
- For a {{Glossary("SPA", "single-page application (SPA)")}} in the application layer, a router is a library that decides what web page is presented by a given {{Glossary('URL')}}. This middleware module is used for all URL functions, as these are given a path to a file that is rendered to open the next page.

  The concept of routing in SPAs has evolved significantly over the years. See the {{Glossary("hash routing")}} glossary entry to learn more.

- In the implementation of an {{Glossary('API')}} in a service layer, a router is a software component that parses a request and directs or routes the request to various handlers within a program. The router code usually accepts a response from the handler and facilitates its return to the requester.

## See also

- For the network layer context, see [Router (computing)](<https://en.wikipedia.org/wiki/Router_(computing)>) on Wikipedia.
- In the application layer context, most of the popular SPA frameworks include built-in routing libraries, such as:
  - [Angular router](https://angular.dev/guide/routing/common-router-tasks)
  - [React router](https://reactrouter.com/)
  - [Vue router](https://router.vuejs.org/)
