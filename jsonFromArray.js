let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

   "Ashura": ["Silver Salmon", "Stickleback", "Pumpkin Curry and Rice", "Elderwood Pie"],
  "Auni": ["Duskwing Butterfly", "Candied Kopaa Nuts", "Blood Beetle"],
  "Badruu": ["Potato", "Rice Seed", "Rockhopper Pumpkin Seed"],
  "Caleri": ["Coral", "Pickled Carrots", "Blushing Batterfly"],
  "Chayne": ["Potato", "Pickled Tomatoes", "Heat Root"],
  "Delaila": ["Clay", "Stalking Catfish"],
  "Einar": ["Worm", "Fairy Carp", "Glow Worm", "Angelfish"],
  "Elouisa": ["Dawnray", "Proudhorned Stag Beetle", "Elder Clam Mushroom"],
  "Eshe": ["Leather", "Chapaa Masala"],
  "Hassian": ["Calico Koi", "Brightshroom", "Iron Bar", "Fireworks Arrow"],
  "Hekla": ["Cotton", "Largemouth Bass", "Beluga Sturgeon"],
  "Hodari": ["Grilled Meat", "Flow-Infused Wood", "Starry Bitterling"],
  "Jel": ["Waterlogged Boot", "Bat Ray", "Nightshadow Batterfly"],
  "Jina": ["Mountain Morel", "Cotton Seed", "Mutated Angler", "Dari Cloves"],
  "Kenli": ["Spotted Chapaa Tail", "Hearty Vegetable Soup", "Elder Clam Mushroom Meat"],
  "Kenyatta": ["Blueberry Jam", "Acorn", "Firebreathing Dragonfly"],
  "Nai'O": ["Heat Root", "Corn", "Veggie Chili"],
  "Najuma": ["Clay", "Iron Ore"],
  "Reth": ["Congee", "Kopaa Nuts", "Palian Onion Soup"],
  "Sifuu": ["Sernuk Antlers", "Copper Bar", "Iron Bar"],
  "Subira": ["Potato", "Gold Ore", "Mutated Angler"],
  "Tamala": ["Emerald Carpet Moss", "Lunar Fairy Moth"],
  "Tau": ["Calico Koi", "Leather", "Grilled Oyster"],
  "The Gardener": ["Common Field Cricket", "Floatfish Mushroom", "Nightshadow Batterfly", "Ancient Amber Beetle"],
  "Tish": ["Clay", "Samara", "Whitestone", "Green Pearl"],
  "Zeki": ["Silvery Minnow", "Fish Stew", "Flow-Infused Plank", "Piksii Shmole Spore"]
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