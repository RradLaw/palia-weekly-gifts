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
  "Auni": ["Brushtail Dragonfly", "Proudhorned Stag Beetle", "Firebreathing Dragonfly", "Blueberry Pie"],
  "Badruu": ["Carrot Seed", "Creamy Carrot Soup", "Blueberry Bush Seed", "Meaty Stir Fry"],
  "Caleri": ["Grilled Mushroom", "Pickled Carrots", "Pinecone", "Chapaa Masala"],
  "Chayne": ["Wild Garlic", "Rice Seed", "Apple", "Cream of Mushroom Soup"],
  "Delaila": ["Calico Koi", "HarvestBoost Fertilizer", "Apple", "Giant Goldfish"],
  "Einar": ["Spotted Bullhead", "Yellow Perch", "Fathead Minnow", "Void Ray"],
  "Elouisa": ["Unopened Oyster", "Bahari Bee", "Raspberry Beetle", "Rainbow-Tipped Butterfly"],
  "Eshe": ["Leather", "Juniper Seed", "Apple Jam", "Akwinduu Chapaa"],
  "Hassian": ["Flint", "Fabric", "Proudhorned Sernuk Antlers", "Fireworks Arrow"],
  "Hekla": ["Unopened Oyster", "Smallmouth Bass", "Ramen", "Green Pearl"],
  "Hodari": ["Copper Ore", "Flow-Infused Wood", "Loaded Potato Soup", "Bahari Glowbug"],
  "Jel": ["Shell", "Muujin Mane", "Gossamer Veil Moth", "Green Pearl"],
  "Jina": ["Congee", "Glass Pane", "Radiant Sunfish", "Void Ray"],
  "Kenli": ["Wagon Wheel", "Garden Ladybug", "Oysters Akwinduu", "Kenli's Carp"],
  "Kenyatta": ["Brushtail Dragonfly", "Oily Anchovy", "Pinecone", "Crimson Fangtooth"],
  "Nai'O": ["Muujin Meat", "HydratePro Fertilizer", "Corn", "Steak Dinner"],
  "Najuma": ["Knapweed", "Copper Bar", "Apple Jam", "Silver Bar"],
  "Reth": ["Sweet Leaf", "Ramen", "Apple Jam", "Cream of Mushroom Soup"],
  "Sifuu": ["Stone Brick", "Oily Anchovy", "Proudhorned Sernuk Antlers", "Silver Bar"],
  "Subira": ["Bok Choy", "Fish Stew", "Standard Arrow", "Spicy Rice Cakes"],
  "Tamala": ["Wild Ginger", "Lunar Fairy Moth", "Garden Leafhopper", "Flametongue Ray"],
  "Tau": ["Spotted Chapaa Tail", "Garden Leafhopper", "Chapaa Masala", "Apple"],
  "Tish": ["Clay", "Acorn", "Apple Pie", "Green Pearl"],
  "Zeki": ["Silver Salmon", "Silk", "Sushi", "Bouillabaisse"]


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