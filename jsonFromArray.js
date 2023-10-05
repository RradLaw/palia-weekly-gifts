let data = {

    "Ashura": ["Rainbow Trout", "Prism Trout", "Fish Stew", "Sushi"],
    "Auni": ["Ship Fragments", "Proudhorned Stag Beetle", "Spotted Mantis", "Apple Pie"],
    "Badruu": ["Onion", "SpeedyGro Fertilizer", "Apple Tree Seed", "Meaty Stir Fry (Bugged)"],
    "Caleri": ["Coral", "Kilima Redfin", "Crucian Carp", "Bouillabaisse"],
    "Chayne": ["Crystal Lake Lotus", "Apple Jam", "Apple", "Dari Cloves"],
    "Delaila": ["Bahari Crab", "Orange Bluegill", "Apple Tree Seed", "Giant Goldfish"],
    "Einar": ["Mudminnow", "Prism Trout", "Glow Worm", "Enchanted Pupfish"],
    "Elouisa": ["Ship Fragments", "Paddlefish", "Brighteye Butterfly", "Ancient Amber Beetle"],
    "Eshe": ["Chapaa Fur", "Fish Stew", "Silver Bar", "Gold Bar"],
    "Hassian": ["Spotted Chapaa Tail", "Fabric", "Azure Chapaa Tail", "Shimmerfin"],
    "Hekla": ["Unopened Oyster", "Brightshroom", "Ramen", "Celebration Cake"],
    "Hodari": ["Copper Ore", "Striped Chapaa Tail", "Hot Hounds", "Bahari Glowbug"],
    "Jel": ["Kilima Night Moth", "Duskray", "Azure Chapaa Tail", "Midnight Paddlefish"],
    "Jina": ["Flint", "Cotton Seed", "Brighteye Butterfly", "Rainbow-tipped Butterfly"],
    "Kenli": ["Grilled Oyster", "Fish Stew", "Fried Catfish Dinner", "Akwinduu Chapaa"],
    "Kenyatta": ["Crystal Lake Lotus", "Creamy Carrot Soup", "Dragon's Beard Peat", "Meaty Stir Fry"],
    "Nai'O": ["Stone Brick", "Heat Root", "Apple Tree Seed", "Steak Dinner"],
    "Najuma": ["Wild Garlic", "Copper Bar", "Blueberries", "Blueberry Pie"],
    "Reth": ["Spice Sprouts", "Largemouth Bass", "Raspberry Beetle", "Cream of Mushroom Soup"],
    "Sifuu": ["Sernuk Antlers", "Standard Arrow", "Cream of Tomato Soup (Bugged)", "Gold Bar"],
    "Tamala": ["Emerald Carpet Moss", "Lunar Fairy Moth", "Azure Stonehopper", "Leafstalker Mantis"],
    "Tau": ["Trout Dinner", "Garden Leafhopper", "Flow-Infused Plank", "Akwinduu Chapaa"],
    "Tish": ["Shell", "Juniper Seed", "Silk Thread", "Blueberry Pie"],
    "Zeki": ["Unopened Oyster", "Silk", "Pulsating Triangle (Unconfirmed)", "Poke Bowl"]
};
console.log("{");
for (const key in data) {
    console.log(generateString(key, data[key]));
}
console.log("}");

function generateString(character, array) {
    let template = `    "xxxGift1": {
        "name": "name1",
        "type": "",
        "updated": time
    },
    "xxxGift2": {
        "name": "name2",
        "type": "",
        "updated": time
    },
    "xxxGift3": {
        "name": "name3",
        "type": "",
        "updated": time
    },
    "xxxGift4": {
        "name": "name4",
        "type": "",
        "updated": time
    },`;

    for (let i = 0; i < array.length; i++) {
        switch (i) {
            case 0:
                template = template.replaceAll(/name1/g, array[i]);
                break;
            case 1:
                template = template.replaceAll(/name2/g, array[i]);
                break;
            case 2:
                template = template.replaceAll(/name3/g, array[i]);
                break;
            case 3:
                template = template.replaceAll(/name4/g, array[i]);
                break;
        }
    }
    template = template.replaceAll(/time/g, Date.now());
    return template.replaceAll(/xxx/g, character);
}