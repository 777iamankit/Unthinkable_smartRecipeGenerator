# Challenges faced:
1>passing multiple ingrediets to api to generate recipe .

for using gemini api to fetch ingredients from food use 
"npm install @google/generative-ai"




Smart Recipe Generator

Project Overview

Smart Recipe Generator is a web application that generates recipes based on available ingredients. Users can input ingredients via text or images, specify dietary preferences, and receive recipe suggestions with detailed instructions and nutritional information. The app also allows users to save and rate recipes for personalized recommendations.




Features

Ingredient recognition from images using Google Gemini AI.
Recipe matching algorithm for accurate suggestions.
Dietary preference filters: vegetarian, vegan, gluten-free, lactose-free, non-vegetarian.
Nutritional info: calories and protein for each recipe.
Adjustable serving sizes.
Save & rate recipes for personalized recommendations.
Mobile-responsive and clean UI.
Database: 20+ predefined recipes from various cuisines.

Live Deployment: [Insert Hosting Link]





Technologies Used

Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB
AI: Google Gemini API for image-based ingredient recognition

Hosting: Netlify / Vercel / Heroku




Project Structure:

SmartRecipeGenerator/
├── Backend/
│   ├── index.js
│   ├── routes/
│   │   └── imageSearch.js
│   └── model/
│       └── recipeSchema.js
├── public/
│   ├── userInput/
│   │   └── userInput.html
│   └── images/
├── outputGeneration/
│   ├── recipeGenerations.js
│   └── feedback.js
└── FiltersAndCustomization/
    └── filter.js



How to Use

1>Open the app and input ingredients manually or upload an image.
2>Choose dietary preferences and any additional filters.
3>Click Generate Recipe to view suggestions.
S4>ave and rate recipes to customize recommendations.
