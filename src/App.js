import logo from './logo.svg';
import {useState, useEffect} from 'react';
import {marked} from 'marked';
import {Grid, GridItem, Flex, Box, Button, VStack, Heading, Text, Center, HStack} from '@chakra-ui/react'
import './App.css';

function Header() {
    return (
        <Box bg="#588157"
             p={4}
             color="black"
             position="fixed"
             top="0"
             left="0"
             right="0"
             w="100%"
             h="150px"
             zIndex="999">
            <Center><Heading as="h1" fontSize="2xl">
                W4h Toolkits Tutorial
            </Heading></Center>
            <Center>
                <Text fontSize="md" mt={2}>
                    project link: <a
                    href='https://github.com/USC-InfoLab/w4h-integrated-toolkit/tree/main'>https://github.com/USC-InfoLab/w4h-integrated-toolkit/tree/main</a>
                </Text></Center>
        </Box>
    );
}

function App() {
    const files = ['setting_up.md', 'how_to_start.md','other_things.md'];
    const processedFiles = files.map(file => {
        const fileNameWithoutUnderscore = file.replace(/_/g, ' '); // 去掉下划线并替换为空格
        const parts = fileNameWithoutUnderscore.split('.'); // 将文件名按点分割成部分
        const fileName = parts[0]; // 文件名部分
        const extension = parts[1]; // 后缀名部分
        return {fileName, extension};
    });
    console.log("processedFiles")
    console.log(processedFiles)
    const [currentFile, setCurrentFile] = useState(files[0]);
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        // Load initial Markdown file content
        loadMarkdown(currentFile);
    }, [currentFile]);

    const loadMarkdown = (file) => {
        fetch('/markdown/' + file)
            .then(response => {
                return response.text();
            })
            .then(data => {
                setMarkdownContent(marked(data));
                console.log(markdownContent)
            })
            .catch(error => console.error('Error loading Markdown:', error));
    };

    return (
        <Flex
            direction={'column'}>
            <Header/>
            <HStack>
                <Box
                    position="fixed"
                    top="158"
                    left="0"
                    bottom="0"
                    width="250px"
                    bg={'#588157'}
                    color={'white'}
                    fontWeight='bold'
                >
                    {processedFiles.map((file, index) => (
                        <Button key={files[index]}
                                h={'50px'}
                                w={'100%'}
                                onClick={() => setCurrentFile(files[index])}
                                bg={currentFile === files[index] ? '#a3b18a' : '#588157'}
                                border={'0px'}
                                m={'0px'}
                                color={'white'}
                                fontWeight='bold'
                                fontSize='16px'
                                _hover={{cursor: "pointer"}}>
                            {file.fileName}
                        </Button>
                    ))}
                </Box>
                <Box className="flex h-screen bg-gray-100" left='250' position={'absolute'}
                     top="158" right='0' bottom={0}>
                    <Center className="flex-1 p-4 overflow-y-auto">
                        <Box dangerouslySetInnerHTML={{__html: markdownContent}}/>
                    </Center>
                </Box>
            </HStack>
        </Flex>
    );
}

export default App;
