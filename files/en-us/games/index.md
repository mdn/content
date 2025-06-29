---
title: Game development
slug: Games
page-type: landing-page
---

{{GamesSidebar}}

Gaming is one of the most popular computer activities. New technologies are constantly arriving to make it possible to develop better and more powerful games that can be run in any standards-compliant web browser.

## Develop web games

Welcome to the MDN game development center! In this area of the site, we provide resources for web developers wanting to develop games. You will find many useful tutorials and technique articles in the main menu on the left, so feel free to explore.

We've also included a reference section so you can easily find information about all the most common APIs used in game development.

> [!NOTE]
> Creating games on the web draws on a number of core web technologies such as HTML, CSS, and JavaScript. The [Learn web development](/en-US/docs/Learn_web_development) section is a good place to go to get started with the basics.

## Guides

{{SubpagesWithSummaries}}

## Examples

For a list of web game examples, see our list of [Tutorials](/en-US/docs/Games/Tutorials).

## See also

- [Build New Games](http://buildnewgames.com/)
  - : A collaborative site featuring a large number of open web game development tutorials. Has not been very active recently, but still holds some nice resources.
- [Creative JS](http://creativejs.com/)
  - : A collection of impressive JavaScript techniques and experiments, not specific to games, but helpful nonetheless. Has not been very active recently, but still holds some nice resources.
- [Game Programming Patterns](https://gameprogrammingpatterns.com/)
  - : An online book, written by Bob Nystrom, which discusses programming patterns in the context of game development with the aim of helping game developers produce more effective and efficient code.
- [Gamedev.js Weekly](https://gamedevjsweekly.com/)
  - : Weekly newsletter about HTML game development, sent every Friday. Contains the latest articles, tutorials, tools, and resources.
- [HTML5 Game Engine](https://html5gameengine.com/)
  - : List of the most popular HTML game frameworks along with their rating, features and samples.
- [Tuts+ Game Development](https://code.tutsplus.com/c/game-development)
  - : Tutorials and articles about game development in general.
- [HTML5 Gamedev Starter](https://html5devstarter.enclavegames.com/)
  - : Starter for the new game developers, a curated list of links to various useful resources around the web.
- [js13kGames](https://js13kgames.com/)
  - : JavaScript coding competition for HTML game developers with the file size limit set to 13 kilobytes. All the submitted games are available in a readable form on GitHub.
- [Mozilla Hacks Blog](https://hacks.mozilla.org/category/games/)
  - : Games category on the Mozilla Hacks blog containing interesting gamedev related articles.
- [Games section on wiki.mozilla.org](https://wiki.mozilla.org/Platform/Games)
  - : A wiki page with information about Mozilla's involvement in platform games.

## Best Practices for Web Game Performance

Optimizing your game's performance is crucial for providing a smooth and enjoyable experience for players. Here are some best practices to help you get the most out of web technologies:

### 1. Minimize Draw Calls
- Batch rendering operations when possible.
- Use texture atlases to reduce the number of textures bound per frame.

### 2. Optimize Asset Loading
- Compress images, audio, and other assets.
- Use lazy loading and preload critical assets.
- Consider using service workers for caching.

### 3. Efficient JavaScript
- Avoid memory leaks by cleaning up unused objects and event listeners.
- Use web workers for heavy computations to keep the main thread responsive.
- Profile your code using browser developer tools and the [Firefox Profiler](https://profiler.firefox.com/docs/#/).

### 4. Leverage Hardware Acceleration
- Use WebGL for graphics-intensive games.
- Prefer CSS transforms and opacity for animations.

### 5. Responsive Design
- Ensure your game works well on different screen sizes and input types.
- Test on both desktop and mobile devices.

### 6. Monitor and Test Performance
- Regularly test your game on various browsers and devices.
- Use tools like [Lighthouse](https://developers.google.com/web/tools/lighthouse) and browser devtools for audits.

For more in-depth resources, see:
- [MDN Performance documentation](https://developer.mozilla.org/en-US/docs/Web/Performance)
- [Web Performance Optimization](https://web.dev/performance/)
