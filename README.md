# Portfolio Template

## Features

➡ Modern UI 

➡ Animations 

➡ Fully Responsive 

➡ Dark Mode 

# Getting Started

### Prerequisites

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.\

```
node@v14.17.0 or higher
npm@6.14.13 or higher
git@2.31.1 or higher
```

You can also use yarn

# How To Use

From your command line, first clone the Project:

```bash
# Clone this repository
$ git clone https://github.com/codebyvik/Portfolio.git

# Go into the repository
$ cd Portfolio

# Remove current origin repository
$ git remote remove origin
```

Then you can install the dependencies either using NPM or Yarn:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```

Once your server has started, go to this url `http://localhost:3000/` and you will see the website running on a Development Server:

# Template Instructions:

### Change title

➡ Navigate to public/index.html \

```html
<title>Portfolio Project</title>
```

### Change Icon

➡ Copy the icon in public/ folder \
➡ change the href attribute to your icon \
OR

➡ Save your svg as icon.svg and replace the default one \

```html
<link rel="icon" href="./icon.svg" type="image/x-icon" />
```

# Home Page / Welcome section

directory :- src/Pages/Welcome.jsx

### change info

Change the text and insert your name inside <span></span> . \

```js
<motion.h1 variants={fadeLeftAnim}>
  Hey, I am <span>Tony Stark</span>, <br /> a Full stack developer
</motion.h1>
```

# About

### change picture

➡ rename your pic to Pic1.jpg and replace Pic1 in /src/assets/ . \
 \
**NOTE**: if the image extension is any other then jpg then change the extension in src/Pages/About.jsx

```js
import Pic1 from "../assets/Pic1.jpg";
```

### About me info

➡ write about yourself between <motion.p></motion.p> tags.

```js
<motion.p variants={fadeRightAnim}>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores odio, ipsum
  quo, dolore enim dolorem similique laboriosam laudantium tempora saepe, iusto
  vitae earum dicta aspernatur ex reiciendis nemo cum! Ipsum. Lorem ipsum, dolor
  sit amet consectetur adipisicing elit. Excepturi architecto numquam illum ea
  voluptas quod recusandae dolor tempora, consequatur voluptatem!
</motion.p>
```

# Projects

Project Details are stored in src/components/ProjectData.js

### sample

```js
export const ProjectData = () => {
  return [
    {
      id: 1,
      title: "Project 1",
      DisplayImage: Project0,
      Description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          odio, ipsum quo, dolore enim dolorem similique laboriosam laudantium
          tempora saepe, iusto vitae earum dicta aspernatur ex reiciendis nemo
          cum! Ipsum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Excepturi architecto numquam illum ea voluptas quod recusandae dolor
          tempora, consequatur voluptatem!`,
      screenshots: [Sc1, Sc2, Sc3],
      githubLink: "#",
      LiveUrl: "#",
    },
  ];
};
```

### change details

➡ delete Project0,Project1,Project2 from src/assets/ . \
➡ place your image into assets folder \
➡ import the image into ProjectData.js \
➡ change DisplayImage to your image \

```js
 DisplayImage: YourImportedPic,
```

➡ Change id , title , Description \
➡ import screenshots of projects and place inside screenshots array \
**NOTE**: dont change array into object \
➡ paste your github link and live url \

### Add more projects

Add more objects inside ProjectData

```js
 {
      id: 1,
      title: "Project 1",
      DisplayImage: Project0,
      Description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          odio, ipsum quo, dolore enim dolorem similique laboriosam laudantium
          tempora saepe, iusto vitae earum dicta aspernatur ex reiciendis nemo
          cum! Ipsum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Excepturi architecto numquam illum ea voluptas quod recusandae dolor
          tempora, consequatur voluptatem!`,
      screenshots: [Sc1, Sc2, Sc3],
      githubLink: "#",
      LiveUrl: "#",
    },
```

# Contact

This is a dummy contact form . \
you can make it work using libraries like [Nodemailer](https://nodemailer.com/about/);

# Footer Section

➡ Put your social media link on each `<a>` links. \
➡ If you have more social-media accounts, see [Font Awesome Icons](https://fontawesome.com/v5.15/icons) to put the corresponding additional social icon \
➡ You can delete or add as many `a` links your want. \

```js
<Icons>
  <a href="#">
    <i class="fab fa-github"></i>
  </a>
  <a href="#">
    <i class="fab fa-facebook"></i>
  </a>
  <a href="#">
    <i class="fab fa-instagram"></i>
  </a>
  <a href="#">
    <i class="fab fa-youtube"></i>
  </a>
  <a href="#">
    <i class="fab fa-linkedin-in"></i>
  </a>
  <a href="#">
    <i class="fab fa-twitter-square"></i>
  </a>
</Icons>
```

## STYLES

Change the values of the below \

➡ mainColor is the Bondi Blue \
➡ secondaryColor is the Ebony Clay \
➡ darkbg is for darkmode \

```js
export const Colors = {
  mainColor: "#03b3b0",
  secondaryColor: "#272341",
  darkbg: "#222",
};
```

## Animations

Animation.js containes all animations \

To create own animation refer to [Framer Motion](https://www.framer.com/api/motion/)

## Technologies used

➡ [React](https://reactjs.org/) \
➡ [Styled Component](https://styled-components.com/docs) \
➡ [Framer Motion](https://www.framer.com/api/motion/) \
➡ [React intersection observer](https://github.com/researchgate/react-intersection-observer) \

## Authors

- **Vikas** - [https://github.com/codebyvik](https://github.com/codebyvik)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
