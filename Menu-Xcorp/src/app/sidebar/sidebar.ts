export interface MenuItem {
    text: string;
    icon: string;
    route: string;
    children?: MenuItem[];
    open: boolean;
}
