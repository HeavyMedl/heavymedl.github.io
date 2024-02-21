---
layout: ../layouts/CVLayout.astro
title: "Curriculum vitae"
---

> TL;DR You're viewing my expanded curriculum vitae / résumé. If you're looking for a summative CV in PDF form, click here.

## Table of contents

---

## Bio

Kurt Medley is a Computer Science graduate, full-stack engineer, and industry professional with 10+ years of experience. Kurt possesses outstanding analytical abilities and is adept at solving complex problems through a blend of industry-standard and innovative technologies. With lead designation over many high-profile projects for major retail corporations, Kurt ensures the delivery of optimized, resilient, and well-tested software.

---

## [Education](/edu/)

### The Evergreen State College

#### B.Sc in Computer Science

Awarded: 2013

### South Puget Sound Community College

#### AA in Music Theory and Composition

Awarded: 2009

---

## Industry achievements

Here are some industry achievements that I am proud of.

### Brought Vite, Vitest, and Vue 3 to REI

TODO

- Mention work to SSR middleware

### Rewrote REI's Adventures property with Vue

TODO

### Introduced TypeScript to the FED community at REI

TODO

### Rewrote REI's analytics library with TypeScript

TODO

### Canonicalizing how NPM packages are scaffolded at REI

TODO

### Wrote the middleware to server-render Vue applications at REI

TODO

### Introduced modern front-end build tools at Costco

TODO

---

## Industry experience

### Senior Software Engineer | Front-end Platform @ REI

Hybrid | April 2020 - Present

As a front-end platform engineer, I contribute to a suite of applications, libraries, build-tool plugins, and configurations used by all product engineering teams at REI. Our team is responsible for the R&D of front-end patterns as well as vetting technologies that are ultimately adopted by all REI product engineering teams. While we're focused on front-end technology, the nature of our work necessitates collaboration with fellow platform engineering teams, development with Java and Node.js, interfacing with vendor instrumentations, and more.

Additionally, we:

