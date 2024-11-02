import { Box, Flex, Heading, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import carrerasData from '/src/assets/carreras2.json';
import ImageWithTitle from '../components/imageTitle';

export default function Aranceles() {
  return (
    <Box position="relative">
      <ImageWithTitle
        imageSrc="/src/assets/banner-web-usm-admision.webp"
        title="Aranceles"
      />

      {/* Contenedor para el Breadcrumb con barra decorativa */}
      <Flex 
        position="absolute"
        top="26.5%"
        left="13%" 
        justify="start" 
        align="center" 
        mt={4} 
        mb={8}
      >
        {/* Barra decorativa azul */}
        <Box width="4px" height="16px" bg="#0367A6" mr={2} />

        {/* Breadcrumb de navegación */}
        <Breadcrumb
          fontSize="sm"
          separator="»"
          color="gray.500"
          textAlign="center"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Admisión</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Aranceles</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>

      <Box height="20px" />
          
      {/* Contenedor principal para el título, descripción y tabla */}
      <Flex direction="column" align="start" p={8} maxW="1435px" mx="auto">
        {/* Título y descripción */}
        <Box textAlign="start" mb={6}>
          <Heading as="h2" size="lg" mb={4}>
            Pagos de derecho de matrícula y arancel anual para estudiantes de primer año
          </Heading>
          <Text fontSize="md" mb={4}>
            La Universidad Técnica Federico Santa María de acuerdo a los decretos 623/2023, 624/2023 y 625/2023 ha fijado los valores de arancel y derecho básico de matrícula para estudiantes nuevos para las Carreras de Pregrado y Programas Científicos admisión 2024.
          </Text>
          <Text fontSize="md" mb={4}>
            Estos valores están considerados para el año 2024 y su pago puede diferirse hasta en diez (10) cuotas mensuales, a contar del mes de marzo de 2024.
          </Text>
          <Text fontSize="md" mb={4}>
            El valor del derecho básico de matrícula para alumnos nuevos admisión 2024 es de $245.000 anual, monto que se puede cancelar en dos cuotas semestrales de $122.500.
          </Text>
          <Text fontSize="md">
            Los valores de arancel se pueden revisar en la siguiente tabla:
          </Text>
        </Box>

        {/* Tabla de aranceles */}
        <Box overflowX="auto" width="full">
          <Table variant="simple" >
            <Thead>
              <Tr>
                <Th>Nombre de Carrera</Th>
                <Th>Precio de Arancel</Th>
                <Th>Puntaje de Último Matriculado</Th>
              </Tr>
            </Thead>
            <Tbody>
              {carrerasData.map((carrera) => (
                <Tr key={carrera.id}>
                  <Td>{carrera.nombre}</Td>
                  <Td>{carrera.arancel}</Td>
                  <Td>{carrera.puntaje}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}
