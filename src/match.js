window.getMatch = () => {
  fetch('https://tipico-api.noenv.com/ajax/sports/all/42301', {method: 'get'})
    .then(_ => _.json())
    .then(_ => parseMatch(_))
    .then(_ => updateDom(_))
}

const parseMatch = data => {
  const match = {};
  match.odds = [];
  match.title = `${data[7][2]} — ${data[7][3]}`;
  match.date = `${data[7][4]} ${data[7][5]}`;
  match.odds.push(parseOdd(data, 0));
  match.odds.push(parseOdd(data, 1));
  match.odds.push(parseOdd(data, 2));
  return match;
}

const parseOdd = (data, i) => {
  const index = 2 + i;
  return {
    id: data[8][index][0],
    market: data[8][index][1],
    odd: data[8][index][2]
  };
}

const updateDom = match => {
  document.getElementById('title').innerHTML = match.title;
  document.getElementById('date').innerHTML = match.date;
  updateOdd(match, '#bet1', 0);
  updateOdd(match, '#betX', 1);
  updateOdd(match, '#bet2', 2);
}

const updateOdd = (match, selector, i) => {
  document.querySelector(`${selector}`).dataset.bet = match.odds[i].id;
  document.querySelector(`${selector} .market`).innerHTML = match.odds[i].market;
  document.querySelector(`${selector} .odd`).innerHTML = match.odds[i].odd;
}
