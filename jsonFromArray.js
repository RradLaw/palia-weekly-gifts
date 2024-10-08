let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    
    "Ashura": ["Channel Catfish", "Golden Salmon", "Fish Stew", "Fisherman's Brew"],
  "Auni": ["Ship Fragments", "Garden Leafhopper", "Scintillating Centipede", "Blueberry Pie"],
  "Badruu": ["Carrot Seed", "Wheat", "Apple Tree Seed", "Cream of Mushroom Soup"],
  "Caleri": ["Grilled Mushroom", "Heat Root", "Pinecone", "Dari Cloves"],
  "Chayne": ["Potato Seed", "Samara", "Pearl", "Cream of Mushroom Soup"],
  "Delaila": ["Rainbow Trout", "Garden Ladybug", "Blueberry", "Gold Bar"],
  "Einar": ["Bahari Crab", "Spineshell Crab", "Flow-Infused Plank", "Enchanted Pupfish"],
  "Elouisa": ["Common Bark Cicada", "Proudhorned Stag Beetle", "Gossamer Veil Moth", "Giant Goldfish"],
  "Eshe": ["Grilled Oyster", "Fish Stew", "Black Sea Bass", "Jewelwing Dragonfly"],
  "Hassian": ["Flint", "Standard Arrow", "Iron Ore", "Shimmerfin"],
  "Hekla": ["Grilled Mushroom", "Brightshroom", "Beluga", "Celebration Cake"],
  "Hodari": ["Grilled Meat", "Striped Chapaa Tail", "Hot Hounds", "Steak Dinner"],
  "Jel": ["Kilima Night Moth", "Striped Chapaa Tail", "Scintillating Centipede", "Muujin Bahari"],
  "Jina": ["Coral", "Cotton", "Mutated Angler", "Rainbow-Tipped Butterfly"],
  "Kenli": ["Spotted Chapaa Tail", "Ramen", "Oysters Akwinduu", "Gold Bar"],
  "Kenyatta": ["Emerald Carpet Moss", "Acorn", "Spotted Mantis", "Crimson Fangtooth"],
  "Nai'O": ["Spice Sprouts", "Rice Seed", "Iron Bar", "Steak Dinner"],
  "Najuma": ["Tomato Plant Seed", "Garden Snail", "Flow-Infused Plank", "Silver Bar"],
  "Reth": ["Congee", "Wheat", "Cream of Tomato Soup", "Palian Onion Soup"],
  "Sifuu": ["Copper Ore", "Iron Ore", "Iron Bar", "Dispel Arrow"],
  "Subira": ["Spice Sprouts", "Gold Ore", "Long Nosed Unicorn Fish", "Spicy Rice Cakes"],
  "Tamala": ["Emerald Carpet Moss", "Heat Root", "Dragon's Beard Peat", "Green Pearl"],
  "Tau": ["Sernuk Meat", "Sernuk Antlers", "Grilled Oyster", "Grilled Meat"],
  "Tish": ["Sapwood Plank", "Dawnray", "Pinecone", "Blueberry Pie"],
  "Zeki": ["Silver Salmon", "Silk", "Trout Dinner", "Bouillabaisse"]
      
      

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