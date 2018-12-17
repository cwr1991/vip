# Host: localhost  (Version: 5.5.53)
# Date: 2018-12-17 13:52:35
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "usertable"
#

DROP TABLE IF EXISTS `usertable`;
CREATE TABLE `usertable` (
  `username` varchar(11) NOT NULL DEFAULT '',
  `userpass` varchar(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "usertable"
#

/*!40000 ALTER TABLE `usertable` DISABLE KEYS */;
INSERT INTO `usertable` VALUES ('13112345678','123456'),('13412345678','000000'),('13991729667','789123'),('15291676095','123456'),('18758175817','123456789');
/*!40000 ALTER TABLE `usertable` ENABLE KEYS */;
