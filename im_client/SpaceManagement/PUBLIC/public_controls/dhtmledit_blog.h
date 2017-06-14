#pragma once

// 计算机生成了由 Microsoft Visual C++ 创建的 IDispatch 包装类

// 注意: 不要修改此文件的内容。如果此类由
//  Microsoft Visual C++ 重新生成，您的修改将被改写。

/////////////////////////////////////////////////////////////////////////////
// CDHtmlEditCtrl 包装类

class CDHtmlEditCtrl : public CWnd
{
protected:
	DECLARE_DYNCREATE(CDHtmlEditCtrl)
public:
	CLSID const& GetClsid()
	{
		static CLSID const clsid
			= { 0x2D360200, 0xFFF5, 0x11D1, { 0x8D, 0x3, 0x0, 0xA0, 0xC9, 0x59, 0xBC, 0xA } };
		return clsid;
	}
	virtual BOOL Create(LPCTSTR lpszClassName, LPCTSTR lpszWindowName, DWORD dwStyle,
						const RECT& rect, CWnd* pParentWnd, UINT nID, 
						CCreateContext* pContext = NULL)
	{ 
		return CreateControl(GetClsid(), lpszWindowName, dwStyle, rect, pParentWnd, nID); 
	}

    BOOL Create(LPCTSTR lpszWindowName, DWORD dwStyle, const RECT& rect, CWnd* pParentWnd, 
				UINT nID, CFile* pPersist = NULL, BOOL bStorage = FALSE,
				BSTR bstrLicKey = NULL)
	{ 
		return CreateControl(GetClsid(), lpszWindowName, dwStyle, rect, pParentWnd, nID,
		pPersist, bStorage, bstrLicKey); 
	}

	DECLARE_MESSAGE_MAP()

// 属性
public:
enum
{
    DECMD_BOLD = 5000,
    DECMD_COPY = 5002,
    DECMD_CUT = 5003,
    DECMD_DELETE = 5004,
    DECMD_DELETECELLS = 5005,
    DECMD_DELETECOLS = 5006,
    DECMD_DELETEROWS = 5007,
    DECMD_FINDTEXT = 5008,
    DECMD_FONT = 5009,
    DECMD_GETBACKCOLOR = 5010,
    DECMD_GETBLOCKFMT = 5011,
    DECMD_GETBLOCKFMTNAMES = 5012,
    DECMD_GETFONTNAME = 5013,
    DECMD_GETFONTSIZE = 5014,
    DECMD_GETFORECOLOR = 5015,
    DECMD_HYPERLINK = 5016,
    DECMD_IMAGE = 5017,
    DECMD_INDENT = 5018,
    DECMD_INSERTCELL = 5019,
    DECMD_INSERTCOL = 5020,
    DECMD_INSERTROW = 5021,
    DECMD_INSERTTABLE = 5022,
    DECMD_ITALIC = 5023,
    DECMD_JUSTIFYCENTER = 5024,
    DECMD_JUSTIFYLEFT = 5025,
    DECMD_JUSTIFYRIGHT = 5026,
    DECMD_LOCK_ELEMENT = 5027,
    DECMD_MAKE_ABSOLUTE = 5028,
    DECMD_MERGECELLS = 5029,
    DECMD_ORDERLIST = 5030,
    DECMD_OUTDENT = 5031,
    DECMD_PASTE = 5032,
    DECMD_REDO = 5033,
    DECMD_REMOVEFORMAT = 5034,
    DECMD_SELECTALL = 5035,
    DECMD_SEND_BACKWARD = 5036,
    DECMD_BRING_FORWARD = 5037,
    DECMD_SEND_BELOW_TEXT = 5038,
    DECMD_BRING_ABOVE_TEXT = 5039,
    DECMD_SEND_TO_BACK = 5040,
    DECMD_BRING_TO_FRONT = 5041,
    DECMD_SETBACKCOLOR = 5042,
    DECMD_SETBLOCKFMT = 5043,
    DECMD_SETFONTNAME = 5044,
    DECMD_SETFONTSIZE = 5045,
    DECMD_SETFORECOLOR = 5046,
    DECMD_SPLITCELL = 5047,
    DECMD_UNDERLINE = 5048,
    DECMD_UNDO = 5049,
    DECMD_UNLINK = 5050,
    DECMD_UNORDERLIST = 5051,
    DECMD_PROPERTIES = 5052
}DHTMLEDITCMDID;
enum
{
    DECMDF_NOTSUPPORTED = 0,
    DECMDF_DISABLED = 1,
    DECMDF_ENABLED = 3,
    DECMDF_LATCHED = 7,
    DECMDF_NINCHED = 11
}DHTMLEDITCMDF;
enum
{
    DEAPPEARANCE_FLAT = 0,
    DEAPPEARANCE_3D = 1
}DHTMLEDITAPPEARANCE;
enum
{
    OLECMDEXECOPT_DODEFAULT = 0,
    OLECMDEXECOPT_PROMPTUSER = 1,
    OLECMDEXECOPT_DONTPROMPTUSER = 2,
    OLECMDEXECOPT_SHOWHELP = 3
}OLECMDEXECOPT;


// 操作
public:

// IDHTMLEdit

// Functions
//

