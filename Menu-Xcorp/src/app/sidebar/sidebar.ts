export interface MenuItem {
    text: string;
    icon: string;
    children?: MenuItem[];
    open: boolean;
}
