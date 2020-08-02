-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 02, 2020 at 01:47 AM
-- Server version: 10.3.23-MariaDB
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
  `amount` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `expense`
--

INSERT INTO `expense` (`id`, `name`, `discription`, `date`, `amount`) VALUES
(5, 'asef', 'esf', '2020-08-27', '233'),
(6, 'dwq', 'awefew', '2020-08-26', '400'),
(7, 'sef', 'wfe', '2020-08-25', '200');

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
(1, 'Ashton Hodges', 'tuwafaruk@mailinator.com', 'Dolor voluptate qui ', '9892440891', 0),
(2, 'ambar patil', 'yash@daxxy.in', '1H53Y', '9892440445', 0),
(3, 'Indigo Church', 'typywe@mailinator.com', 'Tempor id consequatu', '8169157715', 1),
(4, 'Peter Stark', 'zajanyfop@mailinator.com', 'Dolorem error aliqua', '8169157712', 0),
(5, 'Kamal Dotson', 'jyvecutes@mailinator.com', 'Possimus est quas d', '8169157713', 0);

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
  `paid_amount` varchar(256) DEFAULT NULL,
  `TotalPrice` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id`, `u_id`, `ref_id`, `status`, `type`, `date`, `paid_amount`, `TotalPrice`) VALUES
(2, 19, 11, 0, 0, '2020-07-05 11:04:13.793', NULL, NULL),
(7, 19, 16, 0, 0, '2020-07-10 10:20:17.249', NULL, NULL),
(8, 19, 17, 0, 0, '2020-07-10 10:31:51.233', NULL, NULL),
(9, 19, 18, 0, 0, '2020-07-10 10:59:23.364', NULL, NULL),
(11, 19, 20, 0, 0, '2020-07-27 16:10:46.706', NULL, NULL),
(12, 19, 21, 0, 0, '2020-07-27 18:46:45.891', NULL, 150),
(13, 19, 22, 0, 0, '2020-07-27 18:47:21.523', NULL, NULL),
(14, 19, 23, 0, 0, '2020-07-27 20:39:39.465', NULL, NULL),
(15, 19, 24, 0, 0, '2020-07-28 12:02:59.282', NULL, NULL),
(16, 19, 25, 0, 0, '2020-07-28 12:22:32.203', NULL, NULL),
(17, 19, 26, 0, 0, '2020-07-28 17:04:31.839', NULL, NULL),
(18, 19, 27, 0, 0, '2020-07-28 17:04:51.810', NULL, NULL),
(19, 19, 28, 0, 0, '2020-07-29 20:38:19.812', NULL, NULL),
(20, 19, 29, 0, 0, '2020-07-29 20:42:18.834', NULL, NULL),
(21, 19, 30, 0, 0, '2020-07-29 21:17:20.622', NULL, NULL),
(22, 19, 31, 0, 1, '2020-07-31 11:14:31.523', NULL, NULL),
(23, 19, 32, 0, 1, '2020-07-31 12:34:48.823', NULL, NULL),
(24, 19, 33, 0, 1, '2020-07-31 12:36:13.688', NULL, 123),
(25, 19, 34, 0, 0, '2020-07-31 18:30:09.466', NULL, NULL),
(26, 19, 35, 0, 0, '2020-07-31 18:37:02.923', NULL, NULL),
(27, 19, 36, 0, 0, '2020-07-31 18:37:35.080', NULL, NULL),
(28, 19, 37, 0, 0, '2020-07-31 18:47:11.091', NULL, NULL),
(29, 19, 38, 0, 0, '2020-07-31 20:14:16.250', NULL, NULL),
(30, 19, 39, 0, 1, '2020-08-01 10:41:22.288', NULL, NULL),
(31, 19, 40, 0, 0, '2020-08-01 10:46:22.443', NULL, 30),
(32, 19, 41, 0, 0, '2020-08-01 10:49:00.540', NULL, 30),
(33, 19, 42, 0, 0, '2020-08-01 10:58:27.640', NULL, 36),
(34, 19, 43, 0, 0, '2020-08-01 11:00:30.323', NULL, 40),
(35, 19, 44, 0, 0, '2020-08-01 11:02:00.634', NULL, 200),
(36, 19, 45, 0, 1, '2020-08-01 11:20:55.746', NULL, 200),
(41, 19, 7, 2, 2, '2020-08-01 23:22:05', '200', 200);

-- --------------------------------------------------------

--
-- Table structure for table `ordered_products`
--

CREATE TABLE `ordered_products` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `p_id` int(11) NOT NULL,
  `quantity` varchar(256) NOT NULL,
  `price` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ordered_products`
--

