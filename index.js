function writeCards(nameArray, celebration) {
  let thankYouCards = [];
  for(let name = 0, name < nameArray.length, name++) {
    thankYouCards.push(`Thank you, ${nameArray[name]}, for the wonderful ${celebration} gift!`);
  }
  return thankYouCards;
}
