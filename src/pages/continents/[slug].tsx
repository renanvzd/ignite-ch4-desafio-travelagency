import { GetStaticPaths, GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';

import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ContinentInfo } from '../../components/ContinentInfo';
import { Cities } from '../../components/ContinentCitySection';

export interface Continent {
  data: {
    title: string;
    description: string;
    content: {
      cardCity: string;
      cardCountry: string;
      cardImage: {
        url: string;
      };
    };
  };
}

export interface ContinentProps {
  continent: Continent;
}

export default function Continents({ continent }: ContinentProps) {
  return (
    <Box >
      <Image
        w="100%"
        h={["163px", "250px", "270px", "500px"]}
        alignContent="right"
        src='/continentBanner.png'
        alt='Europa'
        justifySelf="right"
      />
      <Flex
        display="absolute"
        w={["250px", "426px"]}
        ml={["30px", "60px", "150px", "200px"]}
        mt={["-40px", "-70px", "-80px", "-110px"]}
      >
        <Text
          fontSize={["14px", "26px", "26px", "48px"]}
          fontWeight="600"
          lineHeight={["30px", "54px"]}
          color="#ffffff"
        >
          {continent.data.title}
        </Text>
      </Flex>

      <ContinentInfo continent={continent} />

      <Cities continent={continent} />

    </Box >
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const continent = await prismic.query([
    Prismic.Predicates.at("document.type", "continent"),
  ]);

  const paths = continent.results.map((continent) => {
    return {
      params: {
        slug: continent.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID("continent", String(slug), {});

  // console.log(JSON.stringify(response, null, 2));

  const continent = {
    slug: response.uid,
    data: {
      title: response.data.title,
      description: response.data.description,
      content: response.data.content.map(content => {
        return {
          cardCity: content.cardcity,
          cardCountry: content.cardcountry,
          cardImage: {
            url: content.cardimage.url,
          }
        };
      })
    },
  };
  return {
    props: {
      continent,
    },
  };
};
