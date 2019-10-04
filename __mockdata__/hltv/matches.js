const { keyBy } = require('lodash');

const MATCHES = [
  {
    id: 2336401,
    team1: {
      name: 'TYLOO',
      id: 4863,
    },
    team2: {
      name: 'EHOME',
      id: 7024,
    },
    winnerTeam: {
      name: 'TYLOO',
      id: 4863,
    },
    date: 1569142800000,
    format: 'Best of 3 (Online)',
    additionalInfo: '* Lower bracket semi-final',
    event: {
      name: 'IEM Beijing 2019 Greater China Closed Qualifier',
      id: 4906,
    },
    maps: [
      {
        name: 'mrg',
        result: '13:16 (5:10; 8:6)',
        statsId: 92111,
      },
      {
        name: 'd2',
        result: '16:10 (10:5; 6:5)',
      },
      {
        name: 'inf',
        result: '16:9 (10:5; 6:4)',
      },
    ],
    players: {
      team1: [
        {
          name: 'somebody',
          id: 8605,
        },
        {
          name: 'BnTeT',
          id: 7131,
        },
        {
          name: 'Summer',
          id: 7028,
        },
        {
          name: 'Attacker',
          id: 8552,
        },
        {
          name: 'Freeman',
          id: 10774,
        },
      ],
      team2: [
        {
          name: 'SLOWLY',
          id: 15683,
        },
        {
          name: 'Insane',
          id: 10215,
        },
        {
          name: 'Marek',
          id: 8598,
        },
        {
          name: 'DeStRoYeR',
          id: 10192,
        },
        {
          name: '4king',
          id: 16778,
        },
      ],
    },
    streams: [],
    live: false,
    status: 'Match over',
    hasScorebot: false,
    headToHead: [
      {
        date: 1565856223000,
        map: 'ovp',
        winner: {
          name: 'TYLOO',
          id: 4863,
        },
        event: {
          name: 'Huya Asia Championships',
          id: 4830,
        },
        result: '16 - 3',
      },
      {
        date: 1565856223000,
        map: 'inf',
        winner: {
          name: 'TYLOO',
          id: 4863,
        },
        event: {
          name: 'Huya Asia Championships',
          id: 4830,
        },
        result: '16 - 10',
      },
      {
        date: 1565856223000,
        map: 'mrg',
        winner: {
          name: 'TYLOO',
          id: 4863,
        },
        event: {
          name: 'Huya Asia Championships',
          id: 4830,
        },
        result: '16 - 11',
      },
      {
        date: 1559896790000,
        map: 'ovp',
        winner: {
          name: 'TYLOO',
          id: 4863,
        },
        event: {
          name: 'Asia Minor China Closed Qualifier - StarLadder Major 2019',
          id: 4580,
        },
        result: '16 - 4',
      },
      {
        date: 1559896790000,
        map: 'trn',
        winner: {
          name: 'TYLOO',
          id: 4863,
        },
        event: {
          name: 'Asia Minor China Closed Qualifier - StarLadder Major 2019',
          id: 4580,
        },
        result: '16 - 9',
      },
      {
        date: 1557499990000,
        map: 'ovp',
        winner: {
          name: 'TYLOO',
          id: 4863,
        },
        event: {
          name: 'ESL One Cologne 2019 Asia Closed Qualifier',
          id: 4548,
        },
        result: '16 - 9',
      },
      {
        date: 1557499990000,
        map: 'd2',
        winner: {
          name: 'TYLOO',
          id: 4863,
        },
        event: {
          name: 'ESL One Cologne 2019 Asia Closed Qualifier',
          id: 4548,
        },
        result: '16 - 6',
      },
      {
        date: 1557393021000,
        map: 'mrg',
        winner: {
          name: 'TYLOO',
          id: 4863,
        },
        event: {
          name: 'ESL One Cologne 2019 Asia Closed Qualifier',
          id: 4548,
        },
        result: '16 - 13',
      },
      {
        date: 1557393021000,
        map: 'd2',
        winner: {
          name: 'TYLOO',
          id: 4863,
        },
        event: {
          name: 'ESL One Cologne 2019 Asia Closed Qualifier',
          id: 4548,
        },
        result: '16 - 8',
      },
      {
        date: 1526725580000,
        map: 'ovp',
        winner: {
          name: 'VG.Flash',
          id: 9037,
        },
        event: {
          name: 'Asia Minor China Open Qualifier - FACEIT Major 2018',
          id: 3763,
        },
        result: '16 - 5',
      },
      {
        date: 1526725580000,
        map: 'mrg',
        winner: {
          name: 'VG.Flash',
          id: 9037,
        },
        event: {
          name: 'Asia Minor China Open Qualifier - FACEIT Major 2018',
          id: 3763,
        },
        result: '16 - 11',
      },
    ],
    vetoes: [
      {
        team: {
          name: 'EHOME',
          id: 7024,
        },
        map: 'vertigo',
        type: 'removed',
      },
      {
        team: {
          name: 'TYLOO',
          id: 4863,
        },
        map: 'nuke',
        type: 'removed',
      },
      {
        team: {
          name: 'EHOME',
          id: 7024,
        },
        map: 'mrg',
        type: 'picked',
      },
      {
        team: {
          name: 'TYLOO',
          id: 4863,
        },
        map: 'd2',
        type: 'picked',
      },
      {
        team: {
          name: 'EHOME',
          id: 7024,
        },
        map: 'ovp',
        type: 'removed',
      },
      {
        team: {
          name: 'TYLOO',
          id: 4863,
        },
        map: 'trn',
        type: 'removed',
      },
    ],
    highlights: [],
    demos: [],
    odds: [],
  },
  {
    id: 2336402,
    team1: {
      name: 'TYLOO',
      id: 4863,
    },
    team2: {
      name: 'EHOME',
      id: 7024,
    },
    winnerTeam: {
      name: 'TYLOO',
      id: 4863,
    },
    date: 1569142800000,
    format: 'Best of 3 (Online)',
    additionalInfo: '* Lower bracket semi-final',
    event: {
      name: 'IEM Beijing 2019 Greater China Closed Qualifier',
      id: 4906,
    },
    maps: [
      {
        name: '-',
        result: '',
      },
      {
        name: 'tba',
        result: '',
      },
      {
        name: 'tba',
        result: '',
      },
    ],
    players: {
      team1: [
        {
          name: 'somebody',
          id: 8605,
        },
        {
          name: 'BnTeT',
          id: 7131,
        },
        {
          name: 'Summer',
          id: 7028,
        },
        {
          name: 'Attacker',
          id: 8552,
        },
        {
          name: 'Freeman',
          id: 10774,
        },
      ],
      team2: [
        {
          name: 'SLOWLY',
          id: 15683,
        },
        {
          name: 'Insane',
          id: 10215,
        },
        {
          name: 'Marek',
          id: 8598,
        },
        {
          name: 'DeStRoYeR',
          id: 10192,
        },
        {
          name: '4king',
          id: 16778,
        },
      ],
    },
    streams: [],
    live: false,
    status: 'Match over',
    hasScorebot: false,
    headToHead: [
      {
        date: 1565856223000,
        map: 'ovp',
        winner: {
          name: 'TYLOO',
          id: 4863,
        },
        event: {
          name: 'Huya Asia Championships',
          id: 4830,
        },
        result: '16 - 3',
      },
      {
        date: 1565856223000,
        map: 'inf',
        winner: {
          name: 'TYLOO',
          id: 4863,
        },
        event: {
          name: 'Huya Asia Championships',
          id: 4830,
        },
        result: '16 - 10',
      },
      {
        date: 1565856223000,
        map: 'mrg',
        winner: {
          name: 'TYLOO',
          id: 4863,
        },
        event: {
          name: 'Huya Asia Championships',
          id: 4830,
        },
        result: '16 - 11',
      },
      {
        date: 1559896790000,
        map: 'ovp',
        winner: {
          name: 'TYLOO',
          id: 4863,
        },
        event: {
          name: 'Asia Minor China Closed Qualifier - StarLadder Major 2019',
          id: 4580,
        },
        result: '16 - 4',
      },
      {
        date: 1559896790000,
        map: 'trn',
        winner: {
          name: 'TYLOO',
          id: 4863,
        },
        event: {
          name: 'Asia Minor China Closed Qualifier - StarLadder Major 2019',
          id: 4580,
        },
        result: '16 - 9',
      },
      {
        date: 1557499990000,
        map: 'ovp',
        winner: {
          name: 'TYLOO',
          id: 4863,
        },
        event: {
          name: 'ESL One Cologne 2019 Asia Closed Qualifier',
          id: 4548,
        },
        result: '16 - 9',
      },
      {
        date: 1557499990000,
        map: 'd2',
        winner: {
          name: 'TYLOO',
          id: 4863,
        },
        event: {
          name: 'ESL One Cologne 2019 Asia Closed Qualifier',
          id: 4548,
        },
        result: '16 - 6',
      },
      {
        date: 1557393021000,
        map: 'mrg',
        winner: {
          name: 'TYLOO',
          id: 4863,
        },
        event: {
          name: 'ESL One Cologne 2019 Asia Closed Qualifier',
          id: 4548,
        },
        result: '16 - 13',
      },
      {
        date: 1557393021000,
        map: 'd2',
        winner: {
          name: 'TYLOO',
          id: 4863,
        },
        event: {
          name: 'ESL One Cologne 2019 Asia Closed Qualifier',
          id: 4548,
        },
        result: '16 - 8',
      },
      {
        date: 1526725580000,
        map: 'ovp',
        winner: {
          name: 'VG.Flash',
          id: 9037,
        },
        event: {
          name: 'Asia Minor China Open Qualifier - FACEIT Major 2018',
          id: 3763,
        },
        result: '16 - 5',
      },
      {
        date: 1526725580000,
        map: 'mrg',
        winner: {
          name: 'VG.Flash',
          id: 9037,
        },
        event: {
          name: 'Asia Minor China Open Qualifier - FACEIT Major 2018',
          id: 3763,
        },
        result: '16 - 11',
      },
    ],
    vetoes: [
      {
        team: {
          name: 'EHOME',
          id: 7024,
        },
        map: 'vertigo',
        type: 'removed',
      },
      {
        team: {
          name: 'TYLOO',
          id: 4863,
        },
        map: 'nuke',
        type: 'removed',
      },
      {
        team: {
          name: 'EHOME',
          id: 7024,
        },
        map: 'mrg',
        type: 'picked',
      },
      {
        team: {
          name: 'TYLOO',
          id: 4863,
        },
        map: 'd2',
        type: 'picked',
      },
      {
        team: {
          name: 'EHOME',
          id: 7024,
        },
        map: 'ovp',
        type: 'removed',
      },
      {
        team: {
          name: 'TYLOO',
          id: 4863,
        },
        map: 'trn',
        type: 'removed',
      },
    ],
    highlights: [],
    demos: [],
    odds: [],
  },
];

const MATCHES_MAP = keyBy(MATCHES, 'id');

module.exports = {
  MATCHES,
  MATCHES_MAP,
};
