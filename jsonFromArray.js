let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    
 "Ashura": ["Silver Salmon", "Kilima Catfish", "Honey", "Celebration Cake"],
  "Auni": ["Waterlogged Boot", "Duskwing Butterfly", "Spotted Mantis", "Apple Pie"],
  "Badruu": ["Onion Seed", "Hearty Vegetable Soup", "Pumpkin Pie", "Meaty Stir Fry"],
  "Caleri": ["Sundrop Lily", "Glass Bulb", "Cream of Tomato Soup", "Bouillabaisse"],
  "Chayne": ["Wild Garlic", "Glass Pane", "Cream of Tomato Soup", "Palian Onion Soup"],
  "Delaila": ["Rainbow Trout", "QualityUp Fertilizer", "Vampire Crab", "Giant Goldfish"],
  "Einar": ["Worm", "Mirror Carp", "Fathead Minnow", "Kilima Greyling"],
  "Elouisa": ["Unopened Oyster", "Paddlefish", "Flowtato", "Giant Goldfish"],
  "Eshe": ["Fur", "Silk", "Silk Thread", "Steak Dinner"],
  "Hassian": ["Flint", "Sernuk Hide", "Staircase Mushroom", "Steak Dinner"],
  "Hekla": ["Oyster Meat", "Brightshroom", "Pinecone", "Green Pearl"],
  "Hodari": ["Fur", "Heartwood", "Iron Ore", "Steak Dinner"],
  "Jel": ["Kilima Night Moth", "Duskray", "Vampire Crab", "Midnight Paddlefish"],
  "Jina": ["Coral", "Duskwing Butterfly", "Bacon-Stuffed Mushrooms", "Dari Cloves"],
  "Kenli": ["Grilled Fish", "Ramen", "Loaded Flowtato", "Celebration Cake"],
  "Kenyatta": ["Knapweed", "Creamy Carrot Soup", "Banded Muujin Mane", "Meaty Stir Fry"],
  "Nai'O": ["Spice Sprouts", "Kilima Catfish", "Bahari Pike", "Fruit Smoothie Bowl"],
  "Najuma": ["Clay", "Garden Snail", "Stripeshell Snail", "Veggie Chili"],
  "Reth": ["Potato", "Wheat", "Flowtato Fries with Ketchup", "Fruit Smoothie Bowl"],
  "Sifuu": ["Sernuk Antlers", "Copper Bar", "Proudhorned Sernuk Antlers", "Silver Bar"],
  "Subira": ["Grilled Meat", "Fisherman's Brew", "Rainbow-Tipped Butterfly", "Angelfish"],
  "Tamala": ["Emerald Carpet Moss", "Garden Millipede", "Hairy Millipede", "Fairy Mantis"],
  "Tau": ["Common Field Cricket", "Silver Salmon", "Azure Stonehopper", "Grilled Meat"],
  "Tish": ["Coral", "Heartwood Plank", "Flow-Infused Plank", "Blueberry Pie"],
  "Zeki": ["Unopened Oyster", "Silk", "Fish Tacos", "Poke Bowl"] 

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