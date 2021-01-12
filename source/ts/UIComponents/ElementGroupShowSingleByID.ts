import { Utilities } from "../Utilities";

export class ElementGroupShowSingleByID
{
    constructor(public readonly Elements: Array<Element>,
        private readonly ShowFunction: (element: Element) => void = Utilities.ShowRemoveHidden,
        private readonly HideFunction: (element: Element) => void = Utilities.HideAddHidden)
    {
    }

    public Show(elementID: string)
    {
        Utilities.ShowElementOfGroupByID(elementID,
            this.Elements,
            this.ShowFunction,
            this.HideFunction);
    }
}