import { v4 as uuidv4 } from "uuid";

export const defaultTask = {
  Mon: [
    {
      id: uuidv4(),
      author: "Zac",
      content: [{ id: uuidv4(), question: "Status", answer: "Coding 💻" }],
    },
  ],
  Tue: [
    {
      id: uuidv4(),
      author: "Eric",
      content: [{ id: uuidv4(), question: "Status", answer: "Designing 🎨" }],
    },
  ],
  Wed: [
    {
      id: uuidv4(),
      author: "Tim",
      content: [
        { id: uuidv4(), question: "Status", answer: "Trouble Maker 💢" },
      ],
    },
  ],
  Thu: [],
  Fri: [],
};

// export const defaultTask = {
//   Mon: [],
//   Tue: [],
//   Wed: [],
//   Thu: [],
//   Fri: [],
// };
