var typeJSON = require('./rawData.json');

let errorString = "";

let data = {


    "Ashura": ["Sweet Leaf", "Heartwood Plank", "Pinecone", "Trout Dinner"],
    "Auni": ["Common Blue Butterfly", "Garden Snail", "Hairy Millipede", "Celebration Cake"],
    "Badruu": ["Cotton Seed", "WeedBlock Fertilizer", "Loaded Potato Soup", "Cream of Mushroom Soup"],
    "Caleri": ["Sweet Leaf", "Glass Bulb", "Cream of Tomato Soup", "Dari Cloves"],
    "Chayne": ["Crystal Lake Lotus", "Wheat Seed", "Pearl", "Dari Cloves"],
    "Delaila": ["Bahari Crab", "Clay", "Scarlet Koi", "Gold Bar"],
    "Einar": ["Gillyfin", "Red-bellied Piranha", "Glow Worm", "Void Ray"],
    "Elouisa": ["Ship Fragments", "Bahari Bee", "Beluga", "Bluebristle Muujin Mane"],
    "Eshe": ["Grilled Oyster", "Fish Stew", "Macaron", "Gold Ore"],
    "Hassian": ["Sernuk Antlers", "Brightshroom", "Proudhorned Sernuk Antlers", "Steak Dinner"],
    "Hekla": ["Unopened Oyster", "Acorn", "Pearl", "Green Pearl"],
    "Hodari": ["Grilled Meat", "Flow-Infused Wood", "Hot Hounds", "Steak Dinner"],
    "Jel": ["Leather", "Sernuk Hide", "Banded Muujin Mane", "Muujin Bahari"],
    "Jina": ["Wagon Wheel", "Cotton", "Bacon-Stuffed Mushrooms", "Celebration Cake"],
    "Kenli": ["Wagon Wheel", "Fish Stew", "Oysters Akwinduu", "Iron Bar"],
    "Kenyatta": ["Wild Garlic", "Cytthroat Trout", "Alligator Gar", "Bluebristle Muujin Mane"],
    "Nai'O": ["Wagon Wheel", "HarvestBoost Fertilizer", "Stalking Catfish", "Steak Dinner"],
    "Najuma": ["Knapweed", "Copper Bar", "Honey Loach", "Blueberry Pie"],
    "Reth": ["Congee", "Wheat", "Raspberry Beetle", "Cream of Mushroom Soup"],
    "Sifuu": ["Sardine", "Elder Sernuk Antlers", "Silver Ore", "Silver Bar"],
    "Subira": ["Sernuk Hide", "Flow-Infused Plank", "Chili Oil Dumplings", "Energised Piranha"],
    "Tamala": ["Fur", "Garden Millipede", "Hairy Millipede", "Fairy Mantis"],
    "Tau": ["Muujin Meat", "Sernuk Antlers", "Grilled Oyster", "Rainbow-Tipped Butterfly"],
    "Tish": ["Briar Daisy", "Glass Bulb", "Petit Fives", "Green Pearl"],
    "Zeki": ["Unopened Oyster", "Fish Stew", "Sashimi", "Gold Bar"]










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