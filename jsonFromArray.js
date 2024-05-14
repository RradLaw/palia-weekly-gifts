let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    
    "Ashura": ["Rainbow Trout", "Samara", "Pinecone", "Apple Pie"],
    "Auni": ["Common Field Cricket", "Duskwing Butterfly", "Apple", "Celebration Cake"],
    "Badruu": ["Potato Seed", "Creamy Carrot Soup", "Blueberry Bush Seed", "Azure Stonehopper"],
    "Caleri": ["Emerald Carpet Moss", "Silk Thread", "Blueberry Jam", "Hypnotic Moray"],
    "Chayne": ["Tomato", "Glass Pane", "Heat Root", "Green Pearl"],
    "Delaila": ["Rosy Bitterling", "Orange Bluegill", "Shepp's Pie", "Giant Goldfish"],
    "Einar": ["Silvery Minnow", "Garden Snail", "Mottled Gobi", "Stormray"],
    "Elouisa": ["Dawnray", "Cerulean Cicada", "Pearl", "Flametongue Ray"],
    "Eshe": ["Grilled Oyster", "Samara", "Silver Ore", "Palian Onion Soup"],
    "Hassian": ["Mountain Morel", "Standard Arrow", "Iron Ore", "Steak Dinner"],
    "Hekla": ["Mountain Morel", "Smallmouth Bass", "Pinecone", "Green Pearl"],
    "Hodari": ["Muujin Meat", "Flow-Infused Wood", "Proudhorned Sernuk Antlers", "Steak Dinner"],
    "Jel": ["Fur", "Sernuk Hide", "Black Sea Bass", "Muujin Bahari"],
    "Jina": ["Congee", "Cotton Seed", "Radiant Sunfish", "Dari Cloves"],
    "Kenli": ["Grilled Oyster", "Creamy Carrot Soup", "Loaded Potato Soup", "Gold Bar"],
    "Kenyatta": ["Emerald Carpet Moss", "Oily Anchovy", "Alligator Gar", "Fairy Mantis"],
    "Nai'O": ["Muujin Meat", "Wheat Seed", "Iron Bar", "Steak Dinner"],
    "Najuma": ["Tomato Plant Seed", "Copper Bar", "Rice Cake Stir Fry", "Blueberry Pie"],
    "Reth": ["Yellow Perch", "Creamy Carrot Soup", "Loaded Potato Soup", "Cream of Mushroom Soup"],
    "Sifuu": ["Grilled Meat", "Iron Ore", "Iron Bar", "Gold Ore"],
    "Subira": ["Leather", "Stuffed Cabbage Rolls", "Steamed Fish", "Spicy Rice Cakes"],
    "Tamala": ["Wild Ginger", "Garden Millipede", "Azure Stonehopper", "Fairy Mantis"],
    "Tau": ["Chapaa Meat", "Steamed Fish", "Azure Stonehopper", "Apple"],
    "Tish": ["Wagon Wheel", "Stuffed Cabbage Rolls", "Apple Pie", "Green Pearl"],
    "Zeki": ["Silver Salmon", "Fish Stew", "Crab Gumbo", "Gold Bar"]
    








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