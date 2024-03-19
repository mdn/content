---
title: Learn web development
slug: Learn
page-type: landing-page
---

{{LearnSidebar}}

Welcome to the MDN learning area. This set of articles aims to provide complete beginners to web development with fundamental skills for coding websites. The aim is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from [the rest of MDN](/en-US/), and other intermediate to advanced resources that assume a lot of previous knowledge.

If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.

## Where to start

If you are not sure about committing to learning web development in-depth and want to begin with a taster session, we'd recommend that you start by working through our [Getting started with the web](/en-US/docs/Learn/Getting_started_with_the_web) guides. Beyond that, you should start by learning the following topics:

- HTML and CSS
  - : HTML provides structure for web content, whereas CSS provides instructions to style and lay out that content. See [Introduction to HTML](/en-US/docs/Learn/HTML/Introduction_to_HTML) and [CSS first steps](/en-US/docs/Learn/CSS/First_steps) for essential starter information.
- JavaScript
  - : JavaScript allows you to code interactive functionality on websites. Begin with [JavaScript first steps](/en-US/docs/Learn/JavaScript/First_steps).
- Frameworks and tooling
  - : After mastering the essentials of vanilla HTML, CSS, and JavaScript, you should learn about [client-side web development tools](/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools), and then consider digging into [client-side JavaScript frameworks](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks). You should also consider learning the basic concepts of [server-side website programming](/en-US/docs/Learn/Server-side).

> **Note:** Our [glossary](/en-US/docs/Glossary) provides terminology definitions. Besides, if you have a specific question about web development, our [Common questions](/en-US/docs/Learn/Common_questions) section may have something to help you.

> **Callout:**
>
> #### Looking to become a front-end web developer?
>
> If you want to become a front-end web developer and are not sure what to learn first, we'd suggest using the [MDN Curriculum](/en-US/curriculum/) to plan your learning. It provides a structured learning pathway covering the essential skills and practices for being a successful front-end developer, along with recommended learning resources.
>
> [**Get started**](/en-US/curriculum/)

## Topics covered

The following is a list of all the topics we cover in the MDN learning area.

- [Getting started with the web](/en-US/docs/Learn/Getting_started_with_the_web)
  - : Provides a practical introduction to web development for complete beginners.
- [HTML — Structuring the web](/en-US/docs/Learn/HTML)
  - : HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.
- [CSS — Styling the web](/en-US/docs/Learn/CSS)
  - : CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.
- [JavaScript — Dynamic client-side scripting](/en-US/docs/Learn/JavaScript)
  - : JavaScript is the scripting language used to add dynamic functionality to web pages. This topic teaches all the essentials needed to become comfortable with writing and understanding JavaScript.
- [Web forms — Working with user data](/en-US/docs/Learn/Forms)
  - : Web forms are a potent tool for interacting with users — most commonly, they are used for collecting data from users, or allowing them to control a user interface. In the articles listed below, we'll cover all the essential aspects of structuring, styling, and interacting with web forms.
- [Accessibility — make the web usable by everyone](/en-US/docs/Learn/Accessibility)
  - : Accessibility is the practice of making web content available to as many people as possible regardless of disability, device, locale, or other differentiating factors. This topic gives you all you need to know.
- [Web Performance — making websites fast and responsive](/en-US/docs/Learn/Performance)
  - : Web performance is the art of making sure web applications download fast and are responsive to user interaction, regardless of a user's bandwidth, screen size, network, or device capabilities.
- [MathML](/en-US/docs/Learn/MathML)
  - : MathML is the language that we can use to write mathematical formulas in web pages using fractions, scripts, radicals, matrices, integrals, series, etc. This topic covers MathML.
- [Tools and testing](/en-US/docs/Learn/Tools_and_testing)
  - : This topic covers the tools developers use to facilitate their work, such as cross-browser testing tools, linters, formatters, transformation tools, version control systems, deployment tools, and client-side JavaScript frameworks.
