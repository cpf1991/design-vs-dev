import { VStack, Box, Text ,useColorModeValue } from '@chakra-ui/react';

type Props = {
  message: string;
  dateSent: string;
  // from: "me" | "others";
  from: string;
};

const ChatBubble = ({ message, dateSent, from }: Props) => {
  const isMe = from === "me";
  const alignment = isMe ? "flex-end" : "flex-start";
  const bottomRightRadius = isMe ? 0 : 32;
  const bottomLeftRadius = isMe ? 32 : 0;

  return (
    <VStack mt={6} alignItems={alignment} alignSelf={alignment}>
      <Box
        // bg={isMe ? "blue.50" : "gray.100"}
        bg={isMe ? useColorModeValue( "blue.50","blue.500") : useColorModeValue("gray.100","gray.500", )}
        px={6}
        py={4}
        maxW={80}
        borderTopLeftRadius={32}
        borderTopRightRadius={32}
        borderBottomLeftRadius={bottomLeftRadius}
        borderBottomRightRadius={bottomRightRadius}
      >
        {message}
      </Box>
      <Text fontSize="xs" color="gray">
        {dateSent}
      </Text>
    </VStack>
  );
};

export default ChatBubble;
