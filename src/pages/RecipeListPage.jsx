import { useState } from "react";
import {
  Center,
  Heading,
  SimpleGrid,
  VStack,
  HStack,
  Checkbox,
} from "@chakra-ui/react";
import { TextInput } from "../components/ui/TextInput";
import { RecipeItem } from "../components/RecipeItem";
import { data } from "../utils/data";

// Array of diet options for filtering
const dietOptions = [
  "Vegan",
  "Vegetarian",
  "Pescatarian",
  "Gluten-Free",
  "Sesame-Free",
];

// RecipeListPage component to display the list of recipes and search functionality
export const RecipeListPage = ({ onRecipeSelect }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(data.hits);
  const [selectedDiets, setSelectedDiets] = useState([]);

  // Handle search input change
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchValue(value);
    filterRecipes(value, selectedDiets);
  };

  // Handle diet checkbox change
  const handleDietChange = (diet) => {
    const updatedDiets = selectedDiets.includes(diet)
      ? selectedDiets.filter((d) => d !== diet)
      : [...selectedDiets, diet];

    setSelectedDiets(updatedDiets);
    filterRecipes(searchValue, updatedDiets);
  };

  // Filter recipes based on search value and selected diets
  const filterRecipes = (searchValue, selectedDiets) => {
    const filtered = data.hits.filter((hit) => {
      const labelMatch = hit.recipe.label.toLowerCase().includes(searchValue);
      const healthLabelsMatch =
        selectedDiets.length === 0 ||
        selectedDiets.every((diet) => hit.recipe.healthLabels.includes(diet));
      return labelMatch && healthLabelsMatch;
    });
    setFilteredRecipes(filtered);
  };

  return (
    <Center p={4}>
      <VStack w="100%" maxW="1200px" spacing={4}>
        <Heading> Recipes App</Heading>
        <TextInput
          placeholder="Search for recipes"
          value={searchValue}
          changeFn={handleSearch}
          w="100%"
        />
        <HStack spacing={4} wrap="wrap">
          {dietOptions.map((diet) => (
            <Checkbox
              key={diet}
              onChange={() => handleDietChange(diet)}
              isChecked={selectedDiets.includes(diet)}
            >
              {diet}
            </Checkbox>
          ))}
        </HStack>
        <SimpleGrid columns={[1, 2, 3]} spacing={4} w="full">
          {/* Display filtered recipes */}
          {filteredRecipes.map((hit, index) => (
            <RecipeItem
              key={index}
              recipe={hit.recipe}
              onClick={() => onRecipeSelect(hit.recipe)}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Center>
  );
};
