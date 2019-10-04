const { keyBy } = require('lodash');

const TEAMS_RANKINGS = [
  {
    points: 903,
    place: 1,
    team: {
      name: 'Liquid',
      id: 5973,
    },
    change: 0,
    isNew: false,
  },
  {
    points: 709,
    place: 2,
    team: {
      name: 'Astralis',
      id: 6665,
    },
    change: 0,
    isNew: false,
  },
  {
    points: 472,
    place: 3,
    team: {
      name: 'NRG',
      id: 6673,
    },
    change: 0,
    isNew: false,
  },
  {
    points: 471,
    place: 4,
    team: {
      name: 'AVANGAR',
      id: 8120,
    },
    change: 2,
    isNew: false,
  },
  {
    points: 404,
    place: 5,
    team: {
      name: 'Vitality',
      id: 9565,
    },
    change: -1,
    isNew: false,
  },
  {
    points: 309,
    place: 6,
    team: {
      name: 'ENCE',
      id: 4869,
    },
    change: -1,
    isNew: false,
  },
  {
    points: 281,
    place: 7,
    team: {
      name: 'mousesports',
      id: 4494,
    },
    change: 1,
    isNew: false,
  },
  {
    points: 277,
    place: 8,
    team: {
      name: 'Renegades',
      id: 6211,
    },
    change: 3,
    isNew: false,
  },
  {
    points: 256,
    place: 9,
    team: {
      name: 'G2',
      id: 5995,
    },
    change: 0,
    isNew: false,
  },
  {
    points: 233,
    place: 10,
    team: {
      name: 'Natus Vincere',
      id: 4608,
    },
    change: -3,
    isNew: false,
  },
  {
    points: 221,
    place: 11,
    team: {
      name: 'FaZe',
      id: 6667,
    },
    change: -1,
    isNew: false,
  },
  {
    points: 203,
    place: 12,
    team: {
      name: 'forZe',
      id: 8135,
    },
    change: 8,
    isNew: false,
  },
  {
    points: 196,
    place: 13,
    team: {
      name: 'FURIA',
      id: 8297,
    },
    change: 1,
    isNew: false,
  },
  {
    points: 194,
    place: 14,
    team: {
      name: 'North',
      id: 7533,
    },
    change: -1,
    isNew: false,
  },
  {
    points: 183,
    place: 15,
    team: {
      name: 'NiP',
      id: 4411,
    },
    change: 1,
    isNew: false,
  },
  {
    points: 177,
    place: 16,
    team: {
      name: 'MIBR',
      id: 9215,
    },
    change: -1,
    isNew: false,
  },
  {
    points: 169,
    place: 17,
    team: {
      name: 'CR4ZY',
      id: 10150,
    },
    change: -5,
    isNew: false,
  },
  {
    points: 110,
    place: 18,
    team: {
      name: 'DreamEaters',
      id: 8305,
    },
    change: 1,
    isNew: false,
  },
  {
    points: 92,
    place: 19,
    team: {
      name: 'Heroic',
      id: 7175,
    },
    change: -2,
    isNew: false,
  },
  {
    points: 90,
    place: 20,
    team: {
      name: 'Grayhound',
      id: 8008,
    },
    change: -2,
    isNew: false,
  },
  {
    points: 80,
    place: 21,
    team: {
      name: 'OpTic',
      id: 6615,
    },
    change: 1,
    isNew: false,
  },
  {
    points: 77,
    place: 22,
    team: {
      name: 'BIG',
      id: 7532,
    },
    change: 2,
    isNew: false,
  },
  {
    points: 73,
    place: 23,
    team: {
      name: 'Tricked',
      id: 4602,
    },
    change: 2,
    isNew: false,
  },
  {
    points: 72,
    place: 24,
    team: {
      name: 'Syman',
      id: 8772,
    },
    change: -1,
    isNew: false,
  },
  {
    points: 56,
    place: 25,
    team: {
      name: 'Heretics',
      id: 8346,
    },
    change: 3,
    isNew: false,
  },
  {
    points: 52,
    place: 26,
    team: {
      name: 'GamerLegion',
      id: 9928,
    },
    change: 8,
    isNew: false,
  },
  {
    points: 51,
    place: 27,
    team: {
      name: 'TYLOO',
      id: 4863,
    },
    change: 2,
    isNew: false,
  },
  {
    points: 51,
    place: 28,
    team: {
      name: 'fnatic',
      id: 4991,
    },
    change: -7,
    isNew: false,
  },
  {
    points: 51,
    place: 29,
    team: {
      name: 'Complexity',
      id: 5005,
    },
    change: -3,
    isNew: false,
  },
  {
    points: 47,
    place: 30,
    team: {
      name: 'Cloud9',
      id: 5752,
    },
    change: -3,
    isNew: false,
  },
];

const TEAMS_RANKINGS_MAP = keyBy(TEAMS_RANKINGS, 'id');

module.exports = {
  TEAMS_RANKINGS,
  TEAMS_RANKINGS_MAP,
};
