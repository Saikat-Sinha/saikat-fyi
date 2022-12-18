import {
    createStyles,
    ActionIcon,
    Center,
    Header,
    Container,
    Group,
    Button,
    AspectRatio,
    useMantineTheme,
    Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import { RiTwitterLine, RiLinkedinLine, RiGithubLine } from 'react-icons/ri'
import Profile from "../../../public/saikat.jpeg"


const HEADER_HEIGHT = 60;


const DefaultHeader = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const theme = useMantineTheme()

    return (
        <Header height={HEADER_HEIGHT} mb={40} withBorder={false}>
            <Container maw="680px">
                {/* List of links */}
                {/* <Group spacing={'xs'}> */}
                {/* <Button variant='subtle' size='xl' color="dark" component="a" href="/" p={0}>
                        Saikat Sinha
                        <RiGhostSmileLine />
                    </Button> */}
                {/* <Button variant='subtle' color="gray" component="a" href="/about">
                        About
                    </Button>
                    <Button variant='subtle' color="gray" component="a" href="/blog">
                        Blog
                    </Button>
                    <Button variant='subtle' color="gray" component="a" href="/contact">
                        Contact
                    </Button> */}
                {/* </Group> */}
                <Group position='right' p={8} mt={12}>
                    <ActionIcon onClick={() => {
                        window.open("https://twitter.com/_SaikatSinha")
                    }}>
                        <RiTwitterLine size={24} />
                    </ActionIcon>
                    <ActionIcon onClick={() => {
                        window.open("https://www.linkedin.com/in/saikat-sinha/")
                    }}>
                        <RiLinkedinLine size={24} />
                    </ActionIcon>
                    <ActionIcon onClick={() => {
                        window.open("https://github.com/Saikat-Sinha")
                    }}>
                        <RiGithubLine size={24} />
                    </ActionIcon>
                </Group>
            </Container>
        </Header>
    );
};
export default DefaultHeader;