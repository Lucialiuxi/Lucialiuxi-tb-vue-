// 文件works
import { requestMethod } from '@/utils/requestMethod';

// 查询works文件的显示模式
export const GetWorkFileViewTypeServer = (param: { username:  string }) => {
    return requestMethod('/works/getWorkFileViewType', param);
}

// 新建work文件
export const CreateAWorkFileServer = (param: { 
    fileId: number, 
    parentId: string,
    myId: string,
    workFileName: string,
    lastestModifyTime: string,
}) => {
    return requestMethod('/works/createAWorkFile', param);
}

// 查询当前所在层级的所有works文件
export const GetAllWorksFileUnderParentWorksFileServer = (param: {
    username: string, 
    fileId: number,
    parentId: string,
 }) => {
    return requestMethod('/works/getAllWorksFileUnderParentWorksFile', param);
}

// 删除文件夹一个项目文件夹
export const DeleteAWorksFileServer = (param: { myId:string }) => {
    return requestMethod('/works/deleteAWorksFile', param);   
}

// 修改work文件名
export const ModifyAWorkFileNameServer = (param: { myId: string, workFileName: string}) => {
    return requestMethod('/works/modifyAWorkFileName', param);
}

// 切换work文件选中状态  单选
export const ToSwitchCheckAWorkFileServer = (param: { myId: string, check: boolean}) => {
    return requestMethod('/works/toSwitchCheckAWorkFile', param);
}

// 切换全选
export const ToSwitchCheckAllWorkFileServer = (param: { parentId: string,check: boolean }) => {
    return requestMethod('/works/toSwitchCheckAllWorkFile', param);
}

// 多选删除
export const DeleteCheckedWorkFilesServer = (param: { myIdArr: number[] }) => {
    return requestMethod('/works/deleteCheckedWorkFiles', param);
}

// 切换 缩略图模式ThumbnailView / 列表模式ListView
export const ChangeWorksViewTypeServer = (param: { username:string , worksViewType:string }) => {
    return requestMethod('/works/changeWorksViewType', param);
}

// 根据myId查询works文件的完整信息
export const GetAWorksFileInformationByIdServer = (param: { myId: string }) => {
    return requestMethod('/works/getAWorksFileInformationById', param);   
}

// 移动OR复制一个workFile到其他文件夹下 keyWord:'复制'/'移动'
export const MoveOrCopyOneWorkFileServer = (param: { 
    username: string, 
    myId: string, 
    keyWord: '复制' | '移动', 
    newfileId: number, 
    newParentId:string,
    lastestModifyTime: number,
}) => {
    return requestMethod('/works/moveOrCopyOneWorkFile', param);   
}

// 移动OR复制一组workFiles到其他文件夹下 keyWord:'复制'/'移动'
export const MoveOrCopyOneGroupWorkFilesServer = (param: { 
    username: string, 
    fileId: number, 
    parentId:string, 
    keyWord:string, 
    newfileId: number, 
    newParentId:string,
    lastestModifyTime: number,
}) => {
    return requestMethod('/works/moveOrCopyOneGroupWorkFiles', param);   
}

export const SearchFileByFileNameServer = (param: {
    userLoginName: string,
    FileName: string,
}) => {
    return requestMethod('/works/searchFileByFileName', param);   
}