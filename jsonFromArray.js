let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    
    "Ashura": ["Congee", "Kilima Catfish", "Fish Stew", "Sushi"],
    "Auni": ["Ship Fragments", "Cerulean Cicada", "Apple", "Blueberry Pie"],
    "Badruu": ["Onion Seed", "Hearty Vegetable Soup", "Loaded Potato Soup", "Meaty Stir Fry"],
    "Caleri": ["Shell", "Heat Root", "Silk Thread", "Dari Cloves"],
    "Chayne": ["Onion", "Glass Pane", "Heat Root", "Dari Cloves"],
    "Delaila": ["Clay", "HarvestBoost Fertilizer", "Blueberry Bush Seed", "Gold Bar"],
    "Einar": ["Worm", "Prism Trout", "Flow-Infused Plank", "Blue Spotted Ray"],
    "Elouisa": ["Common Bark Cicada", "Proudhorned Stag Beetle", "Scarlet Koi", "Giant Goldfish"],
    "Eshe": ["Leather", "Fish Stew", "Apple Jam", "Jewelwing Dragonfly"],
    "Hassian": ["Fur", "Fabric", "Iron Bar", "Fireworks Arrow"],
    "Hekla": ["Crystal Lake Lotus", "Largemouth Bass", "Black Sea Bass", "Enchanted Pupfish"],
    "Hodari": ["Muujin Meat", "Heartwood", "Azure Chapaa Tail", "Spitfire Cicada"],
    "Jel": ["Coral", "Bat Ray", "Gossamer Veil Moth", "Willow Lamprey"],
    "Jina": ["Coral", "Cotton Seed", "Radiant Sunfish", "Apple Pie"],
    "Kenli": ["Grilled Fish", "Ramen", "Steak Dinner", "Akwinduu Chapaa"],
    "Kenyatta": ["Blueberry Jam", "Pickled Onions", "Spicy Stir Fry", "Bluebristle Muujin Mane"],
    "Nai'O": ["Spice Sprouts", "Rice Seed", "Iron Bar", "Steak Dinner"],
    "Najuma": ["Copper Ore", "Copper Bar", "Rice Cake Stir Fry", "Silver Bar"],
    "Reth": ["Yellow Perch", "Hearty Vegetable Soup", "Apple Jam", "Dari Cloves"],
    "Sifuu": ["Grilled Meat", "Pickled Carrots", "Proudhorned Sernuk Antlers", "Gold Bar"],
    "Subira": ["Napa Cabbage", "Rice", "Red-bellied Piranha", "Spitfire Cicada"],
    "Tamala": ["Common Field Cricket", "Garden Millipede", "Hairy Millipede", "Void Ray"],
    "Tau": ["Sernuk Meat", "Steamed Fish", "Azure Stonehopper", "Shimmerfin"],
    "Tish": ["Coral", "Acorn", "Pinecone", "Blueberry Pie"],
    "Zeki": ["Grilled Oyster", "Fish Stew", "Flow-Infused Plank", "Bouillabaisse"]


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