const { keyBy } = require('lodash');

const TEAMS = [
  {
    id: 4863,
    name: 'TYLOO',
    logo: 'https://static.hltv.org/images/team/logo/4863',
    location: 'China',
    twitter: 'https://twitter.com/tyloogaming',
    rank: 27,
    players: [
      {
        name: 'Summer',
        id: 7028,
      },
      {
        name: 'BnTeT',
        id: 7131,
      },
      {
        name: 'Attacker',
        id: 8552,
      },
      {
        name: 'somebody',
        id: 8605,
      },
      {
        name: 'Freeman',
        id: 10774,
      },
    ],
    recentResults: [],
    rankingDevelopment: [
      42,
      46,
      74,
      51,
      49,
      54,
      54,
      50,
      15,
      14,
      16,
      16,
      15,
      16,
      17,
      17,
      18,
      18,
      19,
      18,
      20,
      21,
      21,
      22,
      24,
      24,
      24,
      25,
      26,
      19,
      20,
      19,
      20,
      19,
      19,
      20,
      17,
      19,
      18,
      18,
      21,
      20,
      21,
      21,
      22,
      22,
      74,
      46,
      44,
      43,
      40,
      40,
      37,
      38,
      39,
      47,
      52,
      53,
      65,
      61,
      70,
      85,
      86,
      65,
      61,
      26,
      26,
      27,
      29,
      29,
      29,
      67,
      20,
      22,
      23,
      25,
      25,
      24,
      22,
      22,
      27,
      30,
      30,
      33,
      31,
      32,
      36,
      36,
      35,
      46,
      39,
      39,
      37,
      39,
      42,
      33,
      34,
      31,
      28,
      31,
      29,
      29,
      27,
    ],
    bigAchievements: [
      {
        place: 'Group stage',
        event: {
          name: 'FACEIT Major 2018',
          id: 3564,
        },
      },
      {
        place: '2nd',
        event: {
          name: 'IEM Shanghai 2018',
          id: 3833,
        },
      },
      {
        place: '3rd',
        event: {
          name: 'CS:GO Asia Championships 2018',
          id: 3714,
        },
      },
      {
        place: '3rd',
        event: {
          name: 'IEM Sydney 2018',
          id: 3530,
        },
      },
    ],
    events: [
      {
        name: 'IEM Beijing 2019 Greater China Closed Qualifier',
        id: 4906,
      },
      {
        name: 'DreamHack Masters Malmö 2019',
        id: 4553,
      },
      {
        name: 'ESL Pro League Season 10 Asia-Pacific',
        id: 4694,
      },
      {
        name: 'CS:GO Asia Championships 2019',
        id: 4680,
      },
      {
        name: 'IEM Beijing 2019 Greater China Closed Qualifier',
        id: 4906,
      },
      {
        name: 'StarLadder Major 2019 Main Qualifier',
        id: 4450,
      },
      {
        name: 'Huya Asia Championships',
        id: 4830,
      },
      {
        name: 'DreamHack Masters Malmö 2019 China Closed Qualifier',
        id: 4793,
      },
      {
        name: 'Asia Minor - StarLadder Major 2019',
        id: 4448,
      },
      {
        name: 'ESL Pro League Season 9 Finals',
        id: 4490,
      },
      {
        name: 'Asia Minor China Closed Qualifier - StarLadder Major 2019',
        id: 4580,
      },
      {
        name: 'DreamHack Masters Dallas 2019',
        id: 4177,
      },
      {
        name: 'ESL Pro League Season 9 Asia-Pacific',
        id: 4484,
      },
      {
        name: 'ESL One Cologne 2019 Asia Closed Qualifier',
        id: 4548,
      },
      {
        name: 'DreamHack Masters Dallas 2019 China Closed Qualifier',
        id: 4472,
      },
      {
        name: 'StarSeries i-League Season 7',
        id: 4240,
      },
      {
        name: 'IEM Sydney 2019 Greater China Closed Qualifier',
        id: 4359,
      },
      {
        name: 'IEM Katowice 2019 Main Qualifier',
        id: 3884,
      },
      {
        name: 'PLG Grand Slam 2018',
        id: 4160,
      },
      {
        name: 'SuperNova CS:GO Malta',
        id: 4081,
      },
      {
        name: 'Toyota Master Bangkok 2018',
        id: 4009,
      },
      {
        name: 'Asian Development League 2018 - Season 1',
        id: 4247,
      },
      {
        name: 'ESL Pro League Season 8 China Closed Qualifier',
        id: 4043,
      },
      {
        name: 'StarSeries i-League Season 6',
        id: 3891,
      },
      {
        name: 'WESG 2018 China Regional Finals',
        id: 3950,
      },
      {
        name: 'FACEIT Major 2018',
        id: 3564,
      },
      {
        name: 'FACEIT Major 2018 Main Qualifier',
        id: 3885,
      },
      {
        name: 'DreamHack Masters Stockholm 2018',
        id: 3389,
      },
      {
        name: 'ZOTAC Cup Masters 2018 Grand Finals',
        id: 3603,
      },
      {
        name: 'StarSeries i-League Season 6 Asia Qualifier',
        id: 3937,
      },
      {
        name: 'IEM Shanghai 2018',
        id: 3833,
      },
      {
        name: 'Asia Minor - FACEIT Major 2018',
        id: 3760,
      },
      {
        name: 'DreamHack Masters Stockholm 2018 China Closed Qualifier',
        id: 3860,
      },
      {
        name: 'CS:GO Asia Championships 2018',
        id: 3714,
      },
      {
        name: 'Showmatch CS:GO',
        id: 1040,
      },
      {
        name: 'StarSeries i-League Season 5',
        id: 3666,
      },
      {
        name: 'ESL One Cologne 2018 Asia Closed Qualifier',
        id: 3710,
      },
      {
        name: 'CS:GO Asia Championships 2018 China Qualifier',
        id: 3757,
      },
      {
        name: 'StarSeries i-League Season 5 Asian Qualifier',
        id: 3702,
      },
      {
        name: 'IEM Sydney 2018',
        id: 3530,
      },
      {
        name: 'Qi Invitational',
        id: 3577,
      },
      {
        name: 'DreamHack Masters Marseille 2018',
        id: 3491,
      },
      {
        name: 'XINHUA Electronic Sports Conference',
        id: 3655,
      },
      {
        name: 'IEM Sydney 2018 Asian Closed Qualifier',
        id: 3589,
      },
      {
        name: 'CS:GO Asia Summit 2018',
        id: 3502,
      },
      {
        name: 'StarLadder ImbaTV Invitational Chongqing 2018',
        id: 3625,
      },
      {
        name: 'DreamHack Masters Marseille 2018 Asian Closed Qualifier',
        id: 3568,
      },
      {
        name: 'IEM Katowice 2018',
        id: 3309,
      },
      {
        name: 'StarSeries i-League Season 4',
        id: 3486,
      },
      {
        name: 'IEM Katowice 2018 Asia Closed Qualifier',
        id: 3438,
      },
      {
        name: 'StarSeries i-League Season 4 Asia Qualifier',
        id: 3475,
      },
      {
        name: 'ROG MASTERS 2017 Grand Finals',
        id: 3283,
      },
      {
        name: 'CS:GO Super League 2017 Finals',
        id: 3394,
      },
      {
        name: 'CSGOROLL Asian Masters',
        id: 3385,
      },
      {
        name: 'China Top 2017 Shenzhen',
        id: 3292,
      },
      {
        name: 'SL i-League Invitational Shanghai 2017',
        id: 3190,
      },
      {
        name: 'Asia Minor - ELEAGUE Major 2018',
        id: 3249,
      },
      {
        name: 'EPICENTER 2017 Wild Card Qualifier',
        id: 3153,
      },
      {
        name: 'WESG 2017 China Finals',
        id: 3169,
      },
      {
        name: 'ROG MASTERS 2017 China Regional Finals',
        id: 3008,
      },
      {
        name: 'ESL One Cologne 2017',
        id: 2635,
      },
      {
        name: 'PGL Major Krakow 2017 Main Qualifier',
        id: 2721,
      },
      {
        name: 'DreamHack Masters Malmö 2017 Asia-Oceania Closed Qualifier',
        id: 2903,
      },
      {
        name: 'ESL One Cologne 2017 - China Closed Qualifier',
        id: 2860,
      },
      {
        name: 'Asia Minor - PGL Major Krakow 2017',
        id: 2725,
      },
      {
        name: 'CS:GO Super League 2017 - Spring Season Finals',
        id: 2873,
      },
      {
        name: 'CS:GO Super League 2017 - Spring Season',
        id: 2815,
      },
      {
        name: 'WCA 2017 China Qualifier #1',
        id: 2766,
      },
      {
        name: 'Douyu CS:GO Asia Invitational',
        id: 2825,
      },
      {
        name: 'SL i-League StarSeries Season 3 Finals',
        id: 2683,
      },
      {
        name: 'IEM Sydney 2017 China and Mongolia Qualifier',
        id: 2747,
      },
      {
        name: 'China Cup 2017',
        id: 2160,
      },
      {
        name: 'SL i-League Season 3 China Qualifier',
        id: 2660,
      },
      {
        name: 'DreamHack Masters Las Vegas 2017',
        id: 2541,
      },
      {
        name: 'WESG 2016 World Finals',
        id: 2564,
      },
      {
        name: 'China-Korea e-Sports Competition',
        id: 2632,
      },
      {
        name: 'ELEAGUE Major Main Qualifier',
        id: 2472,
      },
      {
        name: 'WCA 2016 Finals',
        id: 2599,
      },
      {
        name: 'DreamHack Masters Las Vegas 2017 Asia Closed Qualifier',
        id: 2589,
      },
      {
        name: 'IEM Oakland 2016',
        id: 2261,
      },
      {
        name: 'iBUYPOWER Masters 2016',
        id: 2454,
      },
      {
        name: 'PGL Regional Minor Championship Asia - ELEAGUE Major 2017',
        id: 2497,
      },
      {
        name: 'WCA World Contest Championship',
        id: 2508,
      },
      {
        name: 'IeSF World Championship 2016',
        id: 2482,
      },
      {
        name: 'WESG 2016 China Finals',
        id: 2409,
      },
      {
        name: 'CSL 2016 Finals',
        id: 2161,
      },
      {
        name: 'Mr. Cat Masters Asian',
        id: 2432,
      },
      {
        name: 'SL i-League StarSeries Season 2 Finals',
        id: 2325,
      },
      {
        name: 'eSports Festival 2016',
        id: 2323,
      },
      {
        name: '2016 D-Fire Lan Final',
        id: 2338,
      },
      {
        name: 'SL i-League S2 China Finals',
        id: 2337,
      },
      {
        name: 'Pro Gamer League 2016 Summer Finals',
        id: 2319,
      },
      {
        name: 'IGL Lan Final',
        id: 2309,
      },
      {
        name: 'G-League Lan Final',
        id: 2307,
      },
      {
        name: 'NEA 2016 Finals ',
        id: 2288,
      },
      {
        name: 'H-Cup Season 2',
        id: 2290,
      },
      {
        name: 'ESL One Cologne 2016 Main Qualifier',
        id: 2258,
      },
      {
        name: 'MixBOT Pro-League Golden',
        id: 2280,
      },
      {
        name: 'H-Cup Season 1',
        id: 2263,
      },
      {
        name: 'WCA Season 1 China Finals',
        id: 2256,
      },
      {
        name: 'PGL KeSPA Regional Minor Championship Asia',
        id: 2211,
      },
      {
        name: 'Pro Gamers League 2016 Spring',
        id: 2227,
      },
      {
        name: 'SL i-League Invitational China Qualifier',
        id: 2200,
      },
      {
        name: 'DreamHack Masters Malmö 2016',
        id: 2099,
      },
      {
        name: 'PGL KeSPA Minor China Qualifier',
        id: 2204,
      },
      {
        name: 'WCA Season 1 Qualifier',
        id: 2177,
      },
      {
        name: 'DreamHack Masters Malmö 2016 Asia Closed Qualifier',
        id: 2172,
      },
      {
        name: 'Fulcrum Gamers League Finals',
        id: 2056,
      },
      {
        name: 'SL i-League StarSeries XIV China Finals',
        id: 2057,
      },
      {
        name: 'Fulcrum Gamers League',
        id: 2032,
      },
      {
        name: 'Game On Asian Invitational',
        id: 2074,
      },
      {
        name: 'D!ngIT CS:GO Asia Invitational Season 1',
        id: 1995,
      },
      {
        name: 'MixBOT Pro-League Invite Season 2',
        id: 1979,
      },
      {
        name: 'SL i-League StarSeries XIV',
        id: 1970,
      },
      {
        name: 'MixBOT Pro-League Invite Season 1',
        id: 1923,
      },
      {
        name: 'DreamHack Open Cluj-Napoca 2015 Asian pre-qualifier',
        id: 1918,
      },
      {
        name: 'Rising Stars Asia #1',
        id: 1637,
      },
      {
        name: 'ESWC 2014 China LAN Qualifier',
        id: 1501,
      },
      {
        name: 'MSI Beat it! 2013 Grand Finals',
        id: 1269,
      },
      {
        name: 'CS:GO showmatch',
        id: 820,
      },
    ],
  },
  {
    id: 7024,
    name: 'EHOME',
    logo: 'https://static.hltv.org/images/team/logo/7024',
    location: 'China',
    rank: 263,
    players: [
      {
        name: 'Marek',
        id: 8598,
      },
      {
        name: 'DeStRoYeR',
        id: 10192,
      },
      {
        name: 'Insane',
        id: 10215,
      },
      {
        name: 'SLOWLY',
        id: 15683,
      },
      {
        name: '4king',
        id: 16778,
      },
    ],
    recentResults: [],
    rankingDevelopment: [
      160,
      165,
      151,
      162,
      172,
      176,
      166,
      152,
      178,
      149,
      139,
      133,
      133,
      144,
      123,
      114,
      107,
      101,
      121,
      113,
      115,
      113,
      112,
      177,
      169,
      174,
      146,
      171,
      165,
      174,
      200,
      207,
      162,
      121,
      96,
      90,
      77,
      76,
      77,
      81,
      73,
      80,
      154,
      162,
      157,
      157,
      136,
      140,
      145,
      144,
      158,
      154,
      161,
      120,
      129,
      137,
      152,
      119,
      98,
      98,
      96,
      109,
      108,
      104,
      104,
      137,
      131,
      152,
      151,
      150,
      161,
      263,
    ],
    bigAchievements: [],
    events: [
      {
        name: 'IEM Beijing 2019 Greater China Closed Qualifier',
        id: 4906,
      },
      {
        name: 'IEM Beijing 2019 Greater China Open Qualifier #1',
        id: 4902,
      },
      {
        name: 'Huya Asia Championships',
        id: 4830,
      },
      {
        name: 'MSI MGA 2019 Asia-Pacific Closed Qualifier',
        id: 4707,
      },
      {
        name: 'MSI MGA 2019 Asia-Pacific Open Qualifier #2',
        id: 4709,
      },
      {
        name: 'Asia Minor China Closed Qualifier - StarLadder Major 2019',
        id: 4580,
      },
      {
        name: 'ESL One Cologne 2019 Asia Closed Qualifier',
        id: 4548,
      },
      {
        name: 'ESL One Cologne 2019 Asia Open Qualifier 2',
        id: 4526,
      },
      {
        name: 'Asian Development League 2019 - Season 1',
        id: 4551,
      },
      {
        name: 'ESL One Cologne 2019 Asia Open Qualifier 1',
        id: 4525,
      },
      {
        name: 'ESL Pro League Season 9 Greater China Closed Qualifier',
        id: 4401,
      },
      {
        name: 'IEM Sydney 2019 Greater China Closed Qualifier',
        id: 4359,
      },
      {
        name: 'IEM Sydney 2019 Greater China Open Qualifier 1',
        id: 4357,
      },
      {
        name: 'ESL Pro League Season 9 Greater China Open Qualifier 2',
        id: 4403,
      },
      {
        name: 'WESG 2018 China Qualifier #2 ',
        id: 4454,
      },
      {
        name: 'StarSeries i-League Season 7 Asia Qualifier',
        id: 4283,
      },
      {
        name: 'Asia Minor China Closed Qualifier - IEM Katowice 2019',
        id: 4144,
      },
      {
        name: 'Asia Minor China Open Qualifier 1 - IEM Katowice 2019',
        id: 4142,
      },
      {
        name: 'ESL Pro League Season 8 China Closed Qualifier',
        id: 4043,
      },
      {
        name: 'Toyota Master Bangkok 2018 China Qualifier',
        id: 4178,
      },
      {
        name: 'WESG 2018 China Regional Finals',
        id: 3950,
      },
      {
        name: 'EPICENTER 2018 China Closed Qualifier',
        id: 4026,
      },
      {
        name: 'eXTREMESLAND 2018 China Regional Finals',
        id: 3895,
      },
      {
        name: 'ESL Pro League Season 8 China Open Qualifier #1',
        id: 4024,
      },
      {
        name: 'StarSeries i-League Season 6 Asia Qualifier',
        id: 3937,
      },
      {
        name: 'eXTREMESLAND 2018 China Closed Qualifier',
        id: 3894,
      },
      {
        name: 'DreamHack Masters Stockholm 2018 China Closed Qualifier',
        id: 3860,
      },
      {
        name: 'DreamHack Masters Stockholm 2018 China Open Qualifier',
        id: 3861,
      },
      {
        name: 'IEM Shanghai 2018 China Closed Qualifier',
        id: 3835,
      },
      {
        name: 'Asia Minor China Open Qualifier - FACEIT Major 2018',
        id: 3763,
      },
      {
        name: 'CS:GO Asia Championships 2018 China Qualifier',
        id: 3757,
      },
      {
        name: 'StarSeries i-League Season 5 Asian Qualifier',
        id: 3702,
      },
      {
        name: 'ESL Pro League Season 7 China Closed Qualifier',
        id: 3612,
      },
      {
        name: 'ESL Pro League Season 7 China Open Qualifier #2',
        id: 3610,
      },
      {
        name: 'DreamHack Masters Marseille 2018 China Open Qualifier',
        id: 3567,
      },
      {
        name: 'CSEsport.com Asia Invitational',
        id: 3507,
      },
      {
        name: 'Douyu CS:GO Asia Invitational #2',
        id: 3383,
      },
      {
        name: 'Douyu CS:GO Asia Invitational #2 Wild Card',
        id: 3286,
      },
      {
        name: 'WESG 2017 China Finals',
        id: 3169,
      },
      {
        name: 'eXTREMESLAND 2017 China Closed Qualifier',
        id: 3141,
      },
      {
        name: 'CS:GO Super League 2017 - Summer Season',
        id: 2981,
      },
      {
        name: 'ROG MASTERS 2017 China Regional Finals',
        id: 3008,
      },
      {
        name: 'Infinite Challenge Cup Weekly #4',
        id: 2922,
      },
      {
        name: 'ZOTAC Cup Elite eSports Arena',
        id: 2920,
      },
      {
        name: 'ESL One Cologne 2017 - China Open Qualifier',
        id: 2861,
      },
      {
        name: 'CS:GO Super League 2017 - Spring Season',
        id: 2815,
      },
      {
        name: 'Asia Minor China Qualifier - PGL Major Krakow 2017',
        id: 2850,
      },
      {
        name: 'IEM Sydney 2017 China and Mongolia Qualifier',
        id: 2747,
      },
      {
        name: 'SL i-League Season 3 China Qualifier',
        id: 2660,
      },
      {
        name: 'WCA 2016 China Qualifier 3',
        id: 2528,
      },
      {
        name: 'PGL eGG Minor China Qualifier',
        id: 2513,
      },
      {
        name: 'ESWC 2016 China Qualifier',
        id: 2503,
      },
      {
        name: 'WESG 2016 China Finals',
        id: 2409,
      },
      {
        name: 'eXTREMESLAND 2016 Asia Finals',
        id: 2411,
      },
      {
        name: 'WCA Season 2 China Finals',
        id: 2417,
      },
      {
        name: 'eXTREMESLAND 2016 China Regional Finals',
        id: 2398,
      },
      {
        name: 'SL i-League S2 China Finals',
        id: 2337,
      },
      {
        name: 'SL i-League S2 China Qualifier',
        id: 2318,
      },
      {
        name: 'WCA Season 2 China Qualifier',
        id: 2284,
      },
    ],
  },
];

const TEAMS_MAP = keyBy(TEAMS, 'id');

module.exports = {
  TEAMS,
  TEAMS_MAP,
};
