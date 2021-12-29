// 文件works
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/';

// 查询works文件的显示模式
export const GetWorkFileViewTypeServer = (param: { username:  String }) => {
    return axios.post('/works/getWorkFileViewType', param);
}

// 新建work文件
export const CreateAWorkFileServer = (param: { 
    fileId: Number, 
    parentId: String,
    myId: String,
    workFileName: String,
    lastestModifyTime: String,
}) => {
    return axios.post('/works/createAWorkFile', param);
}

// 查询当前所在层级的所有works文件
export const GetAllWorksFileUnderParentWorksFileServer = (param: {
    username: String, 
    fileId: Number,
    parentId: String,
 }) => {
    return axios.post('/works/getAllWorksFileUnderParentWorksFile', param);
}

// 删除文件夹一个项目文件夹
export const DeleteAWorksFileServer = (param: { myId:String }) => {
    return axios.post('/works/deleteAWorksFile', param);   
}

// 修改work文件名
export const ModifyAWorkFileNameServer = (param: { myId: String, workFileName: String}) => {
    return axios.post('/works/modifyAWorkFileName', param);
}

// 切换work文件选中状态  单选
export const ToSwitchCheckAWorkFileServer = (param: { myId: String, check: Boolean}) => {
    return axios.post('/works/toSwitchCheckAWorkFile', param);
}

// 切换全选
export const ToSwitchCheckAllWorkFileServer = (param: { parentId: String,check: boolean }) => {
    return axios.post('/works/toSwitchCheckAllWorkFile', param);
}

// 多选删除
export const DeleteCheckedWorkFilesServer = (param: { myIdArr: Number[] }) => {
    return axios.post('/works/deleteCheckedWorkFiles', param);
}

// 切换 缩略图模式ThumbnailView / 列表模式ListView
export const ChangeWorksViewTypeServer = (param: { username:String , worksViewType:String }) => {
    return axios.post('/works/changeWorksViewType', param);
}

// 根据myId查询works文件的完整信息
export const GetAWorksFileInformationByIdServer = (param: { myId: String }) => {
    return axios.post('/works/getAWorksFileInformationById', param);   
}

// 移动OR复制一个workFile到其他文件夹下 keyWord:'复制'/'移动'
export const MoveOrCopyOneWorkFileServer = (param: { 
    username: String, 
    myId: String, 
    keyWord: '复制' | '移动', 
    newfileId: Number, 
    newParentId:String,
    lastestModifyTime: Number,
}) => {
    return axios.post('/works/moveOrCopyOneWorkFile', param);   
}

// 移动OR复制一组workFiles到其他文件夹下 keyWord:'复制'/'移动'
export const MoveOrCopyOneGroupWorkFilesServer = (param: { 
    username: String, 
    fileId: Number, 
    parentId:String, 
    keyWord:String, 
    newfileId: Number, 
    newParentId:String,
    lastestModifyTime: Number,
}) => {
    return axios.post('/works/moveOrCopyOneGroupWorkFiles', param);   
}

export const SearchFileByFileNameServer = (param: {
    userLoginName: String,
    FileName: String,
}) => {
    return axios.post('/works/searchFileByFileName', param);   
}