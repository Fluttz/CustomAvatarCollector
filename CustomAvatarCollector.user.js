// ==UserScript==
// @name         Custom Avatar Collector
// @version      1.09
// @description  =====================================================IMPORTANT=========>>>>>>Visit https://www.neopets.com/island/parrot.phtml to get started!
// @author       Flutterz; avatars by sosu (Neopets username: sosunub)
// @icon         https://i.imgur.com/rTLTKNL.png
// @match        https://www.neopets.com/petlookup.phtml*
// @match        https://www.neopets.com/island/parrot.phtml
// @match        https://www.neopets.com/evil/showcreature.phtml?villain=*
// @match        https://www.neopets.com/neopedia.phtml?neopedia_id=*
// @match        https://www.neopets.com/weather.phtml*
// @match        https://www.neopets.com/hero/showhero.phtml?hero=*
// @match        https://www.neopets.com/objects.phtml?type=shop&obj_type=*
// @match        https://www.neopets.com/jelly/colouring_page.phtml
// @match        https://www.neopets.com/search.phtml?selected_type=object&string=*
// @match        https://images.neopets.com/images/dead_chia.jpg
// @match        https://www.neopets.com/jelly/greenjelly.phtml
// @match        https://www.neopets.com/inventory.phtml
// @match        https://www.neopets.com/home/*
// @match        https://www.neopets.com/medieval/*
// @match        https://www.neopets.com/winter/neggery.phtml
// @match        https://www.neopets.com/prehistoric/concerthall2.phtml
// @match        https://www.neopets.com/games/neodeck/*
// @match        https://www.neopets.com/pool/*
// @match        https://www.neopets.com/stamps.phtml?type=progress
// @match        https://www.neopets.com/closet.phtml
// @match        https://www.neopets.com/mip/comic.phtml?chapter=2
// @match        https://www.neopets.com/auctions.phtml*
// @match        https://www.neopets.com/water/*
// @match        https://www.neopets.com/books_read.phtml?pet_name=*
// @match        https://www.neopets.com/moon/books_read.phtml?pet_name=*
// @match        https://www.neopets.com/haggle.phtml
// @match        https://www.neopets.com/medieval/guessmarrow.phtml*
// @match        https://www.neopets.com/halloween/strtest/*
// @match        https://www.neopets.com/shenkuu/lunar/results.phtml
// @match        https://www.neopets.com/island/kitchen.phtml
// @match        https://www.neopets.com/halloween/esophagor.phtml
// @match        https://www.neopets.com/wishing.phtml
// @match        https://www.neopets.com/stockmarket.phtml*
// @match        https://www.neopets.com/pirates/foodclub.phtml?type=collect
// @match        https://www.neopets.com/games/game.phtml?game_id=*
// @match        https://www.neopets.com/games/pyramids/pyramids.phtml*
// @match        https://www.neopets.com/dome/arena.phtml
// @match        https://www.neopets.com/faerieland/springs.phtml
// @match        https://www.neopets.com/space/warehouse/prizecodes.phtml
// @match        https://www.neopets.com/moon/meteor.phtml
// @match        https://www.neopets.com/pirates/anchormanagement.phtml
// @match        https://www.neopets.com/process_lab2.phtml
// @match        https://www.neopets.com/desert/fruit/*
// @match        https://www.neopets.com/takedonation_new.phtml*
// @match        https://www.neopets.com/halloween/gravedanger/
// @match        https://www.neopets.com/thriftshoppe/take_donation.phtml
// @match        https://www.neopets.com/desert/shrine.phtml
// @match        https://www.neopets.com/island/tombola2.phtml
// @match        https://www.neopets.com/bank.phtml
// @match        https://www.neopets.com/halloween/process_cocoshy.phtml?coconut=*
// @match        https://www.neopets.com/halloween/coconutshy.phtml
// @match        https://www.neopets.com/halloween/process_bagatelle.phtml*
// @match        https://www.neopets.com/halloween/bagatelle.phtml
// @match        https://www.neopets.com/userlookup.phtml*
// @match        https://www.neopets.com/neofriends.phtml*
// @match        https://www.neopets.com/tropical/*
// @match        https://www.neopets.com/settings/neoboards/
// @match        https://www.neopets.com/aota/
// @match        https://www.neopets.com/worlds/kiko/glass_boat.phtml
// @match        https://www.neopets.com/magma/pool.phtml
// @match        https://www.neopets.com/shops/wizard.phtml*
// @match        https://www.neopets.com/gourmet_club.phtml?pet_name=*
// @match        https://www.neopets.com/questlog/
// @match        https://www.neopets.com/games/mysterypic.phtml?thanks=true
// @match        https://www.neopets.com/guilds/guild_board.phtml?id=*
// @match        https://www.neopets.com/art/storytell.phtml*
// @match        https://www.neopets.com/contributions_poems.phtml*
// @match        https://www.neopets.com/gallery/
// @match        https://www.neopets.com/gallery/index.phtml
// @match        https://www.neopets.com/gallery/index.phtml?view=all
// @match        https://www.neopets.com/neoboards/topic.phtml*
// @match        https://www.neopets.com/games/nq2/nq2.phtml*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

