---
layout: ../layouts/CVLayout.astro
title: "Curriculum vitae"
---

> TL;DR You're viewing my expanded curriculum vitae / résumé. If you're looking for a summative CV in PDF form, click <a href="/cv.pdf" target="_blank">here</a>.

## Table of contents

---

## Bio

Kurt Medley is a Computer Science graduate and a full-stack engineer with over 10 years of industry experience. He has exceptional analytical skills and excels at solving complex problems using a combination of industry-standard and innovative technologies. As the lead on numerous high-profile projects for major retail corporations, Kurt ensures the delivery of optimized, resilient, and thoroughly tested software.

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

I would like to share some industry achievements that I am proud of.

### I introduced Vite, Vitest, and Vue 3 at REI

When Vue 2 was announced as end-of-life (EOL), our development platform was not equipped to upgrade to Vue 3. Initially, we tried to update the individual dependencies of our custom tools, but we faced numerous technical challenges. I created a proof of concept that replaced our existing tools with Vite and Vitest. Additionally, I updated our back-end library to integrate Vite-compiled assets and rewrote our server-rendering solution for Vue to support Vue 3. This new approach was adopted by all product engineering teams at REI. You can read the complete story [here](/posts/unleashing-the-power-of-vite-and-vitest-at-rei/).

### I revamped the REI Adventures website using Vue

When I joined REI, my team and I rewrote the REI Adventures property using Vue. We eliminated several overlapping frameworks, transferred functional requirements from legacy code, and created new user journeys.

### I introduced TypeScript to the Front-End Development community at REI

After attending VueConf 2023, I became convinced that our front-end ecosystem would greatly benefit from migrating to TypeScript. We aimed to enhance application resilience and improve developer productivity through strict typing. After discussing this with our larger front-end community, our team began the transition to TypeScript. We converted our standard microsite and tools to TypeScript. With a validated functional example, we created documentation and guided the adoption of TypeScript at REI.

### I rewrote the analytics library for REI using TypeScript

After adopting TypeScript, I rewrote a legacy implementation of REI's analytics library using Vite and Vitest. This involved carefully analyzing a substantial amount of code that I didn't fully understand, and making informed decisions about creating a cohesive type interface. The introduction of TypeScript revealed underlying implementation issues that can now be addressed and corrected.

### Standardized the process of scaffolding NPM packages at REI

