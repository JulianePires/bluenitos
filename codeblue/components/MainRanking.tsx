import React from "react";
import { FaStar } from "react-icons/fa";

import { Avatar, HStack, Icon, Image, Text } from "@chakra-ui/react";

interface MainRankingProps {
  name: string;
  points: number;
  classification: number;
}

export function MainRanking({
  name,
  points,
  classification,
}: MainRankingProps) {
  const isPodium = () => {
    return classification < 4;
  };

  const switchIcon = () => {
    switch (classification) {
      case 1:
        return "/images/golden_1.svg";
      case 2:
        return "/images/silver_1.svg";
      case 3:
        return "/images/brass_1.svg";
      default:
        return "";
    }
  };

  return (
    <HStack mb={3} mt={2}>
      {isPodium() ? (
        <Image src={switchIcon()} alt="trophie" />
      ) : (
        <Icon as={FaStar} fontSize="xl" mx="2" />
      )}

      <Text color="gray.400" fontWeight="600">
        {classification}º
      </Text>
      <Avatar size="sm" bg="brand.800" />

      <Text color="gray.400" fontSize="18" fontWeight="600">
        {name}
      </Text>
      <Text color="gray.400">{String(points)} pontos</Text>
    </HStack>
  );
}