- provide support in the form of troubleshooting to teams experiencing runtime or setup issues.
- mitigate security vulnerabilities in our front-end ecosystem.
- scrutinize our properties for optimal performance.
- track emerging technologies and trends in the industry.
- provide E2E technology direction and guidance.
- work closely with other enablement teams including Design Systems, Platform Engineering, Web Performance, SEO, and Accessibility.
- contribute to [Cedar](https://cedar.rei.com), REI's design system.

### Senior Software Engineer | Front-end @ REI Adventures

Bellevue, WA | July 2019 - April 2020

On a product engineering team that delivered Vue applications and UI components for REI's Adventures property. My team and I rewrote the REI Adventures property with Vue and decommissioned overlapping frameworks. We followed a standard SDLC using agile methodologies and ceremonies. I interfaced with UX designers, product and program managers, business analysts, and business stakeholders. I had rotating on-call responsibilities.

### Software Engineer III | Full-stack @ Costco eCommerce

Issaquah, WA | July 2016 - July 2019

During my concluding position as a senior software engineer at Costco, I took charge of several intricate projects, which included:

- implementing SMS notifications for our LTL (less-than-truckload) carriers.
- spearheading another site redesign, introducing React to Costco's technology stack.
- integrating gas prices into the Costco warehouse locator.
- implementing a member validation service for customer profiles.

Beyond coding, I developed timelines that harmonized project requirements with stakeholder deadlines. I also led teams of off-shore contractors and provided mentorship to junior developers.

### Software Engineer II | Full-stack @ Costco eCommerce

Issaquah, WA | July 2014 - July 2016

As my time at Costco progressed, I took on more substantial leadership roles, with a notable project being our responsive design initiative. Collaborating with business analysts, UX designers, stakeholders, QA, and both on-site and off-site consultants, my team and I successfully delivered a contemporary, responsive website. We employed then-state-of-the-art build tools such as Webpack, utilized SCSS for styling, and implemented Mocha for testing. Through the application of industry-standard tools and patterns, we transformed the chaotic landscape of spaghetti/cowboy code into a well-ordered and efficient system.

### Software Engineer I | Full-stack @ Costco eCommerce

Issaquah, WA | July 2013 - July 2014

After my internship, I was hired as a full-stack software engineer working for Costco eCommerce. I worked with fellow engineers on many projects spanning the entire stack. I was given a bi-weekly on-call responsibility to triage production issues which had me collaborating with our Dev Ops, Sterling OMS, and Networking teams. During this time I:

- built a manual authentication service that allowed customers to manage their membership details
- integrated internal and external web services
- performed general maintenance on applications

### Software Engineer Intern | Full-stack @ Costco eCommerce

Issaquah, WA | April 2013 - July 2013

Started my SW career with a software engineering internship at the Costco HQ in Issaquah, WA. I was embedded within the Costco eCommerce team responsible for delivering [costco.com](https://www.costco.com) and [costco.ca](https://www.costco.ca). I was introduced to Costco's large, distributed architecture and a suite of [un]customized IBM products including WebSphere Commerce, DB2, and MQ.

---

## Industry projects

The following is a subset of notable projects from my industry experience.

### Front-end

- REI Adventures
  - [Landing page](https://www.rei.com/adventures)
  - [Search page](https://www.rei.com/adventures/search/keyword?q=canada)
  - [Trip details page](https://www.rei.com/adventures/trips/weekend/canadian-rockies-hiking-camping.html)
  - [Resource page](https://www.rei.com/adventures/resources/faqs)

### Full-stack

- `@rei/ssr` is a dockerized Express application that runs alongside Spring Boot and facilitates server-rendering Vue applications. This is used by all product engineering teams using Vue as their UI framework.
- Wrote a Spring Boot interceptor that makes HTTP requests to the `@rei/ssr` Express server.
- Wrote a custom Thymeleaf dialect within Spring Boot for the back-end integration of Vite-compiled assets.
- Climber's Site is REI's internal archetypal microsite used as a reference for all product engineering teams. TODO: (View a screen capture.)
- Packwood is an NPM package discovery tool used for reporting. It began as a hackathon project but became a fixture in the developer platform ecosystem. TODO: (View a screen capture.)
- [Costco eCommerce](https://www.costco.com)
  - Checkout flow (Cart, Shipping, Billing, Review order, Order processing)
  - Warehouse Locator
  - Product page
  - Customer account and profile

### Vite plugins, utilities, and configurations

- [`@rei/create-package`](https://github.com/rei/create-package) is an NPM initializer and the officially supported way to create NPM packages at REI.
- `@rei/vite-base-config` is the primary Vite and Vitest configuration module consumed by all product engineering teams at REI. It offers a baseline set of configuration defaults aligned with business requirements. Supported by unit tests, this configuration guarantees our Vue applications are optimized and contain the polyfills required by our browser-support matrix.
- `@rei/vite-plugin-alpine-uploader` is a Vite plugin that facilitates uploading assets compiled by Vite to Akamai NetStorage, our CDN. This enables teams to source their bundled assets from the CDN, which improves the speed and availability of these assets for customers.
- `@rei/vite-plugin-alpine-manifest-css` is a Vite plugin that alters the CSS property of entries defined in the manifest generated by Vite builds. It ensures the correct injection order of CSS chunk assets.
- `@rei/vite-plugin-alpine-stats` is a Vite plugin that does static analysis of a repository to provide statistics on the code. Once these statistics are compiled, they are sent to Grafana. TODO: (see here)

### CI/CD

- Wrote the GitLab CI/CD bash scripts for NPM modules used to publish NPM packages to REI's private NPM registry in Sonatype Nexus.
- `cov-stats` is a Node.js script that automatically sends unit test coverage results to the Grafana Front-End-Unit-Test Coverage board so that we can track project code coverage over time. It is integrated into GitLab CI as a job executed after a successful publish to REI's NPM registry

<!--
Gas Prices Online

We created a REST service that sourced Costco warehouse gas prices from an Oracle DB and stored them in a cache layer to be exposed on various Costco properties including its warehouse locator pages and its mobile apps.

Site Redesign

Development lead for a project that saw many major flows throughout costco.com redesigned or reimagined entirely. Including but not limited to the checkout flow, product detail pages, and search. I worked closely with on and offshore developers on this project.

SEO Improvements

More of a biannual project, our team responded to third-party SEO audits in which we prioritized the most effective changes to SEO for the better, whether those be minor updates or major overhauls to parts of the application.

Member-only Purchase

Development lead for a feature enhancement that restricted costco.com users to those whose profiles were “validated”. Previously, Costco allowed non-member shopping with a 5% checkout surcharge. This project was meant to drive membership subscriptions for Costco. We directed unvalidated users through validation flows where they had the opportunity to link (validate), buy, or renew their membership with Costco. The validation process involved cross-checking user-supplied data with our Membership API.

SMS Notifications

Development lead for a feature enhancement to bring text notifications to the user for order status visibility. The first iteration of this project involved sending a new SMS phone element to our order management system (OMS) for transmission to our LTL (less-than-truckload) carriers. The second iteration involved introducing a profile-level number that is transmitted to the third-party Infobip via OMS. Order status updates in OMS trigger SMS notifications.

Responsive Redesign

Working closely with BAs, business stakeholders, and UX designers, we replaced Costco’s entire legacy web application with a modern responsive solution. We used Bootstrap as our responsive framework and supported 5 different device resolutions. We used technologies like Node, SCSS, Webpack for asset bundling, Mocha for unit testing, and Selenium for browser testing.

CRM and Manual Authentication

This was one of my first projects as a developer at Costco. I worked on the UI that allowed customers to manage their membership details on costco.com. Additionally, I enhanced a back-end system that would process new membership sign-ups at the warehouse and set the customer up with an online profile if one wasn’t already present.
-->
