-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 25, 2020 at 03:02 AM
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

--
-- Dumping data for table `expense`
--

INSERT INTO `expense` (`id`, `name`, `discription`, `date`, `amount`, `status`) VALUES
(15, 'rent', 'office', '1111-11-11', '1e22', 1),
(16, 'assistant', 'salary', '2000-07-01', '12000', 2),
(17, 'Rent', 'Room Rent', '2020-10-26', '30000', 2),
(18, 'salary', 'sahil ', '2020-11-18', '400', 2),
(19, 'kajal rent', 'asd', '2020-11-20', '4000', 2),
(20, 'hjwfa', 'fawe', '2020-11-20', '50000', 0);

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
(7, 'asdfghjk', 'wertyuio@as', 'asdfghjklq', '1234567890', 0),
(8, 'karan', 'qisa@d', 'sdfghjkl;', '1213141516', 0),
(9, 'Love it restarunt', 'admin@elgaar.com', '', '1234554446', 0),
(10, 'Sahil Thorve ', '', '', '1244355452', 0),
(11, 'aefws', 'karade.yash786@gmail.com', 'asrf', '1244576890', 0),
(12, 'afdfg', 'kp@awef.com', 'dgrgr', '1294355452', 0),
(13, 'ads', '', '', '9892440419', 0);

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
  `TotalPrice` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id`, `u_id`, `ref_id`, `status`, `type`, `date`, `paid_amount`, `TotalPrice`) VALUES
(1, 19, 1, 0, 0, '2020-11-21 07:14:42.115', '0', 0),
(2, 19, 2, 0, 0, '2020-11-21 07:15:02.770', '0', 430),
(3, 19, 3, 1, 0, '2020-11-21 07:15:47.387', '400', 432),
(4, 19, 4, 0, 0, '2020-11-21 07:16:01.504', '0', 0),
(5, 19, 5, 0, 0, '2020-11-21 07:24:26.663', '0', 0),
(6, 19, 6, 0, 0, '2020-11-21 07:25:15.896', '0', 0),
(7, 19, 7, 0, 0, '2020-11-21 07:28:01.332', '0', 0),
(8, 19, 8, 0, 0, '2020-11-21 07:28:20.675', '0', 0),
(9, 19, 9, 0, 0, '2020-11-21 07:28:30.777', '0', 0),
(10, 19, 10, 0, 1, '2020-11-21 07:32:57.184', '0', 0),
(11, 19, 11, 2, 1, '2020-11-21 07:33:28.440', '252', 252),
(12, 19, 12, 2, 0, '2020-11-21 07:33:43.634', '735', 735),
(13, 19, 13, 0, 0, '2020-11-21 07:34:01.848', '0', 696),
(14, 19, 14, 0, 0, '2020-11-21 07:34:15.217', '0', 672),
(15, 19, 15, 1, 0, '2020-11-21 12:04:38.359', '150', 313),
(16, 19, 16, 0, 0, '2020-11-21 12:04:38.978', '0', 0),
(17, 19, 17, 2, 1, '2020-11-21 12:33:31.825', '5200', 5350),
(18, 19, 18, 0, 0, '2020-11-25 07:11:33.209', '0', 13),
(19, 19, 19, 0, 0, '2020-11-25 09:45:29.197', '0', 600),
(20, 19, 20, 0, 1, '2020-11-25 09:50:35.282', '0', 600);

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
(1, 1, 22, '12', '0', NULL),
(2, 1, 21, '21', '0', NULL),
(3, 2, 23, '2', '30', NULL),
(4, 2, 22, '12', '360', NULL),
(5, 2, 21, '2', '40', NULL),
(6, 3, 24, '12', '144', NULL),
(7, 3, 23, '12', '144', NULL),
(8, 3, 22, '12', '144', NULL),
(9, 8, 22, '21', '0', NULL),
(10, 11, 22, '12', '252', NULL),
(11, 11, 21, '21', '0', NULL),
(19, 12, 21, '21', '483', NULL),
(20, 12, 22, '21', '252', NULL),
(21, 13, 21, '12', '276', NULL),
(22, 13, 22, '12', '420', NULL),
(23, 14, 22, '12', '240', NULL),
(24, 14, 23, '12', '228', NULL),
(25, 14, 25, '12', '204', NULL),
(31, 16, 25, '60', '0', NULL),
(32, 16, 24, '5', '0', NULL),
(33, 16, 23, '1.5', '0', NULL),
(34, 16, 22, '0.5', '0', NULL),
(35, 16, 21, '0.2', '0', NULL),
(66, 15, 25, '60', '180', NULL),
(67, 15, 24, '5', '100', NULL),
(68, 15, 23, '1.50', '15', NULL),
(69, 15, 22, '0.50', '15', NULL),
(70, 15, 21, '0.25', '2.5', NULL),
(71, 17, 22, '12', '1200', NULL),
(72, 17, 21, '20.75', '4150', NULL),
(73, 17, 23, '21.50', '0', NULL),
(74, 18, 22, '2.50', '12.5', NULL),
(75, 19, 22, '12', '600', 50),
(76, 20, 22, '12', '600', 50);

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
(1, 19, 8, 'HOTEL', '21-11-2020', 0),
(2, 19, 9, 'HOTEL', '21-11-2020', 0),
(3, 19, 10, 'HOTEL', '21-11-2020', 0),
(4, 19, 9, 'HOTEL', '21-11-2020', 0),
(5, 19, 8, 'HOTEL', '21-11-2020', 0),
(6, 19, 8, 'HOTEL', '21-11-2020', 0),
(8, 19, 7, 'HOTEL', '21-11-2020', 0),
(11, 19, 4, 'VENDOR', '02-11-2020', 0),
(12, 19, 8, 'HOTEL', '02-11-2020', 0),
(13, 19, 8, 'HOTEL', '04-11-2020', 0),
(14, 19, 8, 'HOTEL', '06-11-2020', 0),
(15, 19, 10, 'HOTEL', '22-11-2020', 0),
(16, 19, 10, 'HOTEL', '21-11-2020', 1),
(17, 19, 5, 'VENDOR', '22-11-2020', 0),
(18, 19, 7, 'HOTEL', '25-11-2020', 0),
(19, 19, 8, 'HOTEL', '26-11-2020', 0),
(20, 19, 4, 'VENDOR', '26-11-2020', 0);

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
(1, 'Onion', 'कांदा', 'कांदा', 'Kg', 1),
(2, ' green beans', 'फरसबी', 'फरसबी', 'Kg', 1),
(3, 'Aubergine', 'वांगे', 'वांगे', 'KG', 1),
(4, 'Banana', 'केळी', 'केळी', 'dozen', 1),
(18, 'Lemon', 'लिंबू ', 'लिंबू ', 'units', 1),
(19, 'Bitter gourd 	', 'कारले 	', 'कारले 	', 'Kg', 1),
(20, 'potato', 'aalo', 'aalo', 'ksjdfhd', 1),
(21, 'Onion', 'kaanda', 'kaanda', 'Kg', 0),
(22, 'potato', 'aloo', 'aloo', 'kg', 0),
(23, 'Okra', 'भेंडी ', 'भेंडी ', 'KG', 0),
(24, 'Beans ', NULL, NULL, 'Kg', 0),
(25, 'Lemon', 'Lemon', 'Lemon', 'Dozen', 0),
(26, 'as', 'undefined', 'undefined', 'Kg', 1);

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
(4, 'yash karade', 'sdfghj@asdf', '67890dg', '1234567890', 0),
(5, 'ishita joshi', 'adsfdgfhg@fg', 'asdfghjkl;xsdc', '987654320', 0),
(6, 'karan patil 2', 'kara@fmf.com', '', '1234554446', 0),
(7, 'Laura Carpenter', 'mumuvupym@mailinator.com', '', '1277173773', 0),
(8, 'asfe', '', '', '1244576890', 1);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `hotel`
--
ALTER TABLE `hotel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `ordered_products`
--
ALTER TABLE `ordered_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `vendor`
--
ALTER TABLE `vendor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
