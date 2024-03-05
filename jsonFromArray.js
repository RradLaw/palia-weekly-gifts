let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    "Ashura": ["Grilled Fish", "Juniper Seed", "Pinecone", "Sushi"],
    "Auni": ["Common Field Cricket", "Proudhorned Stag Beetle", "Spotted Mantis", "Celebration Cake"],
    "Badruu": ["Carrot", "Rice Seed", "Ramen", "Cream of Mushroom Soup"],
    "Caleri": ["Congee", "Silk", "Bahari Glowbug", "Hypnotic Moray"],
    "Chayne": ["Tomato Plant Seed", "Blueberry Bush Seed", "Apple", "Palian Onion Soup"],
    "Delaila": ["Rainbow Trout", "Garden Ladybug", "Blueberry", "Giant Goldfish"],
    "Einar": ["Bahari Crab", "Fairy Carp", "Mottled Gobi", "Kilima Greyling"],
    "Elouisa": ["Duskray", "Cerulean Cicada", "Gossamer Veil Moth", "Cloudfish"],
    "Eshe": ["Grilled Oyster", "Bluefin Tuna", "Silver Bar", "Palian Onion Soup"],
    "Hassian": ["Grilled Meat", "Fabric", "Iron Ore", "Giant Kilima Stingray"],
    "Hekla": ["Grilled Meat", "Fried Catfish Dinner", "Beluga", "Enchanted Pupfish"],
    "Hodari": ["Paper Lantern Bug", "Sernuk Noodle Stew", "Stonefish", "Spitfire Cicada"],
    "Jel": ["Waterlogged Boot", "Albino Eel", "Silk Thread", "Willow Lamprey"],
    "Jina": ["Congee", "Glass Pane", "Dragon's Beard Peat", "Celebration Cake"],
    "Kenli": ["Chapaa Meat", "Creamy Carrot Soup", "", "Bouillabaisse"],
    "Kenyatta": ["Wild Garlic", "Elder Sernuk Antlers", "Dragon's Beard Peat", "Meaty Stir Fry"],
    "Nai'O": ["Muujin Meat", "Rice Seed", "Iron Bar", "Steak Dinner"],
    "Najuma": ["Copper Ore", "Copper Bar", "Apple", "Blueberry Pie"],
    "Reth": ["Sweet Leaf", "Pickled Onions", "Raspberry Beetle", "Dari Cloves"],
    "Sifuu": ["Muujin Meat", "Pickled Carrots", "Cream of Tomato Soup", "Fireworks Arrow"],
    "Subira": ["Grilled Fish", "Fish Stew", "Chili Oil Dumplings", "Spitfire Cicada"],
    "Tamala": ["Kilima Night Moth", "Lunar Fairy Moth", "Radiant Sunfish", "Ancient Amber Beetle"],
    "Tau": ["Sernuk Meat", "Garden Leafhopper", "Azure Chapaa Tail", "Wagon Wheel"],
    "Tish": ["Sweet Leaf", "Dawnray", "Apple Pie", "Green Pearl"],
    "Zeki": ["Silvery Minnow", "Fish Stew", "Trout Dinner", "Dari Cloves"],
    
    








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