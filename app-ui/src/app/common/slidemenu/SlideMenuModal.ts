

export class SlideMenu{  
    label: string;
    icon?: string | null;
    func?: Function;
    url?: string;
    children?: Array<SlideMenu> = [];
    componentSelector?: string;

    constructor(label: string, componentSelector?: string, fun?: Function, url?: string, icon?: string, children?: Array<SlideMenu>){
        this.label = label;
        this.func = fun;
        this.url = url;
        this.icon = icon ? icon : null;
        this.children = children ? children : [];
        this.componentSelector = componentSelector ? componentSelector : ``;
    }
}