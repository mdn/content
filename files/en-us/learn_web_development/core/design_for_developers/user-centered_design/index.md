---
title: User-centered design
slug: Learn_web_development/Core/Design_for_developers/User-centered_design
page-type: tutorial-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/Design_for_developers/Basic_design_theory", "Learn_web_development/Core/Design_for_developers/Interface_designs", "Learn_web_development/Core/Design_for_developers")}}

The overarching theory of **User-centered design** (UCD) is that everything we do as designers (and developers!) is for the user — understanding their needs, solving their problems, making their experience on the web better. This article provides an introduction to UCD, the kind of research you can do to better understand your user's needs, how UCD intersects with accessibility, and the common design patterns you'll encounter on the web.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Fundamental <a href="/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a> and <a href="/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a> basics.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>Understand that everything we do is for the user.</li>
          <li>Design patterns, and the common patterns used on the web.</li>
          <li>Intro to user research/testing, and user requirements.</li>
          <li>Design for accessibility/inclusive design.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Everything is for the user

This can't be stated strongly enough. When creating a new website, or adding a new feature to an existing website, your primary concern should be making the user's experience on your site the best it can be. You should consider what your feature is meant to enable users to do (the **user requirements**), and allow them to do it as efficiently as possible.

You might also have company goals to achieve when implementing a new feature, such as getting users to buy extended warranty along with a product purchase, or getting users to buy more units to take advantage of a bulk-buy discount, or more newsletter signups. However, these goals must be balanced with providing a good user experience.

### Common UI design patterns

**UI design patterns** (not to be confused with software architecture design patterns) describe design features used to solve common design problems on the web. Such features become popular because they work — they provide effective solutions to design problems, and a good user experiences.

Think about the number of times you see the following UI patterns as you navigate around the web:

- Dark mode/light mode style switchers (like the one on MDN).
- A "card" metaphor for representing multiple similar content items.
- Continuous or "infinite" scrolling pages of content.
- "Breadcrumb" links to show your position in a complex site structure and help you retrace your steps (also used on MDN).
- "Percentage complete" indicators on long forms.
- Loading spinners or download progress bars to provide the feeling of progress when you are waiting for something to complete.

We'd recommend that you think about common design patterns, and use them on your sites where appropriate. Because they are common patterns, users will recognize them from other sites that use the same patterns. In turn, this helps to make your site more intuitive and easier to use.

