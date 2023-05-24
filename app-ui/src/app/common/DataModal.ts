
export class DataModal{
    window: any;

    static object: DataModal;
    constructor(){
        this.window = null;
    }

    static getInstance(){
        if(!DataModal.object) DataModal.object = new DataModal();
        return DataModal.object;

    }
}