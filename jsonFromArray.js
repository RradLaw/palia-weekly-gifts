let data = {

    "Ashura": ["Striped Dace", "Acorn", "Fish Stew", "Celebration Cake"],
    "Auni": ["Waterlogged Boot", "Garden Mantis", "Firebreathing Dragonfly", "Apple Pie"],
    "Badruu": ["Carrot", "HydratePro Fertilizer", "Blueberry Bush Seed", "Meaty Stir Fry (bugged)"],
    "Caleri": ["Sundrop Lily", "Pickled Carrots", "Bahari Glowbug", "Chapaa Masala"],
    "Chayne": ["Carrot", "Hearty Vegetable Soup", "Dragon's Beard Peat", "Cream of Mushroom Soup"],
    "Delaila": ["Calico Koi", "Kilima Catfish", "Apple Tree Seed", "Gold Bar"],
    "Einar": ["Spotted Bullhead", "Fairy Carp", "Vampire Crab", "Stormray"],
    "Elouisa": ["Calico Koi", "Cerulean Cicada", "Scarlet Koi", "Rainbow-tipped Butterfly"],
    "Eshe": ["Chapaa Fur", "Silk", "Silver Bar", "Gold Bar"],
    "Hassian": ["Plant Fiber", "Sernuk Hide", "Iron Ore", "Giant Kilima Stingray"],
    "Hekla": ["Mountain Morel", "Acorn", "Cream of Mushroom Soup", "Green Pearl"],
    "Hodari": ["Sernuk Antlers", "Flow-Infused Wood", "Blue Marlin", "Spitfire Cicada"],
    "Jel": ["Umbran Carp", "Silk", "Gossamer Veil Moth", "Green Pearl"],
    "Jina": ["Wagon Wheel", "Heat Root", "Bacon-Stuffed Mushrooms", "Apple Pie"],
    "Kenli": ["Grilled Oyster", "Garden Ladybug", "Steak Dinner", "Celebration Cake"],
    "Kenyatta": ["Briar Daisy", "Cutthroat Trout", "Spicy Rice Cakes", "Crimson Fangtooth"],
    "Nai'O": ["Wagon Wheel", "HydratePro Fertilizer", "Blueberry Jam", "Steak Dinner"],
    "Najuma": ["Tomato Plant Seed", "Copper Bar", "Apple Jam", "Silver Bar"],
    "Reth": ["Tomato", "Hearty Vegetable Soup", "Loaded Potato Soup", "Palian Onion Soup"],
    "Sifuu": ["Copper Ore", "Copper Bar", "Proudhorned Sernuk Antlers", "Gold Ore"],
    "Tamala": ["Chapaa Fur", "Lunar Fairy Moth", "Azure Stonehopper", "Enchanted Pupfish"],
    "Tau": ["Sernuk Meat", "Grilled Fish", "Azure Chapaa Tail", "Rainbow-tipped Butterfly"],
    "Tish": ["Shell", "Samara", "Pearl", "Green Pearl"],
    "Zeki": ["Unopened Oyster", "Golden Salmon", "Zeki's Flyer", "Dari Cloves"]




};
console.log("{");
for (const key in data) {
    console.log(generateString(key, data[key]));
}
console.log("}");

function generateString(character, array) {
    let template = `    "xxxGift1": {
        "name": "name1",
        "type": "",
        "updated": time
    },
    "xxxGift2": {
        "name": "name2",
        "type": "",
        "updated": time
    },
    "xxxGift3": {
        "name": "name3",
        "type": "",
        "updated": time
    },
    "xxxGift4": {
        "name": "name4",
        "type": "",
        "updated": time
    },`;

    for (let i = 0; i < array.length; i++) {
        switch (i) {
            case 0:
                template = template.replaceAll(/name1/g, array[i]);
                break;
            case 1:
                template = template.replaceAll(/name2/g, array[i]);
                break;
            case 2:
                template = template.replaceAll(/name3/g, array[i]);
                break;
            case 3:
                template = template.replaceAll(/name4/g, array[i]);
                break;
        }
    }
    template = template.replaceAll(/time/g, Date.now());
    return template.replaceAll(/xxx/g, character);
}