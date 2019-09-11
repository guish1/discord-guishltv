const Discord = require("discord.js");
const client = new Discord.Client();

const countries = require("./countries.json");
//const auth = require("./auth.json");

const { HLTV } = require("hltv");

var createEmbed = (title) => {
    if (typeof description == "undefined") description = "";
    var embed = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTitle(" ")
    .setAuthor("GUISHLTV - "+title, "https://i.imgur.com/G34L4R7.png", "https://www.avisdetemplate.fr")
    .setFooter("© Powered by GUISH 2019 - Unofficial HLTV Bot")
    .setTimestamp();
    return embed;
}

function getTeam(teamId) {
    const team = HLTV.getTeam({id: teamId});
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
            case "commands": case "start":
                var embed = createEmbed("GUISHLTV - Commands");
                embed.addBlankField(true);
                embed.addField("!results", "Display last 5 world records");
                embed.addField("!ranking team", "Display top 30 team ranking");
                message.channel.send({embed});
            break;
            case "ranking":
            (async function () {
                if (args[0] == "team") {
                    const res = await HLTV.getTeamRanking();
                    var embed = createEmbed("Top 21 Team ranking");
                    const results = [];
                    for(var i = 0; i < 21; i++) {
                        results.push(getTeam(res[i].team.id));   
                    }
                    var final = await Promise.all(results);
                    console.log(final);
                    /*for(var i = 0; i < 21; i++) {
                        // get team informations
                        const team = await getTeam(res[i].team.id);
                        // get team flag
                        var flag = (typeof countries[team.location] != "undefined") ? "\:flag_"+countries[team.location]+": " : "";
                        // get team name, format one for external URL
                        var teamNameFormatted = (res[i].team.name).replace(/\s+/g, "-").toLowerCase();
                        
                        var teamName = "["+res[i].team.name+"](https://www.hltv.org/team/"+res[i].team.id+"/"+teamNameFormatted+" 'id: "+res[i].team.id+"')";
                        embed.addField(i+1 + ". "+res[i].points+" pts", flag+teamName+"\n\u200b", true);
                    }
                    embed.addBlankField(false);
                    message.channel.send({embed});*/
                }
                else if (args[0] == "player") {
                }
            })();
            break;
            case "results":
            (async function () {
                const res = await HLTV.getResults({pages: 1});
                var embed = createEmbed("Last 5 world records");
                for (var i = 0; i < 5; i++) {
                    // get teams informations
                    const team1 = await getTeam(res[i].team1.id);
                    const team2 = await getTeam(res[i].team2.id);

                    // get scores from each map
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

                    // get team flag
                    var flag1 = (typeof countries[team1.location] != "undefined") ? "\:flag_"+countries[team1.location]+": " : "";
                    var flag2 = (typeof countries[team2.location] != "undefined") ? "\:flag_"+countries[team2.location]+": " : "";
                    // get team name, format one for external URL
                    var team1NameFormatted = (res[i].team1.name).replace(/\s+/g, '-').toLowerCase();
                    var team2NameFormatted = (res[i].team2.name).replace(/\s+/g, '-').toLowerCase();
                    var team1Name = "["+res[i].team1.name+"](https://www.hltv.org/team/"+res[i].team1.id+"/"+team1NameFormatted+" 'id: "+res[i].team1.id+"')";
                    var team2Name = "["+res[i].team2.name+"](https://www.hltv.org/team/"+res[i].team2.id+"/"+team2NameFormatted+" 'id: "+res[i].team2.id+"')";
                    // get team rank
                    var team1Rank = (typeof team1.rank != "undefined") ? "(#"+team1.rank+") " : "";
                    var team2Rank = (typeof team2.rank != "undefined") ? "(#"+team2.rank+")" : "";
                    // get final score
                    var scores = (res[i].result).split(" - ");
                    var team1Score = parseInt(scores[0]); 
                    var team2Score = parseInt(scores[1]);
                    // set front display with formatted team informations
                    // as [FLAG + NAME + RANK + SCORE] - [SCORE + FLAG + NAME + RANK]
                    var team1Front = flag1 + team1Name+" "+team1Rank+""+team1Score;
                    var team2Front = team2Score+" "+flag2 + team2Name+" "+team2Rank;
                    // set bold text for winner
                    var team1State = (team1Score > team2Score) ? "**"+team1Front+"**" : team1Front;
                    var team2State = (team1Score < team2Score) ? "**"+team2Front+"**" : team2Front;
                    // get format event name
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
