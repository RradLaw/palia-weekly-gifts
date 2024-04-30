let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    

    "Ashura": ["Sweet Leaf", "Acorn", "Fish Stew", "Fisherman's Brew"],
    "Auni": ["Ship Fragments", "Cerulean Cicada", "Hairy Millipede", "Celebration Cake"],
    "Badruu": ["Tomato", "Wheat", "Ramen", "Azure Stonehopper"],
    "Caleri": ["Crystal Lake Lotus", "Silk", "Chapaa Onigiri", "Dari Cloves"],
    "Chayne": ["Crystal Lake Lotus", "Juniper Seed", "Dragon's Beard Peat", "Dari Cloves"],
    "Delaila": ["Rainbow Trout", "SpeedyGro Fertilizer", "Iron Bar", "Giant Goldfish"],
    "Einar": ["Worm", "Fairy Carp", "Glow Worm", "Ancient Fish"],
    "Elouisa": ["Ship Fragments", "Paddlefish", "Leafstalker Mantis", "Giant Goldfish"],
    "Eshe": ["Leather", "Bluefin Tuna", "Silver Ore", "Gold Ore"],
    "Hassian": ["Plant Fiber", "Chapaa Asada Tacos", "Iron Ore", "Dispel Arrow"],
    "Hekla": ["Oyster Meat", "Brightshroom", "Black Sea Bass", "Enchanted Pupfish"],
    "Hodari": ["Sernuk Antlers", "Copper Bar", "Hot Hounds", "Steak Dinner"],
    "Jel": ["Umbran Carp", "Bat Ray", "Black Sea Bass", "Willow Lamprey"],
    "Jina": ["Congee", "Heat Root", "Mutated Angler", "Apple Pie"],
    "Kenli": ["Spotted Chapaa Tail", "Fish Stew", "Sashimi", "Akwinduu Chapaa"],
    "Kenyatta": ["Knapweed", "Elder Sernuk Antlers", "Crimson Fangtooth", ""],
    "Nai'O": ["Muujin Meat", "Heat Root", "Apple Tree Seed", "Steak Dinner"],
    "Najuma": ["Flint", "Copper Bar", "Honey Loach", "Silver Bar"],
    "Reth": ["Tomato", "Creamy Carrot Soup", "Raspberry Beetle", "Cream of Mushroom Soup"],
    "Sifuu": ["Grilled Meat", "Pickled Carrots", "Iron Bar", "Silver Bar"],
    "Subira": ["Iron Ore", "Steak Dinner", "Rainbow-Tipped Butterfly", "Enchanted Pupfish"],
    "Tamala": ["Kilima Night Moth", "Lunar Fairy Moth", "Azure Stonehopper", "Ancient Amber Beetle"],
    "Tau": ["Trout Dinner", "Grilled Fish", "Elder Sernuk Antlers", "Grilled Meat"],
    "Tish": ["Crystal Lake Lotus", "Stuffed Cabbage Rolls", "Apple Pie", "Blueberry Pie"],
    "Zeki": ["Coral", "Fish Stew", "Zeki's Flyer", "Green Pearl"]
       
    








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
                if (fileRead) {
                    template = template.replaceAll(/type1/g, typeJSON[array[i]] ?? "Unknown");
                } else {
                    template = template.replaceAll(/type1/g, "Unknown");
                }
                if (fileRead && !typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 1:
                template = template.replaceAll(/name2/g, array[i]);
                if (fileRead) {
                    template = template.replaceAll(/type2/g, typeJSON[array[i]] ?? "Unknown");
                } else {
                    template = template.replaceAll(/type2/g, "Unknown");
                }
                if (fileRead && !typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 2:
                template = template.replaceAll(/name3/g, array[i]);
                if (fileRead) {
                    template = template.replaceAll(/type3/g, typeJSON[array[i]] ?? "Unknown");
                } else {
                    template = template.replaceAll(/type3/g, "Unknown");
                }
                if (fileRead && !typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 3:
                template = template.replaceAll(/name4/g, array[i]);
                if (fileRead) {
                    template = template.replaceAll(/type4/g, typeJSON[array[i]] ?? "Unknown");
                } else {
                    template = template.replaceAll(/type4/g, "Unknown");
                }
                if (fileRead && !typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
        }
    }
    template = template.replaceAll(/time/g, Date.now());
    return template.replaceAll(/xxx/g, character);
}