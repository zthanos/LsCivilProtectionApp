export class AppData{
    static tabList: { text: string, icon?: string, color?: string, backgroundColor: string, fadeColor?: string }[] = [
        { text: String.fromCharCode(0xf080), backgroundColor: '#5B37B7', color: '#000' },
        { text: String.fromCharCode(0xf075), backgroundColor: '#E6A938', color: '#000' },
        { text: String.fromCharCode(0xf259), backgroundColor: '#C9449D', color: '#000' },
        { text: String.fromCharCode(0xf1d8), backgroundColor: '#4195AA', color: '#000' },
        { text: String.fromCharCode(0xf073), backgroundColor: '#4A9F6E', color: '#000' }
    ];

    static GetTabColor(idx: number){
        return this.tabList[idx].backgroundColor;
    }

}