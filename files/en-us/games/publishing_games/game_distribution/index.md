---
title: Game distribution
slug: Games/Publishing_games/Game_distribution
page-type: guide
---

{{GamesSidebar}}

You've followed a [tutorial](/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) or [two](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser) and created an HTML game — that's great! This article covers all you need to know about the ways in which you can distribute your newly created game into the wild. This includes hosting it yourself online, submitting it to open marketplaces, and submitting it to closed ones like Google Play or the iOS App Store.

## Benefits of HTML over native

Building games with HTML gives you extra advantages, such as:

### Multiplatform bliss

The technology itself is multiplatform, so you can write the code once and target multiple devices. This can range from low-end smartphones or tablets, through laptops and desktop computers, to smart TVs, watches or even a fridge if it can handle a modern enough browser.

You don't need to have separate teams to work on the same title targeting different platforms with only one code base to worry about. You can spend more time and money on [Promotion](/en-US/docs/Games/Publishing_games/Game_promotion) and [Monetization](/en-US/docs/Games/Publishing_games/Game_monetization).

### Instant updates

You don't have to wait several days to have your game's code updated. If your user finds a bug, you can quickly fix it, update the system and refresh the game on your server to provide players with the updated code almost instantly.

### Direct link distribution and instant play

You don't have to tell people to search for your game in an app store with HTML games. You can just send them a direct URL to access the game, which they can then click to play the game right away without the need to use third party plugins or download and install a large package. Bear in mind that downloading the game might still take a bit of time depending on the size of the game and your network speed. In any case, it's a lot easier to promote the game if you can drive traffic directly where you want it and don't have to jump through lots of hoops to play.

## Desktop vs. mobile

The vast majority of the traffic we are interested in — people playing HTML games — comes from mobile devices so that's something you will have to focus on if you truly want to succeed. Mobile devices are where HTML technology can truly shine and show its advantages. There's no Flash, and HTML is fully multiplatform.

