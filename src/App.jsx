import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./components/RecipePage";
import { ChakraProvider, Box } from "@chakra-ui/react";

// Main App component managing the state and navigation
export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <ChakraProvider>
      <Box>
        {selectedRecipe ? (
          <RecipePage
            recipe={selectedRecipe}
            onBack={() => setSelectedRecipe(null)}
          />
        ) : (
          <RecipeListPage onRecipeSelect={setSelectedRecipe} />
        )}
      </Box>
    </ChakraProvider>
  );
};
