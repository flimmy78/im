-- ----------------------------
-- add clum for table IM_SUB_MERCHANT_ATTENDANCE
-- ----------------------------
ALTER TABLE IM_SUBMERCHANT_ATTENDANCE ADD (I_TOTAL_LEAVE_NUM NUMBER(6));
ALTER TABLE IM_SUBMERCHANT_ATTENDANCE ADD (I_TOTAL_LEAVE_DURATION NUMBER(6));

ALTER TABLE im_webdata ADD UUID VARCHAR2(80);