const customAvatars = {
    "0" : {
        "name" : "Splash!",
        "img" : "https://i.imgur.com/85XlGm5.gif",
        "req" : "Visit a Blue Lutari.",
        "secret" : ""
    },
    "1" : {
        "name" : "Flowerly",
        "img" : "https://i.imgur.com/RTlT571.gif",
        "req" : "Visit a Green Jubjub.",
        "secret" : ""
    },
    "2" : {
        "name" : "Summer Ruki",
        "img" : "https://i.imgur.com/MO4Mf2M.gif",
        "req" : "Visit a Purple Ruki.",
        "secret" : ""
    },
    "3" : {
        "name" : "Rainblug",
        "img" : "https://i.imgur.com/b9r9nt9.gif",
        "req" : "Visit a Neopet with a Rainblug attached.",
        "secret" : ""
    },
    "4" : {
        "name" : "Vernax",
        "img" : "https://i.imgur.com/GjhPlNq.gif",
        "req" : "Visit a Neopet with a Vernax attached.",
        "secret" : ""
    },
    "5" : {
        "name" : "Blue Ona",
        "img" : "https://i.imgur.com/JTpaPyW.gif",
        "req" : "Visit a Neopet with an Ona attached.",
        "secret" : ""
    },
    "6" : {
        "name" : "Hi Snarhook!",
        "img" : "https://i.imgur.com/OTzpVk4.gif",
        "req" : "Visit a Neopet with a Plushie Snarhook attached.",
        "secret" : ""
    },
    "7" : {
        "name" : "Nimmo - Toy",
        "img" : "https://i.imgur.com/ba1qWpW.gif",
        "req" : "Visit a Toy Nimmo.",
        "secret" : ""
    },
    "8" : {
        "name" : "Razul",
        "img" : "https://i.imgur.com/hCIPvAP.gif",
        "req" : "Read about Razul in the Gallery of Evil.",
        "secret" : ""
    },
    "9" : {
        "name" : "Korbat - Mutant",
        "img" : "https://i.imgur.com/Eu6X108.gif",
        "req" : "Visit a Mutant Korbat.",
        "secret" : ""
    },
    "10" : {
        "name" : "Princess Amira",
        "img" : "https://i.imgur.com/RpKyPQI.gif",
        "req" : "Read about Princess Amira in the Neopedia.",
        "secret" : ""
    },
    "11" : {
        "name" : "Korbat - Maraqua",
        "img" : "https://i.imgur.com/pI4abhL.gif",
        "req" : "Visit a Maraquan Korbat.",
        "secret" : ""
    },
    "12" : {
        "name" : "Nuria",
        "img" : "https://i.imgur.com/BcCTVSu.gif",
        "req" : "Visit the Weather page of a world that is \"hot\" or \"boiling hot.\"",
        "secret" : ""
    },
    "13" : {
        "name" : "Commander Gormos",
        "img" : "https://i.imgur.com/tJ4cZ3k.gif",
        "req" : "Read about Commander Gormos in the Gallery of Heroes.",
        "secret" : ""
    },
    "14" : {
        "name" : "General Galgarroth",
        "img" : "https://i.imgur.com/Z8rhHPo.gif",
        "req" : "Read about General Galgarroth in the Gallery of Heroes.",
        "secret" : ""
    },
    "15" : {
        "name" : "General Dacon",
        "img" : "https://i.imgur.com/IhokQf2.gif",
        "req" : "Read about General Dacon in the Gallery of Heroes.",
        "secret" : ""
    },
    "16" : {
        "name" : "Aww..",
        "img" : "https://i.imgur.com/ORDJdwy.gif",
        "req" : "Visit a Baby Elephante.",
        "secret" : ""
    },
    "17" : {
        "name" : "Kau - Red",
        "img" : "https://i.imgur.com/qI78i04.gif",
        "req" : "Visit a Red Kau.",
        "secret" : ""
    },
    "18" : {
        "name" : "Poogle - Jelly",
        "img" : "https://i.imgur.com/OvHRvHB.gif",
        "req" : "Visit Jelly Foods.",
        "secret" : ""
    },
    "19" : {
        "name" : "Puppyblew - Jelly",
        "img" : "https://i.imgur.com/E3502WM.gif",
        "req" : "Visit the Jelly World Colouring Pages.",
        "secret" : ""
    },
    "20" : {
        "name" : "Shoyru - Jelly",
        "img" : "https://i.imgur.com/K5kSxsU.gif",
        "req" : "Visit the Green Jelly.",
        "secret" : ""
    },
    "21" : {
        "name" : "Cooty",
        "img" : "https://i.imgur.com/xOxzbkv.gif",
        "req" : "Visit a Neopet with a Cooty attached.",
        "secret" : ""
    },
    "22" : {
        "name" : "Chocolate Aisha - Cocoa",
        "img" : "https://i.imgur.com/8mgsabp.gif",
        "req" : "Visit a Chocolate Aisha.",
        "secret" : ""
    },
    "23" : {
        "name" : "Slorg - AHHHHH",
        "img" : "https://i.imgur.com/gNTY7cm.gif",
        "req" : "Visit a Neopet with a Slorg and a Blechy attached.",
        "secret" : ""
    },
    "24" : {
        "name" : "Chomby Tail",
        "img" : "https://i.imgur.com/NTIFzca.gif",
        "req" : "Visit a painted Chomby.",
        "secret" : ""
    },
    "25" : {
        "name" : "Cybunny Tail",
        "img" : "https://i.imgur.com/XPcNwSG.gif",
        "req" : "Visit a painted Cybunny.",
        "secret" : ""
    },
    "26" : {
        "name" : "Gelert Camping",
        "img" : "https://i.imgur.com/Wj9MD3p.gif",
        "req" : "Visit a painted Gelert.",
        "secret" : ""
    },
    "27" : {
        "name" : "Grarrl - Grrrr",
        "img" : "https://i.imgur.com/LKSlPOQ.gif",
        "req" : "Visit a painted Grarrl.",
        "secret" : ""
    },
    "28" : {
        "name" : "Ghostkerchief - Dance!",
        "img" : "https://i.imgur.com/K046soY.gif",
        "req" : "Visit a Neopet with a Ghostkerchief attached.",
        "secret" : ""
    },
    "29" : {
        "name" : "Aisha - Farlax",
        "img" : "https://i.imgur.com/6K8iARk.gif",
        "req" : "Visit the Farlax V item description.",
        "secret" : ""
    },
    "30" : {
        "name" : "Morris - Gnome",
        "img" : "https://i.imgur.com/ivGhOxh.gif",
        "req" : "Visit the Morris Gnome item description.",
        "secret" : ""
    },
    "31" : {
        "name" : "Dead Chia",
        "img" : "https://i.imgur.com/KBOTB1J.gif",
        "req" : "Look at the Dead Chia image.",
        "secret" : ""
    },
    "32" : {
        "name" : "Korbat - Fly",
        "img" : "https://i.imgur.com/X9wjh3u.gif",
        "req" : "Visit a painted Korbat.",
        "secret" : ""
    },
    "33" : {
        "name" : "Baby - Grundo",
        "img" : "https://i.imgur.com/Loe1hPD.gif",
        "req" : "Visit a Baby Grundo.",
        "secret" : ""
    },
    "34" : {
        "name" : "Trumpeter",
        "img" : "https://i.imgur.com/F2cgqFk.gif",
        "req" : "Make your active Neopet play with any Trumpet instrument.",
        "secret" : ""
    },
    "35" : {
        "name" : "Usuki Princess",
        "img" : "https://i.imgur.com/VCuTmq2.gif",
        "req" : "Customise one of your neopets and visit the Homepage.",
        "secret" : ""
    },
    "36" : {
        "name" : "Ixi Raider",
        "img" : "https://i.imgur.com/OnjnZPj.gif",
        "req" : "Have an item with the word \"Ixi\" in your inventory and visit Meridell.",
        "secret" : ""
    },
    "37" : {
        "name" : "Negg Lover",
        "img" : "https://i.imgur.com/EPy6uCI.gif",
        "req" : "Have 10 different Neggs in your inventory and visit The Neopian Neggery.",
        "secret" : "Have ? different Neggs in your inventory and visit The Neopian Neggery."
    },
    "38" : {
        "name" : "Wizard Scorchio",
        "img" : "https://i.imgur.com/2zYCywa.gif",
        "req" : "Have an item with the word \"Scorchio\" and refresh your inventory.",
        "secret" : ""
    },
    "39" : {
        "name" : "Lutari Ice Cream",
        "img" : "https://i.imgur.com/1kNywRR.gif",
        "req" : "Feed your active Neopet any Ice Cream item.",
        "secret" : ""
    },
    "40" : {
        "name" : "Twirly Fruit",
        "img" : "https://i.imgur.com/5NHX7sk.gif",
        "req" : "Have any Tropical Food in your inventory while you read about Gadgadsbogen.",
        "secret" : ""
    },
    "41" : {
        "name" : "ON FIRE",
        "img" : "https://i.imgur.com/4pDc1ES.gif",
        "req" : "Have 8 different items with the word 'fire' in your inventory and visit a neopet with a Fire Alabriss attached.",
        "secret" : "Have ? different items with the word 'fire' in your inventory and visit a neopet with a Fire Alabriss attached."
    },
    "42" : {
        "name" : "Acara Love",
        "img" : "https://i.imgur.com/yBF42Sw.gif",
        "req" : "Have 7 different items with the word 'heart' in their names in your inventory and refresh.",
        "secret" : "Have ? different items with the word 'heart' in their names in your inventory and refresh."
    },
    "43" : {
        "name" : "Play!",
        "img" : "https://i.imgur.com/vpBhk5X.gif",
        "req" : "Have 42 unique cards in your NeoDeck and visit your NeoDeck album.",
        "secret" : "Have ? unique cards in your NeoDeck."
    },
    "44" : {
        "name" : "Ninja Ryshu",
        "img" : "https://i.imgur.com/KOY8H25.gif",
        "req" : "Defeat Ryshu the Nimmo on Mighty.",
        "secret" : ""
    },
    "45" : {
        "name" : "The Hermit",
        "img" : "https://i.imgur.com/q1mZfAx.gif",
        "req" : "Have an item with the word \"Techo\" in your inventory and visit a Blue Techo's pet lookup.",
        "secret" : ""
    },
    "46" : {
        "name" : "Twisted Roses",
        "img" : "https://i.imgur.com/U3HPnsY.gif",
        "req" : "See a Twisted Roses concert in the Tyrannian Concert Hall.",
        "secret" : ""
    },
    "47" : {
        "name" : "The Hikalakas",
        "img" : "https://i.imgur.com/oNLlnuj.gif",
        "req" : "See a The Hikalakas concert in the Tyrannian Concert Hall.",
        "secret" : ""
    },
    "48" : {
        "name" : "Neopian Philharmonic",
        "img" : "https://i.imgur.com/ZFrTBxU.gif",
        "req" : "See a Neopian Philharmonic concert in the Tyrannian Concert Hall.",
        "secret" : ""
    },
    "49" : {
        "name" : "Gruundo",
        "img" : "https://i.imgur.com/t3XwUnn.gif",
        "req" : "See a Gruundo concert in the Tyrannian Concert Hall.",
        "secret" : ""
    },
    "50" : {
        "name" : "Blue Kacheek Group",
        "img" : "https://i.imgur.com/jzxfezg.gif",
        "req" : "See a Blue Kacheek Group concert in the Tyrannian Concert Hall.",
        "secret" : ""
    },
    "51" : {
        "name" : "M*YNCI",
        "img" : "https://i.imgur.com/Wr14ryL.gif",
        "req" : "See a M*YNCI concert in the Tyrannian Concert Hall.",
        "secret" : ""
    },
    "52" : {
        "name" : "Wock Til You Drop",
        "img" : "https://i.imgur.com/hDhKWCU.gif",
        "req" : "See a Wock Til You Drop concert in the Tyrannian Concert Hall.",
        "secret" : ""
    },
    "53" : {
        "name" : "The 2 Gallon Hatz",
        "img" : "https://i.imgur.com/7ehONqm.gif",
        "req" : "See a 2 Gallon Hatz concert in the Tyrannian Concert Hall.",
        "secret" : ""
    },
    "54" : {
        "name" : "Moehawk",
        "img" : "https://i.imgur.com/rIANrre.gif",
        "req" : "See a Moehawk concert in the Tyrannian Concert Hall.",
        "secret" : ""
    },
    "55" : {
        "name" : "Sticks N' Stones",
        "img" : "https://i.imgur.com/ccA2nXA.gif",
        "req" : "See a Sticks N' Stones concert on the 10th of the month in the Tyrannian Concert Hall.",
        "secret" : ""
    },
    "56" : {
        "name" : "Brrr",
        "img" : "https://i.imgur.com/e0MYx9q.gif",
        "req" : "Feed your active Neopet any Brucicle.",
        "secret" : ""
    },
    "57" : {
        "name" : "Pandapuppet",
        "img" : "https://i.imgur.com/wtcdwwi.gif",
        "req" : "Put a Pandaphant Puppet into your Closet.",
        "secret" : ""
    },
    "58" : {
        "name" : "Green Paint Brush",
        "img" : "https://i.imgur.com/ORSpLT3.gif",
        "req" : "Have 4 different Paint Brushes in your inventory and refresh at the Rainbow Pool.",
        "secret" : ""
    },
    "59" : {
        "name" : "Red Paint Brush",
        "img" : "https://i.imgur.com/1S0A4Y4.gif",
        "req" : "Have 4 different Paint Brushes in your inventory and refresh at the Rainbow Pool.",
        "secret" : ""
    },
    "60" : {
        "name" : "Gold Paint Brush",
        "img" : "https://i.imgur.com/L3ZfZGU.gif",
        "req" : "Have 4 different Paint Brushes in your inventory and refresh at the Rainbow Pool.",
        "secret" : ""
    },
    "61" : {
        "name" : "Starry Paint Brush",
        "img" : "https://i.imgur.com/pAfpyVB.gif",
        "req" : "Have 4 different Paint Brushes in your inventory and refresh at the Rainbow Pool.",
        "secret" : ""
    },
    "62" : {
        "name" : "Snow Paint Brush",
        "img" : "https://i.imgur.com/b3tECp7.gif",
        "req" : "Have 4 different Paint Brushes in your inventory and refresh at the Rainbow Pool.",
        "secret" : ""
    },
    "63" : {
        "name" : "Spotted Paint Brush",
        "img" : "https://i.imgur.com/e6Ct95p.gif",
        "req" : "Have 4 different Paint Brushes in your inventory and refresh at the Rainbow Pool.",
        "secret" : ""
    },
    "64" : {
        "name" : "Rainbow Paint Brush",
        "img" : "https://i.imgur.com/h5FPFQF.gif",
        "req" : "Have 4 different Paint Brushes in your inventory and refresh at the Rainbow Pool.",
        "secret" : ""
    },
    "65" : {
        "name" : "Island Paint Brush",
        "img" : "https://i.imgur.com/a217yW7.gif",
        "req" : "Have 4 different Paint Brushes in your inventory and refresh at the Rainbow Pool.",
        "secret" : ""
    },
    "66" : {
        "name" : "Darigan Paint Brush",
        "img" : "https://i.imgur.com/g5lBZoO.gif",
        "req" : "Have 4 different Paint Brushes in your inventory and refresh at the Rainbow Pool.",
        "secret" : ""
    },
    "67" : {
        "name" : "Purple Paint Brush",
        "img" : "https://i.imgur.com/dslvJQJ.gif",
        "req" : "Have 4 different Paint Brushes in your inventory and refresh at the Rainbow Pool.",
        "secret" : ""
    },
    "68" : {
        "name" : "Blue Paint Brush",
        "img" : "https://i.imgur.com/Eg5K1B1.gif",
        "req" : "Have 4 different Paint Brushes in your inventory and refresh at the Rainbow Pool.",
        "secret" : ""
    },
    "69" : {
        "name" : "<i>Gross</i>",
        "img" : "https://i.imgur.com/yDpPIjR.gif",
        "req" : "Have 12 different Gross Food items in your inventory and refresh.",
        "secret" : "Have ? different Gross Food items in your inventory and refresh."
    },
    "70" : {
        "name" : "Happy Ixi",
        "img" : "https://i.imgur.com/Dqifk9z.gif",
        "req" : "Play with a Blue Ixi Plushie.",
        "secret" : ""
    },
    "71" : {
        "name" : "LEAF!",
        "img" : "https://i.imgur.com/jLv8dcX.gif",
        "req" : "Have 3 different items with the word \"Leaf\" in their names in your inventory and refresh.",
        "secret" : "Have ? different items with the word \"Leaf\" in their names in your inventory and refresh."
    },
    "72" : {
        "name" : "Acorn",
        "img" : "https://i.imgur.com/sah6t1E.gif",
        "req" : "Have an item with the word \"Acorn\" in your inventory and refresh.",
        "secret" : ""
    },
    "73" : {
        "name" : "Cybunny - Leaves",
        "img" : "https://i.imgur.com/kY6Qwpk.gif",
        "req" : "Have an item with the word \"Leaf\" in your inventory and visit a Cybunny's pet lookup.",
        "secret" : ""
    },
    "74" : {
        "name" : "Ellia - Fashionable",
        "img" : "https://i.imgur.com/x072edh.gif",
        "req" : "Put 200 unique wearables in your closet and refresh.",
        "secret" : ""
    },
    "75" : {
        "name" : "Mynci Milkshake",
        "img" : "https://i.imgur.com/FGLdwvP.gif",
        "req" : "Have 4 different items with the word \"Milkshake\" in your inventory and visit a Chocolate Mynci's pet lookup.",
        "secret" : "Have ? different items with the word \"Milkshake\" in your inventory and visit a Chocolate Mynci's pet lookup."
    },
    "76" : {
        "name" : "Chia - Stamps!!",
        "img" : "https://i.imgur.com/NrhCwrL.gif",
        "req" : "Have 100 Stamps in your Album and visit your album overview.",
        "secret" : "Have ? Stamps in your Album and visit your album overview."
    },
    "77" : {
        "name" : "Dark Battle Duck - Cuack",
        "img" : "https://i.imgur.com/jzLQlnK.gif",
        "req" : "Visit the Dark Battle Duck item description.",
        "secret" : ""
    },
    "78" : {
        "name" : "Battle Duck - Cuack",
        "img" : "https://i.imgur.com/DLgww74.gif",
        "req" : "Have an item with the word \"Duck\" in your inventory and visit the Battle Duck item description.",
        "secret" : ""
    },
    "79" : {
        "name" : "Chia Clown - Pie!",
        "img" : "https://i.imgur.com/8smFq1y.gif",
        "req" : "Feed an item with the word \"Pie\" to your Neopet.",
        "secret" : ""
    },
    "80" : {
        "name" : "Bruce - Sup?",
        "img" : "https://i.imgur.com/XTrgYZc.gif",
        "req" : "Have an item with the word \"Glasses\" in your inventory and refresh.",
        "secret" : ""
    },
    "81" : {
        "name" : "Giant Mootix",
        "img" : "https://i.imgur.com/dvpjFvK.gif",
        "req" : "Read the Journey to the Lost Isle's Comic #2.",
        "secret" : ""
    },
    "82" : {
        "name" : "Scorchio - The Auctioneer",
        "img" : "https://i.imgur.com/4Jn5n8m.gif",
        "req" : "View an auction where the top bid is over 70 million NP.",
        "secret" : "View an auction where the top bid is over ? NP."
    },
    "83" : {
        "name" : "Booktastic - Smart",
        "img" : "https://i.imgur.com/nVcTmLL.gif",
        "req" : "Visit the Booktastic Books list of a pet you own that has read 35 Booktastic Books.",
        "secret" : "Visit the Booktastic Books list of a pet you own that has read ? Booktastic Books."
    },
    "84" : {
        "name" : "Pride",
        "img" : "https://i.imgur.com/hhzYgyg.gif",
        "req" : "Have any Pride Flag in your inventory and refresh.",
        "secret" : ""
    },
    "85" : {
        "name" : "Electrical Mote",
        "img" : "https://i.imgur.com/hefFAiu.gif",
        "req" : "Have 9 items with the word \"Mote\" in your inventory and refresh.",
        "secret" : "Have ? items with the word \"Mote\" in your inventory and refresh."
    },
    "86" : {
        "name" : "Gourmet Foods",
        "img" : "https://i.imgur.com/kioC8OU.gif",
        "req" : "Feed your active pet 200 Gourmet Foods and visit its Gourmet Club page.",
        "secret" : ""
    },
    "87" : {
        "name" : " Give Us PUMPKINS",
        "img" : "https://i.imgur.com/BUeZvmC.gif",
        "req" : "Have 6 items with the word \"Pumpkin\" in your inventory and visit the pet lookup of any Halloween Neopet with a Halloween Petpet attached.",
        "secret" : "Have ? items with the word \"Pumpkin\" in your inventory and visit the pet lookup of any Halloween Neopet with a Halloween Petpet attached."
    },
    "88" : {
        "name" : "Fall Underwater?!",
        "img" : "https://i.imgur.com/3B6tPLh.gif",
        "req" : "Have 8 items with the word \"Pumpkin\" in your inventory and visit Maraqua.",
        "secret" : "Have ? items with the word \"Pumpkin\" in your inventory and visit Maraqua."
    },
    "89" : {
        "name" : "Mutant Scorchio - Bookworm",
        "img" : "https://i.imgur.com/pM23tdY.gif",
        "req" : "Visit the Books list of a pet you own that has read 300 Books.",
        "secret" : "Visit the Books list of a pet you own that has read ? Books."
    },
    "90" : {
        "name" : "Grundos Cafe - Tasty",
        "img" : "https://i.imgur.com/tmkM5Md.gif",
        "req" : "Buy something from Grundo's Cafe for at least 5000 NP.",
        "secret" : "Buy something from Grundo's Cafe for at least ? NP."
    },
    "91" : {
        "name" : "Pizzaroo",
        "img" : "https://i.imgur.com/9fNbqsj.gif",
        "req" : "Feed your Neopet an item with the word \"Pizza\".",
        "secret" : ""
    },




    "96" : {
        "name" : "Puppyblew",
        "img" : "https://i.imgur.com/ztiQvZ4.gif",
        "req" : "Attach a Puppyblew to your Neopet and visit its pet lookup.",
        "secret" : ""
    },




    "101" : {
        "name" : "FEED ME",
        "img" : "https://i.imgur.com/kaFGkpm.gif",
        "req" : "Do not feed your active neopet until its hunger says 'dying', then visit its pet lookup.",
        "secret" : ""
    },





    "107" : {
        "name" : "The Meteors",
        "img" : "https://i.imgur.com/CnCHUkA.gif",
        "req" : "Random when poking the Meteor hard enough to get a prize.",
        "secret" : ""
    },
    "108" : {
        "name" : "Anchor Krawken",
        "img" : "https://i.imgur.com/AhOv46x.gif",
        "req" : "Random when getting an item from Anchor Management.",
        "secret" : ""
    },
    "109" : {
        "name" : "Weight of the Marrow",
        "img" : "https://i.imgur.com/YreQ2fi.gif",
        "req" : "Correctly Guess the Weight of the Marrow.",
        "secret" : ""
    },
    "110" : {
        "name" : "Lunar Temple",
        "img" : "https://i.imgur.com/9U4ay4a.gif",
        "req" : "Random when choosing the correct phase of Kreludor at the Lunar Temple.",
        "secret" : ""
    },
    "111" : {
        "name" : "ZAPPED",
        "img" : "https://i.imgur.com/lWXhZzF.gif",
        "req" : "Zap a Neopet at The Laboratory.",
        "secret" : ""
    },
    "112" : {
        "name" : "Underwater Chef",
        "img" : "https://i.imgur.com/K4nQ6lC.gif",
        "req" : "Complete a quest at the Mystery Island Kitchen.",
        "secret" : ""
    },
    "113" : {
        "name" : "Kadoatie - Stars",
        "img" : "https://i.imgur.com/ynyL6ku.gif",
        "req" : "Visit your User Lookup when you've fed 1 Kadoatie.",
        "secret" : ""
    },
    "114" : {
        "name" : "Fruit Machine",
        "img" : "https://i.imgur.com/mYjxPkV.gif",
        "req" : "Win something from the Fruit Machine.",
        "secret" : ""
    },
    "115" : {
        "name" : "Feeedd mee... ",
        "img" : "https://i.imgur.com/xdt2aZL.gif",
        "req" : "Complete one of The Esophagor's quests.",
        "secret" : ""
    },
    "116" : {
        "name" : "Test Your Strength",
        "img" : "https://i.imgur.com/WbbQ2yH.gif",
        "req" : "Random when scoring 5+ in Test Your Strength.",
        "secret" : ""
    },
    "117" : {
        "name" : "Marina - Healing",
        "img" : "https://i.imgur.com/odJblcV.gif",
        "req" : "Have all of your pets fully healed at The Healing Springs.",
        "secret" : ""
    },
    "118" : {
        "name" : "Money Tree",
        "img" : "https://i.imgur.com/U7oI6p7.gif",
        "req" : "Grab an item from The Money Tree.",
        "secret" : ""
    },
    "119" : {
        "name" : "Grave Danger",
        "img" : "https://i.imgur.com/cysd9AM.gif",
        "req" : "Random when getting an item from Grave Danger.",
        "secret" : ""
    },
    "120" : {
        "name" : "Magma Pool",
        "img" : "https://i.imgur.com/L5BYFW6.gif",
        "req" : "Refresh at the Magma Pool.",
        "secret" : ""
    },
    "121" : {
        "name" : "Shop Wizard",
        "img" : "https://i.imgur.com/k8Z48QR.gif",
        "req" : "Random when searching for an item for the first time using the Shop Wizard.",
        "secret" : ""
    },
    "122" : {
        "name" : "WISH",
        "img" : "https://i.imgur.com/UD5X4yr.gif",
        "req" : "Have a Wishing Well wish come true.",
        "secret" : ""
    },
    "123" : {
        "name" : "Scorchio - Auction House",
        "img" : "https://i.imgur.com/r1V4jac.gif",
        "req" : "Random when bidding on any auction at the Neopian Auction House.",
        "secret" : ""
    },
    "124" : {
        "name" : "Hubert - Yum!",
        "img" : "https://i.imgur.com/L7ChcLl.gif",
        "req" : "Buy a Hot Dog from Hubert's Hot Dogs.",
        "secret" : ""
    },
    "125" : {
        "name" : "Thrift Store Fashion",
        "img" : "https://i.imgur.com/TvVrtRx.gif",
        "req" : "Grab a donation from The Neopian Second-Hand Shoppe.",
        "secret" : ""
    },
    "126" : {
        "name" : "Coltzan Shrine",
        "img" : "https://i.imgur.com/zMn4gAo.gif",
        "req" : "Random when visiting Coltzan's Shrine.",
        "secret" : ""
    },
    "127" : {
        "name" : "Tombola",
        "img" : "https://i.imgur.com/fX92gjH.gif",
        "req" : "Random when winning Tombola.",
        "secret" : ""
    },
    "128" : {
        "name" : "Bagatelle",
        "img" : "https://i.imgur.com/YbbURbG.gif",
        "req" : "Random when winning something at Bagatelle using the instant link.",
        "secret" : ""
    },
    "129" : {
        "name" : "Ahoy!",
        "img" : "https://i.imgur.com/BkkG7Jp.gif",
        "req" : "Have 100x your bet ready to collect in Food Club.",
        "secret" : "Have ?x your bet ready to collect in Food Club."
    },
    "130" : {
        "name" : "Judge Hog",
        "img" : "https://i.imgur.com/HDJUdyv.gif",
        "req" : "Complete a 2-Player Battle at the Battledome.",
        "secret" : ""
    },
    "131" : {
        "name" : "Hubrid Nox",
        "img" : "https://i.imgur.com/3fSIw54.gif",
        "req" : "Defeat Hubrid Nox in Neoquest II.",
        "secret" : ""
    },
    "132" : {
        "name" : "Ain't Got Time",
        "img" : "https://i.imgur.com/gRqSSAl.gif",
        "req" : "Send a score of 1700+ in Time Tunnel.",
        "secret" : "Send a score of ? in <a href=\"/games/game.phtml?game_id=536\">Time Tunnel.</a>"
    },
    "133" : {
        "name" : "Quest Log",
        "img" : "https://i.imgur.com/dfXDgb0.gif",
        "req" : "Claim a Weekly Reward from the Quest Log.",
        "secret" : ""
    },

    "135" : {
        "name" : "Mystery Pic",
        "img" : "https://i.imgur.com/U8PfnG8.gif",
        "req" : "Guess the Mystery Pic.",
        "secret" : ""
    },
    "136" : {
        "name" : "Cooty Wars",
        "img" : "https://i.imgur.com/yfKYKjs.gif",
        "req" : "Send a score of 900+ in Cooty Wars.",
        "secret" : "Send a score of ? in <a href=\"/games/game.phtml?game_id=796\">Cooty Wars.</a>"
    },
    "137" : {
        "name" : "Elephante - Cr acked",
        "img" : "https://i.imgur.com/tkFeUar.gif",
        "req" : "Send a score of 120+ in Rink Runner.",
        "secret" : "Send a score of ? in <a href=\"/games/game.phtml?game_id=220\">Rink Runner.</a>"
    },
    "138" : {
        "name" : "Splat-A-Sloth",
        "img" : "https://i.imgur.com/Fwcln2k.gif",
        "req" : "Hit the Sloth in <a href=\"/games/game.phtml?game_id=81\">Splat-A-Sloth.</a>",
        "secret" : ""
    },
    "139" : {
        "name" : "Pyramids",
        "img" : "https://i.imgur.com/RblFMp1.gif",
        "req" : "Clear 10 Pyramids.",
        "secret" : "Clear ? Pyramids."
    },
    "140" : {
        "name" : "Kastraliss",
        "img" : "https://i.imgur.com/6N9ncy3.gif",
        "req" : "Defeat Kastraliss on Mighty.",
        "secret" : ""
    },
    "141" : {
        "name" : "Hasee Bounce",
        "img" : "https://i.imgur.com/OKTeNwV.gif",
        "req" : "Send a score of 400+ in Hasee Bounce.",
        "secret" : "Send a score of ? in <a href=\"/games/game.phtml?game_id=368\">Hasee Bounce.</a>"
    },
    "142" : {
        "name" : "Tax Beast",
        "img" : "https://i.imgur.com/td2qVJ1.gif",
        "req" : "Defeat the Tax Beast on Mighty.",
        "secret" : ""
    },
    "143" : {
        "name" : "Leeroy",
        "img" : "https://i.imgur.com/grKXOxC.gif",
        "req" : "Refresh at the Coconut Shy.",
        "secret" : ""
    },
    "144" : {
        "name" : "Hired!",
        "img" : "https://i.imgur.com/tlE81gv.gif",
        "req" : "Visit the pet lookup of a pet you own with 10 jobs completed at the Faerieland Employment Agency.",
        "secret" : ""
    },
    "145" : {
        "name" : "Jubble Bubble",
        "img" : "https://i.imgur.com/RJKAfgm.gif",
        "req" : "Send a score of 1500+ in Jubble Bubble.",
        "secret" : "Send a score of ? in <a href=\"/games/game.phtml?game_id=619\">Jubble Bubble.</a>"
    },





    "151" : {
        "name" : "Mr. Chuckles - HAHAHA",
        "img" : "https://i.imgur.com/LO54N0E.gif",
        "req" : "Defeat Mr. Chuckles on Mighty.",
        "secret" : ""
    },
    "152" : {
        "name" : "Boochi - ZZZAPP!!",
        "img" : "https://i.imgur.com/h2NczaZ.gif",
        "req" : "Defeat Boochi on Mighty.",
        "secret" : ""
    },
    "153" : {
        "name" : "Plumbeard",
        "img" : "https://i.imgur.com/2Q5yfE8.gif",
        "req" : "Defeat Plumbeard on Mighty.",
        "secret" : ""
    },
    "154" : {
        "name" : "Snowager - Warm",
        "img" : "https://i.imgur.com/MQYlQ0N.gif",
        "req" : "Defeat The Snowager on Mighty.",
        "secret" : ""
    },
    "155" : {
        "name" : "The Drenched",
        "img" : "https://i.imgur.com/TO0ceRd.gif",
        "req" : "Defeat The Drenched on Mighty.",
        "secret" : ""
    },
    "156" : {
        "name" : "Edna - Shadow",
        "img" : "https://i.imgur.com/cuXJlTT.gif",
        "req" : "Send a score of 1400+ in Edna's Shadow.",
        "secret" : "Send a score of ? in <a href=\"/games/game.phtml?game_id=821\">Edna's Shadow.</a>"
    },
    "157" : {
        "name" : "Neoquest - Xantan Reborn",
        "img" : "https://i.imgur.com/AcqHwHJ.gif",
        "req" : "Beat Neoquest I on InSaNe and visit your user lookup.",
        "secret" : ""
    },
    "158" : {
        "name" : "Neoquest II - King Terask",
        "img" : "https://i.imgur.com/xhdZM4z.gif",
        "req" : "Beat Neoquest II on InSaNe and visit your user lookup.",
        "secret" : ""
    },
    "159" : {
        "name" : "Dar-BLAT!!!",
        "img" : "https://i.imgur.com/bFKPS1C.gif",
        "req" : "Hit the Darblat in <a href=\"/games/game.phtml?game_id=895\">Dar-BLAT!!!</a>",
        "secret" : ""
    },
    "160" : {
        "name" : "Coconut Shy - Almost!",
        "img" : "https://i.imgur.com/Zfh2yrM.gif",
        "req" : "Make a coconut wobble at the Coconut Shy using the instant link.",
        "secret" : ""
    },

    "162" : {
        "name" : "Petpet Cannonball",
        "img" : "https://i.imgur.com/2VVn4z8.gif",
        "req" : "Send a score of 700+ in Petpet Cannonball.",
        "secret" : "Send a score of ? in <a href=\"/games/game.phtml?game_id=553\">Petpet Cannonball.</a>"
    },


    "165" : {
        "name" : "NO Loans",
        "img" : "https://i.imgur.com/ChBttSO.gif",
        "req" : "Reach 100,000 Bank Interest.",
        "secret" : "Reach ? Bank Interest."
    },
    "166" : {
        "name" : "Befriended",
        "img" : "https://i.imgur.com/VNRnhLJ.gif",
        "req" : "Refresh at your Neofriends list.",
        "secret" : ""
    },
    "167" : {
        "name" : "I'm Social",
        "img" : "https://i.imgur.com/fJqxZn0.gif",
        "req" : "Visit your Guild Board on 5 different days.",
        "secret" : ""
    },



    "171" : {
        "name" : "Neopian Companies",
        "img" : "https://i.imgur.com/9NSUeVI.gif",
        "req" : "Refresh at the Neopian Companies Stock List.",
        "secret" : ""
    },
    "172" : {
        "name" : "Broker Chia - Nigel",
        "img" : "https://i.imgur.com/tPurGFp.gif",
        "req" : "Have 30k shares of the same company at the Stock Market.",
        "secret" : "Have ? shares of the same company at the Stock Market."
    },
    "173" : {
        "name" : "Acara - Stock Market",
        "img" : "https://i.imgur.com/1sZPio0.gif",
        "req" : "Have 100k shares at the Stock Market.",
        "secret" : "Have ? shares at the Stock Market."
    },

    "175" : {
        "name" : "Petpet Protector",
        "img" : "https://i.imgur.com/Awcutt2.gif",
        "req" : "Visit the pet lookup of a pet you own with a Petpet Protection League trophy.",
        "secret" : ""
    },
    "176" : {
        "name" : "Big Eye",
        "img" : "https://i.imgur.com/6JG9pU0.gif",
        "req" : "Refresh at the Bug Eye McGee Neopedia article.",
        "secret" : ""
    },
    "177" : {
        "name" : "Lutari Island",
        "img" : "https://i.imgur.com/FCiNuOZ.gif",
        "req" : "Refresh at Lutari Island.",
        "secret" : ""
    },

    "179" : {
        "name" : "Storytelling - Writer",
        "img" : "https://i.imgur.com/kEmfEEL.gif",
        "req" : "Have your story published in the Storytelling Competition.",
        "secret" : ""
    },
    "180" : {
        "name" : "I ♥ Fonts",
        "img" : "https://i.imgur.com/qZcBvw8.gif",
        "req" : "Refresh at your Neoboard Preferences.",
        "secret" : ""
    },
    "181" : {
        "name" : "Mira - Space",
        "img" : "https://i.imgur.com/hmKHIJh.gif",
        "req" : "Read about Mira the Space Faerie at the Gallery of Heroes.",
        "secret" : ""
    },
    "182" : {
        "name" : "Neodeck Cards",
        "img" : "https://i.imgur.com/330hzDj.gif",
        "req" : "Refresh at your NeoDeck Album.",
        "secret" : ""
    },
    "183" : {
        "name" : "Chia - Poetry",
        "img" : "https://i.imgur.com/7d3RBhL.gif",
        "req" : "Have your poem published in the Poetry Competition.",
        "secret" : ""
    },
    "184" : {
        "name" : "Jordie",
        "img" : "https://i.imgur.com/1BLhQ58.gif",
        "req" : "Refresh at the Atlas of the Ancients.",
        "secret" : ""
    },
    "185" : {
        "name" : "Harker",
        "img" : "https://i.imgur.com/4a8EC2J.gif",
        "req" : "Refresh at Bagatelle.",
        "secret" : ""
    },
    "186" : {
        "name" : "Armin - Tough!",
        "img" : "https://i.imgur.com/K2AApe0.gif",
        "req" : "Read about Armin in the Neopedia and refresh.",
        "secret" : ""
    },
    "187" : {
        "name" : "Bori - Miner",
        "img" : "https://i.imgur.com/DBCfKrk.gif",
        "req" : "Collect 100 unique items in your gallery and refresh.",
        "secret" : "Collect ? unique items in your gallery and refresh."
    },
    "188" : {
        "name" : "Respect Your Elders",
        "img" : "https://i.imgur.com/wu3DwGA.gif",
        "req" : "Visit your user lookup when your account is over 10 years old.",
        "secret" : ""
    },
    "189" : {
        "name" : "Neopets TTRPG",
        "img" : "https://i.imgur.com/Rga820y.gif",
        "req" : "Visit the grundo warehouse and type in the code \"official-ttrg\".",
        "secret" : ""
    },
    "190" : {
        "name" : "Kiko Lake Tourist",
        "img" : "https://i.imgur.com/74WKEoA.gif",
        "req" : "Refresh at the Glass Bottom Boat Tours.",
        "secret" : ""
    }
}

