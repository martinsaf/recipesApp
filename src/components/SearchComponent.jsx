import { useState, useEffect } from "react";
import { VStack, HStack, Checkbox } from "@chakra-ui/react";
import { TextInput } from "./ui/TextInput";
import { data } from "../utils/data";

// Array of diet options for filtering
const dietOptions = [
  "Vegan",
  "Vegetarian",
  "Pescatarian",
  "Gluten-Free",
  "Sesame-Free",
];

export const SearchComponent = ({ onResults }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedDiets, setSelectedDiets] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(data.hits);

  useEffect(() => {
    const filterRecipes = () => {
      const filtered = data.hits.filter((hit) => {
        const labelMatch = hit.recipe.label.toLowerCase().includes(searchValue);
        const healthLabelsMatch =
          selectedDiets.length === 0 ||
          selectedDiets.every((diet) => hit.recipe.healthLabels.includes(diet));
        return labelMatch && healthLabelsMatch;
      });
      setFilteredRecipes(filtered);
    };

    filterRecipes();
  }, [searchValue, selectedDiets]);

  useEffect(() => {
    onResults(filteredRecipes);
  }, [filteredRecipes, onResults]);

  const handleSearch = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  const handleDietChange = (diet) => {
    setSelectedDiets((prevDiets) =>
      prevDiets.includes(diet)
        ? prevDiets.filter((d) => d !== diet)
        : [...prevDiets, diet]
    );
  };

  return (
    <VStack w="100%" spacing={4}>
      <TextInput value={searchValue} changeFn={handleSearch} w="100%" />
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
    </VStack>
  );
};
