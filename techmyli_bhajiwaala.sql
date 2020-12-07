-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 07, 2020 at 03:03 AM
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
-- Table structure for table `expense`
--

CREATE TABLE `expense` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `discription` varchar(256) DEFAULT NULL,
  `date` varchar(256) NOT NULL,
  `amount` varchar(256) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `hotel`
--

CREATE TABLE `hotel` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `gstin` varchar(256) DEFAULT NULL,
  `phone` varchar(256) NOT NULL,
  `status` int(12) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hotel`
--

INSERT INTO `hotel` (`id`, `name`, `email`, `gstin`, `phone`, `status`) VALUES
(1, 'Krishna Punjab', '', '', '2223714873', 0),
(2, 'Modern Cafe', '', '', '9821273292', 0),
(3, 'Dawarka ', '', '', '9833202023', 0),
(4, 'B.P.L.C', '', '', '9769569127', 0),
(5, 'Sachiwalay ', '', '', '8433560935', 0),
(6, 'Mr. Kalam', '', '', '7715033662', 0),
(7, 'Geeta Bhavan', '', '', '2223013895', 0),
(8, 'Love Eat', '', '', '9022414576', 0),
(9, 'Ayakar Bhavan Income Tax', '', '', '9082578808', 0);

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id` int(11) NOT NULL,
  `u_id` int(11) NOT NULL,
  `ref_id` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `type` int(11) NOT NULL DEFAULT 0,
  `date` varchar(256) NOT NULL,
  `paid_amount` varchar(256) DEFAULT '0',
  `TotalPrice` int(11) DEFAULT 0,
  `hell` int(12) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id`, `u_id`, `ref_id`, `status`, `type`, `date`, `paid_amount`, `TotalPrice`, `hell`) VALUES
(1, 19, 1, 0, 0, '2020-12-07 15:14:40.415', '0', 0, 0),
(2, 19, 2, 0, 0, '2020-12-07 15:19:12.604', '0', 0, 0),
(3, 19, 3, 0, 0, '2020-12-07 15:20:49.678', '0', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `ordered_products`
--

CREATE TABLE `ordered_products` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `p_id` int(11) NOT NULL,
  `quantity` varchar(256) NOT NULL,
  `price` varchar(256) NOT NULL,
  `PerPrice` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ordered_products`
--

INSERT INTO `ordered_products` (`id`, `order_id`, `p_id`, `quantity`, `price`, `PerPrice`) VALUES
(18, 1, 2, '0.5', '0', 0),
(19, 1, 9, '1', '0', 0),
(20, 1, 12, '0.25', '0', 0),
(21, 1, 13, '0.5', '0', 0),
(22, 1, 14, '10', '0', 0),
(23, 1, 19, '2', '0', 0),
(24, 1, 22, '1', '0', 0),
(25, 1, 26, '0.5', '0', 0),
(26, 1, 32, '1', '0', 0),
(27, 1, 39, '1', '0', 0),
(28, 1, 40, '2', '0', 0),
(29, 1, 41, '1', '0', 0),
(30, 1, 60, '0.5', '0', 0),
(31, 1, 63, '0.5', '0', 0),
(32, 1, 70, '4', '0', 0),
(33, 1, 77, '5', '0', 0),
(34, 1, 78, '1', '0', 0),
(55, 3, 76, '3', '0', 0),
(56, 3, 74, '3', '0', 0),
(57, 3, 71, '0.25', '0', 0),
(58, 3, 70, '4', '0', 0),
(59, 3, 49, '20', '0', 0),
(60, 3, 47, '12', '0', 0),
(61, 3, 35, '1', '0', 0),
(62, 3, 22, '12', '0', 0),
(63, 3, 21, '1.5', '0', 0),
(64, 3, 15, '4', '0', 0),
(65, 3, 13, '4', '0', 0),
(66, 3, 11, '17', '0', 0),
(67, 3, 9, '3', '0', 0),
(68, 3, 7, '2', '0', 0),
(69, 3, 1, '3', '0', 0),
(91, 2, 1, '0.5', '0', 0),
(92, 2, 2, '1', '0', 0),
(93, 2, 3, '0.5', '0', 0),
(94, 2, 9, '1', '0', 0),
(95, 2, 12, '6', '0', 0),
(96, 2, 13, '2', '0', 0),
(97, 2, 14, '1', '0', 0),
(98, 2, 15, '2', '0', 0),
(99, 2, 19, '1', '0', 0),
(100, 2, 22, '7', '0', 0),
(101, 2, 35, '3', '0', 0),
(102, 2, 39, '25', '0', 0),
(103, 2, 40, '25', '0', 0),
(104, 2, 70, '3', '0', 0),
(105, 2, 71, '0.25', '0', 0),
(106, 2, 72, '20', '0', 0),
(107, 2, 74, '2', '0', 0),
(108, 2, 76, '10', '0', 0),
(109, 2, 77, '2', '0', 0),
(110, 2, 78, '1', '0', 0);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `u_id` int(12) NOT NULL,
  `ref_id` int(12) NOT NULL,
  `type` varchar(256) NOT NULL,
  `date` varchar(256) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `u_id`, `ref_id`, `type`, `date`, `status`) VALUES
