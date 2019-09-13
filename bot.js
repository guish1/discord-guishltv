// Requirements
const Discord = require("discord.js");
const { HLTV } = require("hltv");
var _ = require("lodash");
  // Countries name: code
const countries = require("./countries.json");
// Client
const client = new Discord.Client();

/*
ToDo:
- fix slow requests from await/async/promise (for !results & !ranking)
- need global function to prevent duplicated code for each call :
    * get team name
    * formatted name
    * get team rank
*/

// Default embed creation
var createEmbed = (title) => {
    var embed = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTitle(" ")
    .setAuthor("GUISHLTV - "+title, "https://i.imgur.com/G34L4R7.png", "https://www.avisdetemplate.fr")
    .setFooter("© Powered by GUISH 2019 - Unofficial HLTV Bot")
    .setTimestamp();
    return embed;
}

// Get team informations from its ID
function getTeam(teamId) {
    return HLTV.getTeam({id: teamId});
}
// Get match informations from its ID
async function getMatch(matchId) {
    const match = await HLTV.getMatch({id: matchId});
    return match;
}
// Truncate string if needed to prevent line breaking
function truncateString(string, number) {
    if (string.length <= number) return string;
    return string.slice(0, number) + "...";
}

client.on("ready", () => {
    client.user.setActivity("!commands me");
});

client.on("message", message => {
    // If message starts with "!"
    if (message.content.substring(0, 1) == "!") {
        // Get arguments as !command arg
        var args = message.content.substring(1).split(" ");
        // First arg is main command, all others are args
        var command = args[0];
        args = args.splice(1);
        switch(command) {
            case "commands": case "start":
                var embed = createEmbed("Commands");
                embed.addField("!results", "Display last 5 world records");
                embed.addField("!ranking team", "Display top 30 team ranking");
                message.channel.send({embed});
            break;
            case "sourcecode":
                var embed = createEmbed("Source code");
                embed.addField("GIT", "[https://github.com/guish1/discord-guishltv](https://github.com/guish1/discord-guishltv)");
                message.channel.send({embed});
            break;
            case "ranking":
            (async function () {
                if (args[0] == "team") {
                    // If !ranking team
                    // Get full ranking (default : 30)
                    const res = await HLTV.getTeamRanking();
                    var embed = createEmbed("Top 21 Team ranking");
                    // Get only 21 teams from ranking because of awesome Discord limit of 25 fields for message...
                    const teams = Promise.all([_.times(21).map(i => getTeam(res[i].team.id))]).then(function([team]) {
console.log(team); // Promise: pending
                    })
                    for(var i = 0; i < 21; i++) {
                        // Get team informations to extract country code
                        // const team = await getTeam(res[i].team.id);
                        const team = Promise.all(_.times(21).map(i => getTeam(res[i].team.id)));
                        // Get team flag from country
                        var flag = (typeof countries[team.location] != "undefined") ? "\:flag_"+countries[team.location]+": " : "";
                        // Get team name, format one for external URL
                        var teamNameFormatted = (res[i].team.name).replace(/\s+/g, "-").toLowerCase();
                        // Final display
                        var teamFront = "["+res[i].team.name+"](https://www.hltv.org/team/"+res[i].team.id+"/"+teamNameFormatted+" 'id: "+res[i].team.id+"')";
                        embed.addField("#" + (i+1), flag+teamFront+" ("+res[i].points+" pts)\n\u200b", true);
                    }
                    embed.addBlankField(false);
                    message.channel.send({embed});
                }
                else if (args[0] == "player") {
                    // If !ranking player
                }
            })();
            break;
            case "results":
            (async function () {
                // If !results
                // Get full results
                const res = await HLTV.getResults({pages: 1});
                var embed = createEmbed("Last 5 world records");
                // Limit results to 5 records
                for (var i = 0; i < 5; i++) {
                    // Get teams informations needed for flag and rank
                    const team1 = await getTeam(res[i].team1.id);
                    const team2 = await getTeam(res[i].team2.id);

                    // Get scores from each map
                    const score = await getMatch(res[i].id);
                    var mapsScore = "";
                    var count = 0;
                    for (var j = 0; j < (score.maps).length; j++) {
                        var r = (score.maps[j].result).split(" (");
                        if (count != (score.maps).length && r[0] != "" && j != 0) mapsScore += " / ";
                        mapsScore += r[0];
                        if (mapsScore == "") mapsScore += "1 map from WB";
                        count += 1;
                    }
                    if (mapsScore == "") mapsScore = "N/A";

                    // Get team flag from country
                    var flag1 = (typeof countries[team1.location] != "undefined") ? "\:flag_"+countries[team1.location]+": " : "";
                    var flag2 = (typeof countries[team2.location] != "undefined") ? "\:flag_"+countries[team2.location]+": " : "";
                    // Get team name, format one for external URL
                    var team1NameFormatted = (res[i].team1.name).replace(/\s+/g, '-').toLowerCase();
                    var team2NameFormatted = (res[i].team2.name).replace(/\s+/g, '-').toLowerCase();
                    var team1Name = "["+res[i].team1.name+"](https://www.hltv.org/team/"+res[i].team1.id+"/"+team1NameFormatted+" 'id: "+res[i].team1.id+"')";
                    var team2Name = "["+res[i].team2.name+"](https://www.hltv.org/team/"+res[i].team2.id+"/"+team2NameFormatted+" 'id: "+res[i].team2.id+"')";
                    // Get team rank
                    var team1Rank = (typeof team1.rank != "undefined") ? "(#"+team1.rank+") " : "";
                    var team2Rank = (typeof team2.rank != "undefined") ? "(#"+team2.rank+")" : "";
                    // Get final score
                    var scores = (res[i].result).split(" - ");
                    var team1Score = parseInt(scores[0]); 
                    var team2Score = parseInt(scores[1]);
                    // Set front display with formatted team informations
                    // as [FLAG + NAME + RANK + SCORE] - [SCORE + FLAG + NAME + RANK]
                    var team1Front = flag1 + team1Name+" "+team1Rank+""+team1Score;
                    var team2Front = team2Score+" "+flag2 + team2Name+" "+team2Rank;
                    // Set bold text for winner
                    var team1State = (team1Score > team2Score) ? "**"+team1Front+"**" : team1Front;
                    var team2State = (team1Score < team2Score) ? "**"+team2Front+"**" : team2Front;
                    // Get format event name
                    var eventNameFormatted = (res[i].event.name).replace(/\s+/g, '-').toLowerCase();

                    embed.addField("\u200b", team1State+" - "+team2State+"\n["+res[i].event.name+"](https://www.hltv.org/events/"+res[i].event.id+"/"+eventNameFormatted+" 'id: "+res[i].event.id+"') - "+mapsScore);
                }
                embed.addBlankField(true);
                message.channel.send({embed});
            })();
            break;
        }
    }
})

client.login(process.env.BOT_TOKEN);
