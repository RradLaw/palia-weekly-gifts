let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

  "Ashura": ["Rainbow Trout", "Juniper Seed", "Pinecone", "Sashimi"],
  "Auni": ["Spotted Stinkbug", "Garden Leafhopper", "Scintillating Centipede", "Blueberry Pie"],
  "Badruu": ["Carrot", "WeedBlock Fertilizer", "Apple Tree Seed", "Meaty Stir Fry"],
  "Caleri": ["Wild Ginger", "Heat Root", "Bahari Glowbug", "Chapaa Masala"],
  "Chayne": ["Wild Ginger", "Glass Pane", "Apple", "Green Pearl"],
  "Delaila": ["Calico Koi", "Spineshell Crab", "Scarlet Koi", "Gold Bar"],
  "Einar": ["Eyeless Minnow", "Mirror Carp", "Fathead Minnow", "Ancient Fish"],
  "Elouisa": ["Unopened Oyster", "Paddlefish", "Brighteye Butterfly", "Ancient Amber Beetle"],
  "Eshe": ["Grilled Oyster", "Juniper Seed", "Black Sea Bass", "Akwinduu Chapaa"],
  "Hassian": ["Mountain Morel", "Striped Chapaa Tail", "Iron Ore", "Steak Dinner"],
  "Hekla": ["Grilled Fish", "Largemouth Bass", "Chub", "Celebration Cake"],
  "Hodari": ["Paper Lantern Bug", "Heartwood", "Hot Hounds", "Steak Dinner"],
  "Jel": ["Waterlogged Boot", "Sernuk Hide", "Vampire Crab", "Muujin Bahari"],
  "Jina": ["Coral", "Glass Pane", "Brighteye Butterfly", "Apple Pie"],
  "Kenli": ["Grilled Oyster", "Garden Ladybug", "Azure Chapaa Tail", "Gold Bar"],
  "Kenyatta": ["Sardine", "Acorn", "Alligator Gar", "Meaty Stir Fry"],
  "Nai'O": ["Spice Sprouts", "Heartwood Plank", "Bahari Pike", "Steak Dinner"],
  "Najuma": ["Tomato", "Copper Bar", "Cream of Tomato Soup", "Blueberry Pie"],
  "Reth": ["Sweet Leaf", "Heat Root", "Apple", "Cream of Mushroom Soup"],
  "Sifuu": ["Chapaa Meat", "Oily Anchovy", "Iron Bar", "Swordfin Eel"],
  "Subira": ["Leather", "Stuffed Cabbage Rolls", "Chili Oil Dumplings", "Spitfire Cicada"],
  "Tamala": ["Emerald Carpet Moss", "Lunar Fairy Moth", "Pearl", "Fairy Mantis"],
  "Tau": ["Fried Catfish Dinner", "Duskwing Butterfly", "Elder Sernuk Antlers", "Akwinduu Chapaa"],
  "Tish": ["Shell", "Glass Bulb", "Pinecone", "Blueberry Pie"],
  "Zeki": ["Grilled Oyster", "Fish Stew", "Silk Thread", "Dari Cloves"],


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