const blankAvatar = "https://i.imgur.com/iSsiWjd.png";
const tropicalFoods = ["Pimplepepper","Tagobo Potion","Funnydew Melon","Nurako","Star Fish Sandwich","Larfle","Jug of Fresh Phearade","Small Fruit Basket","Boingari","Drillaroot","Flatfruit Lollypop","Islandberry Tea","Gadgads Bowl",
                       "Fruitmallow Grog","Callenuella","Corn Balls","Teal Juppie","Geraptiku Punch","Grondik Root","Melowhirl","Geraptiku Burger","Nolafruit","Twirly Fruit Grog","Crunchy Skullberry","Hanging Fruit Basket","Snowberry Crepe",
                       "Cocoa Juppie","Slice of Lemoran Pie","Banan","Mutant Tigersquash","Tobbie Fruit","Azzle Salad","Frucumber","Rubber Fruit","Slugroot","Banango Bread","Twirly Fruit","Snot Doughnutfruit","Zeenana Crepe",
                       "Blueberry Fruit Pancakes","Munion","Crater Fruit","Apple Fruit Pancakes","Azzle Fruit Leather Socks","Grunion Fruit Shake","Islandberry Fruit Kebab","Strawberry Fruit Pancakes","Tigerbuggle Fruit Pancakes",
                       "Papayanana","Sloople Flower","Molabean","Thornberry Fruit Grog","Thornberry Crepe","Chokato Crepe","Gooseberry Shake","Shrimptail with Kelp Sauce","Flatfruit Fruit Leather Socks","Blobbule","Sliced and Pickled Lemoran",
                       "Juicy Warterberry","Stramberry Coconut Milk","Tigersquash Crepe","Azzle Coffee","Blurf Coconut Milk","Sprinkled Doughnutfruit","Lesser Bearded Plantfruit","Braised Lotus Root","Flatfruit","Pickled Eel",
                       "Pineapple Doughnutfruit","Purpanna","Roseatte Sundae","Thornata Juice","Moonfruit","Fruity Bread Salad","Orangomelon","Pluburb","Honeyplume","Berrybiscus Tartlet","Appriberry","Banango","Glowleaf Melon",
                       "Limestone Doughnutfruit","Wingafruit","Coconut Soup","Ergy Fruit Cupcake","Turnla","Draikfruit","Roseatte Latte","Dragato","Paruckle","Roseatte Ice Cream","Unripe Bomberry","Scrampi Salad","Tropical Cybunny Fruit Salad",
                       "Kelpcakes with Green Sauce","Seafood Twist","Chilled Kelp Cone","Lemoran Fruit Leather Socks","Spiraberry","Cloudberry","Flatfruit Shake","Flotato","Flamear","Munuberry Coconut Milk","Islandberry Ice Cream",
                       "Grey Scorchipepper","Lemwart","Sardplant Fruit Grog","Tetraberry Pie","Triapple","Darttlefruit","Azzle Sauce","Boingari Mince Pie","Chilled Seaweed Cone","Combfruit","Honeyplume Pie","Kougra Blurf Shake","Lemberryade",
                       "Oyster Salad","Ripe Bomberry","Roseatte","Summerberry","Twirly-Fruit Fruit Leather Socks","Glowleaf Tea","Tetraberry","Sliced and Pickled Azzle","Clemango","Flarble","Maraquan Gumbo","Seaweed Lasagne",
                       "Jug of Fresh Tigerade","Ugnot","Kelp Lasagne","Red Goparokko Fruit","Skrazapod","Sliced and Pickled Duoroot","Decorated Fruit Basket","Star Fish Sundae","Azzle","Puchini","Splibean","Astranna","Heart Shaped Fruit Cake",
                       "Turihar Berry","Turnla Pie","Ellecha","Hot Skrazzle","Taokicarrot","Jug of Fresh Lemonade","Oranella","Banango Punch","Cocoalatte Fruit Leather Socks","Duoroot","Islandberry","Papaya with Seaweed","Tetraberry Tea",
                       "Fungi Fruit Scone","Grootafruit","Famous Crab Burger","Coconut Cocktail","Kougra Owabit Shake","Mixed Berries Pancake","Green Octopepper","Chrysaberry Seashell","Dung Doughnutfruit","Poached Pearange","Elppa",
                       "Kougra Nolafruit Shake","Squirming Salad","Sliced and Pickled Pimplepepper","Owabit","Crescent Moonfruit","Scalemelon","Anemoneberry","Jummie Roll","Lemoran","Scabergy Seashell","Wartroot","Bell Apple","Waterberry Pie",
                       "Koyle Fruit Grog","Scalefruit","Grunion Fruit Grog","Pearange","Froozle","Gleenut","Orange Enchiladas","Explodamelon","Stone Fruit","Turihar Berry Coconut Milk","Jug of Fresh Juppieade","Splaash","Aggleroot",
                       "Galaxia Berries","Pineapple Breeze","Trapango","Goparokko Fruit Punch","Fuzzinberry","Eitchtwoo Melon","Blunella","Rahkleaf Melon","Chrysanberry","Munuberry","Zalacca Fruit","Savoury Cubes","Harffel Fruit","Mano Root",
                       "FruitMallow","Mango Crab Salad","Frozen Prawn Delight","Mint Stew","Vanilla Tea","Red Octopepper","Vegan Grenanna Mousse Cake","Tasty Tiki Trees","Cocolatte Fruit","Wicker Fruit Cornucopia","Melonberry",
                       "Goparokko Island Fruit","Merryberry","Kabuggles","Tagobo Plant","Flatfruit Tuskaninny Ice Cream","Krakuberry Juice","Prickly Doughnutfruit","Sardplant","Tigerfruit Toffee Apple","Perimontwist","Pluburb Pie",
                       "Blurf Mince Pie","Banango Toffee Apple","Cheesy Cod and Tofu Burger","Pango Chute","Rahketmelon","Strawberry Doughnutfruit","Anchovy Casserole","Heartatoe","Icy Hot Berry","Prickapome","Gurney Fruit","Underwater Pizza",
                       "Gruish Melon","Tangleberry","Lemaniac","Lime Starfish","Vinberry","Pipper","Thornata","Fishy Nibbles","Agueena","Vionanna","Frootafruit","Chocolate Orange Volcano","Frosted Doughnut","Stuffed Fish Head","Koyle",
                       "Lobster Berry Surprise","Cheesy Pineapple Sticks","Seedless Skeem Jam","Seafood Pasta Salad","Wertholoupe","Blurf","Coconut Fruit Cup","Myncibean Punch","Peachpa","Gwermal","Melow","Foozette","Fresh Shark Fin",
                       "Purple Juppie","Combomelon Plant","Greengage Breeze","Zeevine","Red Sardplant","Postula","Seven Layer Mousse","Scabu","Fungi Fruit","Grunion","Spotkato","Vegetarian Sea Taco","Jug of Fresh Lemoranade","Red Juppie",
                       "Goparokko Fish Surprise","Gooseberries","Starberry","Juicy Melon","Golden Juppie","Pink Peachpa Cooler","Fundus Fruit","Ombus Fruit","Arnapple","Carnapepper","Tigersquash Mega","Purplum","Stramberry","Scabergy",
                       "Tigermelon","Snowberries","Purple Sardplant","Cloudberry Doughnutfruit","Green Chyrsaberry","Tigerbuggles","Fruity Swirl Souffle","Spironut","Pheppacorn","Mystery Island Tiki Grass Wrap","ErgyFruit","Botago Plant",
                       "Tigerfruit","Muntando Fruit","Lavaberry","Thistleberry Shake","RainbowBerry","Strange Pinanna","Mystery Island Tiki Burger","Krakuberries","Strawberry Salmon","Mystery Island Coconut Rice Bowl","Minty Shrimp",
                       "Roe Sushi","Fresh Lobster Tail","Strong Berry","Chokato","Plantcake","Thornberry","Phear","Icy Doughnutfruit","Pinanna Plus","Purple Doughnutfruit","Sponge Doughnutfruit","Tigersquash","Yellow Doughnutfruit","Zeenana",
                       "Simmered Tropical Fruit Bowl","Songray","Golden Doughnutfruit","Bludberry","Blue Doughnutfruit","Checkered Doughnutfruit","Zibblifruit","Pink Chokato","Fish Doughnutfruit","Bargella Root","Bargil Surprise",
                       "Bargjelly Sundae","Blopple","Bubbling Kraku Thickshake","Carburnujelly Sandwich","Carburnup Pepper","Dargil Meat","Felrum Jelly Cube","Flaming Bomberry","Globlin","MechaBerries","Munparaberry","Plumberry","Sourmelon",
                       "Sourmelon Stew","Starry Scorchio Berry","Super Gelupepper","TeaLeef","Thistleberry Fruit Salad","Tigerbuggle Mints","Tonunut","Transparaberry","Twirly Fruit Stew","Qanfire Fruit","Cramjar","Blue Cocofizz","Shebberries",
                       "Lobsterclaw Salad","Vinarok","Stuffed Penupe","Octoberry","Gwernial","BluePepper","Thistleberry","Blairnut","Acnefruit","Gelupepper","Purple Juppie Slurpbowl","Doughnutfruit","Cornupepper","Evil Pinanna","Ugly Pinanna",
                       "Vein Cabbage","Marafalop","Fiery Doughnutfruit","Green Doughnutfruit","Rainbow Doughnutfruit","Silver Doughnutfruit"];
