
create table im.IM_LOGINOUTTIME
(
    USERID         NUMBER(20) not null,
    LOGINTIME      NUMBER(20) default 0,
    LOGOUTTIME     NUMBER(20) default 0
)tablespace ECSDATA
;

comment on column im.IM_LOGINOUTTIME.USERID 
  is '用户ID';
comment on column im.IM_LOGINOUTTIME.LOGINTIME 
  is '登录时间';
comment on column im.IM_LOGINOUTTIME.LOGOUTTIME 
  is '登出时间';

create index im.IM_LOGINOUTTIME_IDX_USERID on im.IM_LOGINOUTTIME (USERID) tablespace ECSINDEX;

alter table IM_WEBDATA add LOGINTIME NUMBER(20) default 1 ;

comment on column im.IM_WEBDATA.LOGINTIME 
  is '登录时间';
  
alter table Im_Curclilist modify remarkname varchar2(400);

alter table Im_Friend modify aliasname varchar2(80);




-- ----------------------------
-- 2015-06-26 :建立IM_REPLAY_DETAIL表
-- ----------------------------

CREATE TABLE "IM"."IM_REPLAY_DETAIL" (
  "FROMID" NUMBER(20) NOT NULL ,
  "TOID" NUMBER(20) NOT NULL ,
  "ASKTIME" NUMBER NULL ,
  "REPLYTIME" NUMBER NULL ,
  "DUR" NUMBER NULL
) TABLESPACE ecsdata;

COMMENT ON TABLE "IM"."IM_REPLAY_DETAIL"
IS '商家接待客户的统计表';
COMMENT ON COLUMN IM.IM_REPLAY_DETAIL.FROMID
IS '客户ID';
COMMENT ON COLUMN IM.IM_REPLAY_DETAIL.TOID
IS '商家子账号ID';
COMMENT ON COLUMN IM.IM_REPLAY_DETAIL.ASKTIME
IS '客户询问时间';
COMMENT ON COLUMN IM.IM_REPLAY_DETAIL.REPLYTIME
IS '商家子账号回复时间';
COMMENT ON COLUMN IM.IM_REPLAY_DETAIL.DUR
IS '商家响应时间';
-- ----------------------------
-- Indexes structure for table IM_REPLAY_DETAIL
-- ----------------------------
CREATE INDEX "IM"."REPLY_FROM_TO"
ON "IM"."IM_REPLAY_DETAIL" ("FROMID" ASC, "TOID" ASC)
 TABLESPACE ecsdata;
-- ----------------------------
-- Checks structure for table IM_REPLAY_DETAIL
-- ----------------------------
ALTER TABLE "IM"."IM_REPLAY_DETAIL" ADD CHECK ("FROMID" IS NOT NULL);
ALTER TABLE "IM"."IM_REPLAY_DETAIL" ADD CHECK ("TOID" IS NOT NULL);


-- ----------------------------
-- Table structure for IM_WORK_DETAIL
-- ----------------------------

CREATE TABLE "IM"."IM_WORK_DETAIL" (
"MERCHANT_ID" NUMBER(20) NOT NULL ,
"STATISTICS_DATE" NUMBER(20) NOT NULL ,
"LANDING_TIME" FLOAT(10) NOT NULL ,
"SERVE_COUNT" NUMBER(10) NOT NULL ,
"RESPONSE_TIME" NUMBER(10) NOT NULL ,
"RESPONSE_IN_90S_COUNT" NUMBER(10) NOT NULL ,
"RESPONSE_COUNT" NUMBER(10) NOT NULL ,
"SUB_MERCHANT_IDS" VARCHAR2(800 BYTE) NULL ,
"CUSTOMER_IDS" VARCHAR2(1600 BYTE) NULL 
) TABLESPACE ecsdata;