	VARIANT ExecCommand(long cmdID, long cmdexecopt, VARIANT * pInVar)
	{
		VARIANT result;
		static BYTE parms[] = VTS_I4 VTS_I4 VTS_PVARIANT ;
		InvokeHelper(0x2, DISPATCH_METHOD, VT_VARIANT, (void*)&result, parms, cmdID, cmdexecopt, pInVar);
		return result;
	}
	long QueryStatus(long cmdID)
	{
		long result;
		static BYTE parms[] = VTS_I4 ;
		InvokeHelper(0x3, DISPATCH_METHOD, VT_I4, (void*)&result, parms, cmdID);
		return result;
	}
	void SetContextMenu(VARIANT * menuStrings, VARIANT * menuStates)
	{
		static BYTE parms[] = VTS_PVARIANT VTS_PVARIANT ;
		InvokeHelper(0x5, DISPATCH_METHOD, VT_EMPTY, NULL, parms, menuStrings, menuStates);
	}
	void NewDocument()
	{
		InvokeHelper(0x1b, DISPATCH_METHOD, VT_EMPTY, NULL, NULL);
	}
	void LoadURL(LPCTSTR url)
	{
		static BYTE parms[] = VTS_BSTR ;
		InvokeHelper(0x1d, DISPATCH_METHOD, VT_EMPTY, NULL, parms, url);
	}
	CString FilterSourceCode(LPCTSTR sourceCodeIn)
	{
		CString result;
		static BYTE parms[] = VTS_BSTR ;
		InvokeHelper(0x1f, DISPATCH_METHOD, VT_BSTR, (void*)&result, parms, sourceCodeIn);
		return result;
	}
	void Refresh()
	{
		InvokeHelper(0x20, DISPATCH_METHOD, VT_EMPTY, NULL, NULL);
	}
	LPDISPATCH get_DOM()
	{
		LPDISPATCH result;
		InvokeHelper(0x6, DISPATCH_PROPERTYGET, VT_DISPATCH, (void*)&result, NULL);
		return result;
	}
	CString get_DocumentHTML()
	{
		CString result;
		InvokeHelper(0x11, DISPATCH_PROPERTYGET, VT_BSTR, (void*)&result, NULL);
		return result;
	}
	void put_DocumentHTML(LPCTSTR newValue)
	{
		static BYTE parms[] = VTS_BSTR ;
		InvokeHelper(0x11, DISPATCH_PROPERTYPUT, VT_EMPTY, NULL, parms, newValue);
	}
	BOOL get_ActivateApplets()
	{
		BOOL result;
		InvokeHelper(0x7, DISPATCH_PROPERTYGET, VT_BOOL, (void*)&result, NULL);
		return result;
	}
	void put_ActivateApplets(BOOL newValue)
	{
		static BYTE parms[] = VTS_BOOL ;
		InvokeHelper(0x7, DISPATCH_PROPERTYPUT, VT_EMPTY, NULL, parms, newValue);
	}
	BOOL get_ActivateActiveXControls()
	{
		BOOL result;
		InvokeHelper(0x8, DISPATCH_PROPERTYGET, VT_BOOL, (void*)&result, NULL);
		return result;
	}
	void put_ActivateActiveXControls(BOOL newValue)
	{
		static BYTE parms[] = VTS_BOOL ;
		InvokeHelper(0x8, DISPATCH_PROPERTYPUT, VT_EMPTY, NULL, parms, newValue);
	}
	BOOL get_ActivateDTCs()
	{
		BOOL result;
		InvokeHelper(0x9, DISPATCH_PROPERTYGET, VT_BOOL, (void*)&result, NULL);
		return result;
	}
	void put_ActivateDTCs(BOOL newValue)
	{
		static BYTE parms[] = VTS_BOOL ;
		InvokeHelper(0x9, DISPATCH_PROPERTYPUT, VT_EMPTY, NULL, parms, newValue);
	}
	BOOL get_ShowDetails()
	{
		BOOL result;
		InvokeHelper(0xb, DISPATCH_PROPERTYGET, VT_BOOL, (void*)&result, NULL);
		return result;
	}
	void put_ShowDetails(BOOL newValue)
	{
		static BYTE parms[] = VTS_BOOL ;
		InvokeHelper(0xb, DISPATCH_PROPERTYPUT, VT_EMPTY, NULL, parms, newValue);
	}
	BOOL get_ShowBorders()
	{
		BOOL result;
		InvokeHelper(0xc, DISPATCH_PROPERTYGET, VT_BOOL, (void*)&result, NULL);
		return result;
	}
	void put_ShowBorders(BOOL newValue)
	{
		static BYTE parms[] = VTS_BOOL ;
		InvokeHelper(0xc, DISPATCH_PROPERTYPUT, VT_EMPTY, NULL, parms, newValue);
	}
	long get_Appearance()
	{
		long result;
		InvokeHelper(0xd, DISPATCH_PROPERTYGET, VT_I4, (void*)&result, NULL);
		return result;
	}
	void put_Appearance(long newValue)
	{
		static BYTE parms[] = VTS_I4 ;
		InvokeHelper(0xd, DISPATCH_PROPERTYPUT, VT_EMPTY, NULL, parms, newValue);
	}
	BOOL get_Scrollbars()
	{
		BOOL result;
		InvokeHelper(0xe, DISPATCH_PROPERTYGET, VT_BOOL, (void*)&result, NULL);
		return result;
	}
	void put_Scrollbars(BOOL newValue)
	{
		static BYTE parms[] = VTS_BOOL ;
		InvokeHelper(0xe, DISPATCH_PROPERTYPUT, VT_EMPTY, NULL, parms, newValue);
	}
	long get_ScrollbarAppearance()
	{
		long result;
		InvokeHelper(0xf, DISPATCH_PROPERTYGET, VT_I4, (void*)&result, NULL);
		return result;
	}
	void put_ScrollbarAppearance(long newValue)
	{
		static BYTE parms[] = VTS_I4 ;
		InvokeHelper(0xf, DISPATCH_PROPERTYPUT, VT_EMPTY, NULL, parms, newValue);
	}
	BOOL get_SourceCodePreservation()
	{
		BOOL result;
		InvokeHelper(0x10, DISPATCH_PROPERTYGET, VT_BOOL, (void*)&result, NULL);
		return result;
	}
	void put_SourceCodePreservation(BOOL newValue)
	{
		static BYTE parms[] = VTS_BOOL ;
		InvokeHelper(0x10, DISPATCH_PROPERTYPUT, VT_EMPTY, NULL, parms, newValue);
	}
	BOOL get_AbsoluteDropMode()
	{
		BOOL result;
		InvokeHelper(0x12, DISPATCH_PROPERTYGET, VT_BOOL, (void*)&result, NULL);
		return result;
	}
	void put_AbsoluteDropMode(BOOL newValue)
	{
		static BYTE parms[] = VTS_BOOL ;
		InvokeHelper(0x12, DISPATCH_PROPERTYPUT, VT_EMPTY, NULL, parms, newValue);
	}
	long get_SnapToGridX()
	{
		long result;
		InvokeHelper(0x13, DISPATCH_PROPERTYGET, VT_I4, (void*)&result, NULL);
		return result;
	}
	void put_SnapToGridX(long newValue)
	{
		static BYTE parms[] = VTS_I4 ;
		InvokeHelper(0x13, DISPATCH_PROPERTYPUT, VT_EMPTY, NULL, parms, newValue);
	}
	long get_SnapToGridY()
	{
		long result;
		InvokeHelper(0x14, DISPATCH_PROPERTYGET, VT_I4, (void*)&result, NULL);
		return result;
	}
	void put_SnapToGridY(long newValue)
	{
		static BYTE parms[] = VTS_I4 ;
		InvokeHelper(0x14, DISPATCH_PROPERTYPUT, VT_EMPTY, NULL, parms, newValue);
	}
	BOOL get_SnapToGrid()
	{
		BOOL result;
		InvokeHelper(0x15, DISPATCH_PROPERTYGET, VT_BOOL, (void*)&result, NULL);
		return result;
	}
	void put_SnapToGrid(BOOL newValue)
	{
		static BYTE parms[] = VTS_BOOL ;
		InvokeHelper(0x15, DISPATCH_PROPERTYPUT, VT_EMPTY, NULL, parms, newValue);
	}
	BOOL get_IsDirty()
	{
		BOOL result;
		InvokeHelper(0x16, DISPATCH_PROPERTYGET, VT_BOOL, (void*)&result, NULL);
		return result;
	}
	CString get_CurrentDocumentPath()
	{
		CString result;
		InvokeHelper(0x17, DISPATCH_PROPERTYGET, VT_BSTR, (void*)&result, NULL);
		return result;
	}
	CString get_BaseURL()
	{
		CString result;
		InvokeHelper(0x18, DISPATCH_PROPERTYGET, VT_BSTR, (void*)&result, NULL);
		return result;
	}
	void put_BaseURL(LPCTSTR newValue)
	{
		static BYTE parms[] = VTS_BSTR ;
		InvokeHelper(0x18, DISPATCH_PROPERTYPUT, VT_EMPTY, NULL, parms, newValue);
	}
	CString get_DocumentTitle()
	{
		CString result;
		InvokeHelper(0x19, DISPATCH_PROPERTYGET, VT_BSTR, (void*)&result, NULL);
		return result;
	}
	BOOL get_UseDivOnCarriageReturn()
	{
		BOOL result;
		InvokeHelper(0x1e, DISPATCH_PROPERTYGET, VT_BOOL, (void*)&result, NULL);
		return result;
	}
	void put_UseDivOnCarriageReturn(BOOL newValue)
	{
		static BYTE parms[] = VTS_BOOL ;
		InvokeHelper(0x1e, DISPATCH_PROPERTYPUT, VT_EMPTY, NULL, parms, newValue);
	}
	BOOL get_Busy()
	{
		BOOL result;
		InvokeHelper(0x21, DISPATCH_PROPERTYGET, VT_BOOL, (void*)&result, NULL);
		return result;
	}
	void LoadDocument(VARIANT * pathIn, VARIANT * promptUser)
	{
		static BYTE parms[] = VTS_PVARIANT VTS_PVARIANT ;
		InvokeHelper(0x1, DISPATCH_METHOD, VT_EMPTY, NULL, parms, pathIn, promptUser);
	}
	void SaveDocument(VARIANT * pathIn, VARIANT * promptUser)
	{
		static BYTE parms[] = VTS_PVARIANT VTS_PVARIANT ;
		InvokeHelper(0x4, DISPATCH_METHOD, VT_EMPTY, NULL, parms, pathIn, promptUser);
	}
	void PrintDocument(VARIANT * withUI)
	{
		static BYTE parms[] = VTS_PVARIANT ;
		InvokeHelper(0x1c, DISPATCH_METHOD, VT_EMPTY, NULL, parms, withUI);
	}
	BOOL get_BrowseMode()
	{
		BOOL result;
		InvokeHelper(0x1a, DISPATCH_PROPERTYGET, VT_BOOL, (void*)&result, NULL);
		return result;
	}
	void put_BrowseMode(BOOL newValue)
	{
		static BYTE parms[] = VTS_BOOL ;
		InvokeHelper(0x1a, DISPATCH_PROPERTYPUT, VT_EMPTY, NULL, parms, newValue);
	}
	BOOL OnHelpInfo(HELPINFO* lpHelpInfo);
// Properties
//



	afx_msg void OnKeyDown(UINT nChar, UINT nRepCnt, UINT nFlags);
};
