import { Box, Container, Heading, Text, SimpleGrid, Image, Icon, Stack, Flex, Link, Button, VStack, HStack, AspectRatio, useColorModeValue } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube, FaCalendarAlt, FaPlus } from "react-icons/fa";

const Index = () => {
  // Placeholder data for testimonials and blog posts
  const testimonials = [
    { id: 1, content: "Amazing experience, highly recommend!", author: "Jane Doe" },
    { id: 2, content: "The instructors were fantastic and patient.", author: "John Smith" },
  ];

  const blogPosts = [
    { id: 1, title: "5 Tips for Beginner Surfers", summary: "Get started on your surfing journey with these professional tips." },
    { id: 2, title: "Best Surfing Spots in Ecuador", summary: "Discover the top destinations for surfers in Ecuador." },
  ];

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} as="main" mt={10} mb={10}>
        {/* Hero Section */}
        <Stack alignItems="center" spacing={2}>
          <Heading as="h1" size="2xl">
            Ecuadorian Surf School
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Experience the thrill of surfing in one of the most beautiful destinations in the world.
          </Text>
          <Image borderRadius="md" src="https://images.unsplash.com/photo-1589265172159-4f3f49d8368e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdXJmaW5nJTIwZWN1YWRvciUyMGJlYWNofGVufDB8fHx8MTcwODUzNTA4N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Ecuador Beach" />
        </Stack>

        {/* Services Section */}
        <Box as="section" p={10} bg={useColorModeValue("gray.100", "gray.700")} borderRadius="md">
          <Heading as="h2" size="xl" mb={6}>
            Our Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <ServiceCard title="Surfboard Rentals" description="High-quality boards for all skill levels." icon={FaPlus} />
            <ServiceCard title="Surfing Lessons" description="Learn from experienced instructors." icon={FaPlus} />
            <ServiceCard title="Streetwear Sales" description="Stylish surf-themed apparel." icon={FaPlus} />
          </SimpleGrid>
        </Box>

        {/* Testimonials Section */}
        <Box as="section">
          <Heading as="h2" size="xl" mb={6}>
            Testimonials
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {testimonials.map((testimonial) => (
              <Box key={testimonial.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
                <Text fontSize="md">{testimonial.content}</Text>
                <Text fontSize="sm" fontWeight="bold" mt={2}>
                  {testimonial.author}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Booking Integration */}
        <Flex direction="column" alignItems="center" justifyContent="center" p={5} bg={useColorModeValue("blue.50", "blue.900")} borderRadius="md">
          <Heading as="h3" size="lg" mb={3}>
            Book a Lesson
          </Heading>
          <Link href="https://calendly.com" isExternal>
            <Button leftIcon={<FaCalendarAlt />} colorScheme="blue">
              Schedule Now
            </Button>
          </Link>
        </Flex>

        {/* Blog/News Section */}
        <Box as="section">
          <Heading as="h2" size="xl" mb={6}>
            Latest News & Blog
          </Heading>
          {blogPosts.map((post) => (
            <Box key={post.id} p={5} mb={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">
                {post.title}
              </Heading>
              <Text fontSize="sm" mb={2}>
                {post.summary}
              </Text>
            </Box>
          ))}
        </Box>

        {/* Footer */}
        <Box as="footer" p={10}>
          <HStack spacing={4} justify="center">
            <Icon as={FaInstagram} w={6} h={6} />
            <Icon as={FaTwitter} w={6} h={6} />
            <Icon as={FaYoutube} w={6} h={6} />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

const ServiceCard = ({ title, description, icon }) => {
  return (
    <VStack p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Icon as={icon} w={10} h={10} />
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text textAlign="center">{description}</Text>
    </VStack>
  );
};

export default Index;