COMMENT ON TABLE "IM"."IM_WORK_DETAIL" IS '商家工作量统计报表';
COMMENT ON COLUMN "IM"."IM_WORK_DETAIL"."MERCHANT_ID" IS '商家ID';
COMMENT ON COLUMN "IM"."IM_WORK_DETAIL"."STATISTICS_DATE" IS '统计的时间，为当天的0点0分0秒';
COMMENT ON COLUMN "IM"."IM_WORK_DETAIL"."LANDING_TIME" IS '商家所有子账号登录时长';
COMMENT ON COLUMN "IM"."IM_WORK_DETAIL"."SERVE_COUNT" IS '商家客服个数';
COMMENT ON COLUMN "IM"."IM_WORK_DETAIL"."RESPONSE_TIME" IS '当天该商家所有客服的所有响应时间总和';
COMMENT ON COLUMN "IM"."IM_WORK_DETAIL"."RESPONSE_IN_90S_COUNT" IS '90秒内响应的次数';
COMMENT ON COLUMN "IM"."IM_WORK_DETAIL"."RESPONSE_COUNT" IS '当天该商家所有客服的回复次数';
COMMENT ON COLUMN "IM"."IM_WORK_DETAIL"."SUB_MERCHANT_IDS" IS '当天该商家所有客服的ID列表';
COMMENT ON COLUMN "IM"."IM_WORK_DETAIL"."CUSTOMER_IDS" IS '当天该商家所有客户的ID列表';

-- ----------------------------
-- Indexes structure for table IM_WORK_DETAIL
-- ----------------------------
CREATE INDEX "IM"."merchantid"
ON "IM"."IM_WORK_DETAIL" ("MERCHANT_ID" ASC)
 TABLESPACE ecsdata;
-- ----------------------------
-- Checks structure for table IM_WORK_DETAIL
-- ----------------------------
ALTER TABLE "IM"."IM_WORK_DETAIL" ADD CHECK ("MERCHANT_ID" IS NOT NULL);
ALTER TABLE "IM"."IM_WORK_DETAIL" ADD CHECK ("STATISTICS_DATE" IS NOT NULL);
ALTER TABLE "IM"."IM_WORK_DETAIL" ADD CHECK ("LANDING_TIME" IS NOT NULL);
ALTER TABLE "IM"."IM_WORK_DETAIL" ADD CHECK ("SERVE_COUNT" IS NOT NULL);
ALTER TABLE "IM"."IM_WORK_DETAIL" ADD CHECK ("RESPONSE_TIME" IS NOT NULL);
ALTER TABLE "IM"."IM_WORK_DETAIL" ADD CHECK ("RESPONSE_IN_90S_COUNT" IS NOT NULL);
ALTER TABLE "IM"."IM_WORK_DETAIL" ADD CHECK ("RESPONSE_COUNT" IS NOT NULL);
ALTER TABLE "IM"."IM_WORK_DETAIL" ADD CHECK ("MERCHANT_ID" IS NOT NULL);
ALTER TABLE "IM"."IM_WORK_DETAIL" ADD CHECK ("STATISTICS_DATE" IS NOT NULL);
ALTER TABLE "IM"."IM_WORK_DETAIL" ADD CHECK ("LANDING_TIME" IS NOT NULL);
ALTER TABLE "IM"."IM_WORK_DETAIL" ADD CHECK ("SERVE_COUNT" IS NOT NULL);
ALTER TABLE "IM"."IM_WORK_DETAIL" ADD CHECK ("RESPONSE_TIME" IS NOT NULL);
ALTER TABLE "IM"."IM_WORK_DETAIL" ADD CHECK ("RESPONSE_IN_90S_COUNT" IS NOT NULL);
ALTER TABLE "IM"."IM_WORK_DETAIL" ADD CHECK ("RESPONSE_COUNT" IS NOT NULL);

-- ----------------------------
-- Primary Key structure for table IM_WORK_DETAIL
-- ----------------------------
ALTER TABLE "IM"."IM_WORK_DETAIL" ADD PRIMARY KEY ("MERCHANT_ID", "STATISTICS_DATE");




