var typeJSON = require('./rawData.json');

let errorString = "";

let data = {

    "Ashura": ["Congee", "Stickleback", "Stalking Catfish", "Apple Pie"],
    "Auni": ["Common Bark Cicada", "Garden Millipede", "Spotted Mantis", "Apple Pie"],
    "Badruu": ["Wagon Wheel", "Wheat Seed", "Loaded Potato Soup", "Cream of Mushroom Soup"],
    "Caleri": ["Knapweed", "Pickled Carrots", "Chapaa Onigiri", "Chapaa Masala"],
    "Chayne": ["Knapweed", "Pickled Tomatoes", "Apple", "Palian Onion Soup"],
    "Delaila": ["Channel Catfish", "WeedBlock Fertilizer", "Golden Glory Bee", "Gold Bar"],
    "Einar": ["Silver Salmon", "Prism Trout", "Shimmerfin", "Fisherman's Brew"],
    "Elouisa": ["Spotted Stinkbug", "Cantankerous Koi", "Indigo Lamprey", "Green Pearl"],
    "Eshe": ["Grilled Oyster", "Juniper Seed", "Macaron", "Bouillabaisse"],
    "Hassian": ["Leather", "Sernuk Noodle Stew", "Proudhorned Sernuk Antlers", "Dispel Arrow"],
    "Hekla": ["Briar Daisy", "Painted Perch", "Trout Dinner", "Green Pearl"],
    "Hodari": ["Paper Lantern Bug", "Elder Sernuk Antlers", "Stonefish", "Steak Dinner"],
    "Jel": ["Eyeless Minnow", "Sernuk Hide", "Oysters Akwinduu", "Bluebristle Muujin Mane"],
    "Jina": ["Wagon Wheel", "Glass Pane", "Dragon's Beard Peat", "Void Ray"],
    "Kenli": ["Grilled Fish", "Hearty Vegetable Soup", "Azure Chapaa Tail", "Iron Bar"],
    "Kenyatta": ["Sardine", "Cytthroat Trout", "Chili Oil Dumplings", "Bluebristle Muujin Mane"],
    "Nai'O": ["Wagon Wheel", "Wheat Seed", "Iron Bar", "Steak Dinner"],
    "Najuma": ["Tomato Plant Seed", "Copper Bar", "Blueberry", "Silver Bar"],
    "Reth": ["Sweet Leaf", "Heat Root", "Blueberry", "Dari Cloves"],
    "Sifuu": ["Sernuk Antlers", "Copper Bar", "Iron Bar", "Slowdown Arrow"],
    "Subira": ["Copper Bar", "Radiant Sunfish", "Sashimi", "Chapaa Onigiri"],
    "Tamala": ["Fur", "Lunar Fairy Moth", "Hairy Millipede", "Flametongue Ray"],
    "Tau": ["Chapaa Meat", "Garden Leafhopper", "Elder Sernuk Antlers", "Akwinduu Chapaa"],
    "Tish": ["Ship Fragments", "Acorn", "Petit Fives", "Blueberry Pie"],
    "Zeki": ["Grilled Fish", "Fish Stew", "Platinum Chad", "Green Pearl"]






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