- [Server-side website programming](/en-US/docs/Learn/Server-side)
  - : Even if you are concentrating on client-side web development, it is still useful to know how servers and server-side code features work. This topic provides a general introduction to how the server-side works and detailed tutorials showing how to build up a server-side app using two popular frameworks: Django (Python) and Express (Node.js).

## Tasks and assessments

In the Learn web development section of MDN, there are many self-contained tasks and assessments for you to complete. These come in two main types:

- "Test your skills" tasks, for example in [Making decisions in your code — conditionals](/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#test_your_skills!).
- More in-depth **assessments** at the end of some modules, for example [Image gallery](/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery).

Each one has an associated marking guide and recommended solution available to help you assess your work.
There are patterns that make it easier to find these resources, for example:

- The **test your skills** task linked above has a marking guide and resources available at <https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/tasks/conditionals>.
- The **assessment** linked above has a marking guide and resources available at <https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/gallery>.

> **Note:** Most of the marking guides and other resources for the tasks and assessments are available in [`mdn/learning-area`](https://github.com/mdn/learning-area/), although some are in [`mdn/css-examples`](https://github.com/mdn/css-examples/tree/main/learn).

## Getting our code examples

The code examples you'll encounter in the Learning Area are all [available on GitHub](https://github.com/mdn/learning-area/).
If you want to copy them all to your computer, the easiest way is to [download a ZIP of the latest master code branch](https://codeload.github.com/mdn/learning-area/zip/main).

If you prefer to copy the repo in a more flexible way that allows for automatic updates, you can follow the more complex instructions:

1. [Install Git](https://git-scm.com/downloads) on your machine. This is the underlying version control system software that GitHub works on top of.
2. Open your computer's [command prompt](https://www.lifewire.com/how-to-open-command-prompt-2618089) (Windows) or terminal ([Linux](https://help.ubuntu.com/community/UsingTheTerminal), [macOS](https://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line)).
3. To copy the learning area repo to a folder called learning-area in the current location your command prompt/terminal is pointing to, use the following command:

   ```bash
   git clone https://github.com/mdn/learning-area
   ```

4. You can now enter the directory and find the files you are after (either using your Finder/File Explorer or the [`cd` command](<https://en.wikipedia.org/wiki/Cd_(command)>)).

You can update the `learning-area` repository with any changes made to the master version on GitHub with the following steps:

1. In your command prompt/terminal, go inside the `learning-area` directory using `cd`. For example, if you were in the parent directory:

   ```bash
   cd learning-area
   ```

2. Update the repository using the following command:

   ```bash
   git pull
   ```

## Contact us

If you want to get in touch with us about anything, use the [communication channels](/en-US/docs/MDN/Community/Communication_channels). We'd like to hear from you about anything you think is wrong or missing on the site, requests for new learning topics, requests for help with items you don't understand, or any other questions or concerns.

If you're interested in helping develop/improve the content, take a look at [how you can help](/en-US/docs/MDN/Community/Contributing) and get in touch! We are more than happy to talk to you, whether you are a learner, teacher, experienced web developer, or someone else interested in helping to improve the learning experience.

## See also

- [Learn JavaScript](https://learnjavascript.online/)
  - : An excellent resource for aspiring web developers — Learn JavaScript in an interactive environment, with short lessons and interactive tests, guided by automated assessment. The first 40 lessons are free, and the complete course is available for a small one-time payment.
- [Codecademy](https://www.codecademy.com/)
  - : A great interactive site for learning programming languages from scratch.
- [freeCodeCamp.org](https://www.freecodecamp.org/)
  - : Interactive site with tutorials and projects to learn web development.
- [The Odin Project](https://www.theodinproject.com/)
  - : Features a free and open-source full-stack curriculum, from beginner to advanced.
- [MDN Blog](/en-US/blog/)
  - : The MDN blog has articles from the MDN team and guest writers about new developments on the site, HTML, CSS, JavaScript, and other web development news.
- [Mozilla developer newsletter](https://www.mozilla.org/en-US/newsletter/developer/)
  - : Our newsletter for web developers, which is an excellent resource for all levels of experience.
