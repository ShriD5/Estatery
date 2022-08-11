import {
  Flex,
  Input,
  Text,
  useMediaQuery,
  Grid,
  GridItem,
  Divider,
  Button,
  Center,
  Container,
} from "@chakra-ui/react";

export default function SearchBar() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      fontFamily={"montserrat"}
      direction={"column"}
      gap={"4"}
      bgColor={"purple.50"}
      height="100rem"
    >
      {" "}
      <Flex
        paddingTop={"14"}
        pl={"28"}
        w={"100%"}
        justifyContent={"space-between"}
      >
        <Text color={"purple.900"} fontSize={"4xl"} fontWeight={"extrabold"}>
          {isMobile ? "" : "Search properties to rent"}
        </Text>{" "}
        <Input
          border={"1px"}
          borderColor={"GrayText"}
          variant={"outline"}
          placeholder={"Search with SearchBar"}
          display={"flex"}
          mx={"28"}
          size={"md"}
          margin={"0"}
          mr={{ base: "28", sm: "44" }}
          w={{ base: "60", sm: "80" }}
        />
      </Flex>
      <Flex
        ml={{ md: " 28", sm: "0" }}
        mr={"32"}
        height={{ md: "28", sm: "10rem" }}
        direction={{ md: " row", sm: "row" }}
        gap={{ md: "24", sm: "10" }}
        bgColor={"whiteAlpha.900"}
        alignItems={"center"}
        w={{ md: "88rem", sm: "100%" }}
      >
        <Flex pl={"10"} direction={"column"}>
          <span fontWeight={"bold"} color={"GrayText"}>
            Location
          </span>
          <Text color={"purple.900"} fontSize={"large"} fontWeight={"bold"}>
            New York
          </Text>
        </Flex>
        <Divider orientation="vertical" />
        <Flex alignItems={"flex-start"} direction={"column"} gap={"4px"}>
          <span fontWeight={"bold"}>When </span>
          <Text color={"purple.900"} fontWeight={"extrabold"}>
            SelectMove-inDate
          </Text>
        </Flex>
        <Divider orientation="vertical" />

        <Flex direction={"column"}>
          <span fontWeight={"bold"} color={"GrayText"}>
            Price
          </span>
          <Text color={"purple.900"} fontWeight={"extrabold"}>
            $500-550
          </Text>
        </Flex>
        <Divider orientation="vertical" />

        <Flex direction={"column"}>
          <span fontWeight={"bold"} color={"GrayText"}>
            Property Type
          </span>
          <Text color={"purple.900"} fontWeight={"extrabold"}>
            Houses
          </Text>
        </Flex>
        <Divider orientation="vertical" />

        <Flex direction={"column"}>
          <Button
            w={"28"}
            h={"12"}
            display={{ sm: "none", md: "inherit", xs: " None" }}
            color={"white"}
            bg={"purple.500"}
            href={"#"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Search{" "}
          </Button>{" "}
        </Flex>
      </Flex>
    </Flex>
  );
}
