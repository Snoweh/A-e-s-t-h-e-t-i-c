// pasted by Snowyy

$(document).ready(function() {
    var plinks = [
        {
            name: 'Emma',
            plink: 'http://steamcommunity.com/profiles/76561198148909992'
        },
        {
            name: 'Snowyy',
            plink: 'http://steamcommunity.com/profiles/76561198064047246'
        },
	{
            name: 'Danny',
            plink: 'http://steamcommunity.com/profiles/76561198042230203'
        },
        {
            name: 'Roosebud',
            plink: 'http://steamcommunity.com/profiles/76561198008170993'
        },
        {
            name: 'Stalker',
            plink: 'http://steamcommunity.com/profiles/76561198039830970'
	},
        {
            name: 'Elliot',
            plink: 'http://steamcommunity.com/profiles/76561197997418037'
	},
        {
            name: 'Calamari',
            plink: 'http://steamcommunity.com/profiles/76561198005978817'
	},
        {
            name: 'Nya',
            plink: 'http://steamcommunity.com/profiles/76561198009999751'
	},
        {
            name: 'Codfather · ',
            plink: 'http://steamcommunity.com/profiles/76561198080436083'
	},



];


    for(var i in plinks) {
        var plink = plinks[i];

        $('#marquee').append('<a href="' + plink.plink + '">' + plink.name + '</a>');

        var plink = $('#marquee').children('a').last();

        if(i != plinks.length - 1) {
            $('#marquee').append(' · ');
        }
    }

    $('#marquee').marquee({
        duration: 15000,
        gap:3,
        delayBeforeStart: 1000,
        direction: 'left',
        duplicated: true
    });
});