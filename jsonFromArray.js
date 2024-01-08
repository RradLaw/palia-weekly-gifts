var typeJSON = require('./rawData.json');

let errorString = "";

let data = {

    "Ashura": ["Sapwood Plank", "Samara", "Reth's Century Egg", "Blueberry Pie"],
    "Auni": ["Brushtail Dragonfly", "Garden Leafhopper", "Firebreathing Dragonfly", "Celebration Cake"],
    "Badruu": ["Potato Seed", "HydratePro Fertilizer", "Ramen", "Cream of Mushroom Soup"],
    "Caleri": ["Crystal Lake Lotus", "Heat Root", "Blueberry Jam", "Hypnotic Moray"],
    "Chayne": ["Wild Garlic", "Hearty Vegetable Soup", "Dragon's Beard Peat", "Cream of Mushroom Soup"],
    "Delaila": ["Rosy Bitterling", "HarvestBoost Fertilizer", "Golden Glory Bee", "Giant Goldfish"],
    "Einar": ["Silvery Minnow", "Fairy Carp", "Fathead Minnow", "Blue Spotted Ray"],
    "Elouisa": ["Unopened Oyster", "Proudhorned Stag Beetle", "Pearl", "Midnight Paddlefish"],
    "Eshe": ["Fur", "Samara", "Macaron", "Akwinduu Chapaa"],
    "Hassian": ["Mountain Morel", "Brightshroom", "Iron Bar", "Steak Dinner"],
    "Hekla": ["Unopened Oyster", "Smallmouth Bass", "Pinecone", "Enchanted Pupfish"],
    "Hodari": ["Sernuk Antlers", "Heartwood", "Blue Marlin", "Firebreathing Dragonfly"],
    "Jel": ["Fur", "Muujin Mane", "Banded Muujin Mane", "Green Pearl"],
    "Jina": ["Congee", "Heat Root", "Bacon-Stuffed Mushrooms", "Cream of Mushroom Soup"],
    "Kenli": ["Grilled Fish", "Striped Chapaa Tail", "Steak Dinner", "Kenli's Carp"],
    "Kenyatta": ["Crystal Lake Lotus", "Elder Sernuk Antlers", "Spotted Mantis", "Fairy Mantis"],
    "Nai'O": ["Muujin Meat", "QualityUp Fertilizer", "Blueberry Jam", "Steak Dinner"],
    "Najuma": ["Copper Ore", "Copper Bar", "Apple Jam", "Blueberry Pie"],
    "Reth": ["Sernuk Meat", "Wheat", "Apple Jam", "Cream of Mushroom Soup"],
    "Sifuu": ["Copper Ore", "Iron Ore", "Silver Ore", "Gold Bar"],
    "Subira": ["Leather", "Gold Ore", "Mutated Angler", "Chapaa Onigiri"],
    "Tamala": ["Kilima Night Moth", "Lunar Fairy Moth", "Hairy Millipede", "Ancient Amber Beetle"],
    "Tau": ["Sapwood Plank", "Grilled Fish", "Azure Chapaa Tail", "Proudhorned Sernuk Antlers"],
    "Tish": ["Ship Fragments", "Glass Bulb", "Apple Pie", "Green Pearl"],
    "Zeki": ["Grilled Fish", "Golden Salmon", "Sushi", "Gold Bar"]










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