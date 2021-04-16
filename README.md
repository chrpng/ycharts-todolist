# Todo List

**HTML/CSS/Vanilla JS**

## Requirements

Browser (tested on Chrome and Firefox)
VSCode
Live Server (Visual Studio Marketplace): https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

OR

Browser (tested on Chrome and Firefox)
Python 3.6 or later

## Considerations

I used a combination of IIFEs and classes. I used IIFEs to emulate privacy/encapsulation, and I used classes for readability and where I felt privacy was unneeded due to higher order factory functions/IIFEs already providing it.

## Setup

**Linux/MacOS**

Navigate to the directory where this is stored, and run `python3 -m http.server` in terminal
By default, view at http://localhost:8000/

**Windows**

Navigate to the directory where this is stored, and run `python.exe -m http.server` in terminal
By default, view at http://localhost:8000/

**With VSCode**

Open the project folder in VSCode
Open index.html
Right click and select `Open with Live Server`, or click `Go Live` in the bottom right

## Files
.
├── helpers
│   ├── eventHandlers.js
│   ├── render.js
│   └── TodoListModule.js
├── reset.css
├── index.css
├── index.html
├── index.js
└── README.md

## Credits

Chris Png