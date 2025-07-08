let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

  "Ashura": ["Sweet Leaf", "Striped Sturgeon", "Loaded Flowtato", "Fisherman's Brew"],
  "Auni": ["Spotted Stinkbug", "Proudhorned Stag Beetle", "Blueberry", "Apple Pie"],
  "Badruu": ["Onion", "SpeedyGro Fertilizer", "Loaded Potato Soup", "Meaty Stir Fry"],
  "Caleri": ["Wild Ginger", "Silk", "Tinfin", "Chapaa Masala"],
  "Chayne": ["Tomato", "Wheat", "Apple", "Green Pearl"],
  "Delaila": ["Bahari Crab", "SpeedyGro Fertilizer", "Princess Ladybug", "Rockhopper Pumpkin"],
  "Einar": ["Gillyfin", "Yellow Perch", "Mottled Gobi", "Ancient Fish"],
  "Elouisa": ["Dawnray", "Proudhorned Stag Beetle", "Piksii Floatfish", "Majiri-of-War"],
  "Eshe": ["Leather", "Juniper Seed", "Silk Thread", "Chapaa Masala"],
  "Hassian": ["Plant Fiber", "Striped Chapaa Tail", "Proudhorned Sernuk Antlers", "Giant Kilima Stingray"],
  "Hekla": ["Bahari Bass", "Acorn", "Black Sea Bass", "Enchanted Pupfish"],
  "Hodari": ["Paper Lantern Bug", "Elder Sernuk Antlers", "Whitestone", "Platinum Ore"],
  "Jel": ["Umbran Carp", "Freshwater Eel", "Scintillating Centipede", "Bean Burger"],
  "Jina": ["Mountain Morel", "Glass Pane", "Shimmerfin", "Devilfish"],
  "Kenli": ["Grilled Fish", "Hearty Vegetable Soup", "Steak Dinner", "Muujin Bahari"],
  "Kenyatta": ["Sernuk Antlers", "Cytthroat Trout", "Leafstalker Mantis", "Majiri-of-War"],
  "Nai'O": ["Muujin Meat", "Carrot", "Batterfly Bean Seeds", "Veggie Chili"],
  "Najuma": ["Sweet Leaf", "Garden Snail", "Ancient Wood Plank", "Platinum Ore"],
  "Reth": ["Spice Sprouts", "Wheat", "Apple Jam", "Rockhopper Pumpkin"],
  "Sifuu": ["Copper Ore", "Iron Ore", "Turn Pike", "Steak Dinner"],
  "Subira": ["Wild Green Onion", "Silver Ore", "Long Nosed Unicorn Fish", "Angelfish"],
  "Tamala": ["Spice Sprouts", "Garden Millipede", "Hairy Millipede", "Inyrevn Mermaid"],
  "Tau": ["Calico Koi", "Steamed Fish", "Mossyfin", "Apple"],
  "Tish": ["Coral", "Stuffed Cabbage Rolls", "Whitestone", "Angelfish"],
  "Zeki": ["Unopened Oyster", "Golden Salmon", "Steamed Fish", "Elder Shmole Spore"]
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