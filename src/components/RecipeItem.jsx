import {
  Box,
  Image,
  Text,
  Badge,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

// Helper function to render labels
const renderLabels = (labels, colorScheme) => (
  <Wrap spacing={2} justify="center">
    {labels.map((label, index) => (
      <WrapItem key={index}>
        <Badge colorScheme={colorScheme}>{label}</Badge>
      </WrapItem>
    ))}
  </Wrap>
);

// RecipeItem component to display individual recipe details
export const RecipeItem = ({ recipe, onClick }) => {
  // Filter to only show Vegan and Vegetarian labels
  const healthLabels = recipe.healthLabels.filter((label) =>
    ["Vegan", "Vegetarian"].includes(label)
  );

  return (
    // Main container with various styles and an onclick handler
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      onClick={onClick}
      cursor="pointer"
      _hover={{ backgroundColor: "gray.100" }}
      bg="teal.100"
      maxW="sm"
      w="full"
    >
      {/* Vertical stack to align and space items vertically */}
      <VStack align="center" spacing={4}>
        {/* Image component displaying the recipe image with specific styles*/}
        <Image
          src={recipe.image}
          alt={recipe.label}
          boxSize="200px"
          objectFit="cover"
          mb={2}
          borderRadius="full"
        />

        {/* Text component displaying the recipe label in bold and centered*/}
        {recipe.mealType.length > 0 && (
          <Text as="samp" textAlign="center" fontSize="sm">
            {recipe.mealType.join(", ")}
          </Text>
        )}
        <Text fontWeight="bold" fontSize="xl" textAlign="center">
          {recipe.label}
        </Text>

        {/* Render health labels, diet labels, and cautions using the renderLabels function */}
        {healthLabels.length > 0 && renderLabels(healthLabels, "purple")}
        {recipe.dietLabels.length > 0 &&
          renderLabels(recipe.dietLabels, "green")}
        {recipe.dishType.length > 0 && (
          <Text as="samp" textAlign="center" fontSize="sm">
            Dish Type: {recipe.dishType.join(", ")}
          </Text>
        )}
        {recipe.cautions.length > 0 && (
          <>
            <Text textAlign="center" fontSize="sm">
              <strong>Cautions:</strong>
            </Text>
            {renderLabels(recipe.cautions, "red")}
          </>
        )}
      </VStack>
    </Box>
  );
};
