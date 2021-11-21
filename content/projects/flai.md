---
title: "Web App / Machine Learning"
tag: "science"
thumbnail: "flai"
members: {
Date: "October 2021 - January 2022",
Type: "European Semester Project",         
Role: "Neural Network, dataset creation, database, backend",
Team: "Stefanie Jany, Lea Jell, Eva Kunzmann, Anja Krendlinger, Martin Kohnle, Moritz Kronberger,
        Kieu Pham",
}
---

# Learn Sign Language

### Vue / Express / PostgreSQL / Keras / Tensorflow <br /> <br />

<team :members="members"></team>

<br /> <br />

<image-loader height="large_wide" image="science/flai"></image-loader>

## Intro

We are developing a web application in which users can learn the basics of German Sign Language. <br />
A key feature is camera interaction. The gestures are evaluated by the neural network and returned as visual feedback.

## Creating the dataset

We decided to create our own data set. The advantage is that every team member records the signs and learns them at the same time. We will need around 1000 training images per letter. We wrote a small Python application for this purpose, which consists of the sub-areas recording, checking and conversion. First, the images are recorded via the webcam or front camera. A folder is automatically created in a certain file directory for each letter. The user can easily manage the respective target folder using the keys [A-Y, without J, Z]. After the recording, the images can be compared with reference gestures. The training image can be then either saved or deleted. Finally, the images are converted into a CSV format and can be added to the data set.
