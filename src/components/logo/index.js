import { Box } from "@chakra-ui/react";
import Logo from "../../assets/img/logo.png";
import Image from "next/image";

const LogoComponent = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "inline-block" },
      }}
    >
      <Image src={Logo} alt={"logo"} width={"250px"} height={"85px"} />
    </Box>
  );
};

export default LogoComponent;
