let fileRead = false;
try {
    var typeJSON = require('./rawData.json');
    fileRead = true;
} catch (e) {
    fileRead = false;
}
let errorString = "";

let data = {

    
    
    
    "Ashura": ["Sweet Leaf", "Heartwood Plank", "Fish Stew", "Trout Dinner"],
    "Auni": ["Unopened Oyster", "Garden Mantis", "Hairy Millipede", "Blueberry Pie"],
    "Badruu": ["Potato Seed", "HydratePro Fertilizer", "Blueberry Bush Seed", "Cream of Mushroom Soup"],
    "Caleri": ["Grilled Oyster", "Glass Bulb", "Cream of Tomato Soup", "Hypnotic Moray"],
    "Chayne": ["Crystal Lake Lotus", "Hearty Vegetable Soup", "Apple", "Green Pearl"],
    "Delaila": ["Cantankerous Koi", "HydratePro Fertilizer", "Princess Ladybug", "Giant Goldfish"],
    "Einar": ["Striped Dace", "Yellow Perch", "Vampire Crab", "Radiant Sunfish"],
    "Elouisa": ["Ship Fragments", "Cantankerous Koi", "Willow Lamprey", "Midnight Paddlefish"],
    "Eshe": ["Grilled Oyster", "Bluefin Tuna", "Sushi", "Gold Ore"],
    "Hassian": ["Fur", "Cotton", "Azure Chapaa Tail", "Fireworks Arrow"],
    "Hekla": ["Oyster Meat", "Bahari Bream", "Trout Dinner", "Green Pearl"],
    "Hodari": ["Paper Lantern Bug", "Heartwood", "Stonefish", "Spitfire Cicada"],
    "Jel": ["Coral", "Bat Ray", "Oysters Akwinduu", "Willow Lamprey"],
    "Jina": ["Mountain Morel", "Glass Pane", "Dragon's Beard Peat", "Cream of Mushroom Soup"],
    "Kenli": ["Grilled Fish", "Striped Chapaa Tail", "Pan Fried Dumplings", "Akwinduu Chapaa"],
    "Kenyatta": ["Wild Garlic", "Oily Anchovy", "Spicy Stir Fry", "Bluebristle Muujin Mane"],
    "Nai'o": ["Muujin Meat", "Fish Stew", "Blueberry Bush Seed", "Steak Dinner"],
    "Najuma": ["Clay", "Garden Snail", "Honey Loach", "Silver Bar"],
    "Reth": ["Sweet Leaf", "Pickled Onions", "Raspberry Beetle", "Dari Cloves"],
    "Sifuu": ["Chapaa Meat", "Standard Arrow", "Cream of Tomato Soup", "Gold Ore"],
    "Subira": ["Bok Choy", "Heat Root", "Sashimi", "Enchanted Pupfish"],
    "Tamala": ["Knapweed", "Lunar Fairy Moth", "Azure Stonehopper", "Long Nosed Unicorn Fish"],
    "Tau": ["Trout Dinner", "Duskwing Butterfly", "Azure Chapaa Tail", "Akwinduu Chapaa"],
    "Tish": ["Ship Fragments", "Stuffed Cabbage Rolls", "Celebration Cake", "Blueberry Pie"],
    "Zeki": ["Coral", "Fish Stew", "Zeki's Flyer", "Gold Bar"]
      
      
      
      
      
      

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