

export class TableModal{
    data: Array<any>;
    columns: Array<Columns>;
    enableSearch: boolean;

    constructor(data: Array<any>, columns: Array<Columns>, enableSearch: boolean = false){
        this.data = data ? data : [];
        this.columns = columns;
        this.enableSearch = enableSearch;
    }
}

export class Columns{
    id: string;
    value: string;
    type: string;

    constructor(id: string, value: string, type: string){
        this.id = id;
        this.value = value;
        this.type = type;
    }
}