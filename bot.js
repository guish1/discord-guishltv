const Discord = require("discord.js");
const client = new Discord.Client();

const countries = require("./countries.json");
//const auth = require("./auth.json");

const { HLTV } = require("hltv");

var createEmbed = (title) => {
    var embed = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTitle(title)
    .setFooter("© Powered by GUISH")
    .setTimestamp();
    embed.addBlankField(false);
    return embed;
}

async function getTeam(teamId) {
    const team = await HLTV.getTeam({id: teamId});
    return team;
}
async function getMatch(matchId) {
    const match = await HLTV.getMatch({id: matchId});
    return match;
}

function truncateString(string, number) {
    if (string.length <= number) return string;
    return string.slice(0, number) + "...";
}
client.on("ready", () => {
    client.user.setActivity("Type !commands");
});

client.on("message", message => {
    if (message.content.substring(0, 1) == "!") {
        var args = message.content.substring(1).split(" ");
        var command = args[0];
        args = args.splice(1);
        switch(command) {
            case "results":
            (async function () {
                const res = await HLTV.getResults({pages: 1});
                var embed = createEmbed("HLTV - LAST 5 RECORDS");
                var html = "";
                for (var i = 0; i < 5; i++) {
                    // get teams informations
                    const team1 = await getTeam(res[i].team1.id);
                    const team2 = await getTeam(res[i].team2.id);

                    // get scores from each map
                    const score = await getMatch(res[i].id);
                    var maps_score = "";
                    var count = 0;
                    for (var j = 0; j < (score.maps).length; j++) {
                        var r = (score.maps[j].result).split(" (");
                        if (count != (score.maps).length && r[0] != "" && j != 0) maps_score += " / ";
                        maps_score += r[0];
                        if (maps_score == "") maps_score += "1 map from WB";
                        count += 1;
                    }
                    if (maps_score == "") maps_score = "N/A";

                    // get team flag
                    var flag1 = (typeof countries[team1.location] != "undefined") ? "\:flag_"+ countries[team1.location] +": " : "";
                    var flag2 = (typeof countries[team2.location] != "undefined") ? "\:flag_"+ countries[team2.location] +": " : "";
                    // get team name, format one for external URL and truncate one to prevent wrong display
                    var team1NameFormatted = (res[i].team1.name).replace(/\s+/g, '-').toLowerCase();
                    var team2NameFormatted = (res[i].team2.name).replace(/\s+/g, '-').toLowerCase();
                    var team1Name = "["+truncateString(res[i].team1.name, 10)+"](https://www.hltv.org/team/"+res[i].team1.id+"/"+team1NameFormatted+")";
                    var team2Name = "["+truncateString(res[i].team2.name, 10)+"](https://www.hltv.org/team/"+res[i].team2.id+"/"+team2NameFormatted+")";
                    // get team rank
                    var team1Rank = (typeof team1.rank != "undefined") ? "(#"+team1.rank+") " : "";
                    var team2Rank = (typeof team2.rank != "undefined") ? "(#"+team2.rank+")" : "";
                    // get final score
                    var scores = (res[i].result).split(" - ");
                    scores[0] = parseInt(scores[0]); 
                    scores[1] = parseInt(scores[1]);
                    // set front display with formatted team informations
                    // as [FLAG + NAME + RANK + SCORE] - [SCORE + FLAG + NAME + RANK]
                    var team1Front = flag1 + team1Name+" "+team1Rank+""+scores[0];
                    var team2Front = scores[1]+" "+flag2 + team2Name+" "+team2Rank;
                    // set bold text for winner
                    var team1State = (scores[0] > scores[1]) ? "**"+team1Front+"**" : team1Front;
                    var team2State = (scores[0] < scores[1]) ? "**"+team2Front+"**" : team2Front;
                    embed.addField("\n\u200b", team1State + " - " + team2State, true);
                    embed.addField("\n\u200b", "-----", true);
                    embed.addField("\n\u200b", res[i].event.name, true);
                    embed.addField("\n\u200b", maps_score, true);
                }
                embed.addBlankField(false);
                message.channel.send({embed});
            })();
            break;
            case "team":
            HLTV.getTeam({id: 4494}).then(flag => { 
                console.log(flag);
            });
            break;
        }
    }
})

client.login(process.env.BOT_TOKEN);
