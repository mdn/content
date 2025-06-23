---
title: Workflows and processes
slug: Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes
page-type: tutorial-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}

An important aspect of technical projects that beginners often miss out on is an idea of the bigger picture. They might learn an individual tool or language, but be unaware of all the libraries, tools, systems, and job roles that go together to deliver an entire web application. The following sections cover different big picture aspects at a high level.

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
          <li>Typical technology combinations in web projects.</li>
          <li>Typical job roles on a web development team.</li>
          <li>Typical technical project phases, and where the different job roles are involved.</li>
          <li>Common work management processes, such as agile and waterfall.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Typical technology combinations

When building a website, you will use a combination of different technologies, commonly referred to as a **tech stack**. As websites get larger and more complex, so does the tech stack. It might start off simple when you are creating a demo and only you and a few colleagues will be looking at it. However, a seemingly-simple production website's tech stack could be more complex than you first think when you consider that it needs to:

- Load quickly (this is the purpose of [performance](/en-US/docs/Learn_web_development/Extensions/Performance/why_web_performance)).
- Handle a large number of users simultaneously (it must **scale**).
- Be well-designed, so that users can easily access the information and services it contains.
- Be easy for a team to work on and maintain.

At a very high level, a web application tech stack might look something like this:

```plain
Front-end
HTML, CSS, JavaScript
|
Back-end
Node.js, .NET, PHP, Python, or some other server-side language
|
Database
MySQL, Postgres, MongoDB, or some other database
|
Web server
Your own, built around a server product such as Apache, or a service like Netlify
```

