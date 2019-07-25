-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2018 at 11:46 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kependudukan`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `ID_Admin` varchar(7) NOT NULL,
  `Nama_Admin` varchar(255) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `No_HP` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`ID_Admin`, `Nama_Admin`, `Username`, `Email`, `Password`, `No_HP`) VALUES
('001', 'Dio', 'Hans', 'dioreyhans@gmail.com', '12345', '0818558992213'),
('002', 'Dinda', 'dindaadtm', 'gtw@gmail', '114114', '081803875877');

-- --------------------------------------------------------

--
-- Table structure for table `penduduk`
--

CREATE TABLE `penduduk` (
  `ID_Penduduk` varchar(7) NOT NULL,
  `Nama_Penduduk` varchar(255) NOT NULL,
  `Alamat` varchar(255) NOT NULL,
  `No_HP` varchar(255) NOT NULL,
  `Jenis_Kelamin` varchar(2) NOT NULL,
  `Gaji` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `penduduk`
--

INSERT INTO `penduduk` (`ID_Penduduk`, `Nama_Penduduk`, `Alamat`, `No_HP`, `Jenis_Kelamin`, `Gaji`) VALUES
('20', 'Mashudi', 'jl opoop', '0828712789', 'L', 9000000),
('99', 'Jati Nugroho', 'Jl Veteran', '0819028716', 'L', 5000000);

-- --------------------------------------------------------

--
-- Table structure for table `surat`
--

CREATE TABLE `surat` (
  `ID_Surat` varchar(7) NOT NULL,
  `ID_Penduduk` varchar(7) NOT NULL,
  `ID_Admin` varchar(7) NOT NULL,
  `Ket_Surat` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `surat`
--

INSERT INTO `surat` (`ID_Surat`, `ID_Penduduk`, `ID_Admin`, `Ket_Surat`) VALUES
('21', '20', '001', 'pppp'),
('3', '20', '002', 'Surat Nikah'),
('78', '99', '002', 'Surat Pindahan Rumah'),
('88', '11', '001', 'apasi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ID_Admin`),
  ADD UNIQUE KEY `Username` (`Username`);

--
-- Indexes for table `penduduk`
--
ALTER TABLE `penduduk`
  ADD PRIMARY KEY (`ID_Penduduk`);

--
-- Indexes for table `surat`
--
ALTER TABLE `surat`
  ADD PRIMARY KEY (`ID_Surat`),
  ADD KEY `ID_Penduduk` (`ID_Penduduk`),
  ADD KEY `surat_ibfk_1` (`ID_Admin`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `surat`
--
ALTER TABLE `surat`
  ADD CONSTRAINT `surat_ibfk_1` FOREIGN KEY (`ID_Admin`) REFERENCES `admin` (`ID_Admin`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
