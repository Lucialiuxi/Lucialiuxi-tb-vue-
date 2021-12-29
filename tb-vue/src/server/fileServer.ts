// 项目文件file
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/';

//新建项目文件夹
export const createAFileServer = (param: {
    userLoginName: String,
    fileName:  String,
    fileAbstract: String,
    fileId: Number,
    star: Boolean,
    inRecycleBin: Boolean
}) => {
    return axios.post('/file/createFile', param);
}


/**
 * 通过id查询项目文件信息
 * @param {fileId: Number} param 
 */
export const findAFileInfoServer = (param: {fileId: Number}) => {
    return axios.post('/file/findAFileInfoServer', param);
}

//进入或者刷新大图标文件区的时候，请求文件数据 param--->{userLoginName:XXX}
export const getAllFilesInfo = (param: { userLoginName: String }) => {
    return axios.post('/file/allFilesInfo', param);
}

//修改大图标文件的信息
export const postModifyFileInfo = (param: {
    userLoginName: String,
    fileId: Number,
    fileName:  String,
    fileAbstract: String,
}) => {
    return axios.post('/file/modifyFileInfo', param);
}

//切换文件的标星
export const ToggleFileStarServer = (param: {
    fileId: Number,
    userLoginName: String,
    star: Boolean,
}) => {
    return axios.post('/file/toggleFileStar', param);
}

//移动文件到回收站
export const MoveFileToRecycleBinServer = (param: {
    fileId: Number,
    userLoginName: String,
    inRecycleBin: Boolean,
}) => {
    return axios.post('/file/moveFileToRecycleBin', param);
}


/**
 * 删除一个项目文件夹
 * @param {fileId:Number, userLoginName:String} param 
 */
export const DeleteAFlieServer = (param: {
    fileId: Number,
    userLoginName: String,
}) => {
    return axios.post('/file/deleteAFlie', param);
}