const grossFoods = ["Delightful Petpetpet Medley","Mouldy Left-Overs","Rotten Omelette Sandwich","Rotten Egg Salad","Rotten Wocky Day Cupcake","Cottage Sneeze Cheese","Dung Cream Sandwich","Gravy Smoothie","Sardine Prune Parfait","Grub Skewer",
                    "Hot Dog Flavoured Yogurt","Rotten Negg and Onion Quesadilla","Banana Lice Cream","Esophagor Bowl of Slimy Stew","Pickled Leeches","Courgette Ice Cream","Fruit Fly Surprise","Maggot and Cheese Burger","Peanut Seaweed Gum",
                    "Sardine Vinegar Gum","Grubwich","Mutant Ketchup","Waffles and Ketchup","Chocolate Ice Cream with Pickle Syrup","Rotten Tomato Salad","Slorg Ice Cream","Sausage Mayo Gum","Worms and Dirt Sundae","Eyeball Fungus",
                    "Cheese Covered Caramel Apple","Eyeball Pie","Ground Rolls","Onion Sorbet","Sweetcorn with Tomato Sauce","Alien Aisha Splurgles","Mac and Cheese Ice Cream","Sherbet Gravy","Fish Pop","Chilli Prawn Juice",
                    "Chocolate Covered Onion","Cinnamon Tuna and Guacamole","Finger Crisps","Fish Fingers and Custard","Grub Waffles","Grubs in Cheese","Half Eaten Bar of Chocolate","Pickled Feet","Turkey With Candy Cane Stuffing",
                    "Asparagus Yogurt","Frosted Grub Burrito","Raw Grubwich","Strawberry and Cream Fish Pop","Fresh Clam Jam","Holiday Dinner In A Can","Rotten Wormy Apple","Snot Snake","Toasted Quiggle Legs","Anything Soup",
                    "Chocolate Coated Fish Pop","Eyeball Sushi","Grubburger","Ham and Custard Croissant","Ketchup Caramel Squid Delight","Corn and Jelly Ball","Liver Smoothie","Nachos and Cheese Ice Cream","Tuna Porridge","Buttered Watermelon",
                    "Chocolate Covered Burger","Linty Bologna","Moldy Pancakes","Sand Sandwich","Scab Cake","Spring Onion Ice Cream","Chocolate Taco","Anchovy Loaf","Strawberry Ice Cream with Balsamic Vinegar Syrup","Maggot Pizza","Maggot Stew",
                    "Smoked Tuna on Chocolate Toast","Chocolate Fish Pop Milkshake","Very Rotten Tomato","Layered Snot Gobstopper","Onion Puff","Salmon Mousse Tea","Chocolate Liver Casserole","Peaburger Delight","Rancid Dung Coffee",
                    "Chocolate Beef Custard","Mud n Mayo Dip","Wiggling Grub Surprise","Black Widow Truffle","Lemon and Lime Fish Pop","Mashed Potatoes and Mud","Minced Beef Pretzel","Recycled Candy Corn","Bean Yogurt Surprise",
                    "Blueberry Beetle Cracker","Calamari Tongue Wrap","Cheesy Potato Stuffed Doughnut","Chewed Gum Ice Cream Cone","Coconut Cream Steak","Duck Neck","French Flies","Honeyfly Smoothie","Hot Fly Cocoa","Jellied Eggs",
                    "Ketchup-Flavoured Milk","Pack of Snot-Flavoured Gum","Worm Burger","Can of Pickled Spinach","Fantastic Fly Pie","Meat Cake","Blueberry Fish Pop","Chocolate Sundae with Ham","Tomato and Coconut Pudding","Paint Milkshake",
                    "Dung Taco","Shrimp Cupcake","Stale Black Jelly Beans","Strawberry and Cheese Milkshake","Woo Woo Grub","Ice Cream and Fries","Mustard Durian Smoothie","Ant Eaten Ham","Bacon and Eggs Ice Cream","Delectable Mould Garden",
                    "Fermented Slop Surprise","Lime Milkshake","Mucus Soup","Tempura-Fried Worms","Tonguewich","Tuna Stroganoff","Carawool","Spirulina and Laver Candy","Pesto Banana Burger","Mayo-Doused Batter-Fried Grackle Bugs with Honey Walnuts",
                    "Peanut Butter and Jelly Egg Cabbage","Fermented Fish Tart","Snail Sub","Steeped Tea","Worm Infested Cheese","Ant Soup","Roasted Draphly Kabob","Chewing Dung","Ketchup Ice Cream","Mayonnaise Filled Chocolate",
                    "Unwanted Fruit Cake","Lime Chilli Gum","Sugared Meatballs","Worm Nugget","Infested Peach","Lice Rice","Pork Ice Cream","Bluehamberry Burger","Cheese and Eel Burger","Cup-O-Slime","Dandergum","Hot Worm Hot Dog",
                    "Maggoty Egg Roll","Millennia Egg","Negg Nobody Found Last Year","Strawberry Artichoke","Pasta And Eyes","Grub Parfait","Stuffed Frog","Dented Can of Expired Pumpkin Neocola","Fresh Seaweed Pie","Green Slime and Eggs Delight",
                    "Peanut Butter and Pickle Sandwich","Pickled Moehog Feet","Questionable Bag of Stale Crisps","Beet and Onion Pudding","Meatballs and Worms","Symol Dinner","Pile of Rotten Neggs","Mop n Slop","Ground Beef Smores",
                    "Alien Aisha Zapzaggle","Tomato Stuffed Doughnut","Greasy Bread Spread","Dr. Backwash","Brain Kebab","Mashed Potato with Strawberry Sauce","Olive Marshmallow Taco","Toe Nail Soup","Mustard Ice Cream","Iced Fish Cake",
                    "Ants on Ants","Bucket Full of Goo","Chebu Chebu Grub","Chip Butty Pizza","Chocolate Duck Rump","Chocolate Fish","Chocolate Taquitos","Jellyfish Sundae","Mynci Brain Sandwich","Octopus Ice Cream Platter","Pterducken",
                    "Rancid Old Meat","Slithering Snake Taco","Snout Plant","That Fruit Basket You Forgot About","Wasp Biscuits","Wocky Tacos","Onion Cola","Pound Cake and Frosting Sandwich","Peanut Butter and Pickles","Spongy Mound",
                    "Pumpkin Gut Cookies","Rock Baby Cabbages","Tomato Dipped Chocolate Bar","Tomato Cheesecake","Marshmallows with Gravy","Fish and Rhubarb Burgers","Coconut Ketchup Stew","Snailcorn Parfait","Fish Flavour Ice Cream",
                    "Salmon Fishwich","Extra Gherkin Hot Dog","Potato Ice Cream","Nutritional Block","Week Old Glass of Milk","Crunchy Bone Sandwich","Waffle Sandwich","Ha Ha Grub","Smelly Sardine Wrap","Buried Burger","Cheesy Apple Stick",
                    "Clamade","Toffeed Brain","Stick of Butter","Red Sausage","Danderlice Surprise","Peanut Butter Pizza","Bluna Burger","Red Eggs on Toast","Mayonnaise Doughnut","Yellow Growth","Ham and Hair Sandwich","Maggoty Spud",
                    "Spoc Spoc Grub","Wa Wa Grub","Worm and Leech Pizza","Swill Pudding","Tentacled Alien Drink","Spoc Spoc II","Roo Roo Grub"];

const avatarMax = 1000;
const agreementVer = 1;
//Debug mode makes a lot of stuff output to console
const debugMode = false;

