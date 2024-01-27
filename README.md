## Overview of component structure:
* App -- responsible for rendering SongList, keeps and shares filter and songs states
* SongList -- responsible for rendering the header and the list (also does some filtering job)
    * PlayAll -- renders PlayAllButton, AddAllButton
        * PlayAllButton -- renders the Play All button
        * AddAllButton -- responsible for rendering add button, and also renders MusicUploadForm
            * MusicUploadForm -- responsible for adding new song to the song list
    * SearchFilter -- filters songs based on search, also sorts by track number
    * FormTable -- renders the table head
    * SongRow -- renders individual song, and also is responsible for playing the song, removing the song

## The State Management Approach:
Globally we have Songs context which shares the songs, a function to change the songs, and also the filtering part. In the other cases we have individual state for every functional component we have.

## How to run?
`npm i` <br />
`npm start`