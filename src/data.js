const data = [
    {
        "id": "a16627",
        "name": "Continental breakfast",
        "category": "breakfast",
        "description": "turkey fillet, cheese Cheddar, small croissant, grilled baguette, honey, avocado pashtet",
        "weight": 250,
        "diet": "non-vegetarian",
        "price": 1900
    },
    {
        "id": "a13739",
        "name": "Breakfast Healthy Box",
        "category": "breakfast",
        "description": "broccoli, avocado, toast, egg, quinoa, cherry tomato",
        "weight": 450,
        "diet": "vegetarian",
        "price": 2490
    },
    {
        "id": "a93675",
        "name": "Bruschetta with cherry tomato",
        "category": "appetizers",
        "description": "baguette, cherry tomato, cheese Parmesan, pesto sauce",
        "weight": 252,
        "diet": "vegetarian",
        "price": 1800
    },
    {
        "id": "a93472",
        "name": "Vegetable plate",
        "category": "appetizers",
        "description": "cherry tomato, carrot, red radish, cucumber, pepper, parsley, tar-tar sauce",
        "weight": 312,
        "diet": "vegetarian",
        "price": 2700
    },
    {
        "id": "a36395",
        "name": "Salad with quinoa",
        "category": "salads",
        "description": "quinoa, tomato, cucumber, pepper, avocado, orange",
        "weight": 290,
        "diet": "vegan",
        "price": 1900
    },
    {
        "id": "a39832",
        "name": "Broccoli salad",
        "category": "salads",
        "description": "broccoli, cherry tomato, tofu cheese, avocado, Brussel cabbage, grapefruit",
        "weight": 232,
        "diet": "vegan",
        "price": 2450
    },
    {
        "id": "a47372",
        "name": "Cream-soup with pumpkin",
        "category": "soups",
        "description": "pumpkin, onion, cream, garlic",
        "weight": 350,
        "diet": "vegetarian",
        "price": 1500
    },
    {
        "id": "a75296",
        "name": "Seafood soup",
        "category": "soups",
        "description": "salmon fillet, crab, calamari, mussels, cherry tomato, tomato juice, onion",
        "weight": 350,
        "diet": "non-vegetarian",
        "price": 3850
    },
    {
        "id": "a55543",
        "name": "Steak",
        "category": "meat dishes",
        "description": "beef fillet, garlic, sauce salsa, onion, asparagus",
        "weight": 275,
        "diet": "non-vegetarian",
        "price": 6900
    },
    {
        "id": "a11863",
        "name": "Chuka bowl",
        "category": "bowls",
        "description": "sea cabbage, Cherry tomato, curd cheese",
        "weight": 132,
        "diet": "vegetarian",
        "price": 1800
    },
    {
        "id": "a44004",
        "name": "Poka bowl",
        "category": "bowls",
        "description": "salmon fillet, sea cabbage, curd cheese, rice, Cherry tomato, avocado, lemon, lettuce, balsamic cream, oil",
        "weight": 350,
        "diet": "non-vegetarian",
        "price": 6500
    },
    {
        "id": "a68935",
        "name": "Grilled chicken",
        "category": "meat dishes",
        "description": "chicken breast, thyme, cherry tomato, mangold, bell pepper, cucumber, zucchini, carrot, soya sauce, sauce Bechamel",
        "weight": 290,
        "diet": "non-vegetarian",
        "price": 2300
    },
    {
        "id": "a68293",
        "name": "Pasta with pesto sauce",
        "category": "pasta",
        "description": "pesto sauce, garlic, cherry tomato, parmesan, spinach, zucchini, spaghetti",
        "weight": 280,
        "diet": "non-vegetarian",
        "price": 2400
    },
    {
        "id": "a26837",
        "name": "Pasta Carbonara",
        "category": "pasta",
        "description": "spaghetti, bacon, cream, quail eggs, cheese Parmesan, dried basil",
        "weight": 250,
        "diet": "non-vegetarian",
        "price": 2650
    },
    {
        "id": "a88263",
        "name": "Avocado burger",
        "category": "burger and sandwich",
        "description": "spinach, tomato, avocado, white sauce, egg",
        "weight": 320,
        "diet": "vegetarian",
        "price": 2100
    },
    {
        "id": "a62578",
        "name": "Vegetable burger",
        "category": "burger and sandwich",
        "description": "vegetable cutlet, tomato, red onion, French sauce, lettuce, pickled cucumber",
        "weight": 299,
        "diet": "vegan",
        "price": 1600
    },
    {
        "id": "a28872",
        "name": "Classic burger",
        "category": "burger and sandwich",
        "description": "beef cutlet, lettuce, tomato, picked cucumber, Cheddar cheese",
        "weight": 305,
        "diet": "non-vegetarian",
        "price": 1900
    },
    {
        "id": "a77223",
        "name": "Taco grill",
        "category": "burger and sandwich",
        "description": "cheese, firm loshi, lettuce, white beans, pesto sauce, tomato, cucumber",
        "weight": 319,
        "diet": "vegetarian",
        "price": 1850
    },
    {
        "id": "a29873",
        "name": "Ratatoule",
        "category": "garnish",
        "description": "eggplant, pepper, zucchini, tomato, garlic",
        "weight": 210,
        "diet": "vegan",
        "price": 1800
    },
    {
        "id": "a22242",
        "name": "Risotto with wild rice",
        "category": "garnish",
        "description": "pepper, zucchini, eggplant, champignon, wild rice, white wine, parmesan, cherry tomato",
        "weight": 240,
        "diet": "vegetarian",
        "price": 3200
    },
    {
        "id": "a55664",
        "name": "Red velvet",
        "category": "dessert",
        "description": "whole wheat flour, egg",
        "weight": 187,
        "diet": "vegetarian",
        "price": 1600
    },
    {
        "id": "a10065",
        "name": "Pancake with fruit",
        "category": "dessert",
        "description": "egg, milk, corn flour, cocoa, fruits, fruit sauce",
        "weight": 403,
        "diet": "vegetarian",
        "price": 1500
    },
    {
        "id": "a45374",
        "name": "Red velvet",
        "category": "dessert",
        "description": "egg, milk, corn flour, cocoa, fruits",
        "weight": 417,
        "diet": "vegetarian",
        "price": 1500
    },
    {
        "id": "a35732",
        "name": "Carrot",
        "category": "dessert",
        "description": "carrot, almond flour, coconut milk",
        "weight": 167,
        "diet": "vegetarian",
        "price": 1980
    },
    {
        "id": "a38421",
        "name": "Schtrudel",
        "category": "dessert",
        "description": "whole wheat flour, egg, cocoa",
        "weight": 204,
        "diet": "vegetarian",
        "price": 1700
    },
    {
        "id": "a37425",
        "name": "Red velvet",
        "category": "dessert",
        "description": "whole wheat flour, egg",
        "weight": 187,
        "diet": "vegetarian",
        "price": 1600
    }
];

export default data;