I streamlined the process for creating new utility libraries, Vue components, and microsites by introducing an [NPM initializer](http://github.com/rei/create-package). This CLI tool provides a series of prompts that guide users through generating a new directory containing pre-defined code templates. These templates help developers avoid the tedious tasks of setting up build tools, managing package dependencies, and configuring CI/CD in GitLab. This tool is now the official method for creating new JavaScript and TypeScript-based code at REI.

### I developed middleware to enable server-side rendering of Vue applications at REI

I developed an Express.js implementation using TypeScript that is responsible for server-rendering Vue applications within REI's stack. This dockerized server operates alongside the main microsite, managing HTTP requests to render server bundles. It then sends the resulting HTML back to the primary microsite, where it is injected into our base templates.

### I implemented modern front-end build tools at Costco

To modernize the entire Costco eCommerce front end, I proposed using Webpack and other technologies. This initiative enabled the delivery of modern compiled assets to customers and enhanced developer productivity.

---

## Industry experience

### Senior Software Engineer specializing in Front-end Platforms and Integrations at REI

Hybrid | April 2020 - Present

As a front-end platform engineer, I play a key role in developing various applications, libraries, build-tool plugins, and configurations used by all product engineering teams at REI. Our team focuses on researching and developing front-end patterns and evaluating technologies eventually adopted by the entire REI product engineering community.

In addition to this, we:

- Provide troubleshooting support to teams facing runtime or setup issues.
- Address security vulnerabilities within our front-end ecosystem.
- Integrate vendor solutions.
- Analyze our properties for optimal performance.
- Monitor emerging technologies and industry trends.
- Offer end-to-end technology direction and guidance.
- Collaborate closely with other enablement teams, including Design Systems, Platform Engineering, Web Performance, SEO, and Accessibility.
- Contribute to Cedar, REI's design system.

### Senior Software Engineer specializing in Front-end Development at REI Adventures

Bellevue, WA | July 2019 - April 2020

I developed Vue applications and user interface components for REI's Adventures property. My team and I rewrote the REI Adventures platform using Vue and decommissioned overlapping frameworks. We followed a standard Software Development Life Cycle (SDLC), utilizing agile methodologies and ceremonies. I collaborated closely with UX designers, product and program managers, business analysts, and stakeholders. Additionally, I participated in rotating on-call responsibilities.

### Full-Stack Software Engineer III at Costco eCommerce

Issaquah, WA | July 2016 - July 2019

During my final position as a senior software engineer at Costco, I led several complex projects, including:

- Implementing SMS notifications for our less-than-truckload (LTL) carriers.
- Spearheading a site redesign that introduced React to Costco's technology stack.
- Integrating gas prices into the Costco warehouse locator.
- Developing a member validation service for customer profiles.

In addition to coding, I created timelines that aligned project requirements with stakeholder deadlines. I also managed teams of offshore contractors and provided mentorship to junior developers.

### Full-Stack Software Engineer II at Costco eCommerce

Issaquah, WA | July 2014 - July 2016

As my time at Costco progressed, I took on more significant leadership roles, with a particularly noteworthy project being our responsive design initiative. Collaborating with business analysts, UX designers, stakeholders, quality assurance (QA) experts, and on-site and off-site consultants, my team and I successfully delivered a modern, responsive website. We utilized contemporary build tools like Webpack, employed SCSS for styling, and implemented Mocha for testing. By applying industry-standard tools and best practices, we transformed the previously chaotic environment of disorganized code into a well-structured and efficient system.

### Full-Stack Software Engineer I at Costco eCommerce

Issaquah, WA | July 2013 - July 2014

After completing my internship, I was hired as a full-stack software engineer at Costco eCommerce. In this role, I collaborated with fellow engineers on various projects across the entire technology stack. I took on bi-weekly on-call responsibilities to address production issues, which involved working closely with our DevOps, Sterling OMS, and Networking teams. During this time, I:

- Developed a manual authentication service that allowed customers to manage their membership details.
- Integrated both internal and external web services.
- Conducted general maintenance on applications.

### Full-Stack Software Engineer Intern at Costco eCommerce

Issaquah, WA | April 2013 - July 2013

I began my software engineering career with an internship at Costco's headquarters in Issaquah, WA. During this internship, I was part of the Costco eCommerce team and managed the websites costco.com and costco.ca. I gained valuable experience working with Costco's extensive distributed architecture and became familiar with various IBM products, including WebSphere Commerce, DB2, and MQ.

---

## Industry projects

Here is a selection of notable projects drawn from my industry experience.

### Front-end

- REI Adventures
  - [Landing page](https://www.rei.com/adventures)
  - [Search page](https://www.rei.com/adventures/search/keyword?q=canada)
  - [Trip details page](https://www.rei.com/adventures/trips/weekend/canadian-rockies-hiking-camping.html)
  - [Resource page](https://www.rei.com/adventures/resources/faqs)

### Full-stack

- `@rei/ssr` is a Dockerized Express application that operates alongside Spring Boot to enable server-side rendering of Vue applications. All product engineering teams that utilize Vue as their UI framework use this tool.
- I developed a Spring Boot interceptor that makes HTTP requests to the `@rei/ssr` Express server.
- I created a custom Thymeleaf dialect within Spring Boot for the backend integration of Vite-compiled assets.
- Climber's Site serves as REI's internal archetypal microsite, providing a reference for all product engineering teams. [View a screen capture](/assets/img/screen-captures/climbers-site-screencapture.png).
- Packwood is an NPM package discovery tool designed for reporting. It originated as a hackathon project and has since become a key component of the developer platform ecosystem. [View a screen capture](/assets/img/screen-captures/packwood-screencapture.png).
- [Costco eCommerce](https://www.costco.com):
  - Checkout flow (Cart, Shipping, Billing, Review Order, Order Processing)
  - Warehouse Locator
  - Product Page
  - Customer Account and Profile

### Vite plugins, utilities, and configurations

- The package [@rei/create-package](http://www.github.com/rei/create-package) is the official NPM initializer for creating packages at REI.
- `@rei/vite-base-config` is the main configuration module for Vite and Vitest, and all product engineering teams at REI utilize it. It provides a foundational default configuration that meets our business requirements. This configuration is backed by unit tests, which ensure that our Vue applications are optimized and include the necessary polyfills according to our browser support matrix.
- `@rei/vite-plugin-alpine-uploader` is a Vite plugin that uploads assets compiled by Vite to Akamai NetStorage, our CDN. This enables teams to serve their bundled assets from the CDN, improving the speed and availability of these resources for customers.
- `@rei/vite-plugin-alpine-manifest-css` is a Vite plugin that adjusts the CSS properties of entries listed in the manifest created during Vite builds. It guarantees that the CSS chunk assets are injected in the proper order.
- `@rei/vite-plugin-alpine-stats` is a Vite plugin that analyzes a repository statically to generate code statistics. After compiling these statistics, they are sent to Grafana. [View a screen capture](/assets/img/screen-captures/alpine-stats-screencapture.png).

### CI/CD

- Developed GitLab CI/CD bash scripts for NPM modules that facilitate publishing NPM packages to REI's private NPM registry in Sonatype Nexus.
- Created `cov-stats,` a Node.js script that automatically sends unit test coverage results to the Grafana Front-End Unit Test Coverage board. This allows us to track project code coverage over time. The script is integrated into GitLab CI as a job that runs after a successful publication in REI's NPM registry.

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
