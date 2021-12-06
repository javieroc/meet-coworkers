import React from 'react';
import {
  Flex,
  Heading,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

function Links(): JSX.Element {
  return (
    <Flex
      padding="72px 0"
      width="100%"
      wrap="wrap"
      justifyContent="center"
      backgroundColor="gray.200"
      gridGap="8%"
    >
      <VStack>
        <Heading size="sm">About</Heading>
        <Link href="/#"><Text>About Us</Text></Link>
        <Link href="/#"><Text>Team</Text></Link>
        <Link href="/#"><Text>Blog</Text></Link>
      </VStack>
      <VStack>
        <Heading size="sm">Host</Heading>
        <Link href="/#"><Text>How it Works</Text></Link>
        <Link href="/#"><Text>Try Hosting</Text></Link>
        <Link href="/#"><Text>Share a Story</Text></Link>
      </VStack>
      <VStack>
        <Heading size="sm">Community</Heading>
        <Link href="/#"><Text>People</Text></Link>
        <Link href="/#"><Text>Events</Text></Link>
        <Link href="/#"><Text>Social Networks</Text></Link>
      </VStack>
      <VStack>
        <Heading size="sm">Support</Heading>
        <Link href="/#"><Text>Support Service</Text></Link>
        <Link href="/#"><Text>Contact Us</Text></Link>
        <Link href="/#"><Text>Join Us</Text></Link>
      </VStack>
    </Flex>
  );
}

export { Links };
