import request from '@/server/index';

export const files = {
    namespaced: true,
    state: {
        fileData: [],
    },
    mutations: {
        changeFileData(state: { fileData: fileDataType }, payload: fileDataType) {
            state.fileData = payload;
        },
    },
    actions: {
        async getFileData(context: any, params: { username: string }) {
            await request.fileApi.getAllFilesInfo(params).then((res: any) => {
                context.commit('changeFileData', res.data)
            });
        },
    }
};