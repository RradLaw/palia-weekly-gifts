let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

  "Ashura": ["Striped Dace", "Juniper Seed", "Lake Shark", "Apple Pie"],
  "Auni": ["Spotted Stinkbug", "Garden Mantis", "Nightshadow Batterfly", "Blood Beetle"],
  "Badruu": ["Carrot", "WeedBlock Fertilizer", "Blueberry Bush Seed", "Cream of Mushroom Soup"],
  "Caleri": ["Shell", "Kilima Redfin", "Oysters Akwinduu", "Elderwood Pie"],
  "Chayne": ["Congee", "Wheat Seed", "Cream of Tomato Soup", "Elderwood Lotus"],
  "Delaila": ["Muujin Meat", "Orange Bluegill", "Princess Ladybug", "Giant Goldfish"],
  "Einar": ["Eyeless Minnow", "Red-bellied Piranha", "Mini Mullet", "Cactus Moray"],
  "Elouisa": ["Calico Koi", "Inky Dragonfly", "Energized Piranha", "Bluebristle Muujin Mane"],
  "Eshe": ["Leather", "Samara", "Silk Thread", "Jewelwing Dragonfly"],
  "Hassian": ["Sernuk Antlers", "Chapaa Asada Tacos", "Ogopuu Meat", "Eleroo Eel"],
  "Hekla": ["Grilled Meat", "Brightshroom", "Pearl", "Celebration Cake"],
  "Hodari": ["Sernuk Antlers", "Heartwood", "Flame-Horned Rockhopper", "Bahari Glowbug"],
  "Jel": ["Leather", "Striped Chapaa Tail", "Petit Fives", "Green Pearl"],
  "Jina": ["Shell", "Heat Root", "Floatfish Mushroom", "Void Ray"],
  "Kenli": ["Grilled Oyster", "Garden Ladybug", "Oysters Akwinduu", "Kenli's Carp"],
  "Kenyatta": ["Blueberry Jam", "Elder Sernuk Antlers", "Dragon's Beard Peat", "Bluebristle Muujin Mane"],
  "Nai'O": ["Spice Sprouts", "HydratePro Fertilizer", "Bronze Bluegill", "Fruit Smoothie Bowl"],
  "Najuma": ["Tomato", "Garden Snail", "Draugr Beetle", "Silver Bar"],
  "Reth": ["Tomato", "Rice", "Elder Clam Mushroom Meat", "Dari Cloves"],
  "Sifuu": ["Grilled Meat", "Pickled Carrots", "Grumpy Granite Rockhopper", "Bean Burger"],
  "Subira": ["Iron Bar", "Glow Worm", "Chili Oil Dumplings", "Angelfish"],
  "Tamala": ["Kilima Night Moth", "Garden Millipede", "Elder Clam Mushroom", "Ancient Amber Beetle"],
  "Tau": ["Spotted Chapaa Tail", "Unopened Oyster", "Sabertoothed Anchovy", "Akwinduu Chapaa"],
  "Tish": ["Coral", "Juniper Seed", "Silk Thread", "Green Pearl"],
  "Zeki": ["Unopened Oyster", "Silk", "Bronze Bluegill", "Gold Bar"]
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