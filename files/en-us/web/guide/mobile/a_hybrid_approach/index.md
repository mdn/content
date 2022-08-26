---
title: A hybrid approach
slug: Web/Guide/Mobile/A_hybrid_approach
tags:
  - Mobile
  - Responsive Design
  - Web Development
---
Silver bullets are hard to find in web development — you're more likely to come across strategies that make the best use of a variety of techniques given the circumstances. This brings us to our third approach, which aims to avoid some of the shortcomings the [separate sites](/en-US/docs/Web/Guide/Mobile/Separate_sites) and [responsive design](/en-US/docs/Web/Progressive_web_apps) approaches by combining them.

This hybrid approach centers around breaking down mobile development into its [three goals](/en-US/docs/Web/Guide/Mobile/Mobile-friendliness), and then applying the best techniques available to tackle each goal individually. This article presents one potential combination of techniques as an example here, but different combinations will be appropriate under different circumstances. The most important concept to remember is that server-side and client-side techniques can be combined to fit your situation.

## The Good

Responsive web design is great — right now it is the best technique available for making layouts look as good as possible in a variety of circumstances. If your mobile and desktop use cases are similar enough, this is definitely the preferred option for layout changes. However, it can be a pain to use client-side techniques to alter site content to fit the user's context.

Luckily, we aren't technically constrained to using client-side techniques here: another option is to use server-side user-agent detection to show the user the proper content. This keeps the complexity of altering content on the server side, but still allows our layouts to benefit from the flexibility and future-readiness of responsive design.

Using user-agent detection specifically for content and not layout also allows you to have a single URL for each piece of content, so that the content can adapt its layout to the user's browser. This is generally thought to be [a good thing](https://www.w3.org/TR/mobile-bp/#OneWeb). Instead of maintaining two completely different sites, we redirect users to pages for the content they care about. And since the design is responsive, you know that each page looks as good as possible on the user's screen.

We can also address some of the performance problems with responsive design by incorporating server-side techniques. For example, an often-criticized point about responsive web design is that full-resolution images are sent to all devices, including phones that show the images scaled down anyway. [One such technique](https://www.scientiamobile.com/capabilities/?search=image) for dealing with this issue uses server-side user-agent detection along with the [WURFL](http://wurfl.sourceforge.net/) device capability library to send a properly sized image for the user's device. A range of [products](https://www.sencha.com/platform/) are also emerging which provide this as a service. Of course, this technique suffers from all the downsides associated with user-agent detection. But even if it does not work, it is no worse with respect to performance than only using [fluid images](https://unstoppablerobotninja.com/entry/fluid-images/).

By combining the techniques listed above, we can get a mobile web development strategy that is both more flexible than pure separate sites and has better performance than pure responsive design.

## The Bad

One downside of mixing approaches is that it can lead to an increase in the number of code paths, both on the client and server side. This can make it more time-consuming to develop than other approaches. With proper planning, though, the code can still be organized in a maintainable way. Another downside is that because this approach relies on responsive design, it typically works best on a new project or one that has an existing flexible layout, not as a retrofit. Similarly, because it uses user-agent detection, you will have to update your detection rules as time goes on.

## When it is right to choose this option

Combining server-side and client-side techniques is something that is always worth considering; there are so many options that one must just weigh the pros and cons of each individual technique employed.

In many cases, the added complexity of the hybrid approach is not even necessary. For example, you may not even need to adjust your content based on what actual device a user is using — just knowing whether a feature is present on their browser is often good enough. This is something you might be able to discern on the client-side using JavaScript feature detection from [Modernizr](https://modernizr.com/docs/#s2) or [Detect It](https://github.com/rafgraph/detect-it).  It can't hurt to dig down and ask yourself which axis you are actually looking to adjust your content around.

We've talked about incorporating server-side techniques into a responsive design, but there are even ways to use the hybrid approach if your use cases for mobile and desktop are very different. You could, for example, increase the flexibility of your separate site designs by incorporating media queries and a flexible layout. You may even be able to make your mobile site design adaptable enough to extend comfortably to tablets as well.

## Examples

![webowonder_mobile_and_desktop-300x225.jpg](webowonder_mobile_and_desktop-300x225.jpg)For Mozilla's Web O' Wonder demo site, we tried out a basic version of the hybrid approach, with positive results. We used some elements of responsive web design to give the site a mobile layout, along with user-agent detection to provide mobile-friendly videos and to re-order the demos if the user is on a phone. Feel free to check out the source code [on GitHub](https://github.com/mozilla/webowonder/).

We could also be doing more development involving this approach very soon! In fact, one potential path for the main Mozilla site is roughly outlined in the "The Good" section above:

- Using user-agent detection, route visitors to a landing page for the Firefox version for their device.
- Every page on the site should look great at a wide variety of resolutions, being built with responsive design in mind.
- Future plans include exploring serving images based on user-agent.

So far there is not much to see for mobile, since things are still in the formative stages of development, but you can always watch the new mozilla.org grow up [on GitHub](https://github.com/mozilla/bedrock). Subscribe to the [Mozilla Webdev](https://blog.mozilla.org/webdev/) blog for updates about our progress.

## Summary

No approach is a one-size-fits-all solution. Web applications that want to heavily modify the content or user flow for mobile users should probably go for a separate mobile site. Content-oriented pages that don't need to modify their content for mobile users will be satisfied with responsive design. If you need to slightly alter the site's message for mobile users, but want to reap the benefits of a responsive design, a hybrid approach may be your best bet. Decisions like these are at the heart of mobile web development: be specific about what you would like to accomplish, and pick a practical approach while being aware of the tradeoffs. Good luck!

## Approaches to mobile Web development

See the following articles for background and other approaches to developing for mobile platforms.

- [What is mobile-friendliness?](/en-US/docs/Web/Guide/Mobile/Mobile-friendliness)
- [Separate sites](/en-US/docs/Web/Guide/Mobile/Separate_sites)
- [Responsive design](/en-US/docs/Web/Progressive_web_apps)

## Original document information

This article was originally published on 27 June 2011, on the Mozilla Webdev blog as "[Approaches to Mobile Web Development Part 4 – A Hybrid Approach](https://blog.mozilla.org/webdev/2011/06/27/approaches-to-mobile-web-development-part-4-%E2%80%93-a-hybrid-approach/)", by Jason Grlicky.
