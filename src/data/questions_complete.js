const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "Which tag creates a paragraph?",
        options: ["<p>", "<h1>", "<text>", "<ul>"],
        answer: "<p>",
        tip: "It's a one letter tag only",
      },
      {
        question: "Which attribute adds a link to the 'a' tag?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },
      {
        question: "Unordered lists are tagged with:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Which attribute makes the input mandatory?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
      },
      {
        question: "The semantic tag indicated for footers is:",
        options: ["div", "main", "section", "footer"],
        answer: "footer",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Which rule changes the color of an element?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
      },
      {
        question: "To increase the font of an element we use:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
      },
      {
        question: "The position that leaves a fixed element is the:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "What is Vanilla JavaScript?",
        options: [
          "Pure javascript",
          "A JavaScript library",
          "A JavaScript framework",
          "A JavaScript compiler",
        ],
        answer: "Pure javascript",
      },
      {
        question: "With which statement do we declare a constant in JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Which of the following data types does not exist in JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Which of the following methods selects an element?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question:
          "Which of these properties gives the number of elements in an array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
    ],
  },
];

export default data;
