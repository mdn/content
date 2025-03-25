---
title: Workflows and processes
slug: Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes
page-type: tutorial-chapter
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}

An important aspect of technical projects that beginners often miss out on is an idea of the bigger picture of a project. They might learn an individual tool or language, but be unaware of all the libraries, tools, systems, and job roles that go together to deliver an entire web application. The following sections cover different big picture aspects at a high level.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        N/A
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>Typical technology combinations in common web projects.</li>
          <li>Typical processes for a technical project, including where different tools are used in those processes.</li>
          <li>Typical job roles, and where they are involved in those processes.</li>
          <li>Common work management styles, such as agile and waterfall.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Typical technology combinations

When building a website, you will use a combination of different technologies, commonly referred to as a **tech stack**. As websites get larger and more complex, so does the tech stack. Your tech stack might start off simple when you are creating a demo and only you and a few colleages will be looking at it. However, a seemingly-simple production website's tech stack could be more complex than you first think when you consider that it needs to:

- Load quickly (this is the purpose of [performance](/en-US/docs/Learn_web_development/Extensions/Performance/why_web_performance)).
- Handle a large number of users simultaneously (it must **scale**).
- Be well-designed, so that users can easily access the information and services it contains.
- Be easy for a team to work on and maintain.

At a very high level, a web application tech stack might look something like this:

```plain
Front-end — HTML, CSS, JavaScript
|
Back-end — Node.js, .NET, PHP, Python, or some other server-side language
|
Database — MySQL, Postgres, MongoDB, or some other database
|
Web server — your own, or a service such as Netlify
```

> [!NOTE]
> You will often see acronyms that refer to poplar tech stacks, such as [MEAN](https://www.mongodb.com/resources/languages/mean-stack) (MongoDB, Express, Angular, Node) or [LAMP](<https://en.wikipedia.org/wiki/LAMP_(software_bundle)>) (Linux, Apache, MySQL, PHP or Python).

On MDN, we are mainly concerned wth the front-end part, but even that can be broken down into lots of different pieces. Take the front-end for example:

- You will probably use a JavaScript framework (such as [React](/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)) to define the components that go together to create the user interface.
- The framework will probably use some kind of templating language (such as [Mustache](https://mustache.github.io/)) to define the HTML structure but also provide functionality to dynamically include variable content.
- You will include information to style your content via CSS in a way that is compatible with the framework. This might written in pure CSS, or a CSS framework (such as [Tailwind](https://tailwindcss.com/)) or preprocessor (such as [Sass](https://sass-lang.com/)).
- A JavaScript project should include tests, to make sure that any new code additions don't break its functionality. Tests are usually implemented using a testing framework (like [Jest](https://jestjs.io/)).
- Larger websites will use a packaging/build tool (such as [Parcel](https://parceljs.org/)) to improve performance by keeping file sizes down, removing unused components from the production code, etc.
- And so on.

> [!NOTE]
> You will often hear websites and applications described as being built using specific **architectural patterns**. For example, [model-view-controller (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) is a pattern that many JavaScript frameworks follow, while [publish–subscribe (pub/sub)](https://dev.to/willvelida/the-publisher-subscriber-pattern-pubsub-messaging-10in) is commonly used by messaging applications. It is not especially important that you understand these patterns in detail, but some familiarity can be useful when trying to understand a new framework or tool.

Then there will be tools outside the actual tech stack itself to help you manage it or create assets for the website, such as:

- Planning tools to help you plan what you are going to do near the start of the project (such as [Miro](https://miro.com/)).
- Version control systems (you will probably use a [git](https://git-scm.com/)-based VCS, such as [GitHub](https://github.com/)).
- Graphics/interface design packages (such as [Figma](https://www.figma.com/) or [Canva](https://www.canva.com/)).
- Project management tools such as [Trello](https://trello.com/) or [Asana](https://asana.com/).

OK, so that is a lot to take in. Our advice is **don't panic!** The aim of this article is not to worry you by making you think that all of a sudden you have 10 times as many things to learn as you before. The idea is simply to make you aware of the bigger picture in terms of website projects, and give you a basic familiarity with some of the terms you might encounter.

Eventually, you will probably develop some knowledge of several of the above tools and technologies, but you won't be an expert in them all, nor will you need to be — that's what teams are for. For the moment, you are absolutely doing the right thing by learning the core skills such as HTML, CSS, and JavaScript. More tools, and specializations, will come later on in your career.

## Job roles

In a web development team, there are many different job roles involved; it is useful to understand what each one does:

- Product manager
  - : Responsible for the whole website from a product perspective — how is the product performing in the market, compared to its competitors? What are its strengths and weaknesses? What new features are the target audience asking for, and which ones are the highest priority? What are the website's success main criteria, and how did recent new features help meet those criteria? The product manager will collect data and write reports to help the team understand how effective their work is, and prioritize future work.
- Project manager
  - : Responsible for scheduling the work the team needs to do, often breaking it up into set time periods called **sprints**. The project manager will create a priject plan, assign personnel to do each task, hold regular check-in meetings (often called **stand-ups**) to see if progress targets are being met and surface any problems, and adjust the plan as needed.
- User experience (UX) designer
  - : Responsible for understanding the needs of the product's target audience, and designing the product workflow/experience so that those audience needs are met most effectively. Typical UX questions are "where should we direct the user first when they land on our homepage?" and "how can we make signing up for an account as easy and intuitive as possible?" This work is often coupled with user research and testing to better understand the target audience, and creating wireframes to communicate their ideas. The UX designer is one of the main consumers of the product manager's reports.
- Graphic designer
  - : Responsible for xxx GOT HERE

Other less common job roles include:

- User researcher
  - : Larger teams will often have a dedicated researcher to do user research and testing.

## Typical processes for a technical project

## Common work management styles

TODO

## See also

- [What is a Tech Stack and How Do They Work?](https://www.mongodb.com/resources/basics/technology-stack), mongodb.com
- [Website development team structure: roles and processes](https://www.truemark.dev/blog/web-development-team-structure-role-process/), truemark.dev (2017)
- [Waterfall vs. Agile vs. Kanban vs. Scrum: What's the difference?](https://asana.com/resources/waterfall-agile-kanban-scrum), Asana (2022)

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}