[ui-patterns.com](https://ui-patterns.com/patterns/) has a detailed list of UI design patterns along with problem and solution explanations and lots of examples.

### Dark patterns

Some websites use dishonest design practices to trick users into doing things they didn't mean to do — known as **dark patterns** or **deceptive patterns**. Common dark patterns include:

- Having the "Yes! Please sign me up!" button checked by default and using confusing wording to make it sound like the meaning is inverted.
- Showing fake product reviews or activity to make a user think a product is more successful or better quality than it actually is.
- Misleading users into buying something by making the "no thanks" button really small comparsed to the "yes please" button, or by using language to guilt or scare them into buying it such as "no, I don't want to insurance my purchase against damage".

You will have seen examples of this, so you will already know how annoying these patterns are, even if you didn't think about them explicitly before now. If you use dark patterns, you will erode your users' trust for your site, and it will hurt you in the long run. In addition, some dark patterns are illegal in some parts of the world, because they break privacy laws.

You can find a lot more information about dark patterns at [Deceptive Patterns](www.deceptive.design).

## User research

To pinpoint exactly what the user requirements for a feature are, web development teams conduct user research. You can guess what your users need, but it is much more effective to design features based on evidence from real user feedback. This can be collected in several different ways:

- Unsolicited comments via email, feedback forms, blog post comments, social media, etc.
- User feedback surveys.
- Simple sentiment indicators, for example a "did you find this useful?" or "did you enjoy your visit today?" banner with a choice of "smiley face"/"sad face" or "thumbs up"/"thumbs down" buttons to press to indicate how the user felt about this.
- A/B testing, which is a type of automated testing where some pages of a site have one variation of a feature loaded on it, and some pages have another variation, and user engagement on the two variations is measured and compared. An example might be to show one newsletter signup form to most users, and a variant newsletter signup form to a small group of users, and see which design results in the most successful signups.
- Targeted user research/testing, in which users are invited to a dedicated session and asked to try using a feature so their behavior can be observed.

### Ongoing data collection

Mechanisms such as feedback forms and sentiment indicators are more useful when you've already got a website up and running. You can leave them running and periodically analyse the data to find out whether your website features are performing well.

Feedback forms can be as simple or as complex as you like, but you want to aim for "as simple as possible", that is, probably not much more [complicated than this](/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form#summary). There is a much lower chance of people bothering to fill out a really long feedback form. Other things to be in mind are:

- Only collect the data you need. Asking lots of random questions will make people less likely to fill out the form, and possibly erode trust in your product, especially if you are asking for personal data that can be used to identify users (this becomes a [privacy issue](/en-US/docs/Web/Privacy)). You should prefer anonymous feedback if possible.
- If you do want to contact users to ask for more information about their feedback, include this as an optional field.
- Make it clear to users how their data will be used, and how they can delete it if they don't want you to have it anymore. This is good practice and engenders trust, but it is also the law in some parts of the world. See [Collect data ethically](/en-US/docs/Web/Privacy#collect_data_ethically) for more information.
- Try to encourage more specific feedback. If you just provide an "Enter your feedback" text field, you could get anything, and it will take longer to make sense of all the submissions. You are more likely to get something specific if you include a drop-down menu asking what aspect or feature the feedback is about, or limit the responses to specific choices (plus an "other" field if the user has something different to report).

Sentiment indicators need to be used in combination with other research features — on their own, they don't provide very precise data. However, they are useful for providing an overall performance indicator, especially when comparing the change in sentiment before and after a new feature is released. If you launch a redesigned registration form and find that the number of people clicking the "thumbs down" button per month doubles, then you've probably done something wrong, and need to revisit it!

Also, bear in mind that users are far more likely to submit feedback if they are unhappy than if they are happy — no news is often good news. Because of this, don't be too worried if you receive more negative feedback than position feedback. Concentrate more on the change in rate of negative feedback as you make changes to your site.

### A/B testing

A/B testing is also useful when you've already got a website up and running, but it is not something that you want running all the time, for all users. If too many users started to notice that you've got different versions of features running, it may erode trust. Instead, you should only show the different version you are trying to test to a small number of users, and see if it changes the metric you are trying to test, for example number of newsletter signups.

A/B testing is usually handled by dedicated libraries such as [GrowthBook](https://www.growthbook.io/).

### User surveys

For more involved data collection, creating a survey can be a great idea. There are several apps allowing you to create surveys, such as [Google Forms](https://docs.google.com/forms) and [Survey Monkey](https://www.surveymonkey.com/). You can make a survey available at a particular URL, then link to it from your site or send it to people as required.

Surveys have many of the same best practices as feedback forms (see [Ongoing data collection](/en-US/docs/Learn_web_development/Core/Design_for_developers/User-centered_design#ongoing_data_collection)), especially around privacy, but with some additional considerations:

- Surveys are generally much longer than feedback forms, and therefore will have a lower submission rate. This is not necessarily a problem, as their purposes are different. Whereas a feedback form may be active for a long period of time, and collect general feedback in an ongoing fashion, surveys will generally be active for a shorter time, for a particular campaign, with the aim of collecting data about a very specific feature or product.
- For example, you might want to solicit feedback on your latest product's performance, or ask your users what they'd want to see if you were to create a new feature aimed at solving a particular use case.
- The longer a survey is, the more people who start filling it out will drop off before the end. If you are getting really low completion rates, you might want to consider offering respondants an incentive such as a gift voucher or free product minutes.
- It is even more important to encourage more specific feedback when creating a survey, as you'll end up with a lot more meaningless feedback and waste a lot more of your user's time if you get it wrong. However, surveys are longer than feedback forms, and there is a lot more scope to use creative question structures, for example:
  - Range sliders or 1–5 numeric scores to indicate how much you agree or disagree with a statement, or like or dislike a feature.
  - Questions that are selectively displayed depending on the answer to previous questions.
  - File uploads.
  - Other input types like rating stars, times, or dates.

### User testing

User testing sessions provide the most comprehensive and useful feedback, but they come at the highest cost. Such sessions involve a dedicated UX designer or user researcher, who will follow a process something like this:

1. Collect requirements for the user testing — for example, what feature are you trying to get feedback on, or what hypothesis are you trying to prove?
2. Find participants to take part in the user testing. This might involve:
   1. An invitation to participate, on newsletters, social media, etc.
   2. Talking to specific community members you think might want to help.
   3. A survey to determine suitability
   4. Offering a reward for taking part.
3. Write a script to follow when conducting the research. A typical script will involve:
   1. Sets of directions for the users to follow, for example "Search for runing shoes and add a pair to your shopping basket. Now buy the running shoes."
   2. A request for the user to talk through what they are doing as they are doing it, including voicing any questions they have, or anything they find confusing or frustrating.
   3. Questions to ask the user at key points, for example "What would you expect the next step to be?" or "How could this process be made easier?"
4. Set up video calls or in-person sessions to meet with the participants and run through the script with them, observing their behavior and commentary to see how they use your site. It is normal to record the session. Some research sessions also use software such as [eye trackers](https://www.uxstudioteam.com/ux-blog/eye-tracking-in-ux-research) to more precisely track the user journey around the site.
5. Analyse the research, and write it up into key findings to share with other members of the team. This often includes key quotes and video clips to strengthen the key points being made.

## Design for accessibility

Another major topic related to UCD is [accessibility](/en-US/docs/Learn_web_development/Core/Accessibility), which we already covered previously. The practice of designing for accessibility is also known as **inclusive design**. We are not going to cover accessibility/ID in detail here, but rather summarize where the topics overlap, and give you some points to consider as you start to design new web features.

- Make sure you are familiar with the [different types of disability](/en-US/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#what_kinds_of_disability_are_we_looking_at) people have, and think generally about how you can [implement accessibility into your project](/en-US/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#implementing_accessibility_into_your_project).
- At the start of a project, think about the features you will implement, and which ones will have specific accessibility issues you'll need to overcome. For example, all controls need [meaningful labels](/en-US/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels) and [multimedia](/en-US/docs/Learn_web_development/Core/Accessibility/Multimedia) needs text alternatives such as transcripts and subtitles.
- Unsemantic controls and widgets will need help from [WAI-ARIA](/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) to be understandable (for example by people who use [screen readers](/en-US/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers)) and usable (for example by keyboard-only users).
- Make sure you get the content fundamentals right, such as [semantic HTML structure](/en-US/docs/Learn_web_development/Core/Accessibility/HTML#good_semantics), [image alt text](/en-US/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives), [making links look like links](/en-US/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#links), and making your designs have good [color contrast](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast).
- Make sure your designs work well on [mobile](/en-US/docs/Learn_web_development/Core/Accessibility/Mobile) devices as well as desktops and laptops.
- Design your experiences to be as clear and intuitive as possible. This sounds obvious, and is the underlying theme for this entire module, but clear design designs particularly help people with disability to use web features.

[Inclusive design principles](https://inclusivedesignprinciples.info/) provides a useful set of principles to follow when designing for accessibility.

## How to get started

When you are first starting out with web development, you might think the above tools and processes are overkill, and you would be right. You don't need to have a deep understanding of UCD at this point, and probably not at all, unless you decide you want to consider a career as a desiger or user researcher. The point is really just to make you aware of UCD processes, and get you to think about user requirements and UX whenever you start building something on the web.

At this point, it is worth adding some user research steps into your projects, even if they are personal ones that you are doing just for fun:

1. At the start of a project, write a project brief. This can just be a single page for now, but it should describe the project, the main features it will have, the main use cases/functionality it has, and who its target audience are.
2. Write a rough implementation plan describing how you will design and implement your project. Include a rough design (we cover [interface designs](/en-US/docs/Learn_web_development/Core/Design_for_developers/Interface_designs) in more detail next), a list of technology features you will use to implement it, and a list of accessibility requirements to make your proposed featureset inclusive.
3. Create a rough prototype of the new site or feature, or at least something that gives an idea of how the main functionality will work, if the project is on the large side.
4. Write a user research script to use when conducting user testing on your prototype.
5. Find a couple of colleagues or friends to run through the script with, and do some user testing.
6. In addition, or instead of the user testing, you could put your prototype online, write a survey, and invite online contacts to test it and provide feedback via the survey.
7. Write up the feedback you get. Try to include three key insights that will help you improve your implementation.
8. Improve your prototype using the user research, and start moving towards a complete implementation.

## Summary

This page has provided a summary of common user-centered design practices. By this point, you won't be a UCD expert, but you should have an idea of what it involves, why it is important, and what UCD techniques you can use to improve your work even at this stage.

{{PreviousMenuNext("Learn_web_development/Core/Design_for_developers/Basic_design_theory", "Learn_web_development/Core/Design_for_developers/Interface_designs", "Learn_web_development/Core/Design_for_developers")}}
