import {
  Badge,
  Box,
  Button,
  Image,
  Text,
  VStack,
  Heading,
  Grid,
  GridItem,
  Container,
  Wrap,
  WrapItem,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

//  RecipePage component to display detailed recipe information
export const RecipePage = ({ recipe, onBack }) => {
  return (
    <Container maxW="container.lg" p={4}>
      {/* Center container */}
      <Box p={4} bg="blue.100" borderRadius="lg">
        {/* Background color, border radius */}
        <Button onClick={onBack} mb={4}>
          Back to Recipes
        </Button>
        <VStack spacing={4} align="start">
          <Image
            src={recipe.image}
            alt={recipe.label}
            boxSize="300px"
            objectFit="cover"
            borderRadius="full"
          />
          <Heading size="xl">{recipe.label}</Heading>
          <Grid templateColumns={["1fr", "1fr 1fr"]} gap={10} w="full">
            {/* Grid layout with columns: 1 column for small screens, 2 columns for larger screens */}
            <GridItem>
              <VStack spacing={4} align="start">
                <Text>
                  <strong>Meal Type:</strong> {recipe.mealType.join(", ")}
                </Text>

                <Text>
                  <strong>Total Time:</strong> {recipe.totalTime} minutes
                </Text>
                <Text>
                  <strong>Servings:</strong> {recipe.yield}
                </Text>
                <Text>
                  <strong>Ingredients:</strong>
                </Text>
                <List spacing={2}>
                  {recipe.ingredientLines.map((ingredient, index) => (
                    <ListItem key={index}>
                      <ListIcon as={CheckCircleIcon} color="green.500" />
                      {ingredient}
                    </ListItem>
                  ))}
                </List>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack spacing={4} align="start">
                <Text>
                  <strong>Health Labels:</strong>
                </Text>
                <Wrap>
                  {recipe.healthLabels.map((label) => (
                    <WrapItem key={label}>
                      <Badge colorScheme="purple">{label}</Badge>
                    </WrapItem>
                  ))}
                </Wrap>
                <Text>
                  <strong>Diet Labels:</strong>
                </Text>
                <Wrap>
                  {recipe.dietLabels.map((label) => (
                    <WrapItem key={label}>
                      <Badge colorScheme="green">{label}</Badge>
                    </WrapItem>
                  ))}
                </Wrap>
                <Text>
                  <strong>Cautions:</strong>
                </Text>
                <Wrap>
                  {recipe.cautions.map((caution) => (
                    <WrapItem key={caution}>
                      <Badge colorScheme="red">{caution}</Badge>
                    </WrapItem>
                  ))}
                </Wrap>
                <Text>
                  <strong>Total Nutrients:</strong>
                </Text>
                <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                  {/* Grid layout with 3 columns for total nutrients */}
                  {recipe.totalNutrients.ENERC_KCAL && (
                    <Box
                      bg="gray.100"
                      p={2}
                      borderRadius="md"
                      textAlign="center"
                    >
                      <Text fontWeight="bold">
                        {recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)}
                      </Text>
                      <Text>Calories</Text>
                    </Box>
                  )}
                  {recipe.totalNutrients.CHOCDF && (
                    <Box
                      bg="gray.100"
                      p={2}
                      borderRadius="md"
                      textAlign="center"
                    >
                      <Text fontWeight="bold">
                        {recipe.totalNutrients.CHOCDF.quantity.toFixed(2)}
                      </Text>
                      <Text>Carbs</Text>
                    </Box>
                  )}
                  {recipe.totalNutrients.PROCNT && (
                    <Box
                      bg="gray.100"
                      p={2}
                      borderRadius="md"
                      textAlign="center"
                    >
                      <Text fontWeight="bold">
                        {recipe.totalNutrients.PROCNT.quantity.toFixed(2)}
                      </Text>
                      <Text>Protein</Text>
                    </Box>
                  )}
                  {recipe.totalNutrients.FAT && (
                    <Box
                      bg="gray.100"
                      p={2}
                      borderRadius="md"
                      textAlign="center"
                    >
                      <Text fontWeight="bold">
                        {recipe.totalNutrients.FAT.quantity.toFixed(2)}
                      </Text>
                      <Text>Fat</Text>
                    </Box>
                  )}
                  {recipe.totalNutrients.CHOLE && (
                    <Box
                      bg="gray.100"
                      p={2}
                      borderRadius="md"
                      textAlign="center"
                    >
                      <Text fontWeight="bold">
                        {recipe.totalNutrients.CHOLE.quantity.toFixed(2)}
                      </Text>
                      <Text>Cholesterol</Text>
                    </Box>
                  )}
                  {recipe.totalNutrients.NA && (
                    <Box
                      bg="gray.100"
                      p={2}
                      borderRadius="md"
                      textAlign="center"
                    >
                      <Text fontWeight="bold">
                        {recipe.totalNutrients.NA.quantity.toFixed(2)}
                      </Text>
                      <Text>Sodium</Text>
                    </Box>
                  )}
                </Grid>
              </VStack>
            </GridItem>
          </Grid>
        </VStack>
      </Box>
    </Container>
  );
};
