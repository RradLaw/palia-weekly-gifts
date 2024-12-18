let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    
    
    
    "Ashura": ["Striped Dace", "Prism Trout", "Fish Stew", "Chapaa Masala"],
  "Auni": ["Ship Fragments", "Rice Cake Stir Fry", "Spotted Mantis", "Blueberry Pie"],
  "Badruu": ["Rosy Bitterling", "Spicy Pepper Seed", "Loaded Potato Soup", "Azure Stonehopper"],
  "Caleri": ["Knapweed", "Silk", "Pinecone", "Hypnotic Moray"],
  "Chayne": ["Carrot", "Rice", "Dragon's Beard Peat", "Palian Onion Soup"],
  "Delaila": ["Rosy Bitterling", "SpeedyGro Fertilizer", "Shepp's Pie", "Gold Bar"],
  "Einar": ["Silvery Minnow", "Red-bellied Piranha", "Flow-Infused Plank", "Void Ray"],
  "Elouisa": ["Common Bark Cicada", "Proudhorned Stag Beetle", "Pearl", "Cloudfish"],
  "Eshe": ["Grilled Oyster", "Fish Stew", "Sushi", "Jewelwing Dragonfly"],
  "Hassian": ["Congee", "Elder Sernuk Antlers", "Proudhorned Sernuk Antlers", "Dispel Arrow"],
  "Hekla": ["Bahari Bass", "Acorn", "Pinecone", "Enchanted Pupfish"],
  "Hodari": ["Sernuk Antlers", "Elder Sernuk Antlers", "Loaded Potato Soup", "Bahari Glowbug"],
  "Jel": ["Barracuda", "Lunar Fairy Moth", "Banded Muujin Mane", "Bluebristle Muujin Mane"],
  "Jina": ["Coral", "Heat Root", "Brighteye Butterfly", "Void Ray"],
  "Kenli": ["Grilled Fish", "Ramen", "Trout Dinner", "Celebration Cake"],
  "Kenyatta": ["Sardine", "Pickled Onions", "Firebreathing Dragonfly", "Meaty Stir Fry"],
  "Nai'O": ["Spice Sprouts", "Rice Seed", "Iron Bar", "Steak Dinner"],
  "Najuma": ["Flint", "Garden Snail", "Apple", "Silver Bar"],
  "Reth": ["Sernuk Meat", "Spicy Pepper", "Blueberry", "Cream of Mushroom Soup"],
  "Sifuu": ["Sernuk Antlers", "Copper Bar", "Cream of Tomato Soup", "Swordfin Eel"],
  "Subira": ["Copper Bar", "Silver Bar", "Mutated Angler", "Enchanted Pupfish"],
  "Tamala": ["Kilima Night Moth", "Lunar Fairy Moth", "Azure Stonehopper", "Ancient Amber Beetle"],
  "Tau": ["Sernuk Meat", "Striped Chapaa Tail", "Chapaa Masala", "Proudhorned Sernuk Antlers"],
  "Tish": ["Ship Fragments", "Stuffed Cabbage Rolls", "Pinecone", "Green Pearl"],
  "Zeki": ["Coral", "Silk", "Crab Gumbo", "Gold Ore"]
      
      
      
      
      

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