if (document.URL.includes("https://www.neopets.com/evil/showcreature.phtml?villain=26")){
    //Razul
    notifyAvatar(8);
}
if (document.URL.includes("https://www.neopets.com/neopedia.phtml?neopedia_id=")){
    //Neopedia
    if (document.URL=="https://www.neopets.com/neopedia.phtml?neopedia_id=18"){
        //Princess Amira
        notifyAvatar(10);
    } else if (document.URL=="https://www.neopets.com/neopedia.phtml?neopedia_id=72"){
        //Twirly Fruit
        let inventoryMatrix = getInventory();
        for (let i = 0; i < tropicalFoods.length; i++){
            if (inventoryMatrix[0].indexOf(tropicalFoods[i])>-1){
                notifyAvatar(40);
                break;
            }
        }
    } else if (document.URL=="https://www.neopets.com/neopedia.phtml?neopedia_id=97"){
        //Big Eye
        if(roll(25))notifyAvatar(176);
    } else if (document.URL=="https://www.neopets.com/neopedia.phtml?neopedia_id=94"){
        //Armin - Tough
        if(roll(73))notifyAvatar(186);
    }

}

if (document.URL.includes("https://www.neopets.com/weather.phtml")){
    //Weather
    let content = document.getElementsByClassName("content");
    content = content[0].innerText;
    debugConsole(content);
    if ((content.includes("Today's Weather: hot"))||(content.includes("Today's Weather: boiling hot"))) notifyAvatar(12);
}

if (document.URL.includes("https://www.neopets.com/hero/showhero.phtml?hero=")){
    //Heroes
    if (document.URL.includes("hero=16")){
        notifyAvatar(13);
    } else if (document.URL.includes("hero=13")){
        notifyAvatar(14);
    } else if (document.URL.includes("hero=21")){
        notifyAvatar(15);
    } else if ((document.URL.includes("hero=spacefaerie"))||(document.URL = "https://www.neopets.com/hero/showhero.phtml?hero=2")){
        notifyAvatar(181);
    }

}

if (document.URL.includes("https://www.neopets.com/objects.phtml?type=shop&obj_type=62")){
    //Jelly Foods
    notifyAvatar(18);
}

if (document.URL.includes("https://www.neopets.com/jelly/colouring_page.phtml")){
    //Jelly Coloring
    notifyAvatar(19);
}

if (document.URL.includes("https://www.neopets.com/jelly/greenjelly.phtml")){
    //Green Jelly
    notifyAvatar(20);
}

if (document.URL.includes("https://www.neopets.com/search.phtml?selected_type=object&string=")){
    //Items
    if (document.URL.replaceAll("%2B","+").includes("string=Farlax+V")){
        notifyAvatar(29);
    } else if (document.URL.replaceAll("%2B","+").includes("string=Morris+Gnome")){
        notifyAvatar(30);
    } else if (document.URL.replaceAll("%2B","+").includes("string=Dark+Battle+Duck")){
        notifyAvatar(77);
    } else if (document.URL.replaceAll("%2B","+").includes("string=Battle+Duck")){
        if (numberInInventory("Duck")>=1)notifyAvatar(78);
    }
}

if (document.URL.includes("https://images.neopets.com/images/dead_chia.jpg")){
    //Dead Chia
    //Different avatar function because it uses a different domain => different localstorage
    chiaAvatar(31);
}

if (document.URL.includes("https://www.neopets.com/home/")){
    //Usuki Princess
    notifyAvatar(35);
}

if ((document.URL == "https://www.neopets.com/medieval/index.phtml")||(document.URL == "https://www.neopets.com/medieval/")){
    //Ixi Raider
    if (uniqueInInventory("Ixi")>=1)notifyAvatar(36);
}

if (document.URL.includes("https://www.neopets.com/winter/neggery.phtml")){
    //Negg Lover
    if (uniqueInInventory("Negg")>=10)notifyAvatar(37);
}

if (document.URL.includes("https://www.neopets.com/prehistoric/concerthall2.phtml")){
    //Concert Hall
    let content = document.getElementsByClassName("content");
    content = content[0].innerText;
    if (content.includes("Twisted Roses")){
        notifyAvatar(46);
    } else if (content.includes("The Hikalakas")){
        notifyAvatar(47);
    } else if (content.includes("Neopian Philharmonic")){
        notifyAvatar(48);
    } else if (content.includes("Gruundo")){
        notifyAvatar(49);
    } else if (content.includes("Blue Kacheek Group")){
        notifyAvatar(50);
    } else if (content.includes("M*YNCI")){
        notifyAvatar(51);
    } else if (content.includes("Wock Til You Drop")){
        notifyAvatar(52);
    } else if (content.includes("2 Gallon Hatz")){
        notifyAvatar(53);
    } else if (content.includes("Moehawk")){
        notifyAvatar(54);
    } else if (content.includes("Sticks N' Stones")){
        let d = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));
        if (d.getDate()==10) notifyAvatar(55);
    }
}

if (document.URL.includes("https://www.neopets.com/games/neodeck/")){
    //Play!
    let content = document.getElementsByClassName("content");
    content = content[0].innerText;
    if (content.includes("This deck contains")) {
        content = content.substring(content.indexOf("This deck contains")+19);
        content = content.substring(0,content.indexOf("of")-1);
    }
    if (content>=42)notifyAvatar(43);
    //Neodeck Cards
    if (roll(54))notifyAvatar(182);
}

if (document.URL.includes("https://www.neopets.com/stamps.phtml?type=progress")){
    //Chia - Stamps!!
    let content = document.getElementsByClassName("content");
    content = content[0].innerText;
    if (content.includes("You have a total of ")) {
        content = content.substring(content.indexOf("You have a total of ")+20);
        content = content.substring(0,content.indexOf("stamps")-1);
    }
    if (content>=100)notifyAvatar(76);
}

if (document.URL.includes("https://www.neopets.com/closet.phtml")){
    //Ellia - Fashionable
    let content = document.getElementsByClassName("content");
    content = content[0].innerText;
    if (content.includes("Items: ")) {
        content = content.substring(content.indexOf("Items: ")+7);
        content = content.substring(0,content.indexOf("|")-1);
    }
    debugConsole("+"+content+"+");
    if ((content>=200)&&(roll(19)))notifyAvatar(74);
}


if (document.URL.includes("https://www.neopets.com/mip/comic.phtml?chapter=2")){
    //Giant Mootix
    notifyAvatar(81);
}


if (document.URL.includes("https://www.neopets.com/auctions.phtml")){
    //Auctions
    if (document.URL.includes("https://www.neopets.com/auctions.phtml?type=placebid")){
        let content = document.getElementsByClassName("content");
        content = content[0].innerText;
        //Scorchio - The Auctioneer
        if ((content.includes("BID SUCCESSFUL"))&&(roll(4)))notifyAvatar(123);
    } else {
        let begin = false;
        let countCells = document.querySelectorAll('td:nth-child(2)');
        for (let i = 0; i<countCells.length;i++){
            if (!begin){
                if (countCells[i].innerText=="Amount") begin = true;
            } else {
                if (countCells[i].innerText.includes(" NP")){
                    let maxBid = countCells[i].innerText.replaceAll(",","").replace(" NP","");
                    //Scorchio - Auction House
                    if (maxBid >= 70000000)notifyAvatar(82);
                }
                break;
            }
        }
    }
}

if ((document.URL=="https://www.neopets.com/water/index.phtml")||(document.URL=="https://www.neopets.com/water/")){
    //Fall Underwater?!
    if (uniqueInInventory("Pumpkin")>=8)notifyAvatar(88);
}

if (document.URL.includes("https://www.neopets.com/books_read.phtml?pet_name=")){
    //Mutant Scorchio - Bookworm
    let content = document.getElementsByClassName("content");
    let petname = document.URL.substring(50);
    content = content[0].innerText;
    if (content.includes(petname+" has read ")) {
        content = content.substring(content.indexOf(petname+" has read ")+petname.length+10);
        content = content.substring(0,content.indexOf("book(s)")-1);
    }
    if (content>=300)notifyAvatar(89);
}

if (document.URL.includes("https://www.neopets.com/moon/books_read.phtml?pet_name=")){
    //Booktastic - Smart
    let content = document.getElementsByClassName("content");
    let petname = document.URL.substring(55);
    content = content[0].innerText;
    if (content.includes(petname+" has read ")) {
        content = content.substring(content.indexOf(petname+" has read ")+petname.length+10);
        content = content.substring(0,content.indexOf("book(s)")-1);
    }
    if (content>=35)notifyAvatar(83);
}

if (document.URL.includes("https://www.neopets.com/haggle.phtml")){
    //Buying from a shop
    let content = document.getElementById("container__2020");
    let shopname = document.getElementsByClassName("page-title__2020");
    content = content.innerText;
    shopname = shopname[0].innerText;
    if (content.includes("The Shopkeeper says 'I accept your offer of ")) {
        content = content.substring(content.indexOf("The Shopkeeper says 'I accept your offer of ")+44);
        content = content.substring(0,content.indexOf("Neopoints")-1);
    }
    //Grundos Cafe
    if ((shopname=="Grundos Cafe")&&(content>=5000)){
        notifyAvatar(90);
    }
    //Hubert - Yum!
    if (shopname=="Hubert's Hot Dogs"){
        notifyAvatar(124);
    }
}

if (document.URL.includes("https://www.neopets.com/medieval/guessmarrow.phtml")){
    //Weight of the Marrow
    let content = document.getElementsByClassName("content");
    content = content[0].innerText;
    if (content.includes("RIGHT!")){
        notifyAvatar(109);
    } else if (content.includes("WRONG!")){
        let attempts = getSave(109);
        if (attempts == 0){
            setSave(109,16);
        } else if (attempts > 2){
            attempts = attempts - 1;
            setSave(109,attempts);
        } else if (attempts == 2) {
            setSave(109,1);
            content = document.getElementsByClassName("content")[0];
            content.innerHTML = content.innerHTML.replace("Shame really, because I had all these super cool rare items for you if you had won... oh well!",
                                                         "<br><br>But you know what, since you've been doing your best at guessing, here's a custom avatar. Just don't tell the others, okay? ;)");
            notifyAvatar(109);
        }
    }
}

if (document.URL.includes("https://www.neopets.com/halloween/strtest/")){
    //Test Your Strength
    let content = document.getElementById("prizeMessage").innerText;
    while (!content.includes("You scored")){
        //Wait for prize to be loaded
        await sleep(500);
        content = document.getElementById("prizeMessage").innerText;
    }
    let score = content.substring(11,content.indexOf("out")-1).trim();
    debugConsole("+"+score+"+");
    if (score>=5){
        if (roll(11))notifyAvatar(116);
    }
}

if (document.URL.includes("https://www.neopets.com/shenkuu/lunar/results.phtml")){
    //Lunar Temple
    let content = document.getElementsByClassName("content");
    content = content[0].innerText;
    if (content.includes("That is the correct answer, great job!")){
        if(roll(28))notifyAvatar(110);
    }
}

if (document.URL.includes("https://www.neopets.com/island/kitchen.phtml")){
    //Underwater Chef
    let content = document.getElementById("container__2020");
    content = content.innerText;
    while (!content.includes("The Chef waves his hands, and you may collect your prize...")){
        //Wait for rewards to load
        content = document.getElementById("container__2020");
        content = content.innerText;
        await sleep(500);
    }
    notifyAvatar(112);
}

if (document.URL.includes("https://www.neopets.com/halloween/esophagor.phtml")){
    //Feeedd mee...
    let content = document.getElementById("container__2020");
    content = content.innerText;
    while (!content.includes("MMMMMMMMmmmmmm Nowww essoophagorr happy!!!!")){
        //Wait for rewards to load
        content = document.getElementById("container__2020");
        content = content.innerText;
        await sleep(500);
    }
    notifyAvatar(115);
}

if (document.URL.includes("https://www.neopets.com/wishing.phtml")){
    //WISH
    let begin = false;
    let userName = document.getElementsByClassName("user medText")[0];
    userName = userName.getElementsByTagName("a")[0].innerText;
    let countCells = document.querySelectorAll('td:nth-child(2)');
    for (let i = 0; i<countCells.length;i++){
        if (!begin){
            if (countCells[i].innerText=="Username") begin = true;
        } else {
            let wishUser = countCells[i].innerText;
            if (wishUser.includes("\n")) {
                break;
            } else {
                if (wishUser == userName) notifyAvatar(122);
                break;
            }
        }
    }
}

if (document.URL.includes("https://www.neopets.com/stockmarket.phtml?type=list&full=true")){
    //Neopian Companies
    if(roll(60))notifyAvatar(171);
}

if (document.URL.includes("https://www.neopets.com/stockmarket.phtml?type=portfolio")){
    let totalStocks = 0;
    let companyAvatar = true;
    let countCells = document.querySelectorAll('td:nth-child(6)');
    for (let i = 0; i<countCells.length;i++){
        if (!(countCells[i].innerText.includes("%")||countCells[i].innerText.includes("Qty")||countCells[i].innerText.trim()=="")){
            let thisStocks = Number(countCells[i].innerText.replaceAll(",",""));
            totalStocks = totalStocks + thisStocks;
            if ((thisStocks > 30000)&&companyAvatar){
                //Broker Chia Nigel
                notifyAvatar(172);
                companyAvatar = false;
            }
        }
    }
    //Acara Stock Market
    if (totalStocks > 100000)notifyAvatar(173);
}

if (document.URL.includes("https://www.neopets.com/pirates/foodclub.phtml?type=collect")){
    //Ahoy!
    let begin = false;
    let totalOdds = 0;
    let countCells = document.querySelectorAll('td:nth-child(4)');
    for (let i = 0; i<countCells.length;i++){
        if (!begin){
            if (countCells[i].innerText=="Odds") begin = true;
        } else {
            let odds = countCells[i].innerText;
            if (countCells[i].innerText.includes(":")) {
                totalOdds = totalOdds + Number(countCells[i].innerText.substring(0,countCells[i].innerText.indexOf(":")));
            }else {
                break;
            }
            if (totalOdds >= 100)notifyAvatar(129);
        }
    }
}

if (document.URL.includes("https://www.neopets.com/games/game.phtml?game_id=")){
    //Game avatars
    let gameID = Number(document.URL.substring(49));
    let gameScore = Number(document.getElementsByClassName("hiscore-month")[0].innerText.substring(12).replace("N/A",0).replaceAll(",",""));
    switch (gameID){
        case 536:
            if (gameScore >= 1700)notifyAvatar(132);
            break;
        case 796:
            if (gameScore >= 900)notifyAvatar(136);
            break;
        case 220:
            if (gameScore >= 120)notifyAvatar(137);
            break;
        case 81:
            if (gameScore >= 1)notifyAvatar(138);
            break;
        case 368:
            if (gameScore >= 400)notifyAvatar(141);
            break;
        case 619:
            if (gameScore >= 1500)notifyAvatar(145);
            break;
        case 821:
            if (gameScore >= 1400)notifyAvatar(156);
            break;
        case 895:
            if (gameScore >= 1)notifyAvatar(159);
            break;
        case 553:
            if (gameScore >= 700)notifyAvatar(162);
            break;
    }
}

if (document.URL.includes("https://www.neopets.com/games/pyramids/pyramids.phtml")){
    //Pyramids
    let content = document.getElementsByClassName("content");
    content = content[0].innerText;
    if (content.includes("and you have cleared the pyramid")){
        content = content.substring(content.indexOf("and you have cleared the pyramid")+33);
        content = content.substring(0,content.indexOf("time(s)")-1);
        if (content>=10)notifyAvatar(139);
    }
}

