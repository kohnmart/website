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
repo: "https://github.com/MoritzKronberger/Snippets"
---

# Snippets

### Vue 3, SCSS, Express, Postgres SQL, Docker <br /> <br />

<team :members="members" :git="repo"></team>

<br /> <br />

Snippets is a small social media web-application for developers. The basis consists of the classic methods of creating, liking and commenting on posts. The special feature of the app is the type of post. The users share special, interesting and complex code snippets which are also highlighted in the corresponding language. The main page "Coding Feed" shows the feed of all posts. The posts can be sorted and filtered using a fault-tolerant search. Code support is usually offered on these platforms. Our intention was to create a platform that shows the code and its logic as a work of art. <br /> <br />

<image-loader height="overview_image_400" image="dev/snippets/title"></image-loader>

## Summary
#### Design

A technically flawless web-application was required in this study project. 
Accordingly, the general design has been kept simple. A special design effort
was invested in the code highlighting with Prism.js.<br /> <br />
#### Get started <br />
Registration is required for posting and interacting. The authentication pages can be accessed 
from the start page via "Login". An input validation was developed for the entire app with corresponding error messages. <br />

<image-loader height="overview_image_460" image="dev/snippets/login"></image-loader>

#### Create a Post!  <br />
The Post Form consists of the areas language, title, code and category. The category can be thought of as a tag 
to search for specific posts. The post itself can be removed at any time.  <br /> 


<image-loader height="overview_image_400" image="dev/snippets/first"></image-loader>

#### Adjust the Profile <br />
As an additional feature, users can subsequently change their username and password.
 <br />  <br />

<image-loader height="overview_image_400" image="dev/snippets/profile"></image-loader>


 ## Review <br />
This project was carried out in a group of three and should be understood as a prototype. The development time was about two months. In addition to the web application, the focus was also on the use of version management (GitLab) with various branches. All participants were able to fully fulfill their intended area of responsibility.
 <br />  <br />
 
 #### Outlook <br />
Expansion options are conceivable for each feature. Accounts could take on various useful roles (admins). It would also be nice if you could follow other users. Each user should have their own feed in their profile. Assuming that there will be thousands of posts in the database at some point, the main feed should load them in batches. The individual post should also be editable at a later date. Most important, revised the SCSS haha!
 <br />  <br />


 Download the complete documentation:
 <pdf-loader doc="docs/Snippets.pdf"></pdf-loader>