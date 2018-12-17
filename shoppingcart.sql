# Host: localhost  (Version: 5.5.53)
# Date: 2018-12-17 13:51:57
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "shoppingcart"
#

DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE `shoppingcart` (
  `vipName` varchar(100) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
INSERT INTO `shoppingcart` VALUES ('2018冬季纯色双面','20181213',4),('2018冬季纯色双面呢男装羊毛大衣西装领毛呢大衣男商务休闲男装毛呢大衣男士大衣','20181213',6);
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;
