-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 26, 2020 at 12:18 AM
-- Server version: 10.3.25-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `techmyli_bhajiwaala`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(256) CHARACTER SET utf8 DEFAULT NULL,
  `marathi` varchar(256) CHARACTER SET utf8 DEFAULT NULL,
  `hindi` varchar(256) CHARACTER SET utf8 DEFAULT NULL,
  `weight_type` varchar(256) NOT NULL,
  `status` int(12) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `marathi`, `hindi`, `weight_type`, `status`) VALUES
(1, 'ADRAK', 'undefined', 'undefined', 'Kg', 0),
(2, 'BEENS', NULL, NULL, 'Kg', 0),
(3, 'BEET', NULL, NULL, 'Kg', 0),
(4, 'BHENDI', NULL, NULL, 'Kg', 0),
(5, 'BAINGAN SMALL', NULL, NULL, 'Kg', 0),
(6, 'BHOPLA RED', NULL, NULL, 'Kg', 0),
(7, 'CHILLIES', NULL, NULL, 'Kg', 0),
(8, 'CHAWALI', NULL, NULL, 'Kg', 0),
(9, 'DOODHI', NULL, NULL, 'Kg', 0),
(10, 'FLOWER', NULL, NULL, 'Kg', 0),
(11, 'GAJAR', NULL, NULL, 'Kg', 0),
(12, 'KOBI', NULL, NULL, 'Kg', 0),
(13, 'KAKDI', NULL, NULL, 'Kg', 0),
(14, 'KARELA', NULL, NULL, 'Kg', 0),
(15, 'PAPDI', NULL, NULL, 'Kg', 0),
(16, 'PADVAL', NULL, NULL, 'Kg', 0),
(17, 'SIMALA CHILLIES', NULL, NULL, 'Kg', 0),
(18, 'SURAN ', NULL, NULL, 'Kg', 0),
(19, 'SINGA', NULL, NULL, 'Kg', 0),
(20, 'TOMATOES ', NULL, NULL, 'Kg', 0),
(21, 'TOORIA', NULL, NULL, 'Kg', 0),
(22, 'TENDLI', NULL, NULL, 'Kg', 0),
(23, 'LASUN', NULL, NULL, 'Kg', 0),
(24, 'ONIONS', NULL, NULL, 'Kg', 0),
(25, 'POTATOES ', NULL, NULL, 'Kg', 0),
(26, 'COCONUT ', NULL, NULL, 'UNIT', 0),
(27, 'APPLE', NULL, NULL, 'Kg', 0),
(28, 'CHIKOO', NULL, NULL, 'DOZEN', 0),
(29, 'MATKA', NULL, NULL, 'BOX', 0),
(30, 'PINEAPPLE ', NULL, NULL, 'UNIT', 0),
(31, 'MOSAMBI', NULL, NULL, 'DOZEN', 0),
(32, 'WATERMELON', NULL, NULL, 'Kg', 0),
(33, 'KHARBHUJA', NULL, NULL, 'Kg', 0),
(34, 'PAPAYA', NULL, NULL, 'Kg', 0),
(35, 'ORANGE', NULL, NULL, 'DOZEN', 0),
(36, 'KELA PATTA', NULL, NULL, 'UNIT', 0),
(37, 'MUSHROOM ', NULL, NULL, 'PACKET', 0),
(38, 'BESIL / PASLI', NULL, NULL, 'GM', 0),
(39, 'RED / YELLOW SIMLA', NULL, NULL, 'Kg', 0),
(40, 'ZUCCHINI', NULL, NULL, 'Kg', 0),
(41, 'BABY CORN ', NULL, NULL, 'Kg', 0),
(42, 'AMERICAN CORN', NULL, NULL, 'Kg', 0),
(43, 'BROKLI', NULL, NULL, 'Kg', 0),
(44, 'ICEBERG', NULL, NULL, 'Kg', 0),
(45, 'KOTHMIR', NULL, NULL, 'BUNDLE', 0),
(46, 'KADHI PATTA', NULL, NULL, 'Kg', 0),
(47, 'LIMBU', NULL, NULL, 'UNIT', 0),
(48, 'MULA', NULL, NULL, 'BUNDLE', 0),
(49, 'METHI', NULL, NULL, 'BUNDLE', 0),
(50, 'PUDINA', NULL, NULL, 'BUNDLE', 0),
(51, 'PALAK', NULL, NULL, 'BUNDLE', 0),
(52, 'SPRING ONIONS ', NULL, NULL, 'BUNDLE', 0),
(53, 'SALERY PATTA', NULL, NULL, 'BUNDLE', 0),
(54, 'BHOPLA WHITE', NULL, NULL, 'Kg', 0),
(55, 'GALKA', NULL, NULL, 'Kg', 0),
(56, 'LAL MAAT ', NULL, NULL, 'BUNDLE', 0),
(57, 'BAINGAN BHARTA', NULL, NULL, 'Kg', 0),
(58, 'KACHA KELA', NULL, NULL, 'Kg', 0),
(59, 'MADRAS KAKDI', NULL, NULL, 'Kg', 0),
(60, 'PARWAR', NULL, NULL, 'Kg', 0),
(61, 'GAWAR', NULL, NULL, 'Kg', 0),
(62, 'RED KOBI', NULL, NULL, 'Kg', 0),
(63, 'CHERRY TOMATOES ', NULL, NULL, 'Kg', 0),
(64, 'DILL LEAVES', NULL, NULL, 'BUNDLE', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
