let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    
        "Ashura": ["Rainbow Trout", "Heartwood Plank", "Crab Pot Pie", "Fisherman's Brew"],
  "Auni": ["Common Bark Cicada", "Garden Mantis", "Blueberry", "Blueberry Pie"],
  "Badruu": ["Potato Seed", "Corn Seed", "Loaded Potato Soup", "Cream of Mushroom Soup"],
  "Caleri": ["Grilled Oyster", "Heat Root", "Cream of Tomato Soup", "Bouillabaisse"],
  "Chayne": ["Congee", "Pickled Tomatoes", "Cream of Tomato Soup", "Cream of Mushroom Soup"],
  "Delaila": ["Bahari Crab", "Spineshell Crab", "Vampire Crab", "Gold Bar"],
  "Einar": ["Gillyfin", "Prism Trout", "Shimmerfin", "Kilima Greyling"],
  "Elouisa": ["Spotted Stinkbug", "Cantankerous Koi", "Indigo Lamprey", "Bluebristle Muujin Mane"],
  "Eshe": ["Fur", "Silk", "Black Sea Bass", "Bouillabaisse"],
  "Hassian": ["Fur", "Chapaa Asada Tacos", "Iron Ore", "Steak Dinner"],
  "Hekla": ["Grilled Meat", "Acorn", "Pearl", "Enchanted Pupfish"],
  "Hodari": ["Spotted Chapaa Tail", "Flow-Infused Wood", "Iron Ore", "Firebreathing Dragonfly"],
  "Jel": ["Leather", "Silk", "Vampire Crab", "Bluebristle Muujin Mane"],
  "Jina": ["Congee", "Brightshroom", "Brighteye Butterfly", "Void Ray"],
  "Kenli": ["Spotted Chapaa Tail", "Striped Chapaa Tail", "Sashimi", "Celebration Cake"],
  "Kenyatta": ["Blueberry Jam", "Inky Dragonfly", "Phoenixfire Relleno", "Fairy Mantis"],
  "Nai'O": ["Muujin Meat", "Fish Stew", "Blueberry Bush Seed", "Steak Dinner"],
  "Najuma": ["Sweet Leaf", "Copper Bar", "Silver Ore", "Blueberry Pie"],
  "Reth": ["Carrot", "Heat Root", "Apple", "Palian Onion Soup"],
  "Sifuu": ["Sernuk Antlers", "Copper Bar", "Iron Bar", "Swordfin Eel"],
  "Subira": ["Fur", "Radiant Sunfish", "Hearty Vegetable Soup", "Spicy Rice Cakes"],
  "Tamala": ["Kilima Night Moth", "Silk", "Radiant Sunfish", "Leafstalker Mantis"],
  "Tau": ["Trout Dinner", "Cantankerous Koi", "Prism Trout", "Proudhorned Sernuk Antlers"],
  "Tish": ["Clay", "Glass Bulb", "Celebration Cake", "Green Pearl"],
  "Zeki": ["Silver Salmon", "Golden Salmon", "Fried Catfish Dinner", "Dari Cloves"]
      
      

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