const api = (amount, category) => {
  return `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=easy&type=multiple`;
};

export default api;
