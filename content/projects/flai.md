---
title: "Machine Learning"
tag: "science"
thumbnail: "flai"
highlight: "true"
stack: ["Vue.js + TypesScript", "Express.js", "PostgreSQL", "Docker", "Keras", "Tensorflow"]


info: {
Date: ["October 2021 - February 2022"],
Type: ["European Project Semester"],
Team: ["Stefanie Jany", "Lea Jell", "Eva Kunzmann", "Anja Krendlinger", "Martin Kohnle", "Moritz Kronberger","Kieu Pham"],  
Role: ["Neural Network", "Dataset Creation", "REST API", "Frontend", "Code Review"],
}

links: {
    Code: ["https://github.com/kohnmart/FLAI"],
    Documentation: ["https://sichtraum.hs-augsburg.de/2021/flai"],
    Showcase: ["https://vimeo.com/670362463?embedded=true&source=vimeo_logo&owner=29836091"],
    Kaggle: ["https://www.kaggle.com/moritzkronberger/german-sign-language"]
}
---

# Learn Sign Language

<tech-stack :stack="stack"></tech-stack>

<team :info="info" :links="links"></team>

<br /> <br />

<image-loader height="large_wide" image="science/flai/slider"></image-loader>

## Intro

The FLAI web application supports sign language beginners with live feedback, confidently detects finger language and adapts to the individual learning rhythm of its users.
From the design of the neural network to the choice of typography: Freedom from barriers and discrimination are the basic ideas that determine the creation of the prototype from the very beginning. For a respectful use of sign language as a central part of the culture of the deaf, it was important to keep entry hurdles as low as possible.


#### Learning Model

A new language is often associated with an inhibition threshold. Live feedback encourages you to overcome this inhibition threshold. Through visual feedback, FLAI helps beginners to learn signs correctly from the start and report them confidently.

In addition, the feedback function makes it possible to set up spelling exercises according to the “index card principle”: Letters that the user knows well, are asked less frequently than those that require more practice. In this way, the tasks adapt to his*her individual learning progress.

<image-loader height="medium_wide" image="science/flai/frames"></image-loader>

#### Design

The major design challenge was to bring aesthetics and accessibility together. The focus was on finding a color scheme with which all design elements can be optimized for people with color vision impairment.

<image-loader height="medium_wide" image="science/flai/design"></image-loader>

#### Technology

An important goal during development was to give as many people as possible unrestricted access to FLAI. The combination of pre-processing of the camera image and gesture recognition by FLAI's own neural network makes the live feedback robust against environmental influences such as background or lighting conditions.

<br />

This is not just limited to use: interested developers should also be able to view and further develop the project. That is why the data set and source code are open source.