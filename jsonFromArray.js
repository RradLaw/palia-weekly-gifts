let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

"Ashura": ["Sweet Leaf", "Juniper Seed", "Lake Shark", "Ancient Wood Seed"],

  "Auni": ["Waterlogged Boot", "Bahari Bee", "Blueberry", "Celebration Cake"],

  "Badruu": ["Tomato", "Orange Bluegill", "Flowtato", "Azure Stonehopper"],

  "Caleri": ["Spice Sprouts", "Glass Bulb", "Elderwood Orchid", "Dari Cloves"],

  "Chayne": ["Tomato", "Creamy Carrot Soup", "Cream of Tomato Soup", "Cream of Mushroom Soup"],

  "Delaila": ["Rosy Bitterling", "HydratePro Fertilizer", "Mini Mullet", "Rockhopper Pumpkin"],

  "Einar": ["Silvery Minnow", "Ribbontail Ray", "Glow Worm", "Cloudfish"],

  "Elouisa": ["Dawnray", "Proudhorned Stag Beetle", "Thundering Eel", "Flametongue Ray"],

  "Eshe": ["Grilled Oyster", "Juniper Seed", "Pumpkin Stew", "Chapaa Masala"],

  "Hassian": ["Sernuk Antlers", "Sernuk Noodle Stew", "Ogopuu Meat", "Dispel Arrow"],

  "Hekla": ["Bahari Bass", "Acorn", "Trout Dinner", "Green Pearl"],

  "Hodari": ["Sernuk Antlers", "Striped Chapaa Tail", "Whitestone Slab", "Firebreathing Dragonfly"],

  "Jel": ["Leather", "Silk", "Thundering Eel", "Bean Burger"],

  "Jina": ["Mountain Morel", "Heat Root", "Nightshadow Batterfly", "Dari Cloves"],

  "Kenli": ["Wagon Wheel", "Fish Stew", "Petit Fives", "Gold Bar"],

  "Kenyatta": ["Sardine", "Acorn", "Alligator Gar", "Bluebristle Muujin Mane"],

  "Nai'O": ["Waterlogged Boot", "Heat Root", "Iron Bar", "Veggie Chili"],

  "Najuma": ["Copper Ore", "Garden Snail", "Floatfish Mushroom", "Veggie Chili"],

  "Reth": ["Tomato", "Ramen", "Raspberry Beetle", "Fruit Smoothie Bowl"],

  "Sifuu": ["Stone Brick", "Oily Anchovy", "Iron Bar", "Swordfin Eel"],

  "Subira": ["Grilled Fish", "Ancient Fish", "Standard Arrow", "Firebreathing Dragonfly"],

  "Tamala": ["Emerald Carpet Moss", "Garden Millipede", "Hairy Millipede", "Fairy Mantis"],

  "Tau": ["Calico Koi", "Oily Anchovy", "Starry Bitterling", "Emerald Ogopuu Scale"],

  "The Gardener": ["Worm", "Elder Clam Mushroom", "Ancient Wood Seed", "Ancient Amber Beetle"],

  "Tish": ["Briar Daisy", "Stuffed Cabbage Rolls", "Ancient Wood Plank", "Angelfish"],

  "Zeki": ["Coral", "Golden Salmon", "Oysters Akwinduu", "Dari Cloves"]


  
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