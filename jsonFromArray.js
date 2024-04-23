let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    

    "Ashura": ["Sapwood Plank", "Stickleback", "Fried Catfish Dinner", "Fisherman's Brew"],
    "Auni": ["Spotted Stinkbug", "Garden Millipede", "Firebreathing Dragonfly", "Celebration Cake"],
    "Badruu": ["Wagon Wheel", "Spicy Pepper Seed", "Apple Tree Seed", "Azure Stonehopper"],
    "Caleri": ["Paper Lantern Bug", "Kilima Redfin", "Oysters Akwinduu", "Chapaa Masala"],
    "Chayne": ["Wild Garlic", "Rice", "Cream of Tomato Soup", "Cream of Mushroom Soup"],
    "Delaila": ["Channel Catfish", "SpeedyGro Fertilizer", "Princess Ladybug", "Gold Bar"],
    "Einar": ["Silver Salmon", "Spineshell Crab", "Fathead Minnow", "Enchanted Pupfish"],
    "Elouisa": ["Unopened Oyster", "Cytthroat Trout", "Willow Lamprey", "Green Pearl"],
    "Eshe": ["Grilled Oyster", "Juniper Seed", "Silver Ore", "Akwinduu Chapaa"],
    "Hassian": ["Leather", "Chapaa Asada Tacos", "Azure Chapaa Tail", "Dispel Arrow"],
    "Hekla": ["Unopened Oyster", "Painted Perch", "Cream of Mushroom Soup", "Celebration Cake"],
    "Hodari": ["Leather", "Striped Chapaa Tail", "Loaded Potato Soup", "Firebreathing Dragonfly"],
    "Jel": ["Eyeless Minnow", "Silk", "Thundering Eel", "Midnight Paddlefish"],
    "Jina": ["Coral", "Duskwing Butterfly", "Mutated Angler", "Celebration Cake"],
    "Kenli": ["Grilled Oyster", "Striped Chapaa Tail", "Azure Chapaa Tail", "Celebration Cake"],
    "Kenyatta": ["Blueberry Jam", "Acorn", "Firebreathing Dragonfly", "Bluebristle Muujin Mane"],
    "Nai'O": ["Wagon Wheel", "Heartwood Plank", "Blueberry Bush Seed", "Steak Dinner"],
    "Najuma": ["Wild Garlic", "Copper Bar", "Apple Jam", "Silver Bar"],
    "Reth": ["Onion", "Creamy Carrot Soup", "Apple Jam", "Cream of Mushroom Soup"],
    "Sifuu": ["Copper Ore", "Copper Bar", "Iron Bar", "Silver Bar"],
    "Subira": ["Iron Bar", "Glow Worm", "Spicy Rice Cakes", ""],
    "Tamala": ["Emerald Carpet Moss", "Garden Millipede", "Azure Stonehopper", "Ancient Amber Beetle"],
    "Tau": ["Fried Catfish Dinner", "Oily Anchovy", "Golden Salmon", "Grilled Meat"],
    "Tish": ["Wagon Wheel", "Stuffed Cabbage Rolls", "Pinecone", "Blueberry Pie"],
    "Zeki": ["Silver Salmon", "Golden Salmon", "Golden Glory Bee", "Green Pearl"]
       
    








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