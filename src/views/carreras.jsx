import { Box, Flex, Heading, Text, Select, Image, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useState } from 'react';
import carreras1 from '/src/assets/carreras2.json';
import ImageWithTitle from '../components/imageTitle';

const carrerasData = carreras1.sort((a, b) => a.nombre.localeCompare(b.nombre));
export default function Carreras() {
  // Establece "Ing. Civil Informática" como valor inicial
  const [selectedCarrera, setSelectedCarrera] = useState("Ing. Civil Informática");

  // Encontrar la carrera seleccionada en el JSON
  const carrera = carrerasData.find((c) => c.nombre === selectedCarrera);

  const handleSelectChange = (e) => {
    setSelectedCarrera(e.target.value);
  };

  return (
    <Box position="relative">
      <ImageWithTitle
        imageSrc="/src/assets/banner-web-usm-admision.webp"
        title="Carreras de Pregrado"
        breadcrumbName="Carreras"
      />

      <Flex direction="column" align="center" gap={6} p={8}>
        {/* Texto de instrucción */}
        <Text fontSize="lg" fontWeight="bold">
          Selecciona la carrera que quieras:
        </Text>

        {/* Seleccionador de carreras */}
        <Select
          value={selectedCarrera}
          onChange={handleSelectChange}
          maxW="400px"
        >
          {carrerasData.map((carrera, index) => (
            <option key={index} value={carrera.nombre}>
              {carrera.nombre}
            </option>
          ))}
        </Select>

        {/* Detalles de la carrera */}
        {carrera && (
          <Box w="100%" maxW="1000px" p={4} boxShadow="md" borderRadius="md">
            <Heading as="h2" size="xl" mb={4}>
              {carrera.nombre}
            </Heading>
            <Image src={carrera.imagen} alt={carrera.nombre} width="100%" height="180px" objectFit="cover" mb={4} mx="auto" />
            <Text fontWeight="bold">Título Profesional:</Text>
            <Text fontSize="lg" mb={4}>
              {carrera.titulo}
            </Text>
            <Text fontWeight="bold">Descripción:</Text>
            <Text fontSize="lg" mb={4}>
              {carrera.descripcion}
            </Text>
            <Text fontWeight="bold">Lugar:</Text>
            <Text fontSize="lg" mb={4}>
              {carrera.lugar}
            </Text>

            <Text fontWeight="bold">Puntaje de corte PAES 2024:</Text>
            <Text fontSize="lg" mb={4}>
              {carrera.puntaje}
            </Text>

            <Text fontWeight="bold">Malla Curricular 2025:</Text>
            <Image src={carrera.malla} alt={`Malla de ${carrera.nombre}`} maxH="500px" mx="auto" objectFit="cover"  mb={4}/>
          </Box>
        )}
      </Flex>
    </Box>
  );
}
