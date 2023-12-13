var typeJSON = require('./rawData.json');

let errorString = "";

let data = {

    "Ashura": ["Silver Salmon", "Striped Sturgeon", "Fish Stew", "Apple Pie"],
    "Auni": ["Ship Fragments", "Duskwing Butterfly", "Blueberry", "Apple Pie"],
    "Badruu": ["Potato", "Rice Seed", "Loaded Potato Soup", "Cream of Mushroom Soup"],
    "Caleri": ["Grilled Mushroom", "Heat Root", "Oysters Akwinduu", "Bouillabaisse"],
    "Chayne": ["Knapweed", "Rice Seed", "Heat Root", "Green Pearl"],
    "Delaila": ["Bahari Crab", "WeedBlock Fertilizer", "Apple", "Giant Goldfish"],
    "Einar": ["Gillyfin", "Ribbontail Ray", "Glow Worm", "Void Ray"],
    "Elouisa": ["Ship Fragments", "Paddlefish", "Energised Piranha", "Bluebristle Muujin Mane"],
    "Eshe": ["Fur", "Fish Stew", "Macaron", "Gold Ore"],
    "Hassian": ["Congee", "Standard Arrow", "Iron Bar", "Fireworks Arrow"],
    "Hekla": ["Sundrop Lily", "Fried Catfish Dinner", "Chub", "Enchanted Pupfish"],
    "Hodari": ["Grilled Meat", "Sernuk Noodle Stew", "Loaded Potato Soup", "Firebreathing Dragonfly"],
    "Jel": ["Barracuda", "Muujin Mane", "Oysters Akwinduu", "Green Pearl"],
    "Jina": ["Congee", "Cotton Seed", "Dragon's Beard Peat", "Apple Pie"],
    "Kenli": ["Spotted Chapaa Tail", "Fish Stew", "Sashimi", "Muujin Bahari"],
    "Kenyatta": ["Briar Daisy", "Elder Sernuk Antlers", "Pinecone", "Fairy Mantis"],
    "Nai'O": ["Muujin Meat", "Heat Root", "Apple Tree Seed", "Steak Dinner"],
    "Najuma": ["Clay", "Copper Bar", "Iron Bar", "Silver Bar"],
    "Reth": ["Yellow Perch", "Heat Root", "Loaded Potato Soup", "Dari Cloves"],
    "Sifuu": ["Chapaa Meat", "Oily Anchovy", "Iron Bar", "Dispel Arrow"],
    "Subira": ["Iron Bar", "Fish Stew", "Chili Oil Dumplings", "Firebreathing Dragonfly"],
    "Tamala": ["Kilima Night Moth", "Garden Millipede", "Hairy Millipede", "Void Ray"],
    "Tau": ["Calico Koi", "Heartwood Plank", "Golden Salmon", "Wagon Wheel"],
    "Tish": ["Sapwood Plank", "Acorn", "Apple Pie", "Green Pearl"],
    "Zeki": ["Silvery Minnow", "Golden Salmon", "Platinum Chad", "Poke Bowl"]


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