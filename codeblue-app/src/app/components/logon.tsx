import React from "react";
import { VStack, HStack, Input } from "@chakra-ui/react";
import {
  InputGroup,
  InputLeftElement,
  Icon,
  Button,
  Text,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsBoxArrowInRight } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import ImText from "./capa";
import { Link } from "react-router-dom";
import { ApplicationPaths } from "../../types";

export default function Logon() {
  return (
    <HStack padding="12" bg="brand.300" direction="row" justifyContent="center">
      <VStack margin-top="20" spacing={2}>
        <Text color="white">Faça seu cadastro</Text>

        <InputGroup>
          <InputLeftElement
            color="gray.200"
            pointerEvents="none"
            boxSize={12}
            children={<FaUser />}
          />
          <Input
            type="email"
            variant="filled"
            placeholder="Username"
            width="340px"
            height="56px"
            borderRadius="10px"
          />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            color="gray.200"
            pointerEvents="none"
            boxSize={12}
            children={<MdEmail />}
          />
          <Input
            type="email"
            variant="filled"
            placeholder="E-mail"
            width="340px"
            height="56px"
            borderRadius="10px"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            color="gray.200"
            pointerEvents="none"
            boxSize={12}
            children={<RiLockPasswordFill />}
          />
          <Input
            type="password"
            variant="filled"
            placeholder="Senha"
            width="340px"
            height="56px"
            borderRadius="10px"
          />
        </InputGroup>
        <Button type="button" width="340px" height="38px" borderRadius="10px">
          Criar Conta
        </Button>

        <Text
          as={Link}
          to={ApplicationPaths.LOGIN}
          fontSize="14px"
          color="white"
        >
          <Icon as={BsBoxArrowInRight} color="brand.900" fontSize="lg" />
          Entrar com a minha conta
        </Text>
      </VStack>

      <ImText />
    </HStack>
  );
}
