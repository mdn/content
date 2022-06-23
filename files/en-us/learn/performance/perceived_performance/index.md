---
title: Perceived performance
slug: Learn/Performance/Perceived_performance
tags:
  - Perceived Performance
  - Web Performance
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/what_is_web_performance", "Learn/Performance/Measuring_performance", "Learn/Performance")}}

**[Perceived performance](/en-US/docs/Glossary/Perceived_performance)** is a subjective measure of website performance, responsiveness, and reliability. In other words, how fast a website seems to the user. It is harder to quantify and measure than the actual speed of operation, but perhaps even more important.

This article provides a brief introduction to the factors that affect perceived performance, along with a number of tools for assessing and improving the perception.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy,
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >basic software installed</a
        >, and basic knowledge of
        <a href="/en-US/docs/Learn/Getting_started_with_the_web"
          >client-side web technologies</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>To gain basic familiarity of user perception of web performance.</td>
    </tr>
  </tbody>
</table>

## Overview

The perception of how quickly (and smoothly) pages load and respond to user interaction is even more important that the actual time required to fetch the resources. While you may not be able to physically make your site run faster, you may well be able to improve how fast it _feels_ for your users.

A good general rule for improving perceived performance is that it is usually better to provide a quick response and regular status updates than make the user wait until an operation fully completes (before providing any information). For example, when loading a page it is better to display the text when it arrives rather than wait for all the images and other resources. Even though the content has not fully downloaded the user can see something is happening and they can start interacting with the content.

> **Note:** Time appears to pass more quickly for users who are actively engaged, distracted, or entertained, than for those who are waiting passively for something to happen. Where possible, actively engage and inform users who are waiting for a task to complete.

Similarly, it is better to display a "loading animation" as soon as a user clicks a link to perform a long running operation. While this doesn't change the time taken to complete the operation, the site feels more responsive, and the user knows that it is working on something useful.

## Performance metrics

There is no single metric or test that can be run on a site to evaluate how a user "feels". However there are a number of metrics that can be "helpful indicators":

- [First paint](/en-US/docs/Glossary/First_paint)
  - : The time to start of first paint operation. Note that this change may not be visible; it can be a simple background color update or something even less noticeable.
- [First Contentful Paint](/en-US/docs/Glossary/First_contentful_paint) (FCP)
  - : The time until first significant rendering (e.g. of text, foreground or background image, canvas or SVG, etc.). Note that this content is not necessarily useful or meaningful.
- [First Meaningful Paint](/en-US/docs/Glossary/first_meaningful_paint) (FMP)
  - : The time at which useful content is rendered to the screen.
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/) (LCP)
  - : The render time of the largest content element visible in the viewport.
- [Speed index](/en-US/docs/Glossary/Speed_index)
  - : Measures the average time for pixels on the visible screen to be painted.
- [Time to interactive](/en-US/docs/Glossary/Time_to_interactive)
  - : Time until the UI is available for user interaction (i.e. the last [long task](/en-US/docs/Glossary/Long_task) of the load process finishes).

## Improving performance

Here are a few tips and tricks to help improve perceived performance:

### Minimize initial load

To improve perceived performance, minimize the original page load. In other words, download the content the user is going to interact with immediately first, and download the rest after "in the background". The total amount of content downloaded may actually increase, but the user only _waits_ on a very small amount, so the download feels faster.

Separate interactive functionality from content, and load text, styles, and images visible at initial load. Delay, or lazy load, images or scripts that aren't used or visible on the initial page load. Additionally, you should optimize the assets you do load. Images and video should be served in the most optimal format, compressed, and in the correct size.

### Prevent jumping content and other reflows

Images or other assets causing content to be pushed down or jump to a different location, like the loading of third party advertisements, can make the page feel like it is still loading and is bad for perceived performance. Content reflowing is especially bad for user experience when not initiated by user interaction. If some assets are going to be slower to load than others, with elements loading after other content has already been painted to the screen, plan ahead and leave space in the layout for them so that content doesn't jump or resize, especially after the site has become interactive.

### Avoid font file delays

Font choice is important. Selecting an appropriate font can greatly improve the user experience. From a perceived performance point of view, "suboptimal fonts importing" can result in flicker as text is styled or when falling back to other fonts.

Make fallback fonts the same size and weight so that when fonts load the page change is less noticeable.

### Interactive elements are interactive

Make sure visible interactive elements are always interactive and responsive. If input elements are visible, the user should be able to interact with them without a lag. Users feel that something is laggy when they take more than 50ms to react. They feel that a page is behaving poorly when content repaints slower than 16.67ms (or 60 frames per second) or repaints at uneven intervals.

Make things like type-ahead a progressive enhancement: use CSS to display input modal, JS to add autocomplete as it is available

### Make task initiators appear more interactive

Making a content request on `keydown` rather than waiting for `keyup` can shave 200ms off the perceived load of the content. Adding an interesting but unobtrusive 200ms animation to that `keyup` event can reduce another 200ms of the perceived load. You're not saving 400ms of time, but the user doesn't feel like they're waiting for content until, well, until they're waiting for content.

## Conclusion

By reducing the time that a user has to wait for _useful_ content, and keeping the site responsive and engaging, the users will feel like the site performs better — even the actual time to load resources stays the same.

{{PreviousMenuNext("Learn/Performance/what_is_web_performance", "Learn/Performance/Measuring_performance", "Learn/Performance")}}

## In this module

- [The "why" of web performance](/en-US/docs/Learn/Performance/why_web_performance)
- [What is web performance?](/en-US/docs/Learn/Performance/What_is_web_performance)
- [How do users perceive performance?](/en-US/docs/Learn/Performance/Perceived_performance)
- [Measuring performance](/en-US/docs/Learn/Performance/Measuring_performance)
- [Multimedia: images](/en-US/docs/Learn/Performance/Multimedia)
- [Multimedia: video](/en-US/docs/Learn/Performance/video)
- [JavaScript performance](/en-US/docs/Learn/Performance/JavaScript)
- [HTML performance features](/en-US/docs/Learn/Performance/HTML)
- [CSS performance features](/en-US/docs/Learn/Performance/CSS)
- [Business case for performance](/en-US/docs/Learn/Performance/business_case_for_performance)
