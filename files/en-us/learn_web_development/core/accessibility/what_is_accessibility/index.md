---
title: What is accessibility?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
page-type: learn-module-chapter
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

This article starts the module off with a good look at what accessibility is — this overview includes what groups of people we need to consider and why, what tools different people use to interact with the web, and how we can make accessibility part of our web development workflow.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>Familiarity with <a href="/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>The point of accessibility — increased access to digital services for those with additional needs, improved usability for everyone, better SEO, and a wider target audience.</li>
          <li>Awareness of the legal requirements of accessibility.</li>
          <li>That accessibility should be considered from the start of a project, and not bolted on at the end.</li>
          <li>Familiarity with the Web Content Accessibility Guidelines (WCAG) conformance criteria.</li>
          <li>Awareness of accessibility APIs and their purpose.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## So what is accessibility?

Accessibility is the practice of making your websites usable by as many people as possible. We traditionally think of this as being about people with disabilities, but the practice of making sites accessible also benefits other groups such as those using mobile devices, or those with slow network connections.

You might also think of accessibility as treating everyone the same, and giving them equal opportunities, no matter what their ability or circumstances. Just as it is wrong to exclude someone from a physical building because they are in a wheelchair (modern public buildings generally have wheelchair ramps or elevators), it is also not right to exclude someone from a website because they have a visual impairment. We are all different, but we are all human, and therefore have the same human rights.

Accessibility is the right thing to do. Providing accessible sites is part of the law in some countries, which can open up some significant markets that otherwise would not be able to use your services or buy your products.

Building accessible sites benefits everyone:

- Semantic HTML, which improves accessibility, also improves SEO, making your site more findable.
- Caring about accessibility demonstrates good ethics and morals, which improves your public image.
- Other good practices that improve accessibility also make your site more usable by other groups, such as mobile phone users or those on low network speed. In fact, everyone can benefit from many such improvements.
- Did we mention it is also the law in some places?

## What kinds of disability are we looking at?

People with disabilities are just as diverse as people without disabilities, and so are their disabilities. The key lesson here is to think beyond your own computer and how you use the web, and start learning about how others use it — _you are not your users_. The main types of disability to consider are explained below, along with any special tools they use to access web content (known as **assistive technologies**, or **ATs**).

> [!NOTE]
> The World Health Organization's [Disability and health](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) fact sheet states that "Over a billion people, about 15% of the world's population, have some form of disability", and "Between 110 million and 190 million adults have significant difficulties in functioning."

### People with visual impairments

People with visual impairments include people with blindness, low-level vision, and color blindness. Many people with visual impairments use screen magnifiers that are either physical magnifiers or software zoom capabilities. Most browsers and operating systems these days have zoom capabilities. Some users will rely on screen readers, which is software that reads digital text aloud. Some screen reader examples include:

