---
title: "Social Media"
tag: "web"
thumbnail: "snippets"
members: {
Date: "May - July 2021", 
Type: "Study",
Team: "Lea Jell, Martin Kohnle, Moritz Kronberger",
My Role: "Vue, Vuex, Validation, Prism.js, SCSS",
}
link: "https://github.com/kohnmart/snippets"
file: "docs/Snippets.pdf"
---

# Snippets

### Vue 3, SCSS, Express, PostgreSQL, Docker, Figma <br /> <br />

<team :members="members" :link="link" :doc="file"></team>

<br /> <br />

<image-loader height="large_wide" image="dev/snippets/title"></image-loader>

## Introduction

Snippets is a small social media web application for developers. The basis consists of the classic methods of creating, liking and commenting on posts. The special feature of the app is the type of post. The users share unique, interesting and complex code snippets which are highlighted in the corresponding language. The index page shows the feed of all posts. The posts can be sorted and filtered using a fault-tolerant search. Code support is usually offered on these platforms. We intended to create a platform that shows the code and its logic as a work of art. Please refer to the documentation for detailed information.  <br /> <br />

#### Design

The main aim of this study work was to develop a technically flawless web application. We kept the SCSS design simple as it did not influence the grade and evaluation. We only paid special attention to syntax highlighting with prism.js. <br /> <br />

## Features

#### Get started

You should first log in or register from the start page. This is a requirement for posting and interacting. The authentication pages can be accessed
from the start page via "Login". It should also be mentioned that all input fields of the platform are linked to a self-developed validation.

<image-loader height="medium_portrait" image="dev/snippets/login"></image-loader>

#### Create a Post

Click on "Add Post" to submit a new post. There is a fixed structure for the creation. First, you choose one of the available languages. Then add a title and the code snippet. We made sure that line breaks in the code are retained. Optionally, you can add tags in the "category" to find the posts with the same tag via search.
The contribution can be deleted at any time. <br /> 
An example post can be seen below.

<image-loader height="medium_wide" image="dev/snippets/first"></image-loader>

#### Interaction<br />

You can now comment and like the created post. In addition, you can also like a certain statement. Highlighting the syntax of a comment should be included in a later update.

<image-loader height="medium_wide" image="dev/snippets/comment"></image-loader>

#### Adjust the Profile

Users can subsequently change their username and password.

<image-loader height="medium_wide" image="dev/snippets/profile"></image-loader>

## Review <br />

This project was carried out in a group of three and should be understood as a prototype. The development time was about two months. In addition to the web application, the focus was also on the use of version management (GitLab) with various branches. All participants were able to fulfill their intended area of responsibility.
<br /> <br />

#### Perspective <br />

Expansion options are conceivable for each feature. The most important ones should be listed here. Accounts could take on various useful roles like admins. Users have their personal feed on their profile and can follow others. Assuming that there will be thousands of posts in the database at some point, the main feed should load them in batches. The individual post should also be editable at a later date. In addition, the SCSS should also be revised.
 <br />  <br />

[Go to Documentation](#top)