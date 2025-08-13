let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

   "Ashura": ["Striped Dace", "Heartwood Plank", "Pinecone", "Blueberry Pie"],
  "Auni": ["Common Bark Cicada", "Garden Leafhopper", "Scintillating Centipede", "Blood Beetle"],
  "Badruu": ["Potato Seed", "Corn Seed", "Pumpkin Pie", "Cream of Mushroom Soup"],
  "Caleri": ["Knapweed", "Kilima Redfin", "Blueberry Jam", "Bouillabaisse"],
  "Chayne": ["Potato Seed", "Apple Jam", "Apple", "Elderwood Lotus"],
  "Delaila": ["Clay", "Orange Bluegill", "Lake Shark", "Giant Goldfish"],
  "Einar": ["Gillyfin", "Mirror Carp", "Glow Worm", "Majiri-of-War"],
  "Elouisa": ["Dawnray", "Cytthroat Trout", "Loaded Flowtato", "Inyrevn Mermaid"],
  "Eshe": ["Fur", "Juniper Seed", "Yellowfin Tuna", "Chapaa Masala"],
  "Hassian": ["Spotted Chapaa Tail", "Standard Arrow", "Ogopuu Scale", "Piksii Shmole Spore"],
  "Hekla": ["Grilled Mushroom", "Smallmouth Bass", "Beluga Sturgeon", "Green Pearl"],
  "Hodari": ["Muujin Meat", "Sernuk Noodle Stew", "Azure Chapaa Tail", "Bahari Glowbug"],
  "Jel": ["Shell", "Lunar Fairy Moth", "Oysters Akwinduu", "Eleroo Eel"],
  "Jina": ["Shell", "Cotton Seed", "Nightshadow Batterfly", "Elderwood Lotus"],
  "Kenli": ["Chapaa Meat", "Hearty Vegetable Soup", "Princess Ladybug", "Meaty Stir Fry"],
  "Kenyatta": ["Sundrop Lily", "Creamy Carrot Soup", "Spotted Mantis", "Majiri-of-War"],
  "Nai'O": ["Spice Sprouts", "HarvestBoost Fertilizer", "Blueberry Jam", "Veggie Chili"],
  "Najuma": ["Copper Ore", "Garden Snail", "Apple", "Veggie Chili"],
  "Reth": ["Yellow Perch", "Pickled Onions", "Cream of Tomato Soup", "Dari Cloves"],
  "Sifuu": ["Grilled Meat", "Iron Ore", "Ogopuu Scale", "Platinum Ore"],
  "Subira": ["Iron Ore", "Gold Ore", "Mutated Angler", "Enchanted Pupfish"],
  "Tamala": ["Emerald Carpet Moss", "Brightshroom", "Ogopuu Skin", "Fairy Mantis"],
  "Tau": ["Muujin Meat", "Sernuk Antlers", "Scarlet Koi", "Emerald Ogopuu Scale"],
  "Tish": ["Sundrop Lily", "Juniper Seed", "Silk Thread", "Will-o-wisp Rockhopper"],
  "Zeki": ["Grilled Fish", "Silk", "Ancient Koi", "Gold Ore"]
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