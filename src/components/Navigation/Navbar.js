import {
  Button,
  Flex,
  Box,
  Text,
  IconButton,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  MenuButton,
  Menu,
  MenuItem,
  HStack,
  MenuList,
} from "@chakra-ui/react";

import { FaHamburger } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box fontFamily={"montserrat"}>
      <Flex
        bgColor={"purple.50"}
        minH={"90px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <AiFillCloseCircle w={3} h={3} />
              ) : (
                <FaHamburger w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>{" "}
        <Flex color={useColorModeValue("pink.800", "pink")}> </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          pl={"6"}
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontSize={"2xl"}
            fontWeight={"extrabold"}
            color={"purple.600"}
          >
            {" "}
            Estatery
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <HStack display={"flex"} gap={"6"}>
              <Button
                variant={"solid"}
                _active={{
                  color: "purple.400",
                }}
              >
                Rent
              </Button>
              <Button variant={"unstyled"} fontWeight={"bold"}>
                Buy
              </Button>
              <Button variant={"unstyled"}>Sell</Button>
              <Menu>
                <MenuButton
                  as={Button}
                  variant={"unstyled"}
                  rightIcon={<BiChevronDown />}
                >
                  Manage Property
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>{" "}
              <Menu>
                <MenuButton
                  as={Button}
                  variant={"unstyled"}
                  rightIcon={<BiChevronDown />}
                >
                  Resources{" "}
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>{" "}
            </HStack>
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          pr={"6"}
        >
          <Button as={"a"} color={"purple.400"} variant={"outline"} href={"#"}>
            Sign In
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            color={"white"}
            bg={"purple.500"}
            href={"#"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
