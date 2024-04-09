let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {
    

    "Ashura": ["Silver Salmon", "Prism Trout", "Fish Stew", "Sashimi"],
    "Auni": ["Unopened Oyster", "Garden Leafhopper", "Stripeshell Snail", "Celebration Cake"],
    "Badruu": ["Rainbow Trout", "Rice", "Loaded Potato Soup", "Azure Stonehopper"],
    "Caleri": ["Spice Sprouts", "Glass Bulb", "Crucian Carp", "Hypnotic Moray"],
    "Chayne": ["Potato", "Rice Seed", "Heat Root", "Cream of Mushroom Soup"],
    "Delaila": ["Rosy Bitterling", "HydratePro Fertilizer", "Stalking Catfish", "Gold Bar"],
    "Einar": ["Silvery Minnow", "Prism Trout", "Mottled Gobi", "Kilima Greyling"],
    "Elouisa": ["Duskray", "Albino Eel", "Dragon's Beard Peat", "Flametongue Ray"],
    "Eshe": ["Fur", "Samara", "Silver Ore", "Palian Onion Soup"],
    "Hassian": ["Flint", "Striped Chapaa Tail", "Azure Chapaa Tail", "Fireworks Arrow"],
    "Hekla": ["Crystal Lake Lotus", "Acorn", "Pinecone", "Enchanted Pupfish"],
    "Hodari": ["Paper Lantern Bug", "Sernuk Noodle Stew", "Iron Bar", "Bahari Glowbug"],
    "Jel": ["Kilima Night Moth", "Muujin Mane", "Thundering Eel", "Green Pearl"],
    "Jina": ["Coral", "Cotton Seed", "Bacon-Stuffed Mushrooms", "Cream of Mushroom Soup"],
    "Kenli": ["Spotted Chapaa Tail", "Creamy Carrot Soup", "Trout Dinner", "Muujin Bahari"],
    "Kenyatta": ["Garden Mantis", "Cytthroat Trout", "Pinecone", "Meaty Stir Fry"],
    "Nai'O": ["Wagon Wheel", "Pickled Potatoes", "Fried Catfish Dinner", "Steak Dinner"],
    "Najuma": ["Clay", "Copper Bar", "Flow-Infused Plank", "Silver Bar"],
    "Reth": ["Spice Sprouts", "Spicy Pepper", "Apple", "Dari Cloves"],
    "Sifuu": ["Copper Ore", "Iron Ore", "Proudhorned Sernuk Antlers", "Gold Bar"],
    "Subira": ["Bok Choy", "Stuffed Cabbage Rolls", "Chili Oil Dumplings", "Enchanted Pupfish"],
    "Tamala": ["Fur", "Garden Millipede", "Azure Stonehopper", "Long Nosed Unicorn Fish"],
    "Tau": ["Common Blue Butterfly", "Duskwing Butterfly", "Flow-Infused Plank", "Rainbow-Tipped Butterfly"],
    "Tish": ["Crystal Lake Lotus", "Heartwood Plank", "Pinecone", "Green Pearl"],
    "Zeki": ["Coral", "Silk", "Pulsating Triangle", "Gold Ore"]
      
      
       
    








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