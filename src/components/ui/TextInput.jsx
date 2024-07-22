import { Input } from "@chakra-ui/react";

// English: TextInput component for search input field
export const TextInput = ({ changeFn, ...props }) => (
  <Input
    placeholder="Search for recipes"
    variant="flushed"
    onChange={changeFn}
    {...props}
  />
);
