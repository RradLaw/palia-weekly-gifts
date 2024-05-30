let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    "Ashura": ["Rainbow Trout", "Kilima Catfish", "Crab Pot Pie (♥)", "Apple Pie"],
    "Auni": ["Brushtail Dragonfly", "Cerulean Cicada", "Scintillating Centipede", "Celebration Cake"],
    "Badruu": ["Onion Seed", "Wheat Seed", "Ramen", "Azure Stonehopper"],
    "Caleri": ["Shell", "Pickled Carrots", "Silk Thread", "Chapaa Masala"],
    "Chayne": ["Carrot", "Apple Jam", "Blueberries", "Green Pearl"],
    "Delaila": ["Channel Catfish", "Orange Bluegill", "Apple Tree Seed", "Giant Goldfish"],
    "Einar": ["Silver Salmon", "Ribbontail Ray", "Fathead Minnow", "Enchanted Pupfish"],
    "Elouisa": ["Unopened Oyster", "Proudhorned Stag Beetle", "Scarlet Koi", "Green Pearl"],
    "Eshe": ["Fur", "Juniper Seed", "Silver Ore", "Akwinduu Chapaa"],
    "Hassian": ["Fur", "Sernuk Noodle Stew", "Iron Ore", "Shimmerfin"],
    "Hekla": ["Bahari Bass", "Fried Catfish Dinner", "Cream of Mushroom Soup", "Enchanted Pupfish"],
    "Hodari": ["Spotted Chapaa Tail", "Elder Sernuk Antlers", "Hot Hounds", "Steak Dinner"],
    "Jel": ["Coral", "Duskray", "Black Sea Bass", "Midnight Paddlefish"],
    "Jina": ["Congee", "Brightshroom", "Shimmerfin", "Cream of Mushroom Soup"],
    "Kenli": ["Grilled Fish", "Garden Ladybug", "Steak Dinner", "Chapaa Masala"],
    "Kenyatta": ["Garden Mantis", "Elder Sernuk Antlers", "Proudhorned Sernuk Antlers", "Bluebristle Muujin Mane"],
    "Nai'O": ["Muujin Meat", "HydratePro Fertilizer", "Blueberry Jam", "Steak Dinner"],
    "Najuma": ["Flint", "Copper Bar", "Honey Loach", "Blueberry Pie"],
    "Reth": ["Carrot", "Sernuk Noodle Stew", "Blueberries", "Palian Onion Soup"],
    "Sifuu": ["Chapaa Meat", "Standard Arrow", "Silver Ore", "Steak Dinner"],
    "Subira": ["Fur", "Glow Worm", "Spitfire Cicada", null],
    "Tamala": ["Kilima Night Moth", "Brightshroom", "Azure Stonehopper", "Leafstalker Mantis"],
    "Tau": ["Spotted Chapaa Tail", "Silver Salmon", "Grilled Oyster", "Wagon Wheel"],
    "Tish": ["Coral", "Juniper Seed", "Apple Pie", "Green Pearl"],
    "Zeki": ["Grilled Oyster", "Silk", "Fish Tacos", "Bouillabaisse"]
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
        if(array[i] === "Blueberries") {
            array[i] = "Blueberry";
        }

        array[i] = array[i]?.replaceAll(" (♥)","");

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