
export class Action{
    action: string;
    icon: string;

    constructor(action: string, icon: string){
        this.action = action;
        this.icon = icon;
    }
}

export class TableModal{
    data: Array<any>;
    columns: Array<Columns>;
    enableSearch: boolean;
    actions: Action[];

    constructor(data: Array<any>, columns: Array<Columns>, actions?: Action[], enableSearch: boolean = false){
        this.data = data ? data : [];
        this.columns = columns;
        this.enableSearch = enableSearch;
        this.actions = actions ? actions : [];
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