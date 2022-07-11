-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-07-2022 a las 21:37:14
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `jm`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `cliente_id` int(10) NOT NULL,
  `cliente_nombre` varchar(30) NOT NULL,
  `cliente_empresa` varchar(200) NOT NULL,
  `cliente_email` varchar(30) NOT NULL,
  `cliente_servicio` varchar(50) NOT NULL,
  `precio` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`cliente_id`, `cliente_nombre`, `cliente_empresa`, `cliente_email`, `cliente_servicio`, `precio`) VALUES
(1, 'Juan Rodriguez', 'Ciudad', 'juanrodriguez@gmail.com', 'consultoria HACCP', 20000),
(2, 'Pedro Gonzalez', 'Pochoclo', 'pedrogonzalez@gmail.com', 'capacitacion in comany FSSC ', 50000),
(3, 'julia mancini', 'ferrero', 'juliamancini80@ferrero.com', 'diagnostico HACCP', 20000),
(4, 'Santiago ferryra', 'agronor', 'santiago@gmail.com', 'consultoria', 20000),
(5, 'CArlos Gonzalez', 'elchoclo', 'carlos@elchoclo.com', 'capacitacion ISO9001', 15000);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`cliente_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `cliente_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
