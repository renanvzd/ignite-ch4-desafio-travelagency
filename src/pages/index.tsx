import { Flex, Heading, Stack, Divider } from '@chakra-ui/react';
import { HomeBanner } from "../components/HomeBanner";
import { Types } from "../components/TravelTypes";
import { Slider } from "../components/Slider";
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';

interface HomeProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[];
}


export default function Home({ continents }: HomeProps) {
  return (
    <Flex direction="column">

      <HomeBanner />
      <Types />
      <Stack width="90px" padding=".5px" bg="#47585B" mt={["36px", "80px"]} mb={["24px", "52px"]} ml="auto" mr="auto">
        <Divider />
      </Stack>


      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <Slider continents={continents} />


    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "continent")],
  );
  // console.log(JSON.stringify(response, null, 2));
  const continents = response.results.map((continent) => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.slider_image.url,
    };
  });

  return {
    props: {
      continents,
    },
  };
};
