let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    "Ashura": ["Sapwood Plank", "Golden Salmon", "Fish Stew", "Sushi"],
  "Auni": ["Common Field Cricket", "Garden Mantis", "Hairy Millipede", "Will-o-wisp Rockhopper"],
  "Badruu": ["Carrot Seed", "Corn Seed", "Ramen", "Bean Burger"],
  "Caleri": ["Congee", "Pickled Carrots", "Silk Thread", "Elderwood Pie"],
  "Chayne": ["Carrot", "Pickled Tomatoes", "Apple", "Elderwood Lotus"],
  "Delaila": ["Calico Koi", "HarvestBoost Fertilizer", "Iron Bar", "Rockhopper Pumpkin"],
  "Einar": ["Eyeless Minnow", "Yellow Perch", "Ogopuu Scale", "Radiant Sunfish"],
  "Elouisa": ["Common Bark Cicada", "Paddlefish", "Dragon's Beard Peat", "Fairy Mantis"],
  "Eshe": ["Grilled Oyster", "Bluefin Tuna", "Veil Piksii", "Black Pearl"],
  "Hassian": ["Congee", "Elder Sernuk Antlers", "Iron Ore", "Shimmerfin"],
  "Hekla": ["Grilled Fish", "Largemouth Bass", "Pearl", "Enchanted Pupfish"],
  "Hodari": ["Muujin Meat", "Flow-Infused Wood", "Iron Ore", "Emerald Ogopuu Scale"],
  "Jel": ["Barracuda", "Striped Chapaa Tail", "Umbraan Betta", "Muujin Bahari"],
  "Jina": ["Mountain Morel", "Cotton Seed", "Floatfish Mushroom", "Void Ray"],
  "Kenli": ["Spotted Chapaa Tail", "Creamy Carrot Soup", "Sashimi", "Kenli's Carp"],
  "Kenyatta": ["Barracuda", "Cytthroat Trout", "Soon Tofu", "Fairy Mantis"],
  "Nai'O": ["Muujin Meat", "Pickled Potatoes", "Stalking Catfish", "Veggie Chili"],
  "Najuma": ["Wild Garlic", "Garden Snail", "Apple Jam", "Platinum Ore"],
  "Reth": ["Yellow Perch", "Sernuk Noodle Stew", "Batterfly Beans", "Rockhopper Pumpkin"],
  "Sifuu": ["Grilled Meat", "Pickled Carrots", "Cream of Tomato Soup", "Blood Beetle"],
  "Subira": ["Congee", "Grilled Oyster", "Spicy Honey-Baked Muujin", "Elderflower"],
  "Tamala": ["Fur", "Brightshroom", "Shimmerfin", "Will-o-wisp Rockhopper"],
  "Tau": ["Common Blue Butterfly", "Heartwood Plank", "Azure Stonehopper", "Proudhorned Sernuk Antlers"],
  "The Gardener": ["Glass Pane", "Elder Clam Mushroom", "Sunburst Batterfly", "Will-o-wisp Rockhopper"],
  "Tish": ["Sapwood Plank", "Acorn", "Whitestone", "Green Pearl"],
  "Zeki": ["Grilled Oyster", "Silk", "Silk Thread", "Black Pearl"]
  
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