let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

  "Ashura": ["Rainbow Trout", "Heartwood Plank", "Pinecone", "Elderwood Pie"],

  "Auni": ["Common Blue Butterfly", "Duskwing Butterfly", "Petit Fives", "Celebration Cake"],

  "Badruu": ["Tomato Plant Seed", "Creamy Carrot Soup", "Ramen", "Azure Stonehopper"],

  "Caleri": ["Paper Lantern Bug", "Glass Bulb", "Bahari Glowbug", "Hypnotic Moray"],

  "Chayne": ["Wild Ginger", "Rice Seed", "Heat Root", "Cream of Mushroom Soup"],

  "Delaila": ["Channel Catfish", "SpeedyGro Fertilizer", "Blueberry Bush Seed", "Rockhopper Pumpkin"],

  "Einar": ["Striped Dace", "Yellow Perch", "Fathead Minnow", "Cactus Moray"],

  "Elouisa": ["Duskray", "Inky Dragonfly", "Ancient Wood", "Green Pearl"],

  "Eshe": ["Fur", "Silk", "Pumpkin Stew", "Steak Dinner"],

  "Hassian": ["Spotted Chapaa Tail", "Brightshroom", "Ogopuu Scale", "Steak Dinner"],

  "Hekla": ["Grilled Meat", "Brightshroom", "Ramen", "Enchanted Pupfish"],

  "Hodari": ["Muujin Meat", "Heartwood", "Loaded Potato Soup", "Firebreathing Dragonfly"],

  "Jel": ["Kilima Night Moth", "Albino Eel", "Thundering Eel", "Willow Lamprey"],

  "Jina": ["Mountain Morel", "Cotton Seed", "Midnight Floatfish", "Blood Beetle"],

  "Kenli": ["Grilled Oyster", "Creamy Carrot Soup", "Oysters Akwinduu", "Chapaa Masala"],

  "Kenyatta": ["Brushtail Dragonfly", "Cytthroat Trout", "Proudhorned Sernuk Antlers", "Majiri-of-War"],

  "Nai'o": ["Waterlogged Boot", "Wheat Seed", "Rockhopper Pumpkin Seed", "Fruit Smoothie Bowl"],

  "Najuma": ["Tomato", "Garden Snail", "Flow-Infused Plank", "Platinum Ore"],

  "Reth": ["Yellow Perch", "Heat Root", "Kopaa Nuts", "Rockhopper Pumpkin"],

  "Sifuu": ["Muujin Meat", "Elder Sernuk Antlers", "Iron Bar", "Bean Burger"],

  "Subira": ["Congee", "Silver Bar", "Long Nosed Unicorn Fish", "Void Ray"],

  "Tamala": ["Fur", "Silk", "Elder Clam Mushroom", "Elderwood Lotus"],

  "Tau": ["Sernuk Meat", "Sernuk Antlers", "Golden Salmon", "Rainbow-Tipped Butterfly"],

  "The Gardener": ["Staircase Mushroom", "Batterfly Bean Seeds", "Whitestone Slab", "Princess Ladybug"],

  "Tish": ["Ship Fragments", "Stuffed Cabbage Rolls", "Ancient Wood Plank", "Blueberry Pie"],

  "Zeki": ["Silver Salmon", "Golden Salmon", "Sabertoothed Anchovy", "Bouillabaisse"]

  
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