if (document.URL.includes("https://www.neopets.com/dome/arena.phtml")){
    //BD Avatars
    let twop = true;
    $('#arenacontainer').on('click', '#start', function () {
        let enemySprite = document.getElementById("p2image");
        if (!enemySprite.outerHTML.includes("pets.neopets.com")) {
            //When starting the fight, see if enemy is NPC or pet
            twop=false;
        }
    });
    let fightDone = false;
    let victory = document.getElementsByClassName("end_msg victory");
    let defeat = document.getElementsByClassName("end_msg defeat");
    while (!fightDone){
        //Wait for 2p fight to end, break if not 2p
        if (!twop)break;
        victory = document.getElementsByClassName("end_msg victory");
        defeat = document.getElementsByClassName("end_msg defeat");
        if ((victory.length!=0)||(defeat.length!=0)){
            fightDone = true;
        }
        await sleep(1000);
    }
    if ((victory.length!=0)||(defeat.length!=0)){
        //If fight ended award 2p avatar
        notifyAvatar(130);
        return;
    }
    //If fight is 1p then you are now here
    $('#arenacontainer').on('click', '.end_game', function () {
        //Pull enemy data
        let rewardsBox = document.getElementById("bd_rewards");
        let enemyName = document.getElementById("p2name");
        enemyName = enemyName.textContent;
        let hpScr = document.getElementsByTagName("script");
        let scrID = -1;
        for (let i = 0; i<hpScr.length;i++){
            let tester = hpScr[i].textContent;
            if (tester.indexOf("#p2hp")>-1){
                scrID = i;
                break;
            }
        }
        hpScr=hpScr[scrID].textContent;
        let HPid = hpScr.indexOf("#p2hp");
        let enemyHP=-1
        if (HPid != -1){
            enemyHP=hpScr.substring(HPid+14,HPid+30);
            enemyHP=enemyHP.substring(0,enemyHP.indexOf("'"));
        }
        let curr1p = document.getElementById("p1hp").innerText;
        let curr2p = document.getElementById("p2hp").innerText;
        if ((curr1p > 0)&&(curr2p < 1)){
            switch (enemyName){
                case "Kastraliss":
                    if ((rewardsBox.innerText.includes("For besting your opponent"))&&(enemyHP==6400))notifyAvatar(140);
                    break;
                case "Tax Beast":
                    if ((rewardsBox.innerText.includes("For besting your opponent"))&&(enemyHP==144))notifyAvatar(142);
                    break;
                case "Mr. Chuckles":
                    if ((rewardsBox.innerText.includes("For besting your opponent"))&&(enemyHP==17))notifyAvatar(151);
                    break;
                case "Boochi":
                    if ((rewardsBox.innerText.includes("For besting your opponent"))&&(enemyHP==24))notifyAvatar(152);
                    break;
                case "Plumbeard":
                    if ((rewardsBox.innerText.includes("For besting your opponent"))&&(enemyHP==825))notifyAvatar(153);
                    break;
                case "The Snowager":
                    if ((rewardsBox.innerText.includes("For besting your opponent"))&&(enemyHP==40600))notifyAvatar(154);
                    break;
                case "The Drenched":
                    if ((rewardsBox.innerText.includes("For besting your opponent"))&&(enemyHP==33000))notifyAvatar(155);
                    break;
                case "Ryshu the Nimmo":
                    if ((rewardsBox.innerText.includes("For besting your opponent"))&&(enemyHP==1000))notifyAvatar(44);
                    break;
            }
        }
    });

}

if (document.URL.includes("https://www.neopets.com/faerieland/springs.phtml")){
    //Marina - Healing
    let content = document.getElementById("container__2020");
    content = content.innerText;
    if (content.includes("All your Neopets have their health completely restored!!!")){
        notifyAvatar(117);
    }
}

if (document.URL.includes("https://www.neopets.com/space/warehouse/prizecodes.phtml")){
    //Warehouse
    let content = document.getElementById("prizecode");
    content = content.value.toLowerCase().replaceAll("-","");
    while (content!="officialttrg"){
        //Repeatedly read textbox contents
        content = document.getElementById("prizecode");
        content = content.value.toLowerCase().replaceAll("-","");
        await sleep(1000);
    }
    notifyAvatar(189);
}

if (document.URL.includes("https://www.neopets.com/moon/meteor.phtml")){
    //The Meteors
    let content = document.getElementsByClassName("content");
    content = content[0].innerText;
    if (content.includes("The meteor has cracked open and a small object falls out.")){
        if(roll(10))notifyAvatar(107);
    }
}

if (document.URL.includes("https://www.neopets.com/pirates/anchormanagement.phtml")){
    //Anchor Krawken
    let content = document.getElementById("container__2020");
    content = content.innerText;
    if ((content.includes("The krawken leaves behind:"))||(content.includes("the krawken leaves you:"))||(content.includes("the krawken happened to drop:"))||(content.includes("the krawken's left you a memento:"))||(content.includes("hurry, leaving behind:"))||(content.includes("gift from the krawken:"))){
        if(roll(20))notifyAvatar(108);
    }
}

if (document.URL.includes("https://www.neopets.com/process_lab2.phtml")){
    //ZAPPED
    let content = document.body;
    content = content.innerText;
    if (content.includes("The ray is fired at ")){
        notifyAvatar(111);
    }
}

if (document.URL.includes("https://www.neopets.com/desert/fruit/")){
    //Fruit Machine
    let content = document.getElementById("fruitResult");
    debugConsole(content);
    while (content==undefined){
        //Wait for results to appear
        debugConsole(content);
        content = document.getElementById("fruitResult");
        await sleep(500);
    }
    while ((!content.innerText.includes("Congratulations!"))&&(!content.innerText.includes("Sorry, this is not a winning spin."))){
        //Wait for results to be Congrats or Sorry, need more testing, loop might be unnecessary
        debugConsole(content);
        content = document.getElementById("fruitResult");
        await sleep(500);
    }
    if(content.innerText.includes("Congratulations!"))notifyAvatar(114);
}

if (document.URL.includes("https://www.neopets.com/takedonation_new.phtml")){
    //Money Tree
    let content = document.getElementById("container__2020");
    content = content.innerText;
    if (content.includes("Yeah! You got it!")){
        notifyAvatar(118);
    }
}

if (document.URL.includes("https://www.neopets.com/halloween/gravedanger/")){
    //Grave Danger
    let content = document.getElementById("container__2020");
    content = content.innerText;
    debugConsole(content);
    if (content.includes("brought you")&&(content.includes("Zombie")||content.includes("Ghost"))){
        notifyAvatar(119);
    }
}

if (document.URL.includes("https://www.neopets.com/thriftshoppe/take_donation.phtml")){
    //Thrift Store Fashion
    let content = document.getElementsByClassName("content");
    content = content[0].innerText;
    if (content.includes("Yay! You got it! Enjoy your new wearable item")){
        notifyAvatar(125);
    }
}

if (document.URL.includes("https://www.neopets.com/desert/shrine.phtml")){
    //Coltzan Shrine
    let content = document.getElementById("container__2020");
    content = content.innerText;
    if (content.includes("walks slowly up to the strange shrine...")&&!content.includes("Maybe you should wait a while")){
        if(roll(45))notifyAvatar(126);
    }
}

if (document.URL.includes("https://www.neopets.com/island/tombola2.phtml")){
    //Tombola
    let content = document.getElementById("container__2020");
    content = content.innerText;
    debugConsole(content);
    if (content.includes("YOU ARE A WINNER!!!")){
        if(roll(6))notifyAvatar(127);
    }
}

if (document.URL.includes("https://www.neopets.com/bank.phtml")){
    //NO Loans
    let content = document.getElementById("txtDailyInterest");
    content = content.innerText;
    if (content.includes("Daily Interest:")){
        content = content.substring(16).replaceAll(",","").replace(" NP","");
        if(content>=100000)notifyAvatar(165);
    }
}

if (document.URL.includes("https://www.neopets.com/halloween/process_cocoshy.phtml?coconut=")){
    //Coconut Shy - Almost!
    let content = document.body;
    content = content.innerText;
    if (content.includes("points=300")){
        notifyAvatar(160);
    }
}

if (document.URL.includes("https://www.neopets.com/halloween/process_bagatelle.phtml")){
    //Bagatelle
    let content = document.body;
    content = content.innerText.substring(7,content.innerText.indexOf("&"));
    if (Number(content)>0){
        if(roll(55))notifyAvatar(128);
    }
}

if (document.URL.includes("https://www.neopets.com/userlookup.phtml")){
    //On a user lookup
    let userName = document.getElementsByClassName("user medText")[0].getElementsByTagName("a")[0].innerText;
    let lookupName = document.URL.substring(document.URL.indexOf("=")+1);
    let age = document.getElementsByClassName("contentModuleContent medText");
    for (let i = 0; i < age.length ; i++){
        if (age[i].innerHTML.includes("https://images.neopets.com/images/shields")){
            age = age[i].innerHTML.substring(age[i].innerHTML.indexOf("https://images.neopets.com/images/shields")+42);
            age = age.substring(0,age.indexOf(".gif"));
            break;
        }
    }
    if (userName == lookupName){
        if (age.includes("year")){
            age = Number(age.substring(0,age.indexOf("_")));
            if (age >= 10) notifyAvatar(188);
        }
        let kad = document.getElementById("usertrophies").getElementsByTagName("div");
        for (let i = 0; i < kad.length; i++){
            if (kad[i].innerText.toLowerCase().includes("- site feature trophies -")) {
                kad = kad[i+1];
                break;
            }
        }

        if (kad.innerHTML.includes("games/kadoatery/trophy"))notifyAvatar(113);
        let nq = document.getElementById("usertrophies").getElementsByTagName("div");
        for (let i = 0; i < nq.length; i++){
            if (nq[i].innerText.toLowerCase().includes("- game trophies -")) {
                nq = nq[i+1];
                break;
            }
        }
        if (nq.innerHTML.includes(".com/trophies/91_1.gif"))notifyAvatar(157);
        if (nq.innerHTML.includes(".com/trophies/372_1.gif"))notifyAvatar(158);
    }
}

if (document.URL.includes("https://www.neopets.com/neofriends.phtml")){
    //Befriended
    if(roll(100))notifyAvatar(166);
}

if ((document.URL=="https://www.neopets.com/tropical/index.phtml")||(document.URL=="https://www.neopets.com/tropical/")){
    //Lutari Island
    if(roll(49))notifyAvatar(177);
}

if (document.URL.includes("https://www.neopets.com/settings/neoboards/")){
    //I <3 Fonts
    if(roll(99))notifyAvatar(180);
}

if (document.URL.includes("https://www.neopets.com/aota/")){
    //Jordie
    if(roll(39))notifyAvatar(184);
}

if (document.URL.includes("https://www.neopets.com/halloween/bagatelle.phtml")){
    //Harker
    if(roll(68))notifyAvatar(185);
}

if (document.URL.includes("https://www.neopets.com/worlds/kiko/glass_boat.phtml")){
    //Kiko Lake Tourist
    if(roll(15))notifyAvatar(190);
}

if (document.URL.includes("https://www.neopets.com/magma/pool.phtml")){
    //Magma Pool
    if(roll(82))notifyAvatar(120);
}

if (document.URL.includes("https://www.neopets.com/shops/wizard.phtml")){
    //Shop Wizard
    let content = document.getElementById("container__2020");
    let searched=false;
    content = content.innerText;
    //Only on the first search
    $('.wizard-body').on('click', '.button-search-white', function () {
        if(!searched){
            searched = true;
        }
        if(roll(150))notifyAvatar(121);
    });
}

if (document.URL.includes("https://www.neopets.com/halloween/coconutshy.phtml")){
    //Leeroy
    if(roll(70))notifyAvatar(143);
}

if (document.URL.includes("https://www.neopets.com/gourmet_club.phtml?pet_name=")){
    //Gourmet Foods
    let petName = document.URL.substring(document.URL.indexOf("=")+1);
    let activeName = document.getElementsByClassName("sidebarHeader medText")[0].innerText;
    if (activeName == petName) {
        let content = document.getElementsByClassName("content");
        content = content[0].innerText;
        content = content.substring(content.indexOf(petName+" has scored")+petName.length+12);
        content = content.substring(0,content.indexOf("Gourmet Club points")-1);
        if (Number(content)>=200) notifyAvatar(86);
    }
}

if (document.URL.includes("https://www.neopets.com/questlog/")){
    //Quest Log
    let content = document.getElementById("QuestLogWeeklyRewards").innerHTML;
    let daysComplete = 0;
    while (content.includes("ql-bonus-complete")){
        daysComplete++;
        content = content.substring(content.indexOf("ql-bonus-complete")+16);
    }
    if (daysComplete >= 7) notifyAvatar(133);
}

if (document.URL.includes("https://www.neopets.com/games/mysterypic.phtml?thanks=true")){
    //Mystery Pic
    notifyAvatar(135);
}

if (document.URL.includes("https://www.neopets.com/guilds/guild_board.phtml?id=")){
    //I'm Social
    let content = document.getElementsByClassName("content");
    content = content[0].innerText;
    if (!content.includes("Sorry. You are not a member of this guild!")){
        //If you're a member, record today's date, once there's 5 recorded give avatar
        let d = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));
        d = ""+d.getDate();
        let guildDates = window.localStorage.getItem('caGuildDates');
        if (guildDates != null) {
            guildDates = guildDates.split(",");
            if (guildDates.length >= 5) {
                notifyAvatar(167);
            } else {
                if (guildDates.indexOf(d)==-1)guildDates.push(d);
            }
            window.localStorage.setItem('caGuildDates',guildDates);
        } else {
            guildDates = [d];
            window.localStorage.setItem('caGuildDates',guildDates);
        }
        debugConsole(guildDates);
    }

    //Guild replacer
    let myAv = window.localStorage.getItem('caSelected');
    let ogAv = "";
    if (myAv != null){
        let userName = document.getElementsByClassName("user medText")[0];
        userName = userName.getElementsByTagName("a")[0].innerText;
        //Get your username
        let countCells = document.querySelectorAll('td:nth-child(1)');
        for (let i = 0; i < countCells.length; i++){
            if (countCells[i].innerText == "Author"){
                let author = countCells[i+1].innerText;
                author = author.substring(0,author.indexOf("\n"));
                //Box after the Author box has your the username, compare that to the user's username
                if (author == userName){
                    let avUrl = countCells[i+1].innerHTML;
                    avUrl = avUrl.substring(avUrl.indexOf("img src=")+9);
                    avUrl = avUrl.substring(0,avUrl.indexOf("\""));
                    ogAv = avUrl;
                    //Get original avatar url, then replace img src with custom div
                    countCells[i+1].innerHTML = countCells[i+1].innerHTML.replace(countCells[i+1].getElementsByTagName("img")[0].outerHTML,"<div class=\"customAuthorIcon\"></div>");
                }
            }
        }
        document.head.appendChild(document.createElement("style")).innerHTML =`
        .customAuthorIcon{
              background: url(`+customAvatars[Number(myAv)].img+`);
              position:relative;
              height: 50px;
              width: 50px;
              opacity:1;
              margin-bottom: -13px;
              transition: 0.5s;
        }
        .customAuthorIcon:hover{
              background: url(`+ogAv+`);
        }
        `;
    }
}

