import {
  Flex,
  Stack,
  Text,
  HStack,
  Input,
  Card,
  CardBody,
  useToast,
} from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import ColorModeComponent from "./Components/ColorModeComponent";
import CardComponent from "./components/CardComponent";
function App() {
  const [text, setText] = useState("");
  const toast = useToast();

  const copyText = () => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    toast({
      title: "🤸🏼 Beshify 🤸🏼",
      description: "Text Copied Successfully",
      status: "success",
    });
  };

  const generatedText = () => {
    const textTrimmed = text.trim();
    if (textTrimmed.length > 0) {
      const replacedValue = textTrimmed.replace(/\s+/g, " ");
      const newValue = replacedValue.replace(/\s+/g, "🤸🏼");
      setText(newValue);
      return newValue;
    } else {
      setText(textTrimmed);
    }
  };

  return (
    <>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        height={"70vh"}
        width={"100%"}
      >
        <Card boxShadow="dark-lg" p="6" rounded="md">
          <CardBody>
            <ColorModeComponent />
            <Stack>
              <Text
                fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
                fontFamily={"Shrikhand, cursive"}
              >
                🤸🏼 Beshify 🤸🏼
              </Text>

              <Stack>
                <HStack>
                  <Input
                    placeholder="Enter Text...."
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  />
                </HStack>
                {text.length > 0 && (
                  <CardComponent
                    text={text}
                    generatedText={generatedText}
                    copyText={copyText}
                  />
                )}
              </Stack>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
}

export default App;
