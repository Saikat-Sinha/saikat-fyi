import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Profile from "../public/saikat-rem.png"
import Header from '../components/layouts/home/Header'
import Footer from '../components/layouts/home/Footer'
import { ActionIcon, AspectRatio, Box, Button, Container, Divider, Flex, Group, Stack, Text, Title } from '@mantine/core'
import { RiTwitterLine, RiLinkedinLine, RiGithubLine } from 'react-icons/ri'

export default function Home() {
  return (
    <>
      <Head>
        <title>Saikat Sinha</title>
        <meta name="description" content="Software Engineer, JavaScript Enthusiast, and SASS curious" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Header></Header>

        <Container maw="680px">
          <Box my={30}>
            <Flex direction={{ base: 'column-reverse', sm: "row" }} align={{ base: 'start', sm: "center" }} justify="space-between">
              <Box>
                <Title order={1} size="24px" weight={400}>Saikat Sinha</Title>
                <Text c="#e5e5e5" weight={200} mb="md">Software Engineer at <Box component="span" fw={700}>Walmart Global Tech</Box></Text>
                <Text c="#e5e5e5" maw={520} weight={400} fs="italic">
                  JavaScript, TypeScript, Frontend Platform Engineer, Microfrontends, Serverless, Databases and Data Visualizations are my Jam.
                </Text>

              </Box>
              <Box sx={{ filter: "grayscale(1)" }}>
                <AspectRatio ratio={3 / 4} sx={{ width: 120, }} mb={40} >
                  <Image src={Profile} alt="Saikat's Image" fill style={{ borderRadius: "50%", background: "#e0e0f1" }} />
                </AspectRatio>
              </Box>
            </Flex>
            <Box my={12}>
              <Button variant='gradient' gradient={{ from: '#6271ec', to: '#a7800f', deg: 105 }} onClick={() => {
                window.location.href = "https://blog.saikat.fyi"
                // window.open("https://blog.saikat.fyi")
              }}>Visit my Blog</Button>
            </Box>
          </Box>

          <Divider />
          {/* <Stack my={30}>
            <Title order={2} size="24px">Latest Articles</Title>
            <Text>
              Coming Soon

            </Text>
          </Stack> */}

        </Container>

        <Footer></Footer>
      </main>
    </>
  )
}
