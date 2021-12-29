// 任务
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/';

type TaskItem = {
    userLoginName?: String,//用户的登录名
    fileId: Number,//项目文件id
    taskItemId: Number,//任务列表id
    taskItemName?: String,//任务列表名
    subTaskCount: Number,//子任务数量
    index: Number //按照 未完成-进行中-已完成 排序
};

// 首页新建任务后，新建任务下的默认的任务列表
export const CreateTaskItemServer = (param: { fileId: Number }) => {
    const arr: TaskItem[] = [];
    for (let i = 0; i < 3; i++) {
        arr.push({
            ...param,
            taskItemId: Math.ceil((Math.random()-.5)*10000000+ Date.now()),
            subTaskCount: 0,
            index: i
        } as TaskItem) 
    }
    arr[0].taskItemName='待处理';
    arr[1].taskItemName='进行中';
    arr[2].taskItemName='已完成';
    return axios.post('/task/createTaskItem', {param,arr})
}

//新建一个任务列表param:{index:XXX,taskItemName:XXX,fileId:Number}
export const CreateANewTaskItemServer = (param: {
    index: Number,
    taskItemName: String,
    fileId: Number,
}) => {
    return axios.post('/task/createANewTaskItem', {
        ...param,
        taskItemId:Math.ceil((Math.random()-.5)*10000000+ Date.now()),
        subTaskCount:0,
    })
}

//删除一个任务列表
export const deleteATaskItemServer = (param: {fileId: Number , taskItemId: Number }) => {
    return axios.post('/task/deleteATaskItem', param)
}

// 查询一个项目文件下的任务列表
export const GetTaskItemServer = (param: { fileId: Number }) => {
    return axios.post('/task/getTaskItem', param)
}

//删除一个项目问价下所有的任务列表  和 任务列表下的子任务 ----在删除一个文件的时候
export const DeleteAllTaskItemAndSubTaskInAFileServer = (param : any) => {
    return axios.post('/task/deleteAllTaskItemAndSubTaskInAFile', param)
}


//新建一个子任务
export const CreateASubTaskServer = (param: {
    checked: Boolean, 
    deadline: String,
    fileId: Number,
    index: Number,
    taskItemId: Number
    subTaskName: String,
    subTaskId: String,
    tag: string[],
    urgencyLevel: '普通' | '紧急' | '非常紧急',
}) => {
    return axios.post('/task/createASubTask', param);
}


// 查询所有当前项目文件的任务列表的任务
export const GetAllSubTasksServer = (param: {fileId: Number}) => {
    return axios.post('/task/getAllSubTasks',param)
}


// 删除一个任务列表下的所有任务
export const DeleteAllSubTasksServer = (param: {fileId: Number, taskItemId: Number}) => {
    return axios.post('/task/deleteAllSubTasks', param)
}


// 修改某个任务列表的名字
export const ModifyATaskItemNameServer = (param: {fileId: Number , taskItemId: Number, taskItemName: String}) =>{
    return axios.post('/task/modifyATaskItemName',param)
}

// 复制 or 移动 一个任务列表的所有任务到另一个列表 MoveOrCopy:'move'/'copy'
export const MoveOrCopySubtaskToAnotherTaskItemServer = (param: {
    fileId: Number, 
    taskItemId: Number, 
    MoveOrCopy: 'move' | 'copy' ,
    currentTaskItemId: Number,
 }) => {
    return axios.post('/task/moveOrCopySubtaskToAnotherTaskItem',param)
}

// { taskItemId: Number, subTaskId: Number, checked: Boolean }
export const SwitchToCheckSubtaskServer = (param: { 
    taskItemId: Number, 
    subTaskId: Number, 
    checked: Boolean,
 }) => {
    return axios.post('/task/switchToCheckSubtask',param)
}