INSERT INTO `ordered_products` (`id`, `order_id`, `p_id`, `quantity`, `price`) VALUES
(11, 11, 1, '12', '1200'),
(12, 11, 1, '12', '1200'),
(13, 11, 1, '12', '1200'),
(32, 20, 1, '100', '100'),
(34, 22, 3, '100', '10'),
(42, 23, 3, '12', '12'),
(43, 23, 1, '10', '100'),
(45, 17, 1, '12', '45'),
(46, 24, 1, '12', '12'),
(47, 25, 3, '1', '100'),
(48, 25, 1, '22', '100'),
(49, 26, 4, '1', '20'),
(50, 26, 1, '10', '600'),
(51, 27, 3, '1', '12'),
(61, 28, 1, '122', '1111'),
(62, 29, 3, '12', ''),
(63, 29, 1, '10', ''),
(67, 30, 3, '12', ''),
(68, 30, 1, '12', ''),
(73, 31, 3, '1', '211'),
(74, 31, 1, '1', '100'),
(75, 32, 3, '12', '11'),
(76, 32, 1, '12', '11'),
(78, 34, 19, '12', '11'),
(79, 35, 18, '12', '111'),
(82, 37, 19, '12', '1001'),
(83, 36, 1, '11', '10'),
(87, 38, 18, '12', '12123'),
(88, 38, 4, '12', '13123'),
(89, 38, 1, '12', '1323'),
(90, 39, 4, '12', '111'),
(91, 39, 1, '12', '12'),
(92, 40, 18, '12', '10'),
(93, 40, 4, '11', '10'),
(94, 40, 1, '12', '10'),
(95, 41, 18, '1', '10'),
(96, 41, 4, '12', '10'),
(97, 41, 1, '1', '10'),
(98, 42, 18, '1', '12'),
(99, 42, 4, '1', '12'),
(100, 42, 1, '12', '12'),
(101, 43, 4, '1', '20'),
(102, 43, 1, '12', '20'),
(103, 44, 18, '3', '50'),
(104, 44, 4, '2', '50'),
(105, 44, 1, '1', '100'),
(106, 21, 4, '12', '10'),
(107, 21, 3, '12', '10'),
(108, 21, 1, '10', '130'),
(109, 45, 4, '1', '100'),
(110, 45, 1, '1', '100'),
(111, 33, 4, '12', '12'),
(112, 33, 1, '12', '111');

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
(12, 19, 1, 'HOTEL', '2020-07-30', 0),
(13, 19, 2, 'HOTEL', '2020-07-10', 0),
(14, 19, 1, 'HOTEL', '2020-07-10', 0),
(15, 19, 1, 'HOTEL', '2020-07-10', 0),
(16, 19, 2, 'HOTEL', '2020-07-11', 0),
(17, 19, 1, 'HOTEL', '2020-07-12', 1),
(18, 19, 1, 'HOTEL', '2020-07-13', 0),
(20, 19, 0, 'HOTEL', '2020-07-28', 0),
(21, 19, 2, 'HOTEL', '2020-07-15', 0),
(22, 19, 1, 'HOTEL', '2020-07-30', 0),
(23, 19, 1, 'HOTEL', '2020-07-28', 0),
(24, 19, 2, 'HOTEL', '2020-07-29', 1),
(25, 19, 1, 'HOTEL', '2020-08-12', 1),
(26, 19, 2, 'HOTEL', '2020-07-15', 0),
(27, 19, 1, 'HOTEL', '2020-07-15', 0),
(28, 19, 2, 'HOTEL', '2020-07-22', 0),
(29, 19, 2, 'HOTEL', '2020-07-22', 0),
(30, 19, 1, 'HOTEL', '2020-08-02', 0),
(31, 19, 1, 'VENDOR', '2020-07-14', 1),
(32, 19, 3, 'VENDOR', '2020-07-31', 1),
(33, 19, 3, 'VENDOR', '2020-07-31', 0),
(34, 19, 2, 'HOTEL', '2020-07-15', 0),
(35, 19, 2, 'HOTEL', '2020-07-15', 0),
(36, 19, 2, 'HOTEL', '2020-07-15', 0),
(37, 19, 2, 'HOTEL', '2020-07-15', 0),
(38, 19, 3, 'VENDOR', '2020-07-31', 0),
(39, 19, 1, 'VENDOR', '2020-08-31', 0),
(40, 19, 2, 'HOTEL', '2020-08-31', 0),
(41, 19, 2, 'HOTEL', '', 0),
(42, 19, 2, 'HOTEL', '2020-08-18', 0),
(43, 19, 2, 'HOTEL', '2020-08-14', 0),
(44, 19, 2, 'HOTEL', '2020-08-04', 0),
(45, 19, 3, 'VENDOR', '2020-08-05', 0);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(256) CHARACTER SET utf8 DEFAULT NULL,
  `marathi` varchar(256) CHARACTER SET utf8 NOT NULL,
  `hindi` varchar(256) CHARACTER SET utf8 NOT NULL,
  `weight_type` varchar(256) NOT NULL,
  `status` int(12) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `marathi`, `hindi`, `weight_type`, `status`) VALUES
(1, 'Onion', 'कांदा', 'कांदा', 'Kg', 0),
(2, ' green beans', 'फरसबी', 'फरसबी', 'Kg', 1),
(3, 'Aubergine', 'वांगे', 'वांगे', 'KG', 1),
(4, 'Banana', 'केळी', 'केळी', 'dozen', 0),
(18, 'Lemon', 'लिंबू ', 'लिंबू ', 'units', 0),
(19, 'Bitter gourd 	', 'कारले 	', 'कारले 	', 'Kg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `phone` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `privilege` varchar(256) NOT NULL,
  `status` int(12) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `phone`, `email`, `privilege`, `status`) VALUES
(19, 'karan', '$2a$10$Kt.zLq/qntiXWgcygLaQV.H5YaCqK3Hgap6PV5rXI7HVMbksOeZtG', '8169157715', 'karan2000patil@gmail.com', 'admin', 0),
(20, 'ambar', '$2a$10$2yIdVmLX/.4RC/.loadOp.EOgWUQJ.r8NE.6CWcTwWItvSUy7wNd2', '7977338720', 'ambarpatil1@gmail.com', 'asistant', 0);

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
(1, 'Ashton Hodges', 'tuwafaruk@mailinator.com', 'Dolor voluptate qui ', '9892440891', 0),
(2, 'Christen Browning', 'pyzusugim@mailinator.com', 'Et quo tempor deseru', '9832723762', 1),
(3, 'Neve Wilkerson', 'bywu@mailinator.com', 'Autem sapiente unde ', '8169157715', 0);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `hotel`
--
ALTER TABLE `hotel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `ordered_products`
--
ALTER TABLE `ordered_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `vendor`
--
ALTER TABLE `vendor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
