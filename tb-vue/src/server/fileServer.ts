// 项目文件file
import { requestMethod } from '@/utils/requestMethod';

//新建项目文件夹
export const createAFileServer = (param: {
    userLoginName: string,
    fileName:  string,
    fileAbstract: string,
    fileId: number,
    star: boolean,
    inRecycleBin: boolean
}) => {
    return requestMethod('/file/createFile', param);
}


/**
 * 通过id查询项目文件信息
 * @param {fileId: number} param 
 */
export const findAFileInfoServer = (param: {fileId: number}) => {
    return requestMethod('/file/findAFileInfoServer', param);
}

//进入或者刷新大图标文件区的时候，请求文件数据 param--->{userLoginName:XXX}
export const getAllFilesInfo = (param: { userLoginName: string }) => {
    return requestMethod('/file/allFilesInfo', param);
}

//修改大图标文件的信息
export const postModifyFileInfo = (param: {
    userLoginName: string,
    fileId: number,
    fileName:  string,
    fileAbstract: string,
}) => {
    return requestMethod('/file/modifyFileInfo', param);
}

//切换文件的标星
export const ToggleFileStarServer = (param: {
    fileId: number,
    userLoginName: string,
    star: boolean,
}) => {
    return requestMethod('/file/toggleFileStar', param);
}

//移动文件到回收站
export const MoveFileToRecycleBinServer = (param: {
    fileId: number,
    userLoginName: string,
    inRecycleBin: boolean,
}) => {
    return requestMethod('/file/moveFileToRecycleBin', param);
}


/**
 * 删除一个项目文件夹
 * @param {fileId:number, userLoginName:string} param 
 */
export const DeleteAFlieServer = (param: {
    fileId: number,
    userLoginName: string,
}) => {
    return requestMethod('/file/deleteAFlie', param);
}