---
title: Separate sites for mobile and desktop
slug: Web/Guide/Mobile/Separate_sites
tags:
  - Mobile
  - Web Development
---
The "separate sites" approach to mobile Web development involves creating different sites for mobile and desktop Web users. This approach has positive and negative aspects.

## The good

The first option is the most popular by far: use [user-agent detection](https://en.wikipedia.org/wiki/User_agent#User_agent_sniffing) to route users on phones to a separate mobile site, typically at m.example.com. In a nutshell, this technique uses server-side logic to solve all [three goals of mobile web development](https://blog.mozilla.org/webdev/2011/05/04/approaches-to-mobile-web-development-part-1-what-is-mobile-friendliness/) at once — if the user's browser looks like it's on a phone, you serve them mobile content, formatted for their phone and optimized for speed.

Conceptually simple, this is the easiest option to add to an existing site, especially if you are using a CMS or Web application that supports templates. Since only the mobile-specific content, styles, and scripts are sent to mobile users, this method also provides for the best performance out of any of the other options presented here. Finally, it also allows for completely different user experiences on desktop and mobile — they're two different sites, after all!

## The bad

Unfortunately, this approach is not without its drawbacks. For starters, you are now maintaining two different pages for every page on your site that you would like to expose to mobile users. If you are using a CMS, it is possible to arrange your site templates in a way that minimizes this duplication. However any time that there is a difference between the mobile and desktop templates, there is a potential source of complication in your code. Similarly, this increases the implementation time of any new site features, since you must now code two sets of front-end logic.

Even more important than that, though, is the fact that user-agent detection is [inherently flawed](https://css-tricks.com/browser-detection-is-bad/), and anything but future-proof. Every time a new browser comes out, you must adjust your algorithm to accommodate it. And false positives are particularly scary — it could be embarrassing to serve desktop users your mobile site accidentally.

## When it is right to choose this option

![](sumo_screenshot.png)Firstly, if your target audience includes users on older or low-end [feature phones](https://www.cnet.com/tech/mobile/the-411-feature-phones-vs-smartphones/), it is worth noting that you may need to employ this strategy [to some degree](https://www.passani.it/gap/#adaptation) no matter what. This is because the default browsers on some feature-phones do not support the same markup that you would use to code a website targeted at the desktop, but instead understand formats like [XHTML-MP](https://en.wikipedia.org/wiki/XHTML_Mobile_Profile) or the older [WML](https://en.wikipedia.org/wiki/Wireless_Markup_Language).

This factor aside, there is one case where this strategy really shines over other methods. If the functionality you would like to provide to your users on mobile devices is extremely different from that on a desktop, then using separate sites is likely to be the [most practical choice](https://tripleodeon.com/2010/10/not-a-mobile-web-merely-a-320px-wide-one/). This is because you have the option of sending completely separate HTML, JavaScript, and CSS to phones and PCs.

Another case where you may be forced to use this approach is if you cannot, for whatever reason, modify your existing desktop site, and need to have a 100% separate mobile site. Though it's not ideal, at least you have this option.

## Examples

Most of the major Web applications you see in the wild have chosen this path, including [Facebook](https://m.facebook.com/) and [YouTube](https://m.youtube.com/). In fact, Mozilla picked this strategy for the mobile versions of [addons.mozilla.org](https://addons.mozilla.org/) (AMO) and [support.mozilla.org](https://support.mozilla.org/) (SUMO). If you'd like to see the source code behind an example of this approach in action, feel free to check out the [GitHub repository for AMO](https://github.com/jbalogh/zamboni/).

## Approaches to mobile Web development

See the following articles for background and other approaches to developing for mobile platforms.

- [What is mobile-friendliness?](/en-US/docs/Web/Guide/Mobile/Mobile-friendliness)
- [Responsive design](/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [A hybrid approach](/en-US/docs/Web/Guide/Mobile/A_hybrid_approach)

## Original document information

This article was originally published on 13 May 2011, on the Mozilla Webdev blog as "[Approaches to Mobile Web Development Part 2 – Separate Sites](https://blog.mozilla.org/webdev/2011/05/13/approaches-to-mobile-web-development-part-2-separate-sites/)", by Jason Grlicky.
