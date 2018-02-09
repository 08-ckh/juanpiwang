/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : juanpi

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 16:48:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=85 DEFAULT CHARSET=latin1 COLLATE=latin1_german1_ci;

-- ----------------------------
-- Records of accounts
-- ----------------------------
INSERT INTO `accounts` VALUES ('1', '13877318902', '123456');
INSERT INTO `accounts` VALUES ('2', '3132', '3213');
INSERT INTO `accounts` VALUES ('3', '12', '12');
INSERT INTO `accounts` VALUES ('4', '321', '32');
INSERT INTO `accounts` VALUES ('5', '321', '321');
INSERT INTO `accounts` VALUES ('6', 'dsadsadadda', '32ce6e201052b7ba6415a710054368c7');
INSERT INTO `accounts` VALUES ('58', '3', '3');
INSERT INTO `accounts` VALUES ('59', '3', '3');
INSERT INTO `accounts` VALUES ('60', '133212322222', 'd85fe1450102fe5fdd009125cec337cc');
INSERT INTO `accounts` VALUES ('61', '111111214312415', '39c2d7f5f340419e90c5ebe4928e24f5');
INSERT INTO `accounts` VALUES ('62', '', 'd41d8cd98f00b204e9800998ecf8427e');
INSERT INTO `accounts` VALUES ('63', '倒萨大大撒大', '2bd45aefb65171dff3abe3bc5b6ddf49');
INSERT INTO `accounts` VALUES ('64', '从现在从现在才', '068aea5dac2010352c03b40b41a1b25a');
INSERT INTO `accounts` VALUES ('65', '谁打啊打', 'bede0655294e256cd3b3e5aa29cf759c');

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` varchar(255) CHARACTER SET utf8 NOT NULL,
  `number` varchar(255) CHARACTER SET utf8 NOT NULL,
  `subtotal` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of car
-- ----------------------------

-- ----------------------------
-- Table structure for commodity
-- ----------------------------
DROP TABLE IF EXISTS `commodity`;
CREATE TABLE `commodity` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '漂亮的',
  `price` varchar(255) CHARACTER SET utf8 NOT NULL,
  `discount` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '388',
  `picture` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT 'img/merchandise/6.jpg',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=91 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of commodity
-- ----------------------------
INSERT INTO `commodity` VALUES ('1', '夏日女装', '188', '18', 'merchandise/1.jpg');
INSERT INTO `commodity` VALUES ('2', '儿童装', '199', '19', 'merchandise/2.jpg');
INSERT INTO `commodity` VALUES ('3', '美丽衣服', '288', '28', 'merchandise/3.jpg');
INSERT INTO `commodity` VALUES ('4', '漂亮小姐', '321', '32', 'merchandise/5.jpg');
INSERT INTO `commodity` VALUES ('5', '可爱孩子', '423', '43', 'merchandise/6.jpg');
INSERT INTO `commodity` VALUES ('6', '夏日泳装', '432', '54', 'merchandise/7.jpg');
INSERT INTO `commodity` VALUES ('7', '夏天短袖', '765', '65', 'merchandise/8.jpg');
INSERT INTO `commodity` VALUES ('8', '露背装', '145', '76', 'merchandise/9.jpg');
INSERT INTO `commodity` VALUES ('9', '喇叭裤', '321', '98', 'merchandise/10.jpg');
INSERT INTO `commodity` VALUES ('10', '貂皮大衣', '344', '32', 'merchandise/11.jpg');
INSERT INTO `commodity` VALUES ('11', '九分裤', '453', '43', 'merchandise/12.jpg');
INSERT INTO `commodity` VALUES ('12', '七分裤', '432', '54', 'merchandise/13.jpg');
INSERT INTO `commodity` VALUES ('13', '棕色毛衣', '145', '65', 'merchandise/14.jpg');
INSERT INTO `commodity` VALUES ('14', '毛裤漂亮的', '321', '32', 'merchandise/15.jpg');
INSERT INTO `commodity` VALUES ('15', '西裤好好看', '154', '33', 'merchandise/16.jpg');
INSERT INTO `commodity` VALUES ('16', '裤装短裤', '165', '54', 'merchandise/17.jpg');
INSERT INTO `commodity` VALUES ('17', '短袖拉风', '142', '65', 'merchandise/18.jpg');
INSERT INTO `commodity` VALUES ('18', '高帮鞋', '125', '32', 'merchandise/18.jpg');
INSERT INTO `commodity` VALUES ('19', '舒服的运动鞋', '164', '45', 'merchandise/19.jpg');
INSERT INTO `commodity` VALUES ('20', '莱克拉迪', '434', '32', 'merchandise/20.jpg');
INSERT INTO `commodity` VALUES ('21', '克拉迈尔', '432', '21', 'merchandise/21.jpg');
INSERT INTO `commodity` VALUES ('22', '罗布斯基', '432', '21', 'merchandise/22.jpg');
INSERT INTO `commodity` VALUES ('23', '马咋黑', '543', '21', 'merchandise/23.jpg');
INSERT INTO `commodity` VALUES ('24', '漂亮的小姐姐', '654', '43', 'merchandise/24.jpg');
INSERT INTO `commodity` VALUES ('25', '帅气的小男孩', '321', '22', 'merchandise/25.jpg');
INSERT INTO `commodity` VALUES ('26', '性感的女士', '234', '32', 'merchandise/26.jpg');
INSERT INTO `commodity` VALUES ('27', '漂亮的棉衣', '543', '65', 'merchandise/27.jpg');
INSERT INTO `commodity` VALUES ('28', '漂亮的风衣', '456', '32', 'merchandise/28.jpg');
INSERT INTO `commodity` VALUES ('29', '卡伦裤', '654', '54', 'merchandise/29.jpg');
INSERT INTO `commodity` VALUES ('30', '麦哲伦系列', '675', '54', 'merchandise/30.jpg');
INSERT INTO `commodity` VALUES ('31', '夏日女装', '188', '18', 'merchandise/1.jpg');
INSERT INTO `commodity` VALUES ('32', '儿童装', '199', '19', 'merchandise/2.jpg');
INSERT INTO `commodity` VALUES ('33', '美丽衣服', '288', '28', 'merchandise/3.jpg');
INSERT INTO `commodity` VALUES ('34', '漂亮小姐', '321', '32', 'merchandise/5.jpg');
INSERT INTO `commodity` VALUES ('35', '可爱孩子', '423', '43', 'merchandise/6.jpg');
INSERT INTO `commodity` VALUES ('36', '夏日泳装', '432', '54', 'merchandise/7.jpg');
INSERT INTO `commodity` VALUES ('37', '夏天短袖', '765', '65', 'merchandise/8.jpg');
INSERT INTO `commodity` VALUES ('38', '露背装', '145', '76', 'merchandise/9.jpg');
INSERT INTO `commodity` VALUES ('39', '喇叭裤', '321', '98', 'merchandise/10.jpg');
INSERT INTO `commodity` VALUES ('40', '貂皮大衣', '344', '32', 'merchandise/11.jpg');
INSERT INTO `commodity` VALUES ('41', '九分裤', '453', '43', 'merchandise/12.jpg');
INSERT INTO `commodity` VALUES ('42', '七分裤', '432', '54', 'merchandise/13.jpg');
INSERT INTO `commodity` VALUES ('43', '棕色毛衣', '145', '65', 'merchandise/14.jpg');
INSERT INTO `commodity` VALUES ('44', '毛裤漂亮的', '321', '32', 'merchandise/15.jpg');
INSERT INTO `commodity` VALUES ('45', '西裤好好看', '154', '33', 'merchandise/16.jpg');
INSERT INTO `commodity` VALUES ('46', '裤装短裤', '165', '54', 'merchandise/17.jpg');
INSERT INTO `commodity` VALUES ('47', '短袖拉风', '142', '65', 'merchandise/18.jpg');
INSERT INTO `commodity` VALUES ('48', '高帮鞋', '125', '32', 'merchandise/18.jpg');
INSERT INTO `commodity` VALUES ('49', '舒服的运动鞋', '164', '45', 'merchandise/19.jpg');
INSERT INTO `commodity` VALUES ('50', '麦哲伦系列', '675', '54', 'merchandise/30.jpg');
INSERT INTO `commodity` VALUES ('51', '克拉迈尔', '432', '21', 'merchandise/21.jpg');
INSERT INTO `commodity` VALUES ('52', '罗布斯基', '432', '21', 'merchandise/22.jpg');
INSERT INTO `commodity` VALUES ('53', '马咋黑', '543', '21', 'merchandise/23.jpg');
INSERT INTO `commodity` VALUES ('54', '漂亮的小姐姐', '654', '43', 'merchandise/24.jpg');
INSERT INTO `commodity` VALUES ('55', '帅气的小男孩', '321', '22', 'merchandise/25.jpg');
INSERT INTO `commodity` VALUES ('56', '性感的女士', '234', '32', 'merchandise/26.jpg');
INSERT INTO `commodity` VALUES ('57', '漂亮的棉衣', '543', '65', 'merchandise/27.jpg');
INSERT INTO `commodity` VALUES ('58', '漂亮的风衣', '456', '32', 'merchandise/28.jpg');
INSERT INTO `commodity` VALUES ('59', '卡伦裤', '654', '54', 'merchandise/29.jpg');
INSERT INTO `commodity` VALUES ('61', '夏日女装', '188', '18', 'merchandise/1.jpg');
INSERT INTO `commodity` VALUES ('62', '儿童装', '199', '19', 'merchandise/2.jpg');
INSERT INTO `commodity` VALUES ('63', '美丽衣服', '288', '28', 'merchandise/3.jpg');
INSERT INTO `commodity` VALUES ('64', '漂亮小姐', '321', '32', 'merchandise/5.jpg');
INSERT INTO `commodity` VALUES ('65', '可爱孩子', '423', '43', 'merchandise/6.jpg');
INSERT INTO `commodity` VALUES ('66', '夏日泳装', '432', '54', 'merchandise/7.jpg');
INSERT INTO `commodity` VALUES ('67', '夏天短袖', '765', '65', 'merchandise/8.jpg');
INSERT INTO `commodity` VALUES ('68', '露背装', '145', '76', 'merchandise/9.jpg');
INSERT INTO `commodity` VALUES ('69', '喇叭裤', '321', '98', 'merchandise/10.jpg');
INSERT INTO `commodity` VALUES ('70', '貂皮大衣', '344', '32', 'merchandise/11.jpg');
INSERT INTO `commodity` VALUES ('71', '九分裤', '453', '43', 'merchandise/12.jpg');
INSERT INTO `commodity` VALUES ('72', '七分裤', '432', '54', 'merchandise/13.jpg');
INSERT INTO `commodity` VALUES ('73', '棕色毛衣', '145', '65', 'merchandise/14.jpg');
INSERT INTO `commodity` VALUES ('74', '毛裤漂亮的', '321', '32', 'merchandise/15.jpg');
INSERT INTO `commodity` VALUES ('75', '西裤好好看', '154', '33', 'merchandise/16.jpg');
INSERT INTO `commodity` VALUES ('76', '裤装短裤', '165', '54', 'merchandise/17.jpg');
INSERT INTO `commodity` VALUES ('77', '短袖拉风', '142', '65', 'merchandise/18.jpg');
INSERT INTO `commodity` VALUES ('78', '高帮鞋', '125', '32', 'merchandise/18.jpg');
INSERT INTO `commodity` VALUES ('79', '舒服的运动鞋', '164', '45', 'merchandise/19.jpg');
INSERT INTO `commodity` VALUES ('80', '莱克拉迪', '434', '32', 'merchandise/20.jpg');
INSERT INTO `commodity` VALUES ('81', '克拉迈尔', '432', '21', 'merchandise/21.jpg');
INSERT INTO `commodity` VALUES ('82', '罗布斯基', '432', '21', 'merchandise/22.jpg');
INSERT INTO `commodity` VALUES ('83', '马咋黑', '543', '21', 'merchandise/23.jpg');
INSERT INTO `commodity` VALUES ('84', '漂亮的小姐姐', '654', '43', 'merchandise/24.jpg');
INSERT INTO `commodity` VALUES ('85', '帅气的小男孩', '321', '22', 'merchandise/25.jpg');
INSERT INTO `commodity` VALUES ('86', '性感的女士', '234', '32', 'merchandise/26.jpg');
INSERT INTO `commodity` VALUES ('87', '漂亮的棉衣', '543', '65', 'merchandise/27.jpg');
INSERT INTO `commodity` VALUES ('88', '漂亮的风衣', '456', '32', 'merchandise/28.jpg');
INSERT INTO `commodity` VALUES ('89', '卡伦裤', '654', '54', 'merchandise/29.jpg');
INSERT INTO `commodity` VALUES ('90', '麦哲伦系列', '675', '54', 'merchandise/30.jpg');
SET FOREIGN_KEY_CHECKS=1;
