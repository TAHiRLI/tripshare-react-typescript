export interface PropsSetting {
    options:Array<DropdownOption>,
    selection?:DropdownOption,
    handleChange:Function
}
export interface DropdownOption{
    label:string,
    value:any,
}