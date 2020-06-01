# RU-2020-10-SJL

## Notə Takər
This website takes notes, logs it to the page, and deletes the notes asynchronously 

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Developments](#developments)
* [Notes](#notes)

## Installation 
* Pull from the repo 
```
npm install
``` 
* required npms: express, fs, path 

## Usage 
My screenshots have dark background only because I have forced dark mode on Chrome browser. Otherws will have white background 

1. Run the server in the terminal 
``` 
node server.js
``` 
2. Go to your browser (preferrably Chrome)

![notetaker-01](/notetaker-01.PNG)

3. Press "Get Started" button 

![notetaker-02](/notetaker-02.PNG)

4. Enter title and text of your note 

![notetaker-03](/notetaker-03.PNG)

5. On top right, click the save icon 

The note should have been added on the left column of the page 

![notetaker-04](/notetaker-04.PNG)

6. Press delete button to delete 

![notetaker-05](/notetaker-05.PNG)

7. To view all notes in JSON format, manually type 

``` 
http://localhost:555/api/notes
``` 

![notetaker-06](/notetaker-06.PNG)

## License 

Still don't know how to add a license. 

## Developments 

This app is complete. I have met all the criteria with driest code I can write. 

## Notes 

I struggled a lot for the dry code. 
There were two directions I could have taken: 
1. read, write, delete directly to the server, directly to /api/notes
2. read, write, delete to db.json file, then read the json file to each request. This method uses fs and its readFile, writeFile, and perhaps appendFile functions. 

I took #1. 

Delete button problem: 
Making a delete request for the first time was troublesome. 
* I realized that get, post, delete functions in express simply receives the method from front end and matches it with the backend. In theory, if i have a request called "beautiful", then I can have app.beautiful. Express just doesn't have "beautiful" built in. 
* I found multiple ways to delete an array
1. delete keyword: it leaves a "null" in the place where it was deleted
2. Array.filter(FUNCTION): add the code block that excludes the desired element(s) 
3. Array.splice(initialObj, Number of itesm to delete): splices the array and returns other itesm untouched. 

I took #3. 