- Paid commercial products, like [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows) and [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Free products, like [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome), and [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Software built into the operating system, like [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (on ChromeOS), and [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

It is a good idea to familiarize yourself with screen readers; you should also set up a screen reader and play around with it, to get an idea of how it works. See our [screen reader tutorials](/en-US/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) for more details on using them. The below video also provides a brief example of what the experience is like.

{{EmbedYouTube("IK97XMibEws")}}

In terms of statistics, the World Health Organization estimates that "285 million people are estimated to be visually impaired worldwide: 39 million are blind and 246 million have low vision." (see [Visual impairment and blindness](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). That's a large and significant population of users to just miss out on because your site isn't coded properly — almost the same size as the population of the United States of America.

### People with hearing impairments

[Deaf and hard-of-hearing (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) people have various levels of hearing loss ranging from mild to profound. Although some do use AT (see [Assistive Devices for People with Hearing, Voice, Speech, or Language Disorders](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), they are not widespread.

To provide access, textual alternatives must be provided. Videos should be manually captioned, and transcripts should be provided for audio content. Furthermore, due to high levels of [language deprivation](https://epicspecialeducationstaffing.com/language-deprivation/#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) in DHH populations, [text simplification should be considered](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Deaf and hard-of-hearing people also represent a significant userbase — "466 million people worldwide have disabling hearing loss", says the World Health Organization's [Deafness and hearing loss](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss) fact sheet.

### People with mobility impairments

These people have disabilities concerning movement, which might involve purely physical issues (such as loss of limb or paralysis), or neurological/genetic disorders that lead to weakness or loss of control in limbs. Some people might have difficulty making the exact hand movements required to use a mouse, while others might be more severely affected, perhaps being significantly paralyzed to the point where they need to use a [head pointer](https://www.performancehealth.com/adjustable-headpointer) to interact with computers.

This kind of disability can also be a result of old age, rather than any specific trauma or condition, and it could also result from hardware limitations — some users might not have a mouse.

The way this usually affects web development work is the requirement that controls be accessible by the keyboard — we'll discuss keyboard accessibility in later articles in the module, but it is a good idea to try out some websites using just the keyboard to see how you get on. Can you use the Tab key to move between the different controls of a web form, for example? You can find more details about keyboard controls in our [UI controls](/en-US/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls) section.

In terms of statistics, a significant number of people have mobility impairments. The US Centers for Disease Control and Prevention [Disability and Functioning (Non-institutionalized Adults 18 Years and Over)](https://www.cdc.gov/nchs/fastats/disability.htm) reports the USA "Percent of adults with any physical functioning difficulty: 16.1%".

### People with cognitive impairments

Cognitive impairment refers to a broad range of disabilities, from people with intellectual disabilities who have the most-limited capabilities, to all of us as we age and have difficulty thinking and remembering. The range includes people with mental illnesses, such as [depression](https://www.nimh.nih.gov/health/topics/depression) and [schizophrenia](https://www.nimh.nih.gov/health/topics/schizophrenia). It also includes people with learning disabilities, such as [dyslexia](https://www.ninds.nih.gov/health-information/disorders/learning-disabilities) and [attention deficit hyperactivity disorder](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Importantly, though there is a lot of diversity within clinical definitions of cognitive impairments, people with them experience a common set of functional problems. These include difficulty with understanding content, remembering how to complete tasks, and confusion caused by inconsistent webpage layouts.

A good foundation of accessibility for people with cognitive impairments includes:

- Delivering content in more than one way, such as by text-to-speech or by video.
- Easily understood content, such as text written using plain-language standards.
- Focusing attention on important content.
- Minimizing distractions, such as unnecessary content or advertisements.
- Consistent webpage layout and navigation.
- Familiar elements, such as underlined links blue when not visited and purple when visited.
- Dividing processes into logical, essential steps with progress indicators.
- Website authentication as easy as possible without compromising security.
- Making forms easy to complete, such as with clear error messages and simple error recovery.

### Notes

- Designing with [cognitive accessibility](/en-US/docs/Web/Accessibility/Cognitive_accessibility) will lead to good design practices. They will benefit everyone.
- Many people with cognitive impairments also have physical disabilities. Websites must conform to the W3C's [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/), including [cognitive accessibility guidelines](/en-US/docs/Web/Accessibility/Cognitive_accessibility#wcag_guidelines).
- The W3C's [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) produces web accessibility guidelines for people with cognitive impairments.
- WebAIM has a [Cognitive page](https://webaim.org/articles/cognitive/) of relevant information and resources.
- The United States Centers for Disease Control estimate that, as of 2018, 1 in 4 US citizens have a disability and, of them, [cognitive impairment is the most common for young people](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In the US, some intellectual disabilities have historically been referred to as "mental retardation." Many now consider this term disparaging, so its use should be avoided.
- In the UK, some intellectual disabilities are referred to as "learning disabilities" or "learning difficulties".

## Implementing accessibility into your project

A common accessibility myth is that accessibility is an expensive "added extra" to implement on a project. This myth actually _can_ be true if either:

- You are trying to "retrofit" accessibility onto an existing website that has significant accessibility issues.
- You have only started to consider accessibility and uncovered related issues in the late stages of a project.

If however, you consider accessibility from the start of a project, the cost of making most content accessible should be fairly minimal.

When planning your project, factor accessibility testing into your testing regime, just like testing for any other important target audience segment (e.g., target desktop or mobile browsers). Test early and often, ideally running automated tests to pick up on programmatically detectable missing features (such as missing image [alternative text](/en-US/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) or bad link text — see [Meaningful text labels](/en-US/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels)) and doing some testing with disabled user groups to see how well more complex site features work for them. For example:

- Is my date picker widget usable by people using screen readers?
- If content updates dynamically, do visually impaired people know about it?
- Are my UI buttons accessible to both keyboard and touch interface users?

You can and should keep a note of potential problem areas in your content that will need work to make it accessible, make sure it is tested thoroughly, and think about solutions/alternatives. Text content (as you'll see in the next article) is easy, but what about your multimedia content, and your whizzy 3D graphics? You should look at your project budget and think about what solutions you have available to make such content accessible. Having all your multimedia content transcribed is one option which, while expensive, is possible.

Also, be realistic. "100% accessibility" is an unobtainable ideal — you will always come across some kind of edge case that results in a certain user finding certain content difficult to use — but you should do as much as you can. If you are planning to include a whizzy 3D pie chart graphic made using WebGL, you might want to include a data table as an accessible alternative representation of the data. Or, you might want to just include the table and get rid of the 3D pie chart — the table is accessible by everyone, quicker to code, less CPU-intensive, and easier to maintain.

On the other hand, if you are working on a gallery website showing interesting 3D art, it would be unreasonable to expect every piece of art to be perfectly accessible to visually impaired people, given that it is an entirely visual medium.

To show that you care and have thought about accessibility, publish an accessibility statement on your site that details what your policy is toward accessibility, and what steps you have taken toward making the site accessible. If someone does notify you that your site has an accessibility problem, start a dialog with them, be empathetic, and take reasonable steps to try to fix the problem.

To summarize:

- Consider accessibility from the start of a project, and test early and often. Just like any other bug, an accessibility problem becomes more expensive to fix the later it is discovered.
- Bear in mind that a lot of accessibility best practices benefit everyone, not just users with disabilities. For example, lean semantic markup is not only good for screen readers, but it is also fast to load and performant. This benefits everyone, especially those on mobile devices and/or slow connections.
- Publish an accessibility statement on your site and engage with people having problems.

## Accessibility guidelines and the law

There are numerous checklists and sets of guidelines available for basing accessibility tests on, which might seem overwhelming at first glance. Our advice is to familiarize yourself with the basic areas in which you need to take care, as well as understanding the high-level structures of the guidelines that are most relevant to you.

- For a start, the W3C has published a large and very detailed document that includes very precise, technology-agnostic criteria for accessibility conformance. These are called the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG), and they are not a short read by any means. The criteria are split up into four main categories, which specify how implementations can be made perceivable, operable, understandable, and robust. The best place to get a light introduction and start learning is [WCAG at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). There is no need to learn all of the WCAG criteria — be aware of the major areas of concern, and use a variety of techniques and tools to highlight any areas that don't conform to the WCAG criteria (see below for more).
- Your country may also have specific legislation governing the need for websites serving their population to be accessible — for example [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in the EU, [Section 508 of the Rehabilitation Act](https://www.section508.gov/training/) in the US, [Federal Ordinance on Barrier-Free Information Technology](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Germany, the [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) in the UK, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italy, the [Disability Discrimination Act](https://humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes-ver) in Australia, etc. The W3C keeps a list of [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/) by country.

So while the WCAG is a set of guidelines, your country will probably have laws governing web accessibility, or at least the accessibility of services available to the public (which could include websites, television, physical spaces, etc.) It is a good idea to find out what your laws are. If you make no effort to check that your content is accessible, you could be legally liable if people complain.

This sounds serious, but really you just need to consider accessibility as the main priority of your web development practices, as outlined above. If in doubt, get advice from a qualified lawyer. We're not going to offer any more advice than this, because we're not lawyers.

## Accessibility APIs

Web browsers make use of special **accessibility APIs** (provided by the underlying operating system) that expose information useful for assistive technologies (ATs) — ATs mostly tend to make use of semantic information, so this information doesn't include things like styling information, or JavaScript. This information is structured in a tree of information called the **accessibility tree**.

Different operating systems have different accessibility APIs available:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

Where the native semantic information provided by the HTML elements in your web apps falls down, you can supplement it with features from the [WAI-ARIA specification](https://www.w3.org/TR/wai-aria/), which add semantic information to the accessibility tree to improve accessibility. You can learn a lot more about WAI-ARIA in our [WAI-ARIA basics](/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) article.

## Summary

This article should have given you a useful high-level overview of accessibility, shown you why it's important, and looked at how you can fit it into your workflow. You should now also have a thirst to learn about the implementation details that can make sites accessible, and what tools can help. We'll look at accessibility tooling in the next article.

## See also

- [WCAG](/en-US/docs/Web/Accessibility/Understanding_WCAG)

  - [Perceivable](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  - [Operable](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable)
  - [Understandable](/en-US/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  - [Robust](/en-US/docs/Web/Accessibility/Understanding_WCAG/Robust)

- [Google Chrome released an auto-captioning extension](https://blog.google/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
