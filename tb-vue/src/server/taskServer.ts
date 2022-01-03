// 任务
import { requestMethod } from '@/utils/requestMethod';

type TaskItem = {
    username?: string,//用户的登录名
    fileId: number,//项目文件id
    taskItemId: number,//任务列表id
    taskItemName?: string,//任务列表名
    subTaskCount: number,//子任务数量
    index: number //按照 未完成-进行中-已完成 排序
};


// 首页新建任务后，新建任务下的默认的任务列表
export const CreateTaskItemServer = (param: { fileId: number }) => {
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
    return requestMethod('/task/createTaskItem', {param,arr})
}

//新建一个任务列表param:{index:XXX,taskItemName:XXX,fileId:number}
export const CreateANewTaskItemServer = (param: {
    index: number,
    taskItemName: string,
    fileId: number,
}) => {
    return requestMethod('/task/createANewTaskItem', {
        ...param,
        taskItemId:Math.ceil((Math.random()-.5)*10000000+ Date.now()),
        subTaskCount:0,
    })
}

//删除一个任务列表
export const deleteATaskItemServer = (param: {fileId: number , taskItemId: number }) => {
    return requestMethod('/task/deleteATaskItem', param)
}

// 查询一个项目文件下的任务列表
export const GetTaskItemServer = (param: { fileId: number }) => {
    return requestMethod('/task/getTaskItem', param)
}

//删除一个项目问价下所有的任务列表  和 任务列表下的子任务 ----在删除一个文件的时候
export const DeleteAllTaskItemAndSubTaskInAFileServer = (param : any) => {
    return requestMethod('/task/deleteAllTaskItemAndSubTaskInAFile', param)
}


//新建一个子任务
export const CreateASubTaskServer = (param: {
    checked: boolean, 
    deadline: string,
    fileId: number,
    index: number,
    taskItemId: number
    subTaskName: string,
    subTaskId: string,
    tag: string[],
    urgencyLevel: '普通' | '紧急' | '非常紧急',
}) => {
    return requestMethod('/task/createASubTask', param);
}


// 查询所有当前项目文件的任务列表的任务
export const GetAllSubTasksServer = (param: {fileId: number}) => {
    return requestMethod('/task/getAllSubTasks',param)
}


// 删除一个任务列表下的所有任务
export const DeleteAllSubTasksServer = (param: {fileId: number, taskItemId: number}) => {
    return requestMethod('/task/deleteAllSubTasks', param)
}


// 修改某个任务列表的名字
export const ModifyATaskItemNameServer = (param: {fileId: number , taskItemId: number, taskItemName: string}) =>{
    return requestMethod('/task/modifyATaskItemName',param)
}

// 复制 or 移动 一个任务列表的所有任务到另一个列表 MoveOrCopy:'move'/'copy'
export const MoveOrCopySubtaskToAnotherTaskItemServer = (param: {
    fileId: number, 
    taskItemId: number, 
    MoveOrCopy: 'move' | 'copy' ,
    currentTaskItemId: number,
 }) => {
    return requestMethod('/task/moveOrCopySubtaskToAnotherTaskItem',param)
}

// { taskItemId: number, subTaskId: number, checked: boolean }
export const SwitchToCheckSubtaskServer = (param: { 
    taskItemId: number, 
    subTaskId: number, 
    checked: boolean,
 }) => {
    return requestMethod('/task/switchToCheckSubtask',param)
}