let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    
    
    
    "Ashura": ["Sapwood Plank", "Samara", "Pinecone", "Trout Dinner"],
    "Auni": ["Waterlogged Boot", "Garden Snail", "Firebreathing Dragonfly", "Blueberry Pie"],
    "Badruu": ["Tomato Plant Seed", "QualityUp Fertilizer", "Loaded Potato Soup", "Cream of Mushroom Soup"],
    "Caleri": ["Coral", "Silk", "Blueberry Jam", "Bouillabaisse"],
    "Chayne": ["Wild Garlic", "Samara", "Heat Root", "Palian Onion Soup"],
    "Delaila": ["Muujin Meat", "HydratePro Fertilizer", "Apple Tree Seed", "Gold Bar"],
    "Einar": ["Mudminnow", "Prism Trout", "Fathead Minnow", "Fisherman's Brew"],
    "Elouisa": ["Unopened Oyster", "Paddlefish", "Thundering Eel", "Ancient Amber Beetle"],
    "Eshe": ["Grilled Oyster", "Juniper Seed", "Sushi", "Akwinduu Chapaa"],
    "Hassian": ["Sernuk Antlers", "Brightshroom", "Iron Ore", "Slowdown Arrow"],
    "Hekla": ["Unopened Oyster", "Brightshroom", "Pearl", "Enchanted Pupfish"],
    "Hodari": ["Muujin Meat", "Copper Bar", "Loaded Potato Soup", "Bahari Glowbug"],
    "Jel": ["Leather", "Lunar Fairy Moth", "Oysters Akwinduu", "Midnight Paddlefish"],
    "Jina": ["Coral", "Cotton Seed", "Shimmerfin", "Rainbow-Tipped Butterfly"],
    "Kenli": ["Spotted Chapaa Tail", "Garden Ladybug", "Sashimi", "Palian Onion Soup"],
    "Kenyatta": ["Crystal Lake Lotus", "Pickled Onions", "Kimchi Fried Rice", "Fairy Mantis"],
    "Nai'O": ["Spice Sprouts", "Channel Catfish", "Bahari Pike", "Steak Dinner"],
    "Najuma": ["Flint", "Garden Snail", "Apple Jam", "Blueberry Pie"],
    "Reth": ["Yellow Perch", "Pickled Onions", "Raspberry Beetle", "Dari Cloves"],
    "Sifuu": ["Muujin Meat", "Elder Sernuk Antlers", "Cream of Tomato Soup", "Silver Bar"],
    "Subira": ["Wild Green Onion", "Flow-Infused Plank", "Steamed Fish", "Spicy Rice Cakes"],
    "Tamala": ["Common Field Cricket", "Garden Millipede", "Azure Stonehopper", "Leafstalker Mantis"],
    "Tau": ["Fried Catfish Dinner", "Heartwood Plank", "Scarlet Koi", "Wagon Wheel"],
    "Tish": ["Sapwood Plank", "Heartwood Plank", "Pinecone", "Blueberry Pie"],
    "Zeki": ["Silver Salmon", "Silk", "Golden Glory Bee", "Dari Cloves"]
      
      
      
      
      
      

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