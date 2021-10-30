---
title: "Social Media"
tag: "web"
thumbnail: "snippets.jpg"
members: {
Date: "May - July 2021", 
Type: "Study",
Lea Jell: "Express, Vuex, Design",        
Martin Kohnle: "Vue, Vuex, Validation, Prism.js, Design",
Moritz Kronberger: "Postgres SQL, Docker, Design",
}
link: "https://www.youtube.com/watch?v=bUjEX9_8Q0c"
file: "docs/Snippets.pdf"
---

# Snippets

### Vue 3, SCSS, Express, Postgres SQL, Docker <br /> <br />

<team :members="members" :link="link" :doc="file"></team>

<br /> <br />

Snippets is a small social media web application for developers. The basis consists of the classic methods of creating, liking and commenting on posts. The special feature of the app is the type of post. The users share unique, interesting and complex code snippets which are highlighted in the corresponding language. The main page "Coding Feed" shows the feed of all posts. The posts can be sorted and filtered using a fault-tolerant search. Code support is usually offered on these platforms. Our intention was to create a platform that shows the code and its logic as a work of art. Please refer to the documentation for detailed information. <br /> <br />

<image-loader height="overview_image_wide" image="dev/snippets/title"></image-loader>

## Summary

#### Design

The main aim of this study work was to develop a flawless web application. We kept the SCSS design simple as it had no influence on the grade and evaluation. We only paid special attention to syntax highlighting with prism.js.<br /> <br />

#### Get started

You should first log in or register from the start page. This is a requirement for posting and interacting. The authentication pages can be accessed
from the start page via "Login". It should also be mentioned that all input fields of the platform are linked to a self-developed validation.

<image-loader height="overview_image_portrait" image="dev/snippets/login"></image-loader>

#### Create a Post

To create a post, click on "Add Post". There is a fixed structure for creation. First you choose one of the available languages. Then add a title and the code snippet. We made sure that line breaks in the code are retained. Optionally, you can add tags in "category" to find the post via search. 
The contribution can be deleted at any time. An example post can be seen below.

<image-loader height="overview_image_wide" image="dev/snippets/first"></image-loader>


#### Interaction<br />
You can now comment and like the created post. In addition, you can also like a certain comment. Of course, a comment can also consist of a code snippet. Comment highlighting should be included in a later update.
<image-loader height="overview_image_wide" image="dev/snippets/comment"></image-loader>



#### Adjust the Profile

Users can subsequently change their username and password.

<image-loader height="overview_image_wide" image="dev/snippets/profile"></image-loader>

## Review <br />

This project was carried out in a group of three and should be understood as a prototype. The development time was about two months. In addition to the web application, the focus was also on the use of version management (GitLab) with various branches. All participants were able to fulfill their intended area of responsibility.
<br /> <br />

#### Outlook <br />

Expansion options are conceivable for each feature.The most important ones should be listed here. Accounts could take on various useful roles (admins).  Users have their own feed on profile and can follow others. Assuming that there will be thousands of posts in the database at some point, the main feed should load them in batches. The individual post should also be editable at a later date. In addition, the SCSS should also be revised.