if (document.URL.includes("https://www.neopets.com/art/storytell.phtml")){
    //Storytelling - Writer
    let countCells = document.querySelectorAll('td:nth-child(2)');
    let userName = document.getElementsByClassName("user medText")[0];
    userName = userName.getElementsByTagName("a")[0].innerText;
    for (let i = 0; i < countCells.length; i++){
        let author = countCells[i].innerText;
        if (author.includes("Author: ")&&(author.length<90)&&(author.includes("Author: "+userName+"\nDate"))) {
            debugConsole(author);
            notifyAvatar(179);
            break;
        }
    }
}

if (document.URL.includes("https://www.neopets.com/contributions_poems.phtml")){
    //Chia - Poetry
    let countCells = document.getElementById("content").querySelectorAll('td:nth-child(1)');
    let userName = document.getElementsByClassName("user medText")[0];
    userName = userName.getElementsByTagName("a")[0].innerText;
    for (let i = 0; i < countCells.length; i++){
        if (countCells[i].outerHTML.includes("bgcolor=\"#FFFF")){
            let author = countCells[i].innerText.substring(countCells[i].innerText.indexOf("\n")+1);
            author = author.substring(0,author.indexOf("\n"));
            if (author == "by "+userName) {
                notifyAvatar(183);
                break;
            }
        }
    }
}

if (document.URL.includes("https://www.neopets.com/gallery/")){
    //Bori Miner
    let content = document.getElementById("gallery_form");
    content = content.innerHTML;
    let items = 0;
    while (content.includes("images.neopets.com/items")){
        items++;
        content = content.substring(content.indexOf("images.neopets.com/items")+24);
    }
    if (items>=100){
        if(roll(15))notifyAvatar(187);
    }
}

if (document.URL.includes("https://www.neopets.com/neoboards/topic.phtml")){
    //Neoboard
    let myAv = window.localStorage.getItem('caSelected');
    let ogAv = "";
    if (myAv != null){
        let content = document.getElementsByClassName("postAuthor");
        let userName = document.getElementsByClassName("text-muted")[0].innerText.trim();
        for (let i = 0; i<content.length; i++){
            let author = content[i].innerHTML;
            author = author.substring(author.indexOf("user=")+5);
            author = author.substring(0,author.indexOf("\">"));
            //Get author of a post, compare to user's username
            if (author == userName){
                let avUrl = content[i].innerHTML;
                avUrl = avUrl.substring(avUrl.indexOf("background-image:url")+21);
                avUrl = avUrl.substring(0,avUrl.indexOf(");"));
                content[i].innerHTML = content[i].innerHTML.replace(avUrl,customAvatars[Number(myAv)].img);
                ogAv = avUrl;
                //Get original avatar url, then replace class with custom class and remove html style
                let avElem = content[i].getElementsByClassName("authorIcon")[0];
                avElem.classList.remove("authorIcon");
                avElem.classList.add("customAuthorIcon");
                avElem.style = "";
            }
        }
        document.head.appendChild(document.createElement("style")).innerHTML =`
        .customAuthorIcon{
              background: url(`+customAvatars[Number(myAv)].img+`);
              position:relative;
              height: 50px;
              width: 50px;
              opacity:1;
              transition: 0.5s;
        }
        .customAuthorIcon:hover{
              background: url(`+ogAv+`);
        }
        `;
    }
}

if (document.URL.includes("https://www.neopets.com/games/nq2/nq2.phtml")){
    //Hubrid Nox
    let content = document.getElementsByClassName("frame")[0];
    content = content.innerText;
    if (content.includes("Hubrid Nox is forced to one knee by the final strike.")){
        notifyAvatar(131);
    }
}

if ((document.URL=="https://www.neopets.com/pool/index.phtml")||(document.URL=="https://www.neopets.com/pool/")){
    //Rainbow Pool Brushes
    let content = document.getElementsByClassName("content")[0];
    content = content.getElementsByTagName("table")[0].innerHTML;
    let brushes = 0;
    while (content.includes("neopets.com/items/")){
        brushes++;
        content = content.substring(content.indexOf("neopets.com/items/")+20);
    }
    if ((uniqueInInventory("Paint Brush")>=4)||(brushes >= 4)){
        let rolled = Math.floor(Math.random() * 300);
        if (rolled < 6) {
            let pb = Math.floor(Math.random() * 3);
            switch (pb){
                case 0:
                    notifyAvatar(58);
                    break;
                case 1:
                    notifyAvatar(59);
                    break;
                case 2:
                    notifyAvatar(68);
                    break;
            }
        } else if (rolled < 9) {
            let pb = Math.floor(Math.random() * 6);
            switch (pb){
                case 0:
                    notifyAvatar(60);
                    break;
                case 1:
                    notifyAvatar(61);
                    break;
                case 2:
                    notifyAvatar(62);
                    break;
                case 2:
                    notifyAvatar(63);
                    break;
                case 2:
                    notifyAvatar(64);
                    break;
                case 2:
                    notifyAvatar(67);
                    break;
            }
        } else if (rolled < 10) {
            let pb = Math.floor(Math.random() * 2);
            switch (pb){
                case 0:
                    notifyAvatar(65);
                    break;
                case 1:
                    notifyAvatar(66);
                    break;
            }
        } else {
            debugConsole(rolled);
        }
    }
}

//
if (document.URL.includes("petlookup.phtml")){
    //On a petpage
    //Get pet name, color, species, petpet+petpetpet, owner
    let content = document.getElementsByClassName("content");
    content = content[0].getElementsByTagName("div");
    if (!content[1].innerText.toLowerCase().includes("loading")){
        content = content[1].innerText;
    } else {
        content = content[0].innerText;
    }
    let petName = content.substring(0,content.indexOf(" the "));
    content = content.substring(content.indexOf(" the ")+5);
    let combo = content;
    let species = combo.substring(content.lastIndexOf(" ")+1);
    let color = combo.substring(0,content.lastIndexOf(" "));
    content = document.getElementsByClassName("content");
    content = content[0].getElementsByTagName("table");
    content = content[1];
    let petpet = content.innerText.substring(content.innerText.indexOf("has a Petpet")+17);
    petpet = petpet.substring(petpet.indexOf(" the ")+5);
    let owner = document.getElementsByClassName("contentModuleContent")[1].innerHTML;
    owner = owner.substring(owner.toLowerCase().indexOf("owner:")+6,owner.indexOf("<br>"));
    if (owner.toLowerCase().includes("(you!)")){
        owner = true;
    } else {
        owner = false;
    }

    if (owner){
        let ppl = document.getElementsByClassName("content")[0].innerHTML;
        if (ppl.includes("games/trophies/trophy_ppl_")){
            notifyAvatar(175);
        }
        let hunger = document.getElementsByClassName("activePetInfo")[0].innerText;
        hunger = hunger.substring(hunger.toLowerCase().indexOf("hunger:")+8,hunger.toLowerCase().indexOf("age:")-1);
        let activeName = document.getElementsByClassName("sidebarHeader medText")[0].innerText;
        let jobs = document.getElementsByClassName("contentModuleContent")[1].innerText;
        jobs = jobs.substring(jobs.toLowerCase().indexOf("jobs completed:")+16,jobs.toLowerCase().indexOf("jobs failed:")).trim();
        //Own pet avatars, check for dying+active, jobs, puppyblew
        if (Number(jobs) >= 10) notifyAvatar(144);
        if ((hunger == "dying")&&(activeName == petName))notifyAvatar(101);
        if (petpet.toLowerCase().includes("puppyblew"))notifyAvatar(96);
    }

    debugConsole("Pet detected as:\nColor: " + color + "\nSpecies: "+species+"\nPetpet: "+petpet);
    switch (combo.toLowerCase()){
        case "blue lutari":
            notifyAvatar(0);
            break;
        case "green jubjub":
            notifyAvatar(1);
            break;
        case "purple ruki":
            notifyAvatar(2);
            break;
        case "toy nimmo":
            notifyAvatar(7);
            break;
        case "mutant korbat":
            notifyAvatar(9);
            break;
        case "maraquan korbat":
            notifyAvatar(11);
            break;
        case "baby elephante":
            notifyAvatar(16);
            break;
        case "red kau":
            notifyAvatar(17);
            break;
        case "chocolate aisha":
            notifyAvatar(22);
            break;
        case "baby grundo":
            notifyAvatar(33);
            break;
        case "chocolate mynci":
            if (uniqueInInventory("Milkshake")>=4)notifyAvatar(75);
            break;
        case "blue techo":
            if (uniqueInInventory("Techo")>=1)notifyAvatar(45);
            break;
    }


    switch (color.toLowerCase()){
        case "red":
        case "blue":
        case "yellow":
        case "green":
            break;
        default:
            //Painted pets
            switch (species.toLowerCase()){
                case "chomby":
                    notifyAvatar(24);
                    break;
                case "cybunny":
                    notifyAvatar(25);
                    break;
                case "gelert":
                    notifyAvatar(26);
                    break;
                case "grarrl":
                    notifyAvatar(27);
                    break;
                case "korbat":
                    notifyAvatar(32);
                    break;
            }

            break;
    }
    if ((color.toLowerCase() == "halloween")&&(petpet.toLowerCase().includes("halloween"))){
        if (uniqueInInventory("Pumpkin")>=6)notifyAvatar(87);
    }

    if (species.toLowerCase() == "cybunny"){
        if (uniqueInInventory("Leaf")>=1)notifyAvatar(73);
    }

    if (petpet.toLowerCase().includes("ona")){
        notifyAvatar(5);
    } else if (petpet.toLowerCase().includes("plushie snarhook")){
        notifyAvatar(6);
    } else if (petpet.toLowerCase().includes("slorg and its blechy")){
        notifyAvatar(23);
    } else if (petpet.toLowerCase().includes("ghostkerchief")){
        notifyAvatar(28);
    } else if (petpet.toLowerCase().includes("fire alabriss")){
        if(uniqueInInventory("Fire")>=8)notifyAvatar(41);
    }

    if (petpet.toLowerCase().includes("and its rainblug")){
        notifyAvatar(3);
    } else if (petpet.toLowerCase().includes("and its vernax")){
        notifyAvatar(4);
    } else if (petpet.toLowerCase().includes("and its cooty")){
        notifyAvatar(21);
    }

}

if (document.URL.includes("/island/parrot.phtml")){
    document.title = "Neopets - Custom Avatar Menu";
    //Get parrot text that will be replaced with html
    let content = document.getElementsByClassName("content");
    content = content[0].getElementsByTagName("center");
    content = content[0];
    let text = content.innerHTML;
    text = text.substring(text.indexOf("<br>")+4,text.indexOf("<form"));
    //Load list of unlocked avatars
    let unlockedAvatars = window.localStorage.getItem('caUnlockedAvatars');
    if (unlockedAvatars == null){
        unlockedAvatars = [];
        for (let i = 0;i<avatarMax;i++){
            unlockedAvatars.push(0);
        }
    } else {
        unlockedAvatars = unlockedAvatars.split(",");
    }
    //Attempt to load in Dead Chia avatar unlock if it's locked from images.neopets domain using GM_getValue
    if (unlockedAvatars[31] == 0){
        let ripChia = GM_getValue("caChia", "0");
        if(ripChia == "1"){
            unlockAvatar(31);
            unlockedAvatars[31]=1;
        }
    }
    //Get unlocked and total avatar amounts
    let totalAvatars = 0;
    let gottenAvatars = 0;
    for (let i = 0; i < avatarMax; i++){
        if (customAvatars[i]!=null)totalAvatars++;
        if (unlockedAvatars[i]==1)gottenAvatars++;
    }
    //Check if user has read the readme page and clicked the button
    if (hasAgreed()){
        document.head.appendChild(document.createElement("style")).innerHTML =`
        .avbtn:active {
            position: relative;
            top: 1px;
        }
        .avbtn{
            cursor:pointer;
        }
        .avreset:active {
            position: relative;
            top: 1px;

        }
        .avreset{
            cursor:pointer;
        }
        `;
        //Parrot text + top of table + avatar resetter
        let outHTML = "The Parrot says: <b>Click a custom avatar to have it replace your regular avatar!<br><br><br>You've unlocked "+gottenAvatars+" out of "+totalAvatars+" custom avatars!</b><br><table style=\"max-width:690px;\" border=\"0\"><td style=\"width:230px\" valign = top></td><td style=\"width:230px\" valign = top><table><tr><td rowspan = \"2\" valign = top><div class=\"avreset\"><img src=\"https://images.neopets.com/neoboards/avatars/default.gif\"></div></td><td valign = top><b>Regular Avatar</b></td></tr><tr><td valign = top><font size=\"1\">Click to disable the Avatar Replacer.</font></td></tr></table></td><td style=\"width:230px\" valign = top></td>";
        let outNum = 0;
        let sel = window.localStorage.getItem('caSelected');
        for (let i = 0; i < avatarMax; i++){
            if (customAvatars[i]!=null){
                //For each avatar create table cell, create table inside the cell with image, name, and description, use different image and description if avatar is locked, give border if avatar is selected
                if (outNum%3==0){
                    outHTML = outHTML + "<tr>";
                }
                let avimg = customAvatars[i].img;
                let avdesc = customAvatars[i].req;
                let bord = "";
                if (sel != null){
                    if (sel == i)bord = " style=\"border: 2px solid rgb(68, 255, 68);\"";
                }
                let div1 = "<div class=\"avbtn\" id=\"cAv"+i+"\" "+bord+">";
                let div2 = "</div>";
                if (unlockedAvatars[i]!=1){
                    avimg = blankAvatar;
                    if (customAvatars[i].secret!="")avdesc = customAvatars[i].secret;
                    div1 = "";
                    div2 = "";
                }

                outHTML = outHTML + "<td style=\"width:230px\" valign = top><table><tr><td rowspan = \"2\" valign = top>"+div1+"<img src=\""+avimg+"\">"+div2+"</td><td valign = top><b>"+customAvatars[i].name+"</b></td></tr><tr><td valign = top><font size=\"1\">"+avdesc+"</font></td></tr></table></td>";
                if (outNum%3==2){
                    outHTML = outHTML + "</tr>";
                }
                outNum++;
            }
        }
        outHTML = outHTML+"</table><br>";
        content.innerHTML = content.innerHTML.replace(text,outHTML);
        //Get all avatar buttons, make them clickable
        let btns = document.getElementsByClassName("avbtn");
        for (let i = 0; i < btns.length; i++){
            btns[i].addEventListener("click", function(){
                //Get currently selected avatar, remove its border
                var oldSelected = document.getElementById("cAv"+sel);
                if(oldSelected!=null)oldSelected.style = "";
                //Get new selected avatar, set its border and set other things that track it
                let avID = Number(btns[i].id.substring(3));
                var newSelected = document.getElementById("cAv"+avID);
                newSelected.style = 'border:2px solid #44FF44';
                selectAvatar(avID);
                sel = avID;
            });
        }
        let reset = document.getElementsByClassName("avreset")[0];
        reset.addEventListener("click", function(){
            //Remove selection
            var oldSelected = document.getElementById("cAv"+sel);
            if(oldSelected!=null)oldSelected.style = "";
            selectAvatar(-1);
            sel = -1;
        });
    } else {
        //If user hasn't read the readme, make user read the readme
        let outHTML = "The Parrot says: <b>Greetings. Have you come to peruse some custom avatars?<br><br>Please read this before using the Custom Avatar Collector userscript!</b><p align=\"left\">"+
            "<br> <b>*</b> Don't mention Discord, Reddit, or this userscript on Neopets!"+
            "<br><br> <b>*</b> The avatar replacer only works for you, everybody else will still see your regular avatar."+
            "<br><br> <b>*</b> Your custom avatar progress is stored in your browser, so clearing browser data may cause you to lose it."+
            "<br><br> <b>*</b> Many avatars have slightly different solutions from sosu's original page, usually for practical reasons."+
            "<br><br> <b>*</b> Not all of the avatars from sosu's original page were added, when in doubt check the Custom Avatar Menu."+
            "<br><br> <b>*</b> If an avatar requires a specific item in your inventory, that item needs to have been in your inventory the last time you opened it."+
            "<br><br> <b>*</b> Game avatars are awarded on the Games Room page of a game, based on your Monthly High Score."+
            "<br><br> <b>*</b> When refreshing for an avatar, let the page load fully before refreshing again or the script won't have a chance to run."+
            "<br><br> <b>*</b> TNT updating the site, some userscripts, or even bugs might cause avatars to not be awarded properly."+
            "<br><br> <b>*</b> Have fun! :)"+
            "<br><br></p>";
        content.innerHTML = content.innerHTML.replace(text,outHTML);
        content.innerHTML = content.innerHTML.replace("<form action=\"index.phtml\" method=\"get\">\n<input type=\"submit\" value=\"Back to Mystery Island\">\n</form>","");
        let btn = document.createElement("div");
        btn.innerHTML = "<button type=\"button\"><b>I've read everything! Show me the avatars!</b></button>";
        btn.onclick = () => {
            iAgree();
        };
        content.append(btn);
    }
}

