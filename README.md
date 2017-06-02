# ask-me-anything

## Description

#### _**This site acts as a forum where people can ask questions and have them answered by the community at large.**_

#### _**By Tyler Stephenson, June 02, 2017**_

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd ask-me-anything`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Planning

1. Configuration/dependencies
  * Use firebase for the database.
  * Use Bootstrap for base styling.
  * Use ember-moment to create a timestamp when a question or answer is created.
  * Question model.
    * Author
    * Question
    * Notes
    * Created
    * Has many answers.
  * Answer model.
    * Author
    * Answer
    * Created
    * Belongs to question.
  * Question methods.
    * Save
    * Update
    * Delete
    * Find all questions
    * Find a given question
  * Answer methods.
    * Save
    * Update
    * Delete
    * Find all answers to a given question

2. Specs
  * Questions should include the content of the question itself, an author, and additional notes.
  * Answers should include the content of the answer and the author.
  * Include a header and/or navbar that appears on all pages. It should contain the name of your site and a link to the home page, and other content such as social media, LinkedIn, etc.
  * List all questions on the homepage, displaying only the question and the name of the author.
  * Allow users to click a question, to be routed to another page containing additional information and question details.
  * Allow users to add and edit questions.
  * Allow users to add answers to a question. Answers should be added and viewed on the same page as the question they respond to.

3. Integration
  * Template/html page for index/homepage.
    * Component/html tile for listing questions as links.
    * Component/html form for creating a question.
  * Template/html page for questions/dynamic.
    * Component/html tile for displaying answers.
    * Component/html tile for creating an answer.
    * Component/html form for answering the question.
    * Component/html form for updating the question.
    * Component/html form for updating the answer.    
  * Template/html page for about. ?future
  * Template/html page for contact. ?future

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor
  * Delete unused components/templates
  * Make README awesome

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Known Bugs
If you click on an update input field but do not enter any info it will erase the field when saved.

## Support and Contact details
* Tyler Stephenson
* ilduchea@gmail.com

### Technologies Used

* Ember
* Firebase
* HTML5
* CSS
* Bootstrap
* jQuery
* node.js

### License

*This is web page is licensed under the MIT License.*

Copyright (c) 2017 **Tyler Stephenson**
