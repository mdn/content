---
title: Performance budgets
slug: Web/Performance/Performance_budgets
page-type: guide
---

{{QuickLinksWithSubPages("Web/Performance")}}

A performance budget is a limit to prevent regressions. It can apply to a file, a file type, all files loaded on a page, a specific metric (e.g. [Time to Interactive](/en-US/docs/Glossary/Time_to_interactive)), a custom metric (e.g. Time to Hero Element), or a threshold over a period of time.

## Why do I need a performance budget?

A budget exists to reflect your reachable goals. It's a tradeoff between user experience, against other performance indicators (e.g. conversion rate).

These goals can be:

- Timing based (e.g. [Time to Interactive](/en-US/docs/Glossary/Time_to_interactive), [First Contentful Paint](/en-US/docs/Glossary/First_contentful_paint)).
- Quantity-based (e.g. amount of JS files/total image size).
- Rule-based (e.g. PageSpeed index, Lighthouse score).

Their primary goal is to prevent regressions, but they can provide insights to forecast trends (i.e. On September, 50% of the budget was spent in a week).

Additionally, it can uncover development needs (i.e. A large library with smaller alternatives is often picked to solve a common problem).

## How do I define a performance budget?

A budget should include 2 levels:

- Warning.
- Error.

The warning level allows you to be proactive and plan any tech debt, while not blocking development or deploys.

The error level is an upper bound limit, where changes will have a negative and noticeable impact.

In order to begin, you need to first measure the devices and connection speeds where your users are coming from (e.g. A \~$_200_ Android device over a 3G connection), using multiple [tools](/en-US/docs/Learn_web_development/Extensions/Performance/Web_Performance_Basics). These time-based metrics will translate into file-size budgets.

A default baseline to reduce bounce rate is to achieve [Time to Interactive under 5 seconds in 3G/4G, and under 2 seconds for subsequent loads](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/). However, based on the specific goals and content of your site, you might choose to focus on other metrics.

For a text-heavy site such as a blog or a news site, the [First Contentful Paint](/en-US/docs/Glossary/First_contentful_paint) metric could reflect more closely the user behavior. (i.e. How fast can users start reading), which will inform file specific budgets (e.g. Font size), and their optimizations. (e.g. Using [font-display](/en-US/docs/Web/CSS/@font-face/font-display) to improve [Perceived Performance](/en-US/docs/Learn_web_development/Extensions/Performance/Perceived_performance)).

The ultimate value of a Performance Budget is to correlate the impact of Performance on business or product goals. When defining metrics, you should focus on [User Experience](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/), which will dictate not only the bounce or conversion rate but how likely is that user to return.

## How do I implement a performance budget?

During development, there are a few tools to run checks against new or modified assets:

- A module bundler (e.g. [webpack](https://webpack.js.org/)), has [performance features](https://webpack.js.org/configuration/performance/) that will notify you when assets exceed specified limits.
- [Bundlesize](https://github.com/siddharthkp/bundlesize), allows you to define and run file size checks in your continuous integration (CI) pipeline.

File size checks are the first line of defense against regressions but translating size back into time metrics can be difficult since development environments could be missing 3rd party scripts, and optimizations commonly provided by a [CDN](/en-US/docs/Glossary/CDN).

The first step is to define a development baseline for each branch to compare to and the precision of the difference between development and production can be used as a goal towards better match the live environment.

The [Lighthouse Bot](https://github.com/GoogleChromeLabs/lighthousebot) integrates with [Travis CI](https://www.travis-ci.com/) and can be used to gather [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) and [Webpage Test](https://www.webpagetest.org/) metrics from a development URL. The bot will pass or fail based on the provided minimum scores.

## How do I enforce a performance budget?

The sooner that you can identify a potential addition pushing the budget, the better you can analyze the current state of your site, and pinpoint optimizations or unnecessary code.

However, you should have multiple budgets and be dynamic. They are meant to reflect your ongoing goals but allow risks and experiments. For example, you may introduce a feature that increases overall load time but attempts to increase user engagement. (i.e. How long a user stays on a page or site).

A performance budget helps you protect optimal behavior for your current users while enabling you to tap into new markets and deliver custom experiences.

## See also

- [Start Performance Budgeting](https://addyosmani.com/blog/performance-budgets/) by Addy Osmani
- [Performance Budgets 101](https://web.dev/articles/performance-budgets-101) by Milica Mihajlija
- [Performance Budgets That Stick](https://timkadlec.com/remembers/2019-03-07-performance-budgets-that-stick/) by Tim Kadlec
