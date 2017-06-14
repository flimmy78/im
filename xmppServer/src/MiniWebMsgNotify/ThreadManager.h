#pragma once


#include "PacketBuffer.h"
#include "Business.h"
#include "Utility.h"
//ҵ���߳��࣬�������̴߳���ҵ��

//ҵ���������
#define BUSINESS_PROC_TYPE_NUM 1

#define PROCESS_LIST_TYPE_A 0

class CThreadManager
{
public:
	CThreadManager(void);
	~CThreadManager(void);

	//�������������߳�
	void StartThread();

	//���������߳�
	void EndThread();

	static void OnReceive(void * pUserKey,int nEvent,const RecvDataStruct * pRecvData);
	static void OnReceiveNULL(void * pUserKey,int nEvent,const RecvDataStruct * pRecvData){};

	static void * WINAPI BusinessProcA( LPVOID lpParam );


	CFIFOPacketBuffer* GetBusProcBuf(int nType) { return m_PacketBufferArray + nType;	}

private:
	list<pthread_t>			m_listThreadHandleBuf;

	bool					m_ThreadExitFlag[BUSINESS_PROC_TYPE_NUM];

	CFIFOPacketBuffer		m_PacketBufferArray[BUSINESS_PROC_TYPE_NUM];



	SmartList<tagClientReply> m_stLstRecvReq;	// ����������յ���ack ����ţ����˵��ظ��յ���req��

};