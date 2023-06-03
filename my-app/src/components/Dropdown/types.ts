export interface PropsSetting {
    options:Array<DropdownOption>,
    selection?:string |undefined,
    handleChange:Function
}
export interface DropdownOption{
    label:string,
    value:any,
}