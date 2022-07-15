---
title: "Virtual Reality App"
tag: "web"
thumbnail: "home-vr"
highlight: 'false'
stack: ["Unity", "C#", "OPEN XR",]
info: {
Date: ["2022"],    
Type: ["Private Project -> Bachelor Thesis"],
HMD: ["Oculus Rift", "Oculus Quest 2", "Valve Index"],
}
link: 

links: {
    Showcase: ["https://youtu.be/-SkZ3tUML_s"],
}

---

# Home Gallery VR

<tech-stack :stack="stack"></tech-stack>

<team :info="info" :links="links"></team>

<br /> <br />

<image-loader height="large_wide" image="dev/home-vr/title"></image-loader>

## Introduction

Home Gallery VR is a virtual reality application for photographers and artists. The creators can view their images in unprecedented size and perspective. Nowadays, we are consuming images extremely quickly on social media and other creator platforms. So fast, that we often don't understand how much passion, creativity and energy someone has put into a project. With this application, I want to return the focus and value to the individual artwork. <br /> <br />

## Scenery

<image-loader height="small_wide" image="dev/home-vr/view"></image-loader>

## Getting Started

The best way to get to know the essential features is to follow the introductory tutorial.
You can watch that at any time via the settings. <br /> <br />

#### Set-Manager

In the gallery, there are 20 ready-made frames to place pictures. You can create your own framesets for several themes or categories. These can be easily created, loaded and deleted. Click on any frame to open the file browser and open the Set-Manager. You should first create a new set to save your pictures in! <br /> <br />

<image-loader height="medium_wide" image="dev/home-vr/set-manager"></image-loader>

#### Image-Manager

You are ready to populate your gallery! To do this, simply click on any frame to open the file browser. Select an image, adjust the size and click save.
<br /> <br />

<image-loader height="medium_wide" image="dev/home-vr/image-manager"></image-loader>

#### View 360

As a special feature, there is a walk-in globe to view 360-degree images.
To do this, simply click on the globe and select an image.
I took this example image with my cell phone camera.<br /> <br />

<image-loader height="medium_wide" image="dev/home-vr/globe"></image-loader>

## Review <br />

As a private project, Home Gallery VR is the only application that I am continuously developing.
When I started back then, I didn't have any programming skills at all. Especially not in the development of an embedded browser. I have acquired a lot of knowledge and experience through my studies and that helps me to advance this project. Of course, this app still has weaknesses in terms of design and interface. First of all, it was important for me to develop and test the technical features. In the future, I will focus more on design and user experience.
<br />

## Bachelor Study <br />

At its core, the app can load media from a local directory and save the file paths in a JSON file. Unfortunately, this method runs synchronously and blocks the Unity main thread during the loading process. I would like to devote myself to this and other challenges of the app in my bachelor thesis. The focus is on asynchronous processes and an online system in which galleries can be exchanged and visited. The tech stack will change accordingly.
 <br /> <br />

The future of Home Gallery VR will be great!

<br /> <br />

[Watch the showcase](#top)