if (document.URL.includes("inventory.phtml")){
    let waitInventory = true;
    let inventoryList = [];
    let inventoryCount = [];
    while (waitInventory){
        //Wait for inventory to load
        let inventory = document.getElementById("invDisplay1").getElementsByClassName("grid-item");
        if (inventory.length != 0){
            waitInventory = false;
            for (let i = 0; i < inventory.length; i++){
                //Get all the items and counts and save them
                let itemName = inventory[i].getElementsByClassName("item-name")[0].innerText;
                let quantity = inventory[i].innerHTML.substring(inventory[i].innerHTML.indexOf("data-itemquantity")+19);
                quantity = quantity.substring(0,quantity.indexOf("\""));
                let itemInd = inventoryList.indexOf(itemName);
                if (itemInd>-1){
                    inventoryCount[itemInd] = Number(inventoryCount[itemInd]) + Number(quantity);
                } else {
                    inventoryList.push(itemName.replaceAll(",",";"));
                    inventoryCount.push(Number(quantity));
                }
            }
        }
        await sleep(500);
    }
    //Save inventory to storage
    setInventory(inventoryList,inventoryCount);

    //Check for inventory avatars
    if (uniqueInInventory("Scorchio")>=1){
        if (roll(10))notifyAvatar(38);
    }
    if (uniqueInInventory("Heart")>=7){
        if (roll(5))notifyAvatar(42);
    }
    if (uniqueInInventory("Leaf")>=3){
        if (roll(7))notifyAvatar(71);
    }
    if (uniqueInInventory("Acorn")>=1){
        if (roll(25))notifyAvatar(72);
    }
    if (uniqueInInventory("Glasses")>=1){
        if (roll(25))notifyAvatar(80);
    }
    if (uniqueInInventory("Pride Flag")>=1){
        if (roll(5))notifyAvatar(84);
    }
    if (numberInInventory("Mote")>=9){
        if (roll(5))notifyAvatar(85);
    }

    let grossCount = 0;
    for (let i = 0; i < grossFoods.length; i++){
        if (inventoryList.indexOf(grossFoods[i])>-1){
            grossCount++;
        }
        if (grossCount>=12){
            notifyAvatar(69);
            break;
        }
    }

    //After all avatars have been checked for, wait for an item to be used
    waitInventory = true;
    while (waitInventory){
        let itemSelected = document.getElementById("invItemName").innerText;
        let itemResult = document.getElementsByClassName("togglePopup__2020 movePopup__2020 invResult");
        itemResult = itemResult[0].innerText.trim();
        //Wait for item outcome to be done loading
        if ((itemResult != "")&&(itemResult.indexOf("Loading...")==-1)){
            debugConsole("Item: "+itemSelected+"\nResult: "+itemResult);
            waitInventory = false;
            if (itemResult.includes(" says ")){
                //Pet says something so confirmed pet interaction
                if (itemSelected.includes("Trumpet")){
                    itemAvatar(34);
                } else if ((itemSelected.includes("Ice Cream"))&&(!itemResult.includes("says 'I'm too full,"))){
                    itemAvatar(39);
                } else if ((itemSelected.includes("Brucicle"))&&(!itemResult.includes("says 'I'm too full,"))){
                    itemAvatar(56);
                } else if ((itemSelected.includes("Pie"))&&(!itemResult.includes("says 'I'm too full,"))){
                    itemAvatar(79);
                } else if ((itemSelected.includes("Pizza"))&&(!itemResult.includes("says 'I'm too full,"))){
                    itemAvatar(91);
                } else if (itemSelected.includes("Blue Ixi Plushie")){
                    itemAvatar(70);
                }
            } else if ((itemSelected.includes("Pandaphant Puppet"))&&(itemResult.includes("added Pandaphant Puppet into your clo"))){
                itemAvatar(57);
            }
        }
        await sleep(1000);
    }
}


function notifyAvatar(avatarNum){
    //Common avatar function
    debugConsole("attempting to grant avatar "+avatarNum);
    if (haveAvatar(avatarNum))return;
    unlockAvatar(avatarNum);
    //Create the something has happened box
    let div = document.createElement('div');
    div.innerHTML = "<table width=\"400\" cellpadding=\"3\" cellspacing=\"0\" border=\"0\" align=\"center\">\r\n<tbody><tr>\r\n<td bgcolor=\"#ffffcc\" align=\"center\" colspan=\"2\"><strong>Something Has Happened!<\/strong><\/td>\r\n<\/tr><tr>\r\n<td width=\"50\" bgcolor=\"#ffffff\"><img src=\""+customAvatars[avatarNum].img+"\" width=\"50\" height=\"50\" alt=\"\" border=\"0\"><\/td>\r\n<td bgcolor=\"#ffffff\">You are now eligible to use \'<strong>"+customAvatars[avatarNum].name+"<\/strong>\' as a custom avatar in the <a href=\"https://www.neopets.com/island/parrot.phtml\"><strong>Custom Avatar Menu<\/strong><\/a>!<\/td>\r\n<\/tr>\r\n<\/tbody><\/table>";
    //On some pages, place SHH in a specific place
    if (document.URL.includes("petlookup.phtml")){
        let content = document.getElementsByClassName("content");
        content = content[0].getElementsByTagName("div");
        content = content[1];
        content.appendChild(div);
    } else if (document.URL.includes("https://www.neopets.com/process_lab2.phtml")||document.URL.includes("https://www.neopets.com/halloween/process_cocoshy.phtml?coconut=")||document.URL.includes("https://www.neopets.com/halloween/process_bagatelle.phtml")){
        let content = document.body;
        content.before(div);
    } else if (document.URL.includes("https://www.neopets.com/search.phtml?selected_type=object&string=")){
        let content = document.getElementsByClassName("search-iteminfo");
        div.innerHTML = div.innerHTML + "<br>";
        content[0].before(div);
    } else if (document.URL.includes("https://www.neopets.com/home/")){
        let content = document.getElementsByClassName("inner-body");
        content[0].before(div);
    } else if (document.URL.includes("https://www.neopets.com/settings/neoboards/")){
        let content = document.getElementsByClassName("settings-container");
        content[0].before(div);
    } else if (document.URL.includes("https://www.neopets.com/questlog/")){
        let content = document.getElementsByClassName("questlog-info");
        content[0].after(div);
    } else {
        //Otherwise default to standard locations in old and new layout
        let content = document.getElementsByClassName("content");
        if (content[0]==undefined){
            content = document.getElementsByClassName("page-title__2020 ");
            content[0].after(div);
        } else {
            content[0].prepend(div);
        }
    }
}

function itemAvatar(avatarNum){
    //Separate avatar function for using items so that they appear in the box
    debugConsole("attempting to grant avatar "+avatarNum);
    if (haveAvatar(avatarNum))return;
    unlockAvatar(avatarNum);
    let content = document.getElementsByClassName("togglePopup__2020 movePopup__2020 invResult")[0];
    content = content.getElementsByTagName("img")[0];
    let div = document.createElement('div');
    div.innerHTML = "<table width=\"400\" cellpadding=\"3\" cellspacing=\"0\" border=\"0\" align=\"center\">\r\n<tbody><tr>\r\n<td bgcolor=\"#ffffcc\" align=\"center\" colspan=\"2\"><strong>Something Has Happened!<\/strong><\/td>\r\n<\/tr><tr>\r\n<td width=\"50\"><img src=\""+customAvatars[avatarNum].img+"\" width=\"50\" height=\"50\" alt=\"\" border=\"0\"><\/td>\r\n<td>You are now eligible to use \'<strong>"+customAvatars[avatarNum].name+"<\/strong>\' as a custom avatar in the <a href=\"https://www.neopets.com/island/parrot.phtml\"><strong>Custom Avatar Menu<\/strong><\/a>!<\/td>\r\n<\/tr>\r\n<\/tbody><\/table>";
    content.before(div);
}

function chiaAvatar(avatarNum){
    //Separate avatar function for the dead chia avatar because it's on a different domain and doesn't share localstorage with the rest of the script, needs GM_setValue
    debugConsole("attempting to grant avatar "+avatarNum);
    if (GM_getValue("caChia","0")=="1")return;
    GM_setValue("caChia","1");
    let content = document.body;
    let div = document.createElement('div');
    div.innerHTML = "<table width=\"400\" cellpadding=\"3\" cellspacing=\"0\" border=\"0\" align=\"center\">\r\n<tbody><tr>\r\n<td bgcolor=\"#ffffcc\" align=\"center\" colspan=\"2\"><strong>Something Has Happened!<\/strong><\/td>\r\n<\/tr><tr>\r\n<td width=\"50\" bgcolor=\"#ffffff\"><img src=\""+customAvatars[avatarNum].img+"\" width=\"50\" height=\"50\" alt=\"\" border=\"0\"><\/td>\r\n<td bgcolor=\"#ffffff\">You are now eligible to use \'<strong>"+customAvatars[avatarNum].name+"<\/strong>\' as a custom avatar in the <a href=\"https://www.neopets.com/island/parrot.phtml\"><strong>Custom Avatar Menu<\/strong><\/a>!<\/td>\r\n<\/tr>\r\n<\/tbody><\/table>";
    content.before(div);
}

function sleep(ms) {
    //Sleep to make sure loops don't run a billion times per second unnecessarily
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setInventory(inventoryList,inventoryCount){
    //Set the inventory
    window.localStorage.setItem('caInventoryList', inventoryList);
    window.localStorage.setItem('caInventoryCount', inventoryCount);
}

function getInventory(){
    //Grab the inventory
    let inventoryMatrix = [[],[]];
    let inventoryList = window.localStorage.getItem('caInventoryList').split(",");
    for (let i = 0; i < inventoryList.length; i++){
        inventoryList[i] = inventoryList[i].replaceAll(";",",");
    }
    inventoryMatrix[0] = inventoryList;
    inventoryMatrix[1] = window.localStorage.getItem('caInventoryCount').split(",");
    return inventoryMatrix;
}

function inInventory(itemName){
    //Check if a specific item is in inventory, doesn't work with partial names
    debugConsole("Checking inventory for " + itemName);
    let inventoryMatrix = getInventory();
    if (inventoryMatrix[0].indexOf(itemName)>-1){
        return true;
    } else {
        return false;
    }
}

function numberInInventory(itemSegment){
    //Check how many items with the text are in inventory, ignores case and counts duplicates
    debugConsole("Checking inventory for items with " + itemSegment);
    let inventoryMatrix = getInventory();
    let total = 0;
    for (let i = 0; i < inventoryMatrix[0].length; i++){
        if (inventoryMatrix[0][i].toLowerCase().includes(itemSegment.toLowerCase())){
            total = total + Number(inventoryMatrix[1][i]);
        }
    }
    return total;
}

function uniqueInInventory(itemSegment){
    //Check how many unique items with the text are in inventory, ignores case but not duplicates
    debugConsole("Checking inventory for unique items with " + itemSegment);
    let inventoryMatrix = getInventory();
    let total = 0;
    for (let i = 0; i < inventoryMatrix[0].length; i++){
        if (inventoryMatrix[0][i].toLowerCase().includes(itemSegment.toLowerCase())){
            total = total+1;
        }
    }
    return total;
}

function unlockAvatar(avatarNum){
    //Set an avatar as unlocked, if there's no unlocked avatars create array full of 0s for it
    debugConsole("Unlocking avatar " + avatarNum);
    let unlockedAvatars = window.localStorage.getItem('caUnlockedAvatars');
    if (unlockedAvatars == null){
        unlockedAvatars = [];
        for (let i = 0;i<avatarMax;i++){
            unlockedAvatars.push(0);
        }
    } else {
        unlockedAvatars = unlockedAvatars.split(",");
    }
    unlockedAvatars[avatarNum] = 1;
    window.localStorage.setItem('caUnlockedAvatars',unlockedAvatars);
}

function haveAvatar(avatarNum){
    //Check if this avatar is unlocked
    let unlockedAvatars = window.localStorage.getItem('caUnlockedAvatars');
    if (unlockedAvatars == null){
        return false;
    } else {
        unlockedAvatars = unlockedAvatars.split(",");
    }
    return (unlockedAvatars[avatarNum]==1);
}

function roll(num){
    //With 1/num chance return true
    debugConsole("Rolling a random chance...");
    let rolled = Math.floor(Math.random() * num);
    if (rolled == 0){
        return true;
    } else {
        debugConsole("Unlucky!");
        return false;
    }
}

function iAgree(){
    //Function for clicking the readme button
    window.localStorage.setItem('caAgreed',agreementVer);
    location.reload();
}

function hasAgreed(){
    //Check if user has clicked the readme button
    let agreed = window.localStorage.getItem('caAgreed');
    if (agreed != agreementVer){
        return false;
    } else {
        return true;
    }
}

function selectAvatar(avatarNum){
    //Change which avatar is selected
    window.localStorage.setItem('caSelected',avatarNum);
}

function debugConsole(text){
    if (debugMode) console.log(text);
}

function getSave(num){
    let saves = window.localStorage.getItem('caSaves');
    if (saves == null){
        return 0;
    } else {
        saves = saves.split(",");
    }
    return saves[num];
}

function setSave(num,value){
    let saves = window.localStorage.getItem('caSaves');
    if (saves == null){
        saves = [];
        for (let i = 0;i<avatarMax;i++){
            saves.push(0);
        }
    } else {
        saves = saves.split(",");
    }
    saves[num] = value;
    window.localStorage.setItem('caSaves',saves);
}
