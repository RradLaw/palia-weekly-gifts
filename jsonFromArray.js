var typeJSON = require('./rawData.json');

let errorString = "";

let data = {
    "Ashura": ["Sweet Leaf", "Juniper Seed", "Fish Stew", "Blueberry Pie"],
    "Auni": ["Waterlogged Boot", "Bahari Bee", "Apple", "Celebration Cake"],
    "Badruu": ["Tomato Plant Seed", "HarvestBoost Fertilizer", "Apple Tree Seed", "Cream of Mushroom Soup"],
    "Caleri": ["Paper Lantern Bug", "Pickled Carrots", "Bahari Glowbug", "Bouillabaisse"],
    "Chayne": ["Onion", "Juniper Seed", "Cream of Tomato Soup", "Dari Cloves"],
    "Delaila": ["Muujin Meat", "HarvestBoost Fertilizer", "Apple", "Gold Bar"],
    "Einar": ["Eyeless Minnow", "Spineshell Crab", "Vampire Crab", "Stormray"],
    "Elouisa": ["Common Bark Cicada", "Cerulean Cicada", "Raspberry Beetle", "Ancient Amber Beetle"],
    "Eshe": ["Fur", "Silk", "Macaron", "Jewelwing Dragonfly"],
    "Hassian": ["Grilled Meat", "Sernuk Noodle Stew", "Proudhorned Sernuk Antlers", "Dispel Arrow"],
    "Hekla": ["Crystal Lake Lotus", "Bahari Bream", "Ramen", "Celebration Cake"],
    "Hodari": ["Leather", "Copper Bar", "Proudhorned Sernuk Antlers", "Steak Dinner"],
    "Jel": ["Waterlogged Boot", "Duskray", "Oysters Akwinduu", "Willow Lamprey"],
    "Jina": ["Wagon Wheel", "Duskwing Butterfly", "Brighteye Butterfly", "Rainbow-Tipped Butterfly"],
    "Kenli": ["Spotted Chapaa Tail", "Garden Ladybug", "Petit Fives", "Akwinduu Chapaa"],
    "Kenyatta": ["Garden Mantis", "Acorn", "Spicy Rice Cakes", "Meaty Stir Fry"],
    "Nai'O": ["Wagon Wheel", "WeedBlock Fertilizer", "Corn", "Steak Dinner"],
    "Najuma": ["Sweet Leaf", "Copper Bar", "Silver Ore", "Silver Bar"],
    "Reth": ["Potato", "Heat Root", "Apple", "Cream of Mushroom Soup"],
    "Sifuu": ["Sernuk Antlers", "Standard Arrow", "Silver Ore", "Gold Bar"],
    "Subira": ["Copper Ore", "Steak Dinner", "Ancient Amber Beetle", "Firebreathing Dragonfly"],
    "Tamala": ["Emerald Carpet Moss", "Garden Millipede", "Hairy Millipede", "Ancient Amber Beetle"],
    "Tau": ["Spotted Chapaa Tail", "Oily Anchovy", "Scarlet Koi", "Proudhorned Sernuk Antlers"],
    "Tish": ["Sapwood Plank", "Glass Bulb", "Petit Fives", "Blueberry Pie"],
    "Zeki": ["Silvery Minnow", "Fish Stew", "Flow-Infused Plank", "Dari Cloves"]









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
                template = template.replaceAll(/type1/g, typeJSON[array[i]] ?? "Unknown");
                if (!typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 1:
                template = template.replaceAll(/name2/g, array[i]);
                template = template.replaceAll(/type2/g, typeJSON[array[i]] ?? "Unknown");
                if (!typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 2:
                template = template.replaceAll(/name3/g, array[i]);
                template = template.replaceAll(/type3/g, typeJSON[array[i]] ?? "Unknown");
                if (!typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
            case 3:
                template = template.replaceAll(/name4/g, array[i]);
                template = template.replaceAll(/type4/g, typeJSON[array[i]] ?? "Unknown");
                if (!typeJSON[array[i]]) {
                    errorString += `Missing type for item ${array[i]}\n`;
                }
                break;
        }
    }
    template = template.replaceAll(/time/g, Date.now());
    return template.replaceAll(/xxx/g, character);
}