(1, 19, 6, 'HOTEL', '01-12-2020', 0),
(2, 19, 5, 'HOTEL', '01-12-2020', 0),
(3, 19, 4, 'HOTEL', '01-12-2020', 0);

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
(25, 'GAWAR', NULL, NULL, 'Kg', 0),
(26, 'VATANA', NULL, NULL, 'Kg', 0),
(27, 'VATANA PACKET', NULL, NULL, 'Kg', 0),
(28, 'PARVAR', NULL, NULL, 'Kg', 0),
(29, 'ARBI', NULL, NULL, 'Kg', 0),
(30, 'SOYA BEAN', NULL, NULL, 'Kg', 0),
(31, 'ACHAR', NULL, NULL, 'BUNDLE', 0),
(32, 'KACHA KELA', NULL, NULL, 'Kg', 0),
(33, 'MADRAS KAKDI', NULL, NULL, 'Kg', 0),
(34, 'GALKA', NULL, NULL, 'Kg', 0),
(35, 'LASUN 1', NULL, NULL, 'Kg', 0),
(36, 'LASUN 2', NULL, NULL, 'Kg', 0),
(37, 'LASUN 3', NULL, NULL, 'Kg', 0),
(38, 'LASUN OIL FRY', NULL, NULL, 'Kg', 0),
(39, 'ONIONS', NULL, NULL, 'Kg', 0),
(40, 'POTATOES ', NULL, NULL, 'Kg', 0),
(41, 'COCONUT ', NULL, NULL, 'UNIT', 0),
(42, 'APPLE', NULL, NULL, 'Kg', 0),
(43, 'CHIKOO', NULL, NULL, 'DOZEN', 0),
(44, 'MATKA', NULL, NULL, 'BOX', 0),
(45, 'PINEAPPLE ', NULL, NULL, 'UNIT', 0),
(46, 'MOSAMBI', NULL, NULL, 'DOZEN', 0),
(47, 'WATERMELON', NULL, NULL, 'Kg', 0),
(48, 'KHARBHUJA', NULL, NULL, 'Kg', 0),
(49, 'PAPAYA', NULL, NULL, 'Kg', 0),
(50, 'ORANGE', NULL, NULL, 'DOZEN', 0),
(51, 'BANANA', NULL, NULL, 'Kg', 0),
(52, 'GRAPPES', NULL, NULL, 'Kg', 0),
(53, 'MANGO', NULL, NULL, 'Kg', 0),
(54, 'PEAR', NULL, NULL, 'Kg', 0),
(55, 'COCONUT WATER', NULL, NULL, 'Kg', 0),
(56, 'KELA PATTA', NULL, NULL, 'UNIT', 0),
(57, 'MUSHROOM ', NULL, NULL, 'PACKET', 0),
(58, 'BESIL', NULL, NULL, 'GM', 0),
(59, 'PASIL', NULL, NULL, 'Kg', 0),
(60, 'RED SIMLA', NULL, NULL, 'Kg', 0),
(61, 'YELLOW SIMLA', NULL, NULL, 'Kg', 0),
(62, 'ZUCCHINI', NULL, NULL, 'Kg', 0),
(63, 'BABY CORN ', NULL, NULL, 'Kg', 0),
(64, 'AMERICAN CORN', NULL, NULL, 'Kg', 0),
(65, 'BROKLI', NULL, NULL, 'Kg', 0),
(66, 'ICEBERG', NULL, NULL, 'Kg', 0),
(67, 'CHERRY TOMATOES ', NULL, NULL, 'Kg', 0),
(68, 'RED KOBI', NULL, NULL, 'Kg', 0),
(69, 'RED CHILLI', NULL, NULL, 'Kg', 0),
(70, 'KOTHMIR', NULL, NULL, 'BUNDLE', 0),
(71, 'KADHI PATTA', NULL, NULL, 'Kg', 0),
(72, 'LIMBU', NULL, NULL, 'UNIT', 0),
(73, 'MULA', NULL, NULL, 'BUNDLE', 0),
(74, 'METHI', NULL, NULL, 'BUNDLE', 0),
(75, 'PUDINA', NULL, NULL, 'BUNDLE', 0),
(76, 'PALAK', NULL, NULL, 'BUNDLE', 0),
(77, 'SPRING ONIONS ', NULL, NULL, 'BUNDLE', 0),
(78, 'SALERY PATTA', NULL, NULL, 'BUNDLE', 0),
(79, 'SUVA BHAJI', NULL, NULL, 'BUNDLE', 0),
(80, 'SALAD PATTA', NULL, NULL, 'BUNDLE', 0),
(81, 'ALU PATTA', NULL, NULL, 'BUNDLE', 0),
(82, 'SARSO PATTA', NULL, NULL, 'BUNDLE', 0),
(83, 'CHAWLI PATTA', NULL, NULL, 'BUNDLE', 0),
(84, 'LAL MAAT ', NULL, NULL, 'BUNDLE', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `phone` varchar(256) NOT NULL,
  `email` varchar(256) DEFAULT NULL,
  `privilege` varchar(256) NOT NULL,
  `orgName` varchar(256) DEFAULT NULL,
  `status` int(12) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `phone`, `email`, `privilege`, `orgName`, `status`) VALUES
