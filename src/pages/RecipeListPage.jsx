import { useState } from "react";
import { Center, Heading, SimpleGrid, VStack, Text } from "@chakra-ui/react";
import { RecipeItem } from "../components/RecipeItem";
import { SearchComponent } from "../components/SearchComponent";

export const RecipeListPage = ({ onRecipeSelect }) => {
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const handleResults = (recipes) => {
    setFilteredRecipes(recipes);
  };

  return (
    <Center p={4}>
      <VStack w="100%" maxW="1200px" spacing={4}>
        <Heading>Recipes App</Heading>
        <SearchComponent onResults={handleResults} />

        {filteredRecipes.length === 0 ? (
          <Text fontSize="xl" color="red.500">
            No recipes found. Please try a different search or adjust your
            filters.
          </Text>
        ) : (
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            spacing={4}
            w="full"
          >
            {filteredRecipes.map((hit, index) => (
              <RecipeItem
                key={index}
                recipe={hit.recipe}
                onClick={() => onRecipeSelect(hit.recipe)}
              />
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Center>
  );
};
