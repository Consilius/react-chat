export type State = typeof initialState;
export const initialState = {
  people: [
    {
      id: "p1",
      name: "Richard Feynman",
    },
    {
      id: "p2",
      name: "Leonardo da Vinci",
    },
    {
      id: "p3",
      name: "Maria Curie",
    },
    {
      id: "p4",
      name: "Ewa Hauton",
    },
  ],
  favorites: [
    {
      id: "f1",
      name: "Richard Feynman",
    },
    {
      id: "f2",
      name: "Leonardo da Vinci",
    },
  ],
  conversations: [
    {
      id: "c1",
      participants: ["p1", "p2"],
    },
  ]
};

