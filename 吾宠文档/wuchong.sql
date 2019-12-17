/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.7.14 : Database - wuchong
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`wuchong` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `wuchong`;

/*Table structure for table `active` */

DROP TABLE IF EXISTS `active`;

CREATE TABLE `active` (
  `activeId` varchar(20) NOT NULL,
  `activeName` varchar(20) NOT NULL,
  `acContent` text NOT NULL,
  `acImg` varchar(100) DEFAULT NULL,
  `acAddress` varchar(50) NOT NULL,
  `acCity` varchar(20) NOT NULL,
  `acContact` varchar(50) NOT NULL,
  PRIMARY KEY (`activeId`),
  UNIQUE KEY `PK_Active` (`activeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `active` */

insert  into `active`(`activeId`,`activeName`,`acContent`,`acImg`,`acAddress`,`acCity`,`acContact`) values ('1','爱牙牙','      牙齿及口腔问题可以说是狗狗健 康状况的第一防线，它的优劣直接定 了毛小孩有一个怎样的生活品质？以 科普为核心，唤醒养宠人对宠物牙齿 问题的重视；提高大家对宠物口腔疾 病预防的意识。让宠物主人都行动起 来——健康养宠生活，从爱护它们的 牙齿开始！ ','https://liwenroul.github.io/Wuchong/img/active/d5.jpeg','石家庄市裕华区','石家庄','756273648'),('2','狗狗运动会','      牙齿及口腔问题可以说是狗狗健 康状况的第一防线，它的优劣直接定 了毛小孩有一个怎样的生活品质？以 科普为核心，唤醒养宠人对宠物牙齿 问题的重视；提高大家对宠物口腔疾 病预防的意识。让宠物主人都行动起 来——健康养宠生活，从爱护它们的 牙齿开始！ ','https://liwenroul.github.io/Wuchong/img/active/d4.jpeg','石家庄市建设路','石家庄','324537887');

/*Table structure for table `activeinfo` */

DROP TABLE IF EXISTS `activeinfo`;

CREATE TABLE `activeinfo` (
  `activeId` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `activeinfo` */

insert  into `activeinfo`(`activeId`) values ('2');

/*Table structure for table `chat` */

DROP TABLE IF EXISTS `chat`;

CREATE TABLE `chat` (
  `chatId` varchar(20) NOT NULL,
  `sendId` varchar(20) DEFAULT NULL,
  `acceptId` varchar(20) DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`chatId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `chat` */

insert  into `chat`(`chatId`,`sendId`,`acceptId`,`content`) values ('2019-12-16 4:55:08 P','4','2','123'),('2019-12-16 4:57:05 P','2','4','123'),('2019-12-16 4:58:28 P','3','1','123');

/*Table structure for table `city` */

DROP TABLE IF EXISTS `city`;

CREATE TABLE `city` (
  `cityName` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `city` */

insert  into `city`(`cityName`) values ('安阳');

/*Table structure for table `clockbianji` */

DROP TABLE IF EXISTS `clockbianji`;

CREATE TABLE `clockbianji` (
  `clockId` varchar(20) NOT NULL,
  PRIMARY KEY (`clockId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `clockbianji` */

insert  into `clockbianji`(`clockId`) values ('0');

/*Table structure for table `clockin` */

DROP TABLE IF EXISTS `clockin`;

CREATE TABLE `clockin` (
  `clockId` varchar(20) NOT NULL,
  `clockName` varchar(20) NOT NULL,
  `clockNum` int(10) NOT NULL,
  `clockTime` varchar(20) NOT NULL,
  `userId` varchar(20) NOT NULL,
  `clockImg` varchar(100) DEFAULT NULL,
  `clockCycle` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`clockId`),
  UNIQUE KEY `PK_ClockIn` (`clockId`),
  KEY `FK_ClockIn_UserInfo` (`userId`),
  CONSTRAINT `clockin_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `userinfo` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `clockin` */

insert  into `clockin`(`clockId`,`clockName`,`clockNum`,`clockTime`,`userId`,`clockImg`,`clockCycle`) values ('1','美容',3,'9：00','1','https://liwenroul.github.io/Wuchong/img/avatar/avatar3.jpeg','每日'),('2','美容',2,'16:29','2','https://liwenroul.github.io/Wuchong/img/avatar/avatar3.jpeg','每日'),('3','美容',3,'14:00','3','https://liwenroul.github.io/Wuchong/img/avatar/avatar3.jpeg','每日'),('4','美容',2,'15:00','4','https://liwenroul.github.io/Wuchong/img/avatar/avatar3.jpeg','每日');

/*Table structure for table `denglu` */

DROP TABLE IF EXISTS `denglu`;

CREATE TABLE `denglu` (
  `userId` varchar(20) NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `denglu` */

insert  into `denglu`(`userId`) values ('4');

/*Table structure for table `dingwei` */

DROP TABLE IF EXISTS `dingwei`;

CREATE TABLE `dingwei` (
  `acCity` varchar(64) NOT NULL,
  PRIMARY KEY (`acCity`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `dingwei` */

insert  into `dingwei`(`acCity`) values ('石家庄');

/*Table structure for table `dynamic` */

DROP TABLE IF EXISTS `dynamic`;

CREATE TABLE `dynamic` (
  `dynamicId` varchar(20) NOT NULL,
  `dynamicImg` varchar(100) DEFAULT NULL,
  `dynamicContent` text NOT NULL,
  `likeNum` int(10) DEFAULT NULL,
  `userId` varchar(20) NOT NULL,
  `acCity` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`dynamicId`),
  UNIQUE KEY `PK_Dynamic` (`dynamicId`),
  KEY `FK_Dynamic_UserInfo` (`userId`),
  CONSTRAINT `dynamic_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `userinfo` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `dynamic` */

insert  into `dynamic`(`dynamicId`,`dynamicImg`,`dynamicContent`,`likeNum`,`userId`,`acCity`) values ('2','https://liwenroul.github.io/Wuchong/img/dynamic/d2.jpeg','牙齿及口腔问题可以说是狗狗健 康状况的第一防线，它的优劣直接定 了毛小孩有一个怎样的生活品质？以 科普为核心，唤醒养宠人对宠物牙齿 问题的重视；提高大家对宠物口腔疾 病预防的意识。',200,'1','正定'),('3','https://liwenroul.github.io/Wuchong/img/dynamic/d2.jpeg','今天带狗狗美容啦，可爱吗？',1,'4','河北师范大学'),('dynamic551563','https://liwenroul.github.io/Wuchong/img/dynamic/d3.jpeg','咋的啊',1,'4',NULL);

/*Table structure for table `editpet` */

DROP TABLE IF EXISTS `editpet`;

CREATE TABLE `editpet` (
  `petId` varchar(20) NOT NULL,
  PRIMARY KEY (`petId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `editpet` */

insert  into `editpet`(`petId`) values ('1');

/*Table structure for table `guanzhu` */

DROP TABLE IF EXISTS `guanzhu`;

CREATE TABLE `guanzhu` (
  `Id` varchar(20) NOT NULL,
  `guanzhuId` varchar(20) DEFAULT NULL,
  `userId` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `guanzhu` */

insert  into `guanzhu`(`Id`,`guanzhuId`,`userId`) values ('1','1','2'),('2','1','4'),('3','2','4'),('4','3','4'),('5','4','2'),('6','4','1');

/*Table structure for table `manager` */

DROP TABLE IF EXISTS `manager`;

CREATE TABLE `manager` (
  `mId` varchar(20) NOT NULL,
  `mName` varchar(20) NOT NULL,
  `mRealName` varchar(20) NOT NULL,
  `mSex` char(10) NOT NULL,
  `mTel` varchar(50) NOT NULL,
  `mEmail` varchar(50) NOT NULL,
  `mPwd` varchar(20) NOT NULL,
  PRIMARY KEY (`mId`),
  UNIQUE KEY `PK_Manager` (`mId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `manager` */

insert  into `manager`(`mId`,`mName`,`mRealName`,`mSex`,`mTel`,`mEmail`,`mPwd`) values ('1','謩筱','李文柔','女','15230812614','2728608191@qq.com','123456'),('2','赵','赵婧瑜','女','12479875677','76784563@qq.com','y65495');

/*Table structure for table `petinfo` */

DROP TABLE IF EXISTS `petinfo`;

CREATE TABLE `petinfo` (
  `petId` varchar(20) NOT NULL,
  `petName` varchar(20) NOT NULL,
  `petSex` char(10) DEFAULT NULL,
  `petAge` int(10) DEFAULT NULL,
  `userId` varchar(20) NOT NULL,
  `petImg` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`petId`),
  UNIQUE KEY `PK_PetInfo` (`petId`),
  KEY `FK_PetInfo_UserInfo` (`userId`),
  CONSTRAINT `petinfo_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `userinfo` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `petinfo` */

insert  into `petinfo`(`petId`,`petName`,`petSex`,`petAge`,`userId`,`petImg`) values ('2','爱爱','男',4,'1','https://liwenroul.github.io/Wuchong/img/avatar/avatar3.jpeg'),('3','团子','女',2,'2','https://liwenroul.github.io/Wuchong/img/avatar/avatar3.jpeg'),('4','可可','男',3,'4','https://liwenroul.github.io/Wuchong/img/avatar/avatar3.jpeg'),('5','笑笑','女',4,'4','https://liwenroul.github.io/Wuchong/img/avatar/avatar2.jpeg'),('pet323755','黑子','男',5,'4','https://liwenroul.github.io/Wuchong/img/avatar/avatar1.jpeg');

/*Table structure for table `signup` */

DROP TABLE IF EXISTS `signup`;

CREATE TABLE `signup` (
  `signId` varchar(20) NOT NULL,
  `signName` varchar(20) NOT NULL,
  `signTel` varchar(50) NOT NULL,
  `spetName` varchar(20) NOT NULL,
  `spetAge` int(10) NOT NULL,
  `spetKind` varchar(20) NOT NULL,
  `activeId` varchar(20) NOT NULL,
  `userId` varchar(20) NOT NULL,
  PRIMARY KEY (`signId`),
  UNIQUE KEY `PK_SignUp` (`signName`),
  KEY `FK_SignUp_Active` (`activeId`),
  KEY `FK_SignUp_UserInfo` (`userId`),
  CONSTRAINT `signup_ibfk_1` FOREIGN KEY (`activeId`) REFERENCES `active` (`activeId`),
  CONSTRAINT `signup_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `userinfo` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `signup` */

insert  into `signup`(`signId`,`signName`,`signTel`,`spetName`,`spetAge`,`spetKind`,`activeId`,`userId`) values ('1','小李','6756434789','黑子',5,'柯基','2','1'),('2','小黄','5748796898','可可',3,'博美','1','4');

/*Table structure for table `userinfo` */

DROP TABLE IF EXISTS `userinfo`;

CREATE TABLE `userinfo` (
  `userId` varchar(20) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `userTel` varchar(50) NOT NULL,
  `userPassword` varchar(20) NOT NULL,
  `userAvatar` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `PK_UserInfo` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `userinfo` */

insert  into `userinfo`(`userId`,`userName`,`userTel`,`userPassword`,`userAvatar`) values ('1','小李','27498749','123456','https://liwenroul.github.io/Wuchong/img/avatar/avatar1.jpeg'),('2','小赵','767569238','76476587','https://liwenroul.github.io/Wuchong/img/avatar/avatar3.jpeg'),('3','小郑','645788456','65656237','https://liwenroul.github.io/Wuchong/img/avatar/avatar3.jpeg'),('4','小黄','123456','123456','https://liwenroul.github.io/Wuchong/img/avatar/avatar2.jpeg');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
