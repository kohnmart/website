---
title: "Machine Learning"
tag: "science"
thumbnail: "flai"
stack: ["Vue.js", "Express", "PostgreSQL", "Keras", "Tensorflow"]


info: {
        Date: ["October 2021 - January 2022"],
Type: ["European Semester Project"],
Role: ["Neural Network", "Backend", "Dataset", "Database"],
Team: ["Stefanie Jany", "Lea Jell", "Eva Kunzmann", "Anja Krendlinger", "Martin Kohnle", "Moritz Kronberger","Kieu Pham"],      
   


}
---

# Learn Sign Language

<tech-stack :stack="stack"></tech-stack>

<team :info="info"></team>

<br /> <br />

<image-loader height="large_wide" image="science/flai/flai_titel"></image-loader>

## Intro

We are developing a web application in which users can learn the basics of German Sign Language. <br /> A key feature is camera interaction. The gestures are evaluated by the neural network and returned as visual feedback.

## Dataset

We decided to create our own dataset. The advantage is, that every team member learns the sign language through the process and we have certainty about the quality and correctness of the dataset.

#### Python Setup

Every member records the signs with a webcam and labels them. We made a python script to link these processes together.

#### Handpose

In the final conversion process, we fetch the images and load them into the [handpose](https://google.github.io/mediapipe/solutions/hands.html) neural net. This pre-trained convolutional network extracts 20 landmark vectors of a hand. These vectors will be saved in a CSV file with the corresponding labels.

#### Training

Handpose is very beneficial, since with just have to train the linearized vectors on the actual sign language model.

#### Prototype

We developed a small python prototype to prove our concept and to test the model.
The current dataset consists of 5300 images and 24 labels 'a - y' without 'j' and 'z'. The signs
'j' and 'z' are gesture movements and would require a recurrent neural net. We´re considering
implementing this in a later update.

#### Evaluation - 03.21.2021

Even if we have just around 220 images per letter, the net is doing great. For sure, we improve on this, but the early results are promising.

<image-loader height="medium_wide" image="science/flai/conf"></image-loader>
