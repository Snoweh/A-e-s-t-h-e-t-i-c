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
            name: 'Pakzii',
            plink: 'http://steamcommunity.com/profiles/76561198050140703'
        },
        {
            name: 'Panda',
            plink: 'http://steamcommunity.com/profiles/76561198074035431'
	},
        {
            name: 'RMADSRK',
            plink: 'http://steamcommunity.com/profiles/76561198083330456'
	},
        {
            name: 'Ruby',
            plink: 'http://steamcommunity.com/profiles/76561198052924894'
	},
        {
            name: 'Nya',
            plink: 'http://steamcommunity.com/profiles/76561198009999751'
	},
        {
            name: 'Codfather',
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