> [!NOTE]
> You will often see acronyms that refer to poplar tech stacks, such as [MEAN](https://www.mongodb.com/resources/languages/mean-stack) (MongoDB, Express, Angular, Node) or [LAMP](<https://en.wikipedia.org/wiki/LAMP_(software_bundle)>) (Linux, Apache, MySQL, PHP or Python).

On MDN, we are mainly concerned with the front-end part, but even that can be broken down into lots of different pieces. Take the front-end for example:

- You will probably use a JavaScript framework (such as [React](/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)) to define the components that go together to create the user interface.
- The framework will probably use some kind of templating language (such as [Mustache](https://mustache.github.io/)) to define the HTML structure but also provide functionality to dynamically include variable content.
- You will include information to style your content via CSS in a way that is compatible with the framework. This might written in pure CSS, or a CSS framework (such as [Tailwind](https://tailwindcss.com/)) or preprocessor (such as [Sass](https://sass-lang.com/)).
- A JavaScript project should include tests, to make sure that any new code additions don't break its functionality. Tests are usually implemented using a testing framework (like [Jest](https://jestjs.io/)).
- Larger websites will use a packaging/build tool (such as [Parcel](https://parceljs.org/)) to improve performance by keeping file sizes down, removing unused components from the production code, etc.
- And so on.

> [!NOTE]
> You will often hear websites and applications described as being built using specific **architectural patterns**. For example, [model-view-controller (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) is a pattern that many JavaScript frameworks follow, while [publish–subscribe (pub/sub)](https://dev.to/willvelida/the-publisher-subscriber-pattern-pubsub-messaging-10in) is commonly used by messaging applications. It is not especially important that you understand these patterns in detail, but some familiarity can be useful when trying to understand a new framework or tool.

There will also be tools involved outside the actual tech stack itself to help you manage it or create assets for the website, such as:

- Planning tools to help you plan what you are going to do throughout the course of the project at a high level (such as [Miro](https://miro.com/)).
- Version control systems (VCS). You will probably use a [git](https://git-scm.com/)-based VCS, such as [GitHub](https://github.com/).
- Graphics/interface design packages (such as [Figma](https://www.figma.com/) or [Canva](https://www.canva.com/)).
- Project management tools such as [Trello](https://trello.com/) or [Asana](https://asana.com/).

OK, so that is a lot to take in. Our advice is **don't panic!** The aim of this article is not to worry you by making you think that all of a sudden you have 10 times as many things to learn as you did before. The idea is simply to make you aware of the bigger picture in terms of website projects, and give you a basic familiarity with some of the terms you might encounter.

Eventually, you will develop some knowledge of several of the above tools and technologies, but you won't be an expert in them all, nor will you need to be — that's what teams are for. For the moment, you are absolutely doing the right thing by learning the core skills such as HTML, CSS, and JavaScript. More tools, and specializations, will come later on in your career.

## Job roles

In a web development team, there are many different job roles involved; it is useful to understand what each one entails:

- **Product manager**
  - : Responsible for the whole website from a product perspective — how is the product performing in the market, compared to its competitors? What are its strengths and weaknesses? What new features is the target audience asking for, and which ones are the highest priority? What are the website's main success criteria, and how did recent new features help meet those criteria? The product manager will collect data and write reports to help the team understand how effective their work is, and prioritize future work.
- **Project manager**
  - : Responsible for organizing the work the team needs to do. The project manager will create a project plan with prioritized tasks and due dates, assign personnel to do each task, hold regular check-in meetings to see if progress targets are being met and surface any problems, and adjust the plan as needed.
- **User experience (UX) designer**
  - : Responsible for understanding the needs of the product's target audience, and designing the product workflow/experience so that those audience needs are met most effectively. Typical UX questions are "where should we direct the user first when they land on our homepage?" and "how can we make signing up for an account as easy and intuitive as possible?" This work is often coupled with user research and testing to better understand the target audience, and creating wireframes to communicate ideas. The UX designer is one of the main consumers of the product manager's reports.
- **Graphic designer**
  - : Responsible for visual design work on the website project. Graphic designers are responsible for a variety of disciplines such as typography, choosing color schemes, creating icons and other graphic assets, and creating website mockups based on the UX designer's wireframes.
- **Front-end developer**
  - : This is (probably) what you are aiming to be if you are reading this! Front-end developers use HTML, CSS, and JavaScript to create the visual part of the website that users interact with, bringing to life the behavioral and visual mockups created by the UX and graphic designers.
- **Back-end developer**
  - : Responsible for the non-visual parts of the website. They write back-end code to request internal data, generate HTML pages from templates, and process external data submitted by users. They also handle web server configuration, keeping the site secure, etc.
- **Full-stack developer**
  - : Handles both front-end development and back-end development tasks.
- **Quality assurance (QA) engineer**
  - : Responsible for testing new features to make sure they work properly and reporting bugs, communicating with the developers to help them prioritize the necessary fixes.
- **Content specialist/technical writer**
  - : Responsible for making sure the textual content of the website works as well as it can for the target audience. This includes the structure of the information and how it is navigated, the user interface text labels, blog posts, marketing text, and product documentation.

### Less common job roles

Other less common job roles include:

- **User researcher**
  - : Larger teams will often have a dedicated researcher to do user research and testing.
- **Search Engine Optimization (SEO) specialist**
  - : Analyses the content and structure of the website and makes changes that will cause the website to be more visible in relevant search engine results. See {{glossary("SEO")}} for more information.

## Technical project phases

A typical technical project might happen like this:

1. The product manager identifies a new set of user requirements for the website.
2. They discuss it with the team, and it is decided that these requirements can be met by adding a new feature to the website.
3. The project manager discusses with the team what the required individual work items are for creating the new feature, and creates a [work process to manage them](#work_management_processes).
4. The UX designer designs a workflow for the new feature that describes how it should work, and a wireframe to provide an idea of where it might fit on the site.
5. The graphic designer designs a mockup showing what the feature will look like on the website, along with the chosen fonts and color palette.
6. The content specialist writes the UI text required by the feature, and the documentation required to support it.
7. The back-end developer creates the necessary systems to securely store and handle the data that powers the feature.
8. The front-end developer creates the interactive feature based on the graphic designer's mockups and connects it to the back-end so that it retrieves the data it needs.
9. The QA engineer thoroughly tests the new feature, and writes a detailed report on the issues they find with it.
10. The developers fix the bugs that are deemed sufficiently serious that they should block the release of the feature.
11. Once the (blocking) bugs are fixed and the project is signed off, the feature can be put live on the website.

This is a simplified view — other phases will exist around the feature implementation itself, and the phases will not necessarily all be completed in the order shown, but this gives you an idea of what's involved.

## Work management processes

The project manager will use some kind of process to manage the website project, monitoring progress on the different work items, making sure they get done in the right order and on time, etc. The two main process types are:

- **Waterfall**
  - : Refers to running a project in clear, fixed phases, where each one is dependent on the previous one, and not too many changes in requirements are anticipated. Generally a single large result is delivered at the end of the project. Management of the team tends to be more bureaucratic, with less autonomy.
    - Waterfall projects tend to be better specified at the start and have less scope creep (adding requirements mid-project). In addition, larger, less frequent product releases are easier to handle in terms of release planning, marketing, delivering training and documentation, etc.
    - However, waterfall tends to be less flexible, and changes happen much more slowly. Waiting several months for a bug fix can be frustrating.
- **Agile**
  - : Refers to running a project more flexibly, where multiple phases can progress simultaneously, and multiple smaller results tend to be delivered at various different milestones throughout the project. Changes in requirements are expected and can be handled by shifting priorities as required. Teams are generally more autonomous.
    - Agile projects are flexible and can adapt more easily to changes in requirements. It can also be nice to have more frequent releases — bugs get fixed more quickly, innovation happens more often, and there is always something for the marketing team to talk about. Agile teams often talk about continuous improvement.
    - However, there is more risk of scope creep and deadline slippage, projects often never feel truly finished, and there is more of a constant pace and pressure to deliver.

> [!NOTE]
> Web development teams often prefer to work with an agile process, as software development is by its very nature prone to (sometimes rapid) changes in requirements due to new bugs, user feedback, company strategy, etc.

### Scrum and kanban

There is a specific type of agile methodology called **scrum**, which has a fixed set of rules about how a project is run. For example:

- The person in charge of the scrum is called the scrum master. This is quite often just the project manager with a different name.
- The work to do is divided into cycles, called **sprints**, which are typically two weeks long.
- Before each sprint, potential new work items are discussed, and if accepted into the sprint, they are put into a backlog.
- Work items are taken from the backlog and move through different phases towards completion, such as "in progress" and "in review".
- The scrum master holds short daily **stand-up meetings** where everyone talks about the progress they've made and any issues they might be having, so problems can be caught early.
- At end of each sprint, the scrum master holds a retrospective meeting to review what went well, what didn't go so well, and what lessons can be learnt before the next sprint.

Another type of agile methodology is called **kanban**, which has less rules than scrum, doesn't use sprints, and tends to focus more on the continuous improvement aspects of agile. Kanban is particularly useful for managing continuous processes that don't have a clear defined end, such as customer support tickets.

### Kanban boards

Tools such as [Trello](https://trello.com/) and [Asana](https://asana.com/) provide visualizations that show the status of different work items in a project. They are usually called **Kanban boards**, although they can be used to manage different process types, not just kanban. Kanban boards consist of different columns, which can represent different work statuses in a scrum project ("backlog", "todo", "in progress", etc.), different types of work ("research", "design", "development", etc.) or whatever else is useful for your project.

[GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) provide another good tooling option, and are free to use — you just need to sign up for a GitHub account.

## Getting practice with project workflows

You should read up on the above processes, and practice tracking some of your work or personal projects using a kanban board. Don't worry about using a complex scrum methodology; basic kanban is fine for the moment. Even if you're doing something solo, it can be great to practice the workflow of:

1. Creating tasks.
2. Deciding how big they are or how long they will take.
3. Prioritizing tasks.
4. Putting them in order with due dates.
5. Starting to work on different tasks.
6. Setting their statuses ("in progress", "blocked", "done", etc.) as the work progresses.

Track the progress of a complete project from start to finish — try it with your own website or a side project of some kind. Also, try [contributing to an open source project](/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork#participate_in_open_source) or two; many of them will use a process to track their work similar to what we have described above.

## See also

- [What is a Tech Stack and How Do They Work?](https://www.mongodb.com/resources/basics/technology-stack), mongodb.com
- [Website development team structure: roles and processes](https://www.truemark.dev/blog/web-development-team-structure-role-process/), truemark.dev (2017)
- [Agile vs. Waterfall](https://www.productplan.com/learn/agile-vs-waterfall/), ProductPlan
- [What is Scrum?](https://www.scrum.org/learning-series/what-is-scrum/), scrum.org

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}
