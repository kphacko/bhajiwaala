-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 01, 2020 at 10:42 PM
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
(1, 'ADRAK', NULL, NULL, 'Kg', 0),
(2, 'BEENS', NULL, NULL, 'Kg', 0),
(3, 'BEET', NULL, NULL, 'Kg', 0),
(4, 'BHENDI', NULL, NULL, 'Kg', 0),
(5, 'BAINGAN SMALL', NULL, NULL, 'Kg', 0),
(6, 'BAINGAN BHARTA', NULL, NULL, 'Kg', 0),
(7, 'BHOPLA RED', NULL, NULL, 'Kg', 0),
(8, 'BHOPLA WHITE', NULL, NULL, 'Kg', 0),
(9, 'CHILLIES', NULL, NULL, 'Kg', 0),
(10, 'CHAWALI', NULL, NULL, 'Kg', 0),
(11, 'DOODHI', NULL, NULL, 'Kg', 0),
(12, 'FLOWER', NULL, NULL, 'Kg', 0),
(13, 'GAJAR', NULL, NULL, 'Kg', 0),
(14, 'KOBI', NULL, NULL, 'Kg', 0),
(15, 'KAKDI', NULL, NULL, 'Kg', 0),
(16, 'KARELA', NULL, NULL, 'Kg', 0),
(17, 'PAPDI', NULL, NULL, 'Kg', 0),
(18, 'PADVAL', NULL, NULL, 'Kg', 0),
(19, 'SIMALA CHILLIES', NULL, NULL, 'Kg', 0),
(20, 'SURAN ', NULL, NULL, 'Kg', 0),
(21, 'SINGA', NULL, NULL, 'Kg', 0),
(22, 'TOMATOES ', NULL, NULL, 'Kg', 0),
(23, 'TOORIA', NULL, NULL, 'Kg', 0),
(24, 'TENDLI', NULL, NULL, 'Kg', 0),
(61, 'GAWAR', NULL, NULL, 'Kg', 0),
(61, 'VATANA', NULL, NULL, 'Kg', 0),
(61, 'VATANA PACKET', NULL, NULL, 'Kg', 0),



(13, 'PARVAR', NULL, NULL, 'Kg', 0),
(61, 'ARBI', NULL, NULL, 'Kg', 0),
(61, 'SOYA BEAN', NULL, NULL, 'Kg', 0),
(64, 'ACHAR', NULL, NULL, 'BUNDLE', 0),
(58, 'KACHA KELA', NULL, NULL, 'Kg', 0),
(59, 'MADRAS KAKDI', NULL, NULL, 'Kg', 0),
(56, 'GALKA', NULL, NULL, 'Kg', 0),

(25, 'LASUN', NULL, NULL, 'Kg', 0),
(25, 'LASUN 1', NULL, NULL, 'Kg', 0),
(25, 'LASUN 2', NULL, NULL, 'Kg', 0),
(25, 'LASUN 3', NULL, NULL, 'Kg', 0),
(25, 'LASUN OIL FRY', NULL, NULL, 'Kg', 0),



(26, 'ONIONS', NULL, NULL, 'Kg', 0),
(27, 'POTATOES ', NULL, NULL, 'Kg', 0),
(28, 'COCONUT ', NULL, NULL, 'UNIT', 0),
(29, 'APPLE', NULL, NULL, 'Kg', 0),
(30, 'CHIKOO', NULL, NULL, 'DOZEN', 0),
(31, 'MATKA', NULL, NULL, 'BOX', 0),
(32, 'PINEAPPLE ', NULL, NULL, 'UNIT', 0),
(33, 'MOSAMBI', NULL, NULL, 'DOZEN', 0),
(34, 'WATERMELON', NULL, NULL, 'Kg', 0),
(35, 'KHARBHUJA', NULL, NULL, 'Kg', 0),
(36, 'PAPAYA', NULL, NULL, 'Kg', 0),
(37, 'ORANGE', NULL, NULL, 'DOZEN', 0),
(61, 'BANANA', NULL, NULL, 'Kg', 0),
(61, 'GRAPPES', NULL, NULL, 'Kg', 0),
(61, 'MANGO', NULL, NULL, 'Kg', 0),
(61, 'PEAR', NULL, NULL, 'Kg', 0),
(61, 'COCONUT WATER', NULL, NULL, 'Kg', 0),
(38, 'KELA PATTA', NULL, NULL, 'UNIT', 0),
(39, 'MUSHROOM ', NULL, NULL, 'PACKET', 0),
(40, 'BESIL', NULL, NULL, 'GM', 0),
(65, 'PASIL', NULL, NULL, 'Kg', 0);

(41, 'RED SIMLA', NULL, NULL, 'Kg', 0),
(41, ' YELLOW SIMLA', NULL, NULL, 'Kg', 0),

(42, 'ZUCCHINI', NULL, NULL, 'Kg', 0),
(43, 'BABY CORN ', NULL, NULL, 'Kg', 0),
(44, 'AMERICAN CORN', NULL, NULL, 'Kg', 0),
(45, 'BROKLI', NULL, NULL, 'Kg', 0),
(46, 'ICEBERG', NULL, NULL, 'Kg', 0),
(63, 'CHERRY TOMATOES ', NULL, NULL, 'Kg', 0),
(62, 'RED KOBI', NULL, NULL, 'Kg', 0),
(62, 'RED CHILLI', NULL, NULL, 'Kg', 0),



(47, 'KOTHMIR', NULL, NULL, 'BUNDLE', 0),
(48, 'KADHI PATTA', NULL, NULL, 'Kg', 0),
(49, 'LIMBU', NULL, NULL, 'UNIT', 0),
(50, 'MULA', NULL, NULL, 'BUNDLE', 0),
(51, 'METHI', NULL, NULL, 'BUNDLE', 0),
(52, 'PUDINA', NULL, NULL, 'BUNDLE', 0),
(53, 'PALAK', NULL, NULL, 'BUNDLE', 0),
(54, 'SPRING ONIONS ', NULL, NULL, 'BUNDLE', 0),
(55, 'SALERY PATTA', NULL, NULL, 'BUNDLE', 0),
(64, 'SUVA BHAJI', NULL, NULL, 'BUNDLE', 0),

(55, 'SALAD PATTA', NULL, NULL, 'BUNDLE', 0),
(55, 'ALU PATTA', NULL, NULL, 'BUNDLE', 0),
(55, 'SARSO PATTA', NULL, NULL, 'BUNDLE', 0),
(55, 'CHAWLI PATTA', NULL, NULL, 'BUNDLE', 0),
(57, 'LAL MAAT ', NULL, NULL, 'BUNDLE', 0), 




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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
