function initializeDeck() {
  const images = [
    "Andre",
    "Anne",
    "Dennis",
    "Kamil",
    "Laura",
    "Karla",
    "Maicon",
    "Marijn",
    "Mariel",
    "Matias",
    "Sara",
    "Swen",
  ];
  const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const deck = [];

  images.forEach((image) => {
    ranks.forEach((rank) => {
      deck.push({ number: `${rank}`, image: `${image}` });
    });
  });

  return deck;

  //   console.log(deck);
}

module.exports = initializeDeck;
