import {
  Box,
  Image,
  Text,
  Badge,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

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
      {/* Vertical stack to align and space items verically */}
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

        {/* Text component displaying the recipe label in bold and cetered*/}
        {recipe.mealType.length > 0 && (
          <Text as="samp" textAlign="center" fontSize="sm">
            {recipe.mealType.join(", ")}
          </Text>
        )}
        <Text fontWeight="bold" fontSize="xl" textAlign="center">
          {recipe.label}
        </Text>

        {/* Conditional rendering for health labels if they exist */}
        {healthLabels.length > 0 && (
          <Wrap spacing={2} justify="center">
            {healthLabels.map((label, index) => (
              <WrapItem key={index}>
                <Badge colorScheme="purple">{label}</Badge>
              </WrapItem>
            ))}
          </Wrap>
        )}
        {recipe.dietLabels.length > 0 && (
          <Wrap spacing={2} justify="center">
            {recipe.dietLabels.map((label, index) => (
              <WrapItem key={index}>
                <Badge colorScheme="green">{label}</Badge>
              </WrapItem>
            ))}
          </Wrap>
        )}
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
            <Wrap spacing={2} justify="center">
              {recipe.cautions.map((caution, index) => (
                <WrapItem key={index}>
                  <Badge colorScheme="red">{caution}</Badge>
                </WrapItem>
              ))}
            </Wrap>
          </>
        )}
      </VStack>
    </Box>
  );
};