(19, 'karan', '$2a$10$Kt.zLq/qntiXWgcygLaQV.H5YaCqK3Hgap6PV5rXI7HVMbksOeZtG', '8169157715', 'karan2000patil@gmail.com', 'admin', 'M/s R. Thorve & Co.', 0),
(20, 'ambar', '$2a$10$./pmdYEv3VhnhAJJzL09vuhAKInWaERT6GfmVFXpDYcSMLuQCjRk2', '7977338720', 'ambarpatil1@gmail.com', 'asistant', NULL, 0),
(21, 'yash karaday', '$2a$10$q2N1wJqkUMPfkbkVksitveaFtGaoVhlb6vAQ03Kd1nqqtqcoPFfZu', '1234576890', NULL, 'asistant', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `vendor`
--

CREATE TABLE `vendor` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `gstin` varchar(256) DEFAULT NULL,
  `phone` varchar(256) NOT NULL,
  `status` int(12) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vendor`
--

INSERT INTO `vendor` (`id`, `name`, `email`, `gstin`, `phone`, `status`) VALUES
(1, 'Ram Singh', '', '', '9892841140', 0),
(2, 'Santosh Karale', '', '', '9892731113', 0),
(3, 'Bablu Bhaya', '', '', '', 0),
(4, 'Nana Zodge', '', '', '8369231588', 0),
(5, 'Inder Bhopla', '', '', '8691853823', 0),
(6, 'Guddu', '', '', '9975413885', 0),
(7, 'Sunil Kobi', '', '', '9398105665', 0),
(8, 'Singade Kakdi', '', '', '', 0),
(9, 'Bonya Mohite', '', '', '8425946880', 0),
(10, 'Usman Kadar', '', '', '9820421113', 0),
(11, 'Irshad Lassunwala', '', '', '', 0),
(12, 'Sonya Patil chiniz', '', '', '9833807478', 0),
(13, 'Raju Shelar', '', '', '9029422233', 0),
(14, 'Ikrambul 109', '', '', '9967788220', 0),
(15, 'Bablu Sukhdev Vaish Papai', '', '', '', 0),
(16, 'Anand Kothmir', '', '', '7888257582', 0),
(17, 'Kanse Limbu shafik', '', '', '7303069353', 0),
(18, 'Lambu Pale Bhaji', '', '', '7045058923', 0),
(19, 'Lambu kedar', '', '', '', 0),
(20, 'Rajkumar Tomato', '', '', '9167345736', 0),
(21, 'Popat Naikade', '', '', '9224286725', 0),
(22, 'Baba Kadipata', '', '', '', 0),
(23, 'Sai Labde Kadipata', '', '', '', 0),
(24, 'Sarpanch Bangali', '', '', '8355915501', 0),
(25, 'Abba Pawar Bhopla', '', '', '9967048288', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `expense`
--
ALTER TABLE `expense`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hotel`
--
ALTER TABLE `hotel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ordered_products`
--
ALTER TABLE `ordered_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendor`
--
ALTER TABLE `vendor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `expense`
--
ALTER TABLE `expense`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hotel`
--
ALTER TABLE `hotel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ordered_products`
--
ALTER TABLE `ordered_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `vendor`
--
ALTER TABLE `vendor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
