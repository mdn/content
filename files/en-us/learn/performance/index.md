---
title: Web performance
slug: Learn/Performance
page-type: learn-module
---

{{LearnSidebar}}

Building websites requires HTML, CSS, and JavaScript. To build websites and applications people want to use, which attract and retain users, you need to create a good user experience. Part of good user experience is ensuring the content is quick to load and responsive to user interaction. This is known as **web performance**, and in this module you'll focus on the fundamentals of how to create performant websites.

The rest of our beginner's learning material tried to stick to web best practices such as performance and [accessibility](/en-US/docs/Learn/Accessibility) as much as possible, however, it is good to focus specifically on such topics too, and make sure you are familiar with them.

## Learning pathway

While knowing HTML, CSS, and JavaScript is needed for implementing many web performance improvement recommendations, knowing how to build applications is not a necessary pre-condition for understanding and measuring web performance. We do however recommend that before you work through this module, you at least get a basic idea of web development by working through our [Getting started with the web](/en-US/docs/Learn/Getting_started_with_the_web) module.

It would also be helpful to go a bit deeper into these topics, with modules such as:

- [Introduction to HTML](/en-US/docs/Learn/HTML/Introduction_to_HTML)
- [CSS first steps](/en-US/docs/Learn/CSS/First_steps)
- [JavaScript first steps](/en-US/docs/Learn/JavaScript/First_steps)

Once you've worked through this module, you'll probably be excited to go deeper into web performance — you can find a lot of further teachings in our [main MDN Web performance section](/en-US/docs/Web/Performance), including overviews of performance APIs, testing and analysis tools, and performance bottleneck gotchas.

## Guides

This topic contains the following guides. The following is a suggested order for working through them; you should definitely start with the first one.

- [The "why" of web performance](/en-US/docs/Learn/Performance/why_web_performance)
  - : This article discusses why web performance is important for accessibility, user experience and your business goals.
- [What is web performance?](/en-US/docs/Learn/Performance/What_is_web_performance)
  - : You know web performance is important, but what constitutes web performance? This article introduces the components of performance, from web page loading and rendering, including how your content makes it into your users' browser to be viewed, to what groups of people we need to consider when thinking about performance.
- [How do users perceive performance?](/en-US/docs/Learn/Performance/Perceived_performance)
  - : More important than how fast your website is in milliseconds, is how fast your users perceive your site to be. These perceptions are impacted by actual page load time, idling, responsiveness to user interaction, and the smoothness of scrolling and other animations. In this article, we discuss the various loading metrics, animation, and responsiveness metrics, along with best practices to improve user perception, if not the actual timings.
- [Measuring performance](/en-US/docs/Learn/Performance/Measuring_performance)
  - : Now that you understand a few performance metrics, we take a deeper dive into performance tools, metrics, and APIs and how we can make performance part of the web development workflow.
- [Multimedia: images](/en-US/docs/Learn/Performance/Multimedia)
  - : The lowest hanging fruit of web performance is often media optimization. Serving different media files based on each user agent's capability, size, and pixel density is possible. In this article we discuss the impact images have on performance, and the methods to reduce the number of bytes sent per image.
- [Multimedia: video](/en-US/docs/Learn/Performance/video)
  - : The lowest hanging fruit of web performance is often media optimization. In this article we discuss the impact video content has on performance, and cover tips like removing audio tracks from background videos can improve performance.
- [JavaScript performance best practices](/en-US/docs/Learn/Performance/JavaScript)
  - : JavaScript, when used properly, can allow for interactive and immersive web experiences — or it can significantly harm download time, render time, in-app performance, battery life, and user experience. This article outlines some JavaScript best practices that should be considered to ensure even complex content is as performant as possible.
- [HTML performance features](/en-US/docs/Learn/Performance/HTML)
  - : Some attributes and the source order of your markup can impact the performance or your website. By minimizing the number of DOM nodes, making sure the best order and attributes are used for including content such as styles, scripts, media, and third-party scripts, you can drastically improve the user experience. This article looks in detail at how HTML can be used to ensure maximum performance.
- [CSS performance features](/en-US/docs/Learn/Performance/CSS)
  - : CSS may be a less important optimization focus for improved performance, but there are some CSS features that impact performance more than others. In this article we look at some CSS properties that impact performance and suggested ways of handling styles to ensure performance is not negatively impacted.
- [Fonts and performance](/en-US/docs/Learn/Performance/Fonts)
  - : A look at whether you need to include external fonts and, if you do, how to include the fonts your design requires with the least impact on your sites performance.
- [Mobile performance](/en-US/docs/Learn/Performance/Mobile)
  - : With web access on mobile devices being so popular, and all mobile platforms having fully-fledged web browsers, but possibly limited bandwidth, CPU and battery life, it is important to consider the performance of your web content on these platforms. This article looks at mobile-specific performance considerations.
- [The business case for web performance](/en-US/docs/Learn/Performance/business_case_for_performance)
  - : There are many things a developer can do to improve performance, but how fast is fast enough? How can you convince powers that be of the importance of these efforts? Once optimized, how can you ensure bloat doesn't come back? In this article we look at convincing management, developing a performance culture and performance budget, and introduce ways to ensure regressions don't sneak into your code base.

## See also

- [Web performance resources](/en-US/docs/Learn/Performance/Web_Performance_Basics)
  - : In addition to the front end components of HTML, CSS, JavaScript, and media files, there are features that can make applications slower and features that can make applications subjectively and objectively faster. There are many APIs, developer tools, best practices, and bad practices relating to web performance. Here we'll introduce many of these features ad the basic level and provide links to deeper dives to improve performance for each topic.
- [Responsive images](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : In this article, we'll learn about the concept of responsive images — images that work well on devices with widely differing screen sizes, resolutions, and other such features — and look at what tools HTML provides to help implement them. This helps to improve performance across difference devices. Responsive images are just one part of [responsive design](/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design), a future CSS topic for you to learn.
- [Main web performance section on MDN](/en-US/docs/Web/Performance)
  - : Our main web performance section — here you'll find much more detail on web performance including overviews of performance APIs, testing and analysis tools, and performance bottleneck gotchas.