Trying to compete with desktop games directly is very difficult. You can put your HTML games into the same arena (see [Native desktop](#native_desktop), later on) and you should because it's good to diversify the platforms you support, but you have to remember that developers creating desktop games have years of experience, great tools and stable distribution channels. Many HTML games will target different market segments than native desktop games, e.g. simple time killer games to be played while on the move rather than huge immersive experiences. Such games are often designed to be played with two, or even one finger, so you can hold the device, play the game and be able to use the second hand for whatever you currently need.

Saying this, desktop platforms can be used for distribution quite easily with the availability of wrappers that can help you prepare native builds of your game see [Packaging games](#packaging_games). It's also nice to provide desktop controls for your games even if you're mostly targeting mobile. Players are enjoying your games on any platform available, and desktop is one of them. Plus, it is usually easier to build and test the game first on desktop, and then move on to debugging mobile.

## Publishing the game

There are three main options when it comes to publishing a game:

- Self-hosting
- Publishers
- Stores

Remember that the name of your game should be unique enough to be quickly [promoted](/en-US/docs/Games/Publishing_games/Game_promotion) later on, but also catchy enough, so people don't forget it.

### Self-hosting

If you are a front-end developer, you may already know what to do. An HTML game is just another website. You can upload it to a remote server, grab a catchy domain name, and host it yourself.

If you want to make money out of game dev, you should secure your source code one way or another against people who could easily take it and sell it as their own. You can concatenate and minify the code to make it smaller and uglify it so it's a lot harder to reverse engineer your game. Another good measure to take is to provide an online demo if you're planning on packaging it and selling it in a closed store like iTunes or Steam.

If you're working on a side project just for fun, then leaving the source open will benefit those who would like to learn from what you've created. You don't even have to worry about looking for a hosting provider as it's possible to [host games on GitHub Pages](https://end3r.com/blog/2014/02/host-your-html5-games-on-github-pages/). You'll get free hosting, version control and possible contributors if your project is interesting enough.

### Publishers and portals

As the name may suggest, publishers can handle the publishing of your game for you. Whether you should go that way or not depends on what your plan is for having your game distributed: Do you want to send it wherever possible, or do you want to restrict its presence to those who've bought an [exclusive license](/en-US/docs/Games/Publishing_games/Game_monetization)? It's up to you. Consider various options, experiment and conclude. Publishers will be explained in more detail in the [monetization](/en-US/docs/Games/Publishing_games/Game_monetization) article.

There are also independent portals collecting interesting games like [HTML5Games.com](https://html5games.com/), [GameArter.com](https://www.gamearter.com/), [MarketJS.com](https://www.marketjs.com/), [GameFlare](https://distribution.gameflare.com/), [GameDistribution.com](https://gamedistribution.com/), [GameSaturn.com](https://gamesaturn.com/), [Playmox.com](https://www.playmox.com/), [Poki](https://developers.poki.com/), or [CrazyGames](https://developer.crazygames.com/) where you can send your game in and it will get some natural promotion because of the big traffic those sites attract. Some of these take your files and host them on their server, whereas others only link to your website or embed your game on their site. Such exposure may just provide [promotion](/en-US/docs/Games/Publishing_games/Game_promotion) for your game, or if you have adverts shown beside your game (or other money making options) it may also provide monetization.

### Web and native stores

You can also upload and publish your game directly to different types of stores, or marketplaces. To do that you'll have to prepare and package it to a build format specific for every app ecosystem you want to target it at. See [Marketplaces — distribution platforms](#marketplaces_—_distribution_platforms) for more details of what marketplace types are available.

## Marketplaces — Distribution platforms

Let's see what the available options are regarding the marketplaces/stores available for different platforms and operating systems.

> [!NOTE]
> These are the most popular distribution platforms, but this is not to say these are the only options. Instead of trying to add your game to the thousands of others in the iOS store say, you can also try to find a niche and promote directly to the audience who would be interested in your games. Your creativity is critical here.

### Web stores

The best platforms for HTML games are Web-based stores. You can prepare games for web stores by adding a manifest file and other data, such as resources, in a zipped package. Not many modifications of the game itself are required.

- [The Chrome Web Store](https://chromewebstore.google.com/) is also an attractive option — again, having a manifest file ready, zipping your game and filling in the online submission form is about all that's required.

### Native mobile stores

When it comes to the mobile market, there's the Apple App Store for iOS, Google Play for Android and all the rest of the competition. Native stores are already filled with established devs selling great games, so you have to be talented and lucky to get noticed.

- The iOS App Store is quite hard to get into as there are strict requirements games have to meet, and you'll have to wait a week or two to get accepted. Plus, it's the most prominent mobile store, with hundreds of thousands of apps, so it's extremely hard to stand out from the crowd.
- Google Play's requirements are less strict, so the store is polluted with low quality games. It's still quite hard to be noticed there as the number of apps submitted daily is huge. It's harder to earn money here too — most of the paid games from iOS are published as free games on Android, with monetization coming from in-app purchases (IAPs) or ads.
- Other stores for native mobile platforms like Windows Phone or Blackberry are working hard to get a piece of the cake, and are way behind the competition. It can be good to submit your game there as it will be a lot easier to be noticed.

If you're looking for more information about the different types of app stores you can check the [List of mobile software distribution platforms](https://en.wikipedia.org/wiki/List_of_mobile_software_distribution_platforms) article on Wikipedia.

### Native desktop

To broaden your audience you can hit the desktop ecosystem with your HTML games too — just remember all the popular AAA games that take most of the market share, and think carefully about whether this suits your strategy. To do the desktop thing properly you should support all three operating systems: Windows, macOS and Linux. The biggest desktop store for games is definitely [Steam](https://steamcommunity.com/) — indie developers can get on Steam via the [Steam Direct](https://partner.steamgames.com/steamdirect) program. Remember that you have to deal with the cross-platform issues yourself by uploading separate versions for different platforms.

After you've covered Steam, there's plenty of buzz around initiatives like [Humble Bundle](https://www.humblebundle.com/) where the most popular indie games get presented to a broader audience. It's more like an excellent promotional opportunity than a way to earn a lot of money, however, as the prices paid for the games in a bundle are usually quite low.

## Packaging games

The web is the first and the best choice for HTML games, but if you want to reach a broader audience and distribute your game in a closed ecosystem, you still can do that by packaging it. The good thing is that you don't need a few separate teams working on the same game for different platforms — you can build it once and use tools to package the game for native stores. The resulting packages are usually pretty reliable, but you should still test them and be on the lookout for small issues or bugs to fix.

### Available tools

There are various tools to choose from depending on your skills, preferred frameworks or target platforms. It's all about picking the best tool for your particular task.

- [Ejecta](https://impactjs.com/ejecta) — a tool specifically for packaging games created with [the ImpactJS](https://impactjs.com/) framework for iOS, built by the ImpactJS author. It provides seamless integration with ImpactJS, but it supports only one framework and app store.
- [NW.js](https://nwjs.io/) — formerly known as Node-WebKit, this is the first choice when it comes to building a desktop game that works on Windows, Mac and Linux. The distributions are packaged with the WebKit engine to provide rendering on any platform.

Other alternative tools are:

- [Intel XDK](https://www.intel.com/content/www/us/en/developer/tools/overview.html) — an exciting alternative, similar to CocoonIO.
- [Electron](https://www.electronjs.org/) — known as Atom Shell — is an open-sourced and cross-platform tool from GitHub.
- [Manifold.js](https://manifoldjs.com/) — this tool from the Microsoft team can create native distributions of HTML games from iOS, Android, and Windows.

## Summary

Distribution is the way to give the world access to your game. There are many options available and there's no single good answer as to which is the best. When you've published the game it's time to focus on [promotion](/en-US/docs/Games/Publishing_games/Game_promotion) — letting people know your game exists. Without promotion, they wouldn't even be able to learn about it and play it.
