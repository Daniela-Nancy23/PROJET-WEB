-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 12 mars 2024 à 12:00
-- Version du serveur : 8.0.27
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `projet_web`
--

-- --------------------------------------------------------

--
-- Structure de la table `boite_idee`
--

DROP TABLE IF EXISTS `boite_idee`;
CREATE TABLE IF NOT EXISTS `boite_idee` (
  `id_idee` int NOT NULL AUTO_INCREMENT,
  `id_etudiant` int NOT NULL,
  `nbr_vote` int NOT NULL,
  `idee` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id_idee`),
  KEY `id_etudiant` (`id_etudiant`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
CREATE TABLE IF NOT EXISTS `categorie` (
  `id_categorie` int NOT NULL AUTO_INCREMENT,
  `id_menbreBDE` int NOT NULL,
  `nom` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_categorie`),
  KEY `id_menbreBDE` (`id_menbreBDE`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

DROP TABLE IF EXISTS `commande`;
CREATE TABLE IF NOT EXISTS `commande` (
  `id_commande` int NOT NULL AUTO_INCREMENT,
  `id_etudiant` int NOT NULL,
  `id_produit` int NOT NULL,
  `nom` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id_commande`),
  KEY `id_etudiant` (`id_etudiant`),
  KEY `id_produit` (`id_produit`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `commentaire_evenement`
--

DROP TABLE IF EXISTS `commentaire_evenement`;
CREATE TABLE IF NOT EXISTS `commentaire_evenement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_manifestation` int NOT NULL,
  `id_etudiant` int NOT NULL,
  `commentaire` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_manifestation` (`id_manifestation`),
  KEY `id_etudiant` (`id_etudiant`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `etudiant`
--

DROP TABLE IF EXISTS `etudiant`;
CREATE TABLE IF NOT EXISTS `etudiant` (
  `email` varchar(40) NOT NULL,
  `nom` varchar(40) NOT NULL,
  `prenom` varchar(40) NOT NULL,
  `localisation` varchar(40) NOT NULL,
  `motDePasse` varchar(16) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `etudiant`
--

INSERT INTO `etudiant` (`email`, `nom`, `prenom`, `localisation`, `motDePasse`, `createdAt`, `updatedAt`) VALUES
('lionelyouassa695@gmail.com', 'YOUASSA YOUASSA', 'Lionel Junior', 'Bonaberi', '777', '2024-03-10 08:38:14', '2024-03-10 08:38:14');

-- --------------------------------------------------------

--
-- Structure de la table `evenement_passer`
--

DROP TABLE IF EXISTS `evenement_passer`;
CREATE TABLE IF NOT EXISTS `evenement_passer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_manifestation` int NOT NULL,
  `date_debut` date DEFAULT NULL,
  `date_fin` date DEFAULT NULL,
  `id_etudiant` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_manifestation` (`id_manifestation`),
  KEY `id_etudiant` (`id_etudiant`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `like_evenement`
--

DROP TABLE IF EXISTS `like_evenement`;
CREATE TABLE IF NOT EXISTS `like_evenement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_manifestation` int NOT NULL,
  `id_etudiant` int NOT NULL,
  `liker` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `id_manifestation` (`id_manifestation`),
  KEY `id_etudiant` (`id_etudiant`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `manifestation`
--

DROP TABLE IF EXISTS `manifestation`;
CREATE TABLE IF NOT EXISTS `manifestation` (
  `id_manifestation` int NOT NULL,
  `id_menbreBDE` int NOT NULL,
  `nom` varchar(40) NOT NULL,
  `description` varchar(40) NOT NULL,
  `image` varchar(40) NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `payant` tinyint(1) DEFAULT '0',
  `recurrente` tinyint(1) DEFAULT '0',
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_manifestation`),
  KEY `id_menbreBDE` (`id_menbreBDE`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `menbrebde`
--

DROP TABLE IF EXISTS `menbrebde`;
CREATE TABLE IF NOT EXISTS `menbrebde` (
  `email` varchar(40) NOT NULL,
  `nom` varchar(40) NOT NULL,
  `prenom` varchar(40) NOT NULL,
  `localisation` varchar(40) NOT NULL,
  `motDePasse` varchar(40) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `menbrebde`
--

INSERT INTO `menbrebde` (`email`, `nom`, `prenom`, `localisation`, `motDePasse`, `createdAt`, `updatedAt`) VALUES
('lionelyouassa695@gmail.com', 'YOUASSA YOUASSA', 'Lionel Junior', 'Bonaberi', '888', '2024-03-10 09:06:14', '2024-03-10 09:06:14'),
('Daniele@gmail.com', 'YOUMBI CHATUE', 'Daniele', 'Tchand', '777', '2024-03-10 09:08:43', '2024-03-10 09:08:43');

-- --------------------------------------------------------

--
-- Structure de la table `photo_evenement`
--

DROP TABLE IF EXISTS `photo_evenement`;
CREATE TABLE IF NOT EXISTS `photo_evenement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_manifestation` int NOT NULL,
  `id_etudiant` int NOT NULL,
  `image` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_manifestation` (`id_manifestation`),
  KEY `id_etudiant` (`id_etudiant`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

DROP TABLE IF EXISTS `produit`;
CREATE TABLE IF NOT EXISTS `produit` (
  `id_produit` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(30) NOT NULL,
  `description` varchar(40) NOT NULL,
  `prix` int NOT NULL,
  `categorie` varchar(30) NOT NULL,
  `image` varchar(40) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `id_menbrebde` int DEFAULT NULL,
  PRIMARY KEY (`id_produit`),
  KEY `id_menbrebde` (`id_menbrebde`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `produit`
--

INSERT INTO `produit` (`id_produit`, `nom`, `description`, `prix`, `categorie`, `image`, `createdAt`, `updatedAt`, `id_menbrebde`) VALUES
(7, 'Jordan', 'by mikel Jordan', 15000, 'chaussure de sport', 'nike.png', '2024-03-10 08:35:45', '2024-03-10 08:35:45', NULL),
(8, 'Aire-force-one', 'by mikel Jordan', 15000, 'chaussure de luxe', 'Aire-force-one.png', '2024-03-10 08:37:11', '2024-03-10 08:37:11', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `salariercesi`
--

DROP TABLE IF EXISTS `salariercesi`;
CREATE TABLE IF NOT EXISTS `salariercesi` (
  `email` varchar(40) NOT NULL,
  `nom` varchar(40) NOT NULL,
  `prenom` varchar(40) NOT NULL,
  `localisation` varchar(40) NOT NULL,
  `motDePasse` varchar(40) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `salariercesi`
--

INSERT INTO `salariercesi` (`email`, `nom`, `prenom`, `localisation`, `motDePasse`, `createdAt`, `updatedAt`) VALUES
('Yoan@gmail.com', 'DJOUMLA', 'Yoan', 'Douala', '555', '2024-03-10 09:38:17', '2024-03-10 09:38:17');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
