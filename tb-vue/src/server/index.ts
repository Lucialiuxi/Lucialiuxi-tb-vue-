import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/';

//------------------------------文件works--------------------------------------
/**查询works文件的显示模式
 * @param {username:  String} param 
 */
export const GetWorkFileViewTypeServer = (param: any) => {
    return axios.post('/works/getWorkFileViewType',param)
}

/**新建work文件
 * 
 * @param { fileId: Number, parentId: String ,myId: String,workFileName: String,lastestModifyTime: String} param 
 */
export const CreateAWorkFileServer = (param: any) => {
    return axios.post('/works/createAWorkFile',param)
}

/**查询当前所在层级的所有works文件 
 * @param {username: String , fileId: Number,parentId: String } param 
 */
export const GetAllWorksFileUnderParentWorksFileServer = (param: any) => {
    return axios.post('/works/getAllWorksFileUnderParentWorksFile',param)
}

/**删除文件夹一个项目文件夹
 * @param {myId:String} param 
 */
export const DeleteAWorksFileServer = (param: any) => {
    return axios.post('/works/deleteAWorksFile',param)   
}

/**修改work文件名
 * @param {myId:String,workFileName:String} param 
 */
export const ModifyAWorkFileNameServer = (param: any) => {
    return axios.post('/works/modifyAWorkFileName',param)
}

/**切换work文件选中状态  单选
 * @param {myId:String,check:boolean} param 
 */
export const ToSwitchCheckAWorkFileServer = (param: any) => {
    return axios.post('/works/toSwitchCheckAWorkFile',param)
}

/**切换全选
 * @param {parentId:String,check:boolean} param 
 */
export const ToSwitchCheckAllWorkFileServer = (param: any) => {
    return axios.post('/works/toSwitchCheckAllWorkFile',param)
}

/**多选删除
 * @param {myIdArr:Array} param 
 */
export const DeleteCheckedWorkFilesServer = (param: any) => {
    return axios.post('/works/deleteCheckedWorkFiles',param)
}

/**切换 缩略图模式ThumbnailView / 列表模式ListView
 * @param { username:String , worksViewType:String } param 
 */
export const ChangeWorksViewTypeServer = (param: any) => {
    return axios.post('/works/changeWorksViewType',param)
}

/**
 * 根据myId查询works文件的完整信息
 * @param {myId: String} param 
 */
export const GetAWorksFileInformationByIdServer = (param: any) => {
    return axios.post('/works/getAWorksFileInformationById',param)   
}

/**
 * 移动OR复制一个workFile到其他文件夹下 keyWord:'复制'/'移动'
 * @param { username: String , myId: String , keyWord:Sting , NewfileId: Number , NewParentId:String ,lastestModifyTime: Number} param 
 */
export const MoveOrCopyOneWorkFileServer = (param: any) => {
    return axios.post('/works/moveOrCopyOneWorkFile',param)   
}

/**
 * 移动OR复制一组workFiles到其他文件夹下 keyWord:'复制'/'移动'
 * @param { username: String , fileId: Number , parentId:String , keyWord:Sting , NewfileId: Number , NewParentId:String ,lastestModifyTime: Number} param 
 */
export const MoveOrCopyOneGroupWorkFilesServer = (param: any) => {
    return axios.post('/works/moveOrCopyOneGroupWorkFiles',param)   
}

/**
 * @param {userLoginName:String,FileName:String} param 
 */
export const SearchFileByFileNameServer = (param: any) => {
    return axios.post('/works/searchFileByFileName',param)   
}