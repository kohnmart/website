---
title: "spotify-party"
tag: "web"
thumbnail: "thumb.png"
---

## SpotifyParty

### Python / Django / Websocket / Spotify-API <br /> <br />

At parties with many guests, the music that one would like to hear is often not played. Who knows who is actually putting on the music? With SpotifyParty, everyone can easily have a say via the app. The host shares any playlist and guests can join using a code. Tracks from the playlist are displayed live within the session. The song with the most likes will then play next.
All those involved should also receive live feedback
the status of the voting as well as the playback progress
of the current song. <br /> <br />

#### Design

At parties, you need the app to be able to use it quickly and spontaneously. We have optimized the interface for smartphones and tablets.
In addition, the host should be able to start the session with just a few clicks and without prior knowledge. <br /> <br />


### Brief Summary <br /> <br />

#### Welcome to the Party!  <br />
At the start, the app offers two options. With the "Join" form, the user can take part in a session using a 6-digit random code. The session is searched for in the database accordingly. If there is no result, the user is directed to the start page. With "Create Party" the user becomes the host and starts his own session. A Spotify registration is necessary for this.  <br />  <br />

#### Settings <br />
After the successful Spotity registration (OAuth), the app queries the user playlists and the play-back status. Currently, you can only choose your own playlists. Every device that the user has connected to his account and is currently active can be used to play. In addition, the connection to the web socket is established at this point.<br />  <br />


<image-loader height="overview_image_400" image="dev/spotifyparty/first"></image-loader>

#### Start Session <br />
Before the host starts the session, he/she can send the code to the guests. They can join the waiting room before it begins.
 <br />  <br />

#### Live Session <br />
Each participant can now vote for the next song. The song with the most likes will then be played next and the likes will be reset. If the host leaves the session, all users are directed to the start page.
 <br />  <br />

<image-loader height="overview_image_400" image="dev/spotifyparty/second"></image-loader>

#### Review <br />
Having been on throughout development
the reference to the previously defined requirements
was respected, they were largely able to do so
implemented. The basic must criteria, as in 1.2. described,
are based on the current status of the application
completely fulfilled.
The wish criteria are also basically already
given, albeit optics and usability of
Application can still be optimized.
 <br />  <br />


 #### Outlook <br />
The application also offers a good basis
with regard to future expansion options.
Some of the currently hard-coded
Preferences such as B. the number of
tracks to be voted on or the running time
of the voting are available as configurable options
be asked.
Also, for example, would be the implementation
some features of the "competing" applications like
streaming playback to guest users for
socially distant celebrations or the possibility of
other songs outside the playlist to vote on
to propose conceivable. All possible extensions
however, should be critical of
the primary requirement for ease of use
and low entry barriers.
 <br />  <br />


 Download the complete documentation:
 <pdf-loader></pdf-loader>