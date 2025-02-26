---
title: Accessibility information for web authors
slug: Web/Accessibility/Information_for_Web_authors
page-type: guide
---

{{AccessibilitySidebar}}

## Guidelines and Regulations

- [<abbr>ARIA</abbr> Authoring Practices Guide (<abbr>APG</abbr>)](https://www.w3.org/WAI/ARIA/apg/)

  - : Guide to accessibility semantics defined by the Accessible Rich Internet Application (<abbr>ARIA</abbr>) specification to create accessible web experiences. Describes how to apply accessibility semantics to common design patterns and widgets, providing design patterns and functional examples.

- [Web Content Accessibility Guidelines (<abbr>WCAG</abbr>)](https://www.w3.org/WAI/standards-guidelines/wcag/)

  - : Another important set of guidelines from the W3C _Web Accessibility Initiative (<abbr>WAI</abbr>)_. The European Union is looking to base their upcoming accessibility regulations on these guidelines. These guidelines are discussed on the [<abbr>WAI</abbr> interest group discussion list](https://www.w3.org/WAI/about/groups/waiig/#mailinglist).

- [ARIA on this site](/en-US/docs/Web/Accessibility/ARIA)
  - : <abbr>MDN</abbr> guide to all the [ARIA roles](/en-US/docs/Web/Accessibility/ARIA/Roles) and [ARIA properties](/en-US/docs/Web/Accessibility/ARIA/Attributes), including best practices, related roles and properties, and examples.

## How-to's

- [Accessibility for teams](https://digital.gov/guides/accessibility-for-teams/)

  - : A brief guide from the U.S. General Services administration's Technology Transformation Services covering several accessibility topics with links to "how-to" videos and to related WCAG references.

- [Accessible Web Page Authoring](https://www.ibm.com/able/requirements/requirements/)
  - : IBM has made their accessibility requirements that need to be met public and interactive.

## Automated Checking & Repair

Use a tool to quickly check for common errors in your browser.

- [HTML CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/)
- [aXe](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)
- [Lighthouse Accessibility Audit](https://developer.chrome.com/docs/lighthouse/overview/)
- [Accessibility Insights](https://accessibilityinsights.io/)
- [<abbr>WAVE</abbr>](https://wave.webaim.org/extension/)

Tools to integrate into your build process, programmatically adding accessibility tests, so you can catch errors as you develop your web application:

- [axe-core](https://github.com/dequelabs/axe-core)
- [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [Lighthouse Audits](https://github.com/GoogleChrome/lighthouse/blob/main/docs/readme.md#using-programmatically)
- [AccessLint.js](https://github.com/accesslint/accesslint.js/tree/master)

Continuous integration tools to find accessibility issues in your GitHub pull requests:

- [AccessLint](https://accesslint.com/)

While best to test your web applications with real users, you can simulate color blindness, low vision, low and contrast, and zooming. You should always test your site with out a mouse and touch to test keyboard navigation. You may also want to try your site using voice commands. Try disabling your mouse and using browser extensions like [Web Disability Simulator](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla)
