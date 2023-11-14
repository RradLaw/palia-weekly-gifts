var typeJSON = require('./rawData.json');

let errorString = "";

let data = {

    "Ashura": ["Channel Catfish", "Heartwood Plank", "Fish Stew", "Sashimi"],
    "Auni": ["Spotted Stinkbug", "Garden Snail", "Apple", "Apple Pie"],
    "Badruu": ["Onion Seed", "Spicy Pepper Seed", "Loaded Potato Soup", "Meaty Stir Fry"],
    "Caleri": ["Paper Lantern Bug", "Kilima Redfin", "Silk Thread", "Chapaa Masala"],
    "Chayne": ["Potato Seed", "Rice", "Apple", "Green Pearl"],
    "Delaila": ["Channel Catfish", "Wheat Seed", "Blueberry Bush Seed", "Giant Goldfish"],
    "Einar": ["Silver Salmon", "Mirror Carp", "Shimmerfin", "Ancient Fish"],
    "Elouisa": ["Spotted Stinkbug", "Inky Dragonfly", "Thundering Eel", "Midnight Paddlefish"],
    "Eshe": ["Fur", "Juniper Seed", "Silver Bar", "Bouillabaisse"],
    "Hassian": ["Sernuk Antlers", "Chapaa Asada Tacos", "Azure Chapaa Tail", "Slowdown Arrow"],
    "Hekla": ["Grilled Fish", "Brightshroom", "Trout Dinner", "Enchanted Pupfish"],
    "Hodari": ["Copper Ore", "Striped Chapaa Tail", "Loaded Potato Soup", "Bahari Glowbug"],
    "Jel": ["Leather", "Striped Chapaa Tail", "Gossamer Veil Moth", "Willow Lamprey"],
    "Jina": ["Flint", "Glass Pane", "Radiant Sunfish", "Rainbow-tipped Butterfly"],
    "Kenli": ["Grilled Oyster", "Hearty Vegetable Soup", "Sushi", "Gold Bar"],
    "Kenyatta": ["Garden Mantis", "Elder Sernuk Antlers", "Chili Oil Dumplings", "Fairy Mantis"],
    "Nai'O": ["Stone Brick", "Pickled Potatoes", "Fried Catfish Dinner", "Steak Dinner"],
    "Najuma": ["Clay", "Copper Bar", "Stripeshell Snail", "Blueberry Pie"],
    "Reth": ["Sweet Leaf", "Ramen", "Apple Jam", "Dari Cloves"],
    "Sifuu": ["Grilled Meat", "Iron Ore", "Proudhorned Sernuk Antlers", "Swordfin Eel"],
    "Tamala": ["Kilima Night Moth", "Lunar Fairy Moth", "Azure Stonehopper", "Fairy Mantis"],
    "Tau": ["Common Blue Butterfly", "Steak Dinner", "Sernuk Noodle Stew", "Shimmerfin"],
    "Tish": ["Shell", "Samara", "Silk Thread", "Blueberry Pie"],
    "Zeki": ["Unopened Oyster", "Silk", "Fish Tacos", "Bouillabaisse"]

};
let outputStr = "{\n";
for (const key in data) {
    outputStr += generateString(key, data[key]) + "\n";
}
outputStr = outputStr.substring(0, outputStr.length - 2)
outputStr += "\n}";
console.log(outputStr);
console.log(errorString);

function generateString(character, array) {
    let template = `    "xxxGift1": {
        "name": "name1",
        "type": "type1",
        "updated": time
    },
    "xxxGift2": {
        "name": "name2",
        "type": "type2",
        "updated": time
    },
    "xxxGift3": {
        "name": "name3",
        "type": "type3",
        "updated": time
    },
    "xxxGift4": {
        "name": "name4",
        "type": "type4",
        "updated": time
    },`;

    for (let i = 0; i < array.length; i++) {
        switch (i) {
            case 0:
                template = template.replaceAll(/name1/g, array[i]);
                template = template.replaceAll(/type1/g, typeJSON[array[i]] ?? "Unknown");
                if (!typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 1:
                template = template.replaceAll(/name2/g, array[i]);
                template = template.replaceAll(/type2/g, typeJSON[array[i]] ?? "Unknown");
                if (!typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 2:
                template = template.replaceAll(/name3/g, array[i]);
                template = template.replaceAll(/type3/g, typeJSON[array[i]] ?? "Unknown");
                if (!typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 3:
                template = template.replaceAll(/name4/g, array[i]);
                template = template.replaceAll(/type4/g, typeJSON[array[i]] ?? "Unknown");
                if (!typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
        }
    }
    template = template.replaceAll(/time/g, Date.now());
    return template.replaceAll(/xxx/g, character);
}