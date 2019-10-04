const { MATCHES } = require('../../../__mockdata__/hltv/matches');
const { TEAMS, TEAMS_MAP } = require('../../../__mockdata__/hltv/teams');
const {
  formatMapsScore,
  setBoldIf,
  formatSlug,
  formatTeamRank,
  formatTeam,
  formatEventLink,
  formatMatchResultTeam,
  formatMatchResult,
} = require('./format');

describe('format', () => {
  describe('setBoldIf', () => {
    it('sets bold if the condition is true', () => {
      expect(setBoldIf('test', true)).toBe('**test**');
    });

    it('does not set bold if the condition is false', () => {
      expect(setBoldIf('test', false)).toBe('test');
    });
  });

  describe('formatMapsScore', () => {
    it('formats the maps score', () => {
      expect(formatMapsScore(MATCHES[0].maps)).toBe('13:16 / 16:10 / 16:9');
    });
  });

  describe('formatSlug', () => {
    it('creates a slug', () => {
      expect(formatSlug('Ninjas in Pyjamas')).toBe('ninjas-in-pyjamas');
    });
  });

  describe('formatTeamRank', () => {
    it('formats the rank if specified', () => {
      expect(formatTeamRank(3)).toBe('(#3)');
    });

    it('returns empty string if no rank', () => {
      expect(formatTeamRank()).toBe('');
    });
  });

  describe('formatTeam', () => {
    it('formats the team', () => {
      expect(formatTeam(TEAMS[0])).toEqual({
        id: 4863,
        name: 'TYLOO',
        slug: 'tyloo',
        logo: 'https://static.hltv.org/images/team/logo/4863',
        location: 'China',
        url: 'https://www.hltv.org/team/4863/tyloo',
        rank: 27,
        flag: ':flag_cn:',
        link: "[TYLOO](https://www.hltv.org/team/4863/tyloo 'id: 4863')",
      });
    });
  });

  describe('formatEventLink', () => {
    expect(formatEventLink(MATCHES[0].event))
      .toBe("[IEM Beijing 2019 Greater China Closed Qualifier](https://www.hltv.org/events/4906/iem-beijing-2019-greater-china-closed-qualifier 'id: 4906')");
  });

  describe('formatMatchResultTeam', () => {
    it('formats the team name for a match result', () => {
      expect(formatMatchResultTeam(TEAMS[0]))
        .toBe(":flag_cn: [TYLOO](https://www.hltv.org/team/4863/tyloo 'id: 4863') (#27)");
    });
  });

  describe('formatMatchResult', () => {
    it('formats the match result', () => {
      expect(formatMatchResult(
        MATCHES[0],
        TEAMS_MAP[MATCHES[0].team1.id],
        TEAMS_MAP[MATCHES[0].team2.id],
      )).toBe("**:flag_cn: [TYLOO](https://www.hltv.org/team/4863/tyloo 'id: 4863') (#27) 2** - 1 :flag_cn: [EHOME](https://www.hltv.org/team/7024/ehome 'id: 7024') (#263)\n[IEM Beijing 2019 Greater China Closed Qualifier](https://www.hltv.org/events/4906/iem-beijing-2019-greater-china-closed-qualifier 'id: 4906') 13:16 / 16:10 / 16:9");
    });
  });
});
